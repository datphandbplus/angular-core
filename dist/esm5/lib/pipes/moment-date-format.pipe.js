import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
import moment from 'moment-timezone';
var MomentDateFormatPipe = /** @class */ (function () {
    function MomentDateFormatPipe() {
    }
    /**
    * Transform
    * @param {any} input
    * @param {string} format
    * @return {string}
    */
    MomentDateFormatPipe.prototype.transform = function (input, format) {
        if (format === void 0) { format = 'DD/MM/YYYY'; }
        var output = moment(input);
        return output.isValid() ? output.format(format) : 'N/A';
    };
    MomentDateFormatPipe = tslib_1.__decorate([
        Pipe({
            name: 'momentDateFormat',
        })
    ], MomentDateFormatPipe);
    return MomentDateFormatPipe;
}());
export { MomentDateFormatPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9tZW50LWRhdGUtZm9ybWF0LnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNvcmUvIiwic291cmNlcyI6WyJsaWIvcGlwZXMvbW9tZW50LWRhdGUtZm9ybWF0LnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sTUFBTSxNQUFNLGlCQUFpQixDQUFDO0FBS3JDO0lBQUE7SUFjQSxDQUFDO0lBWkE7Ozs7O01BS0U7SUFDSyx3Q0FBUyxHQUFoQixVQUFrQixLQUFVLEVBQUUsTUFBNkI7UUFBN0IsdUJBQUEsRUFBQSxxQkFBNkI7UUFDMUQsSUFBTSxNQUFNLEdBQVEsTUFBTSxDQUFFLEtBQUssQ0FBRSxDQUFDO1FBRXBDLE9BQU8sTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFFLE1BQU0sQ0FBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDM0QsQ0FBQztJQVpXLG9CQUFvQjtRQUhoQyxJQUFJLENBQUM7WUFDTCxJQUFJLEVBQUUsa0JBQWtCO1NBQ3hCLENBQUM7T0FDVyxvQkFBb0IsQ0FjaEM7SUFBRCwyQkFBQztDQUFBLEFBZEQsSUFjQztTQWRZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50LXRpbWV6b25lJztcblxuQFBpcGUoe1xuXHRuYW1lOiAnbW9tZW50RGF0ZUZvcm1hdCcsXG59KVxuZXhwb3J0IGNsYXNzIE1vbWVudERhdGVGb3JtYXRQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cblx0LyoqXG5cdCogVHJhbnNmb3JtXG5cdCogQHBhcmFtIHthbnl9IGlucHV0XG5cdCogQHBhcmFtIHtzdHJpbmd9IGZvcm1hdFxuXHQqIEByZXR1cm4ge3N0cmluZ31cblx0Ki9cblx0cHVibGljIHRyYW5zZm9ybSggaW5wdXQ6IGFueSwgZm9ybWF0OiBzdHJpbmcgPSAnREQvTU0vWVlZWScgKTogYW55IHtcblx0XHRjb25zdCBvdXRwdXQ6IGFueSA9IG1vbWVudCggaW5wdXQgKTtcblxuXHRcdHJldHVybiBvdXRwdXQuaXNWYWxpZCgpID8gb3V0cHV0LmZvcm1hdCggZm9ybWF0ICkgOiAnTi9BJztcblx0fVxuXG59XG4iXX0=