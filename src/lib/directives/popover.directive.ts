import {
	Directive, Input, ElementRef,
	HostListener, OnDestroy, AfterViewInit
} from '@angular/core';
import * as _$ from 'jquery';

const $: any = _$;

@Directive({
	selector: '[popover]',
})
export class PopoverDirective implements AfterViewInit, OnDestroy {

	@Input() private popover: HTMLElement;

	private element: any;
	private popoverEle: any;

	/**
	* @constructor
	*/
	@HostListener( 'mouseover' ) public onMouseOver() {
		const offset: any = this.element.offset();
		const top: number = offset.top + this.element.height();
		const left: number = offset.left + this.element.width();

		this.popoverEle
		.html( this.popover )
		.css( { top, left, visibility: 'visible', opacity: 1 } );
	}

	/**
	* @constructor
	*/
	@HostListener( 'mouseout' ) public onMouseOut() {
		this.popoverEle
		.html( '' )
		.css( { visibility: 'hidden', opacity: 0 } );
	}

	/**
	* @constructor
	* @param {ElementRef} elementRef
	*/
	constructor( private elementRef: ElementRef ) {}

	/**
	* @constructor
	*/
	public ngAfterViewInit() {
		const body: any = $( 'body' );

		this.element = $( this.elementRef.nativeElement );

		// Get popover elment
		this.popoverEle = body.find( '.ngx-popover' );

		if ( this.popoverEle.length ) return;

		// Append popover element
		this.popoverEle = $( '<div></div>' ).addClass( 'ngx-popover' );
		body.append( this.popoverEle );
	}

	/**
	* @constructor
	*/
	public ngOnDestroy() {
		this.popoverEle && this.popoverEle.remove();
	}

}
