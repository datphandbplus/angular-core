import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';
import _ from 'underscore';

@Injectable()
export class SnackBarService {

	public btnDismiss: string = this.translateService.instant( 'GENERAL.LABELS.OK' );
	public defaultConfig: any = {
		panelClass			: [],
		horizontalPosition	: 'right',
		duration			: 3000,
	};

	/**
	* @constructor
	* @param {MatSnackBar} snackBar
	* @param {TranslateService} translateService
	*/
	constructor(
		private snackBar		: MatSnackBar,
		private translateService: TranslateService
	) {}

	/**
	* Set config
	* @param {any} config
	* @return {void}
	*/
	public setConfig( config: any ) {
		this.defaultConfig = { ...JSON.parse( JSON.stringify( this.defaultConfig ) ), ...config };
	}

	/**
	* Show Success Snack Bar
	* @param {string} message
	* @param {any} params
	* @param {any} config
	* @return {void}
	*/
	public success( message: string, params: any = null, config: any = null ) {
		config = { ...JSON.parse( JSON.stringify( this.defaultConfig ) ), ...config };
		config.panelClass.push( 'mat-success' );
		this.translateService.get( message, params )
		.subscribe( ( msg: string ) => this.snackBar.open( msg, this.btnDismiss, config ) );
	}

	/**
	* Show Warning Snack Bar
	* @param {string} message
	* @param {any} params
	* @param {any} config
	* @return {void}
	*/
	public warning( message: string, params: any = null, config: any = null ) {
		config = { ...JSON.parse( JSON.stringify( this.defaultConfig ) ), ...config };
		config.panelClass.push( 'mat-warning' );
		this.translateService.get( message, params )
		.subscribe( ( msg: string ) => this.snackBar.open( msg, this.btnDismiss, config ) );
	}

	/**
	* Show Primary Snack Bar
	* @param {string} message
	* @param {any} params
	* @param {any} config
	* @return {void}
	*/
	public primary( message: string, params: any = null, config: any = null ) {
		config = { ...JSON.parse( JSON.stringify( this.defaultConfig ) ), ...config };
		config.panelClass.push( 'mat-primary' );
		this.translateService.get( message, params )
		.subscribe( ( msg: string ) => this.snackBar.open( msg, this.btnDismiss, config ) );
	}

	/**
	* Show Warn Snack Bar
	* @param {string} message
	* @param {any} params
	* @param {any} config
	* @return {void}
	*/
	public warn( message: string, params: any = null, config: any = null ) {
		config = { ...JSON.parse( JSON.stringify( this.defaultConfig ) ), ...config };
		config.panelClass.push( 'mat-warn' );
		this.translateService.get( message, params )
		.subscribe( ( msg: string ) => this.snackBar.open( msg, this.btnDismiss, config ) );
	}

	/**
	* Show Accent Snack Bar
	* @param {string} message
	* @param {any} params
	* @param {any} config
	* @return {void}
	*/
	public accent( message: string, params: any = null, config: any = null ) {
		config = { ...JSON.parse( JSON.stringify( this.defaultConfig ) ), ...config };
		config.panelClass.push( 'mat-accent' );
		this.translateService.get( message, params )
		.subscribe( ( msg: string ) => this.snackBar.open( msg, this.btnDismiss, config ) );
	}

	/**
	* Show Default Snack Bar
	* @param {string} message
	* @param {any} params
	* @param {any} config
	* @return {void}
	*/
	public open( message: string, params: any = null, config: any = null ) {
		config = { ...JSON.parse( JSON.stringify( this.defaultConfig ) ), ...config };
		this.translateService.get( message, params )
		.subscribe( ( msg: string ) => this.snackBar.open( msg, this.btnDismiss, config ) );
	}

}
