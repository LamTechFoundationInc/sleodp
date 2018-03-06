import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PartyProfilePage } from './party-profile';
import { ComponentsModule } from '../../components/components.module'

@NgModule({
  declarations: [
    PartyProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(PartyProfilePage),
    ComponentsModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class PartyProfilePageModule {}
