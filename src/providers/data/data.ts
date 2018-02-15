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
  parties: any;
  election_years: any;
  president_results: any;
  parliamentary_results: any;
  mayor_results: any;
  chairperson_results: any;
  council_results: any;
  villageheadman_results: any;

  private granularitySubject = new Subject<any>();

  constructor(public http: HttpClient) {
  }

  loadParties() {
    if (this.parties) {
      return Promise.resolve(this.parties);
    }

    return new Promise(resolve => {
      this.http.get("api/resources/political-parties/all").subscribe (data => {
        this.parties = data;
        resolve(this.parties);
      }, error => {
        console.log("Error with Data");
      });
    });
  }

  loadPartiesByYear(year) {
    if (this.parties) 
      return Promise.resolve(this.parties.filter(party => {
        return year == party.ElectionYear ? party : '';
      }));
    else
      return new Promise(resolve => {
        this.loadParties().then(data => {
          resolve(data.filter(party => {
            return year == party.ElectionYear ? party : '';
          }));
        });
      });
  }

  loadPresidentResults() {
    if (this.president_results) {
      return Promise.resolve(this.president_results);
    }

    return new Promise(resolve => {
      this.http.get("api/results/presidential/all.json").subscribe (data => {
        this.president_results = data;
        resolve(this.president_results);
      }, error => {
        console.log("Error with Data");
      });
    });
  }

  loadParliamentaryResults() {
    if (this.parliamentary_results) {
      return Promise.resolve(this.parliamentary_results);
    }

    return new Promise(resolve => {
      this.http.get("api/results/parliamentary/all.json").subscribe (data => {
        this.parliamentary_results = data;
        resolve(this.parliamentary_results);
      }, error => {
        console.log("Error with Data");
      });
    });
  }

  loadMayorResults() {
    if (this.mayor_results) {
      return Promise.resolve(this.mayor_results);
    }

    return new Promise(resolve => {
      this.http.get("api/results/mayor/all.json").subscribe (data => {
        this.mayor_results = data;
        resolve(this.mayor_results);
      }, error => {
        console.log("Error with Data");
      });
    });
  }

  loadChairpersonResults() {
    if (this.chairperson_results) {
      return Promise.resolve(this.chairperson_results);
    }

    return new Promise(resolve => {
      this.http.get("api/results/chairperson/all.json").subscribe (data => {
        this.chairperson_results = data;
        resolve(this.chairperson_results);
      }, error => {
        console.log("Error with Data");
      });
    });
  }

  loadCouncilResults() {
    if (this.council_results) {
      return Promise.resolve(this.council_results);
    }

    return new Promise(resolve => {
      this.http.get("api/results/local-council/all.json").subscribe (data => {
        this.council_results = data;
        resolve(this.council_results);
      }, error => {
        console.log("Error with Data");
      });
    });
  }

  loadVillageheadmanResults() {
    if (this.villageheadman_results) {
      return Promise.resolve(this.villageheadman_results);
    }

    return new Promise(resolve => {
      this.http.get("api/results/village-headman/all.json").subscribe (data => {
        this.villageheadman_results = data;
        resolve(this.villageheadman_results);
      }, error => {
        console.log("Error with Data");
      });
    });
  }

  loadPresidentResultsByYear(year) {
    var electionYear;
    if (this.president_results) 
      return Promise.resolve(this.president_results.filter(election_result => {
        electionYear = election_result["ElectionDate"].substring(0, 4);
        return year == electionYear ? election_result : '';
      }));
    else
      return new Promise(resolve => {
        this.loadPresidentResults().then(data => {
          resolve(data.filter(election_result => {
            electionYear = election_result["ElectionDate"].substring(0, 4);
            return year == electionYear ? election_result : '';
          }));
        });
      });
  }

  loadParliamentResultsByYear(year) {
    var electionYear;
    if (this.parliamentary_results) 
      return Promise.resolve(this.parliamentary_results.filter(election_result => {
        electionYear = election_result["ElectionDate"].substring(0, 4);
        return year == electionYear ? election_result : '';
      }));
    else
      return new Promise(resolve => {
        this.loadParliamentaryResults().then(data => {
          resolve(data.filter(election_result => {
            electionYear = election_result["ElectionDate"].substring(0, 4);
            return year == electionYear ? election_result : '';
          }));
        });
      });
  }

  loadMayorResultsByYear(year) {
    var electionYear;
    if (this.mayor_results) 
      return Promise.resolve(this.mayor_results.filter(election_result => {
        electionYear = election_result["ElectionDate"].substring(0, 4);
        return year == electionYear ? election_result : '';
      }));
    else
      return new Promise(resolve => {
        this.loadParliamentaryResults().then(data => {
          resolve(data.filter(election_result => {
            electionYear = election_result["ElectionDate"].substring(0, 4);
            return year == electionYear ? election_result : '';
          }));
        });
      });
  }

  loadChairpersonResultsByYear(year) {
    var electionYear;
    if (this.chairperson_results) 
      return Promise.resolve(this.chairperson_results.filter(election_result => {
        electionYear = election_result["ElectionDate"].substring(0, 4);
        return year == electionYear ? election_result : '';
      }));
    else
      return new Promise(resolve => {
        this.loadParliamentaryResults().then(data => {
          resolve(data.filter(election_result => {
            electionYear = election_result["ElectionDate"].substring(0, 4);
            return year == electionYear ? election_result : '';
          }));
        });
      });
  }

  loadCouncilResultsByYear(year) {
    var electionYear;
    if (this.council_results) 
      return Promise.resolve(this.council_results.filter(election_result => {
        electionYear = election_result["ElectionDate"].substring(0, 4);
        return year == electionYear ? election_result : '';
      }));
    else
      return new Promise(resolve => {
        this.loadParliamentaryResults().then(data => {
          resolve(data.filter(election_result => {
            electionYear = election_result["ElectionDate"].substring(0, 4);
            return year == electionYear ? election_result : '';
          }));
        });
      });
  }

  loadVillageheadmanResultsByYear(year) {
    var electionYear;
    if (this.villageheadman_results) 
      return Promise.resolve(this.villageheadman_results.filter(election_result => {
        electionYear = election_result["ElectionDate"].substring(0, 4);
        return year == electionYear ? election_result : '';
      }));
    else
      return new Promise(resolve => {
        this.loadParliamentaryResults().then(data => {
          resolve(data.filter(election_result => {
            electionYear = election_result["ElectionDate"].substring(0, 4);
            return year == electionYear ? election_result : '';
          }));
        });
      });
  }

  getResultsByBoundary(election_results, boundary) {
    var results = [];
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
      case "ward":
        result_type = "Ward Results";
      default:
        // code...
        break;
    }
    for(let result of election_results) {
      if (result.ResultType == result_type) {
        results.push(result);
      }
    }

    return results;
  }

  toPartiesJson(parties) {
    var parties_json = {};
    for(let party of parties) {
      parties_json[party['Acronym']] = party;
    }
    return parties_json;
  }

  toArray(json) {
    var ary = [];
    for (let key in json) {
      ary.push(json[key]);
    }
    return ary;
  }

  getBoundaryName(election_result, boundary) {
    var boundary_field = "";
    if (boundary == "nation") return "Sierra Leone";
    else {
      switch (boundary) {
        case "district":
          boundary_field = "ElectionDistrict";
          break;
        case "constituency":
          boundary_field = "ElectionConstituency";
        case "ward":
          boundary_field = "ElectionWard";
        default:
          break;
      }
    }

    return election_result[boundary_field];
  }

  makeKey(value) {
    return value.toLowerCase().replace(/\ /gi, '_');
  }

  getPresidentDataByFields(election_results, parties, fields) {
    var result = {boundaries: [], total_votes: 0, invalied_votes: 0, parties: []};
    var boundary_results = this.getResultsByBoundary(election_results, fields.region);

    var parties_json = this.toPartiesJson(parties);
    
    var result_temp_parties = {}, result_temp_boundaries = {}, temp_candidates = {}, temp_parties = {};
    var missing_parties = [], missing_names = [];

    var party, votes, boundary, candidate_name, candidate_photo, candidate_percent, candidate_party_color, boundary_key, candidate_key;
    for (let election_result of boundary_results) {
      party = election_result['CandidatePoliticalParty'];

      if (party == '') { missing_parties.push(election_result); continue; }
      if (!result_temp_parties[party]) {
        result_temp_parties[party] = parties_json[party];
      }

      candidate_name = election_result['CandidateFirstName'].trim() + ' ' + election_result['CandidateSurname'].trim();
      votes = Number(election_result['ValidVotes']);
      candidate_photo = election_result['CandidatePhoto'];
      candidate_percent = election_result['ValidVotesPercent'];
      candidate_party_color = election_result['CandidatePoliticalPartyColor'];

      if (candidate_name == " ") { missing_names.push(election_result); continue; }

      candidate_key = this.makeKey(candidate_name);
      if (!temp_candidates[candidate_key])
        temp_candidates[candidate_key] = party;
      if (!temp_parties[party])
        temp_parties[party] = candidate_name;

      boundary = this.getBoundaryName(election_result, fields.region);
      boundary_key = this.makeKey(boundary);
      if (boundary != "") {
        if (!result_temp_boundaries[boundary_key]) {
          result_temp_boundaries[boundary_key] = {
            votes: votes,
            name: boundary,
            candidates: {}
          };
          result_temp_boundaries[boundary_key]['candidates'][party] = { votes: votes, name: candidate_name, photo: candidate_photo, percent: candidate_percent, party: party, color: candidate_party_color };
          result['total_votes'] += votes;
        }
        else {
          if (!result_temp_boundaries[boundary_key]['candidates'][party]) {
            result_temp_boundaries[boundary_key]['candidates'][party] = { votes: votes, name: candidate_name, photo: candidate_photo, percent: candidate_percent, party: party, color: candidate_party_color };
            result_temp_boundaries[boundary_key]['votes'] += votes;
            result['total_votes'] += votes;
          }
        }
      } 
    }

    for (let election_result of missing_parties) {
      candidate_name = election_result['CandidateFirstName'].trim() + ' ' + election_result['CandidateSurname'].trim();
      candidate_key = this.makeKey(candidate_name);
      if (temp_candidates[candidate_key]) {
        party = temp_candidates[candidate_key];

        votes = Number(election_result['ValidVotes']);
        candidate_photo = election_result['CandidatePhoto'];
        candidate_percent = election_result['ValidVotesPercent'];
        candidate_party_color = election_result['CandidatePoliticalPartyColor'];

        boundary = this.getBoundaryName(election_result, fields.type);
        boundary_key = this.makeKey(boundary);

        if (!result_temp_boundaries[boundary_key][party]) {
          result_temp_boundaries[boundary_key]['candidates'][party] = { votes: votes, name: candidate_name, photo: candidate_photo, percent: candidate_percent, party: party, color: candidate_party_color };
          result_temp_boundaries[boundary_key]['votes'] += votes;
          result['total_votes'] += votes;
        }
      }
    }

    for (let election_result of missing_names) {
      party = election_result['CandidatePoliticalParty'];
      if (temp_parties[party]) {
        votes = Number(election_result['ValidVotes']);
        candidate_name = temp_parties[party];
        candidate_photo = election_result['CandidatePhoto'];
        candidate_percent = election_result['ValidVotesPercent'];
        candidate_party_color = election_result['CandidatePoliticalPartyColor'];

        boundary = this.getBoundaryName(election_result, fields.type);
        boundary_key = this.makeKey(boundary);

        if (!result_temp_boundaries[boundary_key][party]) {
          result_temp_boundaries[boundary_key]['candidates'][party] = { votes: votes, name: candidate_name, photo: candidate_photo, percent: candidate_percent, party: party, color: candidate_party_color };
          result_temp_boundaries[boundary_key]['votes'] += votes;
          result['total_votes'] += votes;
        }
      }
    }

    var row, temp_candidate_ary;
    for (let key1 in result_temp_boundaries) {
      temp_candidate_ary = [];
      row = result_temp_boundaries[key1]['candidates'];
      for(let key2 in row) {
        temp_candidate_ary.push(row[key2]);
      }

      temp_candidate_ary.sort((a, b) => a.votes > b.votes ? -1 : a.votes < b.votes ? 1 : 0);
      result_temp_boundaries[key1]['candidates'] = temp_candidate_ary;
    }

    result['boundaries'] = this.toArray(result_temp_boundaries);
    result['parties'] = this.toArray(result_temp_parties);
    return result;
  }

  loadResultsByFields(fields) {
    var vm = this;
    this.loadPresidentResults();
    return new Promise(resolve => {
      waterfall([
        function(callback) {
          vm.loadParties().then(data => {
            callback(null, data);
          })
        },
        function(parties, callback) {
          switch (fields.type) {
            case "president":
              vm.loadPresidentResultsByYear(fields.year).then(data => {
                callback(null, parties, data);
              })
              break;
            case "parliament":
              vm.loadParliamentResultsByYear(fields.year).then(data => {
                callback(null, parties, data);
              })
              break;
            case "mayor":
              vm.loadMayorResultsByYear(fields.year).then(data => {
                callback(null, parties, data);
              })
              break;
            case "chairperson":
              vm.loadChairpersonResultsByYear(fields.year).then(data => {
                callback(null, parties, data);
              })
              break;
            case "councilor":
              vm.loadCouncilResultsByYear(fields.year).then(data => {
                callback(null, parties, data);
              })
              break;
            case "villageheadman":
              vm.loadVillageheadmanResultsByYear(fields.year).then(data => {
                callback(null, parties, data);
              })
              break;
            default:
              callback(parties, [], callback);
              break;
          }
        },
        function(parties, results, callback) {
          var result = {};
          result['ResultStatus'] = 0;
          result['TotalVotes'] = 0;
          result['ValidVotes'] = 0;
          result['InvalidVotes'] = 0;
          result['Boundaries'] = {};

          switch (fields.type) {
            case "president":
              var calculate = vm.getPresidentDataByFields(results, parties, fields);
              console.log(calculate);
              result['Boundaries'] = calculate.boundaries;
              result['TotalVotes'] = calculate.total_votes;
              result['ValidVotes'] = calculate.total_votes;
              result['Parties'] = calculate.parties;
              
              break;
            case "parliament":
              break;
            case "mayor":
              break;
            case "chairperson":
              break;
            case "councilor":
              break;
            case "villageheadman":
              break;
            default:
              break;
          }

          callback(null, result);
        }
      ], function (err, result) {
        resolve(result);
      });
    });
  }

  setGranularity(data: string) {
    this.granularitySubject.next(data);
  }

  getGranularity(): Observable<any> {
    return this.granularitySubject.asObservable();
  }
}