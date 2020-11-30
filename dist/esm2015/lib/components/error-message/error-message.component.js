import * as tslib_1 from "tslib";
import { Input, Component, Optional, Inject, InjectionToken } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormControl } from '@angular/forms';
import _ from 'underscore';
export const ERROR_MESSAGE_DEFAULT_OPTIONS = new InjectionToken('defaultOptions');
let ErrorMessageComponent = class ErrorMessageComponent {
    /**
    * @constructor
    * @param {any} defaultOptions
    * @param {TranslateService} translateService
    */
    constructor(defaultOptions, translateService) {
        this.defaultOptions = defaultOptions;
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
                'MINLENGTH', 'MAXLENGTH',
                'PATTERN', 'MATCHPASSWORD',
            ], key)) {
                key = 'INVALID';
            }
            return this.translateService.instant('FORM_ERROR_MESSAGES.' + key, Object.assign({}, error, { field: this.label, length: error.requiredLength, format: error.requiredPattern }));
        });
    }
};
ErrorMessageComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [ERROR_MESSAGE_DEFAULT_OPTIONS,] }] },
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
    tslib_1.__metadata("design:paramtypes", [Object, TranslateService])
], ErrorMessageComponent);
export { ErrorMessageComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3ItbWVzc2FnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNvcmUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9lcnJvci1tZXNzYWdlL2Vycm9yLW1lc3NhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ04sS0FBSyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQzFCLE1BQU0sRUFBRSxjQUFjLEVBQ3RCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLENBQUMsTUFBTSxZQUFZLENBQUM7QUFFM0IsTUFBTSxDQUFDLE1BQU0sNkJBQTZCLEdBQXdCLElBQUksY0FBYyxDQUFPLGdCQUFnQixDQUFFLENBQUM7QUFNOUcsSUFBYSxxQkFBcUIsR0FBbEMsTUFBYSxxQkFBcUI7SUFNakM7Ozs7TUFJRTtJQUNGLFlBQytELGNBQW1CLEVBQzFFLGdCQUFrQztRQURxQixtQkFBYyxHQUFkLGNBQWMsQ0FBSztRQUMxRSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBVjFCLGFBQVEsR0FBWSxDQUFFLElBQUksQ0FBQyxjQUFjLElBQUksRUFBRSxDQUFFLENBQUMsT0FBTyxDQUFDO1FBQzFELFlBQU8sR0FBZ0IsSUFBSSxXQUFXLEVBQUUsQ0FBQztJQVV0RCxDQUFDO0lBRUo7OztNQUdFO0lBQ0ssY0FBYztRQUNwQixJQUFLLENBQUMsSUFBSSxDQUFDLE9BQU87WUFBRyxPQUFPLEVBQUUsQ0FBQztRQUUvQixNQUFNLE1BQU0sR0FBUSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztRQUN4QyxNQUFNLElBQUksR0FBa0IsQ0FBQyxDQUFDLElBQUksQ0FBRSxNQUFNLENBQUUsQ0FBQztRQUU3QyxJQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU07WUFBRyxPQUFPLEVBQUUsQ0FBQztRQUV2QyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFFLElBQUksQ0FBRSxDQUFDLENBQUUsQ0FBRSxFQUFFLENBQUUsR0FBVyxFQUFHLEVBQUU7WUFDckUsTUFBTSxLQUFLLEdBQVEsTUFBTSxDQUFFLEdBQUcsQ0FBRSxDQUFDO1lBRWpDLEdBQUcsR0FBRyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7WUFFeEIsSUFBSyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQ2Y7Z0JBQ0MsVUFBVSxFQUFFLEtBQUssRUFBRSxLQUFLO2dCQUN4QixXQUFXLEVBQUUsV0FBVztnQkFDeEIsU0FBUyxFQUFFLGVBQWU7YUFDMUIsRUFDRCxHQUFHLENBQ0gsRUFBRztnQkFDSCxHQUFHLEdBQUcsU0FBUyxDQUFDO2FBQ2hCO1lBRUQsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUNuQyxzQkFBc0IsR0FBRyxHQUFHLG9CQUV4QixLQUFLLElBQ1IsS0FBSyxFQUFHLElBQUksQ0FBQyxLQUFLLEVBQ2xCLE1BQU0sRUFBRyxLQUFLLENBQUMsY0FBYyxFQUM3QixNQUFNLEVBQUcsS0FBSyxDQUFDLGVBQWUsSUFFL0IsQ0FBQztRQUNILENBQUMsQ0FBRSxDQUFDO0lBQ0wsQ0FBQztDQUVELENBQUE7OzRDQTVDRSxRQUFRLFlBQUksTUFBTSxTQUFFLDZCQUE2QjtZQUN6QixnQkFBZ0I7O0FBWGpDO0lBQVIsS0FBSyxFQUFFOztvREFBc0I7QUFDckI7SUFBUixLQUFLLEVBQUU7O3VEQUFrRTtBQUNqRTtJQUFSLEtBQUssRUFBRTtzQ0FBaUIsV0FBVztzREFBcUI7QUFKN0MscUJBQXFCO0lBSmpDLFNBQVMsQ0FBQztRQUNWLFFBQVEsRUFBRyxlQUFlO1FBQzFCLHVLQUFtQztLQUNuQyxDQUFDO0lBYUMsbUJBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxtQkFBQSxNQUFNLENBQUUsNkJBQTZCLENBQUUsQ0FBQTtxREFDM0IsZ0JBQWdCO0dBYjlCLHFCQUFxQixDQXdEakM7U0F4RFkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0SW5wdXQsIENvbXBvbmVudCwgT3B0aW9uYWwsXG5cdEluamVjdCwgSW5qZWN0aW9uVG9rZW5cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCBfIGZyb20gJ3VuZGVyc2NvcmUnO1xuXG5leHBvcnQgY29uc3QgRVJST1JfTUVTU0FHRV9ERUZBVUxUX09QVElPTlM6IEluamVjdGlvblRva2VuPGFueT4gPSBuZXcgSW5qZWN0aW9uVG9rZW48YW55PiggJ2RlZmF1bHRPcHRpb25zJyApO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3JcdDogJ2Vycm9yLW1lc3NhZ2UnLFxuXHR0ZW1wbGF0ZVVybFx0OiAnLi9lcnJvci1tZXNzYWdlLnB1ZycsXG59KVxuZXhwb3J0IGNsYXNzIEVycm9yTWVzc2FnZUNvbXBvbmVudCB7XG5cblx0QElucHV0KCkgcHVibGljIGxhYmVsOiBzdHJpbmc7XG5cdEBJbnB1dCgpIHB1YmxpYyBtdWx0aXBsZTogYm9vbGVhbiA9ICggdGhpcy5kZWZhdWx0T3B0aW9ucyB8fCB7fSApLm11dGlwbGU7XG5cdEBJbnB1dCgpIHB1YmxpYyBjb250cm9sOiBGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgpO1xuXG5cdC8qKlxuXHQqIEBjb25zdHJ1Y3RvclxuXHQqIEBwYXJhbSB7YW55fSBkZWZhdWx0T3B0aW9uc1xuXHQqIEBwYXJhbSB7VHJhbnNsYXRlU2VydmljZX0gdHJhbnNsYXRlU2VydmljZVxuXHQqL1xuXHRjb25zdHJ1Y3Rvcihcblx0XHRAT3B0aW9uYWwoKSBASW5qZWN0KCBFUlJPUl9NRVNTQUdFX0RFRkFVTFRfT1BUSU9OUyApIHJlYWRvbmx5IGRlZmF1bHRPcHRpb25zOiBhbnksXG5cdFx0cHVibGljIHRyYW5zbGF0ZVNlcnZpY2U6IFRyYW5zbGF0ZVNlcnZpY2Vcblx0KSB7fVxuXG5cdC8qKlxuXHQqIEdldCBmaWVsZCBlcnJvcnNcblx0KiBAcmV0dXJuIHtBcnJheX1cblx0Ki9cblx0cHVibGljIGdldEZpZWxkRXJyb3JzKCk6IEFycmF5PHN0cmluZz4ge1xuXHRcdGlmICggIXRoaXMuY29udHJvbCApIHJldHVybiBbXTtcblxuXHRcdGNvbnN0IGVycm9yczogYW55ID0gdGhpcy5jb250cm9sLmVycm9ycztcblx0XHRjb25zdCBrZXlzOiBBcnJheTxzdHJpbmc+ID0gXy5rZXlzKCBlcnJvcnMgKTtcblxuXHRcdGlmICggIWtleXMgfHwgIWtleXMubGVuZ3RoICkgcmV0dXJuIFtdO1xuXG5cdFx0cmV0dXJuIF8ubWFwKCB0aGlzLm11bHRpcGxlID8ga2V5cyA6IFsga2V5c1sgMCBdIF0sICgga2V5OiBzdHJpbmcgKSA9PiB7XG5cdFx0XHRjb25zdCBlcnJvcjogYW55ID0gZXJyb3JzWyBrZXkgXTtcblxuXHRcdFx0a2V5ID0ga2V5LnRvVXBwZXJDYXNlKCk7XG5cblx0XHRcdGlmICggIV8uY29udGFpbnMoXG5cdFx0XHRcdFtcblx0XHRcdFx0XHQnUkVRVUlSRUQnLCAnTUlOJywgJ01BWCcsXG5cdFx0XHRcdFx0J01JTkxFTkdUSCcsICdNQVhMRU5HVEgnLFxuXHRcdFx0XHRcdCdQQVRURVJOJywgJ01BVENIUEFTU1dPUkQnLFxuXHRcdFx0XHRdLFxuXHRcdFx0XHRrZXlcblx0XHRcdCkgKSB7XG5cdFx0XHRcdGtleSA9ICdJTlZBTElEJztcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRoaXMudHJhbnNsYXRlU2VydmljZS5pbnN0YW50KFxuXHRcdFx0XHQnRk9STV9FUlJPUl9NRVNTQUdFUy4nICsga2V5LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0Li4uZXJyb3IsXG5cdFx0XHRcdFx0ZmllbGRcdDogdGhpcy5sYWJlbCxcblx0XHRcdFx0XHRsZW5ndGhcdDogZXJyb3IucmVxdWlyZWRMZW5ndGgsXG5cdFx0XHRcdFx0Zm9ybWF0XHQ6IGVycm9yLnJlcXVpcmVkUGF0dGVybixcblx0XHRcdFx0fVxuXHRcdFx0KTtcblx0XHR9ICk7XG5cdH1cblxufVxuIl19