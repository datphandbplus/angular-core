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
        this.visible = (this.defaultOptions || {}).visible !== undefined
            ? (this.defaultOptions || {}).visible
            : true;
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
        template: "<div class=\"loading-overlay\" [ngClass]=\"defaultOptions?.componentClass\" [class.loading-overlay__visible]=\"visible\"><div class=\"loading-overlay__overlay\"><div class=\"loading-overlay__icon\" [class.loading-overlay__top]=\"iconOnTop\"><mat-spinner [diameter]=\"iconSize\"></mat-spinner></div></div><ng-content></ng-content></div>"
    }),
    tslib_1.__param(0, Optional()), tslib_1.__param(0, Inject(LOADING_OVERLAY_DEFAULT_OPTIONS)),
    tslib_1.__metadata("design:paramtypes", [Object])
], LoadingOverlayComponent);
export { LoadingOverlayComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy1vdmVybGF5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItY29yZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2xvYWRpbmctb3ZlcmxheS9sb2FkaW5nLW92ZXJsYXkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ04sS0FBSyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQzFCLE1BQU0sRUFBRSxjQUFjLEVBQ3RCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE1BQU0sQ0FBQyxNQUFNLCtCQUErQixHQUF3QixJQUFJLGNBQWMsQ0FBTyxnQkFBZ0IsQ0FBRSxDQUFDO0FBTWhILElBQWEsdUJBQXVCLEdBQXBDLE1BQWEsdUJBQXVCO0lBUW5DOzs7TUFHRTtJQUNGLFlBQTZFLGNBQW1CO1FBQW5CLG1CQUFjLEdBQWQsY0FBYyxDQUFLO1FBVmhGLGNBQVMsR0FBWSxDQUFFLElBQUksQ0FBQyxjQUFjLElBQUksRUFBRSxDQUFFLENBQUMsU0FBUyxDQUFDO1FBQzdELGFBQVEsR0FBVyxDQUFFLElBQUksQ0FBQyxjQUFjLElBQUksRUFBRSxDQUFFLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQztRQUNoRSxZQUFPLEdBQVksQ0FBRSxJQUFJLENBQUMsY0FBYyxJQUFJLEVBQUUsQ0FBRSxDQUFDLE9BQU8sS0FBSyxTQUFTO1lBQ3JGLENBQUMsQ0FBQyxDQUFFLElBQUksQ0FBQyxjQUFjLElBQUksRUFBRSxDQUFFLENBQUMsT0FBTztZQUN2QyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBTTRGLENBQUM7Q0FFckcsQ0FBQTs7NENBRmMsUUFBUSxZQUFJLE1BQU0sU0FBRSwrQkFBK0I7O0FBVnhEO0lBQVIsS0FBSyxFQUFFOzswREFBcUU7QUFDcEU7SUFBUixLQUFLLEVBQUU7O3lEQUF3RTtBQUN2RTtJQUFSLEtBQUssRUFBRTs7d0RBRUE7QUFOSSx1QkFBdUI7SUFKbkMsU0FBUyxDQUFDO1FBQ1YsUUFBUSxFQUFHLGlCQUFpQjtRQUM1QiwyVkFBcUM7S0FDckMsQ0FBQztJQWFhLG1CQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsbUJBQUEsTUFBTSxDQUFFLCtCQUErQixDQUFFLENBQUE7O0dBWnZELHVCQUF1QixDQWNuQztTQWRZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdElucHV0LCBDb21wb25lbnQsIE9wdGlvbmFsLFxuXHRJbmplY3QsIEluamVjdGlvblRva2VuXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgY29uc3QgTE9BRElOR19PVkVSTEFZX0RFRkFVTFRfT1BUSU9OUzogSW5qZWN0aW9uVG9rZW48YW55PiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxhbnk+KCAnZGVmYXVsdE9wdGlvbnMnICk7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3Rvclx0OiAnbG9hZGluZy1vdmVybGF5Jyxcblx0dGVtcGxhdGVVcmxcdDogJy4vbG9hZGluZy1vdmVybGF5LnB1ZycsXG59KVxuZXhwb3J0IGNsYXNzIExvYWRpbmdPdmVybGF5Q29tcG9uZW50IHtcblxuXHRASW5wdXQoKSBwdWJsaWMgaWNvbk9uVG9wOiBib29sZWFuID0gKCB0aGlzLmRlZmF1bHRPcHRpb25zIHx8IHt9ICkuaWNvbk9uVG9wO1xuXHRASW5wdXQoKSBwdWJsaWMgaWNvblNpemU6IG51bWJlciA9ICggdGhpcy5kZWZhdWx0T3B0aW9ucyB8fCB7fSApLmljb25TaXplIHx8IDMwO1xuXHRASW5wdXQoKSBwdWJsaWMgdmlzaWJsZTogYm9vbGVhbiA9ICggdGhpcy5kZWZhdWx0T3B0aW9ucyB8fCB7fSApLnZpc2libGUgIT09IHVuZGVmaW5lZFxuXHRcdD8gKCB0aGlzLmRlZmF1bHRPcHRpb25zIHx8IHt9ICkudmlzaWJsZVxuXHRcdDogdHJ1ZTtcblxuXHQvKipcblx0KiBAY29uc3RydWN0b3Jcblx0KiBAcGFyYW0ge2FueX0gZGVmYXVsdE9wdGlvbnNcblx0Ki9cblx0Y29uc3RydWN0b3IoIEBPcHRpb25hbCgpIEBJbmplY3QoIExPQURJTkdfT1ZFUkxBWV9ERUZBVUxUX09QVElPTlMgKSByZWFkb25seSBkZWZhdWx0T3B0aW9uczogYW55ICkge31cblxufVxuIl19