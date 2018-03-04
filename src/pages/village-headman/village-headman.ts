import { Component, ViewChildren, forwardRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';

import { DataProvider } from '../../providers/data/data';
import { ContentViewComponent } from '../../components/content-view/content-view';

import { Subscription } from 'rxjs/Subscription';

/**
 * Generated class for the VillageHeadmanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-village-headman',
  templateUrl: 'village-headman.html',
})
export class VillageHeadmanPage {
  @ViewChild(Slides) slides: Slides;
  @ViewChildren(forwardRef(() => ContentViewComponent)) subPageViews: any;
  subpages:    Array<{year: Number}>;
  totalPages:  Number;
  year:      Number;
  prevYear:    Number;
  nextYear:    Number;
  prevEnabled:  Boolean;
  nextEnabled:  Boolean;
  region = "village";
  initialSlide: any;
  
  subscription: Subscription;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataService: DataProvider) {
    this.prevEnabled = false;
    this.nextEnabled = false;
    this.year = 0;
    this.prevYear = 0;
    this.nextYear = 0;

    this.subpages = [
      { year: 1996},
      { year: 2002},
      { year: 2007},
      { year: 2012},
      { year: 2018},
    ];
    this.initialSlide = this.subpages.length > 1 ? this.subpages.length - 1 : 0;
    this.setPageInfo();
  }

  ionViewDidLoad() {
  }

  ionViewDidEnter() {
    this.subscription = this.dataService.getGranularity().subscribe(granularity => { 
      this.region = granularity;
      this.setSlideChanges();
    });
  }

  setPageInfo() {
    this.totalPages = this.subpages.length;
    if (this.totalPages > 0) {
      this.year = this.subpages[0].year;
    }

    if (this.totalPages > 1) {
      this.nextEnabled = true;
      this.nextYear = this.subpages[1].year;
    }
  }

// Page Setting
  setPrevPage() {
    this.slides.slideTo(this.slides.getActiveIndex() - 1, 500);
  }

  setNextPage() {
    this.slides.slideTo(this.slides.getActiveIndex() + 1, 500);
  }

  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    if (!this.totalPages || currentIndex == this.totalPages || this.totalPages == 0) return;

    this.prevEnabled = !this.slides.isBeginning();
    this.nextEnabled = !this.slides.isEnd();

    this.year = this.subpages[currentIndex].year;
    this.prevYear = this.prevEnabled ? this.subpages[currentIndex - 1].year : 0;
    this.nextYear = this.nextEnabled ? this.subpages[currentIndex + 1].year : 0;

    this.setSlideChanges();
  }

  ionViewDidLeave() {
    this.subscription.unsubscribe();
  }

  setSlideChanges() {
    let currentIndex = this.slides.getActiveIndex();
    if (!this.totalPages || currentIndex == this.totalPages || this.totalPages == 0) return;

    this.subPageViews._results[currentIndex].setContentView();
    this.dataService.setYear(this.year);
  }
}
