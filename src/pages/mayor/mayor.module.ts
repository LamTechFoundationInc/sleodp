import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MayorPage } from './mayor';

@NgModule({
  declarations: [
    MayorPage,
  ],
  imports: [
    IonicPageModule.forChild(MayorPage),
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class MayorPageModule {}
