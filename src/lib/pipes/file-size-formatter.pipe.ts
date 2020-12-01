import { Pipe, PipeTransform } from '@angular/core';

import { NumberService } from '../services/number.service';

@Pipe({
	name: 'fileSizeFormatter',
})
export class FileSizeFormatterPipe implements PipeTransform {

	/**
	* Transform
	* @param {any} input
	* @return {string}
	*/
	public transform( input: any ): string {
		return NumberService.fileSizeFormatter( input );
	}

}
