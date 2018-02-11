import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

// Pages
import { MyApp } from './app.component';
import { PresidentPage } from '../pages/president/president';
import { PariamentPage } from '../pages/pariament/pariament';
import { MayorPage } from '../pages/mayor/mayor';
import { ChairpersonPage } from '../pages/chairperson/chairperson';
import { CouncilorPage } from '../pages/councilor/councilor';

// Components
import { ContentViewComponent } from '../components/content-view/content-view';
import { MapViewComponent } from '../components/map-view/map-view';
import { TableViewComponent } from '../components/table-view/table-view';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Providers
import { DataProvider } from '../providers/data/data';

@NgModule({
  declarations: [
  // App
    MyApp,
  // Pages
    PresidentPage,
    PariamentPage,
    MayorPage,
    ChairpersonPage,
    CouncilorPage,
  // Components
    ContentViewComponent,
    MapViewComponent,
    TableViewComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    NgbModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PresidentPage,
    PariamentPage,
    MayorPage,
    ChairpersonPage,
    CouncilorPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider
  ]
})
export class AppModule {}
