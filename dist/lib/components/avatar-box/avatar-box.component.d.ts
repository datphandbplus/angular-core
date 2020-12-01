import { InjectionToken } from '@angular/core';
export declare const AVATAR_BOX_DEFAULT_OPTIONS: InjectionToken<any>;
export declare class AvatarBoxComponent {
    readonly defaultOptions: any;
    source: string;
    unique: number;
    title: string;
    defaultAvatar: string;
    titleLength: number;
    size: number;
    rounded: boolean;
    lazy: boolean;
    private _background;
    /**
    * @constructor
    * @param {any} defaultOptions
    */
    constructor(defaultOptions: any);
    /**
    * Get avatar background
    * @return {string}
    */
    readonly avatarBackground: string;
    /**
    * Get avatar title
    * @return {string}
    */
    readonly avatarTitle: string;
}
