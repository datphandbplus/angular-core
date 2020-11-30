import * as tslib_1 from "tslib";
var MinGreaterThanDirective_1;
import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
let MinGreaterThanDirective = MinGreaterThanDirective_1 = class MinGreaterThanDirective {
    /**
    * Validate
    * @param {FormControl} c
    * @return {any}
    */
    validate(c) {
        const v = c.value;
        return v <= this.minGreaterThan
            ? { min_greater_than: { min: this.minGreaterThan, actual: v } }
            : null;
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number)
], MinGreaterThanDirective.prototype, "minGreaterThan", void 0);
MinGreaterThanDirective = MinGreaterThanDirective_1 = tslib_1.__decorate([
    Directive({
        selector: '[minGreaterThan][formControlName],[minGreaterThan][formControl],[minGreaterThan][ngModel]',
        providers: [{ provide: NG_VALIDATORS, useExisting: MinGreaterThanDirective_1, multi: true }],
    })
], MinGreaterThanDirective);
export { MinGreaterThanDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluLWdyZWF0ZXItdGhhbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNvcmUvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9taW4tZ3JlYXRlci10aGFuLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxhQUFhLEVBQTBCLE1BQU0sZ0JBQWdCLENBQUM7QUFNdkUsSUFBYSx1QkFBdUIsK0JBQXBDLE1BQWEsdUJBQXVCO0lBSW5DOzs7O01BSUU7SUFDSyxRQUFRLENBQUUsQ0FBYztRQUM5QixNQUFNLENBQUMsR0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBRTFCLE9BQU8sQ0FBQyxJQUFJLElBQUksQ0FBQyxjQUFjO1lBQzlCLENBQUMsQ0FBQyxFQUFFLGdCQUFnQixFQUFFLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQy9ELENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDVCxDQUFDO0NBRUQsQ0FBQTtBQWZTO0lBQVIsS0FBSyxFQUFFOzsrREFBK0I7QUFGM0IsdUJBQXVCO0lBSm5DLFNBQVMsQ0FBQztRQUNWLFFBQVEsRUFBRywyRkFBMkY7UUFDdEcsU0FBUyxFQUFHLENBQUMsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSx5QkFBdUIsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUM7S0FDM0YsQ0FBQztHQUNXLHVCQUF1QixDQWlCbkM7U0FqQlksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMSURBVE9SUywgVmFsaWRhdG9yLCBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yXHQ6ICdbbWluR3JlYXRlclRoYW5dW2Zvcm1Db250cm9sTmFtZV0sW21pbkdyZWF0ZXJUaGFuXVtmb3JtQ29udHJvbF0sW21pbkdyZWF0ZXJUaGFuXVtuZ01vZGVsXScsXG5cdHByb3ZpZGVyc1x0OiBbeyBwcm92aWRlOiBOR19WQUxJREFUT1JTLCB1c2VFeGlzdGluZzogTWluR3JlYXRlclRoYW5EaXJlY3RpdmUsIG11bHRpOiB0cnVlIH1dLFxufSlcbmV4cG9ydCBjbGFzcyBNaW5HcmVhdGVyVGhhbkRpcmVjdGl2ZSBpbXBsZW1lbnRzIFZhbGlkYXRvciB7XG5cblx0QElucHV0KCkgcHVibGljIG1pbkdyZWF0ZXJUaGFuOiBudW1iZXI7XG5cblx0LyoqXG5cdCogVmFsaWRhdGVcblx0KiBAcGFyYW0ge0Zvcm1Db250cm9sfSBjXG5cdCogQHJldHVybiB7YW55fVxuXHQqL1xuXHRwdWJsaWMgdmFsaWRhdGUoIGM6IEZvcm1Db250cm9sICk6IHsgWyBrZXk6IHN0cmluZyBdOiBhbnkgfSB7XG5cdFx0Y29uc3QgdjogbnVtYmVyID0gYy52YWx1ZTtcblxuXHRcdHJldHVybiB2IDw9IHRoaXMubWluR3JlYXRlclRoYW5cblx0XHRcdD8geyBtaW5fZ3JlYXRlcl90aGFuOiB7IG1pbjogdGhpcy5taW5HcmVhdGVyVGhhbiwgYWN0dWFsOiB2IH0gfVxuXHRcdFx0OiBudWxsO1xuXHR9XG5cbn1cbiJdfQ==