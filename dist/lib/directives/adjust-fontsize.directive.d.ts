import { ElementRef, AfterContentChecked } from '@angular/core';
export declare class AdjustFontsizeDirective implements AfterContentChecked {
    private elementRef;
    private element;
    /**
    * @constructor
    * @param {ElementRef} elementRef
    */
    constructor(elementRef: ElementRef);
    /**
    * @constructor
    */
    ngAfterContentChecked(): void;
}
