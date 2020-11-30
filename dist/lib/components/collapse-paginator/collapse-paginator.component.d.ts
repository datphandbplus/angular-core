import { EventEmitter, OnDestroy, AfterContentInit, AfterViewInit, InjectionToken } from '@angular/core';
import { MatPaginator } from '@angular/material';
export declare const COLLAPSE_PAGINATOR_DEFAULT_OPTIONS: InjectionToken<any>;
export declare class CollapsePaginatorComponent implements OnDestroy, AfterViewInit, AfterContentInit {
    readonly defaultOptions: any;
    paginator: MatPaginator;
    pageIndex: number;
    pageSize: number;
    pageSizeOptions: Array<number>;
    showFirstLastButtons: boolean;
    paginatorRef: EventEmitter<any>;
    page: EventEmitter<any>;
    realPageSizeOptions: Array<number>;
    /**
    * @constructor
    * @param {any} defaultOptions
    */
    constructor(defaultOptions: any);
    /**
    * @constructor
    */
    ngAfterViewInit(): void;
    /**
    * @constructor
    */
    ngAfterContentInit(): void;
    /**
    * @constructor
    */
    ngOnDestroy(): void;
    /**
    * Get expansion range label for table paginator
    * @desc Fixed mat-table wrong pagination when has expanded row.
    * @param {number} page
    * @param {number} pageSize
    * @param {number} length
    * @return {string} Range label
    */
    getExpansionRangeLabel(page: number, pageSize: number, length: number): any;
    /**
    * Handle page change event
    * @param {any} ev
    * @return {void}
    */
    onPageChange(ev: any): void;
}
