import { Component, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';

import { DataProvider } from '../../providers/data/data';
import { ContentViewComponent } from '../../components/content-view/content-view';

import { Subscription } from 'rxjs/Subscription';

/**
 * Generated class for the ChairpersonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chairperson',
  templateUrl: 'chairperson.html',
})
export class ChairpersonPage {
  @ViewChild(Slides) slides: Slides;
  @ViewChildren(ContentViewComponent) subPageViews: any;
  subpages:    Array<{year: Number}>;
  totalPages:  Number;
  year:      Number;
  prevYear:    Number;
  nextYear:    Number;
  prevEnabled:  Boolean;
  nextEnabled:  Boolean;
  region = "district";
  granularity = "district";

  subscription: Subscription;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataService: DataProvider) {
    this.prevEnabled = false;
    this.nextEnabled = false;
    this.year = 0;
    this.prevYear = 0;
    this.nextYear = 0;
    this.subpages = [];
    this.subscription = this.dataService.getGranularity().subscribe(granularity => { 
      this.granularity = granularity;
      if (granularity == "polling_center" || granularity == "polling_station") {
        this.region = "village";
      }
      else
        this.region = granularity;
      let currentIndex = this.slides.getActiveIndex();
      if (currentIndex == this.totalPages) return;
      
      this.subPageViews._results[currentIndex].setContentView(this.region, this.granularity);
    });
  }

  ionViewDidLoad() {
    this.load();
  }

  ionViewDidEnter() {
    this.subPageViews._results[0].setContentView(this.region, this.granularity);
  }

// Load Subpages
  load() {
    this.dataService.loadElectionYears()
      .then(data => {
        this.subpages = data;
        this.setPageInfo();
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
    if (currentIndex == this.totalPages) return;
    
    this.subPageViews._results[currentIndex].setContentView(this.region, this.granularity);
    this.prevEnabled = !this.slides.isBeginning();
    this.nextEnabled = !this.slides.isEnd();

    this.year = this.subpages[currentIndex].year;
    this.prevYear = this.prevEnabled ? this.subpages[currentIndex - 1].year : 0;
    this.nextYear = this.nextEnabled ? this.subpages[currentIndex + 1].year : 0;
  }

  ionViewDidLeave() {
    this.subscription.unsubscribe();
  }
}
