import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
import moment from 'moment-timezone';
let MomentDateFormatPipe = class MomentDateFormatPipe {
    /**
    * Transform
    * @param {any} input
    * @param {string} format
    * @return {string}
    */
    transform(input, format = 'DD/MM/YYYY') {
        const output = moment(input);
        return output.isValid() ? output.format(format) : 'N/A';
    }
};
MomentDateFormatPipe = tslib_1.__decorate([
    Pipe({
        name: 'momentDateFormat',
    })
], MomentDateFormatPipe);
export { MomentDateFormatPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9tZW50LWRhdGUtZm9ybWF0LnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNvcmUvIiwic291cmNlcyI6WyJsaWIvcGlwZXMvbW9tZW50LWRhdGUtZm9ybWF0LnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sTUFBTSxNQUFNLGlCQUFpQixDQUFDO0FBS3JDLElBQWEsb0JBQW9CLEdBQWpDLE1BQWEsb0JBQW9CO0lBRWhDOzs7OztNQUtFO0lBQ0ssU0FBUyxDQUFFLEtBQVUsRUFBRSxTQUFpQixZQUFZO1FBQzFELE1BQU0sTUFBTSxHQUFRLE1BQU0sQ0FBRSxLQUFLLENBQUUsQ0FBQztRQUVwQyxPQUFPLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBRSxNQUFNLENBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQzNELENBQUM7Q0FFRCxDQUFBO0FBZFksb0JBQW9CO0lBSGhDLElBQUksQ0FBQztRQUNMLElBQUksRUFBRSxrQkFBa0I7S0FDeEIsQ0FBQztHQUNXLG9CQUFvQixDQWNoQztTQWRZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50LXRpbWV6b25lJztcblxuQFBpcGUoe1xuXHRuYW1lOiAnbW9tZW50RGF0ZUZvcm1hdCcsXG59KVxuZXhwb3J0IGNsYXNzIE1vbWVudERhdGVGb3JtYXRQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cblx0LyoqXG5cdCogVHJhbnNmb3JtXG5cdCogQHBhcmFtIHthbnl9IGlucHV0XG5cdCogQHBhcmFtIHtzdHJpbmd9IGZvcm1hdFxuXHQqIEByZXR1cm4ge3N0cmluZ31cblx0Ki9cblx0cHVibGljIHRyYW5zZm9ybSggaW5wdXQ6IGFueSwgZm9ybWF0OiBzdHJpbmcgPSAnREQvTU0vWVlZWScgKTogYW55IHtcblx0XHRjb25zdCBvdXRwdXQ6IGFueSA9IG1vbWVudCggaW5wdXQgKTtcblxuXHRcdHJldHVybiBvdXRwdXQuaXNWYWxpZCgpID8gb3V0cHV0LmZvcm1hdCggZm9ybWF0ICkgOiAnTi9BJztcblx0fVxuXG59XG4iXX0=