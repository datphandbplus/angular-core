import { ElementRef } from '@angular/core';
export declare class SideBarItemComponent {
}
export declare class SideBarComponent {
    elementRef: ElementRef;
    element: any;
    /**
    * @constructor
    * @param {ElementRef} elementRef
    */
    constructor(elementRef: ElementRef);
    /**
    * Is show button scroll next
    * @return {boolean}
    */
    readonly isShowBtnNext: boolean;
    /**
    * Is show button scroll previous
    * @return {boolean}
    */
    readonly isShowBtnPrev: boolean;
    /**
    * Scroll previous
    * @return {void}
    */
    scrollPrev(): void;
    /**
    * Scroll previous
    * @return {void}
    */
    scrollNext(): void;
}
