import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
import { NumberService } from '../services/number.service';
var FileSizeFormatterPipe = /** @class */ (function () {
    function FileSizeFormatterPipe() {
    }
    /**
    * Transform
    * @param {any} input
    * @return {string}
    */
    FileSizeFormatterPipe.prototype.transform = function (input) {
        return NumberService.fileSizeFormatter(input);
    };
    FileSizeFormatterPipe = tslib_1.__decorate([
        Pipe({
            name: 'fileSizeFormatter',
        })
    ], FileSizeFormatterPipe);
    return FileSizeFormatterPipe;
}());
export { FileSizeFormatterPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1zaXplLWZvcm1hdHRlci5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1jb3JlLyIsInNvdXJjZXMiOlsibGliL3BpcGVzL2ZpbGUtc2l6ZS1mb3JtYXR0ZXIucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFFcEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBSzNEO0lBQUE7SUFXQSxDQUFDO0lBVEE7Ozs7TUFJRTtJQUNLLHlDQUFTLEdBQWhCLFVBQWtCLEtBQVU7UUFDM0IsT0FBTyxhQUFhLENBQUMsaUJBQWlCLENBQUUsS0FBSyxDQUFFLENBQUM7SUFDakQsQ0FBQztJQVRXLHFCQUFxQjtRQUhqQyxJQUFJLENBQUM7WUFDTCxJQUFJLEVBQUUsbUJBQW1CO1NBQ3pCLENBQUM7T0FDVyxxQkFBcUIsQ0FXakM7SUFBRCw0QkFBQztDQUFBLEFBWEQsSUFXQztTQVhZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTnVtYmVyU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL251bWJlci5zZXJ2aWNlJztcblxuQFBpcGUoe1xuXHRuYW1lOiAnZmlsZVNpemVGb3JtYXR0ZXInLFxufSlcbmV4cG9ydCBjbGFzcyBGaWxlU2l6ZUZvcm1hdHRlclBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuXHQvKipcblx0KiBUcmFuc2Zvcm1cblx0KiBAcGFyYW0ge2FueX0gaW5wdXRcblx0KiBAcmV0dXJuIHtzdHJpbmd9XG5cdCovXG5cdHB1YmxpYyB0cmFuc2Zvcm0oIGlucHV0OiBhbnkgKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gTnVtYmVyU2VydmljZS5maWxlU2l6ZUZvcm1hdHRlciggaW5wdXQgKTtcblx0fVxuXG59XG4iXX0=