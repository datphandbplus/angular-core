import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, Optional, InjectionToken, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LabelType } from 'ng5-slider';
import moment from 'moment-timezone';
import _ from 'underscore';
import { NumberService } from '../../services/number.service';
export var FILTER_BOX_DEFAULT_OPTIONS = new InjectionToken('defaultOptions');
var FilterBoxComponent = /** @class */ (function () {
    /**
    * @constructor
    * @param {any} defaultOptions
    * @param {TranslateService} translateService
    */
    function FilterBoxComponent(defaultOptions, translateService) {
        var _this = this;
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
            translate: function (value, label) {
                switch (label) {
                    case LabelType.Low:
                        return '<b>'
                            + _this.translateService.instant('GENERAL.LABELS.MIN')
                            + '</b> '
                            + NumberService.kFormatter(value);
                    case LabelType.High:
                        return '<b>'
                            + _this.translateService.instant('GENERAL.LABELS.MAX')
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
    FilterBoxComponent.prototype.ngAfterContentInit = function () {
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
    };
    /**
    * @constructor
    * @param {SimpleChanges} changes
    */
    FilterBoxComponent.prototype.ngOnChanges = function (changes) {
        if (this.type === 'range') {
            if (this.filter
                && !_.has(changes, 'min')
                && !_.has(changes, 'max')) {
                return;
            }
            this.slideValue = Math.ceil(this.min) || 0;
            this.slideHighValue = Math.ceil(this.max) || 1000;
            this.slideOptions = tslib_1.__assign({}, this.slideOptions, { floor: this.slideValue, ceil: this.slideHighValue });
            this.filter = { min: this.slideValue, max: this.slideHighValue };
        }
    };
    /**
    * On month of Datepicker change
    * @param {any} picker
    * @param {any} event
    * @return {void}
    */
    FilterBoxComponent.prototype.onMonthChange = function (picker, event) {
        if (!this.onlyMonth)
            return;
        this.filter = event;
        this.filterChange.emit(this.filter);
        this.applyFilter.emit(event);
        picker.close();
    };
    /**
    * On year of Datepicker change
    * @param {any} picker
    * @param {any} event
    * @return {void}
    */
    FilterBoxComponent.prototype.onYearChange = function (picker, event) {
        if (!this.onlyYear)
            return;
        this.filter = event;
        this.filterChange.emit(this.filter);
        this.applyFilter.emit(event);
        picker.close();
    };
    /**
    * On slide value change
    * @param {any} event
    * @return {void}
    */
    FilterBoxComponent.prototype.onSlideValueChange = function (event) {
        this.filter = tslib_1.__assign({}, this.filter, { min: event });
        this.filterChange.emit(this.filter);
    };
    /**
    * On slide high value change
    * @param {any} event
    * @return {void}
    */
    FilterBoxComponent.prototype.onSlideHighValueChange = function (event) {
        this.filter = tslib_1.__assign({}, this.filter, { max: event });
        this.filterChange.emit(this.filter);
    };
    /**
    * Toggle slider menu
    * @return {void}
    */
    FilterBoxComponent.prototype.toggleSliderMenu = function () {
        var _this = this;
        setTimeout(function () { return _this.menuOpened = !_this.menuOpened; }, 100);
    };
    Object.defineProperty(FilterBoxComponent.prototype, "format", {
        /**
        * Format filter
        * @return {string}
        */
        get: function () {
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
        },
        enumerable: true,
        configurable: true
    });
    FilterBoxComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [FILTER_BOX_DEFAULT_OPTIONS,] }] },
        { type: TranslateService }
    ]; };
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
    return FilterBoxComponent;
}());
export { FilterBoxComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLWJveC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNvcmUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9maWx0ZXItYm94L2ZpbHRlci1ib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ04sU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQ3hCLFlBQVksRUFDRCxRQUFRLEVBQ25CLGNBQWMsRUFBRSxNQUFNLEVBQ3RCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZELE9BQU8sRUFBVyxTQUFTLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDaEQsT0FBTyxNQUFNLE1BQU0saUJBQWlCLENBQUM7QUFDckMsT0FBTyxDQUFDLE1BQU0sWUFBWSxDQUFDO0FBRTNCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUU5RCxNQUFNLENBQUMsSUFBTSwwQkFBMEIsR0FBd0IsSUFBSSxjQUFjLENBQU8sZ0JBQWdCLENBQUUsQ0FBQztBQU8zRztJQW1EQzs7OztNQUlFO0lBQ0YsNEJBQzRELGNBQW1CLEVBQ3ZFLGdCQUFrQztRQUYxQyxpQkFHSTtRQUZ3RCxtQkFBYyxHQUFkLGNBQWMsQ0FBSztRQUN2RSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBekMxQixjQUFTLEdBQVcsQ0FBRSxJQUFJLENBQUMsY0FBYyxJQUFJLEVBQUUsQ0FBRSxDQUFDLFNBQVMsSUFBSSxPQUFPLENBQUM7UUFDdkUsYUFBUSxHQUFXLENBQUUsSUFBSSxDQUFDLGNBQWMsSUFBSSxFQUFFLENBQUUsQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDO1FBQ2xFLG1CQUFjLEdBQVcsQ0FBRSxJQUFJLENBQUMsY0FBYyxJQUFJLEVBQUUsQ0FBRSxDQUFDLGNBQWMsSUFBSSxXQUFXLENBQUM7UUFDckYsY0FBUyxHQUFXLENB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O0lBQzlFO1FBQVIsS0FBSyxFQUFFOzt3REFBMEU7SUFDekU7UUFBUixLQUFLLEVBQUU7OzhEQUE2RjtJQUM1RjtRQUFSLEtBQUssRUFBRTs7eURBQThFO0lBQzdFO1FBQVIsS0FBSyxFQUFFOztvREFBcUU7SUFDcEU7UUFBUixLQUFLLEVBQUU7O21EQUE2RDtJQUM1RDtRQUFSLEtBQUssRUFBRTs7bURBQWdFO0lBRTlEO1FBQVQsTUFBTSxFQUFFOzBDQUFxQixZQUFZOzJEQUFnQztJQUNoRTtRQUFULE1BQU0sRUFBRTswQ0FBc0IsWUFBWTs0REFBZ0M7SUExQi9ELGtCQUFrQjtRQUw5QixTQUFTLENBQUM7WUFDVixRQUFRLEVBQUcsWUFBWTtZQUN2QixvekZBQWdDO1lBQ2hDLElBQUksRUFBSSxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUU7U0FDL0IsQ0FBQztRQTBEQyxtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLE1BQU0sQ0FBRSwwQkFBMEIsQ0FBRSxDQUFBO3lEQUN4QixnQkFBZ0I7T0ExRDlCLGtCQUFrQixDQStMOUI7SUFBRCx5QkFBQztDQUFBLEFBL0xELElBK0xDO1NBL0xZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCxcblx0RXZlbnRFbWl0dGVyLCBTaW1wbGVDaGFuZ2VzLCBBZnRlckNvbnRlbnRJbml0LFxuXHRPbkNoYW5nZXMsIE9wdGlvbmFsLFxuXHRJbmplY3Rpb25Ub2tlbiwgSW5qZWN0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuaW1wb3J0IHsgT3B0aW9ucywgTGFiZWxUeXBlIH0gZnJvbSAnbmc1LXNsaWRlcic7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudC10aW1lem9uZSc7XG5pbXBvcnQgXyBmcm9tICd1bmRlcnNjb3JlJztcblxuaW1wb3J0IHsgTnVtYmVyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL251bWJlci5zZXJ2aWNlJztcblxuZXhwb3J0IGNvbnN0IEZJTFRFUl9CT1hfREVGQVVMVF9PUFRJT05TOiBJbmplY3Rpb25Ub2tlbjxhbnk+ID0gbmV3IEluamVjdGlvblRva2VuPGFueT4oICdkZWZhdWx0T3B0aW9ucycgKTtcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yXHQ6ICdmaWx0ZXItYm94Jyxcblx0dGVtcGxhdGVVcmxcdDogJy4vZmlsdGVyLWJveC5wdWcnLFxuXHRob3N0XHRcdDogeyBjbGFzczogJ2ZpbHRlci1ib3gnIH0sXG59KVxuZXhwb3J0IGNsYXNzIEZpbHRlckJveENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uQ2hhbmdlcyB7XG5cblx0QElucHV0KCkgcHVibGljIGZpZWxkU3ViTmFtZTogc3RyaW5nO1xuXHRASW5wdXQoKSBwdWJsaWMgZmllbGRJbWFnZTogc3RyaW5nO1xuXHRASW5wdXQoKSBwdWJsaWMgZW1wdHlMYWJlbDogc3RyaW5nO1xuXHRASW5wdXQoKSBwdWJsaWMgcGxhY2Vob2xkZXI6IHN0cmluZztcblx0QElucHV0KCkgcHVibGljIGVtcHR5VmFsdWU6IGFueTtcblx0QElucHV0KCkgcHVibGljIGRhdGE6IGFueTtcblx0QElucHV0KCkgcHVibGljIGZpbHRlcjogYW55O1xuXHRASW5wdXQoKSBwdWJsaWMgbWluRGF0ZTogYW55O1xuXHRASW5wdXQoKSBwdWJsaWMgbWF4RGF0ZTogYW55O1xuXHRASW5wdXQoKSBwdWJsaWMgdHJhbnNsYXRlZDogYm9vbGVhbjtcblx0QElucHV0KCkgcHVibGljIGRpc2FibGVkOiBib29sZWFuO1xuXHRASW5wdXQoKSBwdWJsaWMgbXVsdGlwbGU6IGJvb2xlYW47XG5cdEBJbnB1dCgpIHB1YmxpYyByYW5nZU1vZGU6IGJvb2xlYW47XG5cdEBJbnB1dCgpIHB1YmxpYyBvbmx5WWVhcjogYm9vbGVhbjtcblx0QElucHV0KCkgcHVibGljIG9ubHlNb250aDogYm9vbGVhbjtcblx0QElucHV0KCkgcHVibGljIHN0YXJ0Vmlldzogc3RyaW5nID0gKCB0aGlzLmRlZmF1bHRPcHRpb25zIHx8IHt9ICkuc3RhcnRWaWV3IHx8ICdtb250aCc7XG5cdEBJbnB1dCgpIHB1YmxpYyBmaWVsZEtleTogc3RyaW5nID0gKCB0aGlzLmRlZmF1bHRPcHRpb25zIHx8IHt9ICkuZmllbGRLZXkgfHwgJ2lkJztcblx0QElucHV0KCkgcHVibGljIGZpZWxkUGFyZW50S2V5OiBzdHJpbmcgPSAoIHRoaXMuZGVmYXVsdE9wdGlvbnMgfHwge30gKS5maWVsZFBhcmVudEtleSB8fCAncGFyZW50X2lkJztcblx0QElucHV0KCkgcHVibGljIGZpZWxkTmFtZTogc3RyaW5nID0gKCB0aGlzLmRlZmF1bHRPcHRpb25zIHx8IHt9ICkuZmllbGROYW1lIHx8ICduYW1lJztcblx0QElucHV0KCkgcHVibGljIHR5cGU6IHN0cmluZyA9ICggdGhpcy5kZWZhdWx0T3B0aW9ucyB8fCB7fSApLnR5cGUgfHwgJ3F1ZXJ5Jztcblx0QElucHV0KCkgcHVibGljIG1pbjogbnVtYmVyID0gKCB0aGlzLmRlZmF1bHRPcHRpb25zIHx8IHt9ICkubWluIHx8IDA7XG5cdEBJbnB1dCgpIHB1YmxpYyBtYXg6IG51bWJlciA9ICggdGhpcy5kZWZhdWx0T3B0aW9ucyB8fCB7fSApLm1heCB8fCAxMDAwO1xuXG5cdEBPdXRwdXQoKSBwdWJsaWMgYXBwbHlGaWx0ZXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cdEBPdXRwdXQoKSBwdWJsaWMgZmlsdGVyQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG5cdHB1YmxpYyBtZW51T3BlbmVkOiBib29sZWFuO1xuXHRwdWJsaWMgc2xpZGVWYWx1ZTogbnVtYmVyID0gMDtcblx0cHVibGljIHNsaWRlSGlnaFZhbHVlOiBudW1iZXIgPSAxMDAwO1xuXHRwdWJsaWMgc2xpZGVPcHRpb25zOiBPcHRpb25zID0ge1xuXHRcdGZsb29yOiAwLCBjZWlsOiAxMDAwLFxuXHRcdHRyYW5zbGF0ZTogKCB2YWx1ZTogbnVtYmVyLCBsYWJlbDogTGFiZWxUeXBlICk6IHN0cmluZyA9PiB7XG5cdFx0XHRzd2l0Y2ggKCBsYWJlbCApIHtcblx0XHRcdFx0Y2FzZSBMYWJlbFR5cGUuTG93OlxuXHRcdFx0XHRcdHJldHVybiAnPGI+J1xuXHRcdFx0XHRcdFx0KyB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuaW5zdGFudCggJ0dFTkVSQUwuTEFCRUxTLk1JTicgKVxuXHRcdFx0XHRcdFx0KyAnPC9iPiAnXG5cdFx0XHRcdFx0XHQrIE51bWJlclNlcnZpY2Uua0Zvcm1hdHRlciggdmFsdWUgKTtcblx0XHRcdFx0Y2FzZSBMYWJlbFR5cGUuSGlnaDpcblx0XHRcdFx0XHRyZXR1cm4gJzxiPidcblx0XHRcdFx0XHRcdCsgdGhpcy50cmFuc2xhdGVTZXJ2aWNlLmluc3RhbnQoICdHRU5FUkFMLkxBQkVMUy5NQVgnIClcblx0XHRcdFx0XHRcdCsgJzwvYj4gJ1xuXHRcdFx0XHRcdFx0KyBOdW1iZXJTZXJ2aWNlLmtGb3JtYXR0ZXIoIHZhbHVlICk7XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0cmV0dXJuIE51bWJlclNlcnZpY2Uua0Zvcm1hdHRlciggdmFsdWUgKTtcblx0XHRcdH1cblx0XHR9LFxuXHR9O1xuXG5cdC8qKlxuXHQqIEBjb25zdHJ1Y3RvclxuXHQqIEBwYXJhbSB7YW55fSBkZWZhdWx0T3B0aW9uc1xuXHQqIEBwYXJhbSB7VHJhbnNsYXRlU2VydmljZX0gdHJhbnNsYXRlU2VydmljZVxuXHQqL1xuXHRjb25zdHJ1Y3Rvcihcblx0XHRAT3B0aW9uYWwoKSBASW5qZWN0KCBGSUxURVJfQk9YX0RFRkFVTFRfT1BUSU9OUyApIHJlYWRvbmx5IGRlZmF1bHRPcHRpb25zOiBhbnksXG5cdFx0cHVibGljIHRyYW5zbGF0ZVNlcnZpY2U6IFRyYW5zbGF0ZVNlcnZpY2Vcblx0KSB7fVxuXG5cdC8qKlxuXHQqIEBjb25zdHJ1Y3RvclxuXHQqL1xuXHRwdWJsaWMgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuXHRcdGlmICggIXRoaXMuZW1wdHlMYWJlbCApIHtcblx0XHRcdHRoaXMuZW1wdHlMYWJlbCA9IHRoaXMudHlwZSA9PT0gJ2RhdGVwaWNrZXInXG5cdFx0XHRcdD8gdGhpcy50cmFuc2xhdGVTZXJ2aWNlLmluc3RhbnQoICdHRU5FUkFMLkxBQkVMUy5BTExfREFURVMnIClcblx0XHRcdFx0OiAoICF0aGlzLm11bHRpcGxlID8gdGhpcy50cmFuc2xhdGVTZXJ2aWNlLmluc3RhbnQoICdHRU5FUkFMLkxBQkVMUy5BTExfSVRFTVMnICkgOiAnJyApO1xuXHRcdH1cblxuXHRcdGlmICggIXRoaXMucGxhY2Vob2xkZXIgKSB7XG5cdFx0XHR0aGlzLnBsYWNlaG9sZGVyID0gdGhpcy50eXBlID09PSAncXVlcnknXG5cdFx0XHRcdD8gdGhpcy50cmFuc2xhdGVTZXJ2aWNlLmluc3RhbnQoICdHRU5FUkFMLlBMQUNFSE9MREVSUy5TRUFSQ0gnIClcblx0XHRcdFx0OiB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuaW5zdGFudCggJ0dFTkVSQUwuUExBQ0VIT0xERVJTLkNIT09TRScgKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0KiBAY29uc3RydWN0b3Jcblx0KiBAcGFyYW0ge1NpbXBsZUNoYW5nZXN9IGNoYW5nZXNcblx0Ki9cblx0cHVibGljIG5nT25DaGFuZ2VzKCBjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzICkge1xuXHRcdGlmICggdGhpcy50eXBlID09PSAncmFuZ2UnICkge1xuXHRcdFx0aWYgKCB0aGlzLmZpbHRlclxuXHRcdFx0XHQmJiAhXy5oYXMoIGNoYW5nZXMsICdtaW4nIClcblx0XHRcdFx0JiYgIV8uaGFzKCBjaGFuZ2VzLCAnbWF4JyApICkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuc2xpZGVWYWx1ZSA9IE1hdGguY2VpbCggdGhpcy5taW4gKSB8fCAwO1xuXHRcdFx0dGhpcy5zbGlkZUhpZ2hWYWx1ZSA9IE1hdGguY2VpbCggdGhpcy5tYXggKSB8fCAxMDAwO1xuXHRcdFx0dGhpcy5zbGlkZU9wdGlvbnMgPSB7XG5cdFx0XHRcdC4uLnRoaXMuc2xpZGVPcHRpb25zLFxuXHRcdFx0XHRmbG9vcjogdGhpcy5zbGlkZVZhbHVlLCBjZWlsOiB0aGlzLnNsaWRlSGlnaFZhbHVlLFxuXHRcdFx0fTtcblx0XHRcdHRoaXMuZmlsdGVyID0geyBtaW46IHRoaXMuc2xpZGVWYWx1ZSwgbWF4OiB0aGlzLnNsaWRlSGlnaFZhbHVlIH07XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCogT24gbW9udGggb2YgRGF0ZXBpY2tlciBjaGFuZ2Vcblx0KiBAcGFyYW0ge2FueX0gcGlja2VyXG5cdCogQHBhcmFtIHthbnl9IGV2ZW50XG5cdCogQHJldHVybiB7dm9pZH1cblx0Ki9cblx0cHVibGljIG9uTW9udGhDaGFuZ2UoIHBpY2tlcjogYW55LCBldmVudDogYW55ICkge1xuXHRcdGlmICggIXRoaXMub25seU1vbnRoICkgcmV0dXJuO1xuXG5cdFx0dGhpcy5maWx0ZXIgPSBldmVudDtcblx0XHR0aGlzLmZpbHRlckNoYW5nZS5lbWl0KCB0aGlzLmZpbHRlciApO1xuXHRcdHRoaXMuYXBwbHlGaWx0ZXIuZW1pdCggZXZlbnQgKTtcblx0XHRwaWNrZXIuY2xvc2UoKTtcblx0fVxuXG5cdC8qKlxuXHQqIE9uIHllYXIgb2YgRGF0ZXBpY2tlciBjaGFuZ2Vcblx0KiBAcGFyYW0ge2FueX0gcGlja2VyXG5cdCogQHBhcmFtIHthbnl9IGV2ZW50XG5cdCogQHJldHVybiB7dm9pZH1cblx0Ki9cblx0cHVibGljIG9uWWVhckNoYW5nZSggcGlja2VyOiBhbnksIGV2ZW50OiBhbnkgKSB7XG5cdFx0aWYgKCAhdGhpcy5vbmx5WWVhciApIHJldHVybjtcblxuXHRcdHRoaXMuZmlsdGVyID0gZXZlbnQ7XG5cdFx0dGhpcy5maWx0ZXJDaGFuZ2UuZW1pdCggdGhpcy5maWx0ZXIgKTtcblx0XHR0aGlzLmFwcGx5RmlsdGVyLmVtaXQoIGV2ZW50ICk7XG5cdFx0cGlja2VyLmNsb3NlKCk7XG5cdH1cblxuXHQvKipcblx0KiBPbiBzbGlkZSB2YWx1ZSBjaGFuZ2Vcblx0KiBAcGFyYW0ge2FueX0gZXZlbnRcblx0KiBAcmV0dXJuIHt2b2lkfVxuXHQqL1xuXHRwdWJsaWMgb25TbGlkZVZhbHVlQ2hhbmdlKCBldmVudDogYW55ICkge1xuXHRcdHRoaXMuZmlsdGVyID0ge1xuXHRcdFx0Li4udGhpcy5maWx0ZXIsXG5cdFx0XHRtaW46IGV2ZW50LFxuXHRcdH07XG5cblx0XHR0aGlzLmZpbHRlckNoYW5nZS5lbWl0KCB0aGlzLmZpbHRlciApO1xuXHR9XG5cblx0LyoqXG5cdCogT24gc2xpZGUgaGlnaCB2YWx1ZSBjaGFuZ2Vcblx0KiBAcGFyYW0ge2FueX0gZXZlbnRcblx0KiBAcmV0dXJuIHt2b2lkfVxuXHQqL1xuXHRwdWJsaWMgb25TbGlkZUhpZ2hWYWx1ZUNoYW5nZSggZXZlbnQ6IGFueSApIHtcblx0XHR0aGlzLmZpbHRlciA9IHtcblx0XHRcdC4uLnRoaXMuZmlsdGVyLFxuXHRcdFx0bWF4OiBldmVudCxcblx0XHR9O1xuXG5cdFx0dGhpcy5maWx0ZXJDaGFuZ2UuZW1pdCggdGhpcy5maWx0ZXIgKTtcblx0fVxuXG5cdC8qKlxuXHQqIFRvZ2dsZSBzbGlkZXIgbWVudVxuXHQqIEByZXR1cm4ge3ZvaWR9XG5cdCovXG5cdHB1YmxpYyB0b2dnbGVTbGlkZXJNZW51KCkge1xuXHRcdHNldFRpbWVvdXQoICgpID0+IHRoaXMubWVudU9wZW5lZCA9ICF0aGlzLm1lbnVPcGVuZWQsIDEwMCApO1xuXHR9XG5cblx0LyoqXG5cdCogRm9ybWF0IGZpbHRlclxuXHQqIEByZXR1cm4ge3N0cmluZ31cblx0Ki9cblx0cHVibGljIGdldCBmb3JtYXQoKTogc3RyaW5nIHtcblx0XHRpZiAoICF0aGlzLmZpbHRlciApIHJldHVybjtcblxuXHRcdHN3aXRjaCAoIHRoaXMudHlwZSApIHtcblx0XHRcdGNhc2UgJ2RhdGVwaWNrZXInOlxuXHRcdFx0XHRpZiAoIHRoaXMub25seU1vbnRoICkgcmV0dXJuIG1vbWVudCggdGhpcy5maWx0ZXIgKS5mb3JtYXQoICdNTU1NIFlZWVknICk7XG5cdFx0XHRcdGlmICggdGhpcy5vbmx5WWVhciApIHJldHVybiBtb21lbnQoIHRoaXMuZmlsdGVyICkuZm9ybWF0KCAnWVlZWScgKTtcblx0XHRcdFx0aWYgKCAhdGhpcy5yYW5nZU1vZGUgKSByZXR1cm4gbW9tZW50KCB0aGlzLmZpbHRlciApLmZvcm1hdCggJ0REL01NL1lZWVknICk7XG5cblx0XHRcdFx0cmV0dXJuIG1vbWVudCggdGhpcy5maWx0ZXIuYmVnaW4gKS5mb3JtYXQoICdERC9NTS9ZWVlZJyApXG5cdFx0XHRcdFx0KyAnIC0gJ1xuXHRcdFx0XHRcdCsgbW9tZW50KCB0aGlzLmZpbHRlci5lbmQgKS5mb3JtYXQoICdERC9NTS9ZWVlZJyApO1xuXHRcdFx0Y2FzZSAncmFuZ2UnOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy50cmFuc2xhdGVTZXJ2aWNlLmluc3RhbnQoICdHRU5FUkFMLkxBQkVMUy5SQU5HRScgKVxuXHRcdFx0XHRcdCsgJzogJ1xuXHRcdFx0XHRcdCsgTnVtYmVyU2VydmljZS5hZGRDb21tYXMoIHRoaXMuZmlsdGVyLm1pbiApXG5cdFx0XHRcdFx0KyAnIC0gJ1xuXHRcdFx0XHRcdCsgTnVtYmVyU2VydmljZS5hZGRDb21tYXMoIHRoaXMuZmlsdGVyLm1heCApO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=