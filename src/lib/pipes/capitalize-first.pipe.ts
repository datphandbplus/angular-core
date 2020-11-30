import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'capitalizeFirst',
})
export class CapitalizeFirstPipe implements PipeTransform {

	/**
	* Transform
	* @param {string} value
	* @return {string}
	*/
	public transform( value: string ): string {
		if ( value === null ) {
			return 'N/A';
		}

		return value.charAt( 0 ).toUpperCase() + value.slice( 1 ).toLowerCase();
	}

}
