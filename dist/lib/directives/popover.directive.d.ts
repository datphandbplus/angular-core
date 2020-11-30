import { ElementRef, OnDestroy, AfterViewInit } from '@angular/core';
export declare class PopoverDirective implements AfterViewInit, OnDestroy {
    private elementRef;
    private popover;
    private element;
    private popoverEle;
    /**
    * @constructor
    */
    onMouseOver(): void;
    /**
    * @constructor
    */
    onMouseOut(): void;
    /**
    * @constructor
    * @param {ElementRef} elementRef
    */
    constructor(elementRef: ElementRef);
    /**
    * @constructor
    */
    ngAfterViewInit(): void;
    /**
    * @constructor
    */
    ngOnDestroy(): void;
}
