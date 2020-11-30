import { PipeTransform } from '@angular/core';
export declare class CommasPipe implements PipeTransform {
    /**
    * Transform
    * @param {any} input
    * @param {boolean} roundUp
    * @return {string}
    */
    transform(input: any, roundUp?: boolean): string;
}
