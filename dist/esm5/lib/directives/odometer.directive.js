import * as tslib_1 from "tslib";
import { Directive, ElementRef, OnChanges, SimpleChanges, Input } from '@angular/core';
import * as _$ from 'jquery';
import { NumberService } from '../services/number.service';
var $ = _$;
var OdometerDirective = /** @class */ (function () {
    /**
    * @constructor
    * @param {ElementRef} elementRef
    */
    function OdometerDirective(elementRef) {
        this.elementRef = elementRef;
        this.odometer = 0;
        this.element = $(this.elementRef.nativeElement);
        this.element.text(this.odometer);
    }
    /**
    * @constructor
    * @param {SimpleChanges} changes
    */
    OdometerDirective.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes.odometer) {
            setTimeout(function () {
                _this.element
                    .prop('Counter', 0)
                    .animate({ Counter: _this.odometer }, {
                    duration: _this.getDuration(_this.odometer),
                    easing: 'swing',
                    step: function (now) {
                        now = _this.odometer % 1 === 0 ? Math.ceil(now) : now.toFixed(1);
                        _this.element.text(NumberService.addCommas(+now));
                    },
                });
            }, 0);
        }
    };
    /**
    * Get odometer duration
    * @private
    * @param {number} odometer
    * @return {number} Odometer duration
    */
    OdometerDirective.prototype.getDuration = function (odometer) {
        if (odometer < 100)
            return 600;
        if (odometer < 1000)
            return 1000;
        if (odometer < 10000)
            return 1400;
        if (odometer < 1000000)
            return 1800;
        if (odometer < 10000000)
            return 2200;
        return 2600;
    };
    OdometerDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], OdometerDirective.prototype, "odometer", void 0);
    OdometerDirective = tslib_1.__decorate([
        Directive({
            selector: '[odometer]',
        }),
        tslib_1.__metadata("design:paramtypes", [ElementRef])
    ], OdometerDirective);
    return OdometerDirective;
}());
export { OdometerDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2RvbWV0ZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1jb3JlLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvb2RvbWV0ZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ04sU0FBUyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQ2hDLGFBQWEsRUFBRSxLQUFLLEVBQ3BCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sS0FBSyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBRTdCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUUzRCxJQUFNLENBQUMsR0FBUSxFQUFFLENBQUM7QUFLbEI7SUFNQzs7O01BR0U7SUFDRiwyQkFBcUIsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQVIxQixhQUFRLEdBQVcsQ0FBQyxDQUFDO1FBU3JDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFFLENBQUM7UUFDbEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBRSxDQUFDO0lBQ3BDLENBQUM7SUFFRDs7O01BR0U7SUFDSyx1Q0FBVyxHQUFsQixVQUFvQixPQUFzQjtRQUExQyxpQkFrQkM7UUFqQkEsSUFBSyxPQUFPLENBQUMsUUFBUSxFQUFHO1lBQ3ZCLFVBQVUsQ0FBRTtnQkFDWCxLQUFJLENBQUMsT0FBTztxQkFDWCxJQUFJLENBQUUsU0FBUyxFQUFFLENBQUMsQ0FBRTtxQkFDcEIsT0FBTyxDQUNQLEVBQUUsT0FBTyxFQUFFLEtBQUksQ0FBQyxRQUFRLEVBQUUsRUFDMUI7b0JBQ0MsUUFBUSxFQUFFLEtBQUksQ0FBQyxXQUFXLENBQUUsS0FBSSxDQUFDLFFBQVEsQ0FBRTtvQkFDM0MsTUFBTSxFQUFHLE9BQU87b0JBQ2hCLElBQUksRUFBRSxVQUFFLEdBQVE7d0JBQ2YsR0FBRyxHQUFHLEtBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBRSxDQUFDLENBQUUsQ0FBQzt3QkFDcEUsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUUsYUFBYSxDQUFDLFNBQVMsQ0FBRSxDQUFDLEdBQUcsQ0FBRSxDQUFFLENBQUM7b0JBQ3RELENBQUM7aUJBQ0QsQ0FDRCxDQUFDO1lBQ0gsQ0FBQyxFQUFFLENBQUMsQ0FBRSxDQUFDO1NBQ1A7SUFDRixDQUFDO0lBRUQ7Ozs7O01BS0U7SUFDTSx1Q0FBVyxHQUFuQixVQUFxQixRQUFnQjtRQUNwQyxJQUFLLFFBQVEsR0FBRyxHQUFHO1lBQUcsT0FBTyxHQUFHLENBQUM7UUFFakMsSUFBSyxRQUFRLEdBQUcsSUFBSTtZQUFHLE9BQU8sSUFBSSxDQUFDO1FBRW5DLElBQUssUUFBUSxHQUFHLEtBQUs7WUFBRyxPQUFPLElBQUksQ0FBQztRQUVwQyxJQUFLLFFBQVEsR0FBRyxPQUFPO1lBQUcsT0FBTyxJQUFJLENBQUM7UUFFdEMsSUFBSyxRQUFRLEdBQUcsUUFBUTtZQUFHLE9BQU8sSUFBSSxDQUFDO1FBRXZDLE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQzs7Z0JBL0NnQyxVQUFVOztJQVJsQztRQUFSLEtBQUssRUFBRTs7dURBQThCO0lBRjFCLGlCQUFpQjtRQUg3QixTQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsWUFBWTtTQUN0QixDQUFDO2lEQVdnQyxVQUFVO09BVi9CLGlCQUFpQixDQTJEN0I7SUFBRCx3QkFBQztDQUFBLEFBM0RELElBMkRDO1NBM0RZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgT25DaGFuZ2VzLFxuXHRTaW1wbGVDaGFuZ2VzLCBJbnB1dFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIF8kIGZyb20gJ2pxdWVyeSc7XG5cbmltcG9ydCB7IE51bWJlclNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9udW1iZXIuc2VydmljZSc7XG5cbmNvbnN0ICQ6IGFueSA9IF8kO1xuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdbb2RvbWV0ZXJdJyxcbn0pXG5leHBvcnQgY2xhc3MgT2RvbWV0ZXJEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG5cdEBJbnB1dCgpIHByaXZhdGUgb2RvbWV0ZXI6IG51bWJlciA9IDA7XG5cblx0cHJpdmF0ZSBlbGVtZW50OiBhbnk7XG5cblx0LyoqXG5cdCogQGNvbnN0cnVjdG9yXG5cdCogQHBhcmFtIHtFbGVtZW50UmVmfSBlbGVtZW50UmVmXG5cdCovXG5cdGNvbnN0cnVjdG9yKCBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYgKSB7XG5cdFx0dGhpcy5lbGVtZW50ID0gJCggdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQgKTtcblx0XHR0aGlzLmVsZW1lbnQudGV4dCggdGhpcy5vZG9tZXRlciApO1xuXHR9XG5cblx0LyoqXG5cdCogQGNvbnN0cnVjdG9yXG5cdCogQHBhcmFtIHtTaW1wbGVDaGFuZ2VzfSBjaGFuZ2VzXG5cdCovXG5cdHB1YmxpYyBuZ09uQ2hhbmdlcyggY2hhbmdlczogU2ltcGxlQ2hhbmdlcyApIHtcblx0XHRpZiAoIGNoYW5nZXMub2RvbWV0ZXIgKSB7XG5cdFx0XHRzZXRUaW1lb3V0KCAoKSA9PiB7XG5cdFx0XHRcdHRoaXMuZWxlbWVudFxuXHRcdFx0XHQucHJvcCggJ0NvdW50ZXInLCAwIClcblx0XHRcdFx0LmFuaW1hdGUoXG5cdFx0XHRcdFx0eyBDb3VudGVyOiB0aGlzLm9kb21ldGVyIH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0ZHVyYXRpb246IHRoaXMuZ2V0RHVyYXRpb24oIHRoaXMub2RvbWV0ZXIgKSxcblx0XHRcdFx0XHRcdGVhc2luZ1x0OiAnc3dpbmcnLFxuXHRcdFx0XHRcdFx0c3RlcDogKCBub3c6IGFueSApID0+IHtcblx0XHRcdFx0XHRcdFx0bm93ID0gdGhpcy5vZG9tZXRlciAlIDEgPT09IDAgPyBNYXRoLmNlaWwoIG5vdyApIDogbm93LnRvRml4ZWQoIDEgKTtcblx0XHRcdFx0XHRcdFx0dGhpcy5lbGVtZW50LnRleHQoIE51bWJlclNlcnZpY2UuYWRkQ29tbWFzKCArbm93ICkgKTtcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQpO1xuXHRcdFx0fSwgMCApO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQqIEdldCBvZG9tZXRlciBkdXJhdGlvblxuXHQqIEBwcml2YXRlXG5cdCogQHBhcmFtIHtudW1iZXJ9IG9kb21ldGVyXG5cdCogQHJldHVybiB7bnVtYmVyfSBPZG9tZXRlciBkdXJhdGlvblxuXHQqL1xuXHRwcml2YXRlIGdldER1cmF0aW9uKCBvZG9tZXRlcjogbnVtYmVyICk6IG51bWJlciB7XG5cdFx0aWYgKCBvZG9tZXRlciA8IDEwMCApIHJldHVybiA2MDA7XG5cblx0XHRpZiAoIG9kb21ldGVyIDwgMTAwMCApIHJldHVybiAxMDAwO1xuXG5cdFx0aWYgKCBvZG9tZXRlciA8IDEwMDAwICkgcmV0dXJuIDE0MDA7XG5cblx0XHRpZiAoIG9kb21ldGVyIDwgMTAwMDAwMCApIHJldHVybiAxODAwO1xuXG5cdFx0aWYgKCBvZG9tZXRlciA8IDEwMDAwMDAwICkgcmV0dXJuIDIyMDA7XG5cblx0XHRyZXR1cm4gMjYwMDtcblx0fVxuXG59XG4iXX0=