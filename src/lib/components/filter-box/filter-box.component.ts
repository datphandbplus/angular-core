import {
	Component, Input, Output,
	EventEmitter, SimpleChanges, AfterContentInit,
	OnChanges, Optional,
	InjectionToken, Inject
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Options, LabelType } from 'ng5-slider';
import moment from 'moment-timezone';
import _ from 'underscore';

import { NumberService } from '../../services/number.service';

export const FILTER_BOX_DEFAULT_OPTIONS: InjectionToken<any> = new InjectionToken<any>( 'defaultOptions' );

@Component({
	selector	: 'filter-box',
	templateUrl	: './filter-box.pug',
	host		: { class: 'filter-box' },
})
export class FilterBoxComponent implements AfterContentInit, OnChanges {

	@Input() public fieldSubName: string;
	@Input() public fieldImage: string;
	@Input() public emptyLabel: string;
	@Input() public placeholder: string;
	@Input() public emptyValue: any;
	@Input() public data: any;
	@Input() public filter: any;
	@Input() public minDate: any;
	@Input() public maxDate: any;
	@Input() public translated: boolean;
	@Input() public disabled: boolean;
	@Input() public multiple: boolean;
	@Input() public rangeMode: boolean;
	@Input() public onlyYear: boolean;
	@Input() public onlyMonth: boolean;
	@Input() public startView: string = ( this.defaultOptions || {} ).startView || 'month';
	@Input() public fieldKey: string = ( this.defaultOptions || {} ).fieldKey || 'id';
	@Input() public fieldParentKey: string = ( this.defaultOptions || {} ).fieldParentKey || 'parent_id';
	@Input() public fieldName: string = ( this.defaultOptions || {} ).fieldName || 'name';
	@Input() public type: string = ( this.defaultOptions || {} ).type || 'query';
	@Input() public min: number = ( this.defaultOptions || {} ).min || 0;
	@Input() public max: number = ( this.defaultOptions || {} ).max || 1000;

	@Output() public applyFilter: EventEmitter<any> = new EventEmitter<any>();
	@Output() public filterChange: EventEmitter<any> = new EventEmitter<any>();

	public menuOpened: boolean;
	public slideValue: number = 0;
	public slideHighValue: number = 1000;
	public slideOptions: Options = {
		floor: 0, ceil: 1000,
		translate: ( value: number, label: LabelType ): string => {
			switch ( label ) {
				case LabelType.Low:
					return '<b>'
						+ this.translateService.instant( 'GENERAL.LABELS.MIN' )
						+ '</b> '
						+ NumberService.kFormatter( value );
				case LabelType.High:
					return '<b>'
						+ this.translateService.instant( 'GENERAL.LABELS.MAX' )
						+ '</b> '
						+ NumberService.kFormatter( value );
				default:
					return NumberService.kFormatter( value );
			}
		},
	};

	/**
	* @constructor
	* @param {any} defaultOptions
	* @param {TranslateService} translateService
	*/
	constructor(
		@Optional() @Inject( FILTER_BOX_DEFAULT_OPTIONS ) readonly defaultOptions: any,
		public translateService: TranslateService
	) {}

	/**
	* @constructor
	*/
	public ngAfterContentInit() {
		if ( !this.emptyLabel ) {
			this.emptyLabel = this.type === 'datepicker'
				? this.translateService.instant( 'GENERAL.LABELS.ALL_DATES' )
				: ( !this.multiple ? this.translateService.instant( 'GENERAL.LABELS.ALL_ITEMS' ) : '' );
		}

		if ( !this.placeholder ) {
			this.placeholder = this.type === 'query'
				? this.translateService.instant( 'GENERAL.PLACEHOLDERS.SEARCH' )
				: this.translateService.instant( 'GENERAL.PLACEHOLDERS.CHOOSE' );
		}
	}

	/**
	* @constructor
	* @param {SimpleChanges} changes
	*/
	public ngOnChanges( changes: SimpleChanges ) {
		if ( this.type === 'range' ) {
			if ( this.filter
				&& !_.has( changes, 'min' )
				&& !_.has( changes, 'max' ) ) {
				return;
			}

			this.slideValue = Math.ceil( this.min ) || 0;
			this.slideHighValue = Math.ceil( this.max ) || 1000;
			this.slideOptions = {
				...this.slideOptions,
				floor: this.slideValue, ceil: this.slideHighValue,
			};
			this.filter = { min: this.slideValue, max: this.slideHighValue };
		}
	}

	/**
	* On month of Datepicker change
	* @param {any} picker
	* @param {any} event
	* @return {void}
	*/
	public onMonthChange( picker: any, event: any ) {
		if ( !this.onlyMonth ) return;

		this.filter = event;
		this.filterChange.emit( this.filter );
		this.applyFilter.emit( event );
		picker.close();
	}

	/**
	* On year of Datepicker change
	* @param {any} picker
	* @param {any} event
	* @return {void}
	*/
	public onYearChange( picker: any, event: any ) {
		if ( !this.onlyYear ) return;

		this.filter = event;
		this.filterChange.emit( this.filter );
		this.applyFilter.emit( event );
		picker.close();
	}

	/**
	* On slide value change
	* @param {any} event
	* @return {void}
	*/
	public onSlideValueChange( event: any ) {
		this.filter = {
			...this.filter,
			min: event,
		};

		this.filterChange.emit( this.filter );
	}

	/**
	* On slide high value change
	* @param {any} event
	* @return {void}
	*/
	public onSlideHighValueChange( event: any ) {
		this.filter = {
			...this.filter,
			max: event,
		};

		this.filterChange.emit( this.filter );
	}

	/**
	* Toggle slider menu
	* @return {void}
	*/
	public toggleSliderMenu() {
		setTimeout( () => this.menuOpened = !this.menuOpened, 100 );
	}

	/**
	* Format filter
	* @return {string}
	*/
	public get format(): string {
		if ( !this.filter ) return;

		switch ( this.type ) {
			case 'datepicker':
				if ( this.onlyMonth ) return moment( this.filter ).format( 'MMMM YYYY' );
				if ( this.onlyYear ) return moment( this.filter ).format( 'YYYY' );
				if ( !this.rangeMode ) return moment( this.filter ).format( 'DD/MM/YYYY' );

				return moment( this.filter.begin ).format( 'DD/MM/YYYY' )
					+ ' - '
					+ moment( this.filter.end ).format( 'DD/MM/YYYY' );
			case 'range':
				return this.translateService.instant( 'GENERAL.LABELS.RANGE' )
					+ ': '
					+ NumberService.addCommas( this.filter.min )
					+ ' - '
					+ NumberService.addCommas( this.filter.max );
		}
	}

}
