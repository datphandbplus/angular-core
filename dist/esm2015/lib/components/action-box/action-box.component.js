import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
let ActionButtonComponent = class ActionButtonComponent {
    constructor() {
        this.onClick = new EventEmitter();
    }
    /**
    * Get css class
    * @return {string}
    */
    get compClass() {
        const _compClass = [];
        if (this.icon)
            _compClass.push(this.icon);
        if (this.color)
            _compClass.push('text-' + this.color);
        return _compClass.join(' ');
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], ActionButtonComponent.prototype, "color", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], ActionButtonComponent.prototype, "icon", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], ActionButtonComponent.prototype, "title", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], ActionButtonComponent.prototype, "disabled", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], ActionButtonComponent.prototype, "onClick", void 0);
ActionButtonComponent = tslib_1.__decorate([
    Component({
        selector: 'action-button',
        template: "<button class=\"action-button\" mat-menu-item (click)=\"onClick?.emit()\" [disabled]=\"disabled\"><div class=\"layout-row layout-align-start-center\"><i class=\"mr-15 font-size-18\" [ngClass]=\"compClass\"></i>{{ title }}</div></button>"
    })
], ActionButtonComponent);
export { ActionButtonComponent };
let ActionBoxComponent = class ActionBoxComponent {
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], ActionBoxComponent.prototype, "disabled", void 0);
ActionBoxComponent = tslib_1.__decorate([
    Component({
        selector: 'action-box',
        template: "<div class=\"action-box\"><button mat-stroked-button plugin-button-only-icon type=\"button\" [matMenuTriggerFor]=\"__actionMenu\" [disabled]=\"disabled\"><i class=\"fa fa-ellipsis-v\"></i></button><mat-menu #__actionMenu=\"matMenu\"><ng-content></ng-content></mat-menu></div>"
    })
], ActionBoxComponent);
export { ActionBoxComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uLWJveC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNvcmUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9hY3Rpb24tYm94L2FjdGlvbi1ib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ04sU0FBUyxFQUFFLEtBQUssRUFDaEIsTUFBTSxFQUFFLFlBQVksRUFDcEIsTUFBTSxlQUFlLENBQUM7QUFNdkIsSUFBYSxxQkFBcUIsR0FBbEMsTUFBYSxxQkFBcUI7SUFKbEM7UUFXa0IsWUFBTyxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO0lBZXZFLENBQUM7SUFiQTs7O01BR0U7SUFDRixJQUFXLFNBQVM7UUFDbkIsTUFBTSxVQUFVLEdBQWtCLEVBQUUsQ0FBQztRQUVyQyxJQUFLLElBQUksQ0FBQyxJQUFJO1lBQUcsVUFBVSxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUMsSUFBSSxDQUFFLENBQUM7UUFDOUMsSUFBSyxJQUFJLENBQUMsS0FBSztZQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUUsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUUsQ0FBQztRQUUxRCxPQUFPLFVBQVUsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFFLENBQUM7SUFDL0IsQ0FBQztDQUVELENBQUE7QUFwQlM7SUFBUixLQUFLLEVBQUU7O29EQUFzQjtBQUNyQjtJQUFSLEtBQUssRUFBRTs7bURBQXFCO0FBQ3BCO0lBQVIsS0FBSyxFQUFFOztvREFBc0I7QUFDckI7SUFBUixLQUFLLEVBQUU7O3VEQUEwQjtBQUV4QjtJQUFULE1BQU0sRUFBRTtzQ0FBaUIsWUFBWTtzREFBZ0M7QUFQMUQscUJBQXFCO0lBSmpDLFNBQVMsQ0FBQztRQUNWLFFBQVEsRUFBRyxlQUFlO1FBQzFCLHdQQUFtQztLQUNuQyxDQUFDO0dBQ1cscUJBQXFCLENBc0JqQztTQXRCWSxxQkFBcUI7QUE0QmxDLElBQWEsa0JBQWtCLEdBQS9CLE1BQWEsa0JBQWtCO0NBSTlCLENBQUE7QUFGUztJQUFSLEtBQUssRUFBRTs7b0RBQTBCO0FBRnRCLGtCQUFrQjtJQUo5QixTQUFTLENBQUM7UUFDVixRQUFRLEVBQUcsWUFBWTtRQUN2QiwrUkFBZ0M7S0FDaEMsQ0FBQztHQUNXLGtCQUFrQixDQUk5QjtTQUpZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdENvbXBvbmVudCwgSW5wdXQsXG5cdE91dHB1dCwgRXZlbnRFbWl0dGVyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3JcdDogJ2FjdGlvbi1idXR0b24nLFxuXHR0ZW1wbGF0ZVVybFx0OiAnLi9hY3Rpb24tYnV0dG9uLnB1ZycsXG59KVxuZXhwb3J0IGNsYXNzIEFjdGlvbkJ1dHRvbkNvbXBvbmVudCB7XG5cblx0QElucHV0KCkgcHVibGljIGNvbG9yOiBzdHJpbmc7XG5cdEBJbnB1dCgpIHB1YmxpYyBpY29uOiBzdHJpbmc7XG5cdEBJbnB1dCgpIHB1YmxpYyB0aXRsZTogc3RyaW5nO1xuXHRASW5wdXQoKSBwdWJsaWMgZGlzYWJsZWQ6IGJvb2xlYW47XG5cblx0QE91dHB1dCgpIHB1YmxpYyBvbkNsaWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG5cdC8qKlxuXHQqIEdldCBjc3MgY2xhc3Ncblx0KiBAcmV0dXJuIHtzdHJpbmd9XG5cdCovXG5cdHB1YmxpYyBnZXQgY29tcENsYXNzKCk6IHN0cmluZyB7XG5cdFx0Y29uc3QgX2NvbXBDbGFzczogQXJyYXk8c3RyaW5nPiA9IFtdO1xuXG5cdFx0aWYgKCB0aGlzLmljb24gKSBfY29tcENsYXNzLnB1c2goIHRoaXMuaWNvbiApO1xuXHRcdGlmICggdGhpcy5jb2xvciApIF9jb21wQ2xhc3MucHVzaCggJ3RleHQtJyArIHRoaXMuY29sb3IgKTtcblxuXHRcdHJldHVybiBfY29tcENsYXNzLmpvaW4oICcgJyApO1xuXHR9XG5cbn1cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yXHQ6ICdhY3Rpb24tYm94Jyxcblx0dGVtcGxhdGVVcmxcdDogJy4vYWN0aW9uLWJveC5wdWcnLFxufSlcbmV4cG9ydCBjbGFzcyBBY3Rpb25Cb3hDb21wb25lbnQge1xuXG5cdEBJbnB1dCgpIHB1YmxpYyBkaXNhYmxlZDogYm9vbGVhbjtcblxufVxuIl19