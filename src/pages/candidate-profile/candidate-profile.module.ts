import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CandidateProfilePage } from './candidate-profile';

@NgModule({
  declarations: [
    CandidateProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(CandidateProfilePage),
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class CandidateProfilePageModule {}
