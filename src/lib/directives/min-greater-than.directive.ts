import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, FormControl } from '@angular/forms';

@Directive({
	selector	: '[minGreaterThan][formControlName],[minGreaterThan][formControl],[minGreaterThan][ngModel]',
	providers	: [{ provide: NG_VALIDATORS, useExisting: MinGreaterThanDirective, multi: true }],
})
export class MinGreaterThanDirective implements Validator {

	@Input() public minGreaterThan: number;

	/**
	* Validate
	* @param {FormControl} c
	* @return {any}
	*/
	public validate( c: FormControl ): { [ key: string ]: any } {
		const v: number = c.value;

		return v <= this.minGreaterThan
			? { min_greater_than: { min: this.minGreaterThan, actual: v } }
			: null;
	}

}
