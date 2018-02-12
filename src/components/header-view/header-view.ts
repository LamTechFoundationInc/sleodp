import { Component } from '@angular/core';
import { PopoverController } from 'ionic-angular';
import { RangeViewComponent } from '../range-view/range-view';

/**
 * Generated class for the HeaderViewComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'header-view',
  templateUrl: 'header-view.html'
})
export class HeaderViewComponent {

  text: string;

  constructor(public popoverCtrl: PopoverController) {
    console.log('Hello HeaderViewComponent Component');
  }

  selectRange(event) {
  	let popover = this.popoverCtrl.create(RangeViewComponent);
    popover.present({
    	ev: event
    });
  }

}
