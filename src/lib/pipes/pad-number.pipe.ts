import { Pipe, PipeTransform } from '@angular/core';

import { NumberService } from '../services/number.service';

@Pipe({
	name: 'padNumber',
})
export class PadNumberPipe implements PipeTransform {

	/**
	* Transform
	* @param {any} input
	* @param {boolean} size
	* @return {string}
	*/
	public transform( input: any, size: number ): string {
		return NumberService.padNumberFormatter( input, size );
	}

}
