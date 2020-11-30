import { OnChanges, SimpleChanges, InjectionToken } from '@angular/core';
export declare const AVATAR_LIST_DEFAULT_OPTIONS: InjectionToken<any>;
export declare class AvatarListComponent implements OnChanges {
    readonly defaultOptions: any;
    items: Array<any>;
    board: boolean;
    alwaysVisible: boolean;
    size: number;
    boardHeight: number;
    maximum: number;
    lazy: boolean;
    handledItems: Array<any>;
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
    * Handle avatar list
    * @param {Array} items
    * @param {number} maximum
    * @return {Array}
    */
    handleAvatarList(items: Array<any>, maximum: number): Array<any>;
}
