import * as tslib_1 from "tslib";
import { Injectable, Inject, Optional } from '@angular/core';
import { SwPush, SwUpdate } from '@angular/service-worker';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { StoreService } from './store.service';
import { DEFAULT_FCM_PUBLIC_KEY, DEFAULT_AUTHORIZED_KEY, DEFAULT_APP_URL } from '../injection-token';
var ServiceWorkerService = /** @class */ (function () {
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
    function ServiceWorkerService(defaultFCMPublicKey, defaultAuthorizedKey, defaultAppURL, swPush, swUpdate, apiService, storeService) {
        this.defaultFCMPublicKey = defaultFCMPublicKey;
        this.defaultAuthorizedKey = defaultAuthorizedKey;
        this.defaultAppURL = defaultAppURL;
        this.swPush = swPush;
        this.swUpdate = swUpdate;
        this.apiService = apiService;
        this.storeService = storeService;
    }
    /**
    * Update available version
    * @return {void}
    */
    ServiceWorkerService.prototype.updateAvailableVersion = function () {
        var _this = this;
        this.swUpdate.available.subscribe(function () {
            _this.swUpdate.activateUpdate().then(function () { return document.location.reload(); });
        });
    };
    /**
    * Enable push notification
    * @return {void}
    */
    ServiceWorkerService.prototype.enablePushNotification = function () {
        var _this = this;
        if (!this.swPush.isEnabled || 'safari' in window)
            return;
        // Request subscription
        this.swPush
            .requestSubscription({ serverPublicKey: this.defaultFCMPublicKey })
            .then(function (subscription) {
            // Send subscription to the server
            _this.apiService
                .call('/fcm/subscription', 'POST', { subscription: subscription })
                .subscribe();
        });
        // Handle click notification event
        this.swPush.notificationClicks
            .subscribe(function () { return window.open(_this.defaultAppURL); });
    };
    /**
    * Disable push notification
    * @return {void}
    */
    ServiceWorkerService.prototype.disablePushNotification = function () {
        if (!this.swPush.isEnabled || 'safari' in window)
            return;
        // Unsubscribe all subscriptions
        this.swPush.subscription
            .pipe(take(1))
            .forEach(function (subscription) {
            subscription && subscription.unsubscribe();
        });
    };
    /**
    * Listen push notification
    * @return {Observable}
    */
    ServiceWorkerService.prototype.listenPushNotification = function () {
        var _this = this;
        return new Observable(function (observer) {
            if (!_this.swPush.isEnabled || 'safari' in window) {
                observer.next(null);
                return;
            }
            _this.swPush.messages
                .subscribe(function (payload) {
                var stored = _this.storeService.get(_this.defaultAuthorizedKey);
                // In case user unauthorized
                if (!stored) {
                    observer.next(null);
                    return;
                }
                observer.next(payload);
            }, function (error) { return observer.error(error); });
        });
    };
    ServiceWorkerService.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Optional }, { type: Inject, args: [DEFAULT_FCM_PUBLIC_KEY,] }] },
        { type: String, decorators: [{ type: Optional }, { type: Inject, args: [DEFAULT_AUTHORIZED_KEY,] }] },
        { type: String, decorators: [{ type: Optional }, { type: Inject, args: [DEFAULT_APP_URL,] }] },
        { type: SwPush },
        { type: SwUpdate },
        { type: ApiService },
        { type: StoreService }
    ]; };
    ServiceWorkerService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__param(0, Optional()), tslib_1.__param(0, Inject(DEFAULT_FCM_PUBLIC_KEY)),
        tslib_1.__param(1, Optional()), tslib_1.__param(1, Inject(DEFAULT_AUTHORIZED_KEY)),
        tslib_1.__param(2, Optional()), tslib_1.__param(2, Inject(DEFAULT_APP_URL)),
        tslib_1.__metadata("design:paramtypes", [String, String, String, SwPush,
            SwUpdate,
            ApiService,
            StoreService])
    ], ServiceWorkerService);
    return ServiceWorkerService;
}());
export { ServiceWorkerService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS13b3JrZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9zZXJ2aWNlLXdvcmtlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBWSxNQUFNLE1BQU0sQ0FBQztBQUc1QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsc0JBQXNCLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFLckc7SUFFQzs7Ozs7Ozs7O01BU0U7SUFDRiw4QkFDd0QsbUJBQTJCLEVBQzNCLG9CQUE0QixFQUNuQyxhQUFxQixFQUM3RCxNQUFnQixFQUNoQixRQUFtQixFQUNuQixVQUF1QixFQUN2QixZQUEwQjtRQU5xQix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQVE7UUFDM0IseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFRO1FBQ25DLGtCQUFhLEdBQWIsYUFBYSxDQUFRO1FBQzdELFdBQU0sR0FBTixNQUFNLENBQVU7UUFDaEIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixlQUFVLEdBQVYsVUFBVSxDQUFhO1FBQ3ZCLGlCQUFZLEdBQVosWUFBWSxDQUFjO0lBQ2hDLENBQUM7SUFFSjs7O01BR0U7SUFDSyxxREFBc0IsR0FBN0I7UUFBQSxpQkFJQztRQUhBLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxD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NUMsbUJBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxtQkFBQSxNQUFNLENBQUUsc0JBQXNCLENBQUUsQ0FBQTtRQUM1QyxtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLE1BQU0sQ0FBRSxlQUFlLENBQUUsQ0FBQTt5RUFDcEIsTUFBTTtZQUNMLFFBQVE7WUFDTixVQUFVO1lBQ1QsWUFBWTtPQW5CdkIsb0JBQW9CLENBa0doQztJQUFELDJCQUFDO0NBQUEsQUFsR0QsSUFrR0M7U0FsR1ksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0LCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3dQdXNoLCBTd1VwZGF0ZSB9IGZyb20gJ0Bhbmd1bGFyL3NlcnZpY2Utd29ya2VyJztcbmltcG9ydCB7IHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBPYnNlcnZlciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IF8gZnJvbSAndW5kZXJzY29yZSc7XG5cbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7IFN0b3JlU2VydmljZSB9IGZyb20gJy4vc3RvcmUuc2VydmljZSc7XG5pbXBvcnQgeyBERUZBVUxUX0ZDTV9QVUJMSUNfS0VZLCBERUZBVUxUX0FVVEhPUklaRURfS0VZLCBERUZBVUxUX0FQUF9VUkwgfSBmcm9tICcuLi9pbmplY3Rpb24tdG9rZW4nO1xuXG5kZWNsYXJlIHZhciB3aW5kb3c6IFdpbmRvdztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNlcnZpY2VXb3JrZXJTZXJ2aWNlIHtcblxuXHQvKipcblx0KiBAY29uc3RydWN0b3Jcblx0KiBAcGFyYW0ge3N0cmluZ30gZGVmYXVsdEZDTVB1YmxpY0tleVxuXHQqIEBwYXJhbSB7c3RyaW5nfSBkZWZhdWx0QXV0aG9yaXplZEtleVxuXHQqIEBwYXJhbSB7c3RyaW5nfSBkZWZhdWx0QXBwVVJMXG5cdCogQHBhcmFtIHtTd1B1c2h9IHN3UHVzaFxuXHQqIEBwYXJhbSB7U3dVcGRhdGV9IHN3VXBkYXRlXG5cdCogQHBhcmFtIHtBcGlTZXJ2aWNlfSBhcGlTZXJ2aWNlXG5cdCogQHBhcmFtIHtTdG9yZVNlcnZpY2V9IHN0b3JlU2VydmljZVxuXHQqL1xuXHRjb25zdHJ1Y3Rvcihcblx0XHRAT3B0aW9uYWwoKSBASW5qZWN0KCBERUZBVUxUX0ZDTV9QVUJMSUNfS0VZICkgcmVhZG9ubHkgZGVmYXVsdEZDTVB1YmxpY0tleTogc3RyaW5nLFxuXHRcdEBPcHRpb25hbCgpIEBJbmplY3QoIERFRkFVTFRfQVVUSE9SSVpFRF9LRVkgKSByZWFkb25seSBkZWZhdWx0QXV0aG9yaXplZEtleTogc3RyaW5nLFxuXHRcdEBPcHRpb25hbCgpIEBJbmplY3QoIERFRkFVTFRfQVBQX1VSTCApIHJlYWRvbmx5IGRlZmF1bHRBcHBVUkw6IHN0cmluZyxcblx0XHRwcml2YXRlIHN3UHVzaFx0XHQ6IFN3UHVzaCxcblx0XHRwcml2YXRlIHN3VXBkYXRlXHQ6IFN3VXBkYXRlLFxuXHRcdHByaXZhdGUgYXBpU2VydmljZVx0OiBBcGlTZXJ2aWNlLFxuXHRcdHByaXZhdGUgc3RvcmVTZXJ2aWNlOiBTdG9yZVNlcnZpY2Vcblx0KSB7fVxuXG5cdC8qKlxuXHQqIFVwZGF0ZSBhdmFpbGFibGUgdmVyc2lvblxuXHQqIEByZXR1cm4ge3ZvaWR9XG5cdCovXG5cdHB1YmxpYyB1cGRhdGVBdmFpbGFibGVWZXJzaW9uKCkge1xuXHRcdHRoaXMuc3dVcGRhdGUuYXZhaWxhYmxlLnN1YnNjcmliZSggKCkgPT4ge1xuXHRcdFx0dGhpcy5zd1VwZGF0ZS5hY3RpdmF0ZVVwZGF0ZSgpLnRoZW4oICgpID0+IGRvY3VtZW50LmxvY2F0aW9uLnJlbG9hZCgpICk7XG5cdFx0fSApO1xuXHR9XG5cblx0LyoqXG5cdCogRW5hYmxlIHB1c2ggbm90aWZpY2F0aW9uXG5cdCogQHJldHVybiB7dm9pZH1cblx0Ki9cblx0cHVibGljIGVuYWJsZVB1c2hOb3RpZmljYXRpb24oKSB7XG5cdFx0aWYgKCAhdGhpcy5zd1B1c2guaXNFbmFibGVkIHx8ICdzYWZhcmknIGluIHdpbmRvdyApIHJldHVybjtcblxuXHRcdC8vIFJlcXVlc3Qgc3Vic2NyaXB0aW9uXG5cdFx0dGhpcy5zd1B1c2hcblx0XHQucmVxdWVzdFN1YnNjcmlwdGlvbiggeyBzZXJ2ZXJQdWJsaWNLZXk6IHRoaXMuZGVmYXVsdEZDTVB1YmxpY0tleSB9IClcblx0XHQudGhlbiggKCBzdWJzY3JpcHRpb246IGFueSApID0+IHtcblx0XHRcdC8vIFNlbmQgc3Vic2NyaXB0aW9uIHRvIHRoZSBzZXJ2ZXJcblx0XHRcdHRoaXMuYXBpU2VydmljZVxuXHRcdFx0LmNhbGwoICcvZmNtL3N1YnNjcmlwdGlvbicsICdQT1NUJywgeyBzdWJzY3JpcHRpb24gfSApXG5cdFx0XHQuc3Vic2NyaWJlKCk7XG5cdFx0fSApO1xuXG5cdFx0Ly8gSGFuZGxlIGNsaWNrIG5vdGlmaWNhdGlvbiBldmVudFxuXHRcdHRoaXMuc3dQdXNoLm5vdGlmaWNhdGlvbkNsaWNrc1xuXHRcdC5zdWJzY3JpYmUoICgpID0+IHdpbmRvdy5vcGVuKCB0aGlzLmRlZmF1bHRBcHBVUkwgKSApO1xuXHR9XG5cblx0LyoqXG5cdCogRGlzYWJsZSBwdXNoIG5vdGlmaWNhdGlvblxuXHQqIEByZXR1cm4ge3ZvaWR9XG5cdCovXG5cdHB1YmxpYyBkaXNhYmxlUHVzaE5vdGlmaWNhdGlvbigpIHtcblx0XHRpZiAoICF0aGlzLnN3UHVzaC5pc0VuYWJsZWQgfHwgJ3NhZmFyaScgaW4gd2luZG93ICkgcmV0dXJuO1xuXG5cdFx0Ly8gVW5zdWJzY3JpYmUgYWxsIHN1YnNjcmlwdGlvbnNcblx0XHR0aGlzLnN3UHVzaC5zdWJzY3JpcHRpb25cblx0XHQucGlwZSggdGFrZSggMSApIClcblx0XHQuZm9yRWFjaCggKCBzdWJzY3JpcHRpb246IGFueSApID0+IHtcblx0XHRcdHN1YnNjcmlwdGlvbiAmJiBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcblx0XHR9ICk7XG5cdH1cblxuXHQvKipcblx0KiBMaXN0ZW4gcHVzaCBub3RpZmljYXRpb25cblx0KiBAcmV0dXJuIHtPYnNlcnZhYmxlfVxuXHQqL1xuXHRwdWJsaWMgbGlzdGVuUHVzaE5vdGlmaWNhdGlvbigpOiBPYnNlcnZhYmxlPGFueT4ge1xuXHRcdHJldHVybiBuZXcgT2JzZXJ2YWJsZSggKCBvYnNlcnZlcjogT2JzZXJ2ZXI8YW55PiApID0+IHtcblx0XHRcdGlmICggIXRoaXMuc3dQdXNoLmlzRW5hYmxlZCB8fCAnc2FmYXJpJyBpbiB3aW5kb3cgKSB7XG5cdFx0XHRcdG9ic2VydmVyLm5leHQoIG51bGwgKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnN3UHVzaC5tZXNzYWdlc1xuXHRcdFx0LnN1YnNjcmliZShcblx0XHRcdFx0KCBwYXlsb2FkOiBhbnkgKSA9PiB7XG5cdFx0XHRcdFx0Y29uc3Qgc3RvcmVkOiBhbnkgPSB0aGlzLnN0b3JlU2VydmljZS5nZXQoIHRoaXMuZGVmYXVsdEF1dGhvcml6ZWRLZXkgKTtcblxuXHRcdFx0XHRcdC8vIEluIGNhc2UgdXNlciB1bmF1dGhvcml6ZWRcblx0XHRcdFx0XHRpZiAoICFzdG9yZWQgKSB7XG5cdFx0XHRcdFx0XHRvYnNlcnZlci5uZXh0KCBudWxsICk7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0b2JzZXJ2ZXIubmV4dCggcGF5bG9hZCApO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHQoIGVycm9yOiBhbnkgKSA9PiBvYnNlcnZlci5lcnJvciggZXJyb3IgKVxuXHRcdFx0KTtcblx0XHR9ICk7XG5cdH1cblxufVxuIl19