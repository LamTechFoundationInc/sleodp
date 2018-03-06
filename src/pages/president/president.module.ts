import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PresidentPage } from './president';
import { ComponentsModule } from '../../components/components.module'

@NgModule({
  declarations: [
    PresidentPage,
  ],
  imports: [
    IonicPageModule.forChild(PresidentPage),
    ComponentsModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class PresidentPageModule {}
