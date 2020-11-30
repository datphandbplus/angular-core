import { FormGroup } from '@angular/forms';
import _ from 'underscore';

// @dynamic
export class FormService {

	/**
	* Copy field
	* @static
	* @param {any} value
	* @return {any}
	*/
	public static copyField( value: any ) {
		let _value: any;

		switch ( typeof value ) {
			case 'object':
				_value = _.assign( {}, value );
				break;
			case 'number':
				_value = Number( value );
				break;
			default:
				_value = value ? value.slice( 0, value.length ) : [];
				break;
		}

		return _value;
	}

	/**
	* Reset form
	* @static
	* @param {FormGroup} form
	* @param {boolean} resetValue - Flag to reset value
	* @return {void}
	*/
	public static resetForm( form: FormGroup, resetValue: boolean = false ) {
		resetValue && form.reset();
		form.markAsPristine();
		form.markAsUntouched();
	}

}
