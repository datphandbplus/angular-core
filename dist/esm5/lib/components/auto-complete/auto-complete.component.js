import * as tslib_1 from "tslib";
import { Component, Input, OnInit, Output, EventEmitter, ChangeDetectorRef, SimpleChanges, OnChanges, Optional, Inject, InjectionToken } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import _ from 'underscore';
import { UtilitiesService } from '../../services/utilities.service';
export var AUTO_COMPLETE_DEFAULT_OPTIONS = new InjectionToken('defaultOptions');
var AutoCompleteComponent = /** @class */ (function () {
    /**
    * @constructor
    * @param {any} defaultOptions
    * @param {ChangeDetectorRef} cdRef
    */
    function AutoCompleteComponent(defaultOptions, cdRef) {
        this.defaultOptions = defaultOptions;
        this.cdRef = cdRef;
        this.floatLabel = (this.defaultOptions || {}).floatLabel || 'always';
        this.appearance = (this.defaultOptions || {}).appearance || 'outline';
        this.fieldKey = (this.defaultOptions || {}).fieldKey || 'id';
        this.fieldName = (this.defaultOptions || {}).fieldName || 'name';
        this.data = [];
        this.formControl = new FormControl();
        this.ngModelChange = new EventEmitter();
    }
    /**
    * @constructor
    */
    AutoCompleteComponent.prototype.ngOnInit = function () {
        this.prepareData();
    };
    /**
    * @constructor
    * @param {SimpleChanges} changes
    */
    AutoCompleteComponent.prototype.ngOnChanges = function (changes) {
        changes.data && this.prepareData();
    };
    /**
    * Prepare data
    * @private
    * @return {void}
    */
    AutoCompleteComponent.prototype.prepareData = function () {
        var _this = this;
        if (!_.findWhere(this.data, { id: '' })) {
            this.data.unshift({ id: '', name: this.emptyLabel });
        }
        this.filteredData = this.formControl.valueChanges
            .pipe(startWith(''), map(function (value) { return _this.filter(value); }));
        this.cdRef.detectChanges();
    };
    /**
    * Filter
    * @private
    * @param {string} query
    * @return {Array}
    */
    AutoCompleteComponent.prototype.filter = function (query) {
        var _this = this;
        return this.data.filter(function (item) {
            var filterValue = _this.fieldName ? item[_this.fieldName] : item;
            return UtilitiesService.stripVietnameseSymbol(filterValue
                .toLowerCase()
                .replace(/ /g, ''))
                .indexOf(UtilitiesService.stripVietnameseSymbol((query || '')
                .toLowerCase()
                .replace(/ /g, ''))) > -1;
        });
    };
    AutoCompleteComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [AUTO_COMPLETE_DEFAULT_OPTIONS,] }] },
        { type: ChangeDetectorRef }
    ]; };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], AutoCompleteComponent.prototype, "label", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], AutoCompleteComponent.prototype, "placeholder", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], AutoCompleteComponent.prototype, "ngModel", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], AutoCompleteComponent.prototype, "required", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], AutoCompleteComponent.prototype, "disabled", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], AutoCompleteComponent.prototype, "disableControl", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], AutoCompleteComponent.prototype, "readonly", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], AutoCompleteComponent.prototype, "emptyLabel", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], AutoCompleteComponent.prototype, "floatLabel", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], AutoCompleteComponent.prototype, "appearance", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], AutoCompleteComponent.prototype, "fieldKey", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], AutoCompleteComponent.prototype, "fieldName", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array)
    ], AutoCompleteComponent.prototype, "data", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", FormControl)
    ], AutoCompleteComponent.prototype, "formControl", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], AutoCompleteComponent.prototype, "ngModelChange", void 0);
    AutoCompleteComponent = tslib_1.__decorate([
        Component({
            selector: 'auto-complete',
            template: "<mat-form-field class=\"auto-complete\" [ngClass]=\"defaultOptions?.componentClass\" [floatLabel]=\"floatLabel\" [appearance]=\"appearance\"><mat-label *ngIf=\"label\">{{ label }}</mat-label><input matInput [matAutocomplete]=\"auto\" [(ngModel)]=\"ngModel\" [placeholder]=\"emptyLabel || placeholder\" [disableControl]=\"disableControl || disabled\" (ngModelChange)=\"ngModelChange?.emit( ngModel )\" [formControl]=\"formControl\" [readonly]=\"readonly\" [required]=\"required\" ngDefaultControl><mat-autocomplete #auto=\"matAutocomplete\"><mat-option *ngFor=\"let item of filteredData | async\" [value]=\"item[ fieldKey ]\">{{ item[ fieldName ] }}</mat-option></mat-autocomplete><mat-error><error-message [label]=\"label\" [control]=\"formControl\"></error-message></mat-error></mat-form-field>",
            host: { class: 'flex-noshrink layout-column' }
        }),
        tslib_1.__param(0, Optional()), tslib_1.__param(0, Inject(AUTO_COMPLETE_DEFAULT_OPTIONS)),
        tslib_1.__metadata("design:paramtypes", [Object, ChangeDetectorRef])
    ], AutoCompleteComponent);
    return AutoCompleteComponent;
}());
export { AutoCompleteComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0by1jb21wbGV0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNvcmUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9hdXRvLWNvbXBsZXRlL2F1dG8tY29tcGxldGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ04sU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQ3hCLE1BQU0sRUFBRSxZQUFZLEVBQUUsaUJBQWlCLEVBQ3ZDLGFBQWEsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUNsQyxNQUFNLEVBQUUsY0FBYyxFQUN0QixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRCxPQUFPLENBQUMsTUFBTSxZQUFZLENBQUM7QUFFM0IsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFFcEUsTUFBTSxDQUFDLElBQU0sNkJBQTZCLEdBQXdCLElBQUksY0FBYyxDQUFPLGdCQUFnQixDQUFFLENBQUM7QUFPOUc7SUFxQkM7Ozs7TUFJRTtJQUNGLCtCQUMrRCxjQUFtQixFQUMxRSxLQUF3QjtRQUQrQixtQkFBYyxHQUFkLGNBQWMsQ0FBSztRQUMxRSxVQUFLLEdBQUwsS0FBSyxDQUFtQjtRQWxCaEIsZUFBVSxHQUFXLENBQUUsSUFBSSxDQUFDLGNBQWMsSUFBSSxFQUFFLENBQUUsQ0FBQyxVQUFVLElBQUksUUFBUSxDQUFDO1FBQzFFLGVBQVUsR0FBVyxDQUFFLElBQUksQ0FBQyxjQUFjLElBQUksRUFBRSxDQUFFLENBQUMsVUFBVSxJQUFJLFNBQVMsQ0FBQztRQUMzRSxhQUFRLEdBQVcsQ0FBRSxJQUFJLENBQUMsY0FBYyxJQUFJLEVBQUUsQ0FBRSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUM7UUFDbEUs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QUFNLEVBQUU7MENBQXVCLFlBQVk7Z0VBQWdDO0lBakJoRSxxQkFBcUI7UUFMakMsU0FBUyxDQUFDO1lBQ1YsUUFBUSxFQUFHLGVBQWU7WUFDMUIsdXlCQUFtQztZQUNuQyxJQUFJLEVBQUksRUFBRSxLQUFLLEVBQUUsNkJBQTZCLEVBQUU7U0FDaEQsQ0FBQztRQTRCQyxtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLE1BQU0sQ0FBRSw2QkFBNkIsQ0FBRSxDQUFBO3lEQUN0QyxpQkFBaUI7T0E1QnBCLHFCQUFxQixDQTBGakM7SUFBRCw0QkFBQztDQUFBLEFBMUZELElBMEZDO1NBMUZZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCxcblx0T3V0cHV0LCBFdmVudEVtaXR0ZXIsIENoYW5nZURldGVjdG9yUmVmLFxuXHRTaW1wbGVDaGFuZ2VzLCBPbkNoYW5nZXMsIE9wdGlvbmFsLFxuXHRJbmplY3QsIEluamVjdGlvblRva2VuXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHN0YXJ0V2l0aCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCBfIGZyb20gJ3VuZGVyc2NvcmUnO1xuXG5pbXBvcnQgeyBVdGlsaXRpZXNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdXRpbGl0aWVzLnNlcnZpY2UnO1xuXG5leHBvcnQgY29uc3QgQVVUT19DT01QTEVURV9ERUZBVUxUX09QVElPTlM6IEluamVjdGlvblRva2VuPGFueT4gPSBuZXcgSW5qZWN0aW9uVG9rZW48YW55PiggJ2RlZmF1bHRPcHRpb25zJyApO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3JcdDogJ2F1dG8tY29tcGxldGUnLFxuXHR0ZW1wbGF0ZVVybFx0OiAnLi9hdXRvLWNvbXBsZXRlLnB1ZycsXG5cdGhvc3RcdFx0OiB7IGNsYXNzOiAnZmxleC1ub3NocmluayBsYXlvdXQtY29sdW1uJyB9LFxufSlcbmV4cG9ydCBjbGFzcyBBdXRvQ29tcGxldGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG5cblx0QElucHV0KCkgcHVibGljIGxhYmVsOiBzdHJpbmc7XG5cdEBJbnB1dCgpIHB1YmxpYyBwbGFjZWhvbGRlcjogc3RyaW5nO1xuXHRASW5wdXQoKSBwdWJsaWMgbmdNb2RlbDogYW55O1xuXHRASW5wdXQoKSBwdWJsaWMgcmVxdWlyZWQ6IGJvb2xlYW47XG5cdEBJbnB1dCgpIHB1YmxpYyBkaXNhYmxlZDogYm9vbGVhbjtcblx0QElucHV0KCkgcHVibGljIGRpc2FibGVDb250cm9sOiBib29sZWFuO1xuXHRASW5wdXQoKSBwdWJsaWMgcmVhZG9ubHk6IGJvb2xlYW47XG5cdEBJbnB1dCgpIHB1YmxpYyBlbXB0eUxhYmVsOiBzdHJpbmc7XG5cdEBJbnB1dCgpIHB1YmxpYyBmbG9hdExhYmVsOiBzdHJpbmcgPSAoIHRoaXMuZGVmYXVsdE9wdGlvbnMgfHwge30gKS5mbG9hdExhYmVsIHx8ICdhbHdheXMnO1xuXHRASW5wdXQoKSBwdWJsaWMgYXBwZWFyYW5jZTogc3RyaW5nID0gKCB0aGlzLmRlZmF1bHRPcHRpb25zIHx8IHt9ICkuYXBwZWFyYW5jZSB8fCAnb3V0bGluZSc7XG5cdEBJbnB1dCgpIHB1YmxpYyBmaWVsZEtleTogc3RyaW5nID0gKCB0aGlzLmRlZmF1bHRPcHRpb25zIHx8IHt9ICkuZmllbGRLZXkgfHwgJ2lkJztcblx0QElucHV0KCkgcHVibGljIGZpZWxkTmFtZTogc3RyaW5nID0gKCB0aGlzLmRlZmF1bHRPcHRpb25zIHx8IHt9ICkuZmllbGROYW1lIHx8ICduYW1lJztcblx0QElucHV0KCkgcHVibGljIGRhdGE6IEFycmF5PGFueT4gPSBbXTtcblx0QElucHV0KCkgcHVibGljIGZvcm1Db250cm9sOiBGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgpO1xuXG5cdEBPdXRwdXQoKSBwdWJsaWMgbmdNb2RlbENoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuXHRwdWJsaWMgZmlsdGVyZWREYXRhOiBPYnNlcnZhYmxlPGFueT47XG5cblx0LyoqXG5cdCogQGNvbnN0cnVjdG9yXG5cdCogQHBhcmFtIHthbnl9IGRlZmF1bHRPcHRpb25zXG5cdCogQHBhcmFtIHtDaGFuZ2VEZXRlY3RvclJlZn0gY2RSZWZcblx0Ki9cblx0Y29uc3RydWN0b3IoXG5cdFx0QE9wdGlvbmFsKCkgQEluamVjdCggQVVUT19DT01QTEVURV9ERUZBVUxUX09QVElPTlMgKSByZWFkb25seSBkZWZhdWx0T3B0aW9uczogYW55LFxuXHRcdHB1YmxpYyBjZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWZcblx0KSB7fVxuXG5cdC8qKlxuXHQqIEBjb25zdHJ1Y3RvclxuXHQqL1xuXHRwdWJsaWMgbmdPbkluaXQoKSB7XG5cdFx0dGhpcy5wcmVwYXJlRGF0YSgpO1xuXHR9XG5cblx0LyoqXG5cdCogQGNvbnN0cnVjdG9yXG5cdCogQHBhcmFtIHtTaW1wbGVDaGFuZ2VzfSBjaGFuZ2VzXG5cdCovXG5cdHB1YmxpYyBuZ09uQ2hhbmdlcyggY2hhbmdlczogU2ltcGxlQ2hhbmdlcyApIHtcblx0XHRjaGFuZ2VzLmRhdGEgJiYgdGhpcy5wcmVwYXJlRGF0YSgpO1xuXHR9XG5cblx0LyoqXG5cdCogUHJlcGFyZSBkYXRhXG5cdCogQHByaXZhdGVcblx0KiBAcmV0dXJuIHt2b2lkfVxuXHQqL1xuXHRwcml2YXRlIHByZXBhcmVEYXRhKCkge1xuXHRcdGlmICggIV8uZmluZFdoZXJlKCB0aGlzLmRhdGEsIHsgaWQ6ICcnIH0gKSApIHtcblx0XHRcdHRoaXMuZGF0YS51bnNoaWZ0KCB7IGlkOiAnJywgbmFtZTogdGhpcy5lbXB0eUxhYmVsIH0gKTtcblx0XHR9XG5cblx0XHR0aGlzLmZpbHRlcmVkRGF0YSA9IHRoaXMuZm9ybUNvbnRyb2wudmFsdWVDaGFuZ2VzXG5cdFx0LnBpcGUoXG5cdFx0XHRzdGFydFdpdGgoICcnICksXG5cdFx0XHRtYXAoICggdmFsdWU6IHN0cmluZyApID0+IHRoaXMuZmlsdGVyKCB2YWx1ZSApIClcblx0XHQpO1xuXG5cdFx0dGhpcy5jZFJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdH1cblxuXHQvKipcblx0KiBGaWx0ZXJcblx0KiBAcHJpdmF0ZVxuXHQqIEBwYXJhbSB7c3RyaW5nfSBxdWVyeVxuXHQqIEByZXR1cm4ge0FycmF5fVxuXHQqL1xuXHRwcml2YXRlIGZpbHRlciggcXVlcnk6IHN0cmluZyApOiBBcnJheTxhbnk+IHtcblx0XHRyZXR1cm4gdGhpcy5kYXRhLmZpbHRlciggKCBpdGVtOiBhbnkgKSA9PiB7XG5cdFx0XHRjb25zdCBmaWx0ZXJWYWx1ZTogc3RyaW5nID0gdGhpcy5maWVsZE5hbWUgPyBpdGVtWyB0aGlzLmZpZWxkTmFtZSBdIDogaXRlbTtcblxuXHRcdFx0cmV0dXJuIFV0aWxpdGllc1NlcnZpY2Uuc3RyaXBWaWV0bmFtZXNlU3ltYm9sKFxuXHRcdFx0XHRmaWx0ZXJWYWx1ZVxuXHRcdFx0XHQudG9Mb3dlckNhc2UoKVxuXHRcdFx0XHQucmVwbGFjZSggLyAvZywgJycgKVxuXHRcdFx0KVxuXHRcdFx0LmluZGV4T2YoXG5cdFx0XHRcdFV0aWxpdGllc1NlcnZpY2Uuc3RyaXBWaWV0bmFtZXNlU3ltYm9sKFxuXHRcdFx0XHRcdCggcXVlcnkgfHwgJycgKVxuXHRcdFx0XHRcdC50b0xvd2VyQ2FzZSgpXG5cdFx0XHRcdFx0LnJlcGxhY2UoIC8gL2csICcnIClcblx0XHRcdFx0KVxuXHRcdFx0KSA+IC0xO1xuXHRcdH0gKTtcblx0fVxuXG59XG4iXX0=