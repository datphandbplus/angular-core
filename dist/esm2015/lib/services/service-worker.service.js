import * as tslib_1 from "tslib";
import { Injectable, Inject, Optional } from '@angular/core';
import { SwPush, SwUpdate } from '@angular/service-worker';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { DEFAULT_FCM_PUBLIC_KEY, DEFAULT_APP_URL } from '../injection-token';
let ServiceWorkerService = class ServiceWorkerService {
    /**
    * @constructor
    * @param {string} defaultFCMPublicKey
    * @param {string} defaultAppURL
    * @param {SwPush} swPush
    * @param {SwUpdate} swUpdate
    * @param {ApiService} apiService
    */
    constructor(defaultFCMPublicKey, defaultAppURL, swPush, swUpdate, apiService) {
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
            return this.swPush.messages
                .subscribe((payload) => observer.next(payload), (error) => observer.error(error));
        });
    }
};
ServiceWorkerService.ctorParameters = () => [
    { type: String, decorators: [{ type: Optional }, { type: Inject, args: [DEFAULT_FCM_PUBLIC_KEY,] }] },
    { type: String, decorators: [{ type: Optional }, { type: Inject, args: [DEFAULT_APP_URL,] }] },
    { type: SwPush },
    { type: SwUpdate },
    { type: ApiService }
];
ServiceWorkerService = tslib_1.__decorate([
    Injectable(),
    tslib_1.__param(0, Optional()), tslib_1.__param(0, Inject(DEFAULT_FCM_PUBLIC_KEY)),
    tslib_1.__param(1, Optional()), tslib_1.__param(1, Inject(DEFAULT_APP_URL)),
    tslib_1.__metadata("design:paramtypes", [String, String, SwPush,
        SwUpdate,
        ApiService])
], ServiceWorkerService);
export { ServiceWorkerService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS13b3JrZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9zZXJ2aWNlLXdvcmtlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBWSxNQUFNLE1BQU0sQ0FBQztBQUc1QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUs3RSxJQUFhLG9CQUFvQixHQUFqQyxNQUFhLG9CQUFvQjtJQUVoQzs7Ozs7OztNQU9FO0lBQ0YsWUFDd0QsbUJBQTJCLEVBQ2xDLGFBQXFCLEVBQzdELE1BQWdCLEVBQ2hCLFFBQW1CLEVBQ25CLFVBQXVCO1FBSndCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBUTtRQUNsQyxrQkFBYSxHQUFiLGFBQWEsQ0FBUTtRQUM3RCxXQUFNLEdBQU4sTUFBTSxDQUFVO1FBQ2hCLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsZUFBVSxHQUFWLFVBQVUsQ0FBYTtJQUM3QixDQUFDO0lBRUo7OztNQUdFO0lBQ0ssc0JBQXNCO1FBQzVCLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBRSxHQUFHLEVBQUU7WUFDdkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxJQUFJLENBQUUsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBRSxDQUFDO1FBQ3pFLENBQUMsQ0FBRSxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7TUFHRTtJQUNLLHNCQUFzQjtRQUM1QixJQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLElBQUksUUFBUSxJQUFJLE1BQU07WUFBRyxPQUFPO1FBRTNELHVCQUF1QjtRQUN2QixJQUFJLENBQUMsTUFBTTthQUNWLG1CQUFtQixDQUFFLEVBQUUsZUFBZSxFQUFFLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFFO2FBQ3BFLElBQUksQ0FBRSxDQUFFLFlBQWlCLEVBQUcsRUFBRTtZQUM5QixrQ0FBa0M7WUFDbEMsSUFBSSxDQUFDLFVBQVU7aUJBQ2QsSUFBSSxDQUFFLG1CQUFtQixFQUFFLE1BQU0sRUFBRSxFQUFFLFlBQVksRUFBRSxDQUFFO2lCQUNyRCxTQUFTLEVBQUUsQ0FBQztRQUNkLENBQUMsQ0FBRSxDQUFDO1FBRUosa0NBQWtDO1FBQ2xDLElBQUksQ0FBQyxNQUFNLENBQUMsa0JBQWtCO2FBQzdCLFNBQVMsQ0FBRSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFFLElBQUksQ0FBQyxhQUFhLENBQUUsQ0FBRSxDQUFDO0lBQ3ZELENBQUM7SUFFRDs7O01BR0U7SUFDSyx1QkFBdUI7UUFDN0IsSUFBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxJQUFJLFFBQVEsSUFBSSxNQUFNO1lBQUcsT0FBTztRQUUzRCxnQ0FBZ0M7UUFDaEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZO2FBQ3ZCLElBQUksQ0FBRSxJQUFJLENBQUUsQ0FBQyxDQUFFLENBQUU7YUFDakIsT0FBTyxDQUFFLENBQUUsWUFBaUIsRUFBRyxFQUFFO1lBQ2pDLFlBQVksSUFBSSxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDNUMsQ0FBQyxDQUFFLENBQUM7SUFDTCxDQUFDO0lBRUQ7OztNQUdFO0lBQ0ssc0JBQXNCO1FBQzVCLE9BQU8sSUFBSSxVQUFVLENBQUUsQ0FBRSxRQUF1QixFQUFHLEVBQUU7WUFDcEQsSUFBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxJQUFJLFFBQVEsSUFBSSxNQUFNLEVBQUc7Z0JBQ25ELFFBQVEsQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFFLENBQUM7Z0JBQ3RCLE9BQU87YUFDUDtZQUVELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRO2lCQUMxQixTQUFTLENBQ1QsQ0FBRSxPQUFZLEVBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUUsT0FBTyxDQUFFLEVBQzVDLENBQUUsS0FBVSxFQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFFLEtBQUssQ0FBRSxDQUN6QyxDQUFDO1FBQ0gsQ0FBQyxDQUFFLENBQUM7SUFDTCxDQUFDO0NBRUQsQ0FBQTs7eUNBekVFLFFBQVEsWUFBSSxNQUFNLFNBQUUsc0JBQXNCO3lDQUMxQyxRQUFRLFlBQUksTUFBTSxTQUFFLGVBQWU7WUFDbEIsTUFBTTtZQUNMLFFBQVE7WUFDTixVQUFVOztBQWZwQixvQkFBb0I7SUFEaEMsVUFBVSxFQUFFO0lBWVYsbUJBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxtQkFBQSxNQUFNLENBQUUsc0JBQXNCLENBQUUsQ0FBQTtJQUM1QyxtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLE1BQU0sQ0FBRSxlQUFlLENBQUUsQ0FBQTs2REFDcEIsTUFBTTtRQUNMLFFBQVE7UUFDTixVQUFVO0dBZnBCLG9CQUFvQixDQW9GaEM7U0FwRlksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0LCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3dQdXNoLCBTd1VwZGF0ZSB9IGZyb20gJ0Bhbmd1bGFyL3NlcnZpY2Utd29ya2VyJztcbmltcG9ydCB7IHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBPYnNlcnZlciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IF8gZnJvbSAndW5kZXJzY29yZSc7XG5cbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7IERFRkFVTFRfRkNNX1BVQkxJQ19LRVksIERFRkFVTFRfQVBQX1VSTCB9IGZyb20gJy4uL2luamVjdGlvbi10b2tlbic7XG5cbmRlY2xhcmUgdmFyIHdpbmRvdzogV2luZG93O1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2VydmljZVdvcmtlclNlcnZpY2Uge1xuXG5cdC8qKlxuXHQqIEBjb25zdHJ1Y3RvclxuXHQqIEBwYXJhbSB7c3RyaW5nfSBkZWZhdWx0RkNNUHVibGljS2V5XG5cdCogQHBhcmFtIHtzdHJpbmd9IGRlZmF1bHRBcHBVUkxcblx0KiBAcGFyYW0ge1N3UHVzaH0gc3dQdXNoXG5cdCogQHBhcmFtIHtTd1VwZGF0ZX0gc3dVcGRhdGVcblx0KiBAcGFyYW0ge0FwaVNlcnZpY2V9IGFwaVNlcnZpY2Vcblx0Ki9cblx0Y29uc3RydWN0b3IoXG5cdFx0QE9wdGlvbmFsKCkgQEluamVjdCggREVGQVVMVF9GQ01fUFVCTElDX0tFWSApIHJlYWRvbmx5IGRlZmF1bHRGQ01QdWJsaWNLZXk6IHN0cmluZyxcblx0XHRAT3B0aW9uYWwoKSBASW5qZWN0KCBERUZBVUxUX0FQUF9VUkwgKSByZWFkb25seSBkZWZhdWx0QXBwVVJMOiBzdHJpbmcsXG5cdFx0cHJpdmF0ZSBzd1B1c2hcdFx0OiBTd1B1c2gsXG5cdFx0cHJpdmF0ZSBzd1VwZGF0ZVx0OiBTd1VwZGF0ZSxcblx0XHRwcml2YXRlIGFwaVNlcnZpY2VcdDogQXBpU2VydmljZVxuXHQpIHt9XG5cblx0LyoqXG5cdCogVXBkYXRlIGF2YWlsYWJsZSB2ZXJzaW9uXG5cdCogQHJldHVybiB7dm9pZH1cblx0Ki9cblx0cHVibGljIHVwZGF0ZUF2YWlsYWJsZVZlcnNpb24oKSB7XG5cdFx0dGhpcy5zd1VwZGF0ZS5hdmFpbGFibGUuc3Vic2NyaWJlKCAoKSA9PiB7XG5cdFx0XHR0aGlzLnN3VXBkYXRlLmFjdGl2YXRlVXBkYXRlKCkudGhlbiggKCkgPT4gZG9jdW1lbnQubG9jYXRpb24ucmVsb2FkKCkgKTtcblx0XHR9ICk7XG5cdH1cblxuXHQvKipcblx0KiBFbmFibGUgcHVzaCBub3RpZmljYXRpb25cblx0KiBAcmV0dXJuIHt2b2lkfVxuXHQqL1xuXHRwdWJsaWMgZW5hYmxlUHVzaE5vdGlmaWNhdGlvbigpIHtcblx0XHRpZiAoICF0aGlzLnN3UHVzaC5pc0VuYWJsZWQgfHwgJ3NhZmFyaScgaW4gd2luZG93ICkgcmV0dXJuO1xuXG5cdFx0Ly8gUmVxdWVzdCBzdWJzY3JpcHRpb25cblx0XHR0aGlzLnN3UHVzaFxuXHRcdC5yZXF1ZXN0U3Vic2NyaXB0aW9uKCB7IHNlcnZlclB1YmxpY0tleTogdGhpcy5kZWZhdWx0RkNNUHVibGljS2V5IH0gKVxuXHRcdC50aGVuKCAoIHN1YnNjcmlwdGlvbjogYW55ICkgPT4ge1xuXHRcdFx0Ly8gU2VuZCBzdWJzY3JpcHRpb24gdG8gdGhlIHNlcnZlclxuXHRcdFx0dGhpcy5hcGlTZXJ2aWNlXG5cdFx0XHQuY2FsbCggJy9mY20vc3Vic2NyaXB0aW9uJywgJ1BPU1QnLCB7IHN1YnNjcmlwdGlvbiB9IClcblx0XHRcdC5zdWJzY3JpYmUoKTtcblx0XHR9ICk7XG5cblx0XHQvLyBIYW5kbGUgY2xpY2sgbm90aWZpY2F0aW9uIGV2ZW50XG5cdFx0dGhpcy5zd1B1c2gubm90aWZpY2F0aW9uQ2xpY2tzXG5cdFx0LnN1YnNjcmliZSggKCkgPT4gd2luZG93Lm9wZW4oIHRoaXMuZGVmYXVsdEFwcFVSTCApICk7XG5cdH1cblxuXHQvKipcblx0KiBEaXNhYmxlIHB1c2ggbm90aWZpY2F0aW9uXG5cdCogQHJldHVybiB7dm9pZH1cblx0Ki9cblx0cHVibGljIGRpc2FibGVQdXNoTm90aWZpY2F0aW9uKCkge1xuXHRcdGlmICggIXRoaXMuc3dQdXNoLmlzRW5hYmxlZCB8fCAnc2FmYXJpJyBpbiB3aW5kb3cgKSByZXR1cm47XG5cblx0XHQvLyBVbnN1YnNjcmliZSBhbGwgc3Vic2NyaXB0aW9uc1xuXHRcdHRoaXMuc3dQdXNoLnN1YnNjcmlwdGlvblxuXHRcdC5waXBlKCB0YWtlKCAxICkgKVxuXHRcdC5mb3JFYWNoKCAoIHN1YnNjcmlwdGlvbjogYW55ICkgPT4ge1xuXHRcdFx0c3Vic2NyaXB0aW9uICYmIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuXHRcdH0gKTtcblx0fVxuXG5cdC8qKlxuXHQqIExpc3RlbiBwdXNoIG5vdGlmaWNhdGlvblxuXHQqIEByZXR1cm4ge09ic2VydmFibGV9XG5cdCovXG5cdHB1YmxpYyBsaXN0ZW5QdXNoTm90aWZpY2F0aW9uKCk6IE9ic2VydmFibGU8YW55PiB7XG5cdFx0cmV0dXJuIG5ldyBPYnNlcnZhYmxlKCAoIG9ic2VydmVyOiBPYnNlcnZlcjxhbnk+ICkgPT4ge1xuXHRcdFx0aWYgKCAhdGhpcy5zd1B1c2guaXNFbmFibGVkIHx8ICdzYWZhcmknIGluIHdpbmRvdyApIHtcblx0XHRcdFx0b2JzZXJ2ZXIubmV4dCggbnVsbCApO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB0aGlzLnN3UHVzaC5tZXNzYWdlc1xuXHRcdFx0LnN1YnNjcmliZShcblx0XHRcdFx0KCBwYXlsb2FkOiBhbnkgKSA9PiBvYnNlcnZlci5uZXh0KCBwYXlsb2FkICksXG5cdFx0XHRcdCggZXJyb3I6IGFueSApID0+IG9ic2VydmVyLmVycm9yKCBlcnJvciApXG5cdFx0XHQpO1xuXHRcdH0gKTtcblx0fVxuXG59XG4iXX0=