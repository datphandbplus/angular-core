import { Injectable, Inject, Optional } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ReplaySubject } from 'rxjs';

import { DEFAULT_APP_NAME } from '../injection-token';

@Injectable()
export class PageService {

	private titleChangeObserver: ReplaySubject<any> = new ReplaySubject<string>();
	private processChangeObserver: ReplaySubject<boolean> = new ReplaySubject<boolean>();

	/**
	* @constructor
	* @param {string} defaultAppName
	* @param {Title} titleService
	*/
	constructor(
		@Optional() @Inject( DEFAULT_APP_NAME ) readonly defaultAppName: string,
		private titleService: Title
	) {}

	/**
	* Set title
	* @param {string} title
	* @param {string} prefix
	* @return {void}
	*/
	public setTitle( title: string, prefix: string = this.defaultAppName ) {
		this.titleService.setTitle( prefix + ' - ' + title );
		this.titleChangeObserver.next( title );
	}

	/**
	* Get title
	* @return {string}
	*/
	public getTitle(): string {
		return this.titleService.getTitle();
	}

	/**
	* On process change event
	* @param {boolean} isProcessing
	* @return {void}
	*/
	public setProcessing( isProcessing: boolean ) {
		isProcessing
			? this.processChangeObserver.next( true )
			: setTimeout( () => this.processChangeObserver.next( false ), 1000 );
	}

	/**
	* On title change event
	* @return {ReplaySubject}
	*/
	get title(): ReplaySubject<string> {
		return this.titleChangeObserver;
	}

	/**
	* On processing change event
	* @return {ReplaySubject}
	*/
	get processing(): ReplaySubject<boolean> {
		return this.processChangeObserver;
	}

}
