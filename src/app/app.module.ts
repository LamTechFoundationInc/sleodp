import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Pages
import { MyApp } from './app.component';
import { PresidentPage } from '../pages/president/president';
import { ParliamentPage } from '../pages/parliament/parliament';
import { MayorPage } from '../pages/mayor/mayor';
import { ChairpersonPage } from '../pages/chairperson/chairperson';
import { CouncilorPage } from '../pages/councilor/councilor';
import { VillageHeadmanPage } from '../pages/village-headman/village-headman';
import { PartyProfilePage } from '../pages/party-profile/party-profile';
import { CandidateProfilePage } from '../pages/candidate-profile/candidate-profile';

// Components
import { HeaderViewComponent } from '../components/header-view/header-view';
import { RangeViewComponent } from '../components/range-view/range-view';
import { ContentViewComponent } from '../components/content-view/content-view';
import { MapViewComponent } from '../components/map-view/map-view';
import { TableViewComponent } from '../components/table-view/table-view';

// Providers
import { DataProvider } from '../providers/data/data';

// Pipes
import { PipesModule } from '../pipes/pipes.module';

// Select2 Component
import { Select2Component } from 'ng2-select2/ng2-select2';

@NgModule({
  declarations: [
  // App
    MyApp,
  // Pages
    PresidentPage,
    ParliamentPage,
    MayorPage,
    ChairpersonPage,
    CouncilorPage,
    VillageHeadmanPage,
    PartyProfilePage,
    CandidateProfilePage,
  // Components
    HeaderViewComponent,
    RangeViewComponent,
    ContentViewComponent,
    MapViewComponent,
    TableViewComponent,
  // Select2Component
    Select2Component
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    NgbModule.forRoot(),
    PipesModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PresidentPage,
    ParliamentPage,
    MayorPage,
    ChairpersonPage,
    CouncilorPage,
    VillageHeadmanPage,
    PartyProfilePage,
    CandidateProfilePage,
    RangeViewComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider
  ]
})
export class AppModule {}
