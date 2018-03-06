import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PartyProfilePage } from './party-profile';

@NgModule({
  declarations: [
    PartyProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(PartyProfilePage),
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class PartyProfilePageModule {}
