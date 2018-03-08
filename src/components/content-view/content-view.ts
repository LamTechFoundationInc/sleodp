import { Component, Input, ViewChild } from '@angular/core';
import { Events } from 'ionic-angular';
import { MapViewComponent } from '../../components/map-view/map-view';
import { TableViewComponent } from '../../components/table-view/table-view';
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
  @ViewChild(TableViewComponent) tableView: TableViewComponent;

  @Input('year') year;
  @Input('type') type;
  @Input('region') region;

  mapMode: boolean;
  resultRegion: string;

  results: any;

  nationAvailable: boolean;
  districtAvailable: boolean;
  constituencyAvailable: boolean;
  wardAvailable: boolean;
  pollingCentreAvailable: boolean;

  boundary: string;
  mapDisabled: boolean;

  constructor(public dataService: DataProvider, public events: Events) {
    this.mapMode = true;
    events.subscribe('boundary:select', (boundary) => {
      this.boundary = boundary;
    });

    events.subscribe('mapMode', (mapMode) => {
      this.mapMode = mapMode;
    })
  }

  ngAfterViewInit() {
  }

  setMapMode(mode) {
    this.mapMode = mode;
    this.mapDisabled = false;
    if (this.region == 'constituency' || this.region == 'ward' || this.region == 'polling_centre') this.mapDisabled = true;
    if (this.mapDisabled) this.mapMode = false

    if (this.mapMode == true && this.mapDisabled) return;

    this.events.publish('mapMode', this.mapMode);
    if (this.mapMode) {
      setTimeout((...args: any[]) => {
        if (this.mapView)
          this.setMapInit();
      }, 10);
    }
    else {
      setTimeout((...args: any[]) => {
        if (this.tableView)
          this.setTableInit(this.boundary);
      }, 10);
    }
  }

  seletGranularity(granularity) {
    this.dataService.setGranularity(granularity);
  }

  setContentView() {
    setTimeout((...args: any[]) => {
      this.setGranularityList();
      this.setMapMode(this.mapMode);
      this.setResultRegion(this.region);
    }, 10)
  }

  setMapInit() {
    if (this.mapView)
      this.mapView.drawMap();
  }

  setTableInit(boundary) {
    if (this.tableView)
      this.tableView.drawTable(boundary);
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
      case "polling_centre":
        this.resultRegion = "Result By Polling Centre";
        break;
      default:
        break;
    }
  }

  setGranularityList() {
    this.nationAvailable = false;
    this.districtAvailable = false;
    this.constituencyAvailable = false;
    this.wardAvailable = false;
    this.pollingCentreAvailable = false;

    if (this.type == "villageheadman") {
      this.pollingCentreAvailable = true;
    }
    else {
      if (this.year != '2018') {
        switch (this.type) {
          case "president":
            this.nationAvailable = true;
            this.districtAvailable = true;
            if (this.region != "nation" && this.region != "district")
              this.region = "nation";
            break;
          case "parliament":
            this.constituencyAvailable = true;
            if (this.region != "constituency")
              this.region = "constituency";
            break;
          case "mayor":
            this.districtAvailable = true;
            if (this.region != "district")
              this.region = "district"
            break;
          case "chairperson":
            this.districtAvailable = true;
            if (this.region != "district")
              this.region = "district"
            break;
          case "councilor":
            this.wardAvailable = true;
            if (this.region != "ward")
              this.region = "ward"
            break;
          default:
            // code...
            break;
        }
      }
      else {
        this.nationAvailable = true;
        this.districtAvailable = true;
        this.constituencyAvailable = true;
        this.wardAvailable = true;
        this.pollingCentreAvailable = true;
      }
    }
  }
}
