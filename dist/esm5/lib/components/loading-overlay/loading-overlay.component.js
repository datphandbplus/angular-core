import * as tslib_1 from "tslib";
import { Input, Component, Optional, Inject, InjectionToken } from '@angular/core';
export var LOADING_OVERLAY_DEFAULT_OPTIONS = new InjectionToken('defaultOptions');
var LoadingOverlayComponent = /** @class */ (function () {
    /**
    * @constructor
    * @param {any} defaultOptions
    */
    function LoadingOverlayComponent(defaultOptions) {
        this.defaultOptions = defaultOptions;
        this.iconOnTop = (this.defaultOptions || {}).iconOnTop;
        this.iconSize = (this.defaultOptions || {}).iconSize || 30;
        this.visible = (this.defaultOptions || {}).visible !== undefined
            ? (this.defaultOptions || {}).visible
            : true;
    }
    LoadingOverlayComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [LOADING_OVERLAY_DEFAULT_OPTIONS,] }] }
    ]; };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], LoadingOverlayComponent.prototype, "iconOnTop", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], LoadingOverlayComponent.prototype, "iconSize", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], LoadingOverlayComponent.prototype, "visible", void 0);
    LoadingOverlayComponent = tslib_1.__decorate([
        Component({
            selector: 'loading-overlay',
            template: "<div class=\"loading-overlay\" [ngClass]=\"defaultOptions?.componentClass\" [class.loading-overlay__visible]=\"visible\"><div class=\"loading-overlay__overlay\"><div class=\"loading-overlay__icon\" [class.loading-overlay__top]=\"iconOnTop\"><mat-spinner [diameter]=\"iconSize\"></mat-spinner></div></div><ng-content></ng-content></div>"
        }),
        tslib_1.__param(0, Optional()), tslib_1.__param(0, Inject(LOADING_OVERLAY_DEFAULT_OPTIONS)),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], LoadingOverlayComponent);
    return LoadingOverlayComponent;
}());
export { LoadingOverlayComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy1vdmVybGF5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItY29yZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2xvYWRpbmctb3ZlcmxheS9sb2FkaW5nLW92ZXJsYXkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ04sS0FBSyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQzFCLE1BQU0sRUFBRSxjQUFjLEVBQ3RCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE1BQU0sQ0FBQyxJQUFNLCtCQUErQixHQUF3QixJQUFJLGNBQWMsQ0FBTyxnQkFBZ0IsQ0FBRSxDQUFDO0FBTWhIO0lBUUM7OztNQUdFO0lBQ0YsaUNBQTZFLGNBQW1CO1FBQW5CLG1CQUFjLEdBQWQsY0FBYyxDQUFLO1FBVmhGLGNBQVMsR0FBWSxDQUFFLElBQUksQ0FBQyxjQUFjLElBQUksRUFBRSxDQUFFLENBQUMsU0FBUyxDQUFDO1FBQzdELGFBQVEsR0FBVyxDQUFFLElBQUksQ0FBQyxjQUFjLElBQUksRUFBRSxDQUFFLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQztRQUNoRSxZQUFPLEdBQVksQ0FBRSxJQUFJLENBQUMsY0FBYyxJQUFJLEVBQUUsQ0FBRSxDQUFDLE9BQU8sS0FBSyxTQUFTO1lBQ3JGLENBQUMsQ0FBQyxDQUFFLElBQUksQ0FBQyxjQUFjLElBQUksRUFBRSxDQUFFLENBQUMsT0FBTztZQUN2QyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBTTRGLENBQUM7O2dEQUF2RixRQUFRLFlBQUksTUFBTSxTQUFFLCtCQUErQjs7SUFWeEQ7UUFBUixLQUFLLEVBQUU7OzhEQUFxRTtJQUNwRTtRQUFSLEtBQUssRUFBRTs7NkRBQXdFO0lBQ3ZFO1FBQVIsS0FBSyxFQUFFOzs0REFFQTtJQU5JLHVCQUF1QjtRQUpuQyxTQUFTLENBQUM7WUFDVixRQUFRLEVBQUcsaUJBQWlCO1lBQzVCLDJWQUFxQztTQUNyQyxDQUFDO1FBYWEsbUJBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxtQkFBQSxNQUFNLENBQUUsK0JBQStCLENBQUUsQ0FBQTs7T0FadkQsdUJBQXVCLENBY25DO0lBQUQsOEJBQUM7Q0FBQSxBQWRELElBY0M7U0FkWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRJbnB1dCwgQ29tcG9uZW50LCBPcHRpb25hbCxcblx0SW5qZWN0LCBJbmplY3Rpb25Ub2tlblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGNvbnN0IExPQURJTkdfT1ZFUkxBWV9ERUZBVUxUX09QVElPTlM6IEluamVjdGlvblRva2VuPGFueT4gPSBuZXcgSW5qZWN0aW9uVG9rZW48YW55PiggJ2RlZmF1bHRPcHRpb25zJyApO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3JcdDogJ2xvYWRpbmctb3ZlcmxheScsXG5cdHRlbXBsYXRlVXJsXHQ6ICcuL2xvYWRpbmctb3ZlcmxheS5wdWcnLFxufSlcbmV4cG9ydCBjbGFzcyBMb2FkaW5nT3ZlcmxheUNvbXBvbmVudCB7XG5cblx0QElucHV0KCkgcHVibGljIGljb25PblRvcDogYm9vbGVhbiA9ICggdGhpcy5kZWZhdWx0T3B0aW9ucyB8fCB7fSApLmljb25PblRvcDtcblx0QElucHV0KCkgcHVibGljIGljb25TaXplOiBudW1iZXIgPSAoIHRoaXMuZGVmYXVsdE9wdGlvbnMgfHwge30gKS5pY29uU2l6ZSB8fCAzMDtcblx0QElucHV0KCkgcHVibGljIHZpc2libGU6IGJvb2xlYW4gPSAoIHRoaXMuZGVmYXVsdE9wdGlvbnMgfHwge30gKS52aXNpYmxlICE9PSB1bmRlZmluZWRcblx0XHQ/ICggdGhpcy5kZWZhdWx0T3B0aW9ucyB8fCB7fSApLnZpc2libGVcblx0XHQ6IHRydWU7XG5cblx0LyoqXG5cdCogQGNvbnN0cnVjdG9yXG5cdCogQHBhcmFtIHthbnl9IGRlZmF1bHRPcHRpb25zXG5cdCovXG5cdGNvbnN0cnVjdG9yKCBAT3B0aW9uYWwoKSBASW5qZWN0KCBMT0FESU5HX09WRVJMQVlfREVGQVVMVF9PUFRJT05TICkgcmVhZG9ubHkgZGVmYXVsdE9wdGlvbnM6IGFueSApIHt9XG5cbn1cbiJdfQ==