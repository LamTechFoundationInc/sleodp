import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  presidents: any;

  constructor(public http: HttpClient) {
    console.log('Hello DataProvider Provider');
  }

  loadPresidents() {
    if (this.presidents) {
      return Promise.resolve(this.presidents);
    }
 
 	this.presidents = [
      { year: 2012},
      { year: 2013},
      { year: 2014}
    ];

    return new Promise(resolve => {
		  resolve(this.presidents);
		// this.http.get('path/to/data.json')
		//   .map(res => res.json())
		//   .subscribe(data => {
		//     this.presidents = data;
		//     resolve(this.presidents);
		//   });
    });
  }
}
