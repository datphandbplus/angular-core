import {
	Component, Input,
	Output, EventEmitter
} from '@angular/core';

@Component({
	selector	: 'action-button',
	templateUrl	: './action-button.pug',
})
export class ActionButtonComponent {

	@Input() public color: string;
	@Input() public icon: string;
	@Input() public title: string;
	@Input() public disabled: boolean;

	@Output() public onClick: EventEmitter<any> = new EventEmitter<any>();

	/**
	* Get css class
	* @return {string}
	*/
	public get compClass(): string {
		const _compClass: Array<string> = [];

		if ( this.icon ) _compClass.push( this.icon );
		if ( this.color ) _compClass.push( 'text-' + this.color );

		return _compClass.join( ' ' );
	}

}

@Component({
	selector	: 'action-box',
	templateUrl	: './action-box.pug',
})
export class ActionBoxComponent {

	@Input() public disabled: boolean;

}
