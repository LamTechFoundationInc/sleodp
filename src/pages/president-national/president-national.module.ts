import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PresidentNationalPage } from './president-national';

@NgModule({
  declarations: [
    PresidentNationalPage,
  ],
  imports: [
    IonicPageModule.forChild(PresidentNationalPage),
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class PresidentNationalPageModule {}
