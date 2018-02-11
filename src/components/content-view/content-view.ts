import { Component, Input, ViewChild } from '@angular/core';
import { MapViewComponent } from '../../components/map-view/map-view';
/**
 * Generated class for the ContentViewComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'content-view',
  templateUrl: 'content-view.html'
})
export class ContentViewComponent {
  @ViewChild(MapViewComponent) mapView: MapViewComponent;

  @Input('year') year;
  @Input('type') type;

  mapMode: boolean;
  firstTime: boolean;
  resultRegion: string;

  constructor() {
  	this.resultRegion = "National Results";
    this.firstTime = true;
  	this.setMapMode(true);
  }

  ngAfterViewInit() {
  }

  setMapMode(mode) {
  	this.mapMode = mode;
    if (this.firstTime) {
      this.firstTime = false;
    }
    else {
      if (this.mapMode)
        this.setMapInit();
    }
  }

  setMapInit() {
    setTimeout((...args: any[]) => {
      this.mapView.drawMap();
    }, 10)
  }
}
