import { Injectable, Inject, Optional } from '@angular/core';
import { SwPush, SwUpdate } from '@angular/service-worker';
import { take } from 'rxjs/operators';
import { Observable, Observer } from 'rxjs';
import _ from 'underscore';

import { ApiService } from './api.service';
import { StoreService } from './store.service';
import { DEFAULT_FCM_PUBLIC_KEY, DEFAULT_AUTHORIZED_KEY, DEFAULT_APP_URL } from '../injection-token';

declare var window: Window;

@Injectable()
export class ServiceWorkerService {

	/**
	* @constructor
	* @param {string} defaultFCMPublicKey
	* @param {string} defaultAuthorizedKey
	* @param {string} defaultAppURL
	* @param {SwPush} swPush
	* @param {SwUpdate} swUpdate
	* @param {ApiService} apiService
	* @param {StoreService} storeService
	*/
	constructor(
		@Optional() @Inject( DEFAULT_FCM_PUBLIC_KEY ) readonly defaultFCMPublicKey: string,
		@Optional() @Inject( DEFAULT_AUTHORIZED_KEY ) readonly defaultAuthorizedKey: string,
		@Optional() @Inject( DEFAULT_APP_URL ) readonly defaultAppURL: string,
		private swPush		: SwPush,
		private swUpdate	: SwUpdate,
		private apiService	: ApiService,
		private storeService: StoreService
	) {}

	/**
	* Update available version
	* @return {void}
	*/
	public updateAvailableVersion() {
		this.swUpdate.available.subscribe( () => {
			this.swUpdate.activateUpdate().then( () => document.location.reload() );
		} );
	}

	/**
	* Enable push notification
	* @return {void}
	*/
	public enablePushNotification() {
		if ( !this.swPush.isEnabled || 'safari' in window ) return;

		// Request subscription
		this.swPush
		.requestSubscription( { serverPublicKey: this.defaultFCMPublicKey } )
		.then( ( subscription: any ) => {
			// Send subscription to the server
			this.apiService
			.call( '/fcm/subscription', 'POST', { subscription } )
			.subscribe();
		} );

		// Handle click notification event
		this.swPush.notificationClicks
		.subscribe( () => window.open( this.defaultAppURL ) );
	}

	/**
	* Disable push notification
	* @return {void}
	*/
	public disablePushNotification() {
		if ( !this.swPush.isEnabled || 'safari' in window ) return;

		// Unsubscribe all subscriptions
		this.swPush.subscription
		.pipe( take( 1 ) )
		.forEach( ( subscription: any ) => {
			subscription && subscription.unsubscribe();
		} );
	}

	/**
	* Listen push notification
	* @return {Observable}
	*/
	public listenPushNotification(): Observable<any> {
		return new Observable( ( observer: Observer<any> ) => {
			if ( !this.swPush.isEnabled || 'safari' in window ) {
				observer.next( null );
				return;
			}

			this.swPush.messages
			.subscribe(
				( payload: any ) => {
					const stored: any = this.storeService.get( this.defaultAuthorizedKey );

					// In case user unauthorized
					if ( !stored ) {
						observer.next( null );
						return;
					}

					observer.next( payload );
				},
				( error: any ) => observer.error( error )
			);
		} );
	}

}
