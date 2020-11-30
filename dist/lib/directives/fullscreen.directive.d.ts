import { ElementRef, AfterViewInit } from '@angular/core';
export declare class FullscreenDirective implements AfterViewInit {
    private elementRef;
    private fullscreen;
    private isFullscreen;
    private element;
    private btnClose;
    private hiddenElements;
    private parentElements;
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
    * Toggle fullscreen
    * @return {void}
    */
    toggle(): void;
    /**
    * Turn on fullscreen
    * @return {void}
    */
    turnOn(): void;
    /**
    * Turn off fullscreen
    * @return {void}
    */
    turnOff(): void;
}
