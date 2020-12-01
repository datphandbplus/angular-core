import { Injectable, Inject, Optional } from '@angular/core';
import { Observable, Observer, ReplaySubject } from 'rxjs';
import io from 'socket.io-client';

import { DEFAULT_SERVER_WEBSOCKET_URL } from '../injection-token';

@Injectable()
export class WebSocketService {

	private socket: any;
	private socketChange: ReplaySubject<any> = new ReplaySubject<any>();

	/**
	* @constructor
	* @param {string} defaultServerWSURL
	*/
	constructor(
		@Optional() @Inject( DEFAULT_SERVER_WEBSOCKET_URL ) readonly defaultServerWSURL: string
	) {}

	/**
	* Connect
	* @param {any} options
	* @return {Observable}
	*/
	public connect( options: any = {} ): Observable<any> {
		return new Observable( ( observer: Observer<any> ) => {
			this.socket = io.connect( this.defaultServerWSURL, options );

			this.socket.on( 'connect', () => {
				this.socketChange.next( this.socket );
				observer.next( this.socket );
			} );
		} );
	}

	/**
	* Emit socket
	* @param {any} event
	* @param {any} data
	* @return {void}
	*/
	public emit( event: any, data: any ) {
		if ( !this.socket ) return;

		this.socket.emit( event, data );
	}

	/**
	* Socket listenner
	* @param {any} event
	* @return {Observable}
	*/
	public on( event: any ): Observable<any> {
		return new Observable( ( observer: Observer<any> ) => {
			if ( !this.socket ) return;

			this.socket.on( event, ( data: any ) => observer.next( data ) );
		} );
	}

	/**
	* Disconnect
	* @return {void}
	*/
	public disconnect() {
		if ( !this.socket ) return;

		this.socket.disconnect();
	}

	/**
	* Get socket change
	* @return {ReplaySubject}
	*/
	public getSocketChange(): ReplaySubject<any> {
		return this.socketChange;
	}

}
