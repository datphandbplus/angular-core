import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'orderBy',
	pure: false,
})
export class OrderByPipe implements PipeTransform {

	/**
	* Order by comparator
	* @static
	* @param {any} a
	* @param {any} b
	* @return {number}
	*/
	public static _orderByComparator( a: any, b: any ): number {
		if ( !a ) return -1;
		if ( !b ) return 1;

		if ( ( isNaN( parseFloat( a ) ) || !isFinite( a ) )
			|| ( isNaN( parseFloat( b ) ) || !isFinite( b ) ) ) {
			// Isn't a number so lowercase the string to properly compare
			if ( a.toLowerCase() < b.toLowerCase() ) return -1;
			if ( a.toLowerCase() > b.toLowerCase() ) return 1;
		} else {
			// Parse strings as numbers to compare properly
			if ( parseFloat( a ) < parseFloat( b ) ) return -1;
			if ( parseFloat( a ) > parseFloat( b ) ) return 1;
		}
		return 0; // equal each other
	}

	/**
	* Get own nested property
	* @static
	* @param {any} obj
	* @param {string} propertyPath
	* @return {any}
	*/
	public static getOwnNestedProperty( obj: any, propertyPath: string ): any {
		if ( !propertyPath ) return false;

		const properties: Array<string> = propertyPath.split( '.' );

		for ( let i: number = 0; i < properties.length; i++ ) {
			const prop: string = properties[ i ];

			if ( !obj || !obj.hasOwnProperty( prop ) ) {
				return null;
			}

			obj = obj[ prop ];
		}

		return obj;
	}

	/**
	* Transform
	* @param {any} input
	* @return {any}
	*/
	public transform( input: any, [ config = '+' ]: any ): any {
		if ( !Array.isArray( input ) ) return input;

		if ( !Array.isArray( config )
			|| ( Array.isArray( config ) && config.length === 1 ) ) {
			const propertyToCheck: string = !Array.isArray( config ) ? config : config[ 0 ];
			const desc: boolean = propertyToCheck.substr( 0, 1 ) === '-';

			if ( !propertyToCheck
				|| propertyToCheck === '-' || propertyToCheck === '+' ) {
				return !desc ? input.sort() : input.sort().reverse();
			}

			const property: string = propertyToCheck.substr( 0, 1 ) === '+'
				|| propertyToCheck.substr( 0, 1 ) === '-'
				? propertyToCheck.substr( 1 )
				: propertyToCheck;

			return input.sort( ( a: any, b: any ) => {
				return !desc
					? OrderByPipe._orderByComparator(
						OrderByPipe.getOwnNestedProperty( a, property ),
						OrderByPipe.getOwnNestedProperty( b, property )
					)
					: -OrderByPipe._orderByComparator(
						OrderByPipe.getOwnNestedProperty( a, property ),
						OrderByPipe.getOwnNestedProperty( b, property )
					);
			} );
		}

		return input.sort( ( a: any, b: any ) => {
			for ( let i: number = 0; i < config.length; i++ ) {
				const desc: boolean = config[ i ].substr( 0, 1 ) === '-';
				const property: string = config[ i ].substr( 0, 1 ) === '+'
					|| config[ i ].substr( 0, 1 ) === '-'
					? config[ i ].substr( 1 )
					: config[ i ];
				const comparison: number = !desc
					? OrderByPipe._orderByComparator(
						OrderByPipe.getOwnNestedProperty( a, property ),
						OrderByPipe.getOwnNestedProperty( b, property )
					)
					: -OrderByPipe._orderByComparator(
						OrderByPipe.getOwnNestedProperty( a, property ),
						OrderByPipe.getOwnNestedProperty( b, property )
					);

				if ( comparison !== 0 ) return comparison;
			}

			return 0;
		} );
	}

}
