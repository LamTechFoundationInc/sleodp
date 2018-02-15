import { Component, Input, ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';
import { MapViewComponent } from '../../components/map-view/map-view';
import { DataProvider } from '../../providers/data/data';

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

  results: any;
  
  isTablet: Boolean;
  isDesktop: Boolean;
  
  constructor(public dataService: DataProvider, public plt: Platform) {
    this.isTablet = this.plt.is('tablet');
    this.isDesktop = this.plt.is('core');
    
    this.firstTime = true;
    this.setMapMode(true);
  }

  ngAfterViewInit() {
  }

  setMapMode(mode) {
    if (this.mapMode == mode) return;

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

  seletGranularity(granularity) {
    this.dataService.setGranularity(granularity);
  }

  setContentView(region) {
    setTimeout((...args: any[]) => {
      this.setMapInit(region);
      this.setTableInit(region);
      this.setResultRegion(region);
    }, 10)
  }

  setMapInit(region) {
    if (this.mapView) {
      this.mapView.drawMap();
    }
  }

  setTableInit(region) {

  }

  setResultRegion(region) {
    switch (region) {
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
      case "polling_station":
        this.resultRegion = "Result By Polling Station";
        break;
      default:
        break;
    }
  }
}
