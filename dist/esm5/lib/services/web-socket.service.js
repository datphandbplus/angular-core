import * as tslib_1 from "tslib";
import { Injectable, Inject, Optional } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import io from 'socket.io-client';
import { StoreService } from './store.service';
import { DEFAULT_AUTHORIZED_KEY, DEFAULT_SERVER_WEBSOCKET_URL } from '../injection-token';
var WebSocketService = /** @class */ (function () {
    /**
    * @constructor
    * @param {string} defaultAuthorizedKey
    * @param {string} defaultServerWSURL
    * @param {StoreService} storeService
    */
    function WebSocketService(defaultAuthorizedKey, defaultServerWSURL, storeService) {
        this.defaultAuthorizedKey = defaultAuthorizedKey;
        this.defaultServerWSURL = defaultServerWSURL;
        this.storeService = storeService;
        this.webSocketChange = new ReplaySubject();
    }
    /**
    * Connect
    * @return {Observable}
    */
    WebSocketService.prototype.connect = function () {
        var _this = this;
        return new Observable(function (observer) {
            var currentUser = _this.storeService.get(_this.defaultAuthorizedKey);
            if (!currentUser)
                return;
            if (_this.socket) {
                _this.webSocketChange.next(_this);
                observer.next(_this.socket);
                return;
            }
            var channelId = currentUser.channel_id;
            var userId = currentUser.user_id;
            var userToken = encodeURIComponent(currentUser.user_token);
            _this.socket = io.connect(_this.defaultServerWSURL, { query: 'channel_id=' + channelId + '&user_id=' + userId + '&token=' + userToken });
            _this.socket.on('connect', function () {
                _this.webSocketChange.next(_this.socket);
                observer.next(_this.socket);
            });
            _this.socket.on('disconnect', function () {
                _this.socket = null;
                _this.webSocketChange.next(_this.socket);
                observer.next(_this.socket);
            });
        });
    };
    /**
    * Emit socket
    * @param {any} _emit
    * @param {any} data
    * @return {void}
    */
    WebSocketService.prototype.emit = function (_emit, data) {
        if (!this.socket)
            return;
        this.socket.emit(event, data);
    };
    /**
    * Socket listenner
    * @param {any} event
    * @return {Observable}
    */
    WebSocketService.prototype.on = function (event) {
        var _this = this;
        return new Observable(function (observer) {
            if (!_this.socket)
                return;
            _this.socket.on(event, function (data) {
                observer.next(data);
            });
        });
    };
    /**
    * Disconnect
    * @return {void}
    */
    WebSocketService.prototype.disconnect = function () {
        if (!this.socket)
            return;
        this.socket.disconnect();
    };
    /**
    * Get socket change
    * @return {ReplaySubject}
    */
    WebSocketService.prototype.getSocketChange = function () {
        return this.webSocketChange;
    };
    WebSocketService.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Optional }, { type: Inject, args: [DEFAULT_AUTHORIZED_KEY,] }] },
        { type: String, decorators: [{ type: Optional }, { type: Inject, args: [DEFAULT_SERVER_WEBSOCKET_URL,] }] },
        { type: StoreService }
    ]; };
    WebSocketService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__param(0, Optional()), tslib_1.__param(0, Inject(DEFAULT_AUTHORIZED_KEY)),
        tslib_1.__param(1, Optional()), tslib_1.__param(1, Inject(DEFAULT_SERVER_WEBSOCKET_URL)),
        tslib_1.__metadata("design:paramtypes", [String, String, StoreService])
    ], WebSocketService);
    return WebSocketService;
}());
export { WebSocketService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViLXNvY2tldC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1jb3JlLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3dlYi1zb2NrZXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxVQUFVLEVBQVksYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzNELE9BQU8sRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRWxDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUcxRjtJQUtDOzs7OztNQUtFO0lBQ0YsMEJBQ3dELG9CQUE0QixFQUN0QixrQkFBMEIsRUFDL0UsWUFBMEI7UUFGcUIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFRO1FBQ3RCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBUTtRQUMvRSxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQVozQixvQkFBZSxHQUF1QixJQUFJLGFBQWEsRUFBTyxDQUFDO0lBYXBFLENBQUM7SUFFSjs7O01BR0U7SUFDSyxrQ0FBTyxHQUFkO1FBQUEsaUJBZ0NDO1FBL0JBLE9BQU8sSUFBSSxVQUFVLENBQUUsVUFBRSxRQUF1QjtZQUMvQyxJQUFNLFdBQVcsR0FBUSxLQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBRSxLQUFJLENBQUMsb0JBQW9CLENBQUUsQ0FBQztZQUU1RSxJQUFLLENBQUMsV0FBVztnQkFBRyxPQUFPO1lBRTNCLElBQUssS0FBSSxDQUFDLE1BQU0sRUFBRztnQkFDbEIsS0FBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUUsS0FBSSxDQUFFLENBQUM7Z0JBQ2xDLFFBQVEsQ0FBQyxJQUFJLENBQUUsS0FBSSxDQUFDLE1BQU0sQ0FBRSxDQUFDO2dCQUM3QixPQUFPO2FBQ1A7WUFFRCxJQUFNLFNBQVMsR0FBVyxXQUFXLENBQUMsVUFBVSxDQUFDO1lBQ2pELElBQU0sTUFBTSxHQUFXLFdBQVcsQ0FBQyxPQUFPLENBQUM7WUFDM0MsSUFBTSxTQUFTLEdBQVcsa0JBQWtCLENBQUUsV0FBVyxDQUFDLFVBQVUsQ0FBRSxDQUFDO1lBRXZFLEtBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FDdkIsS0FBSSxDQUFDLGtCQUFrQixFQUN2QixFQUFFLEtBQUssRUFBRSxhQUFhLEdBQUcsU0FBUyxHQUFHLFdBQVcsR0FBRyxNQUFNLEdBQUcsU0FBUyxHQUFHLFNBQVMsRUFBRSxDQUNuRixDQUFDO1lBRUYsS0FBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUUsU0FBUyxFQUFFO2dCQUMxQixLQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBRSxLQUFJLENBQUMsTUFBTSxDQUFFLENBQUM7Z0JBQ3pDLFFBQVEsQ0FBQyxJQUFJLENBQUUsS0FBSSxDQUFDLE1BQU0sQ0FBRSxDQUFDO1lBQzlCLENBQUMsQ0FBRSxDQUFDO1lBRUosS0FBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUUsWUFBWSxFQUFFO2dCQUM3QixLQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDbkIsS0FBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUUsS0FBSSxDQUFDLE1BQU0sQ0FBRSxDQUFDO2dCQUN6QyxRQUFRLENBQUMsSUFBSSxDQUFFLEtBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQztZQUM5QixDQUFDLENBQUUsQ0FBQztRQUNMLENBQUMsQ0FBRSxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7OztNQUtFO0lBQ0ssK0JBQUksR0FBWCxVQUFhLEtBQVUsRUFBRSxJQUFTO1FBQ2pDLElBQUssQ0FBQyxJQUFJLENBQUMsTUFBTTtZQUFHLE9BQU87UUFFM0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUUsS0FBSyxFQUFFLElBQUksQ0FBRSxDQUFDO0lBQ2pDLENBQUM7SUFFRDs7OztNQUlFO0lBQ0ssNkJBQUUsR0FBVCxVQUFXLEtBQVU7UUFBckIsaUJBUUM7UUFQQSxPQUFPLElBQUksVUFBVSxDQUFFLFVBQUUsUUFBdUI7WUFDL0MsSUFBSyxDQUFDLEtBQUksQ0FBQyxNQUFNO2dCQUFHLE9BQU87WUFFM0IsS0FBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUUsS0FBSyxFQUFFLFVBQUUsSUFBUztnQkFDakMsUUFBUSxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUUsQ0FBQztZQUN2QixDQUFDLENBQUUsQ0FBQztRQUNMLENBQUMsQ0FBRSxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7TUFHRTtJQUNLLHFDQUFVLEdBQWpCO1FBQ0MsSUFBSyxDQUFDLElBQUksQ0FBQyxNQUFNO1lBQUcsT0FBTztRQUUzQixJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRDs7O01BR0U7SUFDSywwQ0FBZSxHQUF0QjtRQUNDLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUM3QixDQUFDOzs2Q0F0RkMsUUFBUSxZQUFJLE1BQU0sU0FBRSxzQkFBc0I7NkNBQzFDLFFBQVEsWUFBSSxNQUFNLFNBQUUsNEJBQTRCO2dCQUMzQixZQUFZOztJQWR2QixnQkFBZ0I7UUFENUIsVUFBVSxFQUFFO1FBYVYsbUJBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxtQkFBQSxNQUFNLENBQUUsc0JBQXNCLENBQUUsQ0FBQTtRQUM1QyxtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLE1BQU0sQ0FBRSw0QkFBNEIsQ0FBRSxDQUFBO2lFQUM3QixZQUFZO09BZHZCLGdCQUFnQixDQW9HNUI7SUFBRCx1QkFBQztDQUFBLEFBcEdELElBb0dDO1NBcEdZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIE9ic2VydmVyLCBSZXBsYXlTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgaW8gZnJvbSAnc29ja2V0LmlvLWNsaWVudCc7XG5cbmltcG9ydCB7IFN0b3JlU2VydmljZSB9IGZyb20gJy4vc3RvcmUuc2VydmljZSc7XG5pbXBvcnQgeyBERUZBVUxUX0FVVEhPUklaRURfS0VZLCBERUZBVUxUX1NFUlZFUl9XRUJTT0NLRVRfVVJMIH0gZnJvbSAnLi4vaW5qZWN0aW9uLXRva2VuJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFdlYlNvY2tldFNlcnZpY2Uge1xuXG5cdHByaXZhdGUgd2ViU29ja2V0Q2hhbmdlOiBSZXBsYXlTdWJqZWN0PGFueT4gPSBuZXcgUmVwbGF5U3ViamVjdDxhbnk+KCk7XG5cdHByaXZhdGUgc29ja2V0OiBhbnk7XG5cblx0LyoqXG5cdCogQGNvbnN0cnVjdG9yXG5cdCogQHBhcmFtIHtzdHJpbmd9IGRlZmF1bHRBdXRob3JpemVkS2V5XG5cdCogQHBhcmFtIHtzdHJpbmd9IGRlZmF1bHRTZXJ2ZXJXU1VSTFxuXHQqIEBwYXJhbSB7U3RvcmVTZXJ2aWNlfSBzdG9yZVNlcnZpY2Vcblx0Ki9cblx0Y29uc3RydWN0b3IoXG5cdFx0QE9wdGlvbmFsKCkgQEluamVjdCggREVGQVVMVF9BVVRIT1JJWkVEX0tFWSApIHJlYWRvbmx5IGRlZmF1bHRBdXRob3JpemVkS2V5OiBzdHJpbmcsXG5cdFx0QE9wdGlvbmFsKCkgQEluamVjdCggREVGQVVMVF9TRVJWRVJfV0VCU09DS0VUX1VSTCApIHJlYWRvbmx5IGRlZmF1bHRTZXJ2ZXJXU1VSTDogc3RyaW5nLFxuXHRcdHByaXZhdGUgc3RvcmVTZXJ2aWNlOiBTdG9yZVNlcnZpY2Vcblx0KSB7fVxuXG5cdC8qKlxuXHQqIENvbm5lY3Rcblx0KiBAcmV0dXJuIHtPYnNlcnZhYmxlfVxuXHQqL1xuXHRwdWJsaWMgY29ubmVjdCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuXHRcdHJldHVybiBuZXcgT2JzZXJ2YWJsZSggKCBvYnNlcnZlcjogT2JzZXJ2ZXI8YW55PiApID0+IHtcblx0XHRcdGNvbnN0IGN1cnJlbnRVc2VyOiBhbnkgPSB0aGlzLnN0b3JlU2VydmljZS5nZXQoIHRoaXMuZGVmYXVsdEF1dGhvcml6ZWRLZXkgKTtcblxuXHRcdFx0aWYgKCAhY3VycmVudFVzZXIgKSByZXR1cm47XG5cblx0XHRcdGlmICggdGhpcy5zb2NrZXQgKSB7XG5cdFx0XHRcdHRoaXMud2ViU29ja2V0Q2hhbmdlLm5leHQoIHRoaXMgKTtcblx0XHRcdFx0b2JzZXJ2ZXIubmV4dCggdGhpcy5zb2NrZXQgKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBjaGFubmVsSWQ6IHN0cmluZyA9IGN1cnJlbnRVc2VyLmNoYW5uZWxfaWQ7XG5cdFx0XHRjb25zdCB1c2VySWQ6IG51bWJlciA9IGN1cnJlbnRVc2VyLnVzZXJfaWQ7XG5cdFx0XHRjb25zdCB1c2VyVG9rZW46IHN0cmluZyA9IGVuY29kZVVSSUNvbXBvbmVudCggY3VycmVudFVzZXIudXNlcl90b2tlbiApO1xuXG5cdFx0XHR0aGlzLnNvY2tldCA9IGlvLmNvbm5lY3QoXG5cdFx0XHRcdHRoaXMuZGVmYXVsdFNlcnZlcldTVVJMLFxuXHRcdFx0XHR7IHF1ZXJ5OiAnY2hhbm5lbF9pZD0nICsgY2hhbm5lbElkICsgJyZ1c2VyX2lkPScgKyB1c2VySWQgKyAnJnRva2VuPScgKyB1c2VyVG9rZW4gfVxuXHRcdFx0KTtcblxuXHRcdFx0dGhpcy5zb2NrZXQub24oICdjb25uZWN0JywgKCkgPT4ge1xuXHRcdFx0XHR0aGlzLndlYlNvY2tldENoYW5nZS5uZXh0KCB0aGlzLnNvY2tldCApO1xuXHRcdFx0XHRvYnNlcnZlci5uZXh0KCB0aGlzLnNvY2tldCApO1xuXHRcdFx0fSApO1xuXG5cdFx0XHR0aGlzLnNvY2tldC5vbiggJ2Rpc2Nvbm5lY3QnLCAoKSA9PiB7XG5cdFx0XHRcdHRoaXMuc29ja2V0ID0gbnVsbDtcblx0XHRcdFx0dGhpcy53ZWJTb2NrZXRDaGFuZ2UubmV4dCggdGhpcy5zb2NrZXQgKTtcblx0XHRcdFx0b2JzZXJ2ZXIubmV4dCggdGhpcy5zb2NrZXQgKTtcblx0XHRcdH0gKTtcblx0XHR9ICk7XG5cdH1cblxuXHQvKipcblx0KiBFbWl0IHNvY2tldFxuXHQqIEBwYXJhbSB7YW55fSBfZW1pdFxuXHQqIEBwYXJhbSB7YW55fSBkYXRhXG5cdCogQHJldHVybiB7dm9pZH1cblx0Ki9cblx0cHVibGljIGVtaXQoIF9lbWl0OiBhbnksIGRhdGE6IGFueSApIHtcblx0XHRpZiAoICF0aGlzLnNvY2tldCApIHJldHVybjtcblxuXHRcdHRoaXMuc29ja2V0LmVtaXQoIGV2ZW50LCBkYXRhICk7XG5cdH1cblxuXHQvKipcblx0KiBTb2NrZXQgbGlzdGVubmVyXG5cdCogQHBhcmFtIHthbnl9IGV2ZW50XG5cdCogQHJldHVybiB7T2JzZXJ2YWJsZX1cblx0Ki9cblx0cHVibGljIG9uKCBldmVudDogYW55ICk6IE9ic2VydmFibGU8YW55PiB7XG5cdFx0cmV0dXJuIG5ldyBPYnNlcnZhYmxlKCAoIG9ic2VydmVyOiBPYnNlcnZlcjxhbnk+ICkgPT4ge1xuXHRcdFx0aWYgKCAhdGhpcy5zb2NrZXQgKSByZXR1cm47XG5cblx0XHRcdHRoaXMuc29ja2V0Lm9uKCBldmVudCwgKCBkYXRhOiBhbnkgKSA9PiB7XG5cdFx0XHRcdG9ic2VydmVyLm5leHQoIGRhdGEgKTtcblx0XHRcdH0gKTtcblx0XHR9ICk7XG5cdH1cblxuXHQvKipcblx0KiBEaXNjb25uZWN0XG5cdCogQHJldHVybiB7dm9pZH1cblx0Ki9cblx0cHVibGljIGRpc2Nvbm5lY3QoKSB7XG5cdFx0aWYgKCAhdGhpcy5zb2NrZXQgKSByZXR1cm47XG5cblx0XHR0aGlzLnNvY2tldC5kaXNjb25uZWN0KCk7XG5cdH1cblxuXHQvKipcblx0KiBHZXQgc29ja2V0IGNoYW5nZVxuXHQqIEByZXR1cm4ge1JlcGxheVN1YmplY3R9XG5cdCovXG5cdHB1YmxpYyBnZXRTb2NrZXRDaGFuZ2UoKTogUmVwbGF5U3ViamVjdDxhbnk+IHtcblx0XHRyZXR1cm4gdGhpcy53ZWJTb2NrZXRDaGFuZ2U7XG5cdH1cblxufVxuIl19