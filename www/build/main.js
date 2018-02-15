webpackJsonp([6],{

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MayorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_content_view_content_view__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the MayorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MayorPage = (function () {
    function MayorPage(navCtrl, navParams, dataService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataService = dataService;
        this.region = "district";
        this.initialSlide = 4;
        this.prevEnabled = false;
        this.nextEnabled = false;
        this.year = 0;
        this.prevYear = 0;
        this.nextYear = 0;
        this.subpages = [
            { year: 1996 },
            { year: 2002 },
            { year: 2007 },
            { year: 2012 },
            { year: 2018 },
        ];
        this.initialSlide = this.subpages.length - 1;
        this.setPageInfo();
        this.subscription = this.dataService.getGranularity().subscribe(function (granularity) {
            _this.region = granularity;
            var currentIndex = _this.slides.getActiveIndex();
            if (currentIndex == _this.totalPages)
                return;
            _this.subPageViews._results[currentIndex].setContentView(_this.region);
        });
    }
    MayorPage.prototype.ionViewDidLoad = function () {
    };
    MayorPage.prototype.ionViewDidEnter = function () {
        if (this.subpages.length > 0) {
            this.subPageViews._results[this.subPageViews._results.length - 1].setContentView(this.region);
        }
    };
    MayorPage.prototype.setPageInfo = function () {
        this.totalPages = this.subpages.length;
        if (this.totalPages > 0) {
            this.year = this.subpages[0].year;
        }
        if (this.totalPages > 1) {
            this.nextEnabled = true;
            this.nextYear = this.subpages[1].year;
        }
    };
    // Page Setting
    MayorPage.prototype.setPrevPage = function () {
        this.slides.slideTo(this.slides.getActiveIndex() - 1, 500);
    };
    MayorPage.prototype.setNextPage = function () {
        this.slides.slideTo(this.slides.getActiveIndex() + 1, 500);
    };
    MayorPage.prototype.slideChanged = function () {
        var currentIndex = this.slides.getActiveIndex();
        if (!this.totalPages || currentIndex == this.totalPages || this.totalPages == 0)
            return;
        this.subPageViews._results[currentIndex].setContentView(this.region);
        this.prevEnabled = !this.slides.isBeginning();
        this.nextEnabled = !this.slides.isEnd();
        this.year = this.subpages[currentIndex].year;
        this.prevYear = this.prevEnabled ? this.subpages[currentIndex - 1].year : 0;
        this.nextYear = this.nextEnabled ? this.subpages[currentIndex + 1].year : 0;
    };
    MayorPage.prototype.ionViewDidLeave = function () {
        this.subscription.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Slides */])
    ], MayorPage.prototype, "slides", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChildren */])(__WEBPACK_IMPORTED_MODULE_3__components_content_view_content_view__["a" /* ContentViewComponent */]),
        __metadata("design:type", Object)
    ], MayorPage.prototype, "subPageViews", void 0);
    MayorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mayor',template:/*ion-inline-start:"C:\Users\VM-3\Documents\sleodp_project\sleodp\src\pages\mayor\mayor.html"*/'<!--\n  Generated template for the MayorPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<header-view>\n  <ion-navbar color="dark" sub-navbar>\n    <a float-left *ngIf="prevEnabled" (click)="setPrevPage()" padding-left>\n      <ion-icon name="arrow-back" item-start></ion-icon> {{prevYear}}\n    </a>\n\n    <ion-title>\n      {{year}} Mayoral Elections\n    </ion-title>\n    <a float-right *ngIf="nextEnabled" (click)="setNextPage()" padding-right>\n      {{nextYear}} <ion-icon name="arrow-forward" item-start></ion-icon>\n    </a>\n  </ion-navbar>\n</header-view>\n\n<ion-content padding>\n  <ion-slides (ionSlideDidChange)="slideChanged()" [initialSlide]="initialSlide">\n\n    <ion-slide *ngFor="let p of subpages; let i = index">\n      <content-view type="mayor" [year]="p.year" [region]="region" #mayor_{{i}}></content-view>\n    </ion-slide>\n\n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"C:\Users\VM-3\Documents\sleodp_project\sleodp\src\pages\mayor\mayor.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */]])
    ], MayorPage);
    return MayorPage;
}());

//# sourceMappingURL=mayor.js.map

/***/ }),

/***/ 146:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 146;

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_async_waterfall__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_async_waterfall___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_async_waterfall__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DataProvider = (function () {
    function DataProvider(http) {
        this.http = http;
        this.granularitySubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
    }
    DataProvider.prototype.loadParties = function () {
        var _this = this;
        if (this.parties) {
            return Promise.resolve(this.parties);
        }
        return new Promise(function (resolve) {
            _this.http.get("api/resources/political-parties/all").subscribe(function (data) {
                _this.parties = data;
                resolve(_this.parties);
            }, function (error) {
                console.log("Error with Data");
            });
        });
    };
    DataProvider.prototype.loadPartiesByYear = function (year) {
        var _this = this;
        if (this.parties)
            return Promise.resolve(this.parties.filter(function (party) {
                return year == party.ElectionYear ? party : '';
            }));
        else
            return new Promise(function (resolve) {
                _this.loadParties().then(function (data) {
                    resolve(data.filter(function (party) {
                        return year == party.ElectionYear ? party : '';
                    }));
                });
            });
    };
    DataProvider.prototype.loadPresidentResults = function () {
        var _this = this;
        if (this.president_results) {
            return Promise.resolve(this.president_results);
        }
        return new Promise(function (resolve) {
            _this.http.get("api/results/presidential/all.json").subscribe(function (data) {
                _this.president_results = data;
                resolve(_this.president_results);
            }, function (error) {
                console.log("Error with Data");
            });
        });
    };
    DataProvider.prototype.loadParliamentaryResults = function () {
        var _this = this;
        if (this.parliamentary_results) {
            return Promise.resolve(this.parliamentary_results);
        }
        return new Promise(function (resolve) {
            _this.http.get("api/results/parliamentary/all.json").subscribe(function (data) {
                _this.parliamentary_results = data;
                resolve(_this.parliamentary_results);
            }, function (error) {
                console.log("Error with Data");
            });
        });
    };
    DataProvider.prototype.loadMayorResults = function () {
        var _this = this;
        if (this.mayor_results) {
            return Promise.resolve(this.mayor_results);
        }
        return new Promise(function (resolve) {
            _this.http.get("api/results/mayor/all.json").subscribe(function (data) {
                _this.mayor_results = data;
                resolve(_this.mayor_results);
            }, function (error) {
                console.log("Error with Data");
            });
        });
    };
    DataProvider.prototype.loadChairpersonResults = function () {
        var _this = this;
        if (this.chairperson_results) {
            return Promise.resolve(this.chairperson_results);
        }
        return new Promise(function (resolve) {
            _this.http.get("api/results/chairperson/all.json").subscribe(function (data) {
                _this.chairperson_results = data;
                resolve(_this.chairperson_results);
            }, function (error) {
                console.log("Error with Data");
            });
        });
    };
    DataProvider.prototype.loadCouncilResults = function () {
        var _this = this;
        if (this.council_results) {
            return Promise.resolve(this.council_results);
        }
        return new Promise(function (resolve) {
            _this.http.get("api/results/local-council/all.json").subscribe(function (data) {
                _this.council_results = data;
                resolve(_this.council_results);
            }, function (error) {
                console.log("Error with Data");
            });
        });
    };
    DataProvider.prototype.loadVillageheadmanResults = function () {
        var _this = this;
        if (this.villageheadman_results) {
            return Promise.resolve(this.villageheadman_results);
        }
        return new Promise(function (resolve) {
            _this.http.get("api/results/village-headman/all.json").subscribe(function (data) {
                _this.villageheadman_results = data;
                resolve(_this.villageheadman_results);
            }, function (error) {
                console.log("Error with Data");
            });
        });
    };
    DataProvider.prototype.loadPresidentResultsByYear = function (year) {
        var _this = this;
        var electionYear;
        if (this.president_results)
            return Promise.resolve(this.president_results.filter(function (election_result) {
                electionYear = election_result["ElectionDate"].substring(0, 4);
                return year == electionYear ? election_result : '';
            }));
        else
            return new Promise(function (resolve) {
                _this.loadPresidentResults().then(function (data) {
                    resolve(data.filter(function (election_result) {
                        electionYear = election_result["ElectionDate"].substring(0, 4);
                        return year == electionYear ? election_result : '';
                    }));
                });
            });
    };
    DataProvider.prototype.loadParliamentResultsByYear = function (year) {
        var _this = this;
        var electionYear;
        if (this.parliamentary_results)
            return Promise.resolve(this.parliamentary_results.filter(function (election_result) {
                electionYear = election_result["ElectionDate"].substring(0, 4);
                return year == electionYear ? election_result : '';
            }));
        else
            return new Promise(function (resolve) {
                _this.loadParliamentaryResults().then(function (data) {
                    resolve(data.filter(function (election_result) {
                        electionYear = election_result["ElectionDate"].substring(0, 4);
                        return year == electionYear ? election_result : '';
                    }));
                });
            });
    };
    DataProvider.prototype.loadMayorResultsByYear = function (year) {
        var _this = this;
        var electionYear;
        if (this.mayor_results)
            return Promise.resolve(this.mayor_results.filter(function (election_result) {
                electionYear = election_result["ElectionDate"].substring(0, 4);
                return year == electionYear ? election_result : '';
            }));
        else
            return new Promise(function (resolve) {
                _this.loadParliamentaryResults().then(function (data) {
                    resolve(data.filter(function (election_result) {
                        electionYear = election_result["ElectionDate"].substring(0, 4);
                        return year == electionYear ? election_result : '';
                    }));
                });
            });
    };
    DataProvider.prototype.loadChairpersonResultsByYear = function (year) {
        var _this = this;
        var electionYear;
        if (this.chairperson_results)
            return Promise.resolve(this.chairperson_results.filter(function (election_result) {
                electionYear = election_result["ElectionDate"].substring(0, 4);
                return year == electionYear ? election_result : '';
            }));
        else
            return new Promise(function (resolve) {
                _this.loadParliamentaryResults().then(function (data) {
                    resolve(data.filter(function (election_result) {
                        electionYear = election_result["ElectionDate"].substring(0, 4);
                        return year == electionYear ? election_result : '';
                    }));
                });
            });
    };
    DataProvider.prototype.loadCouncilResultsByYear = function (year) {
        var _this = this;
        var electionYear;
        if (this.council_results)
            return Promise.resolve(this.council_results.filter(function (election_result) {
                electionYear = election_result["ElectionDate"].substring(0, 4);
                return year == electionYear ? election_result : '';
            }));
        else
            return new Promise(function (resolve) {
                _this.loadParliamentaryResults().then(function (data) {
                    resolve(data.filter(function (election_result) {
                        electionYear = election_result["ElectionDate"].substring(0, 4);
                        return year == electionYear ? election_result : '';
                    }));
                });
            });
    };
    DataProvider.prototype.loadVillageheadmanResultsByYear = function (year) {
        var _this = this;
        var electionYear;
        if (this.villageheadman_results)
            return Promise.resolve(this.villageheadman_results.filter(function (election_result) {
                electionYear = election_result["ElectionDate"].substring(0, 4);
                return year == electionYear ? election_result : '';
            }));
        else
            return new Promise(function (resolve) {
                _this.loadParliamentaryResults().then(function (data) {
                    resolve(data.filter(function (election_result) {
                        electionYear = election_result["ElectionDate"].substring(0, 4);
                        return year == electionYear ? election_result : '';
                    }));
                });
            });
    };
    DataProvider.prototype.getResultsByBoundary = function (election_results, boundary) {
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
        for (var _i = 0, election_results_1 = election_results; _i < election_results_1.length; _i++) {
            var result = election_results_1[_i];
            if (result.ResultType == result_type) {
                results.push(result);
            }
        }
        return results;
    };
    DataProvider.prototype.toPartiesJson = function (parties) {
        var parties_json = {};
        for (var _i = 0, parties_1 = parties; _i < parties_1.length; _i++) {
            var party = parties_1[_i];
            parties_json[party['Acronym']] = party;
        }
        return parties_json;
    };
    DataProvider.prototype.toArray = function (json) {
        var ary = [];
        for (var key in json) {
            ary.push(json[key]);
        }
        return ary;
    };
    DataProvider.prototype.getBoundaryName = function (election_result, boundary) {
        var boundary_field = "";
        if (boundary == "nation")
            return "Sierra Leone";
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
    };
    DataProvider.prototype.makeKey = function (value) {
        return value.toLowerCase().replace(/\ /gi, '_');
    };
    DataProvider.prototype.getPresidentDataByFields = function (election_results, parties, fields) {
        var result = { boundaries: [], total_votes: 0, invalied_votes: 0, parties: [] };
        var boundary_results = this.getResultsByBoundary(election_results, fields.region);
        var parties_json = this.toPartiesJson(parties);
        var result_temp_parties = {}, result_temp_boundaries = {}, temp_candidates = {}, temp_parties = {};
        var missing_parties = [], missing_names = [];
        var party, votes, boundary, candidate_name, candidate_photo, candidate_percent, candidate_party_color, boundary_key, candidate_key;
        for (var _i = 0, boundary_results_1 = boundary_results; _i < boundary_results_1.length; _i++) {
            var election_result = boundary_results_1[_i];
            party = election_result['CandidatePoliticalParty'];
            if (party == '') {
                missing_parties.push(election_result);
                continue;
            }
            if (!result_temp_parties[party]) {
                result_temp_parties[party] = parties_json[party];
            }
            candidate_name = election_result['CandidateFirstName'].trim() + ' ' + election_result['CandidateSurname'].trim();
            votes = Number(election_result['ValidVotes']);
            candidate_photo = election_result['CandidatePhoto'];
            candidate_percent = election_result['ValidVotesPercent'];
            candidate_party_color = election_result['CandidatePoliticalPartyColor'];
            if (candidate_name == " ") {
                missing_names.push(election_result);
                continue;
            }
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
        for (var _a = 0, missing_parties_1 = missing_parties; _a < missing_parties_1.length; _a++) {
            var election_result = missing_parties_1[_a];
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
        for (var _b = 0, missing_names_1 = missing_names; _b < missing_names_1.length; _b++) {
            var election_result = missing_names_1[_b];
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
        for (var key1 in result_temp_boundaries) {
            temp_candidate_ary = [];
            row = result_temp_boundaries[key1]['candidates'];
            for (var key2 in row) {
                temp_candidate_ary.push(row[key2]);
            }
            temp_candidate_ary.sort(function (a, b) { return a.votes > b.votes ? -1 : a.votes < b.votes ? 1 : 0; });
            result_temp_boundaries[key1]['candidates'] = temp_candidate_ary;
        }
        result['boundaries'] = this.toArray(result_temp_boundaries);
        result['parties'] = this.toArray(result_temp_parties);
        return result;
    };
    DataProvider.prototype.loadResultsByFields = function (fields) {
        var vm = this;
        this.loadPresidentResults();
        return new Promise(function (resolve) {
            __WEBPACK_IMPORTED_MODULE_3_async_waterfall___default()([
                function (callback) {
                    vm.loadParties().then(function (data) {
                        callback(null, data);
                    });
                },
                function (parties, callback) {
                    switch (fields.type) {
                        case "president":
                            vm.loadPresidentResultsByYear(fields.year).then(function (data) {
                                callback(null, parties, data);
                            });
                            break;
                        case "parliament":
                            vm.loadParliamentResultsByYear(fields.year).then(function (data) {
                                callback(null, parties, data);
                            });
                            break;
                        case "mayor":
                            vm.loadMayorResultsByYear(fields.year).then(function (data) {
                                callback(null, parties, data);
                            });
                            break;
                        case "chairperson":
                            vm.loadChairpersonResultsByYear(fields.year).then(function (data) {
                                callback(null, parties, data);
                            });
                            break;
                        case "councilor":
                            vm.loadCouncilResultsByYear(fields.year).then(function (data) {
                                callback(null, parties, data);
                            });
                            break;
                        case "villageheadman":
                            vm.loadVillageheadmanResultsByYear(fields.year).then(function (data) {
                                callback(null, parties, data);
                            });
                            break;
                        default:
                            callback(parties, [], callback);
                            break;
                    }
                },
                function (parties, results, callback) {
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
    };
    DataProvider.prototype.setGranularity = function (data) {
        this.granularitySubject.next(data);
    };
    DataProvider.prototype.getGranularity = function () {
        return this.granularitySubject.asObservable();
    };
    DataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], DataProvider);
    return DataProvider;
}());

//# sourceMappingURL=data.js.map

/***/ }),

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/chairperson/chairperson.module": [
		387,
		5
	],
	"../pages/councilor/councilor.module": [
		388,
		4
	],
	"../pages/mayor/mayor.module": [
		389,
		3
	],
	"../pages/parliament/parliament.module": [
		390,
		2
	],
	"../pages/president/president.module": [
		391,
		1
	],
	"../pages/village-headman/village-headman.module": [
		392,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 190;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_index__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mapbox_gl_dist_mapbox_gl_js__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mapbox_gl_dist_mapbox_gl_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mapbox_gl_dist_mapbox_gl_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_data__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the MapViewComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var MapViewComponent = (function () {
    function MapViewComponent(loadingCtrl, dataService) {
        this.loadingCtrl = loadingCtrl;
        this.dataService = dataService;
        this.result = {
            'ResultStatus': "",
            'TotalVotes': "",
            'ValidVotes': "",
            'InvalidVotes': "",
            'Parties': [],
            'Boundaries': [],
            'Candidates': []
        };
    }
    MapViewComponent.prototype.ngAfterViewInit = function () {
        this.isLoaded = false;
    };
    MapViewComponent.prototype.transform = function (value, args) {
        var keys = [];
        for (var key in value) {
            keys.push({ key: key, value: value[key] });
        }
        return keys;
    };
    MapViewComponent.prototype.transform2d = function (value, columns, limit) {
        var results = [];
        for (var i in value) {
            if (i >= limit)
                continue;
            if (Number(i) % columns == 0) {
                results.push([value[i]]);
            }
            else {
                results[results.length - 1].push(value[i]);
            }
        }
        return results;
    };
    MapViewComponent.prototype.setPhotoUrl = function (photo) {
        return "https://elections.sl/" + photo;
    };
    MapViewComponent.prototype.colorFilter = function (color) {
        var default_color = "#999";
        var colors = ["Pink", "Orange", "Green", "Red", "Blue", "Purple", "Yellow"];
        if (!color)
            return default_color;
        if (color.split(', ').length > 1) {
            return color.split(', ')[0];
        }
        if (colors.indexOf(color.charAt(0).toUpperCase() + color.slice(1)) > -1) {
            return color;
        }
        return "#" + color;
    };
    MapViewComponent.prototype.makeKey = function (value) {
        return value.toLowerCase().replace(/\ /gi, '_');
    };
    MapViewComponent.prototype.currentPercent = function (candidates) {
        return (100.0 - parseFloat(candidates[0].percent) - parseFloat(candidates[1].percent)).toFixed(2);
    };
    MapViewComponent.prototype.drawMap = function () {
        var fields = {
            year: this.year,
            type: this.type,
            region: this.region
        };
        var vm = this;
        this.dataService.loadResultsByFields(fields).then(function (data) {
            // vm.result = data;
            vm.result.ResultStatus = data['ResultStatus'];
            vm.result.TotalVotes = data['TotalVotes'];
            vm.result.ValidVotes = data['ValidVotes'];
            vm.result.Parties = data['Parties'];
            vm.result.Boundaries = data['Boundaries'];
            vm.result.Candidates = [];
            if (vm.region == "nation" && vm.result.Boundaries.length > 0) {
                vm.result.Candidates = vm.result.Boundaries[0].candidates;
            }
            var mapContainer = vm.year + "_map";
            // Create the popup
            var loadingPopup = vm.loadingCtrl.create({
                content: 'Loading data...'
            });
            // Show the popup
            loadingPopup.present();
            var sourceUrl = 'assets/maps/' + vm.region + '.geojson';
            // Map Init
            __WEBPACK_IMPORTED_MODULE_2_mapbox_gl_dist_mapbox_gl_js___default.a.accessToken = 'pk.eyJ1Ijoicm9tYW5qaW4iLCJhIjoiY2pkaXFleWJrMG9rNDJxcHJrNXNnN2d4NiJ9.sRB7ZJ05xbMZYyw5YvO7SQ';
            var map = new __WEBPACK_IMPORTED_MODULE_2_mapbox_gl_dist_mapbox_gl_js___default.a.Map({
                style: 'mapbox://styles/mapbox/light-v9',
                center: [-11.779889, 8.460555],
                zoom: 6.2,
                attributionControl: false,
                container: mapContainer
            });
            map.on('load', function () {
                // Add a layer showing the state polygons.
                map.addSource("map-layer", {
                    'type': 'geojson',
                    'data': sourceUrl
                });
                var color;
                var key;
                for (var _i = 0, _a = vm.result.Boundaries; _i < _a.length; _i++) {
                    var boundary = _a[_i];
                    key = vm.makeKey(boundary.name);
                    color = vm.colorFilter(boundary.candidates[0].color);
                    map.addLayer({
                        'id': key,
                        'type': 'fill',
                        'source': "map-layer",
                        'paint': {
                            'fill-color': color,
                            'fill-outline-color': 'rgba(255, 255, 255, 1)',
                            "fill-opacity": 0.3,
                        },
                        "filter": ["in", "Name", boundary.name]
                    });
                    map.addLayer({
                        "id": key + "-highlighted",
                        "type": "fill",
                        "source": "map-layer",
                        "paint": {
                            'fill-color': color,
                            'fill-outline-color': 'rgba(255, 255, 255, 0.5)',
                            "fill-opacity": 1.0
                        },
                        "filter": ["in", "Name", boundary.name]
                    });
                }
                map.addLayer({
                    'id': 'map-line',
                    'type': 'line',
                    'source': "map-layer",
                    'paint': {
                        'line-width': 3,
                        'line-color': 'rgba(255, 255, 255, 1)'
                    },
                });
                // When a click event occurs on a feature in the states layer, open a popup at the
                // location of the click, with description HTML from its properties.
                map.on('click', function (e) {
                    // set bbox as 5px reactangle area around clicked point
                    var features, filter;
                    var _loop_1 = function (boundary) {
                        key = vm.makeKey(boundary.name);
                        features = map.queryRenderedFeatures(e.point, { layers: [key] });
                        filter = features.reduce(function (memo, feature) {
                            memo.push(feature.properties.Name);
                            vm.result.Candidates = boundary.candidates;
                            vm.result.TotalVotes = boundary.votes;
                            vm.result.ValidVotes = boundary.votes;
                            return memo;
                        }, ['in', 'Name']);
                        map.setFilter(key + "-highlighted", filter);
                    };
                    for (var _i = 0, _a = vm.result.Boundaries; _i < _a.length; _i++) {
                        var boundary = _a[_i];
                        _loop_1(boundary);
                    }
                });
                // disable map zoom when using scroll
                map.scrollZoom.disable();
                map.doubleClickZoom.disable();
                loadingPopup.dismiss();
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('year'),
        __metadata("design:type", Object)
    ], MapViewComponent.prototype, "year", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('region'),
        __metadata("design:type", Object)
    ], MapViewComponent.prototype, "region", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('type'),
        __metadata("design:type", Object)
    ], MapViewComponent.prototype, "type", void 0);
    MapViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'keys'
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'map-view',template:/*ion-inline-start:"C:\Users\VM-3\Documents\sleodp_project\sleodp\src\components\map-view\map-view.html"*/'<!-- Generated template for the MapViewComponent component -->\n<div class="view-container">\n	<div id="{{year}}_map" class="map box">\n	</div>\n	<div class="election-details">\n		<div class="election-info">\n			<ion-grid no-padding>\n				<ion-row>\n					<ion-col text-left class="small">\n						Total Registered Votes: {{ result.TotalVotes }}<br>\n						Result Status: {{ result.ResultStatus }}\n					</ion-col>\n					<ion-col text-right class="small">\n						Total Valid Votes: {{ result.ValidVotes }}<br>\n						Total Invalid Votes: {{ result.InvalidVotes }}\n					</ion-col>\n				</ion-row>\n			</ion-grid>\n		</div>\n		<div class="election-parties">\n			<ion-grid no-padding>\n				<ion-row>\n					<ion-col *ngFor="let party of result.Parties">\n						<small>{{ party.Acronym }}</small>\n						<div class="party-card" [style.background-color]="colorFilter(party.Color)"></div>\n					</ion-col>\n				</ion-row>\n			</ion-grid>\n		</div>\n		<div class="election-competitors">\n			<ion-grid hideWhen="core,tablet" padding-top>\n				<ion-row *ngIf="result.Candidates.length > 1">\n					<ion-col>\n						<div padding-bottom text-right>\n							{{ result.Candidates[0].percent }} %\n						</div>\n						<div class="card" [style.background-color]="colorFilter(result.Candidates[0].color)">\n							<img src="/assets/imgs/avatar.png" *ngIf="!result.Candidates[0].photo">\n							<img src="{{ setPhotoUrl(result.Candidates[0].photo) }}" *ngIf="result.Candidates[0].photo">\n						</div>\n					</ion-col>\n					<ion-col width-25 text-center>\n						<div padding-bottom>{{ currentPercent(result.Candidates) }} %</div>\n						<div class="card">All Others</div>\n					</ion-col>\n					<ion-col>\n						<div padding-bottom text-left>\n							{{ result.Candidates[1].percent }} %\n						</div>\n						<div class="card" [style.background-color]="colorFilter(result.Candidates[1].color)">\n							<img src="/assets/imgs/avatar.png" *ngIf="!result.Candidates[1].photo">\n							<img src="{{ setPhotoUrl(result.Candidates[1].photo) }}" *ngIf="result.Candidates[1].photo">\n						</div>\n					</ion-col>\n				</ion-row>\n			</ion-grid>\n			<ion-grid showWhen="tablet">\n				<ion-row *ngFor="let row of transform2d(result.Candidates, 3, 6)">\n					<ion-col *ngFor="let candidate of row;">\n						<div padding-bottom>\n							{{ candidate.percent }} %\n						</div>\n						<div class="card" [style.background-color]="colorFilter(candidate.color)">\n							<img src="/assets/imgs/avatar.png" padding-left *ngIf="!candidate.photo">\n							<img src="{{ setPhotoUrl(candidate.photo) }}" padding-left *ngIf="candidate.photo">\n						</div>\n					</ion-col>\n				</ion-row>\n			</ion-grid>\n			<ion-grid showWhen="core">\n				<ion-row *ngFor="let row of transform2d(result.Candidates, 4, 12)">\n					<ion-col *ngFor="let candidate of row;" col-3>\n						<div padding-bottom>\n							{{ candidate.percent }} %\n						</div>\n						<div class="card" [style.background-color]="colorFilter(candidate.color)">\n							<img src="/assets/imgs/avatar.png" padding-left *ngIf="!candidate.photo">\n							<img src="{{ setPhotoUrl(candidate.photo) }}" padding-left *ngIf="candidate.photo">\n						</div>\n					</ion-col>\n				</ion-row>\n			</ion-grid>\n		</div>\n	</div>\n</div>'/*ion-inline-end:"C:\Users\VM-3\Documents\sleodp_project\sleodp\src\components\map-view\map-view.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular_index__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__providers_data_data__["a" /* DataProvider */]])
    ], MapViewComponent);
    return MapViewComponent;
}());

//# sourceMappingURL=map-view.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RangeViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the RangeViewComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var RangeViewComponent = (function () {
    function RangeViewComponent(viewCtrl, dataService) {
        this.viewCtrl = viewCtrl;
        this.dataService = dataService;
    }
    RangeViewComponent.prototype.seletGranularity = function (granularity) {
        this.dataService.setGranularity(granularity);
        this.viewCtrl.dismiss();
    };
    RangeViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'range-view',template:/*ion-inline-start:"C:\Users\VM-3\Documents\sleodp_project\sleodp\src\components\range-view\range-view.html"*/'<!-- Generated template for the RangeViewComponent component -->\n<ion-list>\n	<ion-list-header>Result Granularity</ion-list-header>\n	<button ion-item (click)="seletGranularity(\'nation\')">National Results</button>\n	<button ion-item (click)="seletGranularity(\'district\')">Results By District</button>\n	<button ion-item (click)="seletGranularity(\'constituency\')">Results By Constituency</button>\n	<button ion-item (click)="seletGranularity(\'ward\')">Results By Ward</button>\n	<button ion-item (click)="seletGranularity(\'polling_station\')">Results By Polling Station</button>\n</ion-list>'/*ion-inline-end:"C:\Users\VM-3\Documents\sleodp_project\sleodp\src\components\range-view\range-view.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */]])
    ], RangeViewComponent);
    return RangeViewComponent;
}());

//# sourceMappingURL=range-view.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(307);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_president_president__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_parliament_parliament__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_mayor_mayor__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_chairperson_chairperson__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_councilor_councilor__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_village_headman_village_headman__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_header_view_header_view__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_range_view_range_view__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_content_view_content_view__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_map_view_map_view__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_table_view_table_view__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_data_data__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// Pages







// Components





// Providers

var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["I" /* NgModule */])({
            declarations: [
                // App
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                // Pages
                __WEBPACK_IMPORTED_MODULE_9__pages_president_president__["a" /* PresidentPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_parliament_parliament__["a" /* ParliamentPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_mayor_mayor__["a" /* MayorPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_chairperson_chairperson__["a" /* ChairpersonPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_councilor_councilor__["a" /* CouncilorPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_village_headman_village_headman__["a" /* VillageHeadmanPage */],
                // Components
                __WEBPACK_IMPORTED_MODULE_15__components_header_view_header_view__["a" /* HeaderViewComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_range_view_range_view__["a" /* RangeViewComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_content_view_content_view__["a" /* ContentViewComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_map_view_map_view__["a" /* MapViewComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_table_view_table_view__["a" /* TableViewComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/chairperson/chairperson.module#ChairpersonPageModule', name: 'ChairpersonPage', segment: 'chairperson', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/councilor/councilor.module#CouncilorPageModule', name: 'CouncilorPage', segment: 'councilor', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mayor/mayor.module#MayorPageModule', name: 'MayorPage', segment: 'mayor', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/parliament/parliament.module#ParliamentPageModule', name: 'ParliamentPage', segment: 'parliament', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/president/president.module#PresidentPageModule', name: 'PresidentPage', segment: 'president', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/village-headman/village-headman.module#VillageHeadmanPageModule', name: 'VillageHeadmanPage', segment: 'village-headman', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_president_president__["a" /* PresidentPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_parliament_parliament__["a" /* ParliamentPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_mayor_mayor__["a" /* MayorPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_chairperson_chairperson__["a" /* ChairpersonPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_councilor_councilor__["a" /* CouncilorPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_village_headman_village_headman__["a" /* VillageHeadmanPage */],
                __WEBPACK_IMPORTED_MODULE_16__components_range_view_range_view__["a" /* RangeViewComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_3__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_20__providers_data_data__["a" /* DataProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_map_view_map_view__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_data__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ContentViewComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ContentViewComponent = (function () {
    function ContentViewComponent(dataService, plt) {
        this.dataService = dataService;
        this.plt = plt;
        this.isTablet = this.plt.is('tablet');
        this.isDesktop = this.plt.is('core');
        this.firstTime = true;
        this.setMapMode(true);
    }
    ContentViewComponent.prototype.ngAfterViewInit = function () {
    };
    ContentViewComponent.prototype.setMapMode = function (mode) {
        var _this = this;
        if (this.mapMode == mode)
            return;
        this.mapMode = mode;
        if (this.firstTime) {
            this.firstTime = false;
        }
        else {
            if (this.mapMode) {
                setTimeout(function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    _this.setMapInit(_this.region);
                }, 10);
            }
        }
    };
    ContentViewComponent.prototype.seletGranularity = function (granularity) {
        this.dataService.setGranularity(granularity);
    };
    ContentViewComponent.prototype.setContentView = function (region) {
        var _this = this;
        setTimeout(function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            _this.setMapInit(region);
            _this.setTableInit(region);
            _this.setResultRegion(region);
        }, 10);
    };
    ContentViewComponent.prototype.setMapInit = function (region) {
        if (this.mapView) {
            this.mapView.drawMap();
        }
    };
    ContentViewComponent.prototype.setTableInit = function (region) {
    };
    ContentViewComponent.prototype.setResultRegion = function (region) {
        switch (region) {
            case "nation":
                this.resultRegion = "National Results";
                break;
            case "district":
                this.resultRegion = "Results By District";
                break;
            case "constituency":
                this.resultRegion = "Results By Constituency";
                break;
            case "ward":
                this.resultRegion = "Result By Ward";
                break;
            case "polling_station":
                this.resultRegion = "Result By Polling Station";
                break;
            default:
                break;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__components_map_view_map_view__["a" /* MapViewComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__components_map_view_map_view__["a" /* MapViewComponent */])
    ], ContentViewComponent.prototype, "mapView", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('year'),
        __metadata("design:type", Object)
    ], ContentViewComponent.prototype, "year", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('type'),
        __metadata("design:type", Object)
    ], ContentViewComponent.prototype, "type", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('region'),
        __metadata("design:type", Object)
    ], ContentViewComponent.prototype, "region", void 0);
    ContentViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'content-view',template:/*ion-inline-start:"C:\Users\VM-3\Documents\sleodp_project\sleodp\src\components\content-view\content-view.html"*/'<!-- Generated template for the ContentViewComponent component -->\n<div>\n	<ion-grid *ngIf="isDesktop">\n		<ion-row>\n			<ion-col class="granularity-list" col-4>\n				<a *ngIf="region != \'nation\'" (click)="seletGranularity(\'nation\')">\n					<div class="senate">\n						<div class="box">\n							<h2>National Results</h2>\n							<div class="box-content">\n								<img src="assets/imgs/map.png">\n							</div>\n						</div>\n					</div>\n				</a>\n				<a *ngIf="region != \'district\'" (click)="seletGranularity(\'district\')">\n					<div class="senate">\n						<div class="box">\n							<h2>Results by district</h2>\n							<div class="box-content">\n								<img src="assets/imgs/map.png">\n							</div>\n						</div>\n					</div>\n				</a>\n				<a *ngIf="region != \'constituency\'" (click)="seletGranularity(\'constituency\')">\n					<div class="senate">\n						<div class="box">\n							<h2>Results by constituency</h2>\n							<div class="box-content">\n								<img src="assets/imgs/map.png">\n							</div>\n						</div>\n					</div>\n				</a>\n				<a *ngIf="region != \'ward\'" (click)="seletGranularity(\'ward\')">\n					<div class="senate">\n						<div class="box">\n							<h2>Results by ward</h2>\n							<div class="box-content">\n								<img src="assets/imgs/map.png">\n							</div>\n						</div>\n					</div>\n				</a>\n				<a *ngIf="region != \'polling_station\'" (click)="seletGranularity(\'polling_station\')">\n					<div class="senate">\n						<div class="box">\n							<h2>Results by Polling Station</h2>\n							<div class="box-content">\n								<img src="assets/imgs/map.png">\n							</div>\n						</div>\n					</div>\n				</a>\n			</ion-col>\n			<ion-col col-8 style="position: absolute; right: 0">\n				<ion-toolbar class="viewModeToolbar">\n					<button ion-button (click)="setMapMode(true)" [ngClass]="{\'active\': mapMode}" class="modeButton" float-left>\n						Map&nbsp;<i class="fa fa-globe"></i>\n					</button>\n					<ion-title text-center>{{ resultRegion }}</ion-title>\n					<ion-buttons end>\n						<button ion-button (click)="setMapMode(false)" [ngClass]="{\'active\': !mapMode}" class="modeButton">\n							Table&nbsp;<i class="fa fa-table"></i>\n						</button>\n					</ion-buttons>\n				</ion-toolbar>\n				<map-view *ngIf="mapMode" [year]="year" [region]="region" [type]="type" #mapview>\n				</map-view>\n			</ion-col>\n		</ion-row>\n	</ion-grid>\n	<div *ngIf="!isDesktop">\n		<ion-toolbar class="viewModeToolbar">\n			<button ion-button (click)="setMapMode(true)" [ngClass]="{\'active\': mapMode}" class="modeButton" float-left>\n				Map&nbsp;<i class="fa fa-globe"></i>\n			</button>\n			<ion-title text-center>{{ resultRegion }}</ion-title>\n			<ion-buttons end>\n				<button ion-button (click)="setMapMode(false)" [ngClass]="{\'active\': !mapMode}" class="modeButton">\n					Table&nbsp;<i class="fa fa-table"></i>\n				</button>\n			</ion-buttons>\n		</ion-toolbar>\n	</div>\n	<div *ngIf="!isDesktop">\n		<map-view *ngIf="mapMode" [year]="year" [region]="region" [type]="type" #mapview>\n		</map-view>\n	</div>\n	<table-view *ngIf="!mapMode" [year]="year" [region]="region" [type]="type">\n	</table-view>\n</div>\n'/*ion-inline-end:"C:\Users\VM-3\Documents\sleodp_project\sleodp\src\components\content-view\content-view.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */]])
    ], ContentViewComponent);
    return ContentViewComponent;
}());

//# sourceMappingURL=content-view.js.map

/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_president_president__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_parliament_parliament__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_mayor_mayor__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_chairperson_chairperson__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_councilor_councilor__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_village_headman_village_headman__ = __webpack_require__(67);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_president_president__["a" /* PresidentPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'President', component: __WEBPACK_IMPORTED_MODULE_4__pages_president_president__["a" /* PresidentPage */] },
            { title: 'Member of Parliament', component: __WEBPACK_IMPORTED_MODULE_5__pages_parliament_parliament__["a" /* ParliamentPage */] },
            { title: 'Mayor', component: __WEBPACK_IMPORTED_MODULE_6__pages_mayor_mayor__["a" /* MayorPage */] },
            { title: 'Chairperson', component: __WEBPACK_IMPORTED_MODULE_7__pages_chairperson_chairperson__["a" /* ChairpersonPage */] },
            { title: 'Councilor', component: __WEBPACK_IMPORTED_MODULE_8__pages_councilor_councilor__["a" /* CouncilorPage */] },
            { title: 'VillageHeadman', component: __WEBPACK_IMPORTED_MODULE_9__pages_village_headman_village_headman__["a" /* VillageHeadmanPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\VM-3\Documents\sleodp_project\sleodp\src\app\app.html"*/'<ion-menu [content]="content" type="overlay">\n\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Election Type</ion-title>\n      <button ion-button menuToggle text-right end color="dark">\n        <i class="fa fa-navicon"></i>\n      </button>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\VM-3\Documents\sleodp_project\sleodp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__range_view_range_view__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_president_president__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_parliament_parliament__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_chairperson_chairperson__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_councilor_councilor__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_village_headman_village_headman__ = __webpack_require__(67);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the HeaderViewComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var HeaderViewComponent = (function () {
    function HeaderViewComponent(navCtrl, popoverCtrl, plt, el, rd) {
        this.navCtrl = navCtrl;
        this.popoverCtrl = popoverCtrl;
        this.plt = plt;
        this.el = el;
        this.rd = rd;
        this.isTablet = this.plt.is('tablet');
        this.isDesktop = this.plt.is('core');
    }
    HeaderViewComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.isDesktop) {
            setTimeout(function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var view = _this.navCtrl.getActive();
                var selected = _this.el.nativeElement.querySelector('ion-segment-button.' + view.component.name);
                _this.rd.addClass(selected, 'active');
            }, 100);
        }
    };
    HeaderViewComponent.prototype.selectRange = function (event) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_2__range_view_range_view__["a" /* RangeViewComponent */]);
        popover.present({
            ev: event
        });
    };
    HeaderViewComponent.prototype.selectedType = function (type) {
        switch (type) {
            case "president":
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_president_president__["a" /* PresidentPage */]);
                break;
            case "parliament":
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_parliament_parliament__["a" /* ParliamentPage */]);
                break;
            case "chairperson":
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_chairperson_chairperson__["a" /* ChairpersonPage */]);
                break;
            case "councilor":
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_councilor_councilor__["a" /* CouncilorPage */]);
                break;
            case "villageheadman":
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_village_headman_village_headman__["a" /* VillageHeadmanPage */]);
                break;
            default:
                // code...
                break;
        }
    };
    HeaderViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'header-view',template:/*ion-inline-start:"C:\Users\VM-3\Documents\sleodp_project\sleodp\src\components\header-view\header-view.html"*/'<!-- Generated template for the HeaderViewComponent component -->\n<ion-header>\n	<ion-toolbar color="dark" *ngIf="!isDesktop">\n		<button ion-button menuToggle>\n			<i class="fa fa-navicon"></i>\n		</button>\n		<ion-title text-uppercase text-center>sloedp</ion-title>\n\n		<ion-buttons end>\n			<button ion-button class="bar-button-menutoggle-md" (click)="selectRange($event)">\n				<i class="fa fa-ellipsis-h"></i>\n			</button>\n		</ion-buttons>\n	</ion-toolbar>\n	<ion-toolbar color="dark" *ngIf="isDesktop">\n		<button ion-button href="/" class="bar-button-menutoggle-md bar-button-default-md disable-hover logo-icon" float-left>\n			<img src="assets/imgs/logo.png" width="35"> &nbsp;SLOEDP\n		</button>\n		<ion-title text-uppercase text-center>\n			<ion-segment class="page-links" color="primary" width-50>\n				<ion-segment-button class="PresidentPage" (ionSelect)="selectedType(\'president\')">\n				President\n				</ion-segment-button>\n				<ion-segment-button class="ParliamentPage" (ionSelect)="selectedType(\'parliament\')">\n				Member of Parliament\n				</ion-segment-button>\n				<ion-segment-button class="ChairpersonPage" (ionSelect)="selectedType(\'chairperson\')">\n				Mayor/Chairperson\n				</ion-segment-button>\n				<ion-segment-button class="CouncilorPage" (ionSelect)="selectedType(\'councilor\')">\n				Councilor\n				</ion-segment-button>\n				<ion-segment-button class="VillageHeadmanPage" (ionSelect)="selectedType(\'villageheadman\')">\n				Village Headman\n				</ion-segment-button>\n			</ion-segment>\n		</ion-title>\n	</ion-toolbar>\n	<ng-content select="[sub-navbar]"></ng-content>\n</ion-header>\n'/*ion-inline-end:"C:\Users\VM-3\Documents\sleodp_project\sleodp\src\components\header-view\header-view.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer2 */]])
    ], HeaderViewComponent);
    return HeaderViewComponent;
}());

//# sourceMappingURL=header-view.js.map

/***/ }),

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_data_data__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TableViewComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var TableViewComponent = (function () {
    function TableViewComponent(dataService) {
        this.dataService = dataService;
        this.datas = [{
                name: 'Kamara Samura',
                party: 'APC',
                votes: '640',
                percent: '40'
            }, {
                name: 'Bio Julius',
                party: 'SLPP',
                votes: '480',
                percent: '30'
            }, {
                name: 'Yumkella Kandeh',
                party: 'NGC',
                votes: '240',
                percent: '15'
            }, {
                name: 'Manasaray Mohamed',
                party: 'ADP',
                votes: '120',
                percent: '7.5'
            }, {
                name: 'Sam-Sumana Samuel',
                party: 'C4C',
                votes: '60',
                percent: '3.75'
            }, {
                name: 'Maigai Charles',
                party: 'PMDC',
                votes: '16',
                percent: '1'
            }];
    }
    TableViewComponent.prototype.ngAfterViewInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('year'),
        __metadata("design:type", Object)
    ], TableViewComponent.prototype, "year", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('region'),
        __metadata("design:type", Object)
    ], TableViewComponent.prototype, "region", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('type'),
        __metadata("design:type", Object)
    ], TableViewComponent.prototype, "type", void 0);
    TableViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'table-view',template:/*ion-inline-start:"C:\Users\VM-3\Documents\sleodp_project\sleodp\src\components\table-view\table-view.html"*/'<!-- Generated template for the TableViewComponent component -->\n<div>\n	<div class="row header">\n		<div class="col">Candidate</div>\n		<div class="col">Party</div>\n		<div class="col">Votes</div>\n		<div class="col">%</div>\n	</div>\n	<div class="row" *ngFor="let data of datas">\n		<div class="col">{{data.name}}</div>\n		<div class="col">{{data.party}}</div>\n		<div class="col">{{data.votes}}</div>\n		<div class="col">{{data.percent}}</div>\n	</div>\n</div>\n'/*ion-inline-end:"C:\Users\VM-3\Documents\sleodp_project\sleodp\src\components\table-view\table-view.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_data_data__["a" /* DataProvider */]])
    ], TableViewComponent);
    return TableViewComponent;
}());

//# sourceMappingURL=table-view.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChairpersonPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_content_view_content_view__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the ChairpersonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChairpersonPage = (function () {
    function ChairpersonPage(navCtrl, navParams, dataService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataService = dataService;
        this.region = "district";
        this.initialSlide = 4;
        this.prevEnabled = false;
        this.nextEnabled = false;
        this.year = 0;
        this.prevYear = 0;
        this.nextYear = 0;
        this.subpages = [
            { year: 1996 },
            { year: 2002 },
            { year: 2007 },
            { year: 2012 },
            { year: 2018 },
        ];
        this.initialSlide = this.subpages.length - 1;
        this.setPageInfo();
        this.subscription = this.dataService.getGranularity().subscribe(function (granularity) {
            _this.region = granularity;
            var currentIndex = _this.slides.getActiveIndex();
            if (currentIndex == _this.totalPages)
                return;
            _this.subPageViews._results[currentIndex].setContentView(_this.region);
        });
    }
    ChairpersonPage.prototype.ionViewDidLoad = function () {
    };
    ChairpersonPage.prototype.ionViewDidEnter = function () {
        if (this.subpages.length > 0) {
            this.subPageViews._results[this.subPageViews._results.length - 1].setContentView(this.region);
        }
    };
    ChairpersonPage.prototype.setPageInfo = function () {
        this.totalPages = this.subpages.length;
        if (this.totalPages > 0) {
            this.year = this.subpages[0].year;
        }
        if (this.totalPages > 1) {
            this.nextEnabled = true;
            this.nextYear = this.subpages[1].year;
        }
    };
    // Page Setting
    ChairpersonPage.prototype.setPrevPage = function () {
        this.slides.slideTo(this.slides.getActiveIndex() - 1, 500);
    };
    ChairpersonPage.prototype.setNextPage = function () {
        this.slides.slideTo(this.slides.getActiveIndex() + 1, 500);
    };
    ChairpersonPage.prototype.slideChanged = function () {
        var currentIndex = this.slides.getActiveIndex();
        if (!this.totalPages || currentIndex == this.totalPages || this.totalPages == 0)
            return;
        this.subPageViews._results[currentIndex].setContentView(this.region);
        this.prevEnabled = !this.slides.isBeginning();
        this.nextEnabled = !this.slides.isEnd();
        this.year = this.subpages[currentIndex].year;
        this.prevYear = this.prevEnabled ? this.subpages[currentIndex - 1].year : 0;
        this.nextYear = this.nextEnabled ? this.subpages[currentIndex + 1].year : 0;
    };
    ChairpersonPage.prototype.ionViewDidLeave = function () {
        this.subscription.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Slides */])
    ], ChairpersonPage.prototype, "slides", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChildren */])(__WEBPACK_IMPORTED_MODULE_3__components_content_view_content_view__["a" /* ContentViewComponent */]),
        __metadata("design:type", Object)
    ], ChairpersonPage.prototype, "subPageViews", void 0);
    ChairpersonPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chairperson',template:/*ion-inline-start:"C:\Users\VM-3\Documents\sleodp_project\sleodp\src\pages\chairperson\chairperson.html"*/'<!--\n  Generated template for the ChairpersonPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<header-view>\n  <ion-navbar color="dark" sub-navbar>\n    <a float-left *ngIf="prevEnabled" (click)="setPrevPage()" padding-left>\n      <ion-icon name="arrow-back" item-start></ion-icon> {{prevYear}}\n    </a>\n\n    <ion-title>\n      {{year}} Chairperson Elections\n    </ion-title>\n    <a float-right *ngIf="nextEnabled" (click)="setNextPage()" padding-right>\n      {{nextYear}} <ion-icon name="arrow-forward" item-start></ion-icon>\n    </a>\n  </ion-navbar>\n</header-view>\n\n<ion-content padding>\n  <ion-slides (ionSlideDidChange)="slideChanged()" [initialSlide]="initialSlide">\n\n    <ion-slide *ngFor="let p of subpages; let i = index">\n      <content-view type="chairperson" [year]="p.year" [region]="region" #chairperson_{{i}}></content-view>\n    </ion-slide>\n\n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"C:\Users\VM-3\Documents\sleodp_project\sleodp\src\pages\chairperson\chairperson.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */]])
    ], ChairpersonPage);
    return ChairpersonPage;
}());

//# sourceMappingURL=chairperson.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CouncilorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_content_view_content_view__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the CouncilorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CouncilorPage = (function () {
    function CouncilorPage(navCtrl, navParams, dataService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataService = dataService;
        this.region = "ward";
        this.initialSlide = 4;
        this.prevEnabled = false;
        this.nextEnabled = false;
        this.year = 0;
        this.prevYear = 0;
        this.nextYear = 0;
        this.subpages = [
            { year: 1996 },
            { year: 2002 },
            { year: 2007 },
            { year: 2012 },
            { year: 2018 },
        ];
        this.initialSlide = this.subpages.length - 1;
        this.setPageInfo();
        this.subscription = this.dataService.getGranularity().subscribe(function (granularity) {
            _this.region = granularity;
            var currentIndex = _this.slides.getActiveIndex();
            if (currentIndex == _this.totalPages)
                return;
            _this.subPageViews._results[currentIndex].setContentView(_this.region);
        });
    }
    CouncilorPage.prototype.ionViewDidLoad = function () {
    };
    CouncilorPage.prototype.ionViewDidEnter = function () {
        if (this.subpages.length > 0) {
            this.subPageViews._results[this.subPageViews._results.length - 1].setContentView(this.region);
        }
    };
    CouncilorPage.prototype.setPageInfo = function () {
        this.totalPages = this.subpages.length;
        if (this.totalPages > 0) {
            this.year = this.subpages[0].year;
        }
        if (this.totalPages > 1) {
            this.nextEnabled = true;
            this.nextYear = this.subpages[1].year;
        }
    };
    // Page Setting
    CouncilorPage.prototype.setPrevPage = function () {
        this.slides.slideTo(this.slides.getActiveIndex() - 1, 500);
    };
    CouncilorPage.prototype.setNextPage = function () {
        this.slides.slideTo(this.slides.getActiveIndex() + 1, 500);
    };
    CouncilorPage.prototype.slideChanged = function () {
        var currentIndex = this.slides.getActiveIndex();
        if (!this.totalPages || currentIndex == this.totalPages || this.totalPages == 0)
            return;
        this.subPageViews._results[currentIndex].setContentView(this.region);
        this.prevEnabled = !this.slides.isBeginning();
        this.nextEnabled = !this.slides.isEnd();
        this.year = this.subpages[currentIndex].year;
        this.prevYear = this.prevEnabled ? this.subpages[currentIndex - 1].year : 0;
        this.nextYear = this.nextEnabled ? this.subpages[currentIndex + 1].year : 0;
    };
    CouncilorPage.prototype.ionViewDidLeave = function () {
        this.subscription.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Slides */])
    ], CouncilorPage.prototype, "slides", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChildren */])(__WEBPACK_IMPORTED_MODULE_3__components_content_view_content_view__["a" /* ContentViewComponent */]),
        __metadata("design:type", Object)
    ], CouncilorPage.prototype, "subPageViews", void 0);
    CouncilorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-councilor',template:/*ion-inline-start:"C:\Users\VM-3\Documents\sleodp_project\sleodp\src\pages\councilor\councilor.html"*/'<!--\n  Generated template for the CouncilorPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<header-view>\n  <ion-navbar color="dark" sub-navbar>\n    <a float-left *ngIf="prevEnabled" (click)="setPrevPage()" padding-left>\n      <ion-icon name="arrow-back" item-start></ion-icon> {{prevYear}}\n    </a>\n\n    <ion-title>\n      {{year}} Council Elections\n    </ion-title>\n    <a float-right *ngIf="nextEnabled" (click)="setNextPage()" padding-right>\n      {{nextYear}} <ion-icon name="arrow-forward" item-start></ion-icon>\n    </a>\n  </ion-navbar>\n</header-view>\n\n<ion-content padding>\n  <ion-slides (ionSlideDidChange)="slideChanged()" [initialSlide]="initialSlide">\n\n    <ion-slide *ngFor="let p of subpages; let i = index">\n      <content-view type="councilor" [year]="p.year" [region]="region" #councilor_{{i}}></content-view>\n    </ion-slide>\n\n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"C:\Users\VM-3\Documents\sleodp_project\sleodp\src\pages\councilor\councilor.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */]])
    ], CouncilorPage);
    return CouncilorPage;
}());

//# sourceMappingURL=councilor.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParliamentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_content_view_content_view__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the ParliamentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ParliamentPage = (function () {
    function ParliamentPage(navCtrl, navParams, dataService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataService = dataService;
        this.region = "constituency";
        this.initialSlide = 4;
        this.prevEnabled = false;
        this.nextEnabled = false;
        this.year = 0;
        this.prevYear = 0;
        this.nextYear = 0;
        this.subpages = [
            { year: 1996 },
            { year: 2002 },
            { year: 2007 },
            { year: 2012 },
            { year: 2018 },
        ];
        this.initialSlide = this.subpages.length - 1;
        this.setPageInfo();
        this.subscription = this.dataService.getGranularity().subscribe(function (granularity) {
            _this.region = granularity;
            var currentIndex = _this.slides.getActiveIndex();
            if (currentIndex == _this.totalPages)
                return;
            _this.subPageViews._results[currentIndex].setContentView(_this.region);
        });
    }
    ParliamentPage.prototype.ionViewDidLoad = function () {
    };
    ParliamentPage.prototype.ionViewDidEnter = function () {
        if (this.subpages.length > 0) {
            this.subPageViews._results[this.subPageViews._results.length - 1].setContentView(this.region);
        }
    };
    ParliamentPage.prototype.setPageInfo = function () {
        this.totalPages = this.subpages.length;
        if (this.totalPages > 0) {
            this.year = this.subpages[0].year;
        }
        if (this.totalPages > 1) {
            this.nextEnabled = true;
            this.nextYear = this.subpages[1].year;
        }
    };
    // Page Setting
    ParliamentPage.prototype.setPrevPage = function () {
        this.slides.slideTo(this.slides.getActiveIndex() - 1, 500);
    };
    ParliamentPage.prototype.setNextPage = function () {
        this.slides.slideTo(this.slides.getActiveIndex() + 1, 500);
    };
    ParliamentPage.prototype.slideChanged = function () {
        var currentIndex = this.slides.getActiveIndex();
        if (!this.totalPages || currentIndex == this.totalPages || this.totalPages == 0)
            return;
        this.subPageViews._results[currentIndex].setContentView(this.region);
        this.prevEnabled = !this.slides.isBeginning();
        this.nextEnabled = !this.slides.isEnd();
        this.year = this.subpages[currentIndex].year;
        this.prevYear = this.prevEnabled ? this.subpages[currentIndex - 1].year : 0;
        this.nextYear = this.nextEnabled ? this.subpages[currentIndex + 1].year : 0;
    };
    ParliamentPage.prototype.ionViewDidLeave = function () {
        this.subscription.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Slides */])
    ], ParliamentPage.prototype, "slides", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChildren */])(__WEBPACK_IMPORTED_MODULE_3__components_content_view_content_view__["a" /* ContentViewComponent */]),
        __metadata("design:type", Object)
    ], ParliamentPage.prototype, "subPageViews", void 0);
    ParliamentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-parliament',template:/*ion-inline-start:"C:\Users\VM-3\Documents\sleodp_project\sleodp\src\pages\parliament\parliament.html"*/'<!--\n  Generated template for the ParliamentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<header-view>\n  <ion-navbar color="dark" sub-navbar>\n    <a float-left *ngIf="prevEnabled" (click)="setPrevPage()" padding-left>\n      <ion-icon name="arrow-back" item-start></ion-icon> {{prevYear}}\n    </a>\n\n    <ion-title>\n      {{year}} Parliamentary Elections\n    </ion-title>\n    <a float-right *ngIf="nextEnabled" (click)="setNextPage()" padding-right>\n      {{nextYear}} <ion-icon name="arrow-forward" item-start></ion-icon>\n    </a>\n  </ion-navbar>\n</header-view>\n\n<ion-content padding>\n  <ion-slides (ionSlideDidChange)="slideChanged()" [initialSlide]="initialSlide">\n\n    <ion-slide *ngFor="let p of subpages; let i = index">\n      <content-view type="parliament" [year]="p.year" [region]="region" #parliament_{{i}}></content-view>\n    </ion-slide>\n\n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"C:\Users\VM-3\Documents\sleodp_project\sleodp\src\pages\parliament\parliament.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */]])
    ], ParliamentPage);
    return ParliamentPage;
}());

//# sourceMappingURL=parliament.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PresidentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_content_view_content_view__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the PresidentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PresidentPage = (function () {
    function PresidentPage(navCtrl, navParams, dataService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataService = dataService;
        this.region = "nation";
        this.initialSlide = 4;
        this.prevEnabled = false;
        this.nextEnabled = false;
        this.year = 0;
        this.prevYear = 0;
        this.nextYear = 0;
        this.subpages = [
            { year: 1996 },
            { year: 2002 },
            { year: 2007 },
            { year: 2012 },
            { year: 2018 },
        ];
        this.initialSlide = this.subpages.length - 1;
        this.setPageInfo();
        this.subscription = this.dataService.getGranularity().subscribe(function (granularity) {
            _this.region = granularity;
            var currentIndex = _this.slides.getActiveIndex();
            if (currentIndex == _this.totalPages)
                return;
            _this.subPageViews._results[currentIndex].setContentView(_this.region);
        });
    }
    PresidentPage.prototype.ionViewDidLoad = function () {
    };
    PresidentPage.prototype.ionViewDidEnter = function () {
        if (this.subpages.length > 0) {
            this.subPageViews._results[this.subPageViews._results.length - 1].setContentView(this.region);
        }
    };
    PresidentPage.prototype.setPageInfo = function () {
        this.totalPages = this.subpages.length;
        if (this.totalPages > 0) {
            this.year = this.subpages[0].year;
        }
        if (this.totalPages > 1) {
            this.nextEnabled = true;
            this.nextYear = this.subpages[1].year;
        }
    };
    // Page Setting
    PresidentPage.prototype.setPrevPage = function () {
        this.slides.slideTo(this.slides.getActiveIndex() - 1, 500);
    };
    PresidentPage.prototype.setNextPage = function () {
        this.slides.slideTo(this.slides.getActiveIndex() + 1, 500);
    };
    PresidentPage.prototype.slideChanged = function () {
        var currentIndex = this.slides.getActiveIndex();
        if (!this.totalPages || currentIndex == this.totalPages || this.totalPages == 0)
            return;
        this.subPageViews._results[currentIndex].setContentView(this.region);
        this.prevEnabled = !this.slides.isBeginning();
        this.nextEnabled = !this.slides.isEnd();
        this.year = this.subpages[currentIndex].year;
        this.prevYear = this.prevEnabled ? this.subpages[currentIndex - 1].year : 0;
        this.nextYear = this.nextEnabled ? this.subpages[currentIndex + 1].year : 0;
    };
    PresidentPage.prototype.ionViewDidLeave = function () {
        this.subscription.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Slides */])
    ], PresidentPage.prototype, "slides", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChildren */])(__WEBPACK_IMPORTED_MODULE_3__components_content_view_content_view__["a" /* ContentViewComponent */]),
        __metadata("design:type", Object)
    ], PresidentPage.prototype, "subPageViews", void 0);
    PresidentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-president',template:/*ion-inline-start:"C:\Users\VM-3\Documents\sleodp_project\sleodp\src\pages\president\president.html"*/'<!--\n  Generated template for the PresidentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<header-view>\n  <ion-navbar color="dark" sub-navbar>\n    <a float-left *ngIf="prevEnabled" (click)="setPrevPage()" padding-left>\n      <ion-icon name="arrow-back" item-start></ion-icon> {{prevYear}}\n    </a>\n\n    <ion-title>\n      {{year}} Presidential Elections\n    </ion-title>\n    <a float-right *ngIf="nextEnabled" (click)="setNextPage()" padding-right>\n      {{nextYear}} <ion-icon name="arrow-forward" item-start></ion-icon>\n    </a>\n  </ion-navbar>\n</header-view>\n\n<ion-content padding>\n  <ion-slides (ionSlideDidChange)="slideChanged()" [initialSlide]="initialSlide">\n\n    <ion-slide *ngFor="let p of subpages; let i = index">\n      <content-view type="president" [year]="p.year" [region]="region" #president_{{i}}></content-view>\n    </ion-slide>\n\n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"C:\Users\VM-3\Documents\sleodp_project\sleodp\src\pages\president\president.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */]])
    ], PresidentPage);
    return PresidentPage;
}());

//# sourceMappingURL=president.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VillageHeadmanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_content_view_content_view__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the VillageHeadmanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VillageHeadmanPage = (function () {
    function VillageHeadmanPage(navCtrl, navParams, dataService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataService = dataService;
        this.region = "village";
        this.initialSlide = 4;
        this.prevEnabled = false;
        this.nextEnabled = false;
        this.year = 0;
        this.prevYear = 0;
        this.nextYear = 0;
        this.subpages = [
            { year: 1996 },
            { year: 2002 },
            { year: 2007 },
            { year: 2012 },
            { year: 2018 },
        ];
        this.initialSlide = this.subpages.length - 1;
        this.setPageInfo();
        this.subscription = this.dataService.getGranularity().subscribe(function (granularity) {
            _this.region = granularity;
            var currentIndex = _this.slides.getActiveIndex();
            if (currentIndex == _this.totalPages)
                return;
            _this.subPageViews._results[currentIndex].setContentView(_this.region);
        });
    }
    VillageHeadmanPage.prototype.ionViewDidLoad = function () {
    };
    VillageHeadmanPage.prototype.ionViewDidEnter = function () {
        if (this.subpages.length > 0) {
            this.subPageViews._results[this.subPageViews._results.length - 1].setContentView(this.region);
        }
    };
    VillageHeadmanPage.prototype.setPageInfo = function () {
        this.totalPages = this.subpages.length;
        if (this.totalPages > 0) {
            this.year = this.subpages[0].year;
        }
        if (this.totalPages > 1) {
            this.nextEnabled = true;
            this.nextYear = this.subpages[1].year;
        }
    };
    // Page Setting
    VillageHeadmanPage.prototype.setPrevPage = function () {
        this.slides.slideTo(this.slides.getActiveIndex() - 1, 500);
    };
    VillageHeadmanPage.prototype.setNextPage = function () {
        this.slides.slideTo(this.slides.getActiveIndex() + 1, 500);
    };
    VillageHeadmanPage.prototype.slideChanged = function () {
        var currentIndex = this.slides.getActiveIndex();
        if (!this.totalPages || currentIndex == this.totalPages || this.totalPages == 0)
            return;
        this.subPageViews._results[currentIndex].setContentView(this.region);
        this.prevEnabled = !this.slides.isBeginning();
        this.nextEnabled = !this.slides.isEnd();
        this.year = this.subpages[currentIndex].year;
        this.prevYear = this.prevEnabled ? this.subpages[currentIndex - 1].year : 0;
        this.nextYear = this.nextEnabled ? this.subpages[currentIndex + 1].year : 0;
    };
    VillageHeadmanPage.prototype.ionViewDidLeave = function () {
        this.subscription.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Slides */])
    ], VillageHeadmanPage.prototype, "slides", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChildren */])(__WEBPACK_IMPORTED_MODULE_3__components_content_view_content_view__["a" /* ContentViewComponent */]),
        __metadata("design:type", Object)
    ], VillageHeadmanPage.prototype, "subPageViews", void 0);
    VillageHeadmanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-village-headman',template:/*ion-inline-start:"C:\Users\VM-3\Documents\sleodp_project\sleodp\src\pages\village-headman\village-headman.html"*/'<!--\n  Generated template for the VillageheadmanPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<header-view>\n  <ion-navbar color="dark" sub-navbar>\n    <a float-left *ngIf="prevEnabled" (click)="setPrevPage()" padding-left>\n      <ion-icon name="arrow-back" item-start></ion-icon> {{prevYear}}\n    </a>\n\n    <ion-title>\n      {{year}} Village Headman Elections\n    </ion-title>\n    <a float-right *ngIf="nextEnabled" (click)="setNextPage()" padding-right>\n      {{nextYear}} <ion-icon name="arrow-forward" item-start></ion-icon>\n    </a>\n  </ion-navbar>\n</header-view>\n\n<ion-content padding>\n  <ion-slides (ionSlideDidChange)="slideChanged()" [initialSlide]="initialSlide">\n\n    <ion-slide *ngFor="let p of subpages; let i = index">\n      <content-view type="villageheadman" [year]="p.year" [region]="region" #villageheadman_{{i}}></content-view>\n    </ion-slide>\n\n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"C:\Users\VM-3\Documents\sleodp_project\sleodp\src\pages\village-headman\village-headman.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */]])
    ], VillageHeadmanPage);
    return VillageHeadmanPage;
}());

//# sourceMappingURL=village-headman.js.map

/***/ })

},[286]);
//# sourceMappingURL=main.js.map