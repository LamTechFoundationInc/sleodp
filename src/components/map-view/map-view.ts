import { Component, Input } from '@angular/core';
import { LoadingController } from 'ionic-angular/index';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';
import { DataProvider } from '../../providers/data/data';

import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the MapViewComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Pipe({
  name: 'keys'
})
@Component({
	selector: 'map-view',
	templateUrl: 'map-view.html'
})
export class MapViewComponent implements PipeTransform {
	@Input('year') year;
	@Input('region') region;
	@Input('type') type;

	result: any;
	
	isLoaded: Boolean;
	
	constructor(public loadingCtrl: LoadingController, public dataService: DataProvider) {
		this.result = {
			'ResultStatus': "",
			'TotalVotes': "",
			'ValidVotes': "",
			'InvalidVotes': "",
			'Parties': [],
			'Boundaries': [],
			'Candidates': []
		};
	}

	ngAfterViewInit() {
		this.isLoaded = false;
	}

	transform(value, args:string[]) : any {
		let keys = [];
		for (let key in value) {
			keys.push({key: key, value: value[key]});
		}
		return keys;
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
		return "https://elections.sl/" + photo;
	}

	colorFilter(color) {
		var default_color = "#999";
		var colors = ["Pink", "Orange", "Green", "Red", "Blue", "Purple", "Yellow"];
		if (!color) return default_color;
		if (color.split(', ').length > 1) {
			return color.split(', ')[0];
		}
		if (colors.indexOf(color.charAt(0).toUpperCase() + color.slice(1)) > -1) {
			return color;
		}
		return "#" + color;
	}

	makeKey(value) {
		return value.toLowerCase().replace(/\ /gi, '_');
	}

	currentPercent(candidates) {
		return (100.0 - parseFloat(candidates[0].percent) - parseFloat(candidates[1].percent)).toFixed(2);
	}

	drawMap() {
		var fields = {
			year: this.year,
			type: this.type,
			region: this.region
		}

		var vm = this;

		this.dataService.loadResultsByFields(fields).then(data => {
			// vm.result = data;
			vm.result.ResultStatus = data['ResultStatus'];
			vm.result.TotalVotes = data['TotalVotes'];
			vm.result.ValidVotes = data['ValidVotes'];
			vm.result.Parties = data['Parties'];
			vm.result.Boundaries = data['Boundaries'];
			
			vm.result.Candidates = [];
			if (vm.region == "nation" && vm.result.Boundaries.length > 0) {
				vm.result.Candidates = vm.result.Boundaries[0].candidates;
			}

			let mapContainer = vm.year+"_map";
		  	// Create the popup
		    let loadingPopup = vm.loadingCtrl.create({
		      content: 'Loading data...'
		    });

		    // Show the popup
		    loadingPopup.present();

		    let sourceUrl = 'assets/maps/' + vm.region + '.geojson';

		    // Map Init
		  	mapboxgl.accessToken = 'pk.eyJ1Ijoicm9tYW5qaW4iLCJhIjoiY2pkaXFleWJrMG9rNDJxcHJrNXNnN2d4NiJ9.sRB7ZJ05xbMZYyw5YvO7SQ';
			var map = new mapboxgl.Map({
				style: 'mapbox://styles/mapbox/light-v9',
				center: [-11.779889, 8.460555],
				zoom: 6.2,
				attributionControl: false,
				container: mapContainer
			});

			map.on('load', function () {
				// Add a layer showing the state polygons.
				map.addSource("map-layer", {
					'type': 'geojson',
					'data': sourceUrl
				});

				var color;
				var key;
				for(let boundary of vm.result.Boundaries) {
					key = vm.makeKey(boundary.name);
					color = vm.colorFilter(boundary.candidates[0].color);
					map.addLayer({
						'id': key,
						'type': 'fill',
						'source': "map-layer",
						'paint': {
						    'fill-color': color,
						    'fill-outline-color': 'rgba(255, 255, 255, 1)',
						    "fill-opacity": 0.3,
						},
						"filter": ["in", "Name", boundary.name]
					});

					map.addLayer({
						"id": key + "-highlighted",
						"type": "fill",
						"source": "map-layer",
						"paint": {
						    'fill-color': color,
						    'fill-outline-color': 'rgba(255, 255, 255, 0.5)',
						    "fill-opacity": 1.0
						},
						"filter": ["in", "Name", boundary.name]
					});
				}

				map.addLayer({
					'id': 'map-line',
					'type': 'line',
					'source': "map-layer",
					'paint': {
						'line-width': 3,
						'line-color': 'rgba(255, 255, 255, 1)'
					},
				});

				// When a click event occurs on a feature in the states layer, open a popup at the
				// location of the click, with description HTML from its properties.
				map.on('click', function(e) {
					// set bbox as 5px reactangle area around clicked point
					var features, filter;
					
					for(let boundary of vm.result.Boundaries) {
						key = vm.makeKey(boundary.name);
						features = map.queryRenderedFeatures(e.point, { layers: [key] });

						filter = features.reduce(function(memo, feature) {
						    memo.push(feature.properties.Name);
						    vm.result.Candidates = boundary.candidates;
						    vm.result.TotalVotes = boundary.votes;
						    vm.result.ValidVotes = boundary.votes;
						    return memo;
						}, ['in', 'Name']);

						map.setFilter(key+"-highlighted", filter);
					}
				
				});

				// disable map zoom when using scroll
				map.scrollZoom.disable();
				map.doubleClickZoom.disable();

				loadingPopup.dismiss();
			});
		});
	}
}
