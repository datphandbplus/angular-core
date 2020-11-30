import { Injectable, Inject, Optional } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import _ from 'underscore';

import { StoreService } from './store.service';
import { DEFAULT_SERVER_API_URL, DEFAULT_AUTHORIZED_KEY } from '../injection-token';

@Injectable()
export class ApiService {

	private baseUrl: string = this.defaultServerApiURL;
	private storedAuth: any;

	/**
	* @constructor
	* @param {string} defaultServerApiURL
	* @param {string} defaultAuthorizedKey
	* @param {HttpClient} http
	* @param {StoreService} storeService
	* @param {Router} router
	*/
	constructor(
		@Optional() @Inject( DEFAULT_SERVER_API_URL ) readonly defaultServerApiURL: string,
		@Optional() @Inject( DEFAULT_AUTHORIZED_KEY ) readonly defaultAuthorizedKey: string,
		private http		: HttpClient,
		private storeService: StoreService,
		private router		: Router
	) {}

	/**
	* Set http headers
	* @private
	* @param {any} headers
	* @return {HttpHeaders}
	*/
	private setHeaders( headers: any ): HttpHeaders {
		const info: any = this.getStoredAuth();

		headers = new HttpHeaders( headers );

		if ( info ) {
			headers = headers.append( 'x-channel-id', info.channel_id );
			headers = headers.append( 'x-channel-token', info.channel_token );
			headers = headers.append( 'x-account-id', info.account_id );
			headers = headers.append( 'x-account-token', info.account_token );
		}

		return headers;
	}

	/**
	* Fail callback
	* @private
	* @param {any} error
	* @return {any}
	*/
	private failCallback( error: any ): any {
		let err: any = {};

		try {
			err = error.json();
		} catch {}

		if ( error.status === 401 ) {
			this.router.navigate( [ 'logout' ] );
		} else if ( error.status === 500
			|| error.status === 404
			|| error.status === 403
			|| error.status === 400 ) {
			this.router.navigate( [ error.status ] );
		}

		return {
			status	: error.status,
			message	: err ? err : 'Unknown Error',
		};
	}

	/**
	* Set stored auth
	* @param {any} storedAuth
	* @return {void}
	*/
	public setStoredAuth( storedAuth: any ) {
		this.storedAuth = storedAuth;
	}

	/**
	* Get stored auth
	* @return {any}
	*/
	public getStoredAuth(): any {
		if ( !this.storedAuth ) {
			this.storedAuth = this.storeService.get( this.defaultAuthorizedKey );
		}

		return this.storedAuth;
	}

	/**
	* Remove stored auth
	* @return {void}
	*/
	public removeStoredAuth() {
		this.storedAuth = null;
	}

	/**
	* Set http base url
	* @param {string} url
	* @return {void}
	*/
	public setBaseUrl( url: string ) {
		this.baseUrl = url;
	}

	/**
	* Call http
	* @param {string} url - Http url
	* @param {string} type - Http method
	* @param {any} params - Http params
	* @param {any} headers - Http headers
	* @return {Observable}
	*/
	public call( url: string, type: string = 'get', params: any = {}, headers: any = {} ): Observable<any> {
		return new Observable( ( observer: Observer<any> ) => {
			headers = this.setHeaders({
				'Content-Type': 'application/json;charset=UTF-8',
				...headers,
			});

			const options: any = { headers };

			url = this.baseUrl ? this.baseUrl + url : this.baseUrl;

			type = type.toLowerCase();

			if ( type === 'delete' || type === 'get' ) {
				let first: string = '?';

				for ( const key in params ) {
					if ( params.hasOwnProperty( key ) ) {
						url += first + key + '=' + params[ key ];
						first = '&';
					}
				}

				params = options;
			}

			this.http[ type ]( url, params, options )
			.subscribe(
				( response: any ) => observer.next( response ),
				( error: any ) => observer.error( this.failCallback( error ) )
			);
		} );
	}

	/**
	* Call http upload
	* @param {string} url - Http url
	* @param {Array} files - Upload Files
	* @param {any} headers - Http headers
	* @return {Observable}
	*/
	public upload( url: string, files: any, headers: any = {} ): Observable<any> {
		return new Observable( ( observer: Observer<any> ) => {
			headers = this.setHeaders( headers );

			const formData: FormData = new FormData();
			const options: any = { headers };

			// In case files is file list
			if ( files instanceof FileList ) {
				_.each( files, ( file: File ) => formData.append( 'files[]', file, file.name ) );
			} else {
				formData.append( 'file', files );
			}

			url = this.baseUrl ? this.baseUrl + url : this.baseUrl;

			this.http.post( url, formData, options )
			.subscribe(
				( response: any ) => observer.next( response ),
				( error: any ) => observer.error( this.failCallback( error ) )
			);
		} );
	}

}
