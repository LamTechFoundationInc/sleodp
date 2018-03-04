import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PartyProfilePage } from './party-profile';

@NgModule({
  declarations: [
    PartyProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(PartyProfilePage),
  ],
})
export class PartyProfilePageModule {}
