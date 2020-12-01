import * as tslib_1 from "tslib";
import { Component, ElementRef } from '@angular/core';
import * as _$ from 'jquery';
const $ = _$;
let SideBarItemComponent = class SideBarItemComponent {
};
SideBarItemComponent = tslib_1.__decorate([
    Component({
        selector: 'sidebar-item',
        template: '<li><ng-content></ng-content></li>',
        host: { class: 'sidebar-item' }
    })
], SideBarItemComponent);
export { SideBarItemComponent };
let SideBarComponent = class SideBarComponent {
    /**
    * @constructor
    * @param {ElementRef} elementRef
    */
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.element = $(this.elementRef.nativeElement);
    }
    /**
    * Is show button scroll next
    * @return {boolean}
    */
    get isShowBtnNext() {
        const listElement = this.element.find('.sidebar-list');
        const listWidth = listElement.outerWidth() || 0;
        const listScrollWidth = listElement[0].scrollWidth || 0;
        return listScrollWidth > listWidth
            && (listElement.scrollLeft() + listWidth) < listScrollWidth;
    }
    /**
    * Is show button scroll previous
    * @return {boolean}
    */
    get isShowBtnPrev() {
        const listElement = this.element.find('.sidebar-list');
        return listElement.scrollLeft() > 0;
    }
    /**
    * Scroll previous
    * @return {void}
    */
    scrollPrev() {
        const listElement = this.element.find('.sidebar-list');
        listElement.animate({ scrollLeft: listElement.scrollLeft() - (listElement.outerWidth() - 70) }, 300, 'swing');
    }
    /**
    * Scroll previous
    * @return {void}
    */
    scrollNext() {
        const listElement = this.element.find('.sidebar-list');
        listElement.animate({ scrollLeft: listElement.scrollLeft() + (listElement.outerWidth() - 70) }, 300, 'swing');
    }
};
SideBarComponent.ctorParameters = () => [
    { type: ElementRef }
];
SideBarComponent = tslib_1.__decorate([
    Component({
        selector: 'sidebar',
        template: "<div class=\"sidebar\"><button class=\"sidebar-btn sidebar-btn-prev layout-column layout-align-center-center\" [class.hide]=\"!isShowBtnPrev\" (click)=\"scrollPrev()\"><i class=\"fa fa-angle-left\"></i></button><ul class=\"sidebar-list layout-row\"><ng-content></ng-content></ul><button class=\"sidebar-btn sidebar-btn-next layout-column layout-align-center-center\" [class.hide]=\"!isShowBtnNext\" (click)=\"scrollNext()\"><i class=\"fa fa-angle-right\"></i></button></div>"
    }),
    tslib_1.__metadata("design:paramtypes", [ElementRef])
], SideBarComponent);
export { SideBarComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNvcmUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RCxPQUFPLEtBQUssRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUU3QixNQUFNLENBQUMsR0FBUSxFQUFFLENBQUM7QUFPbEIsSUFBYSxvQkFBb0IsR0FBakMsTUFBYSxvQkFBb0I7Q0FBRyxDQUFBO0FBQXZCLG9CQUFvQjtJQUxoQyxTQUFTLENBQUM7UUFDVixRQUFRLEVBQUUsY0FBYztRQUN4QixRQUFRLEVBQUUsb0NBQW9DO1FBQzlDLElBQUksRUFBRyxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUU7S0FDaEMsQ0FBQztHQUNXLG9CQUFvQixDQUFHO1NBQXZCLG9CQUFvQjtBQU1qQyxJQUFhLGdCQUFnQixHQUE3QixNQUFhLGdCQUFnQjtJQUk1Qjs7O01BR0U7SUFDRixZQUFvQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3pDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFFLENBQUM7SUFDbkQsQ0FBQztJQUVEOzs7TUFHRTtJQUNGLElBQVcsYUFBYTtRQUN2QixNQUFNLFdBQVcsR0FBUSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBRSxlQUFlLENBQUUsQ0FBQztRQUM5RCxNQUFNLFNBQVMsR0FBVyxXQUFXLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3hELE1BQU0sZUFBZSxHQUFXLFdBQVcsQ0FBRSxDQUFDLENBQUUsQ0FBQyxXQUFXLElBQUksQ0FBQyxDQUFDO1FBRWxFLE9BQU8sZUFBZSxHQUFHLFNBQVM7ZUFDOUIsQ0FBRSxXQUFXLENBQUMsVUFBVSxFQUFFLEdBQUcsU0FBUyxDQUFFLEdBQUcsZUFBZSxDQUFDO0lBQ2hFLENBQUM7SUFFRDs7O01BR0U7SUFDRixJQUFXLGFBQWE7UUFDdkIsTUFBTSxXQUFXLEdBQVEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUUsZUFBZSxDQUFFLENBQUM7UUFDOUQsT0FBTyxXQUFXLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRDs7O01BR0U7SUFDSyxVQUFVO1FBQ2hCLE1BQU0sV0FBVyxHQUFRLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFFLGVBQWUsQ0FBRSxDQUFDO1FBQzlELFdBQVcsQ0FBQyxPQUFPLENBQUUsRUFBRSxVQUFVLEVBQUUsV0FBVyxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUUsV0FBVyxDQUFDLFVBQVUsRUFBRSxHQUFHLEVBQUUsQ0FBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLE9BQU8sQ0FBRSxDQUFDO0lBQ25ILENBQUM7SUFFRDs7O01BR0U7SUFDSyxVQUFVO1FBQ2hCLE1BQU0sV0FBVyxHQUFRLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFFLGVBQWUsQ0FBRSxDQUFDO1FBQzlELFdBQVcsQ0FBQyxPQUFPLENBQUUsRUFBRSxVQUFVLEVBQUUsV0FBVyxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUUsV0FBVyxDQUFDLFVBQVUsRUFBRSxHQUFHLEVBQUUsQ0FBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLE9BQU8sQ0FBRSxDQUFDO0lBQ25ILENBQUM7Q0FFRCxDQUFBOztZQTVDZ0MsVUFBVTs7QUFSOUIsZ0JBQWdCO0lBSjVCLFNBQVMsQ0FBQztRQUNWLFFBQVEsRUFBRyxTQUFTO1FBQ3BCLHNlQUE2QjtLQUM3QixDQUFDOzZDQVMrQixVQUFVO0dBUjlCLGdCQUFnQixDQW9ENUI7U0FwRFksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBfJCBmcm9tICdqcXVlcnknO1xuXG5jb25zdCAkOiBhbnkgPSBfJDtcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnc2lkZWJhci1pdGVtJyxcblx0dGVtcGxhdGU6ICc8bGk+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvbGk+Jyxcblx0aG9zdFx0OiB7IGNsYXNzOiAnc2lkZWJhci1pdGVtJyB9LFxufSlcbmV4cG9ydCBjbGFzcyBTaWRlQmFySXRlbUNvbXBvbmVudCB7fVxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3JcdDogJ3NpZGViYXInLFxuXHR0ZW1wbGF0ZVVybFx0OiAnLi9zaWRlYmFyLnB1ZycsXG59KVxuZXhwb3J0IGNsYXNzIFNpZGVCYXJDb21wb25lbnQge1xuXG5cdHB1YmxpYyBlbGVtZW50OiBhbnk7XG5cblx0LyoqXG5cdCogQGNvbnN0cnVjdG9yXG5cdCogQHBhcmFtIHtFbGVtZW50UmVmfSBlbGVtZW50UmVmXG5cdCovXG5cdGNvbnN0cnVjdG9yKCBwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZiApIHtcblx0XHR0aGlzLmVsZW1lbnQgPSAkKCB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCApO1xuXHR9XG5cblx0LyoqXG5cdCogSXMgc2hvdyBidXR0b24gc2Nyb2xsIG5leHRcblx0KiBAcmV0dXJuIHtib29sZWFufVxuXHQqL1xuXHRwdWJsaWMgZ2V0IGlzU2hvd0J0bk5leHQoKTogYm9vbGVhbiB7XG5cdFx0Y29uc3QgbGlzdEVsZW1lbnQ6IGFueSA9IHRoaXMuZWxlbWVudC5maW5kKCAnLnNpZGViYXItbGlzdCcgKTtcblx0XHRjb25zdCBsaXN0V2lkdGg6IG51bWJlciA9IGxpc3RFbGVtZW50Lm91dGVyV2lkdGgoKSB8fCAwO1xuXHRcdGNvbnN0IGxpc3RTY3JvbGxXaWR0aDogbnVtYmVyID0gbGlzdEVsZW1lbnRbIDAgXS5zY3JvbGxXaWR0aCB8fCAwO1xuXG5cdFx0cmV0dXJuIGxpc3RTY3JvbGxXaWR0aCA+IGxpc3RXaWR0aFxuXHRcdFx0JiYgKCBsaXN0RWxlbWVudC5zY3JvbGxMZWZ0KCkgKyBsaXN0V2lkdGggKSA8IGxpc3RTY3JvbGxXaWR0aDtcblx0fVxuXG5cdC8qKlxuXHQqIElzIHNob3cgYnV0dG9uIHNjcm9sbCBwcmV2aW91c1xuXHQqIEByZXR1cm4ge2Jvb2xlYW59XG5cdCovXG5cdHB1YmxpYyBnZXQgaXNTaG93QnRuUHJldigpOiBib29sZWFuIHtcblx0XHRjb25zdCBsaXN0RWxlbWVudDogYW55ID0gdGhpcy5lbGVtZW50LmZpbmQoICcuc2lkZWJhci1saXN0JyApO1xuXHRcdHJldHVybiBsaXN0RWxlbWVudC5zY3JvbGxMZWZ0KCkgPiAwO1xuXHR9XG5cblx0LyoqXG5cdCogU2Nyb2xsIHByZXZpb3VzXG5cdCogQHJldHVybiB7dm9pZH1cblx0Ki9cblx0cHVibGljIHNjcm9sbFByZXYoKSB7XG5cdFx0Y29uc3QgbGlzdEVsZW1lbnQ6IGFueSA9IHRoaXMuZWxlbWVudC5maW5kKCAnLnNpZGViYXItbGlzdCcgKTtcblx0XHRsaXN0RWxlbWVudC5hbmltYXRlKCB7IHNjcm9sbExlZnQ6IGxpc3RFbGVtZW50LnNjcm9sbExlZnQoKSAtICggbGlzdEVsZW1lbnQub3V0ZXJXaWR0aCgpIC0gNzAgKSB9LCAzMDAsICdzd2luZycgKTtcblx0fVxuXG5cdC8qKlxuXHQqIFNjcm9sbCBwcmV2aW91c1xuXHQqIEByZXR1cm4ge3ZvaWR9XG5cdCovXG5cdHB1YmxpYyBzY3JvbGxOZXh0KCkge1xuXHRcdGNvbnN0IGxpc3RFbGVtZW50OiBhbnkgPSB0aGlzLmVsZW1lbnQuZmluZCggJy5zaWRlYmFyLWxpc3QnICk7XG5cdFx0bGlzdEVsZW1lbnQuYW5pbWF0ZSggeyBzY3JvbGxMZWZ0OiBsaXN0RWxlbWVudC5zY3JvbGxMZWZ0KCkgKyAoIGxpc3RFbGVtZW50Lm91dGVyV2lkdGgoKSAtIDcwICkgfSwgMzAwLCAnc3dpbmcnICk7XG5cdH1cblxufVxuIl19