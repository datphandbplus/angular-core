import { OnInit, EventEmitter, ChangeDetectorRef, SimpleChanges, OnChanges, InjectionToken } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
export declare const AUTO_COMPLETE_DEFAULT_OPTIONS: InjectionToken<any>;
export declare class AutoCompleteComponent implements OnInit, OnChanges {
    readonly defaultOptions: any;
    cdRef: ChangeDetectorRef;
    label: string;
    placeholder: string;
    ngModel: any;
    required: boolean;
    disabled: boolean;
    disableControl: boolean;
    readonly: boolean;
    emptyLabel: string;
    floatLabel: string;
    appearance: string;
    fieldKey: string;
    fieldName: string;
    data: Array<any>;
    formControl: FormControl;
    ngModelChange: EventEmitter<any>;
    filteredData: Observable<any>;
    /**
    * @constructor
    * @param {any} defaultOptions
    * @param {ChangeDetectorRef} cdRef
    */
    constructor(defaultOptions: any, cdRef: ChangeDetectorRef);
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
    * Prepare data
    * @private
    * @return {void}
    */
    private prepareData;
    /**
    * Filter
    * @private
    * @param {string} query
    * @return {Array}
    */
    private filter;
}
