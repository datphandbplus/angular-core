import { InjectionToken } from '@angular/core';
export declare const STATUS_BOX_DEFAULT_OPTIONS: InjectionToken<any>;
export declare class StatusBoxComponent {
    readonly defaultOptions: any;
    color: string;
    status: string;
    /**
    * @constructor
    * @param {any} defaultOptions
    */
    constructor(defaultOptions: any);
}
