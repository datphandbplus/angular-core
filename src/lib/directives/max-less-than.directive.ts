import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, FormControl } from '@angular/forms';

@Directive({
	selector	: '[maxLessThan][formControlName],[maxLessThan][formControl],[maxLessThan][ngModel]',
	providers	: [{ provide: NG_VALIDATORS, useExisting: MaxLessThanDirective, multi: true }],
})
export class MaxLessThanDirective implements Validator {

	@Input() public maxLessThan: number;

	/**
	* Validate
	* @param {FormControl} c
	* @return {any}
	*/
	public validate( c: FormControl ): { [ key: string ]: any } {
		const v: number = c.value;

		return v >= this.maxLessThan
			? { max_less_than: { max: this.maxLessThan, actual: v } }
			: null;
	}

}
