import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CandidateProfilePage } from './candidate-profile';
import { ComponentsModule } from '../../components/components.module'

@NgModule({
  declarations: [
    CandidateProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(CandidateProfilePage),
    ComponentsModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class CandidateProfilePageModule {}
