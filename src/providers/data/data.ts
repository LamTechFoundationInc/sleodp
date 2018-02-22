import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import waterfall from 'async/waterfall';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {
  urls = {
    president: "api/results/presidential/all.json",
    president_2018: "api/results/presidential/polling-centre-results.json",
    parliament: "api/results/parliamentary/all.json",
    mayor: "api/results/mayor/all.json",
    chairperson: "api/results/chairperson/all.json",
    councilor: "api/results/local-council/all.json",
    villageheadman: "api/results/village-headman/all.json",
    parties: "api/resources/political-parties/all",
    candidates: "api/resources/candidates/all.json",
    polling_centres: "api/resources/polling-centres/all.json"
  };
  parties_json: any;
  candidates_json: any;
  polling_centres_json: any;
  results = {};

  year: any;

  private granularitySubject = new Subject<any>();

  constructor(public http: HttpClient) {
  }

  setYear(year) {
    this.year = year;
  }

  getYear() {
    return this.year ? this.year: "";
  }

  loadParties() {
    if (this.parties_json) {
      return Promise.resolve(this.parties_json);
    }

    return new Promise(resolve => {
      this.http.get(this.urls.parties).subscribe (data => {
        this.parties_json = this.toPartiesJson(data);
        resolve(this.parties_json);
      }, error => {
        console.log("Error with Data");
      });
    });
  }

  loadCandidates() {
    if (this.candidates_json) {
      return Promise.resolve(this.candidates_json);
    }

    return new Promise(resolve => {
      this.http.get(this.urls.candidates).subscribe (data => {
        this.candidates_json = this.toCandidatesJson(data);
        resolve(this.candidates_json);
      }, error => {
        console.log("Error with Data");
      });
    });
  }

  loadPollingCentres() {
    if (this.polling_centres_json) {
      return Promise.resolve(this.polling_centres_json);
    }

    return new Promise(resolve => {
      this.http.get(this.urls.polling_centres).subscribe (data => {
        this.polling_centres_json = this.toPollingCentresJson(data);
        resolve(this.polling_centres_json);
      }, error => {
        console.log("Error with Data");
      });
    });
  }

  loadResultsByType(fields) {
    var url = this.urls[fields.type];
    if (Number(fields.year) >= 2018)
      url = this.urls[fields.type+'_'+fields.year];
    return new Promise(resolve => {
      this.http.get(url).subscribe (data => {
        resolve(data);
      }, error => {
        resolve([]);
      });
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
              vm.results[fields.type][fields.year] = {};
              vm.results[fields.type][fields.year]['all'] = vm.getResultsByYear(data, fields.year);
              callback(null);
            });
          }
          else
            callback(null);
        },
        function(callback) {
          vm.loadParties().then(data => {
            callback(null);
          })
        },
        function(callback) {
          vm.loadCandidates().then(data => {
            callback(null);
          })
        },
        function(callback) {
          vm.loadPollingCentres().then(data => {
            callback(null);
          })
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
          
          callback(null, {
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

        if (!result_temp_boundaries[BoundaryKey]['candidates'][party]) {
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

        if (!result_temp_boundaries[BoundaryKey]['candidates'][party]) {
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

      temp_candidate_ary.sort((a, b) => a.ValidVotes > b.ValidVotes ? -1 : a.ValidVotes < b.ValidVotes ? 1 : 0);
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