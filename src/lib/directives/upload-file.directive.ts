import {
	Directive, ElementRef,
	Output, EventEmitter
} from '@angular/core';
import * as _$ from 'jquery';

const $: any = _$;

@Directive({
	selector: '[uploadFile]',
})
export class UploadFileDirective {

	@Output() private onChange: EventEmitter<any> = new EventEmitter<any>();

	private progress: any = $( '<img class="file-upload-progress" src="assets/icons/ring-alt.svg">' );

	/**
	* @constructor
	* @param {ElementRef} elementRef
	*/
	constructor( private elementRef: ElementRef ) {
		const element: any = $( this.elementRef.nativeElement );
		const input: any = $( '<input type="file" accept="image/*" style="display: none">' );

		element.addClass( 'file-upload' );
		input.appendTo( element );

		this.progress.hide().appendTo( element );

		element
		.unbind( 'click.uploadFile' )
		.bind( 'click.uploadFile', () => {
			input[ 0 ].click();
		} );

		input
		.unbind( 'change.uploadFile' )
		.bind( 'change.uploadFile', ( event: any ) => {
			const file: File = event.target.files[ 0 ];

			if ( file ) {
				this.onChange.emit({
					file,
					target: this,
				});
			}
		} );
	}

}
