import { InjectionToken } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormControl } from '@angular/forms';
export declare const ERROR_MESSAGE_DEFAULT_OPTIONS: InjectionToken<any>;
export declare class ErrorMessageComponent {
    readonly defaultOptions: any;
    translateService: TranslateService;
    label: string;
    multiple: boolean;
    control: FormControl;
    /**
    * @constructor
    * @param {any} defaultOptions
    * @param {TranslateService} translateService
    */
    constructor(defaultOptions: any, translateService: TranslateService);
    /**
    * Get field errors
    * @return {Array}
    */
    getFieldErrors(): Array<string>;
}
