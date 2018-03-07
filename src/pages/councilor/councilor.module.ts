import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CouncilorPage } from './councilor';
import { ComponentsModule } from '../../components/components.module'

@NgModule({
  declarations: [
    CouncilorPage,
  ],
  imports: [
    IonicPageModule.forChild(CouncilorPage),
    ComponentsModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class CouncilorPageModule {}
