webpackJsonp([6],{

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChairpersonPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(21);
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
            if (granularity == "polling_center" || granularity == "polling_station") {
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

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CouncilorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(21);
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
            if (granularity == "polling_center" || granularity == "polling_station") {
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

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MayorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(21);
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
            if (granularity == "polling_center" || granularity == "polling_station") {
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

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParliamentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(21);
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
            if (granularity == "polling_center" || granularity == "polling_station") {
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

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PresidentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(21);
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
            if (granularity == "polling_center" || granularity == "polling_station") {
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

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VillageHeadmanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(21);
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
        this.granularity = "polling_center";
        this.prevEnabled = false;
        this.nextEnabled = false;
        this.year = 0;
        this.prevYear = 0;
        this.nextYear = 0;
        this.subpages = [];
        this.subscription = this.dataService.getGranularity().subscribe(function (granularity) {
            _this.granularity = granularity;
            if (granularity == "polling_center" || granularity == "polling_station") {
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
		373,
		5
	],
	"../pages/councilor/councilor.module": [
		374,
		4
	],
	"../pages/mayor/mayor.module": [
		375,
		3
	],
	"../pages/parliament/parliament.module": [
		376,
		2
	],
	"../pages/president/president.module": [
		377,
		1
	],
	"../pages/village-headman/village-headman.module": [
		378,
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

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_index__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mapbox_gl_dist_mapbox_gl_js__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mapbox_gl_dist_mapbox_gl_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mapbox_gl_dist_mapbox_gl_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_data__ = __webpack_require__(21);
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
        this.valid_votes = 0;
        this.invalid_votes = 0;
        this.total_votes = 0;
        this.result_status = 0;
        this.firstParty = { name: "APC", color: "#cf2a27", percent: "34", votes: "34" };
        this.secondParty = { name: "SLPP", color: "#009e0f", percent: "33", votes: "33" };
        this.otherParty = { percent: "33", votes: "33" };
        console.log('Hello MapViewComponent Component');
    }
    MapViewComponent.prototype.ngAfterViewInit = function () {
        this.isLoaded = false;
    };
    MapViewComponent.prototype.loadParties = function () {
        var _this = this;
        this.dataService.loadParties()
            .then(function (data) {
            _this.parties = data;
        });
    };
    MapViewComponent.prototype.drawMap = function () {
        var mapContainer = this.year + "_map";
        // Create the popup
        var loadingPopup = this.loadingCtrl.create({
            content: 'Loading data...'
        });
        // Show the popup
        loadingPopup.present();
        var sourceUrl = '../../assets/maps/' + this.region + '.geojson';
        // Map Init
        __WEBPACK_IMPORTED_MODULE_2_mapbox_gl_dist_mapbox_gl_js___default.a.accessToken = 'pk.eyJ1Ijoicm9tYW5qaW4iLCJhIjoiY2pkaXFleWJrMG9rNDJxcHJrNXNnN2d4NiJ9.sRB7ZJ05xbMZYyw5YvO7SQ';
        var map = new __WEBPACK_IMPORTED_MODULE_2_mapbox_gl_dist_mapbox_gl_js___default.a.Map({
            style: 'mapbox://styles/mapbox/light-v9',
            center: [-11.779889, 8.460555],
            zoom: 6.2,
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
        });
        loadingPopup.dismiss();
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
            selector: 'map-view',template:/*ion-inline-start:"C:\Users\VM-3\Documents\sleodp_project\sleodp\src\components\map-view\map-view.html"*/'<!-- Generated template for the MapViewComponent component -->\n<div class="view-container">\n	<div id="{{year}}_map" class="map">\n	</div>\n	<div class="election-details">\n		<div class="election-info">\n			<ion-grid no-padding>\n				<ion-row>\n					<ion-col text-right class="small">\n						Total Registered Votes: {{ total_votes }}<br>\n						Result Status: {{ result_status ? \'Legend\' : \'Provisional Results\' }}\n					</ion-col>\n					<ion-col text-left class="small">\n						Total Valid Votes: {{ valid_votes }}<br>\n						Total Invalid Votes: {{ invalid_votes }}\n					</ion-col>\n				</ion-row>\n			</ion-grid>\n		</div>\n		<div class="election-parties">\n			<ion-grid no-padding>\n				<ion-row>\n					<ion-col *ngFor="let party of parties" class="small">\n						{{ party.name }}\n						<div class="party-card" [style.background-color]="party.color"></div>\n					</ion-col>\n				</ion-row>\n			</ion-grid>\n		</div>\n		<div class="election-competitors">\n			<ion-grid no-padding>\n				<ion-row>\n					<ion-col text-right>\n						<div text-left padding-bottom>{{ secondParty.percent }}%</div>\n						<div class="card" [style.background-color]="secondParty.color">\n							<img src="/assets/imgs/avatar.png">\n						</div>\n						{{ secondParty.votes }} votes\n					</ion-col>\n					<ion-col width-25 text-center>\n						<div padding-bottom>{{ otherParty.percent }}%</div>\n						<div class="card">All Others</div>\n						votes {{ otherParty.votes }}\n					</ion-col>\n					<ion-col text-left>\n						<div text-right padding-bottom>{{ firstParty.percent }}%</div>\n						<div class="card" [style.background-color]="firstParty.color">\n							<img src="/assets/imgs/avatar.png">\n						</div>\n						{{ firstParty.votes }} votes\n					</ion-col>\n				</ion-row>\n			</ion-grid>\n		</div>\n	</div>\n</div>'/*ion-inline-end:"C:\Users\VM-3\Documents\sleodp_project\sleodp\src\components\map-view\map-view.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular_index__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__providers_data_data__["a" /* DataProvider */]])
    ], MapViewComponent);
    return MapViewComponent;
}());

//# sourceMappingURL=map-view.js.map

/***/ }),

/***/ 21:
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
    DataProvider.prototype.loadElectionYears = function () {
        var _this = this;
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
            // this.http.get('path/to/data.json')
            //   .map(res => res.json())
            //   .subscribe(data => {
            //     this.election_years = data;
            //     resolve(this.election_years);
            //   });
        });
    };
    DataProvider.prototype.loadParties = function () {
        var _this = this;
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
        return new Promise(function (resolve) {
            resolve(_this.parties);
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

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RangeViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(21);
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
        console.log('Hello RangeViewComponent Component');
    }
    RangeViewComponent.prototype.seletGranularity = function (granularity) {
        this.dataService.setGranularity(granularity);
        this.viewCtrl.dismiss();
    };
    RangeViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'range-view',template:/*ion-inline-start:"C:\Users\VM-3\Documents\sleodp_project\sleodp\src\components\range-view\range-view.html"*/'<!-- Generated template for the RangeViewComponent component -->\n<ion-list>\n	<ion-list-header>Result Granularity</ion-list-header>\n	<button ion-item (click)="seletGranularity(\'nation\')">National Results</button>\n	<button ion-item (click)="seletGranularity(\'district\')">Results By District</button>\n	<button ion-item (click)="seletGranularity(\'constituency\')">Results By Constituency</button>\n	<button ion-item (click)="seletGranularity(\'ward\')">Results By Ward</button>\n	<button ion-item (click)="seletGranularity(\'polling_center\')">Results By Polling Center</button>\n	<button ion-item (click)="seletGranularity(\'polling_station\')">Results By Polling Station</button>\n</ion-list>'/*ion-inline-end:"C:\Users\VM-3\Documents\sleodp_project\sleodp\src\components\range-view\range-view.html"*/
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_president_president__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_parliament_parliament__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_mayor_mayor__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_chairperson_chairperson__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_councilor_councilor__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_village_headman_village_headman__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_header_view_header_view__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_range_view_range_view__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_content_view_content_view__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_map_view_map_view__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_table_view_table_view__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_data_data__ = __webpack_require__(21);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_map_view_map_view__ = __webpack_require__(190);
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
    function ContentViewComponent() {
        this.firstTime = true;
        this.setMapMode(true);
    }
    ContentViewComponent.prototype.ngAfterViewInit = function () {
    };
    ContentViewComponent.prototype.setMapMode = function (mode) {
        var _this = this;
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
    ContentViewComponent.prototype.setContentView = function (region, granularity) {
        var _this = this;
        setTimeout(function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            _this.setMapInit(region);
            _this.setTableInit(region);
            _this.setResultRegion(granularity);
        }, 10);
    };
    ContentViewComponent.prototype.setMapInit = function (region) {
        if (this.mapView) {
            this.mapView.loadParties();
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
            case "district":
                this.resultRegion = "Results By District";
                break;
            case "constituency":
                this.resultRegion = "Results By Constituency";
                break;
            case "ward":
                this.resultRegion = "Result By Ward";
                break;
            case "polling_center":
                this.resultRegion = "Result By Polling Center";
                break;
            case "polling_station":
                this.resultRegion = "Result By Polling Station";
                break;
            default:
                this.resultRegion = "";
                break;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__components_map_view_map_view__["a" /* MapViewComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__components_map_view_map_view__["a" /* MapViewComponent */])
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
            selector: 'content-view',template:/*ion-inline-start:"C:\Users\VM-3\Documents\sleodp_project\sleodp\src\components\content-view\content-view.html"*/'<!-- Generated template for the ContentViewComponent component -->\n<div>\n	<ion-toolbar class="viewModeToolbar">\n		<button ion-button (click)="setMapMode(true)" [ngClass]="{\'active\': mapMode}" class="modeButton" float-left>\n			<i class="fa fa-globe"></i> &nbsp;Map\n		</button>\n		<ion-title text-center>{{ resultRegion }}</ion-title>\n		<ion-buttons float-right left>\n			<button ion-button (click)="setMapMode(false)" [ngClass]="{\'active\': !mapMode}" class="modeButton">\n				<i class="fa fa-table"></i> &nbsp;Table\n			</button>\n		</ion-buttons>\n	</ion-toolbar>\n	<map-view *ngIf="mapMode" [year]="year" [region]="region" [type]="type" #mapview>\n	</map-view>\n	<table-view *ngIf="!mapMode" [year]="year" [region]="region" [type]="type">\n	</table-view>\n</div>\n'/*ion-inline-end:"C:\Users\VM-3\Documents\sleodp_project\sleodp\src\components\content-view\content-view.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ContentViewComponent);
    return ContentViewComponent;
}());

//# sourceMappingURL=content-view.js.map

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_president_president__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_parliament_parliament__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_mayor_mayor__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_chairperson_chairperson__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_councilor_councilor__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_village_headman_village_headman__ = __webpack_require__(131);
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
            { title: 'Parliament', component: __WEBPACK_IMPORTED_MODULE_5__pages_parliament_parliament__["a" /* ParliamentPage */] },
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\VM-3\Documents\sleodp_project\sleodp\src\app\app.html"*/'<ion-menu [content]="content" type="overlay">\n\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Election Type</ion-title>\n      <button ion-button menuToggle text-right end color="dark">\n        <i class="fa fa-navicon"></i>\n      </button>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\VM-3\Documents\sleodp_project\sleodp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__range_view_range_view__ = __webpack_require__(283);
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
    function HeaderViewComponent(popoverCtrl) {
        this.popoverCtrl = popoverCtrl;
        console.log('Hello HeaderViewComponent Component');
    }
    HeaderViewComponent.prototype.selectRange = function (event) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_2__range_view_range_view__["a" /* RangeViewComponent */]);
        popover.present({
            ev: event
        });
    };
    HeaderViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'header-view',template:/*ion-inline-start:"C:\Users\VM-3\Documents\sleodp_project\sleodp\src\components\header-view\header-view.html"*/'<!-- Generated template for the HeaderViewComponent component -->\n<ion-header>\n	<ion-toolbar color="dark">\n		<button ion-button menuToggle>\n			<i class="fa fa-navicon"></i>\n		</button>\n		<ion-title text-uppercase text-center>sloedp</ion-title>\n\n		<ion-buttons end>\n			<button ion-button icon-only (click)="selectRange($event)" padding-right>\n				<i class="fa fa-ellipsis-h"></i>\n			</button>\n		</ion-buttons>\n	</ion-toolbar>\n	<ng-content select="[sub-navbar]"></ng-content>\n</ion-header>\n'/*ion-inline-end:"C:\Users\VM-3\Documents\sleodp_project\sleodp\src\components\header-view\header-view.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* PopoverController */]])
    ], HeaderViewComponent);
    return HeaderViewComponent;
}());

//# sourceMappingURL=header-view.js.map

/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_data_data__ = __webpack_require__(21);
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
        console.log('Hello TableViewComponent Component');
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

/***/ })

},[284]);
//# sourceMappingURL=main.js.map