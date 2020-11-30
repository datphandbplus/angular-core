import { Observable, ReplaySubject } from 'rxjs';
import { StoreService } from './store.service';
export declare class WebSocketService {
    readonly defaultAuthorizedKey: string;
    readonly defaultServerWSURL: string;
    private storeService;
    private webSocketChange;
    private socket;
    /**
    * @constructor
    * @param {string} defaultAuthorizedKey
    * @param {string} defaultServerWSURL
    * @param {StoreService} storeService
    */
    constructor(defaultAuthorizedKey: string, defaultServerWSURL: string, storeService: StoreService);
    /**
    * Connect
    * @return {Observable}
    */
    connect(): Observable<any>;
    /**
    * Emit socket
    * @param {any} _emit
    * @param {any} data
    * @return {void}
    */
    emit(_emit: any, data: any): void;
    /**
    * Socket listenner
    * @param {any} event
    * @return {Observable}
    */
    on(event: any): Observable<any>;
    /**
    * Disconnect
    * @return {void}
    */
    disconnect(): void;
    /**
    * Get socket change
    * @return {ReplaySubject}
    */
    getSocketChange(): ReplaySubject<any>;
}
