import * as tslib_1 from "tslib";
import { Input, Component, Optional, Inject, InjectionToken } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormControl } from '@angular/forms';
import _ from 'underscore';
export var ERROR_MESSAGE_DEFAULT_OPTIONS = new InjectionToken('defaultOptions');
var ErrorMessageComponent = /** @class */ (function () {
    /**
    * @constructor
    * @param {any} defaultOptions
    * @param {TranslateService} translateService
    */
    function ErrorMessageComponent(defaultOptions, translateService) {
        this.defaultOptions = defaultOptions;
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
                'MINLENGTH', 'MAXLENGTH',
                'PATTERN', 'MATCHPASSWORD',
            ], key)) {
                key = 'INVALID';
            }
            return _this.translateService.instant('FORM_ERROR_MESSAGES.' + key, tslib_1.__assign({}, error, { field: _this.label, length: error.requiredLength, format: error.requiredPattern }));
        });
    };
    ErrorMessageComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [ERROR_MESSAGE_DEFAULT_OPTIONS,] }] },
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
        tslib_1.__metadata("design:paramtypes", [Object, TranslateService])
    ], ErrorMessageComponent);
    return ErrorMessageComponent;
}());
export { ErrorMessageComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3ItbWVzc2FnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNvcmUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9lcnJvci1tZXNzYWdlL2Vycm9yLW1lc3NhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ04sS0FBSyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQzFCLE1BQU0sRUFBRSxjQUFjLEVBQ3RCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLENBQUMsTUFBTSxZQUFZLENBQUM7QUFFM0IsTUFBTSxDQUFDLElBQU0sNkJBQTZCLEdBQXdCLElBQUksY0FBYyxDQUFPLGdCQUFnQixDQUFFLENBQUM7QUFNOUc7SUFNQzs7OztNQUlFO0lBQ0YsK0JBQytELGNBQW1CLEVBQzFFLGdCQUFrQztRQURxQixtQkFBYyxHQUFkLGNBQWMsQ0FBSztRQUMxRSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBVjFCLGFBQVEsR0FBWSxDQUFFLElBQUksQ0FBQyxjQUFjLElBQUksRUFBRSxDQUFFLENBQUMsT0FBTyxDQUFDO1FBQzFELFlBQU8sR0FBZ0IsSUFBSSxXQUFXLEVBQUUsQ0FBQztJQVV0RCxDQUFDO0lBRUo7OztNQUdFO0lBQ0ssOENBQWMsR0FBckI7UUFBQSxpQkFrQ0M7UUFqQ0EsSUFBSyxDQUFDLElBQUksQ0FBQyxPQUFPO1lBQUcsT0FBTyxFQUFFLENBQUM7UUFFL0IsSUFBTSxNQUFNLEdBQVEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7UUFDeEMsSUFBTSxJQUFJLEdBQWtCLENBQUMsQ0FBQyxJQUFJLENBQUUsTUFBTSxDQUFFLENBQUM7UUFFN0MsSUFBSyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNO1lBQUcsT0FBTyxFQUFFLENBQUM7UUFFdkMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBRSxJQUFJLENBQUUsQ0FBQyxDQUFFLENBQUUsRUFBRSxVQUFFLEdBQVc7WUFDaEUsSUFBTSxLQUFLLEdBQVEsTUFBTSxDQUFFLEdBQUcsQ0FBRSxDQUFDO1lBRWpDLEdBQUcsR0FBRyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7WUFFeEIsSUFBSyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQ2Y7Z0JBQ0MsVUFBVSxFQUFFLEtBQUssRUFBRSxLQUFLO2dCQUN4QixXQUFXLEVBQUUsV0FBVztnQkFDeEIsU0FBUyxFQUFFLGVBQWU7YUFDMUIsRUFDRCxHQUFHLENBQ0gsRUFBRztnQkFDSCxHQUFHLEdBQUcsU0FBUyxDQUFDO2FBQ2hCO1lBRUQsT0FBTyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUNuQyxzQkFBc0IsR0FBRyxHQUFHLHVCQUV4QixLQUFLLElBQ1IsS0FBSyxFQUFHLEtBQUksQ0FBQyxLQUFLLEVBQ2xCLE1BQU0sRUFBRyxLQUFLLENBQUMsY0FBYyxFQUM3QixNQUFNLEVBQUcsS0FBSyxDQUFDLGVBQWUsSUFFL0IsQ0FBQztRQUNILENBQUMsQ0FBRSxDQUFDO0lBQ0wsQ0FBQzs7Z0RBMUNDLFFBQVEsWUFBSSxNQUFNLFNBQUUsNkJBQTZCO2dCQUN6QixnQkFBZ0I7O0lBWGpDO1FBQVIsS0FBSyxFQUFFOzt3REFBc0I7SUFDckI7UUFBUixLQUFLLEVBQUU7OzJEQUFrRTtJQUNqRTtRQUFSLEtBQUssRUFBRTswQ0FBaUIsV0FBVzswREFBcUI7SUFKN0MscUJBQXFCO1FBSmpDLFNBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRyxlQUFlO1lBQzFCLHVLQUFtQztTQUNuQyxDQUFDO1FBYUMsbUJBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxtQkFBQSxNQUFNLENBQUUsNkJBQTZCLENBQUUsQ0FBQTt5REFDM0IsZ0JBQWdCO09BYjlCLHFCQUFxQixDQXdEakM7SUFBRCw0QkFBQztDQUFBLEFBeERELElBd0RDO1NBeERZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdElucHV0LCBDb21wb25lbnQsIE9wdGlvbmFsLFxuXHRJbmplY3QsIEluamVjdGlvblRva2VuXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgXyBmcm9tICd1bmRlcnNjb3JlJztcblxuZXhwb3J0IGNvbnN0IEVSUk9SX01FU1NBR0VfREVGQVVMVF9PUFRJT05TOiBJbmplY3Rpb25Ub2tlbjxhbnk+ID0gbmV3IEluamVjdGlvblRva2VuPGFueT4oICdkZWZhdWx0T3B0aW9ucycgKTtcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yXHQ6ICdlcnJvci1tZXNzYWdlJyxcblx0dGVtcGxhdGVVcmxcdDogJy4vZXJyb3ItbWVzc2FnZS5wdWcnLFxufSlcbmV4cG9ydCBjbGFzcyBFcnJvck1lc3NhZ2VDb21wb25lbnQge1xuXG5cdEBJbnB1dCgpIHB1YmxpYyBsYWJlbDogc3RyaW5nO1xuXHRASW5wdXQoKSBwdWJsaWMgbXVsdGlwbGU6IGJvb2xlYW4gPSAoIHRoaXMuZGVmYXVsdE9wdGlvbnMgfHwge30gKS5tdXRpcGxlO1xuXHRASW5wdXQoKSBwdWJsaWMgY29udHJvbDogRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woKTtcblxuXHQvKipcblx0KiBAY29uc3RydWN0b3Jcblx0KiBAcGFyYW0ge2FueX0gZGVmYXVsdE9wdGlvbnNcblx0KiBAcGFyYW0ge1RyYW5zbGF0ZVNlcnZpY2V9IHRyYW5zbGF0ZVNlcnZpY2Vcblx0Ki9cblx0Y29uc3RydWN0b3IoXG5cdFx0QE9wdGlvbmFsKCkgQEluamVjdCggRVJST1JfTUVTU0FHRV9ERUZBVUxUX09QVElPTlMgKSByZWFkb25seSBkZWZhdWx0T3B0aW9uczogYW55LFxuXHRcdHB1YmxpYyB0cmFuc2xhdGVTZXJ2aWNlOiBUcmFuc2xhdGVTZXJ2aWNlXG5cdCkge31cblxuXHQvKipcblx0KiBHZXQgZmllbGQgZXJyb3JzXG5cdCogQHJldHVybiB7QXJyYXl9XG5cdCovXG5cdHB1YmxpYyBnZXRGaWVsZEVycm9ycygpOiBBcnJheTxzdHJpbmc+IHtcblx0XHRpZiAoICF0aGlzLmNvbnRyb2wgKSByZXR1cm4gW107XG5cblx0XHRjb25zdCBlcnJvcnM6IGFueSA9IHRoaXMuY29udHJvbC5lcnJvcnM7XG5cdFx0Y29uc3Qga2V5czogQXJyYXk8c3RyaW5nPiA9IF8ua2V5cyggZXJyb3JzICk7XG5cblx0XHRpZiAoICFrZXlzIHx8ICFrZXlzLmxlbmd0aCApIHJldHVybiBbXTtcblxuXHRcdHJldHVybiBfLm1hcCggdGhpcy5tdWx0aXBsZSA/IGtleXMgOiBbIGtleXNbIDAgXSBdLCAoIGtleTogc3RyaW5nICkgPT4ge1xuXHRcdFx0Y29uc3QgZXJyb3I6IGFueSA9IGVycm9yc1sga2V5IF07XG5cblx0XHRcdGtleSA9IGtleS50b1VwcGVyQ2FzZSgpO1xuXG5cdFx0XHRpZiAoICFfLmNvbnRhaW5zKFxuXHRcdFx0XHRbXG5cdFx0XHRcdFx0J1JFUVVJUkVEJywgJ01JTicsICdNQVgnLFxuXHRcdFx0XHRcdCdNSU5MRU5HVEgnLCAnTUFYTEVOR1RIJyxcblx0XHRcdFx0XHQnUEFUVEVSTicsICdNQVRDSFBBU1NXT1JEJyxcblx0XHRcdFx0XSxcblx0XHRcdFx0a2V5XG5cdFx0XHQpICkge1xuXHRcdFx0XHRrZXkgPSAnSU5WQUxJRCc7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuaW5zdGFudChcblx0XHRcdFx0J0ZPUk1fRVJST1JfTUVTU0FHRVMuJyArIGtleSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdC4uLmVycm9yLFxuXHRcdFx0XHRcdGZpZWxkXHQ6IHRoaXMubGFiZWwsXG5cdFx0XHRcdFx0bGVuZ3RoXHQ6IGVycm9yLnJlcXVpcmVkTGVuZ3RoLFxuXHRcdFx0XHRcdGZvcm1hdFx0OiBlcnJvci5yZXF1aXJlZFBhdHRlcm4sXG5cdFx0XHRcdH1cblx0XHRcdCk7XG5cdFx0fSApO1xuXHR9XG5cbn1cbiJdfQ==