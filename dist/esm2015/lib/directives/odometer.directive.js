import * as tslib_1 from "tslib";
import { Directive, ElementRef, OnChanges, SimpleChanges, Input } from '@angular/core';
import * as _$ from 'jquery';
import { NumberService } from '../services/number.service';
const $ = _$;
let OdometerDirective = class OdometerDirective {
    /**
    * @constructor
    * @param {ElementRef} elementRef
    */
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.odometer = 0;
        this.element = $(this.elementRef.nativeElement);
        this.element.text(this.odometer);
    }
    /**
    * @constructor
    * @param {SimpleChanges} changes
    */
    ngOnChanges(changes) {
        if (changes.odometer) {
            setTimeout(() => {
                this.element
                    .prop('Counter', 0)
                    .animate({ Counter: this.odometer }, {
                    duration: this.getDuration(this.odometer),
                    easing: 'swing',
                    step: (now) => {
                        now = this.odometer % 1 === 0 ? Math.ceil(now) : now.toFixed(1);
                        this.element.text(NumberService.addCommas(+now));
                    },
                });
            }, 0);
        }
    }
    /**
    * Get odometer duration
    * @private
    * @param {number} odometer
    * @return {number} Odometer duration
    */
    getDuration(odometer) {
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
    }
};
OdometerDirective.ctorParameters = () => [
    { type: ElementRef }
];
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
export { OdometerDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2RvbWV0ZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1jb3JlLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvb2RvbWV0ZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ04sU0FBUyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQ2hDLGFBQWEsRUFBRSxLQUFLLEVBQ3BCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sS0FBSyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBRTdCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUUzRCxNQUFNLENBQUMsR0FBUSxFQUFFLENBQUM7QUFLbEIsSUFBYSxpQkFBaUIsR0FBOUIsTUFBYSxpQkFBaUI7SUFNN0I7OztNQUdFO0lBQ0YsWUFBcUIsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQVIxQixhQUFRLEdBQVcsQ0FBQyxDQUFDO1FBU3JDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFFLENBQUM7UUFDbEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBRSxDQUFDO0lBQ3BDLENBQUM7SUFFRDs7O01BR0U7SUFDSyxXQUFXLENBQUUsT0FBc0I7UUFDekMsSUFBSyxPQUFPLENBQUMsUUFBUSxFQUFHO1lBQ3ZCLFVBQVUsQ0FBRSxHQUFHLEVBQUU7Z0JBQ2hCLElBQUksQ0FBQyxPQUFPO3FCQUNYLElBQUksQ0FBRSxTQUFTLEVBQUUsQ0FBQyxDQUFFO3FCQUNwQixPQUFPLENBQ1AsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUMxQjtvQkFDQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBRSxJQUFJLENBQUMsUUFBUSxDQUFFO29CQUMzQyxNQUFNLEVBQUcsT0FBTztvQkFDaEIsSUFBSSxFQUFFLENBQUUsR0FBUSxFQUFHLEVBQUU7d0JBQ3BCLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUUsQ0FBQyxDQUFFLENBQUM7d0JBQ3BFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFFLGFBQWEsQ0FBQyxTQUFTLENBQUUsQ0FBQyxHQUFHLENBQUUsQ0FBRSxDQUFDO29CQUN0RCxDQUFDO2lCQUNELENBQ0QsQ0FBQztZQUNILENBQUMsRUFBRSxDQUFDLENBQUUsQ0FBQztTQUNQO0lBQ0YsQ0FBQztJQUVEOzs7OztNQUtFO0lBQ00sV0FBVyxDQUFFLFFBQWdCO1FBQ3BDLElBQUssUUFBUSxHQUFHLEdBQUc7WUFBRyxPQUFPLEdBQUcsQ0FBQztRQUVqQyxJQUFLLFFBQVEsR0FBRyxJQUFJO1lBQUcsT0FBTyxJQUFJLENBQUM7UUFFbkMsSUFBSyxRQUFRLEdBQUcsS0FBSztZQUFHLE9BQU8sSUFBSSxDQUFDO1FBRXBDLElBQUssUUFBUSxHQUFHLE9BQU87WUFBRyxPQUFPLElBQUksQ0FBQztRQUV0QyxJQUFLLFFBQVEsR0FBRyxRQUFRO1lBQUcsT0FBTyxJQUFJLENBQUM7UUFFdkMsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDO0NBRUQsQ0FBQTs7WUFqRGlDLFVBQVU7O0FBUmxDO0lBQVIsS0FBSyxFQUFFOzttREFBOEI7QUFGMUIsaUJBQWlCO0lBSDdCLFNBQVMsQ0FBQztRQUNWLFFBQVEsRUFBRSxZQUFZO0tBQ3RCLENBQUM7NkNBV2dDLFVBQVU7R0FWL0IsaUJBQWlCLENBMkQ3QjtTQTNEWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHREaXJlY3RpdmUsIEVsZW1lbnRSZWYsIE9uQ2hhbmdlcyxcblx0U2ltcGxlQ2hhbmdlcywgSW5wdXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBfJCBmcm9tICdqcXVlcnknO1xuXG5pbXBvcnQgeyBOdW1iZXJTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvbnVtYmVyLnNlcnZpY2UnO1xuXG5jb25zdCAkOiBhbnkgPSBfJDtcblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnW29kb21ldGVyXScsXG59KVxuZXhwb3J0IGNsYXNzIE9kb21ldGVyRGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuXHRASW5wdXQoKSBwcml2YXRlIG9kb21ldGVyOiBudW1iZXIgPSAwO1xuXG5cdHByaXZhdGUgZWxlbWVudDogYW55O1xuXG5cdC8qKlxuXHQqIEBjb25zdHJ1Y3RvclxuXHQqIEBwYXJhbSB7RWxlbWVudFJlZn0gZWxlbWVudFJlZlxuXHQqL1xuXHRjb25zdHJ1Y3RvciggcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmICkge1xuXHRcdHRoaXMuZWxlbWVudCA9ICQoIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50ICk7XG5cdFx0dGhpcy5lbGVtZW50LnRleHQoIHRoaXMub2RvbWV0ZXIgKTtcblx0fVxuXG5cdC8qKlxuXHQqIEBjb25zdHJ1Y3RvclxuXHQqIEBwYXJhbSB7U2ltcGxlQ2hhbmdlc30gY2hhbmdlc1xuXHQqL1xuXHRwdWJsaWMgbmdPbkNoYW5nZXMoIGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMgKSB7XG5cdFx0aWYgKCBjaGFuZ2VzLm9kb21ldGVyICkge1xuXHRcdFx0c2V0VGltZW91dCggKCkgPT4ge1xuXHRcdFx0XHR0aGlzLmVsZW1lbnRcblx0XHRcdFx0LnByb3AoICdDb3VudGVyJywgMCApXG5cdFx0XHRcdC5hbmltYXRlKFxuXHRcdFx0XHRcdHsgQ291bnRlcjogdGhpcy5vZG9tZXRlciB9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdGR1cmF0aW9uOiB0aGlzLmdldER1cmF0aW9uKCB0aGlzLm9kb21ldGVyICksXG5cdFx0XHRcdFx0XHRlYXNpbmdcdDogJ3N3aW5nJyxcblx0XHRcdFx0XHRcdHN0ZXA6ICggbm93OiBhbnkgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdG5vdyA9IHRoaXMub2RvbWV0ZXIgJSAxID09PSAwID8gTWF0aC5jZWlsKCBub3cgKSA6IG5vdy50b0ZpeGVkKCAxICk7XG5cdFx0XHRcdFx0XHRcdHRoaXMuZWxlbWVudC50ZXh0KCBOdW1iZXJTZXJ2aWNlLmFkZENvbW1hcyggK25vdyApICk7XG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdH1cblx0XHRcdFx0KTtcblx0XHRcdH0sIDAgKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0KiBHZXQgb2RvbWV0ZXIgZHVyYXRpb25cblx0KiBAcHJpdmF0ZVxuXHQqIEBwYXJhbSB7bnVtYmVyfSBvZG9tZXRlclxuXHQqIEByZXR1cm4ge251bWJlcn0gT2RvbWV0ZXIgZHVyYXRpb25cblx0Ki9cblx0cHJpdmF0ZSBnZXREdXJhdGlvbiggb2RvbWV0ZXI6IG51bWJlciApOiBudW1iZXIge1xuXHRcdGlmICggb2RvbWV0ZXIgPCAxMDAgKSByZXR1cm4gNjAwO1xuXG5cdFx0aWYgKCBvZG9tZXRlciA8IDEwMDAgKSByZXR1cm4gMTAwMDtcblxuXHRcdGlmICggb2RvbWV0ZXIgPCAxMDAwMCApIHJldHVybiAxNDAwO1xuXG5cdFx0aWYgKCBvZG9tZXRlciA8IDEwMDAwMDAgKSByZXR1cm4gMTgwMDtcblxuXHRcdGlmICggb2RvbWV0ZXIgPCAxMDAwMDAwMCApIHJldHVybiAyMjAwO1xuXG5cdFx0cmV0dXJuIDI2MDA7XG5cdH1cblxufVxuIl19