import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PariamentPage } from './pariament';

@NgModule({
  declarations: [
    PariamentPage,
  ],
  imports: [
    IonicPageModule.forChild(PariamentPage),
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class PariamentPageModule {}
