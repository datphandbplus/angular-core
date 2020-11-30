import {
	Component, Optional,
	Inject, InjectionToken
} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export const DIALOG_CONFIRM_DEFAULT_OPTIONS: InjectionToken<any> = new InjectionToken<any>( 'defaultOptions' );

@Component({
	selector	: 'dialog-confirm',
	templateUrl	: './dialog-confirm.pug',
})
export class DialogConfirmComponent {

	/**
	* @constructor
	* @param {any} defaultOptions
	* @param {any} data
	* @param {MatDialogRef} dialogRef
	*/
	constructor(
		@Optional() @Inject( DIALOG_CONFIRM_DEFAULT_OPTIONS ) readonly defaultOptions: any,
		@Inject( MAT_DIALOG_DATA ) public data: any,
		public dialogRef: MatDialogRef<DialogConfirmComponent>
	) {}

	/**
	* Click No Button event
	* @return {void}
	*/
	public onNoClick() {
		if ( this.data
			&& this.data.actions
			&& this.data.actions.no
			&& this.data.actions.no.value ) {
			this.dialogRef.close( this.data.actions.no.value );
			return;
		}

		this.dialogRef.close( false );
	}

	/**
	* Click Yes Button event
	* @return {void}
	*/
	public onYesClick() {
		if ( this.data
			&& this.data.actions
			&& this.data.actions.yes
			&& this.data.actions.yes.value ) {
			this.dialogRef.close( this.data.actions.yes.value );
			return;
		}

		this.dialogRef.close( true );
	}

	/**
	* Click Other Button event
	* @return {void}
	*/
	public onOtherClick() {
		if ( this.data
			&& this.data.actions
			&& this.data.actions.other
			&& this.data.actions.other.value ) {
			this.dialogRef.close( this.data.actions.other.value );
			return;
		}

		this.dialogRef.close( true );
	}

}
