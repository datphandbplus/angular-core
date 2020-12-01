import { Component, ElementRef } from '@angular/core';
import * as _$ from 'jquery';

const $: any = _$;

@Component({
	selector: 'sidebar-item',
	template: '<li><ng-content></ng-content></li>',
	host	: { class: 'sidebar-item' },
})
export class SideBarItemComponent {}

@Component({
	selector	: 'sidebar',
	templateUrl	: './sidebar.pug',
})
export class SideBarComponent {

	public element: any;

	/**
	* @constructor
	* @param {ElementRef} elementRef
	*/
	constructor( public elementRef: ElementRef ) {
		this.element = $( this.elementRef.nativeElement );
	}

	/**
	* Is show button scroll next
	* @return {boolean}
	*/
	public get isShowBtnNext(): boolean {
		const listElement: any = this.element.find( '.sidebar-list' );
		const listWidth: number = listElement.outerWidth() || 0;
		const listScrollWidth: number = listElement[ 0 ].scrollWidth || 0;

		return listScrollWidth > listWidth
			&& ( listElement.scrollLeft() + listWidth ) < listScrollWidth;
	}

	/**
	* Is show button scroll previous
	* @return {boolean}
	*/
	public get isShowBtnPrev(): boolean {
		const listElement: any = this.element.find( '.sidebar-list' );
		return listElement.scrollLeft() > 0;
	}

	/**
	* Scroll previous
	* @return {void}
	*/
	public scrollPrev() {
		const listElement: any = this.element.find( '.sidebar-list' );
		listElement.animate( { scrollLeft: listElement.scrollLeft() - ( listElement.outerWidth() - 70 ) }, 300, 'swing' );
	}

	/**
	* Scroll previous
	* @return {void}
	*/
	public scrollNext() {
		const listElement: any = this.element.find( '.sidebar-list' );
		listElement.animate( { scrollLeft: listElement.scrollLeft() + ( listElement.outerWidth() - 70 ) }, 300, 'swing' );
	}

}
