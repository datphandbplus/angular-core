import { InjectionToken, SimpleChanges, OnChanges } from '@angular/core';
export declare const AVATAR_BOX_DEFAULT_OPTIONS: InjectionToken<any>;
export declare class AvatarBoxComponent implements OnChanges {
    readonly defaultOptions: any;
    source: string;
    unique: number;
    title: string;
    defaultAvatar: string;
    lazy: boolean;
    size: number;
    background: string;
    displayAvatar: string;
    /**
    * @constructor
    * @param {any} defaultOptions
    */
    constructor(defaultOptions: any);
    /**
    * @constructor
    * @param {SimpleChanges} changes
    */
    ngOnChanges(changes: SimpleChanges): void;
    /**
    * Get avatar background
    * @return {string}
    */
    readonly avatarBackground: string;
}
