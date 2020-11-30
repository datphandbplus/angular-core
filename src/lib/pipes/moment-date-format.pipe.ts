import { Pipe, PipeTransform } from '@angular/core';
import moment from 'moment-timezone';

@Pipe({
	name: 'momentDateFormat',
})
export class MomentDateFormatPipe implements PipeTransform {

	/**
	* Transform
	* @param {any} input
	* @param {string} format
	* @return {string}
	*/
	public transform( input: any, format: string = 'DD/MM/YYYY' ): any {
		const output: any = moment( input );

		return output.isValid() ? output.format( format ) : 'N/A';
	}

}
