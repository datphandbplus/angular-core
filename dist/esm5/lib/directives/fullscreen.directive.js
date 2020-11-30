import * as tslib_1 from "tslib";
import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';
import * as _$ from 'jquery';
import _ from 'underscore';
var $ = _$;
var FullscreenDirective = /** @class */ (function () {
    /**
    * @constructor
    * @param {ElementRef} elementRef
    */
    function FullscreenDirective(elementRef) {
        this.elementRef = elementRef;
        this.parentElements = [];
    }
    /**
    * @constructor
    */
    FullscreenDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.element = $(this.elementRef.nativeElement);
        this.btnClose = $("<button class=\"mat-fab mat-button-base mat-warn\">\n\t\t\t\t<i class=\"fa fa-compress-arrows-alt font-size-20 mt-10\" />\n\t\t\t</button>");
        this.btnClose.css({
            position: 'fixed',
            right: '25px',
            bottom: '25px',
            'z-index': 999,
        });
        this.btnClose.click(function () { return _this.toggle(); });
        this.element.dblclick(function () { return _this.toggle(); });
    };
    /**
    * Toggle fullscreen
    * @return {void}
    */
    FullscreenDirective.prototype.toggle = function () {
        var _this = this;
        this.isFullscreen = !this.isFullscreen;
        if (!this.parentElements.length) {
            this.element.parents().each(function (_index, parent) {
                parent = $(parent);
                var zIndex = +parent.css('z-index');
                !isNaN(zIndex) && _this.parentElements.push(parent);
            });
        }
        if (!this.hiddenElements) {
            this.hiddenElements = this.element.find(this.fullscreen);
        }
        this.isFullscreen ? this.turnOn() : this.turnOff();
    };
    /**
    * Turn on fullscreen
    * @return {void}
    */
    FullscreenDirective.prototype.turnOn = function () {
        this.element.css({
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            overflow: 'auto',
            position: 'fixed',
            padding: 0,
            margin: 0,
            border: 0,
            'background-color': '#fff',
            'border-radius': 0,
            'z-index': 999,
        });
        _.each(this.parentElements, function (ele) { return ele.css('z-index', 'unset'); });
        this.hiddenElements && this.hiddenElements.hide();
        this.btnClose.insertAfter(this.element);
    };
    /**
    * Turn off fullscreen
    * @return {void}
    */
    FullscreenDirective.prototype.turnOff = function () {
        this.element.css({
            width: '',
            height: '',
            top: '',
            left: '',
            overflow: '',
            position: '',
            padding: '',
            margin: '',
            border: '',
            'background-color': '',
            'border-radius': '',
            'z-index': '',
        });
        _.each(this.parentElements, function (ele) { return ele.css('z-index', ''); });
        this.hiddenElements && this.hiddenElements.show();
        this.btnClose.detach();
    };
    FullscreenDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], FullscreenDirective.prototype, "fullscreen", void 0);
    FullscreenDirective = tslib_1.__decorate([
        Directive({
            selector: '[fullscreen]',
        }),
        tslib_1.__metadata("design:paramtypes", [ElementRef])
    ], FullscreenDirective);
    return FullscreenDirective;
}());
export { FullscreenDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVsbHNjcmVlbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNvcmUvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9mdWxsc2NyZWVuLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNOLFNBQVMsRUFBRSxVQUFVLEVBQ3JCLEtBQUssRUFBRSxhQUFhLEVBQ3BCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sS0FBSyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQzdCLE9BQU8sQ0FBQyxNQUFNLFlBQVksQ0FBQztBQUUzQixJQUFNLENBQUMsR0FBUSxFQUFFLENBQUM7QUFLbEI7SUFVQzs7O01BR0U7SUFDRiw2QkFBcUIsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQU5uQyxtQkFBYyxHQUFlLEVBQUUsQ0FBQztJQU1PLENBQUM7SUFFaEQ7O01BRUU7SUFDSyw2Q0FBZSxHQUF0QjtRQUFBLGlCQWlCQztRQWhCQSxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBRSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBRSxDQUFDO1FBQ2xELElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUNoQiw0SUFFVSxDQUNWLENBQUM7UUFFRixJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQztZQUNqQixRQUFRLEVBQUcsT0FBTztZQUNsQixLQUFLLEVBQUksTUFBTTtZQUNmLE1BQU0sRUFBSSxNQUFNO1lBQ2hCLFNBQVMsRUFBRyxHQUFHO1NBQ2YsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUUsY0FBTSxPQUFBLEtBQUksQ0FBQyxNQUFNLEVBQUUsRUFBYixDQUFhLENBQUUsQ0FBQztRQUMzQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBRSxjQUFNLE9BQUEsS0FBSSxDQUFDLE1BQU0sRUFBRSxFQUFiLENBQWEsQ0FBRSxDQUFDO0lBQzlD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Q0FBQzs7Z0JBNUZnQyxVQUFVOztJQVpsQztRQUFSLEtBQUssRUFBRTs7MkRBQXlCO0lBRnJCLG1CQUFtQjtRQUgvQixTQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsY0FBYztTQUN4QixDQUFDO2lEQWVnQyxVQUFVO09BZC9CLG1CQUFtQixDQTRHL0I7SUFBRCwwQkFBQztDQUFBLEFBNUdELElBNEdDO1NBNUdZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdERpcmVjdGl2ZSwgRWxlbWVudFJlZixcblx0SW5wdXQsIEFmdGVyVmlld0luaXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBfJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IF8gZnJvbSAndW5kZXJzY29yZSc7XG5cbmNvbnN0ICQ6IGFueSA9IF8kO1xuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdbZnVsbHNjcmVlbl0nLFxufSlcbmV4cG9ydCBjbGFzcyBGdWxsc2NyZWVuRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG5cblx0QElucHV0KCkgcHJpdmF0ZSBmdWxsc2NyZWVuOiBhbnk7XG5cblx0cHJpdmF0ZSBpc0Z1bGxzY3JlZW46IGJvb2xlYW47XG5cdHByaXZhdGUgZWxlbWVudDogYW55O1xuXHRwcml2YXRlIGJ0bkNsb3NlOiBhbnk7XG5cdHByaXZhdGUgaGlkZGVuRWxlbWVudHM6IGFueTtcblx0cHJpdmF0ZSBwYXJlbnRFbGVtZW50czogQXJyYXk8YW55PiA9IFtdO1xuXG5cdC8qKlxuXHQqIEBjb25zdHJ1Y3RvclxuXHQqIEBwYXJhbSB7RWxlbWVudFJlZn0gZWxlbWVudFJlZlxuXHQqL1xuXHRjb25zdHJ1Y3RvciggcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmICkge31cblxuXHQvKipcblx0KiBAY29uc3RydWN0b3Jcblx0Ki9cblx0cHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblx0XHR0aGlzLmVsZW1lbnQgPSAkKCB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCApO1xuXHRcdHRoaXMuYnRuQ2xvc2UgPSAkKFxuXHRcdFx0YDxidXR0b24gY2xhc3M9XCJtYXQtZmFiIG1hdC1idXR0b24tYmFzZSBtYXQtd2FyblwiPlxuXHRcdFx0XHQ8aSBjbGFzcz1cImZhIGZhLWNvbXByZXNzLWFycm93cy1hbHQgZm9udC1zaXplLTIwIG10LTEwXCIgLz5cblx0XHRcdDwvYnV0dG9uPmBcblx0XHQpO1xuXG5cdFx0dGhpcy5idG5DbG9zZS5jc3Moe1xuXHRcdFx0cG9zaXRpb25cdDogJ2ZpeGVkJyxcblx0XHRcdHJpZ2h0XHRcdDogJzI1cHgnLFxuXHRcdFx0Ym90dG9tXHRcdDogJzI1cHgnLFxuXHRcdFx0J3otaW5kZXgnXHQ6IDk5OSxcblx0XHR9KTtcblxuXHRcdHRoaXMuYnRuQ2xvc2UuY2xpY2soICgpID0+IHRoaXMudG9nZ2xlKCkgKTtcblx0XHR0aGlzLmVsZW1lbnQuZGJsY2xpY2soICgpID0+IHRoaXMudG9nZ2xlKCkgKTtcblx0fVxuXG5cdC8qKlxuXHQqIFRvZ2dsZSBmdWxsc2NyZWVuXG5cdCogQHJldHVybiB7dm9pZH1cblx0Ki9cblx0cHVibGljIHRvZ2dsZSgpIHtcblx0XHR0aGlzLmlzRnVsbHNjcmVlbiA9ICF0aGlzLmlzRnVsbHNjcmVlbjtcblxuXHRcdGlmICggIXRoaXMucGFyZW50RWxlbWVudHMubGVuZ3RoICkge1xuXHRcdFx0dGhpcy5lbGVtZW50LnBhcmVudHMoKS5lYWNoKCAoIF9pbmRleDogbnVtYmVyLCBwYXJlbnQ6IGFueSApID0+IHtcblx0XHRcdFx0cGFyZW50ID0gJCggcGFyZW50ICk7XG5cdFx0XHRcdGNvbnN0IHpJbmRleDogbnVtYmVyID0gK3BhcmVudC5jc3MoICd6LWluZGV4JyApO1xuXHRcdFx0XHQhaXNOYU4oIHpJbmRleCApICYmIHRoaXMucGFyZW50RWxlbWVudHMucHVzaCggcGFyZW50ICk7XG5cdFx0XHR9ICk7XG5cdFx0fVxuXG5cdFx0aWYgKCAhdGhpcy5oaWRkZW5FbGVtZW50cyApIHtcblx0XHRcdHRoaXMuaGlkZGVuRWxlbWVudHMgPSB0aGlzLmVsZW1lbnQuZmluZCggdGhpcy5mdWxsc2NyZWVuICk7XG5cdFx0fVxuXG5cdFx0dGhpcy5pc0Z1bGxzY3JlZW4gPyB0aGlzLnR1cm5PbigpIDogdGhpcy50dXJuT2ZmKCk7XG5cdH1cblxuXHQvKipcblx0KiBUdXJuIG9uIGZ1bGxzY3JlZW5cblx0KiBAcmV0dXJuIHt2b2lkfVxuXHQqL1xuXHRwdWJsaWMgdHVybk9uKCkge1xuXHRcdHRoaXMuZWxlbWVudC5jc3Moe1xuXHRcdFx0d2lkdGhcdFx0XHRcdDogJzEwMCUnLFxuXHRcdFx0aGVpZ2h0XHRcdFx0XHQ6ICcxMDAlJyxcblx0XHRcdHRvcFx0XHRcdFx0XHQ6IDAsXG5cdFx0XHRsZWZ0XHRcdFx0XHQ6IDAsXG5cdFx0XHRvdmVyZmxvd1x0XHRcdDogJ2F1dG8nLFxuXHRcdFx0cG9zaXRpb25cdFx0XHQ6ICdmaXhlZCcsXG5cdFx0XHRwYWRkaW5nXHRcdFx0XHQ6IDAsXG5cdFx0XHRtYXJnaW5cdFx0XHRcdDogMCxcblx0XHRcdGJvcmRlclx0XHRcdFx0OiAwLFxuXHRcdFx0J2JhY2tncm91bmQtY29sb3InXHQ6ICcjZmZmJyxcblx0XHRcdCdib3JkZXItcmFkaXVzJ1x0XHQ6IDAsXG5cdFx0XHQnei1pbmRleCdcdFx0XHQ6IDk5OSxcblx0XHR9KTtcblx0XHRfLmVhY2goIHRoaXMucGFyZW50RWxlbWVudHMsICggZWxlOiBhbnkgKSA9PiBlbGUuY3NzKCAnei1pbmRleCcsICd1bnNldCcgKSApO1xuXHRcdHRoaXMuaGlkZGVuRWxlbWVudHMgJiYgdGhpcy5oaWRkZW5FbGVtZW50cy5oaWRlKCk7XG5cdFx0dGhpcy5idG5DbG9zZS5pbnNlcnRBZnRlciggdGhpcy5lbGVtZW50ICk7XG5cdH1cblxuXHQvKipcblx0KiBUdXJuIG9mZiBmdWxsc2NyZWVuXG5cdCogQHJldHVybiB7dm9pZH1cblx0Ki9cblx0cHVibGljIHR1cm5PZmYoKSB7XG5cdFx0dGhpcy5lbGVtZW50LmNzcyh7XG5cdFx0XHR3aWR0aFx0XHRcdFx0OiAnJyxcblx0XHRcdGhlaWdodFx0XHRcdFx0OiAnJyxcblx0XHRcdHRvcFx0XHRcdFx0XHQ6ICcnLFxuXHRcdFx0bGVmdFx0XHRcdFx0OiAnJyxcblx0XHRcdG92ZXJmbG93XHRcdFx0OiAnJyxcblx0XHRcdHBvc2l0aW9uXHRcdFx0OiAnJyxcblx0XHRcdHBhZGRpbmdcdFx0XHRcdDogJycsXG5cdFx0XHRtYXJnaW5cdFx0XHRcdDogJycsXG5cdFx0XHRib3JkZXJcdFx0XHRcdDogJycsXG5cdFx0XHQnYmFja2dyb3VuZC1jb2xvcidcdDogJycsXG5cdFx0XHQnYm9yZGVyLXJhZGl1cydcdFx0OiAnJyxcblx0XHRcdCd6LWluZGV4J1x0XHRcdDogJycsXG5cdFx0fSk7XG5cdFx0Xy5lYWNoKCB0aGlzLnBhcmVudEVsZW1lbnRzLCAoIGVsZTogYW55ICkgPT4gZWxlLmNzcyggJ3otaW5kZXgnLCAnJyApICk7XG5cdFx0dGhpcy5oaWRkZW5FbGVtZW50cyAmJiB0aGlzLmhpZGRlbkVsZW1lbnRzLnNob3coKTtcblx0XHR0aGlzLmJ0bkNsb3NlLmRldGFjaCgpO1xuXHR9XG5cbn1cbiJdfQ==