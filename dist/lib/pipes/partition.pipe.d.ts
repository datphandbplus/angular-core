import { PipeTransform } from '@angular/core';
export declare class PartitionPipe implements PipeTransform {
    /**
    * Transform
    * @param {Array} items
    * @param {string} partial
    * @param {string} uniqKey
    * @return {Array}
    */
    transform(items: Array<any>, partial: string, uniqKey?: string): Array<any>;
}
