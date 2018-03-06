import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ParliamentPage } from './parliament';

@NgModule({
  declarations: [
    ParliamentPage,
  ],
  imports: [
    IonicPageModule.forChild(ParliamentPage),
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ParliamentPageModule {}
