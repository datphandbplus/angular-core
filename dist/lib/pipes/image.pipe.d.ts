import { PipeTransform } from '@angular/core';
export declare class ImagePipe implements PipeTransform {
    /**
    * Transform
    * @param {string} url
    * @param {string} defaultImage
    * @return {number}
    */
    transform(url: string, defaultImage: string): any;
}
