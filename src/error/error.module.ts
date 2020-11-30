import { NgModule } from '@angular/core';

import { routing, routingProviders } from './error.routing';
import { ErrorComponent } from './components/error.component';

@NgModule({
	imports		: [ routing ],
	declarations: [ ErrorComponent ],
	providers	: [ routingProviders ],
})
export class ErrorModule {

	/**
	* @constructor
	*/
	constructor() {}

}
