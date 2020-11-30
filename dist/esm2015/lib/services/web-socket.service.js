import * as tslib_1 from "tslib";
import { Injectable, Inject, Optional } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import io from 'socket.io-client';
import { StoreService } from './store.service';
import { DEFAULT_AUTHORIZED_KEY, DEFAULT_SERVER_WEBSOCKET_URL } from '../injection-token';
let WebSocketService = class WebSocketService {
    /**
    * @constructor
    * @param {string} defaultAuthorizedKey
    * @param {string} defaultServerWSURL
    * @param {StoreService} storeService
    */
    constructor(defaultAuthorizedKey, defaultServerWSURL, storeService) {
        this.defaultAuthorizedKey = defaultAuthorizedKey;
        this.defaultServerWSURL = defaultServerWSURL;
        this.storeService = storeService;
        this.webSocketChange = new ReplaySubject();
    }
    /**
    * Connect
    * @return {Observable}
    */
    connect() {
        return new Observable((observer) => {
            const currentUser = this.storeService.get(this.defaultAuthorizedKey);
            if (!currentUser)
                return;
            if (this.socket) {
                this.webSocketChange.next(this);
                observer.next(this.socket);
                return;
            }
            const channelId = currentUser.channel_id;
            const userId = currentUser.user_id;
            const userToken = encodeURIComponent(currentUser.user_token);
            this.socket = io.connect(this.defaultServerWSURL, { query: 'channel_id=' + channelId + '&user_id=' + userId + '&token=' + userToken });
            this.socket.on('connect', () => {
                this.webSocketChange.next(this.socket);
                observer.next(this.socket);
            });
            this.socket.on('disconnect', () => {
                this.socket = null;
                this.webSocketChange.next(this.socket);
                observer.next(this.socket);
            });
        });
    }
    /**
    * Emit socket
    * @param {any} _emit
    * @param {any} data
    * @return {void}
    */
    emit(_emit, data) {
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
            this.socket.on(event, (data) => {
                observer.next(data);
            });
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
        return this.webSocketChange;
    }
};
WebSocketService.ctorParameters = () => [
    { type: String, decorators: [{ type: Optional }, { type: Inject, args: [DEFAULT_AUTHORIZED_KEY,] }] },
    { type: String, decorators: [{ type: Optional }, { type: Inject, args: [DEFAULT_SERVER_WEBSOCKET_URL,] }] },
    { type: StoreService }
];
WebSocketService = tslib_1.__decorate([
    Injectable(),
    tslib_1.__param(0, Optional()), tslib_1.__param(0, Inject(DEFAULT_AUTHORIZED_KEY)),
    tslib_1.__param(1, Optional()), tslib_1.__param(1, Inject(DEFAULT_SERVER_WEBSOCKET_URL)),
    tslib_1.__metadata("design:paramtypes", [String, String, StoreService])
], WebSocketService);
export { WebSocketService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViLXNvY2tldC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1jb3JlLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3dlYi1zb2NrZXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxVQUFVLEVBQVksYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzNELE9BQU8sRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRWxDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUcxRixJQUFhLGdCQUFnQixHQUE3QixNQUFhLGdCQUFnQjtJQUs1Qjs7Ozs7TUFLRTtJQUNGLFlBQ3dELG9CQUE0QixFQUN0QixrQkFBMEIsRUFDL0UsWUFBMEI7UUFGcUIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFRO1FBQ3RCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBUTtRQUMvRSxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQVozQixvQkFBZSxHQUF1QixJQUFJLGFBQWEsRUFBTyxDQUFDO0lBYXBFLENBQUM7SUFFSjs7O01BR0U7SUFDSyxPQUFPO1FBQ2IsT0FBTyxJQUFJLFVBQVUsQ0FBRSxDQUFFLFFBQXVCLEVBQUcsRUFBRTtZQUNwRCxNQUFNLFdBQVcsR0FBUSxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBRSxJQUFJLENBQUMsb0JBQW9CLENBQUUsQ0FBQztZQUU1RSxJQUFLLENBQUMsV0FBVztnQkFBRyxPQUFPO1lBRTNCLElBQUssSUFBSSxDQUFDLE1BQU0sRUFBRztnQkFDbEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFFLENBQUM7Z0JBQ2xDLFFBQVEsQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBRSxDQUFDO2dCQUM3QixPQUFPO2FBQ1A7WUFFRCxNQUFNLFNBQVMsR0FBVyxXQUFXLENBQUMsVUFBVSxDQUFDO1lBQ2pELE1BQU0sTUFBTSxHQUFXLFdBQVcsQ0FBQyxPQUFPLENBQUM7WUFDM0MsTUFBTSxTQUFTLEdBQVcsa0JBQWtCLENBQUUsV0FBVyxDQUFDLFVBQVUsQ0FBRSxDQUFDO1lBRXZFLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FDdkIsSUFBSSxDQUFDLGtCQUFrQixFQUN2QixFQUFFLEtBQUssRUFBRSxhQUFhLEdBQUcsU0FBUyxHQUFHLFdBQVcsR0FBRyxNQUFNLEdBQUcsU0FBUyxHQUFHLFNBQVMsRUFBRSxDQUNuRixDQUFDO1lBRUYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRTtnQkFDL0IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBRSxDQUFDO2dCQUN6QyxRQUFRLENBQUMsSUFBSSxDQUFFLElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQztZQUM5QixDQUFDLENBQUUsQ0FBQztZQUVKLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFFLFlBQVksRUFBRSxHQUFHLEVBQUU7Z0JBQ2xDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUNuQixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUM7Z0JBQ3pDLFFBQVEsQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBRSxDQUFDO1lBQzlCLENBQUMsQ0FBRSxDQUFDO1FBQ0wsQ0FBQyxDQUFFLENBQUM7SUFDTCxDQUFDO0lBRUQ7Ozs7O01BS0U7SUFDSyxJQUFJLENBQUUsS0FBVSxFQUFFLElBQVM7UUFDakMsSUFBSyxDQUFDLElBQUksQ0FBQyxNQUFNO1lBQUcsT0FBTztRQUUzQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBRSxLQUFLLEVBQUUsSUFBSSxDQUFFLENBQUM7SUFDakMsQ0FBQztJQUVEOzs7O01BSUU7SUFDSyxFQUFFLENBQUUsS0FBVTtRQUNwQixPQUFPLElBQUksVUFBVSxDQUFFLENBQUUsUUFBdUIsRUFBRyxFQUFFO1lBQ3BELElBQUssQ0FBQyxJQUFJLENBQUMsTUFBTTtnQkFBRyxPQUFPO1lBRTNCLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFFLEtBQUssRUFBRSxDQUFFLElBQVMsRUFBRyxFQUFFO2dCQUN0QyxRQUFRLENBQUMsSUFBSSxDQUFFLElBQUksQ0FBRSxDQUFDO1lBQ3ZCLENBQUMsQ0FBRSxDQUFDO1FBQ0wsQ0FBQyxDQUFFLENBQUM7SUFDTCxDQUFDO0lBRUQ7OztNQUdFO0lBQ0ssVUFBVTtRQUNoQixJQUFLLENBQUMsSUFBSSxDQUFDLE1BQU07WUFBRyxPQUFPO1FBRTNCLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVEOzs7TUFHRTtJQUNLLGVBQWU7UUFDckIsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQzdCLENBQUM7Q0FFRCxDQUFBOzt5Q0F4RkUsUUFBUSxZQUFJLE1BQU0sU0FBRSxzQkFBc0I7eUNBQzFDLFFBQVEsWUFBSSxNQUFNLFNBQUUsNEJBQTRCO1lBQzNCLFlBQVk7O0FBZHZCLGdCQUFnQjtJQUQ1QixVQUFVLEVBQUU7SUFhVixtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLE1BQU0sQ0FBRSxzQkFBc0IsQ0FBRSxDQUFBO0lBQzVDLG1CQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsbUJBQUEsTUFBTSxDQUFFLDRCQUE0QixDQUFFLENBQUE7NkRBQzdCLFlBQVk7R0FkdkIsZ0JBQWdCLENBb0c1QjtTQXBHWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBPYnNlcnZlciwgUmVwbGF5U3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IGlvIGZyb20gJ3NvY2tldC5pby1jbGllbnQnO1xuXG5pbXBvcnQgeyBTdG9yZVNlcnZpY2UgfSBmcm9tICcuL3N0b3JlLnNlcnZpY2UnO1xuaW1wb3J0IHsgREVGQVVMVF9BVVRIT1JJWkVEX0tFWSwgREVGQVVMVF9TRVJWRVJfV0VCU09DS0VUX1VSTCB9IGZyb20gJy4uL2luamVjdGlvbi10b2tlbic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBXZWJTb2NrZXRTZXJ2aWNlIHtcblxuXHRwcml2YXRlIHdlYlNvY2tldENoYW5nZTogUmVwbGF5U3ViamVjdDxhbnk+ID0gbmV3IFJlcGxheVN1YmplY3Q8YW55PigpO1xuXHRwcml2YXRlIHNvY2tldDogYW55O1xuXG5cdC8qKlxuXHQqIEBjb25zdHJ1Y3RvclxuXHQqIEBwYXJhbSB7c3RyaW5nfSBkZWZhdWx0QXV0aG9yaXplZEtleVxuXHQqIEBwYXJhbSB7c3RyaW5nfSBkZWZhdWx0U2VydmVyV1NVUkxcblx0KiBAcGFyYW0ge1N0b3JlU2VydmljZX0gc3RvcmVTZXJ2aWNlXG5cdCovXG5cdGNvbnN0cnVjdG9yKFxuXHRcdEBPcHRpb25hbCgpIEBJbmplY3QoIERFRkFVTFRfQVVUSE9SSVpFRF9LRVkgKSByZWFkb25seSBkZWZhdWx0QXV0aG9yaXplZEtleTogc3RyaW5nLFxuXHRcdEBPcHRpb25hbCgpIEBJbmplY3QoIERFRkFVTFRfU0VSVkVSX1dFQlNPQ0tFVF9VUkwgKSByZWFkb25seSBkZWZhdWx0U2VydmVyV1NVUkw6IHN0cmluZyxcblx0XHRwcml2YXRlIHN0b3JlU2VydmljZTogU3RvcmVTZXJ2aWNlXG5cdCkge31cblxuXHQvKipcblx0KiBDb25uZWN0XG5cdCogQHJldHVybiB7T2JzZXJ2YWJsZX1cblx0Ki9cblx0cHVibGljIGNvbm5lY3QoKTogT2JzZXJ2YWJsZTxhbnk+IHtcblx0XHRyZXR1cm4gbmV3IE9ic2VydmFibGUoICggb2JzZXJ2ZXI6IE9ic2VydmVyPGFueT4gKSA9PiB7XG5cdFx0XHRjb25zdCBjdXJyZW50VXNlcjogYW55ID0gdGhpcy5zdG9yZVNlcnZpY2UuZ2V0KCB0aGlzLmRlZmF1bHRBdXRob3JpemVkS2V5ICk7XG5cblx0XHRcdGlmICggIWN1cnJlbnRVc2VyICkgcmV0dXJuO1xuXG5cdFx0XHRpZiAoIHRoaXMuc29ja2V0ICkge1xuXHRcdFx0XHR0aGlzLndlYlNvY2tldENoYW5nZS5uZXh0KCB0aGlzICk7XG5cdFx0XHRcdG9ic2VydmVyLm5leHQoIHRoaXMuc29ja2V0ICk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgY2hhbm5lbElkOiBzdHJpbmcgPSBjdXJyZW50VXNlci5jaGFubmVsX2lkO1xuXHRcdFx0Y29uc3QgdXNlcklkOiBudW1iZXIgPSBjdXJyZW50VXNlci51c2VyX2lkO1xuXHRcdFx0Y29uc3QgdXNlclRva2VuOiBzdHJpbmcgPSBlbmNvZGVVUklDb21wb25lbnQoIGN1cnJlbnRVc2VyLnVzZXJfdG9rZW4gKTtcblxuXHRcdFx0dGhpcy5zb2NrZXQgPSBpby5jb25uZWN0KFxuXHRcdFx0XHR0aGlzLmRlZmF1bHRTZXJ2ZXJXU1VSTCxcblx0XHRcdFx0eyBxdWVyeTogJ2NoYW5uZWxfaWQ9JyArIGNoYW5uZWxJZCArICcmdXNlcl9pZD0nICsgdXNlcklkICsgJyZ0b2tlbj0nICsgdXNlclRva2VuIH1cblx0XHRcdCk7XG5cblx0XHRcdHRoaXMuc29ja2V0Lm9uKCAnY29ubmVjdCcsICgpID0+IHtcblx0XHRcdFx0dGhpcy53ZWJTb2NrZXRDaGFuZ2UubmV4dCggdGhpcy5zb2NrZXQgKTtcblx0XHRcdFx0b2JzZXJ2ZXIubmV4dCggdGhpcy5zb2NrZXQgKTtcblx0XHRcdH0gKTtcblxuXHRcdFx0dGhpcy5zb2NrZXQub24oICdkaXNjb25uZWN0JywgKCkgPT4ge1xuXHRcdFx0XHR0aGlzLnNvY2tldCA9IG51bGw7XG5cdFx0XHRcdHRoaXMud2ViU29ja2V0Q2hhbmdlLm5leHQoIHRoaXMuc29ja2V0ICk7XG5cdFx0XHRcdG9ic2VydmVyLm5leHQoIHRoaXMuc29ja2V0ICk7XG5cdFx0XHR9ICk7XG5cdFx0fSApO1xuXHR9XG5cblx0LyoqXG5cdCogRW1pdCBzb2NrZXRcblx0KiBAcGFyYW0ge2FueX0gX2VtaXRcblx0KiBAcGFyYW0ge2FueX0gZGF0YVxuXHQqIEByZXR1cm4ge3ZvaWR9XG5cdCovXG5cdHB1YmxpYyBlbWl0KCBfZW1pdDogYW55LCBkYXRhOiBhbnkgKSB7XG5cdFx0aWYgKCAhdGhpcy5zb2NrZXQgKSByZXR1cm47XG5cblx0XHR0aGlzLnNvY2tldC5lbWl0KCBldmVudCwgZGF0YSApO1xuXHR9XG5cblx0LyoqXG5cdCogU29ja2V0IGxpc3Rlbm5lclxuXHQqIEBwYXJhbSB7YW55fSBldmVudFxuXHQqIEByZXR1cm4ge09ic2VydmFibGV9XG5cdCovXG5cdHB1YmxpYyBvbiggZXZlbnQ6IGFueSApOiBPYnNlcnZhYmxlPGFueT4ge1xuXHRcdHJldHVybiBuZXcgT2JzZXJ2YWJsZSggKCBvYnNlcnZlcjogT2JzZXJ2ZXI8YW55PiApID0+IHtcblx0XHRcdGlmICggIXRoaXMuc29ja2V0ICkgcmV0dXJuO1xuXG5cdFx0XHR0aGlzLnNvY2tldC5vbiggZXZlbnQsICggZGF0YTogYW55ICkgPT4ge1xuXHRcdFx0XHRvYnNlcnZlci5uZXh0KCBkYXRhICk7XG5cdFx0XHR9ICk7XG5cdFx0fSApO1xuXHR9XG5cblx0LyoqXG5cdCogRGlzY29ubmVjdFxuXHQqIEByZXR1cm4ge3ZvaWR9XG5cdCovXG5cdHB1YmxpYyBkaXNjb25uZWN0KCkge1xuXHRcdGlmICggIXRoaXMuc29ja2V0ICkgcmV0dXJuO1xuXG5cdFx0dGhpcy5zb2NrZXQuZGlzY29ubmVjdCgpO1xuXHR9XG5cblx0LyoqXG5cdCogR2V0IHNvY2tldCBjaGFuZ2Vcblx0KiBAcmV0dXJuIHtSZXBsYXlTdWJqZWN0fVxuXHQqL1xuXHRwdWJsaWMgZ2V0U29ja2V0Q2hhbmdlKCk6IFJlcGxheVN1YmplY3Q8YW55PiB7XG5cdFx0cmV0dXJuIHRoaXMud2ViU29ja2V0Q2hhbmdlO1xuXHR9XG5cbn1cbiJdfQ==