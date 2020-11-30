import { Injectable, Inject, Optional } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import * as CryptoJS from 'crypto-js';
import _ from 'underscore';
import moment from 'moment-timezone';

import { DEFAULT_EXPIRE_DAYS, DEFAULT_STORAGE_HASH_KEY } from '../injection-token';

@Injectable()
export class StoreService {

	private options: any = { path: '/' };

	/**
	* @constructor
	* @param {number} defaultExpireDays
	* @param {string} defaultStorageHashKey
	* @param {CookieService} cookies
	*/
	constructor(
		@Optional() @Inject( DEFAULT_EXPIRE_DAYS ) readonly defaultExpireDays: number,
		@Optional() @Inject( DEFAULT_STORAGE_HASH_KEY ) readonly defaultStorageHashKey: string,
		private cookies: CookieService
	) {}

	/**
	* Set store data
	* @param {string} key
	* @param {any} data
	* @param {number} expires - Number of expire days
	* @return {void}
	*/
	public set( key: string, data: any, expires: number = this.defaultExpireDays ) {
		const hashKey: string = this.getHashKey();

		if ( !hashKey ) return;

		const message: string = JSON.stringify( data );
		const hashValue: any = CryptoJS.AES.encrypt( message, hashKey );

		this.cookies.put( key, hashValue.toString(), this._mergeOptions( expires ) );
	}

	/**
	* Get store data
	* @param {string} key
	* @return {any}
	*/
	public get( key: string ): any {
		const hashKey: string = this.getHashKey();
		const hashValue: string = this.cookies.get( key );

		if ( hashKey && hashValue ) {
			const bytes: any = CryptoJS.AES.decrypt( hashValue, hashKey );
			let rawValue: any;

			try {
				rawValue = bytes.toString( CryptoJS.enc.Utf8 );
				rawValue = JSON.parse( rawValue );
			} catch {}

			return rawValue;
		}

		return null;
	}

	/**
	* Remove store data
	* @param {string} key
	* @return {void}
	*/
	public remove( key: string ) {
		this.cookies.remove( key, this.options );
	}

	/**
	* Remove all store data
	* @param {string} key
	* @return {void}
	*/
	public removeAll() {
		this.cookies.removeAll();
	}

	/**
	* Set local store data
	* @param {string} key
	* @param {any} data
	* @return {void}
	*/
	public setLocal( key: string, data: any ) {
		const hashKey: string = this.getHashKey();

		if ( hashKey ) {
			const message: string = JSON.stringify( data );
			const hashValue: any = CryptoJS.AES.encrypt( message, hashKey );

			localStorage.setItem( key, hashValue.toString() );
		}
	}

	/**
	* Get local store data
	* @param {string} key
	* @return {any}
	*/
	public getLocal( key: string ): any {
		const hashKey: string = this.getHashKey();
		const hashValue: string = localStorage.getItem( key );

		if ( hashKey && hashValue ) {
			const bytes: any = CryptoJS.AES.decrypt( hashValue, hashKey );
			let rawValue: any;

			try {
				rawValue = bytes.toString( CryptoJS.enc.Utf8 );
				rawValue = JSON.parse( rawValue );
			} catch {}

			return rawValue;
		}

		return null;
	}

	/**
	* Remove local store data
	* @param {string} key
	* @return {void}
	*/
	public removeLocal( key: string ) {
		localStorage.removeItem( key );
	}

	/**
	* Set store hash key
	* @param {any} value - Hash key
	* @param {number} expires - Number of expire days
	* @return {void}
	*/
	public setHashKey( value: any, expires: number = 1 ) {
		this.cookies.put( '_r', value, this._mergeOptions( expires ) );
	}

	/**
	* Get store hash key
	* @return {string} Hash key
	*/
	public getHashKey(): string {
		return this.defaultStorageHashKey;
	}

	/**
	* Remove store hash key
	* @return {string} Hash key
	*/
	public removeHashKey() {
		this.cookies.remove( '_r', this.options );
	}

	/**
	* Merge options
	* @private
	* @param {number} expires - Number of expire days
	* @return {any} options - Merged options
	*/
	private _mergeOptions( expires: number ): any {
		const options: any = {};

		if ( expires ) {
			options.expires = moment( +moment() + 24 * 60 * 60 * 1000 * expires ).format();
		}

		_.assign( options, this.options );

		return options;
	}

}
