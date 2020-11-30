import { HttpClient } from '@angular/common/http';
import { TranslateLoader } from '@ngx-translate/core';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import _ from 'underscore';

export class MultiTranslateHttpLoader implements TranslateLoader {

	/**
	* @constructor
	* @param {HttpClient} http
	* @param {Array} resources
	*/
	constructor(
		private http: HttpClient,
		public resources: { prefix: string, suffix: string }[] = [
			{
				prefix: 'assets/i18n/',
				suffix: '.json',
			},
		]
	) {}

	/**
	* Get translation
	* @param {string} lang
	* @return {any}
	*/
	public getTranslation( lang: string ): any {
		return forkJoin( this.resources.map( ( config: any ) => {
			return this.http.get( `${config.prefix}${lang}${config.suffix}` );
		} ) ).pipe(
			map( ( response: any ) => {
				return _.reduce( response, ( a: any, b: any ) => {
					return _.assign( a, b );
				} );
			} )
		);
	}

}
