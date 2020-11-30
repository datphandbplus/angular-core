import { ElementRef, OnChanges, SimpleChanges } from '@angular/core';
export declare class OdometerDirective implements OnChanges {
    private elementRef;
    private odometer;
    private element;
    /**
    * @constructor
    * @param {ElementRef} elementRef
    */
    constructor(elementRef: ElementRef);
    /**
    * @constructor
    * @param {SimpleChanges} changes
    */
    ngOnChanges(changes: SimpleChanges): void;
    /**
    * Get odometer duration
    * @private
    * @param {number} odometer
    * @return {number} Odometer duration
    */
    private getDuration;
}
