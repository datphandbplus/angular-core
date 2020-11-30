import * as tslib_1 from "tslib";
import { Directive, Input, Output, EventEmitter } from '@angular/core';
import _ from 'underscore';
var NgInitDirective = /** @class */ (function () {
    function NgInitDirective() {
        this.resultChange = new EventEmitter();
    }
    /**
    * @constructor
    */
    NgInitDirective.prototype.ngOnInit = function () {
        if (!_.isFunction(this.ngInit))
            return;
        this.resultChange.emit(this.ngInit());
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Function)
    ], NgInitDirective.prototype, "ngInit", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], NgInitDirective.prototype, "resultChange", void 0);
    NgInitDirective = tslib_1.__decorate([
        Directive({
            selector: '[ngInit]',
        })
    ], NgInitDirective);
    return NgInitDirective;
}());
export { NgInitDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdpbml0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItY29yZS8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL25naW5pdC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTixTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFDaEIsWUFBWSxFQUNwQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLENBQUMsTUFBTSxZQUFZLENBQUM7QUFLM0I7SUFIQTtRQU9tQixpQkFBWSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO0lBVzdFLENBQUM7SUFUQTs7TUFFRTtJQUNLLGtDQUFRLEdBQWY7UUFDQyxJQUFLLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBRSxJQUFJLENBQUMsTUFBTSxDQUFFO1lBQUcsT0FBTztRQUUzQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUUsQ0FBQztJQUN6QyxDQUFDO0lBWFE7UUFBUixLQUFLLEVBQUU7MENBQWlCLFFBQVE7bURBQUM7SUFFeEI7UUFBVCxNQUFNLEVBQUU7MENBQXVCLFlBQVk7eURBQWdDO0lBSmhFLGVBQWU7UUFIM0IsU0FBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLFVBQVU7U0FDcEIsQ0FBQztPQUNXLGVBQWUsQ0FlM0I7SUFBRCxzQkFBQztDQUFBLEFBZkQsSUFlQztTQWZZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHREaXJlY3RpdmUsIElucHV0LCBPdXRwdXQsXG5cdE9uSW5pdCwgRXZlbnRFbWl0dGVyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IF8gZnJvbSAndW5kZXJzY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ1tuZ0luaXRdJyxcbn0pXG5leHBvcnQgY2xhc3MgTmdJbml0RGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRASW5wdXQoKSBwcml2YXRlIG5nSW5pdDogRnVuY3Rpb247XG5cblx0QE91dHB1dCgpIHByaXZhdGUgcmVzdWx0Q2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG5cdC8qKlxuXHQqIEBjb25zdHJ1Y3RvclxuXHQqL1xuXHRwdWJsaWMgbmdPbkluaXQoKSB7XG5cdFx0aWYgKCAhXy5pc0Z1bmN0aW9uKCB0aGlzLm5nSW5pdCApICkgcmV0dXJuO1xuXG5cdFx0dGhpcy5yZXN1bHRDaGFuZ2UuZW1pdCggdGhpcy5uZ0luaXQoKSApO1xuXHR9XG5cbn1cbiJdfQ==