import { Pipe, PipeTransform } from '@angular/core';
import _ from 'underscore';

import { NumberService } from '../services/number.service';

@Pipe({
	name: 'itemObject',
})
export class ItemObjectPipe implements PipeTransform {

	/**
	* Transform
	* @param {Array} items
	* @param {string} unit
	* @return {Array}
	*/
	public transform( items: Array<any>, unit: string = '' ): Array<any> {
		return _.map( items, ( item: any ) => ({
			id: item,
			name: ( isNaN( item ) ? item : NumberService.addCommas( item ) )
				+ unit,
		}) );
	}

}
