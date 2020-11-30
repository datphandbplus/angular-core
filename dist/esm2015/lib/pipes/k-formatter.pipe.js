import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
import { NumberService } from '../services/number.service';
let KFormatterPipe = class KFormatterPipe {
    /**
    * Transform
    * @param {any} input
    * @return {string}
    */
    transform(input) {
        return NumberService.kFormatter(input);
    }
};
KFormatterPipe = tslib_1.__decorate([
    Pipe({
        name: 'kFormatter',
    })
], KFormatterPipe);
export { KFormatterPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiay1mb3JtYXR0ZXIucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItY29yZS8iLCJzb3VyY2VzIjpbImxpYi9waXBlcy9rLWZvcm1hdHRlci5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUVwRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFLM0QsSUFBYSxjQUFjLEdBQTNCLE1BQWEsY0FBYztJQUUxQjs7OztNQUlFO0lBQ0ssU0FBUyxDQUFFLEtBQVU7UUFDM0IsT0FBTyxhQUFhLENBQUMsVUFBVSxDQUFFLEtBQUssQ0FBRSxDQUFDO0lBQzFDLENBQUM7Q0FFRCxDQUFBO0FBWFksY0FBYztJQUgxQixJQUFJLENBQUM7UUFDTCxJQUFJLEVBQUUsWUFBWTtLQUNsQixDQUFDO0dBQ1csY0FBYyxDQVcxQjtTQVhZLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE51bWJlclNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9udW1iZXIuc2VydmljZSc7XG5cbkBQaXBlKHtcblx0bmFtZTogJ2tGb3JtYXR0ZXInLFxufSlcbmV4cG9ydCBjbGFzcyBLRm9ybWF0dGVyUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG5cdC8qKlxuXHQqIFRyYW5zZm9ybVxuXHQqIEBwYXJhbSB7YW55fSBpbnB1dFxuXHQqIEByZXR1cm4ge3N0cmluZ31cblx0Ki9cblx0cHVibGljIHRyYW5zZm9ybSggaW5wdXQ6IGFueSApOiBzdHJpbmcge1xuXHRcdHJldHVybiBOdW1iZXJTZXJ2aWNlLmtGb3JtYXR0ZXIoIGlucHV0ICk7XG5cdH1cblxufVxuIl19