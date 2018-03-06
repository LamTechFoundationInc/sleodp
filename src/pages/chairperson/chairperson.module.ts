import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChairpersonPage } from './chairperson';

@NgModule({
  declarations: [
    ChairpersonPage,
  ],
  imports: [
    IonicPageModule.forChild(ChairpersonPage),
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ChairpersonPageModule {}
