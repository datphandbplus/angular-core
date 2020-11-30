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
        this.fieldKey = 'id';
        this.fieldName = 'name';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0by1jb21wbGV0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNvcmUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9hdXRvLWNvbXBsZXRlL2F1dG8tY29tcGxldGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ04sU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQ3hCLE1BQU0sRUFBRSxZQUFZLEVBQUUsaUJBQWlCLEVBQ3ZDLGFBQWEsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUNsQyxNQUFNLEVBQUUsY0FBYyxFQUN0QixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRCxPQUFPLENBQUMsTUFBTSxZQUFZLENBQUM7QUFFM0IsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFFcEUsTUFBTSxDQUFDLE1BQU0sNkJBQTZCLEdBQXdCLElBQUksY0FBYyxDQUFPLGdCQUFnQixDQUFFLENBQUM7QUFPOUcsSUFBYSxxQkFBcUIsR0FBbEMsTUFBYSxxQkFBcUI7SUFxQmpDOzs7O01BSUU7SUFDRixZQUMrRCxjQUFtQixFQUMxRSxLQUF3QjtRQUQrQixtQkFBYyxHQUFkLGNBQWMsQ0FBSztRQUMxRSxVQUFLLEdBQUwsS0FBSyxDQUFtQjtRQWxCaEIsZUFBVSxHQUFXLENBQUUsSUFBSSxDQUFDLGNBQWMsSUFBSSxFQUFFLENBQUUsQ0FBQyxVQUFVLElBQUksUUFBUSxDQUFDO1FBQzFFLGVBQVUsR0FBVyxDQUFFLElBQUksQ0FBQyxjQUFjLElBQUksRUFBRSxDQUFFLENBQUMsVUFBVSxJQUFJLFNBQVMsQ0FBQztRQUMzRSxhQUFRLEdBQVcsSUFBSSxDQUFDO1FBQ3hCLGNBQVMsR0FBVyxNQUFNLENBQUM7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QUFFLEtBQUssRUFBRSw2QkFBNkIsRUFBRTtLQUNoRCxDQUFDO0lBNEJDLG1CQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsbUJBQUEsTUFBTSxDQUFFLDZCQUE2QixDQUFFLENBQUE7cURBQ3RDLGlCQUFpQjtHQTVCcEIscUJBQXFCLENBMEZqQztTQTFGWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRDb21wb25lbnQsIElucHV0LCBPbkluaXQsXG5cdE91dHB1dCwgRXZlbnRFbWl0dGVyLCBDaGFuZ2VEZXRlY3RvclJlZixcblx0U2ltcGxlQ2hhbmdlcywgT25DaGFuZ2VzLCBPcHRpb25hbCxcblx0SW5qZWN0LCBJbmplY3Rpb25Ub2tlblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBzdGFydFdpdGggfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgXyBmcm9tICd1bmRlcnNjb3JlJztcblxuaW1wb3J0IHsgVXRpbGl0aWVzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3V0aWxpdGllcy5zZXJ2aWNlJztcblxuZXhwb3J0IGNvbnN0IEFVVE9fQ09NUExFVEVfREVGQVVMVF9PUFRJT05TOiBJbmplY3Rpb25Ub2tlbjxhbnk+ID0gbmV3IEluamVjdGlvblRva2VuPGFueT4oICdkZWZhdWx0T3B0aW9ucycgKTtcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yXHQ6ICdhdXRvLWNvbXBsZXRlJyxcblx0dGVtcGxhdGVVcmxcdDogJy4vYXV0by1jb21wbGV0ZS5wdWcnLFxuXHRob3N0XHRcdDogeyBjbGFzczogJ2ZsZXgtbm9zaHJpbmsgbGF5b3V0LWNvbHVtbicgfSxcbn0pXG5leHBvcnQgY2xhc3MgQXV0b0NvbXBsZXRlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuXG5cdEBJbnB1dCgpIHB1YmxpYyBsYWJlbDogc3RyaW5nO1xuXHRASW5wdXQoKSBwdWJsaWMgcGxhY2Vob2xkZXI6IHN0cmluZztcblx0QElucHV0KCkgcHVibGljIG5nTW9kZWw6IGFueTtcblx0QElucHV0KCkgcHVibGljIHJlcXVpcmVkOiBib29sZWFuO1xuXHRASW5wdXQoKSBwdWJsaWMgZGlzYWJsZWQ6IGJvb2xlYW47XG5cdEBJbnB1dCgpIHB1YmxpYyBkaXNhYmxlQ29udHJvbDogYm9vbGVhbjtcblx0QElucHV0KCkgcHVibGljIHJlYWRvbmx5OiBib29sZWFuO1xuXHRASW5wdXQoKSBwdWJsaWMgZW1wdHlMYWJlbDogc3RyaW5nO1xuXHRASW5wdXQoKSBwdWJsaWMgZmxvYXRMYWJlbDogc3RyaW5nID0gKCB0aGlzLmRlZmF1bHRPcHRpb25zIHx8IHt9ICkuZmxvYXRMYWJlbCB8fCAnYWx3YXlzJztcblx0QElucHV0KCkgcHVibGljIGFwcGVhcmFuY2U6IHN0cmluZyA9ICggdGhpcy5kZWZhdWx0T3B0aW9ucyB8fCB7fSApLmFwcGVhcmFuY2UgfHwgJ291dGxpbmUnO1xuXHRASW5wdXQoKSBwdWJsaWMgZmllbGRLZXk6IHN0cmluZyA9ICdpZCc7XG5cdEBJbnB1dCgpIHB1YmxpYyBmaWVsZE5hbWU6IHN0cmluZyA9ICduYW1lJztcblx0QElucHV0KCkgcHVibGljIGRhdGE6IEFycmF5PGFueT4gPSBbXTtcblx0QElucHV0KCkgcHVibGljIGZvcm1Db250cm9sOiBGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgpO1xuXG5cdEBPdXRwdXQoKSBwdWJsaWMgbmdNb2RlbENoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuXHRwdWJsaWMgZmlsdGVyZWREYXRhOiBPYnNlcnZhYmxlPGFueT47XG5cblx0LyoqXG5cdCogQGNvbnN0cnVjdG9yXG5cdCogQHBhcmFtIHthbnl9IGRlZmF1bHRPcHRpb25zXG5cdCogQHBhcmFtIHtDaGFuZ2VEZXRlY3RvclJlZn0gY2RSZWZcblx0Ki9cblx0Y29uc3RydWN0b3IoXG5cdFx0QE9wdGlvbmFsKCkgQEluamVjdCggQVVUT19DT01QTEVURV9ERUZBVUxUX09QVElPTlMgKSByZWFkb25seSBkZWZhdWx0T3B0aW9uczogYW55LFxuXHRcdHB1YmxpYyBjZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWZcblx0KSB7fVxuXG5cdC8qKlxuXHQqIEBjb25zdHJ1Y3RvclxuXHQqL1xuXHRwdWJsaWMgbmdPbkluaXQoKSB7XG5cdFx0dGhpcy5wcmVwYXJlRGF0YSgpO1xuXHR9XG5cblx0LyoqXG5cdCogQGNvbnN0cnVjdG9yXG5cdCogQHBhcmFtIHtTaW1wbGVDaGFuZ2VzfSBjaGFuZ2VzXG5cdCovXG5cdHB1YmxpYyBuZ09uQ2hhbmdlcyggY2hhbmdlczogU2ltcGxlQ2hhbmdlcyApIHtcblx0XHRjaGFuZ2VzLmRhdGEgJiYgdGhpcy5wcmVwYXJlRGF0YSgpO1xuXHR9XG5cblx0LyoqXG5cdCogUHJlcGFyZSBkYXRhXG5cdCogQHByaXZhdGVcblx0KiBAcmV0dXJuIHt2b2lkfVxuXHQqL1xuXHRwcml2YXRlIHByZXBhcmVEYXRhKCkge1xuXHRcdGlmICggIV8uZmluZFdoZXJlKCB0aGlzLmRhdGEsIHsgaWQ6ICcnIH0gKSApIHtcblx0XHRcdHRoaXMuZGF0YS51bnNoaWZ0KCB7IGlkOiAnJywgbmFtZTogdGhpcy5lbXB0eUxhYmVsIH0gKTtcblx0XHR9XG5cblx0XHR0aGlzLmZpbHRlcmVkRGF0YSA9IHRoaXMuZm9ybUNvbnRyb2wudmFsdWVDaGFuZ2VzXG5cdFx0LnBpcGUoXG5cdFx0XHRzdGFydFdpdGgoICcnICksXG5cdFx0XHRtYXAoICggdmFsdWU6IHN0cmluZyApID0+IHRoaXMuZmlsdGVyKCB2YWx1ZSApIClcblx0XHQpO1xuXG5cdFx0dGhpcy5jZFJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdH1cblxuXHQvKipcblx0KiBGaWx0ZXJcblx0KiBAcHJpdmF0ZVxuXHQqIEBwYXJhbSB7c3RyaW5nfSBxdWVyeVxuXHQqIEByZXR1cm4ge0FycmF5fVxuXHQqL1xuXHRwcml2YXRlIGZpbHRlciggcXVlcnk6IHN0cmluZyApOiBBcnJheTxhbnk+IHtcblx0XHRyZXR1cm4gdGhpcy5kYXRhLmZpbHRlciggKCBpdGVtOiBhbnkgKSA9PiB7XG5cdFx0XHRjb25zdCBmaWx0ZXJWYWx1ZTogc3RyaW5nID0gdGhpcy5maWVsZE5hbWUgPyBpdGVtWyB0aGlzLmZpZWxkTmFtZSBdIDogaXRlbTtcblxuXHRcdFx0cmV0dXJuIFV0aWxpdGllc1NlcnZpY2Uuc3RyaXBWaWV0bmFtZXNlU3ltYm9sKFxuXHRcdFx0XHRmaWx0ZXJWYWx1ZVxuXHRcdFx0XHQudG9Mb3dlckNhc2UoKVxuXHRcdFx0XHQucmVwbGFjZSggLyAvZywgJycgKVxuXHRcdFx0KVxuXHRcdFx0LmluZGV4T2YoXG5cdFx0XHRcdFV0aWxpdGllc1NlcnZpY2Uuc3RyaXBWaWV0bmFtZXNlU3ltYm9sKFxuXHRcdFx0XHRcdCggcXVlcnkgfHwgJycgKVxuXHRcdFx0XHRcdC50b0xvd2VyQ2FzZSgpXG5cdFx0XHRcdFx0LnJlcGxhY2UoIC8gL2csICcnIClcblx0XHRcdFx0KVxuXHRcdFx0KSA+IC0xO1xuXHRcdH0gKTtcblx0fVxuXG59XG4iXX0=