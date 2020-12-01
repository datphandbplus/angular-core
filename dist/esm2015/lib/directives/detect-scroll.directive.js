import * as tslib_1 from "tslib";
import { Directive, ElementRef, AfterViewInit, EventEmitter, Input, Output } from '@angular/core';
let DetectScrollDirective = class DetectScrollDirective {
    /**
    * @constructor
    * @param {ElementRef} elementRef
    */
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.delay = 0;
        this.offset = 0;
        this.onScroll = new EventEmitter();
        this.onReachStart = new EventEmitter();
        this.onReachEnd = new EventEmitter();
    }
    /**
    * @constructor
    */
    ngAfterViewInit() {
        const element = this.elementRef.nativeElement;
        // Init
        this.detectScroll(element);
        // Scrolling
        element.addEventListener('scroll', () => this.detectScroll(element));
    }
    /**
    * Detect scroll
    * @private
    * @param {any} element
    * @return {void}
    */
    detectScroll(element) {
        element.scrollHeight !== element.clientHeight && setTimeout(() => {
            // Scrolling
            this.onScroll.emit(event);
            // In case scroll reach start
            element.scrollTop <= this.offset && this.onReachStart.emit(event);
            // In case scroll reach end
            element.scrollTop >= (element.scrollHeight - element.clientHeight - this.offset)
                && this.onReachEnd.emit(event);
        }, this.delay);
    }
};
DetectScrollDirective.ctorParameters = () => [
    { type: ElementRef }
];
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number)
], DetectScrollDirective.prototype, "delay", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number)
], DetectScrollDirective.prototype, "offset", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DetectScrollDirective.prototype, "onScroll", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DetectScrollDirective.prototype, "onReachStart", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DetectScrollDirective.prototype, "onReachEnd", void 0);
DetectScrollDirective = tslib_1.__decorate([
    Directive({
        selector: '[detectScroll]',
    }),
    tslib_1.__metadata("design:paramtypes", [ElementRef])
], DetectScrollDirective);
export { DetectScrollDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0ZWN0LXNjcm9sbC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNvcmUvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9kZXRlY3Qtc2Nyb2xsLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNOLFNBQVMsRUFBRSxVQUFVLEVBQUUsYUFBYSxFQUNwQyxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFDM0IsTUFBTSxlQUFlLENBQUM7QUFLdkIsSUFBYSxxQkFBcUIsR0FBbEMsTUFBYSxxQkFBcUI7SUFTakM7OztNQUdFO0lBQ0YsWUFBcUIsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQVgzQixVQUFLLEdBQVcsQ0FBQyxDQUFDO1FBQ2xCLFdBQU0sR0FBVyxDQUFDLENBQUM7UUFFbEIsYUFBUSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3RELGlCQUFZLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFDMUQsZUFBVSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO0lBTTFCLENBQUM7SUFFaEQ7O01BRUU7SUFDSyxlQUFlO1FBQ3JCLE1BQU0sT0FBTyxHQUFRLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO1FBRW5ELE9BQU87UUFDUCxJQUFJLENBQUMsWUFBWSxDQUFFLE9BQU8sQ0FBRSxDQUFDO1FBRTdCLFlBQVk7UUFDWixPQUFPLENBQUMsZ0JBQWdCLENBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUUsT0FBTyxDQUFFLENBQUUsQ0FBQztJQUMxRSxDQUFDO0lBRUQ7Ozs7O01BS0U7SUFDTSxZQUFZLENBQUUsT0FBWTtRQUNqQyxPQUFPLENBQUMsWUFBWSxLQUFLLE9BQU8sQ0FBQyxZQUFZLElBQUksVUFBVSxDQUFFLEdBQUcsRUFBRTtZQUNqRSxZQUFZO1lBQ1osSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUUsS0FBSyxDQUFFLENBQUM7WUFFNUIsNkJBQTZCO1lBQzdCLE9BQU8sQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBRSxLQUFLLENBQUUsQ0FBQztZQUVwRSwyQkFBMkI7WUFDM0IsT0FBTyxDQUFDLFNBQVMsSUFBSSxDQUFFLE9BQU8sQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFFO21CQUM5RSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBRSxLQUFLLENBQUUsQ0FBQztRQUNuQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBRSxDQUFDO0lBQ2pCLENBQUM7Q0FFRCxDQUFBOztZQW5DaUMsVUFBVTs7QUFYbEM7SUFBUixLQUFLLEVBQUU7O29EQUEwQjtBQUN6QjtJQUFSLEtBQUssRUFBRTs7cURBQTJCO0FBRXpCO0lBQVQsTUFBTSxFQUFFO3NDQUFrQixZQUFZO3VEQUFnQztBQUM3RDtJQUFULE1BQU0sRUFBRTtzQ0FBc0IsWUFBWTsyREFBZ0M7QUFDakU7SUFBVCxNQUFNLEVBQUU7c0NBQW9CLFlBQVk7eURBQWdDO0FBUDdELHFCQUFxQjtJQUhqQyxTQUFTLENBQUM7UUFDVixRQUFRLEVBQUUsZ0JBQWdCO0tBQzFCLENBQUM7NkNBY2dDLFVBQVU7R0FiL0IscUJBQXFCLENBZ0RqQztTQWhEWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHREaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEFmdGVyVmlld0luaXQsXG5cdEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnW2RldGVjdFNjcm9sbF0nLFxufSlcbmV4cG9ydCBjbGFzcyBEZXRlY3RTY3JvbGxEaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcblxuXHRASW5wdXQoKSBwdWJsaWMgZGVsYXk6IG51bWJlciA9IDA7XG5cdEBJbnB1dCgpIHB1YmxpYyBvZmZzZXQ6IG51bWJlciA9IDA7XG5cblx0QE91dHB1dCgpIHB1YmxpYyBvblNjcm9sbDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblx0QE91dHB1dCgpIHB1YmxpYyBvblJlYWNoU3RhcnQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cdEBPdXRwdXQoKSBwdWJsaWMgb25SZWFjaEVuZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuXHQvKipcblx0KiBAY29uc3RydWN0b3Jcblx0KiBAcGFyYW0ge0VsZW1lbnRSZWZ9IGVsZW1lbnRSZWZcblx0Ki9cblx0Y29uc3RydWN0b3IoIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiApIHt9XG5cblx0LyoqXG5cdCogQGNvbnN0cnVjdG9yXG5cdCovXG5cdHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKSB7XG5cdFx0Y29uc3QgZWxlbWVudDogYW55ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG5cblx0XHQvLyBJbml0XG5cdFx0dGhpcy5kZXRlY3RTY3JvbGwoIGVsZW1lbnQgKTtcblxuXHRcdC8vIFNjcm9sbGluZ1xuXHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ3Njcm9sbCcsICgpID0+IHRoaXMuZGV0ZWN0U2Nyb2xsKCBlbGVtZW50ICkgKTtcblx0fVxuXG5cdC8qKlxuXHQqIERldGVjdCBzY3JvbGxcblx0KiBAcHJpdmF0ZVxuXHQqIEBwYXJhbSB7YW55fSBlbGVtZW50XG5cdCogQHJldHVybiB7dm9pZH1cblx0Ki9cblx0cHJpdmF0ZSBkZXRlY3RTY3JvbGwoIGVsZW1lbnQ6IGFueSApIHtcblx0XHRlbGVtZW50LnNjcm9sbEhlaWdodCAhPT0gZWxlbWVudC5jbGllbnRIZWlnaHQgJiYgc2V0VGltZW91dCggKCkgPT4ge1xuXHRcdFx0Ly8gU2Nyb2xsaW5nXG5cdFx0XHR0aGlzLm9uU2Nyb2xsLmVtaXQoIGV2ZW50ICk7XG5cblx0XHRcdC8vIEluIGNhc2Ugc2Nyb2xsIHJlYWNoIHN0YXJ0XG5cdFx0XHRlbGVtZW50LnNjcm9sbFRvcCA8PSB0aGlzLm9mZnNldCAmJiB0aGlzLm9uUmVhY2hTdGFydC5lbWl0KCBldmVudCApO1xuXG5cdFx0XHQvLyBJbiBjYXNlIHNjcm9sbCByZWFjaCBlbmRcblx0XHRcdGVsZW1lbnQuc2Nyb2xsVG9wID49ICggZWxlbWVudC5zY3JvbGxIZWlnaHQgLSBlbGVtZW50LmNsaWVudEhlaWdodCAtIHRoaXMub2Zmc2V0IClcblx0XHRcdFx0JiYgdGhpcy5vblJlYWNoRW5kLmVtaXQoIGV2ZW50ICk7XG5cdFx0fSwgdGhpcy5kZWxheSApO1xuXHR9XG5cbn1cbiJdfQ==