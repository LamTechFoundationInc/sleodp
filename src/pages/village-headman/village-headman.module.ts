import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VillageHeadmanPage } from './village-headman';

@NgModule({
  declarations: [
    VillageHeadmanPage,
  ],
  imports: [
    IonicPageModule.forChild(VillageHeadmanPage),
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class VillageHeadmanPageModule {}
