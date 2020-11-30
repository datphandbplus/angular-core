import { isDevMode } from '@angular/core';
import { MissingTranslationHandler, MissingTranslationHandlerParams } from '@ngx-translate/core';

export class CustomMissingTranslationHandler implements MissingTranslationHandler {

	/**
	* Handle missing translation
	* @param {MissingTranslationHandlerParams} params
	* @return {string}
	*/
	public handle( params: MissingTranslationHandlerParams ): string {
		/* tslint:disable-next-line */
		isDevMode() && console.error( params );
		return '';
	}

}
