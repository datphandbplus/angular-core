import { InjectionToken } from '@angular/core';
export declare const LOADING_OVERLAY_DEFAULT_OPTIONS: InjectionToken<any>;
export declare class LoadingOverlayComponent {
    readonly defaultOptions: any;
    iconOnTop: boolean;
    iconSize: number;
    visible: boolean;
    /**
    * @constructor
    * @param {any} defaultOptions
    */
    constructor(defaultOptions: any);
}
