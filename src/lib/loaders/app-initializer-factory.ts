import { Injector } from '@angular/core';
import { LOCATION_INITIALIZED } from '@angular/common';
import moment from 'moment-timezone';

import { DEFAULT_TIMEZONE } from '../injection-token';
import { LocaleService } from '../services/locale.service';

export function appInitializerFactory( localeService: LocaleService, injector: Injector ) {
	return () => new Promise<any>( ( resolve: any ) => {
		const locationInitialized: any = injector.get( LOCATION_INITIALIZED, Promise.resolve( null ) );
		const defaultTimezone: string = injector.get( DEFAULT_TIMEZONE );

		locationInitialized.then( () => {
			// Set moment timezone
			moment.tz.setDefault( defaultTimezone );

			// Init system locale
			localeService.initLocale();

			resolve( true );
		} );
	} );
}
