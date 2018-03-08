import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import waterfall from 'async/waterfall';

let parties = require('../../assets/resources/all-political-parties.json');
let candidates = require('../../assets/resources/all-candidates.json');

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {
  parties_json: any;
  candidates_json: any;
  polling_centres_json: any;
  results = {};
  whole_results = {};

  year: any;

  private granularitySubject = new Subject<any>();

  constructor(public http: Http) {
    this.parties_json = this.toPartiesJson(parties);
    this.candidates_json = this.toCandidatesJson(candidates);
  }

  getFileStatus(path: string) {
    
  }

  setYear(year) {
    this.year = year;
  }

  getYear() {
    return this.year ? this.year: "";
  }

  loadWholeResults() {
    if ( Object.keys(this.whole_results).length > 0 ) {
      return Promise.resolve(this.whole_results)
    }
    else {
      return new Promise(resolve => {
        this.http.get('/election_results').subscribe (response => {
          this.whole_results = JSON.parse(response['_body'])
          this.polling_centres_json = this.toPollingCentresJson(this.whole_results['polling_centre']);
          resolve(this.whole_results);
        });
      })
    }
  }

  loadResultsByType(fields) {
    if (this.results[fields.type][fields.year] && this.results[fields.type][fields.year]['all'])
      return Promise.resolve(this.results[fields.type][fields.year]['all']);

    return new Promise(resolve => {
      this.loadWholeResults().then(data => {
        var type_results = Number(fields.year) >= 2018 ? data[fields.type+'_'+fields.year] : data[fields.type];
        this.results[fields.type][fields.year] = {};
        this.results[fields.type][fields.year]['all'] = this.getResultsByYear(type_results, fields.year)
        resolve('ok');
      })
    });
  }

  loadResultsByFields(fields) {
    var vm = this;

    return new Promise(resolve => {
      waterfall([
        function(callback) {
          if (!(vm.results[fields.type] && vm.results[fields.type][fields.year])) {
            if (!vm.results[fields.type]) 
              vm.results[fields.type] = {};
            vm.loadResultsByType(fields).then(data => {
              callback(null);
            });
          }
          else
            callback(null);
        },
        function(callback) {
          if (!vm.results[fields.type][fields.year][fields.region]) {
            var year = Number(fields.year);
            if (year >= 2018) {
              if (!vm.results[fields.type][fields.year]['polling_centre'])
                vm.results[fields.type][fields.year]['polling_centre'] = vm.makeResultsByBoundary(vm.results[fields.type][fields.year]['all'], {year: fields.year, region: 'polling_centre'});
              if (!vm.results[fields.type][fields.year]['ward'])
                vm.results[fields.type][fields.year]['ward'] = vm.makeResultsByBoundary(vm.mergeResultsByBoundary(vm.results[fields.type][fields.year]['polling_centre'], "ward", fields.year), {year: fields.year, region: 'ward'});
              if (!vm.results[fields.type][fields.year]['constituency'])
                vm.results[fields.type][fields.year]['constituency'] = vm.makeResultsByBoundary(vm.mergeResultsByBoundary(vm.results[fields.type][fields.year]['ward'], "constituency", fields.year), {year: fields.year, region: 'constituency'});
              if (!vm.results[fields.type][fields.year]['district'])
                vm.results[fields.type][fields.year]['district'] = vm.makeResultsByBoundary(vm.mergeResultsByBoundary(vm.results[fields.type][fields.year]['constituency'], "district", fields.year), {year: fields.year, region: 'district'});
              if (!vm.results[fields.type][fields.year]['nation'])
                vm.results[fields.type][fields.year]['nation'] = vm.makeResultsByBoundary(vm.mergeResultsByBoundary(vm.results[fields.type][fields.year]['district'], "nation", fields.year), {year: fields.year, region: 'nation'});
            }
            else {
              vm.results[fields.type][fields.year][fields.region] = vm.makeResultsByBoundary(vm.results[fields.type][fields.year]['all'], fields);
            }
          }
          
          var total_votes = 0;
          if (vm.results[fields.type][fields.year][fields.region].length > 0)
          {
            vm.results[fields.type][fields.year][fields.region].forEach(function(value) {
              total_votes += value['votes']
            })
          }
          callback(null, {
            ValidVotes: total_votes,
            Parties: vm.parties_json,
            Candidates: vm.candidates_json,
            Boundaries: vm.results[fields.type][fields.year][fields.region]
          });
        },
      ], function(err, result) {
        resolve(result);
      });
    });
  }

  mergeResultsByBoundary(original_boundaries, range, year) {
    var result_type = this.getResultType(range);
    var electionResults = [];
    var temp_election_results = {}, BoundaryName, BoundaryKey, CandidateKey;
    for (let boundary of original_boundaries) {
      BoundaryName = this.getBoundaryName(boundary.candidates[0], {region: range, year: year});
      BoundaryKey = this.makeKey(BoundaryName);
      if (!temp_election_results[BoundaryKey])
        temp_election_results[BoundaryKey] = {};
      for (let candidate of boundary.candidates) {
        CandidateKey = candidate['Candidate_SLEOP_ID'];
        if (!temp_election_results[BoundaryKey][CandidateKey])
          temp_election_results[BoundaryKey][CandidateKey] = Object.assign({}, candidate);
        else
          temp_election_results[BoundaryKey][CandidateKey]['ValidVotes'] += candidate['ValidVotes'];
      }
    }

    var boundary_result, election_result;
    for (let key in temp_election_results) {
      boundary_result = temp_election_results[key];

      for (let key1 in boundary_result) {
        election_result = Object.assign({}, boundary_result[key1]);
        election_result['ResultType'] = result_type;
        electionResults.push(election_result);
      }
    }

    return electionResults;
  }

  makeResultsByBoundary(election_results, fields) {
    var boundary_results = this.getResultsByBoundary(election_results, fields.region);
    
    var result_temp_boundaries = {}, temp_candidates = {}, temp_parties = {};
    var missing_parties = [], missing_names = [];
    var party, CandidateFullName, CandidateKey, BoundaryName, BoundaryKey, Votes, Latitude, Longitude, PollingCentreKey;

    for (let election_result of boundary_results) {
      party = election_result['CandidatePoliticalParty'];
      CandidateFullName = election_result['CandidateFirstName'].trim() + ' ' + election_result['CandidateSurname'].trim();

      if (party == '') { missing_parties.push(election_result); continue; }
      if (CandidateFullName == " ") { missing_names.push(election_result); continue; }

      CandidateKey = this.makeKey(CandidateFullName);
      if (!temp_candidates[CandidateKey])
        temp_candidates[CandidateKey] = party;
      if (!temp_parties[party])
        temp_parties[party] = CandidateFullName;

      Votes = Number(election_result['ValidVotes']);
      BoundaryName = this.getBoundaryName(election_result, fields);
      BoundaryKey = this.makeKey(BoundaryName);
      if (election_result['PollingCentreName'] && election_result['PollingCentreName'] != "")
        PollingCentreKey = this.makeKey(election_result['PollingCentreName']);

      Latitude = this.polling_centres_json[PollingCentreKey] ? this.polling_centres_json[PollingCentreKey]['PollingCentreLatitude'] : "";
      Longitude = this.polling_centres_json[PollingCentreKey] ? this.polling_centres_json[PollingCentreKey]['PollingCentreLongitude'] : "";

      if (BoundaryName != "") {
        if (!result_temp_boundaries[BoundaryKey]) {
          result_temp_boundaries[BoundaryKey] = {
            votes: Votes,
            name: BoundaryName,
            latitude: Latitude,
            longitude: Longitude,
            candidates: {}
          };
          result_temp_boundaries[BoundaryKey]['candidates'][party] = Object.assign({}, election_result);
        }
        else {
          if (!result_temp_boundaries[BoundaryKey]['candidates'][party]) {
            result_temp_boundaries[BoundaryKey]['candidates'][party] = Object.assign({}, election_result);
            result_temp_boundaries[BoundaryKey]['votes'] += Votes;
          }
        }

        result_temp_boundaries[BoundaryKey]['candidates'][party]['ValidVotes'] = Votes;
        result_temp_boundaries[BoundaryKey]['candidates'][party]['CandidateFullName'] = CandidateFullName;
      }
    }

    for (let election_result of missing_parties) {
      CandidateFullName = election_result['CandidateFirstName'].trim() + ' ' + election_result['CandidateSurname'].trim();
      CandidateKey = this.makeKey(CandidateFullName);
      party = temp_candidates[CandidateKey];
      if (party) {
        Votes = Number(election_result['ValidVotes']);
        BoundaryName = this.getBoundaryName(election_result, fields);
        BoundaryKey = this.makeKey(BoundaryName);

        if (result_temp_boundaries[BoundaryKey] && !result_temp_boundaries[BoundaryKey]['candidates'][party]) {
          result_temp_boundaries[BoundaryKey]['candidates'][party] = Object.assign({}, election_result);
          result_temp_boundaries[BoundaryKey]['candidates'][party]['ValidVotes'] = Votes;
          result_temp_boundaries[BoundaryKey]['candidates'][party]['CandidateFullName'] = CandidateFullName;
          result_temp_boundaries[BoundaryKey]['votes'] += Votes;
        }
      }
    }

    for (let election_result of missing_names) {
      party = election_result['CandidatePoliticalParty'];
      if (temp_parties[party]) {
        Votes = Number(election_result['ValidVotes']);
        BoundaryName = this.getBoundaryName(election_result, fields);
        BoundaryKey = this.makeKey(BoundaryName);

        if (result_temp_boundaries[BoundaryKey] && !result_temp_boundaries[BoundaryKey]['candidates'][party]) {
          result_temp_boundaries[BoundaryKey]['candidates'][party] = Object.assign({}, election_result);
          result_temp_boundaries[BoundaryKey]['candidates'][party]['ValidVotes'] = Votes;
          result_temp_boundaries[BoundaryKey]['candidates'][party]['CandidateFullName'] = CandidateFullName;
          result_temp_boundaries[BoundaryKey]['votes'] += Votes;
        }
      }
    }

    var row, temp_candidate_ary, total_votes;
    for (let key1 in result_temp_boundaries) {
      temp_candidate_ary = [];
      row = result_temp_boundaries[key1]['candidates'];
      total_votes = result_temp_boundaries[key1]['votes'];
      for(let key2 in row) {
        row[key2]['ValidVotesPercentage'] = total_votes == 0 ? 0 : ((row[key2]['ValidVotes'] / total_votes) * 100).toFixed(2)
        temp_candidate_ary.push(row[key2]);
      }

      temp_candidate_ary.sort((a, b) => {
        var nameA = a.CandidatePoliticalParty.toUpperCase(); // ignore upper and lowercase
        var nameB = b.CandidatePoliticalParty.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

        // names must be equal
        return 0;
      })
      temp_candidate_ary.sort((a, b) => b.ValidVotes - a.ValidVotes);

      if (temp_candidate_ary[0].ValidVotes == 0) temp_candidate_ary[0].CandidatePoliticalPartyColor = '999'
      result_temp_boundaries[key1]['candidates'] = temp_candidate_ary;
    }

    return this.toArray(result_temp_boundaries);
  }

  getResultsByYear(results, year) {
    return results.filter(election_result => {
      return year == election_result["ElectionDate"].substring(0, 4) ? election_result : '';
    })
  }

  getResultsByBoundary(election_results, boundary) {
    var result_type = this.getResultType(boundary);
    return election_results.filter(election_result => {
      return election_result.ResultType == result_type ? election_result : '';
    })
  }

  toPartiesJson(parties) {
    var parties_json = {};
    for(let party of parties) {
      parties_json[party['Acronym']] = party;
    }
    return parties_json;
  }

  toCandidatesJson(candidates) {
    var candidates_json = {};
    for(let candidate of candidates) {
      candidates_json[candidate['CandidateSLEOP_ID']] = candidate;
    }
    return candidates_json;
  }

  toPollingCentresJson(polling_centres) {
    var polling_centres_json = {}, PollingCentreKey;
    for(let polling_centre of polling_centres) {
      PollingCentreKey = this.makeKey(polling_centre['PollingCentreName']);
      polling_centres_json[PollingCentreKey] = polling_centre;
    }
    return polling_centres_json;
  }

  toArray(json) {
    var ary = [];
    for (let key in json) {
      ary.push(json[key]);
    }
    return ary;
  }

  makeKey(value) {
    return value.toLowerCase().replace(/\ /gi, '_');
  }

  getResultType(boundary) {
    var result_type = '';
    switch (boundary) {
      case "nation":
        result_type = "National Results";
        break;
      case "district":
        result_type = "District Results";
        break;
      case "constituency":
        result_type = "Constituency Results";
        break;
      case "ward":
        result_type = "Ward Results";
        break;
      case "polling_centre":
        result_type = "Polling Centre Results";
        break;
      default:
        // code...
        break;
    }

    return result_type;
  }

  getBoundaryName(election_result, fields) {
    var boundary_field = "";
    var year = Number(fields.year);
    if (fields.region == "nation") return "Sierra Leone";
    else {
      switch (fields.region) {
        case "district":
          boundary_field = year < 2018 ? "ElectionDistrict" : "PollingCentreDistrict";
          break;
        case "constituency":
          boundary_field = year < 2018 ? "ElectionConstituency" : "PollingCentreConstituency";
          break;
        case "ward":
          boundary_field = year < 2018 ? "ElectionWard" : "PollingCentreWard";
          break;
        case "polling_centre":
          boundary_field = "PollingCentreName";
          break;
        default:
          break;
      }
    }

    return election_result[boundary_field];
  }

  setGranularity(data: string) {
    this.granularitySubject.next(data);
  }

  getGranularity(): Observable<any> {
    return this.granularitySubject.asObservable();
  }
}