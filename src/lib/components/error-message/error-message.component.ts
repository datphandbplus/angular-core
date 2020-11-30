import {
	Input, Component, Optional,
	Inject, InjectionToken
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormControl } from '@angular/forms';
import _ from 'underscore';

export const ERROR_MESSAGE_DEFAULT_OPTIONS: InjectionToken<any> = new InjectionToken<any>( 'defaultOptions' );

@Component({
	selector	: 'error-message',
	templateUrl	: './error-message.pug',
})
export class ErrorMessageComponent {

	@Input() public label: string;
	@Input() public multiple: boolean = ( this.defaultOptions || {} ).mutiple;
	@Input() public control: FormControl = new FormControl();

	/**
	* @constructor
	* @param {any} defaultOptions
	* @param {TranslateService} translateService
	*/
	constructor(
		@Optional() @Inject( ERROR_MESSAGE_DEFAULT_OPTIONS ) readonly defaultOptions: any,
		public translateService: TranslateService
	) {}

	/**
	* Get field errors
	* @return {Array}
	*/
	public getFieldErrors(): Array<string> {
		if ( !this.control ) return [];

		const errors: any = this.control.errors;
		const keys: Array<string> = _.keys( errors );

		if ( !keys || !keys.length ) return [];

		return _.map( this.multiple ? keys : [ keys[ 0 ] ], ( key: string ) => {
			const error: any = errors[ key ];

			key = key.toUpperCase();

			if ( !_.contains(
				[
					'REQUIRED', 'MIN', 'MAX',
					'MINLENGTH', 'MAXLENGTH',
					'PATTERN', 'MATCHPASSWORD',
				],
				key
			) ) {
				key = 'INVALID';
			}

			return this.translateService.instant(
				'FORM_ERROR_MESSAGES.' + key,
				{
					...error,
					field	: this.label,
					length	: error.requiredLength,
					format	: error.requiredPattern,
				}
			);
		} );
	}

}
