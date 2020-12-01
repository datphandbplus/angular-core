import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, Optional, InjectionToken, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LabelType } from 'ng5-slider';
import moment from 'moment-timezone';
import _ from 'underscore';
import { NumberService } from '../../services/number.service';
export const FILTER_BOX_DEFAULT_OPTIONS = new InjectionToken('defaultOptions');
let FilterBoxComponent = class FilterBoxComponent {
    /**
    * @constructor
    * @param {any} defaultOptions
    * @param {TranslateService} translateService
    */
    constructor(defaultOptions, translateService) {
        this.defaultOptions = defaultOptions;
        this.translateService = translateService;
        this.startView = (this.defaultOptions || {}).startView || 'month';
        this.fieldKey = (this.defaultOptions || {}).fieldKey || 'id';
        this.fieldParentKey = (this.defaultOptions || {}).fieldParentKey || 'parent_id';
        this.fieldName = (this.defaultOptions || {}).fieldName || 'name';
        this.type = (this.defaultOptions || {}).type || 'query';
        this.min = (this.defaultOptions || {}).min || 0;
        this.max = (this.defaultOptions || {}).max || 1000;
        this.applyFilter = new EventEmitter();
        this.filterChange = new EventEmitter();
        this.slideValue = 0;
        this.slideHighValue = 1000;
        this.slideOptions = {
            floor: 0, ceil: 1000,
            translate: (value, label) => {
                switch (label) {
                    case LabelType.Low:
                        return '<b>'
                            + this.translateService.instant('GENERAL.LABELS.MIN')
                            + '</b> '
                            + NumberService.kFormatter(value);
                    case LabelType.High:
                        return '<b>'
                            + this.translateService.instant('GENERAL.LABELS.MAX')
                            + '</b> '
                            + NumberService.kFormatter(value);
                    default:
                        return NumberService.kFormatter(value);
                }
            },
        };
    }
    /**
    * @constructor
    */
    ngAfterContentInit() {
        if (!this.emptyLabel) {
            this.emptyLabel = this.type === 'datepicker'
                ? this.translateService.instant('GENERAL.LABELS.ALL_DATES')
                : (!this.multiple ? this.translateService.instant('GENERAL.LABELS.ALL_ITEMS') : '');
        }
        if (!this.placeholder) {
            this.placeholder = this.type === 'query'
                ? this.translateService.instant('GENERAL.PLACEHOLDERS.SEARCH')
                : this.translateService.instant('GENERAL.PLACEHOLDERS.CHOOSE');
        }
    }
    /**
    * @constructor
    * @param {SimpleChanges} changes
    */
    ngOnChanges(changes) {
        if (this.type === 'range') {
            if (this.filter
                && !_.has(changes, 'min')
                && !_.has(changes, 'max')) {
                return;
            }
            this.slideValue = Math.ceil(this.min) || 0;
            this.slideHighValue = Math.ceil(this.max) || 1000;
            this.slideOptions = Object.assign({}, this.slideOptions, { floor: this.slideValue, ceil: this.slideHighValue });
            this.filter = { min: this.slideValue, max: this.slideHighValue };
        }
    }
    /**
    * On month of Datepicker change
    * @param {any} picker
    * @param {any} event
    * @return {void}
    */
    onMonthChange(picker, event) {
        if (!this.onlyMonth)
            return;
        this.filter = event;
        this.filterChange.emit(this.filter);
        this.applyFilter.emit(event);
        picker.close();
    }
    /**
    * On year of Datepicker change
    * @param {any} picker
    * @param {any} event
    * @return {void}
    */
    onYearChange(picker, event) {
        if (!this.onlyYear)
            return;
        this.filter = event;
        this.filterChange.emit(this.filter);
        this.applyFilter.emit(event);
        picker.close();
    }
    /**
    * On slide value change
    * @param {any} event
    * @return {void}
    */
    onSlideValueChange(event) {
        this.filter = Object.assign({}, this.filter, { min: event });
        this.filterChange.emit(this.filter);
    }
    /**
    * On slide high value change
    * @param {any} event
    * @return {void}
    */
    onSlideHighValueChange(event) {
        this.filter = Object.assign({}, this.filter, { max: event });
        this.filterChange.emit(this.filter);
    }
    /**
    * Toggle slider menu
    * @return {void}
    */
    toggleSliderMenu() {
        setTimeout(() => this.menuOpened = !this.menuOpened, 100);
    }
    /**
    * Format filter
    * @return {string}
    */
    get format() {
        if (!this.filter)
            return;
        switch (this.type) {
            case 'datepicker':
                if (this.onlyMonth)
                    return moment(this.filter).format('MMMM YYYY');
                if (this.onlyYear)
                    return moment(this.filter).format('YYYY');
                if (!this.rangeMode)
                    return moment(this.filter).format('DD/MM/YYYY');
                return moment(this.filter.begin).format('DD/MM/YYYY')
                    + ' - '
                    + moment(this.filter.end).format('DD/MM/YYYY');
            case 'range':
                return this.translateService.instant('GENERAL.LABELS.RANGE')
                    + ': '
                    + NumberService.addCommas(this.filter.min)
                    + ' - '
                    + NumberService.addCommas(this.filter.max);
        }
    }
};
FilterBoxComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [FILTER_BOX_DEFAULT_OPTIONS,] }] },
    { type: TranslateService }
];
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], FilterBoxComponent.prototype, "fieldSubName", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], FilterBoxComponent.prototype, "fieldImage", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], FilterBoxComponent.prototype, "emptyLabel", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], FilterBoxComponent.prototype, "placeholder", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], FilterBoxComponent.prototype, "emptyValue", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], FilterBoxComponent.prototype, "data", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], FilterBoxComponent.prototype, "filter", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], FilterBoxComponent.prototype, "minDate", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], FilterBoxComponent.prototype, "maxDate", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], FilterBoxComponent.prototype, "translated", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], FilterBoxComponent.prototype, "disabled", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], FilterBoxComponent.prototype, "multiple", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], FilterBoxComponent.prototype, "rangeMode", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], FilterBoxComponent.prototype, "onlyYear", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], FilterBoxComponent.prototype, "onlyMonth", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], FilterBoxComponent.prototype, "startView", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], FilterBoxComponent.prototype, "fieldKey", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], FilterBoxComponent.prototype, "fieldParentKey", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], FilterBoxComponent.prototype, "fieldName", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], FilterBoxComponent.prototype, "type", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number)
], FilterBoxComponent.prototype, "min", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number)
], FilterBoxComponent.prototype, "max", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], FilterBoxComponent.prototype, "applyFilter", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], FilterBoxComponent.prototype, "filterChange", void 0);
FilterBoxComponent = tslib_1.__decorate([
    Component({
        selector: 'filter-box',
        template: "<ng-template [ngIf]=\"type === &quot;query&quot;\"><mat-form-field appearance=\"legacy\" floatLabel=\"never\"><input matInput [placeholder]=\"placeholder\" [disabled]=\"disabled\" [(ngModel)]=\"filter\" (ngModelChange)=\"filterChange?.emit( filter ); applyFilter?.emit( $event )\" (keydown.esc)=\"filter = &quot;&quot;; filterChange?.emit( filter ); applyFilter?.emit( $event );\"><span matPrefix><i class=\"fa fa-search mr-10\"></i></span><div class=\"cursor\" matSuffix *ngIf=\"filter\" (click)=\"filter = &quot;&quot;; filterChange?.emit( filter ); applyFilter?.emit( $event );\"><i class=\"fa fa-times-circle text-warn\"></i></div></mat-form-field></ng-template><ng-template [ngIf]=\"type === &quot;filter&quot;\"><select-box appearance=\"legacy\" floatLabel=\"never\" [fieldKey]=\"fieldKey\" [fieldParentKey]=\"fieldParentKey\" [fieldName]=\"fieldName\" [fieldSubName]=\"fieldSubName\" [fieldImage]=\"fieldImage\" [emptyLabel]=\"emptyLabel\" [emptyValue]=\"emptyValue\" [data]=\"data\" [multiple]=\"multiple\" [disabled]=\"disabled\" [placeholder]=\"placeholder\" [translated]=\"translated\" [(ngModel)]=\"filter\" (ngModelChange)=\"filterChange?.emit( filter ); applyFilter?.emit( $event );\" ngDefaultControl></select-box></ng-template><ng-template [ngIf]=\"type === &quot;datepicker&quot;\"><mat-form-field class=\"filter-box__datepicker\" floatLabel=\"never\" (click)=\"__picker?.open()\"><mat-label>{{ format || emptyLabel }}</mat-label><input matInput [(ngModel)]=\"filter\" (dateChange)=\"filterChange?.emit( filter ); applyFilter?.emit( $event );\" [satDatepicker]=\"__picker\" [min]=\"minDate\" [max]=\"maxDate\" ngDefaultControl readonly><mat-datepicker-toggle matSuffix [for]=\"__picker\"></mat-datepicker-toggle><sat-datepicker #__picker [startView]=\"startView\" [disabled]=\"disabled\" [rangeMode]=\"rangeMode\" (monthSelected)=\"onMonthChange( __picker, $event )\" (yearSelected)=\"onYearChange( __picker, $event )\"></sat-datepicker></mat-form-field></ng-template><ng-template [ngIf]=\"type === &quot;range&quot;\"><div class=\"cursor\" [matMenuTriggerFor]=\"sliderMenu\" (menuOpened)=\"toggleSliderMenu()\" (menuClosed)=\"toggleSliderMenu()\"><mat-form-field appearance=\"legacy\" floatLabel=\"never\"><input matInput [value]=\"format || emptyLabel\" readonly><span matSuffix><div class=\"mat-select-arrow-wrapper\" style=\"top: -1px\"><div class=\"mat-select-arrow\"></div></div></span></mat-form-field></div><mat-menu class=\"filter-box__slider-menu\" #sliderMenu=\"matMenu\"><ng5-slider *ngIf=\"menuOpened\" (click)=\"$event?.stopPropagation()\" [(value)]=\"slideValue\" [(highValue)]=\"slideHighValue\" [options]=\"slideOptions\" (valueChange)=\"onSlideValueChange( $event ); applyFilter?.emit( $event );\" (highValueChange)=\"onSlideHighValueChange( $event ); applyFilter?.emit( $event );\"></ng5-slider></mat-menu></ng-template>",
        host: { class: 'filter-box' }
    }),
    tslib_1.__param(0, Optional()), tslib_1.__param(0, Inject(FILTER_BOX_DEFAULT_OPTIONS)),
    tslib_1.__metadata("design:paramtypes", [Object, TranslateService])
], FilterBoxComponent);
export { FilterBoxComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLWJveC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNvcmUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9maWx0ZXItYm94L2ZpbHRlci1ib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ04sU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQ3hCLFlBQVksRUFDRCxRQUFRLEVBQ25CLGNBQWMsRUFBRSxNQUFNLEVBQ3RCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZELE9BQU8sRUFBVyxTQUFTLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDaEQsT0FBTyxNQUFNLE1BQU0saUJBQWlCLENBQUM7QUFDckMsT0FBTyxDQUFDLE1BQU0sWUFBWSxDQUFDO0FBRTNCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUU5RCxNQUFNLENBQUMsTUFBTSwwQkFBMEIsR0FBd0IsSUFBSSxjQUFjLENBQU8sZ0JBQWdCLENBQUUsQ0FBQztBQU8zRyxJQUFhLGtCQUFrQixHQUEvQixNQUFhLGtCQUFrQjtJQW1EOUI7Ozs7TUFJRTtJQUNGLFlBQzRELGNBQW1CLEVBQ3ZFLGdCQUFrQztRQURrQixtQkFBYyxHQUFkLGNBQWMsQ0FBSztRQUN2RSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBekMxQixjQUFTLEdBQVcsQ0FBRSxJQUFJLENBQUMsY0FBYyxJQUFJLEVBQUUsQ0FBRSxDQUFDLFNBQVMsSUFBSSxPQUFPLENBQUM7UUFDdkUsYUFBUSxHQUFXLENBQUUsSUFBSSxDQUFDLGNBQWMsSUFBSSxFQUFFLENBQUUsQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDO1FBQ2xFLG1CQUFjLEdBQVcsQ0FBRSxJQUFJLENBQUMsY0FBYyxJQUFJLEVBQUUsQ0FBRSxDQUFDLGNBQWMsSUFBSSxXQUFXLENBQUM7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RUFBRTs7MERBQTZGO0FBQzVGO0lBQVIsS0FBSyxFQUFFOztxREFBOEU7QUFDN0U7SUFBUixLQUFLLEVBQUU7O2dEQUFxRTtBQUNwRTtJQUFSLEtBQUssRUFBRTs7K0NBQTZEO0FBQzVEO0lBQVIsS0FBSyxFQUFFOzsrQ0FBZ0U7QUFFOUQ7SUFBVCxNQUFNLEVBQUU7c0NBQXFCLFlBQVk7dURBQWdDO0FBQ2hFO0lBQVQsTUFBTSxFQUFFO3NDQUFzQixZQUFZO3dEQUFnQztBQTFCL0Qsa0JBQWtCO0lBTDlCLFNBQVMsQ0FBQztRQUNWLFFBQVEsRUFBRyxZQUFZO1FBQ3ZCLG96RkFBZ0M7UUFDaEMsSUFBSSxFQUFJLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRTtLQUMvQixDQUFDO0lBMERDLG1CQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsbUJBQUEsTUFBTSxDQUFFLDBCQUEwQixDQUFFLENBQUE7cURBQ3hCLGdCQUFnQjtHQTFEOUIsa0JBQWtCLENBK0w5QjtTQS9MWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRDb21wb25lbnQsIElucHV0LCBPdXRwdXQsXG5cdEV2ZW50RW1pdHRlciwgU2ltcGxlQ2hhbmdlcywgQWZ0ZXJDb250ZW50SW5pdCxcblx0T25DaGFuZ2VzLCBPcHRpb25hbCxcblx0SW5qZWN0aW9uVG9rZW4sIEluamVjdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcbmltcG9ydCB7IE9wdGlvbnMsIExhYmVsVHlwZSB9IGZyb20gJ25nNS1zbGlkZXInO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQtdGltZXpvbmUnO1xuaW1wb3J0IF8gZnJvbSAndW5kZXJzY29yZSc7XG5cbmltcG9ydCB7IE51bWJlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9udW1iZXIuc2VydmljZSc7XG5cbmV4cG9ydCBjb25zdCBGSUxURVJfQk9YX0RFRkFVTFRfT1BUSU9OUzogSW5qZWN0aW9uVG9rZW48YW55PiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxhbnk+KCAnZGVmYXVsdE9wdGlvbnMnICk7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3Rvclx0OiAnZmlsdGVyLWJveCcsXG5cdHRlbXBsYXRlVXJsXHQ6ICcuL2ZpbHRlci1ib3gucHVnJyxcblx0aG9zdFx0XHQ6IHsgY2xhc3M6ICdmaWx0ZXItYm94JyB9LFxufSlcbmV4cG9ydCBjbGFzcyBGaWx0ZXJCb3hDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkNoYW5nZXMge1xuXG5cdEBJbnB1dCgpIHB1YmxpYyBmaWVsZFN1Yk5hbWU6IHN0cmluZztcblx0QElucHV0KCkgcHVibGljIGZpZWxkSW1hZ2U6IHN0cmluZztcblx0QElucHV0KCkgcHVibGljIGVtcHR5TGFiZWw6IHN0cmluZztcblx0QElucHV0KCkgcHVibGljIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG5cdEBJbnB1dCgpIHB1YmxpYyBlbXB0eVZhbHVlOiBhbnk7XG5cdEBJbnB1dCgpIHB1YmxpYyBkYXRhOiBhbnk7XG5cdEBJbnB1dCgpIHB1YmxpYyBmaWx0ZXI6IGFueTtcblx0QElucHV0KCkgcHVibGljIG1pbkRhdGU6IGFueTtcblx0QElucHV0KCkgcHVibGljIG1heERhdGU6IGFueTtcblx0QElucHV0KCkgcHVibGljIHRyYW5zbGF0ZWQ6IGJvb2xlYW47XG5cdEBJbnB1dCgpIHB1YmxpYyBkaXNhYmxlZDogYm9vbGVhbjtcblx0QElucHV0KCkgcHVibGljIG11bHRpcGxlOiBib29sZWFuO1xuXHRASW5wdXQoKSBwdWJsaWMgcmFuZ2VNb2RlOiBib29sZWFuO1xuXHRASW5wdXQoKSBwdWJsaWMgb25seVllYXI6IGJvb2xlYW47XG5cdEBJbnB1dCgpIHB1YmxpYyBvbmx5TW9udGg6IGJvb2xlYW47XG5cdEBJbnB1dCgpIHB1YmxpYyBzdGFydFZpZXc6IHN0cmluZyA9ICggdGhpcy5kZWZhdWx0T3B0aW9ucyB8fCB7fSApLnN0YXJ0VmlldyB8fCAnbW9udGgnO1xuXHRASW5wdXQoKSBwdWJsaWMgZmllbGRLZXk6IHN0cmluZyA9ICggdGhpcy5kZWZhdWx0T3B0aW9ucyB8fCB7fSApLmZpZWxkS2V5IHx8ICdpZCc7XG5cdEBJbnB1dCgpIHB1YmxpYyBmaWVsZFBhcmVudEtleTogc3RyaW5nID0gKCB0aGlzLmRlZmF1bHRPcHRpb25zIHx8IHt9ICkuZmllbGRQYXJlbnRLZXkgfHwgJ3BhcmVudF9pZCc7XG5cdEBJbnB1dCgpIHB1YmxpYyBmaWVsZE5hbWU6IHN0cmluZyA9ICggdGhpcy5kZWZhdWx0T3B0aW9ucyB8fCB7fSApLmZpZWxkTmFtZSB8fCAnbmFtZSc7XG5cdEBJbnB1dCgpIHB1YmxpYyB0eXBlOiBzdHJpbmcgPSAoIHRoaXMuZGVmYXVsdE9wdGlvbnMgfHwge30gKS50eXBlIHx8ICdxdWVyeSc7XG5cdEBJbnB1dCgpIHB1YmxpYyBtaW46IG51bWJlciA9ICggdGhpcy5kZWZhdWx0T3B0aW9ucyB8fCB7fSApLm1pbiB8fCAwO1xuXHRASW5wdXQoKSBwdWJsaWMgbWF4OiBudW1iZXIgPSAoIHRoaXMuZGVmYXVsdE9wdGlvbnMgfHwge30gKS5tYXggfHwgMTAwMDtcblxuXHRAT3V0cHV0KCkgcHVibGljIGFwcGx5RmlsdGVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXHRAT3V0cHV0KCkgcHVibGljIGZpbHRlckNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuXHRwdWJsaWMgbWVudU9wZW5lZDogYm9vbGVhbjtcblx0cHVibGljIHNsaWRlVmFsdWU6IG51bWJlciA9IDA7XG5cdHB1YmxpYyBzbGlkZUhpZ2hWYWx1ZTogbnVtYmVyID0gMTAwMDtcblx0cHVibGljIHNsaWRlT3B0aW9uczogT3B0aW9ucyA9IHtcblx0XHRmbG9vcjogMCwgY2VpbDogMTAwMCxcblx0XHR0cmFuc2xhdGU6ICggdmFsdWU6IG51bWJlciwgbGFiZWw6IExhYmVsVHlwZSApOiBzdHJpbmcgPT4ge1xuXHRcdFx0c3dpdGNoICggbGFiZWwgKSB7XG5cdFx0XHRcdGNhc2UgTGFiZWxUeXBlLkxvdzpcblx0XHRcdFx0XHRyZXR1cm4gJzxiPidcblx0XHRcdFx0XHRcdCsgdGhpcy50cmFuc2xhdGVTZXJ2aWNlLmluc3RhbnQoICdHRU5FUkFMLkxBQkVMUy5NSU4nIClcblx0XHRcdFx0XHRcdCsgJzwvYj4gJ1xuXHRcdFx0XHRcdFx0KyBOdW1iZXJTZXJ2aWNlLmtGb3JtYXR0ZXIoIHZhbHVlICk7XG5cdFx0XHRcdGNhc2UgTGFiZWxUeXBlLkhpZ2g6XG5cdFx0XHRcdFx0cmV0dXJuICc8Yj4nXG5cdFx0XHRcdFx0XHQrIHRoaXMudHJhbnNsYXRlU2VydmljZS5pbnN0YW50KCAnR0VORVJBTC5MQUJFTFMuTUFYJyApXG5cdFx0XHRcdFx0XHQrICc8L2I+ICdcblx0XHRcdFx0XHRcdCsgTnVtYmVyU2VydmljZS5rRm9ybWF0dGVyKCB2YWx1ZSApO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdHJldHVybiBOdW1iZXJTZXJ2aWNlLmtGb3JtYXR0ZXIoIHZhbHVlICk7XG5cdFx0XHR9XG5cdFx0fSxcblx0fTtcblxuXHQvKipcblx0KiBAY29uc3RydWN0b3Jcblx0KiBAcGFyYW0ge2FueX0gZGVmYXVsdE9wdGlvbnNcblx0KiBAcGFyYW0ge1RyYW5zbGF0ZVNlcnZpY2V9IHRyYW5zbGF0ZVNlcnZpY2Vcblx0Ki9cblx0Y29uc3RydWN0b3IoXG5cdFx0QE9wdGlvbmFsKCkgQEluamVjdCggRklMVEVSX0JPWF9ERUZBVUxUX09QVElPTlMgKSByZWFkb25seSBkZWZhdWx0T3B0aW9uczogYW55LFxuXHRcdHB1YmxpYyB0cmFuc2xhdGVTZXJ2aWNlOiBUcmFuc2xhdGVTZXJ2aWNlXG5cdCkge31cblxuXHQvKipcblx0KiBAY29uc3RydWN0b3Jcblx0Ki9cblx0cHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcblx0XHRpZiAoICF0aGlzLmVtcHR5TGFiZWwgKSB7XG5cdFx0XHR0aGlzLmVtcHR5TGFiZWwgPSB0aGlzLnR5cGUgPT09ICdkYXRlcGlja2VyJ1xuXHRcdFx0XHQ/IHRoaXMudHJhbnNsYXRlU2VydmljZS5pbnN0YW50KCAnR0VORVJBTC5MQUJFTFMuQUxMX0RBVEVTJyApXG5cdFx0XHRcdDogKCAhdGhpcy5tdWx0aXBsZSA/IHRoaXMudHJhbnNsYXRlU2VydmljZS5pbnN0YW50KCAnR0VORVJBTC5MQUJFTFMuQUxMX0lURU1TJyApIDogJycgKTtcblx0XHR9XG5cblx0XHRpZiAoICF0aGlzLnBsYWNlaG9sZGVyICkge1xuXHRcdFx0dGhpcy5wbGFjZWhvbGRlciA9IHRoaXMudHlwZSA9PT0gJ3F1ZXJ5J1xuXHRcdFx0XHQ/IHRoaXMudHJhbnNsYXRlU2VydmljZS5pbnN0YW50KCAnR0VORVJBTC5QTEFDRUhPTERFUlMuU0VBUkNIJyApXG5cdFx0XHRcdDogdGhpcy50cmFuc2xhdGVTZXJ2aWNlLmluc3RhbnQoICdHRU5FUkFMLlBMQUNFSE9MREVSUy5DSE9PU0UnICk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCogQGNvbnN0cnVjdG9yXG5cdCogQHBhcmFtIHtTaW1wbGVDaGFuZ2VzfSBjaGFuZ2VzXG5cdCovXG5cdHB1YmxpYyBuZ09uQ2hhbmdlcyggY2hhbmdlczogU2ltcGxlQ2hhbmdlcyApIHtcblx0XHRpZiAoIHRoaXMudHlwZSA9PT0gJ3JhbmdlJyApIHtcblx0XHRcdGlmICggdGhpcy5maWx0ZXJcblx0XHRcdFx0JiYgIV8uaGFzKCBjaGFuZ2VzLCAnbWluJyApXG5cdFx0XHRcdCYmICFfLmhhcyggY2hhbmdlcywgJ21heCcgKSApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnNsaWRlVmFsdWUgPSBNYXRoLmNlaWwoIHRoaXMubWluICkgfHwgMDtcblx0XHRcdHRoaXMuc2xpZGVIaWdoVmFsdWUgPSBNYXRoLmNlaWwoIHRoaXMubWF4ICkgfHwgMTAwMDtcblx0XHRcdHRoaXMuc2xpZGVPcHRpb25zID0ge1xuXHRcdFx0XHQuLi50aGlzLnNsaWRlT3B0aW9ucyxcblx0XHRcdFx0Zmxvb3I6IHRoaXMuc2xpZGVWYWx1ZSwgY2VpbDogdGhpcy5zbGlkZUhpZ2hWYWx1ZSxcblx0XHRcdH07XG5cdFx0XHR0aGlzLmZpbHRlciA9IHsgbWluOiB0aGlzLnNsaWRlVmFsdWUsIG1heDogdGhpcy5zbGlkZUhpZ2hWYWx1ZSB9O1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQqIE9uIG1vbnRoIG9mIERhdGVwaWNrZXIgY2hhbmdlXG5cdCogQHBhcmFtIHthbnl9IHBpY2tlclxuXHQqIEBwYXJhbSB7YW55fSBldmVudFxuXHQqIEByZXR1cm4ge3ZvaWR9XG5cdCovXG5cdHB1YmxpYyBvbk1vbnRoQ2hhbmdlKCBwaWNrZXI6IGFueSwgZXZlbnQ6IGFueSApIHtcblx0XHRpZiAoICF0aGlzLm9ubHlNb250aCApIHJldHVybjtcblxuXHRcdHRoaXMuZmlsdGVyID0gZXZlbnQ7XG5cdFx0dGhpcy5maWx0ZXJDaGFuZ2UuZW1pdCggdGhpcy5maWx0ZXIgKTtcblx0XHR0aGlzLmFwcGx5RmlsdGVyLmVtaXQoIGV2ZW50ICk7XG5cdFx0cGlja2VyLmNsb3NlKCk7XG5cdH1cblxuXHQvKipcblx0KiBPbiB5ZWFyIG9mIERhdGVwaWNrZXIgY2hhbmdlXG5cdCogQHBhcmFtIHthbnl9IHBpY2tlclxuXHQqIEBwYXJhbSB7YW55fSBldmVudFxuXHQqIEByZXR1cm4ge3ZvaWR9XG5cdCovXG5cdHB1YmxpYyBvblllYXJDaGFuZ2UoIHBpY2tlcjogYW55LCBldmVudDogYW55ICkge1xuXHRcdGlmICggIXRoaXMub25seVllYXIgKSByZXR1cm47XG5cblx0XHR0aGlzLmZpbHRlciA9IGV2ZW50O1xuXHRcdHRoaXMuZmlsdGVyQ2hhbmdlLmVtaXQoIHRoaXMuZmlsdGVyICk7XG5cdFx0dGhpcy5hcHBseUZpbHRlci5lbWl0KCBldmVudCApO1xuXHRcdHBpY2tlci5jbG9zZSgpO1xuXHR9XG5cblx0LyoqXG5cdCogT24gc2xpZGUgdmFsdWUgY2hhbmdlXG5cdCogQHBhcmFtIHthbnl9IGV2ZW50XG5cdCogQHJldHVybiB7dm9pZH1cblx0Ki9cblx0cHVibGljIG9uU2xpZGVWYWx1ZUNoYW5nZSggZXZlbnQ6IGFueSApIHtcblx0XHR0aGlzLmZpbHRlciA9IHtcblx0XHRcdC4uLnRoaXMuZmlsdGVyLFxuXHRcdFx0bWluOiBldmVudCxcblx0XHR9O1xuXG5cdFx0dGhpcy5maWx0ZXJDaGFuZ2UuZW1pdCggdGhpcy5maWx0ZXIgKTtcblx0fVxuXG5cdC8qKlxuXHQqIE9uIHNsaWRlIGhpZ2ggdmFsdWUgY2hhbmdlXG5cdCogQHBhcmFtIHthbnl9IGV2ZW50XG5cdCogQHJldHVybiB7dm9pZH1cblx0Ki9cblx0cHVibGljIG9uU2xpZGVIaWdoVmFsdWVDaGFuZ2UoIGV2ZW50OiBhbnkgKSB7XG5cdFx0dGhpcy5maWx0ZXIgPSB7XG5cdFx0XHQuLi50aGlzLmZpbHRlcixcblx0XHRcdG1heDogZXZlbnQsXG5cdFx0fTtcblxuXHRcdHRoaXMuZmlsdGVyQ2hhbmdlLmVtaXQoIHRoaXMuZmlsdGVyICk7XG5cdH1cblxuXHQvKipcblx0KiBUb2dnbGUgc2xpZGVyIG1lbnVcblx0KiBAcmV0dXJuIHt2b2lkfVxuXHQqL1xuXHRwdWJsaWMgdG9nZ2xlU2xpZGVyTWVudSgpIHtcblx0XHRzZXRUaW1lb3V0KCAoKSA9PiB0aGlzLm1lbnVPcGVuZWQgPSAhdGhpcy5tZW51T3BlbmVkLCAxMDAgKTtcblx0fVxuXG5cdC8qKlxuXHQqIEZvcm1hdCBmaWx0ZXJcblx0KiBAcmV0dXJuIHtzdHJpbmd9XG5cdCovXG5cdHB1YmxpYyBnZXQgZm9ybWF0KCk6IHN0cmluZyB7XG5cdFx0aWYgKCAhdGhpcy5maWx0ZXIgKSByZXR1cm47XG5cblx0XHRzd2l0Y2ggKCB0aGlzLnR5cGUgKSB7XG5cdFx0XHRjYXNlICdkYXRlcGlja2VyJzpcblx0XHRcdFx0aWYgKCB0aGlzLm9ubHlNb250aCApIHJldHVybiBtb21lbnQoIHRoaXMuZmlsdGVyICkuZm9ybWF0KCAnTU1NTSBZWVlZJyApO1xuXHRcdFx0XHRpZiAoIHRoaXMub25seVllYXIgKSByZXR1cm4gbW9tZW50KCB0aGlzLmZpbHRlciApLmZvcm1hdCggJ1lZWVknICk7XG5cdFx0XHRcdGlmICggIXRoaXMucmFuZ2VNb2RlICkgcmV0dXJuIG1vbWVudCggdGhpcy5maWx0ZXIgKS5mb3JtYXQoICdERC9NTS9ZWVlZJyApO1xuXG5cdFx0XHRcdHJldHVybiBtb21lbnQoIHRoaXMuZmlsdGVyLmJlZ2luICkuZm9ybWF0KCAnREQvTU0vWVlZWScgKVxuXHRcdFx0XHRcdCsgJyAtICdcblx0XHRcdFx0XHQrIG1vbWVudCggdGhpcy5maWx0ZXIuZW5kICkuZm9ybWF0KCAnREQvTU0vWVlZWScgKTtcblx0XHRcdGNhc2UgJ3JhbmdlJzpcblx0XHRcdFx0cmV0dXJuIHRoaXMudHJhbnNsYXRlU2VydmljZS5pbnN0YW50KCAnR0VORVJBTC5MQUJFTFMuUkFOR0UnIClcblx0XHRcdFx0XHQrICc6ICdcblx0XHRcdFx0XHQrIE51bWJlclNlcnZpY2UuYWRkQ29tbWFzKCB0aGlzLmZpbHRlci5taW4gKVxuXHRcdFx0XHRcdCsgJyAtICdcblx0XHRcdFx0XHQrIE51bWJlclNlcnZpY2UuYWRkQ29tbWFzKCB0aGlzLmZpbHRlci5tYXggKTtcblx0XHR9XG5cdH1cblxufVxuIl19