import * as tslib_1 from "tslib";
import { Directive, ElementRef, AfterContentChecked } from '@angular/core';
import * as _$ from 'jquery';
const $ = _$;
let AdjustFontsizeDirective = class AdjustFontsizeDirective {
    /**
    * @constructor
    * @param {ElementRef} elementRef
    */
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.element = $(this.elementRef.nativeElement);
    }
    /**
    * @constructor
    */
    ngAfterContentChecked() {
        const elementWidth = (this.element.width() || 0);
        const parentWidth = (this.element.parent().width() || 0) - (this.element.siblings().width() || 0);
        if (elementWidth <= 0
            || parentWidth <= 0
            || elementWidth <= parentWidth)
            return;
        const newFontsize = +this.element.css('font-size').replace('px', '')
            * (parentWidth / elementWidth);
        this.element.css({
            'font-size': newFontsize + 'px',
            'line-height': newFontsize + 'px',
        });
    }
};
AdjustFontsizeDirective.ctorParameters = () => [
    { type: ElementRef }
];
AdjustFontsizeDirective = tslib_1.__decorate([
    Directive({
        selector: '[adjustFontsize]',
    }),
    tslib_1.__metadata("design:paramtypes", [ElementRef])
], AdjustFontsizeDirective);
export { AdjustFontsizeDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRqdXN0LWZvbnRzaXplLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItY29yZS8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL2FkanVzdC1mb250c2l6ZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNFLE9BQU8sS0FBSyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBRTdCLE1BQU0sQ0FBQyxHQUFRLEVBQUUsQ0FBQztBQUtsQixJQUFhLHVCQUF1QixHQUFwQyxNQUFhLHVCQUF1QjtJQUluQzs7O01BR0U7SUFDRixZQUFxQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQzFDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFFLENBQUM7SUFDbkQsQ0FBQztJQUVEOztNQUVFO0lBQ0sscUJBQXFCO1FBQzNCLE1BQU0sWUFBWSxHQUFXLENBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUUsQ0FBQztRQUMzRCxNQUFNLFdBQVcsR0FBVyxDQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFFLEdBQUcsQ0FBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBRSxDQUFDO1FBRTlHLElBQUssWUFBWSxJQUFJLENBQUM7ZUFDbEIsV0FBVyxJQUFJLENBQUM7ZUFDaEIsWUFBWSxJQUFJLFdBQVc7WUFBRyxPQUFPO1FBRXpDLE1BQU0sV0FBVyxHQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUUsV0FBVyxDQUFFLENBQUMsT0FBTyxDQUFFLElBQUksRUFBRSxFQUFFLENBQUU7Y0FDN0UsQ0FBRSxXQUFXLEdBQUcsWUFBWSxDQUFFLENBQUM7UUFFbEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7WUFDaEIsV0FBVyxFQUFJLFdBQVcsR0FBRyxJQUFJO1lBQ2pDLGFBQWEsRUFBRyxXQUFXLEdBQUcsSUFBSTtTQUNsQyxDQUFDLENBQUM7SUFDSixDQUFDO0NBRUQsQ0FBQTs7WUF4QmlDLFVBQVU7O0FBUi9CLHVCQUF1QjtJQUhuQyxTQUFTLENBQUM7UUFDVixRQUFRLEVBQUUsa0JBQWtCO0tBQzVCLENBQUM7NkNBU2dDLFVBQVU7R0FSL0IsdUJBQXVCLENBZ0NuQztTQWhDWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEFmdGVyQ29udGVudENoZWNrZWQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIF8kIGZyb20gJ2pxdWVyeSc7XG5cbmNvbnN0ICQ6IGFueSA9IF8kO1xuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdbYWRqdXN0Rm9udHNpemVdJyxcbn0pXG5leHBvcnQgY2xhc3MgQWRqdXN0Rm9udHNpemVEaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRDaGVja2VkIHtcblxuXHRwcml2YXRlIGVsZW1lbnQ6IGFueTtcblxuXHQvKipcblx0KiBAY29uc3RydWN0b3Jcblx0KiBAcGFyYW0ge0VsZW1lbnRSZWZ9IGVsZW1lbnRSZWZcblx0Ki9cblx0Y29uc3RydWN0b3IoIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiApIHtcblx0XHR0aGlzLmVsZW1lbnQgPSAkKCB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCApO1xuXHR9XG5cblx0LyoqXG5cdCogQGNvbnN0cnVjdG9yXG5cdCovXG5cdHB1YmxpYyBuZ0FmdGVyQ29udGVudENoZWNrZWQoKSB7XG5cdFx0Y29uc3QgZWxlbWVudFdpZHRoOiBudW1iZXIgPSAoIHRoaXMuZWxlbWVudC53aWR0aCgpIHx8IDAgKTtcblx0XHRjb25zdCBwYXJlbnRXaWR0aDogbnVtYmVyID0gKCB0aGlzLmVsZW1lbnQucGFyZW50KCkud2lkdGgoKSB8fCAwICkgLSAoIHRoaXMuZWxlbWVudC5zaWJsaW5ncygpLndpZHRoKCkgfHwgMCApO1xuXG5cdFx0aWYgKCBlbGVtZW50V2lkdGggPD0gMFxuXHRcdFx0fHwgcGFyZW50V2lkdGggPD0gMFxuXHRcdFx0fHwgZWxlbWVudFdpZHRoIDw9IHBhcmVudFdpZHRoICkgcmV0dXJuO1xuXG5cdFx0Y29uc3QgbmV3Rm9udHNpemU6IG51bWJlciA9ICt0aGlzLmVsZW1lbnQuY3NzKCAnZm9udC1zaXplJyApLnJlcGxhY2UoICdweCcsICcnIClcblx0XHRcdCogKCBwYXJlbnRXaWR0aCAvIGVsZW1lbnRXaWR0aCApO1xuXG5cdFx0dGhpcy5lbGVtZW50LmNzcyh7XG5cdFx0XHQnZm9udC1zaXplJ1x0XHQ6IG5ld0ZvbnRzaXplICsgJ3B4Jyxcblx0XHRcdCdsaW5lLWhlaWdodCdcdDogbmV3Rm9udHNpemUgKyAncHgnLFxuXHRcdH0pO1xuXHR9XG5cbn1cbiJdfQ==