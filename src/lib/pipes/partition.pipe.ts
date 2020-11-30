import { Pipe, PipeTransform } from '@angular/core';
import _ from 'underscore';

@Pipe({
	name: 'partition',
})
export class PartitionPipe implements PipeTransform {

	/**
	* Transform
	* @param {Array} items
	* @param {string} partial
	* @param {string} uniqKey
	* @return {Array}
	*/
	public transform( items: Array<any>, partial: string, uniqKey: string = 'id' ): Array<any> {
		const data: any = {};

		_.each( items, ( item: any ) => {
			item = _.get( item, partial );

			if ( !item ) return;

			if ( !_.isObject( item ) ) {
				data[ item ] = {};
				data[ item ][ uniqKey ] = item;
				return;
			}

			data[ item[ uniqKey ] ] = item;
		} );

		return _.map( data, ( item: any ) => item );
	}

}
