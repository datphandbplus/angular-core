import * as tslib_1 from "tslib";
import { Directive, ElementRef, Output, EventEmitter } from '@angular/core';
import * as _$ from 'jquery';
const $ = _$;
let UploadFileDirective = class UploadFileDirective {
    /**
    * @constructor
    * @param {ElementRef} elementRef
    */
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.onChange = new EventEmitter();
        this.progress = $('<img class="file-upload-progress" src="assets/icons/ring-alt.svg">');
        const element = $(this.elementRef.nativeElement);
        const input = $('<input type="file" accept="image/*" style="display: none">');
        element.addClass('file-upload');
        input.appendTo(element);
        this.progress.hide().appendTo(element);
        element
            .unbind('click.uploadFile')
            .bind('click.uploadFile', () => {
            input[0].click();
        });
        input
            .unbind('change.uploadFile')
            .bind('change.uploadFile', (event) => {
            const file = event.target.files[0];
            if (file) {
                this.onChange.emit({
                    file,
                    target: this,
                });
            }
        });
    }
};
UploadFileDirective.ctorParameters = () => [
    { type: ElementRef }
];
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
export { UploadFileDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLWZpbGUuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1jb3JlLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvdXBsb2FkLWZpbGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ04sU0FBUyxFQUFFLFVBQVUsRUFDckIsTUFBTSxFQUFFLFlBQVksRUFDcEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxLQUFLLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFFN0IsTUFBTSxDQUFDLEdBQVEsRUFBRSxDQUFDO0FBS2xCLElBQWEsbUJBQW1CLEdBQWhDLE1BQWEsbUJBQW1CO0lBTS9COzs7TUFHRTtJQUNGLFlBQXFCLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFSekIsYUFBUSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBRWhFLGFBQVEsR0FBUSxDQUFDLENBQUUsb0VBQW9FLENBQUUsQ0FBQztRQU9qRyxNQUFNLE9BQU8sR0FBUSxDQUFDLENBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUUsQ0FBQztRQUN4RCxNQUFNLEtBQUssR0FBUSxDQUFDLENBQUUsNERBQTRELENBQUUsQ0FBQztRQUVyRixPQUFPLENBQUMsUUFBUSxDQUFFLGFBQWEsQ0FBRSxDQUFDO1FBQ2xDLEtBQUssQ0FBQyxRQUFRLENBQUUsT0FBTyxDQUFFLENBQUM7UUFFMUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxRQUFRLENBQUUsT0FBTyxDQUFFLENBQUM7UUFFekMsT0FBTzthQUNOLE1BQU0sQ0FBRSxrQkFBa0IsQ0FBRTthQUM1QixJQUFJLENBQUUsa0JBQWtCLEVBQUUsR0FBRyxFQUFFO1lBQy9CLEtBQUssQ0FBRSxDQUFDLENBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNwQixDQUFDLENBQUUsQ0FBQztRQUVKLEtBQUs7YUFDSixNQUFNLENBQUUsbUJBQW1CLENBQUU7YUFDN0IsSUFBSSxDQUFFLG1CQUFtQixFQUFFLENBQUUsS0FBVSxFQUFHLEVBQUU7WUFDNUMsTUFBTSxJQUFJLEdBQVMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUUsQ0FBQyxDQUFFLENBQUM7WUFFM0MsSUFBSyxJQUFJLEVBQUc7Z0JBQ1gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7b0JBQ2xCLElBQUk7b0JBQ0osTUFBTSxFQUFFLElBQUk7aUJBQ1osQ0FBQyxDQUFDO2FBQ0g7UUFDRixDQUFDLENBQUUsQ0FBQztJQUNMLENBQUM7Q0FFRCxDQUFBOztZQTdCaUMsVUFBVTs7QUFSakM7SUFBVCxNQUFNLEVBQUU7c0NBQW1CLFlBQVk7cURBQWdDO0FBRjVELG1CQUFtQjtJQUgvQixTQUFTLENBQUM7UUFDVixRQUFRLEVBQUUsY0FBYztLQUN4QixDQUFDOzZDQVdnQyxVQUFVO0dBVi9CLG1CQUFtQixDQXVDL0I7U0F2Q1ksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0RGlyZWN0aXZlLCBFbGVtZW50UmVmLFxuXHRPdXRwdXQsIEV2ZW50RW1pdHRlclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIF8kIGZyb20gJ2pxdWVyeSc7XG5cbmNvbnN0ICQ6IGFueSA9IF8kO1xuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdbdXBsb2FkRmlsZV0nLFxufSlcbmV4cG9ydCBjbGFzcyBVcGxvYWRGaWxlRGlyZWN0aXZlIHtcblxuXHRAT3V0cHV0KCkgcHJpdmF0ZSBvbkNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuXHRwcml2YXRlIHByb2dyZXNzOiBhbnkgPSAkKCAnPGltZyBjbGFzcz1cImZpbGUtdXBsb2FkLXByb2dyZXNzXCIgc3JjPVwiYXNzZXRzL2ljb25zL3JpbmctYWx0LnN2Z1wiPicgKTtcblxuXHQvKipcblx0KiBAY29uc3RydWN0b3Jcblx0KiBAcGFyYW0ge0VsZW1lbnRSZWZ9IGVsZW1lbnRSZWZcblx0Ki9cblx0Y29uc3RydWN0b3IoIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiApIHtcblx0XHRjb25zdCBlbGVtZW50OiBhbnkgPSAkKCB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCApO1xuXHRcdGNvbnN0IGlucHV0OiBhbnkgPSAkKCAnPGlucHV0IHR5cGU9XCJmaWxlXCIgYWNjZXB0PVwiaW1hZ2UvKlwiIHN0eWxlPVwiZGlzcGxheTogbm9uZVwiPicgKTtcblxuXHRcdGVsZW1lbnQuYWRkQ2xhc3MoICdmaWxlLXVwbG9hZCcgKTtcblx0XHRpbnB1dC5hcHBlbmRUbyggZWxlbWVudCApO1xuXG5cdFx0dGhpcy5wcm9ncmVzcy5oaWRlKCkuYXBwZW5kVG8oIGVsZW1lbnQgKTtcblxuXHRcdGVsZW1lbnRcblx0XHQudW5iaW5kKCAnY2xpY2sudXBsb2FkRmlsZScgKVxuXHRcdC5iaW5kKCAnY2xpY2sudXBsb2FkRmlsZScsICgpID0+IHtcblx0XHRcdGlucHV0WyAwIF0uY2xpY2soKTtcblx0XHR9ICk7XG5cblx0XHRpbnB1dFxuXHRcdC51bmJpbmQoICdjaGFuZ2UudXBsb2FkRmlsZScgKVxuXHRcdC5iaW5kKCAnY2hhbmdlLnVwbG9hZEZpbGUnLCAoIGV2ZW50OiBhbnkgKSA9PiB7XG5cdFx0XHRjb25zdCBmaWxlOiBGaWxlID0gZXZlbnQudGFyZ2V0LmZpbGVzWyAwIF07XG5cblx0XHRcdGlmICggZmlsZSApIHtcblx0XHRcdFx0dGhpcy5vbkNoYW5nZS5lbWl0KHtcblx0XHRcdFx0XHRmaWxlLFxuXHRcdFx0XHRcdHRhcmdldDogdGhpcyxcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9XG5cbn1cbiJdfQ==