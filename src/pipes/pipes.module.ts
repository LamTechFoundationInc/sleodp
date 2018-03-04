import { NgModule } from '@angular/core';
import { PartyPipe } from './party/party';
import { GranularityPipe } from './granularity/granularity';
@NgModule({
	declarations: [PartyPipe,
    GranularityPipe],
	imports: [],
	exports: [PartyPipe,
    GranularityPipe]
})
export class PipesModule {}
