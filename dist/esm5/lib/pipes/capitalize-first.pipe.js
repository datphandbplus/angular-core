import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
var CapitalizeFirstPipe = /** @class */ (function () {
    function CapitalizeFirstPipe() {
    }
    /**
    * Transform
    * @param {string} value
    * @return {string}
    */
    CapitalizeFirstPipe.prototype.transform = function (value) {
        if (value === null) {
            return 'N/A';
        }
        return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
    };
    CapitalizeFirstPipe = tslib_1.__decorate([
        Pipe({
            name: 'capitalizeFirst',
        })
    ], CapitalizeFirstPipe);
    return CapitalizeFirstPipe;
}());
export { CapitalizeFirstPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FwaXRhbGl6ZS1maXJzdC5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1jb3JlLyIsInNvdXJjZXMiOlsibGliL3BpcGVzL2NhcGl0YWxpemUtZmlyc3QucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFLcEQ7SUFBQTtJQWVBLENBQUM7SUFiQTs7OztNQUlFO0lBQ0ssdUNBQVMsR0FBaEIsVUFBa0IsS0FBYTtRQUM5QixJQUFLLEtBQUssS0FBSyxJQUFJLEVBQUc7WUFDckIsT0FBTyxLQUFLLENBQUM7U0FDYjtRQUVELE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsQ0FBQyxXQUFXLEVBQUUsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFFLENBQUMsQ0FBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3pFLENBQUM7SUFiVyxtQkFBbUI7UUFIL0IsSUFBSSxDQUFDO1lBQ0wsSUFBSSxFQUFFLGlCQUFpQjtTQUN2QixDQUFDO09BQ1csbUJBQW1CLENBZS9CO0lBQUQsMEJBQUM7Q0FBQSxBQWZELElBZUM7U0FmWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHtcblx0bmFtZTogJ2NhcGl0YWxpemVGaXJzdCcsXG59KVxuZXhwb3J0IGNsYXNzIENhcGl0YWxpemVGaXJzdFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuXHQvKipcblx0KiBUcmFuc2Zvcm1cblx0KiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcblx0KiBAcmV0dXJuIHtzdHJpbmd9XG5cdCovXG5cdHB1YmxpYyB0cmFuc2Zvcm0oIHZhbHVlOiBzdHJpbmcgKTogc3RyaW5nIHtcblx0XHRpZiAoIHZhbHVlID09PSBudWxsICkge1xuXHRcdFx0cmV0dXJuICdOL0EnO1xuXHRcdH1cblxuXHRcdHJldHVybiB2YWx1ZS5jaGFyQXQoIDAgKS50b1VwcGVyQ2FzZSgpICsgdmFsdWUuc2xpY2UoIDEgKS50b0xvd2VyQ2FzZSgpO1xuXHR9XG5cbn1cbiJdfQ==