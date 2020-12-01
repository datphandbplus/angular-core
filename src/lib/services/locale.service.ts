import { Injectable, Optional, Inject } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import moment from 'moment-timezone';
import * as vi from 'moment/locale/vi';

import { DEFAULT_LOCALE } from '../injection-token';

moment.defineLocale( 'vi', {
	...vi,
	months	: 'Tháng 1_Tháng 2_Tháng 3_Tháng 4_Tháng 5_Tháng 6_Tháng 7_Tháng 8_Tháng 9_Tháng 10_Tháng 11_Tháng 12'.split( '_' ),
	weekdays: 'Chủ nhật_Thứ hai_Thứ ba_Thứ tư_Thứ năm_Thứ sáu_Thứ bảy'.split( '_' ),
} );

@Injectable()
export class LocaleService {

	private _locale: string;
	public localeChangeObserver: ReplaySubject<any> = new ReplaySubject<string>();

	/**
	* @constructor
	* @param {string} defaultLocale
	* @param {TranslateService} translateService
	*/
	constructor(
		@Optional() @Inject( DEFAULT_LOCALE ) readonly defaultLocale: string,
		private translateService: TranslateService
	) {}

	/**
	* Set locale
	* @param {string} locale
	* @return {void}
	*/
	set locale( locale: string ) {
		if ( !locale ) return;

		this._locale = locale;

		// Store locale
		localStorage.setItem( 'locale', locale.toString() );

		// Set moment language
		moment.locale( locale );

		// The lang to use, if the lang isn't available, it will use the current loader to get them
		this.translateService.use( locale.substring( 0, 2 ).toLowerCase() ).subscribe();

		// Trigger locale changed
		this.localeChangeObserver.next( locale );
	}

	/**
	* Get locale
	* @return {string}
	*/
	get locale(): string {
		return this._locale || localStorage.getItem( 'locale' ) || this.defaultLocale;
	}

}
