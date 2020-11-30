import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
import { NumberService } from '../services/number.service';
let CommasPipe = class CommasPipe {
    /**
    * Transform
    * @param {any} input
    * @param {boolean} roundUp
    * @return {string}
    */
    transform(input, roundUp = false) {
        return NumberService.addCommas(input, roundUp);
    }
};
CommasPipe = tslib_1.__decorate([
    Pipe({
        name: 'commas',
    })
], CommasPipe);
export { CommasPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWFzLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNvcmUvIiwic291cmNlcyI6WyJsaWIvcGlwZXMvY29tbWFzLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRXBELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUszRCxJQUFhLFVBQVUsR0FBdkIsTUFBYSxVQUFVO0lBRXRCOzs7OztNQUtFO0lBQ0ssU0FBUyxDQUFFLEtBQVUsRUFBRSxVQUFtQixLQUFLO1FBQ3JELE9BQU8sYUFBYSxDQUFDLFNBQVMsQ0FBRSxLQUFLLEVBQUUsT0FBTyxDQUFFLENBQUM7SUFDbEQsQ0FBQztDQUVELENBQUE7QUFaWSxVQUFVO0lBSHRCLElBQUksQ0FBQztRQUNMLElBQUksRUFBRSxRQUFRO0tBQ2QsQ0FBQztHQUNXLFVBQVUsQ0FZdEI7U0FaWSxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOdW1iZXJTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvbnVtYmVyLnNlcnZpY2UnO1xuXG5AUGlwZSh7XG5cdG5hbWU6ICdjb21tYXMnLFxufSlcbmV4cG9ydCBjbGFzcyBDb21tYXNQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cblx0LyoqXG5cdCogVHJhbnNmb3JtXG5cdCogQHBhcmFtIHthbnl9IGlucHV0XG5cdCogQHBhcmFtIHtib29sZWFufSByb3VuZFVwXG5cdCogQHJldHVybiB7c3RyaW5nfVxuXHQqL1xuXHRwdWJsaWMgdHJhbnNmb3JtKCBpbnB1dDogYW55LCByb3VuZFVwOiBib29sZWFuID0gZmFsc2UgKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gTnVtYmVyU2VydmljZS5hZGRDb21tYXMoIGlucHV0LCByb3VuZFVwICk7XG5cdH1cblxufVxuIl19