import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

let election_results: Array<object> = require('../../assets/results/results.json');

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {
  parties: any;
  election_years: any;
  election_results: any;

  private granularitySubject = new Subject<any>();

  constructor(public http: HttpClient) {
  }

  loadParties() {
    if (this.parties) {
      return Promise.resolve(this.parties);
    }

    return new Promise(resolve => {
      this.http.get('https://electiondata.io/resources/political-parties/all')
      .subscribe(data => {
        console.log(data);
        this.parties = data;
        resolve(this.parties);
      });
    });
  }

  loadElectionYears() {
    this.loadParties();
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
    });
  }

  loadResultsByFields(fields) {
    var result = {};
    var isYear = false;
    var isType = false;
    var isRegion = false;
    var date = "";
    var date_position = -1;
    var date_string = "";

    var temp_results = election_results.filter(result => {
      date_position = result["ElectionDate"].indexOf(">");
      if (date_position != -1) {
        date = result["ElectionDate"].substring(date_position+1, date_position+11);
      }

      switch (fields.type) {
        case "president":
          isType = result["ElectionType"] == "Presidential";
          break;
        case "parliament":
          isType = result["ElectionType"] == "Parliamentary";
          break;
        case "mayor":
          isType = result["ElectionType"] == "Mayoral";
          break;
        case "chairperson":
          isType = result["ElectionType"] == "District Chairperson";
          break;
        case "councilor":
          isType = result["ElectionType"] == "District Councilor";
          break;
        case "villageheadman":
          isType = result["ElectionType"] == "Village Headman";
          break;
        default:
          break;
      }
      if (!isType) return;
    });

    result['ResultStatus'] = "Provisional";
    result['TotalVotes'] = "310";
    result['ValidVotes'] = "300";
    result['InvalidVotes'] = "10";
    result['electionParties'] = [];
    return result;
  }

  setGranularity(data: string) {
    this.granularitySubject.next(data);
  }

  getGranularity(): Observable<any> {
    return this.granularitySubject.asObservable();
  }
}
