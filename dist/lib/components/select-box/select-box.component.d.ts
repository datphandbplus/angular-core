import { EventEmitter, OnChanges, OnInit, SimpleChanges, ChangeDetectorRef, InjectionToken } from '@angular/core';
import { Subject } from 'rxjs';
import { FormControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
export declare const SELECT_BOX_DEFAULT_OPTIONS: InjectionToken<any>;
export declare class SelectBoxComponent implements OnInit, OnChanges {
    readonly defaultOptions: any;
    translateService: TranslateService;
    cdRef: ChangeDetectorRef;
    ngModel: any;
    init: boolean;
    required: boolean;
    disabled: boolean;
    disableControl: boolean;
    readonly: boolean;
    multiple: boolean;
    translated: boolean;
    label: string;
    emptyLabel: string;
    emptyValue: any;
    emptyImage: string;
    defaultImage: string;
    data: any;
    hiddenList: Array<any>;
    disabledList: Array<any>;
    filtered: Array<any>;
    groups: Array<any>;
    fieldImage: string;
    fieldSubName: string;
    noFormField: boolean;
    noErrorSpacing: boolean;
    multiDepth: boolean;
    formFieldClass: string;
    panelClass: string;
    floatLabel: string;
    appearance: string;
    sort: boolean;
    formControl: FormControl;
    fieldKey: string;
    fieldParentKey: string;
    fieldName: string;
    placeholder: string;
    ngModelChange: EventEmitter<any>;
    selectionChange: EventEmitter<any>;
    selectionOptionChange: EventEmitter<any>;
    selectionAllNestedOptionChange: EventEmitter<any>;
    openedChange: EventEmitter<any>;
    loaded: boolean;
    isSelectAll: boolean;
    displayImage: string;
    displayValue: string;
    selected: any;
    handledGroupItems: any;
    handledItems: Array<any>;
    filterCtrl: FormControl;
    onDestroy: Subject<void>;
    /**
    * @constructor
    * @param {any} defaultOptions
    * @param {TranslateService} translateService
    * @param {ChangeDetectorRef} cdRef
    */
    constructor(defaultOptions: any, translateService: TranslateService, cdRef: ChangeDetectorRef);
    /**
    * @constructor
    */
    ngOnInit(): void;
    /**
    * @constructor
    * @param {SimpleChanges} changes
    */
    ngOnChanges(changes: SimpleChanges): void;
    /**
    * Load data
    * @return {void}
    */
    loadData(): void;
    /**
    * On items change
    * @param {Array} items
    * @return {void}
    */
    onItemsChange(items: Array<any>): void;
    /**
    * Filter
    * @param {string} query
    * @return {Array} Filtered
    */
    filter(query: string): Array<any>;
    /**
    * Option change
    * @param {any} ev
    * @return {void}
    */
    optionChange(ev: any): void;
    /**
    * Toggle select all options for multple mode
    * @return {void}
    */
    toggleSelectAll(): void;
    /**
    * Handle group items
    * @return {any}
    */
    handleGroupItems(): {
        groups: any;
        no_groups: any[];
    };
    /**
    * Check empty value is selected
    * @return {boolean}
    */
    readonly isEmptySelected: boolean;
    /**
    * Check hidden item
    * @param {any} item
    * @return {boolean}
    */
    isHiddenItem(item: any): boolean;
    /**
    * Check disabled item
    * @param {any} item
    * @return {boolean}
    */
    isDisabledItem(item: any): boolean;
}
