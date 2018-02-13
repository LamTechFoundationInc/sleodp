import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the RangeViewComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'range-view',
  templateUrl: 'range-view.html'
})
export class RangeViewComponent {

  constructor(public viewCtrl: ViewController, public dataService: DataProvider) {
  }

  seletGranularity(granularity) {
    this.dataService.setGranularity(granularity);
  	this.viewCtrl.dismiss();
  }

}
