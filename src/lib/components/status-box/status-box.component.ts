import {
	Component, Input, InjectionToken,
	Inject, Optional
} from '@angular/core';

export const STATUS_BOX_DEFAULT_OPTIONS: InjectionToken<any> = new InjectionToken<any>( 'defaultOptions' );

@Component({
	selector	: 'status-box',
	templateUrl	: './status-box.pug',
	host		: { class: 'margin-auto' },
})
export class StatusBoxComponent {

	@Input() public color: string;
	@Input() public status: string;

	/**
	* @constructor
	* @param {any} defaultOptions
	*/
	constructor( @Optional() @Inject( STATUS_BOX_DEFAULT_OPTIONS ) readonly defaultOptions: any ) {}

}
