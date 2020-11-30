import {
	Directive, Input, Output,
	OnInit, EventEmitter
} from '@angular/core';
import _ from 'underscore';

@Directive({
	selector: '[ngInit]',
})
export class NgInitDirective implements OnInit {

	@Input() private ngInit: Function;

	@Output() private resultChange: EventEmitter<any> = new EventEmitter<any>();

	/**
	* @constructor
	*/
	public ngOnInit() {
		if ( !_.isFunction( this.ngInit ) ) return;

		this.resultChange.emit( this.ngInit() );
	}

}
