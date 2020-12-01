import * as tslib_1 from "tslib";
import { Component, Input, InjectionToken, Inject, Optional } from '@angular/core';
export var STATUS_BOX_DEFAULT_OPTIONS = new InjectionToken('defaultOptions');
var StatusBoxComponent = /** @class */ (function () {
    /**
    * @constructor
    * @param {any} defaultOptions
    */
    function StatusBoxComponent(defaultOptions) {
        this.defaultOptions = defaultOptions;
    }
    StatusBoxComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [STATUS_BOX_DEFAULT_OPTIONS,] }] }
    ]; };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], StatusBoxComponent.prototype, "color", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], StatusBoxComponent.prototype, "status", void 0);
    StatusBoxComponent = tslib_1.__decorate([
        Component({
            selector: 'status-box',
            template: "<div class=\"status-box layout-column layout-align-center\"><mat-chip-list><mat-chip selected [style.backgroundColor]=\"color\" [matTooltip]=\"status | uppercase\"><div>{{ status | uppercase }}<ng-content></ng-content></div></mat-chip></mat-chip-list></div>",
            host: { class: 'margin-auto' }
        }),
        tslib_1.__param(0, Optional()), tslib_1.__param(0, Inject(STATUS_BOX_DEFAULT_OPTIONS)),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], StatusBoxComponent);
    return StatusBoxComponent;
}());
export { StatusBoxComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdHVzLWJveC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNvcmUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zdGF0dXMtYm94L3N0YXR1cy1ib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ04sU0FBUyxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQ2hDLE1BQU0sRUFBRSxRQUFRLEVBQ2hCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE1BQU0sQ0FBQyxJQUFNLDBCQUEwQixHQUF3QixJQUFJLGNBQWMsQ0FBTyxnQkFBZ0IsQ0FBRSxDQUFDO0FBTzNHO0lBS0M7OztNQUdFO0lBQ0YsNEJBQXdFLGNBQW1CO1FBQW5CLG1CQUFjLEdBQWQsY0FBYyxDQUFLO0lBQUksQ0FBQzs7Z0RBQWxGLFFBQVEsWUFBSSxNQUFNLFNBQUUsMEJBQTBCOztJQVBuRDtRQUFSLEtBQUssRUFBRTs7cURBQXNCO0lBQ3JCO1FBQVIsS0FBSyxFQUFFOztzREFBdUI7SUFIbkIsa0JBQWtCO1FBTDlCLFNBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRyxZQUFZO1lBQ3ZCLDZRQUFnQztZQUNoQyxJQUFJLEVBQUksRUFBRSxLQUFLLEVBQUUsYUFBYSxFQUFFO1NBQ2hDLENBQUM7UUFVYSxtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLE1BQU0sQ0FBRSwwQkFBMEIsQ0FBRSxDQUFBOztPQVRsRCxrQkFBa0IsQ0FXOUI7SUFBRCx5QkFBQztDQUFBLEFBWEQsSUFXQztTQVhZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdENvbXBvbmVudCwgSW5wdXQsIEluamVjdGlvblRva2VuLFxuXHRJbmplY3QsIE9wdGlvbmFsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgY29uc3QgU1RBVFVTX0JPWF9ERUZBVUxUX09QVElPTlM6IEluamVjdGlvblRva2VuPGFueT4gPSBuZXcgSW5qZWN0aW9uVG9rZW48YW55PiggJ2RlZmF1bHRPcHRpb25zJyApO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3JcdDogJ3N0YXR1cy1ib3gnLFxuXHR0ZW1wbGF0ZVVybFx0OiAnLi9zdGF0dXMtYm94LnB1ZycsXG5cdGhvc3RcdFx0OiB7IGNsYXNzOiAnbWFyZ2luLWF1dG8nIH0sXG59KVxuZXhwb3J0IGNsYXNzIFN0YXR1c0JveENvbXBvbmVudCB7XG5cblx0QElucHV0KCkgcHVibGljIGNvbG9yOiBzdHJpbmc7XG5cdEBJbnB1dCgpIHB1YmxpYyBzdGF0dXM6IHN0cmluZztcblxuXHQvKipcblx0KiBAY29uc3RydWN0b3Jcblx0KiBAcGFyYW0ge2FueX0gZGVmYXVsdE9wdGlvbnNcblx0Ki9cblx0Y29uc3RydWN0b3IoIEBPcHRpb25hbCgpIEBJbmplY3QoIFNUQVRVU19CT1hfREVGQVVMVF9PUFRJT05TICkgcmVhZG9ubHkgZGVmYXVsdE9wdGlvbnM6IGFueSApIHt9XG5cbn1cbiJdfQ==