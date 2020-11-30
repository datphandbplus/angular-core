import * as tslib_1 from "tslib";
import { Input, Component, Optional, Inject, InjectionToken } from '@angular/core';
export const LOADING_OVERLAY_DEFAULT_OPTIONS = new InjectionToken('defaultOptions');
let LoadingOverlayComponent = class LoadingOverlayComponent {
    /**
    * @constructor
    * @param {any} defaultOptions
    */
    constructor(defaultOptions) {
        this.defaultOptions = defaultOptions;
        this.iconOnTop = (this.defaultOptions || {}).iconOnTop;
        this.iconSize = (this.defaultOptions || {}).iconSize || 30;
        this.visible = true;
    }
};
LoadingOverlayComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [LOADING_OVERLAY_DEFAULT_OPTIONS,] }] }
];
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
export { LoadingOverlayComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy1vdmVybGF5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItY29yZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2xvYWRpbmctb3ZlcmxheS9sb2FkaW5nLW92ZXJsYXkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ04sS0FBSyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQzFCLE1BQU0sRUFBRSxjQUFjLEVBQ3RCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE1BQU0sQ0FBQyxNQUFNLCtCQUErQixHQUF3QixJQUFJLGNBQWMsQ0FBTyxnQkFBZ0IsQ0FBRSxDQUFDO0FBT2hILElBQWEsdUJBQXVCLEdBQXBDLE1BQWEsdUJBQXVCO0lBTW5DOzs7TUFHRTtJQUNGLFlBQTZFLGNBQW1CO1FBQW5CLG1CQUFjLEdBQWQsY0FBYyxDQUFLO1FBUmhGLGNBQVMsR0FBWSxDQUFFLElBQUksQ0FBQyxjQUFjLElBQUksRUFBRSxDQUFFLENBQUMsU0FBUyxDQUFDO1FBQzdELGFBQVEsR0FBVyxDQUFFLElBQUksQ0FBQyxjQUFjLElBQUksRUFBRSxDQUFFLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQztRQUNoRSxZQUFPLEdBQVksSUFBSSxDQUFDO0lBTTRELENBQUM7Q0FFckcsQ0FBQTs7NENBRmMsUUFBUSxZQUFJLE1BQU0sU0FBRSwrQkFBK0I7O0FBUnhEO0lBQVIsS0FBSyxFQUFFOzswREFBcUU7QUFDcEU7SUFBUixLQUFLLEVBQUU7O3lEQUF3RTtBQUN2RTtJQUFSLEtBQUssRUFBRTs7d0RBQWdDO0FBSjVCLHVCQUF1QjtJQUxuQyxTQUFTLENBQUM7UUFDVixRQUFRLEVBQUcsaUJBQWlCO1FBQzVCLDJWQUFxQzs7S0FFckMsQ0FBQztJQVdhLG1CQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsbUJBQUEsTUFBTSxDQUFFLCtCQUErQixDQUFFLENBQUE7O0dBVnZELHVCQUF1QixDQVluQztTQVpZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdElucHV0LCBDb21wb25lbnQsIE9wdGlvbmFsLFxuXHRJbmplY3QsIEluamVjdGlvblRva2VuXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgY29uc3QgTE9BRElOR19PVkVSTEFZX0RFRkFVTFRfT1BUSU9OUzogSW5qZWN0aW9uVG9rZW48YW55PiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxhbnk+KCAnZGVmYXVsdE9wdGlvbnMnICk7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3Rvclx0OiAnbG9hZGluZy1vdmVybGF5Jyxcblx0dGVtcGxhdGVVcmxcdDogJy4vbG9hZGluZy1vdmVybGF5LnB1ZycsXG5cdHN0eWxlVXJsc1x0OiBbICcuL2xvYWRpbmctb3ZlcmxheS5zY3NzJyBdLFxufSlcbmV4cG9ydCBjbGFzcyBMb2FkaW5nT3ZlcmxheUNvbXBvbmVudCB7XG5cblx0QElucHV0KCkgcHVibGljIGljb25PblRvcDogYm9vbGVhbiA9ICggdGhpcy5kZWZhdWx0T3B0aW9ucyB8fCB7fSApLmljb25PblRvcDtcblx0QElucHV0KCkgcHVibGljIGljb25TaXplOiBudW1iZXIgPSAoIHRoaXMuZGVmYXVsdE9wdGlvbnMgfHwge30gKS5pY29uU2l6ZSB8fCAzMDtcblx0QElucHV0KCkgcHVibGljIHZpc2libGU6IGJvb2xlYW4gPSB0cnVlO1xuXG5cdC8qKlxuXHQqIEBjb25zdHJ1Y3RvclxuXHQqIEBwYXJhbSB7YW55fSBkZWZhdWx0T3B0aW9uc1xuXHQqL1xuXHRjb25zdHJ1Y3RvciggQE9wdGlvbmFsKCkgQEluamVjdCggTE9BRElOR19PVkVSTEFZX0RFRkFVTFRfT1BUSU9OUyApIHJlYWRvbmx5IGRlZmF1bHRPcHRpb25zOiBhbnkgKSB7fVxuXG59XG4iXX0=