import { Injectable } from '@angular/core';
import * as _$ from 'jquery';

const $: any = _$;

const BREAKPOINTS: any = {
	xs: 600,
	sm: 960,
	md: 1280,
	lg: 1920,
};

@Injectable()
export class MediaService {

	private media: number;

	/**
	* @constructor
	*/
	constructor() {
		this.media = window.innerWidth;
	}

	/**
	* Check media is in breakpoints
	* @param {number} breakpoint - Breakpoint to check
	* @return {boolean}
	*/
	public is( breakpoint: string ): boolean {
		this.media = window.innerWidth;

		return ( ( breakpoint === 'xs' && this.media < BREAKPOINTS.xs )
			|| ( breakpoint === 'gt-xs' && this.media >= BREAKPOINTS.xs )
			|| ( breakpoint === 'sm' && this.media >= BREAKPOINTS.xs && this.media < BREAKPOINTS.sm )
			|| ( breakpoint === 'gt-sm' && this.media >= BREAKPOINTS.sm )
			|| ( breakpoint === 'md' && this.media >= BREAKPOINTS.sm && this.media < BREAKPOINTS.md )
			|| ( breakpoint === 'gt-md' && this.media >= BREAKPOINTS.md )
			|| ( breakpoint === 'lg' && this.media >= BREAKPOINTS.md && this.media < BREAKPOINTS.lg )
			|| ( breakpoint === 'gt-lg' && this.media >= BREAKPOINTS.lg ) );
	}

	/**
	* Check media is greater than width
	* @param {number} width - Width to check
	* @return {boolean}
	*/
	public gt( width: number ): boolean {
		this.media = window.innerWidth;
		return this.media >= width;
	}

	/**
	* Check media is less than width
	* @param {number} width - Width to check
	* @return {boolean}
	*/
	public lt( width: number ): boolean {
		this.media = window.innerWidth;
		return this.media < width;
	}

	/**
	* Set media view port
	* @param {number} width - Viewport width
	* @return {void}
	*/
	public setViewPort( width: number ) {
		// In case browser resizing
		if ( window.innerWidth < screen.width ) {
			$( 'body' ).addClass( 'resizing' );
			return;
		}

		// In case real devices
		const meta: any = $( 'meta[name=viewport]' );

		let viewPort: string = 'width=device-width, initial-scale=1.0, user-scalable=0';

		if ( width ) {
			const scale: number = window.innerWidth / width;

			viewPort = 'width='
				+ width
				+ ', minimum-scale='
				+ scale
				+ ', initial-scale='
				+ scale
				+ ', maximum-scale=1.0';
		}

		meta.prop( 'content', viewPort );
	}

}
