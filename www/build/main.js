webpackJsonp([8],{

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MayorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataService = dataService;
        this.region = "district";
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
        this.initialSlide = this.subpages.length > 1 ? this.subpages.length - 1 : 0;
        this.setPageInfo();
    }
    MayorPage.prototype.ionViewDidLoad = function () {
    };
    MayorPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.subscription = this.dataService.getGranularity().subscribe(function (granularity) {
            _this.region = granularity;
            _this.setSlideChanges();
        });
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
        this.prevEnabled = !this.slides.isBeginning();
        this.nextEnabled = !this.slides.isEnd();
        this.year = this.subpages[currentIndex].year;
        this.prevYear = this.prevEnabled ? this.subpages[currentIndex - 1].year : 0;
        this.nextYear = this.nextEnabled ? this.subpages[currentIndex + 1].year : 0;
        this.setSlideChanges();
    };
    MayorPage.prototype.ionViewDidLeave = function () {
        this.subscription.unsubscribe();
    };
    MayorPage.prototype.setSlideChanges = function () {
        var currentIndex = this.slides.getActiveIndex();
        if (!this.totalPages || currentIndex == this.totalPages || this.totalPages == 0)
            return;
        this.subPageViews._results[currentIndex].setContentView();
        this.dataService.setYear(this.year);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Slides */])
    ], MayorPage.prototype, "slides", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])(Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return __WEBPACK_IMPORTED_MODULE_3__components_content_view_content_view__["a" /* ContentViewComponent */]; })),
        __metadata("design:type", Object)
    ], MayorPage.prototype, "subPageViews", void 0);
    MayorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-mayor',template:/*ion-inline-start:"C:\Users\VM-3\Documents\sleodp_project\sleodp\src\pages\mayor\mayor.html"*/'<!--\n  Generated template for the MayorPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<header-view type="mayor">\n  <ion-navbar color="dark" sub-navbar>\n    <a float-left *ngIf="prevEnabled" (click)="setPrevPage()" padding-left>\n      <ion-icon name="arrow-back" item-start></ion-icon> {{prevYear}}\n    </a>\n\n    <ion-title>\n      {{year}} Mayoral Elections\n    </ion-title>\n    <a float-right *ngIf="nextEnabled" (click)="setNextPage()" padding-right>\n      {{nextYear}} <ion-icon name="arrow-forward" item-start></ion-icon>\n    </a>\n  </ion-navbar>\n</header-view>\n\n<ion-content padding>\n  <ion-slides (ionSlideDidChange)="slideChanged()" [initialSlide]="initialSlide">\n\n    <ion-slide *ngFor="let p of subpages; let i = index">\n      <content-view type="mayor" [year]="p.year" [region]="region" #mayor_{{i}}></content-view>\n    </ion-slide>\n\n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"C:\Users\VM-3\Documents\sleodp_project\sleodp\src\pages\mayor\mayor.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */]])
    ], MayorPage);
    return MayorPage;
}());

//# sourceMappingURL=mayor.js.map

/***/ }),

/***/ 149:
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
webpackEmptyAsyncContext.id = 149;

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_async_waterfall__ = __webpack_require__(342);
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
        this.urls = {
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
        this.results = {};
        this.granularitySubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
    }
    DataProvider.prototype.setYear = function (year) {
        this.year = year;
    };
    DataProvider.prototype.getYear = function () {
        return this.year ? this.year : "";
    };
    DataProvider.prototype.loadParties = function () {
        var _this = this;
        if (this.parties_json) {
            return Promise.resolve(this.parties_json);
        }
        return new Promise(function (resolve) {
            _this.http.get(_this.urls.parties).subscribe(function (data) {
                _this.parties_json = _this.toPartiesJson(data);
                resolve(_this.parties_json);
            }, function (error) {
                console.log("Error with Data");
            });
        });
    };
    DataProvider.prototype.loadCandidates = function () {
        var _this = this;
        if (this.candidates_json) {
            return Promise.resolve(this.candidates_json);
        }
        return new Promise(function (resolve) {
            _this.http.get(_this.urls.candidates).subscribe(function (data) {
                _this.candidates_json = _this.toCandidatesJson(data);
                resolve(_this.candidates_json);
            }, function (error) {
                console.log("Error with Data");
            });
        });
    };
    DataProvider.prototype.loadPollingCentres = function () {
        var _this = this;
        if (this.polling_centres_json) {
            return Promise.resolve(this.polling_centres_json);
        }
        return new Promise(function (resolve) {
            _this.http.get(_this.urls.polling_centres).subscribe(function (data) {
                _this.polling_centres_json = _this.toPollingCentresJson(data);
                resolve(_this.polling_centres_json);
            }, function (error) {
                console.log("Error with Data");
            });
        });
    };
    DataProvider.prototype.loadResultsByType = function (fields) {
        var _this = this;
        var url = this.urls[fields.type];
        if (Number(fields.year) >= 2018)
            url = this.urls[fields.type + '_' + fields.year];
        return new Promise(function (resolve) {
            _this.http.get(url).subscribe(function (data) {
                resolve(data);
            }, function (error) {
                resolve([]);
            });
        });
    };
    DataProvider.prototype.loadResultsByFields = function (fields) {
        var vm = this;
        return new Promise(function (resolve) {
            __WEBPACK_IMPORTED_MODULE_3_async_waterfall___default()([
                function (callback) {
                    if (!(vm.results[fields.type] && vm.results[fields.type][fields.year])) {
                        if (!vm.results[fields.type])
                            vm.results[fields.type] = {};
                        vm.loadResultsByType(fields).then(function (data) {
                            vm.results[fields.type][fields.year] = {};
                            vm.results[fields.type][fields.year]['all'] = vm.getResultsByYear(data, fields.year);
                            callback(null);
                        });
                    }
                    else
                        callback(null);
                },
                function (callback) {
                    vm.loadParties().then(function (data) {
                        callback(null);
                    });
                },
                function (callback) {
                    vm.loadCandidates().then(function (data) {
                        callback(null);
                    });
                },
                function (callback) {
                    vm.loadPollingCentres().then(function (data) {
                        callback(null);
                    });
                },
                function (callback) {
                    if (!vm.results[fields.type][fields.year][fields.region]) {
                        var year = Number(fields.year);
                        if (year >= 2018) {
                            if (!vm.results[fields.type][fields.year]['polling_centre'])
                                vm.results[fields.type][fields.year]['polling_centre'] = vm.makeResultsByBoundary(vm.results[fields.type][fields.year]['all'], { year: fields.year, region: 'polling_centre' });
                            if (!vm.results[fields.type][fields.year]['ward'])
                                vm.results[fields.type][fields.year]['ward'] = vm.makeResultsByBoundary(vm.mergeResultsByBoundary(vm.results[fields.type][fields.year]['polling_centre'], "ward", fields.year), { year: fields.year, region: 'ward' });
                            if (!vm.results[fields.type][fields.year]['constituency'])
                                vm.results[fields.type][fields.year]['constituency'] = vm.makeResultsByBoundary(vm.mergeResultsByBoundary(vm.results[fields.type][fields.year]['ward'], "constituency", fields.year), { year: fields.year, region: 'constituency' });
                            if (!vm.results[fields.type][fields.year]['district'])
                                vm.results[fields.type][fields.year]['district'] = vm.makeResultsByBoundary(vm.mergeResultsByBoundary(vm.results[fields.type][fields.year]['constituency'], "district", fields.year), { year: fields.year, region: 'district' });
                            if (!vm.results[fields.type][fields.year]['nation'])
                                vm.results[fields.type][fields.year]['nation'] = vm.makeResultsByBoundary(vm.mergeResultsByBoundary(vm.results[fields.type][fields.year]['district'], "nation", fields.year), { year: fields.year, region: 'nation' });
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
            ], function (err, result) {
                console.log(result);
                resolve(result);
            });
        });
    };
    DataProvider.prototype.mergeResultsByBoundary = function (original_boundaries, range, year) {
        var result_type = this.getResultType(range);
        var electionResults = [];
        var temp_election_results = {}, BoundaryName, BoundaryKey, CandidateKey;
        for (var _i = 0, original_boundaries_1 = original_boundaries; _i < original_boundaries_1.length; _i++) {
            var boundary = original_boundaries_1[_i];
            BoundaryName = this.getBoundaryName(boundary.candidates[0], { region: range, year: year });
            BoundaryKey = this.makeKey(BoundaryName);
            if (!temp_election_results[BoundaryKey])
                temp_election_results[BoundaryKey] = {};
            for (var _a = 0, _b = boundary.candidates; _a < _b.length; _a++) {
                var candidate = _b[_a];
                CandidateKey = candidate['Candidate_SLEOP_ID'];
                if (!temp_election_results[BoundaryKey][CandidateKey])
                    temp_election_results[BoundaryKey][CandidateKey] = Object.assign({}, candidate);
                else
                    temp_election_results[BoundaryKey][CandidateKey]['ValidVotes'] += candidate['ValidVotes'];
            }
        }
        var boundary_result, election_result;
        for (var key in temp_election_results) {
            boundary_result = temp_election_results[key];
            for (var key1 in boundary_result) {
                election_result = Object.assign({}, boundary_result[key1]);
                election_result['ResultType'] = result_type;
                electionResults.push(election_result);
            }
        }
        return electionResults;
    };
    DataProvider.prototype.makeResultsByBoundary = function (election_results, fields) {
        var boundary_results = this.getResultsByBoundary(election_results, fields.region);
        var result_temp_boundaries = {}, temp_candidates = {}, temp_parties = {};
        var missing_parties = [], missing_names = [];
        var party, CandidateFullName, CandidateKey, BoundaryName, BoundaryKey, Votes, Latitude, Longitude, PollingCentreKey;
        for (var _i = 0, boundary_results_1 = boundary_results; _i < boundary_results_1.length; _i++) {
            var election_result = boundary_results_1[_i];
            party = election_result['CandidatePoliticalParty'];
            CandidateFullName = election_result['CandidateFirstName'].trim() + ' ' + election_result['CandidateSurname'].trim();
            if (party == '') {
                missing_parties.push(election_result);
                continue;
            }
            if (CandidateFullName == " ") {
                missing_names.push(election_result);
                continue;
            }
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
        for (var _a = 0, missing_parties_1 = missing_parties; _a < missing_parties_1.length; _a++) {
            var election_result = missing_parties_1[_a];
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
        for (var _b = 0, missing_names_1 = missing_names; _b < missing_names_1.length; _b++) {
            var election_result = missing_names_1[_b];
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
        for (var key1 in result_temp_boundaries) {
            temp_candidate_ary = [];
            row = result_temp_boundaries[key1]['candidates'];
            total_votes = result_temp_boundaries[key1]['votes'];
            for (var key2 in row) {
                row[key2]['ValidVotesPercentage'] = total_votes == 0 ? 0 : ((row[key2]['ValidVotes'] / total_votes) * 100).toFixed(2);
                temp_candidate_ary.push(row[key2]);
            }
            temp_candidate_ary.sort(function (a, b) { return a.ValidVotes > b.ValidVotes ? -1 : a.ValidVotes < b.ValidVotes ? 1 : 0; });
            result_temp_boundaries[key1]['candidates'] = temp_candidate_ary;
        }
        return this.toArray(result_temp_boundaries);
    };
    DataProvider.prototype.getResultsByYear = function (results, year) {
        return results.filter(function (election_result) {
            return year == election_result["ElectionDate"].substring(0, 4) ? election_result : '';
        });
    };
    DataProvider.prototype.getResultsByBoundary = function (election_results, boundary) {
        var result_type = this.getResultType(boundary);
        return election_results.filter(function (election_result) {
            return election_result.ResultType == result_type ? election_result : '';
        });
    };
    DataProvider.prototype.toPartiesJson = function (parties) {
        var parties_json = {};
        for (var _i = 0, parties_1 = parties; _i < parties_1.length; _i++) {
            var party = parties_1[_i];
            parties_json[party['Acronym']] = party;
        }
        return parties_json;
    };
    DataProvider.prototype.toCandidatesJson = function (candidates) {
        var candidates_json = {};
        for (var _i = 0, candidates_1 = candidates; _i < candidates_1.length; _i++) {
            var candidate = candidates_1[_i];
            candidates_json[candidate['CandidateSLEOP_ID']] = candidate;
        }
        return candidates_json;
    };
    DataProvider.prototype.toPollingCentresJson = function (polling_centres) {
        var polling_centres_json = {}, PollingCentreKey;
        for (var _i = 0, polling_centres_1 = polling_centres; _i < polling_centres_1.length; _i++) {
            var polling_centre = polling_centres_1[_i];
            PollingCentreKey = this.makeKey(polling_centre['PollingCentreName']);
            polling_centres_json[PollingCentreKey] = polling_centre;
        }
        return polling_centres_json;
    };
    DataProvider.prototype.toArray = function (json) {
        var ary = [];
        for (var key in json) {
            ary.push(json[key]);
        }
        return ary;
    };
    DataProvider.prototype.makeKey = function (value) {
        return value.toLowerCase().replace(/\ /gi, '_');
    };
    DataProvider.prototype.getResultType = function (boundary) {
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
    };
    DataProvider.prototype.getBoundaryName = function (election_result, fields) {
        var boundary_field = "";
        var year = Number(fields.year);
        if (fields.region == "nation")
            return "Sierra Leone";
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
    };
    DataProvider.prototype.setGranularity = function (data) {
        this.granularitySubject.next(data);
    };
    DataProvider.prototype.getGranularity = function () {
        return this.granularitySubject.asObservable();
    };
    DataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], DataProvider);
    return DataProvider;
}());

//# sourceMappingURL=data.js.map

/***/ }),

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/candidate-profile/candidate-profile.module": [
		394,
		7
	],
	"../pages/chairperson/chairperson.module": [
		395,
		6
	],
	"../pages/councilor/councilor.module": [
		396,
		5
	],
	"../pages/mayor/mayor.module": [
		397,
		4
	],
	"../pages/parliament/parliament.module": [
		398,
		3
	],
	"../pages/party-profile/party-profile.module": [
		399,
		2
	],
	"../pages/president/president.module": [
		400,
		1
	],
	"../pages/village-headman/village-headman.module": [
		401,
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
webpackAsyncContext.id = 193;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RangeViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
    function RangeViewComponent(viewCtrl, dataService, navParams) {
        this.viewCtrl = viewCtrl;
        this.dataService = dataService;
        this.navParams = navParams;
        this.nationAvailable = false;
        this.districtAvailable = false;
        this.constituencyAvailable = false;
        this.wardAvailable = false;
        this.pollingCentreAvailable = false;
        var year = dataService.getYear();
        var type = this.navParams.data.type;
        if (type == "villageheadman") {
            this.pollingCentreAvailable = true;
        }
        else {
            if (year != '2018') {
                switch (type) {
                    case "president":
                        this.nationAvailable = true;
                        this.districtAvailable = true;
                        break;
                    case "parliament":
                        this.constituencyAvailable = true;
                        break;
                    case "mayor":
                        this.districtAvailable = true;
                        break;
                    case "chairperson":
                        this.districtAvailable = true;
                        break;
                    case "councilor":
                        this.wardAvailable = true;
                        break;
                    default:
                        // code...
                        break;
                }
            }
            else {
                this.nationAvailable = true;
                this.districtAvailable = true;
                this.constituencyAvailable = true;
                this.wardAvailable = true;
                this.pollingCentreAvailable = true;
            }
        }
    }
    RangeViewComponent.prototype.seletGranularity = function (granularity) {
        this.dataService.setGranularity(granularity);
        this.viewCtrl.dismiss();
    };
    RangeViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'range-view',template:/*ion-inline-start:"C:\Users\VM-3\Documents\sleodp_project\sleodp\src\components\range-view\range-view.html"*/'<!-- Generated template for the RangeViewComponent component -->\n<ion-list>\n	<ion-list-header>Result Granularity</ion-list-header>\n	<button ion-item (click)="seletGranularity(\'nation\')" *ngIf="nationAvailable">National Results</button>\n	<button ion-item (click)="seletGranularity(\'district\')" *ngIf="districtAvailable">Results By District</button>\n	<button ion-item (click)="seletGranularity(\'constituency\')" *ngIf="constituencyAvailable">Results By Constituency</button>\n	<button ion-item (click)="seletGranularity(\'ward\')" *ngIf="wardAvailable">Results By Ward</button>\n	<button ion-item (click)="seletGranularity(\'polling_centre\')" *ngIf="pollingCentreAvailable">Results By Polling Centre</button>\n</ion-list>'/*ion-inline-end:"C:\Users\VM-3\Documents\sleodp_project\sleodp\src\components\range-view\range-view.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], RangeViewComponent);
    return RangeViewComponent;
}());

//# sourceMappingURL=range-view.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_index__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mapbox_gl_dist_mapbox_gl_js__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mapbox_gl_dist_mapbox_gl_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mapbox_gl_dist_mapbox_gl_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_party_profile_party_profile__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_candidate_profile_candidate_profile__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_data_data__ = __webpack_require__(19);
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
    function MapViewComponent(navCtrl, loadingCtrl, dataService, events) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.dataService = dataService;
        this.events = events;
        this.result = {
            'ResultStatus': "",
            'TotalVotes': "",
            'ValidVotes': "",
            'InvalidVotes': "",
            'Parties': {},
            'Candidates': {},
            'Boundaries': [],
            'ElectionResults': []
        };
        this.noWinner = true;
    }
    MapViewComponent.prototype.ngAfterViewInit = function () {
        this.isLoaded = false;
    };
    MapViewComponent.prototype.gotoPartyDetail = function (party) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_party_profile_party_profile__["a" /* PartyProfilePage */], { party: party });
    };
    MapViewComponent.prototype.gotoCandidateDetail = function (candidate_id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_candidate_profile_candidate_profile__["a" /* CandidateProfilePage */], { candidate: this.result.Candidates[candidate_id] });
    };
    MapViewComponent.prototype.candidatesEnable = function () {
        return this.result.ElectionResults.length > 0;
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
        return "https://dev.electiondata.io/" + photo;
    };
    MapViewComponent.prototype.colorFilter = function (_color) {
        var default_color = "#999";
        var colors = ["Pink", "Orange", "Green", "Red", "Blue", "Purple", "Yellow"];
        var color = _color.trim();
        if (!color)
            return default_color;
        if (color.split(',').length > 1) {
            return color.split(',')[0];
        }
        if (colors.indexOf(color.charAt(0).toUpperCase() + color.slice(1)) > -1) {
            return color;
        }
        return "#" + color;
    };
    MapViewComponent.prototype.makeKey = function (value) {
        return value.toLowerCase().replace(/\ /gi, '_');
    };
    MapViewComponent.prototype.otherPercent = function (candidates) {
        return (100.0 - parseFloat(candidates[0].ValidVotesPercentage) - parseFloat(candidates[1].ValidVotesPercentage)).toFixed(2);
    };
    MapViewComponent.prototype.drawMap = function () {
        var fields = {
            year: this.year,
            type: this.type,
            region: this.region
        };
        var vm = this;
        // Create the popup
        var loadingPopup = vm.loadingCtrl.create({
            content: 'Loading data...'
        });
        // Show the popup
        loadingPopup.present();
        this.dataService.loadResultsByFields(fields).then(function (data) {
            var Parties = data['Parties'];
            vm.result.Candidates = data['Candidates'];
            vm.result.Boundaries = data['Boundaries'];
            vm.result.ElectionResults = [];
            if (vm.result.Boundaries.length > 0) {
                vm.result.ElectionResults = vm.result.Boundaries[0].candidates;
                vm.result.TotalVotes = vm.result.Boundaries[0].votes;
                vm.result.ValidVotes = vm.result.Boundaries[0].votes;
                vm.events.publish('boundary:select', vm.result.Boundaries[0].name);
                vm.result.Parties = {};
                if (vm.result.Boundaries[0].candidates[0]['ValidVotes'] > 0) {
                    vm.noWinner = false;
                }
                else {
                    vm.noWinner = true;
                }
                for (var _i = 0, _a = vm.result.Boundaries[0].candidates; _i < _a.length; _i++) {
                    var candidate = _a[_i];
                    vm.result.Parties[candidate['CandidatePoliticalParty']] = Parties[candidate['CandidatePoliticalParty']];
                }
            }
            var mapContainer = vm.year + "_map";
            var suffix = '';
            if (vm.year == '2018' && vm.region == 'district')
                suffix = "-2018";
            var sourceUrl = 'assets/maps/' + vm.region + suffix + '.geojson';
            // Map Init
            __WEBPACK_IMPORTED_MODULE_2_mapbox_gl_dist_mapbox_gl_js___default.a.accessToken = 'pk.eyJ1Ijoicm9tYW5qaW4iLCJhIjoiY2pkaXFleWJrMG9rNDJxcHJrNXNnN2d4NiJ9.sRB7ZJ05xbMZYyw5YvO7SQ';
            var map = new __WEBPACK_IMPORTED_MODULE_2_mapbox_gl_dist_mapbox_gl_js___default.a.Map({
                style: 'mapbox://styles/mapbox/light-v9',
                center: [-11.779889, 8.460555],
                zoom: 5.5,
                attributionControl: false,
                container: mapContainer
            });
            map.on('load', function () {
                // Add a layer showing the state polygons.
                if (vm.region == "nation" || vm.region == "district") {
                    map.addSource("map-layer", {
                        'type': 'geojson',
                        'data': sourceUrl
                    });
                    var color, key, count = 0, boundary_highlighted = "";
                    for (var _i = 0, _a = vm.result.Boundaries; _i < _a.length; _i++) {
                        var boundary = _a[_i];
                        key = vm.makeKey(boundary.name);
                        color = vm.colorFilter(boundary.candidates[0].CandidatePoliticalPartyColor);
                        map.addLayer({
                            'id': key,
                            'type': 'fill',
                            'source': "map-layer",
                            'paint': {
                                'fill-color': color,
                                'fill-outline-color': 'rgba(255, 255, 255, 1)',
                                "fill-opacity": 0.2,
                            },
                            "filter": ["in", "Name", boundary.name]
                        });
                        if (count == 0) {
                            boundary_highlighted = boundary.name;
                        }
                        map.addLayer({
                            "id": key + "-highlighted",
                            "type": "fill",
                            "source": "map-layer",
                            "paint": {
                                'fill-color': color,
                                'fill-outline-color': 'rgba(255, 255, 255, 0.5)',
                                "fill-opacity": 0.5
                            },
                            "filter": ["in", "Name", boundary_highlighted]
                        });
                        count++;
                    }
                    map.addLayer({
                        'id': 'map-line',
                        'type': 'line',
                        'source': "map-layer",
                        'paint': {
                            'line-width': 2,
                            'line-color': 'rgba(255, 255, 255, 1)'
                        },
                    });
                    // When a click event occurs on a feature in the states layer, open a popup at the
                    // location of the click, with description HTML from its properties.
                    map.on('click', function (e) {
                        // set bbox as 5px reactangle area around clicked point
                        var features, filter;
                        count = 0;
                        var _loop_1 = function (boundary) {
                            key = vm.makeKey(boundary.name);
                            features = map.queryRenderedFeatures(e.point, { layers: [key] });
                            filter = features.reduce(function (memo, feature) {
                                memo.push(feature.properties.Name);
                                vm.result.ElectionResults = boundary.candidates;
                                vm.result.TotalVotes = boundary.votes;
                                vm.result.ValidVotes = boundary.votes;
                                if (boundary.votes > 0)
                                    vm.noWinner = false;
                                else
                                    vm.noWinner = true;
                                vm.events.publish('boundary:select', boundary.name);
                                return memo;
                            }, ['in', 'Name']);
                            map.setFilter(key + "-highlighted", filter);
                            if (features.length > 0)
                                new __WEBPACK_IMPORTED_MODULE_2_mapbox_gl_dist_mapbox_gl_js___default.a.Popup()
                                    .setLngLat(e.lngLat)
                                    .setHTML(features[0].properties.Name)
                                    .addTo(map);
                            count++;
                        };
                        for (var _i = 0, _a = vm.result.Boundaries; _i < _a.length; _i++) {
                            var boundary = _a[_i];
                            _loop_1(boundary);
                        }
                    });
                }
                else {
                    vm.result.Boundaries.forEach(function (marker, index) {
                        var el = document.createElement('div');
                        var popup = new __WEBPACK_IMPORTED_MODULE_2_mapbox_gl_dist_mapbox_gl_js___default.a.Popup()
                            .setText(marker.name);
                        el.className = 'marker';
                        el.style.backgroundImage = 'url(https://static.tonicdev.com/assets/vendor/leaflet/images/marker-icon.png)';
                        el.style.backgroundRepeat = 'no-repeat';
                        el.style.backgroundSize = 'cover';
                        el.style.width = '20px';
                        el.style.height = '30px';
                        el.addEventListener('click', function () {
                            vm.result.ElectionResults = marker.candidates;
                            vm.result.TotalVotes = marker.votes;
                            vm.result.ValidVotes = marker.votes;
                            if (marker.votes > 0)
                                vm.noWinner = false;
                            else
                                vm.noWinner = true;
                            vm.events.publish('boundary:select', marker.name);
                        });
                        // add marker to map
                        new __WEBPACK_IMPORTED_MODULE_2_mapbox_gl_dist_mapbox_gl_js___default.a.Marker(el)
                            .setLngLat([marker.longitude, marker.latitude])
                            .setPopup(popup)
                            .addTo(map);
                    });
                }
                map.addControl(new __WEBPACK_IMPORTED_MODULE_2_mapbox_gl_dist_mapbox_gl_js___default.a.NavigationControl());
                loadingPopup.dismiss();
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('year'),
        __metadata("design:type", Object)
    ], MapViewComponent.prototype, "year", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('region'),
        __metadata("design:type", Object)
    ], MapViewComponent.prototype, "region", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('type'),
        __metadata("design:type", Object)
    ], MapViewComponent.prototype, "type", void 0);
    MapViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'map-view',template:/*ion-inline-start:"C:\Users\VM-3\Documents\sleodp_project\sleodp\src\components\map-view\map-view.html"*/'<!-- Generated template for the MapViewComponent component -->\n<div class="view-container">\n	<div id="{{year}}_map" class="map box">\n	</div>\n	<div *ngIf="!candidatesEnable()" padding-top>\n		There are no election datas\n	</div>\n	<div *ngIf="candidatesEnable()">\n		<div class="election-details">\n			<div class="election-info">\n				<ion-grid no-padding>\n					<ion-row>\n						<ion-col text-left class="small">\n							Total Registered Votes: {{ result.TotalVotes }}<br>\n							Result Status: {{ result.ResultStatus }}\n						</ion-col>\n						<ion-col text-right class="small">\n							Total Valid Votes: {{ result.ValidVotes }}<br>\n							Total Invalid Votes: {{ result.InvalidVotes }}\n						</ion-col>\n					</ion-row>\n				</ion-grid>\n			</div>\n			<div class="election-parties">\n				<ion-grid no-padding>\n					<ion-row>\n						<ion-col *ngFor="let acronym of result.Parties | party" (click)="gotoPartyDetail(acronym.value)">\n							<div class="small">{{ acronym.key }}</div>\n							<div class="party-card" [style.background-color]="colorFilter(acronym.value.Color)"></div>\n						</ion-col>\n					</ion-row>\n				</ion-grid>\n			</div>\n			<div class="election-competitors">\n				<ion-grid class="show-mobile" padding-top>\n					<ion-row *ngFor="let row of transform2d(result.ElectionResults, 2, result.ElectionResults.length); let i = index">\n						<ion-col *ngFor="let candidate of row; let j = index">\n							<div padding-bottom>\n								{{ candidate.ValidVotesPercentage }} % <i class="fa fa-check-circle" *ngIf="i == 0 && j == 0 && !noWinner"></i>\n							</div>\n							<div class="card" [style.background-color]="colorFilter(candidate.CandidatePoliticalPartyColor)" padding-right text-center>\n								<a (click)="gotoCandidateDetail(candidate.candidate)">\n									<img src="/assets/imgs/avatar.png" padding-left *ngIf="!candidate.CandidatePhoto">\n									<img src="{{ setPhotoUrl(candidate.CandidatePhoto) }}" padding-left *ngIf="candidate.CandidatePhoto">\n									<span pull-right>{{ candidate.CandidateFullName }}</span>\n								</a>\n							</div>\n						</ion-col>\n					</ion-row>\n				</ion-grid>\n				<ion-grid class="show-tablet">\n					<ion-row *ngFor="let row of transform2d(result.ElectionResults, 3, 6); let i = index">\n						<ion-col *ngFor="let candidate of row; let j = index">\n							<div padding-bottom>\n								{{ candidate.ValidVotesPercentage }} % <i class="fa fa-check-circle" *ngIf="i == 0 && j == 0 && !noWinner"></i>\n							</div>\n							<div class="card" [style.background-color]="colorFilter(candidate.CandidatePoliticalPartyColor)" padding-right text-center>\n								<a (click)="gotoCandidateDetail(candidate.candidate)">\n									<img src="/assets/imgs/avatar.png" padding-left *ngIf="!candidate.CandidatePhoto">\n									<img src="{{ setPhotoUrl(candidate.CandidatePhoto) }}" padding-left *ngIf="candidate.CandidatePhoto">\n									<span pull-right>{{ candidate.CandidateFullName }}</span>\n								</a>\n							</div>\n						</ion-col>\n					</ion-row>\n				</ion-grid>\n				<ion-grid class="show-core">\n					<ion-row *ngFor="let row of transform2d(result.ElectionResults, 4, 12); let i = index">\n						<ion-col *ngFor="let candidate of row; let j = index" col-3>\n							<div padding-bottom>\n								{{ candidate.ValidVotesPercentage }} % <i class="fa fa-check-circle" *ngIf="i == 0 && j == 0 && !noWinner"></i>\n							</div>\n							<div class="card" [style.background-color]="colorFilter(candidate.CandidatePoliticalPartyColor)" padding-right text-center>\n								<a (tap)="gotoCandidateDetail(candidate.Candidate_SLEOP_ID)">\n									<img src="/assets/imgs/avatar.png" padding-left *ngIf="!candidate.CandidatePhoto">\n									<img src="{{ setPhotoUrl(candidate.CandidatePhoto) }}" padding-left *ngIf="candidate.CandidatePhoto">\n									<span pull-right>{{ candidate.CandidateFullName }}</span>\n								</a>\n							</div>\n						</ion-col>\n					</ion-row>\n				</ion-grid>\n			</div>\n		</div>\n	</div>\n</div>'/*ion-inline-end:"C:\Users\VM-3\Documents\sleodp_project\sleodp\src\components\map-view\map-view.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular_index__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular_index__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular_index__["a" /* Events */]])
    ], MapViewComponent);
    return MapViewComponent;
}());

//# sourceMappingURL=map-view.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_index__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_party_profile_party_profile__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_candidate_profile_candidate_profile__ = __webpack_require__(63);
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
    function TableViewComponent(dataService, navCtrl) {
        this.dataService = dataService;
        this.navCtrl = navCtrl;
        this.Results = [];
        this.Boundaries = [];
        this.Parties = {};
        this.Candidates = {};
        this.noWinner = true;
    }
    TableViewComponent.prototype.ngAfterViewInit = function () {
    };
    TableViewComponent.prototype.candidatesEnable = function () {
        return this.Results.length > 0;
    };
    TableViewComponent.prototype.gotoPartyDetail = function (acronym) {
        var party = this.Parties[acronym];
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_party_profile_party_profile__["a" /* PartyProfilePage */], { party: party });
    };
    TableViewComponent.prototype.gotoCandidateDetail = function (candidate_id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_candidate_profile_candidate_profile__["a" /* CandidateProfilePage */], { candidate: this.Candidates[candidate_id] });
    };
    TableViewComponent.prototype.drawTable = function (boundary) {
        var _this = this;
        if (boundary != "")
            this.Boundary = boundary;
        var fields = {
            year: this.year,
            type: this.type,
            region: this.region
        };
        this.isNation = this.region == 'nation';
        var vm = this;
        this.dataService.loadResultsByFields(fields).then(function (data) {
            _this.Parties = data['Parties'];
            _this.Candidates = data['Candidates'];
            if (data['Boundaries'].length > 0) {
                vm.Boundaries = [];
                vm.total_results = data['Boundaries'];
                vm.Results = data['Boundaries'][0].candidates;
                if (vm.Results[0]['ValidVotes'] > 0)
                    vm.noWinner = false;
                for (var _i = 0, _a = data['Boundaries']; _i < _a.length; _i++) {
                    var row = _a[_i];
                    vm.Boundaries.push(row.name);
                }
            }
        });
    };
    TableViewComponent.prototype.onSelectChange = function (selectedValue) {
        console.log(selectedValue);
        var vm = this;
        this.total_results.forEach(function (data) {
            if (data.name == selectedValue.value) {
                vm.Results = data.candidates;
                if (vm.Results[0]['ValidVotes'] > 0)
                    vm.noWinner = false;
                else
                    vm.noWinner = true;
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('year'),
        __metadata("design:type", Object)
    ], TableViewComponent.prototype, "year", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('region'),
        __metadata("design:type", Object)
    ], TableViewComponent.prototype, "region", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('type'),
        __metadata("design:type", Object)
    ], TableViewComponent.prototype, "type", void 0);
    TableViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'table-view',template:/*ion-inline-start:"C:\Users\VM-3\Documents\sleodp_project\sleodp\src\components\table-view\table-view.html"*/'<!-- Generated template for the TableViewComponent component -->\n<div>\n	<select2 [value]="Boundary" [data]="Boundaries" (valueChanged)="onSelectChange($event)"></select2>\n\n	<table margin-top>\n		<thead>\n			<tr>\n				<th>Candidate</th>\n				<th>Political Party</th>\n				<th>Valid Votes Obtained</th>\n				<th>Percentage</th>\n			</tr>\n		</thead>\n		<tbody *ngIf="candidatesEnable()">\n			<tr *ngFor="let result of Results; let i = index">\n				<td><a (click)="gotoCandidateDetail(result[\'Candidate_SLEOP_ID\'])">{{ result[\'CandidateFullName\'] }} <i class="fa fa-check-circle" *ngIf="i == 0 && !noWinner"></i></a></td>\n				<td><a (click)="gotoPartyDetail(result[\'CandidatePoliticalParty\'])">{{ result[\'CandidatePoliticalParty\'] }}</a></td>\n				<td>{{ result[\'ValidVotes\'] }}</td>\n				<td>{{ result[\'ValidVotesPercentage\'] }}</td>\n			</tr>\n		</tbody>\n		<tbody *ngIf="!candidatesEnable()">\n			<tr>\n				<td colspan="4">There are no election datas</td>\n			</tr>\n		</tbody>\n	</table>\n</div>\n'/*ion-inline-end:"C:\Users\VM-3\Documents\sleodp_project\sleodp\src\components\table-view\table-view.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular_index__["h" /* NavController */]])
    ], TableViewComponent);
    return TableViewComponent;
}());

//# sourceMappingURL=table-view.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(312);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_president_president__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_parliament_parliament__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_mayor_mayor__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_chairperson_chairperson__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_councilor_councilor__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_village_headman_village_headman__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_party_profile_party_profile__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_candidate_profile_candidate_profile__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_header_view_header_view__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_range_view_range_view__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_content_view_content_view__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_map_view_map_view__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_table_view_table_view__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_data_data__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pipes_pipes_module__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_ng2_select2_ng2_select2__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_ng2_select2_ng2_select2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24_ng2_select2_ng2_select2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// Pages









// Components





// Providers

// Pipes

// Select2 Component

var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
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
                __WEBPACK_IMPORTED_MODULE_15__pages_party_profile_party_profile__["a" /* PartyProfilePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_candidate_profile_candidate_profile__["a" /* CandidateProfilePage */],
                // Components
                __WEBPACK_IMPORTED_MODULE_17__components_header_view_header_view__["a" /* HeaderViewComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_range_view_range_view__["a" /* RangeViewComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_content_view_content_view__["a" /* ContentViewComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_map_view_map_view__["a" /* MapViewComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_table_view_table_view__["a" /* TableViewComponent */],
                // Select2Component
                __WEBPACK_IMPORTED_MODULE_24_ng2_select2_ng2_select2__["Select2Component"]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/candidate-profile/candidate-profile.module#CandidateProfilePageModule', name: 'CandidateProfilePage', segment: 'candidate-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chairperson/chairperson.module#ChairpersonPageModule', name: 'ChairpersonPage', segment: 'chairperson', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/councilor/councilor.module#CouncilorPageModule', name: 'CouncilorPage', segment: 'councilor', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mayor/mayor.module#MayorPageModule', name: 'MayorPage', segment: 'mayor', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/parliament/parliament.module#ParliamentPageModule', name: 'ParliamentPage', segment: 'parliament', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/party-profile/party-profile.module#PartyProfilePageModule', name: 'PartyProfilePage', segment: 'party-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/president/president.module#PresidentPageModule', name: 'PresidentPage', segment: 'president', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/village-headman/village-headman.module#VillageHeadmanPageModule', name: 'VillageHeadmanPage', segment: 'village-headman', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_23__pipes_pipes_module__["a" /* PipesModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_president_president__["a" /* PresidentPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_parliament_parliament__["a" /* ParliamentPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_mayor_mayor__["a" /* MayorPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_chairperson_chairperson__["a" /* ChairpersonPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_councilor_councilor__["a" /* CouncilorPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_village_headman_village_headman__["a" /* VillageHeadmanPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_party_profile_party_profile__["a" /* PartyProfilePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_candidate_profile_candidate_profile__["a" /* CandidateProfilePage */],
                __WEBPACK_IMPORTED_MODULE_18__components_range_view_range_view__["a" /* RangeViewComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_3__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_22__providers_data_data__["a" /* DataProvider */]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_map_view_map_view__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_table_view_table_view__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_data_data__ = __webpack_require__(19);
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
    function ContentViewComponent(dataService, events) {
        var _this = this;
        this.dataService = dataService;
        this.events = events;
        this.firstTime = true;
        this.setMapMode(true);
        events.subscribe('boundary:select', function (boundary) {
            _this.boundary = boundary;
        });
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
                    if (_this.mapView)
                        _this.setMapInit();
                }, 10);
            }
            else {
                setTimeout(function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    if (_this.tableView)
                        _this.setTableInit(_this.boundary);
                }, 10);
            }
        }
    };
    ContentViewComponent.prototype.seletGranularity = function (granularity) {
        this.dataService.setGranularity(granularity);
    };
    ContentViewComponent.prototype.setContentView = function () {
        var _this = this;
        setTimeout(function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            _this.setGranularityList();
            _this.setMapInit();
            _this.setTableInit(_this.boundary);
            _this.setResultRegion(_this.region);
        }, 10);
    };
    ContentViewComponent.prototype.setMapInit = function () {
        if (this.mapView)
            this.mapView.drawMap();
    };
    ContentViewComponent.prototype.setTableInit = function (boundary) {
        if (this.tableView)
            this.tableView.drawTable(boundary);
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
            case "polling_centre":
                this.resultRegion = "Result By Polling Centre";
                break;
            default:
                break;
        }
    };
    ContentViewComponent.prototype.setGranularityList = function () {
        this.nationAvailable = false;
        this.districtAvailable = false;
        this.constituencyAvailable = false;
        this.wardAvailable = false;
        this.pollingCentreAvailable = false;
        if (this.type == "villageheadman") {
            this.pollingCentreAvailable = true;
        }
        else {
            if (this.year != '2018') {
                switch (this.type) {
                    case "president":
                        this.nationAvailable = true;
                        this.districtAvailable = true;
                        if (this.region != "nation" && this.region != "district")
                            this.region = "nation";
                        break;
                    case "parliament":
                        this.constituencyAvailable = true;
                        if (this.region != "constituency")
                            this.region = "constituency";
                        break;
                    case "mayor":
                        this.districtAvailable = true;
                        if (this.region != "district")
                            this.region = "district";
                        break;
                    case "chairperson":
                        this.districtAvailable = true;
                        if (this.region != "district")
                            this.region = "district";
                        break;
                    case "councilor":
                        this.wardAvailable = true;
                        if (this.region != "ward")
                            this.region = "ward";
                        break;
                    default:
                        // code...
                        break;
                }
            }
            else {
                this.nationAvailable = true;
                this.districtAvailable = true;
                this.constituencyAvailable = true;
                this.wardAvailable = true;
                this.pollingCentreAvailable = true;
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__components_map_view_map_view__["a" /* MapViewComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__components_map_view_map_view__["a" /* MapViewComponent */])
    ], ContentViewComponent.prototype, "mapView", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__components_table_view_table_view__["a" /* TableViewComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__components_table_view_table_view__["a" /* TableViewComponent */])
    ], ContentViewComponent.prototype, "tableView", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('year'),
        __metadata("design:type", Object)
    ], ContentViewComponent.prototype, "year", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('type'),
        __metadata("design:type", Object)
    ], ContentViewComponent.prototype, "type", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('region'),
        __metadata("design:type", Object)
    ], ContentViewComponent.prototype, "region", void 0);
    ContentViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'content-view',template:/*ion-inline-start:"C:\Users\VM-3\Documents\sleodp_project\sleodp\src\components\content-view\content-view.html"*/'<!-- Generated template for the ContentViewComponent component -->\n<div>\n	<ion-grid>\n		<ion-row>\n			<ion-col class="granularity-list show-core" col-4>\n				<a *ngIf="region != \'nation\' && nationAvailable" (click)="seletGranularity(\'nation\')">\n					<div class="senate">\n						<div class="box">\n							<h2>National Results</h2>\n							<div class="box-content">\n								<img src="assets/imgs/map.png">\n							</div>\n						</div>\n					</div>\n				</a>\n				<a *ngIf="region != \'district\' && districtAvailable" (click)="seletGranularity(\'district\')">\n					<div class="senate">\n						<div class="box">\n							<h2>Results by district</h2>\n							<div class="box-content">\n								<img src="assets/imgs/map.png">\n							</div>\n						</div>\n					</div>\n				</a>\n				<a *ngIf="region != \'constituency\' && constituencyAvailable" (click)="seletGranularity(\'constituency\')">\n					<div class="senate">\n						<div class="box">\n							<h2>Results by constituency</h2>\n							<div class="box-content">\n								<img src="assets/imgs/map.png">\n							</div>\n						</div>\n					</div>\n				</a>\n				<a *ngIf="region != \'ward\' && wardAvailable" (click)="seletGranularity(\'ward\')">\n					<div class="senate">\n						<div class="box">\n							<h2>Results by ward</h2>\n							<div class="box-content">\n								<img src="assets/imgs/map.png">\n							</div>\n						</div>\n					</div>\n				</a>\n				<a *ngIf="region != \'polling_centre\' && pollingCentreAvailable" (click)="seletGranularity(\'polling_centre\')">\n					<div class="senate">\n						<div class="box">\n							<h2>Results by Polling Centre</h2>\n							<div class="box-content">\n								<img src="assets/imgs/map.png">\n							</div>\n						</div>\n					</div>\n				</a>\n			</ion-col>\n			<ion-col class="content" col-8>\n				<ion-toolbar class="viewModeToolbar">\n					<button ion-button (click)="setMapMode(true)" [ngClass]="{\'active\': mapMode}" class="modeButton" float-left>\n						Map&nbsp;<i class="fa fa-globe"></i>\n					</button>\n					<ion-title text-center>{{ resultRegion }}</ion-title>\n					<ion-buttons end>\n						<button ion-button (click)="setMapMode(false)" [ngClass]="{\'active\': !mapMode}" class="modeButton">\n							<i class="fa fa-table"></i>&nbsp;Table\n						</button>\n					</ion-buttons>\n				</ion-toolbar>\n				<map-view *ngIf="mapMode" [year]="year" [region]="region" [type]="type" (boundarySelect)="boundarySelect($event)" #mapview>\n				</map-view>\n				<table-view *ngIf="!mapMode" [year]="year" [region]="region" [type]="type" #tableview>\n				</table-view>\n			</ion-col>\n		</ion-row>\n	</ion-grid>\n</div>'/*ion-inline-end:"C:\Users\VM-3\Documents\sleodp_project\sleodp\src\components\content-view\content-view.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */]])
    ], ContentViewComponent);
    return ContentViewComponent;
}());

//# sourceMappingURL=content-view.js.map

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_president_president__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_parliament_parliament__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_mayor_mayor__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_chairperson_chairperson__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_councilor_councilor__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_village_headman_village_headman__ = __webpack_require__(69);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\VM-3\Documents\sleodp_project\sleodp\src\app\app.html"*/'<ion-menu [content]="content" type="overlay">\n\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Election Type</ion-title>\n      <button ion-button menuToggle text-right end color="dark">\n        <i class="fa fa-navicon"></i>\n      </button>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\VM-3\Documents\sleodp_project\sleodp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__party_party__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__granularity_granularity__ = __webpack_require__(392);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PipesModule = (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__party_party__["a" /* PartyPipe */],
                __WEBPACK_IMPORTED_MODULE_2__granularity_granularity__["a" /* GranularityPipe */]],
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__party_party__["a" /* PartyPipe */],
                __WEBPACK_IMPORTED_MODULE_2__granularity_granularity__["a" /* GranularityPipe */]]
        })
    ], PipesModule);
    return PipesModule;
}());

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PartyPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the PartyPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var PartyPipe = (function () {
    function PartyPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    PartyPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        // return value.toLowerCase();
        var keys = [];
        for (var key in value) {
            keys.push({ key: key, value: value[key] });
        }
        return keys;
    };
    PartyPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'party',
        })
    ], PartyPipe);
    return PartyPipe;
}());

//# sourceMappingURL=party.js.map

/***/ }),

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GranularityPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the GranularityPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var GranularityPipe = (function () {
    function GranularityPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    GranularityPipe.prototype.transform = function (items, searchText) {
        if (!items)
            return [];
        if (!searchText)
            return items;
        searchText = searchText.toLowerCase();
        return items.filter(function (it) {
            return it.toLowerCase().includes(searchText);
        });
    };
    GranularityPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'granularity',
        })
    ], GranularityPipe);
    return GranularityPipe;
}());

//# sourceMappingURL=granularity.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CandidateProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_header_view_header_view__ = __webpack_require__(95);
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
 * Generated class for the CandidateProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CandidateProfilePage = (function () {
    function CandidateProfilePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.candidate = navParams.get('candidate');
    }
    CandidateProfilePage.prototype.ionViewDidLoad = function () {
        this.headerview.isGranularityEnabled = false;
    };
    CandidateProfilePage.prototype.sourceUrl = function (url) {
        return "http://dev.electiondata.io" + url;
    };
    CandidateProfilePage.prototype.getCandidateName = function () {
        return this.candidate.Prefix + " " + this.candidate.FirstName + " " + this.candidate.MiddleName + " " + this.candidate.SurName;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return __WEBPACK_IMPORTED_MODULE_2__components_header_view_header_view__["a" /* HeaderViewComponent */]; })),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__components_header_view_header_view__["a" /* HeaderViewComponent */])
    ], CandidateProfilePage.prototype, "headerview", void 0);
    CandidateProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-candidate-profile',template:/*ion-inline-start:"C:\Users\VM-3\Documents\sleodp_project\sleodp\src\pages\candidate-profile\candidate-profile.html"*/'<!--\n  Generated template for the CandidateProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<header-view #headerview>\n  <ion-navbar color="dark" sub-navbar>\n    <ion-title>\n      Candidate Details\n    </ion-title>\n  </ion-navbar>\n</header-view>\n\n\n<ion-content padding>\n	<div class="" *ngIf="candidate">\n		<ion-grid class="show-core">\n			<ion-row>\n				<ion-col col-4 text-center>\n					<img class="candidate-logo" [src]="sourceUrl(candidate.Photo)">\n				</ion-col>\n				<ion-col col-8>\n					<h2>{{ getCandidateName() }}</h2>\n					<p><strong>Political Party:</strong> {{ candidate.PoliticalParty }}</p>\n					<p><strong>Election Year:</strong> {{ candidate.ElectionYear }}</p>\n					<p><strong>Body:</strong></p> <div [innerHTML]="candidate.Body"></div>\n				</ion-col>\n			</ion-row>\n		</ion-grid>\n		<ion-grid class="show-tablet">\n			<ion-row>\n				<ion-col text-center>\n					<img class="candidate-logo" [src]="sourceUrl(candidate.Photo)">\n				</ion-col>\n			</ion-row>\n			<ion-row>\n				<ion-col>\n					<h2>{{ getCandidateName() }}</h2>\n					<p><strong>Political Party:</strong> {{ candidate.PoliticalParty }}</p>\n					<p><strong>Election Year:</strong> {{ candidate.ElectionYear }}</p>\n					<p><strong>Body:</strong></p> <div [innerHTML]="candidate.Body"></div>\n				</ion-col>\n			</ion-row>\n		</ion-grid>\n		<ion-grid class="show-mobile">\n			<ion-row>\n				<ion-col text-center>\n					<img class="candidate-logo" [src]="sourceUrl(candidate.Photo)">\n				</ion-col>\n			</ion-row>\n			<ion-row>\n				<ion-col>\n					<h2>{{ getCandidateName() }}</h2>\n					<p><strong>Political Party:</strong> {{ candidate.PoliticalParty }}</p>\n					<p><strong>Election Year:</strong> {{ candidate.ElectionYear }}</p>\n					<p><strong>Body:</strong></p> <div [innerHTML]="candidate.Body"></div>\n				</ion-col>\n			</ion-row>\n		</ion-grid>\n	</div>\n	<div class="empty-info" padding-top *ngIf="!candidate">\n		There is no information about this candidate.\n	</div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\VM-3\Documents\sleodp_project\sleodp\src\pages\candidate-profile\candidate-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], CandidateProfilePage);
    return CandidateProfilePage;
}());

//# sourceMappingURL=candidate-profile.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PresidentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataService = dataService;
        this.region = "nation";
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
        this.initialSlide = this.subpages.length > 1 ? this.subpages.length - 1 : 0;
        this.setPageInfo();
    }
    PresidentPage.prototype.ionViewDidLoad = function () {
    };
    PresidentPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.subscription = this.dataService.getGranularity().subscribe(function (granularity) {
            _this.region = granularity;
            _this.setSlideChanges();
        });
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
        this.prevEnabled = !this.slides.isBeginning();
        this.nextEnabled = !this.slides.isEnd();
        this.year = this.subpages[currentIndex].year;
        this.prevYear = this.prevEnabled ? this.subpages[currentIndex - 1].year : 0;
        this.nextYear = this.nextEnabled ? this.subpages[currentIndex + 1].year : 0;
        this.setSlideChanges();
    };
    PresidentPage.prototype.ionViewDidLeave = function () {
        this.subscription.unsubscribe();
    };
    PresidentPage.prototype.setSlideChanges = function () {
        var currentIndex = this.slides.getActiveIndex();
        if (!this.totalPages || currentIndex == this.totalPages || this.totalPages == 0)
            return;
        this.subPageViews._results[currentIndex].setContentView();
        this.dataService.setYear(this.year);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Slides */])
    ], PresidentPage.prototype, "slides", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])(__WEBPACK_IMPORTED_MODULE_3__components_content_view_content_view__["a" /* ContentViewComponent */]),
        __metadata("design:type", Object)
    ], PresidentPage.prototype, "subPageViews", void 0);
    PresidentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-president',template:/*ion-inline-start:"C:\Users\VM-3\Documents\sleodp_project\sleodp\src\pages\president\president.html"*/'<!--\n  Generated template for the PresidentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<header-view type="president">\n  <ion-navbar color="dark" sub-navbar>\n    <a float-left *ngIf="prevEnabled" (click)="setPrevPage()" padding-left>\n      <ion-icon name="arrow-back" item-start></ion-icon> {{prevYear}}\n    </a>\n\n    <ion-title>\n      {{year}} Presidential Elections\n    </ion-title>\n    <a float-right *ngIf="nextEnabled" (click)="setNextPage()" padding-right>\n      {{nextYear}} <ion-icon name="arrow-forward" item-start></ion-icon>\n    </a>\n  </ion-navbar>\n</header-view>\n\n<ion-content padding>\n  <ion-slides (ionSlideDidChange)="slideChanged()" [initialSlide]="initialSlide">\n\n    <ion-slide *ngFor="let p of subpages; let i = index">\n      <content-view type="president" [year]="p.year" [region]="region" #president_{{i}}></content-view>\n    </ion-slide>\n\n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"C:\Users\VM-3\Documents\sleodp_project\sleodp\src\pages\president\president.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */]])
    ], PresidentPage);
    return PresidentPage;
}());

//# sourceMappingURL=president.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PartyProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_header_view_header_view__ = __webpack_require__(95);
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
 * Generated class for the PartyProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PartyProfilePage = (function () {
    function PartyProfilePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.party = navParams.get('party');
    }
    PartyProfilePage.prototype.ionViewDidLoad = function () {
        this.headerview.isGranularityEnabled = false;
    };
    PartyProfilePage.prototype.sourceUrl = function (url) {
        return "http://dev.electiondata.io" + url;
    };
    PartyProfilePage.prototype.colorFilter = function (color) {
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return __WEBPACK_IMPORTED_MODULE_2__components_header_view_header_view__["a" /* HeaderViewComponent */]; })),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__components_header_view_header_view__["a" /* HeaderViewComponent */])
    ], PartyProfilePage.prototype, "headerview", void 0);
    PartyProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-party-profile',template:/*ion-inline-start:"C:\Users\VM-3\Documents\sleodp_project\sleodp\src\pages\party-profile\party-profile.html"*/'<!--\n  Generated template for the PartyProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<header-view>\n  <ion-navbar color="dark" sub-navbar>\n    <ion-title>\n      Party Details\n    </ion-title>\n  </ion-navbar>\n</header-view>\n\n\n<ion-content padding>\n	<ion-grid class="show-core">\n		<ion-row>\n			<ion-col col-4 text-center>\n				<img class="party-logo" [src]="sourceUrl(party.Logo)">\n			</ion-col>\n			<ion-col col-8>\n				<h2><a [href]="party.Website" target="_blank">{{ party.Name }}</a></h2>\n				<p><strong>Founders:</strong> {{ party.Founders }}</p>\n				<p><strong>Date Founded:</strong> {{ party.DateFounded }}</p>\n				<p><strong>Description:</strong></p> <div [innerHTML]="party.Description"></div>\n			</ion-col>\n		</ion-row>\n	</ion-grid>\n	<ion-grid class="show-tablet">\n		<ion-row>\n			<ion-col col-4 text-center>\n				<img class="party-logo" [src]="sourceUrl(party.Logo)">\n			</ion-col>\n			<ion-col col-8>\n				<h2><a [href]="party.Website" target="_blank">{{ party.Name }}</a></h2>\n				<p><strong>Founders:</strong> {{ party.Founders }}</p>\n				<p><strong>Date Founded:</strong> {{ party.DateFounded }}</p>\n				<p><strong>Description:</strong></p> <div [innerHTML]="party.Description"></div>\n			</ion-col>\n		</ion-row>\n	</ion-grid>\n	<ion-grid class="show-mobile">\n		<ion-row>\n			<ion-col text-center>\n				<img class="party-logo" [src]="sourceUrl(party.Logo)">\n			</ion-col>\n		</ion-row>\n		<ion-row>\n			<ion-col>\n				<h2><a [href]="party.Website" target="_blank">{{ party.Name }}</a></h2>\n				<p><strong>Founders:</strong> {{ party.Founders }}</p>\n				<p><strong>Date Founded:</strong> {{ party.DateFounded }}</p>\n				<p><strong>Description:</strong></p> <div [innerHTML]="party.Description"></div>\n			</ion-col>\n		</ion-row>\n	</ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Users\VM-3\Documents\sleodp_project\sleodp\src\pages\party-profile\party-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], PartyProfilePage);
    return PartyProfilePage;
}());

//# sourceMappingURL=party-profile.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParliamentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataService = dataService;
        this.region = "constituency";
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
        this.initialSlide = this.subpages.length > 1 ? this.subpages.length - 1 : 0;
        this.setPageInfo();
    }
    ParliamentPage.prototype.ionViewDidLoad = function () {
    };
    ParliamentPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.subscription = this.dataService.getGranularity().subscribe(function (granularity) {
            _this.region = granularity;
            _this.setSlideChanges();
        });
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
        this.prevEnabled = !this.slides.isBeginning();
        this.nextEnabled = !this.slides.isEnd();
        this.year = this.subpages[currentIndex].year;
        this.prevYear = this.prevEnabled ? this.subpages[currentIndex - 1].year : 0;
        this.nextYear = this.nextEnabled ? this.subpages[currentIndex + 1].year : 0;
        this.setSlideChanges();
    };
    ParliamentPage.prototype.ionViewDidLeave = function () {
        this.subscription.unsubscribe();
    };
    ParliamentPage.prototype.setSlideChanges = function () {
        var currentIndex = this.slides.getActiveIndex();
        if (!this.totalPages || currentIndex == this.totalPages || this.totalPages == 0)
            return;
        this.subPageViews._results[currentIndex].setContentView();
        this.dataService.setYear(this.year);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Slides */])
    ], ParliamentPage.prototype, "slides", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])(Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return __WEBPACK_IMPORTED_MODULE_3__components_content_view_content_view__["a" /* ContentViewComponent */]; })),
        __metadata("design:type", Object)
    ], ParliamentPage.prototype, "subPageViews", void 0);
    ParliamentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-parliament',template:/*ion-inline-start:"C:\Users\VM-3\Documents\sleodp_project\sleodp\src\pages\parliament\parliament.html"*/'<!--\n  Generated template for the ParliamentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<header-view type="parliament">\n  <ion-navbar color="dark" sub-navbar>\n    <a float-left *ngIf="prevEnabled" (click)="setPrevPage()" padding-left>\n      <ion-icon name="arrow-back" item-start></ion-icon> {{prevYear}}\n    </a>\n\n    <ion-title>\n      {{year}} Parliamentary Elections\n    </ion-title>\n    <a float-right *ngIf="nextEnabled" (click)="setNextPage()" padding-right>\n      {{nextYear}} <ion-icon name="arrow-forward" item-start></ion-icon>\n    </a>\n  </ion-navbar>\n</header-view>\n\n<ion-content padding>\n  <ion-slides (ionSlideDidChange)="slideChanged()" [initialSlide]="initialSlide">\n\n    <ion-slide *ngFor="let p of subpages; let i = index">\n      <content-view type="parliament" [year]="p.year" [region]="region" #parliament_{{i}}></content-view>\n    </ion-slide>\n\n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"C:\Users\VM-3\Documents\sleodp_project\sleodp\src\pages\parliament\parliament.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */]])
    ], ParliamentPage);
    return ParliamentPage;
}());

//# sourceMappingURL=parliament.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChairpersonPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataService = dataService;
        this.region = "district";
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
        this.initialSlide = this.subpages.length > 1 ? this.subpages.length - 1 : 0;
        this.setPageInfo();
    }
    ChairpersonPage.prototype.ionViewDidLoad = function () {
    };
    ChairpersonPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.subscription = this.dataService.getGranularity().subscribe(function (granularity) {
            _this.region = granularity;
            _this.setSlideChanges();
        });
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
        this.prevEnabled = !this.slides.isBeginning();
        this.nextEnabled = !this.slides.isEnd();
        this.year = this.subpages[currentIndex].year;
        this.prevYear = this.prevEnabled ? this.subpages[currentIndex - 1].year : 0;
        this.nextYear = this.nextEnabled ? this.subpages[currentIndex + 1].year : 0;
        this.setSlideChanges();
    };
    ChairpersonPage.prototype.ionViewDidLeave = function () {
        this.subscription.unsubscribe();
    };
    ChairpersonPage.prototype.setSlideChanges = function () {
        var currentIndex = this.slides.getActiveIndex();
        if (!this.totalPages || currentIndex == this.totalPages || this.totalPages == 0)
            return;
        this.subPageViews._results[currentIndex].setContentView();
        this.dataService.setYear(this.year);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Slides */])
    ], ChairpersonPage.prototype, "slides", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])(Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return __WEBPACK_IMPORTED_MODULE_3__components_content_view_content_view__["a" /* ContentViewComponent */]; })),
        __metadata("design:type", Object)
    ], ChairpersonPage.prototype, "subPageViews", void 0);
    ChairpersonPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-chairperson',template:/*ion-inline-start:"C:\Users\VM-3\Documents\sleodp_project\sleodp\src\pages\chairperson\chairperson.html"*/'<!--\n  Generated template for the ChairpersonPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<header-view type="chairperson">\n  <ion-navbar color="dark" sub-navbar>\n    <a float-left *ngIf="prevEnabled" (click)="setPrevPage()" padding-left>\n      <ion-icon name="arrow-back" item-start></ion-icon> {{prevYear}}\n    </a>\n\n    <ion-title>\n      {{year}} Chairperson Elections\n    </ion-title>\n    <a float-right *ngIf="nextEnabled" (click)="setNextPage()" padding-right>\n      {{nextYear}} <ion-icon name="arrow-forward" item-start></ion-icon>\n    </a>\n  </ion-navbar>\n</header-view>\n\n<ion-content padding>\n  <ion-slides (ionSlideDidChange)="slideChanged()" [initialSlide]="initialSlide">\n\n    <ion-slide *ngFor="let p of subpages; let i = index">\n      <content-view type="chairperson" [year]="p.year" [region]="region" #chairperson_{{i}}></content-view>\n    </ion-slide>\n\n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"C:\Users\VM-3\Documents\sleodp_project\sleodp\src\pages\chairperson\chairperson.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */]])
    ], ChairpersonPage);
    return ChairpersonPage;
}());

//# sourceMappingURL=chairperson.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CouncilorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataService = dataService;
        this.region = "ward";
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
        this.initialSlide = this.subpages.length > 1 ? this.subpages.length - 1 : 0;
        this.setPageInfo();
    }
    CouncilorPage.prototype.ionViewDidLoad = function () {
    };
    CouncilorPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.subscription = this.dataService.getGranularity().subscribe(function (granularity) {
            _this.region = granularity;
            _this.setSlideChanges();
        });
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
        this.prevEnabled = !this.slides.isBeginning();
        this.nextEnabled = !this.slides.isEnd();
        this.year = this.subpages[currentIndex].year;
        this.prevYear = this.prevEnabled ? this.subpages[currentIndex - 1].year : 0;
        this.nextYear = this.nextEnabled ? this.subpages[currentIndex + 1].year : 0;
        this.setSlideChanges();
    };
    CouncilorPage.prototype.ionViewDidLeave = function () {
        this.subscription.unsubscribe();
    };
    CouncilorPage.prototype.setSlideChanges = function () {
        var currentIndex = this.slides.getActiveIndex();
        if (!this.totalPages || currentIndex == this.totalPages || this.totalPages == 0)
            return;
        this.subPageViews._results[currentIndex].setContentView();
        this.dataService.setYear(this.year);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Slides */])
    ], CouncilorPage.prototype, "slides", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])(Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return __WEBPACK_IMPORTED_MODULE_3__components_content_view_content_view__["a" /* ContentViewComponent */]; })),
        __metadata("design:type", Object)
    ], CouncilorPage.prototype, "subPageViews", void 0);
    CouncilorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-councilor',template:/*ion-inline-start:"C:\Users\VM-3\Documents\sleodp_project\sleodp\src\pages\councilor\councilor.html"*/'<!--\n  Generated template for the CouncilorPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<header-view type="councilor">\n  <ion-navbar color="dark" sub-navbar>\n    <a float-left *ngIf="prevEnabled" (click)="setPrevPage()" padding-left>\n      <ion-icon name="arrow-back" item-start></ion-icon> {{prevYear}}\n    </a>\n\n    <ion-title>\n      {{year}} Council Elections\n    </ion-title>\n    <a float-right *ngIf="nextEnabled" (click)="setNextPage()" padding-right>\n      {{nextYear}} <ion-icon name="arrow-forward" item-start></ion-icon>\n    </a>\n  </ion-navbar>\n</header-view>\n\n<ion-content padding>\n  <ion-slides (ionSlideDidChange)="slideChanged()" [initialSlide]="initialSlide">\n\n    <ion-slide *ngFor="let p of subpages; let i = index">\n      <content-view type="councilor" [year]="p.year" [region]="region" #councilor_{{i}}></content-view>\n    </ion-slide>\n\n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"C:\Users\VM-3\Documents\sleodp_project\sleodp\src\pages\councilor\councilor.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */]])
    ], CouncilorPage);
    return CouncilorPage;
}());

//# sourceMappingURL=councilor.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VillageHeadmanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataService = dataService;
        this.region = "village";
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
        this.initialSlide = this.subpages.length > 1 ? this.subpages.length - 1 : 0;
        this.setPageInfo();
    }
    VillageHeadmanPage.prototype.ionViewDidLoad = function () {
    };
    VillageHeadmanPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.subscription = this.dataService.getGranularity().subscribe(function (granularity) {
            _this.region = granularity;
            _this.setSlideChanges();
        });
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
        this.prevEnabled = !this.slides.isBeginning();
        this.nextEnabled = !this.slides.isEnd();
        this.year = this.subpages[currentIndex].year;
        this.prevYear = this.prevEnabled ? this.subpages[currentIndex - 1].year : 0;
        this.nextYear = this.nextEnabled ? this.subpages[currentIndex + 1].year : 0;
        this.setSlideChanges();
    };
    VillageHeadmanPage.prototype.ionViewDidLeave = function () {
        this.subscription.unsubscribe();
    };
    VillageHeadmanPage.prototype.setSlideChanges = function () {
        var currentIndex = this.slides.getActiveIndex();
        if (!this.totalPages || currentIndex == this.totalPages || this.totalPages == 0)
            return;
        this.subPageViews._results[currentIndex].setContentView();
        this.dataService.setYear(this.year);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Slides */])
    ], VillageHeadmanPage.prototype, "slides", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])(Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return __WEBPACK_IMPORTED_MODULE_3__components_content_view_content_view__["a" /* ContentViewComponent */]; })),
        __metadata("design:type", Object)
    ], VillageHeadmanPage.prototype, "subPageViews", void 0);
    VillageHeadmanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-village-headman',template:/*ion-inline-start:"C:\Users\VM-3\Documents\sleodp_project\sleodp\src\pages\village-headman\village-headman.html"*/'<!--\n  Generated template for the VillageheadmanPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<header-view type="villageheadman">\n  <ion-navbar color="dark" sub-navbar>\n    <a float-left *ngIf="prevEnabled" (click)="setPrevPage()" padding-left>\n      <ion-icon name="arrow-back" item-start></ion-icon> {{prevYear}}\n    </a>\n\n    <ion-title>\n      {{year}} Village Headman Elections\n    </ion-title>\n    <a float-right *ngIf="nextEnabled" (click)="setNextPage()" padding-right>\n      {{nextYear}} <ion-icon name="arrow-forward" item-start></ion-icon>\n    </a>\n  </ion-navbar>\n</header-view>\n\n<ion-content padding>\n  <ion-slides (ionSlideDidChange)="slideChanged()" [initialSlide]="initialSlide">\n\n    <ion-slide *ngFor="let p of subpages; let i = index">\n      <content-view type="villageheadman" [year]="p.year" [region]="region" #villageheadman_{{i}}></content-view>\n    </ion-slide>\n\n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"C:\Users\VM-3\Documents\sleodp_project\sleodp\src\pages\village-headman\village-headman.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */]])
    ], VillageHeadmanPage);
    return VillageHeadmanPage;
}());

//# sourceMappingURL=village-headman.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__range_view_range_view__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_president_president__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_parliament_parliament__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_chairperson_chairperson__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_councilor_councilor__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_village_headman_village_headman__ = __webpack_require__(69);
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
    function HeaderViewComponent(navCtrl, popoverCtrl, el, rd) {
        this.navCtrl = navCtrl;
        this.popoverCtrl = popoverCtrl;
        this.el = el;
        this.rd = rd;
        this.isGranularityEnabled = true;
    }
    HeaderViewComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var view = _this.navCtrl.getActive();
            var selected = _this.el.nativeElement.querySelector('ion-segment-button.' + view.component.name);
            if (selected)
                _this.rd.addClass(selected, 'active');
        }, 100);
    };
    HeaderViewComponent.prototype.selectRange = function (event) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_2__range_view_range_view__["a" /* RangeViewComponent */], { type: this.type });
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('type'),
        __metadata("design:type", Object)
    ], HeaderViewComponent.prototype, "type", void 0);
    HeaderViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'header-view',template:/*ion-inline-start:"C:\Users\VM-3\Documents\sleodp_project\sleodp\src\components\header-view\header-view.html"*/'<!-- Generated template for the HeaderViewComponent component -->\n<ion-header>\n	<ion-toolbar color="dark" class="show-mobile">\n		<button ion-button menuToggle>\n			<i class="fa fa-navicon"></i>\n		</button>\n		<ion-title text-uppercase text-center>sloedp</ion-title>\n\n		<ion-buttons end *ngIf="isGranularityEnabled">\n			<button ion-button class="bar-button-menutoggle-md" (click)="selectRange($event)">\n				<i class="fa fa-ellipsis-h"></i>\n			</button>\n		</ion-buttons>\n	</ion-toolbar>\n	<ion-toolbar color="dark" class="show-core" style="padding: 10px;">\n		<button ion-button href="/" class="bar-button-menutoggle-md bar-button-default-md disable-hover logo-icon" float-left>\n			<img src="assets/imgs/logo.png" width="35"> &nbsp;SLOEDP\n		</button>\n		<ion-title text-uppercase text-center>\n			<ion-segment class="page-links" color="primary" width-50>\n				<ion-segment-button class="PresidentPage" (ionSelect)="selectedType(\'president\')">\n				President\n				</ion-segment-button>\n				<ion-segment-button class="ParliamentPage" (ionSelect)="selectedType(\'parliament\')">\n				Member of Parliament\n				</ion-segment-button>\n				<ion-segment-button class="ChairpersonPage" (ionSelect)="selectedType(\'chairperson\')">\n				Mayor/Chairperson\n				</ion-segment-button>\n				<ion-segment-button class="CouncilorPage" (ionSelect)="selectedType(\'councilor\')">\n				Councilor\n				</ion-segment-button>\n				<ion-segment-button class="VillageHeadmanPage" (ionSelect)="selectedType(\'villageheadman\')">\n				Village Headman\n				</ion-segment-button>\n			</ion-segment>\n		</ion-title>\n	</ion-toolbar>\n	<ng-content select="[sub-navbar]"></ng-content>\n</ion-header>'/*ion-inline-end:"C:\Users\VM-3\Documents\sleodp_project\sleodp\src\components\header-view\header-view.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]])
    ], HeaderViewComponent);
    return HeaderViewComponent;
}());

//# sourceMappingURL=header-view.js.map

/***/ })

},[291]);
//# sourceMappingURL=main.js.map