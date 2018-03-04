import { NgModule } from '@angular/core';
import { ContentViewComponent } from './content-view/content-view';
import { MapViewComponent } from './map-view/map-view';
import { TableViewComponent } from './table-view/table-view';
import { HeaderViewComponent } from './header-view/header-view';
import { RangeViewComponent } from './range-view/range-view';
@NgModule({
	declarations: [ContentViewComponent,
    MapViewComponent,
    TableViewComponent,
    HeaderViewComponent,
    RangeViewComponent],
	imports: [],
	exports: [ContentViewComponent,
    MapViewComponent,
    TableViewComponent,
    HeaderViewComponent,
    RangeViewComponent]
})
export class ComponentsModule {}
