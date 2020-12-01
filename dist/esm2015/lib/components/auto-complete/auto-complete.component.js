import * as tslib_1 from "tslib";
import { Component, Input, OnInit, Output, EventEmitter, ChangeDetectorRef, SimpleChanges, OnChanges, Optional, Inject, InjectionToken } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import _ from 'underscore';
import { UtilitiesService } from '../../services/utilities.service';
export const AUTO_COMPLETE_DEFAULT_OPTIONS = new InjectionToken('defaultOptions');
let AutoCompleteComponent = class AutoCompleteComponent {
    /**
    * @constructor
    * @param {any} defaultOptions
    * @param {ChangeDetectorRef} cdRef
    */
    constructor(defaultOptions, cdRef) {
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
    ngOnInit() {
        this.prepareData();
    }
    /**
    * @constructor
    * @param {SimpleChanges} changes
    */
    ngOnChanges(changes) {
        changes.data && this.prepareData();
    }
    /**
    * Prepare data
    * @private
    * @return {void}
    */
    prepareData() {
        if (!_.findWhere(this.data, { id: '' })) {
            this.data.unshift({ id: '', name: this.emptyLabel });
        }
        this.filteredData = this.formControl.valueChanges
            .pipe(startWith(''), map((value) => this.filter(value)));
        this.cdRef.detectChanges();
    }
    /**
    * Filter
    * @private
    * @param {string} query
    * @return {Array}
    */
    filter(query) {
        return this.data.filter((item) => {
            const filterValue = this.fieldName ? item[this.fieldName] : item;
            return UtilitiesService.stripVietnameseSymbol(filterValue
                .toLowerCase()
                .replace(/ /g, ''))
                .indexOf(UtilitiesService.stripVietnameseSymbol((query || '')
                .toLowerCase()
                .replace(/ /g, ''))) > -1;
        });
    }
};
AutoCompleteComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [AUTO_COMPLETE_DEFAULT_OPTIONS,] }] },
    { type: ChangeDetectorRef }
];
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
export { AutoCompleteComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0by1jb21wbGV0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNvcmUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9hdXRvLWNvbXBsZXRlL2F1dG8tY29tcGxldGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ04sU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQ3hCLE1BQU0sRUFBRSxZQUFZLEVBQUUsaUJBQWlCLEVBQ3ZDLGFBQWEsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUNsQyxNQUFNLEVBQUUsY0FBYyxFQUN0QixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRCxPQUFPLENBQUMsTUFBTSxZQUFZLENBQUM7QUFFM0IsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFFcEUsTUFBTSxDQUFDLE1BQU0sNkJBQTZCLEdBQXdCLElBQUksY0FBYyxDQUFPLGdCQUFnQixDQUFFLENBQUM7QUFPOUcsSUFBYSxxQkFBcUIsR0FBbEMsTUFBYSxxQkFBcUI7SUFxQmpDOzs7O01BSUU7SUFDRixZQUMrRCxjQUFtQixFQUMxRSxLQUF3QjtRQUQrQixtQkFBYyxHQUFkLGNBQWMsQ0FBSztRQUMxRSxVQUFLLEdBQUwsS0FBSyxDQUFtQjtRQWxCaEIsZUFBVSxHQUFXLENBQUUsSUFBSSxDQUFDLGNBQWMsSUFBSSxFQUFFLENBQUUsQ0FBQyxVQUFVLElBQUksUUFBUSxDQUFDO1FBQzFFLGVBQVUsR0FBVyxDQUFFLElBQUksQ0FBQyxjQUFjLElBQUksRUFBRSxDQUFFLENBQUMsVUFBVSxJQUFJLFNBQVMsQ0FBQztRQUMzRSxhQUFRLEdBQVcsQ0FBRSxJQUFJLENBQUMsY0FBYyxJQUFJLEVBQUUsQ0FBRSxD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c0NBQXVCLFlBQVk7NERBQWdDO0FBakJoRSxxQkFBcUI7SUFMakMsU0FBUyxDQUFDO1FBQ1YsUUFBUSxFQUFHLGVBQWU7UUFDMUIsdXlCQUFtQztRQUNuQyxJQUFJLEVBQUksRUFBRSxLQUFLLEVBQUUsNkJBQTZCLEVBQUU7S0FDaEQsQ0FBQztJQTRCQyxtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLE1BQU0sQ0FBRSw2QkFBNkIsQ0FBRSxDQUFBO3FEQUN0QyxpQkFBaUI7R0E1QnBCLHFCQUFxQixDQTBGakM7U0ExRlkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0Q29tcG9uZW50LCBJbnB1dCwgT25Jbml0LFxuXHRPdXRwdXQsIEV2ZW50RW1pdHRlciwgQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFNpbXBsZUNoYW5nZXMsIE9uQ2hhbmdlcywgT3B0aW9uYWwsXG5cdEluamVjdCwgSW5qZWN0aW9uVG9rZW5cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgc3RhcnRXaXRoIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IF8gZnJvbSAndW5kZXJzY29yZSc7XG5cbmltcG9ydCB7IFV0aWxpdGllc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy91dGlsaXRpZXMuc2VydmljZSc7XG5cbmV4cG9ydCBjb25zdCBBVVRPX0NPTVBMRVRFX0RFRkFVTFRfT1BUSU9OUzogSW5qZWN0aW9uVG9rZW48YW55PiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxhbnk+KCAnZGVmYXVsdE9wdGlvbnMnICk7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3Rvclx0OiAnYXV0by1jb21wbGV0ZScsXG5cdHRlbXBsYXRlVXJsXHQ6ICcuL2F1dG8tY29tcGxldGUucHVnJyxcblx0aG9zdFx0XHQ6IHsgY2xhc3M6ICdmbGV4LW5vc2hyaW5rIGxheW91dC1jb2x1bW4nIH0sXG59KVxuZXhwb3J0IGNsYXNzIEF1dG9Db21wbGV0ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcblxuXHRASW5wdXQoKSBwdWJsaWMgbGFiZWw6IHN0cmluZztcblx0QElucHV0KCkgcHVibGljIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG5cdEBJbnB1dCgpIHB1YmxpYyBuZ01vZGVsOiBhbnk7XG5cdEBJbnB1dCgpIHB1YmxpYyByZXF1aXJlZDogYm9vbGVhbjtcblx0QElucHV0KCkgcHVibGljIGRpc2FibGVkOiBib29sZWFuO1xuXHRASW5wdXQoKSBwdWJsaWMgZGlzYWJsZUNvbnRyb2w6IGJvb2xlYW47XG5cdEBJbnB1dCgpIHB1YmxpYyByZWFkb25seTogYm9vbGVhbjtcblx0QElucHV0KCkgcHVibGljIGVtcHR5TGFiZWw6IHN0cmluZztcblx0QElucHV0KCkgcHVibGljIGZsb2F0TGFiZWw6IHN0cmluZyA9ICggdGhpcy5kZWZhdWx0T3B0aW9ucyB8fCB7fSApLmZsb2F0TGFiZWwgfHwgJ2Fsd2F5cyc7XG5cdEBJbnB1dCgpIHB1YmxpYyBhcHBlYXJhbmNlOiBzdHJpbmcgPSAoIHRoaXMuZGVmYXVsdE9wdGlvbnMgfHwge30gKS5hcHBlYXJhbmNlIHx8ICdvdXRsaW5lJztcblx0QElucHV0KCkgcHVibGljIGZpZWxkS2V5OiBzdHJpbmcgPSAoIHRoaXMuZGVmYXVsdE9wdGlvbnMgfHwge30gKS5maWVsZEtleSB8fCAnaWQnO1xuXHRASW5wdXQoKSBwdWJsaWMgZmllbGROYW1lOiBzdHJpbmcgPSAoIHRoaXMuZGVmYXVsdE9wdGlvbnMgfHwge30gKS5maWVsZE5hbWUgfHwgJ25hbWUnO1xuXHRASW5wdXQoKSBwdWJsaWMgZGF0YTogQXJyYXk8YW55PiA9IFtdO1xuXHRASW5wdXQoKSBwdWJsaWMgZm9ybUNvbnRyb2w6IEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKCk7XG5cblx0QE91dHB1dCgpIHB1YmxpYyBuZ01vZGVsQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG5cdHB1YmxpYyBmaWx0ZXJlZERhdGE6IE9ic2VydmFibGU8YW55PjtcblxuXHQvKipcblx0KiBAY29uc3RydWN0b3Jcblx0KiBAcGFyYW0ge2FueX0gZGVmYXVsdE9wdGlvbnNcblx0KiBAcGFyYW0ge0NoYW5nZURldGVjdG9yUmVmfSBjZFJlZlxuXHQqL1xuXHRjb25zdHJ1Y3Rvcihcblx0XHRAT3B0aW9uYWwoKSBASW5qZWN0KCBBVVRPX0NPTVBMRVRFX0RFRkFVTFRfT1BUSU9OUyApIHJlYWRvbmx5IGRlZmF1bHRPcHRpb25zOiBhbnksXG5cdFx0cHVibGljIGNkUmVmOiBDaGFuZ2VEZXRlY3RvclJlZlxuXHQpIHt9XG5cblx0LyoqXG5cdCogQGNvbnN0cnVjdG9yXG5cdCovXG5cdHB1YmxpYyBuZ09uSW5pdCgpIHtcblx0XHR0aGlzLnByZXBhcmVEYXRhKCk7XG5cdH1cblxuXHQvKipcblx0KiBAY29uc3RydWN0b3Jcblx0KiBAcGFyYW0ge1NpbXBsZUNoYW5nZXN9IGNoYW5nZXNcblx0Ki9cblx0cHVibGljIG5nT25DaGFuZ2VzKCBjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzICkge1xuXHRcdGNoYW5nZXMuZGF0YSAmJiB0aGlzLnByZXBhcmVEYXRhKCk7XG5cdH1cblxuXHQvKipcblx0KiBQcmVwYXJlIGRhdGFcblx0KiBAcHJpdmF0ZVxuXHQqIEByZXR1cm4ge3ZvaWR9XG5cdCovXG5cdHByaXZhdGUgcHJlcGFyZURhdGEoKSB7XG5cdFx0aWYgKCAhXy5maW5kV2hlcmUoIHRoaXMuZGF0YSwgeyBpZDogJycgfSApICkge1xuXHRcdFx0dGhpcy5kYXRhLnVuc2hpZnQoIHsgaWQ6ICcnLCBuYW1lOiB0aGlzLmVtcHR5TGFiZWwgfSApO1xuXHRcdH1cblxuXHRcdHRoaXMuZmlsdGVyZWREYXRhID0gdGhpcy5mb3JtQ29udHJvbC52YWx1ZUNoYW5nZXNcblx0XHQucGlwZShcblx0XHRcdHN0YXJ0V2l0aCggJycgKSxcblx0XHRcdG1hcCggKCB2YWx1ZTogc3RyaW5nICkgPT4gdGhpcy5maWx0ZXIoIHZhbHVlICkgKVxuXHRcdCk7XG5cblx0XHR0aGlzLmNkUmVmLmRldGVjdENoYW5nZXMoKTtcblx0fVxuXG5cdC8qKlxuXHQqIEZpbHRlclxuXHQqIEBwcml2YXRlXG5cdCogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5XG5cdCogQHJldHVybiB7QXJyYXl9XG5cdCovXG5cdHByaXZhdGUgZmlsdGVyKCBxdWVyeTogc3RyaW5nICk6IEFycmF5PGFueT4ge1xuXHRcdHJldHVybiB0aGlzLmRhdGEuZmlsdGVyKCAoIGl0ZW06IGFueSApID0+IHtcblx0XHRcdGNvbnN0IGZpbHRlclZhbHVlOiBzdHJpbmcgPSB0aGlzLmZpZWxkTmFtZSA/IGl0ZW1bIHRoaXMuZmllbGROYW1lIF0gOiBpdGVtO1xuXG5cdFx0XHRyZXR1cm4gVXRpbGl0aWVzU2VydmljZS5zdHJpcFZpZXRuYW1lc2VTeW1ib2woXG5cdFx0XHRcdGZpbHRlclZhbHVlXG5cdFx0XHRcdC50b0xvd2VyQ2FzZSgpXG5cdFx0XHRcdC5yZXBsYWNlKCAvIC9nLCAnJyApXG5cdFx0XHQpXG5cdFx0XHQuaW5kZXhPZihcblx0XHRcdFx0VXRpbGl0aWVzU2VydmljZS5zdHJpcFZpZXRuYW1lc2VTeW1ib2woXG5cdFx0XHRcdFx0KCBxdWVyeSB8fCAnJyApXG5cdFx0XHRcdFx0LnRvTG93ZXJDYXNlKClcblx0XHRcdFx0XHQucmVwbGFjZSggLyAvZywgJycgKVxuXHRcdFx0XHQpXG5cdFx0XHQpID4gLTE7XG5cdFx0fSApO1xuXHR9XG5cbn1cbiJdfQ==