import { NgModule } from '@angular/core';
import { ContentViewComponent } from './content-view/content-view';
import { MapViewComponent } from './map-view/map-view';
import { TableViewComponent } from './table-view/table-view';
@NgModule({
	declarations: [ContentViewComponent,
    MapViewComponent,
    TableViewComponent],
	imports: [],
	exports: [ContentViewComponent,
    MapViewComponent,
    TableViewComponent]
})
export class ComponentsModule {}
