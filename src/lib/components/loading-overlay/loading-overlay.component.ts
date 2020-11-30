import {
	Input, Component, Optional,
	Inject, InjectionToken
} from '@angular/core';

export const LOADING_OVERLAY_DEFAULT_OPTIONS: InjectionToken<any> = new InjectionToken<any>( 'defaultOptions' );

@Component({
	selector	: 'loading-overlay',
	templateUrl	: './loading-overlay.pug',
	styleUrls	: [ './loading-overlay.scss' ],
})
export class LoadingOverlayComponent {

	@Input() public iconOnTop: boolean = ( this.defaultOptions || {} ).iconOnTop;
	@Input() public iconSize: number = ( this.defaultOptions || {} ).iconSize || 30;
	@Input() public visible: boolean = true;

	/**
	* @constructor
	* @param {any} defaultOptions
	*/
	constructor( @Optional() @Inject( LOADING_OVERLAY_DEFAULT_OPTIONS ) readonly defaultOptions: any ) {}

}
