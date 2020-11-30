import * as tslib_1 from "tslib";
import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import _ from 'underscore';
// @dynamic
var EqualValidatorDirective = /** @class */ (function () {
    function EqualValidatorDirective() {
    }
    EqualValidatorDirective_1 = EqualValidatorDirective;
    /**
    * Validator
    * @static
    * @param {string} validateEqual
    * @param {boolean} reverse
    * @param {any} options
    * @return {any}
    */
    EqualValidatorDirective.validator = function (validateEqual, reverse, options) {
        if (reverse === void 0) { reverse = false; }
        if (options === void 0) { options = {}; }
        return function (c) {
            // Self value
            var v = c.value;
            // Control value
            var e = c.root.get(validateEqual);
            // Value not equal
            if (e && v !== e.value && !reverse) {
                return {
                    validateEqual: options,
                };
            }
            // Value equal and reverse
            if (e && v === e.value && reverse && e.errors !== null) {
                delete e.errors.validateEqual;
                if (!_.keys(e.errors).length) {
                    e.setErrors(null);
                }
            }
            // Value not equal and reverse
            if (e && v !== e.value && reverse) {
                c.setErrors({ validateEqual: options });
            }
            return null;
        };
    };
    /**
    * Match password
    * @static
    * @param {AbstractControl} AC
    * @return {any}
    */
    EqualValidatorDirective.MatchPassword = function (AC) {
        var newPassword = AC.get('new_password').value;
        var confirmNewPassword = AC.get('confirm_new_password').value;
        if (newPassword !== confirmNewPassword) {
            return AC.get('confirm_new_password').setErrors({ MatchPassword: true });
        }
        return null;
    };
    var EqualValidatorDirective_1;
    EqualValidatorDirective = EqualValidatorDirective_1 = tslib_1.__decorate([
        Directive({
            selector: '[validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
            providers: [
                {
                    provide: NG_VALIDATORS,
                    useExisting: forwardRef(function () { return EqualValidatorDirective_1; }),
                    multi: true,
                },
            ],
        })
    ], EqualValidatorDirective);
    return EqualValidatorDirective;
}());
export { EqualValidatorDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXF1YWwtdmFsaWRhdG9yLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItY29yZS8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL2VxdWFsLXZhbGlkYXRvci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RELE9BQU8sRUFBZSxhQUFhLEVBQW1CLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0UsT0FBTyxDQUFDLE1BQU0sWUFBWSxDQUFDO0FBRTNCLFdBQVc7QUFXWDtJQUFBO0lBNERBLENBQUM7Z0NBNURZLHVCQUF1QjtJQUVuQzs7Ozs7OztNQU9FO0lBQ1ksaUNBQVMsR0FBdkIsVUFBeUIsYUFBcUIsRUFBRSxPQUF3QixFQUFFLE9BQWlCO1FBQTNDLHdCQUFBLEVBQUEsZUFBd0I7UUFBRSx3QkFBQSxFQUFBLFlBQWlCO1FBQzFGLE9BQU8sVUFBRSxDQUFjO1lBQ3RCLGFBQWE7WUFDYixJQUFNLENBQUMsR0FBUSxDQUFDLENBQUMsS0FBSyxDQUFDO1lBRXZCLGdCQUFnQjtZQUNoQixJQUFNLENBQUMsR0FBb0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUUsYUFBYSxDQUFFLENBQUM7WUFFdkQsa0JBQWtCO1lBQ2xCLElBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsT0FBTyxFQUFHO2dCQUNyQyxPQUFPO29CQUNOLGFBQWEsRUFBRSxPQUFPO2lCQUN0QixDQUFDO2FBQ0Y7WUFFRCwwQkFBMEI7WUFDMUIsSUFBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLElBQUksT0FBTyxJQUFJLENBQUMsQ0FBQyxNQUFNLEtBQUssSUFBSSxFQUFHO2dCQUN6RCxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDO2dCQUU5QixJQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBRSxDQUFDLENBQUMsTUFBTSxDQUFFLENBQUMsTUFBTSxFQUFHO29CQUNqQyxDQUFDLENBQUMsU0FBUyxDQUFFLElBQUksQ0FBRSxDQUFDO2lCQUNwQjthQUNEO1lBRUQsOEJBQThCO1lBQzlCLElBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxJQUFJLE9BQU8sRUFBRztnQkFDcEMsQ0FBQyxDQUFDLFNBQVMsQ0FBRSxFQUFFLGFBQWEsRUFBRSxPQUFPLEVBQUUsQ0FBRSxDQUFDO2FBQzFDO1lBRUQsT0FBTyxJQUFJLENBQUM7UUFDYixDQUFDLENBQUM7SUFDSCxDQUFDO0lBRUQ7Ozs7O01BS0U7SUFDWSxxQ0FBYSxHQUEzQixVQUE2QixFQUFtQjtRQUMvQyxJQUFNLFdBQVcsR0FBUSxFQUFFLENBQUMsR0FBRyxDQUFFLGNBQWMsQ0FBRSxDQUFDLEtBQUssQ0FBQztRQUN4RCxJQUFNLGtCQUFrQixHQUFRLEVBQUUsQ0FBQyxHQUFHLENBQUUsc0JBQXNCLENBQUUsQ0FBQyxLQUFLLENBQUM7UUFFdkUsSUFBSyxXQUFXLEtBQUssa0JBQWtCLEVBQUc7WUFDekMsT0FBTyxFQUFFLENBQUMsR0FBRyxDQUFFLHNCQUFzQixDQUFFLENBQUMsU0FBUyxDQUFFLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxDQUFFLENBQUM7U0FDN0U7UUFFRCxPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7O0lBMURXLHVCQUF1QjtRQVZuQyxTQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsd0ZBQXdGO1lBQ2xHLFNBQVMsRUFBRTtnQkFDVjtvQkFDQyxPQUFPLEVBQUksYUFBYTtvQkFDeEIsV0FBVyxFQUFHLFVBQVUsQ0FBRSxjQUFNLE9BQUEseUJBQXVCLEVBQXZCLENBQXVCLENBQUU7b0JBQ3pELEtBQUssRUFBSSxJQUFJO2lCQUNiO2FBQ0Q7U0FDRCxDQUFDO09BQ1csdUJBQXVCLENBNERuQztJQUFELDhCQUFDO0NBQUEsQUE1REQsSUE0REM7U0E1RFksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgTkdfVkFMSURBVE9SUywgQWJzdHJhY3RDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IF8gZnJvbSAndW5kZXJzY29yZSc7XG5cbi8vIEBkeW5hbWljXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdbdmFsaWRhdGVFcXVhbF1bZm9ybUNvbnRyb2xOYW1lXSxbdmFsaWRhdGVFcXVhbF1bZm9ybUNvbnRyb2xdLFt2YWxpZGF0ZUVxdWFsXVtuZ01vZGVsXScsXG5cdHByb3ZpZGVyczogW1xuXHRcdHtcblx0XHRcdHByb3ZpZGVcdFx0OiBOR19WQUxJREFUT1JTLFxuXHRcdFx0dXNlRXhpc3RpbmdcdDogZm9yd2FyZFJlZiggKCkgPT4gRXF1YWxWYWxpZGF0b3JEaXJlY3RpdmUgKSxcblx0XHRcdG11bHRpXHRcdDogdHJ1ZSxcblx0XHR9LFxuXHRdLFxufSlcbmV4cG9ydCBjbGFzcyBFcXVhbFZhbGlkYXRvckRpcmVjdGl2ZSB7XG5cblx0LyoqXG5cdCogVmFsaWRhdG9yXG5cdCogQHN0YXRpY1xuXHQqIEBwYXJhbSB7c3RyaW5nfSB2YWxpZGF0ZUVxdWFsXG5cdCogQHBhcmFtIHtib29sZWFufSByZXZlcnNlXG5cdCogQHBhcmFtIHthbnl9IG9wdGlvbnNcblx0KiBAcmV0dXJuIHthbnl9XG5cdCovXG5cdHB1YmxpYyBzdGF0aWMgdmFsaWRhdG9yKCB2YWxpZGF0ZUVxdWFsOiBzdHJpbmcsIHJldmVyc2U6IGJvb2xlYW4gPSBmYWxzZSwgb3B0aW9uczogYW55ID0ge30gKSB7XG5cdFx0cmV0dXJuICggYzogRm9ybUNvbnRyb2wgKTogeyBbIGtleTogc3RyaW5nIF06IGFueSB9ID0+IHtcblx0XHRcdC8vIFNlbGYgdmFsdWVcblx0XHRcdGNvbnN0IHY6IGFueSA9IGMudmFsdWU7XG5cblx0XHRcdC8vIENvbnRyb2wgdmFsdWVcblx0XHRcdGNvbnN0IGU6IEFic3RyYWN0Q29udHJvbCA9IGMucm9vdC5nZXQoIHZhbGlkYXRlRXF1YWwgKTtcblxuXHRcdFx0Ly8gVmFsdWUgbm90IGVxdWFsXG5cdFx0XHRpZiAoIGUgJiYgdiAhPT0gZS52YWx1ZSAmJiAhcmV2ZXJzZSApIHtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHR2YWxpZGF0ZUVxdWFsOiBvcHRpb25zLFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBWYWx1ZSBlcXVhbCBhbmQgcmV2ZXJzZVxuXHRcdFx0aWYgKCBlICYmIHYgPT09IGUudmFsdWUgJiYgcmV2ZXJzZSAmJiBlLmVycm9ycyAhPT0gbnVsbCApIHtcblx0XHRcdFx0ZGVsZXRlIGUuZXJyb3JzLnZhbGlkYXRlRXF1YWw7XG5cblx0XHRcdFx0aWYgKCAhXy5rZXlzKCBlLmVycm9ycyApLmxlbmd0aCApIHtcblx0XHRcdFx0XHRlLnNldEVycm9ycyggbnVsbCApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIFZhbHVlIG5vdCBlcXVhbCBhbmQgcmV2ZXJzZVxuXHRcdFx0aWYgKCBlICYmIHYgIT09IGUudmFsdWUgJiYgcmV2ZXJzZSApIHtcblx0XHRcdFx0Yy5zZXRFcnJvcnMoIHsgdmFsaWRhdGVFcXVhbDogb3B0aW9ucyB9ICk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH07XG5cdH1cblxuXHQvKipcblx0KiBNYXRjaCBwYXNzd29yZFxuXHQqIEBzdGF0aWNcblx0KiBAcGFyYW0ge0Fic3RyYWN0Q29udHJvbH0gQUNcblx0KiBAcmV0dXJuIHthbnl9XG5cdCovXG5cdHB1YmxpYyBzdGF0aWMgTWF0Y2hQYXNzd29yZCggQUM6IEFic3RyYWN0Q29udHJvbCApIHtcblx0XHRjb25zdCBuZXdQYXNzd29yZDogYW55ID0gQUMuZ2V0KCAnbmV3X3Bhc3N3b3JkJyApLnZhbHVlO1xuXHRcdGNvbnN0IGNvbmZpcm1OZXdQYXNzd29yZDogYW55ID0gQUMuZ2V0KCAnY29uZmlybV9uZXdfcGFzc3dvcmQnICkudmFsdWU7XG5cblx0XHRpZiAoIG5ld1Bhc3N3b3JkICE9PSBjb25maXJtTmV3UGFzc3dvcmQgKSB7XG5cdFx0XHRyZXR1cm4gQUMuZ2V0KCAnY29uZmlybV9uZXdfcGFzc3dvcmQnICkuc2V0RXJyb3JzKCB7IE1hdGNoUGFzc3dvcmQ6IHRydWUgfSApO1xuXHRcdH1cblxuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cbn1cbiJdfQ==