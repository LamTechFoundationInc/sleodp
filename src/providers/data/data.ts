import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  presidents: any;
  pariaments: any;
  mayors: any;
  chairpersons: any;
  councilors: any;
  village_headmans: any;

  private granularitySubject = new Subject<any>();

  constructor(public http: HttpClient) {
  }

  loadPresidents() {
    if (this.presidents) {
      return Promise.resolve(this.presidents);
    }
 
 	  this.presidents = [
      { year: 2018},
      { year: 2012},
      { year: 2007},
      { year: 2002},
      { year: 1996}
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

  loadParliaments() {
    if (this.pariaments) {
      return Promise.resolve(this.pariaments);
    }
 
     this.pariaments = [
      { year: 2018},
      { year: 2012},
      { year: 2007},
      { year: 2002},
      { year: 1996}
    ];

    return new Promise(resolve => {
      resolve(this.pariaments);
    // this.http.get('path/to/data.json')
    //   .map(res => res.json())
    //   .subscribe(data => {
    //     this.pariaments = data;
    //     resolve(this.pariaments);
    //   });
    });
  }

  loadMayors() {
    if (this.mayors) {
      return Promise.resolve(this.mayors);
    }
 
     this.mayors = [
      { year: 2018},
      { year: 2012},
      { year: 2007},
      { year: 2002},
      { year: 1996}
    ];

    return new Promise(resolve => {
      resolve(this.mayors);
    // this.http.get('path/to/data.json')
    //   .map(res => res.json())
    //   .subscribe(data => {
    //     this.mayors = data;
    //     resolve(this.mayors);
    //   });
    });
  }

  loadChairpersons() {
    if (this.chairpersons) {
      return Promise.resolve(this.chairpersons);
    }
 
     this.chairpersons = [
      { year: 2018},
      { year: 2012},
      { year: 2007},
      { year: 2002},
      { year: 1996}
    ];

    return new Promise(resolve => {
      resolve(this.chairpersons);
    // this.http.get('path/to/data.json')
    //   .map(res => res.json())
    //   .subscribe(data => {
    //     this.chairpersons = data;
    //     resolve(this.chairpersons);
    //   });
    });
  }

  loadCouncilors() {
    if (this.councilors) {
      return Promise.resolve(this.councilors);
    }
 
     this.councilors = [
      { year: 2018},
      { year: 2012},
      { year: 2007},
      { year: 2002},
      { year: 1996}
    ];

    return new Promise(resolve => {
      resolve(this.councilors);
    // this.http.get('path/to/data.json')
    //   .map(res => res.json())
    //   .subscribe(data => {
    //     this.councilors = data;
    //     resolve(this.councilors);
    //   });
    });
  }

  loadVillageHeadmans() {
    if (this.village_headmans) {
      return Promise.resolve(this.village_headmans);
    }
 
     this.village_headmans = [
      { year: 2018},
      { year: 2012},
      { year: 2007},
      { year: 2002},
      { year: 1996}
    ];

    return new Promise(resolve => {
      resolve(this.village_headmans);
    // this.http.get('path/to/data.json')
    //   .map(res => res.json())
    //   .subscribe(data => {
    //     this.village_headmans = data;
    //     resolve(this.village_headmans);
    //   });
    });
  }

  setGranularity(data: string) {
    this.granularitySubject.next(data);
  }

  getRegion(): Observable<any> {
    return this.granularitySubject.asObservable();
  }
}
