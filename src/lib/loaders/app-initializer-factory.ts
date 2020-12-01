import { Injector } from '@angular/core';
import { LOCATION_INITIALIZED } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import moment from 'moment-timezone';

import { DEFAULT_TIMEZONE } from '../injection-token';
import { LocaleService } from '../services/locale.service';

export function appInitializerFactory( translateService: TranslateService, localeService: LocaleService, injector: Injector ) {
	return () => new Promise<any>( ( resolve: any ) => {
		const locationInitialized: any = injector.get( LOCATION_INITIALIZED, Promise.resolve( null ) );
		const defaultTimezone: string = injector.get( DEFAULT_TIMEZONE );
		const locale: string = localeService.locale;

		locationInitialized.then( () => {
			// Set moment timezone
			moment.tz.setDefault( defaultTimezone );

			// Set moment language
			moment.locale( locale );

			// This language will be used as a fallback when a translation isn't found in the current language
			const langToSet: string = locale.substring( 0, 2 ).toLowerCase();
			translateService.setDefaultLang( langToSet );
			translateService.use( langToSet ).subscribe(
				/* tslint:disable-next-line */
				() => console.info( `Successfully initialized '${langToSet}' language.'` ),
				/* tslint:disable-next-line */
				() => console.error( `Problem with '${langToSet}' language initialization.'` ),
				() => resolve( null )
			);
		} );
	} );
}
