import {
	Input, Component, Optional,
	Inject, InjectionToken
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormControl } from '@angular/forms';
import _ from 'underscore';

import { NumberService } from '../../services/number.service';

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
	* @param {NumberService} numberService
	* @param {TranslateService} translateService
	*/
	constructor(
		@Optional() @Inject( ERROR_MESSAGE_DEFAULT_OPTIONS ) readonly defaultOptions: any,
		public numberService	: NumberService,
		public translateService	: TranslateService
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
					'MIN_GREATER_THAN', 'MAX_LESS_THAN', 'MINLENGTH',
					'MAXLENGTH', 'PATTERN', 'MATCHPASSWORD',
					'LENGTH', 'EQUAL',
				],
				key
			) ) {
				key = 'INVALID';
			}

			let value: any;

			switch ( key ) {
				case 'MIN':
				case 'MIN_GREATER_THAN':
					value = NumberService.addCommas( error.min );
					break;
				case 'MAX':
				case 'MAX_LESS_THAN':
					value = NumberService.addCommas( error.max );
					break;
				case 'LENGTH':
				case 'MAXLENGTH':
				case 'MINLENGTH':
					value = NumberService.addCommas( error.requiredLength );
					break;
				case 'EQUAL':
					value = NumberService.addCommas( error.requiredValue );
					break;
				case 'PATTERN':
					value = error.requiredPattern;
					break;
			}

			return this.translateService.instant(
				'FORM_ERROR_MESSAGES.' + key,
				{ ...error, value, field: this.label }
			);
		} );
	}

}
