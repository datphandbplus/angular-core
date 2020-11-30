import * as tslib_1 from "tslib";
import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';
import * as _$ from 'jquery';
import _ from 'underscore';
const $ = _$;
let FullscreenDirective = class FullscreenDirective {
    /**
    * @constructor
    * @param {ElementRef} elementRef
    */
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.parentElements = [];
    }
    /**
    * @constructor
    */
    ngAfterViewInit() {
        this.element = $(this.elementRef.nativeElement);
        this.btnClose = $(`<button class="mat-fab mat-button-base mat-warn">
				<i class="fa fa-compress-arrows-alt font-size-20 mt-10" />
			</button>`);
        this.btnClose.css({
            position: 'fixed',
            right: '25px',
            bottom: '25px',
            'z-index': 999,
        });
        this.btnClose.click(() => this.toggle());
        this.element.dblclick(() => this.toggle());
    }
    /**
    * Toggle fullscreen
    * @return {void}
    */
    toggle() {
        this.isFullscreen = !this.isFullscreen;
        if (!this.parentElements.length) {
            this.element.parents().each((_index, parent) => {
                parent = $(parent);
                const zIndex = +parent.css('z-index');
                !isNaN(zIndex) && this.parentElements.push(parent);
            });
        }
        if (!this.hiddenElements) {
            this.hiddenElements = this.element.find(this.fullscreen);
        }
        this.isFullscreen ? this.turnOn() : this.turnOff();
    }
    /**
    * Turn on fullscreen
    * @return {void}
    */
    turnOn() {
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
        _.each(this.parentElements, (ele) => ele.css('z-index', 'unset'));
        this.hiddenElements && this.hiddenElements.hide();
        this.btnClose.insertAfter(this.element);
    }
    /**
    * Turn off fullscreen
    * @return {void}
    */
    turnOff() {
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
        _.each(this.parentElements, (ele) => ele.css('z-index', ''));
        this.hiddenElements && this.hiddenElements.show();
        this.btnClose.detach();
    }
};
FullscreenDirective.ctorParameters = () => [
    { type: ElementRef }
];
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
export { FullscreenDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVsbHNjcmVlbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNvcmUvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9mdWxsc2NyZWVuLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNOLFNBQVMsRUFBRSxVQUFVLEVBQ3JCLEtBQUssRUFBRSxhQUFhLEVBQ3BCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sS0FBSyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQzdCLE9BQU8sQ0FBQyxNQUFNLFlBQVksQ0FBQztBQUUzQixNQUFNLENBQUMsR0FBUSxFQUFFLENBQUM7QUFLbEIsSUFBYSxtQkFBbUIsR0FBaEMsTUFBYSxtQkFBbUI7SUFVL0I7OztNQUdFO0lBQ0YsWUFBcUIsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQU5uQyxtQkFBYyxHQUFlLEVBQUUsQ0FBQztJQU1PLENBQUM7SUFFaEQ7O01BRUU7SUFDSyxlQUFlO1FBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFFLENBQUM7UUFDbEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQ2hCOzthQUVVLENBQ1YsQ0FBQztRQUVGLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDO1lBQ2pCLFFBQVEsRUFBRyxPQUFPO1lBQ2xCLEtBQUssRUFBSSxNQUFNO1lBQ2YsTUFBTSxFQUFJLE1BQU07WUFDaEIsU0FBUyxFQUFHLEdBQUc7U0FDZixDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUUsQ0FBQztRQUMzQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUUsQ0FBQztJQUM5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QztJQUFSLEtBQUssRUFBRTs7dURBQXlCO0FBRnJCLG1CQUFtQjtJQUgvQixTQUFTLENBQUM7UUFDVixRQUFRLEVBQUUsY0FBYztLQUN4QixDQUFDOzZDQWVnQyxVQUFVO0dBZC9CLG1CQUFtQixDQTRHL0I7U0E1R1ksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0RGlyZWN0aXZlLCBFbGVtZW50UmVmLFxuXHRJbnB1dCwgQWZ0ZXJWaWV3SW5pdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIF8kIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgXyBmcm9tICd1bmRlcnNjb3JlJztcblxuY29uc3QgJDogYW55ID0gXyQ7XG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ1tmdWxsc2NyZWVuXScsXG59KVxuZXhwb3J0IGNsYXNzIEZ1bGxzY3JlZW5EaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcblxuXHRASW5wdXQoKSBwcml2YXRlIGZ1bGxzY3JlZW46IGFueTtcblxuXHRwcml2YXRlIGlzRnVsbHNjcmVlbjogYm9vbGVhbjtcblx0cHJpdmF0ZSBlbGVtZW50OiBhbnk7XG5cdHByaXZhdGUgYnRuQ2xvc2U6IGFueTtcblx0cHJpdmF0ZSBoaWRkZW5FbGVtZW50czogYW55O1xuXHRwcml2YXRlIHBhcmVudEVsZW1lbnRzOiBBcnJheTxhbnk+ID0gW107XG5cblx0LyoqXG5cdCogQGNvbnN0cnVjdG9yXG5cdCogQHBhcmFtIHtFbGVtZW50UmVmfSBlbGVtZW50UmVmXG5cdCovXG5cdGNvbnN0cnVjdG9yKCBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYgKSB7fVxuXG5cdC8qKlxuXHQqIEBjb25zdHJ1Y3RvclxuXHQqL1xuXHRwdWJsaWMgbmdBZnRlclZpZXdJbml0KCkge1xuXHRcdHRoaXMuZWxlbWVudCA9ICQoIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50ICk7XG5cdFx0dGhpcy5idG5DbG9zZSA9ICQoXG5cdFx0XHRgPGJ1dHRvbiBjbGFzcz1cIm1hdC1mYWIgbWF0LWJ1dHRvbi1iYXNlIG1hdC13YXJuXCI+XG5cdFx0XHRcdDxpIGNsYXNzPVwiZmEgZmEtY29tcHJlc3MtYXJyb3dzLWFsdCBmb250LXNpemUtMjAgbXQtMTBcIiAvPlxuXHRcdFx0PC9idXR0b24+YFxuXHRcdCk7XG5cblx0XHR0aGlzLmJ0bkNsb3NlLmNzcyh7XG5cdFx0XHRwb3NpdGlvblx0OiAnZml4ZWQnLFxuXHRcdFx0cmlnaHRcdFx0OiAnMjVweCcsXG5cdFx0XHRib3R0b21cdFx0OiAnMjVweCcsXG5cdFx0XHQnei1pbmRleCdcdDogOTk5LFxuXHRcdH0pO1xuXG5cdFx0dGhpcy5idG5DbG9zZS5jbGljayggKCkgPT4gdGhpcy50b2dnbGUoKSApO1xuXHRcdHRoaXMuZWxlbWVudC5kYmxjbGljayggKCkgPT4gdGhpcy50b2dnbGUoKSApO1xuXHR9XG5cblx0LyoqXG5cdCogVG9nZ2xlIGZ1bGxzY3JlZW5cblx0KiBAcmV0dXJuIHt2b2lkfVxuXHQqL1xuXHRwdWJsaWMgdG9nZ2xlKCkge1xuXHRcdHRoaXMuaXNGdWxsc2NyZWVuID0gIXRoaXMuaXNGdWxsc2NyZWVuO1xuXG5cdFx0aWYgKCAhdGhpcy5wYXJlbnRFbGVtZW50cy5sZW5ndGggKSB7XG5cdFx0XHR0aGlzLmVsZW1lbnQucGFyZW50cygpLmVhY2goICggX2luZGV4OiBudW1iZXIsIHBhcmVudDogYW55ICkgPT4ge1xuXHRcdFx0XHRwYXJlbnQgPSAkKCBwYXJlbnQgKTtcblx0XHRcdFx0Y29uc3QgekluZGV4OiBudW1iZXIgPSArcGFyZW50LmNzcyggJ3otaW5kZXgnICk7XG5cdFx0XHRcdCFpc05hTiggekluZGV4ICkgJiYgdGhpcy5wYXJlbnRFbGVtZW50cy5wdXNoKCBwYXJlbnQgKTtcblx0XHRcdH0gKTtcblx0XHR9XG5cblx0XHRpZiAoICF0aGlzLmhpZGRlbkVsZW1lbnRzICkge1xuXHRcdFx0dGhpcy5oaWRkZW5FbGVtZW50cyA9IHRoaXMuZWxlbWVudC5maW5kKCB0aGlzLmZ1bGxzY3JlZW4gKTtcblx0XHR9XG5cblx0XHR0aGlzLmlzRnVsbHNjcmVlbiA/IHRoaXMudHVybk9uKCkgOiB0aGlzLnR1cm5PZmYoKTtcblx0fVxuXG5cdC8qKlxuXHQqIFR1cm4gb24gZnVsbHNjcmVlblxuXHQqIEByZXR1cm4ge3ZvaWR9XG5cdCovXG5cdHB1YmxpYyB0dXJuT24oKSB7XG5cdFx0dGhpcy5lbGVtZW50LmNzcyh7XG5cdFx0XHR3aWR0aFx0XHRcdFx0OiAnMTAwJScsXG5cdFx0XHRoZWlnaHRcdFx0XHRcdDogJzEwMCUnLFxuXHRcdFx0dG9wXHRcdFx0XHRcdDogMCxcblx0XHRcdGxlZnRcdFx0XHRcdDogMCxcblx0XHRcdG92ZXJmbG93XHRcdFx0OiAnYXV0bycsXG5cdFx0XHRwb3NpdGlvblx0XHRcdDogJ2ZpeGVkJyxcblx0XHRcdHBhZGRpbmdcdFx0XHRcdDogMCxcblx0XHRcdG1hcmdpblx0XHRcdFx0OiAwLFxuXHRcdFx0Ym9yZGVyXHRcdFx0XHQ6IDAsXG5cdFx0XHQnYmFja2dyb3VuZC1jb2xvcidcdDogJyNmZmYnLFxuXHRcdFx0J2JvcmRlci1yYWRpdXMnXHRcdDogMCxcblx0XHRcdCd6LWluZGV4J1x0XHRcdDogOTk5LFxuXHRcdH0pO1xuXHRcdF8uZWFjaCggdGhpcy5wYXJlbnRFbGVtZW50cywgKCBlbGU6IGFueSApID0+IGVsZS5jc3MoICd6LWluZGV4JywgJ3Vuc2V0JyApICk7XG5cdFx0dGhpcy5oaWRkZW5FbGVtZW50cyAmJiB0aGlzLmhpZGRlbkVsZW1lbnRzLmhpZGUoKTtcblx0XHR0aGlzLmJ0bkNsb3NlLmluc2VydEFmdGVyKCB0aGlzLmVsZW1lbnQgKTtcblx0fVxuXG5cdC8qKlxuXHQqIFR1cm4gb2ZmIGZ1bGxzY3JlZW5cblx0KiBAcmV0dXJuIHt2b2lkfVxuXHQqL1xuXHRwdWJsaWMgdHVybk9mZigpIHtcblx0XHR0aGlzLmVsZW1lbnQuY3NzKHtcblx0XHRcdHdpZHRoXHRcdFx0XHQ6ICcnLFxuXHRcdFx0aGVpZ2h0XHRcdFx0XHQ6ICcnLFxuXHRcdFx0dG9wXHRcdFx0XHRcdDogJycsXG5cdFx0XHRsZWZ0XHRcdFx0XHQ6ICcnLFxuXHRcdFx0b3ZlcmZsb3dcdFx0XHQ6ICcnLFxuXHRcdFx0cG9zaXRpb25cdFx0XHQ6ICcnLFxuXHRcdFx0cGFkZGluZ1x0XHRcdFx0OiAnJyxcblx0XHRcdG1hcmdpblx0XHRcdFx0OiAnJyxcblx0XHRcdGJvcmRlclx0XHRcdFx0OiAnJyxcblx0XHRcdCdiYWNrZ3JvdW5kLWNvbG9yJ1x0OiAnJyxcblx0XHRcdCdib3JkZXItcmFkaXVzJ1x0XHQ6ICcnLFxuXHRcdFx0J3otaW5kZXgnXHRcdFx0OiAnJyxcblx0XHR9KTtcblx0XHRfLmVhY2goIHRoaXMucGFyZW50RWxlbWVudHMsICggZWxlOiBhbnkgKSA9PiBlbGUuY3NzKCAnei1pbmRleCcsICcnICkgKTtcblx0XHR0aGlzLmhpZGRlbkVsZW1lbnRzICYmIHRoaXMuaGlkZGVuRWxlbWVudHMuc2hvdygpO1xuXHRcdHRoaXMuYnRuQ2xvc2UuZGV0YWNoKCk7XG5cdH1cblxufVxuIl19