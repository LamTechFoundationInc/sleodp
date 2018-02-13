import { Component, Input } from '@angular/core';
import { LoadingController } from 'ionic-angular/index';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';
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

	isLoaded: Boolean;
	
	constructor(public loadingCtrl: LoadingController, public dataService: DataProvider) {
		this.result = {
			'ResultStatus': "",
			'TotalVotes': "",
			'ValidVotes': "",
			'InvalidVotes': "",
			'electionParties': []
		};
	}

	ngAfterViewInit() {
		this.isLoaded = false;
	}
	
	loadResults() {		
		var fields = {
			year: this.year,
			type: this.type,
			region: this.region
		}

		this.result = this.dataService.loadResultsByFields(fields);
	}

	drawMap() {
		let mapContainer = this.year+"_map";
	  	// Create the popup
	    let loadingPopup = this.loadingCtrl.create({
	      content: 'Loading data...'
	    });

	    // Show the popup
	    loadingPopup.present();

	    let sourceUrl = 'assets/maps/' + this.region + '.geojson';

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
			map.addLayer({
				'id': 'map',
				'type': 'fill',
				'source': "map-layer",
				'paint': {
				    'fill-color': 'rgba(100, 0, 0, 1)',
				    'fill-outline-color': 'rgba(255, 255, 255, 1)',
				    "fill-opacity": 0.3,

				},
			});
			map.addLayer({
				'id': 'map-line',
				'type': 'line',
				'source': "map-layer",
				'paint': {
					'line-width': 3,
					'line-color': 'rgba(255, 255, 255, 1)'
				},
			});
			map.addLayer({
				"id": "map-highlighted",
				"type": "fill",
				"source": "map-layer",
				"paint": {
				    'fill-color': 'rgba(100, 0, 0, 1)',
				    'fill-outline-color': 'rgba(255, 255, 255, 0.5)',
				    "fill-opacity": 1.0
				},
				"filter": ["in", "Name", ""]
			});

			// When a click event occurs on a feature in the states layer, open a popup at the
			// location of the click, with description HTML from its properties.
			map.on('click', function(e) {
				// set bbox as 5px reactangle area around clicked point
				var bbox = [[e.point.x, e.point.y], [e.point.x, e.point.y]];
				var features = map.queryRenderedFeatures(bbox, { layers: ['map'] });
				// Run through the selected features and set a filter
				// to match features with unique FIPS codes to activate
				// the `map-highlighted` layer.
				var filter = features.reduce(function(memo, feature) {
				    memo.push(feature.properties.Name);
				    return memo;
				}, ['in', 'Name']);

				map.setFilter("map-highlighted", filter);
			});

			// disable map zoom when using scroll
			map.scrollZoom.disable();
			map.doubleClickZoom.disable();

			loadingPopup.dismiss();
		});
	}
}
