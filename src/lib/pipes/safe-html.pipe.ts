import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe( { name: 'safeHtml' } )
export class SafeHtmlPipe implements PipeTransform {

	/**
	* @constructor
	* @param {DomSanitizer} sanitized
	*/
	constructor( private sanitized: DomSanitizer ) {}

	/**
	* Transform
	* @param {string} value
	* @return {SafeHtml}
	*/
	public transform( value: string ): SafeHtml {
		return value ? this.sanitized.bypassSecurityTrustHtml( value ) : '';
	}

}
