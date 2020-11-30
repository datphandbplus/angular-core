import { Observer } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {

	private data: any = {};
	private dataChangeObserver: Observer<any>;

	/**
	* Set shared data
	* @param {string} name
	* @param {any} data
	* @return {void}
	*/
	public setData( name: string, data: any ) {
		this.data[ name ] = data;
		this.dataChangeObserver && this.dataChangeObserver.next( this.data );
	}

	/**
	* Get shared data
	* @param {string} name
	* @return {any}
	*/
	public getData( name: string ): any {
		return this.data[ name ];
	}

	/**
	* Remove shared data
	* @param {string} name
	* @return {void}
	*/
	public removeData( name: string ) {
		delete this.data[ name ];
	}

}
