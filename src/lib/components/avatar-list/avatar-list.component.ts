import {
	Input, Component, OnChanges,
	SimpleChanges, Optional,
	Inject, InjectionToken
} from '@angular/core';
import _ from 'underscore';

export const AVATAR_LIST_DEFAULT_OPTIONS: InjectionToken<any> = new InjectionToken<any>( 'defaultOptions' );

@Component({
	selector	: 'avatar-list',
	templateUrl	: './avatar-list.pug',
	styleUrls	: [ './avatar-list.scss' ],
})
export class AvatarListComponent implements OnChanges {

	@Input() public items: Array<any>;
	@Input() public board: boolean = ( this.defaultOptions || {} ).board;
	@Input() public alwaysVisible: boolean = ( this.defaultOptions || {} ).alwaysVisible;
	@Input() public size: number = ( this.defaultOptions || {} ).size || 40;
	@Input() public boardHeight: number = ( this.defaultOptions || {} ).boardHeight || 40;
	@Input() public maximum: number = ( this.defaultOptions || {} ).maximum || 9;
	@Input() public lazy: boolean = ( this.defaultOptions || {} ).lazy || true;

	public handledItems: Array<any>;

	/**
	* @constructor
	* @param {any} defaultOptions
	*/
	constructor( @Optional() @Inject( AVATAR_LIST_DEFAULT_OPTIONS ) readonly defaultOptions: any ) {}

	/**
	* @constructor
	* @param {SimpleChanges} changes
	*/
	public ngOnChanges( changes: SimpleChanges ) {
		if ( !changes.items ) return;
		this.handledItems = this.handleAvatarList( this.items, this.maximum );
	}

	/**
	* Handle avatar list
	* @param {Array} items
	* @param {number} maximum
	* @return {Array}
	*/
	public handleAvatarList( items: Array<any>, maximum: number ): Array<any> {
		const arr: Array<any> = [];

		_.each( items, ( item: any, index: number ) => {
			const _item: any = _.clone( item );

			if ( ( index + 1 ) > maximum ) {
				const lastItem: any = arr[ maximum ] || { is_count_item: true };

				if ( !lastItem.full_name ) {
					lastItem.full_name = '';
				} else {
					lastItem.full_name += ', ';
				}

				if ( !lastItem.count ) lastItem.count = 0;

				lastItem.full_name += ( _item.full_name || 'N/A' ) + ` (${ _item.email })`;
				lastItem.count++;
				arr[ maximum ] = lastItem;
				return;
			}

			_item.full_name = ( _item.full_name || 'N/A' ) + ` (${ _item.email })`;
			arr.push( _item );
		} );

		return arr;
	}

}
