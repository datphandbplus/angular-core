import * as tslib_1 from "tslib";
import { Input, Component, Optional, Inject, InjectionToken } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormControl } from '@angular/forms';
import _ from 'underscore';
import { NumberService } from '../../services/number.service';
export const ERROR_MESSAGE_DEFAULT_OPTIONS = new InjectionToken('defaultOptions');
let ErrorMessageComponent = class ErrorMessageComponent {
    /**
    * @constructor
    * @param {any} defaultOptions
    * @param {NumberService} numberService
    * @param {TranslateService} translateService
    */
    constructor(defaultOptions, numberService, translateService) {
        this.defaultOptions = defaultOptions;
        this.numberService = numberService;
        this.translateService = translateService;
        this.multiple = (this.defaultOptions || {}).mutiple;
        this.control = new FormControl();
    }
    /**
    * Get field errors
    * @return {Array}
    */
    getFieldErrors() {
        if (!this.control)
            return [];
        const errors = this.control.errors;
        const keys = _.keys(errors);
        if (!keys || !keys.length)
            return [];
        return _.map(this.multiple ? keys : [keys[0]], (key) => {
            const error = errors[key];
            key = key.toUpperCase();
            if (!_.contains([
                'REQUIRED', 'MIN', 'MAX',
                'MIN_GREATER_THAN', 'MAX_LESS_THAN', 'MINLENGTH',
                'MAXLENGTH', 'PATTERN', 'MATCHPASSWORD',
                'LENGTH', 'EQUAL',
            ], key)) {
                key = 'INVALID';
            }
            let value;
            switch (key) {
                case 'MIN':
                case 'MIN_GREATER_THAN':
                    value = NumberService.addCommas(error.min);
                    break;
                case 'MAX':
                case 'MAX_LESS_THAN':
                    value = NumberService.addCommas(error.max);
                    break;
                case 'LENGTH':
                case 'MAXLENGTH':
                case 'MINLENGTH':
                    value = NumberService.addCommas(error.requiredLength);
                    break;
                case 'EQUAL':
                    value = NumberService.addCommas(error.requiredValue);
                    break;
                case 'PATTERN':
                    value = error.requiredPattern;
                    break;
            }
            return this.translateService.instant('FORM_ERROR_MESSAGES.' + key, Object.assign({}, error, { value, field: this.label }));
        });
    }
};
ErrorMessageComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [ERROR_MESSAGE_DEFAULT_OPTIONS,] }] },
    { type: NumberService },
    { type: TranslateService }
];
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], ErrorMessageComponent.prototype, "label", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], ErrorMessageComponent.prototype, "multiple", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", FormControl)
], ErrorMessageComponent.prototype, "control", void 0);
ErrorMessageComponent = tslib_1.__decorate([
    Component({
        selector: 'error-message',
        template: "<mat-error class=\"error-message\" *ngFor=\"let error of getFieldErrors()\" [ngClass]=\"defaultOptions?.componentClass\" [innerHTML]=\"error\"></mat-error>"
    }),
    tslib_1.__param(0, Optional()), tslib_1.__param(0, Inject(ERROR_MESSAGE_DEFAULT_OPTIONS)),
    tslib_1.__metadata("design:paramtypes", [Object, NumberService,
        TranslateService])
], ErrorMessageComponent);
export { ErrorMessageComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3ItbWVzc2FnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNvcmUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9lcnJvci1tZXNzYWdlL2Vycm9yLW1lc3NhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ04sS0FBSyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQzFCLE1BQU0sRUFBRSxjQUFjLEVBQ3RCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLENBQUMsTUFBTSxZQUFZLENBQUM7QUFFM0IsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRTlELE1BQU0sQ0FBQyxNQUFNLDZCQUE2QixHQUF3QixJQUFJLGNBQWMsQ0FBTyxnQkFBZ0IsQ0FBRSxDQUFDO0FBTTlHLElBQWEscUJBQXFCLEdBQWxDLE1BQWEscUJBQXFCO0lBTWpDOzs7OztNQUtFO0lBQ0YsWUFDK0QsY0FBbUIsRUFDMUUsYUFBNkIsRUFDN0IsZ0JBQW1DO1FBRm9CLG1CQUFjLEdBQWQsY0FBYyxDQUFLO1FBQzFFLGtCQUFhLEdBQWIsYUFBYSxDQUFnQjtRQUM3QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQW1CO1FBWjNCLGFBQVEsR0FBWSxDQUFFLElBQUksQ0FBQyxjQUFjLElBQUksRUFBRSxDQUFFLENBQUMsT0FBTyxDQUFDO1FBQzFELFlBQU8sR0FBZ0IsSUFBSSxXQUFXLEVBQUUsQ0FBQztJQVl0RCxDQUFDO0lBRUo7OztNQUdFO0lBQ0ssY0FBYztRQUNwQixJQUFLLENBQUMsSUFBSSxDQUFDLE9BQU87WUFBRyxPQUFPLEVBQUUsQ0FBQztRQUUvQixNQUFNLE1BQU0sR0FBUSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztRQUN4QyxNQUFNLElBQUksR0FBa0IsQ0FBQyxDQUFDLElBQUksQ0FBRSxNQUFNLENBQUUsQ0FBQztRQUU3QyxJQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU07WUFBRyxPQUFPLEVBQUUsQ0FBQztRQUV2QyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFFLElBQUksQ0FBRSxDQUFDLENBQUUsQ0FBRSxFQUFFLENBQUUsR0FBVyxFQUFHLEVBQUU7WUFDckUsTUFBTSxLQUFLLEdBQVEsTUFBTSxDQUFFLEdBQUcsQ0FBRSxDQUFDO1lBRWpDLEdBQUcsR0FBRyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7WUFFeEIsSUFBSyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQ2Y7Z0JBQ0MsVUFBVSxFQUFFLEtBQUssRUFBRSxLQUFLO2dCQUN4QixrQkFBa0IsRUFBRSxlQUFlLEVBQUUsV0FBVztnQkFDaEQsV0FBVyxFQUFFLFNBQVMsRUFBRSxlQUFlO2dCQUN2QyxRQUFRLEVBQUUsT0FBTzthQUNqQixFQUNELEdBQUcsQ0FDSCxFQUFHO2dCQUNILEdBQUcsR0FBRyxTQUFTLENBQUM7YUFDaEI7WUFFRCxJQUFJLEtBQVUsQ0FBQztZQUVmLFFBQVMsR0FBRyxFQUFHO2dCQUNkLEtBQUssS0FBSyxDQUFDO2dCQUNYLEtBQUssa0JBQWtCO29CQUN0QixLQUFLLEdBQUcsYUFBYSxDQUFDLFNBQVMsQ0FBRSxLQUFLLENBQUMsR0FBRyxDQUFFLENBQUM7b0JBQzdDLE1BQU07Z0JBQ1AsS0FBSyxLQUFLLENBQUM7Z0JBQ1gsS0FBSyxlQUFlO29CQUNuQixLQUFLLEdBQUcsYUFBYSxDQUFDLFNBQVMsQ0FBRSxLQUFLLENBQUMsR0FBRyxDQUFFLENBQUM7b0JBQzdDLE1BQU07Z0JBQ1AsS0FBSyxRQUFRLENBQUM7Z0JBQ2QsS0FBSyxXQUFXLENBQUM7Z0JBQ2pCLEtBQUssV0FBVztvQkFDZixLQUFLLEdBQUcsYUFBYSxDQUFDLFNBQVMsQ0FBRSxLQUFLLENBQUMsY0FBYyxDQUFFLENBQUM7b0JBQ3hELE1BQU07Z0JBQ1AsS0FBSyxPQUFPO29CQUNYLEtBQUssR0FBRyxhQUFhLENBQUMsU0FBUyxDQUFFLEtBQUssQ0FBQyxhQUFhLENBQUUsQ0FBQztvQkFDdkQsTUFBTTtnQkFDUCxLQUFLLFNBQVM7b0JBQ2IsS0FBSyxHQUFHLEtBQUssQ0FBQyxlQUFlLENBQUM7b0JBQzlCLE1BQU07YUFDUDtZQUVELE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FDbkMsc0JBQXNCLEdBQUcsR0FBRyxvQkFDdkIsS0FBSyxJQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssSUFDcEMsQ0FBQztRQUNILENBQUMsQ0FBRSxDQUFDO0lBQ0wsQ0FBQztDQUVELENBQUE7OzRDQWpFRSxRQUFRLFlBQUksTUFBTSxTQUFFLDZCQUE2QjtZQUMzQixhQUFhO1lBQ1YsZ0JBQWdCOztBQWJsQztJQUFSLEtBQUssRUFBRTs7b0RBQXNCO0FBQ3JCO0lBQVIsS0FBSyxFQUFFOzt1REFBa0U7QUFDakU7SUFBUixLQUFLLEVBQUU7c0NBQWlCLFdBQVc7c0RBQXFCO0FBSjdDLHFCQUFxQjtJQUpqQyxTQUFTLENBQUM7UUFDVixRQUFRLEVBQUcsZUFBZTtRQUMxQix1S0FBbUM7S0FDbkMsQ0FBQztJQWNDLG1CQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsbUJBQUEsTUFBTSxDQUFFLDZCQUE2QixDQUFFLENBQUE7cURBQzdCLGFBQWE7UUFDVixnQkFBZ0I7R0FmL0IscUJBQXFCLENBOEVqQztTQTlFWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRJbnB1dCwgQ29tcG9uZW50LCBPcHRpb25hbCxcblx0SW5qZWN0LCBJbmplY3Rpb25Ub2tlblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IF8gZnJvbSAndW5kZXJzY29yZSc7XG5cbmltcG9ydCB7IE51bWJlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9udW1iZXIuc2VydmljZSc7XG5cbmV4cG9ydCBjb25zdCBFUlJPUl9NRVNTQUdFX0RFRkFVTFRfT1BUSU9OUzogSW5qZWN0aW9uVG9rZW48YW55PiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxhbnk+KCAnZGVmYXVsdE9wdGlvbnMnICk7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3Rvclx0OiAnZXJyb3ItbWVzc2FnZScsXG5cdHRlbXBsYXRlVXJsXHQ6ICcuL2Vycm9yLW1lc3NhZ2UucHVnJyxcbn0pXG5leHBvcnQgY2xhc3MgRXJyb3JNZXNzYWdlQ29tcG9uZW50IHtcblxuXHRASW5wdXQoKSBwdWJsaWMgbGFiZWw6IHN0cmluZztcblx0QElucHV0KCkgcHVibGljIG11bHRpcGxlOiBib29sZWFuID0gKCB0aGlzLmRlZmF1bHRPcHRpb25zIHx8IHt9ICkubXV0aXBsZTtcblx0QElucHV0KCkgcHVibGljIGNvbnRyb2w6IEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKCk7XG5cblx0LyoqXG5cdCogQGNvbnN0cnVjdG9yXG5cdCogQHBhcmFtIHthbnl9IGRlZmF1bHRPcHRpb25zXG5cdCogQHBhcmFtIHtOdW1iZXJTZXJ2aWNlfSBudW1iZXJTZXJ2aWNlXG5cdCogQHBhcmFtIHtUcmFuc2xhdGVTZXJ2aWNlfSB0cmFuc2xhdGVTZXJ2aWNlXG5cdCovXG5cdGNvbnN0cnVjdG9yKFxuXHRcdEBPcHRpb25hbCgpIEBJbmplY3QoIEVSUk9SX01FU1NBR0VfREVGQVVMVF9PUFRJT05TICkgcmVhZG9ubHkgZGVmYXVsdE9wdGlvbnM6IGFueSxcblx0XHRwdWJsaWMgbnVtYmVyU2VydmljZVx0OiBOdW1iZXJTZXJ2aWNlLFxuXHRcdHB1YmxpYyB0cmFuc2xhdGVTZXJ2aWNlXHQ6IFRyYW5zbGF0ZVNlcnZpY2Vcblx0KSB7fVxuXG5cdC8qKlxuXHQqIEdldCBmaWVsZCBlcnJvcnNcblx0KiBAcmV0dXJuIHtBcnJheX1cblx0Ki9cblx0cHVibGljIGdldEZpZWxkRXJyb3JzKCk6IEFycmF5PHN0cmluZz4ge1xuXHRcdGlmICggIXRoaXMuY29udHJvbCApIHJldHVybiBbXTtcblxuXHRcdGNvbnN0IGVycm9yczogYW55ID0gdGhpcy5jb250cm9sLmVycm9ycztcblx0XHRjb25zdCBrZXlzOiBBcnJheTxzdHJpbmc+ID0gXy5rZXlzKCBlcnJvcnMgKTtcblxuXHRcdGlmICggIWtleXMgfHwgIWtleXMubGVuZ3RoICkgcmV0dXJuIFtdO1xuXG5cdFx0cmV0dXJuIF8ubWFwKCB0aGlzLm11bHRpcGxlID8ga2V5cyA6IFsga2V5c1sgMCBdIF0sICgga2V5OiBzdHJpbmcgKSA9PiB7XG5cdFx0XHRjb25zdCBlcnJvcjogYW55ID0gZXJyb3JzWyBrZXkgXTtcblxuXHRcdFx0a2V5ID0ga2V5LnRvVXBwZXJDYXNlKCk7XG5cblx0XHRcdGlmICggIV8uY29udGFpbnMoXG5cdFx0XHRcdFtcblx0XHRcdFx0XHQnUkVRVUlSRUQnLCAnTUlOJywgJ01BWCcsXG5cdFx0XHRcdFx0J01JTl9HUkVBVEVSX1RIQU4nLCAnTUFYX0xFU1NfVEhBTicsICdNSU5MRU5HVEgnLFxuXHRcdFx0XHRcdCdNQVhMRU5HVEgnLCAnUEFUVEVSTicsICdNQVRDSFBBU1NXT1JEJyxcblx0XHRcdFx0XHQnTEVOR1RIJywgJ0VRVUFMJyxcblx0XHRcdFx0XSxcblx0XHRcdFx0a2V5XG5cdFx0XHQpICkge1xuXHRcdFx0XHRrZXkgPSAnSU5WQUxJRCc7XG5cdFx0XHR9XG5cblx0XHRcdGxldCB2YWx1ZTogYW55O1xuXG5cdFx0XHRzd2l0Y2ggKCBrZXkgKSB7XG5cdFx0XHRcdGNhc2UgJ01JTic6XG5cdFx0XHRcdGNhc2UgJ01JTl9HUkVBVEVSX1RIQU4nOlxuXHRcdFx0XHRcdHZhbHVlID0gTnVtYmVyU2VydmljZS5hZGRDb21tYXMoIGVycm9yLm1pbiApO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdNQVgnOlxuXHRcdFx0XHRjYXNlICdNQVhfTEVTU19USEFOJzpcblx0XHRcdFx0XHR2YWx1ZSA9IE51bWJlclNlcnZpY2UuYWRkQ29tbWFzKCBlcnJvci5tYXggKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnTEVOR1RIJzpcblx0XHRcdFx0Y2FzZSAnTUFYTEVOR1RIJzpcblx0XHRcdFx0Y2FzZSAnTUlOTEVOR1RIJzpcblx0XHRcdFx0XHR2YWx1ZSA9IE51bWJlclNlcnZpY2UuYWRkQ29tbWFzKCBlcnJvci5yZXF1aXJlZExlbmd0aCApO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdFUVVBTCc6XG5cdFx0XHRcdFx0dmFsdWUgPSBOdW1iZXJTZXJ2aWNlLmFkZENvbW1hcyggZXJyb3IucmVxdWlyZWRWYWx1ZSApO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdQQVRURVJOJzpcblx0XHRcdFx0XHR2YWx1ZSA9IGVycm9yLnJlcXVpcmVkUGF0dGVybjtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRoaXMudHJhbnNsYXRlU2VydmljZS5pbnN0YW50KFxuXHRcdFx0XHQnRk9STV9FUlJPUl9NRVNTQUdFUy4nICsga2V5LFxuXHRcdFx0XHR7IC4uLmVycm9yLCB2YWx1ZSwgZmllbGQ6IHRoaXMubGFiZWwgfVxuXHRcdFx0KTtcblx0XHR9ICk7XG5cdH1cblxufVxuIl19