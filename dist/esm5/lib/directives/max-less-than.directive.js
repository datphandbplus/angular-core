import * as tslib_1 from "tslib";
import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
var MaxLessThanDirective = /** @class */ (function () {
    function MaxLessThanDirective() {
    }
    MaxLessThanDirective_1 = MaxLessThanDirective;
    /**
    * Validate
    * @param {FormControl} c
    * @return {any}
    */
    MaxLessThanDirective.prototype.validate = function (c) {
        var v = c.value;
        return v >= this.maxLessThan
            ? { max_less_than: { max: this.maxLessThan, actual: v } }
            : null;
    };
    var MaxLessThanDirective_1;
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], MaxLessThanDirective.prototype, "maxLessThan", void 0);
    MaxLessThanDirective = MaxLessThanDirective_1 = tslib_1.__decorate([
        Directive({
            selector: '[maxLessThan][formControlName],[maxLessThan][formControl],[maxLessThan][ngModel]',
            providers: [{ provide: NG_VALIDATORS, useExisting: MaxLessThanDirective_1, multi: true }],
        })
    ], MaxLessThanDirective);
    return MaxLessThanDirective;
}());
export { MaxLessThanDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF4LWxlc3MtdGhhbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNvcmUvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9tYXgtbGVzcy10aGFuLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLGFBQWEsRUFBMEIsTUFBTSxnQkFBZ0IsQ0FBQztBQU12RTtJQUFBO0lBaUJBLENBQUM7NkJBakJZLG9CQUFvQjtJQUloQzs7OztNQUlFO0lBQ0ssdUNBQVEsR0FBZixVQUFpQixDQUFjO1FBQzlCLElBQU0sQ0FBQyxHQUFXLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFFMUIsT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDLFdBQVc7WUFDM0IsQ0FBQyxDQUFDLEVBQUUsYUFBYSxFQUFFLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3pELENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDVCxDQUFDOztJQWJRO1FBQVIsS0FBSyxFQUFFOzs2REFBNEI7SUFGeEIsb0JBQW9CO1FBSmhDLFNBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRyxrRkFBa0Y7WUFDN0YsU0FBUyxFQUFHLENBQUMsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSxzQkFBb0IsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUM7U0FDeEYsQ0FBQztPQUNXLG9CQUFvQixDQWlCaEM7SUFBRCwyQkFBQztDQUFBLEFBakJELElBaUJDO1NBakJZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTElEQVRPUlMsIFZhbGlkYXRvciwgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3Rvclx0OiAnW21heExlc3NUaGFuXVtmb3JtQ29udHJvbE5hbWVdLFttYXhMZXNzVGhhbl1bZm9ybUNvbnRyb2xdLFttYXhMZXNzVGhhbl1bbmdNb2RlbF0nLFxuXHRwcm92aWRlcnNcdDogW3sgcHJvdmlkZTogTkdfVkFMSURBVE9SUywgdXNlRXhpc3Rpbmc6IE1heExlc3NUaGFuRGlyZWN0aXZlLCBtdWx0aTogdHJ1ZSB9XSxcbn0pXG5leHBvcnQgY2xhc3MgTWF4TGVzc1RoYW5EaXJlY3RpdmUgaW1wbGVtZW50cyBWYWxpZGF0b3Ige1xuXG5cdEBJbnB1dCgpIHB1YmxpYyBtYXhMZXNzVGhhbjogbnVtYmVyO1xuXG5cdC8qKlxuXHQqIFZhbGlkYXRlXG5cdCogQHBhcmFtIHtGb3JtQ29udHJvbH0gY1xuXHQqIEByZXR1cm4ge2FueX1cblx0Ki9cblx0cHVibGljIHZhbGlkYXRlKCBjOiBGb3JtQ29udHJvbCApOiB7IFsga2V5OiBzdHJpbmcgXTogYW55IH0ge1xuXHRcdGNvbnN0IHY6IG51bWJlciA9IGMudmFsdWU7XG5cblx0XHRyZXR1cm4gdiA+PSB0aGlzLm1heExlc3NUaGFuXG5cdFx0XHQ/IHsgbWF4X2xlc3NfdGhhbjogeyBtYXg6IHRoaXMubWF4TGVzc1RoYW4sIGFjdHVhbDogdiB9IH1cblx0XHRcdDogbnVsbDtcblx0fVxuXG59XG4iXX0=