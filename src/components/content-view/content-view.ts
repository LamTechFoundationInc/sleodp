import { Component, Input, Output, EventEmitter } from '@angular/core';

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

  mapMode: boolean;
  resultRegion: string;

  @Input('year') year;
  @Input('type') type;

  constructor() {
  	this.resultRegion = "National Results";
  	this.setMapMode(true);
  }

  ngAfterViewInit() {
  }

  setMapMode(mode) {
  	this.mapMode = mode;
  }
}
