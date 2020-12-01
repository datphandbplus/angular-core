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
        this.popoverEle = $('<div></div>').addClass('plugin-popover');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wb3Zlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNvcmUvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9wb3BvdmVyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNOLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUM1QixZQUFZLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFDdEMsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxLQUFLLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFFN0IsSUFBTSxDQUFDLEdBQVEsRUFBRSxDQUFDO0FBS2xCO0lBNkJDOzs7TUFHRTtJQUNGLDBCQUFxQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO0lBQUksQ0FBQztJQTFCaEQ7O01BRUU7SUFDa0Msc0NBQVcsR0FBbEI7UUFDNUIsSUFBTSxNQUFNLEdBQVEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUMxQyxJQUFNLEdBQUcsR0FBVyxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDdkQsSUFBTSxJQUFJLEdBQVcsTUFBTSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRXhELElBQUksQ0FBQyxVQUFVO2FBQ2QsSUFBSSxDQUFFLElBQUksQ0FBQyxPQUFPLENBQUU7YUFDcEIsR0FBRyxDQUFFLEVBQUUsR0FBRyxLQUFBLEVBQUUsSUFBSSxNQUFBLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUUsQ0FBQztJQUMxRCxDQUFDO0lBRUQ7O01BRUU7SUFDaUMscUNBQVUsR0FBakI7UUFDM0IsSUFBSSxDQUFDLFVBQVU7YUFDZCxJQUFJLENBQUUsRUFBRSxDQUFFO2FBQ1YsR0FBRyxDQUFFLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUUsQ0FBQztJQUM5QyxDQUFDO0lBUUQ7O01BRUU7SUFDSywwQ0FBZSxHQUF0QjtRQUNDLElBQU0sSUFBSSxHQUFRLENBQUMsQ0FBRSxNQUFNLENBQUUsQ0FBQztRQUU5QixJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBRSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBRSxDQUFDO1FBRWxELHFCQUFxQjtRQUNyQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUUsY0FBYyxDQUFFLENBQUM7UUFFOUMsSUFBSyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU07WUFBRyxPQUFPO1FBRXJDLHlCQUF5QjtRQUN6QixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBRSxhQUFhLENBQUUsQ0FBQyxRQUFRLENBQUUsZ0JBQWdCLENBQUUsQ0FBQztRQUNsRSxJQUFJLENBQUMsTUFBTSxDQUFFLElBQUksQ0FBQyxVQUFVLENBQUUsQ0FBQztJQUNoQyxDQUFDO0lBRUQ7O01BRUU7SUFDSyxzQ0FBVyxHQUFsQjtRQUNDLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUM3QyxDQUFDOztnQkF6QmdDLFVBQVU7O0lBL0JsQztRQUFSLEtBQUssRUFBRTswQ0FBa0IsV0FBVztxREFBQztJQVFUO1FBQTVCLFlBQVksQ0FBRSxXQUFXLENBQUU7Ozs7dURBUTNCO0lBSzJCO1FBQTNCLFlBQVksQ0FBRSxVQUFVLENBQUU7Ozs7c0RBSTFCO0lBM0JXLGdCQUFnQjtRQUg1QixTQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsV0FBVztTQUNyQixDQUFDO2lEQWtDZ0MsVUFBVTtPQWpDL0IsZ0JBQWdCLENBNEQ1QjtJQUFELHVCQUFDO0NBQUEsQUE1REQsSUE0REM7U0E1RFksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0RGlyZWN0aXZlLCBJbnB1dCwgRWxlbWVudFJlZixcblx0SG9zdExpc3RlbmVyLCBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBfJCBmcm9tICdqcXVlcnknO1xuXG5jb25zdCAkOiBhbnkgPSBfJDtcblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnW3BvcG92ZXJdJyxcbn0pXG5leHBvcnQgY2xhc3MgUG9wb3ZlckRpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG5cblx0QElucHV0KCkgcHJpdmF0ZSBwb3BvdmVyOiBIVE1MRWxlbWVudDtcblxuXHRwcml2YXRlIGVsZW1lbnQ6IGFueTtcblx0cHJpdmF0ZSBwb3BvdmVyRWxlOiBhbnk7XG5cblx0LyoqXG5cdCogQGNvbnN0cnVjdG9yXG5cdCovXG5cdEBIb3N0TGlzdGVuZXIoICdtb3VzZW92ZXInICkgcHVibGljIG9uTW91c2VPdmVyKCkge1xuXHRcdGNvbnN0IG9mZnNldDogYW55ID0gdGhpcy5lbGVtZW50Lm9mZnNldCgpO1xuXHRcdGNvbnN0IHRvcDogbnVtYmVyID0gb2Zmc2V0LnRvcCArIHRoaXMuZWxlbWVudC5oZWlnaHQoKTtcblx0XHRjb25zdCBsZWZ0OiBudW1iZXIgPSBvZmZzZXQubGVmdCArIHRoaXMuZWxlbWVudC53aWR0aCgpO1xuXG5cdFx0dGhpcy5wb3BvdmVyRWxlXG5cdFx0Lmh0bWwoIHRoaXMucG9wb3ZlciApXG5cdFx0LmNzcyggeyB0b3AsIGxlZnQsIHZpc2liaWxpdHk6ICd2aXNpYmxlJywgb3BhY2l0eTogMSB9ICk7XG5cdH1cblxuXHQvKipcblx0KiBAY29uc3RydWN0b3Jcblx0Ki9cblx0QEhvc3RMaXN0ZW5lciggJ21vdXNlb3V0JyApIHB1YmxpYyBvbk1vdXNlT3V0KCkge1xuXHRcdHRoaXMucG9wb3ZlckVsZVxuXHRcdC5odG1sKCAnJyApXG5cdFx0LmNzcyggeyB2aXNpYmlsaXR5OiAnaGlkZGVuJywgb3BhY2l0eTogMCB9ICk7XG5cdH1cblxuXHQvKipcblx0KiBAY29uc3RydWN0b3Jcblx0KiBAcGFyYW0ge0VsZW1lbnRSZWZ9IGVsZW1lbnRSZWZcblx0Ki9cblx0Y29uc3RydWN0b3IoIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiApIHt9XG5cblx0LyoqXG5cdCogQGNvbnN0cnVjdG9yXG5cdCovXG5cdHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKSB7XG5cdFx0Y29uc3QgYm9keTogYW55ID0gJCggJ2JvZHknICk7XG5cblx0XHR0aGlzLmVsZW1lbnQgPSAkKCB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCApO1xuXG5cdFx0Ly8gR2V0IHBvcG92ZXIgZWxtZW50XG5cdFx0dGhpcy5wb3BvdmVyRWxlID0gYm9keS5maW5kKCAnLm5neC1wb3BvdmVyJyApO1xuXG5cdFx0aWYgKCB0aGlzLnBvcG92ZXJFbGUubGVuZ3RoICkgcmV0dXJuO1xuXG5cdFx0Ly8gQXBwZW5kIHBvcG92ZXIgZWxlbWVudFxuXHRcdHRoaXMucG9wb3ZlckVsZSA9ICQoICc8ZGl2PjwvZGl2PicgKS5hZGRDbGFzcyggJ3BsdWdpbi1wb3BvdmVyJyApO1xuXHRcdGJvZHkuYXBwZW5kKCB0aGlzLnBvcG92ZXJFbGUgKTtcblx0fVxuXG5cdC8qKlxuXHQqIEBjb25zdHJ1Y3RvclxuXHQqL1xuXHRwdWJsaWMgbmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy5wb3BvdmVyRWxlICYmIHRoaXMucG9wb3ZlckVsZS5yZW1vdmUoKTtcblx0fVxuXG59XG4iXX0=