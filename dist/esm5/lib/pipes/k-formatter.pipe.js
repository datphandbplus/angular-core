import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
import { NumberService } from '../services/number.service';
var KFormatterPipe = /** @class */ (function () {
    function KFormatterPipe() {
    }
    /**
    * Transform
    * @param {any} input
    * @return {string}
    */
    KFormatterPipe.prototype.transform = function (input) {
        return NumberService.kFormatter(input);
    };
    KFormatterPipe = tslib_1.__decorate([
        Pipe({
            name: 'kFormatter',
        })
    ], KFormatterPipe);
    return KFormatterPipe;
}());
export { KFormatterPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiay1mb3JtYXR0ZXIucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItY29yZS8iLCJzb3VyY2VzIjpbImxpYi9waXBlcy9rLWZvcm1hdHRlci5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUVwRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFLM0Q7SUFBQTtJQVdBLENBQUM7SUFUQTs7OztNQUlFO0lBQ0ssa0NBQVMsR0FBaEIsVUFBa0IsS0FBVTtRQUMzQixPQUFPLGFBQWEsQ0FBQyxVQUFVLENBQUUsS0FBSyxDQUFFLENBQUM7SUFDMUMsQ0FBQztJQVRXLGNBQWM7UUFIMUIsSUFBSSxDQUFDO1lBQ0wsSUFBSSxFQUFFLFlBQVk7U0FDbEIsQ0FBQztPQUNXLGNBQWMsQ0FXMUI7SUFBRCxxQkFBQztDQUFBLEFBWEQsSUFXQztTQVhZLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE51bWJlclNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9udW1iZXIuc2VydmljZSc7XG5cbkBQaXBlKHtcblx0bmFtZTogJ2tGb3JtYXR0ZXInLFxufSlcbmV4cG9ydCBjbGFzcyBLRm9ybWF0dGVyUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG5cdC8qKlxuXHQqIFRyYW5zZm9ybVxuXHQqIEBwYXJhbSB7YW55fSBpbnB1dFxuXHQqIEByZXR1cm4ge3N0cmluZ31cblx0Ki9cblx0cHVibGljIHRyYW5zZm9ybSggaW5wdXQ6IGFueSApOiBzdHJpbmcge1xuXHRcdHJldHVybiBOdW1iZXJTZXJ2aWNlLmtGb3JtYXR0ZXIoIGlucHV0ICk7XG5cdH1cblxufVxuIl19