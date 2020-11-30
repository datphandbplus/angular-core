import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
import { NumberService } from '../services/number.service';
let PadNumberPipe = class PadNumberPipe {
    /**
    * Transform
    * @param {any} input
    * @param {boolean} size
    * @return {string}
    */
    transform(input, size) {
        return NumberService.padNumberFormatter(input, size);
    }
};
PadNumberPipe = tslib_1.__decorate([
    Pipe({
        name: 'padNumber',
    })
], PadNumberPipe);
export { PadNumberPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFkLW51bWJlci5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1jb3JlLyIsInNvdXJjZXMiOlsibGliL3BpcGVzL3BhZC1udW1iZXIucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFFcEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBSzNELElBQWEsYUFBYSxHQUExQixNQUFhLGFBQWE7SUFFekI7Ozs7O01BS0U7SUFDSyxTQUFTLENBQUUsS0FBVSxFQUFFLElBQVk7UUFDekMsT0FBTyxhQUFhLENBQUMsa0JBQWtCLENBQUUsS0FBSyxFQUFFLElBQUksQ0FBRSxDQUFDO0lBQ3hELENBQUM7Q0FFRCxDQUFBO0FBWlksYUFBYTtJQUh6QixJQUFJLENBQUM7UUFDTCxJQUFJLEVBQUUsV0FBVztLQUNqQixDQUFDO0dBQ1csYUFBYSxDQVl6QjtTQVpZLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE51bWJlclNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9udW1iZXIuc2VydmljZSc7XG5cbkBQaXBlKHtcblx0bmFtZTogJ3BhZE51bWJlcicsXG59KVxuZXhwb3J0IGNsYXNzIFBhZE51bWJlclBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuXHQvKipcblx0KiBUcmFuc2Zvcm1cblx0KiBAcGFyYW0ge2FueX0gaW5wdXRcblx0KiBAcGFyYW0ge2Jvb2xlYW59IHNpemVcblx0KiBAcmV0dXJuIHtzdHJpbmd9XG5cdCovXG5cdHB1YmxpYyB0cmFuc2Zvcm0oIGlucHV0OiBhbnksIHNpemU6IG51bWJlciApOiBzdHJpbmcge1xuXHRcdHJldHVybiBOdW1iZXJTZXJ2aWNlLnBhZE51bWJlckZvcm1hdHRlciggaW5wdXQsIHNpemUgKTtcblx0fVxuXG59XG4iXX0=