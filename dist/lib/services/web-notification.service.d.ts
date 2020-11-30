import { Observable } from 'rxjs';
export declare class WebNotificationService {
    readonly defaultAppLogo: string;
    permission: Permission;
    /**
    * @constructor
    * @param {string} defaultAppLogo
    */
    constructor(defaultAppLogo: string);
    /**
    * Is supported
    * @return {boolean}
    */
    isSupported(): boolean;
    /**
    * Request permission
    * @return {void}
    */
    requestPermission(): void;
    /**
    * Create notification
    * @param {string} title - Notification title
    * @param {PushNotification} options - Notification options
    * @return {Observable}
    */
    create(title: string, options?: PushNotification): Observable<any>;
    /**
    * Generate notification
    * @param {Array} source
    * @return {Observable}
    */
    generateNotification(source: Array<any>): void;
}
export declare type Permission = 'denied' | 'granted' | 'default';
export interface PushNotification {
    body?: string;
    icon?: string;
    tag?: string;
    data?: any;
    renotify?: boolean;
    silent?: boolean;
    sound?: string;
    noscreen?: boolean;
    sticky?: boolean;
    dir?: 'auto' | 'ltr' | 'rtl';
    lang?: string;
    vibrate?: number[];
}
