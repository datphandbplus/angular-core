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
        this.popoverEle = $('<div></div>').addClass('ngx-popover');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wb3Zlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNvcmUvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9wb3BvdmVyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNOLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUM1QixZQUFZLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFDdEMsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxLQUFLLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFFN0IsTUFBTSxDQUFDLEdBQVEsRUFBRSxDQUFDO0FBS2xCLElBQWEsZ0JBQWdCLEdBQTdCLE1BQWEsZ0JBQWdCO0lBNkI1Qjs7O01BR0U7SUFDRixZQUFxQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO0lBQUksQ0FBQztJQTFCaEQ7O01BRUU7SUFDa0MsV0FBVztRQUM5QyxNQUFNLE1BQU0sR0FBUSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzFDLE1BQU0sR0FBRyxHQUFXLE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUN2RCxNQUFNLElBQUksR0FBVyxNQUFNLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFeEQsSUFBSSxDQUFDLFVBQVU7YUFDZCxJQUFJLENBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBRTthQUNwQixHQUFHLENBQUUsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFFLENBQUM7SUFDMUQsQ0FBQztJQUVEOztNQUVFO0lBQ2lDLFVBQVU7UUFDNUMsSUFBSSxDQUFDLFVBQVU7YUFDZCxJQUFJLENBQUUsRUFBRSxDQUFFO2FBQ1YsR0FBRyxDQUFFLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUUsQ0FBQztJQUM5QyxDQUFDO0lBUUQ7O01BRUU7SUFDSyxlQUFlO1FBQ3JCLE1BQU0sSUFBSSxHQUFRLENBQUMsQ0FBRSxNQUFNLENBQUUsQ0FBQztRQUU5QixJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBRSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBRSxDQUFDO1FBRWxELHFCQUFxQjtRQUNyQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUUsY0FBYyxDQUFFLENBQUM7UUFFOUMsSUFBSyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU07WUFBRyxPQUFPO1FBRXJDLHlCQUF5QjtRQUN6QixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBRSxhQUFhLENBQUUsQ0FBQyxRQUFRLENBQUUsYUFBYSxDQUFFLENBQUM7UUFDL0QsSUFBSSxDQUFDLE1BQU0sQ0FBRSxJQUFJLENBQUMsVUFBVSxDQUFFLENBQUM7SUFDaEMsQ0FBQztJQUVEOztNQUVFO0lBQ0ssV0FBVztRQUNqQixJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDN0MsQ0FBQztDQUVELENBQUE7O1lBM0JpQyxVQUFVOztBQS9CbEM7SUFBUixLQUFLLEVBQUU7c0NBQWtCLFdBQVc7aURBQUM7QUFRVDtJQUE1QixZQUFZLENBQUUsV0FBVyxDQUFFOzs7O21EQVEzQjtBQUsyQjtJQUEzQixZQUFZLENBQUUsVUFBVSxDQUFFOzs7O2tEQUkxQjtBQTNCVyxnQkFBZ0I7SUFINUIsU0FBUyxDQUFDO1FBQ1YsUUFBUSxFQUFFLFdBQVc7S0FDckIsQ0FBQzs2Q0FrQ2dDLFVBQVU7R0FqQy9CLGdCQUFnQixDQTRENUI7U0E1RFksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0RGlyZWN0aXZlLCBJbnB1dCwgRWxlbWVudFJlZixcblx0SG9zdExpc3RlbmVyLCBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBfJCBmcm9tICdqcXVlcnknO1xuXG5jb25zdCAkOiBhbnkgPSBfJDtcblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnW3BvcG92ZXJdJyxcbn0pXG5leHBvcnQgY2xhc3MgUG9wb3ZlckRpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG5cblx0QElucHV0KCkgcHJpdmF0ZSBwb3BvdmVyOiBIVE1MRWxlbWVudDtcblxuXHRwcml2YXRlIGVsZW1lbnQ6IGFueTtcblx0cHJpdmF0ZSBwb3BvdmVyRWxlOiBhbnk7XG5cblx0LyoqXG5cdCogQGNvbnN0cnVjdG9yXG5cdCovXG5cdEBIb3N0TGlzdGVuZXIoICdtb3VzZW92ZXInICkgcHVibGljIG9uTW91c2VPdmVyKCkge1xuXHRcdGNvbnN0IG9mZnNldDogYW55ID0gdGhpcy5lbGVtZW50Lm9mZnNldCgpO1xuXHRcdGNvbnN0IHRvcDogbnVtYmVyID0gb2Zmc2V0LnRvcCArIHRoaXMuZWxlbWVudC5oZWlnaHQoKTtcblx0XHRjb25zdCBsZWZ0OiBudW1iZXIgPSBvZmZzZXQubGVmdCArIHRoaXMuZWxlbWVudC53aWR0aCgpO1xuXG5cdFx0dGhpcy5wb3BvdmVyRWxlXG5cdFx0Lmh0bWwoIHRoaXMucG9wb3ZlciApXG5cdFx0LmNzcyggeyB0b3AsIGxlZnQsIHZpc2liaWxpdHk6ICd2aXNpYmxlJywgb3BhY2l0eTogMSB9ICk7XG5cdH1cblxuXHQvKipcblx0KiBAY29uc3RydWN0b3Jcblx0Ki9cblx0QEhvc3RMaXN0ZW5lciggJ21vdXNlb3V0JyApIHB1YmxpYyBvbk1vdXNlT3V0KCkge1xuXHRcdHRoaXMucG9wb3ZlckVsZVxuXHRcdC5odG1sKCAnJyApXG5cdFx0LmNzcyggeyB2aXNpYmlsaXR5OiAnaGlkZGVuJywgb3BhY2l0eTogMCB9ICk7XG5cdH1cblxuXHQvKipcblx0KiBAY29uc3RydWN0b3Jcblx0KiBAcGFyYW0ge0VsZW1lbnRSZWZ9IGVsZW1lbnRSZWZcblx0Ki9cblx0Y29uc3RydWN0b3IoIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiApIHt9XG5cblx0LyoqXG5cdCogQGNvbnN0cnVjdG9yXG5cdCovXG5cdHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKSB7XG5cdFx0Y29uc3QgYm9keTogYW55ID0gJCggJ2JvZHknICk7XG5cblx0XHR0aGlzLmVsZW1lbnQgPSAkKCB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCApO1xuXG5cdFx0Ly8gR2V0IHBvcG92ZXIgZWxtZW50XG5cdFx0dGhpcy5wb3BvdmVyRWxlID0gYm9keS5maW5kKCAnLm5neC1wb3BvdmVyJyApO1xuXG5cdFx0aWYgKCB0aGlzLnBvcG92ZXJFbGUubGVuZ3RoICkgcmV0dXJuO1xuXG5cdFx0Ly8gQXBwZW5kIHBvcG92ZXIgZWxlbWVudFxuXHRcdHRoaXMucG9wb3ZlckVsZSA9ICQoICc8ZGl2PjwvZGl2PicgKS5hZGRDbGFzcyggJ25neC1wb3BvdmVyJyApO1xuXHRcdGJvZHkuYXBwZW5kKCB0aGlzLnBvcG92ZXJFbGUgKTtcblx0fVxuXG5cdC8qKlxuXHQqIEBjb25zdHJ1Y3RvclxuXHQqL1xuXHRwdWJsaWMgbmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy5wb3BvdmVyRWxlICYmIHRoaXMucG9wb3ZlckVsZS5yZW1vdmUoKTtcblx0fVxuXG59XG4iXX0=