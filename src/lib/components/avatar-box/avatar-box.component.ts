import {
	Input, Component, Optional,
	Inject, InjectionToken,
	SimpleChanges, OnChanges
} from '@angular/core';

export const AVATAR_BOX_DEFAULT_OPTIONS: InjectionToken<any> = new InjectionToken<any>( 'defaultOptions' );

@Component({
	selector	: 'avatar-box',
	templateUrl	: './avatar-box.pug',
	styleUrls	: [ './avatar-box.scss' ],
})
export class AvatarBoxComponent implements OnChanges {

	@Input() public source: string;
	@Input() public unique: number;
	@Input() public title: string;
	@Input() public defaultAvatar: string = ( this.defaultOptions || {} ).defaultAvatar;
	@Input() public lazy: boolean = ( this.defaultOptions || {} ).lazy || true;
	@Input() public size: number = ( this.defaultOptions || {} ).size || 44;

	public background: string;
	public displayAvatar: string = this.defaultAvatar;

	/**
	* @constructor
	* @param {any} defaultOptions
	*/
	constructor( @Optional() @Inject( AVATAR_BOX_DEFAULT_OPTIONS ) readonly defaultOptions: any ) {}

	/**
	* @constructor
	* @param {SimpleChanges} changes
	*/
	public ngOnChanges( changes: SimpleChanges ) {
		if ( changes.source ) {
			if ( !this.source ) {
				this.displayAvatar = this.defaultAvatar;
				return;
			}

			// Create the image
			const imgElement: HTMLImageElement = new Image();

			// When image is loaded, resolve the promise
			imgElement.addEventListener( 'load', () => {
				this.displayAvatar = this.source;
			} );

			// When there's an error during load, reject the promise
			imgElement.addEventListener( 'error', () => {
				this.displayAvatar = this.defaultAvatar;
			} );

			// Assign URL
			imgElement.src = this.source;
		}
	}

	/**
	* Get avatar background
	* @return {string}
	*/
	public get avatarBackground(): string {
		if ( this.displayAvatar ) return null;
		if ( this.background ) return this.background;

		const n: number = this.unique ? +this.unique.toString()[ this.unique.toString().length - 1 ] : 1;
		const rand1: number = Math.floor( ( Math.random() * ( 254 - n ) ) + 1 );
		const rand2: number = Math.floor( ( Math.random() * ( 254 - n ) ) + 1 );
		const rand3: number = Math.floor( ( Math.random() * ( 254 - n ) ) + 1 );

		this.background = `rgb(${ rand1 }, ${ rand2 }, ${ rand3 })`;

		return this.background;
	}

}
