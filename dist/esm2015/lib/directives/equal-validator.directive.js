import * as tslib_1 from "tslib";
var EqualValidatorDirective_1;
import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import _ from 'underscore';
// @dynamic
let EqualValidatorDirective = EqualValidatorDirective_1 = class EqualValidatorDirective {
    /**
    * Validator
    * @static
    * @param {string} validateEqual
    * @param {boolean} reverse
    * @param {any} options
    * @return {any}
    */
    static validator(validateEqual, reverse = false, options = {}) {
        return (c) => {
            // Self value
            const v = c.value;
            // Control value
            const e = c.root.get(validateEqual);
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
    }
    /**
    * Match password
    * @static
    * @param {AbstractControl} AC
    * @return {any}
    */
    static MatchPassword(AC) {
        const newPassword = AC.get('new_password').value;
        const confirmNewPassword = AC.get('confirm_new_password').value;
        if (newPassword !== confirmNewPassword) {
            return AC.get('confirm_new_password').setErrors({ MatchPassword: true });
        }
        return null;
    }
};
EqualValidatorDirective = EqualValidatorDirective_1 = tslib_1.__decorate([
    Directive({
        selector: '[validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
        providers: [
            {
                provide: NG_VALIDATORS,
                useExisting: forwardRef(() => EqualValidatorDirective_1),
                multi: true,
            },
        ],
    })
], EqualValidatorDirective);
export { EqualValidatorDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXF1YWwtdmFsaWRhdG9yLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItY29yZS8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL2VxdWFsLXZhbGlkYXRvci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RCxPQUFPLEVBQWUsYUFBYSxFQUFtQixNQUFNLGdCQUFnQixDQUFDO0FBQzdFLE9BQU8sQ0FBQyxNQUFNLFlBQVksQ0FBQztBQUUzQixXQUFXO0FBV1gsSUFBYSx1QkFBdUIsK0JBQXBDLE1BQWEsdUJBQXVCO0lBRW5DOzs7Ozs7O01BT0U7SUFDSyxNQUFNLENBQUMsU0FBUyxDQUFFLGFBQXFCLEVBQUUsVUFBbUIsS0FBSyxFQUFFLFVBQWUsRUFBRTtRQUMxRixPQUFPLENBQUUsQ0FBYyxFQUE2QixFQUFFO1lBQ3JELGFBQWE7WUFDYixNQUFNLENBQUMsR0FBUSxDQUFDLENBQUMsS0FBSyxDQUFDO1lBRXZCLGdCQUFnQjtZQUNoQixNQUFNLENBQUMsR0FBb0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUUsYUFBYSxDQUFFLENBQUM7WUFFdkQsa0JBQWtCO1lBQ2xCLElBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsT0FBTyxFQUFHO2dCQUNyQyxPQUFPO29CQUNOLGFBQWEsRUFBRSxPQUFPO2lCQUN0QixDQUFDO2FBQ0Y7WUFFRCwwQkFBMEI7WUFDMUIsSUFBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLElBQUksT0FBTyxJQUFJLENBQUMsQ0FBQyxNQUFNLEtBQUssSUFBSSxFQUFHO2dCQUN6RCxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDO2dCQUU5QixJQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBRSxDQUFDLENBQUMsTUFBTSxDQUFFLENBQUMsTUFBTSxFQUFHO29CQUNqQyxDQUFDLENBQUMsU0FBUyxDQUFFLElBQUksQ0FBRSxDQUFDO2lCQUNwQjthQUNEO1lBRUQsOEJBQThCO1lBQzlCLElBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxJQUFJLE9BQU8sRUFBRztnQkFDcEMsQ0FBQyxDQUFDLFNBQVMsQ0FBRSxFQUFFLGFBQWEsRUFBRSxPQUFPLEVBQUUsQ0FBRSxDQUFDO2FBQzFDO1lBRUQsT0FBTyxJQUFJLENBQUM7UUFDYixDQUFDLENBQUM7SUFDSCxDQUFDO0lBRUQ7Ozs7O01BS0U7SUFDSyxNQUFNLENBQUMsYUFBYSxDQUFFLEVBQW1CO1FBQy9DLE1BQU0sV0FBVyxHQUFRLEVBQUUsQ0FBQyxHQUFHLENBQUUsY0FBYyxDQUFFLENBQUMsS0FBSyxDQUFDO1FBQ3hELE1BQU0sa0JBQWtCLEdBQVEsRUFBRSxDQUFDLEdBQUcsQ0FBRSxzQkFBc0IsQ0FBRSxDQUFDLEtBQUssQ0FBQztRQUV2RSxJQUFLLFdBQVcsS0FBSyxrQkFBa0IsRUFBRztZQUN6QyxPQUFPLEVBQUUsQ0FBQyxHQUFHLENBQUUsc0JBQXNCLENBQUUsQ0FBQyxTQUFTLENBQUUsRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLENBQUUsQ0FBQztTQUM3RTtRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQztDQUVELENBQUE7QUE1RFksdUJBQXVCO0lBVm5DLFNBQVMsQ0FBQztRQUNWLFFBQVEsRUFBRSx3RkFBd0Y7UUFDbEcsU0FBUyxFQUFFO1lBQ1Y7Z0JBQ0MsT0FBTyxFQUFJLGFBQWE7Z0JBQ3hCLFdBQVcsRUFBRyxVQUFVLENBQUUsR0FBRyxFQUFFLENBQUMseUJBQXVCLENBQUU7Z0JBQ3pELEtBQUssRUFBSSxJQUFJO2FBQ2I7U0FDRDtLQUNELENBQUM7R0FDVyx1QkFBdUIsQ0E0RG5DO1NBNURZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIE5HX1ZBTElEQVRPUlMsIEFic3RyYWN0Q29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCBfIGZyb20gJ3VuZGVyc2NvcmUnO1xuXG4vLyBAZHluYW1pY1xuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnW3ZhbGlkYXRlRXF1YWxdW2Zvcm1Db250cm9sTmFtZV0sW3ZhbGlkYXRlRXF1YWxdW2Zvcm1Db250cm9sXSxbdmFsaWRhdGVFcXVhbF1bbmdNb2RlbF0nLFxuXHRwcm92aWRlcnM6IFtcblx0XHR7XG5cdFx0XHRwcm92aWRlXHRcdDogTkdfVkFMSURBVE9SUyxcblx0XHRcdHVzZUV4aXN0aW5nXHQ6IGZvcndhcmRSZWYoICgpID0+IEVxdWFsVmFsaWRhdG9yRGlyZWN0aXZlICksXG5cdFx0XHRtdWx0aVx0XHQ6IHRydWUsXG5cdFx0fSxcblx0XSxcbn0pXG5leHBvcnQgY2xhc3MgRXF1YWxWYWxpZGF0b3JEaXJlY3RpdmUge1xuXG5cdC8qKlxuXHQqIFZhbGlkYXRvclxuXHQqIEBzdGF0aWNcblx0KiBAcGFyYW0ge3N0cmluZ30gdmFsaWRhdGVFcXVhbFxuXHQqIEBwYXJhbSB7Ym9vbGVhbn0gcmV2ZXJzZVxuXHQqIEBwYXJhbSB7YW55fSBvcHRpb25zXG5cdCogQHJldHVybiB7YW55fVxuXHQqL1xuXHRwdWJsaWMgc3RhdGljIHZhbGlkYXRvciggdmFsaWRhdGVFcXVhbDogc3RyaW5nLCByZXZlcnNlOiBib29sZWFuID0gZmFsc2UsIG9wdGlvbnM6IGFueSA9IHt9ICkge1xuXHRcdHJldHVybiAoIGM6IEZvcm1Db250cm9sICk6IHsgWyBrZXk6IHN0cmluZyBdOiBhbnkgfSA9PiB7XG5cdFx0XHQvLyBTZWxmIHZhbHVlXG5cdFx0XHRjb25zdCB2OiBhbnkgPSBjLnZhbHVlO1xuXG5cdFx0XHQvLyBDb250cm9sIHZhbHVlXG5cdFx0XHRjb25zdCBlOiBBYnN0cmFjdENvbnRyb2wgPSBjLnJvb3QuZ2V0KCB2YWxpZGF0ZUVxdWFsICk7XG5cblx0XHRcdC8vIFZhbHVlIG5vdCBlcXVhbFxuXHRcdFx0aWYgKCBlICYmIHYgIT09IGUudmFsdWUgJiYgIXJldmVyc2UgKSB7XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0dmFsaWRhdGVFcXVhbDogb3B0aW9ucyxcblx0XHRcdFx0fTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gVmFsdWUgZXF1YWwgYW5kIHJldmVyc2Vcblx0XHRcdGlmICggZSAmJiB2ID09PSBlLnZhbHVlICYmIHJldmVyc2UgJiYgZS5lcnJvcnMgIT09IG51bGwgKSB7XG5cdFx0XHRcdGRlbGV0ZSBlLmVycm9ycy52YWxpZGF0ZUVxdWFsO1xuXG5cdFx0XHRcdGlmICggIV8ua2V5cyggZS5lcnJvcnMgKS5sZW5ndGggKSB7XG5cdFx0XHRcdFx0ZS5zZXRFcnJvcnMoIG51bGwgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBWYWx1ZSBub3QgZXF1YWwgYW5kIHJldmVyc2Vcblx0XHRcdGlmICggZSAmJiB2ICE9PSBlLnZhbHVlICYmIHJldmVyc2UgKSB7XG5cdFx0XHRcdGMuc2V0RXJyb3JzKCB7IHZhbGlkYXRlRXF1YWw6IG9wdGlvbnMgfSApO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9O1xuXHR9XG5cblx0LyoqXG5cdCogTWF0Y2ggcGFzc3dvcmRcblx0KiBAc3RhdGljXG5cdCogQHBhcmFtIHtBYnN0cmFjdENvbnRyb2x9IEFDXG5cdCogQHJldHVybiB7YW55fVxuXHQqL1xuXHRwdWJsaWMgc3RhdGljIE1hdGNoUGFzc3dvcmQoIEFDOiBBYnN0cmFjdENvbnRyb2wgKSB7XG5cdFx0Y29uc3QgbmV3UGFzc3dvcmQ6IGFueSA9IEFDLmdldCggJ25ld19wYXNzd29yZCcgKS52YWx1ZTtcblx0XHRjb25zdCBjb25maXJtTmV3UGFzc3dvcmQ6IGFueSA9IEFDLmdldCggJ2NvbmZpcm1fbmV3X3Bhc3N3b3JkJyApLnZhbHVlO1xuXG5cdFx0aWYgKCBuZXdQYXNzd29yZCAhPT0gY29uZmlybU5ld1Bhc3N3b3JkICkge1xuXHRcdFx0cmV0dXJuIEFDLmdldCggJ2NvbmZpcm1fbmV3X3Bhc3N3b3JkJyApLnNldEVycm9ycyggeyBNYXRjaFBhc3N3b3JkOiB0cnVlIH0gKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG59XG4iXX0=