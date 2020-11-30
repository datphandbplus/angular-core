import { FormGroup } from '@angular/forms';
export declare class FormService {
    /**
    * Copy field
    * @static
    * @param {any} value
    * @return {any}
    */
    static copyField(value: any): any;
    /**
    * Reset form
    * @static
    * @param {FormGroup} form
    * @param {boolean} resetValue - Flag to reset value
    * @return {void}
    */
    static resetForm(form: FormGroup, resetValue?: boolean): void;
}
