import * as tslib_1 from "tslib";
import { Injectable, Inject, Optional } from '@angular/core';
import { SwPush, SwUpdate } from '@angular/service-worker';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { DEFAULT_FCM_PUBLIC_KEY, DEFAULT_APP_URL } from '../injection-token';
var ServiceWorkerService = /** @class */ (function () {
    /**
    * @constructor
    * @param {string} defaultFCMPublicKey
    * @param {string} defaultAppURL
    * @param {SwPush} swPush
    * @param {SwUpdate} swUpdate
    * @param {ApiService} apiService
    */
    function ServiceWorkerService(defaultFCMPublicKey, defaultAppURL, swPush, swUpdate, apiService) {
        this.defaultFCMPublicKey = defaultFCMPublicKey;
        this.defaultAppURL = defaultAppURL;
        this.swPush = swPush;
        this.swUpdate = swUpdate;
        this.apiService = apiService;
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
            return _this.swPush.messages
                .subscribe(function (payload) { return observer.next(payload); }, function (error) { return observer.error(error); });
        });
    };
    ServiceWorkerService.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Optional }, { type: Inject, args: [DEFAULT_FCM_PUBLIC_KEY,] }] },
        { type: String, decorators: [{ type: Optional }, { type: Inject, args: [DEFAULT_APP_URL,] }] },
        { type: SwPush },
        { type: SwUpdate },
        { type: ApiService }
    ]; };
    ServiceWorkerService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__param(0, Optional()), tslib_1.__param(0, Inject(DEFAULT_FCM_PUBLIC_KEY)),
        tslib_1.__param(1, Optional()), tslib_1.__param(1, Inject(DEFAULT_APP_URL)),
        tslib_1.__metadata("design:paramtypes", [String, String, SwPush,
            SwUpdate,
            ApiService])
    ], ServiceWorkerService);
    return ServiceWorkerService;
}());
export { ServiceWorkerService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS13b3JrZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9zZXJ2aWNlLXdvcmtlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBWSxNQUFNLE1BQU0sQ0FBQztBQUc1QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUs3RTtJQUVDOzs7Ozs7O01BT0U7SUFDRiw4QkFDd0QsbUJBQTJCLEVBQ2xDLGFBQXFCLEVBQzdELE1BQWdCLEVBQ2hCLFFBQW1CLEVBQ25CLFVBQXVCO1FBSndCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBUTtRQUNsQyxrQkFBYSxHQUFiLGFBQWEsQ0FBUTtRQUM3RCxXQUFNLEdBQU4sTUFBTSxDQUFVO1FBQ2hCLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsZUFBVSxHQUFWLFVBQVUsQ0FBYTtJQUM3QixDQUFDO0lBRUo7OztNQUdFO0lBQ0sscURBQXNCLEdBQTdCO1FBQUEsaUJBSUM7UUFIQSxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUU7WUFDbEMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxJQUFJLENBQUUsY0FBTSxPQUFBLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLEVBQTFCLENBQTBCLENBQUUsQ0FBQztRQUN6RSxDQUFDLENBQUUsQ0FBQztJQUNMLENBQUM7SUFFRDs7O01BR0U7SUFDSyxxREFBc0IsR0FBN0I7UUFBQSxpQkFnQkM7UUFmQSxJQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLElBQUksUUFBUSxJQUFJLE1BQU07WUFBRyxPQUFPO1FBRTNELHVCQUF1QjtRQUN2QixJQUFJLENBQUMsTUFBTTthQUNWLG1CQUFtQixDQUFFLEVBQUUsZUFBZSxFQUFFLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFFO2FBQ3BFLElBQUksQ0FBRSxVQUFFLFlBQWlCO1lBQ3pCLGtDQUFrQztZQUNsQyxLQUFJLENBQUMsVUFBVTtpQkFDZCxJQUFJLENBQUUsbUJBQW1CLEVBQUUsTUFBTSxFQUFFLEVBQUUsWUFBWSxjQUFBLEVBQUUsQ0FBRTtpQkFDckQsU0FBUyxFQUFFLENBQUM7UUFDZCxDQUFDLENBQUUsQ0FBQztRQUVKLGtDQUFrQztRQUNsQyxJQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQjthQUM3QixTQUFTLENBQUUsY0FBTSxPQUFBLE1BQU0sQ0FBQyxJQUFJLENBQUUsS0FBSSxDQUFDLGFBQWEsQ0FBRSxFQUFqQyxDQUFpQyxDQUFFLENBQUM7SUFDdkQsQ0FBQztJQUVEOzs7TUFHRTtJQUNLLHNEQUF1QixHQUE5QjtRQUNDLElBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsSUFBSSxRQUFRLElBQUksTUFBTTtZQUFHLE9BQU87UUFFM0QsZ0NBQWdDO1FBQ2hDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWTthQUN2QixJQUFJLENBQUUsSUFBSSxDQUFFLENBQUMsQ0FBRSxDQUFFO2FBQ2pCLE9BQU8sQ0FBRSxVQUFFLFlBQWlCO1lBQzVCLFlBQVksSUFBSSxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDNUMsQ0FBQyxDQUFFLENBQUM7SUFDTCxDQUFDO0lBRUQ7OztNQUdFO0lBQ0sscURBQXNCLEdBQTdCO1FBQUEsaUJBYUM7UUFaQSxPQUFPLElBQUksVUFBVSxDQUFFLFVBQUUsUUFBdUI7WUFDL0MsSUFBSyxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxJQUFJLFFBQVEsSUFBSSxNQUFNLEVBQUc7Z0JBQ25ELFFBQVEsQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFFLENBQUM7Z0JBQ3RCLE9BQU87YUFDUDtZQUVELE9BQU8sS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRO2lCQUMxQixTQUFTLENBQ1QsVUFBRSxPQUFZLElBQU0sT0FBQSxRQUFRLENBQUMsSUFBSSxDQUFFLE9BQU8sQ0FBRSxFQUF4QixDQUF3QixFQUM1QyxVQUFFLEtBQVUsSUFBTSxPQUFBLFFBQVEsQ0FBQyxLQUFLLENBQUUsS0FBSyxDQUFFLEVBQXZCLENBQXVCLENBQ3pDLENBQUM7UUFDSCxDQUFDLENBQUUsQ0FBQztJQUNMLENBQUM7OzZDQXZFQyxRQUFRLFlBQUksTUFBTSxTQUFFLHNCQUFzQjs2Q0FDMUMsUUFBUSxZQUFJLE1BQU0sU0FBRSxlQUFlO2dCQUNsQixNQUFNO2dCQUNMLFFBQVE7Z0JBQ04sVUFBVTs7SUFmcEIsb0JBQW9CO1FBRGhDLFVBQVUsRUFBRTtRQVlWLG1CQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsbUJBQUEsTUFBTSxDQUFFLHNCQUFzQixDQUFFLENBQUE7UUFDNUMsbUJBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxtQkFBQSxNQUFNLENBQUUsZUFBZSxDQUFFLENBQUE7aUVBQ3BCLE1BQU07WUFDTCxRQUFRO1lBQ04sVUFBVTtPQWZwQixvQkFBb0IsQ0FvRmhDO0lBQUQsMkJBQUM7Q0FBQSxBQXBGRCxJQW9GQztTQXBGWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTd1B1c2gsIFN3VXBkYXRlIH0gZnJvbSAnQGFuZ3VsYXIvc2VydmljZS13b3JrZXInO1xuaW1wb3J0IHsgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE9ic2VydmFibGUsIE9ic2VydmVyIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgXyBmcm9tICd1bmRlcnNjb3JlJztcblxuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4vYXBpLnNlcnZpY2UnO1xuaW1wb3J0IHsgREVGQVVMVF9GQ01fUFVCTElDX0tFWSwgREVGQVVMVF9BUFBfVVJMIH0gZnJvbSAnLi4vaW5qZWN0aW9uLXRva2VuJztcblxuZGVjbGFyZSB2YXIgd2luZG93OiBXaW5kb3c7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTZXJ2aWNlV29ya2VyU2VydmljZSB7XG5cblx0LyoqXG5cdCogQGNvbnN0cnVjdG9yXG5cdCogQHBhcmFtIHtzdHJpbmd9IGRlZmF1bHRGQ01QdWJsaWNLZXlcblx0KiBAcGFyYW0ge3N0cmluZ30gZGVmYXVsdEFwcFVSTFxuXHQqIEBwYXJhbSB7U3dQdXNofSBzd1B1c2hcblx0KiBAcGFyYW0ge1N3VXBkYXRlfSBzd1VwZGF0ZVxuXHQqIEBwYXJhbSB7QXBpU2VydmljZX0gYXBpU2VydmljZVxuXHQqL1xuXHRjb25zdHJ1Y3Rvcihcblx0XHRAT3B0aW9uYWwoKSBASW5qZWN0KCBERUZBVUxUX0ZDTV9QVUJMSUNfS0VZICkgcmVhZG9ubHkgZGVmYXVsdEZDTVB1YmxpY0tleTogc3RyaW5nLFxuXHRcdEBPcHRpb25hbCgpIEBJbmplY3QoIERFRkFVTFRfQVBQX1VSTCApIHJlYWRvbmx5IGRlZmF1bHRBcHBVUkw6IHN0cmluZyxcblx0XHRwcml2YXRlIHN3UHVzaFx0XHQ6IFN3UHVzaCxcblx0XHRwcml2YXRlIHN3VXBkYXRlXHQ6IFN3VXBkYXRlLFxuXHRcdHByaXZhdGUgYXBpU2VydmljZVx0OiBBcGlTZXJ2aWNlXG5cdCkge31cblxuXHQvKipcblx0KiBVcGRhdGUgYXZhaWxhYmxlIHZlcnNpb25cblx0KiBAcmV0dXJuIHt2b2lkfVxuXHQqL1xuXHRwdWJsaWMgdXBkYXRlQXZhaWxhYmxlVmVyc2lvbigpIHtcblx0XHR0aGlzLnN3VXBkYXRlLmF2YWlsYWJsZS5zdWJzY3JpYmUoICgpID0+IHtcblx0XHRcdHRoaXMuc3dVcGRhdGUuYWN0aXZhdGVVcGRhdGUoKS50aGVuKCAoKSA9PiBkb2N1bWVudC5sb2NhdGlvbi5yZWxvYWQoKSApO1xuXHRcdH0gKTtcblx0fVxuXG5cdC8qKlxuXHQqIEVuYWJsZSBwdXNoIG5vdGlmaWNhdGlvblxuXHQqIEByZXR1cm4ge3ZvaWR9XG5cdCovXG5cdHB1YmxpYyBlbmFibGVQdXNoTm90aWZpY2F0aW9uKCkge1xuXHRcdGlmICggIXRoaXMuc3dQdXNoLmlzRW5hYmxlZCB8fCAnc2FmYXJpJyBpbiB3aW5kb3cgKSByZXR1cm47XG5cblx0XHQvLyBSZXF1ZXN0IHN1YnNjcmlwdGlvblxuXHRcdHRoaXMuc3dQdXNoXG5cdFx0LnJlcXVlc3RTdWJzY3JpcHRpb24oIHsgc2VydmVyUHVibGljS2V5OiB0aGlzLmRlZmF1bHRGQ01QdWJsaWNLZXkgfSApXG5cdFx0LnRoZW4oICggc3Vic2NyaXB0aW9uOiBhbnkgKSA9PiB7XG5cdFx0XHQvLyBTZW5kIHN1YnNjcmlwdGlvbiB0byB0aGUgc2VydmVyXG5cdFx0XHR0aGlzLmFwaVNlcnZpY2Vcblx0XHRcdC5jYWxsKCAnL2ZjbS9zdWJzY3JpcHRpb24nLCAnUE9TVCcsIHsgc3Vic2NyaXB0aW9uIH0gKVxuXHRcdFx0LnN1YnNjcmliZSgpO1xuXHRcdH0gKTtcblxuXHRcdC8vIEhhbmRsZSBjbGljayBub3RpZmljYXRpb24gZXZlbnRcblx0XHR0aGlzLnN3UHVzaC5ub3RpZmljYXRpb25DbGlja3Ncblx0XHQuc3Vic2NyaWJlKCAoKSA9PiB3aW5kb3cub3BlbiggdGhpcy5kZWZhdWx0QXBwVVJMICkgKTtcblx0fVxuXG5cdC8qKlxuXHQqIERpc2FibGUgcHVzaCBub3RpZmljYXRpb25cblx0KiBAcmV0dXJuIHt2b2lkfVxuXHQqL1xuXHRwdWJsaWMgZGlzYWJsZVB1c2hOb3RpZmljYXRpb24oKSB7XG5cdFx0aWYgKCAhdGhpcy5zd1B1c2guaXNFbmFibGVkIHx8ICdzYWZhcmknIGluIHdpbmRvdyApIHJldHVybjtcblxuXHRcdC8vIFVuc3Vic2NyaWJlIGFsbCBzdWJzY3JpcHRpb25zXG5cdFx0dGhpcy5zd1B1c2guc3Vic2NyaXB0aW9uXG5cdFx0LnBpcGUoIHRha2UoIDEgKSApXG5cdFx0LmZvckVhY2goICggc3Vic2NyaXB0aW9uOiBhbnkgKSA9PiB7XG5cdFx0XHRzdWJzY3JpcHRpb24gJiYgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG5cdFx0fSApO1xuXHR9XG5cblx0LyoqXG5cdCogTGlzdGVuIHB1c2ggbm90aWZpY2F0aW9uXG5cdCogQHJldHVybiB7T2JzZXJ2YWJsZX1cblx0Ki9cblx0cHVibGljIGxpc3RlblB1c2hOb3RpZmljYXRpb24oKTogT2JzZXJ2YWJsZTxhbnk+IHtcblx0XHRyZXR1cm4gbmV3IE9ic2VydmFibGUoICggb2JzZXJ2ZXI6IE9ic2VydmVyPGFueT4gKSA9PiB7XG5cdFx0XHRpZiAoICF0aGlzLnN3UHVzaC5pc0VuYWJsZWQgfHwgJ3NhZmFyaScgaW4gd2luZG93ICkge1xuXHRcdFx0XHRvYnNlcnZlci5uZXh0KCBudWxsICk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRoaXMuc3dQdXNoLm1lc3NhZ2VzXG5cdFx0XHQuc3Vic2NyaWJlKFxuXHRcdFx0XHQoIHBheWxvYWQ6IGFueSApID0+IG9ic2VydmVyLm5leHQoIHBheWxvYWQgKSxcblx0XHRcdFx0KCBlcnJvcjogYW55ICkgPT4gb2JzZXJ2ZXIuZXJyb3IoIGVycm9yIClcblx0XHRcdCk7XG5cdFx0fSApO1xuXHR9XG5cbn1cbiJdfQ==