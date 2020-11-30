import { Validator, FormControl } from '@angular/forms';
export declare class MinGreaterThanDirective implements Validator {
    minGreaterThan: number;
    /**
    * Validate
    * @param {FormControl} c
    * @return {any}
    */
    validate(c: FormControl): {
        [key: string]: any;
    };
}
