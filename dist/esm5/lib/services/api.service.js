import * as tslib_1 from "tslib";
import { Injectable, Inject, Optional } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import _ from 'underscore';
import { StoreService } from './store.service';
import { DEFAULT_SERVER_API_URL, DEFAULT_AUTHORIZED_KEY } from '../injection-token';
var ApiService = /** @class */ (function () {
    /**
    * @constructor
    * @param {string} defaultServerApiURL
    * @param {string} defaultAuthorizedKey
    * @param {HttpClient} http
    * @param {StoreService} storeService
    * @param {Router} router
    */
    function ApiService(defaultServerApiURL, defaultAuthorizedKey, http, storeService, router) {
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
    ApiService.prototype.setHeaders = function (headers) {
        var info = this.getStoredAuth();
        headers = new HttpHeaders(headers);
        if (info) {
            headers = headers.append('x-channel-id', info.channel_id);
            headers = headers.append('x-channel-token', info.channel_token);
            headers = headers.append('x-account-id', info.account_id);
            headers = headers.append('x-account-token', info.account_token);
        }
        return headers;
    };
    /**
    * Fail callback
    * @private
    * @param {any} error
    * @return {any}
    */
    ApiService.prototype.failCallback = function (error) {
        var err = {};
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
    };
    /**
    * Set stored auth
    * @param {any} storedAuth
    * @return {void}
    */
    ApiService.prototype.setStoredAuth = function (storedAuth) {
        this.storedAuth = storedAuth;
    };
    /**
    * Get stored auth
    * @return {any}
    */
    ApiService.prototype.getStoredAuth = function () {
        if (!this.storedAuth) {
            this.storedAuth = this.storeService.get(this.defaultAuthorizedKey);
        }
        return this.storedAuth;
    };
    /**
    * Remove stored auth
    * @return {void}
    */
    ApiService.prototype.removeStoredAuth = function () {
        this.storedAuth = null;
    };
    /**
    * Set http base url
    * @param {string} url
    * @return {void}
    */
    ApiService.prototype.setBaseUrl = function (url) {
        this.baseUrl = url;
    };
    /**
    * Call http
    * @param {string} url - Http url
    * @param {string} type - Http method
    * @param {any} params - Http params
    * @param {any} headers - Http headers
    * @return {Observable}
    */
    ApiService.prototype.call = function (url, type, params, headers) {
        var _this = this;
        if (type === void 0) { type = 'get'; }
        if (params === void 0) { params = {}; }
        if (headers === void 0) { headers = {}; }
        return new Observable(function (observer) {
            headers = _this.setHeaders(tslib_1.__assign({ 'Content-Type': 'application/json;charset=UTF-8' }, headers));
            var options = { headers: headers };
            url = _this.baseUrl ? _this.baseUrl + url : _this.baseUrl;
            type = type.toLowerCase();
            if (type === 'delete' || type === 'get') {
                var first = '?';
                for (var key in params) {
                    if (params.hasOwnProperty(key)) {
                        url += first + key + '=' + params[key];
                        first = '&';
                    }
                }
                params = options;
            }
            _this.http[type](url, params, options)
                .subscribe(function (response) { return observer.next(response); }, function (error) { return observer.error(_this.failCallback(error)); }, function () { return observer.complete(); });
        });
    };
    /**
    * Call http upload
    * @param {string} url - Http url
    * @param {Array} files - Upload Files
    * @param {any} headers - Http headers
    * @return {Observable}
    */
    ApiService.prototype.upload = function (url, files, headers) {
        var _this = this;
        if (headers === void 0) { headers = {}; }
        return new Observable(function (observer) {
            headers = _this.setHeaders(headers);
            var formData = new FormData();
            var options = { headers: headers };
            // In case files is file list or array files
            if (files instanceof FileList || files instanceof Array) {
                _.each(files, function (file) { return formData.append('files[]', file, file.name); });
            }
            else {
                formData.append('file', files);
            }
            url = _this.baseUrl ? _this.baseUrl + url : _this.baseUrl;
            _this.http.post(url, formData, options)
                .subscribe(function (response) { return observer.next(response); }, function (error) { return observer.error(_this.failCallback(error)); }, function () { return observer.complete(); });
        });
    };
    ApiService.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Optional }, { type: Inject, args: [DEFAULT_SERVER_API_URL,] }] },
        { type: String, decorators: [{ type: Optional }, { type: Inject, args: [DEFAULT_AUTHORIZED_KEY,] }] },
        { type: HttpClient },
        { type: StoreService },
        { type: Router }
    ]; };
    ApiService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__param(0, Optional()), tslib_1.__param(0, Inject(DEFAULT_SERVER_API_URL)),
        tslib_1.__param(1, Optional()), tslib_1.__param(1, Inject(DEFAULT_AUTHORIZED_KEY)),
        tslib_1.__metadata("design:paramtypes", [String, String, HttpClient,
            StoreService,
            Router])
    ], ApiService);
    return ApiService;
}());
export { ApiService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNvcmUvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvYXBpLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsVUFBVSxFQUFZLE1BQU0sTUFBTSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDL0QsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sQ0FBQyxNQUFNLFlBQVksQ0FBQztBQUUzQixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLHNCQUFzQixFQUFFLHNCQUFzQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHcEY7SUFLQzs7Ozs7OztNQU9FO0lBQ0Ysb0JBQ3dELG1CQUEyQixFQUMzQixvQkFBNEIsRUFDM0UsSUFBa0IsRUFDbEIsWUFBMEIsRUFDMUIsTUFBZ0I7UUFKK0Isd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFRO1FBQzNCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBUTtRQUMzRSxTQUFJLEdBQUosSUFBSSxDQUFjO1FBQ2xCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLFdBQU0sR0FBTixNQUFNLENBQVU7UUFoQmpCLFlBQU8sR0FBVyxJQUFJLENBQUMsbUJBQW1CLENBQUM7SUFpQmhELENBQUM7SUFFSjs7Ozs7TUFLRTtJQUNNLCtCQUFVLEdBQWxCLFVBQW9CLE9BQVk7UUFDL0IsSUFBTSxJQUFJLEdBQVEsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBRXZDLE9BQU8sR0FBRyxJQUFJLFdBQVcsQ0FBRSxPQUFPLENBQUUsQ0FBQztRQUVyQyxJQUFLLElBQUksRUFB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QkFBQSxNQUFNLENBQUUsc0JBQXNCLENBQUUsQ0FBQTtRQUM1QyxtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLE1BQU0sQ0FBRSxzQkFBc0IsQ0FBRSxDQUFBO2lFQUM3QixVQUFVO1lBQ0osWUFBWTtZQUNoQixNQUFNO09BbEJiLFVBQVUsQ0F1THRCO0lBQUQsaUJBQUM7Q0FBQSxBQXZMRCxJQXVMQztTQXZMWSxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0LCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgT2JzZXJ2ZXIgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCBfIGZyb20gJ3VuZGVyc2NvcmUnO1xuXG5pbXBvcnQgeyBTdG9yZVNlcnZpY2UgfSBmcm9tICcuL3N0b3JlLnNlcnZpY2UnO1xuaW1wb3J0IHsgREVGQVVMVF9TRVJWRVJfQVBJX1VSTCwgREVGQVVMVF9BVVRIT1JJWkVEX0tFWSB9IGZyb20gJy4uL2luamVjdGlvbi10b2tlbic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBcGlTZXJ2aWNlIHtcblxuXHRwcml2YXRlIGJhc2VVcmw6IHN0cmluZyA9IHRoaXMuZGVmYXVsdFNlcnZlckFwaVVSTDtcblx0cHJpdmF0ZSBzdG9yZWRBdXRoOiBhbnk7XG5cblx0LyoqXG5cdCogQGNvbnN0cnVjdG9yXG5cdCogQHBhcmFtIHtzdHJpbmd9IGRlZmF1bHRTZXJ2ZXJBcGlVUkxcblx0KiBAcGFyYW0ge3N0cmluZ30gZGVmYXVsdEF1dGhvcml6ZWRLZXlcblx0KiBAcGFyYW0ge0h0dHBDbGllbnR9IGh0dHBcblx0KiBAcGFyYW0ge1N0b3JlU2VydmljZX0gc3RvcmVTZXJ2aWNlXG5cdCogQHBhcmFtIHtSb3V0ZXJ9IHJvdXRlclxuXHQqL1xuXHRjb25zdHJ1Y3Rvcihcblx0XHRAT3B0aW9uYWwoKSBASW5qZWN0KCBERUZBVUxUX1NFUlZFUl9BUElfVVJMICkgcmVhZG9ubHkgZGVmYXVsdFNlcnZlckFwaVVSTDogc3RyaW5nLFxuXHRcdEBPcHRpb25hbCgpIEBJbmplY3QoIERFRkFVTFRfQVVUSE9SSVpFRF9LRVkgKSByZWFkb25seSBkZWZhdWx0QXV0aG9yaXplZEtleTogc3RyaW5nLFxuXHRcdHByaXZhdGUgaHR0cFx0XHQ6IEh0dHBDbGllbnQsXG5cdFx0cHJpdmF0ZSBzdG9yZVNlcnZpY2U6IFN0b3JlU2VydmljZSxcblx0XHRwcml2YXRlIHJvdXRlclx0XHQ6IFJvdXRlclxuXHQpIHt9XG5cblx0LyoqXG5cdCogU2V0IGh0dHAgaGVhZGVyc1xuXHQqIEBwcml2YXRlXG5cdCogQHBhcmFtIHthbnl9IGhlYWRlcnNcblx0KiBAcmV0dXJuIHtIdHRwSGVhZGVyc31cblx0Ki9cblx0cHJpdmF0ZSBzZXRIZWFkZXJzKCBoZWFkZXJzOiBhbnkgKTogSHR0cEhlYWRlcnMge1xuXHRcdGNvbnN0IGluZm86IGFueSA9IHRoaXMuZ2V0U3RvcmVkQXV0aCgpO1xuXG5cdFx0aGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyggaGVhZGVycyApO1xuXG5cdFx0aWYgKCBpbmZvICkge1xuXHRcdFx0aGVhZGVycyA9IGhlYWRlcnMuYXBwZW5kKCAneC1jaGFubmVsLWlkJywgaW5mby5jaGFubmVsX2lkICk7XG5cdFx0XHRoZWFkZXJzID0gaGVhZGVycy5hcHBlbmQoICd4LWNoYW5uZWwtdG9rZW4nLCBpbmZvLmNoYW5uZWxfdG9rZW4gKTtcblx0XHRcdGhlYWRlcnMgPSBoZWFkZXJzLmFwcGVuZCggJ3gtYWNjb3VudC1pZCcsIGluZm8uYWNjb3VudF9pZCApO1xuXHRcdFx0aGVhZGVycyA9IGhlYWRlcnMuYXBwZW5kKCAneC1hY2NvdW50LXRva2VuJywgaW5mby5hY2NvdW50X3Rva2VuICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGhlYWRlcnM7XG5cdH1cblxuXHQvKipcblx0KiBGYWlsIGNhbGxiYWNrXG5cdCogQHByaXZhdGVcblx0KiBAcGFyYW0ge2FueX0gZXJyb3Jcblx0KiBAcmV0dXJuIHthbnl9XG5cdCovXG5cdHByaXZhdGUgZmFpbENhbGxiYWNrKCBlcnJvcjogYW55ICk6IGFueSB7XG5cdFx0bGV0IGVycjogYW55ID0ge307XG5cblx0XHR0cnkge1xuXHRcdFx0ZXJyID0gZXJyb3IuanNvbigpO1xuXHRcdH0gY2F0Y2gge31cblxuXHRcdGlmICggZXJyb3Iuc3RhdHVzID09PSA0MDEgKSB7XG5cdFx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZSggWyAnbG9nb3V0JyBdICk7XG5cdFx0fSBlbHNlIGlmICggZXJyb3Iuc3RhdHVzID09PSA1MDBcblx0XHRcdHx8IGVycm9yLnN0YXR1cyA9PT0gNDA0XG5cdFx0XHR8fCBlcnJvci5zdGF0dXMgPT09IDQwM1xuXHRcdFx0fHwgZXJyb3Iuc3RhdHVzID09PSA0MDAgKSB7XG5cdFx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZSggWyBlcnJvci5zdGF0dXMgXSApO1xuXHRcdH1cblxuXHRcdHJldHVybiB7XG5cdFx0XHRzdGF0dXNcdDogZXJyb3Iuc3RhdHVzLFxuXHRcdFx0bWVzc2FnZVx0OiBlcnIgPyBlcnIgOiAnVW5rbm93biBFcnJvcicsXG5cdFx0fTtcblx0fVxuXG5cdC8qKlxuXHQqIFNldCBzdG9yZWQgYXV0aFxuXHQqIEBwYXJhbSB7YW55fSBzdG9yZWRBdXRoXG5cdCogQHJldHVybiB7dm9pZH1cblx0Ki9cblx0cHVibGljIHNldFN0b3JlZEF1dGgoIHN0b3JlZEF1dGg6IGFueSApIHtcblx0XHR0aGlzLnN0b3JlZEF1dGggPSBzdG9yZWRBdXRoO1xuXHR9XG5cblx0LyoqXG5cdCogR2V0IHN0b3JlZCBhdXRoXG5cdCogQHJldHVybiB7YW55fVxuXHQqL1xuXHRwdWJsaWMgZ2V0U3RvcmVkQXV0aCgpOiBhbnkge1xuXHRcdGlmICggIXRoaXMuc3RvcmVkQXV0aCApIHtcblx0XHRcdHRoaXMuc3RvcmVkQXV0aCA9IHRoaXMuc3RvcmVTZXJ2aWNlLmdldCggdGhpcy5kZWZhdWx0QXV0aG9yaXplZEtleSApO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLnN0b3JlZEF1dGg7XG5cdH1cblxuXHQvKipcblx0KiBSZW1vdmUgc3RvcmVkIGF1dGhcblx0KiBAcmV0dXJuIHt2b2lkfVxuXHQqL1xuXHRwdWJsaWMgcmVtb3ZlU3RvcmVkQXV0aCgpIHtcblx0XHR0aGlzLnN0b3JlZEF1dGggPSBudWxsO1xuXHR9XG5cblx0LyoqXG5cdCogU2V0IGh0dHAgYmFzZSB1cmxcblx0KiBAcGFyYW0ge3N0cmluZ30gdXJsXG5cdCogQHJldHVybiB7dm9pZH1cblx0Ki9cblx0cHVibGljIHNldEJhc2VVcmwoIHVybDogc3RyaW5nICkge1xuXHRcdHRoaXMuYmFzZVVybCA9IHVybDtcblx0fVxuXG5cdC8qKlxuXHQqIENhbGwgaHR0cFxuXHQqIEBwYXJhbSB7c3RyaW5nfSB1cmwgLSBIdHRwIHVybFxuXHQqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIC0gSHR0cCBtZXRob2Rcblx0KiBAcGFyYW0ge2FueX0gcGFyYW1zIC0gSHR0cCBwYXJhbXNcblx0KiBAcGFyYW0ge2FueX0gaGVhZGVycyAtIEh0dHAgaGVhZGVyc1xuXHQqIEByZXR1cm4ge09ic2VydmFibGV9XG5cdCovXG5cdHB1YmxpYyBjYWxsKCB1cmw6IHN0cmluZywgdHlwZTogc3RyaW5nID0gJ2dldCcsIHBhcmFtczogYW55ID0ge30sIGhlYWRlcnM6IGFueSA9IHt9ICk6IE9ic2VydmFibGU8YW55PiB7XG5cdFx0cmV0dXJuIG5ldyBPYnNlcnZhYmxlKCAoIG9ic2VydmVyOiBPYnNlcnZlcjxhbnk+ICkgPT4ge1xuXHRcdFx0aGVhZGVycyA9IHRoaXMuc2V0SGVhZGVycyh7XG5cdFx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PVVURi04Jyxcblx0XHRcdFx0Li4uaGVhZGVycyxcblx0XHRcdH0pO1xuXG5cdFx0XHRjb25zdCBvcHRpb25zOiBhbnkgPSB7IGhlYWRlcnMgfTtcblxuXHRcdFx0dXJsID0gdGhpcy5iYXNlVXJsID8gdGhpcy5iYXNlVXJsICsgdXJsIDogdGhpcy5iYXNlVXJsO1xuXG5cdFx0XHR0eXBlID0gdHlwZS50b0xvd2VyQ2FzZSgpO1xuXG5cdFx0XHRpZiAoIHR5cGUgPT09ICdkZWxldGUnIHx8IHR5cGUgPT09ICdnZXQnICkge1xuXHRcdFx0XHRsZXQgZmlyc3Q6IHN0cmluZyA9ICc/JztcblxuXHRcdFx0XHRmb3IgKCBjb25zdCBrZXkgaW4gcGFyYW1zICkge1xuXHRcdFx0XHRcdGlmICggcGFyYW1zLmhhc093blByb3BlcnR5KCBrZXkgKSApIHtcblx0XHRcdFx0XHRcdHVybCArPSBmaXJzdCArIGtleSArICc9JyArIHBhcmFtc1sga2V5IF07XG5cdFx0XHRcdFx0XHRmaXJzdCA9ICcmJztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRwYXJhbXMgPSBvcHRpb25zO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLmh0dHBbIHR5cGUgXSggdXJsLCBwYXJhbXMsIG9wdGlvbnMgKVxuXHRcdFx0LnN1YnNjcmliZShcblx0XHRcdFx0KCByZXNwb25zZTogYW55ICkgPT4gb2JzZXJ2ZXIubmV4dCggcmVzcG9uc2UgKSxcblx0XHRcdFx0KCBlcnJvcjogYW55ICkgPT4gb2JzZXJ2ZXIuZXJyb3IoIHRoaXMuZmFpbENhbGxiYWNrKCBlcnJvciApICksXG5cdFx0XHRcdCgpID0+IG9ic2VydmVyLmNvbXBsZXRlKClcblx0XHRcdCk7XG5cdFx0fSApO1xuXHR9XG5cblx0LyoqXG5cdCogQ2FsbCBodHRwIHVwbG9hZFxuXHQqIEBwYXJhbSB7c3RyaW5nfSB1cmwgLSBIdHRwIHVybFxuXHQqIEBwYXJhbSB7QXJyYXl9IGZpbGVzIC0gVXBsb2FkIEZpbGVzXG5cdCogQHBhcmFtIHthbnl9IGhlYWRlcnMgLSBIdHRwIGhlYWRlcnNcblx0KiBAcmV0dXJuIHtPYnNlcnZhYmxlfVxuXHQqL1xuXHRwdWJsaWMgdXBsb2FkKCB1cmw6IHN0cmluZywgZmlsZXM6IGFueSwgaGVhZGVyczogYW55ID0ge30gKTogT2JzZXJ2YWJsZTxhbnk+IHtcblx0XHRyZXR1cm4gbmV3IE9ic2VydmFibGUoICggb2JzZXJ2ZXI6IE9ic2VydmVyPGFueT4gKSA9PiB7XG5cdFx0XHRoZWFkZXJzID0gdGhpcy5zZXRIZWFkZXJzKCBoZWFkZXJzICk7XG5cblx0XHRcdGNvbnN0IGZvcm1EYXRhOiBGb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuXHRcdFx0Y29uc3Qgb3B0aW9uczogYW55ID0geyBoZWFkZXJzIH07XG5cblx0XHRcdC8vIEluIGNhc2UgZmlsZXMgaXMgZmlsZSBsaXN0IG9yIGFycmF5IGZpbGVzXG5cdFx0XHRpZiAoIGZpbGVzIGluc3RhbmNlb2YgRmlsZUxpc3QgfHwgZmlsZXMgaW5zdGFuY2VvZiBBcnJheSApIHtcblx0XHRcdFx0Xy5lYWNoKCBmaWxlcywgKCBmaWxlOiBGaWxlICkgPT4gZm9ybURhdGEuYXBwZW5kKCAnZmlsZXNbXScsIGZpbGUsIGZpbGUubmFtZSApICk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmb3JtRGF0YS5hcHBlbmQoICdmaWxlJywgZmlsZXMgKTtcblx0XHRcdH1cblxuXHRcdFx0dXJsID0gdGhpcy5iYXNlVXJsID8gdGhpcy5iYXNlVXJsICsgdXJsIDogdGhpcy5iYXNlVXJsO1xuXG5cdFx0XHR0aGlzLmh0dHAucG9zdCggdXJsLCBmb3JtRGF0YSwgb3B0aW9ucyApXG5cdFx0XHQuc3Vic2NyaWJlKFxuXHRcdFx0XHQoIHJlc3BvbnNlOiBhbnkgKSA9PiBvYnNlcnZlci5uZXh0KCByZXNwb25zZSApLFxuXHRcdFx0XHQoIGVycm9yOiBhbnkgKSA9PiBvYnNlcnZlci5lcnJvciggdGhpcy5mYWlsQ2FsbGJhY2soIGVycm9yICkgKSxcblx0XHRcdFx0KCkgPT4gb2JzZXJ2ZXIuY29tcGxldGUoKVxuXHRcdFx0KTtcblx0XHR9ICk7XG5cdH1cblxufVxuIl19