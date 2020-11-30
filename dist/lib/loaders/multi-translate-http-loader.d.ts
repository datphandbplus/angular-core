import { HttpClient } from '@angular/common/http';
import { TranslateLoader } from '@ngx-translate/core';
export declare class MultiTranslateHttpLoader implements TranslateLoader {
    private http;
    resources: {
        prefix: string;
        suffix: string;
    }[];
    /**
    * @constructor
    * @param {HttpClient} http
    * @param {Array} resources
    */
    constructor(http: HttpClient, resources?: {
        prefix: string;
        suffix: string;
    }[]);
    /**
    * Get translation
    * @param {string} lang
    * @return {any}
    */
    getTranslation(lang: string): any;
}
