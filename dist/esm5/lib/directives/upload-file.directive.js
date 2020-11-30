import * as tslib_1 from "tslib";
import { Directive, ElementRef, Output, EventEmitter } from '@angular/core';
import * as _$ from 'jquery';
var $ = _$;
var UploadFileDirective = /** @class */ (function () {
    /**
    * @constructor
    * @param {ElementRef} elementRef
    */
    function UploadFileDirective(elementRef) {
        var _this = this;
        this.elementRef = elementRef;
        this.onChange = new EventEmitter();
        this.progress = $('<img class="file-upload-progress" src="assets/icons/ring-alt.svg">');
        var element = $(this.elementRef.nativeElement);
        var input = $('<input type="file" accept="image/*" style="display: none">');
        element.addClass('file-upload');
        input.appendTo(element);
        this.progress.hide().appendTo(element);
        element
            .unbind('click.uploadFile')
            .bind('click.uploadFile', function () {
            input[0].click();
        });
        input
            .unbind('change.uploadFile')
            .bind('change.uploadFile', function (event) {
            var file = event.target.files[0];
            if (file) {
                _this.onChange.emit({
                    file: file,
                    target: _this,
                });
            }
        });
    }
    UploadFileDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], UploadFileDirective.prototype, "onChange", void 0);
    UploadFileDirective = tslib_1.__decorate([
        Directive({
            selector: '[uploadFile]',
        }),
        tslib_1.__metadata("design:paramtypes", [ElementRef])
    ], UploadFileDirective);
    return UploadFileDirective;
}());
export { UploadFileDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLWZpbGUuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1jb3JlLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvdXBsb2FkLWZpbGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ04sU0FBUyxFQUFFLFVBQVUsRUFDckIsTUFBTSxFQUFFLFlBQVksRUFDcEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxLQUFLLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFFN0IsSUFBTSxDQUFDLEdBQVEsRUFBRSxDQUFDO0FBS2xCO0lBTUM7OztNQUdFO0lBQ0YsNkJBQXFCLFVBQXNCO1FBQTNDLGlCQTJCQztRQTNCb0IsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQVJ6QixhQUFRLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFFaEUsYUFBUSxHQUFRLENBQUMsQ0FBRSxvRUFBb0UsQ0FBRSxDQUFDO1FBT2pHLElBQU0sT0FBTyxHQUFRLENBQUMsQ0FBRSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBRSxDQUFDO1FBQ3hELElBQU0sS0FBSyxHQUFRLENBQUMsQ0FBRSw0REFBNEQsQ0FBRSxDQUFDO1FBRXJGLE9BQU8sQ0FBQyxRQUFRLENBQUUsYUFBYSxDQUFFLENBQUM7UUFDbEMsS0FBSyxDQUFDLFFBQVEsQ0FBRSxPQUFPLENBQUUsQ0FBQztRQUUxQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLFFBQVEsQ0FBRSxPQUFPLENBQUUsQ0FBQztRQUV6QyxPQUFPO2FBQ04sTUFBTSxDQUFFLGtCQUFrQixDQUFFO2FBQzVCLElBQUksQ0FBRSxrQkFBa0IsRUFBRTtZQUMxQixLQUFLLENBQUUsQ0FBQyxDQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDcEIsQ0FBQyxDQUFFLENBQUM7UUFFSixLQUFLO2FBQ0osTUFBTSxDQUFFLG1CQUFtQixDQUFFO2FBQzdCLElBQUksQ0FBRSxtQkFBbUIsRUFBRSxVQUFFLEtBQVU7WUFDdkMsSUFBTSxJQUFJLEdBQVMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUUsQ0FBQyxDQUFFLENBQUM7WUFFM0MsSUFBSyxJQUFJLEVBQUc7Z0JBQ1gsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7b0JBQ2xCLElBQUksTUFBQTtvQkFDSixNQUFNLEVBQUUsS0FBSTtpQkFDWixDQUFDLENBQUM7YUFDSDtRQUNGLENBQUMsQ0FBRSxDQUFDO0lBQ0wsQ0FBQzs7Z0JBM0JnQyxVQUFVOztJQVJqQztRQUFULE1BQU0sRUFBRTswQ0FBbUIsWUFBWTt5REFBZ0M7SUFGNUQsbUJBQW1CO1FBSC9CLFNBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxjQUFjO1NBQ3hCLENBQUM7aURBV2dDLFVBQVU7T0FWL0IsbUJBQW1CLENBdUMvQjtJQUFELDBCQUFDO0NBQUEsQUF2Q0QsSUF1Q0M7U0F2Q1ksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0RGlyZWN0aXZlLCBFbGVtZW50UmVmLFxuXHRPdXRwdXQsIEV2ZW50RW1pdHRlclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIF8kIGZyb20gJ2pxdWVyeSc7XG5cbmNvbnN0ICQ6IGFueSA9IF8kO1xuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdbdXBsb2FkRmlsZV0nLFxufSlcbmV4cG9ydCBjbGFzcyBVcGxvYWRGaWxlRGlyZWN0aXZlIHtcblxuXHRAT3V0cHV0KCkgcHJpdmF0ZSBvbkNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuXHRwcml2YXRlIHByb2dyZXNzOiBhbnkgPSAkKCAnPGltZyBjbGFzcz1cImZpbGUtdXBsb2FkLXByb2dyZXNzXCIgc3JjPVwiYXNzZXRzL2ljb25zL3JpbmctYWx0LnN2Z1wiPicgKTtcblxuXHQvKipcblx0KiBAY29uc3RydWN0b3Jcblx0KiBAcGFyYW0ge0VsZW1lbnRSZWZ9IGVsZW1lbnRSZWZcblx0Ki9cblx0Y29uc3RydWN0b3IoIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiApIHtcblx0XHRjb25zdCBlbGVtZW50OiBhbnkgPSAkKCB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCApO1xuXHRcdGNvbnN0IGlucHV0OiBhbnkgPSAkKCAnPGlucHV0IHR5cGU9XCJmaWxlXCIgYWNjZXB0PVwiaW1hZ2UvKlwiIHN0eWxlPVwiZGlzcGxheTogbm9uZVwiPicgKTtcblxuXHRcdGVsZW1lbnQuYWRkQ2xhc3MoICdmaWxlLXVwbG9hZCcgKTtcblx0XHRpbnB1dC5hcHBlbmRUbyggZWxlbWVudCApO1xuXG5cdFx0dGhpcy5wcm9ncmVzcy5oaWRlKCkuYXBwZW5kVG8oIGVsZW1lbnQgKTtcblxuXHRcdGVsZW1lbnRcblx0XHQudW5iaW5kKCAnY2xpY2sudXBsb2FkRmlsZScgKVxuXHRcdC5iaW5kKCAnY2xpY2sudXBsb2FkRmlsZScsICgpID0+IHtcblx0XHRcdGlucHV0WyAwIF0uY2xpY2soKTtcblx0XHR9ICk7XG5cblx0XHRpbnB1dFxuXHRcdC51bmJpbmQoICdjaGFuZ2UudXBsb2FkRmlsZScgKVxuXHRcdC5iaW5kKCAnY2hhbmdlLnVwbG9hZEZpbGUnLCAoIGV2ZW50OiBhbnkgKSA9PiB7XG5cdFx0XHRjb25zdCBmaWxlOiBGaWxlID0gZXZlbnQudGFyZ2V0LmZpbGVzWyAwIF07XG5cblx0XHRcdGlmICggZmlsZSApIHtcblx0XHRcdFx0dGhpcy5vbkNoYW5nZS5lbWl0KHtcblx0XHRcdFx0XHRmaWxlLFxuXHRcdFx0XHRcdHRhcmdldDogdGhpcyxcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9XG5cbn1cbiJdfQ==