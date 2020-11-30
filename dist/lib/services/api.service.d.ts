import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { StoreService } from './store.service';
export declare class ApiService {
    readonly defaultServerApiURL: string;
    readonly defaultAuthorizedKey: string;
    private http;
    private storeService;
    private router;
    private baseUrl;
    private storedAuth;
    /**
    * @constructor
    * @param {string} defaultServerApiURL
    * @param {string} defaultAuthorizedKey
    * @param {HttpClient} http
    * @param {StoreService} storeService
    * @param {Router} router
    */
    constructor(defaultServerApiURL: string, defaultAuthorizedKey: string, http: HttpClient, storeService: StoreService, router: Router);
    /**
    * Set http headers
    * @private
    * @param {any} headers
    * @return {HttpHeaders}
    */
    private setHeaders;
    /**
    * Fail callback
    * @private
    * @param {any} error
    * @return {any}
    */
    private failCallback;
    /**
    * Set stored auth
    * @param {any} storedAuth
    * @return {void}
    */
    setStoredAuth(storedAuth: any): void;
    /**
    * Get stored auth
    * @return {any}
    */
    getStoredAuth(): any;
    /**
    * Remove stored auth
    * @return {void}
    */
    removeStoredAuth(): void;
    /**
    * Set http base url
    * @param {string} url
    * @return {void}
    */
    setBaseUrl(url: string): void;
    /**
    * Call http
    * @param {string} url - Http url
    * @param {string} type - Http method
    * @param {any} params - Http params
    * @param {any} headers - Http headers
    * @return {Observable}
    */
    call(url: string, type?: string, params?: any, headers?: any): Observable<any>;
    /**
    * Call http upload
    * @param {string} url - Http url
    * @param {Array} files - Upload Files
    * @param {any} headers - Http headers
    * @return {Observable}
    */
    upload(url: string, files: any, headers?: any): Observable<any>;
}
