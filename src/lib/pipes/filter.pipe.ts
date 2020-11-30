import { Pipe, PipeTransform } from '@angular/core';
import _ from 'underscore';

@Pipe({
	name: 'filter',
	pure: false,
})
export class FilterPipe implements PipeTransform {

	/**
	* Transform
	* @param {Array} items
	* @param {string} field
	* @param {string} value
	* @return {Array}
	*/
	public transform( items: Array<any>, field: string, value: string ): Array<any> {
		if ( !items ) {
			return [];
		}

		if ( !value || !value.length ) {
			return items;
		}

		return _.filter(
			items,
			( it: any ) => _.indexOf( it[ field ].toLowerCase(), value.toLowerCase() ) > -1
		);
	}

}
