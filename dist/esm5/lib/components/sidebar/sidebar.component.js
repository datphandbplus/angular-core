import * as tslib_1 from "tslib";
import { Component, ElementRef } from '@angular/core';
import * as _$ from 'jquery';
var $ = _$;
var SideBarItemComponent = /** @class */ (function () {
    function SideBarItemComponent() {
    }
    SideBarItemComponent = tslib_1.__decorate([
        Component({
            selector: 'sidebar-item',
            template: '<li><ng-content></ng-content></li>',
            host: { class: 'sidebar-item' }
        })
    ], SideBarItemComponent);
    return SideBarItemComponent;
}());
export { SideBarItemComponent };
var SideBarComponent = /** @class */ (function () {
    /**
    * @constructor
    * @param {ElementRef} elementRef
    */
    function SideBarComponent(elementRef) {
        this.elementRef = elementRef;
        this.element = $(this.elementRef.nativeElement);
    }
    Object.defineProperty(SideBarComponent.prototype, "isShowBtnNext", {
        /**
        * Is show button scroll next
        * @return {boolean}
        */
        get: function () {
            var listElement = this.element.find('.sidebar-list');
            var listWidth = listElement.outerWidth() || 0;
            var listScrollWidth = listElement[0].scrollWidth || 0;
            return listScrollWidth > listWidth
                && (listElement.scrollLeft() + listWidth) < listScrollWidth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SideBarComponent.prototype, "isShowBtnPrev", {
        /**
        * Is show button scroll previous
        * @return {boolean}
        */
        get: function () {
            var listElement = this.element.find('.sidebar-list');
            return listElement.scrollLeft() > 0;
        },
        enumerable: true,
        configurable: true
    });
    /**
    * Scroll previous
    * @return {void}
    */
    SideBarComponent.prototype.scrollPrev = function () {
        var listElement = this.element.find('.sidebar-list');
        listElement.animate({ scrollLeft: listElement.scrollLeft() - (listElement.outerWidth() - 70) }, 300, 'swing');
    };
    /**
    * Scroll previous
    * @return {void}
    */
    SideBarComponent.prototype.scrollNext = function () {
        var listElement = this.element.find('.sidebar-list');
        listElement.animate({ scrollLeft: listElement.scrollLeft() + (listElement.outerWidth() - 70) }, 300, 'swing');
    };
    SideBarComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    SideBarComponent = tslib_1.__decorate([
        Component({
            selector: 'sidebar',
            template: "<div class=\"sidebar\"><button class=\"sidebar-btn sidebar-btn-prev layout-column layout-align-center-center\" [class.hide]=\"!isShowBtnPrev\" (click)=\"scrollPrev()\"><i class=\"fa fa-angle-left\"></i></button><ul class=\"sidebar-list layout-row\"><ng-content></ng-content></ul><button class=\"sidebar-btn sidebar-btn-next layout-column layout-align-center-center\" [class.hide]=\"!isShowBtnNext\" (click)=\"scrollNext()\"><i class=\"fa fa-angle-right\"></i></button></div>"
        }),
        tslib_1.__metadata("design:paramtypes", [ElementRef])
    ], SideBarComponent);
    return SideBarComponent;
}());
export { SideBarComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNvcmUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RCxPQUFPLEtBQUssRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUU3QixJQUFNLENBQUMsR0FBUSxFQUFFLENBQUM7QUFPbEI7SUFBQTtJQUFtQyxDQUFDO0lBQXZCLG9CQUFvQjtRQUxoQyxTQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsY0FBYztZQUN4QixRQUFRLEVBQUUsb0NBQW9DO1lBQzlDLElBQUksRUFBRyxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUU7U0FDaEMsQ0FBQztPQUNXLG9CQUFvQixDQUFHO0lBQUQsMkJBQUM7Q0FBQSxBQUFwQyxJQUFvQztTQUF2QixvQkFBb0I7QUFNakM7SUFJQzs7O01BR0U7SUFDRiwwQkFBb0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN6QyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBRSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBRSxDQUFDO0lBQ25ELENBQUM7SUFNRCxzQkFBVywyQ0FBYTtRQUp4Qjs7O1VBR0U7YUFDRjtZQUNDLElBQU0sV0FBVyxHQUFRLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFFLGVBQWUsQ0FBRSxDQUFDO1lBQzlELElBQU0sU0FBUyxHQUFXLFdBQVcsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDeEQsSUFBTSxlQUFlLEdBQVcsV0FBVyxDQUFFLENBQUMsQ0FBRSxDQUFDLFdBQVcsSUFBSSxDQUFDLENBQUM7WUFFbEUsT0FBTyxlQUFlLEdBQUcsU0FBUzttQkFDOUIsQ0FBRSxXQUFXLENBQUMsVUFBVSxFQUFFLEdBQUcsU0FBUyxDQUFFLEdBQUcsZUFBZSxDQUFDO1FBQ2hFLENBQUM7OztPQUFBO0lBTUQsc0JBQVcsMkNBQWE7UUFKeEI7OztVQUdFO2FBQ0Y7WUFDQyxJQUFNLFdBQVcsR0FBUSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBRSxlQUFlLENBQUUsQ0FBQztZQUM5RCxPQUFPLFdBQVcsQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDckMsQ0FBQzs7O09BQUE7SUFFRDs7O01BR0U7SUFDSyxxQ0FBVSxHQUFqQjtRQUNDLElBQU0sV0FBVyxHQUFRLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFFLGVBQWUsQ0FBRSxDQUFDO1FBQzlELFdBQVcsQ0FBQyxPQUFPLENBQUUsRUFBRSxVQUFVLEVBQUUsV0FBVyxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUUsV0FBVyxDQUFDLFVBQVUsRUFBRSxHQUFHLEVBQUUsQ0FBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLE9BQU8sQ0FBRSxDQUFDO0lBQ25ILENBQUM7SUFFRDs7O01BR0U7SUFDSyxxQ0FBVSxHQUFqQjtRQUNDLElBQU0sV0FBVyxHQUFRLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFFLGVBQWUsQ0FBRSxDQUFDO1FBQzlELFdBQVcsQ0FBQyxPQUFPLENBQUUsRUFBRSxVQUFVLEVBQUUsV0FBVyxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUUsV0FBVyxDQUFDLFVBQVUsRUFBRSxHQUFHLEVBQUUsQ0FBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLE9BQU8sQ0FBRSxDQUFDO0lBQ25ILENBQUM7O2dCQTFDK0IsVUFBVTs7SUFSOUIsZ0JBQWdCO1FBSjVCLFNBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRyxTQUFTO1lBQ3BCLHNlQUE2QjtTQUM3QixDQUFDO2lEQVMrQixVQUFVO09BUjlCLGdCQUFnQixDQW9ENUI7SUFBRCx1QkFBQztDQUFBLEFBcERELElBb0RDO1NBcERZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgXyQgZnJvbSAnanF1ZXJ5JztcblxuY29uc3QgJDogYW55ID0gXyQ7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ3NpZGViYXItaXRlbScsXG5cdHRlbXBsYXRlOiAnPGxpPjxuZy1jb250ZW50PjwvbmctY29udGVudD48L2xpPicsXG5cdGhvc3RcdDogeyBjbGFzczogJ3NpZGViYXItaXRlbScgfSxcbn0pXG5leHBvcnQgY2xhc3MgU2lkZUJhckl0ZW1Db21wb25lbnQge31cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yXHQ6ICdzaWRlYmFyJyxcblx0dGVtcGxhdGVVcmxcdDogJy4vc2lkZWJhci5wdWcnLFxufSlcbmV4cG9ydCBjbGFzcyBTaWRlQmFyQ29tcG9uZW50IHtcblxuXHRwdWJsaWMgZWxlbWVudDogYW55O1xuXG5cdC8qKlxuXHQqIEBjb25zdHJ1Y3RvclxuXHQqIEBwYXJhbSB7RWxlbWVudFJlZn0gZWxlbWVudFJlZlxuXHQqL1xuXHRjb25zdHJ1Y3RvciggcHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYgKSB7XG5cdFx0dGhpcy5lbGVtZW50ID0gJCggdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQgKTtcblx0fVxuXG5cdC8qKlxuXHQqIElzIHNob3cgYnV0dG9uIHNjcm9sbCBuZXh0XG5cdCogQHJldHVybiB7Ym9vbGVhbn1cblx0Ki9cblx0cHVibGljIGdldCBpc1Nob3dCdG5OZXh0KCk6IGJvb2xlYW4ge1xuXHRcdGNvbnN0IGxpc3RFbGVtZW50OiBhbnkgPSB0aGlzLmVsZW1lbnQuZmluZCggJy5zaWRlYmFyLWxpc3QnICk7XG5cdFx0Y29uc3QgbGlzdFdpZHRoOiBudW1iZXIgPSBsaXN0RWxlbWVudC5vdXRlcldpZHRoKCkgfHwgMDtcblx0XHRjb25zdCBsaXN0U2Nyb2xsV2lkdGg6IG51bWJlciA9IGxpc3RFbGVtZW50WyAwIF0uc2Nyb2xsV2lkdGggfHwgMDtcblxuXHRcdHJldHVybiBsaXN0U2Nyb2xsV2lkdGggPiBsaXN0V2lkdGhcblx0XHRcdCYmICggbGlzdEVsZW1lbnQuc2Nyb2xsTGVmdCgpICsgbGlzdFdpZHRoICkgPCBsaXN0U2Nyb2xsV2lkdGg7XG5cdH1cblxuXHQvKipcblx0KiBJcyBzaG93IGJ1dHRvbiBzY3JvbGwgcHJldmlvdXNcblx0KiBAcmV0dXJuIHtib29sZWFufVxuXHQqL1xuXHRwdWJsaWMgZ2V0IGlzU2hvd0J0blByZXYoKTogYm9vbGVhbiB7XG5cdFx0Y29uc3QgbGlzdEVsZW1lbnQ6IGFueSA9IHRoaXMuZWxlbWVudC5maW5kKCAnLnNpZGViYXItbGlzdCcgKTtcblx0XHRyZXR1cm4gbGlzdEVsZW1lbnQuc2Nyb2xsTGVmdCgpID4gMDtcblx0fVxuXG5cdC8qKlxuXHQqIFNjcm9sbCBwcmV2aW91c1xuXHQqIEByZXR1cm4ge3ZvaWR9XG5cdCovXG5cdHB1YmxpYyBzY3JvbGxQcmV2KCkge1xuXHRcdGNvbnN0IGxpc3RFbGVtZW50OiBhbnkgPSB0aGlzLmVsZW1lbnQuZmluZCggJy5zaWRlYmFyLWxpc3QnICk7XG5cdFx0bGlzdEVsZW1lbnQuYW5pbWF0ZSggeyBzY3JvbGxMZWZ0OiBsaXN0RWxlbWVudC5zY3JvbGxMZWZ0KCkgLSAoIGxpc3RFbGVtZW50Lm91dGVyV2lkdGgoKSAtIDcwICkgfSwgMzAwLCAnc3dpbmcnICk7XG5cdH1cblxuXHQvKipcblx0KiBTY3JvbGwgcHJldmlvdXNcblx0KiBAcmV0dXJuIHt2b2lkfVxuXHQqL1xuXHRwdWJsaWMgc2Nyb2xsTmV4dCgpIHtcblx0XHRjb25zdCBsaXN0RWxlbWVudDogYW55ID0gdGhpcy5lbGVtZW50LmZpbmQoICcuc2lkZWJhci1saXN0JyApO1xuXHRcdGxpc3RFbGVtZW50LmFuaW1hdGUoIHsgc2Nyb2xsTGVmdDogbGlzdEVsZW1lbnQuc2Nyb2xsTGVmdCgpICsgKCBsaXN0RWxlbWVudC5vdXRlcldpZHRoKCkgLSA3MCApIH0sIDMwMCwgJ3N3aW5nJyApO1xuXHR9XG5cbn1cbiJdfQ==