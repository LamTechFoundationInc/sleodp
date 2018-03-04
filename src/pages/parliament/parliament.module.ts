import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ParliamentPage } from './parliament';

@NgModule({
  declarations: [
    ParliamentPage,
  ],
  imports: [
    IonicPageModule.forChild(ParliamentPage),
  ],
})
export class ParliamentPageModule {}
