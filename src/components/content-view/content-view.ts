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
  @Input('region') region;

  mapMode: boolean;
  firstTime: boolean;
  resultRegion: string;

  constructor() {
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
      if (this.mapMode) {
        setTimeout((...args: any[]) => {
          this.setMapInit(this.region);
        }, 10);
      }
    }
  }

  setContentView() {
    setTimeout((...args: any[]) => {
      this.setMapInit(this.region);
      this.setTableInit(this.region);
      this.setResultRegion(this.region);
    }, 10)
  }

  setMapInit(region) {
    if (this.mapView)
      this.mapView.drawMap();
  }

  setTableInit(region) {

  }

  setResultRegion(region) {
    switch (this.region) {
      case "nation":
        this.resultRegion = "National Results";
        break;
      case "district":
        this.resultRegion = "Results By District";
        break;
      case "constituency":
        this.resultRegion = "Results By Constituency";
        break;
      case "ward":
        this.resultRegion = "Result By Ward";
        break;
      case "polling_center":
        this.resultRegion = "Result By Polling Center";
        break;
      case "polling_station":
        this.resultRegion = "Result By Polling Station";
        break;
      default:
        this.resultRegion = "";
        break;
    }
  }
}
