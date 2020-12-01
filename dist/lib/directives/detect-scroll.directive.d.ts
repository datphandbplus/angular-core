import { ElementRef, AfterViewInit, EventEmitter } from '@angular/core';
export declare class DetectScrollDirective implements AfterViewInit {
    private elementRef;
    delay: number;
    offset: number;
    onScroll: EventEmitter<any>;
    onReachStart: EventEmitter<any>;
    onReachEnd: EventEmitter<any>;
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
    * Detect scroll
    * @private
    * @param {any} element
    * @return {void}
    */
    private detectScroll;
}
