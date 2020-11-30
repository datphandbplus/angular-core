import * as tslib_1 from "tslib";
var MaxLessThanDirective_1;
import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
let MaxLessThanDirective = MaxLessThanDirective_1 = class MaxLessThanDirective {
    /**
    * Validate
    * @param {FormControl} c
    * @return {any}
    */
    validate(c) {
        const v = c.value;
        return v >= this.maxLessThan
            ? { max_less_than: { max: this.maxLessThan, actual: v } }
            : null;
    }
};
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
export { MaxLessThanDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF4LWxlc3MtdGhhbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNvcmUvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9tYXgtbGVzcy10aGFuLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxhQUFhLEVBQTBCLE1BQU0sZ0JBQWdCLENBQUM7QUFNdkUsSUFBYSxvQkFBb0IsNEJBQWpDLE1BQWEsb0JBQW9CO0lBSWhDOzs7O01BSUU7SUFDSyxRQUFRLENBQUUsQ0FBYztRQUM5QixNQUFNLENBQUMsR0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBRTFCLE9BQU8sQ0FBQyxJQUFJLElBQUksQ0FBQyxXQUFXO1lBQzNCLENBQUMsQ0FBQyxFQUFFLGFBQWEsRUFBRSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN6RCxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ1QsQ0FBQztDQUVELENBQUE7QUFmUztJQUFSLEtBQUssRUFBRTs7eURBQTRCO0FBRnhCLG9CQUFvQjtJQUpoQyxTQUFTLENBQUM7UUFDVixRQUFRLEVBQUcsa0ZBQWtGO1FBQzdGLFNBQVMsRUFBRyxDQUFDLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxXQUFXLEVBQUUsc0JBQW9CLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDO0tBQ3hGLENBQUM7R0FDVyxvQkFBb0IsQ0FpQmhDO1NBakJZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTElEQVRPUlMsIFZhbGlkYXRvciwgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3Rvclx0OiAnW21heExlc3NUaGFuXVtmb3JtQ29udHJvbE5hbWVdLFttYXhMZXNzVGhhbl1bZm9ybUNvbnRyb2xdLFttYXhMZXNzVGhhbl1bbmdNb2RlbF0nLFxuXHRwcm92aWRlcnNcdDogW3sgcHJvdmlkZTogTkdfVkFMSURBVE9SUywgdXNlRXhpc3Rpbmc6IE1heExlc3NUaGFuRGlyZWN0aXZlLCBtdWx0aTogdHJ1ZSB9XSxcbn0pXG5leHBvcnQgY2xhc3MgTWF4TGVzc1RoYW5EaXJlY3RpdmUgaW1wbGVtZW50cyBWYWxpZGF0b3Ige1xuXG5cdEBJbnB1dCgpIHB1YmxpYyBtYXhMZXNzVGhhbjogbnVtYmVyO1xuXG5cdC8qKlxuXHQqIFZhbGlkYXRlXG5cdCogQHBhcmFtIHtGb3JtQ29udHJvbH0gY1xuXHQqIEByZXR1cm4ge2FueX1cblx0Ki9cblx0cHVibGljIHZhbGlkYXRlKCBjOiBGb3JtQ29udHJvbCApOiB7IFsga2V5OiBzdHJpbmcgXTogYW55IH0ge1xuXHRcdGNvbnN0IHY6IG51bWJlciA9IGMudmFsdWU7XG5cblx0XHRyZXR1cm4gdiA+PSB0aGlzLm1heExlc3NUaGFuXG5cdFx0XHQ/IHsgbWF4X2xlc3NfdGhhbjogeyBtYXg6IHRoaXMubWF4TGVzc1RoYW4sIGFjdHVhbDogdiB9IH1cblx0XHRcdDogbnVsbDtcblx0fVxuXG59XG4iXX0=