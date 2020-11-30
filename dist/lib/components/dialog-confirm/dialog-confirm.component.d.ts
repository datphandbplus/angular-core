import { InjectionToken } from '@angular/core';
import { MatDialogRef } from '@angular/material';
export declare const DIALOG_CONFIRM_DEFAULT_OPTIONS: InjectionToken<any>;
export declare class DialogConfirmComponent {
    readonly defaultOptions: any;
    data: any;
    dialogRef: MatDialogRef<DialogConfirmComponent>;
    /**
    * @constructor
    * @param {any} defaultOptions
    * @param {any} data
    * @param {MatDialogRef} dialogRef
    */
    constructor(defaultOptions: any, data: any, dialogRef: MatDialogRef<DialogConfirmComponent>);
    /**
    * Click No Button event
    * @return {void}
    */
    onNoClick(): void;
    /**
    * Click Yes Button event
    * @return {void}
    */
    onYesClick(): void;
    /**
    * Click Other Button event
    * @return {void}
    */
    onOtherClick(): void;
}
