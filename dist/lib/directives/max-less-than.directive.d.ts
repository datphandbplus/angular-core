import { Validator, FormControl } from '@angular/forms';
export declare class MaxLessThanDirective implements Validator {
    maxLessThan: number;
    /**
    * Validate
    * @param {FormControl} c
    * @return {any}
    */
    validate(c: FormControl): {
        [key: string]: any;
    };
}
