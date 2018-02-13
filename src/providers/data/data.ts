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

  election_years: any;
  parties: any;

  private granularitySubject = new Subject<any>();

  constructor(public http: HttpClient) {
  }

  loadElectionYears() {
    if (this.election_years) {
      return Promise.resolve(this.election_years);
    }
 
     this.election_years = [
      { year: 2018},
      { year: 2012},
      { year: 2007},
      { year: 2002},
      { year: 1996}
    ];

    return new Promise(resolve => {
      resolve(this.election_years);
    // this.http.get('path/to/data.json')
    //   .map(res => res.json())
    //   .subscribe(data => {
    //     this.election_years = data;
    //     resolve(this.election_years);
    //   });
    });
  }

  loadParties() {
    if (this.parties) {
      return Promise.resolve(this.parties);
    }
 
    this.parties = [
      { name: "APC", color: "#cf2a27" },
      { name: "ADP", color: "#ff00ff" },
      { name: "CDP", color: "#ffff00" },
      { name: "C4C", color: "#999999" },
      { name: "NDA", color: "#009e0f" },
      { name: "NGC", color: "#cc0000" },
      { name: "NPD", color: "#2b78e4" },
      { name: "NURP", color: "#999999" },
      { name: "PLP", color: "#6fa8dc" },
      { name: "PMDC", color: "#ff9900" },
      { name: "ReNIP", color: "#999999" },
      { name: "RUFP", color: "#999999" },
      { name: "SLPP", color: "#009e0f" },
      { name: "UDM", color: "#999999" },
      { name: "UNPP", color: "#ffff00" },
      { name: "UP", color: "#6fa8dc" }
    ];

    return new Promise(resolve => {
      resolve(this.parties);
    });
  }

  setGranularity(data: string) {
    this.granularitySubject.next(data);
  }

  getGranularity(): Observable<any> {
    return this.granularitySubject.asObservable();
  }
}
