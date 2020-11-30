import _ from 'underscore';

import { LATIN_MAP } from '../resources';

// @dynamic
export class UtilitiesService {

	/**
	* Strip vietnamese symbol
	* @static
	* @param {string} str - String to strip
	* @return {string} Striped string
	*/
	public static stripVietnameseSymbol( str: string ): string {
		return str.replace( /[^A-Za-z0-9]/g, ( x: string ) => {
			return LATIN_MAP[ x ] || x;
		} );
	}

	/**
	* Get color
	* @static
	* @param {any} colors
	* @param {number} index
	* @return {string}
	*/
	public static getColor( colors: any, index: number ): string {
		const colorArr: Array<string> = _.map( colors, ( color: string ) => color );

		return index < 9
			? colorArr[ index ]
			: 'rgb('
				+ [
					_.random( 0, 255 ),
					_.random( 0, 255 ),
					_.random( 0, 255 ),
				].join( ',' )
				+ ')';
	}

	/**
	* Convert hex to rgba
	* @static
	* @param {string} hex
	* @param {number} opacity
	* @return {any}
	*/
	public static hexToRgba( hex: string, opacity: number = 1 ) {
		const result: Array<string> = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec( hex );

		return result
			? 'rgba('
				+ [
					parseInt( result[ 1 ], 16 ),
					parseInt( result[ 2 ], 16 ),
					parseInt( result[ 3 ], 16 ),
					opacity,
				].join( ',' )
				+ ')'
			: null;
	}

	/**
	* Cpnvert mutli depth
	* @param {Array} items
	* @param {string} fieldKey
	* @param {string} fieldParentKey
	* @param {string} fieldName
	* @return {Array}
	*/
	public static convertMultiDepth(
		items: Array<any>, fieldKey: string = 'id',
		fieldParentKey: string = 'parent_id', fieldName: string = 'name'
	): Array<any> {
		const hashArr: any = {};

		_.each( _.sortBy( items, fieldName ), ( item: any ) => {
			const parentIndex: any = item[ fieldParentKey ] || 0;

			if ( !hashArr[ parentIndex ] ) {
				hashArr[ parentIndex ] = [];
			}

			let parent: any = _.find( items, ( _item: any ) => {
				return _item[ fieldKey ] === parentIndex;
			} );

			if ( !parent ) {
				hashArr[ parentIndex ].push( item );
				return;
			}

			let prefix: string = '--';

			while ( parent && parent[ fieldParentKey ] ) {
				parent = _.find( items, ( _item: any ) => {
					return _item[ fieldKey ] === parent[ fieldParentKey ];
				} );
				prefix += '--';
			}

			item.__name = [ prefix, item[ fieldName ] ].join( ' ' );

			hashArr[ parentIndex ].push( item );
		} );

		return UtilitiesService.hierarhySort(
			hashArr, fieldKey, fieldName,
			hashArr ? _.keys( hashArr )[ 0 ] : 0
		);
	}

	/**
	* Hierarhy sort
	* @param {any} hashArr
	* @param {string} fieldKey
	* @param {string} fieldName
	* @param {number} key
	* @param {Array} result
	* @return {Array}
	*/
	public static hierarhySort(
		hashArr: any, fieldKey: string = 'id', fieldName: string = 'name',
		key: number = 0, result: Array<any> = []
	) {
		if ( !hashArr[ key ] ) return;

		const arr: Array<any> = hashArr[ key ].sort( ( a: any, b: any ) => a[ fieldName ] > b[ fieldName ] );

		for ( let i: number = 0; i < arr.length; i++ ) {
			result.push( arr[ i ] );
			UtilitiesService.hierarhySort(
				hashArr, fieldKey, fieldName,
				arr[ i ][ fieldKey ], result
			);
		}

		return result;
	}

}
