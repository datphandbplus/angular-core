import { NgControl } from '@angular/forms';
export declare class DisableControlDirective {
    private ngControl;
    /**
    * @constructor
    * @param {boolean} condition
    */
    disableControl: boolean;
    /**
    * @constructor
    * @param {NgControl} ngControl
    */
    constructor(ngControl: NgControl);
}
