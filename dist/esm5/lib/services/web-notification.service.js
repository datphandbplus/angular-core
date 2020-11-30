import * as tslib_1 from "tslib";
import { Injectable, Inject, Optional } from '@angular/core';
import { Observable } from 'rxjs';
import _ from 'underscore';
import { DEFAULT_APP_LOGO } from '../injection-token';
var WebNotificationService = /** @class */ (function () {
    /**
    * @constructor
    * @param {string} defaultAppLogo
    */
    function WebNotificationService(defaultAppLogo) {
        this.defaultAppLogo = defaultAppLogo;
        this.permission = this.isSupported() ? 'default' : 'denied';
    }
    /**
    * Is supported
    * @return {boolean}
    */
    WebNotificationService.prototype.isSupported = function () {
        return 'Notification' in window;
    };
    /**
    * Request permission
    * @return {void}
    */
    WebNotificationService.prototype.requestPermission = function () {
        var _this = this;
        if ('Notification' in window) {
            Notification.requestPermission(function (status) {
                return _this.permission = status;
            });
        }
    };
    /**
    * Create notification
    * @param {string} title - Notification title
    * @param {PushNotification} options - Notification options
    * @return {Observable}
    */
    WebNotificationService.prototype.create = function (title, options) {
        var _this = this;
        return new Observable(function (observer) {
            if (!('Notification' in window)) {
                observer.complete();
            }
            if (_this.permission !== 'granted') {
                observer.complete();
            }
            var _notify = new Notification(title, options);
            _notify.onshow = function (e) {
                return observer.next({
                    notification: _notify,
                    event: e,
                });
            };
            _notify.onclick = function (e) {
                return observer.next({
                    notification: _notify,
                    event: e,
                });
            };
            _notify.onerror = function (e) {
                return observer.error({
                    notification: _notify,
                    event: e,
                });
            };
            _notify.onclose = function () {
                return observer.complete();
            };
        });
    };
    /**
    * Generate notification
    * @param {Array} source
    * @return {Observable}
    */
    WebNotificationService.prototype.generateNotification = function (source) {
        var _this = this;
        _.each(source, function (item) {
            var options = {
                body: item.alertContent,
                icon: _this.defaultAppLogo,
            };
            _this.create(item.title, options).subscribe();
        });
    };
    WebNotificationService.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Optional }, { type: Inject, args: [DEFAULT_APP_LOGO,] }] }
    ]; };
    WebNotificationService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__param(0, Optional()), tslib_1.__param(0, Inject(DEFAULT_APP_LOGO)),
        tslib_1.__metadata("design:paramtypes", [String])
    ], WebNotificationService);
    return WebNotificationService;
}());
export { WebNotificationService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViLW5vdGlmaWNhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1jb3JlLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3dlYi1ub3RpZmljYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxVQUFVLEVBQVksTUFBTSxNQUFNLENBQUM7QUFDNUMsT0FBTyxDQUFDLE1BQU0sWUFBWSxDQUFDO0FBRTNCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBR3REO0lBSUM7OztNQUdFO0lBQ0YsZ0NBQThELGNBQXNCO1FBQXRCLG1CQUFjLEdBQWQsY0FBYyxDQUFRO1FBQ25GLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztJQUM3RCxDQUFDO0lBRUQ7OztNQUdFO0lBQ0ssNENBQVcsR0FBbEI7UUFDQyxPQUFPLGNBQWMsSUFBSSxNQUFNLENBQUM7SUFDakMsQ0FBQztJQUVEOzs7TUFHRTtJQUNLLGtEQUFpQixHQUF4QjtRQUFBLGlCQU1DO1FBTEEsSUFBSyxjQUFjLElBQUksTUFBTSxFQUFHO1lBQy9CLFlBQVksQ0FBQyxpQkFBaUIsQ0FBRSxVQUFFLE1BQVc7Z0JBQzVDLE9BQU8sS0FBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUM7WUFDakMsQ0FBQyxDQUFFLENBQUM7U0FDSjtJQUNGLENBQUM7SUFFRDs7Ozs7TUFLRTtJQUNLLHVDQUFNLEdBQWIsVUFBZSxLQUFhLEVBQUUsT0FBMEI7UUFBeEQsaUJBcUNDO1FBcENBLE9BQU8sSUFBSSxVQUFVLENBQUUsVUFBRSxRQUF1QjtZQUMvQyxJQUFLLENBQUMsQ0FBRSxjQUFjLElBQUksTUFBTSxDQUFFLEVBQUc7Z0JBQ3BDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUNwQjtZQUVELElBQUssS0FBSSxDQUFDLFVBQVUsS0FBSyxTQUFTLEVBQUc7Z0JBQ3BDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUNwQjtZQUVELElBQU0sT0FBTyxHQUFRLElBQUksWUFBWSxDQUFFLEtBQUssRUFBRSxPQUFPLENBQUUsQ0FBQztZQUV4RCxPQUFPLENBQUMsTUFBTSxHQUFHLFVBQUUsQ0FBTTtnQkFDeEIsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDO29CQUNwQixZQUFZLEVBQUUsT0FBTztvQkFDckIsS0FBSyxFQUFJLENBQUM7aUJBQ1YsQ0FBQyxDQUFDO1lBQ0osQ0FBQyxDQUFDO1lBRUYsT0FBTyxDQUFDLE9BQU8sR0FBRyxVQUFFLENBQU07Z0JBQ3pCLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQztvQkFDcEIsWUFBWSxFQUFFLE9BQU87b0JBQ3JCLEtBQUssRUFBSSxDQUFDO2lCQUNWLENBQUMsQ0FBQztZQUNKLENBQUMsQ0FBQztZQUVGLE9BQU8sQ0FBQyxPQUFPLEdBQUcsVUFBRSxDQUFNO2dCQUN6QixPQUFPLFFBQVEsQ0FBQyxLQUFLLENBQUM7b0JBQ3JCLFlBQVksRUFBRSxPQUFPO29CQUNyQixLQUFLLEVBQUksQ0FBQztpQkFDVixDQUFDLENBQUM7WUFDSixDQUFDLENBQUM7WUFFRixPQUFPLENBQUMsT0FBTyxHQUFHO2dCQUNqQixPQUFPLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUM1QixDQUFDLENBQUM7UUFDSCxDQUFDLENBQUUsQ0FBQztJQUNMLENBQUM7SUFFRDs7OztNQUlFO0lBQ0sscURBQW9CLEdBQTNCLFVBQTZCLE1BQWtCO1FBQS9DLGlCQVNDO1FBUkEsQ0FBQyxDQUFDLElBQUksQ0FBRSxNQUFNLEVBQUUsVUFBRSxJQUFTO1lBQzFCLElBQU0sT0FBTyxHQUFxQjtnQkFDakMsSUFBSSxFQUFFLElBQUksQ0FBQyxZQUFZO2dCQUN2QixJQUFJLEVBQUUsS0FBSSxDQUFDLGNBQWM7YUFDekIsQ0FBQztZQUVGLEtBQUksQ0FBQyxNQUFNLENBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNoRCxDQUFDLENBQUUsQ0FBQztJQUNMLENBQUM7OzZDQW5GYSxRQUFRLFlBQUksTUFBTSxTQUFFLGdCQUFnQjs7SUFSdEMsc0JBQXNCO1FBRGxDLFVBQVUsRUFBRTtRQVNFLG1CQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsbUJBQUEsTUFBTSxDQUFFLGdCQUFnQixDQUFFLENBQUE7O09BUnhDLHNCQUFzQixDQTZGbEM7SUFBRCw2QkFBQztDQUFBLEFBN0ZELElBNkZDO1NBN0ZZLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIE9ic2VydmVyIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgXyBmcm9tICd1bmRlcnNjb3JlJztcblxuaW1wb3J0IHsgREVGQVVMVF9BUFBfTE9HTyB9IGZyb20gJy4uL2luamVjdGlvbi10b2tlbic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBXZWJOb3RpZmljYXRpb25TZXJ2aWNlIHtcblxuXHRwdWJsaWMgcGVybWlzc2lvbjogUGVybWlzc2lvbjtcblxuXHQvKipcblx0KiBAY29uc3RydWN0b3Jcblx0KiBAcGFyYW0ge3N0cmluZ30gZGVmYXVsdEFwcExvZ29cblx0Ki9cblx0Y29uc3RydWN0b3IoIEBPcHRpb25hbCgpIEBJbmplY3QoIERFRkFVTFRfQVBQX0xPR08gKSByZWFkb25seSBkZWZhdWx0QXBwTG9nbzogc3RyaW5nICkge1xuXHRcdHRoaXMucGVybWlzc2lvbiA9IHRoaXMuaXNTdXBwb3J0ZWQoKSA/ICdkZWZhdWx0JyA6ICdkZW5pZWQnO1xuXHR9XG5cblx0LyoqXG5cdCogSXMgc3VwcG9ydGVkXG5cdCogQHJldHVybiB7Ym9vbGVhbn1cblx0Ki9cblx0cHVibGljIGlzU3VwcG9ydGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiAnTm90aWZpY2F0aW9uJyBpbiB3aW5kb3c7XG5cdH1cblxuXHQvKipcblx0KiBSZXF1ZXN0IHBlcm1pc3Npb25cblx0KiBAcmV0dXJuIHt2b2lkfVxuXHQqL1xuXHRwdWJsaWMgcmVxdWVzdFBlcm1pc3Npb24oKSB7XG5cdFx0aWYgKCAnTm90aWZpY2F0aW9uJyBpbiB3aW5kb3cgKSB7XG5cdFx0XHROb3RpZmljYXRpb24ucmVxdWVzdFBlcm1pc3Npb24oICggc3RhdHVzOiBhbnkgKSA9PiB7XG5cdFx0XHRcdHJldHVybiB0aGlzLnBlcm1pc3Npb24gPSBzdGF0dXM7XG5cdFx0XHR9ICk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCogQ3JlYXRlIG5vdGlmaWNhdGlvblxuXHQqIEBwYXJhbSB7c3RyaW5nfSB0aXRsZSAtIE5vdGlmaWNhdGlvbiB0aXRsZVxuXHQqIEBwYXJhbSB7UHVzaE5vdGlmaWNhdGlvbn0gb3B0aW9ucyAtIE5vdGlmaWNhdGlvbiBvcHRpb25zXG5cdCogQHJldHVybiB7T2JzZXJ2YWJsZX1cblx0Ki9cblx0cHVibGljIGNyZWF0ZSggdGl0bGU6IHN0cmluZywgb3B0aW9ucz86IFB1c2hOb3RpZmljYXRpb24gKTogT2JzZXJ2YWJsZTxhbnk+IHtcblx0XHRyZXR1cm4gbmV3IE9ic2VydmFibGUoICggb2JzZXJ2ZXI6IE9ic2VydmVyPGFueT4gKSA9PiB7XG5cdFx0XHRpZiAoICEoICdOb3RpZmljYXRpb24nIGluIHdpbmRvdyApICkge1xuXHRcdFx0XHRvYnNlcnZlci5jb21wbGV0ZSgpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIHRoaXMucGVybWlzc2lvbiAhPT0gJ2dyYW50ZWQnICkge1xuXHRcdFx0XHRvYnNlcnZlci5jb21wbGV0ZSgpO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBfbm90aWZ5OiBhbnkgPSBuZXcgTm90aWZpY2F0aW9uKCB0aXRsZSwgb3B0aW9ucyApO1xuXG5cdFx0XHRfbm90aWZ5Lm9uc2hvdyA9ICggZTogYW55ICkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gb2JzZXJ2ZXIubmV4dCh7XG5cdFx0XHRcdFx0bm90aWZpY2F0aW9uOiBfbm90aWZ5LFxuXHRcdFx0XHRcdGV2ZW50XHRcdDogZSxcblx0XHRcdFx0fSk7XG5cdFx0XHR9O1xuXG5cdFx0XHRfbm90aWZ5Lm9uY2xpY2sgPSAoIGU6IGFueSApID0+IHtcblx0XHRcdFx0cmV0dXJuIG9ic2VydmVyLm5leHQoe1xuXHRcdFx0XHRcdG5vdGlmaWNhdGlvbjogX25vdGlmeSxcblx0XHRcdFx0XHRldmVudFx0XHQ6IGUsXG5cdFx0XHRcdH0pO1xuXHRcdFx0fTtcblxuXHRcdFx0X25vdGlmeS5vbmVycm9yID0gKCBlOiBhbnkgKSA9PiB7XG5cdFx0XHRcdHJldHVybiBvYnNlcnZlci5lcnJvcih7XG5cdFx0XHRcdFx0bm90aWZpY2F0aW9uOiBfbm90aWZ5LFxuXHRcdFx0XHRcdGV2ZW50XHRcdDogZSxcblx0XHRcdFx0fSk7XG5cdFx0XHR9O1xuXG5cdFx0XHRfbm90aWZ5Lm9uY2xvc2UgPSAoKSA9PiB7XG5cdFx0XHRcdHJldHVybiBvYnNlcnZlci5jb21wbGV0ZSgpO1xuXHRcdFx0fTtcblx0XHR9ICk7XG5cdH1cblxuXHQvKipcblx0KiBHZW5lcmF0ZSBub3RpZmljYXRpb25cblx0KiBAcGFyYW0ge0FycmF5fSBzb3VyY2Vcblx0KiBAcmV0dXJuIHtPYnNlcnZhYmxlfVxuXHQqL1xuXHRwdWJsaWMgZ2VuZXJhdGVOb3RpZmljYXRpb24oIHNvdXJjZTogQXJyYXk8YW55PiApIHtcblx0XHRfLmVhY2goIHNvdXJjZSwgKCBpdGVtOiBhbnkgKSA9PiB7XG5cdFx0XHRjb25zdCBvcHRpb25zOiBQdXNoTm90aWZpY2F0aW9uID0ge1xuXHRcdFx0XHRib2R5OiBpdGVtLmFsZXJ0Q29udGVudCxcblx0XHRcdFx0aWNvbjogdGhpcy5kZWZhdWx0QXBwTG9nbyxcblx0XHRcdH07XG5cblx0XHRcdHRoaXMuY3JlYXRlKCBpdGVtLnRpdGxlLCBvcHRpb25zICkuc3Vic2NyaWJlKCk7XG5cdFx0fSApO1xuXHR9XG5cbn1cblxuZXhwb3J0IGRlY2xhcmUgdHlwZSBQZXJtaXNzaW9uID0gJ2RlbmllZCcgfCAnZ3JhbnRlZCcgfCAnZGVmYXVsdCc7XG5leHBvcnQgaW50ZXJmYWNlIFB1c2hOb3RpZmljYXRpb24ge1xuXHRib2R5Pzogc3RyaW5nO1xuXHRpY29uPzogc3RyaW5nO1xuXHR0YWc/OiBzdHJpbmc7XG5cdGRhdGE/OiBhbnk7XG5cdHJlbm90aWZ5PzogYm9vbGVhbjtcblx0c2lsZW50PzogYm9vbGVhbjtcblx0c291bmQ/OiBzdHJpbmc7XG5cdG5vc2NyZWVuPzogYm9vbGVhbjtcblx0c3RpY2t5PzogYm9vbGVhbjtcblx0ZGlyPzogJ2F1dG8nIHwgJ2x0cicgfCAncnRsJztcblx0bGFuZz86IHN0cmluZztcblx0dmlicmF0ZT86IG51bWJlcltdO1xufVxuIl19