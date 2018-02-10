import { Component, Input, Output, EventEmitter } from '@angular/core';

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
  
  @Input('resultRegion') resultRegion;
  
  constructor() {
    console.log('Hello MapViewComponent Component');
  }

}
