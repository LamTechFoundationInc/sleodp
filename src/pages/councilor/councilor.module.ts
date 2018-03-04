import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CouncilorPage } from './councilor';

@NgModule({
  declarations: [
    CouncilorPage,
  ],
  imports: [
    IonicPageModule.forChild(CouncilorPage),
  ],
})
export class CouncilorPageModule {}
