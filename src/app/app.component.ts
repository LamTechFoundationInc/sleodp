import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
// import { GoogleAnalytics } from '@ionic-native/google-analytics';

import { SplashPage } from '../pages/splash/splash';
import { PresidentPage } from '../pages/president/president';
import { ParliamentPage } from '../pages/parliament/parliament';
import { MayorPage } from '../pages/mayor/mayor';
import { CouncilorPage } from '../pages/councilor/councilor';
import { AboutPage } from '../pages/about/about';
// import { VillageHeadmanPage } from '../pages/village-headman/village-headman';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = SplashPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'SLOEDP Platform', component: "" },
      { title: 'President', component: PresidentPage },
      { title: 'Member of Parliament', component: ParliamentPage },
      { title: 'Mayor/Chair', component: MayorPage },
      { title: 'Councilor', component: CouncilorPage },
      { title: 'About this app', component: AboutPage },
      // { title: 'VillageHeadman', component: VillageHeadmanPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

    });

  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if (page.title == 'SLOEDP Platform')
      location.href = "https://electiondata.io"
    else
      this.nav.setRoot(page.component);
  }
}
