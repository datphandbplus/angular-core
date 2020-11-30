import { PipeTransform } from '@angular/core';
export declare class MinPipe implements PipeTransform {
    /**
    * Transform
    * @param {Array} items
    * @param {string} field
    * @return {Array}
    */
    transform(items: Array<any>, field: string): number;
}
