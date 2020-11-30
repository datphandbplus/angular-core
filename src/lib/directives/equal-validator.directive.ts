import { Directive, forwardRef } from '@angular/core';
import { FormControl, NG_VALIDATORS, AbstractControl } from '@angular/forms';
import _ from 'underscore';

// @dynamic
@Directive({
	selector: '[validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
	providers: [
		{
			provide		: NG_VALIDATORS,
			useExisting	: forwardRef( () => EqualValidatorDirective ),
			multi		: true,
		},
	],
})
export class EqualValidatorDirective {

	/**
	* Validator
	* @static
	* @param {string} validateEqual
	* @param {boolean} reverse
	* @param {any} options
	* @return {any}
	*/
	public static validator( validateEqual: string, reverse: boolean = false, options: any = {} ) {
		return ( c: FormControl ): { [ key: string ]: any } => {
			// Self value
			const v: any = c.value;

			// Control value
			const e: AbstractControl = c.root.get( validateEqual );

			// Value not equal
			if ( e && v !== e.value && !reverse ) {
				return {
					validateEqual: options,
				};
			}

			// Value equal and reverse
			if ( e && v === e.value && reverse && e.errors !== null ) {
				delete e.errors.validateEqual;

				if ( !_.keys( e.errors ).length ) {
					e.setErrors( null );
				}
			}

			// Value not equal and reverse
			if ( e && v !== e.value && reverse ) {
				c.setErrors( { validateEqual: options } );
			}

			return null;
		};
	}

	/**
	* Match password
	* @static
	* @param {AbstractControl} AC
	* @return {any}
	*/
	public static MatchPassword( AC: AbstractControl ) {
		const newPassword: any = AC.get( 'new_password' ).value;
		const confirmNewPassword: any = AC.get( 'confirm_new_password' ).value;

		if ( newPassword !== confirmNewPassword ) {
			return AC.get( 'confirm_new_password' ).setErrors( { MatchPassword: true } );
		}

		return null;
	}

}
