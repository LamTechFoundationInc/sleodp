import { Component, Input } from '@angular/core';
import { NavController, LoadingController, Events } from 'ionic-angular/index';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';

import { PartyProfilePage } from '../../pages/party-profile/party-profile';
import { CandidateProfilePage } from '../../pages/candidate-profile/candidate-profile';
import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the MapViewComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */

@Component({
	selector: 'map-view',
	templateUrl: 'map-view.html'
})
export class MapViewComponent {
	@Input('year') year;
	@Input('region') region;
	@Input('type') type;

	result: any;

	noWinner: boolean;
	isLoaded: Boolean;
	
	constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public dataService: DataProvider, public events: Events) {
		this.result = {
			'ResultStatus': "",
			'TotalVotes': "",
			'ValidVotes': "",
			'InvalidVotes': "",
			'Parties': {},
			'Candidates': {},
			'Boundaries': [],
			'ElectionResults': []
		};
		this.noWinner = true;
	}

	ngAfterViewInit() {
		this.isLoaded = false;
	}

	gotoPartyDetail(party) {
		this.navCtrl.push(PartyProfilePage, { party: party });
	}

	gotoCandidateDetail(candidate_id) {
		this.navCtrl.push(CandidateProfilePage, { candidate: this.result.Candidates[candidate_id] });
	}

	candidatesEnable() {
		return this.result.ElectionResults.length > 0;
	}

	transform2d(value, columns, limit) : any {
		let results = [];
		for (let i in value) {
			if (i >= limit) continue;
			if (Number(i) % columns == 0) {
				results.push([value[i]]);
			}
			else {
				results[results.length - 1].push(value[i]);
			}
		}

		return results;
	}

	setPhotoUrl(photo) {
		return "assets/imgs/candidate/" + photo;
	}

	colorFilter(_color) {
		var default_color = "#999";
		var colors = ["Pink", "Orange", "Green", "Red", "Blue", "Purple", "Yellow"];
		var color = _color.trim();
		if (!color) return default_color;
		if (color.split(',').length > 1) {
			return color.split(',')[0];
		}
		if (colors.indexOf(color.charAt(0).toUpperCase() + color.slice(1)) > -1) {
			return color;
		}
		return "#" + color;
	}

	makeKey(value) {
		return value.toLowerCase().replace(/\ /gi, '_');
	}

	otherPercent(candidates) {
		return (100.0 - parseFloat(candidates[0].ValidVotesPercentage) - parseFloat(candidates[1].ValidVotesPercentage)).toFixed(2);
	}

	drawMap() {
		var fields = {
			year: this.year,
			type: this.type,
			region: this.region
		}

		var vm = this;

		// Create the popup
		let loadingPopup = vm.loadingCtrl.create({
			content: 'Loading data...'
		});

		// Show the popup
		loadingPopup.present();

		this.dataService.loadResultsByFields(fields).then(data => {
			var Parties = data['Parties'];
			vm.result.Candidates = data['Candidates'];
			vm.result.Boundaries = data['Boundaries'];
			
			vm.result.ElectionResults = [];
			if (vm.result.Boundaries.length > 0) {
				vm.result.ElectionResults = vm.result.Boundaries[0].candidates;
				vm.result.TotalVotes = vm.result.Boundaries[0].votes;
				vm.result.ValidVotes = vm.result.Boundaries[0].votes;
				vm.events.publish('boundary:select', vm.result.Boundaries[0].name);
				console.log(data);
				vm.result.Parties = {};
				if (vm.result.Boundaries[0].candidates[0]['ValidVotes'] > 0) {
					vm.noWinner = false;
				}
				else {
					vm.noWinner = true;
				}
				for (let candidate of vm.result.Boundaries[0].candidates) {
					vm.result.Parties[candidate['CandidatePoliticalParty']] = Parties[candidate['CandidatePoliticalParty']];
				}
			}

			let mapContainer = vm.year+"_map";

		    var suffix = '';
		    if (vm.year == '2018' && vm.region == 'district')
		    	suffix = "-2018";

		    let sourceUrl = 'assets/maps/' + vm.region + suffix + '.geojson';

		    // Map Init
		  	mapboxgl.accessToken = 'pk.eyJ1Ijoicm9tYW5qaW4iLCJhIjoiY2pkaXFleWJrMG9rNDJxcHJrNXNnN2d4NiJ9.sRB7ZJ05xbMZYyw5YvO7SQ';
			var map = new mapboxgl.Map({
				style: 'mapbox://styles/mapbox/light-v9',
				center: [-11.779889, 8.460555],
				zoom: 5.5,
				attributionControl: false,
				container: mapContainer
			});

			map.on('load', function () {
				// Add a layer showing the state polygons.
				if (vm.region == "nation" || vm.region == "district") {
					map.addSource("map-layer", {
						'type': 'geojson',
						'data': sourceUrl
					});

					var color, key, count = 0, boundary_highlighted = "";
					for(let boundary of vm.result.Boundaries) {
						key = vm.makeKey(boundary.name);
						color = vm.colorFilter(boundary.candidates[0].CandidatePoliticalPartyColor);
						map.addLayer({
							'id': key,
							'type': 'fill',
							'source': "map-layer",
							'paint': {
							    'fill-color': color,
							    'fill-outline-color': 'rgba(255, 255, 255, 1)',
							    "fill-opacity": 0.2,
							},
							"filter": ["in", "Name", boundary.name]
						});

						if (count == 0) {
							boundary_highlighted = boundary.name;
						}
						map.addLayer({
							"id": key + "-highlighted",
							"type": "fill",
							"source": "map-layer",
							"paint": {
							    'fill-color': color,
							    'fill-outline-color': 'rgba(255, 255, 255, 0.5)',
							    "fill-opacity": 0.5
							},
							"filter": ["in", "Name", boundary_highlighted]
						});
						count++;
					}

					map.addLayer({
						'id': 'map-line',
						'type': 'line',
						'source': "map-layer",
						'paint': {
							'line-width': 2,
							'line-color': 'rgba(255, 255, 255, 1)'
						},
					});

					// When a click event occurs on a feature in the states layer, open a popup at the
					// location of the click, with description HTML from its properties.
					map.on('click', function(e) {
						// set bbox as 5px reactangle area around clicked point
						var features, filter;
						
						count = 0;
						for(let boundary of vm.result.Boundaries) {
							key = vm.makeKey(boundary.name);
							features = map.queryRenderedFeatures(e.point, { layers: [key] });

							filter = features.reduce(function(memo, feature) {
							    memo.push(feature.properties.Name);
							    vm.result.ElectionResults = boundary.candidates;
							    vm.result.TotalVotes = boundary.votes;
							    vm.result.ValidVotes = boundary.votes;
							    if (boundary.votes > 0) vm.noWinner = false;
							    else vm.noWinner = true;
							    vm.events.publish('boundary:select', boundary.name);
							    return memo;
							}, ['in', 'Name']);

							map.setFilter(key+"-highlighted", filter);

							if (features.length > 0)
								new mapboxgl.Popup()
									.setLngLat(e.lngLat)
									.setHTML(features[0].properties.Name)
									.addTo(map);
							count++;
						}
					});
				}
				else {
					vm.result.Boundaries.forEach(function(marker, index) {
						var el = document.createElement('div');
						var popup = new mapboxgl.Popup()
							.setText(marker.name);
						el.className = 'marker';
						el.style.backgroundImage = 'url(https://static.tonicdev.com/assets/vendor/leaflet/images/marker-icon.png)';
						el.style.backgroundRepeat = 'no-repeat';
						el.style.backgroundSize = 'cover';
						el.style.width = '20px';
						el.style.height = '30px';
						el.addEventListener('click', function() {
							vm.result.ElectionResults = marker.candidates;
						    vm.result.TotalVotes = marker.votes;
						    vm.result.ValidVotes = marker.votes;
						    if (marker.votes > 0) vm.noWinner = false;
							else vm.noWinner = true;
						    vm.events.publish('boundary:select', marker.name);
						});


						// add marker to map
						new mapboxgl.Marker(el)
							.setLngLat([marker.longitude, marker.latitude])
							.setPopup(popup)
							.addTo(map);
					});
				}

				map.addControl(new mapboxgl.NavigationControl());

				loadingPopup.dismiss();
			});
		});
	}
}