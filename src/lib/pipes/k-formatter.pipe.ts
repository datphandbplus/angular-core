import { Pipe, PipeTransform } from '@angular/core';

import { NumberService } from '../services/number.service';

@Pipe({
	name: 'kFormatter',
})
export class KFormatterPipe implements PipeTransform {

	/**
	* Transform
	* @param {any} input
	* @return {string}
	*/
	public transform( input: any ): string {
		return NumberService.kFormatter( input );
	}

}
