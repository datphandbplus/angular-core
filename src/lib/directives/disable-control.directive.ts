import { Directive, Input } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
	selector: '[disableControl]',
})
export class DisableControlDirective {

	/**
	* @constructor
	* @param {boolean} condition
	*/
	@Input() set disableControl( condition: boolean ) {
		this.ngControl.control[ condition ? 'disable' : 'enable' ]();
	}

	/**
	* @constructor
	* @param {NgControl} ngControl
	*/
	constructor( private ngControl: NgControl ) {}

}
