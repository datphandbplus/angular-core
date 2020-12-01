import { Injector, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import _ from 'underscore';
import moment from 'moment-timezone';

import { UtilitiesService } from './services/utilities.service';

export class DataTableComponent {

	@ViewChild( 'paginator' ) set paginator( paginator: MatPaginator ) {
		this.dataSource.paginator = paginator;
	}

	public isReverse: boolean;
	public filtering: boolean = true;
	public sortKey: string = 'name';
	public dataSourceClone: Array<any> = [];
	public searchQueries: any = {};
	public filters: any = {};
	public dataSource: MatTableDataSource<any> = new MatTableDataSource<any>( [] );
	public isExpansionDetailRow: Function = ( _i: number, row: Object ) => row.hasOwnProperty( 'detail_row' );

	/**
	* @constructor
	* @param {Injector} injector
	*/
	constructor( public injector: Injector ) {}

	/**
	* Toggle filter box
	* @return {void}
	*/
	public toggleFilter() {
		this.filtering = !this.filtering;
	}

	/**
	* Apply filter
	* @return {void}
	*/
	public applyFilter() {
		this.dataSource.filterPredicate = ( data: any, filters: any ) => {
			let flag: boolean = true;

			_.each( filters, ( filter: any, key: string ) => {
				if ( !flag
					|| filter === null
					|| filter === undefined ) {
					return;
				}

				const value: any = _.get( data, key );

				// Range filter
				if ( !isNaN( filter.min ) && !isNaN( filter.max ) ) {
					flag = value >= filter.min && value <= filter.max;
					return;
				}

				// Date range filter
				if ( filter.begin && filter.end ) {
					const date: any = moment( value ).startOf( 'day' );
					flag = date.isSameOrAfter( moment( filter.begin ).startOf( 'day' ), 'day' )
						&& date.isSameOrBefore( moment( filter.end ).startOf( 'day' ), 'day' );
					return;
				}

				// Date filter
				if ( moment.isMoment( filter ) ) {
					flag = moment( value ).startOf( 'day' )
						.isSame( moment( filter ).startOf( 'day' ), 'day' );
					return;
				}

				flag = value === filter || _.contains( filter, value );
			} );

			_.each( this.searchQueries, ( query: string, key: string ) => {
				if ( !flag ) return;

				flag = UtilitiesService.stripVietnameseSymbol(
					( _.get( data, key ) || '' )
					.toString()
					.toLowerCase()
					.replace( / /g, '' )
				)
				.indexOf(
					UtilitiesService.stripVietnameseSymbol(
						( query || '' )
						.toLowerCase()
						.replace( / /g, '' )
					)
				) > -1;
			} );

			return flag;
		};
		this.dataSource.filter = this.filters;
	}

	/**
	* Reset filter
	* @return {void}
	*/
	public resetFilter() {
		_.each( this.searchQueries, ( _i: any, key: string ) => this.searchQueries[ key ] = undefined );
		_.each( this.filters, ( _i: any, key: string ) => this.filters[ key ] = undefined );

		this.applyFilter();
	}

	/**
	* Sort data source
	* @param {string} key
	* @param {any} options
	* @return {array}
	*/
	public sortDataSource( key: string, options: any = {} ) {
		const data: Array<any> = _.clone( this.dataSourceClone );

		if ( !options.type ) {
			data.sort( ( a: any, b: any ) => {
				const x: string = _.get( a, key ) ? _.get( a, key ).toLowerCase() : '';
				const y: string = _.get( b, key ) ? _.get( b, key ).toLowerCase() : '';

				return x < y ? -1 : x > y ? 1 : 0;
			} );
		} else {
			data.sort( ( a: any, b: any ) => {
				const x: string = _.get( a, key );
				const y: string = _.get( b, key );

				return x < y ? 1 : x > y ? -1 : 0;
			} );
		}

		return options.reverse ? data.reverse() : data;
	}

	/**
	* Apply sorter
	* @param {boolean} isReverse
	* @return {void}
	*/
	public applySorter( isReverse: boolean = false ) {
		if ( isReverse ) this.isReverse = !this.isReverse;

		this.dataSource.data = this.sortDataSource( this.sortKey, { reverse: this.isReverse } );
	}

}
