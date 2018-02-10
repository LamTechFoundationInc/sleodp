import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChairpersonPage } from './chairperson';

@NgModule({
  declarations: [
    ChairpersonPage,
  ],
  imports: [
    IonicPageModule.forChild(ChairpersonPage),
  ],
})
export class ChairpersonPageModule {}
