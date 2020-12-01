import * as tslib_1 from "tslib";
import { Input, Component, Optional, Inject, InjectionToken } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormControl } from '@angular/forms';
import _ from 'underscore';
import { NumberService } from '../../services/number.service';
export var ERROR_MESSAGE_DEFAULT_OPTIONS = new InjectionToken('defaultOptions');
var ErrorMessageComponent = /** @class */ (function () {
    /**
    * @constructor
    * @param {any} defaultOptions
    * @param {NumberService} numberService
    * @param {TranslateService} translateService
    */
    function ErrorMessageComponent(defaultOptions, numberService, translateService) {
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
    ErrorMessageComponent.prototype.getFieldErrors = function () {
        var _this = this;
        if (!this.control)
            return [];
        var errors = this.control.errors;
        var keys = _.keys(errors);
        if (!keys || !keys.length)
            return [];
        return _.map(this.multiple ? keys : [keys[0]], function (key) {
            var error = errors[key];
            key = key.toUpperCase();
            if (!_.contains([
                'REQUIRED', 'MIN', 'MAX',
                'MIN_GREATER_THAN', 'MAX_LESS_THAN', 'MINLENGTH',
                'MAXLENGTH', 'PATTERN', 'MATCHPASSWORD',
                'LENGTH', 'EQUAL',
            ], key)) {
                key = 'INVALID';
            }
            var value;
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
            return _this.translateService.instant('FORM_ERROR_MESSAGES.' + key, tslib_1.__assign({}, error, { value: value, field: _this.label }));
        });
    };
    ErrorMessageComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [ERROR_MESSAGE_DEFAULT_OPTIONS,] }] },
        { type: NumberService },
        { type: TranslateService }
    ]; };
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
    return ErrorMessageComponent;
}());
export { ErrorMessageComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3ItbWVzc2FnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNvcmUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9lcnJvci1tZXNzYWdlL2Vycm9yLW1lc3NhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ04sS0FBSyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQzFCLE1BQU0sRUFBRSxjQUFjLEVBQ3RCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLENBQUMsTUFBTSxZQUFZLENBQUM7QUFFM0IsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRTlELE1BQU0sQ0FBQyxJQUFNLDZCQUE2QixHQUF3QixJQUFJLGNBQWMsQ0FBTyxnQkFBZ0IsQ0FBRSxDQUFDO0FBTTlHO0lBTUM7Ozs7O01BS0U7SUFDRiwrQkFDK0QsY0FBbUIsRUFDMUUsYUFBNkIsRUFDN0IsZ0JBQW1DO1FBRm9CLG1CQUFjLEdBQWQsY0FBYyxDQUFLO1FBQzFFLGtCQUFhLEdBQWIsYUFBYSxDQUFnQjtRQUM3QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQW1CO1FBWjNCLGFBQVEsR0FBWSxDQUFFLElBQUksQ0FBQyxjQUFjLElBQUksRUFBRSxDQUFFLENBQUMsT0FBTyxDQUFDO1FBQzFELFlBQU8sR0FBZ0IsSUFBSSxXQUFXLEVBQUUsQ0FBQztJQVl0RCxDQUFDO0lBRUo7OztNQUdFO0lBQ0ssOENBQWMsR0FBckI7UUFBQSxpQkFzREM7UUFyREEsSUFBSyxDQUFDLElBQUksQ0FBQyxPQUFPO1lBQUcsT0FBTyxFQUFFLENBQUM7UUFFL0IsSUFBTSxNQUFNLEdBQVEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7UUFDeEMsSUFBTSxJQUFJLEdBQWtCLENBQUMsQ0FBQyxJQUFJLENBQUUsTUFBTSxDQUFFLENBQUM7UUFFN0MsSUFBSyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNO1lBQUcsT0FBTyxFQUFFLENBQUM7UUFFdkMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBRSxJQUFJLENBQUUsQ0FBQyxDQUFFLENBQUUsRUFBRSxVQUFFLEdBQVc7WUFDaEUsSUFBTSxLQUFLLEdBQVEsTUFBTSxDQUFFLEdBQUcsQ0FBRSxDQUFDO1lBRWpDLEdBQUcsR0FBRyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7WUFFeEIsSUFBSyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQ2Y7Z0JBQ0MsVUFBVSxFQUFFLEtBQUssRUFBRSxLQUFLO2dCQUN4QixrQkFBa0IsRUFBRSxlQUFlLEVBQUUsV0FBVztnQkFDaEQsV0FBVyxFQUFFLFNBQVMsRUFBRSxlQUFlO2dCQUN2QyxRQUFRLEVBQUUsT0FBTzthQUNqQixFQUNELEdBQUcsQ0FDSCxFQUFHO2dCQUNILEdBQUcsR0FBRyxTQUFTLENBQUM7YUFDaEI7WUFFRCxJQUFJLEtBQVUsQ0FBQztZQUVmLFFBQVMsR0FBRyxFQUFHO2dCQUNkLEtBQUssS0FBSyxDQUFDO2dCQUNYLEtBQUssa0JBQWtCO29CQUN0QixLQUFLLEdBQUcsYUFBYSxDQUFDLFNBQVMsQ0FBRSxLQUFLLENBQUMsR0FBRyxDQUFFLENBQUM7b0JBQzdDLE1BQU07Z0JBQ1AsS0FBSyxLQUFLLENBQUM7Z0JBQ1gsS0FBSyxlQUFlO29CQUNuQixLQUFLLEdBQUcsYUFBYSxDQUFDLFNBQVMsQ0FBRSxLQUFLLENBQUMsR0FBRyxDQUFFLENBQUM7b0JBQzdDLE1BQU07Z0JBQ1AsS0FBSyxRQUFRLENBQUM7Z0JBQ2QsS0FBSyxXQUFXLENBQUM7Z0JBQ2pCLEtBQUssV0FBVztvQkFDZixLQUFLLEdBQUcsYUFBYSxDQUFDLFNBQVMsQ0FBRSxLQUFLLENBQUMsY0FBYyxDQUFFLENBQUM7b0JBQ3hELE1BQU07Z0JBQ1AsS0FBSyxPQUFPO29CQUNYLEtBQUssR0FBRyxhQUFhLENBQUMsU0FBUyxDQUFFLEtBQUssQ0FBQyxhQUFhLENBQUUsQ0FBQztvQkFDdkQsTUFBTTtnQkFDUCxLQUFLLFNBQVM7b0JBQ2IsS0FBSyxHQUFHLEtBQUssQ0FBQyxlQUFlLENBQUM7b0JBQzlCLE1BQU07YUFDUDtZQUVELE9BQU8sS0FBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FDbkMsc0JBQXNCLEdBQUcsR0FBRyx1QkFDdkIsS0FBSyxJQUFFLEtBQUssT0FBQSxFQUFFLEtBQUssRUFBRSxLQUFJLENBQUMsS0FBSyxJQUNwQyxDQUFDO1FBQ0gsQ0FBQyxDQUFFLENBQUM7SUFDTCxDQUFDOztnREEvREMsUUFBUSxZQUFJLE1BQU0sU0FBRSw2QkFBNkI7Z0JBQzNCLGFBQWE7Z0JBQ1YsZ0JBQWdCOztJQWJsQztRQUFSLEtBQUssRUFBRTs7d0RBQXNCO0lBQ3JCO1FBQVIsS0FBSyxFQUFFOzsyREFBa0U7SUFDakU7UUFBUixLQUFLLEVBQUU7MENBQWlCLFdBQVc7MERBQXFCO0lBSjdDLHFCQUFxQjtRQUpqQyxTQUFTLENBQUM7WUFDVixRQUFRLEVBQUcsZUFBZTtZQUMxQix1S0FBbUM7U0FDbkMsQ0FBQztRQWNDLG1CQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsbUJBQUEsTUFBTSxDQUFFLDZCQUE2QixDQUFFLENBQUE7eURBQzdCLGFBQWE7WUFDVixnQkFBZ0I7T0FmL0IscUJBQXFCLENBOEVqQztJQUFELDRCQUFDO0NBQUEsQUE5RUQsSUE4RUM7U0E5RVkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0SW5wdXQsIENvbXBvbmVudCwgT3B0aW9uYWwsXG5cdEluamVjdCwgSW5qZWN0aW9uVG9rZW5cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCBfIGZyb20gJ3VuZGVyc2NvcmUnO1xuXG5pbXBvcnQgeyBOdW1iZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbnVtYmVyLnNlcnZpY2UnO1xuXG5leHBvcnQgY29uc3QgRVJST1JfTUVTU0FHRV9ERUZBVUxUX09QVElPTlM6IEluamVjdGlvblRva2VuPGFueT4gPSBuZXcgSW5qZWN0aW9uVG9rZW48YW55PiggJ2RlZmF1bHRPcHRpb25zJyApO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3JcdDogJ2Vycm9yLW1lc3NhZ2UnLFxuXHR0ZW1wbGF0ZVVybFx0OiAnLi9lcnJvci1tZXNzYWdlLnB1ZycsXG59KVxuZXhwb3J0IGNsYXNzIEVycm9yTWVzc2FnZUNvbXBvbmVudCB7XG5cblx0QElucHV0KCkgcHVibGljIGxhYmVsOiBzdHJpbmc7XG5cdEBJbnB1dCgpIHB1YmxpYyBtdWx0aXBsZTogYm9vbGVhbiA9ICggdGhpcy5kZWZhdWx0T3B0aW9ucyB8fCB7fSApLm11dGlwbGU7XG5cdEBJbnB1dCgpIHB1YmxpYyBjb250cm9sOiBGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgpO1xuXG5cdC8qKlxuXHQqIEBjb25zdHJ1Y3RvclxuXHQqIEBwYXJhbSB7YW55fSBkZWZhdWx0T3B0aW9uc1xuXHQqIEBwYXJhbSB7TnVtYmVyU2VydmljZX0gbnVtYmVyU2VydmljZVxuXHQqIEBwYXJhbSB7VHJhbnNsYXRlU2VydmljZX0gdHJhbnNsYXRlU2VydmljZVxuXHQqL1xuXHRjb25zdHJ1Y3Rvcihcblx0XHRAT3B0aW9uYWwoKSBASW5qZWN0KCBFUlJPUl9NRVNTQUdFX0RFRkFVTFRfT1BUSU9OUyApIHJlYWRvbmx5IGRlZmF1bHRPcHRpb25zOiBhbnksXG5cdFx0cHVibGljIG51bWJlclNlcnZpY2VcdDogTnVtYmVyU2VydmljZSxcblx0XHRwdWJsaWMgdHJhbnNsYXRlU2VydmljZVx0OiBUcmFuc2xhdGVTZXJ2aWNlXG5cdCkge31cblxuXHQvKipcblx0KiBHZXQgZmllbGQgZXJyb3JzXG5cdCogQHJldHVybiB7QXJyYXl9XG5cdCovXG5cdHB1YmxpYyBnZXRGaWVsZEVycm9ycygpOiBBcnJheTxzdHJpbmc+IHtcblx0XHRpZiAoICF0aGlzLmNvbnRyb2wgKSByZXR1cm4gW107XG5cblx0XHRjb25zdCBlcnJvcnM6IGFueSA9IHRoaXMuY29udHJvbC5lcnJvcnM7XG5cdFx0Y29uc3Qga2V5czogQXJyYXk8c3RyaW5nPiA9IF8ua2V5cyggZXJyb3JzICk7XG5cblx0XHRpZiAoICFrZXlzIHx8ICFrZXlzLmxlbmd0aCApIHJldHVybiBbXTtcblxuXHRcdHJldHVybiBfLm1hcCggdGhpcy5tdWx0aXBsZSA/IGtleXMgOiBbIGtleXNbIDAgXSBdLCAoIGtleTogc3RyaW5nICkgPT4ge1xuXHRcdFx0Y29uc3QgZXJyb3I6IGFueSA9IGVycm9yc1sga2V5IF07XG5cblx0XHRcdGtleSA9IGtleS50b1VwcGVyQ2FzZSgpO1xuXG5cdFx0XHRpZiAoICFfLmNvbnRhaW5zKFxuXHRcdFx0XHRbXG5cdFx0XHRcdFx0J1JFUVVJUkVEJywgJ01JTicsICdNQVgnLFxuXHRcdFx0XHRcdCdNSU5fR1JFQVRFUl9USEFOJywgJ01BWF9MRVNTX1RIQU4nLCAnTUlOTEVOR1RIJyxcblx0XHRcdFx0XHQnTUFYTEVOR1RIJywgJ1BBVFRFUk4nLCAnTUFUQ0hQQVNTV09SRCcsXG5cdFx0XHRcdFx0J0xFTkdUSCcsICdFUVVBTCcsXG5cdFx0XHRcdF0sXG5cdFx0XHRcdGtleVxuXHRcdFx0KSApIHtcblx0XHRcdFx0a2V5ID0gJ0lOVkFMSUQnO1xuXHRcdFx0fVxuXG5cdFx0XHRsZXQgdmFsdWU6IGFueTtcblxuXHRcdFx0c3dpdGNoICgga2V5ICkge1xuXHRcdFx0XHRjYXNlICdNSU4nOlxuXHRcdFx0XHRjYXNlICdNSU5fR1JFQVRFUl9USEFOJzpcblx0XHRcdFx0XHR2YWx1ZSA9IE51bWJlclNlcnZpY2UuYWRkQ29tbWFzKCBlcnJvci5taW4gKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnTUFYJzpcblx0XHRcdFx0Y2FzZSAnTUFYX0xFU1NfVEhBTic6XG5cdFx0XHRcdFx0dmFsdWUgPSBOdW1iZXJTZXJ2aWNlLmFkZENvbW1hcyggZXJyb3IubWF4ICk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ0xFTkdUSCc6XG5cdFx0XHRcdGNhc2UgJ01BWExFTkdUSCc6XG5cdFx0XHRcdGNhc2UgJ01JTkxFTkdUSCc6XG5cdFx0XHRcdFx0dmFsdWUgPSBOdW1iZXJTZXJ2aWNlLmFkZENvbW1hcyggZXJyb3IucmVxdWlyZWRMZW5ndGggKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnRVFVQUwnOlxuXHRcdFx0XHRcdHZhbHVlID0gTnVtYmVyU2VydmljZS5hZGRDb21tYXMoIGVycm9yLnJlcXVpcmVkVmFsdWUgKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnUEFUVEVSTic6XG5cdFx0XHRcdFx0dmFsdWUgPSBlcnJvci5yZXF1aXJlZFBhdHRlcm47XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuaW5zdGFudChcblx0XHRcdFx0J0ZPUk1fRVJST1JfTUVTU0FHRVMuJyArIGtleSxcblx0XHRcdFx0eyAuLi5lcnJvciwgdmFsdWUsIGZpZWxkOiB0aGlzLmxhYmVsIH1cblx0XHRcdCk7XG5cdFx0fSApO1xuXHR9XG5cbn1cbiJdfQ==