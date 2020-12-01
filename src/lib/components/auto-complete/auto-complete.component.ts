import {
	Component, Input, OnInit,
	Output, EventEmitter, ChangeDetectorRef,
	SimpleChanges, OnChanges, Optional,
	Inject, InjectionToken
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import _ from 'underscore';

import { UtilitiesService } from '../../services/utilities.service';

export const AUTO_COMPLETE_DEFAULT_OPTIONS: InjectionToken<any> = new InjectionToken<any>( 'defaultOptions' );

@Component({
	selector	: 'auto-complete',
	templateUrl	: './auto-complete.pug',
	host		: { class: 'flex-noshrink layout-column' },
})
export class AutoCompleteComponent implements OnInit, OnChanges {

	@Input() public label: string;
	@Input() public placeholder: string;
	@Input() public ngModel: any;
	@Input() public required: boolean;
	@Input() public disabled: boolean;
	@Input() public disableControl: boolean;
	@Input() public readonly: boolean;
	@Input() public emptyLabel: string;
	@Input() public floatLabel: string = ( this.defaultOptions || {} ).floatLabel || 'always';
	@Input() public appearance: string = ( this.defaultOptions || {} ).appearance || 'outline';
	@Input() public fieldKey: string = ( this.defaultOptions || {} ).fieldKey || 'id';
	@Input() public fieldName: string = ( this.defaultOptions || {} ).fieldName || 'name';
	@Input() public data: Array<any> = [];
	@Input() public formControl: FormControl = new FormControl();

	@Output() public ngModelChange: EventEmitter<any> = new EventEmitter<any>();

	public filteredData: Observable<any>;

	/**
	* @constructor
	* @param {any} defaultOptions
	* @param {ChangeDetectorRef} cdRef
	*/
	constructor(
		@Optional() @Inject( AUTO_COMPLETE_DEFAULT_OPTIONS ) readonly defaultOptions: any,
		public cdRef: ChangeDetectorRef
	) {}

	/**
	* @constructor
	*/
	public ngOnInit() {
		this.prepareData();
	}

	/**
	* @constructor
	* @param {SimpleChanges} changes
	*/
	public ngOnChanges( changes: SimpleChanges ) {
		changes.data && this.prepareData();
	}

	/**
	* Prepare data
	* @private
	* @return {void}
	*/
	private prepareData() {
		if ( !_.findWhere( this.data, { id: '' } ) ) {
			this.data.unshift( { id: '', name: this.emptyLabel } );
		}

		this.filteredData = this.formControl.valueChanges
		.pipe(
			startWith( '' ),
			map( ( value: string ) => this.filter( value ) )
		);

		this.cdRef.detectChanges();
	}

	/**
	* Filter
	* @private
	* @param {string} query
	* @return {Array}
	*/
	private filter( query: string ): Array<any> {
		return this.data.filter( ( item: any ) => {
			const filterValue: string = this.fieldName ? item[ this.fieldName ] : item;

			return UtilitiesService.stripVietnameseSymbol(
				filterValue
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
	}

}
