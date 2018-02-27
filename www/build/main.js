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
                var parties = __webpack_require__(354);
                _this.parties_json = _this.toCandidatesJson(parties);
                resolve(_this.parties_json);
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
                var candidates = __webpack_require__(355);
                _this.candidates_json = _this.toCandidatesJson(candidates);
                resolve(_this.candidates_json);
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
                var polling_centres = __webpack_require__(356);
                _this.polling_centres_json = _this.toCandidatesJson(polling_centres);
                resolve(_this.polling_centres_json);
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
                if (fields.type == "president" && fields.year == "2018") {
                    var polling_centre_result = __webpack_require__(357);
                    resolve(polling_centre_result);
                }
                else {
                    resolve([]);
                }
                console.log("Error with Data");
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
		398,
		7
	],
	"../pages/chairperson/chairperson.module": [
		399,
		6
	],
	"../pages/councilor/councilor.module": [
		400,
		5
	],
	"../pages/mayor/mayor.module": [
		401,
		4
	],
	"../pages/parliament/parliament.module": [
		402,
		3
	],
	"../pages/party-profile/party-profile.module": [
		403,
		2
	],
	"../pages/president/president.module": [
		404,
		1
	],
	"../pages/village-headman/village-headman.module": [
		405,
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mapbox_gl_dist_mapbox_gl_js__ = __webpack_require__(358);
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
                console.log(data);
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
            selector: 'table-view',template:/*ion-inline-start:"C:\Users\VM-3\Documents\sleodp_project\sleodp\src\components\table-view\table-view.html"*/'<!-- Generated template for the TableViewComponent component -->\n<div>\n	<select2 [value]="Boundary" [data]="Boundaries" (valueChanged)="onSelectChange($event)" *ngIf="!isNation"></select2>\n\n	<table margin-top>\n		<thead>\n			<tr>\n				<th>Candidate</th>\n				<th>Political Party</th>\n				<th>Valid Votes Obtained</th>\n				<th>Percentage</th>\n			</tr>\n		</thead>\n		<tbody *ngIf="candidatesEnable()">\n			<tr *ngFor="let result of Results; let i = index">\n				<td><a (click)="gotoCandidateDetail(result[\'Candidate_SLEOP_ID\'])">{{ result[\'CandidateFullName\'] }} <i class="fa fa-check-circle" *ngIf="i == 0 && !noWinner"></i></a></td>\n				<td><a (click)="gotoPartyDetail(result[\'CandidatePoliticalParty\'])">{{ result[\'CandidatePoliticalParty\'] }}</a></td>\n				<td>{{ result[\'ValidVotes\'] }}</td>\n				<td>{{ result[\'ValidVotesPercentage\'] }}</td>\n			</tr>\n		</tbody>\n		<tbody *ngIf="!candidatesEnable()">\n			<tr>\n				<td colspan="4">There are no election datas</td>\n			</tr>\n		</tbody>\n	</table>\n</div>\n'/*ion-inline-end:"C:\Users\VM-3\Documents\sleodp_project\sleodp\src\components\table-view\table-view.html"*/
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(393);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pipes_pipes_module__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_ng2_select2_ng2_select2__ = __webpack_require__(397);
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

/***/ 354:
/***/ (function(module, exports) {

module.exports = [{"SLoepID":"7","Name":"All Peoples Congress (APC)","Description":"<p>The All People's Congress is one of two major political parties in Sierra Leone, the other being the Sierra Leone People's Party (SLPP). The APC is currently the ruling party in Sierra Leone. The APC party was founded in 1960 by a breakaway group from the Sierra Leone People's Party that vehemently opposed elections before independence and instead supported independence before elections. The APC governed the country from 1968 to 1992 and became the ruling party again in 2007 after the party presidential candidate Ernest Bai Koroma won the 2007 presidential election. The APC under Ernest Bai Koroma has continued as the ruling party into the 2018 election cycle</p>","Acronym":"APC","DateFounded":"1960","Founders":"Siaka Stevens","Website":"http://www.apcparty.org ","Color":"FF0000","Logo":"/sites/default/files/APC%20logo.jpg"},{"SLoepID":"6","Name":"Alliance Democratic Party (ADP)","Description":"","Acronym":"ADP","DateFounded":"","Founders":"","Website":"","Color":"Pink","Logo":"/sites/default/files/adp.jpg"},{"SLoepID":"8","Name":"Citizens Democratic Party (CDP)","Description":"","Acronym":"CDP","DateFounded":"","Founders":"Gibril Thullah","Website":"","Color":"","Logo":"/sites/default/files/cdp.png"},{"SLoepID":"84","Name":"Citizens United for Peace and Progress (CUPP)","Description":"CUPP, Founded in 2001 by Sierra Leoneans in the United States, the CUPP advocates \"justice for victims\" of the decade-long civil war. The party presented a presidential candidate in 2012, Washington lawyer Raymond Bamidele Thompson (who received 0.4 percent of the bote) but no legislative candidate.","Acronym":"CUPP","DateFounded":"2001","Founders":"","Website":"","Color":"","Logo":""},{"SLoepID":"1035","Name":"Coalition for Change (C4C)","Description":"<p>C4C is a movement that we say has been in the making for more than 59 years. It is built on the hopes and dreams of a properly functional Sierra Leone that will have sustainable development plans and national prosperity.</p>\n\n<p>We believe that we have a group of level-headed Sierra Leoneans from all disciplines of life who are well-intentioned that want to bring about transparent government, better fiscal policies, education and training for our citizens and a respected justice system, among other things.</p>\n\n<p>We believe that we can bring together a coalition of existing parties to put our aims into effect.</p>\n\n<p>At present we have global executives and country-specific executives whose job it has been to create relevant legal entities from which the movement can operate.</p>\n\n<p>We have groups of people dealing with specific tasks which makes us agile enough to deal with anything that we have been able to foresee.</p>\n\n<p>This movement is open to ALL Sierra Leoneans, and we welcome all your comments, questions and suggestions as we formulate and crystallize our plans.</p>","Acronym":"C4C","DateFounded":"2017","Founders":"","Website":"https://c4csalone.com/ ","Color":"Orange","Logo":"/sites/default/files/c4c_0.png"},{"SLoepID":"86","Name":"Convention People&#039;s Party (CCP)","Description":"","Acronym":"CCP","DateFounded":"","Founders":"","Website":"","Color":"","Logo":""},{"SLoepID":"1040","Name":"Democratic Centre Party (DCP)","Description":"","Acronym":"DCP","DateFounded":"","Founders":"","Website":"","Color":"","Logo":""},{"SLoepID":"83","Name":"Grand Alliance Party (GAP)","Description":"","Acronym":"GAP","DateFounded":"","Founders":"","Website":"","Color":"","Logo":""},{"SLoepID":"876","Name":"Independent (I)","Description":"","Acronym":"I","DateFounded":"","Founders":"","Website":"","Color":"","Logo":""},{"SLoepID":"82","Name":"Movement for Progress Party (MPP)","Description":"<p>MOP, formed in 2002 to promote \"good governance and positive change,\" the MOP supported the creation of the special war crimes court and presented the only female candidate in 2002, longtime political activist Zainab Bangura. She garnered less than 1 percent of the vote. Bangura, who had been a co-worker with Ernest Bai Koroma at an insurance company, Subsequently joined the APC and in 2007 was named to the post of foreign minister in  President Koroma's new cabinet. </p>","Acronym":"MOP","DateFounded":"2002","Founders":"","Website":"","Color":"","Logo":""},{"SLoepID":"9","Name":"National Democratic Alliance (NDA)","Description":"<p>The NDA fielded candidates for the legislature but not the presidency in 2002. the party reconvened in 2005 after having been inactive for several years. In 2007 the NDA formed an alliance with the PLP to back Vice President Solomon Berewa of the SLPP in the presidential runoff elections. The NDA's candidate, Amadu Jalloh, finished fifth, with about 1 percent of the Vote, in the first round of balloting. </p>","Acronym":"NDA","DateFounded":"2001","Founders":"","Website":"","Color":"Green ","Logo":"/sites/default/files/nda.png"},{"SLoepID":"81","Name":"National Grand Coalition (NGC)","Description":"","Acronym":"NGC","DateFounded":"2017","Founders":"","Website":"","Color":"Red, green, blue,black, gold,white","Logo":"/sites/default/files/ngc.png"},{"SLoepID":"10","Name":"National Progressive Democrats (NPD)","Description":"National Interest, Progress For We All, Enh Respect for we Democracy\"* NPD is a transformational political party, a nationalist party that believes in Progressive values. \n\nNational Interest is the foundation of the party,  to ensure that there is progress in the lives of our people, is the reason for the formation of the party and respect for democracy is our guiding principle","Acronym":"NPD","DateFounded":"","Founders":"","Website":"","Color":"0000FF","Logo":"/sites/default/files/npd.jpeg"},{"SLoepID":"1008","Name":"National Unity and Reconciliation Party (NURP)","Description":"","Acronym":"NUP","DateFounded":"2017","Founders":"","Website":"","Color":"","Logo":""},{"SLoepID":"1038","Name":"National Unity Party (NUP)","Description":"","Acronym":"NUP","DateFounded":"","Founders":"","Website":"","Color":"","Logo":""},{"SLoepID":"12","Name":"Peace and Liberation Party (PLP)","Description":"<p>The PLP was led by the former AFRC leader Johnny Paul Koroma. It was linked with the Grassroots Awareness movement, one of many peace promotion organizations. In the May 2002 elections, Koroma came in third in the presidential race, while the party won 3.6 percent of the vote - and two seat - in the legislative contest. Though Koroma was indicted in 2003, he remained the party's leader, the party spokesperson said in 2007 . However, it was later reported that Koroma was dead.</p>\n\n<p> in the 2017 presidential election, Kandeh Baba Conteh came in sixth in the first round, with 0.6 percent of the vote. The PLP was ruled ineligible to participate in the 2008 local elections. The status of the party remained unclear. </p>","Acronym":"PLP","DateFounded":"2001","Founders":"","Website":"","Color":"Blue","Logo":"/sites/default/files/plp.png"},{"SLoepID":"1039","Name":"People&#039;s National Convention (PNC)","Description":"","Acronym":"PNC","DateFounded":"","Founders":"","Website":"","Color":"","Logo":""},{"SLoepID":"11","Name":"Peoples Democratic Party (PDP)","Description":"<p>The PDP was characterized by West Africa as the \"loudest\"  of the new parties, whose \"main handicap is the uncharismatic quality\" of its leader, former information minister Thaimu Bangura. In September 1991 Bangura had been named chair of the United Front of Political Movements (UNIFORM), a six party opposition formation that was subsequently dissolved. </p>\n\n<p>In the February 1996 balloting, Bangura  placed third in the presidential contest, with 16.1 percent of the vote, and the party won 12 seats. Subsequently, as an apparent reward for supporting Kabbah in the second round of presidential balloting, the PDP secured three cabinet portfolios.</p>\n\n<p>Bangura died in March 1999. Following infighting between Osman Kamara and former NPRC member Abdul Rahman Kamara to replace Bangura. Osman Kamara was elected chair . Abdul Rahman Kamara quit the party to form his own organization, the People's Democratic Alliance (PDA) in November. In a cabinet reshuffle in March 2001. Osman Kamara was given the post of trade and industry minister, although he claimed that the PDP was still an opposition party. He was Subsequently replaced. The PDP, with 1 percent of the vote, failed to win a seat in the legislative election of May 2012. Following the election, one cabinet member affiliated with the PDP subsequently joined the SLPP. The party did not did not present a presidential candidate but came out in support of kabbah, Several party officials were expelled in 2006 for alleged financial malfeasance. The party did not participate in the 2007 elections.</p>","Acronym":"PDP","DateFounded":"1991","Founders":"Thaimu Bangura ","Website":"","Color":"","Logo":""},{"SLoepID":"13","Name":"Peoples Movement for Democratic Change (PMDC)","Description":"<p>The People's Movement for Democratic Change (PMDC) is a socially liberal party in  Sierra Leone. It is a breakaway faction of the Sierra Leone People Party(SLPP). It was officially registered on 19 January 2006. The party is led by Charles Margai, the son of Sierra Leone's second prime minister Sir Albert Margai and the nephew of  Sir Milton Margai. The PMDC is based in the country's second largest city of Bo.</p>\n\n<p>Margai, as the PMDC's candidate in August 2007 Presidential Election, received third place, behind Ernest Bai Koroma  of the opposition All Peoples Congress(APC) and Solomon Berewa  of the SLPP. On August 19, Margai stated his support for Koroma in the second round of the election. On August 20, the PMDC's Karamoh Kabba explained what he said was the reasoning behind the decision: the PMDC sought to \"ensure a more representative government, the survival of the PMDC as a political party and the creation of a third formidable political force for smooth running of democracy in Sierra Leone\". Furthermore, backing the APC would help to bridge the regional political divide marking Sierra Leone's politics (the SLPP and PMDC draw their main support from the south, while the APC draws its main support from the north), while backing the SLPP would deepen it. He added that the APC had a natural reason to want the PMDC to survive, while the SLPP had a natural reason to want to destroy it.</p>\n\n<p>Margai's support for the APC provoked controversy in the PMDC, with some feeling that his decision was made without properly consulting the party. Margai said on August 24 that the PMDC would campaign together with the APC for the second round.</p>\n\n<p>At the parliamentary election that was held on the same day as the first round of the 2007 presidential elections, the PMDC became the third largest party in Parliament with 10 seats (out of 112). In the 2008 Local Government elections, the PMDC did less well, winning only one Council Chairperson seat (out of 19), and 4% of the council seats. All seats won by the party were in the Southern region, specifically in the Bo, Bonthe, Moyamba and Pujehun districts.</p>\n\n<p>In the 2012 elections the party lost all of its remaining seats.</p>","Acronym":"PMDC","DateFounded":"January 19, 2006","Founders":"Charles Margai ","Website":"","Color":"Green, Orange","Logo":"/sites/default/files/Logo_PMDC_SierraLeone.png"},{"SLoepID":"1041","Name":"Republic National Independent Party (RNIP)","Description":"","Acronym":"RNIP","DateFounded":"","Founders":"","Website":"","Color":"","Logo":""},{"SLoepID":"14","Name":"Revolutionary United Front Party (RUFP)","Description":"","Acronym":"RUFP","DateFounded":"","Founders":"","Website":"","Color":"","Logo":"/sites/default/files/rufp_1.jpg"},{"SLoepID":"14","Name":"Revolutionary United Front Party (RUFP)","Description":"","Acronym":"RUFP","DateFounded":"","Founders":"","Website":"","Color":"","Logo":"/sites/default/files/rufp_1.jpg"},{"SLoepID":"15","Name":"Sierra Leone Peoples Party (SLPP)","Description":"<p>The Sierra Leone People's Party (abbreviated SLPP) is one of the two major political parties in Sierra Leone, along with the All People's Congress (APC). The party dominated Sierra Leone's politics from its foundation in 1951 to 1967, when it lost the 1967 parliamentary election to the APC, led by Siaka Stevens. It identifies as a social democratic party. The SLPP returned to power when its leader Ahmad Tejan Kabbah won the 1996 presidential election. The party was in power from 1996 to 2007, when it again lost to the APC, led by Ernest Bai Koroma, in the 2007 presidential election</p>\n\n<p>SLPP dominated politics in Sierra Leone in the years following World War II. In 1955 and 1956, riots occurred in Sierra Leone, originally sparked by the artisan union's strike over pay; further unrest followed strikes by transport workers. These events grew animosity between the SLPP and Krio parties, especially the Cyril Rogers-Wright led United Sierra Leone Progressive Party, established in 1954. The SLPP positioned itself as \"the countryman's party,\" and garnered the support of tribal chiefs.</p>\n\n<p>After elections in 1957, Milton Margai bowed to behind-the-scenes pressure and stepped down from SLPP leadership, replaced by his brother Albert Margai. However, in 1958, Albert Margai and Siaka Stevens launched a new party, the People's National Party (PNP), which aimed for greater African involvement in the British colonial government. With the independence of Ghana in 1957, the PNP sought the support of the educated elite to lead a transition to independence. Stevens would later leave the party to form the northern-supported All Peoples Congress. Upon independence in 1961, Milton Margai became Prime Minister, and the SLPP became the ruling party. The SLPP, along with almost all Sierra Leonean political parties, signed the constitution at the London constitutional conference; the APC was the notable exception. This unity did not extend to national politics, as opposing politicians often faced detainment under SLPP rule.</p>","Acronym":"SLPP","DateFounded":"1951","Founders":"Etheldred National Jones/Lamina Sankoh","Website":"","Color":"008000","Logo":"/sites/default/files/slpp.png"},{"SLoepID":"16","Name":"United Democratic Movement (UDM)","Description":"<p>UDM, with the goal of contesting the 2012 election. the UDM was established by former PMDC chair Mohamed Bangura in early 2011. The party received its official legal approval on May 31 and aimed to recruit a large number of youth among its members. </p>","Acronym":"UDM","DateFounded":"2011","Founders":"Mohamed Bangura","Website":"","Color":"Purple","Logo":"/sites/default/files/udm.jpg"},{"SLoepID":"17","Name":"United National Peoples party (UNPP)","Description":"<p>The UNPP secured 17 seats behind a 21 percent vote tally in the February 1996 balloting. Meanwhile, its leader, banker John Karifa-Smart, placed second in concurrent presidential balloting. In march 1997 Karifa-Smart was charged with contempt and suspended from the assembly. He also unsuccessfully attempted in April 2001 to expel some legislators from the party due to differences on certain policies. Karifa-Smart came in last, with 1 percent of the vote, in May 2002 presidential election,and the UNPP failed to win any seats in the legislative contest, with 1.3 percent of the vote. Following the election, a cabinet minister who had been a member of the UNPP joined the SLPP. In May 2005 the UNPP joined in coalition with the National Unity Movement (NUM, below) in advance of the next presidential elections. It backed out of a so called merger with RUF after some of the latter's leaders were charged with war crimes.</p>\n\n<p> Karifa-Smart retired from politics in 2006, and Abdul Kadi Karim was elected a party leader and 2007 presidential candidate. He came in last with 0.4 percent of votes. In 2008 the party was one of three ruled ineligible to take part in local elections in march.</p>","Acronym":"UNPP","DateFounded":"","Founders":"","Website":"","Color":"Yellow","Logo":""},{"SLoepID":"1036","Name":"Unity Party (UP)","Description":"","Acronym":"UP","DateFounded":"2017","Founders":"NEC","Website":"","Color":"Blue","Logo":"/sites/default/files/up.jpg"},{"SLoepID":"85","Name":"Young People&#039;s Party (YPP)","Description":"","Acronym":"YPP","DateFounded":"","Founders":"","Website":"","Color":"","Logo":""}]

/***/ }),

/***/ 355:
/***/ (function(module, exports) {

module.exports = [{"CandidateSLEOP_ID":"5351","Prefix":"Mr.","FirstName":"Kenneth S","MiddleName":"","SurName":" Bagolay","Suffix":"","PoliticalParty":"Revolutionary United Front Party (RUFP)","ElectionYear":"2012","ElectionType":"Parliamentary","Body":"","Photo":""},{"CandidateSLEOP_ID":"3737","Prefix":"Dr.","FirstName":"Ahmad Tejan","MiddleName":"","SurName":" Kabbah","Suffix":"","PoliticalParty":"Sierra Leone Peoples Party (SLPP)","ElectionYear":"1996","ElectionType":"Presidential","Body":"","Photo":"/sites/default/files/ahmad-tejan-kabbah.jpg"},{"CandidateSLEOP_ID":"5920","Prefix":"Mr.","FirstName":"Ibrahim","MiddleName":"","SurName":" Kamara","Suffix":"","PoliticalParty":"All Peoples Congress (APC)","ElectionYear":"2012","ElectionType":"Parliamentary","Body":"","Photo":""},{"CandidateSLEOP_ID":"6931","Prefix":"Mr.","FirstName":"Dauda Dassama Kamara","MiddleName":"","SurName":" Kamara","Suffix":"","PoliticalParty":"Peoples Movement for Democratic Change (PMDC)","ElectionYear":"2012","ElectionType":"Parliamentary","Body":"","Photo":""},{"CandidateSLEOP_ID":"6858","Prefix":"Mr.","FirstName":"Alhaji S","MiddleName":"","SurName":" Kamara","Suffix":"","PoliticalParty":"Revolutionary United Front Party (RUFP)","ElectionYear":"2012","ElectionType":"Parliamentary","Body":"","Photo":""},{"CandidateSLEOP_ID":"1476","Prefix":"","FirstName":"Sualiho","MiddleName":"","SurName":" Koroma","Suffix":"","PoliticalParty":"","ElectionYear":"","ElectionType":"","Body":"","Photo":""},{"CandidateSLEOP_ID":"1163","Prefix":"","FirstName":"Abdulai","MiddleName":"","SurName":" Sheriff","Suffix":"","PoliticalParty":"","ElectionYear":"","ElectionType":"","Body":"","Photo":""},{"CandidateSLEOP_ID":"6800","Prefix":"Mr.","FirstName":"Ajibola E Manly","MiddleName":"","SurName":" Spain","Suffix":"","PoliticalParty":"All Peoples Congress (APC)","ElectionYear":"2012","ElectionType":"Parliamentary","Body":"","Photo":""},{"CandidateSLEOP_ID":"3893","Prefix":"Mr.","FirstName":"Swaliho","MiddleName":"","SurName":" Vandi","Suffix":"","PoliticalParty":"Citizens Democratic Party (CDP)","ElectionYear":"2012","ElectionType":"Chair/Mayor","Body":"","Photo":""},{"CandidateSLEOP_ID":"3922","Prefix":"Mr.","FirstName":"Mustapha","MiddleName":"","SurName":" Vandi","Suffix":"","PoliticalParty":"United Democratic Movement (UDM)","ElectionYear":"2012","ElectionType":"Parliamentary","Body":"","Photo":""},{"CandidateSLEOP_ID":"3327","Prefix":"Mr.","FirstName":"Bambala S ","MiddleName":"","SurName":"Abdulai","Suffix":"","PoliticalParty":"Sierra Leone Peoples Party (SLPP)","ElectionYear":"2007","ElectionType":"Parliamentary","Body":"","Photo":""},{"CandidateSLEOP_ID":"2394","Prefix":"","FirstName":"Mustapha","MiddleName":"","SurName":"Abdulai","Suffix":"","PoliticalParty":"","ElectionYear":"","ElectionType":"","Body":"","Photo":""},{"CandidateSLEOP_ID":"1649","Prefix":"","FirstName":"Hawa","MiddleName":"","SurName":"Abdulai","Suffix":"","PoliticalParty":"","ElectionYear":"","ElectionType":"","Body":"","Photo":""},{"CandidateSLEOP_ID":"1149","Prefix":"","FirstName":"Moses","MiddleName":"","SurName":"Abdulai","Suffix":"","PoliticalParty":"","ElectionYear":"","ElectionType":"","Body":"","Photo":""},{"CandidateSLEOP_ID":"1154","Prefix":"","FirstName":"Elias John","MiddleName":"","SurName":"Aboud","Suffix":"","PoliticalParty":"","ElectionYear":"","ElectionType":"","Body":"","Photo":""},{"CandidateSLEOP_ID":"2614","Prefix":"Mr.","FirstName":"Songu-Mbriwa","MiddleName":"","SurName":"Aiah","Suffix":"","PoliticalParty":"All Peoples Congress (APC)","ElectionYear":"2007","ElectionType":"Parliamentary","Body":"","Photo":""},{"CandidateSLEOP_ID":"2616","Prefix":"Mr.","FirstName":"Thomas","MiddleName":"","SurName":"Aiah","Suffix":"","PoliticalParty":"Peoples Movement for Democratic Change (PMDC)","ElectionYear":"2007","ElectionType":"Parliamentary","Body":"","Photo":""},{"CandidateSLEOP_ID":"1504","Prefix":"","FirstName":"Judith","MiddleName":"","SurName":"Aimami","Suffix":"","PoliticalParty":"","ElectionYear":"","ElectionType":"","Body":"","Photo":""},{"CandidateSLEOP_ID":"7470","Prefix":"","FirstName":"Elfrida Omolade","MiddleName":"","SurName":"Aitkins","Suffix":"","PoliticalParty":"Independent (I)","ElectionYear":"2018","ElectionType":"Village Headmen","Body":"","Photo":""},{"CandidateSLEOP_ID":"2297","Prefix":"Mr.","FirstName":"Joseph Mitchelle","MiddleName":"","SurName":"Akar","Suffix":"","PoliticalParty":"Revolutionary United Front Party (RUFP)","ElectionYear":"2012","ElectionType":"Parliamentary","Body":"","Photo":""},{"CandidateSLEOP_ID":"2297","Prefix":"Mr.","FirstName":"Joseph Mitchelle","MiddleName":"","SurName":"Akar","Suffix":"","PoliticalParty":"Revolutionary United Front Party (RUFP)","ElectionYear":"2012","ElectionType":"Parliamentary","Body":"","Photo":""},{"CandidateSLEOP_ID":"2606","Prefix":"Mr.","FirstName":"Kowah`","MiddleName":"","SurName":"Albert","Suffix":"","PoliticalParty":"All Peoples Congress (APC)","ElectionYear":"2007","ElectionType":"Parliamentary","Body":"","Photo":""},{"CandidateSLEOP_ID":"2090","Prefix":"Mr.","FirstName":"David","MiddleName":"","SurName":"Alfred","Suffix":"","PoliticalParty":"Sierra Leone Peoples Party (SLPP)","ElectionYear":"2007","ElectionType":"Parliamentary","Body":"","Photo":""},{"CandidateSLEOP_ID":"2090","Prefix":"Mr.","FirstName":"David","MiddleName":"","SurName":"Alfred","Suffix":"","PoliticalParty":"All Peoples Congress (APC)","ElectionYear":"2007","ElectionType":"Parliamentary","Body":"","Photo":""},{"CandidateSLEOP_ID":"5160","Prefix":"Mr.","FirstName":"Muhammad B.","MiddleName":"","SurName":"Alghali","Suffix":"","PoliticalParty":"United Democratic Movement (UDM)","ElectionYear":"2012","ElectionType":"Parliamentary","Body":"","Photo":""},{"CandidateSLEOP_ID":"2366","Prefix":"Mr.","FirstName":"Muhammad B","MiddleName":"","SurName":"Alghali","Suffix":"","PoliticalParty":"United National Peoples party (UNPP)","ElectionYear":"2007","ElectionType":"Parliamentary","Body":"","Photo":""},{"CandidateSLEOP_ID":"2620","Prefix":"Mr.","FirstName":"Bangura","MiddleName":"","SurName":"Alhaji","Suffix":"","PoliticalParty":"United National Peoples party (UNPP)","ElectionYear":"2007","ElectionType":"Parliamentary","Body":"","Photo":""},{"CandidateSLEOP_ID":"2012","Prefix":"Mr.","FirstName":"James N D","MiddleName":"","SurName":"Alie","Suffix":"","PoliticalParty":"Sierra Leone Peoples Party (SLPP)","ElectionYear":"2012","ElectionType":"Parliamentary","Body":"","Photo":""},{"CandidateSLEOP_ID":"1198","Prefix":"","FirstName":"Prince ","MiddleName":"","SurName":"Alieu","Suffix":"","PoliticalParty":"","ElectionYear":"","ElectionType":"","Body":"","Photo":""},{"CandidateSLEOP_ID":"2987","Prefix":"Mr.","FirstName":"Tony D","MiddleName":"","SurName":"Allie","Suffix":"","PoliticalParty":"Peoples Movement for Democratic Change (PMDC)","ElectionYear":"2007","ElectionType":"Parliamentary","Body":"","Photo":""},{"CandidateSLEOP_ID":"925","Prefix":"","FirstName":"Christopher","MiddleName":"","SurName":"Allieu","Suffix":"","PoliticalParty":"","ElectionYear":"","ElectionType":"","Body":"","Photo":""},{"CandidateSLEOP_ID":"939","Prefix":"","FirstName":"Alex ","MiddleName":"","SurName":"Allieu","Suffix":"","PoliticalParty":"","ElectionYear":"","ElectionType":"","Body":"","Photo":""},{"CandidateSLEOP_ID":"5235","Prefix":"Ms.","FirstName":"Judith B.","MiddleName":"","SurName":"Almami","Suffix":"","PoliticalParty":"Citizens Democratic Party (CDP)","ElectionYear":"2012","ElectionType":"Parliamentary","Body":"","Photo":""},{"CandidateSLEOP_ID":"3201","Prefix":"Mr.","FirstName":"Desmond W","MiddleName":"","SurName":"Alworge","Suffix":"","PoliticalParty":"Peoples Movement for Democratic Change (PMDC)","ElectionYear":"2007","ElectionType":"Parliamentary","Body":"","Photo":""},{"CandidateSLEOP_ID":"4309","Prefix":"Mr.","FirstName":"Momoh Jinnah","MiddleName":"","SurName":"Amara","Suffix":"","PoliticalParty":"Revolutionary United Front Party (RUFP)","ElectionYear":"2012","ElectionType":"Parliamentary","Body":"","Photo":""},{"CandidateSLEOP_ID":"949","Prefix":"","FirstName":"Sahr ","MiddleName":"","SurName":"Amara","Suffix":"","PoliticalParty":"","ElectionYear":"","ElectionType":"","Body":"","Photo":""},{"CandidateSLEOP_ID":"3008","Prefix":"Mr.","FirstName":"Ibrahim N","MiddleName":"","SurName":"Amara","Suffix":"","PoliticalParty":"Sierra Leone Peoples Party (SLPP)","ElectionYear":"2007","ElectionType":"Parliamentary","Body":"","Photo":""},{"CandidateSLEOP_ID":"3083","Prefix":"Mr.","FirstName":"Enson","MiddleName":"","SurName":"Amara","Suffix":"","PoliticalParty":"National Democratic Alliance (NDA)","ElectionYear":"2007","ElectionType":"Parliamentary","Body":"","Photo":""},{"CandidateSLEOP_ID":"3153","Prefix":"Mr.","FirstName":"Joseph B","MiddleName":"","SurName":"Amara","Suffix":"","PoliticalParty":"Convention People&#039;s Party (CCP)","ElectionYear":"2007","ElectionType":"Parliamentary","Body":"","Photo":""},{"CandidateSLEOP_ID":"7787","Prefix":"","FirstName":"Julius","MiddleName":"","SurName":"Amara","Suffix":"","PoliticalParty":"Independent (I)","ElectionYear":"2018","ElectionType":"Village Headmen","Body":"","Photo":""},{"CandidateSLEOP_ID":"1497","Prefix":"","FirstName":"Momoh","MiddleName":"","SurName":"Amara","Suffix":"","PoliticalParty":"","ElectionYear":"","ElectionType":"","Body":"","Photo":""},{"CandidateSLEOP_ID":"1397","Prefix":"Mr.","FirstName":"Lansana Gando","MiddleName":"","SurName":"Amara","Suffix":"","PoliticalParty":"Sierra Leone Peoples Party (SLPP)","ElectionYear":"2007","ElectionType":"Parliamentary","Body":"","Photo":""},{"CandidateSLEOP_ID":"1135","Prefix":"","FirstName":"Keifala","MiddleName":"","SurName":"Ansumana","Suffix":"","PoliticalParty":"","ElectionYear":"","ElectionType":"","Body":"","Photo":""},{"CandidateSLEOP_ID":"2032","Prefix":"Mr.","FirstName":"Patrick M","MiddleName":"","SurName":"Ansumana","Suffix":"","PoliticalParty":"Citizens Democratic Party (CDP)","ElectionYear":"2012","ElectionType":"Parliamentary","Body":"","Photo":""},{"CandidateSLEOP_ID":"1188","Prefix":"","FirstName":"Sahr Bonse","MiddleName":"","SurName":"Ansumana","Suffix":"","PoliticalParty":"","ElectionYear":"","ElectionType":"","Body":"","Photo":""},{"CandidateSLEOP_ID":"2108","Prefix":"Mr.","FirstName":"Frank","MiddleName":"","SurName":"Anthony","Suffix":"","PoliticalParty":"All Peoples Congress (APC)","ElectionYear":"2007","ElectionType":"Parliamentary","Body":"","Photo":""},{"CandidateSLEOP_ID":"2240","Prefix":"Mr.","FirstName":"Dabor","MiddleName":"","SurName":"Anthony","Suffix":"","PoliticalParty":"National Democratic Alliance (NDA)","ElectionYear":"2012","ElectionType":"Parliamentary","Body":"","Photo":""},{"CandidateSLEOP_ID":"2998","Prefix":"Mr.","FirstName":"Aggery A","MiddleName":"","SurName":"Aruna","Suffix":"","PoliticalParty":"Peoples Movement for Democratic Change (PMDC)","ElectionYear":"2007","ElectionType":"Parliamentary","Body":"","Photo":""},{"CandidateSLEOP_ID":"2600","Prefix":"Mr.","FirstName":"Tamba","MiddleName":"","SurName":"Aruna","Suffix":"","PoliticalParty":"National Democratic Alliance (NDA)","ElectionYear":"2007","ElectionType":"Parliamentary","Body":"","Photo":""},{"CandidateSLEOP_ID":"1193","Prefix":"Hon.","FirstName":"Emmanuel ","MiddleName":"","SurName":"Babonju","Suffix":"","PoliticalParty":"","ElectionYear":"","ElectionType":"","Body":"","Photo":""},{"CandidateSLEOP_ID":"4069","Prefix":"Mr.","FirstName":"Honourable Emmanuel ","MiddleName":"","SurName":"Babonju","Suffix":"","PoliticalParty":"Sierra Leone Peoples Party (SLPP)","ElectionYear":"2012","ElectionType":"Parliamentary","Body":"","Photo":""},{"CandidateSLEOP_ID":"2104","Prefix":"Mr.","FirstName":"Kenneth S","MiddleName":"","SurName":"Bagolay","Suffix":"","PoliticalParty":"Revolutionary United Front Party (RUFP)","ElectionYear":"2007","ElectionType":"Parliamentary","Body":"","Photo":""},{"CandidateSLEOP_ID":"1136","Prefix":"","FirstName":"Mohamed ","MiddleName":"","SurName":"Bah","Suffix":"","PoliticalParty":"","ElectionYear":"","ElectionType":"","Body":"","Photo":""},{"CandidateSLEOP_ID":"1180","Prefix":"","FirstName":"Aminata","MiddleName":"","SurName":"Bah","Suffix":"","PoliticalParty":"","ElectionYear":"","ElectionType":"","Body":"","Photo":""},{"CandidateSLEOP_ID":"2145","Prefix":"Mr.","FirstName":"Abdul R","MiddleName":"","SurName":"Bah","Suffix":"","PoliticalParty":"National Democratic Alliance (NDA)","ElectionYear":"2012","ElectionType":"Parliamentary","Body":"","Photo":""},{"CandidateSLEOP_ID":"7891","Prefix":"Hon.","FirstName":"Chernor","MiddleName":"Ramadan Maju","SurName":"Bah","Suffix":"","PoliticalParty":"All Peoples Congress (APC)","ElectionYear":"2018","ElectionType":"Vice President","Body":"Chernor Ramadan Maju Bah (born April 29, 1972) also commonly known by his nickname - \"Chericoco\" is Sierra Leonean lawyer and politician who is currently the Deputy speaker of parliament of Sierra Leone and Parliamentary Chairman of the Mines and Minerals Resources Committee. He had also served as Chairman of the Parliamentary Legislative Committee.\n\nChernor Maju Bah was born and raised in the neighbourhood of Brookfields in the capital Freetown. He is a practicing Muslim and a member of the Fula ethnic group from Freetown. He is a Barrister-Solicitor by profession. \n\nHe is a member of the Sierra Leone Parliament from the Western Area Urban District, representing constituency 110, which is mainly made up of the neighborhood of Brookfields in Freetown. He is the ruling All People's Congress (APC) vice presidential candidate for the 2018 Sierra Leone presidential election, having named the APC vice presidential candidate at the party's convention in Makeni on October 15, 2017.\n\nChernor Maju Bah was first elected a member of parliament in the 2007 Sierra Leone Parliamentary elections. He was re-elected in the 2012 Sierra Leone Parliamentary elections with 68.45%, defeating his main opponent Joseph Maada Soyei of the main opposition Sierra Leone People's Party (SLPP).\n\nEducation\n\n<ul><li>\n\tBachelors of Law from Fourah Bay College, Sierra Leone\n\t</li>\n</ul>\n\nKey Accomplishments\n\n<ul><li>\n\tCommissioned of three water dams within the vicinity of Yazbeck, at the back of Hill Station.\n\t</li>\n</ul>","Photo":"/sites/default/files/apc-chernor-bah.jpg"},{"CandidateSLEOP_ID":"2178","Prefix":"Mr.","FirstName":"Chernor Maju","MiddleName":"","SurName":"Bah","Suffix":"","PoliticalParty":"Peoples Movement for Democratic Change (PMDC)","ElectionYear":"2007","ElectionType":"Parliamentary","Body":"","Photo":""},{"CandidateSLEOP_ID":"2180","Prefix":"Mr.","FirstName":"Chernor Mohamed Yassaru","MiddleName":"","SurName":"Bah","Suffix":"","PoliticalParty":"National Democratic Alliance (NDA)","ElectionYear":"2007","ElectionType":"Parliamentary","Body":"","Photo":""},{"CandidateSLEOP_ID":"3951","Prefix":"Mr.","FirstName":"Mohamed ","MiddleName":"","SurName":"Bah","Suffix":"","PoliticalParty":"National Democratic Alliance (NDA)","ElectionYear":"2012","ElectionType":"Parliamentary","Body":"","Photo":""},{"CandidateSLEOP_ID":"2356","Prefix":"Mr.","FirstName":"Chernor Ramadan Maju","MiddleName":"","SurName":"Bah","Suffix":"","PoliticalParty":"All Peoples Congress (APC)","ElectionYear":"2007","ElectionType":"Parliamentary","Body":"","Photo":""},{"CandidateSLEOP_ID":"3253","Prefix":"Mr.","FirstName":"Chernor M","MiddleName":"","SurName":"Bah","Suffix":"","PoliticalParty":"National Democratic Alliance (NDA)","ElectionYear":"2007","ElectionType":"Parliamentary","Body":"","Photo":""},{"CandidateSLEOP_ID":"3421","Prefix":"Mr.","FirstName":"Chernor R","MiddleName":"","SurName":"BAH","Suffix":"","PoliticalParty":"All Peoples Congress (APC)","ElectionYear":"2007","ElectionType":"Parliamentary","Body":"","Photo":""},{"CandidateSLEOP_ID":"3390","Prefix":"Mr.","FirstName":"Ibrahim","MiddleName":"","SurName":"Bah","Suffix":"","PoliticalParty":"Convention People&#039;s Party (CCP)","ElectionYear":"2007","ElectionType":"Parliamentary","Body":"","Photo":""},{"CandidateSLEOP_ID":"2484","Prefix":"Mr.","FirstName":"Yusuf U","MiddleName":"","SurName":"Bah","Suffix":"","PoliticalParty":"Alliance Democratic Party (ADP)","ElectionYear":"2007","ElectionType":"Parliamentary","Body":"","Photo":""},{"CandidateSLEOP_ID":"1515","Prefix":"","FirstName":"Mohamed Sallieu","MiddleName":"","SurName":"Bah","Suffix":"","PoliticalParty":"","ElectionYear":"","ElectionType":"","Body":"","Photo":""},{"CandidateSLEOP_ID":"3065","Prefix":"Ms.","FirstName":"Hawanatu","MiddleName":"","SurName":"Bah","Suffix":"","PoliticalParty":"National Democratic Alliance (NDA)","ElectionYear":"2007","ElectionType":"Parliamentary","Body":"","Photo":""},{"CandidateSLEOP_ID":"1400","Prefix":"","FirstName":"Mohamed Wurie","MiddleName":"","SurName":"Bah ","Suffix":"","PoliticalParty":"","ElectionYear":"","ElectionType":"","Body":"","Photo":""},{"CandidateSLEOP_ID":"1235","Prefix":"","FirstName":"Chernoh Alpha","MiddleName":"","SurName":"Bah","Suffix":"","PoliticalParty":"","ElectionYear":"","ElectionType":"","Body":"","Photo":""},{"CandidateSLEOP_ID":"7881","Prefix":"Mr.","FirstName":"Mohamed C","MiddleName":"C","SurName":"Bah ","Suffix":"","PoliticalParty":"National Democratic Alliance (NDA)","ElectionYear":"2018","ElectionType":"Presidential","Body":"","Photo":"/sites/default/files/mohamed-c-bah.jpg"},{"CandidateSLEOP_ID":"2528","Prefix":"Mr.","FirstName":"Abdulai","MiddleName":"","SurName":"Bah","Suffix":"","PoliticalParty":"National Democratic Alliance (NDA)","ElectionYear":"2007","ElectionType":"Parliamentary","Body":"","Photo":""},{"CandidateSLEOP_ID":"2802","Prefix":"Mr.","FirstName":"Amadu W","MiddleName":"","SurName":"Bah","Suffix":"","PoliticalParty":"Peoples Movement for Democratic Change (PMDC)","ElectionYear":"2007","ElectionType":"Parliamentary","Body":"","Photo":""},{"CandidateSLEOP_ID":"7846","Prefix":"","FirstName":"Sarah","MiddleName":"","SurName":"Bah","Suffix":"","PoliticalParty":"Independent (I)","ElectionYear":"2018","ElectionType":"Village Headmen","Body":"","Photo":""},{"CandidateSLEOP_ID":"33","Prefix":"Dr.","FirstName":"Ernest","MiddleName":"","SurName":"Bai Koroma","Suffix":"","PoliticalParty":"All Peoples Congress (APC)","ElectionYear":"2012","ElectionType":"Presidential","Body":"<p>The President of the Republic of Sierra Leone, Dr. Ernest Bai Koroma was born on October 2, 1953 in Makeni in the Bombali-Sebora Chiefdom, Bombali District, Northern Sierra Leone. Ernest Bai Koroma is the eldest son of eight children. He attended the Sierra Leone Church Primary School, Government Secondary School, Magburaka (Boys School) and Fourah Bay College (FBC), University of Sierra Leone. He graduated in 1976 and taught at the St. Francis Secondary School in Makeni, before joining the Sierra Leone National Insurance Company (NIC) in 1978.</p>\n\n<p>In 1985, the budding Insurance Specialist joined the Reliance Insurance Trust Corporation (RITCORP). A Chartered Insurer, Fellow of the West African Insurance Institute, (WAICA), Associate of Institute of Risk Management and Member of the Institute of Directors in the UK, Ernest Bai Koroma became RITCORP’s Managing Director in 1988, a position he held up to the March 2002  Presidential elections.</p>\n\n<p>Ernest Bai Koroma’s leadership qualities as head of a pioneering company, his public spiritedness, integrity, love and support for the common man and woman endeared him to supporters of the All People’s Congress (APC). The APC was formed in 1960 to advance the rights of ordinary citizens and secure the development of the country.</p>\n\n<p>The APC won Sierra Leone’s General Elections of 1967, assumed governance of the nation in 1968. A civil war started in 1991 led to the unconstitutional removal of the party from power and an atrocious conflict.</p>\n\n<p>The war ended in 2002, and the APC nominated Ernest Bai Koroma as its Presidential Candidate in elections held that year. The supporters of the APC found in Ernest Bai Koroma a leader who would combine his entrepreneurial skills and public spiritedness to carve a new path for development, private sector led growth and commitment to leaving no citizen behind in the country’s transformation into a peaceful, democratic and properly developing society.</p>\n\n<p>The 2002 Presidential elections were a turning point in the political career of President Ernest Bai Koroma. Despite losing the Presidential elections, he increased the number of seats of the APC in the Sierra Leone Parliament from a paltry five to twenty-seven seats in the 2002 General Elections.  He became the Minority Leader in Parliament from 2002 to 2007. His transformative leadership qualities, commitment to country, dignity and integrity gained increased visibility during this period and endeared him to a majority of his compatriots. With great skill, fortitude, and perseverance, Ernest Bai Koroma led his party to victory in 2007 elections and assumed the Presidency of the country. </p>\n\n<p>Building on the APC’s Manifesto, he firmed up the aspirations of Sierra Leoneans into An Agenda for Change, an action oriented template for socio-economic transformation. He commenced the biggest road construction program in the history of the country; transformed the energy sector by completing the Bumbuna Hydro electricity project and improving electricity output in the country; launched the small holder commercialization program, and initiated the free health care program for pregnant women, lactating mothers and children under five. His reforms attracted hundreds of millions of dollars investment in the country’s mining and agricultural sectors, creating thousands of jobs and one of the highest economic growth rates in the world.</p>\n\n<p>President Koroma’s reforms attracted hundreds of millions of dollars of investment into Sierra Leone’s mining and agricultural sectors, which created thousands of jobs and Sierra Leone recorded one of the highest economic growth rates in the world.  President Koroma’s Human Rights record is exemplary, standing tall as the only President in Sierra Leone’s history that has not carried out capital punishment during his Presidency. Also he is on record for encouraging a Free Press and never sent any journalists to prison. Ernest Bai Koroma’s administration stepped up the fight against corruption, enacting one of the most robust anti-corruption legislation in Africa, ensuring the highest annual conviction for corruption offenses and the recovery of hundreds of millions of Leones from convictions of corruption cases.</p>\n\n<p>A firm believer in equal rights and opportunities, Dr. Koroma has appointed women to high-ranking positions, including the Chief Justice (the first in the nation’s history), the Solicitor General, the Auditor General, the Commissioner General of the National Revenue Authority and a Brigadier General.</p>\n\n<p>Campaigning on a platform of doing more for the country through an Agenda for Prosperity, Ernest Bai Koroma won re-election as President on November 17, 2012. Whilst building up and expanding the achievements of the first term in office, the main thrust of his second term will be centering the youths in the country’s socio-political and economic development, attracting more investments through private sector friendly policies; and investments in developing the skills of Sierra Leoneans for active participation in the growing economy.</p>\n\n<p>President Koroma is an internationally acknowledged statesman, drawing accolades from President Obama of the United States of America, former Prime Minister Tony Blair, and his African colleagues. He is currently team leader of Africa’s effort to reform the United Nations.</p>\n\n<p>Dr Ernest Bai Koroma is a devoted Christian, married to First Lady Sia Nyama Koroma and is blessed with two daughters, Alice and Dankay</p>","Photo":"/sites/default/files/Ernest-Bai-Koroma.jpg"},{"CandidateSLEOP_ID":"33","Prefix":"Dr.","FirstName":"Ernest","MiddleName":"","SurName":"Bai Koroma","Suffix":"","PoliticalParty":"All Peoples Congress (APC)","ElectionYear":"2007","ElectionType":"Presidential","Body":"<p>The President of the Republic of Sierra Leone, Dr. Ernest Bai Koroma was born on October 2, 1953 in Makeni in the Bombali-Sebora Chiefdom, Bombali District, Northern Sierra Leone. Ernest Bai Koroma is the eldest son of eight children. He attended the Sierra Leone Church Primary School, Government Secondary School, Magburaka (Boys School) and Fourah Bay College (FBC), University of Sierra Leone. He graduated in 1976 and taught at the St. Francis Secondary School in Makeni, before joining the Sierra Leone National Insurance Company (NIC) in 1978.</p>\n\n<p>In 1985, the budding Insurance Specialist joined the Reliance Insurance Trust Corporation (RITCORP). A Chartered Insurer, Fellow of the West African Insurance Institute, (WAICA), Associate of Institute of Risk Management and Member of the Institute of Directors in the UK, Ernest Bai Koroma became RITCORP’s Managing Director in 1988, a position he held up to the March 2002  Presidential elections.</p>\n\n<p>Ernest Bai Koroma’s leadership qualities as head of a pioneering company, his public spiritedness, integrity, love and support for the common man and woman endeared him to supporters of the All People’s Congress (APC). The APC was formed in 1960 to advance the rights of ordinary citizens and secure the development of the country.</p>\n\n<p>The APC won Sierra Leone’s General Elections of 1967, assumed governance of the nation in 1968. A civil war started in 1991 led to the unconstitutional removal of the party from power and an atrocious conflict.</p>\n\n<p>The war ended in 2002, and the APC nominated Ernest Bai Koroma as its Presidential Candidate in elections held that year. The supporters of the APC found in Ernest Bai Koroma a leader who would combine his entrepreneurial skills and public spiritedness to carve a new path for development, private sector led growth and commitment to leaving no citizen behind in the country’s transformation into a peaceful, democratic and properly developing society.</p>\n\n<p>The 2002 Presidential elections were a turning point in the political career of President Ernest Bai Koroma. Despite losing the Presidential elections, he increased the number of seats of the APC in the Sierra Leone Parliament from a paltry five to twenty-seven seats in the 2002 General Elections.  He became the Minority Leader in Parliament from 2002 to 2007. His transformative leadership qualities, commitment to country, dignity and integrity gained increased visibility during this period and endeared him to a majority of his compatriots. With great skill, fortitude, and perseverance, Ernest Bai Koroma led his party to victory in 2007 elections and assumed the Presidency of the country. </p>\n\n<p>Building on the APC’s Manifesto, he firmed up the aspirations of Sierra Leoneans into An Agenda for Change, an action oriented template for socio-economic transformation. He commenced the biggest road construction program in the history of the country; transformed the energy sector by completing the Bumbuna Hydro electricity project and improving electricity output in the country; launched the small holder commercialization program, and initiated the free health care program for pregnant women, lactating mothers and children under five. His reforms attracted hundreds of millions of dollars investment in the country’s mining and agricultural sectors, creating thousands of jobs and one of the highest economic growth rates in the world.</p>\n\n<p>President Koroma’s reforms attracted hundreds of millions of dollars of investment into Sierra Leone’s mining and agricultural sectors, which created thousands of jobs and Sierra Leone recorded one of the highest economic growth rates in the world.  President Koroma’s Human Rights record is exemplary, standing tall as the only President in Sierra Leone’s history that has not carried out capital punishment during his Presidency. Also he is on record for encouraging a Free Press and never sent any journalists to prison. Ernest Bai Koroma’s administration stepped up the fight against corruption, enacting one of the most robust anti-corruption legislation in Africa, ensuring the highest annual conviction for corruption offenses and the recovery of hundreds of millions of Leones from convictions of corruption cases.</p>\n\n<p>A firm believer in equal rights and opportunities, Dr. Koroma has appointed women to high-ranking positions, including the Chief Justice (the first in the nation’s history), the Solicitor General, the Auditor General, the Commissioner General of the National Revenue Authority and a Brigadier General.</p>\n\n<p>Campaigning on a platform of doing more for the country through an Agenda for Prosperity, Ernest Bai Koroma won re-election as President on November 17, 2012. Whilst building up and expanding the achievements of the first term in office, the main thrust of his second term will be centering the youths in the country’s socio-political and economic development, attracting more investments through private sector friendly policies; and investments in developing the skills of Sierra Leoneans for active participation in the growing economy.</p>\n\n<p>President Koroma is an internationally acknowledged statesman, drawing accolades from President Obama of the United States of America, former Prime Minister Tony Blair, and his African colleagues. He is currently team leader of Africa’s effort to reform the United Nations.</p>\n\n<p>Dr Ernest Bai Koroma is a devoted Christian, married to First Lady Sia Nyama Koroma and is blessed with two daughters, Alice and Dankay</p>","Photo":"/sites/default/files/Ernest-Bai-Koroma.jpg"},{"CandidateSLEOP_ID":"33","Prefix":"Dr.","FirstName":"Ernest","MiddleName":"","SurName":"Bai Koroma","Suffix":"","PoliticalParty":"All Peoples Congress (APC)","ElectionYear":"2002","ElectionType":"Presidential","Body":"<p>The President of the Republic of Sierra Leone, Dr. Ernest Bai Koroma was born on October 2, 1953 in Makeni in the Bombali-Sebora Chiefdom, Bombali District, Northern Sierra Leone. Ernest Bai Koroma is the eldest son of eight children. He attended the Sierra Leone Church Primary School, Government Secondary School, Magburaka (Boys School) and Fourah Bay College (FBC), University of Sierra Leone. He graduated in 1976 and taught at the St. Francis Secondary School in Makeni, before joining the Sierra Leone National Insurance Company (NIC) in 1978.</p>\n\n<p>In 1985, the budding Insurance Specialist joined the Reliance Insurance Trust Corporation (RITCORP). A Chartered Insurer, Fellow of the West African Insurance Institute, (WAICA), Associate of Institute of Risk Management and Member of the Institute of Directors in the UK, Ernest Bai Koroma became RITCORP’s Managing Director in 1988, a position he held up to the March 2002  Presidential elections.</p>\n\n<p>Ernest Bai Koroma’s leadership qualities as head of a pioneering company, his public spiritedness, integrity, love and support for the common man and woman endeared him to supporters of the All People’s Congress (APC). The APC was formed in 1960 to advance the rights of ordinary citizens and secure the development of the country.</p>\n\n<p>The APC won Sierra Leone’s General Elections of 1967, assumed governance of the nation in 1968. A civil war started in 1991 led to the unconstitutional removal of the party from power and an atrocious conflict.</p>\n\n<p>The war ended in 2002, and the APC nominated Ernest Bai Koroma as its Presidential Candidate in elections held that year. The supporters of the APC found in Ernest Bai Koroma a leader who would combine his entrepreneurial skills and public spiritedness to carve a new path for development, private sector led growth and commitment to leaving no citizen behind in the country’s transformation into a peaceful, democratic and properly developing society.</p>\n\n<p>The 2002 Presidential elections were a turning point in the political career of President Ernest Bai Koroma. Despite losing the Presidential elections, he increased the number of seats of the APC in the Sierra Leone Parliament from a paltry five to twenty-seven seats in the 2002 General Elections.  He became the Minority Leader in Parliament from 2002 to 2007. His transformative leadership qualities, commitment to country, dignity and integrity gained increased visibility during this period and endeared him to a majority of his compatriots. With great skill, fortitude, and perseverance, Ernest Bai Koroma led his party to victory in 2007 elections and assumed the Presidency of the country. </p>\n\n<p>Building on the APC’s Manifesto, he firmed up the aspirations of Sierra Leoneans into An Agenda for Change, an action oriented template for socio-economic transformation. He commenced the biggest road construction program in the history of the country; transformed the energy sector by completing the Bumbuna Hydro electricity project and improving electricity output in the country; launched the small holder commercialization program, and initiated the free health care program for pregnant women, lactating mothers and children under five. His reforms attracted hundreds of millions of dollars investment in the country’s mining and agricultural sectors, creating thousands of jobs and one of the highest economic growth rates in the world.</p>\n\n<p>President Koroma’s reforms attracted hundreds of millions of dollars of investment into Sierra Leone’s mining and agricultural sectors, which created thousands of jobs and Sierra Leone recorded one of the highest economic growth rates in the world.  President Koroma’s Human Rights record is exemplary, standing tall as the only President in Sierra Leone’s history that has not carried out capital punishment during his Presidency. Also he is on record for encouraging a Free Press and never sent any journalists to prison. Ernest Bai Koroma’s administration stepped up the fight against corruption, enacting one of the most robust anti-corruption legislation in Africa, ensuring the highest annual conviction for corruption offenses and the recovery of hundreds of millions of Leones from convictions of corruption cases.</p>\n\n<p>A firm believer in equal rights and opportunities, Dr. Koroma has appointed women to high-ranking positions, including the Chief Justice (the first in the nation’s history), the Solicitor General, the Auditor General, the Commissioner General of the National Revenue Authority and a Brigadier General.</p>\n\n<p>Campaigning on a platform of doing more for the country through an Agenda for Prosperity, Ernest Bai Koroma won re-election as President on November 17, 2012. Whilst building up and expanding the achievements of the first term in office, the main thrust of his second term will be centering the youths in the country’s socio-political and economic development, attracting more investments through private sector friendly policies; and investments in developing the skills of Sierra Leoneans for active participation in the growing economy.</p>\n\n<p>President Koroma is an internationally acknowledged statesman, drawing accolades from President Obama of the United States of America, former Prime Minister Tony Blair, and his African colleagues. He is currently team leader of Africa’s effort to reform the United Nations.</p>\n\n<p>Dr Ernest Bai Koroma is a devoted Christian, married to First Lady Sia Nyama Koroma and is blessed with two daughters, Alice and Dankay</p>","Photo":"/sites/default/files/Ernest-Bai-Koroma.jpg"},{"CandidateSLEOP_ID":"3145","Prefix":"Mr.","FirstName":"Mervin K","MiddleName":"","SurName":"Bailor","Suffix":"","PoliticalParty":"United National Peoples party (UNPP)","ElectionYear":"2007","ElectionType":"Parliamentary","Body":"","Photo":""},{"CandidateSLEOP_ID":"3000","Prefix":"Mr.","FirstName":"Abu L","MiddleName":"","SurName":"Bakara","Suffix":"","PoliticalParty":"National Democratic Alliance (NDA)","ElectionYear":"2007","ElectionType":"Parliamentary","Body":"","Photo":""},{"CandidateSLEOP_ID":"2906","Prefix":"Mr.","FirstName":"Mohamed A","MiddleName":"","SurName":"Bakarr","Suffix":"","PoliticalParty":"National Democratic Alliance (NDA)","ElectionYear":"2007","ElectionType":"Parliamentary","Body":"","Photo":""},{"CandidateSLEOP_ID":"944","Prefix":"","FirstName":"Tarawallie","MiddleName":"","SurName":"Bangalie","Suffix":"","PoliticalParty":"","ElectionYear":"","ElectionType":"","Body":"","Photo":""},{"CandidateSLEOP_ID":"7772","Prefix":"","FirstName":"Saidu Adard","MiddleName":"","SurName":"Bangura","Suffix":"","PoliticalParty":"Independent (I)","ElectionYear":"2018","ElectionType":"Village Headmen","Body":"","Photo":""},{"CandidateSLEOP_ID":"1427","Prefix":"Hon.","FirstName":"Benneh","MiddleName":"","SurName":"Bangura","Suffix":"","PoliticalParty":"","ElectionYear":"","ElectionType":"","Body":"","Photo":""},{"CandidateSLEOP_ID":"2342","Prefix":"Mr.","FirstName":"Abdulai B","MiddleName":"","SurName":"Bangura","Suffix":"","PoliticalParty":"All Peoples Congress (APC)","ElectionYear":"2012","ElectionType":"Parliamentary","Body":"","Photo":""},{"CandidateSLEOP_ID":"3435","Prefix":"Mr.","FirstName":"Abdulai","MiddleName":"","SurName":"Bangura","Suffix":"","PoliticalParty":"United National Peoples party (UNPP)","ElectionYear":"2007","ElectionType":"Parliamentary","Body":"","Photo":""},{"CandidateSLEOP_ID":"2167","Prefix":"Mr.","FirstName":"Mohamed Sahid","MiddleName":"","SurName":"Bangura","Suffix":"","PoliticalParty":"United Democratic Movement (UDM)","ElectionYear":"2007","ElectionType":"Presidential","Body":"","Photo":""},{"CandidateSLEOP_ID":"7482","Prefix":"","FirstName":"Abubakarr","MiddleName":"","SurName":"Bangura","Suffix":"","PoliticalParty":"Independent (I)","ElectionYear":"2018","ElectionType":"Village Headmen","Body":"","Photo":""},{"CandidateSLEOP_ID":"1307","Prefix":"","FirstName":"Mabinty","MiddleName":"","SurName":"Bangura","Suffix":"","PoliticalParty":"","ElectionYear":"","ElectionType":"","Body":"","Photo":""},{"CandidateSLEOP_ID":"1239","Prefix":"","FirstName":"Jacob","MiddleName":"","SurName":"Bangura","Suffix":"","PoliticalParty":"","ElectionYear":"","ElectionType":"","Body":"","Photo":""},{"CandidateSLEOP_ID":"7814","Prefix":"","FirstName":"Musa","MiddleName":"","SurName":"Bangura","Suffix":"","PoliticalParty":"Independent (I)","ElectionYear":"2018","ElectionType":"Village Headmen","Body":"","Photo":""},{"CandidateSLEOP_ID":"4240","Prefix":"Mr.","FirstName":"Ibrahim Martin ","MiddleName":"","SurName":"Bangura","Suffix":"","PoliticalParty":"All Peoples Congress (APC)","ElectionYear":"2012","ElectionType":"Parliamentary","Body":"","Photo":""},{"CandidateSLEOP_ID":"6903","Prefix":"Mr.","FirstName":"Abdulai B ","MiddleName":"","SurName":"Bangura","Suffix":"","PoliticalParty":"Peoples Democratic Party (PDP)","ElectionYear":"2012","ElectionType":"Parliamentary","Body":"","Photo":""},{"CandidateSLEOP_ID":"2842","Prefix":"Mr.","FirstName":"Andrew M","MiddleName":"","SurName":"Bangura","Suffix":"","PoliticalParty":"Sierra Leone Peoples Party (SLPP)","ElectionYear":"2007","ElectionType":"Parliamentary","Body":"","Photo":""},{"CandidateSLEOP_ID":"2346","Prefix":"Mr.","FirstName":"Emmanuel","MiddleName":"","SurName":"Bangura","Suffix":"","PoliticalParty":"Peoples Movement for Democratic Change (PMDC)","ElectionYear":"2007","ElectionType":"Parliamentary","Body":"","Photo":""},{"CandidateSLEOP_ID":"6910","Prefix":"Mr.","FirstName":"Emmanuel ","MiddleName":"","SurName":"Bangura","Suffix":"","PoliticalParty":"Peoples Movement for Democratic Change (PMDC)","ElectionYear":"2012","ElectionType":"Parliamentary","Body":"","Photo":""},{"CandidateSLEOP_ID":"1311","Prefix":"","FirstName":"Abdul B","MiddleName":"","SurName":"Bangura","Suffix":"","PoliticalParty":"","ElectionYear":"","ElectionType":"","Body":"","Photo":""},{"CandidateSLEOP_ID":"2742","Prefix":"Mr.","FirstName":"Abdul R","MiddleName":"","SurName":"Bangura","Suffix":"","PoliticalParty":"United National Peoples party (UNPP)","ElectionYear":"2007","ElectionType":"Parliamentary","Body":"","Photo":""},{"CandidateSLEOP_ID":"46","Prefix":"Mr.","FirstName":"Mohamed","MiddleName":"","SurName":"Bangura","Suffix":"","PoliticalParty":"United Democratic Movement (UDM)","ElectionYear":"2012","ElectionType":"Presidential","Body":"","Photo":"/sites/default/files/Mohamed-Bangura-500x500.jpg"},{"CandidateSLEOP_ID":"1314","Prefix":"","FirstName":"Musa ","MiddleName":"","SurName":"Bangura","Suffix":"","PoliticalParty":"","ElectionYear":"","ElectionType":"","Body":"","Photo":""},{"CandidateSLEOP_ID":"2206","Prefix":"Mr.","FirstName":"Mustapha","MiddleName":"","SurName":"Bangura","Suffix":"","PoliticalParty":"Peoples Movement for Democratic Change (PMDC)","ElectionYear":"2007","ElectionType":"Parliamentary","Body":"","Photo":""},{"CandidateSLEOP_ID":"4171","Prefix":"Mr.","FirstName":"Jacob Benedict ","MiddleName":"","SurName":"Bangura","Suffix":"","PoliticalParty":"Independent (I)","ElectionYear":"2012","ElectionType":"Parliamentary","Body":"","Photo":""},{"CandidateSLEOP_ID":"1271","Prefix":"","FirstName":"Ashiatu ","MiddleName":"","SurName":"Bangura ","Suffix":"","PoliticalParty":"","ElectionYear":"","ElectionType":"","Body":"","Photo":""}]

/***/ }),

/***/ 356:
/***/ (function(module, exports) {

module.exports = [{"SLEOP_ID":"5184","ElectionYear":"2018","PollingCentreCode":" 6092","PollingCentreName":"Community School, Wara Waya","PollingCentreRegion":"North","PollingCentreDistrict":"Koinadugu","PollingCentreConstituency":"Constituency 045","PollingCentreWard":"Ward 154","Registered_Voters":"282","PollingCentreLatitude":"9.59612","PollingCentreLongitude":"-11.53136"},{"SLEOP_ID":"3119","ElectionYear":"2018","PollingCentreCode":"1001","PollingCentreName":"Town Barray, Kamakpodu","PollingCentreRegion":"East","PollingCentreDistrict":"Kailahun","PollingCentreConstituency":"Constituency 001","PollingCentreWard":"Ward 001","Registered_Voters":"1118","PollingCentreLatitude":"8.42081","PollingCentreLongitude":"-10.28105"},{"SLEOP_ID":"3461","ElectionYear":"2018","PollingCentreCode":"1002","PollingCentreName":"Town Barray, Falama","PollingCentreRegion":"East","PollingCentreDistrict":"Kailahun","PollingCentreConstituency":"Constituency 001","PollingCentreWard":"Ward 002","Registered_Voters":"466","PollingCentreLatitude":"8.27483","PollingCentreLongitude":"-10.65558"},{"SLEOP_ID":"3462","ElectionYear":"2018","PollingCentreCode":"1003","PollingCentreName":"Town Barray, Dambar","PollingCentreRegion":"East","PollingCentreDistrict":"Kailahun","PollingCentreConstituency":"Constituency 001","PollingCentreWard":"Ward 002","Registered_Voters":"401","PollingCentreLatitude":"8.31839","PollingCentreLongitude":"-10.60052"},{"SLEOP_ID":"3463","ElectionYear":"2018","PollingCentreCode":"1004","PollingCentreName":"Sandia Community Barray, Sandia ","PollingCentreRegion":"East","PollingCentreDistrict":"Kailahun","PollingCentreConstituency":"Constituency 001","PollingCentreWard":"Ward 001","Registered_Voters":"1252","PollingCentreLatitude":"8.33038","PollingCentreLongitude":"-10.6288"},{"SLEOP_ID":"3464","ElectionYear":"2018","PollingCentreCode":"1005","PollingCentreName":"Town Barray, Taidu","PollingCentreRegion":"East","PollingCentreDistrict":"Kailahun","PollingCentreConstituency":"Constituency 001","PollingCentreWard":"Ward 001","Registered_Voters":"447","PollingCentreLatitude":"8.29504","PollingCentreLongitude":"-10.60757"},{"SLEOP_ID":"3465","ElectionYear":"2018","PollingCentreCode":"1006","PollingCentreName":"Open Space, Killima Town","PollingCentreRegion":"East","PollingCentreDistrict":"Kailahun","PollingCentreConstituency":"Constituency 001","PollingCentreWard":"Ward 001","Registered_Voters":"326","PollingCentreLatitude":"8.28535","PollingCentreLongitude":"-10.56604"},{"SLEOP_ID":"3466","ElectionYear":"2018","PollingCentreCode":"1007","PollingCentreName":"NA court Barray, Buedu","PollingCentreRegion":"East","PollingCentreDistrict":"Kailahun","PollingCentreConstituency":"Constituency 001","PollingCentreWard":"Ward 002","Registered_Voters":"966","PollingCentreLatitude":"8.27671","PollingCentreLongitude":"-10.56525"},{"SLEOP_ID":"3467","ElectionYear":"2018","PollingCentreCode":"1008","PollingCentreName":"Buedu Community Centre,  Buedu","PollingCentreRegion":"East","PollingCentreDistrict":"Kailahun","PollingCentreConstituency":"Constituency 001","PollingCentreWard":"Ward 002","Registered_Voters":"1049","PollingCentreLatitude":"8.27755","PollingCentreLongitude":"-10.57395"},{"SLEOP_ID":"483","ElectionYear":"2018","PollingCentreCode":"1009","PollingCentreName":"R.C Primary School, Buedu","PollingCentreRegion":"East","PollingCentreDistrict":"Kailahun","PollingCentreConstituency":"Constituency 001","PollingCentreWard":"Ward 002","Registered_Voters":"1062","PollingCentreLatitude":"8.27534","PollingCentreLongitude":"-10.58104"},{"SLEOP_ID":"484","ElectionYear":"2018","PollingCentreCode":"1010","PollingCentreName":"KLDEC, Weh Town","PollingCentreRegion":"East","PollingCentreDistrict":"Kailahun","PollingCentreConstituency":"Constituency 001","PollingCentreWard":"Ward 002","Registered_Voters":"580","PollingCentreLatitude":"8.26515","PollingCentreLongitude":"-10.5815"},{"SLEOP_ID":"485","ElectionYear":"2018","PollingCentreCode":"1011","PollingCentreName":"Open Space, Mendekuama Town","PollingCentreRegion":"East","PollingCentreDistrict":"Kailahun","PollingCentreConstituency":"Constituency 001","PollingCentreWard":"Ward 002","Registered_Voters":"638","PollingCentreLatitude":"8.22423","PollingCentreLongitude":"-10.58506"},{"SLEOP_ID":"3470","ElectionYear":"","PollingCentreCode":"1011","PollingCentreName":"Open Space, Mendekuama Town","PollingCentreRegion":"East","PollingCentreDistrict":"Kailahun","PollingCentreConstituency":"Constituency 001","PollingCentreWard":"Ward 002","Registered_Voters":"","PollingCentreLatitude":"","PollingCentreLongitude":""},{"SLEOP_ID":"3471","ElectionYear":"2018","PollingCentreCode":"1012","PollingCentreName":"Town Barray, Koldu Bendu","PollingCentreRegion":"East","PollingCentreDistrict":"Kailahun","PollingCentreConstituency":"Constituency 001","PollingCentreWard":"Ward 002","Registered_Voters":"848","PollingCentreLatitude":"8.22329","PollingCentreLongitude":"-10.58505"},{"SLEOP_ID":"6024","ElectionYear":"2018","PollingCentreCode":"10128","PollingCentreName":"Temp Polling Structure Makoberay","PollingCentreRegion":"North West","PollingCentreDistrict":"Port Loko","PollingCentreConstituency":"Constituency 068","PollingCentreWard":"Ward 248","Registered_Voters":"414","PollingCentreLatitude":"8.80553","PollingCentreLongitude":"-12.98082"},{"SLEOP_ID":"6039","ElectionYear":"2018","PollingCentreCode":"10129","PollingCentreName":"Temp Polling Limpkakuru","PollingCentreRegion":"North West","PollingCentreDistrict":"Port Loko","PollingCentreConstituency":"Constituency 068","PollingCentreWard":"Ward 248","Registered_Voters":"1085","PollingCentreLatitude":"8.77153","PollingCentreLongitude":"-12.86892"},{"SLEOP_ID":"3472","ElectionYear":"2018","PollingCentreCode":"1013","PollingCentreName":"Court Barray , Tongi tingi, Dawa","PollingCentreRegion":"East","PollingCentreDistrict":"Kailahun","PollingCentreConstituency":"Constituency 001","PollingCentreWard":"Ward 003","Registered_Voters":"1040","PollingCentreLatitude":"8.25906","PollingCentreLongitude":"-10.31663"},{"SLEOP_ID":"6068","ElectionYear":"2018","PollingCentreCode":"10130","PollingCentreName":"Temp Poll Tauaya","PollingCentreRegion":"North West","PollingCentreDistrict":"Port Loko","PollingCentreConstituency":"Constituency 068","PollingCentreWard":"Ward 248","Registered_Voters":"429","PollingCentreLatitude":"8.84356","PollingCentreLongitude":"-12.81876"},{"SLEOP_ID":"6070","ElectionYear":"2018","PollingCentreCode":"10131","PollingCentreName":"S L M B Pri Sch Mataitie","PollingCentreRegion":"North West","PollingCentreDistrict":"Port Loko","PollingCentreConstituency":"Constituency 068","PollingCentreWard":"Ward 248","Registered_Voters":"1432","PollingCentreLatitude":"8.91379","PollingCentreLongitude":"-12.88885"},{"SLEOP_ID":"6071","ElectionYear":"2018","PollingCentreCode":"10132","PollingCentreName":"Alfair Islamic Mission Ophanage Rogbap","PollingCentreRegion":"North West","PollingCentreDistrict":"Port Loko","PollingCentreConstituency":"Constituency 068","PollingCentreWard":"Ward 248","Registered_Voters":"688","PollingCentreLatitude":"8.89753","PollingCentreLongitude":"-12.86468"},{"SLEOP_ID":"6073","ElectionYear":"2018","PollingCentreCode":"10133","PollingCentreName":"D E C Pri Sch Mamanka","PollingCentreRegion":"North West","PollingCentreDistrict":"Port Loko","PollingCentreConstituency":"Constituency 068","PollingCentreWard":"Ward 248","Registered_Voters":"454","PollingCentreLatitude":"8.85543","PollingCentreLongitude":"-12.82052"},{"SLEOP_ID":"6075","ElectionYear":"2018","PollingCentreCode":"10134","PollingCentreName":"Rogbla Pri Sch Rogbla","PollingCentreRegion":"North West","PollingCentreDistrict":"Port Loko","PollingCentreConstituency":"Constituency 068","PollingCentreWard":"Ward 249","Registered_Voters":"605","PollingCentreLatitude":"8.87228","PollingCentreLongitude":"-12.84514"},{"SLEOP_ID":"6076","ElectionYear":"2018","PollingCentreCode":"10135","PollingCentreName":"D E C Pri Sch Yonkro","PollingCentreRegion":"North West","PollingCentreDistrict":"Port Loko","PollingCentreConstituency":"Constituency 068","PollingCentreWard":"Ward 248","Registered_Voters":"716","PollingCentreLatitude":"8.89886","PollingCentreLongitude":"-12.84912"},{"SLEOP_ID":"6078","ElectionYear":"2018","PollingCentreCode":"10137","PollingCentreName":"R C Pri Sch Malal","PollingCentreRegion":"North West","PollingCentreDistrict":"Port Loko","PollingCentreConstituency":"Constituency 068","PollingCentreWard":"Ward 248","Registered_Voters":"1018","PollingCentreLatitude":"8.84632","PollingCentreLongitude":"-12.73602"},{"SLEOP_ID":"6072","ElectionYear":"2018","PollingCentreCode":"10139","PollingCentreName":"S L M B Pri Sch Kambia Morie Mange","PollingCentreRegion":"North West","PollingCentreDistrict":"Port Loko","PollingCentreConstituency":"Constituency 068","PollingCentreWard":"Ward 249","Registered_Voters":"1231","PollingCentreLatitude":"8.58326","PollingCentreLongitude":"-11.95217"},{"SLEOP_ID":"488","ElectionYear":"2018","PollingCentreCode":"1014","PollingCentreName":"Town Barray, Tongi tingi, Vuahun Town","PollingCentreRegion":"East","PollingCentreDistrict":"Kailahun","PollingCentreConstituency":"Constituency 001","PollingCentreWard":"Ward 003","Registered_Voters":"791","PollingCentreLatitude":"8.23069","PollingCentreLongitude":"-10.34229"},{"SLEOP_ID":"6080","ElectionYear":"2018","PollingCentreCode":"10142","PollingCentreName":"A M E Pri Sch Rosellah","PollingCentreRegion":"North West","PollingCentreDistrict":"Port Loko","PollingCentreConstituency":"Constituency 068","PollingCentreWard":"Ward 249","Registered_Voters":"854","PollingCentreLatitude":"8.98692","PollingCentreLongitude":"-12.8193"},{"SLEOP_ID":"6081","ElectionYear":"2018","PollingCentreCode":"10144","PollingCentreName":"S L U M Sec Sch Kagbanthama","PollingCentreRegion":"North West","PollingCentreDistrict":"Port Loko","PollingCentreConstituency":"Constituency 068","PollingCentreWard":"Ward 250","Registered_Voters":"476","PollingCentreLatitude":"8.96493","PollingCentreLongitude":"-12.67542"},{"SLEOP_ID":"6082","ElectionYear":"2018","PollingCentreCode":"10145","PollingCentreName":"R C Pri Sch Kagbanthama","PollingCentreRegion":"North West","PollingCentreDistrict":"Port Loko","PollingCentreConstituency":"Constituency 068","PollingCentreWard":"Ward 250","Registered_Voters":"692","PollingCentreLatitude":"8.96057","PollingCentreLongitude":"-12.66987"},{"SLEOP_ID":"6086","ElectionYear":"2018","PollingCentreCode":"10148","PollingCentreName":"R C Pri Sch Romeni","PollingCentreRegion":"North West","PollingCentreDistrict":"Port Loko","PollingCentreConstituency":"Constituency 068","PollingCentreWard":"Ward 250","Registered_Voters":"819","PollingCentreLatitude":"8.90619","PollingCentreLongitude":"-12.71854"},{"SLEOP_ID":"6087","ElectionYear":"2018","PollingCentreCode":"10149","PollingCentreName":"D E C Pri Sch Rotifunk","PollingCentreRegion":"North West","PollingCentreDistrict":"Port Loko","PollingCentreConstituency":"Constituency 068","PollingCentreWard":"Ward 250","Registered_Voters":"721","PollingCentreLatitude":"8.93262","PollingCentreLongitude":"-12.76074"},{"SLEOP_ID":"3474","ElectionYear":"2018","PollingCentreCode":"1015","PollingCentreName":" Court Barray, Tongi tingi, Mandopolahun","PollingCentreRegion":"East","PollingCentreDistrict":"Kailahun","PollingCentreConstituency":"Constituency 001","PollingCentreWard":"Ward 003","Registered_Voters":"1415","PollingCentreLatitude":"8.21056","PollingCentreLongitude":"-10.31623"},{"SLEOP_ID":"6115","ElectionYear":"2018","PollingCentreCode":"10152","PollingCentreName":"Community Centre Bamoi","PollingCentreRegion":"North West","PollingCentreDistrict":"Port Loko","PollingCentreConstituency":"Constituency 068","PollingCentreWard":"Ward 250","Registered_Voters":"1043","PollingCentreLatitude":"8.98536","PollingCentreLongitude":"-12.63044"},{"SLEOP_ID":"6116","ElectionYear":"2018","PollingCentreCode":"10153","PollingCentreName":"D E C Pri Sch Konikay","PollingCentreRegion":"North West","PollingCentreDistrict":"Port Loko","PollingCentreConstituency":"Constituency 069","PollingCentreWard":"Ward 251","Registered_Voters":"912","PollingCentreLatitude":"8.87405","PollingCentreLongitude":"-12.65723"},{"SLEOP_ID":"6117","ElectionYear":"2018","PollingCentreCode":"10154","PollingCentreName":"D E C Pri Sch Rogbongha","PollingCentreRegion":"North West","PollingCentreDistrict":"Port Loko","PollingCentreConstituency":"Constituency 069","PollingCentreWard":"Ward 251","Registered_Voters":"487","PollingCentreLatitude":"8.836","PollingCentreLongitude":"-12.63458"},{"SLEOP_ID":"3475","ElectionYear":"2018","PollingCentreCode":"1016","PollingCentreName":"Town Barray, Damballu","PollingCentreRegion":"East","PollingCentreDistrict":"Kailahun","PollingCentreConstituency":"Constituency 001","PollingCentreWard":"Ward 003","Registered_Voters":"662","PollingCentreLatitude":"8.2802196","PollingCentreLongitude":"-10.5718086"},{"SLEOP_ID":"6123","ElectionYear":"2018","PollingCentreCode":"10160","PollingCentreName":"Catholic Mission Kambia Makama","PollingCentreRegion":"North West","PollingCentreDistrict":"Port Loko","PollingCentreConstituency":"Constituency 069","PollingCentreWard":"Ward 251","Registered_Voters":"887","PollingCentreLatitude":"8.81777","PollingCentreLongitude":"-12.58405"},{"SLEOP_ID":"6124","ElectionYear":"2018","PollingCentreCode":"10161","PollingCentreName":"S L M B Pri Sch Robaka","PollingCentreRegion":"North West","PollingCentreDistrict":"Port Loko","PollingCentreConstituency":"Constituency 069","PollingCentreWard":"Ward 251","Registered_Voters":"988","PollingCentreLatitude":"8.85248","PollingCentreLongitude":"-12.59433"},{"SLEOP_ID":"6047","ElectionYear":"2018","PollingCentreCode":"10165","PollingCentreName":"Temp Polling Structure Komrabai","PollingCentreRegion":"North West","PollingCentreDistrict":"Port Loko","PollingCentreConstituency":"Constituency 069","PollingCentreWard":"Ward 252","Registered_Voters":"735","PollingCentreLatitude":"9.46777","PollingCentreLongitude":"-12.04748"},{"SLEOP_ID":"6048","ElectionYear":"2018","PollingCentreCode":"10166","PollingCentreName":"R C Pri Sch Magbankitha","PollingCentreRegion":"North West","PollingCentreDistrict":"Port Loko","PollingCentreConstituency":"Constituency 069","PollingCentreWard":"Ward 252","Registered_Voters":"657","PollingCentreLatitude":"8.73915","PollingCentreLongitude":"-12.60205"},{"SLEOP_ID":"6049","ElectionYear":"2018","PollingCentreCode":"10167","PollingCentreName":"D E C Pri Sch Rothurk","PollingCentreRegion":"North West","PollingCentreDistrict":"Port Loko","PollingCentreConstituency":"Constituency 069","PollingCentreWard":"Ward 252","Registered_Voters":"758","PollingCentreLatitude":"8.72051","PollingCentreLongitude":"-12.66182"},{"SLEOP_ID":"6050","ElectionYear":"2018","PollingCentreCode":"10168","PollingCentreName":"R C Pri Sch Maronko","PollingCentreRegion":"North West","PollingCentreDistrict":"Port Loko","PollingCentreConstituency":"Constituency 069","PollingCentreWard":"Ward 252","Registered_Voters":"539","PollingCentreLatitude":"8.7339","PollingCentreLongitude":"-12.56971"},{"SLEOP_ID":"3476","ElectionYear":"2018","PollingCentreCode":"1017","PollingCentreName":"Mano Town Barray, M.Tingi","PollingCentreRegion":"East","PollingCentreDistrict":"Kailahun","PollingCentreConstituency":"Constituency 001","PollingCentreWard":"Ward 003","Registered_Voters":"1041","PollingCentreLatitude":"8.17002","PollingCentreLongitude":"-10.35571"},{"SLEOP_ID":"6176","ElectionYear":"2018","PollingCentreCode":"10170","PollingCentreName":"Alpha Kalokoh Alhadi Pri Sch Rotharon","PollingCentreRegion":"North West","PollingCentreDistrict":"Port Loko","PollingCentreConstituency":"Constituency 069","PollingCentreWard":"Ward 252","Registered_Voters":"794","PollingCentreLatitude":"8.62769","PollingCentreLongitude":"-12.75747"},{"SLEOP_ID":"6027","ElectionYear":"2018","PollingCentreCode":"10171","PollingCentreName":"D E C Pri Sch Makelfa","PollingCentreRegion":"North West","PollingCentreDistrict":"Kambia","PollingCentreConstituency":"Constituency 060","PollingCentreWard":"Ward 253","Registered_Voters":"548","PollingCentreLatitude":"8.60692","PollingCentreLongitude":"-12.85162"},{"SLEOP_ID":"6028","ElectionYear":"2018","PollingCentreCode":"10172","PollingCentreName":"S L C Pri Sch Mamai Kanu","PollingCentreRegion":"North West","PollingCentreDistrict":"Kambia","PollingCentreConstituency":"Constituency 060","PollingCentreWard":"Ward 253","Registered_Voters":"951","PollingCentreLatitude":"8.62879","PollingCentreLongitude":"-12.79583"},{"SLEOP_ID":"6030","ElectionYear":"2018","PollingCentreCode":"10173","PollingCentreName":"D E C Pri Sch Makelle","PollingCentreRegion":"North West","PollingCentreDistrict":"Kambia","PollingCentreConstituency":"Constituency 060","PollingCentreWard":"Ward 253","Registered_Voters":"629","PollingCentreLatitude":"8.57099","PollingCentreLongitude":"-12.85126"},{"SLEOP_ID":"6031","ElectionYear":"2018","PollingCentreCode":"10174","PollingCentreName":"D E C Pri Sch Gberay Bana","PollingCentreRegion":"North West","PollingCentreDistrict":"Kambia","PollingCentreConstituency":"Constituency 060","PollingCentreWard":"Ward 253","Registered_Voters":"1134","PollingCentreLatitude":"8.55691","PollingCentreLongitude":"-12.79674"},{"SLEOP_ID":"6232","ElectionYear":"2018","PollingCentreCode":"10177","PollingCentreName":"D E C Pri Sch Gbonko Mabuya","PollingCentreRegion":"North West","PollingCentreDistrict":"Port Loko","PollingCentreConstituency":"Constituency 073","PollingCentreWard":"Ward 254","Registered_Voters":"313","PollingCentreLatitude":"8.49462","PollingCentreLongitude":"-12.89515"},{"SLEOP_ID":"6233","ElectionYear":"2018","PollingCentreCode":"10178","PollingCentreName":"R C Pri Sch Kagbunko","PollingCentreRegion":"North West","PollingCentreDistrict":"Port Loko","PollingCentreConstituency":"Constituency 073","PollingCentreWard":"Ward 254","Registered_Voters":"644","PollingCentreLatitude":"8.53117","PollingCentreLongitude":"-12.92814"},{"SLEOP_ID":"6234","ElectionYear":"2018","PollingCentreCode":"10179","PollingCentreName":"Church Of God Primary School, Rofutha","PollingCentreRegion":"North West","PollingCentreDistrict":"Port Loko","PollingCentreConstituency":"Constituency 073","PollingCentreWard":"Ward 254","Registered_Voters":"295","PollingCentreLatitude":"8.48554","PollingCentreLongitude":"-12.91188"},{"SLEOP_ID":"3477","ElectionYear":"2018","PollingCentreCode":"1018","PollingCentreName":"Town Barray, Benduma Town","PollingCentreRegion":"East","PollingCentreDistrict":"Kailahun","PollingCentreConstituency":"Constituency 001","PollingCentreWard":"Ward 003","Registered_Voters":"460","PollingCentreLatitude":"8.24787","PollingCentreLongitude":"-10.36774"},{"SLEOP_ID":"6235","ElectionYear":"2018","PollingCentreCode":"10180","PollingCentreName":"Comm Store Rokon","PollingCentreRegion":"North West","PollingCentreDistrict":"Port Loko","PollingCentreConstituency":"Constituency 073","PollingCentreWard":"Ward 254","Registered_Voters":"225","PollingCentreLatitude":"8.48029","PollingCentreLongitude":"-12.933"},{"SLEOP_ID":"6236","ElectionYear":"2018","PollingCentreCode":"10181","PollingCentreName":"D E C Pri Sch Komrabai","PollingCentreRegion":"North West","PollingCentreDistrict":"Port Loko","PollingCentreConstituency":"Constituency 073","PollingCentreWard":"Ward 254","Registered_Voters":"1160","PollingCentreLatitude":"8.4309","PollingCentreLongitude":"-13.01646"},{"SLEOP_ID":"6237","ElectionYear":"2018","PollingCentreCode":"10182","PollingCentreName":"Govt Junior Sec Sch Mafili","PollingCentreRegion":"North West","PollingCentreDistrict":"Port Loko","PollingCentreConstituency":"Constituency 073","PollingCentreWard":"Ward 254","Registered_Voters":"849","PollingCentreLatitude":"8.40417","PollingCentreLongitude":"-13.99828"},{"SLEOP_ID":"6238","ElectionYear":"2018","PollingCentreCode":"10183","PollingCentreName":"Temp Polling Rochain","PollingCentreRegion":"North West","PollingCentreDistrict":"Port Loko","PollingCentreConstituency":"Constituency 073","PollingCentreWard":"Ward 254","Registered_Voters":"818","PollingCentreLatitude":"8.46176","PollingCentreLongitude":"-13.00008"},{"SLEOP_ID":"6239","ElectionYear":"2018","PollingCentreCode":"10184","PollingCentreName":"D E C Pri Sch Komrabai Nyolle","PollingCentreRegion":"North West","PollingCentreDistrict":"Port Loko","PollingCentreConstituency":"Constituency 073","PollingCentreWard":"Ward 254","Registered_Voters":"569","PollingCentreLatitude":"8.48419","PollingCentreLongitude":"-12.51244"},{"SLEOP_ID":"6240","ElectionYear":"2018","PollingCentreCode":"10185","PollingCentreName":"Temp Polling Structure Gbomtumba","PollingCentreRegion":"North West","PollingCentreDistrict":"Port Loko","PollingCentreConstituency":"Constituency 073","PollingCentreWard":"Ward 254","Registered_Voters":"506","PollingCentreLatitude":"8.56425","PollingCentreLongitude":"-13.02214"},{"SLEOP_ID":"6241","ElectionYear":"2018","PollingCentreCode":"10186","PollingCentreName":"C O G Pri Sch Kissy Koya","PollingCentreRegion":"North West","PollingCentreDistrict":"Port Loko","PollingCentreConstituency":"Constituency 073","PollingCentreWard":"Ward 254","Registered_Voters":"753","PollingCentreLatitude":"8.45218","PollingCentreLongitude":"-12.92868"},{"SLEOP_ID":"6242","ElectionYear":"2018","PollingCentreCode":"10187","PollingCentreName":"Court Barray Songo","PollingCentreRegion":"North West","PollingCentreDistrict":"Port Loko","PollingCentreConstituency":"Constituency 073","PollingCentreWard":"Ward 254","Registered_Voters":"1357","PollingCentreLatitude":"8.36958","PollingCentreLongitude":"-12.93289"},{"SLEOP_ID":"6243","ElectionYear":"2018","PollingCentreCode":"10188","PollingCentreName":"Temp Polling Makeray","PollingCentreRegion":"North West","PollingCentreDistrict":"Port Loko","PollingCentreConstituency":"Constituency 073","PollingCentreWard":"Ward 254","Registered_Voters":"1916","PollingCentreLatitude":"8.51989","PollingCentreLongitude":"-12.76755"},{"SLEOP_ID":"6244","ElectionYear":"2018","PollingCentreCode":"10189","PollingCentreName":"Open Centre Komrabai Nfa Conteh","PollingCentreRegion":"North West","PollingCentreDistrict":"Port Loko","PollingCentreConstituency":"Constituency 073","PollingCentreWard":"Ward 254","Registered_Voters":"140","PollingCentreLatitude":"8.51043","PollingCentreLongitude":"-12.94347"},{"SLEOP_ID":"3478","ElectionYear":"2018","PollingCentreCode":"1019","PollingCentreName":"Town Barray, Kamadu Town","PollingCentreRegion":"East","PollingCentreDistrict":"Kailahun","PollingCentreConstituency":"Constituency 001","PollingCentreWard":"Ward 003","Registered_Voters":"722","PollingCentreLatitude":"8.2802196","PollingCentreLongitude":"-10.5718086"},{"SLEOP_ID":"6221","ElectionYear":"2018","PollingCentreCode":"10190","PollingCentreName":"R C Pri Sch Mamamah","PollingCentreRegion":"North West","PollingCentreDistrict":"Port Loko","PollingCentreConstituency":"Constituency 073","PollingCentreWard":"Ward 255","Registered_Voters":"1858","PollingCentreLatitude":"8.44336","PollingCentreLongitude":"-12.87624"},{"SLEOP_ID":"6223","ElectionYear":"2018","PollingCentreCode":"10192","PollingCentreName":"Temp Polling Mabathe","PollingCentreRegion":"North West","PollingCentreDistrict":"Port Loko","PollingCentreConstituency":"Constituency 073","PollingCentreWard":"Ward 255","Registered_Voters":"195","PollingCentreLatitude":"8.53355","PollingCentreLongitude":"-12.89441"},{"SLEOP_ID":"6224","ElectionYear":"2018","PollingCentreCode":"10193","PollingCentreName":"C O G Pri Sch Gbabai","PollingCentreRegion":"North West","PollingCentreDistrict":"Port Loko","PollingCentreConstituency":"Constituency 073","PollingCentreWard":"Ward 255","Registered_Voters":"619","PollingCentreLatitude":"8.45218","PollingCentreLongitude":"-12.92868"},{"SLEOP_ID":"6226","ElectionYear":"2018","PollingCentreCode":"10195","PollingCentreName":"D E C Pri Sch Mamboima","PollingCentreRegion":"North West","PollingCentreDistrict":"Port Loko","PollingCentreConstituency":"Constituency 073","PollingCentreWard":"Ward 255","Registered_Voters":"1274","PollingCentreLatitude":"8.3735","PollingCentreLongitude":"-12.89631"},{"SLEOP_ID":"6228","ElectionYear":"2018","PollingCentreCode":"10196","PollingCentreName":"R C Pri Sch Makoi","PollingCentreRegion":"North West","PollingCentreDistrict":"Port Loko","PollingCentreConstituency":"Constituency 073","PollingCentreWard":"Ward 255","Registered_Voters":"542","PollingCentreLatitude":"8.35506","PollingCentreLongitude":"-12.86245"},{"SLEOP_ID":"6229","ElectionYear":"2018","PollingCentreCode":"10197","PollingCentreName":"Educaid Pri Sch Magbeni","PollingCentreRegion":"North West","PollingCentreDistrict":"Port Loko","PollingCentreConstituency":"Constituency 073","PollingCentreWard":"Ward 255","Registered_Voters":"758","PollingCentreLatitude":"8.55629","PollingCentreLongitude":"-12.81317"},{"SLEOP_ID":"6230","ElectionYear":"2018","PollingCentreCode":"10198","PollingCentreName":"C O G Pri Sch Magbontoso","PollingCentreRegion":"North West","PollingCentreDistrict":"Port Loko","PollingCentreConstituency":"Constituency 073","PollingCentreWard":"Ward 255","Registered_Voters":"1702","PollingCentreLatitude":"8.45696","PollingCentreLongitude":"-12.85336"},{"SLEOP_ID":"6231","ElectionYear":"2018","PollingCentreCode":"10199","PollingCentreName":"Temp Poll Madigba","PollingCentreRegion":"North West","PollingCentreDistrict":"Port Loko","PollingCentreConstituency":"Constituency 073","PollingCentreWard":"Ward 255","Registered_Voters":"844","PollingCentreLatitude":"8.52867","PollingCentreLongitude":"-12.854"},{"SLEOP_ID":"6211","ElectionYear":"2018","PollingCentreCode":"10200","PollingCentreName":"C O G Pri Sch Masumana","PollingCentreRegion":"North West","PollingCentreDistrict":"Port Loko","PollingCentreConstituency":"Constituency 072","PollingCentreWard":"Ward 256","Registered_Voters":"967","PollingCentreLatitude":"8.47641","PollingCentreLongitude":"-11.9897"},{"SLEOP_ID":"6212","ElectionYear":"2018","PollingCentreCode":"10201","PollingCentreName":"Evangelical Pri Sch Layah","PollingCentreRegion":"North West","PollingCentreDistrict":"Port Loko","PollingCentreConstituency":"Constituency 072","PollingCentreWard":"Ward 256","Registered_Voters":"753","PollingCentreLatitude":"8.51586","PollingCentreLongitude":"-12.8073"},{"SLEOP_ID":"6214","ElectionYear":"2018","PollingCentreCode":"10203","PollingCentreName":"D E C Pri Sch Mayomra","PollingCentreRegion":"North West","PollingCentreDistrict":"Port Loko","PollingCentreConstituency":"Constituency 072","PollingCentreWard":"Ward 256","Registered_Voters":"500","PollingCentreLatitude":"8.38521","PollingCentreLongitude":"-12.74008"},{"SLEOP_ID":"6201","ElectionYear":"2018","PollingCentreCode":"10208","PollingCentreName":"R C Pri Sch Mabora","PollingCentreRegion":"North West","PollingCentreDistrict":"Port Loko","PollingCentreConstituency":"Constituency 072","PollingCentreWard":"Ward 257","Registered_Voters":"980","PollingCentreLatitude":"8.55474","PollingCentreLongitude":"-12.73823"},{"SLEOP_ID":"6208","ElectionYear":"2018","PollingCentreCode":"10209","PollingCentreName":"Evan Model Pri Sch Rotifunk","PollingCentreRegion":"North West","PollingCentreDistrict":"Port Loko","PollingCentreConstituency":"Constituency 072","PollingCentreWard":"Ward 257","Registered_Voters":"897","PollingCentreLatitude":"8.54507","PollingCentreLongitude":"-12.71538"},{"SLEOP_ID":"3480","ElectionYear":"2018","PollingCentreCode":"1021","PollingCentreName":"Town Barray, Lela, Fowa Town","PollingCentreRegion":"East","PollingCentreDistrict":"Kailahun","PollingCentreConstituency":"Constituency 002","PollingCentreWard":"Ward 004","Registered_Voters":"178","PollingCentreLatitude":"8.33727","PollingCentreLongitude":"-10.40443"},{"SLEOP_ID":"6216","ElectionYear":"2018","PollingCentreCode":"10211","PollingCentreName":"Comm Centre Masiaka","PollingCentreRegion":"North West","PollingCentreDistrict":"Port Loko","PollingCentreConstituency":"Constituency 072","PollingCentreWard":"Ward 257","Registered_Voters":"1210","PollingCentreLatitude":"8.49107","PollingCentreLongitude":"-12.75518"},{"SLEOP_ID":"6218","ElectionYear":"2018","PollingCentreCode":"10212","PollingCentreName":"Temp Polling Mahera","PollingCentreRegion":"North West","PollingCentreDistrict":"Port Loko","PollingCentreConstituency":"Constituency 072","PollingCentreWard":"Ward 257","Registered_Voters":"696","PollingCentreLatitude":"8.55206","PollingCentreLongitude":"-12.78454"},{"SLEOP_ID":"6219","ElectionYear":"2018","PollingCentreCode":"10213","PollingCentreName":"Kulafai Rashideen Islamic Pri Sch Masiaka","PollingCentreRegion":"North West","PollingCentreDistrict":"Port Loko","PollingCentreConstituency":"Constituency 072","PollingCentreWard":"Ward 257","Registered_Voters":"1171","PollingCentreLatitude":"8.4951","PollingCentreLongitude":"-12.76063"},{"SLEOP_ID":"6220","ElectionYear":"2018","PollingCentreCode":"10214","PollingCentreName":"Open Space Robis 2","PollingCentreRegion":"North West","PollingCentreDistrict":"Port Loko","PollingCentreConstituency":"Constituency 072","PollingCentreWard":"Ward 257","Registered_Voters":"515","PollingCentreLatitude":"8.51996","PollingCentreLongitude":"-12.75975"},{"SLEOP_ID":"6202","ElectionYear":"2018","PollingCentreCode":"10215","PollingCentreName":"D E C Pri Sch Matheneh","PollingCentreRegion":"North West","PollingCentreDistrict":"Port Loko","PollingCentreConstituency":"Constituency 072","PollingCentreWard":"Ward 258","Registered_Voters":"738","PollingCentreLatitude":"8.49982","PollingCentreLongitude":"-12.68593"},{"SLEOP_ID":"6204","ElectionYear":"2018","PollingCentreCode":"10217","PollingCentreName":"Warima Market Warima","PollingCentreRegion":"North West","PollingCentreDistrict":"Port Loko","PollingCentreConstituency":"Constituency 072","PollingCentreWard":"Ward 258","Registered_Voters":"976","PollingCentreLatitude":"8.48912","PollingCentreLongitude":"-12.63679"},{"SLEOP_ID":"3481","ElectionYear":"2018","PollingCentreCode":"1022","PollingCentreName":"Gbahama Town,  Lela","PollingCentreRegion":"East","PollingCentreDistrict":"Kailahun","PollingCentreConstituency":"Constituency 002","PollingCentreWard":"Ward 004","Registered_Voters":"622","PollingCentreLatitude":"8.3072","PollingCentreLongitude":"-10.44695"},{"SLEOP_ID":"6207","ElectionYear":"2018","PollingCentreCode":"10220","PollingCentreName":"D E C Pri Sch Mawoma","PollingCentreRegion":"North West","PollingCentreDistrict":"Port Loko","PollingCentreConstituency":"Constituency 072","PollingCentreWard":"Ward 258","Registered_Voters":"733","PollingCentreLatitude":"8.4626","PollingCentreLongitude":"-12.73457"},{"SLEOP_ID":"6209","ElectionYear":"2018","PollingCentreCode":"10221","PollingCentreName":"Open Centre Makaribay","PollingCentreRegion":"North West","PollingCentreDistrict":"Port Loko","PollingCentreConstituency":"Constituency 072","PollingCentreWard":"Ward 258","Registered_Voters":"556","PollingCentreLatitude":"8.4846","PollingCentreLongitude":"-12.61628"},{"SLEOP_ID":"6210","ElectionYear":"2018","PollingCentreCode":"10222","PollingCentreName":"Bishop George Sec Sch Masiaka","PollingCentreRegion":"North West","PollingCentreDistrict":"Port Loko","PollingCentreConstituency":"Constituency 072","PollingCentreWard":"Ward 258","Registered_Voters":"1657","PollingCentreLatitude":"8.49017","PollingCentreLongitude":"-12.74926"},{"SLEOP_ID":"6189","ElectionYear":"2018","PollingCentreCode":"10223","PollingCentreName":"U M C Pri Sch Mamalikie","PollingCentreRegion":"North West","PollingCentreDistrict":"Port Loko","PollingCentreConstituency":"Constituency 071","PollingCentreWard":"Ward 259","Registered_Voters":"1315","PollingCentreLatitude":"8.49832","PollingCentreLongitude":"-12.59919"},{"SLEOP_ID":"6191","ElectionYear":"2018","PollingCentreCode":"10225","PollingCentreName":"R C Pri Sch Rokel","PollingCentreRegion":"North West","PollingCentreDistrict":"Port Loko","PollingCentreConstituency":"Constituency 071","PollingCentreWard":"Ward 259","Registered_Voters":"916","PollingCentreLatitude":"8.38233","PollingCentreLongitude":"-13.10555"},{"SLEOP_ID":"6192","ElectionYear":"2018","PollingCentreCode":"10226","PollingCentreName":"U M C Pri Sch Rokon","PollingCentreRegion":"North West","PollingCentreDistrict":"Port Loko","PollingCentreConstituency":"Constituency 071","PollingCentreWard":"Ward 259","Registered_Voters":"848","PollingCentreLatitude":"8.59144","PollingCentreLongitude":"-12.65012"},{"SLEOP_ID":"6195","ElectionYear":"2018","PollingCentreCode":"10229","PollingCentreName":"Open Centre Mamottor","PollingCentreRegion":"North West","PollingCentreDistrict":"Port Loko","PollingCentreConstituency":"Constituency 071","PollingCentreWard":"Ward 259","Registered_Voters":"727","PollingCentreLatitude":"8.5347","PollingCentreLongitude":"-12.62786"},{"SLEOP_ID":"3484","ElectionYear":"2018","PollingCentreCode":"1023","PollingCentreName":"Court Barray, Kangama Town","PollingCentreRegion":"East","PollingCentreDistrict":"Kailahun","PollingCentreConstituency":"Constituency 002","PollingCentreWard":"Ward 004","Registered_Voters":"692","PollingCentreLatitude":"8.33925","PollingCentreLongitude":"-10.3799"},{"SLEOP_ID":"6196","ElectionYear":"2018","PollingCentreCode":"10230","PollingCentreName":"N A Court Barray Konta Kuma","PollingCentreRegion":"North West","PollingCentreDistrict":"Port Loko","PollingCentreConstituency":"Constituency 071","PollingCentreWard":"Ward 259","Registered_Voters":"1372","PollingCentreLatitude":"8.48787","PollingCentreLongitude":"-12.53452"},{"SLEOP_ID":"6180","ElectionYear":"2018","PollingCentreCode":"10234","PollingCentreName":"K F R Pri Sch Robalah","PollingCentreRegion":"North West","PollingCentreDistrict":"Port Loko","PollingCentreConstituency":"Constituency 071","PollingCentreWard":"Ward 260","Registered_Voters":"764","PollingCentreLatitude":"8.60596","PollingCentreLongitude":"-12.46702"},{"SLEOP_ID":"6181","ElectionYear":"2018","PollingCentreCode":"10235","PollingCentreName":"D E C Pri Sch Mayombo","PollingCentreRegion":"North West","PollingCentreDistrict":"Port Loko","PollingCentreConstituency":"Constituency 071","PollingCentreWard":"Ward 260","Registered_Voters":"886","PollingCentreLatitude":"8.4848","PollingCentreLongitude":"-12.46768"},{"SLEOP_ID":"6182","ElectionYear":"2018","PollingCentreCode":"10236","PollingCentreName":"Health Centre Katick","PollingCentreRegion":"North West","PollingCentreDistrict":"Port Loko","PollingCentreConstituency":"Constituency 071","PollingCentreWard":"Ward 260","Registered_Voters":"450","PollingCentreLatitude":"8.59379","PollingCentreLongitude":"-12.41851"},{"SLEOP_ID":"6183","ElectionYear":"2018","PollingCentreCode":"10237","PollingCentreName":"N A Court Barray Masimera","PollingCentreRegion":"North West","PollingCentreDistrict":"Port Loko","PollingCentreConstituency":"Constituency 071","PollingCentreWard":"Ward 260","Registered_Voters":"966","PollingCentreLatitude":"8.64539","PollingCentreLongitude":"-12.45051"},{"SLEOP_ID":"6185","ElectionYear":"2018","PollingCentreCode":"10239","PollingCentreName":"R C Pri Sch Matuku","PollingCentreRegion":"North West","PollingCentreDistrict":"Port Loko","PollingCentreConstituency":"Constituency 071","PollingCentreWard":"Ward 260","Registered_Voters":"732","PollingCentreLatitude":"8.59025","PollingCentreLongitude":"-12.43561"},{"SLEOP_ID":"3485","ElectionYear":"2018","PollingCentreCode":"1024","PollingCentreName":"KLDEC School, Kangama Town","PollingCentreRegion":"East","PollingCentreDistrict":"Kailahun","PollingCentreConstituency":"Constituency 002","PollingCentreWard":"Ward 004","Registered_Voters":"667","PollingCentreLatitude":"8.33881","PollingCentreLongitude":"-10.3825"},{"SLEOP_ID":"6186","ElectionYear":"2018","PollingCentreCode":"10240","PollingCentreName":"War Child Centre Royeiben","PollingCentreRegion":"North West","PollingCentreDistrict":"Port Loko","PollingCentreConstituency":"Constituency 071","PollingCentreWard":"Ward 260","Registered_Voters":"956","PollingCentreLatitude":"8.50599","PollingCentreLongitude":"-12.43107"},{"SLEOP_ID":"6187","ElectionYear":"2018","PollingCentreCode":"10241","PollingCentreName":"Temp Polling Structure Mayola","PollingCentreRegion":"North West","PollingCentreDistrict":"Port Loko","PollingCentreConstituency":"Constituency 071","PollingCentreWard":"Ward 260","Registered_Voters":"934","PollingCentreLatitude":"8.62162","PollingCentreLongitude":"-12.41547"},{"SLEOP_ID":"6188","ElectionYear":"2018","PollingCentreCode":"10242","PollingCentreName":"Temp Polling Structure Cheindekom","PollingCentreRegion":"North West","PollingCentreDistrict":"Port Loko","PollingCentreConstituency":"Constituency 071","PollingCentreWard":"Ward 260","Registered_Voters":"1036","PollingCentreLatitude":"8.5865","PollingCentreLongitude":"-12.34443"},{"SLEOP_ID":"6171","ElectionYear":"2018","PollingCentreCode":"10243","PollingCentreName":"Temp Polling Struct Rogbaneh","PollingCentreRegion":"North West","PollingCentreDistrict":"Port Loko","PollingCentreConstituency":"Constituency 070","PollingCentreWard":"Ward 261","Registered_Voters":"1035","PollingCentreLatitude":"8.66307","PollingCentreLongitude":"-12.50596"},{"SLEOP_ID":"6172","ElectionYear":"2018","PollingCentreCode":"10244","PollingCentreName":"Masokoma Store Masokoma","PollingCentreRegion":"North West","PollingCentreDistrict":"Port Loko","PollingCentreConstituency":"Constituency 070","PollingCentreWard":"Ward 261","Registered_Voters":"990","PollingCentreLatitude":"8.69557","PollingCentreLongitude":"-12.58885"},{"SLEOP_ID":"6173","ElectionYear":"2018","PollingCentreCode":"10245","PollingCentreName":"D E C Pri Sch Magbele","PollingCentreRegion":"North West","PollingCentreDistrict":"Port Loko","PollingCentreConstituency":"Constituency 070","PollingCentreWard":"Ward 261","Registered_Voters":"700","PollingCentreLatitude":"8.59813","PollingCentreLongitude":"-12.6961"},{"SLEOP_ID":"6175","ElectionYear":"2018","PollingCentreCode":"10246","PollingCentreName":"R C Pri School, Makabo","PollingCentreRegion":"North West","PollingCentreDistrict":"Port Loko","PollingCentreConstituency":"Constituency 070","PollingCentreWard":"Ward 261","Registered_Voters":"691","PollingCentreLatitude":"8.672","PollingCentreLongitude":"-12.62633"},{"SLEOP_ID":"6177","ElectionYear":"2018","PollingCentreCode":"10247","PollingCentreName":"R C Pri Sch Malua","PollingCentreRegion":"North West","PollingCentreDistrict":"Port Loko","PollingCentreConstituency":"Constituency 070","PollingCentreWard":"Ward 261","Registered_Voters":"691","PollingCentreLatitude":"8.672","PollingCentreLongitude":"-12.62633"},{"SLEOP_ID":"6178","ElectionYear":"2018","PollingCentreCode":"10248","PollingCentreName":"Open Centre Rolankonoh","PollingCentreRegion":"North West","PollingCentreDistrict":"Port Loko","PollingCentreConstituency":"Constituency 070","PollingCentreWard":"Ward 261","Registered_Voters":"395","PollingCentreLatitude":"8.64596","PollingCentreLongitude":"-12.62441"},{"SLEOP_ID":"3486","ElectionYear":"2018","PollingCentreCode":"1025","PollingCentreName":"Open Space, Yenlendu Town","PollingCentreRegion":"East","PollingCentreDistrict":"Kailahun","PollingCentreConstituency":"Constituency 002","PollingCentreWard":"Ward 004","Registered_Voters":"359","PollingCentreLatitude":"8.39108","PollingCentreLongitude":"-10.34534"},{"SLEOP_ID":"6161","ElectionYear":"2018","PollingCentreCode":"10252","PollingCentreName":"Guadalupe Girls Sec Sch Lunsar","PollingCentreRegion":"North West","PollingCentreDistrict":"Port Loko","PollingCentreConstituency":"Constituency 070","PollingCentreWard":"Ward 262","Registered_Voters":"933","PollingCentreLatitude":"8.68397","PollingCentreLongitude":"-12.53763"},{"SLEOP_ID":"6162","ElectionYear":"2018","PollingCentreCode":"10253","PollingCentreName":"Temporary Polling Structure 54 Lower Baisuba Lunsr","PollingCentreRegion":"North West","PollingCentreDistrict":"Port Loko","PollingCentreConstituency":"Constituency 070","PollingCentreWard":"Ward 262","Registered_Voters":"1043","PollingCentreLatitude":"8.67926","PollingCentreLongitude":"-12.53707"},{"SLEOP_ID":"6163","ElectionYear":"2018","PollingCentreCode":"10254","PollingCentreName":"Court Barray Bai Suba St Lunsar","PollingCentreRegion":"North West","PollingCentreDistrict":"Port Loko","PollingCentreConstituency":"Constituency 070","PollingCentreWard":"Ward 262","Registered_Voters":"1089","PollingCentreLatitude":"8.68262","PollingCentreLongitude":"-12.53258"},{"SLEOP_ID":"6164","ElectionYear":"2018","PollingCentreCode":"10255","PollingCentreName":"R C Boys Pri Sch Lunsar","PollingCentreRegion":"North West","PollingCentreDistrict":"Port Loko","PollingCentreConstituency":"Constituency 070","PollingCentreWard":"Ward 262","Registered_Voters":"865","PollingCentreLatitude":"8.68295","PollingCentreLongitude":"-12.53474"},{"SLEOP_ID":"6165","ElectionYear":"2018","PollingCentreCode":"10256","PollingCentreName":"Comm Health Centre Victoria St Lunsar","PollingCentreRegion":"North West","PollingCentreDistrict":"Port Loko","PollingCentreConstituency":"Constituency 070","PollingCentreWard":"Ward 262","Registered_Voters":"1435","PollingCentreLatitude":"8.68207","PollingCentreLongitude":"-12.53137"},{"SLEOP_ID":"6168","ElectionYear":"2018","PollingCentreCode":"10259","PollingCentreName":"Kulafai Rashideen Pri Sch, Mende St Lunsar","PollingCentreRegion":"North West","PollingCentreDistrict":"Port Loko","PollingCentreConstituency":"Constituency 070","PollingCentreWard":"Ward 262","Registered_Voters":"959","PollingCentreLatitude":"8.68114","PollingCentreLongitude":"-12.53611"},{"SLEOP_ID":"3487","ElectionYear":"2018","PollingCentreCode":"1026","PollingCentreName":"Town Barray, Tangabu","PollingCentreRegion":"East","PollingCentreDistrict":"Kailahun","PollingCentreConstituency":"Constituency 002","PollingCentreWard":"Ward 004","Registered_Voters":"333","PollingCentreLatitude":"8.32648","PollingCentreLongitude":"-10.43922"},{"SLEOP_ID":"6169","ElectionYear":"2018","PollingCentreCode":"10260","PollingCentreName":"Maria Ines Vocational Institute Lunsar","PollingCentreRegion":"North West","PollingCentreDistrict":"Port Loko","PollingCentreConstituency":"Constituency 070","PollingCentreWard":"Ward 262","Registered_Voters":"1399","PollingCentreLatitude":"8.68666","PollingCentreLongitude":"-12.53963"},{"SLEOP_ID":"6170","ElectionYear":"2018","PollingCentreCode":"10261","PollingCentreName":"Ahmadiyya Muslim Pri Sch Lunsar","PollingCentreRegion":"North West","PollingCentreDistrict":"Port Loko","PollingCentreConstituency":"Constituency 070","PollingCentreWard":"Ward 262","Registered_Voters":"1033","PollingCentreLatitude":"8.6767","PollingCentreLongitude":"-12.53617"},{"SLEOP_ID":"6143","ElectionYear":"2018","PollingCentreCode":"10262","PollingCentreName":"D E C Pri Sch Mamasa","PollingCentreRegion":"North West","PollingCentreDistrict":"Port Loko","PollingCentreConstituency":"Constituency 070","PollingCentreWard":"Ward 263","Registered_Voters":"802","PollingCentreLatitude":"8.64158","PollingCentreLongitude":"-12.73822"},{"SLEOP_ID":"6144","ElectionYear":"2018","PollingCentreCode":"10263","PollingCentreName":"D E C Pri Sch Rofainkan","PollingCentreRegion":"North West","PollingCentreDistrict":"Port Loko","PollingCentreConstituency":"Constituency 070","PollingCentreWard":"Ward 263","Registered_Voters":"442","PollingCentreLatitude":"8.73395","PollingCentreLongitude":"-12.35519"},{"SLEOP_ID":"6145","ElectionYear":"2018","PollingCentreCode":"10264","PollingCentreName":"Kulafai Rashideen Pri Sch Maforki","PollingCentreRegion":"North West","PollingCentreDistrict":"Port Loko","PollingCentreConstituency":"Constituency 070","PollingCentreWard":"Ward 263","Registered_Voters":"798","PollingCentreLatitude":"8.69184","PollingCentreLongitude":"-12.49673"},{"SLEOP_ID":"6147","ElectionYear":"2018","PollingCentreCode":"10266","PollingCentreName":"DEC Primary School, Marampa","PollingCentreRegion":"North West","PollingCentreDistrict":"Port Loko","PollingCentreConstituency":"Constituency 070","PollingCentreWard":"Ward 263","Registered_Voters":"630","PollingCentreLatitude":"8.69328","PollingCentreLongitude":"-12.47116"},{"SLEOP_ID":"3488","ElectionYear":"2018","PollingCentreCode":"1027","PollingCentreName":"History Ministry Church Kpekeledu Town","PollingCentreRegion":"East","PollingCentreDistrict":"Kailahun","PollingCentreConstituency":"Constituency 002","PollingCentreWard":"Ward 004","Registered_Voters":"328","PollingCentreLatitude":"8.37032","PollingCentreLongitude":"-10.35114"},{"SLEOP_ID":"6159","ElectionYear":"2018","PollingCentreCode":"10270","PollingCentreName":"U M C Pri Sch Madigbo Lunsar","PollingCentreRegion":"North West","PollingCentreDistrict":"Port Loko","PollingCentreConstituency":"Constituency 070","PollingCentreWard":"Ward 263","Registered_Voters":"1241","PollingCentreLatitude":"8.69189","PollingCentreLongitude":"-12.53845"},{"SLEOP_ID":"6160","ElectionYear":"2018","PollingCentreCode":"10271","PollingCentreName":"R C Pri Sch Mabesseneh Lunsar","PollingCentreRegion":"North West","PollingCentreDistrict":"Port Loko","PollingCentreConstituency":"Constituency 070","PollingCentreWard":"Ward 263","Registered_Voters":"1149","PollingCentreLatitude":"8.78095","PollingCentreLongitude":"-12.52784"},{"SLEOP_ID":"3489","ElectionYear":"2018","PollingCentreCode":"1028","PollingCentreName":"Kissi Bendu Secondary School, Koindu","PollingCentreRegion":"East","PollingCentreDistrict":"Kailahun","PollingCentreConstituency":"Constituency 002","PollingCentreWard":"Ward 005","Registered_Voters":"951","PollingCentreLatitude":"8.46196","PollingCentreLongitude":"-10.33556"},{"SLEOP_ID":"3490","ElectionYear":"2018","PollingCentreCode":"1029","PollingCentreName":"Town Hall, Kundu, Turadu","PollingCentreRegion":"East","PollingCentreDistrict":"Kailahun","PollingCentreConstituency":"Constituency 002","PollingCentreWard":"Ward 005","Registered_Voters":"618","PollingCentreLatitude":"8.47468","PollingCentreLongitude":"-10.30104"},{"SLEOP_ID":"3491","ElectionYear":"2018","PollingCentreCode":"1030","PollingCentreName":"Open Space, Baladu","PollingCentreRegion":"East","PollingCentreDistrict":"Kailahun","PollingCentreConstituency":"Constituency 002","PollingCentreWard":"Ward 005","Registered_Voters":"479","PollingCentreLatitude":"8.46086","PollingCentreLongitude":"-10.3038"},{"SLEOP_ID":"506","ElectionYear":"2018","PollingCentreCode":"1032","PollingCentreName":"Yendeh community Barray, Lela, Yendeh","PollingCentreRegion":"East","PollingCentreDistrict":"Kailahun","PollingCentreConstituency":"Constituency 002","PollingCentreWard":"Ward 005","Registered_Voters":"328","PollingCentreLatitude":"8.41954","PollingCentreLongitude":"-10.33313"},{"SLEOP_ID":"3494","ElectionYear":"2018","PollingCentreCode":"1033","PollingCentreName":"Free Pentecostal Church-Yendeh, Lela, Yendeh Town","PollingCentreRegion":"East","PollingCentreDistrict":"Kailahun","PollingCentreConstituency":"Constituency 002","PollingCentreWard":"Ward 005","Registered_Voters":"349","PollingCentreLatitude":"8.41932","PollingCentreLongitude":"-10.33388"},{"SLEOP_ID":"3495","ElectionYear":"2018","PollingCentreCode":"1034","PollingCentreName":"Court Barray, Weima","PollingCentreRegion":"East","PollingCentreDistrict":"Kailahun","PollingCentreConstituency":"Constituency 002","PollingCentreWard":"Ward 006","Registered_Voters":"759","PollingCentreLatitude":"8.47724","PollingCentreLongitude":"-10.33721"},{"SLEOP_ID":"3496","ElectionYear":"2018","PollingCentreCode":"1035","PollingCentreName":"Central market, Torli","PollingCentreRegion":"East","PollingCentreDistrict":"Kailahun","PollingCentreConstituency":"Constituency 002","PollingCentreWard":"Ward 006","Registered_Voters":"763","PollingCentreLatitude":"8.46319","PollingCentreLongitude":"-10.33853"},{"SLEOP_ID":"3497","ElectionYear":"2018","PollingCentreCode":"1036","PollingCentreName":"R.C.1 Koidu, Torli","PollingCentreRegion":"East","PollingCentreDistrict":"Kailahun","PollingCentreConstituency":"Constituency 002","PollingCentreWard":"Ward 006","Registered_Voters":"644","PollingCentreLatitude":"8.45985","PollingCentreLongitude":"-10.33317"},{"SLEOP_ID":"3498","ElectionYear":"2018","PollingCentreCode":"1037","PollingCentreName":"Town Barray, Koindu Town","PollingCentreRegion":"East","PollingCentreDistrict":"Kailahun","PollingCentreConstituency":"Constituency 002","PollingCentreWard":"Ward 006","Registered_Voters":"817","PollingCentreLatitude":"8.46196","PollingCentreLongitude":"-10.33556"},{"SLEOP_ID":"3501","ElectionYear":"2018","PollingCentreCode":"1040","PollingCentreName":"Town Barray, Sandialu Town","PollingCentreRegion":"East","PollingCentreDistrict":"Kailahun","PollingCentreConstituency":"Constituency 003","PollingCentreWard":"Ward 007","Registered_Voters":"1457","PollingCentreLatitude":"8.29906","PollingCentreLongitude":"-10.45929"},{"SLEOP_ID":"3502","ElectionYear":"2018","PollingCentreCode":"1041","PollingCentreName":"Town Barray, Gbalahun","PollingCentreRegion":"East","PollingCentreDistrict":"Kailahun","PollingCentreConstituency":"Constituency 003","PollingCentreWard":"Ward 007","Registered_Voters":"1325","PollingCentreLatitude":"8.2561","PollingCentreLongitude":"-10.48682"},{"SLEOP_ID":"3503","ElectionYear":"2018","PollingCentreCode":"1042","PollingCentreName":"Town Barray, Dodo-Kortuma","PollingCentreRegion":"East","PollingCentreDistrict":"Kailahun","PollingCentreConstituency":"Constituency 003","PollingCentreWard":"Ward 007","Registered_Voters":"1137","PollingCentreLatitude":"8.25223","PollingCentreLongitude":"-10.41773"},{"SLEOP_ID":"3504","ElectionYear":"2018","PollingCentreCode":"1043","PollingCentreName":"Town Barray, Pandebu Town","PollingCentreRegion":"East","PollingCentreDistrict":"Kailahun","PollingCentreConstituency":"Constituency 003","PollingCentreWard":"Ward 007","Registered_Voters":"447","PollingCentreLatitude":"7.55675","PollingCentreLongitude":"-10.9942"},{"SLEOP_ID":"3505","ElectionYear":"2018","PollingCentreCode":"1044","PollingCentreName":"Community Barray, Mano Sewalu Town, Mano","PollingCentreRegion":"East","PollingCentreDistrict":"Kailahun","PollingCentreConstituency":"Constituency 003","PollingCentreWard":"Ward 007","Registered_Voters":"1080","PollingCentreLatitude":"8.33161","PollingCentreLongitude":"-10.49509"},{"SLEOP_ID":"3506","ElectionYear":"2018","PollingCentreCode":"1045","PollingCentreName":"Town Barray, Yibema Town","PollingCentreRegion":"East","PollingCentreDistrict":"Kailahun","PollingCentreConstituency":"Constituency 003","PollingCentreWard":"Ward 007","Registered_Voters":"715","PollingCentreLatitude":"8.3569","PollingCentreLongitude":"-10.47675"},{"SLEOP_ID":"3507","ElectionYear":"2018","PollingCentreCode":"1046","PollingCentreName":"Market Centre, Nyadehun","PollingCentreRegion":"East","PollingCentreDistrict":"Kailahun","PollingCentreConstituency":"Constituency 003","PollingCentreWard":"Ward 007","Registered_Voters":"2182","PollingCentreLatitude":"8.20276","PollingCentreLongitude":"-10.48246"},{"SLEOP_ID":"3508","ElectionYear":"2018","PollingCentreCode":"1047","PollingCentreName":"Town Barray, Lalehun","PollingCentreRegion":"East","PollingCentreDistrict":"Kailahun","PollingCentreConstituency":"Constituency 003","PollingCentreWard":"Ward 007","Registered_Voters":"591","PollingCentreLatitude":"8.19738","PollingCentreLongitude":"-11.08035"},{"SLEOP_ID":"3509","ElectionYear":"2018","PollingCentreCode":"1048","PollingCentreName":"Town Barray, Konjo Town","PollingCentreRegion":"East","PollingCentreDistrict":"Kailahun","PollingCentreConstituency":"Constituency 003","PollingCentreWard":"Ward 007","Registered_Voters":"788","PollingCentreLatitude":"8.20046","PollingCentreLongitude":"-10.43667"},{"SLEOP_ID":"3510","ElectionYear":"2018","PollingCentreCode":"1049","PollingCentreName":"Town Barray, Bunumbu Town","PollingCentreRegion":"East","PollingCentreDistrict":"Kailahun","PollingCentreConstituency":"Constituency 003","PollingCentreWard":"Ward 007","Registered_Voters":"841","PollingCentreLatitude":"8.21182","PollingCentreLongitude":"-10.50677"},{"SLEOP_ID":"3511","ElectionYear":"2018","PollingCentreCode":"1050","PollingCentreName":"Town Barray, Talia Town","PollingCentreRegion":"East","PollingCentreDistrict":"Kailahun","PollingCentreConstituency":"Constituency 003","PollingCentreWard":"Ward 007","Registered_Voters":"690","PollingCentreLatitude":"8.20254","PollingCentreLongitude":"-10.5335"},{"SLEOP_ID":"3512","ElectionYear":"2018","PollingCentreCode":"1051","PollingCentreName":"R.C. School, Dakaleley, Foidu Town","PollingCentreRegion":"East","PollingCentreDistrict":"Kailahun","PollingCentreConstituency":"Constituency 003","PollingCentreWard":"Ward 008","Registered_Voters":"556","PollingCentreLatitude":"8.06913","PollingCentreLongitude":"-10.72768"},{"SLEOP_ID":"3513","ElectionYear":"2018","PollingCentreCode":"1052","PollingCentreName":"Community Barray , Kama Teng, Yengema Town","PollingCentreRegion":"East","PollingCentreDistrict":"Kailahun","PollingCentreConstituency":"Constituency 003","PollingCentreWard":"Ward 008","Registered_Voters":"871","PollingCentreLatitude":"8.41933","PollingCentreLongitude":"-10.39302"},{"SLEOP_ID":"3514","ElectionYear":"2018","PollingCentreCode":"1053","PollingCentreName":"Town Barray, Kama Teng, Sangha Town","PollingCentreRegion":"East","PollingCentreDistrict":"Kailahun","PollingCentreConstituency":"Constituency 003","PollingCentreWard":"Ward 008","Registered_Voters":"542","PollingCentreLatitude":"8.43239","PollingCentreLongitude":"-10.4148"},{"SLEOP_ID":"3515","ElectionYear":"2018","PollingCentreCode":"1054","PollingCentreName":"Town Court Barray, Kama Toh, Dia Town","PollingCentreRegion":"East","PollingCentreDistrict":"Kailahun","PollingCentreConstituency":"Constituency 003","PollingCentreWard":"Ward 008","Registered_Voters":"787","PollingCentreLatitude":"8.38399","PollingCentreLongitude":"-10.41146"},{"SLEOP_ID":"3516","ElectionYear":"2018","PollingCentreCode":"1055","PollingCentreName":"Youth Community Centre, Kama Toh, Dia Town","PollingCentreRegion":"East","PollingCentreDistrict":"Kailahun","PollingCentreConstituency":"Constituency 003","PollingCentreWard":"Ward 008","Registered_Voters":"807","PollingCentreLatitude":"8.385","PollingCentreLongitude":"-10.41508"},{"SLEOP_ID":"3517","ElectionYear":"2018","PollingCentreCode":"1056","PollingCentreName":"God&#039;s is our light church compound, Kama Toh, Kond","PollingCentreRegion":"East","PollingCentreDistrict":"Kailahun","PollingCentreConstituency":"Constituency 003","PollingCentreWard":"Ward 008","Registered_Voters":"834","PollingCentreLatitude":"8.37349","PollingCentreLongitude":"-10.42649"},{"SLEOP_ID":"3518","ElectionYear":"2018","PollingCentreCode":"1057","PollingCentreName":"Town Barray, Kudu Town","PollingCentreRegion":"East","PollingCentreDistrict":"Kailahun","PollingCentreConstituency":"Constituency 003","PollingCentreWard":"Ward 008","Registered_Voters":"379","PollingCentreLatitude":"8.44974","PollingCentreLongitude":"-10.36717"},{"SLEOP_ID":"3520","ElectionYear":"2018","PollingCentreCode":"1059","PollingCentreName":"Town Barray, Bandajuma Sinneh","PollingCentreRegion":"East","PollingCentreDistrict":"Kailahun","PollingCentreConstituency":"Constituency 004","PollingCentreWard":"Ward 009","Registered_Voters":"1674","PollingCentreLatitude":"8.22329","PollingCentreLongitude":"-10.58505"},{"SLEOP_ID":"3522","ElectionYear":"2018","PollingCentreCode":"1061","PollingCentreName":"RC Primary School, Borbu","PollingCentreRegion":"East","PollingCentreDistrict":"Kailahun","PollingCentreConstituency":"Constituency 004","PollingCentreWard":"Ward 009","Registered_Voters":"874","PollingCentreLatitude":"8.26303","PollingCentreLongitude":"-10.54734"},{"SLEOP_ID":"3524","ElectionYear":"2018","PollingCentreCode":"1063","PollingCentreName":"Market Place, Gbeworbu Gao","PollingCentreRegion":"East","PollingCentreDistrict":"Kailahun","PollingCentreConstituency":"Constituency 004","PollingCentreWard":"Ward 009","Registered_Voters":"1478","PollingCentreLatitude":"8.12394","PollingCentreLongitude":"-10.56339"},{"SLEOP_ID":"3525","ElectionYear":"2018","PollingCentreCode":"1064","PollingCentreName":"Town Barray, Sengema","PollingCentreRegion":"East","PollingCentreDistrict":"Kailahun","PollingCentreConstituency":"Constituency 004","PollingCentreWard":"Ward 009","Registered_Voters":"1153","PollingCentreLatitude":"8.05331","PollingCentreLongitude":"-10.57924"},{"SLEOP_ID":"3526","ElectionYear":"2018","PollingCentreCode":"1065","PollingCentreName":"Town Barray, Jegbelu","PollingCentreRegion":"East","PollingCentreDistrict":"Kailahun","PollingCentreConstituency":"Constituency 004","PollingCentreWard":"Ward 009","Registered_Voters":"782","PollingCentreLatitude":"8.07926","PollingCentreLongitude":"-10.59941"},{"SLEOP_ID":"3527","ElectionYear":"2018","PollingCentreCode":"1066","PollingCentreName":"Town Barray, Ngiema Town","PollingCentreRegion":"East","PollingCentreDistrict":"Kailahun","PollingCentreConstituency":"Constituency 004","PollingCentreWard":"Ward 009","Registered_Voters":"1014","PollingCentreLatitude":"8.17867","PollingCentreLongitude":"-10.56568"},{"SLEOP_ID":"3528","ElectionYear":"2018","PollingCentreCode":"1067","PollingCentreName":"Town Barray, Gbartoma","PollingCentreRegion":"East","PollingCentreDistrict":"Kailahun","PollingCentreConstituency":"Constituency 004","PollingCentreWard":"Ward 009","Registered_Voters":"1054","PollingCentreLatitude":"8.11306","PollingCentreLongitude":"-10.53972"},{"SLEOP_ID":"3529","ElectionYear":"2018","PollingCentreCode":"1068","PollingCentreName":"R. C. School 1, Upper Masanta, Kailahun Town","PollingCentreRegion":"East","PollingCentreDistrict":"Kailahun","PollingCentreConstituency":"Constituency 004","PollingCentreWard":"Ward 010","Registered_Voters":"1568","PollingCentreLatitude":"8.28535","PollingCentreLongitude":"-10.56604"},{"SLEOP_ID":"3530","ElectionYear":"2018","PollingCentreCode":"1069","PollingCentreName":"R. C. Primary 11, Gbomo Town","PollingCentreRegion":"East","PollingCentreDistrict":"Kailahun","PollingCentreConstituency":"Constituency 004","PollingCentreWard":"Ward 010","Registered_Voters":"1112","PollingCentreLatitude":"8.27671","PollingCentreLongitude":"-10.56525"},{"SLEOP_ID":"3531","ElectionYear":"2018","PollingCentreCode":"1070","PollingCentreName":"Town Barray, Ngitibu, Kailahun","PollingCentreRegion":"East","PollingCentreDistrict":"Kailahun","PollingCentreConstituency":"Constituency 004","PollingCentreWard":"Ward 010","Registered_Voters":"1618","PollingCentreLatitude":"8.27755","PollingCentreLongitude":"-10.57395"},{"SLEOP_ID":"3532","ElectionYear":"2018","PollingCentreCode":"1071","PollingCentreName":"KLDEC School, New London, Kailahun Town","PollingCentreRegion":"East","PollingCentreDistrict":"Kailahun","PollingCentreConstituency":"Constituency 004","PollingCentreWard":"Ward 010","Registered_Voters":"1404","PollingCentreLatitude":"8.27534","PollingCentreLongitude":"-10.58104"},{"SLEOP_ID":"3533","ElectionYear":"2018","PollingCentreCode":"1072","PollingCentreName":"Methodist Sec. School, Kailahun Town","PollingCentreRegion":"East","PollingCentreDistrict":"Kailahun","PollingCentreConstituency":"Constituency 004","PollingCentreWard":"Ward 010","Registered_Voters":"851","PollingCentreLatitude":"8.26515","PollingCentreLongitude":"-10.5815"},{"SLEOP_ID":"3534","ElectionYear":"2018","PollingCentreCode":"1073","PollingCentreName":"Amadiyya Primary School, Kailahun Town","PollingCentreRegion":"East","PollingCentreDistrict":"Kailahun","PollingCentreConstituency":"Constituency 004","PollingCentreWard":"Ward 010","Registered_Voters":"1187","PollingCentreLatitude":"8.27136","PollingCentreLongitude":"-10.56367"},{"SLEOP_ID":"3535","ElectionYear":"2018","PollingCentreCode":"1074","PollingCentreName":"Methodist Primary School, kailahun Town","PollingCentreRegion":"East","PollingCentreDistrict":"Kailahun","PollingCentreConstituency":"Constituency 004","PollingCentreWard":"Ward 010","Registered_Voters":"1180","PollingCentreLatitude":"8.28471","PollingCentreLongitude":"-10.57418"},{"SLEOP_ID":"3540","ElectionYear":"2018","PollingCentreCode":"1079","PollingCentreName":"Mofindor Court Barray","PollingCentreRegion":"East","PollingCentreDistrict":"Kailahun","PollingCentreConstituency":"Constituency 004","PollingCentreWard":"Ward 011","Registered_Voters":"1016","PollingCentreLatitude":"8.31839","PollingCentreLongitude":"-10.60052"},{"SLEOP_ID":"3541","ElectionYear":"2018","PollingCentreCode":"1080","PollingCentreName":"Methodist Primary School, yengema","PollingCentreRegion":"East","PollingCentreDistrict":"Kailahun","PollingCentreConstituency":"Constituency 004","PollingCentreWard":"Ward 011","Registered_Voters":"712","PollingCentreLatitude":"8.33038","PollingCentreLongitude":"-10.6288"},{"SLEOP_ID":"3542","ElectionYear":"2018","PollingCentreCode":"1081","PollingCentreName":"Nyanyahun Town Barray","PollingCentreRegion":"East","PollingCentreDistrict":"Kailahun","PollingCentreConstituency":"Constituency 004","PollingCentreWard":"Ward 011","Registered_Voters":"504","PollingCentreLatitude":"8.29504","PollingCentreLongitude":"-10.60757"},{"SLEOP_ID":"3543","ElectionYear":"2018","PollingCentreCode":"1082","PollingCentreName":"Town Barray, Ngiehun Town","PollingCentreRegion":"East","PollingCentreDistrict":"Kailahun","PollingCentreConstituency":"Constituency 004","PollingCentreWard":"Ward 011","Registered_Voters":"1055","PollingCentreLatitude":"8.17487","PollingCentreLongitude":"-11.08583"},{"SLEOP_ID":"3545","ElectionYear":"2018","PollingCentreCode":"1084","PollingCentreName":"Open Space, Yaama Town","PollingCentreRegion":"East","PollingCentreDistrict":"Kailahun","PollingCentreConstituency":"Constituency 004","PollingCentreWard":"Ward 011","Registered_Voters":"350","PollingCentreLatitude":"8.21001","PollingCentreLongitude":"-10.59423"},{"SLEOP_ID":"3546","ElectionYear":"2018","PollingCentreCode":"1085","PollingCentreName":"Town Market, Ngiehun","PollingCentreRegion":"East","PollingCentreDistrict":"Kailahun","PollingCentreConstituency":"Constituency 004","PollingCentreWard":"Ward 011","Registered_Voters":"1027","PollingCentreLatitude":"7.91742","PollingCentreLongitude":"-10.97062"},{"SLEOP_ID":"3547","ElectionYear":"2018","PollingCentreCode":"1086","PollingCentreName":"Town Barray, Mende Buima Town","PollingCentreRegion":"East","PollingCentreDistrict":"Kailahun","PollingCentreConstituency":"Constituency 004","PollingCentreWard":"Ward 011","Registered_Voters":"1074","PollingCentreLatitude":"8.1999","PollingCentreLongitude":"-10.69263"},{"SLEOP_ID":"3548","ElectionYear":"2018","PollingCentreCode":"1087","PollingCentreName":"Town Barray, Lower Kuiva, Kuiva Town","PollingCentreRegion":"East","PollingCentreDistrict":"Kailahun","PollingCentreConstituency":"Constituency 005","PollingCentreWard":"Ward 012","Registered_Voters":"758","PollingCentreLatitude":"7.93084","PollingCentreLongitude":"-10.75863"},{"SLEOP_ID":"3549","ElectionYear":"2018","PollingCentreCode":"1088","PollingCentreName":"Town Barray, Lower Kuiva, Tikonko","PollingCentreRegion":"East","PollingCentreDistrict":"Kailahun","PollingCentreConstituency":"Constituency 005","PollingCentreWard":"Ward 012","Registered_Voters":"729","PollingCentreLatitude":"7.91778","PollingCentreLongitude":"-10.81315"},{"SLEOP_ID":"3550","ElectionYear":"2018","PollingCentreCode":"1089","PollingCentreName":"Town Barray, Mobai Town","PollingCentreRegion":"East","PollingCentreDistrict":"Kailahun","PollingCentreConstituency":"Constituency 005","PollingCentreWard":"Ward 012","Registered_Voters":"1018","PollingCentreLatitude":"7.99324","PollingCentreLongitude":"-10.75398"},{"SLEOP_ID":"3551","ElectionYear":"2018","PollingCentreCode":"1090","PollingCentreName":"Town Market centre, Mobai Town","PollingCentreRegion":"East","PollingCentreDistrict":"Kailahun","PollingCentreConstituency":"Constituency 005","PollingCentreWard":"Ward 012","Registered_Voters":"689","PollingCentreLatitude":"7.99383","PollingCentreLongitude":"-10.75368"},{"SLEOP_ID":"3552","ElectionYear":"2018","PollingCentreCode":"1091","PollingCentreName":"Town Barray, Gooh Town","PollingCentreRegion":"East","PollingCentreDistrict":"Kailahun","PollingCentreConstituency":"Constituency 005","PollingCentreWard":"Ward 012","Registered_Voters":"1012","PollingCentreLatitude":"7.95401","PollingCentreLongitude":"-10.70606"},{"SLEOP_ID":"3553","ElectionYear":"2018","PollingCentreCode":"1092","PollingCentreName":"Town Barray, Dablama","PollingCentreRegion":"East","PollingCentreDistrict":"Kailahun","PollingCentreConstituency":"Constituency 005","PollingCentreWard":"Ward 012","Registered_Voters":"468","PollingCentreLatitude":"7.99819","PollingCentreLongitude":"-10.715"},{"SLEOP_ID":"3554","ElectionYear":"2018","PollingCentreCode":"1093","PollingCentreName":"Town Barray, Njala Town","PollingCentreRegion":"East","PollingCentreDistrict":"Kailahun","PollingCentreConstituency":"Constituency 005","PollingCentreWard":"Ward 012","Registered_Voters":"381","PollingCentreLatitude":"7.87559","PollingCentreLongitude":"-10.89794"},{"SLEOP_ID":"3555","ElectionYear":"2018","PollingCentreCode":"1094","PollingCentreName":"Market Centre, Siama Town","PollingCentreRegion":"East","PollingCentreDistrict":"Kailahun","PollingCentreConstituency":"Constituency 005","PollingCentreWard":"Ward 013","Registered_Voters":"601","PollingCentreLatitude":"8.0422","PollingCentreLongitude":"-10.66598"},{"SLEOP_ID":"3556","ElectionYear":"2018","PollingCentreCode":"1095","PollingCentreName":"Town Barray, Jorporwahun Town","PollingCentreRegion":"East","PollingCentreDistrict":"Kailahun","PollingCentreConstituency":"Constituency 005","PollingCentreWard":"Ward 013","Registered_Voters":"564","PollingCentreLatitude":"8.07999","PollingCentreLongitude":"-10.66478"},{"SLEOP_ID":"3557","ElectionYear":"2018","PollingCentreCode":"1096","PollingCentreName":"Town Barray, Bongre, Gbaiima Town","PollingCentreRegion":"East","PollingCentreDistrict":"Kailahun","PollingCentreConstituency":"Constituency 005","PollingCentreWard":"Ward 013","Registered_Voters":"1618","PollingCentreLatitude":"8.03216","PollingCentreLongitude":"-10.76684"},{"SLEOP_ID":"3558","ElectionYear":"2018","PollingCentreCode":"1097","PollingCentreName":"Open Space, Laa Town","PollingCentreRegion":"East","PollingCentreDistrict":"Kailahun","PollingCentreConstituency":"Constituency 005","PollingCentreWard":"Ward 013","Registered_Voters":"509","PollingCentreLatitude":"8.08063","PollingCentreLongitude":"-10.77245"},{"SLEOP_ID":"3559","ElectionYear":"2018","PollingCentreCode":"1098","PollingCentreName":"Town Barray, Njeigbla, Levuma Town","PollingCentreRegion":"East","PollingCentreDistrict":"Kailahun","PollingCentreConstituency":"Constituency 005","PollingCentreWard":"Ward 013","Registered_Voters":"972","PollingCentreLatitude":"8.03732","PollingCentreLongitude":"-10.72034"},{"SLEOP_ID":"3560","ElectionYear":"2018","PollingCentreCode":"1099","PollingCentreName":"Muloma Women Dev. Ass. Levuma, Njeigbla","PollingCentreRegion":"East","PollingCentreDistrict":"Kailahun","PollingCentreConstituency":"Constituency 005","PollingCentreWard":"Ward 013","Registered_Voters":"612","PollingCentreLatitude":"8.03864","PollingCentreLongitude":"-10.71965"},{"SLEOP_ID":"5869","ElectionYear":"2018","PollingCentreCode":"11001","PollingCentreName":"U.M.C Kulanda Town, Njia/Kulanda Town, Johaness St.","PollingCentreRegion":"South","PollingCentreDistrict":"Bo","PollingCentreConstituency":"Constituency 088","PollingCentreWard":"Ward 264","Registered_Voters":"1637","PollingCentreLatitude":"7.97618","PollingCentreLongitude":"-11.73859"},{"SLEOP_ID":"5870","ElectionYear":"2018","PollingCentreCode":"11002","PollingCentreName":"Kakua Primary School, Njai Town","PollingCentreRegion":"South","PollingCentreDistrict":"Bo","PollingCentreConstituency":"Constituency 088","PollingCentreWard":"Ward 264","Registered_Voters":"1542","PollingCentreLatitude":"7.97782","PollingCentreLongitude":"-11.73579"},{"SLEOP_ID":"5873","ElectionYear":"2018","PollingCentreCode":"11005","PollingCentreName":"Namya Islamic Prim. Sch., Kissy Town - Bo, Ngeyya","PollingCentreRegion":"South","PollingCentreDistrict":"Bo","PollingCentreConstituency":"Constituency 088","PollingCentreWard":"Ward 265","Registered_Voters":"1698","PollingCentreLatitude":"7.96787","PollingCentreLongitude":"-11.73479"},{"SLEOP_ID":"5874","ElectionYear":"2018","PollingCentreCode":"11006","PollingCentreName":"SDA Prim. Sch. (upper), Samamie - Bo, Ngalu Rd.","PollingCentreRegion":"South","PollingCentreDistrict":"Bo","PollingCentreConstituency":"Constituency 088","PollingCentreWard":"Ward 265","Registered_Voters":"1471","PollingCentreLatitude":"7.96898","PollingCentreLongitude":"-11.73327"},{"SLEOP_ID":"5875","ElectionYear":"2018","PollingCentreCode":"11007","PollingCentreName":"Kakua (BDEC Primary Sch.), Njia/Kulanda Town.","PollingCentreRegion":"South","PollingCentreDistrict":"Bo","PollingCentreConstituency":"Constituency 088","PollingCentreWard":"Ward 265","Registered_Voters":"898","PollingCentreLatitude":"7.97782","PollingCentreLongitude":"-11.73579"},{"SLEOP_ID":"5876","ElectionYear":"2018","PollingCentreCode":"11008","PollingCentreName":"Tahid Ahmadiyya Sch. 1, Njai/Kulanda Town, Njai/Sa","PollingCentreRegion":"South","PollingCentreDistrict":"Bo","PollingCentreConstituency":"Constituency 088","PollingCentreWard":"Ward 265","Registered_Voters":"1116","PollingCentreLatitude":"7.97242","PollingCentreLongitude":"-11.73446"},{"SLEOP_ID":"575","ElectionYear":"2018","PollingCentreCode":"1101","PollingCentreName":"Town Barray, Juhun Town","PollingCentreRegion":"East","PollingCentreDistrict":"Kailahun","PollingCentreConstituency":"Constituency 005","PollingCentreWard":"Ward 014","Registered_Voters":"687","PollingCentreLatitude":"7.77727","PollingCentreLongitude":"-11.5255"},{"SLEOP_ID":"5878","ElectionYear":"2018","PollingCentreCode":"11010","PollingCentreName":"Florence Preparatory Sch., Bo No. 2, 15 Hindowa St","PollingCentreRegion":"South","PollingCentreDistrict":"Bo","PollingCentreConstituency":"Constituency 088","PollingCentreWard":"Ward 266","Registered_Voters":"1429","PollingCentreLatitude":"7.97343","PollingCentreLongitude":"-11.73216"},{"SLEOP_ID":"5879","ElectionYear":"2018","PollingCentreCode":"11011","PollingCentreName":"Young Muslim Prim. Sch., Borborkombo, Bo No. 2 Ext","PollingCentreRegion":"South","PollingCentreDistrict":"Bo","PollingCentreConstituency":"Constituency 088","PollingCentreWard":"Ward 266","Registered_Voters":"1662","PollingCentreLatitude":"7.98015","PollingCentreLongitude":"-11.72577"},{"SLEOP_ID":"5880","ElectionYear":"2018","PollingCentreCode":"11012","PollingCentreName":"St. Peters Prim. Sch., Borborkombo, Bo No. 2","PollingCentreRegion":"South","PollingCentreDistrict":"Bo","PollingCentreConstituency":"Constituency 088","PollingCentreWard":"Ward 266","Registered_Voters":"1204","PollingCentreLatitude":"7.97121","PollingCentreLongitude":"-11.72899"},{"SLEOP_ID":"5881","ElectionYear":"2018","PollingCentreCode":"11013","PollingCentreName":"Milton Comprehensive Sec. Sch., Borborkombo, Ngalu","PollingCentreRegion":"South","PollingCentreDistrict":"Bo","PollingCentreConstituency":"Constituency 088","PollingCentreWard":"Ward 266","Registered_Voters":"1138","PollingCentreLatitude":"7.97057","PollingCentreLongitude":"-11.72559"},{"SLEOP_ID":"5882","ElectionYear":"2018","PollingCentreCode":"11014","PollingCentreName":"Quranic Edu Primary School, Batiema layout Ngalu Rd.","PollingCentreRegion":"South","PollingCentreDistrict":"Bo","PollingCentreConstituency":"Constituency 088","PollingCentreWard":"Ward 266","Registered_Voters":"1306","PollingCentreLatitude":"7.97191","PollingCentreLongitude":"-11.72101"},{"SLEOP_ID":"5884","ElectionYear":"2018","PollingCentreCode":"11016","PollingCentreName":"Abdul Nasir Sec. Sch., Dubar Ground, Dr. Margai St","PollingCentreRegion":"South","PollingCentreDistrict":"Bo","PollingCentreConstituency":"Constituency 088","PollingCentreWard":"Ward 267","Registered_Voters":"1282","PollingCentreLatitude":"7.96816","PollingCentreLongitude":"-11.73009"},{"SLEOP_ID":"5885","ElectionYear":"2018","PollingCentreCode":"11017","PollingCentreName":"Islamic Call Sec. Sch., Lower Samamie, Durbar Ground","PollingCentreRegion":"South","PollingCentreDistrict":"Bo","PollingCentreConstituency":"Constituency 088","PollingCentreWard":"Ward 267","Registered_Voters":"1102","PollingCentreLatitude":"7.96659","PollingCentreLongitude":"-11.72678"}]

/***/ }),

/***/ 357:
/***/ (function(module, exports) {

module.exports = [{"SLEOP_ID":"9428","Candidate_SLEOP_ID":"7878","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2176","PollingCentreName":"Nekabo Town Barrie","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 016","PollingCentreWard":"Ward 047","CandidateSurname":"Mansaray","CandidateFirstName":"Mohamed","CandidatePoliticalParty":"ADP","CandidatePoliticalPartyName":"Alliance Democratic Party (ADP)","CandidatePoliticalPartyColor":"Pink","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-kamaraimba-mansaray.jpg"},{"SLEOP_ID":"9427","Candidate_SLEOP_ID":"7878","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2174","PollingCentreName":"Kpaava Town Barrie","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 016","PollingCentreWard":"Ward 047","CandidateSurname":"Mansaray","CandidateFirstName":"Mohamed","CandidatePoliticalParty":"ADP","CandidatePoliticalPartyName":"Alliance Democratic Party (ADP)","CandidatePoliticalPartyColor":"Pink","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-kamaraimba-mansaray.jpg"},{"SLEOP_ID":"9426","Candidate_SLEOP_ID":"7878","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2173","PollingCentreName":"Dia Town Barrie","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 016","PollingCentreWard":"Ward 047","CandidateSurname":"Mansaray","CandidateFirstName":"Mohamed","CandidatePoliticalParty":"ADP","CandidatePoliticalPartyName":"Alliance Democratic Party (ADP)","CandidatePoliticalPartyColor":"Pink","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-kamaraimba-mansaray.jpg"},{"SLEOP_ID":"9425","Candidate_SLEOP_ID":"7878","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2171","PollingCentreName":"Potehun Town Barray","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 016","PollingCentreWard":"Ward 046","CandidateSurname":"Mansaray","CandidateFirstName":"Mohamed","CandidatePoliticalParty":"ADP","CandidatePoliticalPartyName":"Alliance Democratic Party (ADP)","CandidatePoliticalPartyColor":"Pink","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-kamaraimba-mansaray.jpg"},{"SLEOP_ID":"9424","Candidate_SLEOP_ID":"7878","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2170","PollingCentreName":"Town Barrie, Kona kpindibu, Largo Town Barrie","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 016","PollingCentreWard":"Ward 046","CandidateSurname":"Mansaray","CandidateFirstName":"Mohamed","CandidatePoliticalParty":"ADP","CandidatePoliticalPartyName":"Alliance Democratic Party (ADP)","CandidatePoliticalPartyColor":"Pink","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-kamaraimba-mansaray.jpg"},{"SLEOP_ID":"9423","Candidate_SLEOP_ID":"7878","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2169","PollingCentreName":"Town Barrie, Kona kpindibu, Mano-junction Town Bar","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 016","PollingCentreWard":"Ward 046","CandidateSurname":"Mansaray","CandidateFirstName":"Mohamed","CandidatePoliticalParty":"ADP","CandidatePoliticalPartyName":"Alliance Democratic Party (ADP)","CandidatePoliticalPartyColor":"Pink","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-kamaraimba-mansaray.jpg"},{"SLEOP_ID":"9422","Candidate_SLEOP_ID":"7878","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2168","PollingCentreName":"Town Barrie, Kona kpindibu(Bassara), Bassara Town","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 016","PollingCentreWard":"Ward 046","CandidateSurname":"Mansaray","CandidateFirstName":"Mohamed","CandidatePoliticalParty":"ADP","CandidatePoliticalPartyName":"Alliance Democratic Party (ADP)","CandidatePoliticalPartyColor":"Pink","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-kamaraimba-mansaray.jpg"},{"SLEOP_ID":"9421","Candidate_SLEOP_ID":"7878","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2167","PollingCentreName":"KDC Primary School, Largo","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 016","PollingCentreWard":"Ward 046","CandidateSurname":"Mansaray","CandidateFirstName":"Mohamed","CandidatePoliticalParty":"ADP","CandidatePoliticalPartyName":"Alliance Democratic Party (ADP)","CandidatePoliticalPartyColor":"Pink","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-kamaraimba-mansaray.jpg"},{"SLEOP_ID":"9420","Candidate_SLEOP_ID":"7878","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2166","PollingCentreName":"Ngelahun Town Barrie","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 016","PollingCentreWard":"Ward 046","CandidateSurname":"Mansaray","CandidateFirstName":"Mohamed","CandidatePoliticalParty":"ADP","CandidatePoliticalPartyName":"Alliance Democratic Party (ADP)","CandidatePoliticalPartyColor":"Pink","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-kamaraimba-mansaray.jpg"},{"SLEOP_ID":"9419","Candidate_SLEOP_ID":"7878","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2165","PollingCentreName":"Talia Torgboma Town","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 016","PollingCentreWard":"Ward 046","CandidateSurname":"Mansaray","CandidateFirstName":"Mohamed","CandidatePoliticalParty":"ADP","CandidatePoliticalPartyName":"Alliance Democratic Party (ADP)","CandidatePoliticalPartyColor":"Pink","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-kamaraimba-mansaray.jpg"},{"SLEOP_ID":"9418","Candidate_SLEOP_ID":"7878","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2164","PollingCentreName":"Koi Town Barrie","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 016","PollingCentreWard":"Ward 046","CandidateSurname":"Mansaray","CandidateFirstName":"Mohamed","CandidatePoliticalParty":"ADP","CandidatePoliticalPartyName":"Alliance Democratic Party (ADP)","CandidatePoliticalPartyColor":"Pink","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-kamaraimba-mansaray.jpg"},{"SLEOP_ID":"9417","Candidate_SLEOP_ID":"7878","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2162","PollingCentreName":"Bo NgeiyaTown Barray","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 016","PollingCentreWard":"Ward 045","CandidateSurname":"Mansaray","CandidateFirstName":"Mohamed","CandidatePoliticalParty":"ADP","CandidatePoliticalPartyName":"Alliance Democratic Party (ADP)","CandidatePoliticalPartyColor":"Pink","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-kamaraimba-mansaray.jpg"},{"SLEOP_ID":"9416","Candidate_SLEOP_ID":"7878","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2161","PollingCentreName":"Town Barrie, Kona kpindibu ngelehun, Ngelahun Town","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 016","PollingCentreWard":"Ward 045","CandidateSurname":"Mansaray","CandidateFirstName":"Mohamed","CandidatePoliticalParty":"ADP","CandidatePoliticalPartyName":"Alliance Democratic Party (ADP)","CandidatePoliticalPartyColor":"Pink","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-kamaraimba-mansaray.jpg"},{"SLEOP_ID":"9415","Candidate_SLEOP_ID":"7878","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2160","PollingCentreName":"Town Barrie, Kona kpindibu(Niahun-sawula buima, Ni","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 016","PollingCentreWard":"Ward 045","CandidateSurname":"Mansaray","CandidateFirstName":"Mohamed","CandidatePoliticalParty":"ADP","CandidatePoliticalPartyName":"Alliance Democratic Party (ADP)","CandidatePoliticalPartyColor":"Pink","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-kamaraimba-mansaray.jpg"},{"SLEOP_ID":"9414","Candidate_SLEOP_ID":"7878","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2159","PollingCentreName":"Town Barrie, Gbo-lambayama-B Dia kabaibu, Dia Kaba","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 016","PollingCentreWard":"Ward 045","CandidateSurname":"Mansaray","CandidateFirstName":"Mohamed","CandidatePoliticalParty":"ADP","CandidatePoliticalPartyName":"Alliance Democratic Party (ADP)","CandidatePoliticalPartyColor":"Pink","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-kamaraimba-mansaray.jpg"},{"SLEOP_ID":"9413","Candidate_SLEOP_ID":"7878","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2158","PollingCentreName":"Town Barrie, Kagbado kamboima samie-Foluma, Samie","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 016","PollingCentreWard":"Ward 045","CandidateSurname":"Mansaray","CandidateFirstName":"Mohamed","CandidatePoliticalParty":"ADP","CandidatePoliticalPartyName":"Alliance Democratic Party (ADP)","CandidatePoliticalPartyColor":"Pink","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-kamaraimba-mansaray.jpg"},{"SLEOP_ID":"9412","Candidate_SLEOP_ID":"7878","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2157","PollingCentreName":"Town Barrie, Kagbado kamboima (panderu)","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 016","PollingCentreWard":"Ward 045","CandidateSurname":"Mansaray","CandidateFirstName":"Mohamed","CandidatePoliticalParty":"ADP","CandidatePoliticalPartyName":"Alliance Democratic Party (ADP)","CandidatePoliticalPartyColor":"Pink","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-kamaraimba-mansaray.jpg"},{"SLEOP_ID":"9411","Candidate_SLEOP_ID":"7878","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"","PollingCentreName":"","PollingCentreDistrict":"","PollingCentreConstituency":"","PollingCentreWard":"","CandidateSurname":"Mansaray","CandidateFirstName":"Mohamed","CandidatePoliticalParty":"ADP","CandidatePoliticalPartyName":"Alliance Democratic Party (ADP)","CandidatePoliticalPartyColor":"Pink","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-kamaraimba-mansaray.jpg"},{"SLEOP_ID":"9410","Candidate_SLEOP_ID":"7878","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2155","PollingCentreName":"Town Barrie, Kagbado Kamboima, Bomboma Town Barrie","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 016","PollingCentreWard":"Ward 045","CandidateSurname":"Mansaray","CandidateFirstName":"Mohamed","CandidatePoliticalParty":"ADP","CandidatePoliticalPartyName":"Alliance Democratic Party (ADP)","CandidatePoliticalPartyColor":"Pink","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-kamaraimba-mansaray.jpg"},{"SLEOP_ID":"9409","Candidate_SLEOP_ID":"7878","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2153","PollingCentreName":"Town Barray, Tissor","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 015","PollingCentreWard":"Ward 044","CandidateSurname":"Mansaray","CandidateFirstName":"Mohamed","CandidatePoliticalParty":"ADP","CandidatePoliticalPartyName":"Alliance Democratic Party (ADP)","CandidatePoliticalPartyColor":"Pink","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-kamaraimba-mansaray.jpg"},{"SLEOP_ID":"9408","Candidate_SLEOP_ID":"7878","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2151","PollingCentreName":"Town Barrie, Bonya(Gangama), Gangama Town Barrie","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 015","PollingCentreWard":"Ward 044","CandidateSurname":"Mansaray","CandidateFirstName":"Mohamed","CandidatePoliticalParty":"ADP","CandidatePoliticalPartyName":"Alliance Democratic Party (ADP)","CandidatePoliticalPartyColor":"Pink","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-kamaraimba-mansaray.jpg"},{"SLEOP_ID":"9407","Candidate_SLEOP_ID":"7878","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"","PollingCentreName":"","PollingCentreDistrict":"","PollingCentreConstituency":"","PollingCentreWard":"","CandidateSurname":"Mansaray","CandidateFirstName":"Mohamed","CandidatePoliticalParty":"ADP","CandidatePoliticalPartyName":"Alliance Democratic Party (ADP)","CandidatePoliticalPartyColor":"Pink","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-kamaraimba-mansaray.jpg"},{"SLEOP_ID":"9406","Candidate_SLEOP_ID":"7878","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2150","PollingCentreName":"Town Barrie, Banya(konjo), Konjo Town Barrie","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 015","PollingCentreWard":"Ward 044","CandidateSurname":"Mansaray","CandidateFirstName":"Mohamed","CandidatePoliticalParty":"ADP","CandidatePoliticalPartyName":"Alliance Democratic Party (ADP)","CandidatePoliticalPartyColor":"Pink","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-kamaraimba-mansaray.jpg"},{"SLEOP_ID":"9405","Candidate_SLEOP_ID":"7878","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2149","PollingCentreName":"Town Barrie, Bonya(Kpetema), Kpetema Town Barrie","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 015","PollingCentreWard":"Ward 044","CandidateSurname":"Mansaray","CandidateFirstName":"Mohamed","CandidatePoliticalParty":"ADP","CandidatePoliticalPartyName":"Alliance Democratic Party (ADP)","CandidatePoliticalPartyColor":"Pink","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-kamaraimba-mansaray.jpg"},{"SLEOP_ID":"9404","Candidate_SLEOP_ID":"7878","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2148","PollingCentreName":"Town Barrie, Bonya(kenema Goleima), Kenema Goleima","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 015","PollingCentreWard":"Ward 044","CandidateSurname":"Mansaray","CandidateFirstName":"Mohamed","CandidatePoliticalParty":"ADP","CandidatePoliticalPartyName":"Alliance Democratic Party (ADP)","CandidatePoliticalPartyColor":"Pink","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-kamaraimba-mansaray.jpg"},{"SLEOP_ID":"9403","Candidate_SLEOP_ID":"7878","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2147","PollingCentreName":"Komende Town Barray 1","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 015","PollingCentreWard":"Ward 044","CandidateSurname":"Mansaray","CandidateFirstName":"Mohamed","CandidatePoliticalParty":"ADP","CandidatePoliticalPartyName":"Alliance Democratic Party (ADP)","CandidatePoliticalPartyColor":"Pink","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-kamaraimba-mansaray.jpg"},{"SLEOP_ID":"9402","Candidate_SLEOP_ID":"7878","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2145","PollingCentreName":"Jelehun Pewoma Town Barray","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 015","PollingCentreWard":"Ward 043","CandidateSurname":"Mansaray","CandidateFirstName":"Mohamed","CandidatePoliticalParty":"ADP","CandidatePoliticalPartyName":"Alliance Democratic Party (ADP)","CandidatePoliticalPartyColor":"Pink","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-kamaraimba-mansaray.jpg"},{"SLEOP_ID":"9401","Candidate_SLEOP_ID":"7878","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2144","PollingCentreName":"Town Barrie, Bonya(panguma 1), Panguma old Town Ba","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 015","PollingCentreWard":"Ward 043","CandidateSurname":"Mansaray","CandidateFirstName":"Mohamed","CandidatePoliticalParty":"ADP","CandidatePoliticalPartyName":"Alliance Democratic Party (ADP)","CandidatePoliticalPartyColor":"Pink","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-kamaraimba-mansaray.jpg"},{"SLEOP_ID":"9400","Candidate_SLEOP_ID":"7878","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2143","PollingCentreName":"N.A Barrie, Bonya(panguma 11), Penguma N. A. Barri","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 015","PollingCentreWard":"Ward 043","CandidateSurname":"Mansaray","CandidateFirstName":"Mohamed","CandidatePoliticalParty":"ADP","CandidatePoliticalPartyName":"Alliance Democratic Party (ADP)","CandidatePoliticalPartyColor":"Pink","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-kamaraimba-mansaray.jpg"},{"SLEOP_ID":"9399","Candidate_SLEOP_ID":"7889","ElectionDate":"2018-07-03","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"11229","PollingCentreName":"N/A Court BarrayY, Komboya Town, Komboya","PollingCentreDistrict":"Bo","PollingCentreConstituency":"Constituency 082","PollingCentreWard":"Ward 298","CandidateSurname":"Claudius-Cole","CandidateFirstName":"Olufemi","CandidatePoliticalParty":"UP","CandidatePoliticalPartyName":"Unity Party (UP)","CandidatePoliticalPartyColor":"Blue","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/olufemi-josephine-claudius-cole.jpg"},{"SLEOP_ID":"9398","Candidate_SLEOP_ID":"7889","ElectionDate":"2018-07-03","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"11214","PollingCentreName":"Ansaru Prim. Sch., Bouma Village, Bouma","PollingCentreDistrict":"Bo","PollingCentreConstituency":"Constituency 083","PollingCentreWard":"Ward 296","CandidateSurname":"Claudius-Cole","CandidateFirstName":"Olufemi","CandidatePoliticalParty":"UP","CandidatePoliticalPartyName":"Unity Party (UP)","CandidatePoliticalPartyColor":"Blue","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/olufemi-josephine-claudius-cole.jpg"},{"SLEOP_ID":"9397","Candidate_SLEOP_ID":"7889","ElectionDate":"2018-07-03","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"11207","PollingCentreName":"N/A Court Barray, Baoma Town, Baoma Old Town","PollingCentreDistrict":"Bo","PollingCentreConstituency":"Constituency 082","PollingCentreWard":"Ward 295","CandidateSurname":"Claudius-Cole","CandidateFirstName":"Olufemi","CandidatePoliticalParty":"UP","CandidatePoliticalPartyName":"Unity Party (UP)","CandidatePoliticalPartyColor":"Blue","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/olufemi-josephine-claudius-cole.jpg"},{"SLEOP_ID":"9396","Candidate_SLEOP_ID":"7889","ElectionDate":"2018-07-03","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"11199","PollingCentreName":"N/A Court Barray, Kpumbu Village, Kpumbu","PollingCentreDistrict":"Bo","PollingCentreConstituency":"Constituency 082","PollingCentreWard":"Ward 294","CandidateSurname":"Claudius-Cole","CandidateFirstName":"Olufemi","CandidatePoliticalParty":"UP","CandidatePoliticalPartyName":"Unity Party (UP)","CandidatePoliticalPartyColor":"Blue","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/olufemi-josephine-claudius-cole.jpg"},{"SLEOP_ID":"9395","Candidate_SLEOP_ID":"7889","ElectionDate":"2018-07-03","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"11190","PollingCentreName":"Open Space, Kommende","PollingCentreDistrict":"Bo","PollingCentreConstituency":"Constituency 082","PollingCentreWard":"Ward 293","CandidateSurname":"Claudius-Cole","CandidateFirstName":"Olufemi","CandidatePoliticalParty":"UP","CandidatePoliticalPartyName":"Unity Party (UP)","CandidatePoliticalPartyColor":"Blue","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/olufemi-josephine-claudius-cole.jpg"},{"SLEOP_ID":"9394","Candidate_SLEOP_ID":"7889","ElectionDate":"2018-07-03","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"11181","PollingCentreName":"Town Barray, Loowoma Town, Loowoma","PollingCentreDistrict":"Bo","PollingCentreConstituency":"Constituency 081","PollingCentreWard":"Ward 292","CandidateSurname":"Claudius-Cole","CandidateFirstName":"Olufemi","CandidatePoliticalParty":"UP","CandidatePoliticalPartyName":"Unity Party (UP)","CandidatePoliticalPartyColor":"Blue","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/olufemi-josephine-claudius-cole.jpg"},{"SLEOP_ID":"9393","Candidate_SLEOP_ID":"7889","ElectionDate":"2018-07-03","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"11174","PollingCentreName":"Town Barray, Jomborhun Town, Jomborhun","PollingCentreDistrict":"Bo","PollingCentreConstituency":"Constituency 081","PollingCentreWard":"Ward 291","CandidateSurname":"Claudius-Cole","CandidateFirstName":"Olufemi","CandidatePoliticalParty":"UP","CandidatePoliticalPartyName":"Unity Party (UP)","CandidatePoliticalPartyColor":"Blue","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/olufemi-josephine-claudius-cole.jpg"},{"SLEOP_ID":"9392","Candidate_SLEOP_ID":"7879","ElectionDate":"2018-07-03","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"11229","PollingCentreName":"N/A Court BarrayY, Komboya Town, Komboya","PollingCentreDistrict":"Bo","PollingCentreConstituency":"Constituency 082","PollingCentreWard":"Ward 298","CandidateSurname":"Sam-Sumana","CandidateFirstName":"Samuel ","CandidatePoliticalParty":"C4C","CandidatePoliticalPartyName":"Coalition for Change (C4C)","CandidatePoliticalPartyColor":"Orange","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/samuel-sam-sumana.jpg"},{"SLEOP_ID":"9391","Candidate_SLEOP_ID":"7879","ElectionDate":"2018-07-03","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"11214","PollingCentreName":"Ansaru Prim. Sch., Bouma Village, Bouma","PollingCentreDistrict":"Bo","PollingCentreConstituency":"Constituency 083","PollingCentreWard":"Ward 296","CandidateSurname":"Sam-Sumana","CandidateFirstName":"Samuel ","CandidatePoliticalParty":"C4C","CandidatePoliticalPartyName":"Coalition for Change (C4C)","CandidatePoliticalPartyColor":"Orange","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/samuel-sam-sumana.jpg"},{"SLEOP_ID":"9390","Candidate_SLEOP_ID":"7879","ElectionDate":"2018-07-03","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"11207","PollingCentreName":"N/A Court Barray, Baoma Town, Baoma Old Town","PollingCentreDistrict":"Bo","PollingCentreConstituency":"Constituency 082","PollingCentreWard":"Ward 295","CandidateSurname":"Sam-Sumana","CandidateFirstName":"Samuel ","CandidatePoliticalParty":"C4C","CandidatePoliticalPartyName":"Coalition for Change (C4C)","CandidatePoliticalPartyColor":"Orange","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/samuel-sam-sumana.jpg"},{"SLEOP_ID":"9389","Candidate_SLEOP_ID":"7879","ElectionDate":"2018-07-03","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"11199","PollingCentreName":"N/A Court Barray, Kpumbu Village, Kpumbu","PollingCentreDistrict":"Bo","PollingCentreConstituency":"Constituency 082","PollingCentreWard":"Ward 294","CandidateSurname":"Sam-Sumana","CandidateFirstName":"Samuel ","CandidatePoliticalParty":"C4C","CandidatePoliticalPartyName":"Coalition for Change (C4C)","CandidatePoliticalPartyColor":"Orange","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/samuel-sam-sumana.jpg"},{"SLEOP_ID":"9388","Candidate_SLEOP_ID":"7879","ElectionDate":"2018-07-03","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"11190","PollingCentreName":"Open Space, Kommende","PollingCentreDistrict":"Bo","PollingCentreConstituency":"Constituency 082","PollingCentreWard":"Ward 293","CandidateSurname":"Sam-Sumana","CandidateFirstName":"Samuel ","CandidatePoliticalParty":"C4C","CandidatePoliticalPartyName":"Coalition for Change (C4C)","CandidatePoliticalPartyColor":"Orange","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/samuel-sam-sumana.jpg"},{"SLEOP_ID":"9387","Candidate_SLEOP_ID":"7879","ElectionDate":"2018-07-03","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"11181","PollingCentreName":"Town Barray, Loowoma Town, Loowoma","PollingCentreDistrict":"Bo","PollingCentreConstituency":"Constituency 081","PollingCentreWard":"Ward 292","CandidateSurname":"Sam-Sumana","CandidateFirstName":"Samuel ","CandidatePoliticalParty":"C4C","CandidatePoliticalPartyName":"Coalition for Change (C4C)","CandidatePoliticalPartyColor":"Orange","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/samuel-sam-sumana.jpg"},{"SLEOP_ID":"9386","Candidate_SLEOP_ID":"7879","ElectionDate":"2018-07-03","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"11174","PollingCentreName":"Town Barray, Jomborhun Town, Jomborhun","PollingCentreDistrict":"Bo","PollingCentreConstituency":"Constituency 081","PollingCentreWard":"Ward 291","CandidateSurname":"Sam-Sumana","CandidateFirstName":"Samuel ","CandidatePoliticalParty":"C4C","CandidatePoliticalPartyName":"Coalition for Change (C4C)","CandidatePoliticalPartyColor":"Orange","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/samuel-sam-sumana.jpg"},{"SLEOP_ID":"9385","Candidate_SLEOP_ID":"7953","ElectionDate":"2018-07-03","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"11229","PollingCentreName":"N/A Court BarrayY, Komboya Town, Komboya","PollingCentreDistrict":"Bo","PollingCentreConstituency":"Constituency 082","PollingCentreWard":"Ward 298","CandidateSurname":"Sandy","CandidateFirstName":"Jonathan","CandidatePoliticalParty":"NUP","CandidatePoliticalPartyName":"National Unity and Reconciliation Party (NURP)","CandidatePoliticalPartyColor":"","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/male-blank-profile-photo.png"},{"SLEOP_ID":"9384","Candidate_SLEOP_ID":"7953","ElectionDate":"2018-07-03","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"11214","PollingCentreName":"Ansaru Prim. Sch., Bouma Village, Bouma","PollingCentreDistrict":"Bo","PollingCentreConstituency":"Constituency 083","PollingCentreWard":"Ward 296","CandidateSurname":"Sandy","CandidateFirstName":"Jonathan","CandidatePoliticalParty":"NUP","CandidatePoliticalPartyName":"National Unity and Reconciliation Party (NURP)","CandidatePoliticalPartyColor":"","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/male-blank-profile-photo.png"},{"SLEOP_ID":"9383","Candidate_SLEOP_ID":"7953","ElectionDate":"2018-07-03","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"11207","PollingCentreName":"N/A Court Barray, Baoma Town, Baoma Old Town","PollingCentreDistrict":"Bo","PollingCentreConstituency":"Constituency 082","PollingCentreWard":"Ward 295","CandidateSurname":"Sandy","CandidateFirstName":"Jonathan","CandidatePoliticalParty":"NUP","CandidatePoliticalPartyName":"National Unity and Reconciliation Party (NURP)","CandidatePoliticalPartyColor":"","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/male-blank-profile-photo.png"},{"SLEOP_ID":"9382","Candidate_SLEOP_ID":"7953","ElectionDate":"2018-07-03","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"11199","PollingCentreName":"N/A Court Barray, Kpumbu Village, Kpumbu","PollingCentreDistrict":"Bo","PollingCentreConstituency":"Constituency 082","PollingCentreWard":"Ward 294","CandidateSurname":"Sandy","CandidateFirstName":"Jonathan","CandidatePoliticalParty":"NUP","CandidatePoliticalPartyName":"National Unity and Reconciliation Party (NURP)","CandidatePoliticalPartyColor":"","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/male-blank-profile-photo.png"},{"SLEOP_ID":"9381","Candidate_SLEOP_ID":"7953","ElectionDate":"2018-07-03","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"11190","PollingCentreName":"Open Space, Kommende","PollingCentreDistrict":"Bo","PollingCentreConstituency":"Constituency 082","PollingCentreWard":"Ward 293","CandidateSurname":"Sandy","CandidateFirstName":"Jonathan","CandidatePoliticalParty":"NUP","CandidatePoliticalPartyName":"National Unity and Reconciliation Party (NURP)","CandidatePoliticalPartyColor":"","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/male-blank-profile-photo.png"},{"SLEOP_ID":"9380","Candidate_SLEOP_ID":"7953","ElectionDate":"2018-07-03","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"11181","PollingCentreName":"Town Barray, Loowoma Town, Loowoma","PollingCentreDistrict":"Bo","PollingCentreConstituency":"Constituency 081","PollingCentreWard":"Ward 292","CandidateSurname":"Sandy","CandidateFirstName":"Jonathan","CandidatePoliticalParty":"NUP","CandidatePoliticalPartyName":"National Unity and Reconciliation Party (NURP)","CandidatePoliticalPartyColor":"","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/male-blank-profile-photo.png"},{"SLEOP_ID":"9379","Candidate_SLEOP_ID":"7953","ElectionDate":"2018-07-03","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"11174","PollingCentreName":"Town Barray, Jomborhun Town, Jomborhun","PollingCentreDistrict":"Bo","PollingCentreConstituency":"Constituency 081","PollingCentreWard":"Ward 291","CandidateSurname":"Sandy","CandidateFirstName":"Jonathan","CandidatePoliticalParty":"NUP","CandidatePoliticalPartyName":"National Unity and Reconciliation Party (NURP)","CandidatePoliticalPartyColor":"","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/male-blank-profile-photo.png"},{"SLEOP_ID":"9378","Candidate_SLEOP_ID":"7885","ElectionDate":"2018-07-03","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"11229","PollingCentreName":"N/A Court BarrayY, Komboya Town, Komboya","PollingCentreDistrict":"Bo","PollingCentreConstituency":"Constituency 082","PollingCentreWard":"Ward 298","CandidateSurname":"Williams","CandidateFirstName":"Beresford ","CandidatePoliticalParty":"RNIP","CandidatePoliticalPartyName":"Republic National Independent Party (RNIP)","CandidatePoliticalPartyColor":"","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/male-blank-profile-photo.png"},{"SLEOP_ID":"9377","Candidate_SLEOP_ID":"7885","ElectionDate":"2018-07-03","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"11214","PollingCentreName":"Ansaru Prim. Sch., Bouma Village, Bouma","PollingCentreDistrict":"Bo","PollingCentreConstituency":"Constituency 083","PollingCentreWard":"Ward 296","CandidateSurname":"Williams","CandidateFirstName":"Beresford ","CandidatePoliticalParty":"RNIP","CandidatePoliticalPartyName":"Republic National Independent Party (RNIP)","CandidatePoliticalPartyColor":"","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/male-blank-profile-photo.png"},{"SLEOP_ID":"9376","Candidate_SLEOP_ID":"7885","ElectionDate":"2018-07-03","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"11207","PollingCentreName":"N/A Court Barray, Baoma Town, Baoma Old Town","PollingCentreDistrict":"Bo","PollingCentreConstituency":"Constituency 082","PollingCentreWard":"Ward 295","CandidateSurname":"Williams","CandidateFirstName":"Beresford ","CandidatePoliticalParty":"RNIP","CandidatePoliticalPartyName":"Republic National Independent Party (RNIP)","CandidatePoliticalPartyColor":"","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/male-blank-profile-photo.png"},{"SLEOP_ID":"9375","Candidate_SLEOP_ID":"7885","ElectionDate":"2018-07-03","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"11199","PollingCentreName":"N/A Court Barray, Kpumbu Village, Kpumbu","PollingCentreDistrict":"Bo","PollingCentreConstituency":"Constituency 082","PollingCentreWard":"Ward 294","CandidateSurname":"Williams","CandidateFirstName":"Beresford ","CandidatePoliticalParty":"RNIP","CandidatePoliticalPartyName":"Republic National Independent Party (RNIP)","CandidatePoliticalPartyColor":"","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/male-blank-profile-photo.png"},{"SLEOP_ID":"9374","Candidate_SLEOP_ID":"7885","ElectionDate":"2018-07-03","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"11190","PollingCentreName":"Open Space, Kommende","PollingCentreDistrict":"Bo","PollingCentreConstituency":"Constituency 082","PollingCentreWard":"Ward 293","CandidateSurname":"Williams","CandidateFirstName":"Beresford ","CandidatePoliticalParty":"RNIP","CandidatePoliticalPartyName":"Republic National Independent Party (RNIP)","CandidatePoliticalPartyColor":"","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/male-blank-profile-photo.png"},{"SLEOP_ID":"9373","Candidate_SLEOP_ID":"7885","ElectionDate":"2018-07-03","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"11181","PollingCentreName":"Town Barray, Loowoma Town, Loowoma","PollingCentreDistrict":"Bo","PollingCentreConstituency":"Constituency 081","PollingCentreWard":"Ward 292","CandidateSurname":"Williams","CandidateFirstName":"Beresford ","CandidatePoliticalParty":"RNIP","CandidatePoliticalPartyName":"Republic National Independent Party (RNIP)","CandidatePoliticalPartyColor":"","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/male-blank-profile-photo.png"},{"SLEOP_ID":"9372","Candidate_SLEOP_ID":"7885","ElectionDate":"2018-07-03","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"11174","PollingCentreName":"Town Barray, Jomborhun Town, Jomborhun","PollingCentreDistrict":"Bo","PollingCentreConstituency":"Constituency 081","PollingCentreWard":"Ward 291","CandidateSurname":"Williams","CandidateFirstName":"Beresford ","CandidatePoliticalParty":"RNIP","CandidatePoliticalPartyName":"Republic National Independent Party (RNIP)","CandidatePoliticalPartyColor":"","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/male-blank-profile-photo.png"},{"SLEOP_ID":"9371","Candidate_SLEOP_ID":"74","ElectionDate":"2018-07-03","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"11229","PollingCentreName":"N/A Court BarrayY, Komboya Town, Komboya","PollingCentreDistrict":"Bo","PollingCentreConstituency":"Constituency 082","PollingCentreWard":"Ward 298","CandidateSurname":"Yumkella","CandidateFirstName":"Kandeh ","CandidatePoliticalParty":"NGC","CandidatePoliticalPartyName":"National Grand Coalition (NGC)","CandidatePoliticalPartyColor":"Red, green, blue,black, gold,white","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/dr-kandeh-yumkella.jpg"},{"SLEOP_ID":"9370","Candidate_SLEOP_ID":"74","ElectionDate":"2018-07-03","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"11214","PollingCentreName":"Ansaru Prim. Sch., Bouma Village, Bouma","PollingCentreDistrict":"Bo","PollingCentreConstituency":"Constituency 083","PollingCentreWard":"Ward 296","CandidateSurname":"Yumkella","CandidateFirstName":"Kandeh ","CandidatePoliticalParty":"NGC","CandidatePoliticalPartyName":"National Grand Coalition (NGC)","CandidatePoliticalPartyColor":"Red, green, blue,black, gold,white","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/dr-kandeh-yumkella.jpg"},{"SLEOP_ID":"9369","Candidate_SLEOP_ID":"74","ElectionDate":"2018-07-03","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"11207","PollingCentreName":"N/A Court Barray, Baoma Town, Baoma Old Town","PollingCentreDistrict":"Bo","PollingCentreConstituency":"Constituency 082","PollingCentreWard":"Ward 295","CandidateSurname":"Yumkella","CandidateFirstName":"Kandeh ","CandidatePoliticalParty":"NGC","CandidatePoliticalPartyName":"National Grand Coalition (NGC)","CandidatePoliticalPartyColor":"Red, green, blue,black, gold,white","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/dr-kandeh-yumkella.jpg"},{"SLEOP_ID":"9368","Candidate_SLEOP_ID":"74","ElectionDate":"2018-07-03","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"11199","PollingCentreName":"N/A Court Barray, Kpumbu Village, Kpumbu","PollingCentreDistrict":"Bo","PollingCentreConstituency":"Constituency 082","PollingCentreWard":"Ward 294","CandidateSurname":"Yumkella","CandidateFirstName":"Kandeh ","CandidatePoliticalParty":"NGC","CandidatePoliticalPartyName":"National Grand Coalition (NGC)","CandidatePoliticalPartyColor":"Red, green, blue,black, gold,white","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/dr-kandeh-yumkella.jpg"},{"SLEOP_ID":"9367","Candidate_SLEOP_ID":"74","ElectionDate":"2018-07-03","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"11190","PollingCentreName":"Open Space, Kommende","PollingCentreDistrict":"Bo","PollingCentreConstituency":"Constituency 082","PollingCentreWard":"Ward 293","CandidateSurname":"Yumkella","CandidateFirstName":"Kandeh ","CandidatePoliticalParty":"NGC","CandidatePoliticalPartyName":"National Grand Coalition (NGC)","CandidatePoliticalPartyColor":"Red, green, blue,black, gold,white","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/dr-kandeh-yumkella.jpg"},{"SLEOP_ID":"9366","Candidate_SLEOP_ID":"74","ElectionDate":"2018-07-03","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"11181","PollingCentreName":"Town Barray, Loowoma Town, Loowoma","PollingCentreDistrict":"Bo","PollingCentreConstituency":"Constituency 081","PollingCentreWard":"Ward 292","CandidateSurname":"Yumkella","CandidateFirstName":"Kandeh ","CandidatePoliticalParty":"NGC","CandidatePoliticalPartyName":"National Grand Coalition (NGC)","CandidatePoliticalPartyColor":"Red, green, blue,black, gold,white","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/dr-kandeh-yumkella.jpg"},{"SLEOP_ID":"9365","Candidate_SLEOP_ID":"74","ElectionDate":"2018-07-03","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"11174","PollingCentreName":"Town Barray, Jomborhun Town, Jomborhun","PollingCentreDistrict":"Bo","PollingCentreConstituency":"Constituency 081","PollingCentreWard":"Ward 291","CandidateSurname":"Yumkella","CandidateFirstName":"Kandeh ","CandidatePoliticalParty":"NGC","CandidatePoliticalPartyName":"National Grand Coalition (NGC)","CandidatePoliticalPartyColor":"Red, green, blue,black, gold,white","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/dr-kandeh-yumkella.jpg"},{"SLEOP_ID":"9364","Candidate_SLEOP_ID":"7888","ElectionDate":"2018-07-03","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"11229","PollingCentreName":"N/A Court BarrayY, Komboya Town, Komboya","PollingCentreDistrict":"Bo","PollingCentreConstituency":"Constituency 082","PollingCentreWard":"Ward 298","CandidateSurname":"Kabuta","CandidateFirstName":"Henry","CandidatePoliticalParty":"UNPP","CandidatePoliticalPartyName":"United National Peoples party (UNPP)","CandidatePoliticalPartyColor":"Yellow","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/henry-saa-kabuta.jpg"},{"SLEOP_ID":"9363","Candidate_SLEOP_ID":"7888","ElectionDate":"2018-07-03","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"11214","PollingCentreName":"Ansaru Prim. Sch., Bouma Village, Bouma","PollingCentreDistrict":"Bo","PollingCentreConstituency":"Constituency 083","PollingCentreWard":"Ward 296","CandidateSurname":"Kabuta","CandidateFirstName":"Henry","CandidatePoliticalParty":"UNPP","CandidatePoliticalPartyName":"United National Peoples party (UNPP)","CandidatePoliticalPartyColor":"Yellow","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/henry-saa-kabuta.jpg"},{"SLEOP_ID":"9362","Candidate_SLEOP_ID":"7888","ElectionDate":"2018-07-03","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"11207","PollingCentreName":"N/A Court Barray, Baoma Town, Baoma Old Town","PollingCentreDistrict":"Bo","PollingCentreConstituency":"Constituency 082","PollingCentreWard":"Ward 295","CandidateSurname":"Kabuta","CandidateFirstName":"Henry","CandidatePoliticalParty":"UNPP","CandidatePoliticalPartyName":"United National Peoples party (UNPP)","CandidatePoliticalPartyColor":"Yellow","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/henry-saa-kabuta.jpg"},{"SLEOP_ID":"9361","Candidate_SLEOP_ID":"7888","ElectionDate":"2018-07-03","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"11199","PollingCentreName":"N/A Court Barray, Kpumbu Village, Kpumbu","PollingCentreDistrict":"Bo","PollingCentreConstituency":"Constituency 082","PollingCentreWard":"Ward 294","CandidateSurname":"Kabuta","CandidateFirstName":"Henry","CandidatePoliticalParty":"UNPP","CandidatePoliticalPartyName":"United National Peoples party (UNPP)","CandidatePoliticalPartyColor":"Yellow","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/henry-saa-kabuta.jpg"},{"SLEOP_ID":"9360","Candidate_SLEOP_ID":"7888","ElectionDate":"2018-07-03","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"11190","PollingCentreName":"Open Space, Kommende","PollingCentreDistrict":"Bo","PollingCentreConstituency":"Constituency 082","PollingCentreWard":"Ward 293","CandidateSurname":"Kabuta","CandidateFirstName":"Henry","CandidatePoliticalParty":"UNPP","CandidatePoliticalPartyName":"United National Peoples party (UNPP)","CandidatePoliticalPartyColor":"Yellow","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/henry-saa-kabuta.jpg"},{"SLEOP_ID":"9359","Candidate_SLEOP_ID":"7888","ElectionDate":"2018-07-03","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"11181","PollingCentreName":"Town Barray, Loowoma Town, Loowoma","PollingCentreDistrict":"Bo","PollingCentreConstituency":"Constituency 081","PollingCentreWard":"Ward 292","CandidateSurname":"Kabuta","CandidateFirstName":"Henry","CandidatePoliticalParty":"UNPP","CandidatePoliticalPartyName":"United National Peoples party (UNPP)","CandidatePoliticalPartyColor":"Yellow","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/henry-saa-kabuta.jpg"},{"SLEOP_ID":"9358","Candidate_SLEOP_ID":"7888","ElectionDate":"2018-07-03","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"11174","PollingCentreName":"Town Barray, Jomborhun Town, Jomborhun","PollingCentreDistrict":"Bo","PollingCentreConstituency":"Constituency 081","PollingCentreWard":"Ward 291","CandidateSurname":"Kabuta","CandidateFirstName":"Henry","CandidatePoliticalParty":"UNPP","CandidatePoliticalPartyName":"United National Peoples party (UNPP)","CandidatePoliticalPartyColor":"Yellow","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/henry-saa-kabuta.jpg"},{"SLEOP_ID":"9357","Candidate_SLEOP_ID":"7887","ElectionDate":"2018-07-03","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"11229","PollingCentreName":"N/A Court BarrayY, Komboya Town, Komboya","PollingCentreDistrict":"Bo","PollingCentreConstituency":"Constituency 082","PollingCentreWard":"Ward 298","CandidateSurname":"Sowa ","CandidateFirstName":"Mohamed  ","CandidatePoliticalParty":"UDM","CandidatePoliticalPartyName":"United Democratic Movement (UDM)","CandidatePoliticalPartyColor":"Purple","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-turay-sowa.png"},{"SLEOP_ID":"9356","Candidate_SLEOP_ID":"7887","ElectionDate":"2018-07-03","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"11214","PollingCentreName":"Ansaru Prim. Sch., Bouma Village, Bouma","PollingCentreDistrict":"Bo","PollingCentreConstituency":"Constituency 083","PollingCentreWard":"Ward 296","CandidateSurname":"Sowa ","CandidateFirstName":"Mohamed  ","CandidatePoliticalParty":"UDM","CandidatePoliticalPartyName":"United Democratic Movement (UDM)","CandidatePoliticalPartyColor":"Purple","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-turay-sowa.png"},{"SLEOP_ID":"9355","Candidate_SLEOP_ID":"7887","ElectionDate":"2018-07-03","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"11207","PollingCentreName":"N/A Court Barray, Baoma Town, Baoma Old Town","PollingCentreDistrict":"Bo","PollingCentreConstituency":"Constituency 082","PollingCentreWard":"Ward 295","CandidateSurname":"Sowa ","CandidateFirstName":"Mohamed  ","CandidatePoliticalParty":"UDM","CandidatePoliticalPartyName":"United Democratic Movement (UDM)","CandidatePoliticalPartyColor":"Purple","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-turay-sowa.png"},{"SLEOP_ID":"9354","Candidate_SLEOP_ID":"7887","ElectionDate":"2018-07-03","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"11199","PollingCentreName":"N/A Court Barray, Kpumbu Village, Kpumbu","PollingCentreDistrict":"Bo","PollingCentreConstituency":"Constituency 082","PollingCentreWard":"Ward 294","CandidateSurname":"Sowa ","CandidateFirstName":"Mohamed  ","CandidatePoliticalParty":"UDM","CandidatePoliticalPartyName":"United Democratic Movement (UDM)","CandidatePoliticalPartyColor":"Purple","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-turay-sowa.png"},{"SLEOP_ID":"9353","Candidate_SLEOP_ID":"7887","ElectionDate":"2018-07-03","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"11190","PollingCentreName":"Open Space, Kommende","PollingCentreDistrict":"Bo","PollingCentreConstituency":"Constituency 082","PollingCentreWard":"Ward 293","CandidateSurname":"Sowa ","CandidateFirstName":"Mohamed  ","CandidatePoliticalParty":"UDM","CandidatePoliticalPartyName":"United Democratic Movement (UDM)","CandidatePoliticalPartyColor":"Purple","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-turay-sowa.png"},{"SLEOP_ID":"9352","Candidate_SLEOP_ID":"7887","ElectionDate":"2018-07-03","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"11181","PollingCentreName":"Town Barray, Loowoma Town, Loowoma","PollingCentreDistrict":"Bo","PollingCentreConstituency":"Constituency 081","PollingCentreWard":"Ward 292","CandidateSurname":"Sowa ","CandidateFirstName":"Mohamed  ","CandidatePoliticalParty":"UDM","CandidatePoliticalPartyName":"United Democratic Movement (UDM)","CandidatePoliticalPartyColor":"Purple","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-turay-sowa.png"},{"SLEOP_ID":"9351","Candidate_SLEOP_ID":"7887","ElectionDate":"2018-07-03","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"11174","PollingCentreName":"Town Barray, Jomborhun Town, Jomborhun","PollingCentreDistrict":"Bo","PollingCentreConstituency":"Constituency 081","PollingCentreWard":"Ward 291","CandidateSurname":"Sowa ","CandidateFirstName":"Mohamed  ","CandidatePoliticalParty":"UDM","CandidatePoliticalPartyName":"United Democratic Movement (UDM)","CandidatePoliticalPartyColor":"Purple","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-turay-sowa.png"},{"SLEOP_ID":"9350","Candidate_SLEOP_ID":"7","ElectionDate":"2018-07-03","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"11229","PollingCentreName":"N/A Court BarrayY, Komboya Town, Komboya","PollingCentreDistrict":"Bo","PollingCentreConstituency":"Constituency 082","PollingCentreWard":"Ward 298","CandidateSurname":"Bio","CandidateFirstName":"Julius","CandidatePoliticalParty":"SLPP","CandidatePoliticalPartyName":"Sierra Leone Peoples Party (SLPP)","CandidatePoliticalPartyColor":"008000","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/julius-maada-bio.jpg"},{"SLEOP_ID":"9349","Candidate_SLEOP_ID":"7","ElectionDate":"2018-07-03","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"11214","PollingCentreName":"Ansaru Prim. Sch., Bouma Village, Bouma","PollingCentreDistrict":"Bo","PollingCentreConstituency":"Constituency 083","PollingCentreWard":"Ward 296","CandidateSurname":"Bio","CandidateFirstName":"Julius","CandidatePoliticalParty":"SLPP","CandidatePoliticalPartyName":"Sierra Leone Peoples Party (SLPP)","CandidatePoliticalPartyColor":"008000","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/julius-maada-bio.jpg"},{"SLEOP_ID":"9348","Candidate_SLEOP_ID":"7","ElectionDate":"2018-07-03","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"11207","PollingCentreName":"N/A Court Barray, Baoma Town, Baoma Old Town","PollingCentreDistrict":"Bo","PollingCentreConstituency":"Constituency 082","PollingCentreWard":"Ward 295","CandidateSurname":"Bio","CandidateFirstName":"Julius","CandidatePoliticalParty":"SLPP","CandidatePoliticalPartyName":"Sierra Leone Peoples Party (SLPP)","CandidatePoliticalPartyColor":"008000","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/julius-maada-bio.jpg"},{"SLEOP_ID":"9347","Candidate_SLEOP_ID":"7","ElectionDate":"2018-07-03","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"11199","PollingCentreName":"N/A Court Barray, Kpumbu Village, Kpumbu","PollingCentreDistrict":"Bo","PollingCentreConstituency":"Constituency 082","PollingCentreWard":"Ward 294","CandidateSurname":"Bio","CandidateFirstName":"Julius","CandidatePoliticalParty":"SLPP","CandidatePoliticalPartyName":"Sierra Leone Peoples Party (SLPP)","CandidatePoliticalPartyColor":"008000","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/julius-maada-bio.jpg"},{"SLEOP_ID":"9346","Candidate_SLEOP_ID":"7","ElectionDate":"2018-07-03","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"11190","PollingCentreName":"Open Space, Kommende","PollingCentreDistrict":"Bo","PollingCentreConstituency":"Constituency 082","PollingCentreWard":"Ward 293","CandidateSurname":"Bio","CandidateFirstName":"Julius","CandidatePoliticalParty":"SLPP","CandidatePoliticalPartyName":"Sierra Leone Peoples Party (SLPP)","CandidatePoliticalPartyColor":"008000","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/julius-maada-bio.jpg"},{"SLEOP_ID":"9345","Candidate_SLEOP_ID":"7","ElectionDate":"2018-07-03","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"11181","PollingCentreName":"Town Barray, Loowoma Town, Loowoma","PollingCentreDistrict":"Bo","PollingCentreConstituency":"Constituency 081","PollingCentreWard":"Ward 292","CandidateSurname":"Bio","CandidateFirstName":"Julius","CandidatePoliticalParty":"SLPP","CandidatePoliticalPartyName":"Sierra Leone Peoples Party (SLPP)","CandidatePoliticalPartyColor":"008000","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/julius-maada-bio.jpg"},{"SLEOP_ID":"9344","Candidate_SLEOP_ID":"7","ElectionDate":"2018-07-03","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"11174","PollingCentreName":"Town Barray, Jomborhun Town, Jomborhun","PollingCentreDistrict":"Bo","PollingCentreConstituency":"Constituency 081","PollingCentreWard":"Ward 291","CandidateSurname":"Bio","CandidateFirstName":"Julius","CandidatePoliticalParty":"SLPP","CandidatePoliticalPartyName":"Sierra Leone Peoples Party (SLPP)","CandidatePoliticalPartyColor":"008000","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/julius-maada-bio.jpg"},{"SLEOP_ID":"9343","Candidate_SLEOP_ID":"7886","ElectionDate":"2018-07-03","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"11229","PollingCentreName":"N/A Court BarrayY, Komboya Town, Komboya","PollingCentreDistrict":"Bo","PollingCentreConstituency":"Constituency 082","PollingCentreWard":"Ward 298","CandidateSurname":"Ngobeh","CandidateFirstName":"Gbandi","CandidatePoliticalParty":"RUFP","CandidatePoliticalPartyName":"Revolutionary United Front Party (RUFP)","CandidatePoliticalPartyColor":"","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/gbandi-jemba-ngobeh.jpg"},{"SLEOP_ID":"9342","Candidate_SLEOP_ID":"7886","ElectionDate":"2018-07-03","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"11214","PollingCentreName":"Ansaru Prim. Sch., Bouma Village, Bouma","PollingCentreDistrict":"Bo","PollingCentreConstituency":"Constituency 083","PollingCentreWard":"Ward 296","CandidateSurname":"Ngobeh","CandidateFirstName":"Gbandi","CandidatePoliticalParty":"RUFP","CandidatePoliticalPartyName":"Revolutionary United Front Party (RUFP)","CandidatePoliticalPartyColor":"","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/gbandi-jemba-ngobeh.jpg"},{"SLEOP_ID":"9341","Candidate_SLEOP_ID":"7886","ElectionDate":"2018-07-03","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"11207","PollingCentreName":"N/A Court Barray, Baoma Town, Baoma Old Town","PollingCentreDistrict":"Bo","PollingCentreConstituency":"Constituency 082","PollingCentreWard":"Ward 295","CandidateSurname":"Ngobeh","CandidateFirstName":"Gbandi","CandidatePoliticalParty":"RUFP","CandidatePoliticalPartyName":"Revolutionary United Front Party (RUFP)","CandidatePoliticalPartyColor":"","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/gbandi-jemba-ngobeh.jpg"},{"SLEOP_ID":"9340","Candidate_SLEOP_ID":"7886","ElectionDate":"2018-07-03","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"11199","PollingCentreName":"N/A Court Barray, Kpumbu Village, Kpumbu","PollingCentreDistrict":"Bo","PollingCentreConstituency":"Constituency 082","PollingCentreWard":"Ward 294","CandidateSurname":"Ngobeh","CandidateFirstName":"Gbandi","CandidatePoliticalParty":"RUFP","CandidatePoliticalPartyName":"Revolutionary United Front Party (RUFP)","CandidatePoliticalPartyColor":"","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/gbandi-jemba-ngobeh.jpg"},{"SLEOP_ID":"9339","Candidate_SLEOP_ID":"7886","ElectionDate":"2018-07-03","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"11190","PollingCentreName":"Open Space, Kommende","PollingCentreDistrict":"Bo","PollingCentreConstituency":"Constituency 082","PollingCentreWard":"Ward 293","CandidateSurname":"Ngobeh","CandidateFirstName":"Gbandi","CandidatePoliticalParty":"RUFP","CandidatePoliticalPartyName":"Revolutionary United Front Party (RUFP)","CandidatePoliticalPartyColor":"","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/gbandi-jemba-ngobeh.jpg"},{"SLEOP_ID":"9338","Candidate_SLEOP_ID":"7886","ElectionDate":"2018-07-03","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"11181","PollingCentreName":"Town Barray, Loowoma Town, Loowoma","PollingCentreDistrict":"Bo","PollingCentreConstituency":"Constituency 081","PollingCentreWard":"Ward 292","CandidateSurname":"Ngobeh","CandidateFirstName":"Gbandi","CandidatePoliticalParty":"RUFP","CandidatePoliticalPartyName":"Revolutionary United Front Party (RUFP)","CandidatePoliticalPartyColor":"","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/gbandi-jemba-ngobeh.jpg"},{"SLEOP_ID":"9337","Candidate_SLEOP_ID":"7886","ElectionDate":"2018-07-03","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"11174","PollingCentreName":"Town Barray, Jomborhun Town, Jomborhun","PollingCentreDistrict":"Bo","PollingCentreConstituency":"Constituency 081","PollingCentreWard":"Ward 291","CandidateSurname":"Ngobeh","CandidateFirstName":"Gbandi","CandidatePoliticalParty":"RUFP","CandidatePoliticalPartyName":"Revolutionary United Front Party (RUFP)","CandidatePoliticalPartyColor":"","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/gbandi-jemba-ngobeh.jpg"},{"SLEOP_ID":"9336","Candidate_SLEOP_ID":"51","ElectionDate":"2018-07-03","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"11229","PollingCentreName":"N/A Court BarrayY, Komboya Town, Komboya","PollingCentreDistrict":"Bo","PollingCentreConstituency":"Constituency 082","PollingCentreWard":"Ward 298","CandidateSurname":"Margai","CandidateFirstName":"Charles","CandidatePoliticalParty":"PMDC","CandidatePoliticalPartyName":"Peoples Movement for Democratic Change (PMDC)","CandidatePoliticalPartyColor":"Green, Orange","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/charles-francis-margai_0.jpg"},{"SLEOP_ID":"9335","Candidate_SLEOP_ID":"51","ElectionDate":"2018-07-03","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"11214","PollingCentreName":"Ansaru Prim. Sch., Bouma Village, Bouma","PollingCentreDistrict":"Bo","PollingCentreConstituency":"Constituency 083","PollingCentreWard":"Ward 296","CandidateSurname":"Margai","CandidateFirstName":"Charles","CandidatePoliticalParty":"PMDC","CandidatePoliticalPartyName":"Peoples Movement for Democratic Change (PMDC)","CandidatePoliticalPartyColor":"Green, Orange","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/charles-francis-margai_0.jpg"},{"SLEOP_ID":"9334","Candidate_SLEOP_ID":"51","ElectionDate":"2018-07-03","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"11207","PollingCentreName":"N/A Court Barray, Baoma Town, Baoma Old Town","PollingCentreDistrict":"Bo","PollingCentreConstituency":"Constituency 082","PollingCentreWard":"Ward 295","CandidateSurname":"Margai","CandidateFirstName":"Charles","CandidatePoliticalParty":"PMDC","CandidatePoliticalPartyName":"Peoples Movement for Democratic Change (PMDC)","CandidatePoliticalPartyColor":"Green, Orange","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/charles-francis-margai_0.jpg"},{"SLEOP_ID":"9333","Candidate_SLEOP_ID":"51","ElectionDate":"2018-07-03","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"11199","PollingCentreName":"N/A Court Barray, Kpumbu Village, Kpumbu","PollingCentreDistrict":"Bo","PollingCentreConstituency":"Constituency 082","PollingCentreWard":"Ward 294","CandidateSurname":"Margai","CandidateFirstName":"Charles","CandidatePoliticalParty":"PMDC","CandidatePoliticalPartyName":"Peoples Movement for Democratic Change (PMDC)","CandidatePoliticalPartyColor":"Green, Orange","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/charles-francis-margai_0.jpg"},{"SLEOP_ID":"9332","Candidate_SLEOP_ID":"51","ElectionDate":"2018-07-03","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"11190","PollingCentreName":"Open Space, Kommende","PollingCentreDistrict":"Bo","PollingCentreConstituency":"Constituency 082","PollingCentreWard":"Ward 293","CandidateSurname":"Margai","CandidateFirstName":"Charles","CandidatePoliticalParty":"PMDC","CandidatePoliticalPartyName":"Peoples Movement for Democratic Change (PMDC)","CandidatePoliticalPartyColor":"Green, Orange","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/charles-francis-margai_0.jpg"},{"SLEOP_ID":"9331","Candidate_SLEOP_ID":"51","ElectionDate":"2018-07-03","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"11181","PollingCentreName":"Town Barray, Loowoma Town, Loowoma","PollingCentreDistrict":"Bo","PollingCentreConstituency":"Constituency 081","PollingCentreWard":"Ward 292","CandidateSurname":"Margai","CandidateFirstName":"Charles","CandidatePoliticalParty":"PMDC","CandidatePoliticalPartyName":"Peoples Movement for Democratic Change (PMDC)","CandidatePoliticalPartyColor":"Green, Orange","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/charles-francis-margai_0.jpg"},{"SLEOP_ID":"9330","Candidate_SLEOP_ID":"51","ElectionDate":"2018-07-03","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"11174","PollingCentreName":"Town Barray, Jomborhun Town, Jomborhun","PollingCentreDistrict":"Bo","PollingCentreConstituency":"Constituency 081","PollingCentreWard":"Ward 291","CandidateSurname":"Margai","CandidateFirstName":"Charles","CandidatePoliticalParty":"PMDC","CandidatePoliticalPartyName":"Peoples Movement for Democratic Change (PMDC)","CandidatePoliticalPartyColor":"Green, Orange","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/charles-francis-margai_0.jpg"},{"SLEOP_ID":"9329","Candidate_SLEOP_ID":"7883","ElectionDate":"2018-07-03","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"11229","PollingCentreName":"N/A Court BarrayY, Komboya Town, Komboya","PollingCentreDistrict":"Bo","PollingCentreConstituency":"Constituency 082","PollingCentreWard":"Ward 298","CandidateSurname":"Conteh","CandidateFirstName":"Kandeh ","CandidatePoliticalParty":"PLP","CandidatePoliticalPartyName":"Peace and Liberation Party (PLP)","CandidatePoliticalPartyColor":"Blue","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/dr-baba-kandeh.jpg"},{"SLEOP_ID":"9328","Candidate_SLEOP_ID":"7883","ElectionDate":"2018-07-03","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"11214","PollingCentreName":"Ansaru Prim. Sch., Bouma Village, Bouma","PollingCentreDistrict":"Bo","PollingCentreConstituency":"Constituency 083","PollingCentreWard":"Ward 296","CandidateSurname":"Conteh","CandidateFirstName":"Kandeh ","CandidatePoliticalParty":"PLP","CandidatePoliticalPartyName":"Peace and Liberation Party (PLP)","CandidatePoliticalPartyColor":"Blue","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/dr-baba-kandeh.jpg"},{"SLEOP_ID":"9327","Candidate_SLEOP_ID":"7883","ElectionDate":"2018-07-03","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"11207","PollingCentreName":"N/A Court Barray, Baoma Town, Baoma Old Town","PollingCentreDistrict":"Bo","PollingCentreConstituency":"Constituency 082","PollingCentreWard":"Ward 295","CandidateSurname":"Conteh","CandidateFirstName":"Kandeh ","CandidatePoliticalParty":"PLP","CandidatePoliticalPartyName":"Peace and Liberation Party (PLP)","CandidatePoliticalPartyColor":"Blue","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/dr-baba-kandeh.jpg"},{"SLEOP_ID":"9326","Candidate_SLEOP_ID":"7883","ElectionDate":"2018-07-03","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"11199","PollingCentreName":"N/A Court Barray, Kpumbu Village, Kpumbu","PollingCentreDistrict":"Bo","PollingCentreConstituency":"Constituency 082","PollingCentreWard":"Ward 294","CandidateSurname":"Conteh","CandidateFirstName":"Kandeh ","CandidatePoliticalParty":"PLP","CandidatePoliticalPartyName":"Peace and Liberation Party (PLP)","CandidatePoliticalPartyColor":"Blue","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/dr-baba-kandeh.jpg"},{"SLEOP_ID":"9325","Candidate_SLEOP_ID":"7883","ElectionDate":"2018-07-03","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"11190","PollingCentreName":"Open Space, Kommende","PollingCentreDistrict":"Bo","PollingCentreConstituency":"Constituency 082","PollingCentreWard":"Ward 293","CandidateSurname":"Conteh","CandidateFirstName":"Kandeh ","CandidatePoliticalParty":"PLP","CandidatePoliticalPartyName":"Peace and Liberation Party (PLP)","CandidatePoliticalPartyColor":"Blue","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/dr-baba-kandeh.jpg"},{"SLEOP_ID":"9324","Candidate_SLEOP_ID":"7883","ElectionDate":"2018-07-03","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"11190","PollingCentreName":"Open Space, Kommende","PollingCentreDistrict":"Bo","PollingCentreConstituency":"Constituency 082","PollingCentreWard":"Ward 293","CandidateSurname":"Conteh","CandidateFirstName":"Kandeh ","CandidatePoliticalParty":"PLP","CandidatePoliticalPartyName":"Peace and Liberation Party (PLP)","CandidatePoliticalPartyColor":"Blue","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/dr-baba-kandeh.jpg"},{"SLEOP_ID":"9323","Candidate_SLEOP_ID":"7883","ElectionDate":"2018-07-03","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"11190","PollingCentreName":"Open Space, Kommende","PollingCentreDistrict":"Bo","PollingCentreConstituency":"Constituency 082","PollingCentreWard":"Ward 293","CandidateSurname":"Conteh","CandidateFirstName":"Kandeh ","CandidatePoliticalParty":"PLP","CandidatePoliticalPartyName":"Peace and Liberation Party (PLP)","CandidatePoliticalPartyColor":"Blue","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/dr-baba-kandeh.jpg"},{"SLEOP_ID":"9322","Candidate_SLEOP_ID":"7883","ElectionDate":"2018-07-03","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"11181","PollingCentreName":"Town Barray, Loowoma Town, Loowoma","PollingCentreDistrict":"Bo","PollingCentreConstituency":"Constituency 081","PollingCentreWard":"Ward 292","CandidateSurname":"Conteh","CandidateFirstName":"Kandeh ","CandidatePoliticalParty":"PLP","CandidatePoliticalPartyName":"Peace and Liberation Party (PLP)","CandidatePoliticalPartyColor":"Blue","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/dr-baba-kandeh.jpg"},{"SLEOP_ID":"9321","Candidate_SLEOP_ID":"7883","ElectionDate":"2018-07-03","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"11174","PollingCentreName":"Town Barray, Jomborhun Town, Jomborhun","PollingCentreDistrict":"Bo","PollingCentreConstituency":"Constituency 081","PollingCentreWard":"Ward 291","CandidateSurname":"Conteh","CandidateFirstName":"Kandeh ","CandidatePoliticalParty":"PLP","CandidatePoliticalPartyName":"Peace and Liberation Party (PLP)","CandidatePoliticalPartyColor":"Blue","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/dr-baba-kandeh.jpg"},{"SLEOP_ID":"9320","Candidate_SLEOP_ID":"7881","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"3015","PollingCentreName":"R.C Prim. Sch., Peya","PollingCentreDistrict":"Kono","PollingCentreConstituency":"Constituency 030","PollingCentreWard":"Ward 074","CandidateSurname":"Bah ","CandidateFirstName":"Mohamed C","CandidatePoliticalParty":"NDA","CandidatePoliticalPartyName":"National Democratic Alliance (NDA)","CandidatePoliticalPartyColor":"Green ","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-c-bah.jpg"},{"SLEOP_ID":"9319","Candidate_SLEOP_ID":"7881","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"3014","PollingCentreName":"N/A Barray, Teiko","PollingCentreDistrict":"Kono","PollingCentreConstituency":"Constituency 030","PollingCentreWard":"Ward 074","CandidateSurname":"Bah ","CandidateFirstName":"Mohamed C","CandidatePoliticalParty":"NDA","CandidatePoliticalPartyName":"National Democratic Alliance (NDA)","CandidatePoliticalPartyColor":"Green ","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-c-bah.jpg"},{"SLEOP_ID":"9317","Candidate_SLEOP_ID":"7881","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"3013","PollingCentreName":"N/A Barray, Sewafe","PollingCentreDistrict":"Kono","PollingCentreConstituency":"Constituency 030","PollingCentreWard":"Ward 074","CandidateSurname":"Bah ","CandidateFirstName":"Mohamed C","CandidatePoliticalParty":"NDA","CandidatePoliticalPartyName":"National Democratic Alliance (NDA)","CandidatePoliticalPartyColor":"Green ","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-c-bah.jpg"},{"SLEOP_ID":"9318","Candidate_SLEOP_ID":"7881","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"3012","PollingCentreName":"S.L.M.Y.C.O Prim. Sch.,Sewafe","PollingCentreDistrict":"Kono","PollingCentreConstituency":"Constituency 030","PollingCentreWard":"Ward 074","CandidateSurname":"Bah ","CandidateFirstName":"Mohamed C","CandidatePoliticalParty":"NDA","CandidatePoliticalPartyName":"National Democratic Alliance (NDA)","CandidatePoliticalPartyColor":"Green ","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-c-bah.jpg"},{"SLEOP_ID":"9316","Candidate_SLEOP_ID":"7881","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"3009","PollingCentreName":"Community Barray,Mattama","PollingCentreDistrict":"Kono","PollingCentreConstituency":"Constituency 030","PollingCentreWard":"Ward 074","CandidateSurname":"Bah ","CandidateFirstName":"Mohamed C","CandidatePoliticalParty":"NDA","CandidatePoliticalPartyName":"National Democratic Alliance (NDA)","CandidatePoliticalPartyColor":"Green ","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-c-bah.jpg"},{"SLEOP_ID":"9315","Candidate_SLEOP_ID":"7881","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"3011","PollingCentreName":"K.D.E.C Prim. Sch., Tembedu","PollingCentreDistrict":"Kono","PollingCentreConstituency":"Constituency 029","PollingCentreWard":"Ward 073","CandidateSurname":"Bah ","CandidateFirstName":"Mohamed C","CandidatePoliticalParty":"NDA","CandidatePoliticalPartyName":"National Democratic Alliance (NDA)","CandidatePoliticalPartyColor":"Green ","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-c-bah.jpg"},{"SLEOP_ID":"9314","Candidate_SLEOP_ID":"7881","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"3007","PollingCentreName":"S.D.A Prim. Sch.,Sandiya","PollingCentreDistrict":"Kono","PollingCentreConstituency":"Constituency 029","PollingCentreWard":"Ward 073","CandidateSurname":"Bah ","CandidateFirstName":"Mohamed C","CandidatePoliticalParty":"NDA","CandidatePoliticalPartyName":"National Democratic Alliance (NDA)","CandidatePoliticalPartyColor":"Green ","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-c-bah.jpg"},{"SLEOP_ID":"9313","Candidate_SLEOP_ID":"7881","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"3006","PollingCentreName":"Unfinished Building,Ndogboi","PollingCentreDistrict":"Kono","PollingCentreConstituency":"Constituency 029","PollingCentreWard":"Ward 073","CandidateSurname":"Bah ","CandidateFirstName":"Mohamed C","CandidatePoliticalParty":"NDA","CandidatePoliticalPartyName":"National Democratic Alliance (NDA)","CandidatePoliticalPartyColor":"Green ","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-c-bah.jpg"},{"SLEOP_ID":"9312","Candidate_SLEOP_ID":"7881","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"3005","PollingCentreName":"N/A Barray, Ngo Town","PollingCentreDistrict":"Kono","PollingCentreConstituency":"Constituency 029","PollingCentreWard":"Ward 073","CandidateSurname":"Bah ","CandidateFirstName":"Mohamed C","CandidatePoliticalParty":"NDA","CandidatePoliticalPartyName":"National Democratic Alliance (NDA)","CandidatePoliticalPartyColor":"Green ","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-c-bah.jpg"},{"SLEOP_ID":"9311","Candidate_SLEOP_ID":"7881","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"3004","PollingCentreName":"S.L.M.B Prim.,Bambakunaya","PollingCentreDistrict":"Kono","PollingCentreConstituency":"Constituency 029","PollingCentreWard":"Ward 073","CandidateSurname":"Bah ","CandidateFirstName":"Mohamed C","CandidatePoliticalParty":"NDA","CandidatePoliticalPartyName":"National Democratic Alliance (NDA)","CandidatePoliticalPartyColor":"Green ","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-c-bah.jpg"},{"SLEOP_ID":"9310","Candidate_SLEOP_ID":"7881","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"3003","PollingCentreName":"KDEC Primary School,Masabendu","PollingCentreDistrict":"Kono","PollingCentreConstituency":"Constituency 029","PollingCentreWard":"Ward 073","CandidateSurname":"Bah ","CandidateFirstName":"Mohamed C","CandidatePoliticalParty":"NDA","CandidatePoliticalPartyName":"National Democratic Alliance (NDA)","CandidatePoliticalPartyColor":"Green ","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-c-bah.jpg"},{"SLEOP_ID":"9309","Candidate_SLEOP_ID":"7881","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"3002","PollingCentreName":"Open Space,Kangama","PollingCentreDistrict":"Kono","PollingCentreConstituency":"Constituency 029","PollingCentreWard":"Ward 073","CandidateSurname":"Bah ","CandidateFirstName":"Mohamed C","CandidatePoliticalParty":"NDA","CandidatePoliticalPartyName":"National Democratic Alliance (NDA)","CandidatePoliticalPartyColor":"Green ","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-c-bah.jpg"},{"SLEOP_ID":"9308","Candidate_SLEOP_ID":"7881","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2337","PollingCentreName":"Ansarul sec.school, Gbo kakajama, Ansarul sec.sch.","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 020","PollingCentreWard":"Ward 072","CandidateSurname":"Bah ","CandidateFirstName":"Mohamed C","CandidatePoliticalParty":"NDA","CandidatePoliticalPartyName":"National Democratic Alliance (NDA)","CandidatePoliticalPartyColor":"Green ","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-c-bah.jpg"},{"SLEOP_ID":"9307","Candidate_SLEOP_ID":"7881","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2336","PollingCentreName":"College sec. sch.Combema Road, Gbo kakajama, Colle","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 020","PollingCentreWard":"Ward 072","CandidateSurname":"Bah ","CandidateFirstName":"Mohamed C","CandidatePoliticalParty":"NDA","CandidatePoliticalPartyName":"National Democratic Alliance (NDA)","CandidatePoliticalPartyColor":"Green ","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-c-bah.jpg"},{"SLEOP_ID":"9306","Candidate_SLEOP_ID":"7881","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2332","PollingCentreName":"25 Jenneh st. junction, Gbo- kakajama, Jenneh St.","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 019","PollingCentreWard":"Ward 071","CandidateSurname":"Bah ","CandidateFirstName":"Mohamed C","CandidatePoliticalParty":"NDA","CandidatePoliticalPartyName":"National Democratic Alliance (NDA)","CandidatePoliticalPartyColor":"Green ","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-c-bah.jpg"},{"SLEOP_ID":"9305","Candidate_SLEOP_ID":"7881","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2331","PollingCentreName":"S.L.C.-ST.James school, S.L.C-St. James mission rd","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 019","PollingCentreWard":"Ward 071","CandidateSurname":"Bah ","CandidateFirstName":"Mohamed C","CandidatePoliticalParty":"NDA","CandidatePoliticalPartyName":"National Democratic Alliance (NDA)","CandidatePoliticalPartyColor":"Green ","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-c-bah.jpg"},{"SLEOP_ID":"9304","Candidate_SLEOP_ID":"7881","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2330","PollingCentreName":"K.D.E.C. Primary school, Gbo- kakajama, K.D.E.C pr","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 019","PollingCentreWard":"Ward 071","CandidateSurname":"Bah ","CandidateFirstName":"Mohamed C","CandidatePoliticalParty":"NDA","CandidatePoliticalPartyName":"National Democratic Alliance (NDA)","CandidatePoliticalPartyColor":"Green ","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-c-bah.jpg"},{"SLEOP_ID":"9303","Candidate_SLEOP_ID":"7881","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2329","PollingCentreName":"Kankaly primary sch. Building, Gbo kakajama, Kanka","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 019","PollingCentreWard":"Ward 071","CandidateSurname":"Bah ","CandidateFirstName":"Mohamed C","CandidatePoliticalParty":"NDA","CandidatePoliticalPartyName":"National Democratic Alliance (NDA)","CandidatePoliticalPartyColor":"Green ","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-c-bah.jpg"},{"SLEOP_ID":"9302","Candidate_SLEOP_ID":"7881","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2328","PollingCentreName":"Assembly of God church, Gbo kakajama, Assembly of","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 019","PollingCentreWard":"Ward 071","CandidateSurname":"Bah ","CandidateFirstName":"Mohamed C","CandidatePoliticalParty":"NDA","CandidatePoliticalPartyName":"National Democratic Alliance (NDA)","CandidatePoliticalPartyColor":"Green ","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-c-bah.jpg"},{"SLEOP_ID":"9301","Candidate_SLEOP_ID":"7881","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2326","PollingCentreName":"Polytech Cateen, Gbo- kakajama, Polytech Cateen","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 019","PollingCentreWard":"Ward 070","CandidateSurname":"Bah ","CandidateFirstName":"Mohamed C","CandidatePoliticalParty":"NDA","CandidatePoliticalPartyName":"National Democratic Alliance (NDA)","CandidatePoliticalPartyColor":"Green ","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-c-bah.jpg"},{"SLEOP_ID":"9300","Candidate_SLEOP_ID":"7881","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2325","PollingCentreName":"Gov. hospital-under five clinic-keneme, Gbo- kakaj","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 019","PollingCentreWard":"Ward 070","CandidateSurname":"Bah ","CandidateFirstName":"Mohamed C","CandidatePoliticalParty":"NDA","CandidatePoliticalPartyName":"National Democratic Alliance (NDA)","CandidatePoliticalPartyColor":"Green ","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-c-bah.jpg"},{"SLEOP_ID":"9299","Candidate_SLEOP_ID":"7881","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2323","PollingCentreName":"Temporary Polling Structure,Duwai/kpoli street, Gb","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 019","PollingCentreWard":"Ward 070","CandidateSurname":"Bah ","CandidateFirstName":"Mohamed C","CandidatePoliticalParty":"NDA","CandidatePoliticalPartyName":"National Democratic Alliance (NDA)","CandidatePoliticalPartyColor":"Green ","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-c-bah.jpg"},{"SLEOP_ID":"9298","Candidate_SLEOP_ID":"7881","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2324","PollingCentreName":"Open space Massaquoi St.","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 019","PollingCentreWard":"Ward 070","CandidateSurname":"Bah ","CandidateFirstName":"Mohamed C","CandidatePoliticalParty":"NDA","CandidatePoliticalPartyName":"National Democratic Alliance (NDA)","CandidatePoliticalPartyColor":"Green ","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-c-bah.jpg"},{"SLEOP_ID":"9295","Candidate_SLEOP_ID":"7881","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2316","PollingCentreName":"Temporary Polling Structure, Abdulai St., Gbo- kak","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 019","PollingCentreWard":"Ward 069","CandidateSurname":"Bah ","CandidateFirstName":"Mohamed C","CandidatePoliticalParty":"NDA","CandidatePoliticalPartyName":"National Democratic Alliance (NDA)","CandidatePoliticalPartyColor":"Green ","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-c-bah.jpg"},{"SLEOP_ID":"9296","Candidate_SLEOP_ID":"7881","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2321","PollingCentreName":"K.D.C. Kapayama, Gbo Kakajama, K.D.C Kpayama","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 019","PollingCentreWard":"Ward 069","CandidateSurname":"Bah ","CandidateFirstName":"Mohamed C","CandidatePoliticalParty":"NDA","CandidatePoliticalPartyName":"National Democratic Alliance (NDA)","CandidatePoliticalPartyColor":"Green ","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-c-bah.jpg"},{"SLEOP_ID":"9294","Candidate_SLEOP_ID":"7881","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2314","PollingCentreName":"S.D.A. School compound, (A kpayamaSDA), S.D.A comp","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 019","PollingCentreWard":"Ward 068","CandidateSurname":"Bah ","CandidateFirstName":"Mohamed C","CandidatePoliticalParty":"NDA","CandidatePoliticalPartyName":"National Democratic Alliance (NDA)","CandidatePoliticalPartyColor":"Green ","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-c-bah.jpg"},{"SLEOP_ID":"9293","Candidate_SLEOP_ID":"7881","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2313","PollingCentreName":"HRSS School Compound, Gbo- Kakajama","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 019","PollingCentreWard":"Ward 068","CandidateSurname":"Bah ","CandidateFirstName":"Mohamed C","CandidatePoliticalParty":"NDA","CandidatePoliticalPartyName":"National Democratic Alliance (NDA)","CandidatePoliticalPartyColor":"Green ","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-c-bah.jpg"},{"SLEOP_ID":"9292","Candidate_SLEOP_ID":"7881","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2312","PollingCentreName":"Luke&#039;s Commercial sec. school, Torkpumbu II, Luke&#039;","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 019","PollingCentreWard":"Ward 068","CandidateSurname":"Bah ","CandidateFirstName":"Mohamed C","CandidatePoliticalParty":"NDA","CandidatePoliticalPartyName":"National Democratic Alliance (NDA)","CandidatePoliticalPartyColor":"Green ","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-c-bah.jpg"},{"SLEOP_ID":"9291","Candidate_SLEOP_ID":"7881","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2310","PollingCentreName":"Govt. sec. school building, Gbo Kakajama, Govt.sec","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 019","PollingCentreWard":"Ward 068","CandidateSurname":"Bah ","CandidateFirstName":"Mohamed C","CandidatePoliticalParty":"NDA","CandidatePoliticalPartyName":"National Democratic Alliance (NDA)","CandidatePoliticalPartyColor":"Green ","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-c-bah.jpg"},{"SLEOP_ID":"9290","Candidate_SLEOP_ID":"7881","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2308","PollingCentreName":"Kpetema Market Building","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 019","PollingCentreWard":"Ward 067","CandidateSurname":"Bah ","CandidateFirstName":"Mohamed C","CandidatePoliticalParty":"NDA","CandidatePoliticalPartyName":"National Democratic Alliance (NDA)","CandidatePoliticalPartyColor":"Green ","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-c-bah.jpg"},{"SLEOP_ID":"9289","Candidate_SLEOP_ID":"7881","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2302","PollingCentreName":"Islamic Primary School, Shimbeck","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 019","PollingCentreWard":"Ward 066","CandidateSurname":"Bah ","CandidateFirstName":"Mohamed C","CandidatePoliticalParty":"NDA","CandidatePoliticalPartyName":"National Democratic Alliance (NDA)","CandidatePoliticalPartyColor":"Green ","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-c-bah.jpg"},{"SLEOP_ID":"9288","Candidate_SLEOP_ID":"7881","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2301","PollingCentreName":"Young Muslim primary school, Gbo kakajama, Young M","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 019","PollingCentreWard":"Ward 066","CandidateSurname":"Bah ","CandidateFirstName":"Mohamed C","CandidatePoliticalParty":"NDA","CandidatePoliticalPartyName":"National Democratic Alliance (NDA)","CandidatePoliticalPartyColor":"Green ","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-c-bah.jpg"},{"SLEOP_ID":"9287","Candidate_SLEOP_ID":"7881","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2297","PollingCentreName":"Kercher Memorial Church, Gbo kakajama, Kercher mem","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 020","PollingCentreWard":"Ward 065","CandidateSurname":"Bah ","CandidateFirstName":"Mohamed C","CandidatePoliticalParty":"NDA","CandidatePoliticalPartyName":"National Democratic Alliance (NDA)","CandidatePoliticalPartyColor":"Green ","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-c-bah.jpg"},{"SLEOP_ID":"9286","Candidate_SLEOP_ID":"7881","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2296","PollingCentreName":"Weslayan church compound, Gbo kakajama, Weslayan c","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 020","PollingCentreWard":"Ward 065","CandidateSurname":"Bah ","CandidateFirstName":"Mohamed C","CandidatePoliticalParty":"NDA","CandidatePoliticalPartyName":"National Democratic Alliance (NDA)","CandidatePoliticalPartyColor":"Green ","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-c-bah.jpg"},{"SLEOP_ID":"9285","Candidate_SLEOP_ID":"7881","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2295","PollingCentreName":"Tucker Street, Gbo kakajama, Tucker Street","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 020","PollingCentreWard":"Ward 065","CandidateSurname":"Bah ","CandidateFirstName":"Mohamed C","CandidatePoliticalParty":"NDA","CandidatePoliticalPartyName":"National Democratic Alliance (NDA)","CandidatePoliticalPartyColor":"Green ","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-c-bah.jpg"},{"SLEOP_ID":"9283","Candidate_SLEOP_ID":"7881","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2294","PollingCentreName":"Alphan street, Gbo kakajama, Alphan street","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 020","PollingCentreWard":"Ward 065","CandidateSurname":"Bah ","CandidateFirstName":"Mohamed C","CandidatePoliticalParty":"NDA","CandidatePoliticalPartyName":"National Democratic Alliance (NDA)","CandidatePoliticalPartyColor":"Green ","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-c-bah.jpg"},{"SLEOP_ID":"9284","Candidate_SLEOP_ID":"7881","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2292","PollingCentreName":"Open Space, Gbo - Lambayama, Hotagua Street","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 020","PollingCentreWard":"Ward 064","CandidateSurname":"Bah ","CandidateFirstName":"Mohamed C","CandidatePoliticalParty":"NDA","CandidatePoliticalPartyName":"National Democratic Alliance (NDA)","CandidatePoliticalPartyColor":"Green ","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-c-bah.jpg"},{"SLEOP_ID":"9282","Candidate_SLEOP_ID":"7881","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2291","PollingCentreName":"UMC PRI KPETEWOMA","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 020","PollingCentreWard":"Ward 064","CandidateSurname":"Bah ","CandidateFirstName":"Mohamed C","CandidatePoliticalParty":"NDA","CandidatePoliticalPartyName":"National Democratic Alliance (NDA)","CandidatePoliticalPartyColor":"Green ","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-c-bah.jpg"},{"SLEOP_ID":"9281","Candidate_SLEOP_ID":"7881","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2288","PollingCentreName":"OAU Village Veranda, Gbo- Lambayama","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 020","PollingCentreWard":"Ward 064","CandidateSurname":"Bah ","CandidateFirstName":"Mohamed C","CandidatePoliticalParty":"NDA","CandidatePoliticalPartyName":"National Democratic Alliance (NDA)","CandidatePoliticalPartyColor":"Green ","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-c-bah.jpg"},{"SLEOP_ID":"9280","Candidate_SLEOP_ID":"7881","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2286","PollingCentreName":"Old Town Barray, Gbo Lambayama, Old Town Barray nyad","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 020","PollingCentreWard":"Ward 063","CandidateSurname":"Bah ","CandidateFirstName":"Mohamed C","CandidatePoliticalParty":"NDA","CandidatePoliticalPartyName":"National Democratic Alliance (NDA)","CandidatePoliticalPartyColor":"Green ","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-c-bah.jpg"},{"SLEOP_ID":"9279","Candidate_SLEOP_ID":"7881","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2282","PollingCentreName":"Open space, sall st by main st juction, nyandeyama","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 020","PollingCentreWard":"Ward 063","CandidateSurname":"Bah ","CandidateFirstName":"Mohamed C","CandidatePoliticalParty":"NDA","CandidatePoliticalPartyName":"National Democratic Alliance (NDA)","CandidatePoliticalPartyColor":"Green ","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-c-bah.jpg"},{"SLEOP_ID":"9278","Candidate_SLEOP_ID":"7881","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2281","PollingCentreName":"SLC Prim Sch, New England, Nyandeyama","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 020","PollingCentreWard":"Ward 063","CandidateSurname":"Bah ","CandidateFirstName":"Mohamed C","CandidatePoliticalParty":"NDA","CandidatePoliticalPartyName":"National Democratic Alliance (NDA)","CandidatePoliticalPartyColor":"Green ","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-c-bah.jpg"},{"SLEOP_ID":"9276","Candidate_SLEOP_ID":"7881","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2278","PollingCentreName":"HRS- primary school compound, Gbo Lambayama, HRS-p","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 020","PollingCentreWard":"Ward 062","CandidateSurname":"Bah ","CandidateFirstName":"Mohamed C","CandidatePoliticalParty":"NDA","CandidatePoliticalPartyName":"National Democratic Alliance (NDA)","CandidatePoliticalPartyColor":"Green ","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-c-bah.jpg"},{"SLEOP_ID":"9277","Candidate_SLEOP_ID":"7881","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2279","PollingCentreName":"New market Building, Gbo Lambayama, Nyandeyama New","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 020","PollingCentreWard":"Ward 062","CandidateSurname":"Bah ","CandidateFirstName":"Mohamed C","CandidatePoliticalParty":"NDA","CandidatePoliticalPartyName":"National Democratic Alliance (NDA)","CandidatePoliticalPartyColor":"Green ","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-c-bah.jpg"},{"SLEOP_ID":"9275","Candidate_SLEOP_ID":"7881","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2277","PollingCentreName":"Blama Road, Gbo Lambayama, Ahmadiyya Primary Schoo","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 020","PollingCentreWard":"Ward 062","CandidateSurname":"Bah ","CandidateFirstName":"Mohamed C","CandidatePoliticalParty":"NDA","CandidatePoliticalPartyName":"National Democratic Alliance (NDA)","CandidatePoliticalPartyColor":"Green ","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-c-bah.jpg"},{"SLEOP_ID":"9274","Candidate_SLEOP_ID":"7881","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2276","PollingCentreName":"Marternal and health post, K - line nyandema","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 020","PollingCentreWard":"Ward 062","CandidateSurname":"Bah ","CandidateFirstName":"Mohamed C","CandidatePoliticalParty":"NDA","CandidatePoliticalPartyName":"National Democratic Alliance (NDA)","CandidatePoliticalPartyColor":"Green ","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-c-bah.jpg"},{"SLEOP_ID":"9273","Candidate_SLEOP_ID":"7881","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2275","PollingCentreName":"Open space by 19 cow yard rd( Pa sorie)","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 020","PollingCentreWard":"Ward 062","CandidateSurname":"Bah ","CandidateFirstName":"Mohamed C","CandidatePoliticalParty":"NDA","CandidatePoliticalPartyName":"National Democratic Alliance (NDA)","CandidatePoliticalPartyColor":"Green ","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-c-bah.jpg"},{"SLEOP_ID":"9272","Candidate_SLEOP_ID":"7881","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2273","PollingCentreName":"Koyagbema Town Barray Center","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 020","PollingCentreWard":"Ward 061","CandidateSurname":"Bah ","CandidateFirstName":"Mohamed C","CandidatePoliticalParty":"NDA","CandidatePoliticalPartyName":"National Democratic Alliance (NDA)","CandidatePoliticalPartyColor":"Green ","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-c-bah.jpg"},{"SLEOP_ID":"9271","Candidate_SLEOP_ID":"7881","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2272","PollingCentreName":"Deima juction- Wahmann abu rd","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 020","PollingCentreWard":"Ward 061","CandidateSurname":"Bah ","CandidateFirstName":"Mohamed C","CandidatePoliticalParty":"NDA","CandidatePoliticalPartyName":"National Democratic Alliance (NDA)","CandidatePoliticalPartyColor":"Green ","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-c-bah.jpg"},{"SLEOP_ID":"9270","Candidate_SLEOP_ID":"7881","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2271","PollingCentreName":"YMCA, Kambowaibu","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 020","PollingCentreWard":"Ward 061","CandidateSurname":"Bah ","CandidateFirstName":"Mohamed C","CandidatePoliticalParty":"NDA","CandidatePoliticalPartyName":"National Democratic Alliance (NDA)","CandidatePoliticalPartyColor":"Green ","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-c-bah.jpg"},{"SLEOP_ID":"9269","Candidate_SLEOP_ID":"7881","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2269","PollingCentreName":"Temporary Polling Structure, Jones Garage, Gbo kak","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 021","PollingCentreWard":"Ward 060","CandidateSurname":"Bah ","CandidateFirstName":"Mohamed C","CandidatePoliticalParty":"NDA","CandidatePoliticalPartyName":"National Democratic Alliance (NDA)","CandidatePoliticalPartyColor":"Green ","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-c-bah.jpg"},{"SLEOP_ID":"9268","Candidate_SLEOP_ID":"7881","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2268","PollingCentreName":"Gbo-kakajama, Badrudeen pri.sch.kenema Gbo-kakajam","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 021","PollingCentreWard":"Ward 060","CandidateSurname":"Bah ","CandidateFirstName":"Mohamed C","CandidatePoliticalParty":"NDA","CandidatePoliticalPartyName":"National Democratic Alliance (NDA)","CandidatePoliticalPartyColor":"Green ","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-c-bah.jpg"},{"SLEOP_ID":"9267","Candidate_SLEOP_ID":"7881","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2267","PollingCentreName":"Police Training Center","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 021","PollingCentreWard":"Ward 060","CandidateSurname":"Bah ","CandidateFirstName":"Mohamed C","CandidatePoliticalParty":"NDA","CandidatePoliticalPartyName":"National Democratic Alliance (NDA)","CandidatePoliticalPartyColor":"Green ","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-c-bah.jpg"},{"SLEOP_ID":"9266","Candidate_SLEOP_ID":"7881","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2266","PollingCentreName":"Plaza Kenema, Hanga rd","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 021","PollingCentreWard":"Ward 060","CandidateSurname":"Bah ","CandidateFirstName":"Mohamed C","CandidatePoliticalParty":"NDA","CandidatePoliticalPartyName":"National Democratic Alliance (NDA)","CandidatePoliticalPartyColor":"Green ","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-c-bah.jpg"},{"SLEOP_ID":"9265","Candidate_SLEOP_ID":"7881","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2264","PollingCentreName":"Grace land academy, Gbanguta st","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 021","PollingCentreWard":"Ward 059","CandidateSurname":"Bah ","CandidateFirstName":"Mohamed C","CandidatePoliticalParty":"NDA","CandidatePoliticalPartyName":"National Democratic Alliance (NDA)","CandidatePoliticalPartyColor":"Green ","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-c-bah.jpg"},{"SLEOP_ID":"9263","Candidate_SLEOP_ID":"7881","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2262","PollingCentreName":"Kaisamba Terrace Field, Gbo - Lambayama","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 021","PollingCentreWard":"Ward 059","CandidateSurname":"Bah ","CandidateFirstName":"Mohamed C","CandidatePoliticalParty":"NDA","CandidatePoliticalPartyName":"National Democratic Alliance (NDA)","CandidatePoliticalPartyColor":"Green ","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-c-bah.jpg"},{"SLEOP_ID":"9264","Candidate_SLEOP_ID":"7881","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2263","PollingCentreName":"Information Hall, Maxwell Khobe St.","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 021","PollingCentreWard":"Ward 059","CandidateSurname":"Bah ","CandidateFirstName":"Mohamed C","CandidatePoliticalParty":"NDA","CandidatePoliticalPartyName":"National Democratic Alliance (NDA)","CandidatePoliticalPartyColor":"Green ","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-c-bah.jpg"},{"SLEOP_ID":"9262","Candidate_SLEOP_ID":"7881","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2261","PollingCentreName":"Ahmadiyya Muslim Primary School, Nyandeyama","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 021","PollingCentreWard":"Ward 059","CandidateSurname":"Bah ","CandidateFirstName":"Mohamed C","CandidatePoliticalParty":"NDA","CandidatePoliticalPartyName":"National Democratic Alliance (NDA)","CandidatePoliticalPartyColor":"Green ","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-c-bah.jpg"},{"SLEOP_ID":"9261","Candidate_SLEOP_ID":"7881","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2260","PollingCentreName":"Pavillion Show Field, Gbo Lambayama, Pavillion Sho","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 021","PollingCentreWard":"Ward 059","CandidateSurname":"Bah ","CandidateFirstName":"Mohamed C","CandidatePoliticalParty":"NDA","CandidatePoliticalPartyName":"National Democratic Alliance (NDA)","CandidatePoliticalPartyColor":"Green ","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-c-bah.jpg"},{"SLEOP_ID":"9260","Candidate_SLEOP_ID":"7881","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2258","PollingCentreName":"N. A. Court Barray","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 021","PollingCentreWard":"Ward 058","CandidateSurname":"Bah ","CandidateFirstName":"Mohamed C","CandidatePoliticalParty":"NDA","CandidatePoliticalPartyName":"National Democratic Alliance (NDA)","CandidatePoliticalPartyColor":"Green ","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-c-bah.jpg"},{"SLEOP_ID":"9259","Candidate_SLEOP_ID":"7881","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2257","PollingCentreName":"Badrudeen sec.sch., Gbo-kakajama, Badrudeen sec.sc","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 021","PollingCentreWard":"Ward 058","CandidateSurname":"Bah ","CandidateFirstName":"Mohamed C","CandidatePoliticalParty":"NDA","CandidatePoliticalPartyName":"National Democratic Alliance (NDA)","CandidatePoliticalPartyColor":"Green ","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-c-bah.jpg"},{"SLEOP_ID":"9258","Candidate_SLEOP_ID":"7881","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2250","PollingCentreName":"Under a tree(shade), Gbo Kakajama(A-burmaIII), Bur","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 021","PollingCentreWard":"Ward 057","CandidateSurname":"Bah ","CandidateFirstName":"Mohamed C","CandidatePoliticalParty":"NDA","CandidatePoliticalPartyName":"National Democratic Alliance (NDA)","CandidatePoliticalPartyColor":"Green ","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-c-bah.jpg"},{"SLEOP_ID":"9257","Candidate_SLEOP_ID":"7881","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2256","PollingCentreName":"Methodist Secondary School, Gbo -Lambayama","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 021","PollingCentreWard":"Ward 058","CandidateSurname":"Bah ","CandidateFirstName":"Mohamed C","CandidatePoliticalParty":"NDA","CandidatePoliticalPartyName":"National Democratic Alliance (NDA)","CandidatePoliticalPartyColor":"Green ","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-c-bah.jpg"},{"SLEOP_ID":"9254","Candidate_SLEOP_ID":"7881","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2254","PollingCentreName":"Methodist Primary School","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 021","PollingCentreWard":"Ward 058","CandidateSurname":"Bah ","CandidateFirstName":"Mohamed C","CandidatePoliticalParty":"NDA","CandidatePoliticalPartyName":"National Democratic Alliance (NDA)","CandidatePoliticalPartyColor":"Green ","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-c-bah.jpg"},{"SLEOP_ID":"9255","Candidate_SLEOP_ID":"7881","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2255","PollingCentreName":"Islamic Dawar Primary School","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 021","PollingCentreWard":"Ward 058","CandidateSurname":"Bah ","CandidateFirstName":"Mohamed C","CandidatePoliticalParty":"NDA","CandidatePoliticalPartyName":"National Democratic Alliance (NDA)","CandidatePoliticalPartyColor":"Green ","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-c-bah.jpg"},{"SLEOP_ID":"9253","Candidate_SLEOP_ID":"7881","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2252","PollingCentreName":"Open space by 2 makaya st,Nyaynawama","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 021","PollingCentreWard":"Ward 057","CandidateSurname":"Bah ","CandidateFirstName":"Mohamed C","CandidatePoliticalParty":"NDA","CandidatePoliticalPartyName":"National Democratic Alliance (NDA)","CandidatePoliticalPartyColor":"Green ","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-c-bah.jpg"},{"SLEOP_ID":"9250","Candidate_SLEOP_ID":"7881","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2249","PollingCentreName":"Municipal primary sch","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 021","PollingCentreWard":"Ward 057","CandidateSurname":"Bah ","CandidateFirstName":"Mohamed C","CandidatePoliticalParty":"NDA","CandidatePoliticalPartyName":"National Democratic Alliance (NDA)","CandidatePoliticalPartyColor":"Green ","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-c-bah.jpg"},{"SLEOP_ID":"9251","Candidate_SLEOP_ID":"7881","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2251","PollingCentreName":"Air field area-Kenema (Police station)","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 021","PollingCentreWard":"Ward 057","CandidateSurname":"Bah ","CandidateFirstName":"Mohamed C","CandidatePoliticalParty":"NDA","CandidatePoliticalPartyName":"National Democratic Alliance (NDA)","CandidatePoliticalPartyColor":"Green ","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-c-bah.jpg"},{"SLEOP_ID":"9249","Candidate_SLEOP_ID":"7881","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2248","PollingCentreName":"Open space, Burma 3(by the Mosque), Nyakehun","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 021","PollingCentreWard":"Ward 057","CandidateSurname":"Bah ","CandidateFirstName":"Mohamed C","CandidatePoliticalParty":"NDA","CandidatePoliticalPartyName":"National Democratic Alliance (NDA)","CandidatePoliticalPartyColor":"Green ","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-c-bah.jpg"},{"SLEOP_ID":"9248","Candidate_SLEOP_ID":"7881","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2246","PollingCentreName":"Open space 1,Kondebotihun","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 021","PollingCentreWard":"Ward 056","CandidateSurname":"Bah ","CandidateFirstName":"Mohamed C","CandidatePoliticalParty":"NDA","CandidatePoliticalPartyName":"National Democratic Alliance (NDA)","CandidatePoliticalPartyColor":"Green ","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-c-bah.jpg"},{"SLEOP_ID":"9247","Candidate_SLEOP_ID":"7881","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2245","PollingCentreName":"Open space 2,Kondebotihun","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 021","PollingCentreWard":"Ward 056","CandidateSurname":"Bah ","CandidateFirstName":"Mohamed C","CandidatePoliticalParty":"NDA","CandidatePoliticalPartyName":"National Democratic Alliance (NDA)","CandidatePoliticalPartyColor":"Green ","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-c-bah.jpg"},{"SLEOP_ID":"9246","Candidate_SLEOP_ID":"7881","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2243","PollingCentreName":"Open space by 3 kpaka drive","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 021","PollingCentreWard":"Ward 056","CandidateSurname":"Bah ","CandidateFirstName":"Mohamed C","CandidatePoliticalParty":"NDA","CandidatePoliticalPartyName":"National Democratic Alliance (NDA)","CandidatePoliticalPartyColor":"Green ","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-c-bah.jpg"},{"SLEOP_ID":"9245","Candidate_SLEOP_ID":"7881","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2244","PollingCentreName":"Provincial Islamic School, Kondebotihun","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 021","PollingCentreWard":"Ward 056","CandidateSurname":"Bah ","CandidateFirstName":"Mohamed C","CandidatePoliticalParty":"NDA","CandidatePoliticalPartyName":"National Democratic Alliance (NDA)","CandidatePoliticalPartyColor":"Green ","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-c-bah.jpg"},{"SLEOP_ID":"9244","Candidate_SLEOP_ID":"7881","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2241","PollingCentreName":"St. Kizito primary school, Gbo Lambayama, St. Kizi","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 021","PollingCentreWard":"Ward 055","CandidateSurname":"Bah ","CandidateFirstName":"Mohamed C","CandidatePoliticalParty":"NDA","CandidatePoliticalPartyName":"National Democratic Alliance (NDA)","CandidatePoliticalPartyColor":"Green ","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-c-bah.jpg"},{"SLEOP_ID":"9243","Candidate_SLEOP_ID":"7881","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2240","PollingCentreName":"New Apostolic Church, RTI Camp, W.F.P Building","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 021","PollingCentreWard":"Ward 055","CandidateSurname":"Bah ","CandidateFirstName":"Mohamed C","CandidatePoliticalParty":"NDA","CandidatePoliticalPartyName":"National Democratic Alliance (NDA)","CandidatePoliticalPartyColor":"Green ","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-c-bah.jpg"},{"SLEOP_ID":"9242","Candidate_SLEOP_ID":"7881","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2239","PollingCentreName":"KDC Primary School, Gombu Town","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 021","PollingCentreWard":"Ward 055","CandidateSurname":"Bah ","CandidateFirstName":"Mohamed C","CandidatePoliticalParty":"NDA","CandidatePoliticalPartyName":"National Democratic Alliance (NDA)","CandidatePoliticalPartyColor":"Green ","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-c-bah.jpg"},{"SLEOP_ID":"9241","Candidate_SLEOP_ID":"7881","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2238","PollingCentreName":"Living stone pri. Sch - Lamin kosia st","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 021","PollingCentreWard":"Ward 055","CandidateSurname":"Bah ","CandidateFirstName":"Mohamed C","CandidatePoliticalParty":"NDA","CandidatePoliticalPartyName":"National Democratic Alliance (NDA)","CandidatePoliticalPartyColor":"Green ","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-c-bah.jpg"},{"SLEOP_ID":"9240","Candidate_SLEOP_ID":"7881","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2236","PollingCentreName":"Gombu market","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 018","PollingCentreWard":"Ward 054","CandidateSurname":"Bah ","CandidateFirstName":"Mohamed C","CandidatePoliticalParty":"NDA","CandidatePoliticalPartyName":"National Democratic Alliance (NDA)","CandidatePoliticalPartyColor":"Green ","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-c-bah.jpg"},{"SLEOP_ID":"9239","Candidate_SLEOP_ID":"7881","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2235","PollingCentreName":"Town Barrie, Famanjo(punduru), Punduru Town Barrie","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 018","PollingCentreWard":"Ward 054","CandidateSurname":"Bah ","CandidateFirstName":"Mohamed C","CandidatePoliticalParty":"NDA","CandidatePoliticalPartyName":"National Democratic Alliance (NDA)","CandidatePoliticalPartyColor":"Green ","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-c-bah.jpg"},{"SLEOP_ID":"9238","Candidate_SLEOP_ID":"7881","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2234","PollingCentreName":"Town Barrie, Famanjo(Bambakalima, Bambakalima Town","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 018","PollingCentreWard":"Ward 054","CandidateSurname":"Bah ","CandidateFirstName":"Mohamed C","CandidatePoliticalParty":"NDA","CandidatePoliticalPartyName":"National Democratic Alliance (NDA)","CandidatePoliticalPartyColor":"Green ","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-c-bah.jpg"},{"SLEOP_ID":"9237","Candidate_SLEOP_ID":"7881","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2233","PollingCentreName":"Town Barrie, Famanjo(Fomaya), Fomaya Town Barrie","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 018","PollingCentreWard":"Ward 054","CandidateSurname":"Bah ","CandidateFirstName":"Mohamed C","CandidatePoliticalParty":"NDA","CandidatePoliticalPartyName":"National Democratic Alliance (NDA)","CandidatePoliticalPartyColor":"Green ","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-c-bah.jpg"},{"SLEOP_ID":"9236","Candidate_SLEOP_ID":"7881","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"","PollingCentreName":"","PollingCentreDistrict":"","PollingCentreConstituency":"","PollingCentreWard":"","CandidateSurname":"Bah ","CandidateFirstName":"Mohamed C","CandidatePoliticalParty":"NDA","CandidatePoliticalPartyName":"National Democratic Alliance (NDA)","CandidatePoliticalPartyColor":"Green ","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/mohamed-c-bah.jpg"},{"SLEOP_ID":"9235","Candidate_SLEOP_ID":"7880","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"3014","PollingCentreName":"N/A Barray, Teiko","PollingCentreDistrict":"Kono","PollingCentreConstituency":"Constituency 030","PollingCentreWard":"Ward 074","CandidateSurname":"Tarawally","CandidateFirstName":"Musa","CandidatePoliticalParty":"CDP","CandidatePoliticalPartyName":"Citizens Democratic Party (CDP)","CandidatePoliticalPartyColor":"","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/musa-tarawally.jpg"},{"SLEOP_ID":"9233","Candidate_SLEOP_ID":"7880","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"3012","PollingCentreName":"S.L.M.Y.C.O Prim. Sch.,Sewafe","PollingCentreDistrict":"Kono","PollingCentreConstituency":"Constituency 030","PollingCentreWard":"Ward 074","CandidateSurname":"Tarawally","CandidateFirstName":"Musa","CandidatePoliticalParty":"CDP","CandidatePoliticalPartyName":"Citizens Democratic Party (CDP)","CandidatePoliticalPartyColor":"","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/musa-tarawally.jpg"},{"SLEOP_ID":"9234","Candidate_SLEOP_ID":"7880","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"3013","PollingCentreName":"N/A Barray, Sewafe","PollingCentreDistrict":"Kono","PollingCentreConstituency":"Constituency 030","PollingCentreWard":"Ward 074","CandidateSurname":"Tarawally","CandidateFirstName":"Musa","CandidatePoliticalParty":"CDP","CandidatePoliticalPartyName":"Citizens Democratic Party (CDP)","CandidatePoliticalPartyColor":"","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/musa-tarawally.jpg"},{"SLEOP_ID":"9232","Candidate_SLEOP_ID":"7880","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"3009","PollingCentreName":"Community Barray,Mattama","PollingCentreDistrict":"Kono","PollingCentreConstituency":"Constituency 030","PollingCentreWard":"Ward 074","CandidateSurname":"Tarawally","CandidateFirstName":"Musa","CandidatePoliticalParty":"CDP","CandidatePoliticalPartyName":"Citizens Democratic Party (CDP)","CandidatePoliticalPartyColor":"","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/musa-tarawally.jpg"},{"SLEOP_ID":"9231","Candidate_SLEOP_ID":"7880","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"3011","PollingCentreName":"K.D.E.C Prim. Sch., Tembedu","PollingCentreDistrict":"Kono","PollingCentreConstituency":"Constituency 029","PollingCentreWard":"Ward 073","CandidateSurname":"Tarawally","CandidateFirstName":"Musa","CandidatePoliticalParty":"CDP","CandidatePoliticalPartyName":"Citizens Democratic Party (CDP)","CandidatePoliticalPartyColor":"","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/musa-tarawally.jpg"},{"SLEOP_ID":"9230","Candidate_SLEOP_ID":"7880","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"3007","PollingCentreName":"S.D.A Prim. Sch.,Sandiya","PollingCentreDistrict":"Kono","PollingCentreConstituency":"Constituency 029","PollingCentreWard":"Ward 073","CandidateSurname":"Tarawally","CandidateFirstName":"Musa","CandidatePoliticalParty":"CDP","CandidatePoliticalPartyName":"Citizens Democratic Party (CDP)","CandidatePoliticalPartyColor":"","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/musa-tarawally.jpg"},{"SLEOP_ID":"9228","Candidate_SLEOP_ID":"7880","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"3015","PollingCentreName":"R.C Prim. Sch., Peya","PollingCentreDistrict":"Kono","PollingCentreConstituency":"Constituency 030","PollingCentreWard":"Ward 074","CandidateSurname":"Tarawally","CandidateFirstName":"Musa","CandidatePoliticalParty":"CDP","CandidatePoliticalPartyName":"Citizens Democratic Party (CDP)","CandidatePoliticalPartyColor":"","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/musa-tarawally.jpg"},{"SLEOP_ID":"9229","Candidate_SLEOP_ID":"7880","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"3006","PollingCentreName":"Unfinished Building,Ndogboi","PollingCentreDistrict":"Kono","PollingCentreConstituency":"Constituency 029","PollingCentreWard":"Ward 073","CandidateSurname":"Tarawally","CandidateFirstName":"Musa","CandidatePoliticalParty":"CDP","CandidatePoliticalPartyName":"Citizens Democratic Party (CDP)","CandidatePoliticalPartyColor":"","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/musa-tarawally.jpg"},{"SLEOP_ID":"9227","Candidate_SLEOP_ID":"7880","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"3005","PollingCentreName":"N/A Barray, Ngo Town","PollingCentreDistrict":"Kono","PollingCentreConstituency":"Constituency 029","PollingCentreWard":"Ward 073","CandidateSurname":"Tarawally","CandidateFirstName":"Musa","CandidatePoliticalParty":"CDP","CandidatePoliticalPartyName":"Citizens Democratic Party (CDP)","CandidatePoliticalPartyColor":"","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/musa-tarawally.jpg"},{"SLEOP_ID":"9226","Candidate_SLEOP_ID":"7880","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"3004","PollingCentreName":"S.L.M.B Prim.,Bambakunaya","PollingCentreDistrict":"Kono","PollingCentreConstituency":"Constituency 029","PollingCentreWard":"Ward 073","CandidateSurname":"Tarawally","CandidateFirstName":"Musa","CandidatePoliticalParty":"CDP","CandidatePoliticalPartyName":"Citizens Democratic Party (CDP)","CandidatePoliticalPartyColor":"","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/musa-tarawally.jpg"},{"SLEOP_ID":"9225","Candidate_SLEOP_ID":"7880","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"3003","PollingCentreName":"KDEC Primary School,Masabendu","PollingCentreDistrict":"Kono","PollingCentreConstituency":"Constituency 029","PollingCentreWard":"Ward 073","CandidateSurname":"Tarawally","CandidateFirstName":"Musa","CandidatePoliticalParty":"CDP","CandidatePoliticalPartyName":"Citizens Democratic Party (CDP)","CandidatePoliticalPartyColor":"","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/musa-tarawally.jpg"},{"SLEOP_ID":"9224","Candidate_SLEOP_ID":"7880","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"3002","PollingCentreName":"Open Space,Kangama","PollingCentreDistrict":"Kono","PollingCentreConstituency":"Constituency 029","PollingCentreWard":"Ward 073","CandidateSurname":"Tarawally","CandidateFirstName":"Musa","CandidatePoliticalParty":"CDP","CandidatePoliticalPartyName":"Citizens Democratic Party (CDP)","CandidatePoliticalPartyColor":"","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/musa-tarawally.jpg"},{"SLEOP_ID":"9223","Candidate_SLEOP_ID":"7880","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2337","PollingCentreName":"Ansarul sec.school, Gbo kakajama, Ansarul sec.sch.","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 020","PollingCentreWard":"Ward 072","CandidateSurname":"Tarawally","CandidateFirstName":"Musa","CandidatePoliticalParty":"CDP","CandidatePoliticalPartyName":"Citizens Democratic Party (CDP)","CandidatePoliticalPartyColor":"","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/musa-tarawally.jpg"},{"SLEOP_ID":"9222","Candidate_SLEOP_ID":"7880","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2336","PollingCentreName":"College sec. sch.Combema Road, Gbo kakajama, Colle","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 020","PollingCentreWard":"Ward 072","CandidateSurname":"Tarawally","CandidateFirstName":"Musa","CandidatePoliticalParty":"CDP","CandidatePoliticalPartyName":"Citizens Democratic Party (CDP)","CandidatePoliticalPartyColor":"","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/musa-tarawally.jpg"},{"SLEOP_ID":"9221","Candidate_SLEOP_ID":"7880","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2332","PollingCentreName":"25 Jenneh st. junction, Gbo- kakajama, Jenneh St.","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 019","PollingCentreWard":"Ward 071","CandidateSurname":"Tarawally","CandidateFirstName":"Musa","CandidatePoliticalParty":"CDP","CandidatePoliticalPartyName":"Citizens Democratic Party (CDP)","CandidatePoliticalPartyColor":"","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/musa-tarawally.jpg"},{"SLEOP_ID":"9220","Candidate_SLEOP_ID":"7880","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2331","PollingCentreName":"S.L.C.-ST.James school, S.L.C-St. James mission rd","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 019","PollingCentreWard":"Ward 071","CandidateSurname":"Tarawally","CandidateFirstName":"Musa","CandidatePoliticalParty":"CDP","CandidatePoliticalPartyName":"Citizens Democratic Party (CDP)","CandidatePoliticalPartyColor":"","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/musa-tarawally.jpg"},{"SLEOP_ID":"9219","Candidate_SLEOP_ID":"7880","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2330","PollingCentreName":"K.D.E.C. Primary school, Gbo- kakajama, K.D.E.C pr","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 019","PollingCentreWard":"Ward 071","CandidateSurname":"Tarawally","CandidateFirstName":"Musa","CandidatePoliticalParty":"CDP","CandidatePoliticalPartyName":"Citizens Democratic Party (CDP)","CandidatePoliticalPartyColor":"","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/musa-tarawally.jpg"},{"SLEOP_ID":"9218","Candidate_SLEOP_ID":"7880","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2329","PollingCentreName":"Kankaly primary sch. Building, Gbo kakajama, Kanka","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 019","PollingCentreWard":"Ward 071","CandidateSurname":"Tarawally","CandidateFirstName":"Musa","CandidatePoliticalParty":"CDP","CandidatePoliticalPartyName":"Citizens Democratic Party (CDP)","CandidatePoliticalPartyColor":"","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/musa-tarawally.jpg"},{"SLEOP_ID":"9217","Candidate_SLEOP_ID":"7880","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2328","PollingCentreName":"Assembly of God church, Gbo kakajama, Assembly of","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 019","PollingCentreWard":"Ward 071","CandidateSurname":"Tarawally","CandidateFirstName":"Musa","CandidatePoliticalParty":"CDP","CandidatePoliticalPartyName":"Citizens Democratic Party (CDP)","CandidatePoliticalPartyColor":"","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/musa-tarawally.jpg"},{"SLEOP_ID":"9216","Candidate_SLEOP_ID":"7880","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2326","PollingCentreName":"Polytech Cateen, Gbo- kakajama, Polytech Cateen","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 019","PollingCentreWard":"Ward 070","CandidateSurname":"Tarawally","CandidateFirstName":"Musa","CandidatePoliticalParty":"CDP","CandidatePoliticalPartyName":"Citizens Democratic Party (CDP)","CandidatePoliticalPartyColor":"","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/musa-tarawally.jpg"},{"SLEOP_ID":"9215","Candidate_SLEOP_ID":"7880","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2325","PollingCentreName":"Gov. hospital-under five clinic-keneme, Gbo- kakaj","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 019","PollingCentreWard":"Ward 070","CandidateSurname":"Tarawally","CandidateFirstName":"Musa","CandidatePoliticalParty":"CDP","CandidatePoliticalPartyName":"Citizens Democratic Party (CDP)","CandidatePoliticalPartyColor":"","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/musa-tarawally.jpg"},{"SLEOP_ID":"9214","Candidate_SLEOP_ID":"7880","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2323","PollingCentreName":"Temporary Polling Structure,Duwai/kpoli street, Gb","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 019","PollingCentreWard":"Ward 070","CandidateSurname":"Tarawally","CandidateFirstName":"Musa","CandidatePoliticalParty":"CDP","CandidatePoliticalPartyName":"Citizens Democratic Party (CDP)","CandidatePoliticalPartyColor":"","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/musa-tarawally.jpg"},{"SLEOP_ID":"9213","Candidate_SLEOP_ID":"7880","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2324","PollingCentreName":"Open space Massaquoi St.","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 019","PollingCentreWard":"Ward 070","CandidateSurname":"Tarawally","CandidateFirstName":"Musa","CandidatePoliticalParty":"CDP","CandidatePoliticalPartyName":"Citizens Democratic Party (CDP)","CandidatePoliticalPartyColor":"","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/musa-tarawally.jpg"},{"SLEOP_ID":"9212","Candidate_SLEOP_ID":"7880","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2321","PollingCentreName":"K.D.C. Kapayama, Gbo Kakajama, K.D.C Kpayama","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 019","PollingCentreWard":"Ward 069","CandidateSurname":"Tarawally","CandidateFirstName":"Musa","CandidatePoliticalParty":"CDP","CandidatePoliticalPartyName":"Citizens Democratic Party (CDP)","CandidatePoliticalPartyColor":"","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/musa-tarawally.jpg"},{"SLEOP_ID":"9211","Candidate_SLEOP_ID":"7880","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2316","PollingCentreName":"Temporary Polling Structure, Abdulai St., Gbo- kak","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 019","PollingCentreWard":"Ward 069","CandidateSurname":"Tarawally","CandidateFirstName":"Musa","CandidatePoliticalParty":"CDP","CandidatePoliticalPartyName":"Citizens Democratic Party (CDP)","CandidatePoliticalPartyColor":"","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/musa-tarawally.jpg"},{"SLEOP_ID":"9210","Candidate_SLEOP_ID":"7880","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2314","PollingCentreName":"S.D.A. School compound, (A kpayamaSDA), S.D.A comp","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 019","PollingCentreWard":"Ward 068","CandidateSurname":"Tarawally","CandidateFirstName":"Musa","CandidatePoliticalParty":"CDP","CandidatePoliticalPartyName":"Citizens Democratic Party (CDP)","CandidatePoliticalPartyColor":"","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/musa-tarawally.jpg"},{"SLEOP_ID":"9209","Candidate_SLEOP_ID":"7880","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2313","PollingCentreName":"HRSS School Compound, Gbo- Kakajama","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 019","PollingCentreWard":"Ward 068","CandidateSurname":"Tarawally","CandidateFirstName":"Musa","CandidatePoliticalParty":"CDP","CandidatePoliticalPartyName":"Citizens Democratic Party (CDP)","CandidatePoliticalPartyColor":"","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/musa-tarawally.jpg"},{"SLEOP_ID":"9208","Candidate_SLEOP_ID":"7880","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2312","PollingCentreName":"Luke&#039;s Commercial sec. school, Torkpumbu II, Luke&#039;","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 019","PollingCentreWard":"Ward 068","CandidateSurname":"Tarawally","CandidateFirstName":"Musa","CandidatePoliticalParty":"CDP","CandidatePoliticalPartyName":"Citizens Democratic Party (CDP)","CandidatePoliticalPartyColor":"","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/musa-tarawally.jpg"},{"SLEOP_ID":"9207","Candidate_SLEOP_ID":"7880","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2310","PollingCentreName":"Govt. sec. school building, Gbo Kakajama, Govt.sec","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 019","PollingCentreWard":"Ward 068","CandidateSurname":"Tarawally","CandidateFirstName":"Musa","CandidatePoliticalParty":"CDP","CandidatePoliticalPartyName":"Citizens Democratic Party (CDP)","CandidatePoliticalPartyColor":"","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/musa-tarawally.jpg"},{"SLEOP_ID":"9206","Candidate_SLEOP_ID":"7880","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2308","PollingCentreName":"Kpetema Market Building","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 019","PollingCentreWard":"Ward 067","CandidateSurname":"Tarawally","CandidateFirstName":"Musa","CandidatePoliticalParty":"CDP","CandidatePoliticalPartyName":"Citizens Democratic Party (CDP)","CandidatePoliticalPartyColor":"","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/musa-tarawally.jpg"},{"SLEOP_ID":"9205","Candidate_SLEOP_ID":"7880","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2302","PollingCentreName":"Islamic Primary School, Shimbeck","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 019","PollingCentreWard":"Ward 066","CandidateSurname":"Tarawally","CandidateFirstName":"Musa","CandidatePoliticalParty":"CDP","CandidatePoliticalPartyName":"Citizens Democratic Party (CDP)","CandidatePoliticalPartyColor":"","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/musa-tarawally.jpg"},{"SLEOP_ID":"9204","Candidate_SLEOP_ID":"7880","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2301","PollingCentreName":"Young Muslim primary school, Gbo kakajama, Young M","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 019","PollingCentreWard":"Ward 066","CandidateSurname":"Tarawally","CandidateFirstName":"Musa","CandidatePoliticalParty":"CDP","CandidatePoliticalPartyName":"Citizens Democratic Party (CDP)","CandidatePoliticalPartyColor":"","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/musa-tarawally.jpg"},{"SLEOP_ID":"9203","Candidate_SLEOP_ID":"7880","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2297","PollingCentreName":"Kercher Memorial Church, Gbo kakajama, Kercher mem","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 020","PollingCentreWard":"Ward 065","CandidateSurname":"Tarawally","CandidateFirstName":"Musa","CandidatePoliticalParty":"CDP","CandidatePoliticalPartyName":"Citizens Democratic Party (CDP)","CandidatePoliticalPartyColor":"","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/musa-tarawally.jpg"},{"SLEOP_ID":"9202","Candidate_SLEOP_ID":"7880","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2296","PollingCentreName":"Weslayan church compound, Gbo kakajama, Weslayan c","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 020","PollingCentreWard":"Ward 065","CandidateSurname":"Tarawally","CandidateFirstName":"Musa","CandidatePoliticalParty":"CDP","CandidatePoliticalPartyName":"Citizens Democratic Party (CDP)","CandidatePoliticalPartyColor":"","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/musa-tarawally.jpg"},{"SLEOP_ID":"9201","Candidate_SLEOP_ID":"7880","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2295","PollingCentreName":"Tucker Street, Gbo kakajama, Tucker Street","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 020","PollingCentreWard":"Ward 065","CandidateSurname":"Tarawally","CandidateFirstName":"Musa","CandidatePoliticalParty":"CDP","CandidatePoliticalPartyName":"Citizens Democratic Party (CDP)","CandidatePoliticalPartyColor":"","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/musa-tarawally.jpg"},{"SLEOP_ID":"9200","Candidate_SLEOP_ID":"7880","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2294","PollingCentreName":"Alphan street, Gbo kakajama, Alphan street","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 020","PollingCentreWard":"Ward 065","CandidateSurname":"Tarawally","CandidateFirstName":"Musa","CandidatePoliticalParty":"CDP","CandidatePoliticalPartyName":"Citizens Democratic Party (CDP)","CandidatePoliticalPartyColor":"","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/musa-tarawally.jpg"},{"SLEOP_ID":"9199","Candidate_SLEOP_ID":"7880","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2292","PollingCentreName":"Open Space, Gbo - Lambayama, Hotagua Street","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 020","PollingCentreWard":"Ward 064","CandidateSurname":"Tarawally","CandidateFirstName":"Musa","CandidatePoliticalParty":"CDP","CandidatePoliticalPartyName":"Citizens Democratic Party (CDP)","CandidatePoliticalPartyColor":"","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/musa-tarawally.jpg"},{"SLEOP_ID":"9198","Candidate_SLEOP_ID":"7880","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2291","PollingCentreName":"UMC PRI KPETEWOMA","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 020","PollingCentreWard":"Ward 064","CandidateSurname":"Tarawally","CandidateFirstName":"Musa","CandidatePoliticalParty":"CDP","CandidatePoliticalPartyName":"Citizens Democratic Party (CDP)","CandidatePoliticalPartyColor":"","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/musa-tarawally.jpg"},{"SLEOP_ID":"9197","Candidate_SLEOP_ID":"7880","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2288","PollingCentreName":"OAU Village Veranda, Gbo- Lambayama","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 020","PollingCentreWard":"Ward 064","CandidateSurname":"Tarawally","CandidateFirstName":"Musa","CandidatePoliticalParty":"CDP","CandidatePoliticalPartyName":"Citizens Democratic Party (CDP)","CandidatePoliticalPartyColor":"","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/musa-tarawally.jpg"},{"SLEOP_ID":"9196","Candidate_SLEOP_ID":"7880","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2286","PollingCentreName":"Old Town Barray, Gbo Lambayama, Old Town Barray nyad","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 020","PollingCentreWard":"Ward 063","CandidateSurname":"Tarawally","CandidateFirstName":"Musa","CandidatePoliticalParty":"CDP","CandidatePoliticalPartyName":"Citizens Democratic Party (CDP)","CandidatePoliticalPartyColor":"","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/musa-tarawally.jpg"},{"SLEOP_ID":"9195","Candidate_SLEOP_ID":"7880","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2282","PollingCentreName":"Open space, sall st by main st juction, nyandeyama","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 020","PollingCentreWard":"Ward 063","CandidateSurname":"Tarawally","CandidateFirstName":"Musa","CandidatePoliticalParty":"CDP","CandidatePoliticalPartyName":"Citizens Democratic Party (CDP)","CandidatePoliticalPartyColor":"","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/musa-tarawally.jpg"},{"SLEOP_ID":"9194","Candidate_SLEOP_ID":"7880","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2278","PollingCentreName":"HRS- primary school compound, Gbo Lambayama, HRS-p","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 020","PollingCentreWard":"Ward 062","CandidateSurname":"Tarawally","CandidateFirstName":"Musa","CandidatePoliticalParty":"CDP","CandidatePoliticalPartyName":"Citizens Democratic Party (CDP)","CandidatePoliticalPartyColor":"","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/musa-tarawally.jpg"},{"SLEOP_ID":"9193","Candidate_SLEOP_ID":"7880","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2281","PollingCentreName":"SLC Prim Sch, New England, Nyandeyama","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 020","PollingCentreWard":"Ward 063","CandidateSurname":"Tarawally","CandidateFirstName":"Musa","CandidatePoliticalParty":"CDP","CandidatePoliticalPartyName":"Citizens Democratic Party (CDP)","CandidatePoliticalPartyColor":"","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/musa-tarawally.jpg"},{"SLEOP_ID":"9190","Candidate_SLEOP_ID":"7880","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2277","PollingCentreName":"Blama Road, Gbo Lambayama, Ahmadiyya Primary Schoo","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 020","PollingCentreWard":"Ward 062","CandidateSurname":"Tarawally","CandidateFirstName":"Musa","CandidatePoliticalParty":"CDP","CandidatePoliticalPartyName":"Citizens Democratic Party (CDP)","CandidatePoliticalPartyColor":"","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/musa-tarawally.jpg"},{"SLEOP_ID":"9191","Candidate_SLEOP_ID":"7880","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2279","PollingCentreName":"New market Building, Gbo Lambayama, Nyandeyama New","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 020","PollingCentreWard":"Ward 062","CandidateSurname":"Tarawally","CandidateFirstName":"Musa","CandidatePoliticalParty":"CDP","CandidatePoliticalPartyName":"Citizens Democratic Party (CDP)","CandidatePoliticalPartyColor":"","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/musa-tarawally.jpg"},{"SLEOP_ID":"9189","Candidate_SLEOP_ID":"7880","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2276","PollingCentreName":"Marternal and health post, K - line nyandema","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 020","PollingCentreWard":"Ward 062","CandidateSurname":"Tarawally","CandidateFirstName":"Musa","CandidatePoliticalParty":"CDP","CandidatePoliticalPartyName":"Citizens Democratic Party (CDP)","CandidatePoliticalPartyColor":"","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/musa-tarawally.jpg"},{"SLEOP_ID":"9188","Candidate_SLEOP_ID":"7880","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2275","PollingCentreName":"Open space by 19 cow yard rd( Pa sorie)","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 020","PollingCentreWard":"Ward 062","CandidateSurname":"Tarawally","CandidateFirstName":"Musa","CandidatePoliticalParty":"CDP","CandidatePoliticalPartyName":"Citizens Democratic Party (CDP)","CandidatePoliticalPartyColor":"","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/musa-tarawally.jpg"},{"SLEOP_ID":"9187","Candidate_SLEOP_ID":"7880","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2273","PollingCentreName":"Koyagbema Town Barray Center","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 020","PollingCentreWard":"Ward 061","CandidateSurname":"Tarawally","CandidateFirstName":"Musa","CandidatePoliticalParty":"CDP","CandidatePoliticalPartyName":"Citizens Democratic Party (CDP)","CandidatePoliticalPartyColor":"","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/musa-tarawally.jpg"},{"SLEOP_ID":"9186","Candidate_SLEOP_ID":"7880","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2272","PollingCentreName":"Deima juction- Wahmann abu rd","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 020","PollingCentreWard":"Ward 061","CandidateSurname":"Tarawally","CandidateFirstName":"Musa","CandidatePoliticalParty":"CDP","CandidatePoliticalPartyName":"Citizens Democratic Party (CDP)","CandidatePoliticalPartyColor":"","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/musa-tarawally.jpg"},{"SLEOP_ID":"9185","Candidate_SLEOP_ID":"7880","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2271","PollingCentreName":"YMCA, Kambowaibu","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 020","PollingCentreWard":"Ward 061","CandidateSurname":"Tarawally","CandidateFirstName":"Musa","CandidatePoliticalParty":"CDP","CandidatePoliticalPartyName":"Citizens Democratic Party (CDP)","CandidatePoliticalPartyColor":"","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/musa-tarawally.jpg"},{"SLEOP_ID":"9184","Candidate_SLEOP_ID":"7880","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2269","PollingCentreName":"Temporary Polling Structure, Jones Garage, Gbo kak","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 021","PollingCentreWard":"Ward 060","CandidateSurname":"Tarawally","CandidateFirstName":"Musa","CandidatePoliticalParty":"CDP","CandidatePoliticalPartyName":"Citizens Democratic Party (CDP)","CandidatePoliticalPartyColor":"","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/musa-tarawally.jpg"},{"SLEOP_ID":"9183","Candidate_SLEOP_ID":"7880","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2268","PollingCentreName":"Gbo-kakajama, Badrudeen pri.sch.kenema Gbo-kakajam","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 021","PollingCentreWard":"Ward 060","CandidateSurname":"Tarawally","CandidateFirstName":"Musa","CandidatePoliticalParty":"CDP","CandidatePoliticalPartyName":"Citizens Democratic Party (CDP)","CandidatePoliticalPartyColor":"","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/musa-tarawally.jpg"},{"SLEOP_ID":"9182","Candidate_SLEOP_ID":"7880","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2267","PollingCentreName":"Police Training Center","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 021","PollingCentreWard":"Ward 060","CandidateSurname":"Tarawally","CandidateFirstName":"Musa","CandidatePoliticalParty":"CDP","CandidatePoliticalPartyName":"Citizens Democratic Party (CDP)","CandidatePoliticalPartyColor":"","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/musa-tarawally.jpg"},{"SLEOP_ID":"9181","Candidate_SLEOP_ID":"7880","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2266","PollingCentreName":"Plaza Kenema, Hanga rd","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 021","PollingCentreWard":"Ward 060","CandidateSurname":"Tarawally","CandidateFirstName":"Musa","CandidatePoliticalParty":"CDP","CandidatePoliticalPartyName":"Citizens Democratic Party (CDP)","CandidatePoliticalPartyColor":"","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/musa-tarawally.jpg"},{"SLEOP_ID":"9180","Candidate_SLEOP_ID":"7880","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2264","PollingCentreName":"Grace land academy, Gbanguta st","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 021","PollingCentreWard":"Ward 059","CandidateSurname":"Tarawally","CandidateFirstName":"Musa","CandidatePoliticalParty":"CDP","CandidatePoliticalPartyName":"Citizens Democratic Party (CDP)","CandidatePoliticalPartyColor":"","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/musa-tarawally.jpg"},{"SLEOP_ID":"9179","Candidate_SLEOP_ID":"7880","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2263","PollingCentreName":"Information Hall, Maxwell Khobe St.","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 021","PollingCentreWard":"Ward 059","CandidateSurname":"Tarawally","CandidateFirstName":"Musa","CandidatePoliticalParty":"CDP","CandidatePoliticalPartyName":"Citizens Democratic Party (CDP)","CandidatePoliticalPartyColor":"","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/musa-tarawally.jpg"},{"SLEOP_ID":"9178","Candidate_SLEOP_ID":"7880","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2262","PollingCentreName":"Kaisamba Terrace Field, Gbo - Lambayama","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 021","PollingCentreWard":"Ward 059","CandidateSurname":"Tarawally","CandidateFirstName":"Musa","CandidatePoliticalParty":"CDP","CandidatePoliticalPartyName":"Citizens Democratic Party (CDP)","CandidatePoliticalPartyColor":"","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/musa-tarawally.jpg"},{"SLEOP_ID":"9177","Candidate_SLEOP_ID":"7880","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2261","PollingCentreName":"Ahmadiyya Muslim Primary School, Nyandeyama","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 021","PollingCentreWard":"Ward 059","CandidateSurname":"Tarawally","CandidateFirstName":"Musa","CandidatePoliticalParty":"CDP","CandidatePoliticalPartyName":"Citizens Democratic Party (CDP)","CandidatePoliticalPartyColor":"","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/musa-tarawally.jpg"},{"SLEOP_ID":"9176","Candidate_SLEOP_ID":"7880","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2260","PollingCentreName":"Pavillion Show Field, Gbo Lambayama, Pavillion Sho","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 021","PollingCentreWard":"Ward 059","CandidateSurname":"Tarawally","CandidateFirstName":"Musa","CandidatePoliticalParty":"CDP","CandidatePoliticalPartyName":"Citizens Democratic Party (CDP)","CandidatePoliticalPartyColor":"","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/musa-tarawally.jpg"},{"SLEOP_ID":"9175","Candidate_SLEOP_ID":"7880","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2258","PollingCentreName":"N. A. Court Barray","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 021","PollingCentreWard":"Ward 058","CandidateSurname":"Tarawally","CandidateFirstName":"Musa","CandidatePoliticalParty":"CDP","CandidatePoliticalPartyName":"Citizens Democratic Party (CDP)","CandidatePoliticalPartyColor":"","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/musa-tarawally.jpg"},{"SLEOP_ID":"9174","Candidate_SLEOP_ID":"7880","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2257","PollingCentreName":"Badrudeen sec.sch., Gbo-kakajama, Badrudeen sec.sc","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 021","PollingCentreWard":"Ward 058","CandidateSurname":"Tarawally","CandidateFirstName":"Musa","CandidatePoliticalParty":"CDP","CandidatePoliticalPartyName":"Citizens Democratic Party (CDP)","CandidatePoliticalPartyColor":"","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/musa-tarawally.jpg"},{"SLEOP_ID":"9173","Candidate_SLEOP_ID":"7880","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2256","PollingCentreName":"Methodist Secondary School, Gbo -Lambayama","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 021","PollingCentreWard":"Ward 058","CandidateSurname":"Tarawally","CandidateFirstName":"Musa","CandidatePoliticalParty":"CDP","CandidatePoliticalPartyName":"Citizens Democratic Party (CDP)","CandidatePoliticalPartyColor":"","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/musa-tarawally.jpg"},{"SLEOP_ID":"9172","Candidate_SLEOP_ID":"7880","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2255","PollingCentreName":"Islamic Dawar Primary School","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 021","PollingCentreWard":"Ward 058","CandidateSurname":"Tarawally","CandidateFirstName":"Musa","CandidatePoliticalParty":"CDP","CandidatePoliticalPartyName":"Citizens Democratic Party (CDP)","CandidatePoliticalPartyColor":"","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/musa-tarawally.jpg"},{"SLEOP_ID":"9171","Candidate_SLEOP_ID":"7880","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2254","PollingCentreName":"Methodist Primary School","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 021","PollingCentreWard":"Ward 058","CandidateSurname":"Tarawally","CandidateFirstName":"Musa","CandidatePoliticalParty":"CDP","CandidatePoliticalPartyName":"Citizens Democratic Party (CDP)","CandidatePoliticalPartyColor":"","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/musa-tarawally.jpg"},{"SLEOP_ID":"9170","Candidate_SLEOP_ID":"7880","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2252","PollingCentreName":"Open space by 2 makaya st,Nyaynawama","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 021","PollingCentreWard":"Ward 057","CandidateSurname":"Tarawally","CandidateFirstName":"Musa","CandidatePoliticalParty":"CDP","CandidatePoliticalPartyName":"Citizens Democratic Party (CDP)","CandidatePoliticalPartyColor":"","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/musa-tarawally.jpg"},{"SLEOP_ID":"9169","Candidate_SLEOP_ID":"7880","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2251","PollingCentreName":"Air field area-Kenema (Police station)","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 021","PollingCentreWard":"Ward 057","CandidateSurname":"Tarawally","CandidateFirstName":"Musa","CandidatePoliticalParty":"CDP","CandidatePoliticalPartyName":"Citizens Democratic Party (CDP)","CandidatePoliticalPartyColor":"","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/musa-tarawally.jpg"},{"SLEOP_ID":"9168","Candidate_SLEOP_ID":"7880","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2250","PollingCentreName":"Under a tree(shade), Gbo Kakajama(A-burmaIII), Bur","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 021","PollingCentreWard":"Ward 057","CandidateSurname":"Tarawally","CandidateFirstName":"Musa","CandidatePoliticalParty":"CDP","CandidatePoliticalPartyName":"Citizens Democratic Party (CDP)","CandidatePoliticalPartyColor":"","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/musa-tarawally.jpg"},{"SLEOP_ID":"9167","Candidate_SLEOP_ID":"7880","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2249","PollingCentreName":"Municipal primary sch","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 021","PollingCentreWard":"Ward 057","CandidateSurname":"Tarawally","CandidateFirstName":"Musa","CandidatePoliticalParty":"CDP","CandidatePoliticalPartyName":"Citizens Democratic Party (CDP)","CandidatePoliticalPartyColor":"","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/musa-tarawally.jpg"},{"SLEOP_ID":"9166","Candidate_SLEOP_ID":"7880","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2248","PollingCentreName":"Open space, Burma 3(by the Mosque), Nyakehun","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 021","PollingCentreWard":"Ward 057","CandidateSurname":"Tarawally","CandidateFirstName":"Musa","CandidatePoliticalParty":"CDP","CandidatePoliticalPartyName":"Citizens Democratic Party (CDP)","CandidatePoliticalPartyColor":"","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/musa-tarawally.jpg"},{"SLEOP_ID":"9165","Candidate_SLEOP_ID":"7880","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2246","PollingCentreName":"Open space 1,Kondebotihun","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 021","PollingCentreWard":"Ward 056","CandidateSurname":"Tarawally","CandidateFirstName":"Musa","CandidatePoliticalParty":"CDP","CandidatePoliticalPartyName":"Citizens Democratic Party (CDP)","CandidatePoliticalPartyColor":"","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/musa-tarawally.jpg"},{"SLEOP_ID":"9164","Candidate_SLEOP_ID":"7880","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2245","PollingCentreName":"Open space 2,Kondebotihun","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 021","PollingCentreWard":"Ward 056","CandidateSurname":"Tarawally","CandidateFirstName":"Musa","CandidatePoliticalParty":"CDP","CandidatePoliticalPartyName":"Citizens Democratic Party (CDP)","CandidatePoliticalPartyColor":"","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/musa-tarawally.jpg"},{"SLEOP_ID":"9163","Candidate_SLEOP_ID":"7880","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2244","PollingCentreName":"Provincial Islamic School, Kondebotihun","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 021","PollingCentreWard":"Ward 056","CandidateSurname":"Tarawally","CandidateFirstName":"Musa","CandidatePoliticalParty":"CDP","CandidatePoliticalPartyName":"Citizens Democratic Party (CDP)","CandidatePoliticalPartyColor":"","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/musa-tarawally.jpg"},{"SLEOP_ID":"9162","Candidate_SLEOP_ID":"7880","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2243","PollingCentreName":"Open space by 3 kpaka drive","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 021","PollingCentreWard":"Ward 056","CandidateSurname":"Tarawally","CandidateFirstName":"Musa","CandidatePoliticalParty":"CDP","CandidatePoliticalPartyName":"Citizens Democratic Party (CDP)","CandidatePoliticalPartyColor":"","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/musa-tarawally.jpg"},{"SLEOP_ID":"9161","Candidate_SLEOP_ID":"7880","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2241","PollingCentreName":"St. Kizito primary school, Gbo Lambayama, St. Kizi","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 021","PollingCentreWard":"Ward 055","CandidateSurname":"Tarawally","CandidateFirstName":"Musa","CandidatePoliticalParty":"CDP","CandidatePoliticalPartyName":"Citizens Democratic Party (CDP)","CandidatePoliticalPartyColor":"","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/musa-tarawally.jpg"},{"SLEOP_ID":"9160","Candidate_SLEOP_ID":"7880","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2240","PollingCentreName":"New Apostolic Church, RTI Camp, W.F.P Building","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 021","PollingCentreWard":"Ward 055","CandidateSurname":"Tarawally","CandidateFirstName":"Musa","CandidatePoliticalParty":"CDP","CandidatePoliticalPartyName":"Citizens Democratic Party (CDP)","CandidatePoliticalPartyColor":"","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/musa-tarawally.jpg"},{"SLEOP_ID":"9159","Candidate_SLEOP_ID":"7880","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2239","PollingCentreName":"KDC Primary School, Gombu Town","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 021","PollingCentreWard":"Ward 055","CandidateSurname":"Tarawally","CandidateFirstName":"Musa","CandidatePoliticalParty":"CDP","CandidatePoliticalPartyName":"Citizens Democratic Party (CDP)","CandidatePoliticalPartyColor":"","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/musa-tarawally.jpg"},{"SLEOP_ID":"9158","Candidate_SLEOP_ID":"7880","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2238","PollingCentreName":"Living stone pri. Sch - Lamin kosia st","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 021","PollingCentreWard":"Ward 055","CandidateSurname":"Tarawally","CandidateFirstName":"Musa","CandidatePoliticalParty":"CDP","CandidatePoliticalPartyName":"Citizens Democratic Party (CDP)","CandidatePoliticalPartyColor":"","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/musa-tarawally.jpg"},{"SLEOP_ID":"9157","Candidate_SLEOP_ID":"7880","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2236","PollingCentreName":"Gombu market","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 018","PollingCentreWard":"Ward 054","CandidateSurname":"Tarawally","CandidateFirstName":"Musa","CandidatePoliticalParty":"CDP","CandidatePoliticalPartyName":"Citizens Democratic Party (CDP)","CandidatePoliticalPartyColor":"","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/musa-tarawally.jpg"},{"SLEOP_ID":"9156","Candidate_SLEOP_ID":"7880","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2235","PollingCentreName":"Town Barrie, Famanjo(punduru), Punduru Town Barrie","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 018","PollingCentreWard":"Ward 054","CandidateSurname":"Tarawally","CandidateFirstName":"Musa","CandidatePoliticalParty":"CDP","CandidatePoliticalPartyName":"Citizens Democratic Party (CDP)","CandidatePoliticalPartyColor":"","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/musa-tarawally.jpg"},{"SLEOP_ID":"9155","Candidate_SLEOP_ID":"7880","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2234","PollingCentreName":"Town Barrie, Famanjo(Bambakalima, Bambakalima Town","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 018","PollingCentreWard":"Ward 054","CandidateSurname":"Tarawally","CandidateFirstName":"Musa","CandidatePoliticalParty":"CDP","CandidatePoliticalPartyName":"Citizens Democratic Party (CDP)","CandidatePoliticalPartyColor":"","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/musa-tarawally.jpg"},{"SLEOP_ID":"9154","Candidate_SLEOP_ID":"7880","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2233","PollingCentreName":"Town Barrie, Famanjo(Fomaya), Fomaya Town Barrie","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 018","PollingCentreWard":"Ward 054","CandidateSurname":"Tarawally","CandidateFirstName":"Musa","CandidatePoliticalParty":"CDP","CandidatePoliticalPartyName":"Citizens Democratic Party (CDP)","CandidatePoliticalPartyColor":"","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/musa-tarawally.jpg"},{"SLEOP_ID":"9153","Candidate_SLEOP_ID":"6","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"3013","PollingCentreName":"N/A Barray, Sewafe","PollingCentreDistrict":"Kono","PollingCentreConstituency":"Constituency 030","PollingCentreWard":"Ward 074","CandidateSurname":"Kamara","CandidateFirstName":"Samura","CandidatePoliticalParty":"APC","CandidatePoliticalPartyName":"All Peoples Congress (APC)","CandidatePoliticalPartyColor":"FF0000","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/dr-samura-matthew-wilson-kamara.jpg"},{"SLEOP_ID":"9152","Candidate_SLEOP_ID":"6","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"3014","PollingCentreName":"N/A Barray, Teiko","PollingCentreDistrict":"Kono","PollingCentreConstituency":"Constituency 030","PollingCentreWard":"Ward 074","CandidateSurname":"Kamara","CandidateFirstName":"Samura","CandidatePoliticalParty":"APC","CandidatePoliticalPartyName":"All Peoples Congress (APC)","CandidatePoliticalPartyColor":"FF0000","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/dr-samura-matthew-wilson-kamara.jpg"},{"SLEOP_ID":"9149","Candidate_SLEOP_ID":"6","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"3012","PollingCentreName":"S.L.M.Y.C.O Prim. Sch.,Sewafe","PollingCentreDistrict":"Kono","PollingCentreConstituency":"Constituency 030","PollingCentreWard":"Ward 074","CandidateSurname":"Kamara","CandidateFirstName":"Samura","CandidatePoliticalParty":"APC","CandidatePoliticalPartyName":"All Peoples Congress (APC)","CandidatePoliticalPartyColor":"FF0000","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/dr-samura-matthew-wilson-kamara.jpg"},{"SLEOP_ID":"9150","Candidate_SLEOP_ID":"6","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"3009","PollingCentreName":"Community Barray,Mattama","PollingCentreDistrict":"Kono","PollingCentreConstituency":"Constituency 030","PollingCentreWard":"Ward 074","CandidateSurname":"Kamara","CandidateFirstName":"Samura","CandidatePoliticalParty":"APC","CandidatePoliticalPartyName":"All Peoples Congress (APC)","CandidatePoliticalPartyColor":"FF0000","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/dr-samura-matthew-wilson-kamara.jpg"},{"SLEOP_ID":"9148","Candidate_SLEOP_ID":"6","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"3011","PollingCentreName":"K.D.E.C Prim. Sch., Tembedu","PollingCentreDistrict":"Kono","PollingCentreConstituency":"Constituency 029","PollingCentreWard":"Ward 073","CandidateSurname":"Kamara","CandidateFirstName":"Samura","CandidatePoliticalParty":"APC","CandidatePoliticalPartyName":"All Peoples Congress (APC)","CandidatePoliticalPartyColor":"FF0000","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/dr-samura-matthew-wilson-kamara.jpg"},{"SLEOP_ID":"9147","Candidate_SLEOP_ID":"6","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"3007","PollingCentreName":"S.D.A Prim. Sch.,Sandiya","PollingCentreDistrict":"Kono","PollingCentreConstituency":"Constituency 029","PollingCentreWard":"Ward 073","CandidateSurname":"Kamara","CandidateFirstName":"Samura","CandidatePoliticalParty":"APC","CandidatePoliticalPartyName":"All Peoples Congress (APC)","CandidatePoliticalPartyColor":"FF0000","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/dr-samura-matthew-wilson-kamara.jpg"},{"SLEOP_ID":"9146","Candidate_SLEOP_ID":"6","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"3006","PollingCentreName":"Unfinished Building,Ndogboi","PollingCentreDistrict":"Kono","PollingCentreConstituency":"Constituency 029","PollingCentreWard":"Ward 073","CandidateSurname":"Kamara","CandidateFirstName":"Samura","CandidatePoliticalParty":"APC","CandidatePoliticalPartyName":"All Peoples Congress (APC)","CandidatePoliticalPartyColor":"FF0000","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/dr-samura-matthew-wilson-kamara.jpg"},{"SLEOP_ID":"9145","Candidate_SLEOP_ID":"6","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"3005","PollingCentreName":"N/A Barray, Ngo Town","PollingCentreDistrict":"Kono","PollingCentreConstituency":"Constituency 029","PollingCentreWard":"Ward 073","CandidateSurname":"Kamara","CandidateFirstName":"Samura","CandidatePoliticalParty":"APC","CandidatePoliticalPartyName":"All Peoples Congress (APC)","CandidatePoliticalPartyColor":"FF0000","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/dr-samura-matthew-wilson-kamara.jpg"},{"SLEOP_ID":"9144","Candidate_SLEOP_ID":"6","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"3004","PollingCentreName":"S.L.M.B Prim.,Bambakunaya","PollingCentreDistrict":"Kono","PollingCentreConstituency":"Constituency 029","PollingCentreWard":"Ward 073","CandidateSurname":"Kamara","CandidateFirstName":"Samura","CandidatePoliticalParty":"APC","CandidatePoliticalPartyName":"All Peoples Congress (APC)","CandidatePoliticalPartyColor":"FF0000","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/dr-samura-matthew-wilson-kamara.jpg"},{"SLEOP_ID":"9143","Candidate_SLEOP_ID":"6","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"3015","PollingCentreName":"R.C Prim. Sch., Peya","PollingCentreDistrict":"Kono","PollingCentreConstituency":"Constituency 030","PollingCentreWard":"Ward 074","CandidateSurname":"Kamara","CandidateFirstName":"Samura","CandidatePoliticalParty":"APC","CandidatePoliticalPartyName":"All Peoples Congress (APC)","CandidatePoliticalPartyColor":"FF0000","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/dr-samura-matthew-wilson-kamara.jpg"},{"SLEOP_ID":"9142","Candidate_SLEOP_ID":"6","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"3003","PollingCentreName":"KDEC Primary School,Masabendu","PollingCentreDistrict":"Kono","PollingCentreConstituency":"Constituency 029","PollingCentreWard":"Ward 073","CandidateSurname":"Kamara","CandidateFirstName":"Samura","CandidatePoliticalParty":"APC","CandidatePoliticalPartyName":"All Peoples Congress (APC)","CandidatePoliticalPartyColor":"FF0000","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/dr-samura-matthew-wilson-kamara.jpg"},{"SLEOP_ID":"9141","Candidate_SLEOP_ID":"6","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"3002","PollingCentreName":"Open Space,Kangama","PollingCentreDistrict":"Kono","PollingCentreConstituency":"Constituency 029","PollingCentreWard":"Ward 073","CandidateSurname":"Kamara","CandidateFirstName":"Samura","CandidatePoliticalParty":"APC","CandidatePoliticalPartyName":"All Peoples Congress (APC)","CandidatePoliticalPartyColor":"FF0000","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/dr-samura-matthew-wilson-kamara.jpg"},{"SLEOP_ID":"9140","Candidate_SLEOP_ID":"6","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2337","PollingCentreName":"Ansarul sec.school, Gbo kakajama, Ansarul sec.sch.","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 020","PollingCentreWard":"Ward 072","CandidateSurname":"Kamara","CandidateFirstName":"Samura","CandidatePoliticalParty":"APC","CandidatePoliticalPartyName":"All Peoples Congress (APC)","CandidatePoliticalPartyColor":"FF0000","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/dr-samura-matthew-wilson-kamara.jpg"},{"SLEOP_ID":"9139","Candidate_SLEOP_ID":"6","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2336","PollingCentreName":"College sec. sch.Combema Road, Gbo kakajama, Colle","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 020","PollingCentreWard":"Ward 072","CandidateSurname":"Kamara","CandidateFirstName":"Samura","CandidatePoliticalParty":"APC","CandidatePoliticalPartyName":"All Peoples Congress (APC)","CandidatePoliticalPartyColor":"FF0000","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/dr-samura-matthew-wilson-kamara.jpg"},{"SLEOP_ID":"9138","Candidate_SLEOP_ID":"6","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2332","PollingCentreName":"25 Jenneh st. junction, Gbo- kakajama, Jenneh St.","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 019","PollingCentreWard":"Ward 071","CandidateSurname":"Kamara","CandidateFirstName":"Samura","CandidatePoliticalParty":"APC","CandidatePoliticalPartyName":"All Peoples Congress (APC)","CandidatePoliticalPartyColor":"FF0000","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/dr-samura-matthew-wilson-kamara.jpg"},{"SLEOP_ID":"9137","Candidate_SLEOP_ID":"6","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2331","PollingCentreName":"S.L.C.-ST.James school, S.L.C-St. James mission rd","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 019","PollingCentreWard":"Ward 071","CandidateSurname":"Kamara","CandidateFirstName":"Samura","CandidatePoliticalParty":"APC","CandidatePoliticalPartyName":"All Peoples Congress (APC)","CandidatePoliticalPartyColor":"FF0000","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/dr-samura-matthew-wilson-kamara.jpg"},{"SLEOP_ID":"9136","Candidate_SLEOP_ID":"6","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2330","PollingCentreName":"K.D.E.C. Primary school, Gbo- kakajama, K.D.E.C pr","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 019","PollingCentreWard":"Ward 071","CandidateSurname":"Kamara","CandidateFirstName":"Samura","CandidatePoliticalParty":"APC","CandidatePoliticalPartyName":"All Peoples Congress (APC)","CandidatePoliticalPartyColor":"FF0000","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/dr-samura-matthew-wilson-kamara.jpg"},{"SLEOP_ID":"9135","Candidate_SLEOP_ID":"6","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2329","PollingCentreName":"Kankaly primary sch. Building, Gbo kakajama, Kanka","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 019","PollingCentreWard":"Ward 071","CandidateSurname":"Kamara","CandidateFirstName":"Samura","CandidatePoliticalParty":"APC","CandidatePoliticalPartyName":"All Peoples Congress (APC)","CandidatePoliticalPartyColor":"FF0000","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/dr-samura-matthew-wilson-kamara.jpg"},{"SLEOP_ID":"9134","Candidate_SLEOP_ID":"6","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2328","PollingCentreName":"Assembly of God church, Gbo kakajama, Assembly of","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 019","PollingCentreWard":"Ward 071","CandidateSurname":"Kamara","CandidateFirstName":"Samura","CandidatePoliticalParty":"APC","CandidatePoliticalPartyName":"All Peoples Congress (APC)","CandidatePoliticalPartyColor":"FF0000","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/dr-samura-matthew-wilson-kamara.jpg"},{"SLEOP_ID":"9133","Candidate_SLEOP_ID":"6","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2326","PollingCentreName":"Polytech Cateen, Gbo- kakajama, Polytech Cateen","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 019","PollingCentreWard":"Ward 070","CandidateSurname":"Kamara","CandidateFirstName":"Samura","CandidatePoliticalParty":"APC","CandidatePoliticalPartyName":"All Peoples Congress (APC)","CandidatePoliticalPartyColor":"FF0000","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/dr-samura-matthew-wilson-kamara.jpg"},{"SLEOP_ID":"9132","Candidate_SLEOP_ID":"6","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2325","PollingCentreName":"Gov. hospital-under five clinic-keneme, Gbo- kakaj","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 019","PollingCentreWard":"Ward 070","CandidateSurname":"Kamara","CandidateFirstName":"Samura","CandidatePoliticalParty":"APC","CandidatePoliticalPartyName":"All Peoples Congress (APC)","CandidatePoliticalPartyColor":"FF0000","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/dr-samura-matthew-wilson-kamara.jpg"},{"SLEOP_ID":"9131","Candidate_SLEOP_ID":"6","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2324","PollingCentreName":"Open space Massaquoi St.","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 019","PollingCentreWard":"Ward 070","CandidateSurname":"Kamara","CandidateFirstName":"Samura","CandidatePoliticalParty":"APC","CandidatePoliticalPartyName":"All Peoples Congress (APC)","CandidatePoliticalPartyColor":"FF0000","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/dr-samura-matthew-wilson-kamara.jpg"},{"SLEOP_ID":"9130","Candidate_SLEOP_ID":"6","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2323","PollingCentreName":"Temporary Polling Structure,Duwai/kpoli street, Gb","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 019","PollingCentreWard":"Ward 070","CandidateSurname":"Kamara","CandidateFirstName":"Samura","CandidatePoliticalParty":"APC","CandidatePoliticalPartyName":"All Peoples Congress (APC)","CandidatePoliticalPartyColor":"FF0000","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/dr-samura-matthew-wilson-kamara.jpg"},{"SLEOP_ID":"9129","Candidate_SLEOP_ID":"6","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2321","PollingCentreName":"K.D.C. Kapayama, Gbo Kakajama, K.D.C Kpayama","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 019","PollingCentreWard":"Ward 069","CandidateSurname":"Kamara","CandidateFirstName":"Samura","CandidatePoliticalParty":"APC","CandidatePoliticalPartyName":"All Peoples Congress (APC)","CandidatePoliticalPartyColor":"FF0000","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/dr-samura-matthew-wilson-kamara.jpg"},{"SLEOP_ID":"9128","Candidate_SLEOP_ID":"6","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2316","PollingCentreName":"Temporary Polling Structure, Abdulai St., Gbo- kak","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 019","PollingCentreWard":"Ward 069","CandidateSurname":"Kamara","CandidateFirstName":"Samura","CandidatePoliticalParty":"APC","CandidatePoliticalPartyName":"All Peoples Congress (APC)","CandidatePoliticalPartyColor":"FF0000","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/dr-samura-matthew-wilson-kamara.jpg"},{"SLEOP_ID":"9127","Candidate_SLEOP_ID":"6","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2314","PollingCentreName":"S.D.A. School compound, (A kpayamaSDA), S.D.A comp","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 019","PollingCentreWard":"Ward 068","CandidateSurname":"Kamara","CandidateFirstName":"Samura","CandidatePoliticalParty":"APC","CandidatePoliticalPartyName":"All Peoples Congress (APC)","CandidatePoliticalPartyColor":"FF0000","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/dr-samura-matthew-wilson-kamara.jpg"},{"SLEOP_ID":"9126","Candidate_SLEOP_ID":"6","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2313","PollingCentreName":"HRSS School Compound, Gbo- Kakajama","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 019","PollingCentreWard":"Ward 068","CandidateSurname":"Kamara","CandidateFirstName":"Samura","CandidatePoliticalParty":"APC","CandidatePoliticalPartyName":"All Peoples Congress (APC)","CandidatePoliticalPartyColor":"FF0000","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/dr-samura-matthew-wilson-kamara.jpg"},{"SLEOP_ID":"9125","Candidate_SLEOP_ID":"6","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2312","PollingCentreName":"Luke&#039;s Commercial sec. school, Torkpumbu II, Luke&#039;","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 019","PollingCentreWard":"Ward 068","CandidateSurname":"Kamara","CandidateFirstName":"Samura","CandidatePoliticalParty":"APC","CandidatePoliticalPartyName":"All Peoples Congress (APC)","CandidatePoliticalPartyColor":"FF0000","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/dr-samura-matthew-wilson-kamara.jpg"},{"SLEOP_ID":"9124","Candidate_SLEOP_ID":"6","ElectionDate":"2018-03-07","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingCentreCode":"2310","PollingCentreName":"Govt. sec. school building, Gbo Kakajama, Govt.sec","PollingCentreDistrict":"Kenema","PollingCentreConstituency":"Constituency 019","PollingCentreWard":"Ward 068","CandidateSurname":"Kamara","CandidateFirstName":"Samura","CandidatePoliticalParty":"APC","CandidatePoliticalPartyName":"All Peoples Congress (APC)","CandidatePoliticalPartyColor":"FF0000","ValidVotes":"0","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/dr-samura-matthew-wilson-kamara.jpg"}]

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

/***/ 393:
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

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__party_party__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__granularity_granularity__ = __webpack_require__(396);
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

/***/ 395:
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

/***/ 396:
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