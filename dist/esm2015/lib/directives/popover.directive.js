import * as tslib_1 from "tslib";
import { Directive, Input, ElementRef, HostListener, OnDestroy, AfterViewInit } from '@angular/core';
import * as _$ from 'jquery';
const $ = _$;
let PopoverDirective = class PopoverDirective {
    /**
    * @constructor
    * @param {ElementRef} elementRef
    */
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
    /**
    * @constructor
    */
    onMouseOver() {
        const offset = this.element.offset();
        const top = offset.top + this.element.height();
        const left = offset.left + this.element.width();
        this.popoverEle
            .html(this.popover)
            .css({ top, left, visibility: 'visible', opacity: 1 });
    }
    /**
    * @constructor
    */
    onMouseOut() {
        this.popoverEle
            .html('')
            .css({ visibility: 'hidden', opacity: 0 });
    }
    /**
    * @constructor
    */
    ngAfterViewInit() {
        const body = $('body');
        this.element = $(this.elementRef.nativeElement);
        // Get popover elment
        this.popoverEle = body.find('.ngx-popover');
        if (this.popoverEle.length)
            return;
        // Append popover element
        this.popoverEle = $('<div></div>').addClass('plugin-popover');
        body.append(this.popoverEle);
    }
    /**
    * @constructor
    */
    ngOnDestroy() {
        this.popoverEle && this.popoverEle.remove();
    }
};
PopoverDirective.ctorParameters = () => [
    { type: ElementRef }
];
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", HTMLElement)
], PopoverDirective.prototype, "popover", void 0);
tslib_1.__decorate([
    HostListener('mouseover'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], PopoverDirective.prototype, "onMouseOver", null);
tslib_1.__decorate([
    HostListener('mouseout'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], PopoverDirective.prototype, "onMouseOut", null);
PopoverDirective = tslib_1.__decorate([
    Directive({
        selector: '[popover]',
    }),
    tslib_1.__metadata("design:paramtypes", [ElementRef])
], PopoverDirective);
export { PopoverDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wb3Zlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNvcmUvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9wb3BvdmVyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNOLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUM1QixZQUFZLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFDdEMsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxLQUFLLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFFN0IsTUFBTSxDQUFDLEdBQVEsRUFBRSxDQUFDO0FBS2xCLElBQWEsZ0JBQWdCLEdBQTdCLE1BQWEsZ0JBQWdCO0lBNkI1Qjs7O01BR0U7SUFDRixZQUFxQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO0lBQUksQ0FBQztJQTFCaEQ7O01BRUU7SUFDa0MsV0FBVztRQUM5QyxNQUFNLE1BQU0sR0FBUSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzFDLE1BQU0sR0FBRyxHQUFXLE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUN2RCxNQUFNLElBQUksR0FBVyxNQUFNLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFeEQsSUFBSSxDQUFDLFVBQVU7YUFDZCxJQUFJLENBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBRTthQUNwQixHQUFHLENBQUUsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFFLENBQUM7SUFDMUQsQ0FBQztJQUVEOztNQUVFO0lBQ2lDLFVBQVU7UUFDNUMsSUFBSSxDQUFDLFVBQVU7YUFDZCxJQUFJLENBQUUsRUFBRSxDQUFFO2FBQ1YsR0FBRyxDQUFFLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUUsQ0FBQztJQUM5QyxDQUFDO0lBUUQ7O01BRUU7SUFDSyxlQUFlO1FBQ3JCLE1BQU0sSUFBSSxHQUFRLENBQUMsQ0FBRSxNQUFNLENBQUUsQ0FBQztRQUU5QixJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBRSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBRSxDQUFDO1FBRWxELHFCQUFxQjtRQUNyQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUUsY0FBYyxDQUFFLENBQUM7UUFFOUMsSUFBSyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU07WUFBRyxPQUFPO1FBRXJDLHlCQUF5QjtRQUN6QixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBRSxhQUFhLENBQUUsQ0FBQyxRQUFRLENBQUUsZ0JBQWdCLENBQUUsQ0FBQztRQUNsRSxJQUFJLENBQUMsTUFBTSxDQUFFLElBQUksQ0FBQyxVQUFVLENBQUUsQ0FBQztJQUNoQyxDQUFDO0lBRUQ7O01BRUU7SUFDSyxXQUFXO1FBQ2pCLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUM3QyxDQUFDO0NBRUQsQ0FBQTs7WUEzQmlDLFVBQVU7O0FBL0JsQztJQUFSLEtBQUssRUFBRTtzQ0FBa0IsV0FBVztpREFBQztBQVFUO0lBQTVCLFlBQVksQ0FBRSxXQUFXLENBQUU7Ozs7bURBUTNCO0FBSzJCO0lBQTNCLFlBQVksQ0FBRSxVQUFVLENBQUU7Ozs7a0RBSTFCO0FBM0JXLGdCQUFnQjtJQUg1QixTQUFTLENBQUM7UUFDVixRQUFRLEVBQUUsV0FBVztLQUNyQixDQUFDOzZDQWtDZ0MsVUFBVTtHQWpDL0IsZ0JBQWdCLENBNEQ1QjtTQTVEWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHREaXJlY3RpdmUsIElucHV0LCBFbGVtZW50UmVmLFxuXHRIb3N0TGlzdGVuZXIsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIF8kIGZyb20gJ2pxdWVyeSc7XG5cbmNvbnN0ICQ6IGFueSA9IF8kO1xuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdbcG9wb3Zlcl0nLFxufSlcbmV4cG9ydCBjbGFzcyBQb3BvdmVyRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcblxuXHRASW5wdXQoKSBwcml2YXRlIHBvcG92ZXI6IEhUTUxFbGVtZW50O1xuXG5cdHByaXZhdGUgZWxlbWVudDogYW55O1xuXHRwcml2YXRlIHBvcG92ZXJFbGU6IGFueTtcblxuXHQvKipcblx0KiBAY29uc3RydWN0b3Jcblx0Ki9cblx0QEhvc3RMaXN0ZW5lciggJ21vdXNlb3ZlcicgKSBwdWJsaWMgb25Nb3VzZU92ZXIoKSB7XG5cdFx0Y29uc3Qgb2Zmc2V0OiBhbnkgPSB0aGlzLmVsZW1lbnQub2Zmc2V0KCk7XG5cdFx0Y29uc3QgdG9wOiBudW1iZXIgPSBvZmZzZXQudG9wICsgdGhpcy5lbGVtZW50LmhlaWdodCgpO1xuXHRcdGNvbnN0IGxlZnQ6IG51bWJlciA9IG9mZnNldC5sZWZ0ICsgdGhpcy5lbGVtZW50LndpZHRoKCk7XG5cblx0XHR0aGlzLnBvcG92ZXJFbGVcblx0XHQuaHRtbCggdGhpcy5wb3BvdmVyIClcblx0XHQuY3NzKCB7IHRvcCwgbGVmdCwgdmlzaWJpbGl0eTogJ3Zpc2libGUnLCBvcGFjaXR5OiAxIH0gKTtcblx0fVxuXG5cdC8qKlxuXHQqIEBjb25zdHJ1Y3RvclxuXHQqL1xuXHRASG9zdExpc3RlbmVyKCAnbW91c2VvdXQnICkgcHVibGljIG9uTW91c2VPdXQoKSB7XG5cdFx0dGhpcy5wb3BvdmVyRWxlXG5cdFx0Lmh0bWwoICcnIClcblx0XHQuY3NzKCB7IHZpc2liaWxpdHk6ICdoaWRkZW4nLCBvcGFjaXR5OiAwIH0gKTtcblx0fVxuXG5cdC8qKlxuXHQqIEBjb25zdHJ1Y3RvclxuXHQqIEBwYXJhbSB7RWxlbWVudFJlZn0gZWxlbWVudFJlZlxuXHQqL1xuXHRjb25zdHJ1Y3RvciggcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmICkge31cblxuXHQvKipcblx0KiBAY29uc3RydWN0b3Jcblx0Ki9cblx0cHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblx0XHRjb25zdCBib2R5OiBhbnkgPSAkKCAnYm9keScgKTtcblxuXHRcdHRoaXMuZWxlbWVudCA9ICQoIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50ICk7XG5cblx0XHQvLyBHZXQgcG9wb3ZlciBlbG1lbnRcblx0XHR0aGlzLnBvcG92ZXJFbGUgPSBib2R5LmZpbmQoICcubmd4LXBvcG92ZXInICk7XG5cblx0XHRpZiAoIHRoaXMucG9wb3ZlckVsZS5sZW5ndGggKSByZXR1cm47XG5cblx0XHQvLyBBcHBlbmQgcG9wb3ZlciBlbGVtZW50XG5cdFx0dGhpcy5wb3BvdmVyRWxlID0gJCggJzxkaXY+PC9kaXY+JyApLmFkZENsYXNzKCAncGx1Z2luLXBvcG92ZXInICk7XG5cdFx0Ym9keS5hcHBlbmQoIHRoaXMucG9wb3ZlckVsZSApO1xuXHR9XG5cblx0LyoqXG5cdCogQGNvbnN0cnVjdG9yXG5cdCovXG5cdHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcblx0XHR0aGlzLnBvcG92ZXJFbGUgJiYgdGhpcy5wb3BvdmVyRWxlLnJlbW92ZSgpO1xuXHR9XG5cbn1cbiJdfQ==