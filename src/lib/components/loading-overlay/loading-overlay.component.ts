import {
	Input, Component, Optional,
	Inject, InjectionToken
} from '@angular/core';

export const LOADING_OVERLAY_DEFAULT_OPTIONS: InjectionToken<any> = new InjectionToken<any>( 'defaultOptions' );

@Component({
	selector	: 'loading-overlay',
	templateUrl	: './loading-overlay.pug',
})
export class LoadingOverlayComponent {

	@Input() public iconOnTop: boolean = ( this.defaultOptions || {} ).iconOnTop;
	@Input() public iconSize: number = ( this.defaultOptions || {} ).iconSize || 30;
	@Input() public visible: boolean = ( this.defaultOptions || {} ).visible !== undefined
		? ( this.defaultOptions || {} ).visible
		: true;

	/**
	* @constructor
	* @param {any} defaultOptions
	*/
	constructor( @Optional() @Inject( LOADING_OVERLAY_DEFAULT_OPTIONS ) readonly defaultOptions: any ) {}

}
