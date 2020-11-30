import * as tslib_1 from "tslib";
import { Directive, Input } from '@angular/core';
import { NgControl } from '@angular/forms';
var DisableControlDirective = /** @class */ (function () {
    /**
    * @constructor
    * @param {NgControl} ngControl
    */
    function DisableControlDirective(ngControl) {
        this.ngControl = ngControl;
    }
    Object.defineProperty(DisableControlDirective.prototype, "disableControl", {
        /**
        * @constructor
        * @param {boolean} condition
        */
        set: function (condition) {
            this.ngControl.control[condition ? 'disable' : 'enable']();
        },
        enumerable: true,
        configurable: true
    });
    DisableControlDirective.ctorParameters = function () { return [
        { type: NgControl }
    ]; };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], DisableControlDirective.prototype, "disableControl", null);
    DisableControlDirective = tslib_1.__decorate([
        Directive({
            selector: '[disableControl]',
        }),
        tslib_1.__metadata("design:paramtypes", [NgControl])
    ], DisableControlDirective);
    return DisableControlDirective;
}());
export { DisableControlDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzYWJsZS1jb250cm9sLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItY29yZS8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL2Rpc2FibGUtY29udHJvbC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUszQztJQVVDOzs7TUFHRTtJQUNGLGlDQUFxQixTQUFvQjtRQUFwQixjQUFTLEdBQVQsU0FBUyxDQUFXO0lBQUksQ0FBQztJQVJyQyxzQkFBSSxtREFBYztRQUozQjs7O1VBR0U7YUFDTyxVQUFvQixTQUFrQjtZQUM5QyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFFLEVBQUUsQ0FBQztRQUM5RCxDQUFDOzs7T0FBQTs7Z0JBTStCLFNBQVM7O0lBUmhDO1FBQVIsS0FBSyxFQUFFOzs7aUVBRVA7SUFSVyx1QkFBdUI7UUFIbkMsU0FBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLGtCQUFrQjtTQUM1QixDQUFDO2lEQWUrQixTQUFTO09BZDdCLHVCQUF1QixDQWdCbkM7SUFBRCw4QkFBQztDQUFBLEFBaEJELElBZ0JDO1NBaEJZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnW2Rpc2FibGVDb250cm9sXScsXG59KVxuZXhwb3J0IGNsYXNzIERpc2FibGVDb250cm9sRGlyZWN0aXZlIHtcblxuXHQvKipcblx0KiBAY29uc3RydWN0b3Jcblx0KiBAcGFyYW0ge2Jvb2xlYW59IGNvbmRpdGlvblxuXHQqL1xuXHRASW5wdXQoKSBzZXQgZGlzYWJsZUNvbnRyb2woIGNvbmRpdGlvbjogYm9vbGVhbiApIHtcblx0XHR0aGlzLm5nQ29udHJvbC5jb250cm9sWyBjb25kaXRpb24gPyAnZGlzYWJsZScgOiAnZW5hYmxlJyBdKCk7XG5cdH1cblxuXHQvKipcblx0KiBAY29uc3RydWN0b3Jcblx0KiBAcGFyYW0ge05nQ29udHJvbH0gbmdDb250cm9sXG5cdCovXG5cdGNvbnN0cnVjdG9yKCBwcml2YXRlIG5nQ29udHJvbDogTmdDb250cm9sICkge31cblxufVxuIl19