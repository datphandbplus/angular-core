import {
	Directive, ElementRef, AfterViewInit,
	EventEmitter, Input, Output
} from '@angular/core';

@Directive({
	selector: '[detectScroll]',
})
export class DetectScrollDirective implements AfterViewInit {

	@Input() public delay: number = 0;
	@Input() public offset: number = 0;

	@Output() public onScroll: EventEmitter<any> = new EventEmitter<any>();
	@Output() public onReachStart: EventEmitter<any> = new EventEmitter<any>();
	@Output() public onReachEnd: EventEmitter<any> = new EventEmitter<any>();

	/**
	* @constructor
	* @param {ElementRef} elementRef
	*/
	constructor( private elementRef: ElementRef ) {}

	/**
	* @constructor
	*/
	public ngAfterViewInit() {
		const element: any = this.elementRef.nativeElement;

		// Init
		this.detectScroll( element );

		// Scrolling
		element.addEventListener( 'scroll', () => this.detectScroll( element ) );
	}

	/**
	* Detect scroll
	* @private
	* @param {any} element
	* @return {void}
	*/
	private detectScroll( element: any ) {
		element.scrollHeight !== element.clientHeight && setTimeout( () => {
			// Scrolling
			this.onScroll.emit( event );

			// In case scroll reach start
			element.scrollTop <= this.offset && this.onReachStart.emit( event );

			// In case scroll reach end
			element.scrollTop >= ( element.scrollHeight - element.clientHeight - this.offset )
				&& this.onReachEnd.emit( event );
		}, this.delay );
	}

}
