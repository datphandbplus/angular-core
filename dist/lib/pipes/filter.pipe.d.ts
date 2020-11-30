import { PipeTransform } from '@angular/core';
export declare class FilterPipe implements PipeTransform {
    /**
    * Transform
    * @param {Array} items
    * @param {string} field
    * @param {string} value
    * @return {Array}
    */
    transform(items: Array<any>, field: string, value: string): Array<any>;
}
