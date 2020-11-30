import {
	Directive, ElementRef, OnChanges,
	SimpleChanges, Input
} from '@angular/core';
import * as _$ from 'jquery';

import { NumberService } from '../services/number.service';

const $: any = _$;

@Directive({
	selector: '[odometer]',
})
export class OdometerDirective implements OnChanges {

	@Input() private odometer: number = 0;

	private element: any;

	/**
	* @constructor
	* @param {ElementRef} elementRef
	*/
	constructor( private elementRef: ElementRef ) {
		this.element = $( this.elementRef.nativeElement );
		this.element.text( this.odometer );
	}

	/**
	* @constructor
	* @param {SimpleChanges} changes
	*/
	public ngOnChanges( changes: SimpleChanges ) {
		if ( changes.odometer ) {
			setTimeout( () => {
				this.element
				.prop( 'Counter', 0 )
				.animate(
					{ Counter: this.odometer },
					{
						duration: this.getDuration( this.odometer ),
						easing	: 'swing',
						step: ( now: any ) => {
							now = this.odometer % 1 === 0 ? Math.ceil( now ) : now.toFixed( 1 );
							this.element.text( NumberService.addCommas( +now ) );
						},
					}
				);
			}, 0 );
		}
	}

	/**
	* Get odometer duration
	* @private
	* @param {number} odometer
	* @return {number} Odometer duration
	*/
	private getDuration( odometer: number ): number {
		if ( odometer < 100 ) return 600;

		if ( odometer < 1000 ) return 1000;

		if ( odometer < 10000 ) return 1400;

		if ( odometer < 1000000 ) return 1800;

		if ( odometer < 10000000 ) return 2200;

		return 2600;
	}

}
