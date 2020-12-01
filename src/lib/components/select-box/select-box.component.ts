import {
	Input, Component, Output,
	EventEmitter, OnChanges, OnInit,
	SimpleChanges, ChangeDetectorRef, Optional,
	Inject, InjectionToken
} from '@angular/core';
import { Subject } from 'rxjs';
import { FormControl } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import _ from 'underscore';

import { UtilitiesService } from '../../services/utilities.service';
import { NumberService } from '../../services/number.service';

export const SELECT_BOX_DEFAULT_OPTIONS: InjectionToken<any> = new InjectionToken<any>( 'defaultOptions' );

@Component({
	selector	: 'select-box',
	templateUrl	: './select-box.pug',
	host		: { class: 'flex-noshrink layout-column' },
})
export class SelectBoxComponent implements OnInit, OnChanges {

	@Input() public ngModel: any;
	@Input() public init: boolean;
	@Input() public required: boolean;
	@Input() public disabled: boolean;
	@Input() public disableControl: boolean;
	@Input() public readonly: boolean;
	@Input() public multiple: boolean;
	@Input() public translated: boolean;
	@Input() public label: string;
	@Input() public emptyLabel: string;
	@Input() public emptyValue: any;
	@Input() public emptyImage: string;
	@Input() public defaultImage: string;
	@Input() public data: any;
	@Input() public hiddenList: Array<any>;
	@Input() public disabledList: Array<any>;
	@Input() public filtered: Array<any>;
	@Input() public groups: Array<any>;
	@Input() public fieldImage: string;
	@Input() public fieldSubName: string;
	@Input() public noFormField: boolean;
	@Input() public noErrorSpacing: boolean;
	@Input() public multiDepth: boolean;
	@Input() public formFieldClass: string = ( this.defaultOptions || {} ).formFieldClass || '';
	@Input() public panelClass: string = ( this.defaultOptions || {} ).panelClass || '';
	@Input() public floatLabel: string = ( this.defaultOptions || {} ).floatLabel || 'always';
	@Input() public appearance: string = ( this.defaultOptions || {} ).appearance || 'outline';
	@Input() public formControl: FormControl = new FormControl();
	@Input() public fieldKey: string = ( this.defaultOptions || {} ).fieldKey || 'id';
	@Input() public fieldParentKey: string = ( this.defaultOptions || {} ).fieldParentKey || 'parent_id';
	@Input() public fieldName: string = ( this.defaultOptions || {} ).fieldName || 'name';
	@Input() public sort: boolean = ( this.defaultOptions || {} ).sort !== undefined
		? ( this.defaultOptions || {} ).sort
		: true;
	@Input() public placeholder: string = ( this.defaultOptions || {} ).placeholder
		|| this.translateService.instant( 'GENERAL.PLACEHOLDERS.CHOOSE' );

	@Output() public ngModelChange: EventEmitter<any> = new EventEmitter<any>();
	@Output() public selectionChange: EventEmitter<any> = new EventEmitter<any>();
	@Output() public selectionOptionChange: EventEmitter<any> = new EventEmitter<any>();
	@Output() public selectionAllNestedOptionChange: EventEmitter<any> = new EventEmitter<any>();
	@Output() public openedChange: EventEmitter<any> = new EventEmitter<any>();

	public loaded: boolean;
	public isSelectAll: boolean;
	public displayImage: string;
	public displayValue: string;
	public selected: any;
	public handledGroupItems: any;
	public handledItems: Array<any> = [];
	public filterCtrl: FormControl = new FormControl();
	public onDestroy: Subject<void> = new Subject<void>();

	/**
	* @constructor
	* @param {any} defaultOptions
	* @param {TranslateService} translateService
	* @param {ChangeDetectorRef} cdRef
	*/
	constructor(
		@Optional() @Inject( SELECT_BOX_DEFAULT_OPTIONS ) readonly defaultOptions: any,
		public translateService	: TranslateService,
		public cdRef			: ChangeDetectorRef
	) {
		this.filterCtrl.valueChanges
		.pipe( takeUntil( this.onDestroy ) )
		.subscribe( ( query: string ) => this.filtered = this.filter( query ) );
	}

	/**
	* @constructor
	*/
	public ngOnInit() {
		// Load data when component initial
		this.init && this.loadData();
	}

	/**
	* @constructor
	* @param {SimpleChanges} changes
	*/
	public ngOnChanges( changes: SimpleChanges ) {
		if ( changes.data && _.isArray( this.data ) ) {
			this.onItemsChange( this.data );
		}

		if ( changes.ngModel ) {
			this.optionChange( { value: this.ngModel } );
		}
	}

	/**
	* Load data
	* @return {void}
	*/
	public loadData() {
		if ( !this.data || !this.data.subscribe || !_.isFunction( this.data.subscribe ) ) return;

		this.loaded = false;

		this.data.subscribe( ( result: any ) => this.onItemsChange( result ) );
	}

	/**
	* On items change
	* @param {Array} items
	* @return {void}
	*/
	public onItemsChange( items: Array<any> ) {
		this.handledItems = this.sort
			? _.sortBy( items, this.fieldName )
			: _.clone( items );

		if ( this.multiDepth ) {
			this.handledItems = UtilitiesService.convertMultiDepth(
				this.handledItems, this.fieldKey,
				this.fieldParentKey, this.fieldName
			);
		}

		if ( this.groups ) this.handledGroupItems = this.handleGroupItems();

		this.loaded = true;
		this.filtered = _.clone( this.handledItems );
		this.optionChange( { value: this.ngModel } );
	}

	/**
	* Filter
	* @param {string} query
	* @return {Array} Filtered
	*/
	public filter( query: string ): Array<any> {
		return this.handledItems.filter( ( item: any ) => {
			const filterValue: string = this.fieldName ? item[ this.fieldName ] : item;

			return UtilitiesService.stripVietnameseSymbol(
				filterValue
				.toLowerCase()
				.replace( / /g, '' )
			)
			.indexOf(
				UtilitiesService.stripVietnameseSymbol(
					query
					.toLowerCase()
					.replace( / /g, '' )
				)
			) > -1;
		} );
	}

	/**
	* Option change
	* @param {any} ev
	* @return {void}
	*/
	public optionChange( ev: any ) {
		const value: any = ev && ev.value && this.multiple ? ev.value[ 0 ] : ev.value;

		this.displayValue = this.emptyLabel;
		this.displayImage = this.emptyImage;

		if ( value !== null && value !== undefined ) {
			const selected: any = _.find( this.handledItems, ( item: any ) => item[ this.fieldKey ] === value );

			if ( selected ) {
				this.displayValue = this.translated
					? this.translateService.instant( selected[ this.fieldName ] )
					: selected[ this.fieldName ];
				this.displayValue += this.multiple && ev.value && ev.value.length > 1
					? ' (+'
						+ NumberService.addCommas( ev.value.length - 1 )
						+ ' '
						+ this.translateService.instant( 'GENERAL.LABELS.OTHERS' ).toLowerCase()
						+ ')'
					: '';
				this.displayImage = selected[ this.fieldImage ];
			} else {
				this.displayValue = value;
			}
		}

		// Get all nested options when parent option was selected
		if ( this.multiDepth && !this.isSelectAll && !this.multiple ) {
			let nested: Array<any> = this.emptyValue;

			if ( value !== null && value !== undefined ) {
				let children: Array<any> = [ value ];

				nested = [ ...children ];

				while ( children && children.length ) {
					children = _.map(
						_.filter( this.handledItems, ( item: any ) => _.contains( children, item[ this.fieldParentKey ] ) ),
						this.fieldKey
					);
					nested.push( ...children );
				}
			}

			this.selectionAllNestedOptionChange.emit( nested );
		}

		this.selectionChange.emit( ev );
		this.selectionOptionChange.emit(
			this.multiple
				? _.filter( this.handledItems, ( item: any ) => _.contains( ev.value, item[ this.fieldKey ] ) )
				: _.find( this.handledItems, ( item: any ) => value === item[ this.fieldKey ] )
		);
		this.isSelectAll = this.multiple
			&& this.handledItems
			&& this.ngModel
			&& this.handledItems.length === this.ngModel.length;
	}

	/**
	* Toggle select all options for multple mode
	* @return {void}
	*/
	public toggleSelectAll() {
		this.ngModel = this.isSelectAll ? _.map( this.handledItems, this.fieldKey ) : [];
		this.cdRef.detectChanges();
		this.optionChange( { value: this.ngModel } );
	}

	/**
	* Handle group items
	* @return {any}
	*/
	public handleGroupItems() {
		const groups: any = {};
		const noGroups: Array<any> = [];

		_.each( this.handledItems, ( item: any ) => {
			if ( item.group ) {
				if ( !groups[ item.group ] ) groups[ item.group ] = [];
				groups[ item.group ].push( item );
				return;
			}

			noGroups.push( item );
		} );

		return { groups, no_groups: noGroups };
	}

	/**
	* Check empty value is selected
	* @return {boolean}
	*/
	public get isEmptySelected(): boolean {
		if ( !this.emptyLabel ) return false;

		return this.emptyValue !== null && this.emptyValue !== undefined
			? this.ngModel === this.emptyValue
			: !this.ngModel === !this.emptyValue;
	}

	/**
	* Check hidden item
	* @param {any} item
	* @return {boolean}
	*/
	public isHiddenItem( item: any ): boolean {
		return item.hidden || _.contains( this.hiddenList, item[ this.fieldKey ] );
	}

	/**
	* Check disabled item
	* @param {any} item
	* @return {boolean}
	*/
	public isDisabledItem( item: any ): boolean {
		return item.disabled || _.contains( this.disabledList, item[ this.fieldKey ] );
	}

}
