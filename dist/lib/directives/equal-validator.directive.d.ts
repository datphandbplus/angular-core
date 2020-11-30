import { FormControl, AbstractControl } from '@angular/forms';
export declare class EqualValidatorDirective {
    /**
    * Validator
    * @static
    * @param {string} validateEqual
    * @param {boolean} reverse
    * @param {any} options
    * @return {any}
    */
    static validator(validateEqual: string, reverse?: boolean, options?: any): (c: FormControl) => {
        [key: string]: any;
    };
    /**
    * Match password
    * @static
    * @param {AbstractControl} AC
    * @return {any}
    */
    static MatchPassword(AC: AbstractControl): void;
}
