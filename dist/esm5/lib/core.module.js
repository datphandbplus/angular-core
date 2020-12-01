import * as tslib_1 from "tslib";
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
import { Ng5SliderModule } from 'ng5-slider';
import { NgModule, APP_INITIALIZER, Injector } from '@angular/core';
import { TranslateModule, TranslateLoader, MissingTranslationHandler, TranslateService } from '@ngx-translate/core';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material';
import { DateAdapter as SaturnDateAdapter, MAT_DATE_FORMATS as SATURN_MAT_DATE_FORMATS, MAT_DATE_LOCALE as SATURN_MAT_DATE_LOCALE, SatDatepickerModule } from 'saturn-datepicker';
import _ from 'underscore';
import { MaterialModule } from './material.module';
import { appInitializerFactory } from './loaders/app-initializer-factory';
import { CustomMissingTranslationHandler } from './loaders/custom-missing-translation-handler';
import { MultiTranslateHttpLoader } from './loaders/multi-translate-http-loader';
/* Component Inject (Do not remove) */
import { ActionBoxComponent, ActionButtonComponent } from './components/action-box/action-box.component';
import { AutoCompleteComponent } from './components/auto-complete/auto-complete.component';
import { AvatarBoxComponent } from './components/avatar-box/avatar-box.component';
import { AvatarListComponent } from './components/avatar-list/avatar-list.component';
import { CollapsePaginatorComponent } from './components/collapse-paginator/collapse-paginator.component';
import { DialogConfirmComponent } from './components/dialog-confirm/dialog-confirm.component';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { FilterBoxComponent } from './components/filter-box/filter-box.component';
import { LoadingOverlayComponent } from './components/loading-overlay/loading-overlay.component';
import { SelectBoxComponent } from './components/select-box/select-box.component';
import { SideBarComponent, SideBarItemComponent } from './components/sidebar/sidebar.component';
import { StatusBoxComponent } from './components/status-box/status-box.component';
/* End Component Inject (Do not remove) */
/* Directive Inject (Do not remove) */
import { AdjustFontsizeDirective } from './directives/adjust-fontsize.directive';
import { DetectScrollDirective } from './directives/detect-scroll.directive';
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
import { FileSizeFormatterPipe } from './pipes/file-size-formatter.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { ImagePipe } from './pipes/image.pipe';
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
import { SnackBarService } from './services/snack-bar.service';
import { StoreService } from './services/store.service';
import { UtilitiesService } from './services/utilities.service';
import { WebNotificationService } from './services/web-notification.service';
import { WebSocketService } from './services/web-socket.service';
/* End Service Inject (Do not remove) */
_.mixin({
    get: function (obj, key) {
        var type = typeof key;
        if (type === 'string' || type === 'number') {
            key = ('' + key).replace(/\[(.*?)\]/, function (_m, _key) {
                return '.' + _key.replace(/["']/g, '');
            }).split('.');
        }
        /* tslint:disable-next-line */
        for (var i = 0, l = key.length; i < l; i++) {
            if (typeof obj !== 'undefined' && _.has(obj, key[i])) {
                obj = obj[key[i]];
            }
            else {
                return undefined;
            }
        }
        return obj;
    },
});
export function translateLoader(http) {
    return new MultiTranslateHttpLoader(http, [
        { prefix: 'assets/i18n/', suffix: '.json' },
    ]);
}
export var TOOLTIP_PANEL_CLASS = 'plugin-tooltip';
export var lazyLoadImageModuleForRoot = LazyLoadImageModule
    .forRoot({ preset: intersectionObserverPreset });
export var reactiveFormsModuleWithConfig = ReactiveFormsModule
    .withConfig({ warnOnNgModelWithFormControl: 'never' });
export var cookieModuleForRoot = CookieModule.forRoot();
export var toastrModuleForRoot = ToastrModule.forRoot();
export var translateModuleForRoot = TranslateModule
    .forRoot({
    missingTranslationHandler: {
        provide: MissingTranslationHandler,
        useClass: CustomMissingTranslationHandler,
    },
    loader: {
        provide: TranslateLoader,
        useFactory: translateLoader,
        deps: [HttpClient],
    },
});
var ɵ0 = appInitializerFactory, ɵ1 = { disableClose: true, hasBackdrop: true }, ɵ2 = MAT_MOMENT_DATE_FORMATS, ɵ3 = MAT_MOMENT_DATE_FORMATS;
var CoreModule = /** @class */ (function () {
    /**
    * @constructor
    */
    function CoreModule() {
    }
    CoreModule_1 = CoreModule;
    /**
    * @constructor
    * @param {any} config
    */
    CoreModule.forRoot = function (config) {
        return {
            ngModule: CoreModule_1,
            providers: [
                { provide: MAT_DATE_LOCALE, useValue: config.locale },
                { provide: SATURN_MAT_DATE_LOCALE, useValue: config.locale },
            ],
        };
    };
    var CoreModule_1;
    CoreModule = CoreModule_1 = tslib_1.__decorate([
        NgModule({
            imports: [
                BrowserModule, FormsModule, HttpClientModule,
                RouterModule, BrowserAnimationsModule, SatDatepickerModule,
                MaterialModule, PerfectScrollbarModule, lazyLoadImageModuleForRoot,
                cookieModuleForRoot, toastrModuleForRoot, Ng5SliderModule,
                translateModuleForRoot, reactiveFormsModuleWithConfig,
            ],
            declarations: [
                /* Component Inject (Do not remove) */
                ActionBoxComponent, ActionButtonComponent, AutoCompleteComponent,
                AvatarBoxComponent, AvatarListComponent, CollapsePaginatorComponent,
                DialogConfirmComponent, ErrorMessageComponent, FilterBoxComponent,
                LoadingOverlayComponent, SelectBoxComponent, SideBarComponent,
                SideBarItemComponent, StatusBoxComponent,
                /* End Component Inject (Do not remove) */
                /* Directive Inject (Do not remove) */
                AdjustFontsizeDirective, DetectScrollDirective, DisableControlDirective,
                EqualValidatorDirective, FullscreenDirective, MaxLessThanDirective,
                MinGreaterThanDirective, NgInitDirective, OdometerDirective,
                PopoverDirective, UploadFileDirective,
                /* End Directive Inject (Do not remove) */
                /* Pipe Inject (Do not remove) */
                CapitalizeFirstPipe, CommasPipe, FileSizeFormatterPipe,
                FilterPipe, ImagePipe, ItemObjectPipe,
                KFormatterPipe, MaxPipe, MinPipe,
                MomentDateFormatPipe, OrderByPipe, PadNumberPipe,
                PartitionPipe, SafeHtmlPipe,
            ],
            exports: [
                BrowserModule, FormsModule, ReactiveFormsModule,
                RouterModule, BrowserAnimationsModule, ToastrModule,
                CookieModule, TranslateModule, HttpClientModule,
                LazyLoadImageModule, PerfectScrollbarModule,
                SatDatepickerModule, MaterialModule,
                /* Component Inject (Do not remove) */
                ActionBoxComponent, ActionButtonComponent, AutoCompleteComponent,
                AvatarBoxComponent, AvatarListComponent, CollapsePaginatorComponent,
                DialogConfirmComponent, ErrorMessageComponent, FilterBoxComponent,
                LoadingOverlayComponent, SelectBoxComponent, SideBarComponent,
                SideBarItemComponent, StatusBoxComponent,
                /* End Component Inject (Do not remove) */
                /* Directive Inject (Do not remove) */
                AdjustFontsizeDirective, DetectScrollDirective, DisableControlDirective,
                EqualValidatorDirective, FullscreenDirective, MaxLessThanDirective,
                MinGreaterThanDirective, NgInitDirective, OdometerDirective,
                PopoverDirective, UploadFileDirective,
                /* End Directive Inject (Do not remove) */
                /* Pipe Inject (Do not remove) */
                CapitalizeFirstPipe, CommasPipe, FileSizeFormatterPipe,
                FilterPipe, ImagePipe, ItemObjectPipe,
                KFormatterPipe, MaxPipe, MinPipe,
                MomentDateFormatPipe, OrderByPipe, PadNumberPipe,
                PartitionPipe, SafeHtmlPipe,
            ],
            entryComponents: [
                /* Entry Component Inject (Do not remove) */
                DialogConfirmComponent,
            ],
            providers: [
                {
                    provide: APP_INITIALIZER,
                    useFactory: ɵ0,
                    deps: [TranslateService, LocaleService, Injector],
                    multi: true,
                },
                {
                    provide: MAT_DIALOG_DEFAULT_OPTIONS,
                    useValue: ɵ1,
                },
                { provide: MAT_DATE_FORMATS, useValue: ɵ2 },
                { provide: SATURN_MAT_DATE_FORMATS, useValue: ɵ3 },
                { provide: DateAdapter, useClass: MomentUtcDateAdapter },
                { provide: SaturnDateAdapter, useClass: MomentUtcDateAdapter },
                CookieService,
                /* Service Inject (Do not remove) */
                ApiService, FormService, LocaleService,
                LoopService, MediaService, MomentUtcDateAdapter,
                NumberService, PageService, ServiceWorkerService,
                SharedService, SnackBarService, StoreService,
                UtilitiesService, WebNotificationService, WebSocketService,
            ],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], CoreModule);
    return CoreModule;
}());
export { CoreModule };
export { ɵ0, ɵ1, ɵ2, ɵ3 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNvcmUvIiwic291cmNlcyI6WyJsaWIvY29yZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQzFDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSwwQkFBMEIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDN0MsT0FBTyxFQUNOLFFBQVEsRUFBRSxlQUFlLEVBQ3pCLFFBQVEsRUFDUixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQ04sZUFBZSxFQUFFLGVBQWUsRUFDaEMseUJBQXlCLEVBQUUsZ0JBQWdCLEVBQzNDLE1BQU0scUJBQXFCLENBQUM7QUFDN0IsT0FBTyxFQUNOLFdBQVcsRUFBRSxnQkFBZ0IsRUFDN0IsZUFBZSxFQUFFLDBCQUEwQixFQUMzQyxNQUFNLG1CQUFtQixDQUFDO0FBQzNCLE9BQU8sRUFDTixXQUFXLElBQUksaUJBQWlC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USxJQUF5QixFQUFFO2dCQUNoRSxFQUFFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxRQUFRLElBQXlCLEVBQUU7Z0JBQ3ZFLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsb0JBQW9CLEVBQUU7Z0JBQ3hELEVBQUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxvQkFBb0IsRUFBRTtnQkFFOUQsYUFBYTtnQkFFYixvQ0FBb0M7Z0JBQ3BDLFVBQVUsRUFBRSxXQUFXLEVBQUUsYUFBYTtnQkFDdEMsV0FBVyxFQUFFLFlBQVksRUFBRSxvQkFBb0I7Z0JBQy9DLGFBQWEsRUFBRSxXQUFXLEVBQUUsb0JBQW9CO2dCQUNoRCxhQUFhLEVBQUUsZUFBZSxFQUFFLFlBQVk7Z0JBQzVDLGdCQUFnQixFQUFFLHNCQUFzQixFQUFFLGdCQUFnQjthQUUxRDtTQUNELENBQUM7O09BQ1csVUFBVSxDQXFCdEI7SUFBRCxpQkFBQztDQUFBLEFBckJELElBcUJDO1NBckJZLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDb29raWVTZXJ2aWNlLCBDb29raWVNb2R1bGUgfSBmcm9tICduZ3gtY29va2llJztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUsIEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBUb2FzdHJNb2R1bGUgfSBmcm9tICduZ3gtdG9hc3RyJztcbmltcG9ydCB7IE1BVF9NT01FTlRfREFURV9GT1JNQVRTIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwtbW9tZW50LWFkYXB0ZXInO1xuaW1wb3J0IHsgTGF6eUxvYWRJbWFnZU1vZHVsZSwgaW50ZXJzZWN0aW9uT2JzZXJ2ZXJQcmVzZXQgfSBmcm9tICduZy1sYXp5bG9hZC1pbWFnZSc7XG5pbXBvcnQgeyBQZXJmZWN0U2Nyb2xsYmFyTW9kdWxlIH0gZnJvbSAnbmd4LXBlcmZlY3Qtc2Nyb2xsYmFyJztcbmltcG9ydCB7IE5nNVNsaWRlck1vZHVsZSB9IGZyb20gJ25nNS1zbGlkZXInO1xuaW1wb3J0IHtcblx0TmdNb2R1bGUsIEFQUF9JTklUSUFMSVpFUixcblx0SW5qZWN0b3IsIE1vZHVsZVdpdGhQcm92aWRlcnNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuXHRUcmFuc2xhdGVNb2R1bGUsIFRyYW5zbGF0ZUxvYWRlcixcblx0TWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlciwgVHJhbnNsYXRlU2VydmljZVxufSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcbmltcG9ydCB7XG5cdERhdGVBZGFwdGVyLCBNQVRfREFURV9GT1JNQVRTLFxuXHRNQVRfREFURV9MT0NBTEUsIE1BVF9ESUFMT0dfREVGQVVMVF9PUFRJT05TXG59IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7XG5cdERhdGVBZGFwdGVyIGFzIFNhdHVybkRhdGVBZGFwdGVyLFxuXHRNQVRfREFURV9GT1JNQVRTIGFzIFNBVFVSTl9NQVRfREFURV9GT1JNQVRTLFxuXHRNQVRfREFURV9MT0NBTEUgYXMgU0FUVVJOX01BVF9EQVRFX0xPQ0FMRSxcblx0U2F0RGF0ZXBpY2tlck1vZHVsZVxufSBmcm9tICdzYXR1cm4tZGF0ZXBpY2tlcic7XG5pbXBvcnQgXyBmcm9tICd1bmRlcnNjb3JlJztcblxuaW1wb3J0IHsgTWF0ZXJpYWxNb2R1bGUgfSBmcm9tICcuL21hdGVyaWFsLm1vZHVsZSc7XG5pbXBvcnQgeyBhcHBJbml0aWFsaXplckZhY3RvcnkgfSBmcm9tICcuL2xvYWRlcnMvYXBwLWluaXRpYWxpemVyLWZhY3RvcnknO1xuaW1wb3J0IHsgQ3VzdG9tTWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlciB9IGZyb20gJy4vbG9hZGVycy9jdXN0b20tbWlzc2luZy10cmFuc2xhdGlvbi1oYW5kbGVyJztcbmltcG9ydCB7IE11bHRpVHJhbnNsYXRlSHR0cExvYWRlciB9IGZyb20gJy4vbG9hZGVycy9tdWx0aS10cmFuc2xhdGUtaHR0cC1sb2FkZXInO1xuXG4vKiBDb21wb25lbnQgSW5qZWN0IChEbyBub3QgcmVtb3ZlKSAqL1xuaW1wb3J0IHsgQWN0aW9uQm94Q29tcG9uZW50LCBBY3Rpb25CdXR0b25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYWN0aW9uLWJveC9hY3Rpb24tYm94LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBdXRvQ29tcGxldGVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYXV0by1jb21wbGV0ZS9hdXRvLWNvbXBsZXRlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBdmF0YXJCb3hDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYXZhdGFyLWJveC9hdmF0YXItYm94LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBdmF0YXJMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2F2YXRhci1saXN0L2F2YXRhci1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb2xsYXBzZVBhZ2luYXRvckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jb2xsYXBzZS1wYWdpbmF0b3IvY29sbGFwc2UtcGFnaW5hdG9yLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEaWFsb2dDb25maXJtQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2RpYWxvZy1jb25maXJtL2RpYWxvZy1jb25maXJtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFcnJvck1lc3NhZ2VDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZXJyb3ItbWVzc2FnZS9lcnJvci1tZXNzYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGaWx0ZXJCb3hDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZmlsdGVyLWJveC9maWx0ZXItYm94LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMb2FkaW5nT3ZlcmxheUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9sb2FkaW5nLW92ZXJsYXkvbG9hZGluZy1vdmVybGF5LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZWxlY3RCb3hDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc2VsZWN0LWJveC9zZWxlY3QtYm94LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTaWRlQmFyQ29tcG9uZW50LCBTaWRlQmFySXRlbUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50JztcbmltcG9ydCB7IFN0YXR1c0JveENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9zdGF0dXMtYm94L3N0YXR1cy1ib3guY29tcG9uZW50Jztcbi8qIEVuZCBDb21wb25lbnQgSW5qZWN0IChEbyBub3QgcmVtb3ZlKSAqL1xuXG4vKiBEaXJlY3RpdmUgSW5qZWN0IChEbyBub3QgcmVtb3ZlKSAqL1xuaW1wb3J0IHsgQWRqdXN0Rm9udHNpemVEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvYWRqdXN0LWZvbnRzaXplLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBEZXRlY3RTY3JvbGxEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvZGV0ZWN0LXNjcm9sbC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRGlzYWJsZUNvbnRyb2xEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvZGlzYWJsZS1jb250cm9sLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBFcXVhbFZhbGlkYXRvckRpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9lcXVhbC12YWxpZGF0b3IuZGlyZWN0aXZlJztcbmltcG9ydCB7IEZ1bGxzY3JlZW5EaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvZnVsbHNjcmVlbi5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTWF4TGVzc1RoYW5EaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvbWF4LWxlc3MtdGhhbi5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTWluR3JlYXRlclRoYW5EaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvbWluLWdyZWF0ZXItdGhhbi5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTmdJbml0RGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL25naW5pdC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgT2RvbWV0ZXJEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvb2RvbWV0ZXIuZGlyZWN0aXZlJztcbmltcG9ydCB7IFBvcG92ZXJEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvcG9wb3Zlci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgVXBsb2FkRmlsZURpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy91cGxvYWQtZmlsZS5kaXJlY3RpdmUnO1xuLyogRW5kIERpcmVjdGl2ZSBJbmplY3QgKERvIG5vdCByZW1vdmUpICovXG5cbi8qIFBpcGUgSW5qZWN0IChEbyBub3QgcmVtb3ZlKSAqL1xuaW1wb3J0IHsgQ2FwaXRhbGl6ZUZpcnN0UGlwZSB9IGZyb20gJy4vcGlwZXMvY2FwaXRhbGl6ZS1maXJzdC5waXBlJztcbmltcG9ydCB7IENvbW1hc1BpcGUgfSBmcm9tICcuL3BpcGVzL2NvbW1hcy5waXBlJztcbmltcG9ydCB7IEZpbGVTaXplRm9ybWF0dGVyUGlwZSB9IGZyb20gJy4vcGlwZXMvZmlsZS1zaXplLWZvcm1hdHRlci5waXBlJztcbmltcG9ydCB7IEZpbHRlclBpcGUgfSBmcm9tICcuL3BpcGVzL2ZpbHRlci5waXBlJztcbmltcG9ydCB7IEltYWdlUGlwZSB9IGZyb20gJy4vcGlwZXMvaW1hZ2UucGlwZSc7XG5pbXBvcnQgeyBJdGVtT2JqZWN0UGlwZSB9IGZyb20gJy4vcGlwZXMvaXRlbS1vYmplY3QucGlwZSc7XG5pbXBvcnQgeyBLRm9ybWF0dGVyUGlwZSB9IGZyb20gJy4vcGlwZXMvay1mb3JtYXR0ZXIucGlwZSc7XG5pbXBvcnQgeyBNYXhQaXBlIH0gZnJvbSAnLi9waXBlcy9tYXgucGlwZSc7XG5pbXBvcnQgeyBNaW5QaXBlIH0gZnJvbSAnLi9waXBlcy9taW4ucGlwZSc7XG5pbXBvcnQgeyBNb21lbnREYXRlRm9ybWF0UGlwZSB9IGZyb20gJy4vcGlwZXMvbW9tZW50LWRhdGUtZm9ybWF0LnBpcGUnO1xuaW1wb3J0IHsgT3JkZXJCeVBpcGUgfSBmcm9tICcuL3BpcGVzL29yZGVyLWJ5LnBpcGUnO1xuaW1wb3J0IHsgUGFkTnVtYmVyUGlwZSB9IGZyb20gJy4vcGlwZXMvcGFkLW51bWJlci5waXBlJztcbmltcG9ydCB7IFBhcnRpdGlvblBpcGUgfSBmcm9tICcuL3BpcGVzL3BhcnRpdGlvbi5waXBlJztcbmltcG9ydCB7IFNhZmVIdG1sUGlwZSB9IGZyb20gJy4vcGlwZXMvc2FmZS1odG1sLnBpcGUnO1xuLyogRW5kIFBpcGUgSW5qZWN0IChEbyBub3QgcmVtb3ZlKSAqL1xuXG4vKiBTZXJ2aWNlIEluamVjdCAoRG8gbm90IHJlbW92ZSkgKi9cbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7IEZvcm1TZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9mb3JtLnNlcnZpY2UnO1xuaW1wb3J0IHsgTG9jYWxlU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvbG9jYWxlLnNlcnZpY2UnO1xuaW1wb3J0IHsgTG9vcFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2xvb3Auc2VydmljZSc7XG5pbXBvcnQgeyBNZWRpYVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL21lZGlhLnNlcnZpY2UnO1xuaW1wb3J0IHsgTW9tZW50VXRjRGF0ZUFkYXB0ZXIgfSBmcm9tICcuL3NlcnZpY2VzL21vbWVudC11dGMtZGF0ZS1hZGFwdGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgTnVtYmVyU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvbnVtYmVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGFnZVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3BhZ2Uuc2VydmljZSc7XG5pbXBvcnQgeyBTZXJ2aWNlV29ya2VyU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvc2VydmljZS13b3JrZXIuc2VydmljZSc7XG5pbXBvcnQgeyBTaGFyZWRTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9zaGFyZWQuc2VydmljZSc7XG5pbXBvcnQgeyBTbmFja0JhclNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3NuYWNrLWJhci5zZXJ2aWNlJztcbmltcG9ydCB7IFN0b3JlU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvc3RvcmUuc2VydmljZSc7XG5pbXBvcnQgeyBVdGlsaXRpZXNTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy91dGlsaXRpZXMuc2VydmljZSc7XG5pbXBvcnQgeyBXZWJOb3RpZmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy93ZWItbm90aWZpY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgV2ViU29ja2V0U2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvd2ViLXNvY2tldC5zZXJ2aWNlJztcbi8qIEVuZCBTZXJ2aWNlIEluamVjdCAoRG8gbm90IHJlbW92ZSkgKi9cblxuXy5taXhpbih7XG5cdGdldDogKCBvYmo6IGFueSwga2V5OiBhbnkgKSA9PiB7XG5cdFx0Y29uc3QgdHlwZTogc3RyaW5nID0gdHlwZW9mIGtleTtcblxuXHRcdGlmICggdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZSA9PT0gJ251bWJlcicgKSB7XG5cdFx0XHRrZXkgPSAoICcnICsga2V5ICkucmVwbGFjZSggL1xcWyguKj8pXFxdLywgKCBfbTogYW55LCBfa2V5OiBhbnkgKSA9PiB7XG5cdFx0XHRcdHJldHVybiAnLicgKyBfa2V5LnJlcGxhY2UoIC9bXCInXS9nLCAnJyApO1xuXHRcdFx0fSApLnNwbGl0KCAnLicgKTtcblx0XHR9XG5cblx0XHQvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cblx0XHRmb3IgKCBsZXQgaTogbnVtYmVyID0gMCwgbDogbnVtYmVyID0ga2V5Lmxlbmd0aDsgaSA8IGw7IGkrKyApIHtcblx0XHRcdGlmICggdHlwZW9mIG9iaiAhPT0gJ3VuZGVmaW5lZCcgJiYgXy5oYXMoIG9iaiwga2V5WyBpIF0gKSApIHtcblx0XHRcdFx0b2JqID0gb2JqWyBrZXlbIGkgXSBdO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIHVuZGVmaW5lZDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gb2JqO1xuXHR9LFxufSk7XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2xhdGVMb2FkZXIoIGh0dHA6IEh0dHBDbGllbnQgKSB7XG5cdHJldHVybiBuZXcgTXVsdGlUcmFuc2xhdGVIdHRwTG9hZGVyKFxuXHRcdGh0dHAsXG5cdFx0W1xuXHRcdFx0eyBwcmVmaXg6ICdhc3NldHMvaTE4bi8nLCBzdWZmaXg6ICcuanNvbicgfSxcblx0XHRdXG5cdCk7XG59XG5cbmV4cG9ydCBjb25zdCBUT09MVElQX1BBTkVMX0NMQVNTOiBzdHJpbmcgPSAncGx1Z2luLXRvb2x0aXAnO1xuZXhwb3J0IGNvbnN0IGxhenlMb2FkSW1hZ2VNb2R1bGVGb3JSb290OiBNb2R1bGVXaXRoUHJvdmlkZXJzPGFueT4gPSBMYXp5TG9hZEltYWdlTW9kdWxlXG4uZm9yUm9vdCggeyBwcmVzZXQ6IGludGVyc2VjdGlvbk9ic2VydmVyUHJlc2V0IH0gKTtcbmV4cG9ydCBjb25zdCByZWFjdGl2ZUZvcm1zTW9kdWxlV2l0aENvbmZpZzogTW9kdWxlV2l0aFByb3ZpZGVyczxhbnk+ID0gUmVhY3RpdmVGb3Jtc01vZHVsZVxuLndpdGhDb25maWcoIHsgd2Fybk9uTmdNb2RlbFdpdGhGb3JtQ29udHJvbDogJ25ldmVyJyB9ICk7XG5leHBvcnQgY29uc3QgY29va2llTW9kdWxlRm9yUm9vdDogTW9kdWxlV2l0aFByb3ZpZGVyczxhbnk+ID0gQ29va2llTW9kdWxlLmZvclJvb3QoKTtcbmV4cG9ydCBjb25zdCB0b2FzdHJNb2R1bGVGb3JSb290OiBNb2R1bGVXaXRoUHJvdmlkZXJzPGFueT4gPSBUb2FzdHJNb2R1bGUuZm9yUm9vdCgpO1xuZXhwb3J0IGNvbnN0IHRyYW5zbGF0ZU1vZHVsZUZvclJvb3Q6IE1vZHVsZVdpdGhQcm92aWRlcnM8YW55PiA9IFRyYW5zbGF0ZU1vZHVsZVxuLmZvclJvb3Qoe1xuXHRtaXNzaW5nVHJhbnNsYXRpb25IYW5kbGVyOiB7XG5cdFx0cHJvdmlkZVx0OiBNaXNzaW5nVHJhbnNsYXRpb25IYW5kbGVyLFxuXHRcdHVzZUNsYXNzOiBDdXN0b21NaXNzaW5nVHJhbnNsYXRpb25IYW5kbGVyLFxuXHR9LFxuXHRsb2FkZXI6IHtcblx0XHRwcm92aWRlXHRcdDogVHJhbnNsYXRlTG9hZGVyLFxuXHRcdHVzZUZhY3RvcnlcdDogdHJhbnNsYXRlTG9hZGVyLFxuXHRcdGRlcHNcdFx0OiBbIEh0dHBDbGllbnQgXSxcblx0fSxcbn0pO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0QnJvd3Nlck1vZHVsZSwgRm9ybXNNb2R1bGUsIEh0dHBDbGllbnRNb2R1bGUsXG5cdFx0Um91dGVyTW9kdWxlLCBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSwgU2F0RGF0ZXBpY2tlck1vZHVsZSxcblx0XHRNYXRlcmlhbE1vZHVsZSwgUGVyZmVjdFNjcm9sbGJhck1vZHVsZSwgbGF6eUxvYWRJbWFnZU1vZHVsZUZvclJvb3QsXG5cdFx0Y29va2llTW9kdWxlRm9yUm9vdCwgdG9hc3RyTW9kdWxlRm9yUm9vdCwgTmc1U2xpZGVyTW9kdWxlLFxuXHRcdHRyYW5zbGF0ZU1vZHVsZUZvclJvb3QsIHJlYWN0aXZlRm9ybXNNb2R1bGVXaXRoQ29uZmlnLFxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHQvKiBDb21wb25lbnQgSW5qZWN0IChEbyBub3QgcmVtb3ZlKSAqL1xuXHRcdEFjdGlvbkJveENvbXBvbmVudCwgQWN0aW9uQnV0dG9uQ29tcG9uZW50LCBBdXRvQ29tcGxldGVDb21wb25lbnQsXG5cdFx0QXZhdGFyQm94Q29tcG9uZW50LCBBdmF0YXJMaXN0Q29tcG9uZW50LCBDb2xsYXBzZVBhZ2luYXRvckNvbXBvbmVudCxcblx0XHREaWFsb2dDb25maXJtQ29tcG9uZW50LCBFcnJvck1lc3NhZ2VDb21wb25lbnQsIEZpbHRlckJveENvbXBvbmVudCxcblx0XHRMb2FkaW5nT3ZlcmxheUNvbXBvbmVudCwgU2VsZWN0Qm94Q29tcG9uZW50LCBTaWRlQmFyQ29tcG9uZW50LFxuXHRcdFNpZGVCYXJJdGVtQ29tcG9uZW50LCBTdGF0dXNCb3hDb21wb25lbnQsXG5cdFx0LyogRW5kIENvbXBvbmVudCBJbmplY3QgKERvIG5vdCByZW1vdmUpICovXG5cblx0XHQvKiBEaXJlY3RpdmUgSW5qZWN0IChEbyBub3QgcmVtb3ZlKSAqL1xuXHRcdEFkanVzdEZvbnRzaXplRGlyZWN0aXZlLCBEZXRlY3RTY3JvbGxEaXJlY3RpdmUsIERpc2FibGVDb250cm9sRGlyZWN0aXZlLFxuXHRcdEVxdWFsVmFsaWRhdG9yRGlyZWN0aXZlLCBGdWxsc2NyZWVuRGlyZWN0aXZlLCBNYXhMZXNzVGhhbkRpcmVjdGl2ZSxcblx0XHRNaW5HcmVhdGVyVGhhbkRpcmVjdGl2ZSwgTmdJbml0RGlyZWN0aXZlLCBPZG9tZXRlckRpcmVjdGl2ZSxcblx0XHRQb3BvdmVyRGlyZWN0aXZlLCBVcGxvYWRGaWxlRGlyZWN0aXZlLFxuXHRcdC8qIEVuZCBEaXJlY3RpdmUgSW5qZWN0IChEbyBub3QgcmVtb3ZlKSAqL1xuXG5cdFx0LyogUGlwZSBJbmplY3QgKERvIG5vdCByZW1vdmUpICovXG5cdFx0Q2FwaXRhbGl6ZUZpcnN0UGlwZSwgQ29tbWFzUGlwZSwgRmlsZVNpemVGb3JtYXR0ZXJQaXBlLFxuXHRcdEZpbHRlclBpcGUsIEltYWdlUGlwZSwgSXRlbU9iamVjdFBpcGUsXG5cdFx0S0Zvcm1hdHRlclBpcGUsIE1heFBpcGUsIE1pblBpcGUsXG5cdFx0TW9tZW50RGF0ZUZvcm1hdFBpcGUsIE9yZGVyQnlQaXBlLCBQYWROdW1iZXJQaXBlLFxuXHRcdFBhcnRpdGlvblBpcGUsIFNhZmVIdG1sUGlwZSxcblx0XHQvKiBFbmQgUGlwZSBJbmplY3QgKERvIG5vdCByZW1vdmUpICovXG5cdF0sXG5cdGV4cG9ydHM6IFtcblx0XHRCcm93c2VyTW9kdWxlLCBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSxcblx0XHRSb3V0ZXJNb2R1bGUsIEJyb3dzZXJBbmltYXRpb25zTW9kdWxlLCBUb2FzdHJNb2R1bGUsXG5cdFx0Q29va2llTW9kdWxlLCBUcmFuc2xhdGVNb2R1bGUsIEh0dHBDbGllbnRNb2R1bGUsXG5cdFx0TGF6eUxvYWRJbWFnZU1vZHVsZSwgUGVyZmVjdFNjcm9sbGJhck1vZHVsZSxcblx0XHRTYXREYXRlcGlja2VyTW9kdWxlLCBNYXRlcmlhbE1vZHVsZSxcblxuXHRcdC8qIENvbXBvbmVudCBJbmplY3QgKERvIG5vdCByZW1vdmUpICovXG5cdFx0QWN0aW9uQm94Q29tcG9uZW50LCBBY3Rpb25CdXR0b25Db21wb25lbnQsIEF1dG9Db21wbGV0ZUNvbXBvbmVudCxcblx0XHRBdmF0YXJCb3hDb21wb25lbnQsIEF2YXRhckxpc3RDb21wb25lbnQsIENvbGxhcHNlUGFnaW5hdG9yQ29tcG9uZW50LFxuXHRcdERpYWxvZ0NvbmZpcm1Db21wb25lbnQsIEVycm9yTWVzc2FnZUNvbXBvbmVudCwgRmlsdGVyQm94Q29tcG9uZW50LFxuXHRcdExvYWRpbmdPdmVybGF5Q29tcG9uZW50LCBTZWxlY3RCb3hDb21wb25lbnQsIFNpZGVCYXJDb21wb25lbnQsXG5cdFx0U2lkZUJhckl0ZW1Db21wb25lbnQsIFN0YXR1c0JveENvbXBvbmVudCxcblx0XHQvKiBFbmQgQ29tcG9uZW50IEluamVjdCAoRG8gbm90IHJlbW92ZSkgKi9cblxuXHRcdC8qIERpcmVjdGl2ZSBJbmplY3QgKERvIG5vdCByZW1vdmUpICovXG5cdFx0QWRqdXN0Rm9udHNpemVEaXJlY3RpdmUsIERldGVjdFNjcm9sbERpcmVjdGl2ZSwgRGlzYWJsZUNvbnRyb2xEaXJlY3RpdmUsXG5cdFx0RXF1YWxWYWxpZGF0b3JEaXJlY3RpdmUsIEZ1bGxzY3JlZW5EaXJlY3RpdmUsIE1heExlc3NUaGFuRGlyZWN0aXZlLFxuXHRcdE1pbkdyZWF0ZXJUaGFuRGlyZWN0aXZlLCBOZ0luaXREaXJlY3RpdmUsIE9kb21ldGVyRGlyZWN0aXZlLFxuXHRcdFBvcG92ZXJEaXJlY3RpdmUsIFVwbG9hZEZpbGVEaXJlY3RpdmUsXG5cdFx0LyogRW5kIERpcmVjdGl2ZSBJbmplY3QgKERvIG5vdCByZW1vdmUpICovXG5cblx0XHQvKiBQaXBlIEluamVjdCAoRG8gbm90IHJlbW92ZSkgKi9cblx0XHRDYXBpdGFsaXplRmlyc3RQaXBlLCBDb21tYXNQaXBlLCBGaWxlU2l6ZUZvcm1hdHRlclBpcGUsXG5cdFx0RmlsdGVyUGlwZSwgSW1hZ2VQaXBlLCBJdGVtT2JqZWN0UGlwZSxcblx0XHRLRm9ybWF0dGVyUGlwZSwgTWF4UGlwZSwgTWluUGlwZSxcblx0XHRNb21lbnREYXRlRm9ybWF0UGlwZSwgT3JkZXJCeVBpcGUsIFBhZE51bWJlclBpcGUsXG5cdFx0UGFydGl0aW9uUGlwZSwgU2FmZUh0bWxQaXBlLFxuXHRcdC8qIEVuZCBQaXBlIEluamVjdCAoRG8gbm90IHJlbW92ZSkgKi9cblx0XSxcblx0ZW50cnlDb21wb25lbnRzOiBbXG5cdFx0LyogRW50cnkgQ29tcG9uZW50IEluamVjdCAoRG8gbm90IHJlbW92ZSkgKi9cblx0XHREaWFsb2dDb25maXJtQ29tcG9uZW50LFxuXHRcdC8qIEVuZCBFbnRyeSBDb21wb25lbnQgSW5qZWN0IChEbyBub3QgcmVtb3ZlKSAqL1xuXHRdLFxuXHRwcm92aWRlcnM6IFtcblx0XHR7XG5cdFx0XHRwcm92aWRlXHRcdDogQVBQX0lOSVRJQUxJWkVSLFxuXHRcdFx0dXNlRmFjdG9yeVx0OiBhcHBJbml0aWFsaXplckZhY3RvcnksXG5cdFx0XHRkZXBzXHRcdDogWyBUcmFuc2xhdGVTZXJ2aWNlLCBMb2NhbGVTZXJ2aWNlLCBJbmplY3RvciBdLFxuXHRcdFx0bXVsdGlcdFx0OiB0cnVlLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0cHJvdmlkZVx0OiBNQVRfRElBTE9HX0RFRkFVTFRfT1BUSU9OUyxcblx0XHRcdHVzZVZhbHVlOiB7IGRpc2FibGVDbG9zZTogdHJ1ZSwgaGFzQmFja2Ryb3A6IHRydWUgfSxcblx0XHR9LFxuXHRcdHsgcHJvdmlkZTogTUFUX0RBVEVfRk9STUFUUywgdXNlVmFsdWU6IE1BVF9NT01FTlRfREFURV9GT1JNQVRTIH0sXG5cdFx0eyBwcm92aWRlOiBTQVRVUk5fTUFUX0RBVEVfRk9STUFUUywgdXNlVmFsdWU6IE1BVF9NT01FTlRfREFURV9GT1JNQVRTIH0sXG5cdFx0eyBwcm92aWRlOiBEYXRlQWRhcHRlciwgdXNlQ2xhc3M6IE1vbWVudFV0Y0RhdGVBZGFwdGVyIH0sXG5cdFx0eyBwcm92aWRlOiBTYXR1cm5EYXRlQWRhcHRlciwgdXNlQ2xhc3M6IE1vbWVudFV0Y0RhdGVBZGFwdGVyIH0sXG5cblx0XHRDb29raWVTZXJ2aWNlLFxuXG5cdFx0LyogU2VydmljZSBJbmplY3QgKERvIG5vdCByZW1vdmUpICovXG5cdFx0QXBpU2VydmljZSwgRm9ybVNlcnZpY2UsIExvY2FsZVNlcnZpY2UsXG5cdFx0TG9vcFNlcnZpY2UsIE1lZGlhU2VydmljZSwgTW9tZW50VXRjRGF0ZUFkYXB0ZXIsXG5cdFx0TnVtYmVyU2VydmljZSwgUGFnZVNlcnZpY2UsIFNlcnZpY2VXb3JrZXJTZXJ2aWNlLFxuXHRcdFNoYXJlZFNlcnZpY2UsIFNuYWNrQmFyU2VydmljZSwgU3RvcmVTZXJ2aWNlLFxuXHRcdFV0aWxpdGllc1NlcnZpY2UsIFdlYk5vdGlmaWNhdGlvblNlcnZpY2UsIFdlYlNvY2tldFNlcnZpY2UsXG5cdFx0LyogRW5kIFNlcnZpY2UgSW5qZWN0IChEbyBub3QgcmVtb3ZlKSAqL1xuXHRdLFxufSlcbmV4cG9ydCBjbGFzcyBDb3JlTW9kdWxlIHtcblxuXHQvKipcblx0KiBAY29uc3RydWN0b3Jcblx0KiBAcGFyYW0ge2FueX0gY29uZmlnXG5cdCovXG5cdHB1YmxpYyBzdGF0aWMgZm9yUm9vdCggY29uZmlnOiBhbnkgKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdG5nTW9kdWxlOiBDb3JlTW9kdWxlLFxuXHRcdFx0cHJvdmlkZXJzOiBbXG5cdFx0XHRcdHsgcHJvdmlkZTogTUFUX0RBVEVfTE9DQUxFLCB1c2VWYWx1ZTogY29uZmlnLmxvY2FsZSB9LFxuXHRcdFx0XHR7IHByb3ZpZGU6IFNBVFVSTl9NQVRfREFURV9MT0NBTEUsIHVzZVZhbHVlOiBjb25maWcubG9jYWxlIH0sXG5cdFx0XHRdLFxuXHRcdH07XG5cdH1cblxuXHQvKipcblx0KiBAY29uc3RydWN0b3Jcblx0Ki9cblx0Y29uc3RydWN0b3IoKSB7fVxuXG59XG4iXX0=