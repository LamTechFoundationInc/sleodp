webpackJsonp([6],{

/***/ 131:
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
        this.granularity = "district";
        this.prevEnabled = false;
        this.nextEnabled = false;
        this.year = 0;
        this.prevYear = 0;
        this.nextYear = 0;
        this.subpages = [];
        this.subscription = this.dataService.getGranularity().subscribe(function (granularity) {
            _this.granularity = granularity;
            if (granularity == "polling_centre" || granularity == "polling_station") {
                _this.region = "village";
            }
            else
                _this.region = granularity;
            var currentIndex = _this.slides.getActiveIndex();
            if (currentIndex == _this.totalPages)
                return;
            _this.subPageViews._results[currentIndex].setContentView(_this.region, _this.granularity);
        });
    }
    ChairpersonPage.prototype.ionViewDidLoad = function () {
        this.load();
    };
    ChairpersonPage.prototype.ionViewDidEnter = function () {
        if (this.subpages.length > 0)
            this.subPageViews._results[0].setContentView(this.region, this.granularity);
    };
    // Load Subpages
    ChairpersonPage.prototype.load = function () {
        var _this = this;
        this.dataService.loadElectionYears()
            .then(function (data) {
            _this.subpages = data;
            _this.setPageInfo();
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
        if (currentIndex == this.totalPages)
            return;
        this.subPageViews._results[currentIndex].setContentView(this.region, this.granularity);
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
            selector: 'page-chairperson',template:/*ion-inline-start:"C:\Users\VM-3\Documents\sleodp_project\sleodp\src\pages\chairperson\chairperson.html"*/'<!--\n  Generated template for the ChairpersonPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<header-view>\n  <ion-navbar color="dark" sub-navbar>\n    <a float-left *ngIf="nextEnabled" (click)="setNextPage()" padding-left>\n      <ion-icon name="arrow-back" item-start></ion-icon> {{nextYear}}\n    </a>\n    <ion-title>\n      {{year}} Chairperson Elections\n    </ion-title>\n    <a float-right *ngIf="prevEnabled" (click)="setPrevPage()" padding-right>\n      {{prevYear}} <ion-icon name="arrow-forward" item-start></ion-icon>\n    </a>\n  </ion-navbar>\n</header-view>\n\n<ion-content padding>\n  <ion-slides (ionSlideDidChange)="slideChanged()" dir="rtl">\n\n    <ion-slide *ngFor="let p of subpages; let i = index">\n      <content-view type="chairperson" [year]="p.year" [region]="region" #chairperson_{{i}}></content-view>\n    </ion-slide>\n\n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"C:\Users\VM-3\Documents\sleodp_project\sleodp\src\pages\chairperson\chairperson.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */]])
    ], ChairpersonPage);
    return ChairpersonPage;
}());

//# sourceMappingURL=chairperson.js.map

/***/ }),

/***/ 145:
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
webpackEmptyAsyncContext.id = 145;

/***/ }),

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/chairperson/chairperson.module": [
		374,
		5
	],
	"../pages/councilor/councilor.module": [
		375,
		4
	],
	"../pages/mayor/mayor.module": [
		376,
		3
	],
	"../pages/parliament/parliament.module": [
		377,
		2
	],
	"../pages/president/president.module": [
		378,
		1
	],
	"../pages/village-headman/village-headman.module": [
		379,
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
webpackAsyncContext.id = 189;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var election_results = __webpack_require__(335);
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
            _this.http.get('https://electiondata.io/resources/political-parties/all')
                .subscribe(function (data) {
                console.log(data);
                _this.parties = data;
                resolve(_this.parties);
            });
        });
    };
    DataProvider.prototype.loadElectionYears = function () {
        var _this = this;
        this.loadParties();
        if (this.election_years) {
            return Promise.resolve(this.election_years);
        }
        this.election_years = [
            { year: 2018 },
            { year: 2012 },
            { year: 2007 },
            { year: 2002 },
            { year: 1996 }
        ];
        return new Promise(function (resolve) {
            resolve(_this.election_years);
        });
    };
    DataProvider.prototype.loadResultsByFields = function (fields) {
        var result = {};
        var isYear = false;
        var isType = false;
        var isRegion = false;
        var date = "";
        var date_position = -1;
        var date_string = "";
        var temp_results = election_results.filter(function (result) {
            date_position = result["ElectionDate"].indexOf(">");
            if (date_position != -1) {
                date = result["ElectionDate"].substring(date_position + 1, date_position + 11);
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
            if (!isType)
                return;
        });
        result['ResultStatus'] = "Provisional";
        result['TotalVotes'] = "310";
        result['ValidVotes'] = "300";
        result['InvalidVotes'] = "10";
        result['electionParties'] = [];
        return result;
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_index__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mapbox_gl_dist_mapbox_gl_js__ = __webpack_require__(336);
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
            'electionParties': []
        };
    }
    MapViewComponent.prototype.ngAfterViewInit = function () {
        this.isLoaded = false;
    };
    MapViewComponent.prototype.loadResults = function () {
        var fields = {
            year: this.year,
            type: this.type,
            region: this.region
        };
        this.result = this.dataService.loadResultsByFields(fields);
    };
    MapViewComponent.prototype.drawMap = function () {
        var mapContainer = this.year + "_map";
        // Create the popup
        var loadingPopup = this.loadingCtrl.create({
            content: 'Loading data...'
        });
        // Show the popup
        loadingPopup.present();
        var sourceUrl = 'assets/maps/' + this.region + '.geojson';
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
            map.addLayer({
                'id': 'map',
                'type': 'fill',
                'source': "map-layer",
                'paint': {
                    'fill-color': 'rgba(100, 0, 0, 1)',
                    'fill-outline-color': 'rgba(255, 255, 255, 1)',
                    "fill-opacity": 0.3,
                },
            });
            map.addLayer({
                'id': 'map-line',
                'type': 'line',
                'source': "map-layer",
                'paint': {
                    'line-width': 3,
                    'line-color': 'rgba(255, 255, 255, 1)'
                },
            });
            map.addLayer({
                "id": "map-highlighted",
                "type": "fill",
                "source": "map-layer",
                "paint": {
                    'fill-color': 'rgba(100, 0, 0, 1)',
                    'fill-outline-color': 'rgba(255, 255, 255, 0.5)',
                    "fill-opacity": 1.0
                },
                "filter": ["in", "Name", ""]
            });
            // When a click event occurs on a feature in the states layer, open a popup at the
            // location of the click, with description HTML from its properties.
            map.on('click', function (e) {
                // set bbox as 5px reactangle area around clicked point
                var bbox = [[e.point.x, e.point.y], [e.point.x, e.point.y]];
                var features = map.queryRenderedFeatures(bbox, { layers: ['map'] });
                // Run through the selected features and set a filter
                // to match features with unique FIPS codes to activate
                // the `map-highlighted` layer.
                var filter = features.reduce(function (memo, feature) {
                    memo.push(feature.properties.Name);
                    return memo;
                }, ['in', 'Name']);
                map.setFilter("map-highlighted", filter);
            });
            // disable map zoom when using scroll
            map.scrollZoom.disable();
            map.doubleClickZoom.disable();
            loadingPopup.dismiss();
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'map-view',template:/*ion-inline-start:"C:\Users\VM-3\Documents\sleodp_project\sleodp\src\components\map-view\map-view.html"*/'<!-- Generated template for the MapViewComponent component -->\n<div class="view-container">\n	<div id="{{year}}_map" class="map box">\n	</div>\n	<div class="election-details">\n		<div class="election-info">\n			<ion-grid no-padding>\n				<ion-row>\n					<ion-col text-right class="small">\n						Total Registered Votes: {{ result.TotalVotes }}<br>\n						Result Status: {{ result.ResultStatus }}\n					</ion-col>\n					<ion-col text-left class="small">\n						Total Valid Votes: {{ result.ValidVotes }}<br>\n						Total Invalid Votes: {{ result.InvalidVotes }}\n					</ion-col>\n				</ion-row>\n			</ion-grid>\n		</div>\n		<div class="election-parties">\n			<ion-grid no-padding>\n				<ion-row>\n					<ion-col *ngFor="let party of result.electionParties" class="small">\n						{{ party.CandidatePoliticalParty }}\n						<div class="party-card" [style.background-color]="party.CandidatePoliticalPartyColor"></div>\n					</ion-col>\n				</ion-row>\n			</ion-grid>\n		</div>\n		<div class="election-competitors">\n			<ion-grid no-padding hideWhen="core,tablet">\n				<ion-row>\n					<ion-col text-right>\n						<div text-left padding-bottom></div>\n						<div class="card" [style.background-color]="\'red\'">\n							<img src="/assets/imgs/avatar.png">\n						</div>\n					</ion-col>\n					<ion-col width-25 text-center>\n						<div padding-bottom></div>\n						<div class="card">All Others</div>\n						 \n					</ion-col>\n					<ion-col text-left>\n						<div text-right padding-bottom></div>\n						<div class="card" [style.background-color]="\'green\'">\n							<img src="/assets/imgs/avatar.png">\n						</div>\n					</ion-col>\n				</ion-row>\n			</ion-grid>\n			<ion-grid no-padding showWhen="tablet">\n				<ion-row>\n					<ion-col text-right>\n						<div text-left padding-bottom></div>\n						<div class="card" [style.background-color]="\'red\'">\n							<img src="/assets/imgs/avatar.png">\n						</div>\n					</ion-col>\n					<ion-col text-center>\n						<div text-center padding-bottom></div>\n						<div class="card" [style.background-color]="\'red\'">\n							<img src="/assets/imgs/avatar.png">\n						</div>\n					</ion-col>\n					<ion-col text-left>\n						<div text-right padding-bottom></div>\n						<div class="card" [style.background-color]="\'red\'">\n							<img src="/assets/imgs/avatar.png">\n						</div>\n					</ion-col>\n				</ion-row>\n				<ion-row>\n					<ion-col text-right>\n						<div text-left padding-bottom></div>\n						<div class="card" [style.background-color]="\'red\'">\n							<img src="/assets/imgs/avatar.png">\n						</div>\n					</ion-col>\n					<ion-col text-center>\n						<div text-center padding-bottom></div>\n						<div class="card" [style.background-color]="\'red\'">\n							<img src="/assets/imgs/avatar.png">\n						</div>\n					</ion-col>\n					<ion-col text-left>\n						<div text-right padding-bottom></div>\n						<div class="card" [style.background-color]="\'red\'">\n							<img src="/assets/imgs/avatar.png">\n						</div>\n					</ion-col>\n				</ion-row>\n			</ion-grid>\n			<ion-grid no-padding showWhen="core">\n				<ion-row>\n					<ion-col text-right>\n						<div text-left padding-bottom></div>\n						<div class="card" [style.background-color]="\'red\'">\n							<img src="/assets/imgs/avatar.png">\n						</div>\n					</ion-col>\n					<ion-col text-center>\n						<div text-center padding-bottom></div>\n						<div class="card" [style.background-color]="\'red\'">\n							<img src="/assets/imgs/avatar.png">\n						</div>\n					</ion-col>\n					<ion-col text-center>\n						<div text-center padding-bottom></div>\n						<div class="card" [style.background-color]="\'red\'">\n							<img src="/assets/imgs/avatar.png">\n						</div>\n					</ion-col>\n					<ion-col text-left>\n						<div text-right padding-bottom></div>\n						<div class="card" [style.background-color]="\'red\'">\n							<img src="/assets/imgs/avatar.png">\n						</div>\n					</ion-col>\n				</ion-row>\n				<ion-row>\n					<ion-col text-right>\n						<div text-left padding-bottom></div>\n						<div class="card" [style.background-color]="\'red\'">\n							<img src="/assets/imgs/avatar.png">\n						</div>\n					</ion-col>\n					<ion-col text-center>\n						<div text-center padding-bottom></div>\n						<div class="card" [style.background-color]="\'red\'">\n							<img src="/assets/imgs/avatar.png">\n						</div>\n					</ion-col>\n					<ion-col text-center>\n						<div text-center padding-bottom></div>\n						<div class="card" [style.background-color]="\'red\'">\n							<img src="/assets/imgs/avatar.png">\n						</div>\n					</ion-col>\n					<ion-col text-left>\n						<div text-right padding-bottom></div>\n						<div class="card" [style.background-color]="\'red\'">\n							<img src="/assets/imgs/avatar.png">\n						</div>\n					</ion-col>\n				</ion-row>\n				<ion-row>\n					<ion-col text-right>\n						<div text-left padding-bottom></div>\n						<div class="card" [style.background-color]="\'red\'">\n							<img src="/assets/imgs/avatar.png">\n						</div>\n					</ion-col>\n					<ion-col text-center>\n						<div text-center padding-bottom></div>\n						<div class="card" [style.background-color]="\'red\'">\n							<img src="/assets/imgs/avatar.png">\n						</div>\n					</ion-col>\n					<ion-col text-center>\n						<div text-center padding-bottom></div>\n						<div class="card" [style.background-color]="\'red\'">\n							<img src="/assets/imgs/avatar.png">\n						</div>\n					</ion-col>\n					<ion-col text-left>\n						<div text-right padding-bottom></div>\n						<div class="card" [style.background-color]="\'red\'">\n							<img src="/assets/imgs/avatar.png">\n						</div>\n					</ion-col>\n				</ion-row>\n			</ion-grid>\n		</div>\n	</div>\n</div>'/*ion-inline-end:"C:\Users\VM-3\Documents\sleodp_project\sleodp\src\components\map-view\map-view.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular_index__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__providers_data_data__["a" /* DataProvider */]])
    ], MapViewComponent);
    return MapViewComponent;
}());

//# sourceMappingURL=map-view.js.map

/***/ }),

/***/ 283:
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
            selector: 'range-view',template:/*ion-inline-start:"C:\Users\VM-3\Documents\sleodp_project\sleodp\src\components\range-view\range-view.html"*/'<!-- Generated template for the RangeViewComponent component -->\n<ion-list>\n	<ion-list-header>Result Granularity</ion-list-header>\n	<button ion-item (click)="seletGranularity(\'nation\')">National Results</button>\n	<button ion-item (click)="seletGranularity(\'region\')">Results By Region</button>\n	<button ion-item (click)="seletGranularity(\'district\')">Results By District</button>\n	<button ion-item (click)="seletGranularity(\'constituency\')">Results By Constituency</button>\n	<button ion-item (click)="seletGranularity(\'ward\')">Results By Ward</button>\n	<button ion-item (click)="seletGranularity(\'polling_centre\')">Results By Polling Center</button>\n</ion-list>'/*ion-inline-end:"C:\Users\VM-3\Documents\sleodp_project\sleodp\src\components\range-view\range-view.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */]])
    ], RangeViewComponent);
    return RangeViewComponent;
}());

//# sourceMappingURL=range-view.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(305);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_president_president__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_parliament_parliament__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_mayor_mayor__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_chairperson_chairperson__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_councilor_councilor__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_village_headman_village_headman__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_header_view_header_view__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_range_view_range_view__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_content_view_content_view__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_map_view_map_view__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_table_view_table_view__ = __webpack_require__(373);
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

/***/ 335:
/***/ (function(module, exports) {

module.exports = [{"SLEOP_ID":"1040","ElectionDate":"<time datetime=\"2012-11-17T12:00:00Z\" class=\"datetime\">11-17-2012</time>\n","ElectionType":"District Chairperson","ResultType":"District Results","PollingStation":"","ElectionVillage":"","ElectionWard":"","ElectionDistrict":"Kailahun","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Ellie","CandidateFirstName":"Mabey","CandidatePoliticalParty":"RUFP","CandidatePoliticalPartyColor":"","ValidVotes":"2723","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"1041","ElectionDate":"<time datetime=\"2012-11-17T12:00:00Z\" class=\"datetime\">11-17-2012</time>\n","ElectionType":"District Chairperson","ResultType":"District Results","PollingStation":"","ElectionVillage":"","ElectionWard":"","ElectionDistrict":"Kailahun","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Kemokai","CandidateFirstName":"Sylvanus","CandidatePoliticalParty":"","CandidatePoliticalPartyColor":"","ValidVotes":"1501","Winner":"Yes","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"1004","ElectionDate":"<time datetime=\"2012-11-17T12:00:00Z\" class=\"datetime\">11-17-2012</time>\n","ElectionType":"District Chairperson","ResultType":"District Results","PollingStation":"","ElectionVillage":"","ElectionWard":"","ElectionDistrict":"Kailahun","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Kortu","CandidateFirstName":"Augustine","CandidatePoliticalParty":"","CandidatePoliticalPartyColor":"","ValidVotes":"24746","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"936","ElectionDate":"<time datetime=\"2012-11-17T12:00:00Z\" class=\"datetime\">11-17-2012</time>\n","ElectionType":"District Chairperson","ResultType":"District Results","PollingStation":"","ElectionVillage":"","ElectionWard":"","ElectionDistrict":"Kailahun","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Bhonapha","CandidateFirstName":"Alex","CandidatePoliticalParty":"","CandidatePoliticalPartyColor":"","ValidVotes":"92266","Winner":"Yes","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7876","ElectionDate":"<time datetime=\"2012-11-17T12:00:00Z\" class=\"datetime\">11-17-2012</time>\n","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingStation":"Station 2, Town Barry, Baoma, Baoma - Kunywahun Section","ElectionVillage":"","ElectionWard":"","ElectionDistrict":"","ElectionConstituency":"","PollingCentreWard":"Ward 001","PollingCentreConstituency":"<a href=\"/constituency-001\" hreflang=\"en\">Constituency 001</a>","PollingCentreDistrict":"Kailahun","PollingCentreGeodata":"<span typeof=\"Place\">\n  <span property=\"geo\" typeof=\"GeoCoordinates\">\n    <meta property=\"latitude\" content=\"8.2802196\">\n    <meta property=\"longitude\" content=\"-10.5718086\">\n  </span>\n  <span class=\"geolocation-latlng\">8.2802196, -10.5718086</span>\n</span>\n","CandidateSurname":"Bai Koroma","CandidateFirstName":"Ernest","CandidatePoliticalParty":"APC","CandidatePoliticalPartyColor":"Red","ValidVotes":"123","Winner":"No","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/ernest-bai-koroma.jpg"},{"SLEOP_ID":"7876","ElectionDate":"<time datetime=\"2012-11-17T12:00:00Z\" class=\"datetime\">11-17-2012</time>\n","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingStation":"Station 2, Town Barry, Baoma, Baoma - Kunywahun Section","ElectionVillage":"","ElectionWard":"","ElectionDistrict":"","ElectionConstituency":"","PollingCentreWard":"Ward 001","PollingCentreConstituency":"<a href=\"/constituency-001\" hreflang=\"en\">Constituency 001</a>","PollingCentreDistrict":"Kailahun","PollingCentreGeodata":"<span typeof=\"Place\">\n  <span property=\"geo\" typeof=\"GeoCoordinates\">\n    <meta property=\"latitude\" content=\"8.2802196\">\n    <meta property=\"longitude\" content=\"-10.5718086\">\n  </span>\n  <span class=\"geolocation-latlng\">8.2802196, -10.5718086</span>\n</span>\n","CandidateSurname":"Bai Koroma","CandidateFirstName":"Ernest","CandidatePoliticalParty":"APC","CandidatePoliticalPartyColor":"Red","ValidVotes":"123","Winner":"No","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/ernest-bai-koroma.jpg"},{"SLEOP_ID":"7876","ElectionDate":"<time datetime=\"2012-11-17T12:00:00Z\" class=\"datetime\">11-17-2012</time>\n","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingStation":"Station 2, Town Barry, Baoma, Baoma - Kunywahun Section","ElectionVillage":"","ElectionWard":"","ElectionDistrict":"","ElectionConstituency":"","PollingCentreWard":"Ward 001","PollingCentreConstituency":"<a href=\"/constituency-001\" hreflang=\"en\">Constituency 001</a>","PollingCentreDistrict":"Kailahun","PollingCentreGeodata":"<span typeof=\"Place\">\n  <span property=\"geo\" typeof=\"GeoCoordinates\">\n    <meta property=\"latitude\" content=\"8.2802196\">\n    <meta property=\"longitude\" content=\"-10.5718086\">\n  </span>\n  <span class=\"geolocation-latlng\">8.2802196, -10.5718086</span>\n</span>\n","CandidateSurname":"Bai Koroma","CandidateFirstName":"Ernest","CandidatePoliticalParty":"APC","CandidatePoliticalPartyColor":"Red","ValidVotes":"123","Winner":"No","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/ernest-bai-koroma.jpg"},{"SLEOP_ID":"7875","ElectionDate":"<time datetime=\"2012-11-17T12:00:00Z\" class=\"datetime\">11-17-2012</time>\n","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingStation":"Station 2, Town Barry, Baoma, Baoma - Kunywahun Section","ElectionVillage":"","ElectionWard":"","ElectionDistrict":"","ElectionConstituency":"","PollingCentreWard":"Ward 001","PollingCentreConstituency":"<a href=\"/constituency-001\" hreflang=\"en\">Constituency 001</a>","PollingCentreDistrict":"Kailahun","PollingCentreGeodata":"<span typeof=\"Place\">\n  <span property=\"geo\" typeof=\"GeoCoordinates\">\n    <meta property=\"latitude\" content=\"8.2802196\">\n    <meta property=\"longitude\" content=\"-10.5718086\">\n  </span>\n  <span class=\"geolocation-latlng\">8.2802196, -10.5718086</span>\n</span>\n","CandidateSurname":"Maada Bio","CandidateFirstName":"Julius","CandidatePoliticalParty":"SLPP","CandidatePoliticalPartyColor":"Green","ValidVotes":"125","Winner":"Yes","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/maada-bio.jpg"},{"SLEOP_ID":"7875","ElectionDate":"<time datetime=\"2012-11-17T12:00:00Z\" class=\"datetime\">11-17-2012</time>\n","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingStation":"Station 2, Town Barry, Baoma, Baoma - Kunywahun Section","ElectionVillage":"","ElectionWard":"","ElectionDistrict":"","ElectionConstituency":"","PollingCentreWard":"Ward 001","PollingCentreConstituency":"<a href=\"/constituency-001\" hreflang=\"en\">Constituency 001</a>","PollingCentreDistrict":"Kailahun","PollingCentreGeodata":"<span typeof=\"Place\">\n  <span property=\"geo\" typeof=\"GeoCoordinates\">\n    <meta property=\"latitude\" content=\"8.2802196\">\n    <meta property=\"longitude\" content=\"-10.5718086\">\n  </span>\n  <span class=\"geolocation-latlng\">8.2802196, -10.5718086</span>\n</span>\n","CandidateSurname":"Maada Bio","CandidateFirstName":"Julius","CandidatePoliticalParty":"SLPP","CandidatePoliticalPartyColor":"Green","ValidVotes":"125","Winner":"Yes","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/maada-bio.jpg"},{"SLEOP_ID":"7872","ElectionDate":"<time datetime=\"2012-11-17T12:00:00Z\" class=\"datetime\">11-17-2012</time>\n","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingStation":"Station 1, Town Barry, Baoma, Baoma - Kunywahun Section","ElectionVillage":"","ElectionWard":"","ElectionDistrict":"","ElectionConstituency":"","PollingCentreWard":"Ward 001","PollingCentreConstituency":"<a href=\"/constituency-001\" hreflang=\"en\">Constituency 001</a>","PollingCentreDistrict":"Kailahun","PollingCentreGeodata":"<span typeof=\"Place\">\n  <span property=\"geo\" typeof=\"GeoCoordinates\">\n    <meta property=\"latitude\" content=\"8.2802196\">\n    <meta property=\"longitude\" content=\"-10.5718086\">\n  </span>\n  <span class=\"geolocation-latlng\">8.2802196, -10.5718086</span>\n</span>\n","CandidateSurname":"Bai Koroma","CandidateFirstName":"Ernest","CandidatePoliticalParty":"APC","CandidatePoliticalPartyColor":"Red","ValidVotes":"105","Winner":"No","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/ernest-bai-koroma.jpg"},{"SLEOP_ID":"7872","ElectionDate":"<time datetime=\"2012-11-17T12:00:00Z\" class=\"datetime\">11-17-2012</time>\n","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingStation":"Station 1, Town Barry, Baoma, Baoma - Kunywahun Section","ElectionVillage":"","ElectionWard":"","ElectionDistrict":"","ElectionConstituency":"","PollingCentreWard":"Ward 001","PollingCentreConstituency":"<a href=\"/constituency-001\" hreflang=\"en\">Constituency 001</a>","PollingCentreDistrict":"Kailahun","PollingCentreGeodata":"<span typeof=\"Place\">\n  <span property=\"geo\" typeof=\"GeoCoordinates\">\n    <meta property=\"latitude\" content=\"8.2802196\">\n    <meta property=\"longitude\" content=\"-10.5718086\">\n  </span>\n  <span class=\"geolocation-latlng\">8.2802196, -10.5718086</span>\n</span>\n","CandidateSurname":"Bai Koroma","CandidateFirstName":"Ernest","CandidatePoliticalParty":"APC","CandidatePoliticalPartyColor":"Red","ValidVotes":"105","Winner":"No","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/ernest-bai-koroma.jpg"},{"SLEOP_ID":"7872","ElectionDate":"<time datetime=\"2012-11-17T12:00:00Z\" class=\"datetime\">11-17-2012</time>\n","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingStation":"Station 1, Town Barry, Baoma, Baoma - Kunywahun Section","ElectionVillage":"","ElectionWard":"","ElectionDistrict":"","ElectionConstituency":"","PollingCentreWard":"Ward 001","PollingCentreConstituency":"<a href=\"/constituency-001\" hreflang=\"en\">Constituency 001</a>","PollingCentreDistrict":"Kailahun","PollingCentreGeodata":"<span typeof=\"Place\">\n  <span property=\"geo\" typeof=\"GeoCoordinates\">\n    <meta property=\"latitude\" content=\"8.2802196\">\n    <meta property=\"longitude\" content=\"-10.5718086\">\n  </span>\n  <span class=\"geolocation-latlng\">8.2802196, -10.5718086</span>\n</span>\n","CandidateSurname":"Bai Koroma","CandidateFirstName":"Ernest","CandidatePoliticalParty":"APC","CandidatePoliticalPartyColor":"Red","ValidVotes":"105","Winner":"No","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/ernest-bai-koroma.jpg"},{"SLEOP_ID":"7873","ElectionDate":"<time datetime=\"2012-11-17T12:00:00Z\" class=\"datetime\">11-17-2012</time>\n","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingStation":"Station 1, Town Barry, Baoma, Baoma - Kunywahun Section","ElectionVillage":"","ElectionWard":"","ElectionDistrict":"","ElectionConstituency":"","PollingCentreWard":"Ward 001","PollingCentreConstituency":"<a href=\"/constituency-001\" hreflang=\"en\">Constituency 001</a>","PollingCentreDistrict":"Kailahun","PollingCentreGeodata":"<span typeof=\"Place\">\n  <span property=\"geo\" typeof=\"GeoCoordinates\">\n    <meta property=\"latitude\" content=\"8.2802196\">\n    <meta property=\"longitude\" content=\"-10.5718086\">\n  </span>\n  <span class=\"geolocation-latlng\">8.2802196, -10.5718086</span>\n</span>\n","CandidateSurname":"Maada Bio","CandidateFirstName":"Julius","CandidatePoliticalParty":"SLPP","CandidatePoliticalPartyColor":"Green","ValidVotes":"109","Winner":"Yes","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/maada-bio.jpg"},{"SLEOP_ID":"7873","ElectionDate":"<time datetime=\"2012-11-17T12:00:00Z\" class=\"datetime\">11-17-2012</time>\n","ElectionType":"Presidential","ResultType":"Polling Centre Results","PollingStation":"Station 1, Town Barry, Baoma, Baoma - Kunywahun Section","ElectionVillage":"","ElectionWard":"","ElectionDistrict":"","ElectionConstituency":"","PollingCentreWard":"Ward 001","PollingCentreConstituency":"<a href=\"/constituency-001\" hreflang=\"en\">Constituency 001</a>","PollingCentreDistrict":"Kailahun","PollingCentreGeodata":"<span typeof=\"Place\">\n  <span property=\"geo\" typeof=\"GeoCoordinates\">\n    <meta property=\"latitude\" content=\"8.2802196\">\n    <meta property=\"longitude\" content=\"-10.5718086\">\n  </span>\n  <span class=\"geolocation-latlng\">8.2802196, -10.5718086</span>\n</span>\n","CandidateSurname":"Maada Bio","CandidateFirstName":"Julius","CandidatePoliticalParty":"SLPP","CandidatePoliticalPartyColor":"Green","ValidVotes":"109","Winner":"Yes","ResultStatus":"Provisional","CandidatePhoto":"/sites/default/files/maada-bio.jpg"},{"SLEOP_ID":"7870","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"York","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Kargbo","CandidateFirstName":"Hassan Zac","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"268","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7868","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"York","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Pratt","CandidateFirstName":"Julrick","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"437","Winner":"Yes","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7865","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Yams Farm","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Sow","CandidateFirstName":"Abubakarr","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"634","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7863","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Yams Farm","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Conteh","CandidateFirstName":"Foday","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"2122","Winner":"Yes","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7860","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Torigehun","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Cole","CandidateFirstName":"John Victor","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"54","Winner":"Yes","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7858","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Torigehun","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Cole","CandidateFirstName":"Ola","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"45","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7855","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Tombo","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Sesay","CandidateFirstName":"Sassipo","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"8","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7853","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Tombo","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Kargbo","CandidateFirstName":"Lamin","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"98","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7851","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Tombo","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Mansaray","CandidateFirstName":"Mohamed Dumbuleh","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"1701","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7849","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Tombo","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Kargbo","CandidateFirstName":"Orbigay Alimamy","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"991","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7843","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Tombo","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Bangura","CandidateFirstName":"Mohamed Othaim","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"311","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7847","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Tombo","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Bah","CandidateFirstName":"Sarah","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"2626","Winner":"Yes","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7845","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Tombo","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Bangura","CandidateFirstName":"Nabieu","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"1207","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7841","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Tombo","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Sesay","CandidateFirstName":"Amadu","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"301","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7838","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Russel","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Bangura","CandidateFirstName":"Idrissa","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"101","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7836","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Mongegba","ElectionWard":"","ElectionDistrict":"","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Bangura","CandidateFirstName":"Momoh Ajatie","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"264","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7834","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Russel","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Gordon","CandidateFirstName":"Paul","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"111","Winner":"Yes","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7831","ElectionDate":"<time datetime=\"2017-02-12T12:00:00Z\" class=\"datetime\">02-12-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Kamara","CandidateFirstName":"Sallieu","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"448","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7829","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Langley","CandidateFirstName":"Beatrice Iyamide","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"1134","Winner":"Yes","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7827","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Mongegba","ElectionWard":"","ElectionDistrict":"","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Sesay","CandidateFirstName":"Abu","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"785","Winner":"Yes","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7824","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Cole","CandidateFirstName":"Kossie Henessy","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"575","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7822","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Matindi","ElectionWard":"","ElectionDistrict":"","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Kamara","CandidateFirstName":"Horatio Ngb","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"54","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7820","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Matindi","ElectionWard":"","ElectionDistrict":"","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Sannoh","CandidateFirstName":"Samuel Issa","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"342","Winner":"Yes","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7817","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Masorie 2","ElectionWard":"","ElectionDistrict":"","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Barrie","CandidateFirstName":"Alpha Umar","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"281","Winner":"Yes","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7815","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Masorie 2","ElectionWard":"","ElectionDistrict":"","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Bangura","CandidateFirstName":"Musa","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"126","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7813","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Masorie 2","ElectionWard":"","ElectionDistrict":"","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Kamara","CandidateFirstName":"Mohamed Okala","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"102","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7810","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Masantigie","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Kanu","CandidateFirstName":"Mohamed Otaim","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"179","Winner":"Yes","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7807","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Mano Koya","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Tarawallie","CandidateFirstName":"Abubakarr","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"123","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7805","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Mano Koya","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Kargbo","CandidateFirstName":"Alpha","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"351","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7803","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Mano Koya","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Kamara","CandidateFirstName":"Mohamed Shimra","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"910","Winner":"Yes","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7801","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Mano Koya","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Kamara","CandidateFirstName":"Sahr","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"529","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7798","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Williams","CandidateFirstName":"Juliana","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"1119","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7795","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Mambo","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Bendu","CandidateFirstName":"Abdulai Walter","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"105","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7793","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Rogbonga","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Kamara","CandidateFirstName":"Saidu","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"90","Winner":"Yes","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7791","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Rogbonga","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Gbla","CandidateFirstName":"Amadu Haroun","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"79","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7788","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Mambo","ElectionWard":"","ElectionDistrict":"","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Amara","CandidateFirstName":"Julius","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"367","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7786","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Mambo","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Samai","CandidateFirstName":"Mohamed","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"411","Winner":"Yes","ResultStatus":"Provisional","CandidatePhoto":""},{"SLEOP_ID":"7783","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Rogberay","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Conteh","CandidateFirstName":"Alie","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"60","Winner":"Yes","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7780","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Mama Beach","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Samuel","CandidateFirstName":"Thompson","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"406","Winner":"Yes","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7778","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Makono","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Kamara","CandidateFirstName":"Lamin","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"63","Winner":"Yes","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7776","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Makono","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Conteh","CandidateFirstName":"Alie Moi","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"35","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7773","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Makomba","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Bangura","CandidateFirstName":"Saidu Adard","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"104","Winner":"Yes","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7771","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Makomba","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Sesay","CandidateFirstName":"Osman Tilo","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"68","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7768","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Magbampor","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Sesay","CandidateFirstName":"Alie","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"13","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7766","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Magbampor","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Sesay","CandidateFirstName":"Abubakarr","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"25","Winner":"Yes","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7763","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Magbafti","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Conteh","CandidateFirstName":"Mohamed","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"65","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7761","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Magbafti","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Koroma","CandidateFirstName":"Tamba","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"169","Winner":"Yes","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7759","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Magbafti","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Mansaray","CandidateFirstName":"Aruna","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"38","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7756","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Mama Beach","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Turay","CandidateFirstName":"Mohamed","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"282","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7753","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Mafonikay","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Kargbo","CandidateFirstName":"Alimamy","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"41","Winner":"Yes","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7751","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Mafonikay","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Kamara","CandidateFirstName":"Alie","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"39","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7748","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Madonkeh","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Kargbo","CandidateFirstName":"Alusine","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"169","Winner":"Yes","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7746","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Madonkeh","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Sesay","CandidateFirstName":"Mohamed Alaffia","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"151","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7743","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Macdonald","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Coker","CandidateFirstName":"Francess Olivia","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"296","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7741","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Macdonald","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Browne","CandidateFirstName":"Franklin","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"104","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7739","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Macdonald","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Coker","CandidateFirstName":"Oseh Njai","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"518","Winner":"Yes","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7736","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Mabureh","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Bangura","CandidateFirstName":"Amadu Merechem","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"973","Winner":"Yes","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7734","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Mabureh","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Kamara","CandidateFirstName":"Abu Bakarr","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"969","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7731","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Mabrown","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Kargbo","CandidateFirstName":"Alie","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"149","Winner":"Yes","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7729","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Mabrown","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Kamara","CandidateFirstName":"Bai","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"148","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7727","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Mabrown","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Sesay","CandidateFirstName":"Salia","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"98","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7724","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Maboikandor","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Kamara","CandidateFirstName":"Isatu","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"91","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7722","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Maboikandor","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Conteh","CandidateFirstName":"Amadu","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"97","Winner":"Yes","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7719","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Lumpa","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Kabba","CandidateFirstName":"Mohamed","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"1845","Winner":"Yes","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7717","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Lumpa","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Bangura","CandidateFirstName":"James","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"550","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7714","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Lakka","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Kamara","CandidateFirstName":"Reeked Egon","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"110","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7712","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Lakka","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Bundu","CandidateFirstName":"Dennis","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"289","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7710","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Lakka","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Tucker","CandidateFirstName":"Foday","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"457","Winner":"Yes","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7708","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Lakka","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Douglas","CandidateFirstName":"Tommy","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"87","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7706","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Lakka","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Davies","CandidateFirstName":"Peter","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"225","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7703","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Kwama","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Kargbo","CandidateFirstName":"Sorie","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"197","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7701","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Kwama","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Koroma","CandidateFirstName":"Bobson Saidu","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"317","Winner":"Yes","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7698","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Kossoh Town","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Coker","CandidateFirstName":"Emeric","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"569","Winner":"Yes","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7696","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Kossoh Town","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Koroma","CandidateFirstName":"Momodu","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"515","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7694","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Kossoh Town","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Heroe","CandidateFirstName":"Pamela Christine","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"285","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7692","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Kossoh Town","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Conteh","CandidateFirstName":"Nat John","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"159","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7689","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Kosso Middle Town","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Williams","CandidateFirstName":"Nathaniel","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"41","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7687","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Kosso Middle Town","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Williams","CandidateFirstName":"Modupeh Onesimus","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"110","Winner":"Yes","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7685","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"National Results","PollingStation":"","ElectionVillage":"Kosso Middle Town","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Smart","CandidateFirstName":"Benjamin Tunde","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"21","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7683","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Kosso Middle Town","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Williams","CandidateFirstName":"John Emmanuel","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"45","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7680","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Kissi Town II","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Cole-Kamara","CandidateFirstName":"Salieu","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"193","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7678","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Kissi Town II","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Kamara","CandidateFirstName":"Gibrilla","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"59","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7676","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Kissi Town II","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Kamara","CandidateFirstName":"Mathew Salieu","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"1913","Winner":"Yes","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7674","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Kissi Town II","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Koroma","CandidateFirstName":"Mohamed Davies","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"1892","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7671","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Kissi Town I","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Gbla","CandidateFirstName":"Ibrahim Sorie","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"174","Winner":"Yes","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7669","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Kissi Town I","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Bendu","CandidateFirstName":"John","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"122","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7667","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Kissi Town I","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Margai","CandidateFirstName":"WPC Nicol","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"161","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7665","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Kissi Town I","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Unity","CandidateFirstName":"Dennis","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"78","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7662","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Kerry Town","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Kamara","CandidateFirstName":"Misbao","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"523","Winner":"Yes","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7660","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Kerry Town","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"John","CandidateFirstName":"Jesse Olu","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"282","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7657","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Kent","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Sharp","CandidateFirstName":"Winston","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"141","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7655","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Kent","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Massah","CandidateFirstName":"Samuel","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"422","Winner":"Yes","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7652","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Kattu Town","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Kamara","CandidateFirstName":"Brima","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"98","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7650","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Kattu Town","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Kamara","CandidateFirstName":"Foday Solomon","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"109","Winner":"Yes","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7647","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Kassie","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Koroma","CandidateFirstName":"Isaac Ismail","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"424","Winner":"Yes","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7645","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Kassie","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Langley","CandidateFirstName":"Christian John","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"178","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7643","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Kassie","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Bangura","CandidateFirstName":"Abdul Libbie","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"160","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7640","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Kali Crossing","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Fofanah","CandidateFirstName":"Alusine","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"157","Winner":"Yes","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7638","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Kali Crossing","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Sesay","CandidateFirstName":"Umaru","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"152","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7635","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Jui","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Kanu","CandidateFirstName":"Hassan Kay","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"590","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7633","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Jui","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Kargbo","CandidateFirstName":"Alusine","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"717","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7631","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Jui","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Koroma","CandidateFirstName":"Mohamed Albert","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"787","Winner":"Yes","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7628","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Joe Town","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Conteh","CandidateFirstName":"Babah","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"199","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7626","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Joe Town","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Koroma","CandidateFirstName":"Thomas","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"211","Winner":"Yes","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7623","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Hastings","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Sesay","CandidateFirstName":"Abdul","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"2286","Winner":"Yes","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7621","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Hastings","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Pearce","CandidateFirstName":"Nicholas Kainde","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"1299","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7618","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Hamilton","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Koroma","CandidateFirstName":"Hassan","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"552","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7616","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Hamilton","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Conteh","CandidateFirstName":"Morlai","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"743","Winner":"Yes","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7614","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Hamilton","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Conteh","CandidateFirstName":"Maloka","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"473","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7612","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Hamilton","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Sesay","CandidateFirstName":"Allieu","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"612","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7610","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Hamilton","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Turay","CandidateFirstName":"Emmanuel","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"104","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7607","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Grafton","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Sawah","CandidateFirstName":"Balla Musa","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"1517","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7605","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Grafton","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Mansaray","CandidateFirstName":"Julius","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"1988","Winner":"Yes","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7602","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Goderich (Sherbro Town)","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Turay Fornah","CandidateFirstName":"Sheku","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"3399","Winner":"Yes","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7600","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Goderich (Sherbro Town)","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Marah","CandidateFirstName":"Osman","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"531","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7598","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Goderich (Sherbro Town)","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Mansaray","CandidateFirstName":"Hawa","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"2890","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7595","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Gloucester","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Kallon","CandidateFirstName":"William Bockarie","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"506","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7593","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Gloucester","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Kanu","CandidateFirstName":"Francis Sorie","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"28","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7591","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Gloucester","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Kamara","CandidateFirstName":"Renka Kalvin","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"357","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7589","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Gloucester","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Hanciles","CandidateFirstName":"Frederick E. B.","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"538","Winner":"Yes","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7586","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Gbovehun","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Conteh","CandidateFirstName":"Abdulai Alie","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"39","Winner":"Yes","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7583","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Gbendembu","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Mansaray","CandidateFirstName":"Saine","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"1706","Winner":"Yes","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7581","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Gbendembu","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Sesay","CandidateFirstName":"Mohamed","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"1177","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7578","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Foofoo Water","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Conteh","CandidateFirstName":"Nabieu","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"91","Winner":"Yes","ResultStatus":"Provisional","CandidatePhoto":""},{"SLEOP_ID":"7576","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Foofoo Water","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Conteh","CandidateFirstName":"Sullay","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"28","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7574","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Foofoo Water","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Kargbo","CandidateFirstName":"Alimamy","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"32","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7571","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Fogbo","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Kamara","CandidateFirstName":"Ibrahim Sorie","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"577","Winner":"Yes","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7569","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Fogbo","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Bangura","CandidateFirstName":"Saidu","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"105","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7567","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Fogbo","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Suma","CandidateFirstName":"Idrissa","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"129","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7565","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Fogbo","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Kargbo","CandidateFirstName":"Mohamed","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"268","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7562","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Five Mile","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Davies","CandidateFirstName":"Solomon","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"82","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7560","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Five Mile","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Kamara","CandidateFirstName":"Francis","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"119","Winner":"Yes","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7558","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Five Mile","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Davies","CandidateFirstName":"Emmanuel Jr.","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"101","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7555","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Durblin Banana Island","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Sharpe","CandidateFirstName":"Wilfred","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"60","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7553","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Durblin Banana Island","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Sackey","CandidateFirstName":"Veronica","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"70","Winner":"Yes","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7550","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Devil Hole","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Bundu","CandidateFirstName":"Hasmiyou Philemon Otis","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"578","Winner":"Yes","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7548","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Devil Hole","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Mansaray","CandidateFirstName":"Abdulai","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"540","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7543","ElectionDate":"<time datetime=\"2016-12-29T12:00:00Z\" class=\"datetime\">12-29-2016</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"deep Eye Water","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Sesay","CandidateFirstName":"Ibrahim","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"2210","Winner":"Yes","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7545","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"deep Eye Water","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Kabia","CandidateFirstName":"Ismail Abdulah","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"1000","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7540","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Cole Town","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Bangura","CandidateFirstName":"Mohamed Junior","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"138","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7538","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Cole Town","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Turay","CandidateFirstName":"Alimamy Sokie","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"657","Winner":"Yes","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7536","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Cole Town","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Sesay","CandidateFirstName":"Ibrahim Sorie","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"576","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7533","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Charlotte","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Harding","CandidateFirstName":"Raymond Prince","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"44","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7531","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Charlotte","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Sesay","CandidateFirstName":"Osman","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"256","Winner":"Yes","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7529","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Charlotte","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Taylor","CandidateFirstName":"Akiebola","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"26","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7527","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Charlotte","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Kamara","CandidateFirstName":"Suliaman","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"175","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7524","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Campbell Town","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Kamara","CandidateFirstName":"Ibrahim","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"513","Winner":"Yes","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7522","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Campbell Town","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Williams","CandidateFirstName":"Josephus","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"394","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7520","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Campbell Town","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Kamara","CandidateFirstName":"Abdul","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"483","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7518","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Campbell Town","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Conteh","CandidateFirstName":"Issa Alimamy","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"356","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7516","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Campbell Town","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Stafford","CandidateFirstName":"Ivan Michael","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"375","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7513","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Bureh Town","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Tucker","CandidateFirstName":"Michael","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"187","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7511","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Bureh Town","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Williams","CandidateFirstName":"Prince","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"352","Winner":"Yes","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7508","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Brima Town","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Sesay","CandidateFirstName":"Alie","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"140","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7506","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Brima Town","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Koroma","CandidateFirstName":"Saidu","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"174","Winner":"Yes","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7503","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Boyor","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Kamara","CandidateFirstName":"John","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"336","Winner":"Yes","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7501","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Boyor","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Kamara","CandidateFirstName":"Sulaiman Bennie","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"323","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7499","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Boyor","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Turay","CandidateFirstName":"Abu Bakarr","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"221","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7497","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Bonga Warf","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Turay","CandidateFirstName":"Osman","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"43","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7495","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Bonga Warf","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Bangura","CandidateFirstName":"Sidikie","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"233","Winner":"Yes","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7493","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Bolima","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Munu","CandidateFirstName":"Abu Bakarr","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"300","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7491","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Bolima","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Conteh","CandidateFirstName":"Abdulai","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"318","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7489","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Bolima","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Kargbo","CandidateFirstName":"Abu Bakarr","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"570","Winner":"Yes","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7487","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Benguema","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Wilson","CandidateFirstName":"Taiwo","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"271","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7485","ElectionDate":"<time datetime=\"2017-12-09T12:00:00Z\" class=\"datetime\">12-09-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Benguema","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Kamara","CandidateFirstName":"Ibrahim","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"321","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7483","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Benguema","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Bangura","CandidateFirstName":"Abubakarr","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"574","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7481","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Benguema","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Ellie","CandidateFirstName":"Sahr Emmanuel","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"670","Winner":"Yes","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7479","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Benguema","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Dumbuya","CandidateFirstName":"Moses","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"494","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7477","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Benguema","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Conteh","CandidateFirstName":"Ekundayo","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"666","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7475","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Bathurst","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Johnson","CandidateFirstName":"Theophilus Adeyemi","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"347","Winner":"Yes","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7473","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Bathurst","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Pratt","CandidateFirstName":"Christopher","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"183","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7471","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Bathurst","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Aitkins","CandidateFirstName":"Elfrida Omolade","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"87","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7469","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Bathkomp","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Kamara","CandidateFirstName":"Amidu Kekuda","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"94","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7467","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Bathkomp","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Koroma","CandidateFirstName":"Saio","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"121","Winner":"Yes","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7465","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Bassa Town","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Jalloh","CandidateFirstName":"Chernor","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"473","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7463","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Bassa Town","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Dumbuya","CandidateFirstName":"Momoh","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"903","Winner":"Yes","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7461","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Banga Farm","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Kamara","CandidateFirstName":"Abduraman Olu","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"858","Winner":"Yes","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7459","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Banga Farm","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Hammon","CandidateFirstName":"Scott","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"290","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7457","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Ategbe Town","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Sesay","CandidateFirstName":"Abdul Mohamed","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"127","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7455","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Ategbe Town","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Koroma","CandidateFirstName":"Fouad Alim","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"5","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7453","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Ategbe Town","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Dumbuya","CandidateFirstName":"Alhaji Alieu","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"230","Winner":"Yes","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7451","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Adonkia","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Kamara","CandidateFirstName":"Mohamed Osaio","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"419","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7449","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Adonkia","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Fallah","CandidateFirstName":"Steven Sahr","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"403","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7447","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Adonkia","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Bangura","CandidateFirstName":"Abdul","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"736","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7445","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Adonkia","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Kamara","CandidateFirstName":"Mohamed Gibrilla","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"111","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""},{"SLEOP_ID":"7443","ElectionDate":"<time datetime=\"2017-12-29T12:00:00Z\" class=\"datetime\">12-29-2017</time>\n","ElectionType":"Village Headmen","ResultType":"Village Results","PollingStation":"","ElectionVillage":"Adonkia","ElectionWard":"","ElectionDistrict":"Western Area Rural","ElectionConstituency":"","PollingCentreWard":"","PollingCentreConstituency":"","PollingCentreDistrict":"","PollingCentreGeodata":"","CandidateSurname":"Sesay","CandidateFirstName":"Hassan","CandidatePoliticalParty":"I","CandidatePoliticalPartyColor":"","ValidVotes":"169","Winner":"No","ResultStatus":"Final/Certified","CandidatePhoto":""}]

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_map_view_map_view__ = __webpack_require__(190);
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
    ContentViewComponent.prototype.setContentView = function (region, granularity) {
        var _this = this;
        this.granularity = granularity;
        setTimeout(function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            _this.mapView.loadResults();
            _this.setMapInit(region);
            _this.setTableInit(region);
            _this.setResultRegion(granularity);
        }, 10);
    };
    ContentViewComponent.prototype.setMapInit = function (region) {
        if (this.mapView) {
            this.mapView.drawMap();
        }
    };
    ContentViewComponent.prototype.setTableInit = function (region) {
    };
    ContentViewComponent.prototype.setResultRegion = function (granularity) {
        switch (granularity) {
            case "nation":
                this.resultRegion = "National Results";
                break;
            case "region":
                this.resultRegion = "Results By Region";
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
                this.resultRegion = "Result By Polling Center";
                break;
            default:
                this.resultRegion = "";
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
            selector: 'content-view',template:/*ion-inline-start:"C:\Users\VM-3\Documents\sleodp_project\sleodp\src\components\content-view\content-view.html"*/'<!-- Generated template for the ContentViewComponent component -->\n<div>\n	<ion-grid *ngIf="isDesktop">\n		<ion-row>\n			<ion-col col-8>\n				<ion-toolbar class="viewModeToolbar">\n					<button ion-button (click)="setMapMode(true)" [ngClass]="{\'active\': mapMode}" class="modeButton" float-left>\n						Map&nbsp;<i class="fa fa-globe"></i>\n					</button>\n					<ion-title text-center>{{ resultRegion }}</ion-title>\n					<ion-buttons float-right left>\n						<button ion-button (click)="setMapMode(false)" [ngClass]="{\'active\': !mapMode}" class="modeButton">\n							Table&nbsp;<i class="fa fa-table"></i>\n						</button>\n					</ion-buttons>\n				</ion-toolbar>\n				<map-view *ngIf="mapMode" [year]="year" [region]="region" [type]="type" #mapview>\n				</map-view>\n			</ion-col>\n			<ion-col class="granularity-list" col-4>\n				<a *ngIf="granularity != \'nation\'" (click)="seletGranularity(\'nation\')">\n					<div class="senate">\n						<div class="box">\n							<h2>National Results</h2>\n							<div class="box-content">\n								<img src="assets/imgs/map.png">\n							</div>\n						</div>\n					</div>\n				</a>\n				<a *ngIf="granularity != \'region\'" (click)="seletGranularity(\'region\')">\n					<div class="senate">\n						<div class="box">\n							<h2>Results by region</h2>\n							<div class="box-content">\n								<img src="assets/imgs/map.png">\n							</div>\n						</div>\n					</div>\n				</a>\n				<a *ngIf="granularity != \'district\'" (click)="seletGranularity(\'district\')">\n					<div class="senate">\n						<div class="box">\n							<h2>Results by district</h2>\n							<div class="box-content">\n								<img src="assets/imgs/map.png">\n							</div>\n						</div>\n					</div>\n				</a>\n				<a *ngIf="granularity != \'constituency\'" (click)="seletGranularity(\'constituency\')">\n					<div class="senate">\n						<div class="box">\n							<h2>Results by constituency</h2>\n							<div class="box-content">\n								<img src="assets/imgs/map.png">\n							</div>\n						</div>\n					</div>\n				</a>\n				<a *ngIf="granularity != \'ward\'" (click)="seletGranularity(\'ward\')">\n					<div class="senate">\n						<div class="box">\n							<h2>Results by ward</h2>\n							<div class="box-content">\n								<img src="assets/imgs/map.png">\n							</div>\n						</div>\n					</div>\n				</a>\n				<a *ngIf="granularity != \'polling_centre\'" (click)="seletGranularity(\'polling_centre\')">\n					<div class="senate">\n						<div class="box">\n							<h2>Results by Polling Centre</h2>\n							<div class="box-content">\n								<img src="assets/imgs/map.png">\n							</div>\n						</div>\n					</div>\n				</a>\n			</ion-col>\n		</ion-row>\n	</ion-grid>\n	<div *ngIf="!isDesktop">\n		<ion-toolbar class="viewModeToolbar">\n			<button ion-button (click)="setMapMode(true)" [ngClass]="{\'active\': mapMode}" class="modeButton" float-left>\n				Map&nbsp;<i class="fa fa-globe"></i>\n			</button>\n			<ion-title text-center>{{ resultRegion }}</ion-title>\n			<ion-buttons float-right left>\n				<button ion-button (click)="setMapMode(false)" [ngClass]="{\'active\': !mapMode}" class="modeButton">\n					Table&nbsp;<i class="fa fa-table"></i>\n				</button>\n			</ion-buttons>\n		</ion-toolbar>\n	</div>\n	<div *ngIf="!isDesktop">\n		<map-view *ngIf="mapMode" [year]="year" [region]="region" [type]="type" #mapview>\n		</map-view>\n	</div>\n	<table-view *ngIf="!mapMode" [year]="year" [region]="region" [type]="type">\n	</table-view>\n</div>\n'/*ion-inline-end:"C:\Users\VM-3\Documents\sleodp_project\sleodp\src\components\content-view\content-view.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */]])
    ], ContentViewComponent);
    return ContentViewComponent;
}());

//# sourceMappingURL=content-view.js.map

/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_president_president__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_parliament_parliament__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_mayor_mayor__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_chairperson_chairperson__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_councilor_councilor__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_village_headman_village_headman__ = __webpack_require__(66);
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

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__range_view_range_view__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_president_president__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_parliament_parliament__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_mayor_mayor__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_councilor_councilor__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_village_headman_village_headman__ = __webpack_require__(66);
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
            case "mayor":
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_mayor_mayor__["a" /* MayorPage */]);
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
            selector: 'header-view',template:/*ion-inline-start:"C:\Users\VM-3\Documents\sleodp_project\sleodp\src\components\header-view\header-view.html"*/'<!-- Generated template for the HeaderViewComponent component -->\n<ion-header>\n	<ion-toolbar color="dark" *ngIf="!isDesktop">\n		<button ion-button menuToggle>\n			<i class="fa fa-navicon"></i>\n		</button>\n		<ion-title text-uppercase text-center>sloedp</ion-title>\n\n		<ion-buttons end>\n			<button ion-button class="bar-button-menutoggle-md" (click)="selectRange($event)">\n				<i class="fa fa-ellipsis-h"></i>\n			</button>\n		</ion-buttons>\n	</ion-toolbar>\n	<ion-toolbar color="dark" *ngIf="isDesktop">\n		<button ion-button href="/" class="bar-button-menutoggle-md bar-button-default-md disable-hover logo-icon" float-left>\n			<img src="assets/imgs/logo.png" width="35"> &nbsp;SLOEDP\n		</button>\n		<ion-title text-uppercase text-center>\n			<ion-segment class="page-links" color="primary" width-50>\n				<ion-segment-button class="PresidentPage" (ionSelect)="selectedType(\'president\')">\n				President\n				</ion-segment-button>\n				<ion-segment-button class="ParliamentPage" (ionSelect)="selectedType(\'parliament\')">\n				Member of Parliament\n				</ion-segment-button>\n				<ion-segment-button class="MayorPage" (ionSelect)="selectedType(\'mayor\')">\n				Mayor/Chairperson\n				</ion-segment-button>\n				<ion-segment-button class="CouncilorPage" (ionSelect)="selectedType(\'councilor\')">\n				Councilor\n				</ion-segment-button>\n				<ion-segment-button class="VillageHeadmanPage" (ionSelect)="selectedType(\'villageheadman\')">\n				Village Headman\n				</ion-segment-button>\n			</ion-segment>\n		</ion-title>\n	</ion-toolbar>\n	<ng-content select="[sub-navbar]"></ng-content>\n</ion-header>\n'/*ion-inline-end:"C:\Users\VM-3\Documents\sleodp_project\sleodp\src\components\header-view\header-view.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer2 */]])
    ], HeaderViewComponent);
    return HeaderViewComponent;
}());

//# sourceMappingURL=header-view.js.map

/***/ }),

/***/ 373:
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

/***/ 62:
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
        this.granularity = "ward";
        this.prevEnabled = false;
        this.nextEnabled = false;
        this.year = 0;
        this.prevYear = 0;
        this.nextYear = 0;
        this.subpages = [];
        this.subscription = this.dataService.getGranularity().subscribe(function (granularity) {
            _this.granularity = granularity;
            if (granularity == "polling_centre" || granularity == "polling_station") {
                _this.region = "village";
            }
            else
                _this.region = granularity;
            var currentIndex = _this.slides.getActiveIndex();
            if (currentIndex == _this.totalPages)
                return;
            _this.subPageViews._results[currentIndex].setContentView(_this.region, _this.granularity);
        });
    }
    CouncilorPage.prototype.ionViewDidLoad = function () {
        this.load();
    };
    CouncilorPage.prototype.ionViewDidEnter = function () {
        if (this.subpages.length > 0)
            this.subPageViews._results[0].setContentView(this.region, this.granularity);
    };
    // Load Subpages
    CouncilorPage.prototype.load = function () {
        var _this = this;
        this.dataService.loadElectionYears()
            .then(function (data) {
            _this.subpages = data;
            _this.setPageInfo();
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
        if (currentIndex == this.totalPages)
            return;
        this.subPageViews._results[currentIndex].setContentView();
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
            selector: 'page-councilor',template:/*ion-inline-start:"C:\Users\VM-3\Documents\sleodp_project\sleodp\src\pages\councilor\councilor.html"*/'<!--\n  Generated template for the CouncilorPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<header-view>\n  <ion-navbar color="dark" sub-navbar>\n    <a float-left *ngIf="nextEnabled" (click)="setNextPage()" padding-left>\n      <ion-icon name="arrow-back" item-start></ion-icon> {{nextYear}}\n    </a>\n    <ion-title>\n      {{year}} Council Elections\n    </ion-title>\n    <a float-right *ngIf="prevEnabled" (click)="setPrevPage()" padding-right>\n      {{prevYear}} <ion-icon name="arrow-forward" item-start></ion-icon>\n    </a>\n  </ion-navbar>\n</header-view>\n\n<ion-content padding>\n  <ion-slides (ionSlideDidChange)="slideChanged()" dir="rtl">\n\n    <ion-slide *ngFor="let p of subpages; let i = index">\n      <content-view type="councilor" [year]="p.year" [region]="region" #councilor_{{i}}></content-view>\n    </ion-slide>\n\n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"C:\Users\VM-3\Documents\sleodp_project\sleodp\src\pages\councilor\councilor.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */]])
    ], CouncilorPage);
    return CouncilorPage;
}());

//# sourceMappingURL=councilor.js.map

/***/ }),

/***/ 63:
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
        this.granularity = "district";
        this.prevEnabled = false;
        this.nextEnabled = false;
        this.year = 0;
        this.prevYear = 0;
        this.nextYear = 0;
        this.subpages = [];
        this.subscription = this.dataService.getGranularity().subscribe(function (granularity) {
            _this.granularity = granularity;
            if (granularity == "polling_centre" || granularity == "polling_station") {
                _this.region = "village";
            }
            else
                _this.region = granularity;
            var currentIndex = _this.slides.getActiveIndex();
            if (currentIndex == _this.totalPages)
                return;
            _this.subPageViews._results[currentIndex].setContentView(_this.region, _this.granularity);
        });
    }
    MayorPage.prototype.ionViewDidLoad = function () {
        this.load();
    };
    MayorPage.prototype.ionViewDidEnter = function () {
        if (this.subpages.length > 0)
            this.subPageViews._results[0].setContentView(this.region, this.granularity);
    };
    // Load Subpages
    MayorPage.prototype.load = function () {
        var _this = this;
        this.dataService.loadElectionYears()
            .then(function (data) {
            _this.subpages = data;
            _this.setPageInfo();
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
        if (currentIndex == this.totalPages)
            return;
        this.subPageViews._results[currentIndex].setContentView();
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
            selector: 'page-mayor',template:/*ion-inline-start:"C:\Users\VM-3\Documents\sleodp_project\sleodp\src\pages\mayor\mayor.html"*/'<!--\n  Generated template for the MayorPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<header-view>\n  <ion-navbar color="dark" sub-navbar>\n    <a float-left *ngIf="nextEnabled" (click)="setNextPage()" padding-left>\n      <ion-icon name="arrow-back" item-start></ion-icon> {{nextYear}}\n    </a>\n    <ion-title>\n      {{year}} Mayorl Elections\n    </ion-title>\n    <a float-right *ngIf="prevEnabled" (click)="setPrevPage()" padding-right>\n      {{prevYear}} <ion-icon name="arrow-forward" item-start></ion-icon>\n    </a>\n  </ion-navbar>\n</header-view>\n\n<ion-content padding>\n  <ion-slides (ionSlideDidChange)="slideChanged()" dir="rtl">\n\n    <ion-slide *ngFor="let p of subpages; let i = index">\n      <content-view type="mayor" [year]="p.year" [region]="region" #mayor_{{i}}></content-view>\n    </ion-slide>\n\n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"C:\Users\VM-3\Documents\sleodp_project\sleodp\src\pages\mayor\mayor.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */]])
    ], MayorPage);
    return MayorPage;
}());

//# sourceMappingURL=mayor.js.map

/***/ }),

/***/ 64:
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
        this.granularity = "constituency";
        this.prevEnabled = false;
        this.nextEnabled = false;
        this.year = 0;
        this.prevYear = 0;
        this.nextYear = 0;
        this.subpages = [];
        this.subscription = this.dataService.getGranularity().subscribe(function (granularity) {
            _this.granularity = granularity;
            if (granularity == "polling_centre" || granularity == "polling_station") {
                _this.region = "village";
            }
            else
                _this.region = granularity;
            var currentIndex = _this.slides.getActiveIndex();
            if (currentIndex == _this.totalPages)
                return;
            _this.subPageViews._results[currentIndex].setContentView(_this.region, _this.granularity);
        });
    }
    ParliamentPage.prototype.ionViewDidLoad = function () {
        this.load();
    };
    ParliamentPage.prototype.ionViewDidEnter = function () {
        if (this.subpages.length > 0)
            this.subPageViews._results[0].setContentView(this.region, this.granularity);
    };
    // Load Subpages
    ParliamentPage.prototype.load = function () {
        var _this = this;
        this.dataService.loadElectionYears()
            .then(function (data) {
            _this.subpages = data;
            _this.setPageInfo();
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
        if (currentIndex == this.totalPages)
            return;
        this.subPageViews._results[currentIndex].setContentView();
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
            selector: 'page-parliament',template:/*ion-inline-start:"C:\Users\VM-3\Documents\sleodp_project\sleodp\src\pages\parliament\parliament.html"*/'<!--\n  Generated template for the ParliamentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<header-view>\n  <ion-navbar color="dark" sub-navbar>\n    <a float-left *ngIf="nextEnabled" (click)="setNextPage()" padding-left>\n      <ion-icon name="arrow-back" item-start></ion-icon> {{nextYear}}\n    </a>\n    <ion-title>\n      {{year}} Parliamentary Elections\n    </ion-title>\n    <a float-right *ngIf="prevEnabled" (click)="setPrevPage()" padding-right>\n      {{prevYear}} <ion-icon name="arrow-forward" item-start></ion-icon>\n    </a>\n  </ion-navbar>\n</header-view>\n\n<ion-content padding>\n  <ion-slides (ionSlideDidChange)="slideChanged()" dir="rtl">\n\n    <ion-slide *ngFor="let p of subpages; let i = index">\n      <content-view type="parliament" [year]="p.year" [region]="region" #parliament_{{i}}></content-view>\n    </ion-slide>\n\n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"C:\Users\VM-3\Documents\sleodp_project\sleodp\src\pages\parliament\parliament.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */]])
    ], ParliamentPage);
    return ParliamentPage;
}());

//# sourceMappingURL=parliament.js.map

/***/ }),

/***/ 65:
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
        this.granularity = "nation";
        this.prevEnabled = false;
        this.nextEnabled = false;
        this.year = 0;
        this.prevYear = 0;
        this.nextYear = 0;
        this.subpages = [];
        this.subscription = this.dataService.getGranularity().subscribe(function (granularity) {
            _this.granularity = granularity;
            if (granularity == "polling_centre" || granularity == "polling_station") {
                _this.region = "village";
            }
            else
                _this.region = granularity;
            var currentIndex = _this.slides.getActiveIndex();
            if (currentIndex == _this.totalPages)
                return;
            _this.subPageViews._results[currentIndex].setContentView(_this.region, _this.granularity);
        });
    }
    PresidentPage.prototype.ionViewDidLoad = function () {
        this.load();
    };
    PresidentPage.prototype.ionViewDidEnter = function () {
        if (this.subpages.length > 0)
            this.subPageViews._results[0].setContentView(this.region, this.granularity);
    };
    // Load Subpages
    PresidentPage.prototype.load = function () {
        var _this = this;
        this.dataService.loadElectionYears()
            .then(function (data) {
            _this.subpages = data;
            _this.setPageInfo();
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
        this.subPageViews._results[currentIndex].setContentView();
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
            selector: 'page-president',template:/*ion-inline-start:"C:\Users\VM-3\Documents\sleodp_project\sleodp\src\pages\president\president.html"*/'<!--\n  Generated template for the PresidentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<header-view>\n  <ion-navbar color="dark" sub-navbar>\n    <a float-left *ngIf="nextEnabled" (click)="setNextPage()" padding-left>\n      <ion-icon name="arrow-back" item-start></ion-icon> {{nextYear}}\n    </a>\n    <ion-title>\n      {{year}} Presidential Elections\n    </ion-title>\n    <a float-right *ngIf="prevEnabled" (click)="setPrevPage()" padding-right>\n      {{prevYear}} <ion-icon name="arrow-forward" item-start></ion-icon>\n    </a>\n  </ion-navbar>\n</header-view>\n\n<ion-content padding>\n  <ion-slides (ionSlideDidChange)="slideChanged()" dir="rtl">\n\n    <ion-slide *ngFor="let p of subpages; let i = index">\n      <content-view type="president" [year]="p.year" [region]="region" #president_{{i}}></content-view>\n    </ion-slide>\n\n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"C:\Users\VM-3\Documents\sleodp_project\sleodp\src\pages\president\president.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */]])
    ], PresidentPage);
    return PresidentPage;
}());

//# sourceMappingURL=president.js.map

/***/ }),

/***/ 66:
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
        this.granularity = "polling_centre";
        this.prevEnabled = false;
        this.nextEnabled = false;
        this.year = 0;
        this.prevYear = 0;
        this.nextYear = 0;
        this.subpages = [];
        this.subscription = this.dataService.getGranularity().subscribe(function (granularity) {
            _this.granularity = granularity;
            if (granularity == "polling_centre" || granularity == "polling_station") {
                _this.region = "village";
            }
            else
                _this.region = granularity;
            var currentIndex = _this.slides.getActiveIndex();
            if (currentIndex == _this.totalPages)
                return;
            _this.subPageViews._results[currentIndex].setContentView(_this.region, _this.granularity);
        });
    }
    VillageHeadmanPage.prototype.ionViewDidLoad = function () {
        this.load();
    };
    VillageHeadmanPage.prototype.ionViewDidEnter = function () {
        if (this.subpages.length > 0)
            this.subPageViews._results[0].setContentView(this.region, this.granularity);
    };
    // Load Subpages
    VillageHeadmanPage.prototype.load = function () {
        var _this = this;
        this.dataService.loadElectionYears()
            .then(function (data) {
            _this.subpages = data;
            _this.setPageInfo();
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
        if (currentIndex == this.totalPages)
            return;
        this.subPageViews._results[currentIndex].setContentView();
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
            selector: 'page-village-headman',template:/*ion-inline-start:"C:\Users\VM-3\Documents\sleodp_project\sleodp\src\pages\village-headman\village-headman.html"*/'<!--\n  Generated template for the VillageHeadmanPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<header-view>\n  <ion-navbar color="dark" sub-navbar>\n    <a float-left *ngIf="nextEnabled" (click)="setNextPage()" padding-left>\n      <ion-icon name="arrow-back" item-start></ion-icon> {{nextYear}}\n    </a>\n    <ion-title>\n      {{year}} Village Headman Elections\n    </ion-title>\n    <a float-right *ngIf="prevEnabled" (click)="setPrevPage()" padding-right>\n      {{prevYear}} <ion-icon name="arrow-forward" item-start></ion-icon>\n    </a>\n  </ion-navbar>\n</header-view>\n\n<ion-content padding>\n  <ion-slides (ionSlideDidChange)="slideChanged()" dir="rtl">\n\n    <ion-slide *ngFor="let p of subpages; let i = index">\n      <content-view type="villageheadman" [year]="p.year" [region]="region" #villageheadman_{{i}}></content-view>\n    </ion-slide>\n\n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"C:\Users\VM-3\Documents\sleodp_project\sleodp\src\pages\village-headman\village-headman.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */]])
    ], VillageHeadmanPage);
    return VillageHeadmanPage;
}());

//# sourceMappingURL=village-headman.js.map

/***/ })

},[284]);
//# sourceMappingURL=main.js.map