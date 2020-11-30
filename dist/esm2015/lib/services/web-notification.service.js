import * as tslib_1 from "tslib";
import { Injectable, Inject, Optional } from '@angular/core';
import { Observable } from 'rxjs';
import _ from 'underscore';
import { DEFAULT_APP_LOGO } from '../injection-token';
let WebNotificationService = class WebNotificationService {
    /**
    * @constructor
    * @param {string} defaultAppLogo
    */
    constructor(defaultAppLogo) {
        this.defaultAppLogo = defaultAppLogo;
        this.permission = this.isSupported() ? 'default' : 'denied';
    }
    /**
    * Is supported
    * @return {boolean}
    */
    isSupported() {
        return 'Notification' in window;
    }
    /**
    * Request permission
    * @return {void}
    */
    requestPermission() {
        if ('Notification' in window) {
            Notification.requestPermission((status) => {
                return this.permission = status;
            });
        }
    }
    /**
    * Create notification
    * @param {string} title - Notification title
    * @param {PushNotification} options - Notification options
    * @return {Observable}
    */
    create(title, options) {
        return new Observable((observer) => {
            if (!('Notification' in window)) {
                observer.complete();
            }
            if (this.permission !== 'granted') {
                observer.complete();
            }
            const _notify = new Notification(title, options);
            _notify.onshow = (e) => {
                return observer.next({
                    notification: _notify,
                    event: e,
                });
            };
            _notify.onclick = (e) => {
                return observer.next({
                    notification: _notify,
                    event: e,
                });
            };
            _notify.onerror = (e) => {
                return observer.error({
                    notification: _notify,
                    event: e,
                });
            };
            _notify.onclose = () => {
                return observer.complete();
            };
        });
    }
    /**
    * Generate notification
    * @param {Array} source
    * @return {Observable}
    */
    generateNotification(source) {
        _.each(source, (item) => {
            const options = {
                body: item.alertContent,
                icon: this.defaultAppLogo,
            };
            this.create(item.title, options).subscribe();
        });
    }
};
WebNotificationService.ctorParameters = () => [
    { type: String, decorators: [{ type: Optional }, { type: Inject, args: [DEFAULT_APP_LOGO,] }] }
];
WebNotificationService = tslib_1.__decorate([
    Injectable(),
    tslib_1.__param(0, Optional()), tslib_1.__param(0, Inject(DEFAULT_APP_LOGO)),
    tslib_1.__metadata("design:paramtypes", [String])
], WebNotificationService);
export { WebNotificationService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViLW5vdGlmaWNhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1jb3JlLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3dlYi1ub3RpZmljYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxVQUFVLEVBQVksTUFBTSxNQUFNLENBQUM7QUFDNUMsT0FBTyxDQUFDLE1BQU0sWUFBWSxDQUFDO0FBRTNCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBR3RELElBQWEsc0JBQXNCLEdBQW5DLE1BQWEsc0JBQXNCO0lBSWxDOzs7TUFHRTtJQUNGLFlBQThELGNBQXNCO1FBQXRCLG1CQUFjLEdBQWQsY0FBYyxDQUFRO1FBQ25GLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztJQUM3RCxDQUFDO0lBRUQ7OztNQUdFO0lBQ0ssV0FBVztRQUNqQixPQUFPLGNBQWMsSUFBSSxNQUFNLENBQUM7SUFDakMsQ0FBQztJQUVEOzs7TUFHRTtJQUNLLGlCQUFpQjtRQUN2QixJQUFLLGNBQWMsSUFBSSxNQUFNLEVBQUc7WUFDL0IsWUFBWSxDQUFDLGlCQUFpQixDQUFFLENBQUUsTUFBVyxFQUFHLEVBQUU7Z0JBQ2pELE9BQU8sSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUM7WUFDakMsQ0FBQyxDQUFFLENBQUM7U0FDSjtJQUNGLENBQUM7SUFFRDs7Ozs7TUFLRTtJQUNLLE1BQU0sQ0FBRSxLQUFhLEVBQUUsT0FBMEI7UUFDdkQsT0FBTyxJQUFJLFVBQVUsQ0FBRSxDQUFFLFFBQXVCLEVBQUcsRUFBRTtZQUNwRCxJQUFLLENBQUMsQ0FBRSxjQUFjLElBQUksTUFBTSxDQUFFLEVBQUc7Z0JBQ3BDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUNwQjtZQUVELElBQUssSUFBSSxDQUFDLFVBQVUsS0FBSyxTQUFTLEVBQUc7Z0JBQ3BDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUNwQjtZQUVELE1BQU0sT0FBTyxHQUFRLElBQUksWUFBWSxDQUFFLEtBQUssRUFBRSxPQUFPLENBQUUsQ0FBQztZQUV4RCxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUUsQ0FBTSxFQUFHLEVBQUU7Z0JBQzdCLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQztvQkFDcEIsWUFBWSxFQUFFLE9BQU87b0JBQ3JCLEtBQUssRUFBSSxDQUFDO2lCQUNWLENBQUMsQ0FBQztZQUNKLENBQUMsQ0FBQztZQUVGLE9BQU8sQ0FBQyxPQUFPLEdBQUcsQ0FBRSxDQUFNLEVBQUcsRUFBRTtnQkFDOUIsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDO29CQUNwQixZQUFZLEVBQUUsT0FBTztvQkFDckIsS0FBSyxFQUFJLENBQUM7aUJBQ1YsQ0FBQyxDQUFDO1lBQ0osQ0FBQyxDQUFDO1lBRUYsT0FBTyxDQUFDLE9BQU8sR0FBRyxDQUFFLENBQU0sRUFBRyxFQUFFO2dCQUM5QixPQUFPLFFBQVEsQ0FBQyxLQUFLLENBQUM7b0JBQ3JCLFlBQVksRUFBRSxPQUFPO29CQUNyQixLQUFLLEVBQUksQ0FBQztpQkFDVixDQUFDLENBQUM7WUFDSixDQUFDLENBQUM7WUFFRixPQUFPLENBQUMsT0FBTyxHQUFHLEdBQUcsRUFBRTtnQkFDdEIsT0FBTyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDNUIsQ0FBQyxDQUFDO1FBQ0gsQ0FBQyxDQUFFLENBQUM7SUFDTCxDQUFDO0lBRUQ7Ozs7TUFJRTtJQUNLLG9CQUFvQixDQUFFLE1BQWtCO1FBQzlDLENBQUMsQ0FBQyxJQUFJLENBQUUsTUFBTSxFQUFFLENBQUUsSUFBUyxFQUFHLEVBQUU7WUFDL0IsTUFBTSxPQUFPLEdBQXFCO2dCQUNqQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFlBQVk7Z0JBQ3ZCLElBQUksRUFBRSxJQUFJLENBQUMsY0FBYzthQUN6QixDQUFDO1lBRUYsSUFBSSxDQUFDLE1BQU0sQ0FBRSxJQUFJLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBRSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2hELENBQUMsQ0FBRSxDQUFDO0lBQ0wsQ0FBQztDQUVELENBQUE7O3lDQXJGYyxRQUFRLFlBQUksTUFBTSxTQUFFLGdCQUFnQjs7QUFSdEMsc0JBQXNCO0lBRGxDLFVBQVUsRUFBRTtJQVNFLG1CQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsbUJBQUEsTUFBTSxDQUFFLGdCQUFnQixDQUFFLENBQUE7O0dBUnhDLHNCQUFzQixDQTZGbEM7U0E3Rlksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0LCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgT2JzZXJ2ZXIgfSBmcm9tICdyeGpzJztcbmltcG9ydCBfIGZyb20gJ3VuZGVyc2NvcmUnO1xuXG5pbXBvcnQgeyBERUZBVUxUX0FQUF9MT0dPIH0gZnJvbSAnLi4vaW5qZWN0aW9uLXRva2VuJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFdlYk5vdGlmaWNhdGlvblNlcnZpY2Uge1xuXG5cdHB1YmxpYyBwZXJtaXNzaW9uOiBQZXJtaXNzaW9uO1xuXG5cdC8qKlxuXHQqIEBjb25zdHJ1Y3RvclxuXHQqIEBwYXJhbSB7c3RyaW5nfSBkZWZhdWx0QXBwTG9nb1xuXHQqL1xuXHRjb25zdHJ1Y3RvciggQE9wdGlvbmFsKCkgQEluamVjdCggREVGQVVMVF9BUFBfTE9HTyApIHJlYWRvbmx5IGRlZmF1bHRBcHBMb2dvOiBzdHJpbmcgKSB7XG5cdFx0dGhpcy5wZXJtaXNzaW9uID0gdGhpcy5pc1N1cHBvcnRlZCgpID8gJ2RlZmF1bHQnIDogJ2RlbmllZCc7XG5cdH1cblxuXHQvKipcblx0KiBJcyBzdXBwb3J0ZWRcblx0KiBAcmV0dXJuIHtib29sZWFufVxuXHQqL1xuXHRwdWJsaWMgaXNTdXBwb3J0ZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuICdOb3RpZmljYXRpb24nIGluIHdpbmRvdztcblx0fVxuXG5cdC8qKlxuXHQqIFJlcXVlc3QgcGVybWlzc2lvblxuXHQqIEByZXR1cm4ge3ZvaWR9XG5cdCovXG5cdHB1YmxpYyByZXF1ZXN0UGVybWlzc2lvbigpIHtcblx0XHRpZiAoICdOb3RpZmljYXRpb24nIGluIHdpbmRvdyApIHtcblx0XHRcdE5vdGlmaWNhdGlvbi5yZXF1ZXN0UGVybWlzc2lvbiggKCBzdGF0dXM6IGFueSApID0+IHtcblx0XHRcdFx0cmV0dXJuIHRoaXMucGVybWlzc2lvbiA9IHN0YXR1cztcblx0XHRcdH0gKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0KiBDcmVhdGUgbm90aWZpY2F0aW9uXG5cdCogQHBhcmFtIHtzdHJpbmd9IHRpdGxlIC0gTm90aWZpY2F0aW9uIHRpdGxlXG5cdCogQHBhcmFtIHtQdXNoTm90aWZpY2F0aW9ufSBvcHRpb25zIC0gTm90aWZpY2F0aW9uIG9wdGlvbnNcblx0KiBAcmV0dXJuIHtPYnNlcnZhYmxlfVxuXHQqL1xuXHRwdWJsaWMgY3JlYXRlKCB0aXRsZTogc3RyaW5nLCBvcHRpb25zPzogUHVzaE5vdGlmaWNhdGlvbiApOiBPYnNlcnZhYmxlPGFueT4ge1xuXHRcdHJldHVybiBuZXcgT2JzZXJ2YWJsZSggKCBvYnNlcnZlcjogT2JzZXJ2ZXI8YW55PiApID0+IHtcblx0XHRcdGlmICggISggJ05vdGlmaWNhdGlvbicgaW4gd2luZG93ICkgKSB7XG5cdFx0XHRcdG9ic2VydmVyLmNvbXBsZXRlKCk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICggdGhpcy5wZXJtaXNzaW9uICE9PSAnZ3JhbnRlZCcgKSB7XG5cdFx0XHRcdG9ic2VydmVyLmNvbXBsZXRlKCk7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IF9ub3RpZnk6IGFueSA9IG5ldyBOb3RpZmljYXRpb24oIHRpdGxlLCBvcHRpb25zICk7XG5cblx0XHRcdF9ub3RpZnkub25zaG93ID0gKCBlOiBhbnkgKSA9PiB7XG5cdFx0XHRcdHJldHVybiBvYnNlcnZlci5uZXh0KHtcblx0XHRcdFx0XHRub3RpZmljYXRpb246IF9ub3RpZnksXG5cdFx0XHRcdFx0ZXZlbnRcdFx0OiBlLFxuXHRcdFx0XHR9KTtcblx0XHRcdH07XG5cblx0XHRcdF9ub3RpZnkub25jbGljayA9ICggZTogYW55ICkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gb2JzZXJ2ZXIubmV4dCh7XG5cdFx0XHRcdFx0bm90aWZpY2F0aW9uOiBfbm90aWZ5LFxuXHRcdFx0XHRcdGV2ZW50XHRcdDogZSxcblx0XHRcdFx0fSk7XG5cdFx0XHR9O1xuXG5cdFx0XHRfbm90aWZ5Lm9uZXJyb3IgPSAoIGU6IGFueSApID0+IHtcblx0XHRcdFx0cmV0dXJuIG9ic2VydmVyLmVycm9yKHtcblx0XHRcdFx0XHRub3RpZmljYXRpb246IF9ub3RpZnksXG5cdFx0XHRcdFx0ZXZlbnRcdFx0OiBlLFxuXHRcdFx0XHR9KTtcblx0XHRcdH07XG5cblx0XHRcdF9ub3RpZnkub25jbG9zZSA9ICgpID0+IHtcblx0XHRcdFx0cmV0dXJuIG9ic2VydmVyLmNvbXBsZXRlKCk7XG5cdFx0XHR9O1xuXHRcdH0gKTtcblx0fVxuXG5cdC8qKlxuXHQqIEdlbmVyYXRlIG5vdGlmaWNhdGlvblxuXHQqIEBwYXJhbSB7QXJyYXl9IHNvdXJjZVxuXHQqIEByZXR1cm4ge09ic2VydmFibGV9XG5cdCovXG5cdHB1YmxpYyBnZW5lcmF0ZU5vdGlmaWNhdGlvbiggc291cmNlOiBBcnJheTxhbnk+ICkge1xuXHRcdF8uZWFjaCggc291cmNlLCAoIGl0ZW06IGFueSApID0+IHtcblx0XHRcdGNvbnN0IG9wdGlvbnM6IFB1c2hOb3RpZmljYXRpb24gPSB7XG5cdFx0XHRcdGJvZHk6IGl0ZW0uYWxlcnRDb250ZW50LFxuXHRcdFx0XHRpY29uOiB0aGlzLmRlZmF1bHRBcHBMb2dvLFxuXHRcdFx0fTtcblxuXHRcdFx0dGhpcy5jcmVhdGUoIGl0ZW0udGl0bGUsIG9wdGlvbnMgKS5zdWJzY3JpYmUoKTtcblx0XHR9ICk7XG5cdH1cblxufVxuXG5leHBvcnQgZGVjbGFyZSB0eXBlIFBlcm1pc3Npb24gPSAnZGVuaWVkJyB8ICdncmFudGVkJyB8ICdkZWZhdWx0JztcbmV4cG9ydCBpbnRlcmZhY2UgUHVzaE5vdGlmaWNhdGlvbiB7XG5cdGJvZHk/OiBzdHJpbmc7XG5cdGljb24/OiBzdHJpbmc7XG5cdHRhZz86IHN0cmluZztcblx0ZGF0YT86IGFueTtcblx0cmVub3RpZnk/OiBib29sZWFuO1xuXHRzaWxlbnQ/OiBib29sZWFuO1xuXHRzb3VuZD86IHN0cmluZztcblx0bm9zY3JlZW4/OiBib29sZWFuO1xuXHRzdGlja3k/OiBib29sZWFuO1xuXHRkaXI/OiAnYXV0bycgfCAnbHRyJyB8ICdydGwnO1xuXHRsYW5nPzogc3RyaW5nO1xuXHR2aWJyYXRlPzogbnVtYmVyW107XG59XG4iXX0=