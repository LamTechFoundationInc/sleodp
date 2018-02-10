import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the TableViewComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'table-view',
  templateUrl: 'table-view.html'
})
export class TableViewComponent {

  @Input('resultRegion') resultRegion;

  constructor() {
    console.log('Hello TableViewComponent Component');
  }

}
