import { Component, Input } from '@angular/core';
import { LoadingController } from 'ionic-angular/index';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';

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
  @Input('resultRegion') resultRegion;
  
  isLoaded: Boolean;
  
  constructor(public loadingCtrl: LoadingController) {
    console.log('Hello MapViewComponent Component');
    
  }

  ngAfterViewInit() {
  	this.isLoaded = false;
  }

  drawMap() {
  	if (!this.isLoaded) {
  		this.isLoaded = true;
		let mapContainer = this.year+"_map";
	  	// Create the popup
	    let loadingPopup = this.loadingCtrl.create({
	      content: 'Loading data...'
	    });

	    // Show the popup
	    loadingPopup.present();

	    // Map Init
	  	mapboxgl.accessToken = 'pk.eyJ1Ijoicm9tYW5qaW4iLCJhIjoiY2pkaXFleWJrMG9rNDJxcHJrNXNnN2d4NiJ9.sRB7ZJ05xbMZYyw5YvO7SQ';
			var map = new mapboxgl.Map({
				style: 'mapbox://styles/mapbox/light-v9',
				center: [-11.779889, 8.460555],
				zoom: 6.3,
				container: mapContainer
			});

			map.on('load', function () {
			// Add a layer showing the state polygons.
			map.addSource("districts-layer", {
			'type': 'geojson',
			'data': '../../assets/maps/SLE_adm2_simp_001.json'
			});
			map.addLayer({
			'id': 'disctricts',
			'type': 'fill',
			'source': "districts-layer",
			'paint': {
			    'fill-color': 'rgba(100, 0, 0, 1)',
			    'fill-outline-color': 'rgba(255, 255, 255, 0.5)',
			    "fill-opacity": 0.3
			}
			});

			map.addLayer({
				"id": "disctricts-highlighted",
				"type": "fill",
				"source": "districts-layer",
				"paint": {
				    'fill-color': 'rgba(100, 0, 0, 1)',
				    'fill-outline-color': 'rgba(255, 255, 255, 0.5)',
				    "fill-opacity": 1.0
				},
				"filter": ["in", "NAME_2", ""]
				});

				// When a click event occurs on a feature in the states layer, open a popup at the
				// location of the click, with description HTML from its properties.
			map.on('click', function(e) {
				// set bbox as 5px reactangle area around clicked point
				var bbox = [[e.point.x - 5, e.point.y - 5], [e.point.x + 5, e.point.y + 5]];
				var features = map.queryRenderedFeatures(bbox, { layers: ['disctricts'] });
				// Run through the selected features and set a filter
				// to match features with unique FIPS codes to activate
				// the `disctricts-highlighted` layer.
				var filter = features.reduce(function(memo, feature) {
				    memo.push(feature.properties.NAME_2);
				    return memo;
				}, ['in', 'NAME_2']);

				map.setFilter("disctricts-highlighted", filter);
				});

				// disable map zoom when using scroll
				map.scrollZoom.disable();
				map.doubleClickZoom.disable();
			});

			loadingPopup.dismiss();
  	}
  }
}
