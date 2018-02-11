import { Component, Input } from '@angular/core';

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

  @Input('year') year;
  @Input('resultRegion') resultRegion;

  datas: any;

  constructor() {
    console.log('Hello TableViewComponent Component');
    this.datas = [{
  		name: 'Kamara Samura',
  		party: 'APC',
  		votes: '640',
  		percent: '40'
  	},{
  		name: 'Bio Julius',
  		party: 'SLPP',
  		votes: '480',
  		percent: '30'
  	},{
  		name: 'Yumkella Kandeh',
  		party: 'NGC',
  		votes: '240',
  		percent: '15'
  	},{
  		name: 'Manasaray Mohamed',
  		party: 'ADP',
  		votes: '120',
  		percent: '7.5'
  	},{
  		name: 'Sam-Sumana Samuel',
  		party: 'C4C',
  		votes: '60',
  		percent: '3.75'
  	},{
  		name: 'Maigai Charles',
  		party: 'PMDC',
  		votes: '16',
  		percent: '1'
  	}];
  }

  ngAfterViewInit() {
  	
  }

}
