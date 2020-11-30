import { Injectable, Inject, Optional } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import _ from 'underscore';

import { DEFAULT_APP_LOGO } from '../injection-token';

@Injectable()
export class WebNotificationService {

	public permission: Permission;

	/**
	* @constructor
	* @param {string} defaultAppLogo
	*/
	constructor( @Optional() @Inject( DEFAULT_APP_LOGO ) readonly defaultAppLogo: string ) {
		this.permission = this.isSupported() ? 'default' : 'denied';
	}

	/**
	* Is supported
	* @return {boolean}
	*/
	public isSupported(): boolean {
		return 'Notification' in window;
	}

	/**
	* Request permission
	* @return {void}
	*/
	public requestPermission() {
		if ( 'Notification' in window ) {
			Notification.requestPermission( ( status: any ) => {
				return this.permission = status;
			} );
		}
	}

	/**
	* Create notification
	* @param {string} title - Notification title
	* @param {PushNotification} options - Notification options
	* @return {Observable}
	*/
	public create( title: string, options?: PushNotification ): Observable<any> {
		return new Observable( ( observer: Observer<any> ) => {
			if ( !( 'Notification' in window ) ) {
				observer.complete();
			}

			if ( this.permission !== 'granted' ) {
				observer.complete();
			}

			const _notify: any = new Notification( title, options );

			_notify.onshow = ( e: any ) => {
				return observer.next({
					notification: _notify,
					event		: e,
				});
			};

			_notify.onclick = ( e: any ) => {
				return observer.next({
					notification: _notify,
					event		: e,
				});
			};

			_notify.onerror = ( e: any ) => {
				return observer.error({
					notification: _notify,
					event		: e,
				});
			};

			_notify.onclose = () => {
				return observer.complete();
			};
		} );
	}

	/**
	* Generate notification
	* @param {Array} source
	* @return {Observable}
	*/
	public generateNotification( source: Array<any> ) {
		_.each( source, ( item: any ) => {
			const options: PushNotification = {
				body: item.alertContent,
				icon: this.defaultAppLogo,
			};

			this.create( item.title, options ).subscribe();
		} );
	}

}

export declare type Permission = 'denied' | 'granted' | 'default';
export interface PushNotification {
	body?: string;
	icon?: string;
	tag?: string;
	data?: any;
	renotify?: boolean;
	silent?: boolean;
	sound?: string;
	noscreen?: boolean;
	sticky?: boolean;
	dir?: 'auto' | 'ltr' | 'rtl';
	lang?: string;
	vibrate?: number[];
}
