import * as tslib_1 from "tslib";
import { Directive, Input, Output, EventEmitter } from '@angular/core';
import _ from 'underscore';
let NgInitDirective = class NgInitDirective {
    constructor() {
        this.resultChange = new EventEmitter();
    }
    /**
    * @constructor
    */
    ngOnInit() {
        if (!_.isFunction(this.ngInit))
            return;
        this.resultChange.emit(this.ngInit());
    }
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
export { NgInitDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdpbml0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItY29yZS8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL25naW5pdC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTixTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFDaEIsWUFBWSxFQUNwQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLENBQUMsTUFBTSxZQUFZLENBQUM7QUFLM0IsSUFBYSxlQUFlLEdBQTVCLE1BQWEsZUFBZTtJQUg1QjtRQU9tQixpQkFBWSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO0lBVzdFLENBQUM7SUFUQTs7TUFFRTtJQUNLLFFBQVE7UUFDZCxJQUFLLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBRSxJQUFJLENBQUMsTUFBTSxDQUFFO1lBQUcsT0FBTztRQUUzQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUUsQ0FBQztJQUN6QyxDQUFDO0NBRUQsQ0FBQTtBQWJTO0lBQVIsS0FBSyxFQUFFO3NDQUFpQixRQUFROytDQUFDO0FBRXhCO0lBQVQsTUFBTSxFQUFFO3NDQUF1QixZQUFZO3FEQUFnQztBQUpoRSxlQUFlO0lBSDNCLFNBQVMsQ0FBQztRQUNWLFFBQVEsRUFBRSxVQUFVO0tBQ3BCLENBQUM7R0FDVyxlQUFlLENBZTNCO1NBZlksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdERpcmVjdGl2ZSwgSW5wdXQsIE91dHB1dCxcblx0T25Jbml0LCBFdmVudEVtaXR0ZXJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgXyBmcm9tICd1bmRlcnNjb3JlJztcblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnW25nSW5pdF0nLFxufSlcbmV4cG9ydCBjbGFzcyBOZ0luaXREaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdEBJbnB1dCgpIHByaXZhdGUgbmdJbml0OiBGdW5jdGlvbjtcblxuXHRAT3V0cHV0KCkgcHJpdmF0ZSByZXN1bHRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cblx0LyoqXG5cdCogQGNvbnN0cnVjdG9yXG5cdCovXG5cdHB1YmxpYyBuZ09uSW5pdCgpIHtcblx0XHRpZiAoICFfLmlzRnVuY3Rpb24oIHRoaXMubmdJbml0ICkgKSByZXR1cm47XG5cblx0XHR0aGlzLnJlc3VsdENoYW5nZS5lbWl0KCB0aGlzLm5nSW5pdCgpICk7XG5cdH1cblxufVxuIl19