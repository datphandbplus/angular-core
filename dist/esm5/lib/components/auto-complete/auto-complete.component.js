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
        this.fieldKey = 'id';
        this.fieldName = 'name';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0by1jb21wbGV0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNvcmUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9hdXRvLWNvbXBsZXRlL2F1dG8tY29tcGxldGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ04sU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQ3hCLE1BQU0sRUFBRSxZQUFZLEVBQUUsaUJBQWlCLEVBQ3ZDLGFBQWEsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUNsQyxNQUFNLEVBQUUsY0FBYyxFQUN0QixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRCxPQUFPLENBQUMsTUFBTSxZQUFZLENBQUM7QUFFM0IsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFFcEUsTUFBTSxDQUFDLElBQU0sNkJBQTZCLEdBQXdCLElBQUksY0FBYyxDQUFPLGdCQUFnQixDQUFFLENBQUM7QUFPOUc7SUFxQkM7Ozs7TUFJRTtJQUNGLCtCQUMrRCxjQUFtQixFQUMxRSxLQUF3QjtRQUQrQixtQkFBYyxHQUFkLGNBQWMsQ0FBSztRQUMxRSxVQUFLLEdBQUwsS0FBSyxDQUFtQjtRQWxCaEIsZUFBVSxHQUFXLENBQUUsSUFBSSxDQUFDLGNBQWMsSUFBSSxFQUFFLENBQUUsQ0FBQyxVQUFVLElBQUksUUFBUSxDQUFDO1FBQzFFLGVBQVUsR0FBVyxDQUFFLElBQUksQ0FBQyxjQUFjLElBQUksRUFBRSxDQUFFLENBQUMsVUFBVSxJQUFJLFNBQVMsQ0FBQztRQUMzRSxhQUFRLEdBQVcsSUFBSSxDQUFDO1FBQ3hCLGNBQVMsR0FBVyxNQUFNLENBQUM7UUFDM0IsU0FBSSxHQUFlLEVBQUUsQ0FBQztRQUN0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QUksRUFBSSxFQUFFLEtBQUssRUFBRSw2QkFBNkIsRUFBRTtTQUNoRCxDQUFDO1FBNEJDLG1CQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsbUJBQUEsTUFBTSxDQUFFLDZCQUE2QixDQUFFLENBQUE7eURBQ3RDLGlCQUFpQjtPQTVCcEIscUJBQXFCLENBMEZqQztJQUFELDRCQUFDO0NBQUEsQUExRkQsSUEwRkM7U0ExRlkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0Q29tcG9uZW50LCBJbnB1dCwgT25Jbml0LFxuXHRPdXRwdXQsIEV2ZW50RW1pdHRlciwgQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFNpbXBsZUNoYW5nZXMsIE9uQ2hhbmdlcywgT3B0aW9uYWwsXG5cdEluamVjdCwgSW5qZWN0aW9uVG9rZW5cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgc3RhcnRXaXRoIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IF8gZnJvbSAndW5kZXJzY29yZSc7XG5cbmltcG9ydCB7IFV0aWxpdGllc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy91dGlsaXRpZXMuc2VydmljZSc7XG5cbmV4cG9ydCBjb25zdCBBVVRPX0NPTVBMRVRFX0RFRkFVTFRfT1BUSU9OUzogSW5qZWN0aW9uVG9rZW48YW55PiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxhbnk+KCAnZGVmYXVsdE9wdGlvbnMnICk7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3Rvclx0OiAnYXV0by1jb21wbGV0ZScsXG5cdHRlbXBsYXRlVXJsXHQ6ICcuL2F1dG8tY29tcGxldGUucHVnJyxcblx0aG9zdFx0XHQ6IHsgY2xhc3M6ICdmbGV4LW5vc2hyaW5rIGxheW91dC1jb2x1bW4nIH0sXG59KVxuZXhwb3J0IGNsYXNzIEF1dG9Db21wbGV0ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcblxuXHRASW5wdXQoKSBwdWJsaWMgbGFiZWw6IHN0cmluZztcblx0QElucHV0KCkgcHVibGljIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG5cdEBJbnB1dCgpIHB1YmxpYyBuZ01vZGVsOiBhbnk7XG5cdEBJbnB1dCgpIHB1YmxpYyByZXF1aXJlZDogYm9vbGVhbjtcblx0QElucHV0KCkgcHVibGljIGRpc2FibGVkOiBib29sZWFuO1xuXHRASW5wdXQoKSBwdWJsaWMgZGlzYWJsZUNvbnRyb2w6IGJvb2xlYW47XG5cdEBJbnB1dCgpIHB1YmxpYyByZWFkb25seTogYm9vbGVhbjtcblx0QElucHV0KCkgcHVibGljIGVtcHR5TGFiZWw6IHN0cmluZztcblx0QElucHV0KCkgcHVibGljIGZsb2F0TGFiZWw6IHN0cmluZyA9ICggdGhpcy5kZWZhdWx0T3B0aW9ucyB8fCB7fSApLmZsb2F0TGFiZWwgfHwgJ2Fsd2F5cyc7XG5cdEBJbnB1dCgpIHB1YmxpYyBhcHBlYXJhbmNlOiBzdHJpbmcgPSAoIHRoaXMuZGVmYXVsdE9wdGlvbnMgfHwge30gKS5hcHBlYXJhbmNlIHx8ICdvdXRsaW5lJztcblx0QElucHV0KCkgcHVibGljIGZpZWxkS2V5OiBzdHJpbmcgPSAnaWQnO1xuXHRASW5wdXQoKSBwdWJsaWMgZmllbGROYW1lOiBzdHJpbmcgPSAnbmFtZSc7XG5cdEBJbnB1dCgpIHB1YmxpYyBkYXRhOiBBcnJheTxhbnk+ID0gW107XG5cdEBJbnB1dCgpIHB1YmxpYyBmb3JtQ29udHJvbDogRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woKTtcblxuXHRAT3V0cHV0KCkgcHVibGljIG5nTW9kZWxDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cblx0cHVibGljIGZpbHRlcmVkRGF0YTogT2JzZXJ2YWJsZTxhbnk+O1xuXG5cdC8qKlxuXHQqIEBjb25zdHJ1Y3RvclxuXHQqIEBwYXJhbSB7YW55fSBkZWZhdWx0T3B0aW9uc1xuXHQqIEBwYXJhbSB7Q2hhbmdlRGV0ZWN0b3JSZWZ9IGNkUmVmXG5cdCovXG5cdGNvbnN0cnVjdG9yKFxuXHRcdEBPcHRpb25hbCgpIEBJbmplY3QoIEFVVE9fQ09NUExFVEVfREVGQVVMVF9PUFRJT05TICkgcmVhZG9ubHkgZGVmYXVsdE9wdGlvbnM6IGFueSxcblx0XHRwdWJsaWMgY2RSZWY6IENoYW5nZURldGVjdG9yUmVmXG5cdCkge31cblxuXHQvKipcblx0KiBAY29uc3RydWN0b3Jcblx0Ki9cblx0cHVibGljIG5nT25Jbml0KCkge1xuXHRcdHRoaXMucHJlcGFyZURhdGEoKTtcblx0fVxuXG5cdC8qKlxuXHQqIEBjb25zdHJ1Y3RvclxuXHQqIEBwYXJhbSB7U2ltcGxlQ2hhbmdlc30gY2hhbmdlc1xuXHQqL1xuXHRwdWJsaWMgbmdPbkNoYW5nZXMoIGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMgKSB7XG5cdFx0Y2hhbmdlcy5kYXRhICYmIHRoaXMucHJlcGFyZURhdGEoKTtcblx0fVxuXG5cdC8qKlxuXHQqIFByZXBhcmUgZGF0YVxuXHQqIEBwcml2YXRlXG5cdCogQHJldHVybiB7dm9pZH1cblx0Ki9cblx0cHJpdmF0ZSBwcmVwYXJlRGF0YSgpIHtcblx0XHRpZiAoICFfLmZpbmRXaGVyZSggdGhpcy5kYXRhLCB7IGlkOiAnJyB9ICkgKSB7XG5cdFx0XHR0aGlzLmRhdGEudW5zaGlmdCggeyBpZDogJycsIG5hbWU6IHRoaXMuZW1wdHlMYWJlbCB9ICk7XG5cdFx0fVxuXG5cdFx0dGhpcy5maWx0ZXJlZERhdGEgPSB0aGlzLmZvcm1Db250cm9sLnZhbHVlQ2hhbmdlc1xuXHRcdC5waXBlKFxuXHRcdFx0c3RhcnRXaXRoKCAnJyApLFxuXHRcdFx0bWFwKCAoIHZhbHVlOiBzdHJpbmcgKSA9PiB0aGlzLmZpbHRlciggdmFsdWUgKSApXG5cdFx0KTtcblxuXHRcdHRoaXMuY2RSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHR9XG5cblx0LyoqXG5cdCogRmlsdGVyXG5cdCogQHByaXZhdGVcblx0KiBAcGFyYW0ge3N0cmluZ30gcXVlcnlcblx0KiBAcmV0dXJuIHtBcnJheX1cblx0Ki9cblx0cHJpdmF0ZSBmaWx0ZXIoIHF1ZXJ5OiBzdHJpbmcgKTogQXJyYXk8YW55PiB7XG5cdFx0cmV0dXJuIHRoaXMuZGF0YS5maWx0ZXIoICggaXRlbTogYW55ICkgPT4ge1xuXHRcdFx0Y29uc3QgZmlsdGVyVmFsdWU6IHN0cmluZyA9IHRoaXMuZmllbGROYW1lID8gaXRlbVsgdGhpcy5maWVsZE5hbWUgXSA6IGl0ZW07XG5cblx0XHRcdHJldHVybiBVdGlsaXRpZXNTZXJ2aWNlLnN0cmlwVmlldG5hbWVzZVN5bWJvbChcblx0XHRcdFx0ZmlsdGVyVmFsdWVcblx0XHRcdFx0LnRvTG93ZXJDYXNlKClcblx0XHRcdFx0LnJlcGxhY2UoIC8gL2csICcnIClcblx0XHRcdClcblx0XHRcdC5pbmRleE9mKFxuXHRcdFx0XHRVdGlsaXRpZXNTZXJ2aWNlLnN0cmlwVmlldG5hbWVzZVN5bWJvbChcblx0XHRcdFx0XHQoIHF1ZXJ5IHx8ICcnIClcblx0XHRcdFx0XHQudG9Mb3dlckNhc2UoKVxuXHRcdFx0XHRcdC5yZXBsYWNlKCAvIC9nLCAnJyApXG5cdFx0XHRcdClcblx0XHRcdCkgPiAtMTtcblx0XHR9ICk7XG5cdH1cblxufVxuIl19