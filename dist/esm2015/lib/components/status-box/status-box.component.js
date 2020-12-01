import * as tslib_1 from "tslib";
import { Component, Input, InjectionToken, Inject, Optional } from '@angular/core';
export const STATUS_BOX_DEFAULT_OPTIONS = new InjectionToken('defaultOptions');
let StatusBoxComponent = class StatusBoxComponent {
    /**
    * @constructor
    * @param {any} defaultOptions
    */
    constructor(defaultOptions) {
        this.defaultOptions = defaultOptions;
    }
};
StatusBoxComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [STATUS_BOX_DEFAULT_OPTIONS,] }] }
];
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
export { StatusBoxComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdHVzLWJveC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNvcmUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zdGF0dXMtYm94L3N0YXR1cy1ib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ04sU0FBUyxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQ2hDLE1BQU0sRUFBRSxRQUFRLEVBQ2hCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE1BQU0sQ0FBQyxNQUFNLDBCQUEwQixHQUF3QixJQUFJLGNBQWMsQ0FBTyxnQkFBZ0IsQ0FBRSxDQUFDO0FBTzNHLElBQWEsa0JBQWtCLEdBQS9CLE1BQWEsa0JBQWtCO0lBSzlCOzs7TUFHRTtJQUNGLFlBQXdFLGNBQW1CO1FBQW5CLG1CQUFjLEdBQWQsY0FBYyxDQUFLO0lBQUksQ0FBQztDQUVoRyxDQUFBOzs0Q0FGYyxRQUFRLFlBQUksTUFBTSxTQUFFLDBCQUEwQjs7QUFQbkQ7SUFBUixLQUFLLEVBQUU7O2lEQUFzQjtBQUNyQjtJQUFSLEtBQUssRUFBRTs7a0RBQXVCO0FBSG5CLGtCQUFrQjtJQUw5QixTQUFTLENBQUM7UUFDVixRQUFRLEVBQUcsWUFBWTtRQUN2Qiw2UUFBZ0M7UUFDaEMsSUFBSSxFQUFJLEVBQUUsS0FBSyxFQUFFLGFBQWEsRUFBRTtLQUNoQyxDQUFDO0lBVWEsbUJBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxtQkFBQSxNQUFNLENBQUUsMEJBQTBCLENBQUUsQ0FBQTs7R0FUbEQsa0JBQWtCLENBVzlCO1NBWFksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0Q29tcG9uZW50LCBJbnB1dCwgSW5qZWN0aW9uVG9rZW4sXG5cdEluamVjdCwgT3B0aW9uYWxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBjb25zdCBTVEFUVVNfQk9YX0RFRkFVTFRfT1BUSU9OUzogSW5qZWN0aW9uVG9rZW48YW55PiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxhbnk+KCAnZGVmYXVsdE9wdGlvbnMnICk7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3Rvclx0OiAnc3RhdHVzLWJveCcsXG5cdHRlbXBsYXRlVXJsXHQ6ICcuL3N0YXR1cy1ib3gucHVnJyxcblx0aG9zdFx0XHQ6IHsgY2xhc3M6ICdtYXJnaW4tYXV0bycgfSxcbn0pXG5leHBvcnQgY2xhc3MgU3RhdHVzQm94Q29tcG9uZW50IHtcblxuXHRASW5wdXQoKSBwdWJsaWMgY29sb3I6IHN0cmluZztcblx0QElucHV0KCkgcHVibGljIHN0YXR1czogc3RyaW5nO1xuXG5cdC8qKlxuXHQqIEBjb25zdHJ1Y3RvclxuXHQqIEBwYXJhbSB7YW55fSBkZWZhdWx0T3B0aW9uc1xuXHQqL1xuXHRjb25zdHJ1Y3RvciggQE9wdGlvbmFsKCkgQEluamVjdCggU1RBVFVTX0JPWF9ERUZBVUxUX09QVElPTlMgKSByZWFkb25seSBkZWZhdWx0T3B0aW9uczogYW55ICkge31cblxufVxuIl19