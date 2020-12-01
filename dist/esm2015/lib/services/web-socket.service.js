import * as tslib_1 from "tslib";
import { Injectable, Inject, Optional } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import io from 'socket.io-client';
import { DEFAULT_SERVER_WEBSOCKET_URL } from '../injection-token';
let WebSocketService = class WebSocketService {
    /**
    * @constructor
    * @param {string} defaultServerWSURL
    */
    constructor(defaultServerWSURL) {
        this.defaultServerWSURL = defaultServerWSURL;
        this.socketChange = new ReplaySubject();
    }
    /**
    * Connect
    * @param {any} options
    * @return {Observable}
    */
    connect(options = {}) {
        return new Observable((observer) => {
            this.socket = io.connect(this.defaultServerWSURL, options);
            this.socket.on('connect', () => {
                this.socketChange.next(this.socket);
                observer.next(this.socket);
            });
        });
    }
    /**
    * Emit socket
    * @param {any} event
    * @param {any} data
    * @return {void}
    */
    emit(event, data) {
        if (!this.socket)
            return;
        this.socket.emit(event, data);
    }
    /**
    * Socket listenner
    * @param {any} event
    * @return {Observable}
    */
    on(event) {
        return new Observable((observer) => {
            if (!this.socket)
                return;
            this.socket.on(event, (data) => observer.next(data));
        });
    }
    /**
    * Disconnect
    * @return {void}
    */
    disconnect() {
        if (!this.socket)
            return;
        this.socket.disconnect();
    }
    /**
    * Get socket change
    * @return {ReplaySubject}
    */
    getSocketChange() {
        return this.socketChange;
    }
};
WebSocketService.ctorParameters = () => [
    { type: String, decorators: [{ type: Optional }, { type: Inject, args: [DEFAULT_SERVER_WEBSOCKET_URL,] }] }
];
WebSocketService = tslib_1.__decorate([
    Injectable(),
    tslib_1.__param(0, Optional()), tslib_1.__param(0, Inject(DEFAULT_SERVER_WEBSOCKET_URL)),
    tslib_1.__metadata("design:paramtypes", [String])
], WebSocketService);
export { WebSocketService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViLXNvY2tldC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1jb3JlLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3dlYi1zb2NrZXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxVQUFVLEVBQVksYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzNELE9BQU8sRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRWxDLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBR2xFLElBQWEsZ0JBQWdCLEdBQTdCLE1BQWEsZ0JBQWdCO0lBSzVCOzs7TUFHRTtJQUNGLFlBQzhELGtCQUEwQjtRQUExQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQVE7UUFQaEYsaUJBQVksR0FBdUIsSUFBSSxhQUFhLEVBQU8sQ0FBQztJQVFqRSxDQUFDO0lBRUo7Ozs7TUFJRTtJQUNLLE9BQU8sQ0FBRSxVQUFlLEVBQUU7UUFDaEMsT0FBTyxJQUFJLFVBQVUsQ0FBRSxDQUFFLFFBQXVCLEVBQUcsRUFBRTtZQUNwRCxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUUsSUFBSSxDQUFDLGtCQUFrQixFQUFFLE9BQU8sQ0FBRSxDQUFDO1lBRTdELElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUU7Z0JBQy9CLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFFLElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQztnQkFDdEMsUUFBUSxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUM7WUFDOUIsQ0FBQyxDQUFFLENBQUM7UUFDTCxDQUFDLENBQUUsQ0FBQztJQUNMLENBQUM7SUFFRDs7Ozs7TUFLRTtJQUNLLElBQUksQ0FBRSxLQUFVLEVBQUUsSUFBUztRQUNqQyxJQUFLLENBQUMsSUFBSSxDQUFDLE1BQU07WUFBRyxPQUFPO1FBRTNCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFFLEtBQUssRUFBRSxJQUFJLENBQUUsQ0FBQztJQUNqQyxDQUFDO0lBRUQ7Ozs7TUFJRTtJQUNLLEVBQUUsQ0FBRSxLQUFVO1FBQ3BCLE9BQU8sSUFBSSxVQUFVLENBQUUsQ0FBRSxRQUF1QixFQUFHLEVBQUU7WUFDcEQsSUFBSyxDQUFDLElBQUksQ0FBQyxNQUFNO2dCQUFHLE9BQU87WUFFM0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUUsS0FBSyxFQUFFLENBQUUsSUFBUyxFQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFFLElBQUksQ0FBRSxDQUFFLENBQUM7UUFDakUsQ0FBQyxDQUFFLENBQUM7SUFDTCxDQUFDO0lBRUQ7OztNQUdFO0lBQ0ssVUFBVTtRQUNoQixJQUFLLENBQUMsSUFBSSxDQUFDLE1BQU07WUFBRyxPQUFPO1FBRTNCLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVEOzs7TUFHRTtJQUNLLGVBQWU7UUFDckIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzFCLENBQUM7Q0FFRCxDQUFBOzt5Q0E5REUsUUFBUSxZQUFJLE1BQU0sU0FBRSw0QkFBNEI7O0FBVnRDLGdCQUFnQjtJQUQ1QixVQUFVLEVBQUU7SUFXVixtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLE1BQU0sQ0FBRSw0QkFBNEIsQ0FBRSxDQUFBOztHQVZ4QyxnQkFBZ0IsQ0F3RTVCO1NBeEVZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIE9ic2VydmVyLCBSZXBsYXlTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgaW8gZnJvbSAnc29ja2V0LmlvLWNsaWVudCc7XG5cbmltcG9ydCB7IERFRkFVTFRfU0VSVkVSX1dFQlNPQ0tFVF9VUkwgfSBmcm9tICcuLi9pbmplY3Rpb24tdG9rZW4nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgV2ViU29ja2V0U2VydmljZSB7XG5cblx0cHJpdmF0ZSBzb2NrZXQ6IGFueTtcblx0cHJpdmF0ZSBzb2NrZXRDaGFuZ2U6IFJlcGxheVN1YmplY3Q8YW55PiA9IG5ldyBSZXBsYXlTdWJqZWN0PGFueT4oKTtcblxuXHQvKipcblx0KiBAY29uc3RydWN0b3Jcblx0KiBAcGFyYW0ge3N0cmluZ30gZGVmYXVsdFNlcnZlcldTVVJMXG5cdCovXG5cdGNvbnN0cnVjdG9yKFxuXHRcdEBPcHRpb25hbCgpIEBJbmplY3QoIERFRkFVTFRfU0VSVkVSX1dFQlNPQ0tFVF9VUkwgKSByZWFkb25seSBkZWZhdWx0U2VydmVyV1NVUkw6IHN0cmluZ1xuXHQpIHt9XG5cblx0LyoqXG5cdCogQ29ubmVjdFxuXHQqIEBwYXJhbSB7YW55fSBvcHRpb25zXG5cdCogQHJldHVybiB7T2JzZXJ2YWJsZX1cblx0Ki9cblx0cHVibGljIGNvbm5lY3QoIG9wdGlvbnM6IGFueSA9IHt9ICk6IE9ic2VydmFibGU8YW55PiB7XG5cdFx0cmV0dXJuIG5ldyBPYnNlcnZhYmxlKCAoIG9ic2VydmVyOiBPYnNlcnZlcjxhbnk+ICkgPT4ge1xuXHRcdFx0dGhpcy5zb2NrZXQgPSBpby5jb25uZWN0KCB0aGlzLmRlZmF1bHRTZXJ2ZXJXU1VSTCwgb3B0aW9ucyApO1xuXG5cdFx0XHR0aGlzLnNvY2tldC5vbiggJ2Nvbm5lY3QnLCAoKSA9PiB7XG5cdFx0XHRcdHRoaXMuc29ja2V0Q2hhbmdlLm5leHQoIHRoaXMuc29ja2V0ICk7XG5cdFx0XHRcdG9ic2VydmVyLm5leHQoIHRoaXMuc29ja2V0ICk7XG5cdFx0XHR9ICk7XG5cdFx0fSApO1xuXHR9XG5cblx0LyoqXG5cdCogRW1pdCBzb2NrZXRcblx0KiBAcGFyYW0ge2FueX0gZXZlbnRcblx0KiBAcGFyYW0ge2FueX0gZGF0YVxuXHQqIEByZXR1cm4ge3ZvaWR9XG5cdCovXG5cdHB1YmxpYyBlbWl0KCBldmVudDogYW55LCBkYXRhOiBhbnkgKSB7XG5cdFx0aWYgKCAhdGhpcy5zb2NrZXQgKSByZXR1cm47XG5cblx0XHR0aGlzLnNvY2tldC5lbWl0KCBldmVudCwgZGF0YSApO1xuXHR9XG5cblx0LyoqXG5cdCogU29ja2V0IGxpc3Rlbm5lclxuXHQqIEBwYXJhbSB7YW55fSBldmVudFxuXHQqIEByZXR1cm4ge09ic2VydmFibGV9XG5cdCovXG5cdHB1YmxpYyBvbiggZXZlbnQ6IGFueSApOiBPYnNlcnZhYmxlPGFueT4ge1xuXHRcdHJldHVybiBuZXcgT2JzZXJ2YWJsZSggKCBvYnNlcnZlcjogT2JzZXJ2ZXI8YW55PiApID0+IHtcblx0XHRcdGlmICggIXRoaXMuc29ja2V0ICkgcmV0dXJuO1xuXG5cdFx0XHR0aGlzLnNvY2tldC5vbiggZXZlbnQsICggZGF0YTogYW55ICkgPT4gb2JzZXJ2ZXIubmV4dCggZGF0YSApICk7XG5cdFx0fSApO1xuXHR9XG5cblx0LyoqXG5cdCogRGlzY29ubmVjdFxuXHQqIEByZXR1cm4ge3ZvaWR9XG5cdCovXG5cdHB1YmxpYyBkaXNjb25uZWN0KCkge1xuXHRcdGlmICggIXRoaXMuc29ja2V0ICkgcmV0dXJuO1xuXG5cdFx0dGhpcy5zb2NrZXQuZGlzY29ubmVjdCgpO1xuXHR9XG5cblx0LyoqXG5cdCogR2V0IHNvY2tldCBjaGFuZ2Vcblx0KiBAcmV0dXJuIHtSZXBsYXlTdWJqZWN0fVxuXHQqL1xuXHRwdWJsaWMgZ2V0U29ja2V0Q2hhbmdlKCk6IFJlcGxheVN1YmplY3Q8YW55PiB7XG5cdFx0cmV0dXJuIHRoaXMuc29ja2V0Q2hhbmdlO1xuXHR9XG5cbn1cbiJdfQ==