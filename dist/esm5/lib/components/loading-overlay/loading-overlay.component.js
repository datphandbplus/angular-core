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
        this.visible = true;
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
            template: "<div class=\"loading-overlay\" [ngClass]=\"defaultOptions?.componentClass\" [class.loading-overlay__visible]=\"visible\"><div class=\"loading-overlay__overlay\"><div class=\"loading-overlay__icon\" [class.loading-overlay__top]=\"iconOnTop\"><mat-spinner [diameter]=\"iconSize\"></mat-spinner></div></div><ng-content></ng-content></div>",
            styles: [".loading-overlay{position:relative}.loading-overlay__visible{min-height:170px}.loading-overlay__visible .loading-overlay__overlay{visibility:visible;opacity:1}.loading-overlay__overlay{position:absolute;background-color:rgba(255,255,255,.4);top:0;left:0;right:0;bottom:0;width:100%;height:100%;z-index:10;visibility:hidden;opacity:0}.loading-overlay__overlay .loading-overlay__icon:not(.loading-overlay__top){position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.loading-overlay__overlay .loading-overlay__icon.loading-overlay__top{position:absolute;left:50%;transform:translate(-50%,-50%);top:50px!important}"]
        }),
        tslib_1.__param(0, Optional()), tslib_1.__param(0, Inject(LOADING_OVERLAY_DEFAULT_OPTIONS)),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], LoadingOverlayComponent);
    return LoadingOverlayComponent;
}());
export { LoadingOverlayComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy1vdmVybGF5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItY29yZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2xvYWRpbmctb3ZlcmxheS9sb2FkaW5nLW92ZXJsYXkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ04sS0FBSyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQzFCLE1BQU0sRUFBRSxjQUFjLEVBQ3RCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE1BQU0sQ0FBQyxJQUFNLCtCQUErQixHQUF3QixJQUFJLGNBQWMsQ0FBTyxnQkFBZ0IsQ0FBRSxDQUFDO0FBT2hIO0lBTUM7OztNQUdFO0lBQ0YsaUNBQTZFLGNBQW1CO1FBQW5CLG1CQUFjLEdBQWQsY0FBYyxDQUFLO1FBUmhGLGNBQVMsR0FBWSxDQUFFLElBQUksQ0FBQyxjQUFjLElBQUksRUFBRSxDQUFFLENBQUMsU0FBUyxDQUFDO1FBQzdELGFBQVEsR0FBVyxDQUFFLElBQUksQ0FBQyxjQUFjLElBQUksRUFBRSxDQUFFLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQztRQUNoRSxZQUFPLEdBQVksSUFBSSxDQUFDO0lBTTRELENBQUM7O2dEQUF2RixRQUFRLFlBQUksTUFBTSxTQUFFLCtCQUErQjs7SUFSeEQ7UUFBUixLQUFLLEVBQUU7OzhEQUFxRTtJQUNwRTtRQUFSLEtBQUssRUFBRTs7NkRBQXdFO0lBQ3ZFO1FBQVIsS0FBSyxFQUFFOzs0REFBZ0M7SUFKNUIsdUJBQXVCO1FBTG5DLFNBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRyxpQkFBaUI7WUFDNUIsMlZBQXFDOztTQUVyQyxDQUFDO1FBV2EsbUJBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxtQkFBQSxNQUFNLENBQUUsK0JBQStCLENBQUUsQ0FBQTs7T0FWdkQsdUJBQXVCLENBWW5DO0lBQUQsOEJBQUM7Q0FBQSxBQVpELElBWUM7U0FaWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRJbnB1dCwgQ29tcG9uZW50LCBPcHRpb25hbCxcblx0SW5qZWN0LCBJbmplY3Rpb25Ub2tlblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGNvbnN0IExPQURJTkdfT1ZFUkxBWV9ERUZBVUxUX09QVElPTlM6IEluamVjdGlvblRva2VuPGFueT4gPSBuZXcgSW5qZWN0aW9uVG9rZW48YW55PiggJ2RlZmF1bHRPcHRpb25zJyApO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3JcdDogJ2xvYWRpbmctb3ZlcmxheScsXG5cdHRlbXBsYXRlVXJsXHQ6ICcuL2xvYWRpbmctb3ZlcmxheS5wdWcnLFxuXHRzdHlsZVVybHNcdDogWyAnLi9sb2FkaW5nLW92ZXJsYXkuc2NzcycgXSxcbn0pXG5leHBvcnQgY2xhc3MgTG9hZGluZ092ZXJsYXlDb21wb25lbnQge1xuXG5cdEBJbnB1dCgpIHB1YmxpYyBpY29uT25Ub3A6IGJvb2xlYW4gPSAoIHRoaXMuZGVmYXVsdE9wdGlvbnMgfHwge30gKS5pY29uT25Ub3A7XG5cdEBJbnB1dCgpIHB1YmxpYyBpY29uU2l6ZTogbnVtYmVyID0gKCB0aGlzLmRlZmF1bHRPcHRpb25zIHx8IHt9ICkuaWNvblNpemUgfHwgMzA7XG5cdEBJbnB1dCgpIHB1YmxpYyB2aXNpYmxlOiBib29sZWFuID0gdHJ1ZTtcblxuXHQvKipcblx0KiBAY29uc3RydWN0b3Jcblx0KiBAcGFyYW0ge2FueX0gZGVmYXVsdE9wdGlvbnNcblx0Ki9cblx0Y29uc3RydWN0b3IoIEBPcHRpb25hbCgpIEBJbmplY3QoIExPQURJTkdfT1ZFUkxBWV9ERUZBVUxUX09QVElPTlMgKSByZWFkb25seSBkZWZhdWx0T3B0aW9uczogYW55ICkge31cblxufVxuIl19