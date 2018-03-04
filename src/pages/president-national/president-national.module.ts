import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PresidentNationalPage } from './president-national';

@NgModule({
  declarations: [
    PresidentNationalPage,
  ],
  imports: [
    IonicPageModule.forChild(PresidentNationalPage),
  ],
})
export class PresidentNationalPageModule {}
