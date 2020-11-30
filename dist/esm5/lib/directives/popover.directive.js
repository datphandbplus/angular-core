import * as tslib_1 from "tslib";
import { Directive, Input, ElementRef, HostListener, OnDestroy, AfterViewInit } from '@angular/core';
import * as _$ from 'jquery';
var $ = _$;
var PopoverDirective = /** @class */ (function () {
    /**
    * @constructor
    * @param {ElementRef} elementRef
    */
    function PopoverDirective(elementRef) {
        this.elementRef = elementRef;
    }
    /**
    * @constructor
    */
    PopoverDirective.prototype.onMouseOver = function () {
        var offset = this.element.offset();
        var top = offset.top + this.element.height();
        var left = offset.left + this.element.width();
        this.popoverEle
            .html(this.popover)
            .css({ top: top, left: left, visibility: 'visible', opacity: 1 });
    };
    /**
    * @constructor
    */
    PopoverDirective.prototype.onMouseOut = function () {
        this.popoverEle
            .html('')
            .css({ visibility: 'hidden', opacity: 0 });
    };
    /**
    * @constructor
    */
    PopoverDirective.prototype.ngAfterViewInit = function () {
        var body = $('body');
        this.element = $(this.elementRef.nativeElement);
        // Get popover elment
        this.popoverEle = body.find('.ngx-popover');
        if (this.popoverEle.length)
            return;
        // Append popover element
        this.popoverEle = $('<div></div>').addClass('ngx-popover');
        body.append(this.popoverEle);
    };
    /**
    * @constructor
    */
    PopoverDirective.prototype.ngOnDestroy = function () {
        this.popoverEle && this.popoverEle.remove();
    };
    PopoverDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
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
    return PopoverDirective;
}());
export { PopoverDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wb3Zlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNvcmUvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9wb3BvdmVyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNOLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUM1QixZQUFZLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFDdEMsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxLQUFLLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFFN0IsSUFBTSxDQUFDLEdBQVEsRUFBRSxDQUFDO0FBS2xCO0lBNkJDOzs7TUFHRTtJQUNGLDBCQUFxQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO0lBQUksQ0FBQztJQTFCaEQ7O01BRUU7SUFDa0Msc0NBQVcsR0FBbEI7UUFDNUIsSUFBTSxNQUFNLEdBQVEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUMxQyxJQUFNLEdBQUcsR0FBVyxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDdkQsSUFBTSxJQUFJLEdBQVcsTUFBTSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRXhELElBQUksQ0FBQyxVQUFVO2FBQ2QsSUFBSSxDQUFFLElBQUksQ0FBQyxPQUFPLENBQUU7YUFDcEIsR0FBRyxDQUFFLEVBQUUsR0FBRyxLQUFBLEVBQUUsSUFBSSxNQUFBLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUUsQ0FBQztJQUMxRCxDQUFDO0lBRUQ7O01BRUU7SUFDaUMscUNBQVUsR0FBakI7UUFDM0IsSUFBSSxDQUFDLFVBQVU7YUFDZCxJQUFJLENBQUUsRUFBRSxDQUFFO2FBQ1YsR0FBRyxDQUFFLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUUsQ0FBQztJQUM5QyxDQUFDO0lBUUQ7O01BRUU7SUFDSywwQ0FBZSxHQUF0QjtRQUNDLElBQU0sSUFBSSxHQUFRLENBQUMsQ0FBRSxNQUFNLENBQUUsQ0FBQztRQUU5QixJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBRSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBRSxDQUFDO1FBRWxELHFCQUFxQjtRQUNyQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUUsY0FBYyxDQUFFLENBQUM7UUFFOUMsSUFBSyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU07WUFBRyxPQUFPO1FBRXJDLHlCQUF5QjtRQUN6QixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBRSxhQUFhLENBQUUsQ0FBQyxRQUFRLENBQUUsYUFBYSxDQUFFLENBQUM7UUFDL0QsSUFBSSxDQUFDLE1BQU0sQ0FBRSxJQUFJLENBQUMsVUFBVSxDQUFFLENBQUM7SUFDaEMsQ0FBQztJQUVEOztNQUVFO0lBQ0ssc0NBQVcsR0FBbEI7UUFDQyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDN0MsQ0FBQzs7Z0JBekJnQyxVQUFVOztJQS9CbEM7UUFBUixLQUFLLEVBQUU7MENBQWtCLFdBQVc7cURBQUM7SUFRVDtRQUE1QixZQUFZLENBQUUsV0FBVyxDQUFFOzs7O3VEQVEzQjtJQUsyQjtRQUEzQixZQUFZLENBQUUsVUFBVSxDQUFFOzs7O3NEQUkxQjtJQTNCVyxnQkFBZ0I7UUFINUIsU0FBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLFdBQVc7U0FDckIsQ0FBQztpREFrQ2dDLFVBQVU7T0FqQy9CLGdCQUFnQixDQTRENUI7SUFBRCx1QkFBQztDQUFBLEFBNURELElBNERDO1NBNURZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdERpcmVjdGl2ZSwgSW5wdXQsIEVsZW1lbnRSZWYsXG5cdEhvc3RMaXN0ZW5lciwgT25EZXN0cm95LCBBZnRlclZpZXdJbml0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgXyQgZnJvbSAnanF1ZXJ5JztcblxuY29uc3QgJDogYW55ID0gXyQ7XG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ1twb3BvdmVyXScsXG59KVxuZXhwb3J0IGNsYXNzIFBvcG92ZXJEaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuXG5cdEBJbnB1dCgpIHByaXZhdGUgcG9wb3ZlcjogSFRNTEVsZW1lbnQ7XG5cblx0cHJpdmF0ZSBlbGVtZW50OiBhbnk7XG5cdHByaXZhdGUgcG9wb3ZlckVsZTogYW55O1xuXG5cdC8qKlxuXHQqIEBjb25zdHJ1Y3RvclxuXHQqL1xuXHRASG9zdExpc3RlbmVyKCAnbW91c2VvdmVyJyApIHB1YmxpYyBvbk1vdXNlT3ZlcigpIHtcblx0XHRjb25zdCBvZmZzZXQ6IGFueSA9IHRoaXMuZWxlbWVudC5vZmZzZXQoKTtcblx0XHRjb25zdCB0b3A6IG51bWJlciA9IG9mZnNldC50b3AgKyB0aGlzLmVsZW1lbnQuaGVpZ2h0KCk7XG5cdFx0Y29uc3QgbGVmdDogbnVtYmVyID0gb2Zmc2V0LmxlZnQgKyB0aGlzLmVsZW1lbnQud2lkdGgoKTtcblxuXHRcdHRoaXMucG9wb3ZlckVsZVxuXHRcdC5odG1sKCB0aGlzLnBvcG92ZXIgKVxuXHRcdC5jc3MoIHsgdG9wLCBsZWZ0LCB2aXNpYmlsaXR5OiAndmlzaWJsZScsIG9wYWNpdHk6IDEgfSApO1xuXHR9XG5cblx0LyoqXG5cdCogQGNvbnN0cnVjdG9yXG5cdCovXG5cdEBIb3N0TGlzdGVuZXIoICdtb3VzZW91dCcgKSBwdWJsaWMgb25Nb3VzZU91dCgpIHtcblx0XHR0aGlzLnBvcG92ZXJFbGVcblx0XHQuaHRtbCggJycgKVxuXHRcdC5jc3MoIHsgdmlzaWJpbGl0eTogJ2hpZGRlbicsIG9wYWNpdHk6IDAgfSApO1xuXHR9XG5cblx0LyoqXG5cdCogQGNvbnN0cnVjdG9yXG5cdCogQHBhcmFtIHtFbGVtZW50UmVmfSBlbGVtZW50UmVmXG5cdCovXG5cdGNvbnN0cnVjdG9yKCBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYgKSB7fVxuXG5cdC8qKlxuXHQqIEBjb25zdHJ1Y3RvclxuXHQqL1xuXHRwdWJsaWMgbmdBZnRlclZpZXdJbml0KCkge1xuXHRcdGNvbnN0IGJvZHk6IGFueSA9ICQoICdib2R5JyApO1xuXG5cdFx0dGhpcy5lbGVtZW50ID0gJCggdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQgKTtcblxuXHRcdC8vIEdldCBwb3BvdmVyIGVsbWVudFxuXHRcdHRoaXMucG9wb3ZlckVsZSA9IGJvZHkuZmluZCggJy5uZ3gtcG9wb3ZlcicgKTtcblxuXHRcdGlmICggdGhpcy5wb3BvdmVyRWxlLmxlbmd0aCApIHJldHVybjtcblxuXHRcdC8vIEFwcGVuZCBwb3BvdmVyIGVsZW1lbnRcblx0XHR0aGlzLnBvcG92ZXJFbGUgPSAkKCAnPGRpdj48L2Rpdj4nICkuYWRkQ2xhc3MoICduZ3gtcG9wb3ZlcicgKTtcblx0XHRib2R5LmFwcGVuZCggdGhpcy5wb3BvdmVyRWxlICk7XG5cdH1cblxuXHQvKipcblx0KiBAY29uc3RydWN0b3Jcblx0Ki9cblx0cHVibGljIG5nT25EZXN0cm95KCkge1xuXHRcdHRoaXMucG9wb3ZlckVsZSAmJiB0aGlzLnBvcG92ZXJFbGUucmVtb3ZlKCk7XG5cdH1cblxufVxuIl19