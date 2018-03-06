import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CouncilorPage } from './councilor';

@NgModule({
  declarations: [
    CouncilorPage,
  ],
  imports: [
    IonicPageModule.forChild(CouncilorPage),
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class CouncilorPageModule {}
