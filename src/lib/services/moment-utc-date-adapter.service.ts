import { Inject, Injectable, Optional } from '@angular/core';
import { MAT_DATE_LOCALE } from '@angular/material';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import moment, { Moment } from 'moment-timezone';

@Injectable()
export class MomentUtcDateAdapter extends MomentDateAdapter {

	public timezone: string;

	/**
	* @constructor
	* @param {string} dateLocale
	*/
	constructor( @Optional() @Inject( MAT_DATE_LOCALE ) dateLocale: string) {
		super( dateLocale );
	}

	/**
	* Create date
	* @desc Handle fullcalendar datetime locale
	* @param {number} year
	* @param {number} month
	* @param {number} date
	* @return {Moment}
	*/
	public createDate( year: number, month: number, date: number ): Moment {
		// Moment.js will create an invalid date if any of the components are out of bounds, but we
		// explicitly check each case so we can throw more descriptive errors.
		if ( month < 0 || month > 11 ) {
			throw Error( `Invalid month index "${month}". Month index has to be between 0 and 11.` );
		}

		if ( date < 1 ) {
			throw Error( `Invalid date "${date}". Date has to be greater than 0.` );
		}

		const result: any = moment()
		.year( year )
		.month( month )
		.date( date )
		.hour( 0 )
		.minute( 0 )
		.second( 0 )
		.locale( this.locale );

		// If the result isn't valid, the date must have been out of bounds for this month.
		if ( !result.isValid() ) {
			throw Error( `Invalid date "${date}" for month with index "${month}".` );
		}

		return result;
	}

}
