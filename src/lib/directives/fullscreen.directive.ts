import {
	Directive, ElementRef,
	Input, AfterViewInit
} from '@angular/core';
import * as _$ from 'jquery';
import _ from 'underscore';

const $: any = _$;

@Directive({
	selector: '[fullscreen]',
})
export class FullscreenDirective implements AfterViewInit {

	@Input() private fullscreen: any;

	private isFullscreen: boolean;
	private element: any;
	private btnClose: any;
	private hiddenElements: any;
	private parentElements: Array<any> = [];

	/**
	* @constructor
	* @param {ElementRef} elementRef
	*/
	constructor( private elementRef: ElementRef ) {}

	/**
	* @constructor
	*/
	public ngAfterViewInit() {
		this.element = $( this.elementRef.nativeElement );
		this.btnClose = $(
			`<button class="mat-fab mat-button-base mat-warn">
				<i class="fa fa-compress-arrows-alt font-size-20 mt-10" />
			</button>`
		);

		this.btnClose.css({
			position	: 'fixed',
			right		: '25px',
			bottom		: '25px',
			'z-index'	: 999,
		});

		this.btnClose.click( () => this.toggle() );
		this.element.dblclick( () => this.toggle() );
	}

	/**
	* Toggle fullscreen
	* @return {void}
	*/
	public toggle() {
		this.isFullscreen = !this.isFullscreen;

		if ( !this.parentElements.length ) {
			this.element.parents().each( ( _index: number, parent: any ) => {
				parent = $( parent );
				const zIndex: number = +parent.css( 'z-index' );
				!isNaN( zIndex ) && this.parentElements.push( parent );
			} );
		}

		if ( !this.hiddenElements ) {
			this.hiddenElements = this.element.find( this.fullscreen );
		}

		this.isFullscreen ? this.turnOn() : this.turnOff();
	}

	/**
	* Turn on fullscreen
	* @return {void}
	*/
	public turnOn() {
		this.element.css({
			width				: '100%',
			height				: '100%',
			top					: 0,
			left				: 0,
			overflow			: 'auto',
			position			: 'fixed',
			padding				: 0,
			margin				: 0,
			border				: 0,
			'background-color'	: '#fff',
			'border-radius'		: 0,
			'z-index'			: 999,
		});
		_.each( this.parentElements, ( ele: any ) => ele.css( 'z-index', 'unset' ) );
		this.hiddenElements && this.hiddenElements.hide();
		this.btnClose.insertAfter( this.element );
	}

	/**
	* Turn off fullscreen
	* @return {void}
	*/
	public turnOff() {
		this.element.css({
			width				: '',
			height				: '',
			top					: '',
			left				: '',
			overflow			: '',
			position			: '',
			padding				: '',
			margin				: '',
			border				: '',
			'background-color'	: '',
			'border-radius'		: '',
			'z-index'			: '',
		});
		_.each( this.parentElements, ( ele: any ) => ele.css( 'z-index', '' ) );
		this.hiddenElements && this.hiddenElements.show();
		this.btnClose.detach();
	}

}
