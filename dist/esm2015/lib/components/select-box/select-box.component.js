import * as tslib_1 from "tslib";
import { Input, Component, Output, EventEmitter, OnChanges, OnInit, SimpleChanges, ChangeDetectorRef, Optional, Inject, InjectionToken } from '@angular/core';
import { Subject } from 'rxjs';
import { FormControl } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import _ from 'underscore';
import { UtilitiesService } from '../../services/utilities.service';
import { NumberService } from '../../services/number.service';
export const SELECT_BOX_DEFAULT_OPTIONS = new InjectionToken('defaultOptions');
let SelectBoxComponent = class SelectBoxComponent {
    /**
    * @constructor
    * @param {any} defaultOptions
    * @param {TranslateService} translateService
    * @param {ChangeDetectorRef} cdRef
    */
    constructor(defaultOptions, translateService, cdRef) {
        this.defaultOptions = defaultOptions;
        this.translateService = translateService;
        this.cdRef = cdRef;
        this.formFieldClass = (this.defaultOptions || {}).formFieldClass || '';
        this.panelClass = (this.defaultOptions || {}).panelClass || '';
        this.floatLabel = (this.defaultOptions || {}).floatLabel || 'always';
        this.appearance = (this.defaultOptions || {}).appearance || 'outline';
        this.formControl = new FormControl();
        this.fieldKey = (this.defaultOptions || {}).fieldKey || 'id';
        this.fieldParentKey = (this.defaultOptions || {}).fieldParentKey || 'parent_id';
        this.fieldName = (this.defaultOptions || {}).fieldName || 'name';
        this.sort = (this.defaultOptions || {}).sort !== undefined
            ? (this.defaultOptions || {}).sort
            : true;
        this.placeholder = (this.defaultOptions || {}).placeholder
            || this.translateService.instant('GENERAL.PLACEHOLDERS.CHOOSE');
        this.ngModelChange = new EventEmitter();
        this.selectionChange = new EventEmitter();
        this.selectionOptionChange = new EventEmitter();
        this.selectionAllNestedOptionChange = new EventEmitter();
        this.openedChange = new EventEmitter();
        this.handledItems = [];
        this.filterCtrl = new FormControl();
        this.onDestroy = new Subject();
        this.filterCtrl.valueChanges
            .pipe(takeUntil(this.onDestroy))
            .subscribe((query) => this.filtered = this.filter(query));
    }
    /**
    * @constructor
    */
    ngOnInit() {
        // Load data when component initial
        this.init && this.loadData();
    }
    /**
    * @constructor
    * @param {SimpleChanges} changes
    */
    ngOnChanges(changes) {
        if (changes.data && _.isArray(this.data)) {
            this.onItemsChange(this.data);
        }
        if (changes.ngModel) {
            this.optionChange({ value: this.ngModel });
        }
    }
    /**
    * Load data
    * @return {void}
    */
    loadData() {
        if (!this.data || !this.data.subscribe || !_.isFunction(this.data.subscribe))
            return;
        this.loaded = false;
        this.data.subscribe((result) => this.onItemsChange(result));
    }
    /**
    * On items change
    * @param {Array} items
    * @return {void}
    */
    onItemsChange(items) {
        this.handledItems = this.sort
            ? _.sortBy(items, this.fieldName)
            : _.clone(items);
        if (this.multiDepth) {
            this.handledItems = UtilitiesService.convertMultiDepth(this.handledItems, this.fieldKey, this.fieldParentKey, this.fieldName);
        }
        if (this.groups)
            this.handledGroupItems = this.handleGroupItems();
        this.loaded = true;
        this.filtered = _.clone(this.handledItems);
        this.optionChange({ value: this.ngModel });
    }
    /**
    * Filter
    * @param {string} query
    * @return {Array} Filtered
    */
    filter(query) {
        return this.handledItems.filter((item) => {
            const filterValue = this.fieldName ? item[this.fieldName] : item;
            return UtilitiesService.stripVietnameseSymbol(filterValue
                .toLowerCase()
                .replace(/ /g, ''))
                .indexOf(UtilitiesService.stripVietnameseSymbol(query
                .toLowerCase()
                .replace(/ /g, ''))) > -1;
        });
    }
    /**
    * Option change
    * @param {any} ev
    * @return {void}
    */
    optionChange(ev) {
        const value = ev && ev.value && this.multiple ? ev.value[0] : ev.value;
        this.displayValue = this.emptyLabel;
        this.displayImage = this.emptyImage;
        if (value !== null && value !== undefined) {
            const selected = _.find(this.handledItems, (item) => item[this.fieldKey] === value);
            if (selected) {
                this.displayValue = this.translated
                    ? this.translateService.instant(selected[this.fieldName])
                    : selected[this.fieldName];
                this.displayValue += this.multiple && ev.value && ev.value.length > 1
                    ? ' (+'
                        + NumberService.addCommas(ev.value.length - 1)
                        + ' '
                        + this.translateService.instant('GENERAL.LABELS.OTHERS').toLowerCase()
                        + ')'
                    : '';
                this.displayImage = selected[this.fieldImage];
            }
            else {
                this.displayValue = value;
            }
        }
        // Get all nested options when parent option was selected
        if (this.multiDepth && !this.isSelectAll && !this.multiple) {
            let nested = this.emptyValue;
            if (value !== null && value !== undefined) {
                let children = [value];
                nested = [...children];
                while (children && children.length) {
                    children = _.map(_.filter(this.handledItems, (item) => _.contains(children, item[this.fieldParentKey])), this.fieldKey);
                    nested.push(...children);
                }
            }
            this.selectionAllNestedOptionChange.emit(nested);
        }
        this.selectionChange.emit(ev);
        this.selectionOptionChange.emit(this.multiple
            ? _.filter(this.handledItems, (item) => _.contains(ev.value, item[this.fieldKey]))
            : _.find(this.handledItems, (item) => value === item[this.fieldKey]));
        this.isSelectAll = this.multiple
            && this.handledItems
            && this.ngModel
            && this.handledItems.length === this.ngModel.length;
    }
    /**
    * Toggle select all options for multple mode
    * @return {void}
    */
    toggleSelectAll() {
        this.ngModel = this.isSelectAll ? _.map(this.handledItems, this.fieldKey) : [];
        this.cdRef.detectChanges();
        this.optionChange({ value: this.ngModel });
    }
    /**
    * Handle group items
    * @return {any}
    */
    handleGroupItems() {
        const groups = {};
        const noGroups = [];
        _.each(this.handledItems, (item) => {
            if (item.group) {
                if (!groups[item.group])
                    groups[item.group] = [];
                groups[item.group].push(item);
                return;
            }
            noGroups.push(item);
        });
        return { groups, no_groups: noGroups };
    }
    /**
    * Check empty value is selected
    * @return {boolean}
    */
    get isEmptySelected() {
        if (!this.emptyLabel)
            return false;
        return this.emptyValue !== null && this.emptyValue !== undefined
            ? this.ngModel === this.emptyValue
            : !this.ngModel === !this.emptyValue;
    }
    /**
    * Check hidden item
    * @param {any} item
    * @return {boolean}
    */
    isHiddenItem(item) {
        return item.hidden || _.contains(this.hiddenList, item[this.fieldKey]);
    }
    /**
    * Check disabled item
    * @param {any} item
    * @return {boolean}
    */
    isDisabledItem(item) {
        return item.disabled || _.contains(this.disabledList, item[this.fieldKey]);
    }
};
SelectBoxComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [SELECT_BOX_DEFAULT_OPTIONS,] }] },
    { type: TranslateService },
    { type: ChangeDetectorRef }
];
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], SelectBoxComponent.prototype, "ngModel", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], SelectBoxComponent.prototype, "init", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], SelectBoxComponent.prototype, "required", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], SelectBoxComponent.prototype, "disabled", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], SelectBoxComponent.prototype, "disableControl", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], SelectBoxComponent.prototype, "readonly", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], SelectBoxComponent.prototype, "multiple", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], SelectBoxComponent.prototype, "translated", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], SelectBoxComponent.prototype, "label", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], SelectBoxComponent.prototype, "emptyLabel", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], SelectBoxComponent.prototype, "emptyValue", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], SelectBoxComponent.prototype, "emptyImage", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], SelectBoxComponent.prototype, "defaultImage", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], SelectBoxComponent.prototype, "data", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Array)
], SelectBoxComponent.prototype, "hiddenList", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Array)
], SelectBoxComponent.prototype, "disabledList", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Array)
], SelectBoxComponent.prototype, "filtered", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Array)
], SelectBoxComponent.prototype, "groups", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], SelectBoxComponent.prototype, "fieldImage", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], SelectBoxComponent.prototype, "fieldSubName", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], SelectBoxComponent.prototype, "noFormField", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], SelectBoxComponent.prototype, "noErrorSpacing", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], SelectBoxComponent.prototype, "multiDepth", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], SelectBoxComponent.prototype, "formFieldClass", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], SelectBoxComponent.prototype, "panelClass", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], SelectBoxComponent.prototype, "floatLabel", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], SelectBoxComponent.prototype, "appearance", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", FormControl)
], SelectBoxComponent.prototype, "formControl", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], SelectBoxComponent.prototype, "fieldKey", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], SelectBoxComponent.prototype, "fieldParentKey", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], SelectBoxComponent.prototype, "fieldName", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], SelectBoxComponent.prototype, "sort", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], SelectBoxComponent.prototype, "placeholder", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], SelectBoxComponent.prototype, "ngModelChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], SelectBoxComponent.prototype, "selectionChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], SelectBoxComponent.prototype, "selectionOptionChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], SelectBoxComponent.prototype, "selectionAllNestedOptionChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], SelectBoxComponent.prototype, "openedChange", void 0);
SelectBoxComponent = tslib_1.__decorate([
    Component({
        selector: 'select-box',
        template: "<div class=\"select-box layout-column flex-noshirnk\" [ngClass]=\"defaultOptions?.componentClass\"><ng-template [ngIf]=\"noFormField\"><mat-label *ngIf=\"label\">{{ label }}</mat-label><ng-template [ngIf]=\"readonly\"><input matInput [disableControl]=\"disableControl || disabled\" [value]=\"displayValue || &quot;&quot;\" [placeholder]=\"isEmptySelected ? emptyLabel : placeholder\" [formControl]=\"formControl\" [required]=\"required\" ngDefaultControl readonly></ng-template><ng-template [ngIf]=\"!readonly\"><mat-select matInput [panelClass]=\"[ panelClass, &quot;select-box__panel&quot; ]\" [multiple]=\"multiple\" [disableControl]=\"disableControl || disabled\" [(ngModel)]=\"ngModel\" (ngModelChange)=\"ngModelChange?.emit( ngModel )\" (selectionChange)=\"optionChange( $event )\" [placeholder]=\"isEmptySelected ? emptyLabel : placeholder\" [formControl]=\"formControl\" (openedChange)=\"$event &amp;&amp; !loaded &amp;&amp; loadData(); openedChange?.emit( $event );\" [required]=\"required\" ngDefaultControl><ngx-mat-select-search class=\"select-box__search\" [placeholderLabel]=\"&quot;GENERAL.PLACEHOLDERS.SEARCH&quot; | translate\" [noEntriesFoundLabel]=\"&quot;GENERAL.LABELS.NOT_FOUND&quot; | translate\" [formControl]=\"filterCtrl\"></ngx-mat-select-search><mat-select-trigger><ng-template [ngIf]=\"displayImage\"><div class=\"select-box__display-image\"><avatar-box size=\"24\" [lazy]=\"false\" [source]=\"displayImage\" [title]=\"displayValue\" [defaultAvatar]=\"defaultImage\"></avatar-box>{{ displayValue }}</div></ng-template><ng-template [ngIf]=\"!displayImage\">{{ displayValue }}</ng-template></mat-select-trigger><loading-overlay [visible]=\"!loaded\"><mat-checkbox class=\"select-box__checkbox\" matRipple matRippleColor=\"rgba(0, 0, 0, .7)\" *ngIf=\"multiple &amp;&amp; handledItems?.length &amp;&amp; !filterCtrl?.value?.length\" color=\"primary\" [(ngModel)]=\"isSelectAll\" (change)=\"toggleSelectAll()\">{{ \"GENERAL.LABELS.SELECT_ALL\" | translate }}\n({{ ( handledItems?.length || 0 ) | commas }} {{ \"GENERAL.LABELS.ITEMS\" | translate }})</mat-checkbox><mat-option empty *ngIf=\"!loaded || emptyLabel\" [value]=\"emptyValue\"><div class=\"layout-row layout-align-start-center\"><avatar-box class=\"mr-5\" *ngIf=\"emptyImage\" size=\"28\" [lazy]=\"false\" [source]=\"emptyImage\" [defaultAvatar]=\"defaultImage\"></avatar-box>{{ emptyLabel }}</div></mat-option><ng-template [ngIf]=\"groups\"><mat-option *ngFor=\"let item of handledGroupItems?.no_groups\" [class.hide]=\"isHiddenItem( item )\" [disabled]=\"isDisabledItem( item )\" [value]=\"item[ fieldKey ]\"><div class=\"layout-row layout-align-start-center\"><avatar-box class=\"mr-5\" *ngIf=\"fieldImage\" size=\"28\" [lazy]=\"false\" [source]=\"item[ fieldImage ]\" [defaultAvatar]=\"defaultImage\" [title]=\"item[ fieldName ]\"></avatar-box><ng-template [ngIf]=\"!translated\"><div class=\"line-height-14\">{{ item?.__name || item[ fieldName ] || \"N/A\" }}&nbsp;<div class=\"font-size-10\" *ngIf=\"fieldSubName\">{{ item[ fieldSubName ] || \"N/A\" }}</div></div></ng-template><ng-template [ngIf]=\"translated\"><div class=\"line-height-14\">{{ item?.__name || ( item[ fieldName ] | translate ) || \"N/A\" }}&nbsp;<div class=\"font-size-10\" *ngIf=\"fieldSubName\">{{ item[ fieldSubName ] | translate }}</div></div></ng-template></div></mat-option><mat-optgroup *ngFor=\"let group of groups\" [label]=\"group?.name || &quot;N/A&quot;\"><mat-option *ngFor=\"let item of handledGroupItems?.groups[ group?.id ]\" [class.hide]=\"isHiddenItem( item )\" [disabled]=\"isDisabledItem( item )\" [value]=\"item[ fieldKey ]\"><div class=\"layout-row layout-align-start-center\"><avatar-box class=\"mr-5\" *ngIf=\"fieldImage\" size=\"28\" [lazy]=\"false\" [source]=\"item[ fieldImage ]\" [defaultAvatar]=\"defaultImage\" [title]=\"item[ fieldName ]\"></avatar-box><ng-template [ngIf]=\"!translated\"><div class=\"line-height-14\">{{ item?.__name || item[ fieldName ] || \"N/A\" }}&nbsp;<div class=\"font-size-10\" *ngIf=\"fieldSubName\">{{ item[ fieldSubName ] || \"N/A\" }}</div></div></ng-template><ng-template [ngIf]=\"translated\"><div class=\"line-height-14\">{{ item?.__name || ( item[ fieldName ] | translate ) || \"N/A\" }}&nbsp;<div class=\"font-size-10\" *ngIf=\"fieldSubName\">{{ item[ fieldSubName ] | translate }}</div></div></ng-template></div></mat-option></mat-optgroup></ng-template><ng-template [ngIf]=\"!groups\"><mat-option *ngFor=\"let item of filtered\" [class.hide]=\"isHiddenItem( item )\" [disabled]=\"isDisabledItem( item )\" [value]=\"item[ fieldKey ]\"><div class=\"layout-row layout-align-start-center\"><avatar-box class=\"mr-5\" *ngIf=\"fieldImage\" size=\"28\" [lazy]=\"false\" [source]=\"item[ fieldImage ]\" [defaultAvatar]=\"defaultImage\" [title]=\"item[ fieldName ]\"></avatar-box><ng-template [ngIf]=\"!translated\"><div class=\"line-height-14\">{{ item?.__name || item[ fieldName ] || \"N/A\" }}&nbsp;<div class=\"font-size-10\" *ngIf=\"fieldSubName\">{{ item[ fieldSubName ] || \"N/A\" }}</div></div></ng-template><ng-template [ngIf]=\"translated\"><div class=\"line-height-14\">{{ item?.__name || ( item[ fieldName ] | translate ) || \"N/A\" }}&nbsp;<div class=\"font-size-10\" *ngIf=\"fieldSubName\">{{ item[ fieldSubName ] | translate }}</div></div></ng-template></div></mat-option></ng-template></loading-overlay></mat-select></ng-template></ng-template><ng-template [ngIf]=\"!noFormField\"><mat-form-field [class.select-box__empty-selected]=\"isEmptySelected\" [class.select-box__no-error-spacing]=\"noErrorSpacing\" [floatLabel]=\"floatLabel\" [appearance]=\"appearance\" [ngClass]=\"formFieldClass\"><mat-label *ngIf=\"label\">{{ label }}</mat-label><ng-template [ngIf]=\"readonly\"><input matInput [disableControl]=\"disableControl || disabled\" [value]=\"displayValue || &quot;&quot;\" [placeholder]=\"isEmptySelected ? emptyLabel : placeholder\" [formControl]=\"formControl\" [required]=\"required\" ngDefaultControl readonly></ng-template><ng-template [ngIf]=\"!readonly\"><mat-select matInput [panelClass]=\"[ panelClass, &quot;select-box__panel&quot; ]\" [multiple]=\"multiple\" [disableControl]=\"disableControl || disabled\" [(ngModel)]=\"ngModel\" (ngModelChange)=\"ngModelChange?.emit( ngModel )\" (selectionChange)=\"optionChange( $event )\" [placeholder]=\"isEmptySelected ? emptyLabel : placeholder\" [formControl]=\"formControl\" (openedChange)=\"$event &amp;&amp; !loaded &amp;&amp; loadData(); openedChange?.emit( $event );\" [required]=\"required\" ngDefaultControl><ngx-mat-select-search class=\"select-box__search\" [placeholderLabel]=\"&quot;GENERAL.PLACEHOLDERS.SEARCH&quot; | translate\" [noEntriesFoundLabel]=\"&quot;GENERAL.LABELS.NOT_FOUND&quot; | translate\" [formControl]=\"filterCtrl\"></ngx-mat-select-search><mat-select-trigger><ng-template [ngIf]=\"displayImage\"><div class=\"select-box__display-image\"><avatar-box size=\"24\" [lazy]=\"false\" [source]=\"displayImage\" [title]=\"displayValue\" [defaultAvatar]=\"defaultImage\"></avatar-box>{{ displayValue }}</div></ng-template><ng-template [ngIf]=\"!displayImage\">{{ displayValue }}</ng-template></mat-select-trigger><loading-overlay [visible]=\"!loaded\"><mat-checkbox class=\"select-box__checkbox\" matRipple matRippleColor=\"rgba(0, 0, 0, .7)\" *ngIf=\"multiple &amp;&amp; handledItems?.length &amp;&amp; !filterCtrl?.value?.length\" color=\"primary\" [(ngModel)]=\"isSelectAll\" (change)=\"toggleSelectAll()\">{{ \"GENERAL.LABELS.SELECT_ALL\" | translate }}\n({{ ( handledItems?.length || 0 ) | commas }} {{ \"GENERAL.LABELS.ITEMS\" | translate }})</mat-checkbox><mat-option empty *ngIf=\"!loaded || emptyLabel\" [value]=\"emptyValue\"><div class=\"layout-row layout-align-start-center\"><avatar-box class=\"mr-5\" *ngIf=\"emptyImage\" size=\"28\" [lazy]=\"false\" [source]=\"emptyImage\" [defaultAvatar]=\"defaultImage\"></avatar-box>{{ emptyLabel }}</div></mat-option><ng-template [ngIf]=\"groups\"><mat-option *ngFor=\"let item of handledGroupItems?.no_groups\" [class.hide]=\"isHiddenItem( item )\" [disabled]=\"isDisabledItem( item )\" [value]=\"item[ fieldKey ]\"><div class=\"layout-row layout-align-start-center\"><avatar-box class=\"mr-5\" *ngIf=\"fieldImage\" size=\"28\" [lazy]=\"false\" [source]=\"item[ fieldImage ]\" [defaultAvatar]=\"defaultImage\" [title]=\"item[ fieldName ]\"></avatar-box><ng-template [ngIf]=\"!translated\"><div class=\"line-height-14\">{{ item?.__name || item[ fieldName ] || \"N/A\" }}&nbsp;<div class=\"font-size-10\" *ngIf=\"fieldSubName\">{{ item[ fieldSubName ] || \"N/A\" }}</div></div></ng-template><ng-template [ngIf]=\"translated\"><div class=\"line-height-14\">{{ item?.__name || ( item[ fieldName ] | translate ) || \"N/A\" }}&nbsp;<div class=\"font-size-10\" *ngIf=\"fieldSubName\">{{ item[ fieldSubName ] | translate }}</div></div></ng-template></div></mat-option><mat-optgroup *ngFor=\"let group of groups\" [label]=\"group?.name || &quot;N/A&quot;\"><mat-option *ngFor=\"let item of handledGroupItems?.groups[ group?.id ]\" [class.hide]=\"isHiddenItem( item )\" [disabled]=\"isDisabledItem( item )\" [value]=\"item[ fieldKey ]\"><div class=\"layout-row layout-align-start-center\"><avatar-box class=\"mr-5\" *ngIf=\"fieldImage\" size=\"28\" [lazy]=\"false\" [source]=\"item[ fieldImage ]\" [defaultAvatar]=\"defaultImage\" [title]=\"item[ fieldName ]\"></avatar-box><ng-template [ngIf]=\"!translated\"><div class=\"line-height-14\">{{ item?.__name || item[ fieldName ] || \"N/A\" }}&nbsp;<div class=\"font-size-10\" *ngIf=\"fieldSubName\">{{ item[ fieldSubName ] || \"N/A\" }}</div></div></ng-template><ng-template [ngIf]=\"translated\"><div class=\"line-height-14\">{{ item?.__name || ( item[ fieldName ] | translate ) || \"N/A\" }}&nbsp;<div class=\"font-size-10\" *ngIf=\"fieldSubName\">{{ item[ fieldSubName ] | translate }}</div></div></ng-template></div></mat-option></mat-optgroup></ng-template><ng-template [ngIf]=\"!groups\"><mat-option *ngFor=\"let item of filtered\" [class.hide]=\"isHiddenItem( item )\" [disabled]=\"isDisabledItem( item )\" [value]=\"item[ fieldKey ]\"><div class=\"layout-row layout-align-start-center\"><avatar-box class=\"mr-5\" *ngIf=\"fieldImage\" size=\"28\" [lazy]=\"false\" [source]=\"item[ fieldImage ]\" [defaultAvatar]=\"defaultImage\" [title]=\"item[ fieldName ]\"></avatar-box><ng-template [ngIf]=\"!translated\"><div class=\"line-height-14\">{{ item?.__name || item[ fieldName ] || \"N/A\" }}&nbsp;<div class=\"font-size-10\" *ngIf=\"fieldSubName\">{{ item[ fieldSubName ] || \"N/A\" }}</div></div></ng-template><ng-template [ngIf]=\"translated\"><div class=\"line-height-14\">{{ item?.__name || ( item[ fieldName ] | translate ) || \"N/A\" }}&nbsp;<div class=\"font-size-10\" *ngIf=\"fieldSubName\">{{ item[ fieldSubName ] | translate }}</div></div></ng-template></div></mat-option></ng-template></loading-overlay></mat-select></ng-template><mat-error><error-message [label]=\"label\" [control]=\"formControl\"></error-message></mat-error></mat-form-field></ng-template></div>",
        host: { class: 'flex-noshrink layout-column' }
    }),
    tslib_1.__param(0, Optional()), tslib_1.__param(0, Inject(SELECT_BOX_DEFAULT_OPTIONS)),
    tslib_1.__metadata("design:paramtypes", [Object, TranslateService,
        ChangeDetectorRef])
], SelectBoxComponent);
export { SelectBoxComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWJveC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNvcmUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zZWxlY3QtYm94L3NlbGVjdC1ib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ04sS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQ3hCLFlBQVksRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUMvQixhQUFhLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUMxQyxNQUFNLEVBQUUsY0FBYyxFQUN0QixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxDQUFDLE1BQU0sWUFBWSxDQUFDO0FBRTNCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUU5RCxNQUFNLENBQUMsTUFBTSwwQkFBMEIsR0FBd0IsSUFBSSxjQUFjLENBQU8sZ0JBQWdCLENBQUUsQ0FBQztBQU8zRyxJQUFhLGtCQUFrQixHQUEvQixNQUFhLGtCQUFrQjtJQXVEOUI7Ozs7O01BS0U7SUFDRixZQUM0RCxjQUFtQixFQUN2RSxnQkFBbUMsRUFDbkMsS0FBMkI7UUFGeUIsbUJBQWMsR0FBZCxjQUFjLENBQUs7UUFDdkUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFtQjtRQUNuQyxVQUFLLEdBQUwsS0FBSyxDQUFzQjtRQXZDbkIsbUJBQWMsR0FBVyxDQUFFLElBQUksQ0FBQyxjQUFjLElBQUksRUFBRSxD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QUFFLENBQUEsRUFBRSxtQkFBQSxNQUFNLENBQUUsMEJBQTBCLENBQUUsQ0FBQTtxREFDdkIsZ0JBQWdCO1FBQ3pCLGlCQUFpQjtHQWhFdkIsa0JBQWtCLENBc1I5QjtTQXRSWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRJbnB1dCwgQ29tcG9uZW50LCBPdXRwdXQsXG5cdEV2ZW50RW1pdHRlciwgT25DaGFuZ2VzLCBPbkluaXQsXG5cdFNpbXBsZUNoYW5nZXMsIENoYW5nZURldGVjdG9yUmVmLCBPcHRpb25hbCxcblx0SW5qZWN0LCBJbmplY3Rpb25Ub2tlblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuaW1wb3J0IF8gZnJvbSAndW5kZXJzY29yZSc7XG5cbmltcG9ydCB7IFV0aWxpdGllc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy91dGlsaXRpZXMuc2VydmljZSc7XG5pbXBvcnQgeyBOdW1iZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbnVtYmVyLnNlcnZpY2UnO1xuXG5leHBvcnQgY29uc3QgU0VMRUNUX0JPWF9ERUZBVUxUX09QVElPTlM6IEluamVjdGlvblRva2VuPGFueT4gPSBuZXcgSW5qZWN0aW9uVG9rZW48YW55PiggJ2RlZmF1bHRPcHRpb25zJyApO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3JcdDogJ3NlbGVjdC1ib3gnLFxuXHR0ZW1wbGF0ZVVybFx0OiAnLi9zZWxlY3QtYm94LnB1ZycsXG5cdGhvc3RcdFx0OiB7IGNsYXNzOiAnZmxleC1ub3NocmluayBsYXlvdXQtY29sdW1uJyB9LFxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RCb3hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG5cblx0QElucHV0KCkgcHVibGljIG5nTW9kZWw6IGFueTtcblx0QElucHV0KCkgcHVibGljIGluaXQ6IGJvb2xlYW47XG5cdEBJbnB1dCgpIHB1YmxpYyByZXF1aXJlZDogYm9vbGVhbjtcblx0QElucHV0KCkgcHVibGljIGRpc2FibGVkOiBib29sZWFuO1xuXHRASW5wdXQoKSBwdWJsaWMgZGlzYWJsZUNvbnRyb2w6IGJvb2xlYW47XG5cdEBJbnB1dCgpIHB1YmxpYyByZWFkb25seTogYm9vbGVhbjtcblx0QElucHV0KCkgcHVibGljIG11bHRpcGxlOiBib29sZWFuO1xuXHRASW5wdXQoKSBwdWJsaWMgdHJhbnNsYXRlZDogYm9vbGVhbjtcblx0QElucHV0KCkgcHVibGljIGxhYmVsOiBzdHJpbmc7XG5cdEBJbnB1dCgpIHB1YmxpYyBlbXB0eUxhYmVsOiBzdHJpbmc7XG5cdEBJbnB1dCgpIHB1YmxpYyBlbXB0eVZhbHVlOiBhbnk7XG5cdEBJbnB1dCgpIHB1YmxpYyBlbXB0eUltYWdlOiBzdHJpbmc7XG5cdEBJbnB1dCgpIHB1YmxpYyBkZWZhdWx0SW1hZ2U6IHN0cmluZztcblx0QElucHV0KCkgcHVibGljIGRhdGE6IGFueTtcblx0QElucHV0KCkgcHVibGljIGhpZGRlbkxpc3Q6IEFycmF5PGFueT47XG5cdEBJbnB1dCgpIHB1YmxpYyBkaXNhYmxlZExpc3Q6IEFycmF5PGFueT47XG5cdEBJbnB1dCgpIHB1YmxpYyBmaWx0ZXJlZDogQXJyYXk8YW55Pjtcblx0QElucHV0KCkgcHVibGljIGdyb3VwczogQXJyYXk8YW55Pjtcblx0QElucHV0KCkgcHVibGljIGZpZWxkSW1hZ2U6IHN0cmluZztcblx0QElucHV0KCkgcHVibGljIGZpZWxkU3ViTmFtZTogc3RyaW5nO1xuXHRASW5wdXQoKSBwdWJsaWMgbm9Gb3JtRmllbGQ6IGJvb2xlYW47XG5cdEBJbnB1dCgpIHB1YmxpYyBub0Vycm9yU3BhY2luZzogYm9vbGVhbjtcblx0QElucHV0KCkgcHVibGljIG11bHRpRGVwdGg6IGJvb2xlYW47XG5cdEBJbnB1dCgpIHB1YmxpYyBmb3JtRmllbGRDbGFzczogc3RyaW5nID0gKCB0aGlzLmRlZmF1bHRPcHRpb25zIHx8IHt9ICkuZm9ybUZpZWxkQ2xhc3MgfHwgJyc7XG5cdEBJbnB1dCgpIHB1YmxpYyBwYW5lbENsYXNzOiBzdHJpbmcgPSAoIHRoaXMuZGVmYXVsdE9wdGlvbnMgfHwge30gKS5wYW5lbENsYXNzIHx8ICcnO1xuXHRASW5wdXQoKSBwdWJsaWMgZmxvYXRMYWJlbDogc3RyaW5nID0gKCB0aGlzLmRlZmF1bHRPcHRpb25zIHx8IHt9ICkuZmxvYXRMYWJlbCB8fCAnYWx3YXlzJztcblx0QElucHV0KCkgcHVibGljIGFwcGVhcmFuY2U6IHN0cmluZyA9ICggdGhpcy5kZWZhdWx0T3B0aW9ucyB8fCB7fSApLmFwcGVhcmFuY2UgfHwgJ291dGxpbmUnO1xuXHRASW5wdXQoKSBwdWJsaWMgZm9ybUNvbnRyb2w6IEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKCk7XG5cdEBJbnB1dCgpIHB1YmxpYyBmaWVsZEtleTogc3RyaW5nID0gKCB0aGlzLmRlZmF1bHRPcHRpb25zIHx8IHt9ICkuZmllbGRLZXkgfHwgJ2lkJztcblx0QElucHV0KCkgcHVibGljIGZpZWxkUGFyZW50S2V5OiBzdHJpbmcgPSAoIHRoaXMuZGVmYXVsdE9wdGlvbnMgfHwge30gKS5maWVsZFBhcmVudEtleSB8fCAncGFyZW50X2lkJztcblx0QElucHV0KCkgcHVibGljIGZpZWxkTmFtZTogc3RyaW5nID0gKCB0aGlzLmRlZmF1bHRPcHRpb25zIHx8IHt9ICkuZmllbGROYW1lIHx8ICduYW1lJztcblx0QElucHV0KCkgcHVibGljIHNvcnQ6IGJvb2xlYW4gPSAoIHRoaXMuZGVmYXVsdE9wdGlvbnMgfHwge30gKS5zb3J0ICE9PSB1bmRlZmluZWRcblx0XHQ/ICggdGhpcy5kZWZhdWx0T3B0aW9ucyB8fCB7fSApLnNvcnRcblx0XHQ6IHRydWU7XG5cdEBJbnB1dCgpIHB1YmxpYyBwbGFjZWhvbGRlcjogc3RyaW5nID0gKCB0aGlzLmRlZmF1bHRPcHRpb25zIHx8IHt9ICkucGxhY2Vob2xkZXJcblx0XHR8fCB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuaW5zdGFudCggJ0dFTkVSQUwuUExBQ0VIT0xERVJTLkNIT09TRScgKTtcblxuXHRAT3V0cHV0KCkgcHVibGljIG5nTW9kZWxDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cdEBPdXRwdXQoKSBwdWJsaWMgc2VsZWN0aW9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXHRAT3V0cHV0KCkgcHVibGljIHNlbGVjdGlvbk9wdGlvbkNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblx0QE91dHB1dCgpIHB1YmxpYyBzZWxlY3Rpb25BbGxOZXN0ZWRPcHRpb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cdEBPdXRwdXQoKSBwdWJsaWMgb3BlbmVkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG5cdHB1YmxpYyBsb2FkZWQ6IGJvb2xlYW47XG5cdHB1YmxpYyBpc1NlbGVjdEFsbDogYm9vbGVhbjtcblx0cHVibGljIGRpc3BsYXlJbWFnZTogc3RyaW5nO1xuXHRwdWJsaWMgZGlzcGxheVZhbHVlOiBzdHJpbmc7XG5cdHB1YmxpYyBzZWxlY3RlZDogYW55O1xuXHRwdWJsaWMgaGFuZGxlZEdyb3VwSXRlbXM6IGFueTtcblx0cHVibGljIGhhbmRsZWRJdGVtczogQXJyYXk8YW55PiA9IFtdO1xuXHRwdWJsaWMgZmlsdGVyQ3RybDogRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woKTtcblx0cHVibGljIG9uRGVzdHJveTogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cblx0LyoqXG5cdCogQGNvbnN0cnVjdG9yXG5cdCogQHBhcmFtIHthbnl9IGRlZmF1bHRPcHRpb25zXG5cdCogQHBhcmFtIHtUcmFuc2xhdGVTZXJ2aWNlfSB0cmFuc2xhdGVTZXJ2aWNlXG5cdCogQHBhcmFtIHtDaGFuZ2VEZXRlY3RvclJlZn0gY2RSZWZcblx0Ki9cblx0Y29uc3RydWN0b3IoXG5cdFx0QE9wdGlvbmFsKCkgQEluamVjdCggU0VMRUNUX0JPWF9ERUZBVUxUX09QVElPTlMgKSByZWFkb25seSBkZWZhdWx0T3B0aW9uczogYW55LFxuXHRcdHB1YmxpYyB0cmFuc2xhdGVTZXJ2aWNlXHQ6IFRyYW5zbGF0ZVNlcnZpY2UsXG5cdFx0cHVibGljIGNkUmVmXHRcdFx0OiBDaGFuZ2VEZXRlY3RvclJlZlxuXHQpIHtcblx0XHR0aGlzLmZpbHRlckN0cmwudmFsdWVDaGFuZ2VzXG5cdFx0LnBpcGUoIHRha2VVbnRpbCggdGhpcy5vbkRlc3Ryb3kgKSApXG5cdFx0LnN1YnNjcmliZSggKCBxdWVyeTogc3RyaW5nICkgPT4gdGhpcy5maWx0ZXJlZCA9IHRoaXMuZmlsdGVyKCBxdWVyeSApICk7XG5cdH1cblxuXHQvKipcblx0KiBAY29uc3RydWN0b3Jcblx0Ki9cblx0cHVibGljIG5nT25Jbml0KCkge1xuXHRcdC8vIExvYWQgZGF0YSB3aGVuIGNvbXBvbmVudCBpbml0aWFsXG5cdFx0dGhpcy5pbml0ICYmIHRoaXMubG9hZERhdGEoKTtcblx0fVxuXG5cdC8qKlxuXHQqIEBjb25zdHJ1Y3RvclxuXHQqIEBwYXJhbSB7U2ltcGxlQ2hhbmdlc30gY2hhbmdlc1xuXHQqL1xuXHRwdWJsaWMgbmdPbkNoYW5nZXMoIGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMgKSB7XG5cdFx0aWYgKCBjaGFuZ2VzLmRhdGEgJiYgXy5pc0FycmF5KCB0aGlzLmRhdGEgKSApIHtcblx0XHRcdHRoaXMub25JdGVtc0NoYW5nZSggdGhpcy5kYXRhICk7XG5cdFx0fVxuXG5cdFx0aWYgKCBjaGFuZ2VzLm5nTW9kZWwgKSB7XG5cdFx0XHR0aGlzLm9wdGlvbkNoYW5nZSggeyB2YWx1ZTogdGhpcy5uZ01vZGVsIH0gKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0KiBMb2FkIGRhdGFcblx0KiBAcmV0dXJuIHt2b2lkfVxuXHQqL1xuXHRwdWJsaWMgbG9hZERhdGEoKSB7XG5cdFx0aWYgKCAhdGhpcy5kYXRhIHx8ICF0aGlzLmRhdGEuc3Vic2NyaWJlIHx8ICFfLmlzRnVuY3Rpb24oIHRoaXMuZGF0YS5zdWJzY3JpYmUgKSApIHJldHVybjtcblxuXHRcdHRoaXMubG9hZGVkID0gZmFsc2U7XG5cblx0XHR0aGlzLmRhdGEuc3Vic2NyaWJlKCAoIHJlc3VsdDogYW55ICkgPT4gdGhpcy5vbkl0ZW1zQ2hhbmdlKCByZXN1bHQgKSApO1xuXHR9XG5cblx0LyoqXG5cdCogT24gaXRlbXMgY2hhbmdlXG5cdCogQHBhcmFtIHtBcnJheX0gaXRlbXNcblx0KiBAcmV0dXJuIHt2b2lkfVxuXHQqL1xuXHRwdWJsaWMgb25JdGVtc0NoYW5nZSggaXRlbXM6IEFycmF5PGFueT4gKSB7XG5cdFx0dGhpcy5oYW5kbGVkSXRlbXMgPSB0aGlzLnNvcnRcblx0XHRcdD8gXy5zb3J0QnkoIGl0ZW1zLCB0aGlzLmZpZWxkTmFtZSApXG5cdFx0XHQ6IF8uY2xvbmUoIGl0ZW1zICk7XG5cblx0XHRpZiAoIHRoaXMubXVsdGlEZXB0aCApIHtcblx0XHRcdHRoaXMuaGFuZGxlZEl0ZW1zID0gVXRpbGl0aWVzU2VydmljZS5jb252ZXJ0TXVsdGlEZXB0aChcblx0XHRcdFx0dGhpcy5oYW5kbGVkSXRlbXMsIHRoaXMuZmllbGRLZXksXG5cdFx0XHRcdHRoaXMuZmllbGRQYXJlbnRLZXksIHRoaXMuZmllbGROYW1lXG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdGlmICggdGhpcy5ncm91cHMgKSB0aGlzLmhhbmRsZWRHcm91cEl0ZW1zID0gdGhpcy5oYW5kbGVHcm91cEl0ZW1zKCk7XG5cblx0XHR0aGlzLmxvYWRlZCA9IHRydWU7XG5cdFx0dGhpcy5maWx0ZXJlZCA9IF8uY2xvbmUoIHRoaXMuaGFuZGxlZEl0ZW1zICk7XG5cdFx0dGhpcy5vcHRpb25DaGFuZ2UoIHsgdmFsdWU6IHRoaXMubmdNb2RlbCB9ICk7XG5cdH1cblxuXHQvKipcblx0KiBGaWx0ZXJcblx0KiBAcGFyYW0ge3N0cmluZ30gcXVlcnlcblx0KiBAcmV0dXJuIHtBcnJheX0gRmlsdGVyZWRcblx0Ki9cblx0cHVibGljIGZpbHRlciggcXVlcnk6IHN0cmluZyApOiBBcnJheTxhbnk+IHtcblx0XHRyZXR1cm4gdGhpcy5oYW5kbGVkSXRlbXMuZmlsdGVyKCAoIGl0ZW06IGFueSApID0+IHtcblx0XHRcdGNvbnN0IGZpbHRlclZhbHVlOiBzdHJpbmcgPSB0aGlzLmZpZWxkTmFtZSA/IGl0ZW1bIHRoaXMuZmllbGROYW1lIF0gOiBpdGVtO1xuXG5cdFx0XHRyZXR1cm4gVXRpbGl0aWVzU2VydmljZS5zdHJpcFZpZXRuYW1lc2VTeW1ib2woXG5cdFx0XHRcdGZpbHRlclZhbHVlXG5cdFx0XHRcdC50b0xvd2VyQ2FzZSgpXG5cdFx0XHRcdC5yZXBsYWNlKCAvIC9nLCAnJyApXG5cdFx0XHQpXG5cdFx0XHQuaW5kZXhPZihcblx0XHRcdFx0VXRpbGl0aWVzU2VydmljZS5zdHJpcFZpZXRuYW1lc2VTeW1ib2woXG5cdFx0XHRcdFx0cXVlcnlcblx0XHRcdFx0XHQudG9Mb3dlckNhc2UoKVxuXHRcdFx0XHRcdC5yZXBsYWNlKCAvIC9nLCAnJyApXG5cdFx0XHRcdClcblx0XHRcdCkgPiAtMTtcblx0XHR9ICk7XG5cdH1cblxuXHQvKipcblx0KiBPcHRpb24gY2hhbmdlXG5cdCogQHBhcmFtIHthbnl9IGV2XG5cdCogQHJldHVybiB7dm9pZH1cblx0Ki9cblx0cHVibGljIG9wdGlvbkNoYW5nZSggZXY6IGFueSApIHtcblx0XHRjb25zdCB2YWx1ZTogYW55ID0gZXYgJiYgZXYudmFsdWUgJiYgdGhpcy5tdWx0aXBsZSA/IGV2LnZhbHVlWyAwIF0gOiBldi52YWx1ZTtcblxuXHRcdHRoaXMuZGlzcGxheVZhbHVlID0gdGhpcy5lbXB0eUxhYmVsO1xuXHRcdHRoaXMuZGlzcGxheUltYWdlID0gdGhpcy5lbXB0eUltYWdlO1xuXG5cdFx0aWYgKCB2YWx1ZSAhPT0gbnVsbCAmJiB2YWx1ZSAhPT0gdW5kZWZpbmVkICkge1xuXHRcdFx0Y29uc3Qgc2VsZWN0ZWQ6IGFueSA9IF8uZmluZCggdGhpcy5oYW5kbGVkSXRlbXMsICggaXRlbTogYW55ICkgPT4gaXRlbVsgdGhpcy5maWVsZEtleSBdID09PSB2YWx1ZSApO1xuXG5cdFx0XHRpZiAoIHNlbGVjdGVkICkge1xuXHRcdFx0XHR0aGlzLmRpc3BsYXlWYWx1ZSA9IHRoaXMudHJhbnNsYXRlZFxuXHRcdFx0XHRcdD8gdGhpcy50cmFuc2xhdGVTZXJ2aWNlLmluc3RhbnQoIHNlbGVjdGVkWyB0aGlzLmZpZWxkTmFtZSBdIClcblx0XHRcdFx0XHQ6IHNlbGVjdGVkWyB0aGlzLmZpZWxkTmFtZSBdO1xuXHRcdFx0XHR0aGlzLmRpc3BsYXlWYWx1ZSArPSB0aGlzLm11bHRpcGxlICYmIGV2LnZhbHVlICYmIGV2LnZhbHVlLmxlbmd0aCA+IDFcblx0XHRcdFx0XHQ/ICcgKCsnXG5cdFx0XHRcdFx0XHQrIE51bWJlclNlcnZpY2UuYWRkQ29tbWFzKCBldi52YWx1ZS5sZW5ndGggLSAxIClcblx0XHRcdFx0XHRcdCsgJyAnXG5cdFx0XHRcdFx0XHQrIHRoaXMudHJhbnNsYXRlU2VydmljZS5pbnN0YW50KCAnR0VORVJBTC5MQUJFTFMuT1RIRVJTJyApLnRvTG93ZXJDYXNlKClcblx0XHRcdFx0XHRcdCsgJyknXG5cdFx0XHRcdFx0OiAnJztcblx0XHRcdFx0dGhpcy5kaXNwbGF5SW1hZ2UgPSBzZWxlY3RlZFsgdGhpcy5maWVsZEltYWdlIF07XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmRpc3BsYXlWYWx1ZSA9IHZhbHVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIEdldCBhbGwgbmVzdGVkIG9wdGlvbnMgd2hlbiBwYXJlbnQgb3B0aW9uIHdhcyBzZWxlY3RlZFxuXHRcdGlmICggdGhpcy5tdWx0aURlcHRoICYmICF0aGlzLmlzU2VsZWN0QWxsICYmICF0aGlzLm11bHRpcGxlICkge1xuXHRcdFx0bGV0IG5lc3RlZDogQXJyYXk8YW55PiA9IHRoaXMuZW1wdHlWYWx1ZTtcblxuXHRcdFx0aWYgKCB2YWx1ZSAhPT0gbnVsbCAmJiB2YWx1ZSAhPT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHRsZXQgY2hpbGRyZW46IEFycmF5PGFueT4gPSBbIHZhbHVlIF07XG5cblx0XHRcdFx0bmVzdGVkID0gWyAuLi5jaGlsZHJlbiBdO1xuXG5cdFx0XHRcdHdoaWxlICggY2hpbGRyZW4gJiYgY2hpbGRyZW4ubGVuZ3RoICkge1xuXHRcdFx0XHRcdGNoaWxkcmVuID0gXy5tYXAoXG5cdFx0XHRcdFx0XHRfLmZpbHRlciggdGhpcy5oYW5kbGVkSXRlbXMsICggaXRlbTogYW55ICkgPT4gXy5jb250YWlucyggY2hpbGRyZW4sIGl0ZW1bIHRoaXMuZmllbGRQYXJlbnRLZXkgXSApICksXG5cdFx0XHRcdFx0XHR0aGlzLmZpZWxkS2V5XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRuZXN0ZWQucHVzaCggLi4uY2hpbGRyZW4gKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnNlbGVjdGlvbkFsbE5lc3RlZE9wdGlvbkNoYW5nZS5lbWl0KCBuZXN0ZWQgKTtcblx0XHR9XG5cblx0XHR0aGlzLnNlbGVjdGlvbkNoYW5nZS5lbWl0KCBldiApO1xuXHRcdHRoaXMuc2VsZWN0aW9uT3B0aW9uQ2hhbmdlLmVtaXQoXG5cdFx0XHR0aGlzLm11bHRpcGxlXG5cdFx0XHRcdD8gXy5maWx0ZXIoIHRoaXMuaGFuZGxlZEl0ZW1zLCAoIGl0ZW06IGFueSApID0+IF8uY29udGFpbnMoIGV2LnZhbHVlLCBpdGVtWyB0aGlzLmZpZWxkS2V5IF0gKSApXG5cdFx0XHRcdDogXy5maW5kKCB0aGlzLmhhbmRsZWRJdGVtcywgKCBpdGVtOiBhbnkgKSA9PiB2YWx1ZSA9PT0gaXRlbVsgdGhpcy5maWVsZEtleSBdIClcblx0XHQpO1xuXHRcdHRoaXMuaXNTZWxlY3RBbGwgPSB0aGlzLm11bHRpcGxlXG5cdFx0XHQmJiB0aGlzLmhhbmRsZWRJdGVtc1xuXHRcdFx0JiYgdGhpcy5uZ01vZGVsXG5cdFx0XHQmJiB0aGlzLmhhbmRsZWRJdGVtcy5sZW5ndGggPT09IHRoaXMubmdNb2RlbC5sZW5ndGg7XG5cdH1cblxuXHQvKipcblx0KiBUb2dnbGUgc2VsZWN0IGFsbCBvcHRpb25zIGZvciBtdWx0cGxlIG1vZGVcblx0KiBAcmV0dXJuIHt2b2lkfVxuXHQqL1xuXHRwdWJsaWMgdG9nZ2xlU2VsZWN0QWxsKCkge1xuXHRcdHRoaXMubmdNb2RlbCA9IHRoaXMuaXNTZWxlY3RBbGwgPyBfLm1hcCggdGhpcy5oYW5kbGVkSXRlbXMsIHRoaXMuZmllbGRLZXkgKSA6IFtdO1xuXHRcdHRoaXMuY2RSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdHRoaXMub3B0aW9uQ2hhbmdlKCB7IHZhbHVlOiB0aGlzLm5nTW9kZWwgfSApO1xuXHR9XG5cblx0LyoqXG5cdCogSGFuZGxlIGdyb3VwIGl0ZW1zXG5cdCogQHJldHVybiB7YW55fVxuXHQqL1xuXHRwdWJsaWMgaGFuZGxlR3JvdXBJdGVtcygpIHtcblx0XHRjb25zdCBncm91cHM6IGFueSA9IHt9O1xuXHRcdGNvbnN0IG5vR3JvdXBzOiBBcnJheTxhbnk+ID0gW107XG5cblx0XHRfLmVhY2goIHRoaXMuaGFuZGxlZEl0ZW1zLCAoIGl0ZW06IGFueSApID0+IHtcblx0XHRcdGlmICggaXRlbS5ncm91cCApIHtcblx0XHRcdFx0aWYgKCAhZ3JvdXBzWyBpdGVtLmdyb3VwIF0gKSBncm91cHNbIGl0ZW0uZ3JvdXAgXSA9IFtdO1xuXHRcdFx0XHRncm91cHNbIGl0ZW0uZ3JvdXAgXS5wdXNoKCBpdGVtICk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0bm9Hcm91cHMucHVzaCggaXRlbSApO1xuXHRcdH0gKTtcblxuXHRcdHJldHVybiB7IGdyb3Vwcywgbm9fZ3JvdXBzOiBub0dyb3VwcyB9O1xuXHR9XG5cblx0LyoqXG5cdCogQ2hlY2sgZW1wdHkgdmFsdWUgaXMgc2VsZWN0ZWRcblx0KiBAcmV0dXJuIHtib29sZWFufVxuXHQqL1xuXHRwdWJsaWMgZ2V0IGlzRW1wdHlTZWxlY3RlZCgpOiBib29sZWFuIHtcblx0XHRpZiAoICF0aGlzLmVtcHR5TGFiZWwgKSByZXR1cm4gZmFsc2U7XG5cblx0XHRyZXR1cm4gdGhpcy5lbXB0eVZhbHVlICE9PSBudWxsICYmIHRoaXMuZW1wdHlWYWx1ZSAhPT0gdW5kZWZpbmVkXG5cdFx0XHQ/IHRoaXMubmdNb2RlbCA9PT0gdGhpcy5lbXB0eVZhbHVlXG5cdFx0XHQ6ICF0aGlzLm5nTW9kZWwgPT09ICF0aGlzLmVtcHR5VmFsdWU7XG5cdH1cblxuXHQvKipcblx0KiBDaGVjayBoaWRkZW4gaXRlbVxuXHQqIEBwYXJhbSB7YW55fSBpdGVtXG5cdCogQHJldHVybiB7Ym9vbGVhbn1cblx0Ki9cblx0cHVibGljIGlzSGlkZGVuSXRlbSggaXRlbTogYW55ICk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBpdGVtLmhpZGRlbiB8fCBfLmNvbnRhaW5zKCB0aGlzLmhpZGRlbkxpc3QsIGl0ZW1bIHRoaXMuZmllbGRLZXkgXSApO1xuXHR9XG5cblx0LyoqXG5cdCogQ2hlY2sgZGlzYWJsZWQgaXRlbVxuXHQqIEBwYXJhbSB7YW55fSBpdGVtXG5cdCogQHJldHVybiB7Ym9vbGVhbn1cblx0Ki9cblx0cHVibGljIGlzRGlzYWJsZWRJdGVtKCBpdGVtOiBhbnkgKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIGl0ZW0uZGlzYWJsZWQgfHwgXy5jb250YWlucyggdGhpcy5kaXNhYmxlZExpc3QsIGl0ZW1bIHRoaXMuZmllbGRLZXkgXSApO1xuXHR9XG5cbn1cbiJdfQ==