import * as tslib_1 from "tslib";
import { Input, Component, Output, EventEmitter, OnChanges, ViewEncapsulation, OnInit, SimpleChanges, ChangeDetectorRef, Optional, Inject, InjectionToken } from '@angular/core';
import { Subject } from 'rxjs';
import { FormControl } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import _ from 'underscore';
import { UtilitiesService } from '../../services/utilities.service';
import { NumberService } from '../../services/number.service';
export var SELECT_BOX_DEFAULT_OPTIONS = new InjectionToken('defaultOptions');
var SelectBoxComponent = /** @class */ (function () {
    /**
    * @constructor
    * @param {any} defaultOptions
    * @param {TranslateService} translateService
    * @param {ChangeDetectorRef} cdRef
    */
    function SelectBoxComponent(defaultOptions, translateService, cdRef) {
        var _this = this;
        this.defaultOptions = defaultOptions;
        this.translateService = translateService;
        this.cdRef = cdRef;
        this.formFieldClass = (this.defaultOptions || {}).formFieldClass || '';
        this.panelClass = (this.defaultOptions || {}).panelClass || '';
        this.floatLabel = (this.defaultOptions || {}).floatLabel || 'always';
        this.appearance = (this.defaultOptions || {}).appearance || 'outline';
        this.sort = true;
        this.formControl = new FormControl();
        this.fieldKey = 'id';
        this.fieldParentKey = 'parent_id';
        this.fieldName = 'name';
        this.placeholder = this.translateService.instant('GENERAL.PLACEHOLDERS.CHOOSE');
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
            .subscribe(function (query) { return _this.filtered = _this.filter(query); });
    }
    /**
    * @constructor
    */
    SelectBoxComponent.prototype.ngOnInit = function () {
        // Load data when component initial
        this.init && this.loadData();
    };
    /**
    * @constructor
    * @param {SimpleChanges} changes
    */
    SelectBoxComponent.prototype.ngOnChanges = function (changes) {
        if (changes.data && _.isArray(this.data)) {
            this.onItemsChange(this.data);
        }
        if (changes.ngModel) {
            this.optionChange({ value: this.ngModel });
        }
    };
    /**
    * Load data
    * @return {void}
    */
    SelectBoxComponent.prototype.loadData = function () {
        var _this = this;
        if (!this.data || !this.data.subscribe || !_.isFunction(this.data.subscribe))
            return;
        this.loaded = false;
        this.data.subscribe(function (result) { return _this.onItemsChange(result); });
    };
    /**
    * On items change
    * @param {Array} items
    * @return {void}
    */
    SelectBoxComponent.prototype.onItemsChange = function (items) {
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
    };
    /**
    * Filter
    * @param {string} query
    * @return {Array} Filtered
    */
    SelectBoxComponent.prototype.filter = function (query) {
        var _this = this;
        return this.handledItems.filter(function (item) {
            var filterValue = _this.fieldName ? item[_this.fieldName] : item;
            return UtilitiesService.stripVietnameseSymbol(filterValue
                .toLowerCase()
                .replace(/ /g, ''))
                .indexOf(UtilitiesService.stripVietnameseSymbol(query
                .toLowerCase()
                .replace(/ /g, ''))) > -1;
        });
    };
    /**
    * Option change
    * @param {any} ev
    * @return {void}
    */
    SelectBoxComponent.prototype.optionChange = function (ev) {
        var _this = this;
        var value = ev && ev.value && this.multiple ? ev.value[0] : ev.value;
        this.displayValue = this.emptyLabel;
        this.displayImage = this.emptyImage;
        if (value !== null && value !== undefined) {
            var selected = _.find(this.handledItems, function (item) { return item[_this.fieldKey] === value; });
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
            var nested = this.emptyValue;
            if (value !== null && value !== undefined) {
                var children_1 = [value];
                nested = tslib_1.__spread(children_1);
                while (children_1 && children_1.length) {
                    children_1 = _.map(_.filter(this.handledItems, function (item) { return _.contains(children_1, item[_this.fieldParentKey]); }), this.fieldKey);
                    nested.push.apply(nested, tslib_1.__spread(children_1));
                }
            }
            this.selectionAllNestedOptionChange.emit(nested);
        }
        this.selectionChange.emit(ev);
        this.selectionOptionChange.emit(this.multiple
            ? _.filter(this.handledItems, function (item) { return _.contains(ev.value, item[_this.fieldKey]); })
            : _.find(this.handledItems, function (item) { return value === item[_this.fieldKey]; }));
    };
    /**
    * Toggle select all options for multple mode
    * @return {void}
    */
    SelectBoxComponent.prototype.toggleSelectAll = function () {
        this.ngModel = this.isSelectAll ? _.map(this.handledItems, this.fieldKey) : [];
        this.cdRef.detectChanges();
        this.optionChange({ value: this.ngModel });
    };
    /**
    * Handle group items
    * @return {any}
    */
    SelectBoxComponent.prototype.handleGroupItems = function () {
        var groups = {};
        var noGroups = [];
        _.each(this.handledItems, function (item) {
            if (item.group) {
                if (!groups[item.group])
                    groups[item.group] = [];
                groups[item.group].push(item);
                return;
            }
            noGroups.push(item);
        });
        return { groups: groups, no_groups: noGroups };
    };
    Object.defineProperty(SelectBoxComponent.prototype, "isEmptySelected", {
        /**
        * Check empty value is selected
        * @return {boolean}
        */
        get: function () {
            if (!this.emptyLabel)
                return false;
            return this.emptyValue !== null && this.emptyValue !== undefined
                ? this.ngModel === this.emptyValue
                : !this.ngModel === !this.emptyValue;
        },
        enumerable: true,
        configurable: true
    });
    /**
    * Check hidden item
    * @param {any} item
    * @return {boolean}
    */
    SelectBoxComponent.prototype.isHiddenItem = function (item) {
        return item.hidden || _.contains(this.hiddenList, item[this.fieldKey]);
    };
    /**
    * Check disabled item
    * @param {any} item
    * @return {boolean}
    */
    SelectBoxComponent.prototype.isDisabledItem = function (item) {
        return item.disabled || _.contains(this.disabledList, item[this.fieldKey]);
    };
    SelectBoxComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [SELECT_BOX_DEFAULT_OPTIONS,] }] },
        { type: TranslateService },
        { type: ChangeDetectorRef }
    ]; };
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
        tslib_1.__metadata("design:type", Boolean)
    ], SelectBoxComponent.prototype, "sort", void 0);
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
            template: "<div class=\"select-box layout-column flex-noshirnk\" [ngClass]=\"defaultOptions?.componentClass\"><ng-template [ngIf]=\"noFormField\"><mat-label *ngIf=\"label\">{{ label }}</mat-label><ng-template [ngIf]=\"readonly\"><input matInput [disableControl]=\"disableControl || disabled\" [value]=\"displayValue || &quot;&quot;\" [placeholder]=\"isEmptySelected ? emptyLabel : placeholder\" [formControl]=\"formControl\" [required]=\"required\" ngDefaultControl readonly></ng-template><ng-template [ngIf]=\"!readonly\"><mat-select matInput [panelClass]=\"[ panelClass, &quot;select-box__panel&quot; ]\" [multiple]=\"multiple\" [disableControl]=\"disableControl || disabled\" [(ngModel)]=\"ngModel\" (ngModelChange)=\"ngModelChange?.emit( ngModel )\" (selectionChange)=\"optionChange( $event )\" [placeholder]=\"isEmptySelected ? emptyLabel : placeholder\" [formControl]=\"formControl\" (openedChange)=\"$event &amp;&amp; !loaded &amp;&amp; loadData(); openedChange?.emit( $event );\" [required]=\"required\" ngDefaultControl><ngx-mat-select-search class=\"select-box__search\" [placeholderLabel]=\"&quot;GENERAL.PLACEHOLDERS.SEARCH&quot; | translate\" [noEntriesFoundLabel]=\"&quot;GENERAL.LABELS.NOT_FOUND&quot; | translate\" [formControl]=\"filterCtrl\"></ngx-mat-select-search><mat-select-trigger><ng-template [ngIf]=\"displayImage\"><div class=\"select-box__display-image\"><avatar-box size=\"24\" [lazy]=\"false\" [source]=\"displayImage\" [title]=\"displayValue\" [defaultAvatar]=\"defaultImage\"></avatar-box>{{ displayValue }}</div></ng-template><ng-template [ngIf]=\"!displayImage\">{{ displayValue }}</ng-template></mat-select-trigger><loading-overlay [visible]=\"!loaded\"><mat-checkbox class=\"select-box__checkbox\" matRipple matRippleColor=\"rgba(0, 0, 0, .7)\" *ngIf=\"multiple &amp;&amp; handledItems?.length &amp;&amp; !filterCtrl?.value?.length\" color=\"primary\" [(ngModel)]=\"isSelectAll\" [checked]=\"handledItems?.length === ngModel?.length\" (change)=\"toggleSelectAll()\">{{ \"GENERAL.LABELS.SELECT_ALL\" | translate }}\n({{ ( handledItems?.length || 0 ) | commas }} {{ \"GENERAL.LABELS.ITEMS\" | translate }})</mat-checkbox><mat-option empty *ngIf=\"!loaded || emptyLabel\" [value]=\"emptyValue\"><div class=\"layout-row layout-align-start-center\"><avatar-box class=\"mr-5\" *ngIf=\"emptyImage\" size=\"28\" [source]=\"emptyImage\" [defaultAvatar]=\"defaultImage\"></avatar-box>{{ emptyLabel }}</div></mat-option><ng-template [ngIf]=\"groups\"><mat-option *ngFor=\"let item of handledGroupItems?.no_groups\" [class.hide]=\"isHiddenItem( item )\" [disabled]=\"isDisabledItem( item )\" [value]=\"item[ fieldKey ]\"><div class=\"layout-row layout-align-start-center\"><avatar-box class=\"mr-5\" *ngIf=\"fieldImage\" size=\"28\" [source]=\"item[ fieldImage ]\" [defaultAvatar]=\"defaultImage\" [title]=\"item[ fieldName ]\"></avatar-box><ng-template [ngIf]=\"!translated\"><div class=\"line-height-14\">{{ item?.__name || item[ fieldName ] || \"N/A\" }}&nbsp;<div class=\"font-size-10\" *ngIf=\"fieldSubName\">{{ item[ fieldSubName ] || \"N/A\" }}</div></div></ng-template><ng-template [ngIf]=\"translated\"><div class=\"line-height-14\">{{ item?.__name || ( item[ fieldName ] | translate ) || \"N/A\" }}&nbsp;<div class=\"font-size-10\" *ngIf=\"fieldSubName\">{{ item[ fieldSubName ] | translate }}</div></div></ng-template></div></mat-option><mat-optgroup *ngFor=\"let group of groups\" [label]=\"group?.name || &quot;N/A&quot;\"><mat-option *ngFor=\"let item of handledGroupItems?.groups[ group?.id ]\" [class.hide]=\"isHiddenItem( item )\" [disabled]=\"isDisabledItem( item )\" [value]=\"item[ fieldKey ]\"><div class=\"layout-row layout-align-start-center\"><avatar-box class=\"mr-5\" *ngIf=\"fieldImage\" size=\"28\" [source]=\"item[ fieldImage ]\" [defaultAvatar]=\"defaultImage\" [title]=\"item[ fieldName ]\"></avatar-box><ng-template [ngIf]=\"!translated\"><div class=\"line-height-14\">{{ item?.__name || item[ fieldName ] || \"N/A\" }}&nbsp;<div class=\"font-size-10\" *ngIf=\"fieldSubName\">{{ item[ fieldSubName ] || \"N/A\" }}</div></div></ng-template><ng-template [ngIf]=\"translated\"><div class=\"line-height-14\">{{ item?.__name || ( item[ fieldName ] | translate ) || \"N/A\" }}&nbsp;<div class=\"font-size-10\" *ngIf=\"fieldSubName\">{{ item[ fieldSubName ] | translate }}</div></div></ng-template></div></mat-option></mat-optgroup></ng-template><ng-template [ngIf]=\"!groups\"><mat-option *ngFor=\"let item of filtered\" [class.hide]=\"isHiddenItem( item )\" [disabled]=\"isDisabledItem( item )\" [value]=\"item[ fieldKey ]\"><div class=\"layout-row layout-align-start-center\"><avatar-box class=\"mr-5\" *ngIf=\"fieldImage\" size=\"28\" [source]=\"item[ fieldImage ]\" [defaultAvatar]=\"defaultImage\" [title]=\"item[ fieldName ]\"></avatar-box><ng-template [ngIf]=\"!translated\"><div class=\"line-height-14\">{{ item?.__name || item[ fieldName ] || \"N/A\" }}&nbsp;<div class=\"font-size-10\" *ngIf=\"fieldSubName\">{{ item[ fieldSubName ] || \"N/A\" }}</div></div></ng-template><ng-template [ngIf]=\"translated\"><div class=\"line-height-14\">{{ item?.__name || ( item[ fieldName ] | translate ) || \"N/A\" }}&nbsp;<div class=\"font-size-10\" *ngIf=\"fieldSubName\">{{ item[ fieldSubName ] | translate }}</div></div></ng-template></div></mat-option></ng-template></loading-overlay></mat-select></ng-template></ng-template><ng-template [ngIf]=\"!noFormField\"><mat-form-field [class.select-box__empty-selected]=\"isEmptySelected\" [class.select-box__no-error-spacing]=\"noErrorSpacing\" [floatLabel]=\"floatLabel\" [appearance]=\"appearance\" [ngClass]=\"formFieldClass\"><mat-label *ngIf=\"label\">{{ label }}</mat-label><ng-template [ngIf]=\"readonly\"><input matInput [disableControl]=\"disableControl || disabled\" [value]=\"displayValue || &quot;&quot;\" [placeholder]=\"isEmptySelected ? emptyLabel : placeholder\" [formControl]=\"formControl\" [required]=\"required\" ngDefaultControl readonly></ng-template><ng-template [ngIf]=\"!readonly\"><mat-select matInput [panelClass]=\"[ panelClass, &quot;select-box__panel&quot; ]\" [multiple]=\"multiple\" [disableControl]=\"disableControl || disabled\" [(ngModel)]=\"ngModel\" (ngModelChange)=\"ngModelChange?.emit( ngModel )\" (selectionChange)=\"optionChange( $event )\" [placeholder]=\"isEmptySelected ? emptyLabel : placeholder\" [formControl]=\"formControl\" (openedChange)=\"$event &amp;&amp; !loaded &amp;&amp; loadData(); openedChange?.emit( $event );\" [required]=\"required\" ngDefaultControl><ngx-mat-select-search class=\"select-box__search\" [placeholderLabel]=\"&quot;GENERAL.PLACEHOLDERS.SEARCH&quot; | translate\" [noEntriesFoundLabel]=\"&quot;GENERAL.LABELS.NOT_FOUND&quot; | translate\" [formControl]=\"filterCtrl\"></ngx-mat-select-search><mat-select-trigger><ng-template [ngIf]=\"displayImage\"><div class=\"select-box__display-image\"><avatar-box size=\"24\" [lazy]=\"false\" [source]=\"displayImage\" [title]=\"displayValue\" [defaultAvatar]=\"defaultImage\"></avatar-box>{{ displayValue }}</div></ng-template><ng-template [ngIf]=\"!displayImage\">{{ displayValue }}</ng-template></mat-select-trigger><loading-overlay [visible]=\"!loaded\"><mat-checkbox class=\"select-box__checkbox\" matRipple matRippleColor=\"rgba(0, 0, 0, .7)\" *ngIf=\"multiple &amp;&amp; handledItems?.length &amp;&amp; !filterCtrl?.value?.length\" color=\"primary\" [(ngModel)]=\"isSelectAll\" [checked]=\"handledItems?.length === ngModel?.length\" (change)=\"toggleSelectAll()\">{{ \"GENERAL.LABELS.SELECT_ALL\" | translate }}\n({{ ( handledItems?.length || 0 ) | commas }} {{ \"GENERAL.LABELS.ITEMS\" | translate }})</mat-checkbox><mat-option empty *ngIf=\"!loaded || emptyLabel\" [value]=\"emptyValue\"><div class=\"layout-row layout-align-start-center\"><avatar-box class=\"mr-5\" *ngIf=\"emptyImage\" size=\"28\" [source]=\"emptyImage\" [defaultAvatar]=\"defaultImage\"></avatar-box>{{ emptyLabel }}</div></mat-option><ng-template [ngIf]=\"groups\"><mat-option *ngFor=\"let item of handledGroupItems?.no_groups\" [class.hide]=\"isHiddenItem( item )\" [disabled]=\"isDisabledItem( item )\" [value]=\"item[ fieldKey ]\"><div class=\"layout-row layout-align-start-center\"><avatar-box class=\"mr-5\" *ngIf=\"fieldImage\" size=\"28\" [source]=\"item[ fieldImage ]\" [defaultAvatar]=\"defaultImage\" [title]=\"item[ fieldName ]\"></avatar-box><ng-template [ngIf]=\"!translated\"><div class=\"line-height-14\">{{ item?.__name || item[ fieldName ] || \"N/A\" }}&nbsp;<div class=\"font-size-10\" *ngIf=\"fieldSubName\">{{ item[ fieldSubName ] || \"N/A\" }}</div></div></ng-template><ng-template [ngIf]=\"translated\"><div class=\"line-height-14\">{{ item?.__name || ( item[ fieldName ] | translate ) || \"N/A\" }}&nbsp;<div class=\"font-size-10\" *ngIf=\"fieldSubName\">{{ item[ fieldSubName ] | translate }}</div></div></ng-template></div></mat-option><mat-optgroup *ngFor=\"let group of groups\" [label]=\"group?.name || &quot;N/A&quot;\"><mat-option *ngFor=\"let item of handledGroupItems?.groups[ group?.id ]\" [class.hide]=\"isHiddenItem( item )\" [disabled]=\"isDisabledItem( item )\" [value]=\"item[ fieldKey ]\"><div class=\"layout-row layout-align-start-center\"><avatar-box class=\"mr-5\" *ngIf=\"fieldImage\" size=\"28\" [source]=\"item[ fieldImage ]\" [defaultAvatar]=\"defaultImage\" [title]=\"item[ fieldName ]\"></avatar-box><ng-template [ngIf]=\"!translated\"><div class=\"line-height-14\">{{ item?.__name || item[ fieldName ] || \"N/A\" }}&nbsp;<div class=\"font-size-10\" *ngIf=\"fieldSubName\">{{ item[ fieldSubName ] || \"N/A\" }}</div></div></ng-template><ng-template [ngIf]=\"translated\"><div class=\"line-height-14\">{{ item?.__name || ( item[ fieldName ] | translate ) || \"N/A\" }}&nbsp;<div class=\"font-size-10\" *ngIf=\"fieldSubName\">{{ item[ fieldSubName ] | translate }}</div></div></ng-template></div></mat-option></mat-optgroup></ng-template><ng-template [ngIf]=\"!groups\"><mat-option *ngFor=\"let item of filtered\" [class.hide]=\"isHiddenItem( item )\" [disabled]=\"isDisabledItem( item )\" [value]=\"item[ fieldKey ]\"><div class=\"layout-row layout-align-start-center\"><avatar-box class=\"mr-5\" *ngIf=\"fieldImage\" size=\"28\" [source]=\"item[ fieldImage ]\" [defaultAvatar]=\"defaultImage\" [title]=\"item[ fieldName ]\"></avatar-box><ng-template [ngIf]=\"!translated\"><div class=\"line-height-14\">{{ item?.__name || item[ fieldName ] || \"N/A\" }}&nbsp;<div class=\"font-size-10\" *ngIf=\"fieldSubName\">{{ item[ fieldSubName ] || \"N/A\" }}</div></div></ng-template><ng-template [ngIf]=\"translated\"><div class=\"line-height-14\">{{ item?.__name || ( item[ fieldName ] | translate ) || \"N/A\" }}&nbsp;<div class=\"font-size-10\" *ngIf=\"fieldSubName\">{{ item[ fieldSubName ] | translate }}</div></div></ng-template></div></mat-option></ng-template></loading-overlay></mat-select></ng-template><mat-error><error-message [label]=\"label\" [control]=\"formControl\"></error-message></mat-error></mat-form-field></ng-template></div>",
            host: { class: 'flex-noshrink layout-column' },
            encapsulation: ViewEncapsulation.None,
            styles: [".select-box__empty-selected .mat-select-placeholder{color:rgba(0,0,0,.87)!important;-webkit-text-fill-color:currentColor!important}.select-box__empty-selected.mat-form-field-hide-placeholder .mat-form-field-label{display:none}.select-box__no-error-spacing .mat-form-field-wrapper{padding:0}.select-box__no-error-spacing .mat-form-field-underline{bottom:0}.select-box__search{display:block}.select-box__search .mat-select-search-input{min-height:52px}.select-box__checkbox{display:flex;line-height:3em;height:3em;padding:0 16px}.select-box__checkbox:hover{background-color:#f5f5f5}.select-box__checkbox.mat-checkbox-checked .mat-checkbox-background{border:2px solid transparent}.select-box__checkbox.mat-checkbox-checked .mat-checkbox-background:after{display:block}.select-box__checkbox .mat-checkbox-inner-container{margin-left:unset;margin-top:unset;margin-bottom:unset;margin-right:8px}.select-box__checkbox .mat-checkbox-layout{align-items:center;margin-top:7px;width:100%}.select-box__checkbox .mat-checkbox-label{color:rgba(0,0,0,.87);font-size:14px}.select-box__checkbox .mat-checkbox-background:after{top:3px;width:8px;height:3px;border-left:2px solid currentColor;transform:rotate(-45deg);opacity:1;box-sizing:content-box;color:#fafafa;position:absolute;content:'';border-bottom:2px solid currentColor;transition:opacity 90ms cubic-bezier(0,0,.2,.1);display:none}.select-box__checkbox .mat-checkbox-background .mat-checkbox-mixedmark,.select-box__checkbox .mat-checkbox-background svg{display:none}.select-box__panel .mat-option-text{white-space:normal}.select-box__display-image{padding-left:30px}.select-box__display-image avatar-box{position:absolute;left:0;top:-5px}"]
        }),
        tslib_1.__param(0, Optional()), tslib_1.__param(0, Inject(SELECT_BOX_DEFAULT_OPTIONS)),
        tslib_1.__metadata("design:paramtypes", [Object, TranslateService,
            ChangeDetectorRef])
    ], SelectBoxComponent);
    return SelectBoxComponent;
}());
export { SelectBoxComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWJveC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNvcmUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zZWxlY3QtYm94L3NlbGVjdC1ib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ04sS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQ3hCLFlBQVksRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQzFDLE1BQU0sRUFBRSxhQUFhLEVBQUUsaUJBQWlCLEVBQ3hDLFFBQVEsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUNoQyxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxDQUFDLE1BQU0sWUFBWSxDQUFDO0FBRTNCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUU5RCxNQUFNLENBQUMsSUFBTSwwQkFBMEIsR0FBd0IsSUFBSSxjQUFjLENBQU8sZ0JBQWdCLENBQUUsQ0FBQztBQVMzRztJQW9EQzs7Ozs7TUFLRTtJQUNGLDRCQUM0RCxjQUFtQixFQUN2RSxnQkFBbUMsRUFDbkMsS0FBMkI7UUFIbkMsaUJBUUM7UUFQMkQsbUJBQWMsR0FBZCxjQUFjLENBQUs7UUFDdkUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFtQjtRQUNuQyxVQUFLLEdBQUwsS0FBSyxDQUFzQjtRQXBDbkIsbUJBQWMsR0FBVyxDQUFFLElBQUksQ0FBQyxjQUFjLElBQUksRUFBRSxDQUFFLENB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SUFDakY7UUFBUixLQUFLLEVBQUU7OzBEQUFtRjtJQUNsRjtRQUFSLEtBQUssRUFBRTs7b0RBQTZCO0lBQzVCO1FBQVIsS0FBSyxFQUFFOzBDQUFxQixXQUFXOzJEQUFxQjtJQUNwRDtRQUFSLEtBQUssRUFBRTs7d0RBQWdDO0lBQy9CO1FBQVIsS0FBSyxFQUFFOzs4REFBNkM7SUFDNUM7UUFBUixLQUFLLEVBQUU7O3lEQUFtQztJQUNsQztRQUFSLEtBQUssRUFBRTs7MkRBQTZGO0lBRTNGO1FBQVQsTUFBTSxFQUFFOzBDQUF1QixZQUFZOzZEQUFnQztJQUNsRTtRQUFULE1BQU0sRUFBRTswQ0FBeUIsWUFBWTsrREFBZ0M7SUFDcEU7UUFBVCxNQUFNLEVBQUU7MENBQStCLFlBQVk7cUVBQWdDO0lBQzFFO1FBQVQsTUFBTSxFQUFFOzBDQUF3QyxZQUFZOzhFQUFnQztJQUNuRjtRQUFULE1BQU0sRUFBRTswQ0FBc0IsWUFBWTs0REFBZ0M7SUF4Qy9ELGtCQUFrQjtRQVA5QixTQUFTLENBQUM7WUFDVixRQUFRLEVBQUksWUFBWTtZQUN4QiwrdFZBQWlDO1lBRWpDLElBQUksRUFBSyxFQUFFLEtBQUssRUFBRSw2QkFBNkIsRUFBRTtZQUNqRCxhQUFhLEVBQUcsaUJBQWlCLENBQUMsSUFBSTs7U0FDdEMsQ0FBQztRQTREQyxtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLE1BQU0sQ0FBRSwwQkFBMEIsQ0FBRSxDQUFBO3lEQUN2QixnQkFBZ0I7WUFDekIsaUJBQWlCO09BN0R2QixrQkFBa0IsQ0ErUTlCO0lBQUQseUJBQUM7Q0FBQSxBQS9RRCxJQStRQztTQS9RWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRJbnB1dCwgQ29tcG9uZW50LCBPdXRwdXQsXG5cdEV2ZW50RW1pdHRlciwgT25DaGFuZ2VzLCBWaWV3RW5jYXBzdWxhdGlvbixcblx0T25Jbml0LCBTaW1wbGVDaGFuZ2VzLCBDaGFuZ2VEZXRlY3RvclJlZixcblx0T3B0aW9uYWwsIEluamVjdCwgSW5qZWN0aW9uVG9rZW5cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcbmltcG9ydCBfIGZyb20gJ3VuZGVyc2NvcmUnO1xuXG5pbXBvcnQgeyBVdGlsaXRpZXNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdXRpbGl0aWVzLnNlcnZpY2UnO1xuaW1wb3J0IHsgTnVtYmVyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL251bWJlci5zZXJ2aWNlJztcblxuZXhwb3J0IGNvbnN0IFNFTEVDVF9CT1hfREVGQVVMVF9PUFRJT05TOiBJbmplY3Rpb25Ub2tlbjxhbnk+ID0gbmV3IEluamVjdGlvblRva2VuPGFueT4oICdkZWZhdWx0T3B0aW9ucycgKTtcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yXHRcdDogJ3NlbGVjdC1ib3gnLFxuXHR0ZW1wbGF0ZVVybFx0XHQ6ICcuL3NlbGVjdC1ib3gucHVnJyxcblx0c3R5bGVVcmxzXHRcdDogWyAnLi9zZWxlY3QtYm94LnNjc3MnIF0sXG5cdGhvc3RcdFx0XHQ6IHsgY2xhc3M6ICdmbGV4LW5vc2hyaW5rIGxheW91dC1jb2x1bW4nIH0sXG5cdGVuY2Fwc3VsYXRpb25cdDogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0Qm94Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuXG5cdEBJbnB1dCgpIHB1YmxpYyBuZ01vZGVsOiBhbnk7XG5cdEBJbnB1dCgpIHB1YmxpYyBpbml0OiBib29sZWFuO1xuXHRASW5wdXQoKSBwdWJsaWMgcmVxdWlyZWQ6IGJvb2xlYW47XG5cdEBJbnB1dCgpIHB1YmxpYyBkaXNhYmxlZDogYm9vbGVhbjtcblx0QElucHV0KCkgcHVibGljIGRpc2FibGVDb250cm9sOiBib29sZWFuO1xuXHRASW5wdXQoKSBwdWJsaWMgcmVhZG9ubHk6IGJvb2xlYW47XG5cdEBJbnB1dCgpIHB1YmxpYyBtdWx0aXBsZTogYm9vbGVhbjtcblx0QElucHV0KCkgcHVibGljIHRyYW5zbGF0ZWQ6IGJvb2xlYW47XG5cdEBJbnB1dCgpIHB1YmxpYyBsYWJlbDogc3RyaW5nO1xuXHRASW5wdXQoKSBwdWJsaWMgZW1wdHlMYWJlbDogc3RyaW5nO1xuXHRASW5wdXQoKSBwdWJsaWMgZW1wdHlWYWx1ZTogYW55O1xuXHRASW5wdXQoKSBwdWJsaWMgZW1wdHlJbWFnZTogc3RyaW5nO1xuXHRASW5wdXQoKSBwdWJsaWMgZGVmYXVsdEltYWdlOiBzdHJpbmc7XG5cdEBJbnB1dCgpIHB1YmxpYyBkYXRhOiBhbnk7XG5cdEBJbnB1dCgpIHB1YmxpYyBoaWRkZW5MaXN0OiBBcnJheTxhbnk+O1xuXHRASW5wdXQoKSBwdWJsaWMgZGlzYWJsZWRMaXN0OiBBcnJheTxhbnk+O1xuXHRASW5wdXQoKSBwdWJsaWMgZmlsdGVyZWQ6IEFycmF5PGFueT47XG5cdEBJbnB1dCgpIHB1YmxpYyBncm91cHM6IEFycmF5PGFueT47XG5cdEBJbnB1dCgpIHB1YmxpYyBmaWVsZEltYWdlOiBzdHJpbmc7XG5cdEBJbnB1dCgpIHB1YmxpYyBmaWVsZFN1Yk5hbWU6IHN0cmluZztcblx0QElucHV0KCkgcHVibGljIG5vRm9ybUZpZWxkOiBib29sZWFuO1xuXHRASW5wdXQoKSBwdWJsaWMgbm9FcnJvclNwYWNpbmc6IGJvb2xlYW47XG5cdEBJbnB1dCgpIHB1YmxpYyBtdWx0aURlcHRoOiBib29sZWFuO1xuXHRASW5wdXQoKSBwdWJsaWMgZm9ybUZpZWxkQ2xhc3M6IHN0cmluZyA9ICggdGhpcy5kZWZhdWx0T3B0aW9ucyB8fCB7fSApLmZvcm1GaWVsZENsYXNzIHx8ICcnO1xuXHRASW5wdXQoKSBwdWJsaWMgcGFuZWxDbGFzczogc3RyaW5nID0gKCB0aGlzLmRlZmF1bHRPcHRpb25zIHx8IHt9ICkucGFuZWxDbGFzcyB8fCAnJztcblx0QElucHV0KCkgcHVibGljIGZsb2F0TGFiZWw6IHN0cmluZyA9ICggdGhpcy5kZWZhdWx0T3B0aW9ucyB8fCB7fSApLmZsb2F0TGFiZWwgfHwgJ2Fsd2F5cyc7XG5cdEBJbnB1dCgpIHB1YmxpYyBhcHBlYXJhbmNlOiBzdHJpbmcgPSAoIHRoaXMuZGVmYXVsdE9wdGlvbnMgfHwge30gKS5hcHBlYXJhbmNlIHx8ICdvdXRsaW5lJztcblx0QElucHV0KCkgcHVibGljIHNvcnQ6IGJvb2xlYW4gPSB0cnVlO1xuXHRASW5wdXQoKSBwdWJsaWMgZm9ybUNvbnRyb2w6IEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKCk7XG5cdEBJbnB1dCgpIHB1YmxpYyBmaWVsZEtleTogc3RyaW5nID0gJ2lkJztcblx0QElucHV0KCkgcHVibGljIGZpZWxkUGFyZW50S2V5OiBzdHJpbmcgPSAncGFyZW50X2lkJztcblx0QElucHV0KCkgcHVibGljIGZpZWxkTmFtZTogc3RyaW5nID0gJ25hbWUnO1xuXHRASW5wdXQoKSBwdWJsaWMgcGxhY2Vob2xkZXI6IHN0cmluZyA9IHRoaXMudHJhbnNsYXRlU2VydmljZS5pbnN0YW50KCAnR0VORVJBTC5QTEFDRUhPTERFUlMuQ0hPT1NFJyApO1xuXG5cdEBPdXRwdXQoKSBwdWJsaWMgbmdNb2RlbENoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblx0QE91dHB1dCgpIHB1YmxpYyBzZWxlY3Rpb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cdEBPdXRwdXQoKSBwdWJsaWMgc2VsZWN0aW9uT3B0aW9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXHRAT3V0cHV0KCkgcHVibGljIHNlbGVjdGlvbkFsbE5lc3RlZE9wdGlvbkNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblx0QE91dHB1dCgpIHB1YmxpYyBvcGVuZWRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cblx0cHVibGljIGxvYWRlZDogYm9vbGVhbjtcblx0cHVibGljIGlzU2VsZWN0QWxsOiBib29sZWFuO1xuXHRwdWJsaWMgZGlzcGxheUltYWdlOiBzdHJpbmc7XG5cdHB1YmxpYyBkaXNwbGF5VmFsdWU6IHN0cmluZztcblx0cHVibGljIHNlbGVjdGVkOiBhbnk7XG5cdHB1YmxpYyBoYW5kbGVkR3JvdXBJdGVtczogYW55O1xuXHRwdWJsaWMgaGFuZGxlZEl0ZW1zOiBBcnJheTxhbnk+ID0gW107XG5cdHB1YmxpYyBmaWx0ZXJDdHJsOiBGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgpO1xuXHRwdWJsaWMgb25EZXN0cm95OiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuXHQvKipcblx0KiBAY29uc3RydWN0b3Jcblx0KiBAcGFyYW0ge2FueX0gZGVmYXVsdE9wdGlvbnNcblx0KiBAcGFyYW0ge1RyYW5zbGF0ZVNlcnZpY2V9IHRyYW5zbGF0ZVNlcnZpY2Vcblx0KiBAcGFyYW0ge0NoYW5nZURldGVjdG9yUmVmfSBjZFJlZlxuXHQqL1xuXHRjb25zdHJ1Y3Rvcihcblx0XHRAT3B0aW9uYWwoKSBASW5qZWN0KCBTRUxFQ1RfQk9YX0RFRkFVTFRfT1BUSU9OUyApIHJlYWRvbmx5IGRlZmF1bHRPcHRpb25zOiBhbnksXG5cdFx0cHVibGljIHRyYW5zbGF0ZVNlcnZpY2VcdDogVHJhbnNsYXRlU2VydmljZSxcblx0XHRwdWJsaWMgY2RSZWZcdFx0XHQ6IENoYW5nZURldGVjdG9yUmVmXG5cdCkge1xuXHRcdHRoaXMuZmlsdGVyQ3RybC52YWx1ZUNoYW5nZXNcblx0XHQucGlwZSggdGFrZVVudGlsKCB0aGlzLm9uRGVzdHJveSApIClcblx0XHQuc3Vic2NyaWJlKCAoIHF1ZXJ5OiBzdHJpbmcgKSA9PiB0aGlzLmZpbHRlcmVkID0gdGhpcy5maWx0ZXIoIHF1ZXJ5ICkgKTtcblx0fVxuXG5cdC8qKlxuXHQqIEBjb25zdHJ1Y3RvclxuXHQqL1xuXHRwdWJsaWMgbmdPbkluaXQoKSB7XG5cdFx0Ly8gTG9hZCBkYXRhIHdoZW4gY29tcG9uZW50IGluaXRpYWxcblx0XHR0aGlzLmluaXQgJiYgdGhpcy5sb2FkRGF0YSgpO1xuXHR9XG5cblx0LyoqXG5cdCogQGNvbnN0cnVjdG9yXG5cdCogQHBhcmFtIHtTaW1wbGVDaGFuZ2VzfSBjaGFuZ2VzXG5cdCovXG5cdHB1YmxpYyBuZ09uQ2hhbmdlcyggY2hhbmdlczogU2ltcGxlQ2hhbmdlcyApIHtcblx0XHRpZiAoIGNoYW5nZXMuZGF0YSAmJiBfLmlzQXJyYXkoIHRoaXMuZGF0YSApICkge1xuXHRcdFx0dGhpcy5vbkl0ZW1zQ2hhbmdlKCB0aGlzLmRhdGEgKTtcblx0XHR9XG5cblx0XHRpZiAoIGNoYW5nZXMubmdNb2RlbCApIHtcblx0XHRcdHRoaXMub3B0aW9uQ2hhbmdlKCB7IHZhbHVlOiB0aGlzLm5nTW9kZWwgfSApO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQqIExvYWQgZGF0YVxuXHQqIEByZXR1cm4ge3ZvaWR9XG5cdCovXG5cdHB1YmxpYyBsb2FkRGF0YSgpIHtcblx0XHRpZiAoICF0aGlzLmRhdGEgfHwgIXRoaXMuZGF0YS5zdWJzY3JpYmUgfHwgIV8uaXNGdW5jdGlvbiggdGhpcy5kYXRhLnN1YnNjcmliZSApICkgcmV0dXJuO1xuXG5cdFx0dGhpcy5sb2FkZWQgPSBmYWxzZTtcblxuXHRcdHRoaXMuZGF0YS5zdWJzY3JpYmUoICggcmVzdWx0OiBhbnkgKSA9PiB0aGlzLm9uSXRlbXNDaGFuZ2UoIHJlc3VsdCApICk7XG5cdH1cblxuXHQvKipcblx0KiBPbiBpdGVtcyBjaGFuZ2Vcblx0KiBAcGFyYW0ge0FycmF5fSBpdGVtc1xuXHQqIEByZXR1cm4ge3ZvaWR9XG5cdCovXG5cdHB1YmxpYyBvbkl0ZW1zQ2hhbmdlKCBpdGVtczogQXJyYXk8YW55PiApIHtcblx0XHR0aGlzLmhhbmRsZWRJdGVtcyA9IHRoaXMuc29ydFxuXHRcdFx0PyBfLnNvcnRCeSggaXRlbXMsIHRoaXMuZmllbGROYW1lIClcblx0XHRcdDogXy5jbG9uZSggaXRlbXMgKTtcblxuXHRcdGlmICggdGhpcy5tdWx0aURlcHRoICkge1xuXHRcdFx0dGhpcy5oYW5kbGVkSXRlbXMgPSBVdGlsaXRpZXNTZXJ2aWNlLmNvbnZlcnRNdWx0aURlcHRoKFxuXHRcdFx0XHR0aGlzLmhhbmRsZWRJdGVtcywgdGhpcy5maWVsZEtleSxcblx0XHRcdFx0dGhpcy5maWVsZFBhcmVudEtleSwgdGhpcy5maWVsZE5hbWVcblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0aWYgKCB0aGlzLmdyb3VwcyApIHRoaXMuaGFuZGxlZEdyb3VwSXRlbXMgPSB0aGlzLmhhbmRsZUdyb3VwSXRlbXMoKTtcblxuXHRcdHRoaXMubG9hZGVkID0gdHJ1ZTtcblx0XHR0aGlzLmZpbHRlcmVkID0gXy5jbG9uZSggdGhpcy5oYW5kbGVkSXRlbXMgKTtcblx0XHR0aGlzLm9wdGlvbkNoYW5nZSggeyB2YWx1ZTogdGhpcy5uZ01vZGVsIH0gKTtcblx0fVxuXG5cdC8qKlxuXHQqIEZpbHRlclxuXHQqIEBwYXJhbSB7c3RyaW5nfSBxdWVyeVxuXHQqIEByZXR1cm4ge0FycmF5fSBGaWx0ZXJlZFxuXHQqL1xuXHRwdWJsaWMgZmlsdGVyKCBxdWVyeTogc3RyaW5nICk6IEFycmF5PGFueT4ge1xuXHRcdHJldHVybiB0aGlzLmhhbmRsZWRJdGVtcy5maWx0ZXIoICggaXRlbTogYW55ICkgPT4ge1xuXHRcdFx0Y29uc3QgZmlsdGVyVmFsdWU6IHN0cmluZyA9IHRoaXMuZmllbGROYW1lID8gaXRlbVsgdGhpcy5maWVsZE5hbWUgXSA6IGl0ZW07XG5cblx0XHRcdHJldHVybiBVdGlsaXRpZXNTZXJ2aWNlLnN0cmlwVmlldG5hbWVzZVN5bWJvbChcblx0XHRcdFx0ZmlsdGVyVmFsdWVcblx0XHRcdFx0LnRvTG93ZXJDYXNlKClcblx0XHRcdFx0LnJlcGxhY2UoIC8gL2csICcnIClcblx0XHRcdClcblx0XHRcdC5pbmRleE9mKFxuXHRcdFx0XHRVdGlsaXRpZXNTZXJ2aWNlLnN0cmlwVmlldG5hbWVzZVN5bWJvbChcblx0XHRcdFx0XHRxdWVyeVxuXHRcdFx0XHRcdC50b0xvd2VyQ2FzZSgpXG5cdFx0XHRcdFx0LnJlcGxhY2UoIC8gL2csICcnIClcblx0XHRcdFx0KVxuXHRcdFx0KSA+IC0xO1xuXHRcdH0gKTtcblx0fVxuXG5cdC8qKlxuXHQqIE9wdGlvbiBjaGFuZ2Vcblx0KiBAcGFyYW0ge2FueX0gZXZcblx0KiBAcmV0dXJuIHt2b2lkfVxuXHQqL1xuXHRwdWJsaWMgb3B0aW9uQ2hhbmdlKCBldjogYW55ICkge1xuXHRcdGNvbnN0IHZhbHVlOiBhbnkgPSBldiAmJiBldi52YWx1ZSAmJiB0aGlzLm11bHRpcGxlID8gZXYudmFsdWVbIDAgXSA6IGV2LnZhbHVlO1xuXG5cdFx0dGhpcy5kaXNwbGF5VmFsdWUgPSB0aGlzLmVtcHR5TGFiZWw7XG5cdFx0dGhpcy5kaXNwbGF5SW1hZ2UgPSB0aGlzLmVtcHR5SW1hZ2U7XG5cblx0XHRpZiAoIHZhbHVlICE9PSBudWxsICYmIHZhbHVlICE9PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRjb25zdCBzZWxlY3RlZDogYW55ID0gXy5maW5kKCB0aGlzLmhhbmRsZWRJdGVtcywgKCBpdGVtOiBhbnkgKSA9PiBpdGVtWyB0aGlzLmZpZWxkS2V5IF0gPT09IHZhbHVlICk7XG5cblx0XHRcdGlmICggc2VsZWN0ZWQgKSB7XG5cdFx0XHRcdHRoaXMuZGlzcGxheVZhbHVlID0gdGhpcy50cmFuc2xhdGVkXG5cdFx0XHRcdFx0PyB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuaW5zdGFudCggc2VsZWN0ZWRbIHRoaXMuZmllbGROYW1lIF0gKVxuXHRcdFx0XHRcdDogc2VsZWN0ZWRbIHRoaXMuZmllbGROYW1lIF07XG5cdFx0XHRcdHRoaXMuZGlzcGxheVZhbHVlICs9IHRoaXMubXVsdGlwbGUgJiYgZXYudmFsdWUgJiYgZXYudmFsdWUubGVuZ3RoID4gMVxuXHRcdFx0XHRcdD8gJyAoKydcblx0XHRcdFx0XHRcdCsgTnVtYmVyU2VydmljZS5hZGRDb21tYXMoIGV2LnZhbHVlLmxlbmd0aCAtIDEgKVxuXHRcdFx0XHRcdFx0KyAnICdcblx0XHRcdFx0XHRcdCsgdGhpcy50cmFuc2xhdGVTZXJ2aWNlLmluc3RhbnQoICdHRU5FUkFMLkxBQkVMUy5PVEhFUlMnICkudG9Mb3dlckNhc2UoKVxuXHRcdFx0XHRcdFx0KyAnKSdcblx0XHRcdFx0XHQ6ICcnO1xuXHRcdFx0XHR0aGlzLmRpc3BsYXlJbWFnZSA9IHNlbGVjdGVkWyB0aGlzLmZpZWxkSW1hZ2UgXTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuZGlzcGxheVZhbHVlID0gdmFsdWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gR2V0IGFsbCBuZXN0ZWQgb3B0aW9ucyB3aGVuIHBhcmVudCBvcHRpb24gd2FzIHNlbGVjdGVkXG5cdFx0aWYgKCB0aGlzLm11bHRpRGVwdGggJiYgIXRoaXMuaXNTZWxlY3RBbGwgJiYgIXRoaXMubXVsdGlwbGUgKSB7XG5cdFx0XHRsZXQgbmVzdGVkOiBBcnJheTxhbnk+ID0gdGhpcy5lbXB0eVZhbHVlO1xuXG5cdFx0XHRpZiAoIHZhbHVlICE9PSBudWxsICYmIHZhbHVlICE9PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdGxldCBjaGlsZHJlbjogQXJyYXk8YW55PiA9IFsgdmFsdWUgXTtcblxuXHRcdFx0XHRuZXN0ZWQgPSBbIC4uLmNoaWxkcmVuIF07XG5cblx0XHRcdFx0d2hpbGUgKCBjaGlsZHJlbiAmJiBjaGlsZHJlbi5sZW5ndGggKSB7XG5cdFx0XHRcdFx0Y2hpbGRyZW4gPSBfLm1hcChcblx0XHRcdFx0XHRcdF8uZmlsdGVyKCB0aGlzLmhhbmRsZWRJdGVtcywgKCBpdGVtOiBhbnkgKSA9PiBfLmNvbnRhaW5zKCBjaGlsZHJlbiwgaXRlbVsgdGhpcy5maWVsZFBhcmVudEtleSBdICkgKSxcblx0XHRcdFx0XHRcdHRoaXMuZmllbGRLZXlcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdG5lc3RlZC5wdXNoKCAuLi5jaGlsZHJlbiApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuc2VsZWN0aW9uQWxsTmVzdGVkT3B0aW9uQ2hhbmdlLmVtaXQoIG5lc3RlZCApO1xuXHRcdH1cblxuXHRcdHRoaXMuc2VsZWN0aW9uQ2hhbmdlLmVtaXQoIGV2ICk7XG5cdFx0dGhpcy5zZWxlY3Rpb25PcHRpb25DaGFuZ2UuZW1pdChcblx0XHRcdHRoaXMubXVsdGlwbGVcblx0XHRcdFx0PyBfLmZpbHRlciggdGhpcy5oYW5kbGVkSXRlbXMsICggaXRlbTogYW55ICkgPT4gXy5jb250YWlucyggZXYudmFsdWUsIGl0ZW1bIHRoaXMuZmllbGRLZXkgXSApIClcblx0XHRcdFx0OiBfLmZpbmQoIHRoaXMuaGFuZGxlZEl0ZW1zLCAoIGl0ZW06IGFueSApID0+IHZhbHVlID09PSBpdGVtWyB0aGlzLmZpZWxkS2V5IF0gKVxuXHRcdCk7XG5cdH1cblxuXHQvKipcblx0KiBUb2dnbGUgc2VsZWN0IGFsbCBvcHRpb25zIGZvciBtdWx0cGxlIG1vZGVcblx0KiBAcmV0dXJuIHt2b2lkfVxuXHQqL1xuXHRwdWJsaWMgdG9nZ2xlU2VsZWN0QWxsKCkge1xuXHRcdHRoaXMubmdNb2RlbCA9IHRoaXMuaXNTZWxlY3RBbGwgPyBfLm1hcCggdGhpcy5oYW5kbGVkSXRlbXMsIHRoaXMuZmllbGRLZXkgKSA6IFtdO1xuXHRcdHRoaXMuY2RSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdHRoaXMub3B0aW9uQ2hhbmdlKCB7IHZhbHVlOiB0aGlzLm5nTW9kZWwgfSApO1xuXHR9XG5cblx0LyoqXG5cdCogSGFuZGxlIGdyb3VwIGl0ZW1zXG5cdCogQHJldHVybiB7YW55fVxuXHQqL1xuXHRwdWJsaWMgaGFuZGxlR3JvdXBJdGVtcygpIHtcblx0XHRjb25zdCBncm91cHM6IGFueSA9IHt9O1xuXHRcdGNvbnN0IG5vR3JvdXBzOiBBcnJheTxhbnk+ID0gW107XG5cblx0XHRfLmVhY2goIHRoaXMuaGFuZGxlZEl0ZW1zLCAoIGl0ZW06IGFueSApID0+IHtcblx0XHRcdGlmICggaXRlbS5ncm91cCApIHtcblx0XHRcdFx0aWYgKCAhZ3JvdXBzWyBpdGVtLmdyb3VwIF0gKSBncm91cHNbIGl0ZW0uZ3JvdXAgXSA9IFtdO1xuXHRcdFx0XHRncm91cHNbIGl0ZW0uZ3JvdXAgXS5wdXNoKCBpdGVtICk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0bm9Hcm91cHMucHVzaCggaXRlbSApO1xuXHRcdH0gKTtcblxuXHRcdHJldHVybiB7IGdyb3Vwcywgbm9fZ3JvdXBzOiBub0dyb3VwcyB9O1xuXHR9XG5cblx0LyoqXG5cdCogQ2hlY2sgZW1wdHkgdmFsdWUgaXMgc2VsZWN0ZWRcblx0KiBAcmV0dXJuIHtib29sZWFufVxuXHQqL1xuXHRwdWJsaWMgZ2V0IGlzRW1wdHlTZWxlY3RlZCgpOiBib29sZWFuIHtcblx0XHRpZiAoICF0aGlzLmVtcHR5TGFiZWwgKSByZXR1cm4gZmFsc2U7XG5cblx0XHRyZXR1cm4gdGhpcy5lbXB0eVZhbHVlICE9PSBudWxsICYmIHRoaXMuZW1wdHlWYWx1ZSAhPT0gdW5kZWZpbmVkXG5cdFx0XHQ/IHRoaXMubmdNb2RlbCA9PT0gdGhpcy5lbXB0eVZhbHVlXG5cdFx0XHQ6ICF0aGlzLm5nTW9kZWwgPT09ICF0aGlzLmVtcHR5VmFsdWU7XG5cdH1cblxuXHQvKipcblx0KiBDaGVjayBoaWRkZW4gaXRlbVxuXHQqIEBwYXJhbSB7YW55fSBpdGVtXG5cdCogQHJldHVybiB7Ym9vbGVhbn1cblx0Ki9cblx0cHVibGljIGlzSGlkZGVuSXRlbSggaXRlbTogYW55ICk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBpdGVtLmhpZGRlbiB8fCBfLmNvbnRhaW5zKCB0aGlzLmhpZGRlbkxpc3QsIGl0ZW1bIHRoaXMuZmllbGRLZXkgXSApO1xuXHR9XG5cblx0LyoqXG5cdCogQ2hlY2sgZGlzYWJsZWQgaXRlbVxuXHQqIEBwYXJhbSB7YW55fSBpdGVtXG5cdCogQHJldHVybiB7Ym9vbGVhbn1cblx0Ki9cblx0cHVibGljIGlzRGlzYWJsZWRJdGVtKCBpdGVtOiBhbnkgKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIGl0ZW0uZGlzYWJsZWQgfHwgXy5jb250YWlucyggdGhpcy5kaXNhYmxlZExpc3QsIGl0ZW1bIHRoaXMuZmllbGRLZXkgXSApO1xuXHR9XG5cbn1cbiJdfQ==