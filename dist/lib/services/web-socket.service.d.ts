import { Observable, ReplaySubject } from 'rxjs';
export declare class WebSocketService {
    readonly defaultServerWSURL: string;
    private socket;
    private socketChange;
    /**
    * @constructor
    * @param {string} defaultServerWSURL
    */
    constructor(defaultServerWSURL: string);
    /**
    * Connect
    * @param {any} options
    * @return {Observable}
    */
    connect(options?: any): Observable<any>;
    /**
    * Emit socket
    * @param {any} event
    * @param {any} data
    * @return {void}
    */
    emit(event: any, data: any): void;
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
