import * as tslib_1 from "tslib";
import { Injectable, Inject, Optional } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import _ from 'underscore';
import { StoreService } from './store.service';
import { DEFAULT_SERVER_API_URL, DEFAULT_AUTHORIZED_KEY } from '../injection-token';
let ApiService = class ApiService {
    /**
    * @constructor
    * @param {string} defaultServerApiURL
    * @param {string} defaultAuthorizedKey
    * @param {HttpClient} http
    * @param {StoreService} storeService
    * @param {Router} router
    */
    constructor(defaultServerApiURL, defaultAuthorizedKey, http, storeService, router) {
        this.defaultServerApiURL = defaultServerApiURL;
        this.defaultAuthorizedKey = defaultAuthorizedKey;
        this.http = http;
        this.storeService = storeService;
        this.router = router;
        this.baseUrl = this.defaultServerApiURL;
    }
    /**
    * Set http headers
    * @private
    * @param {any} headers
    * @return {HttpHeaders}
    */
    setHeaders(headers) {
        const info = this.getStoredAuth();
        headers = new HttpHeaders(headers);
        if (info) {
            headers = headers.append('x-channel-id', info.channel_id);
            headers = headers.append('x-channel-token', info.channel_token);
            headers = headers.append('x-account-id', info.account_id);
            headers = headers.append('x-account-token', info.account_token);
        }
        return headers;
    }
    /**
    * Fail callback
    * @private
    * @param {any} error
    * @return {any}
    */
    failCallback(error) {
        let err = {};
        try {
            err = error.json();
        }
        catch (_a) { }
        if (error.status === 401) {
            this.router.navigate(['logout']);
        }
        else if (error.status === 500
            || error.status === 404
            || error.status === 403
            || error.status === 400) {
            this.router.navigate([error.status]);
        }
        return {
            status: error.status,
            message: err ? err : 'Unknown Error',
        };
    }
    /**
    * Set stored auth
    * @param {any} storedAuth
    * @return {void}
    */
    setStoredAuth(storedAuth) {
        this.storedAuth = storedAuth;
    }
    /**
    * Get stored auth
    * @return {any}
    */
    getStoredAuth() {
        if (!this.storedAuth) {
            this.storedAuth = this.storeService.get(this.defaultAuthorizedKey);
        }
        return this.storedAuth;
    }
    /**
    * Remove stored auth
    * @return {void}
    */
    removeStoredAuth() {
        this.storedAuth = null;
    }
    /**
    * Set http base url
    * @param {string} url
    * @return {void}
    */
    setBaseUrl(url) {
        this.baseUrl = url;
    }
    /**
    * Call http
    * @param {string} url - Http url
    * @param {string} type - Http method
    * @param {any} params - Http params
    * @param {any} headers - Http headers
    * @return {Observable}
    */
    call(url, type = 'get', params = {}, headers = {}) {
        return new Observable((observer) => {
            headers = this.setHeaders(Object.assign({ 'Content-Type': 'application/json;charset=UTF-8' }, headers));
            const options = { headers };
            url = this.baseUrl ? this.baseUrl + url : this.baseUrl;
            type = type.toLowerCase();
            if (type === 'delete' || type === 'get') {
                let first = '?';
                for (const key in params) {
                    if (params.hasOwnProperty(key)) {
                        url += first + key + '=' + params[key];
                        first = '&';
                    }
                }
                params = options;
            }
            this.http[type](url, params, options)
                .subscribe((response) => observer.next(response), (error) => observer.error(this.failCallback(error)), () => observer.complete());
        });
    }
    /**
    * Call http upload
    * @param {string} url - Http url
    * @param {Array} files - Upload Files
    * @param {any} headers - Http headers
    * @return {Observable}
    */
    upload(url, files, headers = {}) {
        return new Observable((observer) => {
            headers = this.setHeaders(headers);
            const formData = new FormData();
            const options = { headers };
            // In case files is file list or array files
            if (files instanceof FileList || files instanceof Array) {
                _.each(files, (file) => formData.append('files[]', file, file.name));
            }
            else {
                formData.append('file', files);
            }
            url = this.baseUrl ? this.baseUrl + url : this.baseUrl;
            this.http.post(url, formData, options)
                .subscribe((response) => observer.next(response), (error) => observer.error(this.failCallback(error)), () => observer.complete());
        });
    }
};
ApiService.ctorParameters = () => [
    { type: String, decorators: [{ type: Optional }, { type: Inject, args: [DEFAULT_SERVER_API_URL,] }] },
    { type: String, decorators: [{ type: Optional }, { type: Inject, args: [DEFAULT_AUTHORIZED_KEY,] }] },
    { type: HttpClient },
    { type: StoreService },
    { type: Router }
];
ApiService = tslib_1.__decorate([
    Injectable(),
    tslib_1.__param(0, Optional()), tslib_1.__param(0, Inject(DEFAULT_SERVER_API_URL)),
    tslib_1.__param(1, Optional()), tslib_1.__param(1, Inject(DEFAULT_AUTHORIZED_KEY)),
    tslib_1.__metadata("design:paramtypes", [String, String, HttpClient,
        StoreService,
        Router])
], ApiService);
export { ApiService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNvcmUvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvYXBpLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsVUFBVSxFQUFZLE1BQU0sTUFBTSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDL0QsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sQ0FBQyxNQUFNLFlBQVksQ0FBQztBQUUzQixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLHNCQUFzQixFQUFFLHNCQUFzQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHcEYsSUFBYSxVQUFVLEdBQXZCLE1BQWEsVUFBVTtJQUt0Qjs7Ozs7OztNQU9FO0lBQ0YsWUFDd0QsbUJBQTJCLEVBQzNCLG9CQUE0QixFQUMzRSxJQUFrQixFQUNsQixZQUEwQixFQUMxQixNQUFnQjtRQUorQix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQVE7UUFDM0IseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFRO1FBQzNFLFNBQUksR0FBSixJQUFJLENBQWM7UUFDbEIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsV0FBTSxHQUFOLE1BQU0sQ0FBVTtRQWhCakIsWUFBTyxHQUFXLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztJQWlCaEQsQ0FBQztJQUVKOzs7OztNQUtFO0lBQ00sVUFBVSxDQUFFLE9BQVk7UUFDL0IsTUFBTSxJQUFJLEdBQVEsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBRXZDLE9BQU8sR0FBRyxJQUFJLFdBQVcsQ0FBRSxPQUFPLENBQUUsQ0FBQztR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dXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIE9ic2VydmVyIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgXyBmcm9tICd1bmRlcnNjb3JlJztcblxuaW1wb3J0IHsgU3RvcmVTZXJ2aWNlIH0gZnJvbSAnLi9zdG9yZS5zZXJ2aWNlJztcbmltcG9ydCB7IERFRkFVTFRfU0VSVkVSX0FQSV9VUkwsIERFRkFVTFRfQVVUSE9SSVpFRF9LRVkgfSBmcm9tICcuLi9pbmplY3Rpb24tdG9rZW4nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXBpU2VydmljZSB7XG5cblx0cHJpdmF0ZSBiYXNlVXJsOiBzdHJpbmcgPSB0aGlzLmRlZmF1bHRTZXJ2ZXJBcGlVUkw7XG5cdHByaXZhdGUgc3RvcmVkQXV0aDogYW55O1xuXG5cdC8qKlxuXHQqIEBjb25zdHJ1Y3RvclxuXHQqIEBwYXJhbSB7c3RyaW5nfSBkZWZhdWx0U2VydmVyQXBpVVJMXG5cdCogQHBhcmFtIHtzdHJpbmd9IGRlZmF1bHRBdXRob3JpemVkS2V5XG5cdCogQHBhcmFtIHtIdHRwQ2xpZW50fSBodHRwXG5cdCogQHBhcmFtIHtTdG9yZVNlcnZpY2V9IHN0b3JlU2VydmljZVxuXHQqIEBwYXJhbSB7Um91dGVyfSByb3V0ZXJcblx0Ki9cblx0Y29uc3RydWN0b3IoXG5cdFx0QE9wdGlvbmFsKCkgQEluamVjdCggREVGQVVMVF9TRVJWRVJfQVBJX1VSTCApIHJlYWRvbmx5IGRlZmF1bHRTZXJ2ZXJBcGlVUkw6IHN0cmluZyxcblx0XHRAT3B0aW9uYWwoKSBASW5qZWN0KCBERUZBVUxUX0FVVEhPUklaRURfS0VZICkgcmVhZG9ubHkgZGVmYXVsdEF1dGhvcml6ZWRLZXk6IHN0cmluZyxcblx0XHRwcml2YXRlIGh0dHBcdFx0OiBIdHRwQ2xpZW50LFxuXHRcdHByaXZhdGUgc3RvcmVTZXJ2aWNlOiBTdG9yZVNlcnZpY2UsXG5cdFx0cHJpdmF0ZSByb3V0ZXJcdFx0OiBSb3V0ZXJcblx0KSB7fVxuXG5cdC8qKlxuXHQqIFNldCBodHRwIGhlYWRlcnNcblx0KiBAcHJpdmF0ZVxuXHQqIEBwYXJhbSB7YW55fSBoZWFkZXJzXG5cdCogQHJldHVybiB7SHR0cEhlYWRlcnN9XG5cdCovXG5cdHByaXZhdGUgc2V0SGVhZGVycyggaGVhZGVyczogYW55ICk6IEh0dHBIZWFkZXJzIHtcblx0XHRjb25zdCBpbmZvOiBhbnkgPSB0aGlzLmdldFN0b3JlZEF1dGgoKTtcblxuXHRcdGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoIGhlYWRlcnMgKTtcblxuXHRcdGlmICggaW5mbyApIHtcblx0XHRcdGhlYWRlcnMgPSBoZWFkZXJzLmFwcGVuZCggJ3gtY2hhbm5lbC1pZCcsIGluZm8uY2hhbm5lbF9pZCApO1xuXHRcdFx0aGVhZGVycyA9IGhlYWRlcnMuYXBwZW5kKCAneC1jaGFubmVsLXRva2VuJywgaW5mby5jaGFubmVsX3Rva2VuICk7XG5cdFx0XHRoZWFkZXJzID0gaGVhZGVycy5hcHBlbmQoICd4LWFjY291bnQtaWQnLCBpbmZvLmFjY291bnRfaWQgKTtcblx0XHRcdGhlYWRlcnMgPSBoZWFkZXJzLmFwcGVuZCggJ3gtYWNjb3VudC10b2tlbicsIGluZm8uYWNjb3VudF90b2tlbiApO1xuXHRcdH1cblxuXHRcdHJldHVybiBoZWFkZXJzO1xuXHR9XG5cblx0LyoqXG5cdCogRmFpbCBjYWxsYmFja1xuXHQqIEBwcml2YXRlXG5cdCogQHBhcmFtIHthbnl9IGVycm9yXG5cdCogQHJldHVybiB7YW55fVxuXHQqL1xuXHRwcml2YXRlIGZhaWxDYWxsYmFjayggZXJyb3I6IGFueSApOiBhbnkge1xuXHRcdGxldCBlcnI6IGFueSA9IHt9O1xuXG5cdFx0dHJ5IHtcblx0XHRcdGVyciA9IGVycm9yLmpzb24oKTtcblx0XHR9IGNhdGNoIHt9XG5cblx0XHRpZiAoIGVycm9yLnN0YXR1cyA9PT0gNDAxICkge1xuXHRcdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoIFsgJ2xvZ291dCcgXSApO1xuXHRcdH0gZWxzZSBpZiAoIGVycm9yLnN0YXR1cyA9PT0gNTAwXG5cdFx0XHR8fCBlcnJvci5zdGF0dXMgPT09IDQwNFxuXHRcdFx0fHwgZXJyb3Iuc3RhdHVzID09PSA0MDNcblx0XHRcdHx8IGVycm9yLnN0YXR1cyA9PT0gNDAwICkge1xuXHRcdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoIFsgZXJyb3Iuc3RhdHVzIF0gKTtcblx0XHR9XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0c3RhdHVzXHQ6IGVycm9yLnN0YXR1cyxcblx0XHRcdG1lc3NhZ2VcdDogZXJyID8gZXJyIDogJ1Vua25vd24gRXJyb3InLFxuXHRcdH07XG5cdH1cblxuXHQvKipcblx0KiBTZXQgc3RvcmVkIGF1dGhcblx0KiBAcGFyYW0ge2FueX0gc3RvcmVkQXV0aFxuXHQqIEByZXR1cm4ge3ZvaWR9XG5cdCovXG5cdHB1YmxpYyBzZXRTdG9yZWRBdXRoKCBzdG9yZWRBdXRoOiBhbnkgKSB7XG5cdFx0dGhpcy5zdG9yZWRBdXRoID0gc3RvcmVkQXV0aDtcblx0fVxuXG5cdC8qKlxuXHQqIEdldCBzdG9yZWQgYXV0aFxuXHQqIEByZXR1cm4ge2FueX1cblx0Ki9cblx0cHVibGljIGdldFN0b3JlZEF1dGgoKTogYW55IHtcblx0XHRpZiAoICF0aGlzLnN0b3JlZEF1dGggKSB7XG5cdFx0XHR0aGlzLnN0b3JlZEF1dGggPSB0aGlzLnN0b3JlU2VydmljZS5nZXQoIHRoaXMuZGVmYXVsdEF1dGhvcml6ZWRLZXkgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5zdG9yZWRBdXRoO1xuXHR9XG5cblx0LyoqXG5cdCogUmVtb3ZlIHN0b3JlZCBhdXRoXG5cdCogQHJldHVybiB7dm9pZH1cblx0Ki9cblx0cHVibGljIHJlbW92ZVN0b3JlZEF1dGgoKSB7XG5cdFx0dGhpcy5zdG9yZWRBdXRoID0gbnVsbDtcblx0fVxuXG5cdC8qKlxuXHQqIFNldCBodHRwIGJhc2UgdXJsXG5cdCogQHBhcmFtIHtzdHJpbmd9IHVybFxuXHQqIEByZXR1cm4ge3ZvaWR9XG5cdCovXG5cdHB1YmxpYyBzZXRCYXNlVXJsKCB1cmw6IHN0cmluZyApIHtcblx0XHR0aGlzLmJhc2VVcmwgPSB1cmw7XG5cdH1cblxuXHQvKipcblx0KiBDYWxsIGh0dHBcblx0KiBAcGFyYW0ge3N0cmluZ30gdXJsIC0gSHR0cCB1cmxcblx0KiBAcGFyYW0ge3N0cmluZ30gdHlwZSAtIEh0dHAgbWV0aG9kXG5cdCogQHBhcmFtIHthbnl9IHBhcmFtcyAtIEh0dHAgcGFyYW1zXG5cdCogQHBhcmFtIHthbnl9IGhlYWRlcnMgLSBIdHRwIGhlYWRlcnNcblx0KiBAcmV0dXJuIHtPYnNlcnZhYmxlfVxuXHQqL1xuXHRwdWJsaWMgY2FsbCggdXJsOiBzdHJpbmcsIHR5cGU6IHN0cmluZyA9ICdnZXQnLCBwYXJhbXM6IGFueSA9IHt9LCBoZWFkZXJzOiBhbnkgPSB7fSApOiBPYnNlcnZhYmxlPGFueT4ge1xuXHRcdHJldHVybiBuZXcgT2JzZXJ2YWJsZSggKCBvYnNlcnZlcjogT2JzZXJ2ZXI8YW55PiApID0+IHtcblx0XHRcdGhlYWRlcnMgPSB0aGlzLnNldEhlYWRlcnMoe1xuXHRcdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb247Y2hhcnNldD1VVEYtOCcsXG5cdFx0XHRcdC4uLmhlYWRlcnMsXG5cdFx0XHR9KTtcblxuXHRcdFx0Y29uc3Qgb3B0aW9uczogYW55ID0geyBoZWFkZXJzIH07XG5cblx0XHRcdHVybCA9IHRoaXMuYmFzZVVybCA/IHRoaXMuYmFzZVVybCArIHVybCA6IHRoaXMuYmFzZVVybDtcblxuXHRcdFx0dHlwZSA9IHR5cGUudG9Mb3dlckNhc2UoKTtcblxuXHRcdFx0aWYgKCB0eXBlID09PSAnZGVsZXRlJyB8fCB0eXBlID09PSAnZ2V0JyApIHtcblx0XHRcdFx0bGV0IGZpcnN0OiBzdHJpbmcgPSAnPyc7XG5cblx0XHRcdFx0Zm9yICggY29uc3Qga2V5IGluIHBhcmFtcyApIHtcblx0XHRcdFx0XHRpZiAoIHBhcmFtcy5oYXNPd25Qcm9wZXJ0eSgga2V5ICkgKSB7XG5cdFx0XHRcdFx0XHR1cmwgKz0gZmlyc3QgKyBrZXkgKyAnPScgKyBwYXJhbXNbIGtleSBdO1xuXHRcdFx0XHRcdFx0Zmlyc3QgPSAnJic7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0cGFyYW1zID0gb3B0aW9ucztcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5odHRwWyB0eXBlIF0oIHVybCwgcGFyYW1zLCBvcHRpb25zIClcblx0XHRcdC5zdWJzY3JpYmUoXG5cdFx0XHRcdCggcmVzcG9uc2U6IGFueSApID0+IG9ic2VydmVyLm5leHQoIHJlc3BvbnNlICksXG5cdFx0XHRcdCggZXJyb3I6IGFueSApID0+IG9ic2VydmVyLmVycm9yKCB0aGlzLmZhaWxDYWxsYmFjayggZXJyb3IgKSApLFxuXHRcdFx0XHQoKSA9PiBvYnNlcnZlci5jb21wbGV0ZSgpXG5cdFx0XHQpO1xuXHRcdH0gKTtcblx0fVxuXG5cdC8qKlxuXHQqIENhbGwgaHR0cCB1cGxvYWRcblx0KiBAcGFyYW0ge3N0cmluZ30gdXJsIC0gSHR0cCB1cmxcblx0KiBAcGFyYW0ge0FycmF5fSBmaWxlcyAtIFVwbG9hZCBGaWxlc1xuXHQqIEBwYXJhbSB7YW55fSBoZWFkZXJzIC0gSHR0cCBoZWFkZXJzXG5cdCogQHJldHVybiB7T2JzZXJ2YWJsZX1cblx0Ki9cblx0cHVibGljIHVwbG9hZCggdXJsOiBzdHJpbmcsIGZpbGVzOiBhbnksIGhlYWRlcnM6IGFueSA9IHt9ICk6IE9ic2VydmFibGU8YW55PiB7XG5cdFx0cmV0dXJuIG5ldyBPYnNlcnZhYmxlKCAoIG9ic2VydmVyOiBPYnNlcnZlcjxhbnk+ICkgPT4ge1xuXHRcdFx0aGVhZGVycyA9IHRoaXMuc2V0SGVhZGVycyggaGVhZGVycyApO1xuXG5cdFx0XHRjb25zdCBmb3JtRGF0YTogRm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcblx0XHRcdGNvbnN0IG9wdGlvbnM6IGFueSA9IHsgaGVhZGVycyB9O1xuXG5cdFx0XHQvLyBJbiBjYXNlIGZpbGVzIGlzIGZpbGUgbGlzdCBvciBhcnJheSBmaWxlc1xuXHRcdFx0aWYgKCBmaWxlcyBpbnN0YW5jZW9mIEZpbGVMaXN0IHx8IGZpbGVzIGluc3RhbmNlb2YgQXJyYXkgKSB7XG5cdFx0XHRcdF8uZWFjaCggZmlsZXMsICggZmlsZTogRmlsZSApID0+IGZvcm1EYXRhLmFwcGVuZCggJ2ZpbGVzW10nLCBmaWxlLCBmaWxlLm5hbWUgKSApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Zm9ybURhdGEuYXBwZW5kKCAnZmlsZScsIGZpbGVzICk7XG5cdFx0XHR9XG5cblx0XHRcdHVybCA9IHRoaXMuYmFzZVVybCA/IHRoaXMuYmFzZVVybCArIHVybCA6IHRoaXMuYmFzZVVybDtcblxuXHRcdFx0dGhpcy5odHRwLnBvc3QoIHVybCwgZm9ybURhdGEsIG9wdGlvbnMgKVxuXHRcdFx0LnN1YnNjcmliZShcblx0XHRcdFx0KCByZXNwb25zZTogYW55ICkgPT4gb2JzZXJ2ZXIubmV4dCggcmVzcG9uc2UgKSxcblx0XHRcdFx0KCBlcnJvcjogYW55ICkgPT4gb2JzZXJ2ZXIuZXJyb3IoIHRoaXMuZmFpbENhbGxiYWNrKCBlcnJvciApICksXG5cdFx0XHRcdCgpID0+IG9ic2VydmVyLmNvbXBsZXRlKClcblx0XHRcdCk7XG5cdFx0fSApO1xuXHR9XG5cbn1cbiJdfQ==