import * as tslib_1 from "tslib";
import { Directive, ElementRef, AfterViewInit, EventEmitter, Input, Output } from '@angular/core';
var DetectScrollDirective = /** @class */ (function () {
    /**
    * @constructor
    * @param {ElementRef} elementRef
    */
    function DetectScrollDirective(elementRef) {
        this.elementRef = elementRef;
        this.delay = 0;
        this.offset = 0;
        this.onScroll = new EventEmitter();
        this.onReachStart = new EventEmitter();
        this.onReachEnd = new EventEmitter();
    }
    /**
    * @constructor
    */
    DetectScrollDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        var element = this.elementRef.nativeElement;
        // Init
        this.detectScroll(element);
        // Scrolling
        element.addEventListener('scroll', function () { return _this.detectScroll(element); });
    };
    /**
    * Detect scroll
    * @private
    * @param {any} element
    * @return {void}
    */
    DetectScrollDirective.prototype.detectScroll = function (element) {
        var _this = this;
        element.scrollHeight !== element.clientHeight && setTimeout(function () {
            // Scrolling
            _this.onScroll.emit(event);
            // In case scroll reach start
            element.scrollTop <= _this.offset && _this.onReachStart.emit(event);
            // In case scroll reach end
            element.scrollTop >= (element.scrollHeight - element.clientHeight - _this.offset)
                && _this.onReachEnd.emit(event);
        }, this.delay);
    };
    DetectScrollDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], DetectScrollDirective.prototype, "delay", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], DetectScrollDirective.prototype, "offset", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DetectScrollDirective.prototype, "onScroll", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DetectScrollDirective.prototype, "onReachStart", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DetectScrollDirective.prototype, "onReachEnd", void 0);
    DetectScrollDirective = tslib_1.__decorate([
        Directive({
            selector: '[detectScroll]',
        }),
        tslib_1.__metadata("design:paramtypes", [ElementRef])
    ], DetectScrollDirective);
    return DetectScrollDirective;
}());
export { DetectScrollDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0ZWN0LXNjcm9sbC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNvcmUvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9kZXRlY3Qtc2Nyb2xsLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNOLFNBQVMsRUFBRSxVQUFVLEVBQUUsYUFBYSxFQUNwQyxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFDM0IsTUFBTSxlQUFlLENBQUM7QUFLdkI7SUFTQzs7O01BR0U7SUFDRiwrQkFBcUIsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQVgzQixVQUFLLEdBQVcsQ0FBQyxDQUFDO1FBQ2xCLFdBQU0sR0FBVyxDQUFDLENBQUM7UUFFbEIsYUFBUSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3RELGlCQUFZLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFDMUQsZUFBVSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO0lBTTFCLENBQUM7SUFFaEQ7O01BRUU7SUFDSywrQ0FBZSxHQUF0QjtRQUFBLGlCQVFDO1FBUEEsSUFBTSxPQUFPLEdBQVEsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7UUFFbkQsT0FBTztRQUNQLElBQUksQ0FBQyxZQUFZLENBQUUsT0FBTyxDQUFFLENBQUM7UUFFN0IsWUFBWTtRQUNaLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBRSxRQUFRLEVBQUUsY0FBTSxPQUFBLEtBQUksQ0FBQyxZQUFZLENBQUUsT0FBTyxDQUFFLEVBQTVCLENBQTRCLENBQUUsQ0FBQztJQUMxRSxDQUFDO0lBRUQ7Ozs7O01BS0U7SUFDTSw0Q0FBWSxHQUFwQixVQUFzQixPQUFZO1FBQWxDLGlCQVlDO1FBWEEsT0FBTyxDQUFDLFlBQVksS0FBSyxPQUFPLENBQUMsWUFBWSxJQUFJLFVBQVUsQ0FBRTtZQUM1RCxZQUFZO1lBQ1osS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUUsS0FBSyxDQUFFLENBQUM7WUFFNUIsNkJBQTZCO1lBQzdCLE9BQU8sQ0FBQyxTQUFTLElBQUksS0FBSSxDQUFDLE1BQU0sSUFBSSxLQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBRSxLQUFLLENBQUUsQ0FBQztZQUVwRSwyQkFBMkI7WUFDM0IsT0FBTyxDQUFDLFNBQVMsSUFBSSxDQUFFLE9BQU8sQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDLFlBQVksR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFFO21CQUM5RSxLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBRSxLQUFLLENBQUUsQ0FBQztRQUNuQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBRSxDQUFDO0lBQ2pCLENBQUM7O2dCQWpDZ0MsVUFBVTs7SUFYbEM7UUFBUixLQUFLLEVBQUU7O3dEQUEwQjtJQUN6QjtRQUFSLEtBQUssRUFBRTs7eURBQTJCO0lBRXpCO1FBQVQsTUFBTSxFQUFFOzBDQUFrQixZQUFZOzJEQUFnQztJQUM3RDtRQUFULE1BQU0sRUFBRTswQ0FBc0IsWUFBWTsrREFBZ0M7SUFDakU7UUFBVCxNQUFNLEVBQUU7MENBQW9CLFlBQVk7NkRBQWdDO0lBUDdELHFCQUFxQjtRQUhqQyxTQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsZ0JBQWdCO1NBQzFCLENBQUM7aURBY2dDLFVBQVU7T0FiL0IscUJBQXFCLENBZ0RqQztJQUFELDRCQUFDO0NBQUEsQUFoREQsSUFnREM7U0FoRFkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0RGlyZWN0aXZlLCBFbGVtZW50UmVmLCBBZnRlclZpZXdJbml0LFxuXHRFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ1tkZXRlY3RTY3JvbGxdJyxcbn0pXG5leHBvcnQgY2xhc3MgRGV0ZWN0U2Nyb2xsRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG5cblx0QElucHV0KCkgcHVibGljIGRlbGF5OiBudW1iZXIgPSAwO1xuXHRASW5wdXQoKSBwdWJsaWMgb2Zmc2V0OiBudW1iZXIgPSAwO1xuXG5cdEBPdXRwdXQoKSBwdWJsaWMgb25TY3JvbGw6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cdEBPdXRwdXQoKSBwdWJsaWMgb25SZWFjaFN0YXJ0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXHRAT3V0cHV0KCkgcHVibGljIG9uUmVhY2hFbmQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cblx0LyoqXG5cdCogQGNvbnN0cnVjdG9yXG5cdCogQHBhcmFtIHtFbGVtZW50UmVmfSBlbGVtZW50UmVmXG5cdCovXG5cdGNvbnN0cnVjdG9yKCBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYgKSB7fVxuXG5cdC8qKlxuXHQqIEBjb25zdHJ1Y3RvclxuXHQqL1xuXHRwdWJsaWMgbmdBZnRlclZpZXdJbml0KCkge1xuXHRcdGNvbnN0IGVsZW1lbnQ6IGFueSA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuXG5cdFx0Ly8gSW5pdFxuXHRcdHRoaXMuZGV0ZWN0U2Nyb2xsKCBlbGVtZW50ICk7XG5cblx0XHQvLyBTY3JvbGxpbmdcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdzY3JvbGwnLCAoKSA9PiB0aGlzLmRldGVjdFNjcm9sbCggZWxlbWVudCApICk7XG5cdH1cblxuXHQvKipcblx0KiBEZXRlY3Qgc2Nyb2xsXG5cdCogQHByaXZhdGVcblx0KiBAcGFyYW0ge2FueX0gZWxlbWVudFxuXHQqIEByZXR1cm4ge3ZvaWR9XG5cdCovXG5cdHByaXZhdGUgZGV0ZWN0U2Nyb2xsKCBlbGVtZW50OiBhbnkgKSB7XG5cdFx0ZWxlbWVudC5zY3JvbGxIZWlnaHQgIT09IGVsZW1lbnQuY2xpZW50SGVpZ2h0ICYmIHNldFRpbWVvdXQoICgpID0+IHtcblx0XHRcdC8vIFNjcm9sbGluZ1xuXHRcdFx0dGhpcy5vblNjcm9sbC5lbWl0KCBldmVudCApO1xuXG5cdFx0XHQvLyBJbiBjYXNlIHNjcm9sbCByZWFjaCBzdGFydFxuXHRcdFx0ZWxlbWVudC5zY3JvbGxUb3AgPD0gdGhpcy5vZmZzZXQgJiYgdGhpcy5vblJlYWNoU3RhcnQuZW1pdCggZXZlbnQgKTtcblxuXHRcdFx0Ly8gSW4gY2FzZSBzY3JvbGwgcmVhY2ggZW5kXG5cdFx0XHRlbGVtZW50LnNjcm9sbFRvcCA+PSAoIGVsZW1lbnQuc2Nyb2xsSGVpZ2h0IC0gZWxlbWVudC5jbGllbnRIZWlnaHQgLSB0aGlzLm9mZnNldCApXG5cdFx0XHRcdCYmIHRoaXMub25SZWFjaEVuZC5lbWl0KCBldmVudCApO1xuXHRcdH0sIHRoaXMuZGVsYXkgKTtcblx0fVxuXG59XG4iXX0=