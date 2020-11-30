import { Pipe, PipeTransform } from '@angular/core';
import _ from 'underscore';

@Pipe({
	name: 'max',
})
export class MaxPipe implements PipeTransform {

	/**
	* Transform
	* @param {Array} items
	* @param {string} field
	* @return {number}
	*/
	public transform( items: Array<any>, field: string ): number {
		const max: any = _.max( items, ( item: any ) => item[ field ] );
		return max && max[ field ] ? max[ field ] : 0;
	}

}
