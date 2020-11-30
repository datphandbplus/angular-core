import { PipeTransform } from '@angular/core';
export declare class MaxPipe implements PipeTransform {
    /**
    * Transform
    * @param {Array} items
    * @param {string} field
    * @return {number}
    */
    transform(items: Array<any>, field: string): number;
}
