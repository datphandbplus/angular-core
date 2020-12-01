import * as tslib_1 from "tslib";
import { Injectable, Inject, Optional } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import io from 'socket.io-client';
import { DEFAULT_SERVER_WEBSOCKET_URL } from '../injection-token';
var WebSocketService = /** @class */ (function () {
    /**
    * @constructor
    * @param {string} defaultServerWSURL
    */
    function WebSocketService(defaultServerWSURL) {
        this.defaultServerWSURL = defaultServerWSURL;
        this.socketChange = new ReplaySubject();
    }
    /**
    * Connect
    * @param {any} options
    * @return {Observable}
    */
    WebSocketService.prototype.connect = function (options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        return new Observable(function (observer) {
            _this.socket = io.connect(_this.defaultServerWSURL, options);
            _this.socket.on('connect', function () {
                _this.socketChange.next(_this.socket);
                observer.next(_this.socket);
            });
        });
    };
    /**
    * Emit socket
    * @param {any} event
    * @param {any} data
    * @return {void}
    */
    WebSocketService.prototype.emit = function (event, data) {
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
            _this.socket.on(event, function (data) { return observer.next(data); });
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
        return this.socketChange;
    };
    WebSocketService.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Optional }, { type: Inject, args: [DEFAULT_SERVER_WEBSOCKET_URL,] }] }
    ]; };
    WebSocketService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__param(0, Optional()), tslib_1.__param(0, Inject(DEFAULT_SERVER_WEBSOCKET_URL)),
        tslib_1.__metadata("design:paramtypes", [String])
    ], WebSocketService);
    return WebSocketService;
}());
export { WebSocketService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViLXNvY2tldC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1jb3JlLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3dlYi1zb2NrZXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxVQUFVLEVBQVksYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzNELE9BQU8sRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRWxDLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBR2xFO0lBS0M7OztNQUdFO0lBQ0YsMEJBQzhELGtCQUEwQjtRQUExQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQVE7UUFQaEYsaUJBQVksR0FBdUIsSUFBSSxhQUFhLEVBQU8sQ0FBQztJQVFqRSxDQUFDO0lBRUo7Ozs7TUFJRTtJQUNLLGtDQUFPLEdBQWQsVUFBZ0IsT0FBaUI7UUFBakMsaUJBU0M7UUFUZSx3QkFBQSxFQUFBLFlBQWlCO1FBQ2hDLE9BQU8sSUFBSSxVQUFVLENBQUUsVUFBRSxRQUF1QjtZQUMvQyxLQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUUsS0FBSSxDQUFDLGtCQUFrQixFQUFFLE9BQU8sQ0FBRSxDQUFDO1lBRTdELEtBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFFLFNBQVMsRUFBRTtnQkFDMUIsS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUUsS0FBSSxDQUFDLE1BQU0sQ0FBRSxDQUFDO2dCQUN0QyxRQUFRLENBQUMsSUFBSSxDQUFFLEtBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQztZQUM5QixDQUFDLENBQUUsQ0FBQztRQUNMLENBQUMsQ0FBRSxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7OztNQUtFO0lBQ0ssK0JBQUksR0FBWCxVQUFhLEtBQVUsRUFBRSxJQUFTO1FBQ2pDLElBQUssQ0FBQyxJQUFJLENBQUMsTUFBTTtZQUFHLE9BQU87UUFFM0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUUsS0FBSyxFQUFFLElBQUksQ0FBRSxDQUFDO0lBQ2pDLENBQUM7SUFFRDs7OztNQUlFO0lBQ0ssNkJBQUUsR0FBVCxVQUFXLEtBQVU7UUFBckIsaUJBTUM7UUFMQSxPQUFPLElBQUksVUFBVSxDQUFFLFVBQUUsUUFBdUI7WUFDL0MsSUFBSyxDQUFDLEtBQUksQ0FBQyxNQUFNO2dCQUFHLE9BQU87WUFFM0IsS0FBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUUsS0FBSyxFQUFFLFVBQUUsSUFBUyxJQUFNLE9BQUEsUUFBUSxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUUsRUFBckIsQ0FBcUIsQ0FBRSxDQUFDO1FBQ2pFLENBQUMsQ0FBRSxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7TUFHRTtJQUNLLHFDQUFVLEdBQWpCO1FBQ0MsSUFBSyxDQUFDLElBQUksQ0FBQyxNQUFNO1lBQUcsT0FBTztRQUUzQixJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRDs7O01BR0U7SUFDSywwQ0FBZSxHQUF0QjtRQUNDLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMxQixDQUFDOzs2Q0E1REMsUUFBUSxZQUFJLE1BQU0sU0FBRSw0QkFBNEI7O0lBVnRDLGdCQUFnQjtRQUQ1QixVQUFVLEVBQUU7UUFXVixtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLE1BQU0sQ0FBRSw0QkFBNEIsQ0FBRSxDQUFBOztPQVZ4QyxnQkFBZ0IsQ0F3RTVCO0lBQUQsdUJBQUM7Q0FBQSxBQXhFRCxJQXdFQztTQXhFWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBPYnNlcnZlciwgUmVwbGF5U3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IGlvIGZyb20gJ3NvY2tldC5pby1jbGllbnQnO1xuXG5pbXBvcnQgeyBERUZBVUxUX1NFUlZFUl9XRUJTT0NLRVRfVVJMIH0gZnJvbSAnLi4vaW5qZWN0aW9uLXRva2VuJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFdlYlNvY2tldFNlcnZpY2Uge1xuXG5cdHByaXZhdGUgc29ja2V0OiBhbnk7XG5cdHByaXZhdGUgc29ja2V0Q2hhbmdlOiBSZXBsYXlTdWJqZWN0PGFueT4gPSBuZXcgUmVwbGF5U3ViamVjdDxhbnk+KCk7XG5cblx0LyoqXG5cdCogQGNvbnN0cnVjdG9yXG5cdCogQHBhcmFtIHtzdHJpbmd9IGRlZmF1bHRTZXJ2ZXJXU1VSTFxuXHQqL1xuXHRjb25zdHJ1Y3Rvcihcblx0XHRAT3B0aW9uYWwoKSBASW5qZWN0KCBERUZBVUxUX1NFUlZFUl9XRUJTT0NLRVRfVVJMICkgcmVhZG9ubHkgZGVmYXVsdFNlcnZlcldTVVJMOiBzdHJpbmdcblx0KSB7fVxuXG5cdC8qKlxuXHQqIENvbm5lY3Rcblx0KiBAcGFyYW0ge2FueX0gb3B0aW9uc1xuXHQqIEByZXR1cm4ge09ic2VydmFibGV9XG5cdCovXG5cdHB1YmxpYyBjb25uZWN0KCBvcHRpb25zOiBhbnkgPSB7fSApOiBPYnNlcnZhYmxlPGFueT4ge1xuXHRcdHJldHVybiBuZXcgT2JzZXJ2YWJsZSggKCBvYnNlcnZlcjogT2JzZXJ2ZXI8YW55PiApID0+IHtcblx0XHRcdHRoaXMuc29ja2V0ID0gaW8uY29ubmVjdCggdGhpcy5kZWZhdWx0U2VydmVyV1NVUkwsIG9wdGlvbnMgKTtcblxuXHRcdFx0dGhpcy5zb2NrZXQub24oICdjb25uZWN0JywgKCkgPT4ge1xuXHRcdFx0XHR0aGlzLnNvY2tldENoYW5nZS5uZXh0KCB0aGlzLnNvY2tldCApO1xuXHRcdFx0XHRvYnNlcnZlci5uZXh0KCB0aGlzLnNvY2tldCApO1xuXHRcdFx0fSApO1xuXHRcdH0gKTtcblx0fVxuXG5cdC8qKlxuXHQqIEVtaXQgc29ja2V0XG5cdCogQHBhcmFtIHthbnl9IGV2ZW50XG5cdCogQHBhcmFtIHthbnl9IGRhdGFcblx0KiBAcmV0dXJuIHt2b2lkfVxuXHQqL1xuXHRwdWJsaWMgZW1pdCggZXZlbnQ6IGFueSwgZGF0YTogYW55ICkge1xuXHRcdGlmICggIXRoaXMuc29ja2V0ICkgcmV0dXJuO1xuXG5cdFx0dGhpcy5zb2NrZXQuZW1pdCggZXZlbnQsIGRhdGEgKTtcblx0fVxuXG5cdC8qKlxuXHQqIFNvY2tldCBsaXN0ZW5uZXJcblx0KiBAcGFyYW0ge2FueX0gZXZlbnRcblx0KiBAcmV0dXJuIHtPYnNlcnZhYmxlfVxuXHQqL1xuXHRwdWJsaWMgb24oIGV2ZW50OiBhbnkgKTogT2JzZXJ2YWJsZTxhbnk+IHtcblx0XHRyZXR1cm4gbmV3IE9ic2VydmFibGUoICggb2JzZXJ2ZXI6IE9ic2VydmVyPGFueT4gKSA9PiB7XG5cdFx0XHRpZiAoICF0aGlzLnNvY2tldCApIHJldHVybjtcblxuXHRcdFx0dGhpcy5zb2NrZXQub24oIGV2ZW50LCAoIGRhdGE6IGFueSApID0+IG9ic2VydmVyLm5leHQoIGRhdGEgKSApO1xuXHRcdH0gKTtcblx0fVxuXG5cdC8qKlxuXHQqIERpc2Nvbm5lY3Rcblx0KiBAcmV0dXJuIHt2b2lkfVxuXHQqL1xuXHRwdWJsaWMgZGlzY29ubmVjdCgpIHtcblx0XHRpZiAoICF0aGlzLnNvY2tldCApIHJldHVybjtcblxuXHRcdHRoaXMuc29ja2V0LmRpc2Nvbm5lY3QoKTtcblx0fVxuXG5cdC8qKlxuXHQqIEdldCBzb2NrZXQgY2hhbmdlXG5cdCogQHJldHVybiB7UmVwbGF5U3ViamVjdH1cblx0Ki9cblx0cHVibGljIGdldFNvY2tldENoYW5nZSgpOiBSZXBsYXlTdWJqZWN0PGFueT4ge1xuXHRcdHJldHVybiB0aGlzLnNvY2tldENoYW5nZTtcblx0fVxuXG59XG4iXX0=