import { Component, Inject, Optional } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DEFAULT_APP_URL } from '../../lib/injection-token';

declare var window: Window;

@Component({
	selector	: 'error',
	templateUrl	: '../templates/error.pug',
	styleUrls	: [ '../styles/error.scss' ],
	host		: { class: 'flex-noshrink layout-column' },
})
export class ErrorComponent {

	public errorCode: number;
	public errorMsg: string;

	/**
	* @constructor
	* @param {ActivatedRoute} route
	*/
	constructor(
		@Optional() @Inject( DEFAULT_APP_URL ) readonly defaultAppURL: string,
		public route: ActivatedRoute
	) {
		this.errorCode = route.snapshot.data.code;
		this.errorMsg = route.snapshot.data.title;
	}

	/**
	* Try again
	* @return {void}
	*/
	public tryAgain() {
		window.location.assign( this.defaultAppURL );
	}

}
