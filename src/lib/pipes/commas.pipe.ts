import { Pipe, PipeTransform } from '@angular/core';

import { NumberService } from '../services/number.service';

@Pipe({
	name: 'commas',
})
export class CommasPipe implements PipeTransform {

	/**
	* Transform
	* @param {any} input
	* @param {boolean} roundUp
	* @return {string}
	*/
	public transform( input: any, roundUp: boolean = false ): string {
		return NumberService.addCommas( input, roundUp );
	}

}
