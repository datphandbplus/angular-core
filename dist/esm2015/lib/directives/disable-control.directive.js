import * as tslib_1 from "tslib";
import { Directive, Input } from '@angular/core';
import { NgControl } from '@angular/forms';
let DisableControlDirective = class DisableControlDirective {
    /**
    * @constructor
    * @param {NgControl} ngControl
    */
    constructor(ngControl) {
        this.ngControl = ngControl;
    }
    /**
    * @constructor
    * @param {boolean} condition
    */
    set disableControl(condition) {
        this.ngControl.control[condition ? 'disable' : 'enable']();
    }
};
DisableControlDirective.ctorParameters = () => [
    { type: NgControl }
];
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
export { DisableControlDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzYWJsZS1jb250cm9sLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItY29yZS8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL2Rpc2FibGUtY29udHJvbC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUszQyxJQUFhLHVCQUF1QixHQUFwQyxNQUFhLHVCQUF1QjtJQVVuQzs7O01BR0U7SUFDRixZQUFxQixTQUFvQjtRQUFwQixjQUFTLEdBQVQsU0FBUyxDQUFXO0lBQUksQ0FBQztJQVo5Qzs7O01BR0U7SUFDTyxJQUFJLGNBQWMsQ0FBRSxTQUFrQjtRQUM5QyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFFLEVBQUUsQ0FBQztJQUM5RCxDQUFDO0NBUUQsQ0FBQTs7WUFGZ0MsU0FBUzs7QUFSaEM7SUFBUixLQUFLLEVBQUU7Ozs2REFFUDtBQVJXLHVCQUF1QjtJQUhuQyxTQUFTLENBQUM7UUFDVixRQUFRLEVBQUUsa0JBQWtCO0tBQzVCLENBQUM7NkNBZStCLFNBQVM7R0FkN0IsdUJBQXVCLENBZ0JuQztTQWhCWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ0NvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ1tkaXNhYmxlQ29udHJvbF0nLFxufSlcbmV4cG9ydCBjbGFzcyBEaXNhYmxlQ29udHJvbERpcmVjdGl2ZSB7XG5cblx0LyoqXG5cdCogQGNvbnN0cnVjdG9yXG5cdCogQHBhcmFtIHtib29sZWFufSBjb25kaXRpb25cblx0Ki9cblx0QElucHV0KCkgc2V0IGRpc2FibGVDb250cm9sKCBjb25kaXRpb246IGJvb2xlYW4gKSB7XG5cdFx0dGhpcy5uZ0NvbnRyb2wuY29udHJvbFsgY29uZGl0aW9uID8gJ2Rpc2FibGUnIDogJ2VuYWJsZScgXSgpO1xuXHR9XG5cblx0LyoqXG5cdCogQGNvbnN0cnVjdG9yXG5cdCogQHBhcmFtIHtOZ0NvbnRyb2x9IG5nQ29udHJvbFxuXHQqL1xuXHRjb25zdHJ1Y3RvciggcHJpdmF0ZSBuZ0NvbnRyb2w6IE5nQ29udHJvbCApIHt9XG5cbn1cbiJdfQ==