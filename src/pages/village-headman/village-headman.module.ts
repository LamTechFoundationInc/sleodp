import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VillageHeadmanPage } from './village-headman';
import { ComponentsModule } from '../../components/components.module'

@NgModule({
  declarations: [
    VillageHeadmanPage,
  ],
  imports: [
    IonicPageModule.forChild(VillageHeadmanPage),
    ComponentsModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class VillageHeadmanPageModule {}
