import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
let CapitalizeFirstPipe = class CapitalizeFirstPipe {
    /**
    * Transform
    * @param {string} value
    * @return {string}
    */
    transform(value) {
        if (value === null) {
            return 'N/A';
        }
        return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
    }
};
CapitalizeFirstPipe = tslib_1.__decorate([
    Pipe({
        name: 'capitalizeFirst',
    })
], CapitalizeFirstPipe);
export { CapitalizeFirstPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FwaXRhbGl6ZS1maXJzdC5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1jb3JlLyIsInNvdXJjZXMiOlsibGliL3BpcGVzL2NhcGl0YWxpemUtZmlyc3QucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFLcEQsSUFBYSxtQkFBbUIsR0FBaEMsTUFBYSxtQkFBbUI7SUFFL0I7Ozs7TUFJRTtJQUNLLFNBQVMsQ0FBRSxLQUFhO1FBQzlCLElBQUssS0FBSyxLQUFLLElBQUksRUFBRztZQUNyQixPQUFPLEtBQUssQ0FBQztTQUNiO1FBRUQsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxDQUFDLFdBQVcsRUFBRSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUUsQ0FBQyxDQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDekUsQ0FBQztDQUVELENBQUE7QUFmWSxtQkFBbUI7SUFIL0IsSUFBSSxDQUFDO1FBQ0wsSUFBSSxFQUFFLGlCQUFpQjtLQUN2QixDQUFDO0dBQ1csbUJBQW1CLENBZS9CO1NBZlksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7XG5cdG5hbWU6ICdjYXBpdGFsaXplRmlyc3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDYXBpdGFsaXplRmlyc3RQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cblx0LyoqXG5cdCogVHJhbnNmb3JtXG5cdCogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG5cdCogQHJldHVybiB7c3RyaW5nfVxuXHQqL1xuXHRwdWJsaWMgdHJhbnNmb3JtKCB2YWx1ZTogc3RyaW5nICk6IHN0cmluZyB7XG5cdFx0aWYgKCB2YWx1ZSA9PT0gbnVsbCApIHtcblx0XHRcdHJldHVybiAnTi9BJztcblx0XHR9XG5cblx0XHRyZXR1cm4gdmFsdWUuY2hhckF0KCAwICkudG9VcHBlckNhc2UoKSArIHZhbHVlLnNsaWNlKCAxICkudG9Mb3dlckNhc2UoKTtcblx0fVxuXG59XG4iXX0=