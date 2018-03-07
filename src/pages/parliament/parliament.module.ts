import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ParliamentPage } from './parliament';
import { ComponentsModule } from '../../components/components.module'

@NgModule({
  declarations: [
    ParliamentPage,
  ],
  imports: [
    IonicPageModule.forChild(ParliamentPage),
    ComponentsModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ParliamentPageModule {}
