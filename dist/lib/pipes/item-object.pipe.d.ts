import { PipeTransform } from '@angular/core';
export declare class ItemObjectPipe implements PipeTransform {
    /**
    * Transform
    * @param {Array} items
    * @param {string} unit
    * @return {Array}
    */
    transform(items: Array<any>, unit?: string): Array<any>;
}
