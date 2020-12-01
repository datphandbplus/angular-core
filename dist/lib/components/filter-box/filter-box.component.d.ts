import { EventEmitter, SimpleChanges, AfterContentInit, OnChanges, InjectionToken } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Options } from 'ng5-slider';
export declare const FILTER_BOX_DEFAULT_OPTIONS: InjectionToken<any>;
export declare class FilterBoxComponent implements AfterContentInit, OnChanges {
    readonly defaultOptions: any;
    translateService: TranslateService;
    fieldSubName: string;
    fieldImage: string;
    emptyLabel: string;
    placeholder: string;
    emptyValue: any;
    data: any;
    filter: any;
    minDate: any;
    maxDate: any;
    translated: boolean;
    disabled: boolean;
    multiple: boolean;
    rangeMode: boolean;
    onlyYear: boolean;
    onlyMonth: boolean;
    startView: string;
    fieldKey: string;
    fieldParentKey: string;
    fieldName: string;
    type: string;
    min: number;
    max: number;
    applyFilter: EventEmitter<any>;
    filterChange: EventEmitter<any>;
    menuOpened: boolean;
    slideValue: number;
    slideHighValue: number;
    slideOptions: Options;
    /**
    * @constructor
    * @param {any} defaultOptions
    * @param {TranslateService} translateService
    */
    constructor(defaultOptions: any, translateService: TranslateService);
    /**
    * @constructor
    */
    ngAfterContentInit(): void;
    /**
    * @constructor
    * @param {SimpleChanges} changes
    */
    ngOnChanges(changes: SimpleChanges): void;
    /**
    * On month of Datepicker change
    * @param {any} picker
    * @param {any} event
    * @return {void}
    */
    onMonthChange(picker: any, event: any): void;
    /**
    * On year of Datepicker change
    * @param {any} picker
    * @param {any} event
    * @return {void}
    */
    onYearChange(picker: any, event: any): void;
    /**
    * On slide value change
    * @param {any} event
    * @return {void}
    */
    onSlideValueChange(event: any): void;
    /**
    * On slide high value change
    * @param {any} event
    * @return {void}
    */
    onSlideHighValueChange(event: any): void;
    /**
    * Toggle slider menu
    * @return {void}
    */
    toggleSliderMenu(): void;
    /**
    * Format filter
    * @return {string}
    */
    readonly format: string;
}
