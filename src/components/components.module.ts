import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';
import { PipesModule } from '../pipes/pipes.module';
import { ContentViewComponent } from './content-view/content-view';
import { MapViewComponent } from './map-view/map-view';
import { TableViewComponent } from './table-view/table-view';
import { HeaderViewComponent } from './header-view/header-view';
import { RangeViewComponent } from './range-view/range-view';
import { Select2Module } from '../ng2-select2/ng2-select2';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

@NgModule({
	declarations: [ContentViewComponent,
    MapViewComponent,
    TableViewComponent,
    HeaderViewComponent,
    RangeViewComponent],
	imports: [CommonModule, IonicModule, PipesModule, Select2Module, LeafletModule],
	exports: [ContentViewComponent,
    MapViewComponent,
    TableViewComponent,
    HeaderViewComponent,
    RangeViewComponent],
    entryComponents: [
        RangeViewComponent
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ComponentsModule {}
