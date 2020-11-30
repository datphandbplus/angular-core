import { PipeTransform } from '@angular/core';
export declare class OrderByPipe implements PipeTransform {
    /**
    * Order by comparator
    * @static
    * @param {any} a
    * @param {any} b
    * @return {number}
    */
    static _orderByComparator(a: any, b: any): number;
    /**
    * Get own nested property
    * @static
    * @param {any} obj
    * @param {string} propertyPath
    * @return {any}
    */
    static getOwnNestedProperty(obj: any, propertyPath: string): any;
    /**
    * Transform
    * @param {any} input
    * @return {any}
    */
    transform(input: any, [config]: any): any;
}
