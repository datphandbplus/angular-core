import { Directive, ElementRef, AfterContentChecked } from '@angular/core';
import * as _$ from 'jquery';

const $: any = _$;

@Directive({
	selector: '[adjustFontsize]',
})
export class AdjustFontsizeDirective implements AfterContentChecked {

	private element: any;

	/**
	* @constructor
	* @param {ElementRef} elementRef
	*/
	constructor( private elementRef: ElementRef ) {
		this.element = $( this.elementRef.nativeElement );
	}

	/**
	* @constructor
	*/
	public ngAfterContentChecked() {
		const elementWidth: number = ( this.element.width() || 0 );
		const parentWidth: number = ( this.element.parent().width() || 0 ) - ( this.element.siblings().width() || 0 );

		if ( elementWidth <= 0
			|| parentWidth <= 0
			|| elementWidth <= parentWidth ) return;

		const newFontsize: number = +this.element.css( 'font-size' ).replace( 'px', '' )
			* ( parentWidth / elementWidth );

		this.element.css({
			'font-size'		: newFontsize + 'px',
			'line-height'	: newFontsize + 'px',
		});
	}

}
