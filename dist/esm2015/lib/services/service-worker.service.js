import * as tslib_1 from "tslib";
import { Injectable, Inject, Optional } from '@angular/core';
import { SwPush, SwUpdate } from '@angular/service-worker';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { StoreService } from './store.service';
import { DEFAULT_FCM_PUBLIC_KEY, DEFAULT_AUTHORIZED_KEY, DEFAULT_APP_URL } from '../injection-token';
let ServiceWorkerService = class ServiceWorkerService {
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
    constructor(defaultFCMPublicKey, defaultAuthorizedKey, defaultAppURL, swPush, swUpdate, apiService, storeService) {
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
    updateAvailableVersion() {
        this.swUpdate.available.subscribe(() => {
            this.swUpdate.activateUpdate().then(() => document.location.reload());
        });
    }
    /**
    * Enable push notification
    * @return {void}
    */
    enablePushNotification() {
        if (!this.swPush.isEnabled || 'safari' in window)
            return;
        // Request subscription
        this.swPush
            .requestSubscription({ serverPublicKey: this.defaultFCMPublicKey })
            .then((subscription) => {
            // Send subscription to the server
            this.apiService
                .call('/fcm/subscription', 'POST', { subscription })
                .subscribe();
        });
        // Handle click notification event
        this.swPush.notificationClicks
            .subscribe(() => window.open(this.defaultAppURL));
    }
    /**
    * Disable push notification
    * @return {void}
    */
    disablePushNotification() {
        if (!this.swPush.isEnabled || 'safari' in window)
            return;
        // Unsubscribe all subscriptions
        this.swPush.subscription
            .pipe(take(1))
            .forEach((subscription) => {
            subscription && subscription.unsubscribe();
        });
    }
    /**
    * Listen push notification
    * @return {Observable}
    */
    listenPushNotification() {
        return new Observable((observer) => {
            if (!this.swPush.isEnabled || 'safari' in window) {
                observer.next(null);
                return;
            }
            this.swPush.messages
                .subscribe((payload) => {
                const stored = this.storeService.get(this.defaultAuthorizedKey);
                // In case user unauthorized
                if (!stored) {
                    observer.next(null);
                    return;
                }
                observer.next(payload);
            }, (error) => observer.error(error));
        });
    }
};
ServiceWorkerService.ctorParameters = () => [
    { type: String, decorators: [{ type: Optional }, { type: Inject, args: [DEFAULT_FCM_PUBLIC_KEY,] }] },
    { type: String, decorators: [{ type: Optional }, { type: Inject, args: [DEFAULT_AUTHORIZED_KEY,] }] },
    { type: String, decorators: [{ type: Optional }, { type: Inject, args: [DEFAULT_APP_URL,] }] },
    { type: SwPush },
    { type: SwUpdate },
    { type: ApiService },
    { type: StoreService }
];
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
export { ServiceWorkerService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS13b3JrZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9zZXJ2aWNlLXdvcmtlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBWSxNQUFNLE1BQU0sQ0FBQztBQUc1QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsc0JBQXNCLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFLckcsSUFBYSxvQkFBb0IsR0FBakMsTUFBYSxvQkFBb0I7SUFFaEM7Ozs7Ozs7OztNQVNFO0lBQ0YsWUFDd0QsbUJBQTJCLEVBQzNCLG9CQUE0QixFQUNuQyxhQUFxQixFQUM3RCxNQUFnQixFQUNoQixRQUFtQixFQUNuQixVQUF1QixFQUN2QixZQUEwQjtRQU5xQix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQVE7UUFDM0IseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFRO1FBQ25DLGtCQUFhLEdBQWIsYUFBYSxDQUFRO1FBQzdELFdBQU0sR0FBTixNQUFNLENBQVU7UUFDaEIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixlQUFVLEdBQVYsVUFBVSxDQUFhO1FBQ3ZCLGlCQUFZLEdBQVosWUFBWSxDQUFjO0lBQ2hDLENBQUM7SUFFSjs7O01BR0U7SUFDSyxzQkFBc0I7UUFDNUIsSUFBSSxDQUFDLFFB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QTtJQUM1QyxtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLE1BQU0sQ0FBRSxzQkFBc0IsQ0FBRSxDQUFBO0lBQzVDLG1CQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsbUJBQUEsTUFBTSxDQUFFLGVBQWUsQ0FBRSxDQUFBO3FFQUNwQixNQUFNO1FBQ0wsUUFBUTtRQUNOLFVBQVU7UUFDVCxZQUFZO0dBbkJ2QixvQkFBb0IsQ0FrR2hDO1NBbEdZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN3UHVzaCwgU3dVcGRhdGUgfSBmcm9tICdAYW5ndWxhci9zZXJ2aWNlLXdvcmtlcic7XG5pbXBvcnQgeyB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgT2JzZXJ2ZXIgfSBmcm9tICdyeGpzJztcbmltcG9ydCBfIGZyb20gJ3VuZGVyc2NvcmUnO1xuXG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi9hcGkuc2VydmljZSc7XG5pbXBvcnQgeyBTdG9yZVNlcnZpY2UgfSBmcm9tICcuL3N0b3JlLnNlcnZpY2UnO1xuaW1wb3J0IHsgREVGQVVMVF9GQ01fUFVCTElDX0tFWSwgREVGQVVMVF9BVVRIT1JJWkVEX0tFWSwgREVGQVVMVF9BUFBfVVJMIH0gZnJvbSAnLi4vaW5qZWN0aW9uLXRva2VuJztcblxuZGVjbGFyZSB2YXIgd2luZG93OiBXaW5kb3c7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTZXJ2aWNlV29ya2VyU2VydmljZSB7XG5cblx0LyoqXG5cdCogQGNvbnN0cnVjdG9yXG5cdCogQHBhcmFtIHtzdHJpbmd9IGRlZmF1bHRGQ01QdWJsaWNLZXlcblx0KiBAcGFyYW0ge3N0cmluZ30gZGVmYXVsdEF1dGhvcml6ZWRLZXlcblx0KiBAcGFyYW0ge3N0cmluZ30gZGVmYXVsdEFwcFVSTFxuXHQqIEBwYXJhbSB7U3dQdXNofSBzd1B1c2hcblx0KiBAcGFyYW0ge1N3VXBkYXRlfSBzd1VwZGF0ZVxuXHQqIEBwYXJhbSB7QXBpU2VydmljZX0gYXBpU2VydmljZVxuXHQqIEBwYXJhbSB7U3RvcmVTZXJ2aWNlfSBzdG9yZVNlcnZpY2Vcblx0Ki9cblx0Y29uc3RydWN0b3IoXG5cdFx0QE9wdGlvbmFsKCkgQEluamVjdCggREVGQVVMVF9GQ01fUFVCTElDX0tFWSApIHJlYWRvbmx5IGRlZmF1bHRGQ01QdWJsaWNLZXk6IHN0cmluZyxcblx0XHRAT3B0aW9uYWwoKSBASW5qZWN0KCBERUZBVUxUX0FVVEhPUklaRURfS0VZICkgcmVhZG9ubHkgZGVmYXVsdEF1dGhvcml6ZWRLZXk6IHN0cmluZyxcblx0XHRAT3B0aW9uYWwoKSBASW5qZWN0KCBERUZBVUxUX0FQUF9VUkwgKSByZWFkb25seSBkZWZhdWx0QXBwVVJMOiBzdHJpbmcsXG5cdFx0cHJpdmF0ZSBzd1B1c2hcdFx0OiBTd1B1c2gsXG5cdFx0cHJpdmF0ZSBzd1VwZGF0ZVx0OiBTd1VwZGF0ZSxcblx0XHRwcml2YXRlIGFwaVNlcnZpY2VcdDogQXBpU2VydmljZSxcblx0XHRwcml2YXRlIHN0b3JlU2VydmljZTogU3RvcmVTZXJ2aWNlXG5cdCkge31cblxuXHQvKipcblx0KiBVcGRhdGUgYXZhaWxhYmxlIHZlcnNpb25cblx0KiBAcmV0dXJuIHt2b2lkfVxuXHQqL1xuXHRwdWJsaWMgdXBkYXRlQXZhaWxhYmxlVmVyc2lvbigpIHtcblx0XHR0aGlzLnN3VXBkYXRlLmF2YWlsYWJsZS5zdWJzY3JpYmUoICgpID0+IHtcblx0XHRcdHRoaXMuc3dVcGRhdGUuYWN0aXZhdGVVcGRhdGUoKS50aGVuKCAoKSA9PiBkb2N1bWVudC5sb2NhdGlvbi5yZWxvYWQoKSApO1xuXHRcdH0gKTtcblx0fVxuXG5cdC8qKlxuXHQqIEVuYWJsZSBwdXNoIG5vdGlmaWNhdGlvblxuXHQqIEByZXR1cm4ge3ZvaWR9XG5cdCovXG5cdHB1YmxpYyBlbmFibGVQdXNoTm90aWZpY2F0aW9uKCkge1xuXHRcdGlmICggIXRoaXMuc3dQdXNoLmlzRW5hYmxlZCB8fCAnc2FmYXJpJyBpbiB3aW5kb3cgKSByZXR1cm47XG5cblx0XHQvLyBSZXF1ZXN0IHN1YnNjcmlwdGlvblxuXHRcdHRoaXMuc3dQdXNoXG5cdFx0LnJlcXVlc3RTdWJzY3JpcHRpb24oIHsgc2VydmVyUHVibGljS2V5OiB0aGlzLmRlZmF1bHRGQ01QdWJsaWNLZXkgfSApXG5cdFx0LnRoZW4oICggc3Vic2NyaXB0aW9uOiBhbnkgKSA9PiB7XG5cdFx0XHQvLyBTZW5kIHN1YnNjcmlwdGlvbiB0byB0aGUgc2VydmVyXG5cdFx0XHR0aGlzLmFwaVNlcnZpY2Vcblx0XHRcdC5jYWxsKCAnL2ZjbS9zdWJzY3JpcHRpb24nLCAnUE9TVCcsIHsgc3Vic2NyaXB0aW9uIH0gKVxuXHRcdFx0LnN1YnNjcmliZSgpO1xuXHRcdH0gKTtcblxuXHRcdC8vIEhhbmRsZSBjbGljayBub3RpZmljYXRpb24gZXZlbnRcblx0XHR0aGlzLnN3UHVzaC5ub3RpZmljYXRpb25DbGlja3Ncblx0XHQuc3Vic2NyaWJlKCAoKSA9PiB3aW5kb3cub3BlbiggdGhpcy5kZWZhdWx0QXBwVVJMICkgKTtcblx0fVxuXG5cdC8qKlxuXHQqIERpc2FibGUgcHVzaCBub3RpZmljYXRpb25cblx0KiBAcmV0dXJuIHt2b2lkfVxuXHQqL1xuXHRwdWJsaWMgZGlzYWJsZVB1c2hOb3RpZmljYXRpb24oKSB7XG5cdFx0aWYgKCAhdGhpcy5zd1B1c2guaXNFbmFibGVkIHx8ICdzYWZhcmknIGluIHdpbmRvdyApIHJldHVybjtcblxuXHRcdC8vIFVuc3Vic2NyaWJlIGFsbCBzdWJzY3JpcHRpb25zXG5cdFx0dGhpcy5zd1B1c2guc3Vic2NyaXB0aW9uXG5cdFx0LnBpcGUoIHRha2UoIDEgKSApXG5cdFx0LmZvckVhY2goICggc3Vic2NyaXB0aW9uOiBhbnkgKSA9PiB7XG5cdFx0XHRzdWJzY3JpcHRpb24gJiYgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG5cdFx0fSApO1xuXHR9XG5cblx0LyoqXG5cdCogTGlzdGVuIHB1c2ggbm90aWZpY2F0aW9uXG5cdCogQHJldHVybiB7T2JzZXJ2YWJsZX1cblx0Ki9cblx0cHVibGljIGxpc3RlblB1c2hOb3RpZmljYXRpb24oKTogT2JzZXJ2YWJsZTxhbnk+IHtcblx0XHRyZXR1cm4gbmV3IE9ic2VydmFibGUoICggb2JzZXJ2ZXI6IE9ic2VydmVyPGFueT4gKSA9PiB7XG5cdFx0XHRpZiAoICF0aGlzLnN3UHVzaC5pc0VuYWJsZWQgfHwgJ3NhZmFyaScgaW4gd2luZG93ICkge1xuXHRcdFx0XHRvYnNlcnZlci5uZXh0KCBudWxsICk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5zd1B1c2gubWVzc2FnZXNcblx0XHRcdC5zdWJzY3JpYmUoXG5cdFx0XHRcdCggcGF5bG9hZDogYW55ICkgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IHN0b3JlZDogYW55ID0gdGhpcy5zdG9yZVNlcnZpY2UuZ2V0KCB0aGlzLmRlZmF1bHRBdXRob3JpemVkS2V5ICk7XG5cblx0XHRcdFx0XHQvLyBJbiBjYXNlIHVzZXIgdW5hdXRob3JpemVkXG5cdFx0XHRcdFx0aWYgKCAhc3RvcmVkICkge1xuXHRcdFx0XHRcdFx0b2JzZXJ2ZXIubmV4dCggbnVsbCApO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdG9ic2VydmVyLm5leHQoIHBheWxvYWQgKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0KCBlcnJvcjogYW55ICkgPT4gb2JzZXJ2ZXIuZXJyb3IoIGVycm9yIClcblx0XHRcdCk7XG5cdFx0fSApO1xuXHR9XG5cbn1cbiJdfQ==