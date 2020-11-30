import { ReplaySubject } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
export declare class LocaleService {
    readonly defaultLocale: string;
    private translateService;
    private _locale;
    localeChangeObserver: ReplaySubject<any>;
    /**
    * @constructor
    * @param {string} defaultLocale
    * @param {TranslateService} translateService
    */
    constructor(defaultLocale: string, translateService: TranslateService);
    /**
    * Set locale
    * @param {string} locale
    * @return {void}
    */
    /**
    * Get locale
    * @return {string}
    */
    locale: string;
    /**
    * Init locale
    * @return {void}
    */
    initLocale(): void;
}
