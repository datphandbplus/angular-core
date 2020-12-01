import { InjectionToken } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormControl } from '@angular/forms';
import { NumberService } from '../../services/number.service';
export declare const ERROR_MESSAGE_DEFAULT_OPTIONS: InjectionToken<any>;
export declare class ErrorMessageComponent {
    readonly defaultOptions: any;
    numberService: NumberService;
    translateService: TranslateService;
    label: string;
    multiple: boolean;
    control: FormControl;
    /**
    * @constructor
    * @param {any} defaultOptions
    * @param {NumberService} numberService
    * @param {TranslateService} translateService
    */
    constructor(defaultOptions: any, numberService: NumberService, translateService: TranslateService);
    /**
    * Get field errors
    * @return {Array}
    */
    getFieldErrors(): Array<string>;
}
