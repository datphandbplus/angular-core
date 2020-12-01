import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
import { NumberService } from '../services/number.service';
let FileSizeFormatterPipe = class FileSizeFormatterPipe {
    /**
    * Transform
    * @param {any} input
    * @return {string}
    */
    transform(input) {
        return NumberService.fileSizeFormatter(input);
    }
};
FileSizeFormatterPipe = tslib_1.__decorate([
    Pipe({
        name: 'fileSizeFormatter',
    })
], FileSizeFormatterPipe);
export { FileSizeFormatterPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1zaXplLWZvcm1hdHRlci5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1jb3JlLyIsInNvdXJjZXMiOlsibGliL3BpcGVzL2ZpbGUtc2l6ZS1mb3JtYXR0ZXIucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFFcEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBSzNELElBQWEscUJBQXFCLEdBQWxDLE1BQWEscUJBQXFCO0lBRWpDOzs7O01BSUU7SUFDSyxTQUFTLENBQUUsS0FBVTtRQUMzQixPQUFPLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBRSxLQUFLLENBQUUsQ0FBQztJQUNqRCxDQUFDO0NBRUQsQ0FBQTtBQVhZLHFCQUFxQjtJQUhqQyxJQUFJLENBQUM7UUFDTCxJQUFJLEVBQUUsbUJBQW1CO0tBQ3pCLENBQUM7R0FDVyxxQkFBcUIsQ0FXakM7U0FYWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE51bWJlclNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9udW1iZXIuc2VydmljZSc7XG5cbkBQaXBlKHtcblx0bmFtZTogJ2ZpbGVTaXplRm9ybWF0dGVyJyxcbn0pXG5leHBvcnQgY2xhc3MgRmlsZVNpemVGb3JtYXR0ZXJQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cblx0LyoqXG5cdCogVHJhbnNmb3JtXG5cdCogQHBhcmFtIHthbnl9IGlucHV0XG5cdCogQHJldHVybiB7c3RyaW5nfVxuXHQqL1xuXHRwdWJsaWMgdHJhbnNmb3JtKCBpbnB1dDogYW55ICk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIE51bWJlclNlcnZpY2UuZmlsZVNpemVGb3JtYXR0ZXIoIGlucHV0ICk7XG5cdH1cblxufVxuIl19