import { Injector } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
export declare class DataTableComponent {
    injector: Injector;
    paginator: MatPaginator;
    isReverse: boolean;
    filtering: boolean;
    sortKey: string;
    dataSourceClone: Array<any>;
    searchQueries: any;
    filters: any;
    dataSource: MatTableDataSource<any>;
    isExpansionDetailRow: Function;
    /**
    * @constructor
    * @param {Injector} injector
    */
    constructor(injector: Injector);
    /**
    * Toggle filter box
    * @return {void}
    */
    toggleFilter(): void;
    /**
    * Apply filter
    * @return {void}
    */
    applyFilter(): void;
    /**
    * Reset filter
    * @return {void}
    */
    resetFilter(): void;
    /**
    * Sort data source
    * @param {string} key
    * @param {any} options
    * @return {array}
    */
    sortDataSource(key: string, options?: any): any[];
    /**
    * Apply sorter
    * @param {boolean} isReverse
    * @return {void}
    */
    applySorter(isReverse?: boolean): void;
}
