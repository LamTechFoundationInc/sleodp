import { NgModule } from '@angular/core';
import { PartyPipe } from './party/party';
@NgModule({
	declarations: [PartyPipe],
	imports: [],
	exports: [PartyPipe]
})
export class PipesModule {}
