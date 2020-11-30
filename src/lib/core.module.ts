import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CookieService, CookieModule } from 'ngx-cookie';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { MAT_MOMENT_DATE_FORMATS } from '@angular/material-moment-adapter';
import { LazyLoadImageModule, intersectionObserverPreset } from 'ng-lazyload-image';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import {
	NgModule, APP_INITIALIZER,
	Injector, ModuleWithProviders
} from '@angular/core';
import { TranslateModule, TranslateLoader, MissingTranslationHandler } from '@ngx-translate/core';
import {
	DateAdapter, MAT_DATE_FORMATS,
	MAT_DATE_LOCALE, MAT_DIALOG_DEFAULT_OPTIONS
} from '@angular/material';
import {
	DateAdapter as SaturnDateAdapter,
	MAT_DATE_FORMATS as SATURN_MAT_DATE_FORMATS,
	MAT_DATE_LOCALE as SATURN_MAT_DATE_LOCALE,
	SatDatepickerModule
} from 'saturn-datepicker';
import _ from 'underscore';

import { MaterialModule } from './material.module';
import { appInitializerFactory } from './loaders/app-initializer-factory';
import { CustomMissingTranslationHandler } from './loaders/custom-missing-translation-handler';
import { MultiTranslateHttpLoader } from './loaders/multi-translate-http-loader';

/* Component Inject (Do not remove) */
import { AutoCompleteComponent } from './components/auto-complete/auto-complete.component';
import { AvatarBoxComponent } from './components/avatar-box/avatar-box.component';
import { AvatarListComponent } from './components/avatar-list/avatar-list.component';
import { CollapsePaginatorComponent } from './components/collapse-paginator/collapse-paginator.component';
import { DialogConfirmComponent } from './components/dialog-confirm/dialog-confirm.component';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { LoadingOverlayComponent } from './components/loading-overlay/loading-overlay.component';
import { SelectBoxComponent } from './components/select-box/select-box.component';
/* End Component Inject (Do not remove) */

/* Directive Inject (Do not remove) */
import { AdjustFontsizeDirective } from './directives/adjust-fontsize.directive';
import { DisableControlDirective } from './directives/disable-control.directive';
import { EqualValidatorDirective } from './directives/equal-validator.directive';
import { FullscreenDirective } from './directives/fullscreen.directive';
import { MaxLessThanDirective } from './directives/max-less-than.directive';
import { MinGreaterThanDirective } from './directives/min-greater-than.directive';
import { NgInitDirective } from './directives/nginit.directive';
import { OdometerDirective } from './directives/odometer.directive';
import { PopoverDirective } from './directives/popover.directive';
import { UploadFileDirective } from './directives/upload-file.directive';
/* End Directive Inject (Do not remove) */

/* Pipe Inject (Do not remove) */
import { CapitalizeFirstPipe } from './pipes/capitalize-first.pipe';
import { CommasPipe } from './pipes/commas.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { ItemObjectPipe } from './pipes/item-object.pipe';
import { KFormatterPipe } from './pipes/k-formatter.pipe';
import { MaxPipe } from './pipes/max.pipe';
import { MinPipe } from './pipes/min.pipe';
import { MomentDateFormatPipe } from './pipes/moment-date-format.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { PadNumberPipe } from './pipes/pad-number.pipe';
import { PartitionPipe } from './pipes/partition.pipe';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
/* End Pipe Inject (Do not remove) */

/* Service Inject (Do not remove) */
import { ApiService } from './services/api.service';
import { FormService } from './services/form.service';
import { LocaleService } from './services/locale.service';
import { LoopService } from './services/loop.service';
import { MediaService } from './services/media.service';
import { MomentUtcDateAdapter } from './services/moment-utc-date-adapter.service';
import { NumberService } from './services/number.service';
import { PageService } from './services/page.service';
import { ServiceWorkerService } from './services/service-worker.service';
import { SharedService } from './services/shared.service';
import { StoreService } from './services/store.service';
import { UtilitiesService } from './services/utilities.service';
import { WebNotificationService } from './services/web-notification.service';
import { WebSocketService } from './services/web-socket.service';
/* End Service Inject (Do not remove) */

export function translateLoader( http: HttpClient ) {
	return new MultiTranslateHttpLoader(
		http,
		[
			{ prefix: 'assets/i18n/', suffix: '.json' },
		]
	);
}

_.mixin({
	get: ( obj: any, key: any ) => {
		const type: string = typeof key;

		if ( type === 'string' || type === 'number' ) {
			key = ( '' + key ).replace( /\[(.*?)\]/, ( _m: any, _key: any ) => {
				return '.' + _key.replace( /["']/g, '' );
			} ).split( '.' );
		}

		/* tslint:disable-next-line */
		for ( let i: number = 0, l: number = key.length; i < l; i++ ) {
			if ( typeof obj !== 'undefined' && _.has( obj, key[ i ] ) ) {
				obj = obj[ key[ i ] ];
			} else {
				return undefined;
			}
		}

		return obj;
	},
});

export const lazyLoadImageModuleForRoot: ModuleWithProviders<any> = LazyLoadImageModule
.forRoot( { preset: intersectionObserverPreset } );
export const reactiveFormsModuleWithConfig: ModuleWithProviders<any> = ReactiveFormsModule
.withConfig( { warnOnNgModelWithFormControl: 'never' } );
export const cookieModuleForRoot: ModuleWithProviders<any> = CookieModule.forRoot();
export const toastrModuleForRoot: ModuleWithProviders<any> = ToastrModule.forRoot();
export const translateModuleForRoot: ModuleWithProviders<any> = TranslateModule
.forRoot({
	missingTranslationHandler: {
		provide	: MissingTranslationHandler,
		useClass: CustomMissingTranslationHandler,
	},
	loader: {
		provide		: TranslateLoader,
		useFactory	: translateLoader,
		deps		: [ HttpClient ],
	},
});

@NgModule({
	imports: [
		BrowserModule, FormsModule, HttpClientModule,
		RouterModule, BrowserAnimationsModule, SatDatepickerModule,
		MaterialModule, PerfectScrollbarModule, lazyLoadImageModuleForRoot,
		cookieModuleForRoot, toastrModuleForRoot,
		translateModuleForRoot, reactiveFormsModuleWithConfig,
	],
	declarations: [
		/* Component Inject (Do not remove) */
		AutoCompleteComponent, AvatarBoxComponent, AvatarListComponent,
		CollapsePaginatorComponent, DialogConfirmComponent, ErrorMessageComponent,
		LoadingOverlayComponent, SelectBoxComponent,
		/* End Component Inject (Do not remove) */

		/* Directive Inject (Do not remove) */
		AdjustFontsizeDirective, DisableControlDirective, EqualValidatorDirective,
		FullscreenDirective, MaxLessThanDirective, MinGreaterThanDirective,
		NgInitDirective, OdometerDirective,
		PopoverDirective, UploadFileDirective,
		/* End Directive Inject (Do not remove) */

		/* Pipe Inject (Do not remove) */
		CapitalizeFirstPipe, CommasPipe, FilterPipe,
		ItemObjectPipe, KFormatterPipe, MaxPipe,
		MinPipe, MomentDateFormatPipe, OrderByPipe,
		PadNumberPipe, PartitionPipe, SafeHtmlPipe,
		/* End Pipe Inject (Do not remove) */
	],
	exports: [
		BrowserModule, FormsModule, ReactiveFormsModule,
		RouterModule, BrowserAnimationsModule, ToastrModule,
		CookieModule, TranslateModule, HttpClientModule,
		LazyLoadImageModule, PerfectScrollbarModule,
		SatDatepickerModule, MaterialModule,

		/* Component Inject (Do not remove) */
		AutoCompleteComponent, AvatarBoxComponent, AvatarListComponent,
		CollapsePaginatorComponent, DialogConfirmComponent, ErrorMessageComponent,
		LoadingOverlayComponent, SelectBoxComponent,
		/* End Component Inject (Do not remove) */

		/* Directive Inject (Do not remove) */
		AdjustFontsizeDirective, DisableControlDirective, EqualValidatorDirective,
		FullscreenDirective, MaxLessThanDirective, MinGreaterThanDirective,
		NgInitDirective, OdometerDirective,
		PopoverDirective, UploadFileDirective,
		/* End Directive Inject (Do not remove) */

		/* Pipe Inject (Do not remove) */
		CapitalizeFirstPipe, CommasPipe, FilterPipe,
		ItemObjectPipe, KFormatterPipe, MaxPipe,
		MinPipe, MomentDateFormatPipe, OrderByPipe,
		PadNumberPipe, PartitionPipe, SafeHtmlPipe,
		/* End Pipe Inject (Do not remove) */
	],
	entryComponents: [
		/* Entry Component Inject (Do not remove) */
		DialogConfirmComponent,
		/* End Entry Component Inject (Do not remove) */
	],
	providers: [
		{
			provide		: APP_INITIALIZER,
			useFactory	: appInitializerFactory,
			deps		: [ LocaleService, Injector ],
			multi		: true,
		},
		{
			provide	: MAT_DIALOG_DEFAULT_OPTIONS,
			useValue: { panelClass: 'mat-dialog', disableClose: true },
		},
		{ provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
		{ provide: SATURN_MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
		{ provide: DateAdapter, useClass: MomentUtcDateAdapter },
		{ provide: SaturnDateAdapter, useClass: MomentUtcDateAdapter },

		CookieService,

		/* Service Inject (Do not remove) */
		ApiService, FormService, LocaleService,
		LoopService, MediaService, MomentUtcDateAdapter,
		NumberService, PageService, ServiceWorkerService,
		SharedService, StoreService, UtilitiesService,
		WebNotificationService, WebSocketService,
		/* End Service Inject (Do not remove) */
	],
})
export class CoreModule {

	/**
	* @constructor
	* @param {any} config
	*/
	public static forRoot( config: any ): ModuleWithProviders {
		return {
			ngModule: CoreModule,
			providers: [
				{ provide: MAT_DATE_LOCALE, useValue: config.locale },
				{ provide: SATURN_MAT_DATE_LOCALE, useValue: config.locale },
			],
		};
	}

	/**
	* @constructor
	*/
	constructor() {}

}
