import { CookieService } from 'ngx-cookie';
export declare class StoreService {
    readonly defaultExpireDays: number;
    readonly defaultStorageHashKey: string;
    private cookies;
    private options;
    /**
    * @constructor
    * @param {number} defaultExpireDays
    * @param {string} defaultStorageHashKey
    * @param {CookieService} cookies
    */
    constructor(defaultExpireDays: number, defaultStorageHashKey: string, cookies: CookieService);
    /**
    * Set store data
    * @param {string} key
    * @param {any} data
    * @param {number} expires - Number of expire days
    * @return {void}
    */
    set(key: string, data: any, expires?: number): void;
    /**
    * Get store data
    * @param {string} key
    * @return {any}
    */
    get(key: string): any;
    /**
    * Remove store data
    * @param {string} key
    * @return {void}
    */
    remove(key: string): void;
    /**
    * Remove all store data
    * @param {string} key
    * @return {void}
    */
    removeAll(): void;
    /**
    * Set local store data
    * @param {string} key
    * @param {any} data
    * @return {void}
    */
    setLocal(key: string, data: any): void;
    /**
    * Get local store data
    * @param {string} key
    * @return {any}
    */
    getLocal(key: string): any;
    /**
    * Remove local store data
    * @param {string} key
    * @return {void}
    */
    removeLocal(key: string): void;
    /**
    * Set store hash key
    * @param {any} value - Hash key
    * @param {number} expires - Number of expire days
    * @return {void}
    */
    setHashKey(value: any, expires?: number): void;
    /**
    * Get store hash key
    * @return {string} Hash key
    */
    getHashKey(): string;
    /**
    * Remove store hash key
    * @return {string} Hash key
    */
    removeHashKey(): void;
    /**
    * Merge options
    * @private
    * @param {number} expires - Number of expire days
    * @return {any} options - Merged options
    */
    private _mergeOptions;
}
