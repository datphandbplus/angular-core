import { Pipe, PipeTransform } from '@angular/core';
import _ from 'underscore';

@Pipe({
	name: 'min',
})
export class MinPipe implements PipeTransform {

	/**
	* Transform
	* @param {Array} items
	* @param {string} field
	* @return {Array}
	*/
	public transform( items: Array<any>, field: string ): number {
		const min: any = _.min( items, ( item: any ) => item[ field ] );
		return min && min[ field ] ? min[ field ] : 0;
	}

}
