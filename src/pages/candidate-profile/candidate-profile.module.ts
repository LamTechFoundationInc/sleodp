import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CandidateProfilePage } from './candidate-profile';

@NgModule({
  declarations: [
    CandidateProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(CandidateProfilePage),
  ],
})
export class CandidateProfilePageModule {}
