import { SwPush, SwUpdate } from '@angular/service-worker';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
export declare class ServiceWorkerService {
    readonly defaultFCMPublicKey: string;
    readonly defaultAppURL: string;
    private swPush;
    private swUpdate;
    private apiService;
    /**
    * @constructor
    * @param {string} defaultFCMPublicKey
    * @param {string} defaultAppURL
    * @param {SwPush} swPush
    * @param {SwUpdate} swUpdate
    * @param {ApiService} apiService
    */
    constructor(defaultFCMPublicKey: string, defaultAppURL: string, swPush: SwPush, swUpdate: SwUpdate, apiService: ApiService);
    /**
    * Update available version
    * @return {void}
    */
    updateAvailableVersion(): void;
    /**
    * Enable push notification
    * @return {void}
    */
    enablePushNotification(): void;
    /**
    * Disable push notification
    * @return {void}
    */
    disablePushNotification(): void;
    /**
    * Listen push notification
    * @return {Observable}
    */
    listenPushNotification(): Observable<any>;
}
