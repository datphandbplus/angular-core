import { Injectable, Inject, Optional } from '@angular/core';
import { Observable, Observer, ReplaySubject } from 'rxjs';
import io from 'socket.io-client';

import { StoreService } from './store.service';
import { DEFAULT_AUTHORIZED_KEY, DEFAULT_SERVER_WEBSOCKET_URL } from '../injection-token';

@Injectable()
export class WebSocketService {

	private webSocketChange: ReplaySubject<any> = new ReplaySubject<any>();
	private socket: any;

	/**
	* @constructor
	* @param {string} defaultAuthorizedKey
	* @param {string} defaultServerWSURL
	* @param {StoreService} storeService
	*/
	constructor(
		@Optional() @Inject( DEFAULT_AUTHORIZED_KEY ) readonly defaultAuthorizedKey: string,
		@Optional() @Inject( DEFAULT_SERVER_WEBSOCKET_URL ) readonly defaultServerWSURL: string,
		private storeService: StoreService
	) {}

	/**
	* Connect
	* @return {Observable}
	*/
	public connect(): Observable<any> {
		return new Observable( ( observer: Observer<any> ) => {
			const currentUser: any = this.storeService.get( this.defaultAuthorizedKey );

			if ( !currentUser ) return;

			if ( this.socket ) {
				this.webSocketChange.next( this );
				observer.next( this.socket );
				return;
			}

			const channelId: string = currentUser.channel_id;
			const userId: number = currentUser.user_id;
			const userToken: string = encodeURIComponent( currentUser.user_token );

			this.socket = io.connect(
				this.defaultServerWSURL,
				{ query: 'channel_id=' + channelId + '&user_id=' + userId + '&token=' + userToken }
			);

			this.socket.on( 'connect', () => {
				this.webSocketChange.next( this.socket );
				observer.next( this.socket );
			} );

			this.socket.on( 'disconnect', () => {
				this.socket = null;
				this.webSocketChange.next( this.socket );
				observer.next( this.socket );
			} );
		} );
	}

	/**
	* Emit socket
	* @param {any} _emit
	* @param {any} data
	* @return {void}
	*/
	public emit( _emit: any, data: any ) {
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

			this.socket.on( event, ( data: any ) => {
				observer.next( data );
			} );
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
		return this.webSocketChange;
	}

}
