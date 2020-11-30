import {
	Component, Output, EventEmitter,
	Input, ViewChild, OnDestroy,
	AfterContentInit, AfterViewInit, ViewEncapsulation,
	Optional, Inject, InjectionToken
} from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material';
import _ from 'underscore';

export const COLLAPSE_PAGINATOR_DEFAULT_OPTIONS: InjectionToken<any> = new InjectionToken<any>( 'defaultOptions' );

@Component({
	selector		: 'collapse-paginator',
	templateUrl		: './collapse-paginator.pug',
	styleUrls		: [ './collapse-paginator.scss' ],
	encapsulation	: ViewEncapsulation.None,
})
export class CollapsePaginatorComponent implements OnDestroy, AfterViewInit, AfterContentInit {

	@ViewChild( '__paginator' ) public paginator: MatPaginator;

	@Input() public pageIndex: number = 0;
	@Input() public pageSize: number = 15;
	@Input() public pageSizeOptions: Array<number> = [ 15, 25, 50 ];
	@Input() public showFirstLastButtons: boolean = true;

	@Output() public paginatorRef: EventEmitter<any> = new EventEmitter<any>();
	@Output() public page: EventEmitter<any> = new EventEmitter<any>();

	public realPageSizeOptions: Array<number>;

	/**
	* @constructor
	* @param {any} defaultOptions
	*/
	constructor( @Optional() @Inject( COLLAPSE_PAGINATOR_DEFAULT_OPTIONS ) readonly defaultOptions: any ) {}

	/**
	* @constructor
	*/
	public ngAfterViewInit() {
		this.paginator._intl.getRangeLabel = this.getExpansionRangeLabel;
		this.paginatorRef.emit( this.paginator );
	}

	/**
	* @constructor
	*/
	public ngAfterContentInit() {
		this.realPageSizeOptions = _.map( this.pageSizeOptions, ( size: number ) => size * 2 );
	}

	/**
	* @constructor
	*/
	public ngOnDestroy() {
		this.paginator._intl.getRangeLabel = new MatPaginatorIntl().getRangeLabel;
	}

	/**
	* Get expansion range label for table paginator
	* @desc Fixed mat-table wrong pagination when has expanded row.
	* @param {number} page
	* @param {number} pageSize
	* @param {number} length
	* @return {string} Range label
	*/
	public getExpansionRangeLabel( page: number, pageSize: number, length: number ): any {
		if ( length === 0 || pageSize === 0 ) return `0 of ${length}`;

		length /= 2;
		pageSize /= 2;

		length = Math.max( length, 0 );

		const startIndex: number = page * pageSize;
		const endIndex: number = startIndex < length
			? Math.min( startIndex + pageSize, length )
			: startIndex + pageSize;

		return `${startIndex + 1} - ${endIndex} of ${length}`;
	}

	/**
	* Handle page change event
	* @param {any} ev
	* @return {void}
	*/
	public onPageChange( ev: any ) {
		if ( this.pageSize !== ev.pageSize ) this.pageIndex = 0;

		this.paginator.pageIndex = this.pageIndex;
		this.paginator._changePageSize( ev.pageSize * 2 );
		this.page.emit( ev );
	}

}
