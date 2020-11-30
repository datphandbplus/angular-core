import { PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
export declare class SafeHtmlPipe implements PipeTransform {
    private sanitized;
    /**
    * @constructor
    * @param {DomSanitizer} sanitized
    */
    constructor(sanitized: DomSanitizer);
    /**
    * Transform
    * @param {string} value
    * @return {SafeHtml}
    */
    transform(value: string): SafeHtml;
}
