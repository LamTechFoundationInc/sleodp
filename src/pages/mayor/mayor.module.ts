import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MayorPage } from './mayor';

@NgModule({
  declarations: [
    MayorPage,
  ],
  imports: [
    IonicPageModule.forChild(MayorPage),
  ],
})
export class MayorPageModule {}
