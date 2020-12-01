import {
	Input, Component, Optional,
	Inject, InjectionToken
} from '@angular/core';
import _ from 'underscore';

export const AVATAR_BOX_DEFAULT_OPTIONS: InjectionToken<any> = new InjectionToken<any>( 'defaultOptions' );

@Component({
	selector	: 'avatar-box',
	templateUrl	: './avatar-box.pug',
})
export class AvatarBoxComponent {

	@Input() public source: string;
	@Input() public unique: number;
	@Input() public title: string;
	@Input() public defaultAvatar: string = ( this.defaultOptions || {} ).defaultAvatar;
	@Input() public titleLength: number = ( this.defaultOptions || {} ).titleLength || 2;
	@Input() public size: number = ( this.defaultOptions || {} ).size || 44;
	@Input() public rounded: boolean = ( this.defaultOptions || {} ).rounded !== undefined
		? ( this.defaultOptions || {} ).rounded
		: false;
	@Input() public lazy: boolean = ( this.defaultOptions || {} ).lazy !== undefined
		? ( this.defaultOptions || {} ).lazy
		: true;

	private _background: string;

	/**
	* @constructor
	* @param {any} defaultOptions
	*/
	constructor( @Optional() @Inject( AVATAR_BOX_DEFAULT_OPTIONS ) readonly defaultOptions: any ) {}

	/**
	* Get avatar background
	* @return {string}
	*/
	public get avatarBackground(): string {
		if ( this._background ) return this._background;

		const n: number = this.unique ? +this.unique.toString()[ this.unique.toString().length - 1 ] : 1;
		const rand1: number = Math.floor( ( Math.random() * ( 254 - n ) ) + 1 );
		const rand2: number = Math.floor( ( Math.random() * ( 254 - n ) ) + 1 );
		const rand3: number = Math.floor( ( Math.random() * ( 254 - n ) ) + 1 );

		this._background = `rgb(${rand1}, ${rand2}, ${rand3})`;

		return this._background;
	}

	/**
	* Get avatar title
	* @return {string}
	*/
	public get avatarTitle(): string {
		if ( !this.title ) return '';

		const title: string = this.title.trim();

		if ( this.titleLength === 1 ) return title.charAt( 0 ).toUpperCase();

		return title.search( ' ' ) === -1
			? title.substring( 0, this.titleLength )
			: _.map(
				title.split( ' ' ).slice( 0, this.titleLength ),
				( item: string ) => item.charAt( 0 )
			).join( '' );
	}

}
