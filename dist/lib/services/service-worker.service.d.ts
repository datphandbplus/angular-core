import { SwPush, SwUpdate } from '@angular/service-worker';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { StoreService } from './store.service';
export declare class ServiceWorkerService {
    readonly defaultFCMPublicKey: string;
    readonly defaultAuthorizedKey: string;
    readonly defaultAppURL: string;
    private swPush;
    private swUpdate;
    private apiService;
    private storeService;
    /**
    * @constructor
    * @param {string} defaultFCMPublicKey
    * @param {string} defaultAuthorizedKey
    * @param {string} defaultAppURL
    * @param {SwPush} swPush
    * @param {SwUpdate} swUpdate
    * @param {ApiService} apiService
    * @param {StoreService} storeService
    */
    constructor(defaultFCMPublicKey: string, defaultAuthorizedKey: string, defaultAppURL: string, swPush: SwPush, swUpdate: SwUpdate, apiService: ApiService, storeService: StoreService);
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
