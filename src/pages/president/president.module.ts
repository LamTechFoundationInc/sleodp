import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PresidentPage } from './president';

@NgModule({
  declarations: [
    PresidentPage,
  ],
  imports: [
    IonicPageModule.forChild(PresidentPage),
  ],
})
export class PresidentPageModule {}
