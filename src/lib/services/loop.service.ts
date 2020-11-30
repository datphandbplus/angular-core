import { Injectable } from '@angular/core';
import _ from 'underscore';

@Injectable()
export class LoopService {

	private intervals: Array<any> = [];

	/**
	* Set loop
	* @param {Function} fn
	* @param {number} time - Time to loop
	* @return {number} index - Loop index
	*/
	public set( fn: Function, time: number ): number {
		const index: number = this.intervals.length ? this.intervals.length + 1 : 0;

		this.intervals[ index ] = setInterval( fn, time );

		return index;
	}

	/**
	* Cancel loop
	* @param {number} index - Loop index
	* @return {void}
	*/
	public cancel( index: number ) {
		clearInterval( this.intervals[ index ] );
	}

	/**
	* Destroy all loop
	* @return {void}
	*/
	public destroy() {
		_.each( this.intervals, ( _o: any, i: any ) => {
			clearInterval( this.intervals[ i ] );
		} );

		this.intervals = [];
	}

}
