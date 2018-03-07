import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MayorPage } from './mayor';
import { ComponentsModule } from '../../components/components.module'

@NgModule({
  declarations: [
    MayorPage,
  ],
  imports: [
    IonicPageModule.forChild(MayorPage),
    ComponentsModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class MayorPageModule {}
