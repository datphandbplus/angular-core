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
import { NgModule, APP_INITIALIZER, Injector } from '@angular/core';
import { TranslateModule, TranslateLoader, MissingTranslationHandler } from '@ngx-translate/core';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material';
import { DateAdapter as SaturnDateAdapter, MAT_DATE_FORMATS as SATURN_MAT_DATE_FORMATS, MAT_DATE_LOCALE as SATURN_MAT_DATE_LOCALE, SatDatepickerModule } from 'saturn-datepicker';
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
export function translateLoader(http) {
    return new MultiTranslateHttpLoader(http, [
        { prefix: 'assets/i18n/', suffix: '.json' },
    ]);
}
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
var ɵ0 = appInitializerFactory, ɵ1 = { panelClass: 'mat-dialog', disableClose: true }, ɵ2 = MAT_MOMENT_DATE_FORMATS, ɵ3 = MAT_MOMENT_DATE_FORMATS;
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
            ],
            entryComponents: [
                /* Entry Component Inject (Do not remove) */
                DialogConfirmComponent,
            ],
            providers: [
                {
                    provide: APP_INITIALIZER,
                    useFactory: ɵ0,
                    deps: [LocaleService, Injector],
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
                SharedService, StoreService, UtilitiesService,
                WebNotificationService, WebSocketService,
            ],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], CoreModule);
    return CoreModule;
}());
export { CoreModule };
export { ɵ0, ɵ1, ɵ2, ɵ3 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNvcmUvIiwic291cmNlcyI6WyJsaWIvY29yZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQzFDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSwwQkFBMEIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQy9ELE9BQU8sRUFDTixRQUFRLEVBQUUsZUFBZSxFQUN6QixRQUFRLEVBQ1IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxlQUFlLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNsRyxPQUFPLEVBQ04sV0FBVyxFQUFFLGdCQUFnQixFQUM3QixlQUFlLEVBQUUsMEJBQTBCLEVBQzNDLE1BQU0sbUJBQW1CLENBQUM7QUFDM0IsT0FBTyxFQUNOLFdBQVcsSUFBSSxpQkFBaUIsRUFDaEMsZ0JBQWdCLElBQUksdUJBQXVCLEVBQzNDLGVBQWUsSUFBSSxzQkFBc0IsRUFDekMs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QzFCLFVBQVUsSUFBd0I7b0JBQ2xDLElBQUksRUFBSSxDQUFFLGFBQWEsRUFBRSxRQUFRLENBQUU7b0JBQ25DLEtBQUssRUFBSSxJQUFJO2lCQUNiO2dCQUNEO29CQUNDLE9BQU8sRUFBRywwQkFBMEI7b0JBQ3BDLFFBQVEsSUFBa0Q7aUJBQzFEO2dCQUNELEVBQUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFFBQVEsSUFBeUIsRUFBRTtnQkFDaEUsRUFBRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsUUFBUSxJQUF5QixFQUFFO2dCQUN2RSxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLG9CQUFvQixFQUFFO2dCQUN4RCxFQUFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsb0JBQW9CLEVBQUU7Z0JBRTlELGFBQWE7Z0JBRWIsb0NBQW9DO2dCQUNwQyxVQUFVLEVBQUUsV0FBVyxFQUFFLGFBQWE7Z0JBQ3RDLFdBQVcsRUFBRSxZQUFZLEVBQUUsb0JBQW9CO2dCQUMvQyxhQUFhLEVBQUUsV0FBVyxFQUFFLG9CQUFvQjtnQkFDaEQsYUFBYSxFQUFFLFlBQVksRUFBRSxnQkFBZ0I7Z0JBQzdDLHNCQUFzQixFQUFFLGdCQUFnQjthQUV4QztTQUNELENBQUM7O09BQ1csVUFBVSxDQXFCdEI7SUFBRCxpQkFBQztDQUFBLEFBckJELElBcUJDO1NBckJZLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDb29raWVTZXJ2aWNlLCBDb29raWVNb2R1bGUgfSBmcm9tICduZ3gtY29va2llJztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUsIEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBUb2FzdHJNb2R1bGUgfSBmcm9tICduZ3gtdG9hc3RyJztcbmltcG9ydCB7IE1BVF9NT01FTlRfREFURV9GT1JNQVRTIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwtbW9tZW50LWFkYXB0ZXInO1xuaW1wb3J0IHsgTGF6eUxvYWRJbWFnZU1vZHVsZSwgaW50ZXJzZWN0aW9uT2JzZXJ2ZXJQcmVzZXQgfSBmcm9tICduZy1sYXp5bG9hZC1pbWFnZSc7XG5pbXBvcnQgeyBQZXJmZWN0U2Nyb2xsYmFyTW9kdWxlIH0gZnJvbSAnbmd4LXBlcmZlY3Qtc2Nyb2xsYmFyJztcbmltcG9ydCB7XG5cdE5nTW9kdWxlLCBBUFBfSU5JVElBTElaRVIsXG5cdEluamVjdG9yLCBNb2R1bGVXaXRoUHJvdmlkZXJzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVHJhbnNsYXRlTW9kdWxlLCBUcmFuc2xhdGVMb2FkZXIsIE1pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXIgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcbmltcG9ydCB7XG5cdERhdGVBZGFwdGVyLCBNQVRfREFURV9GT1JNQVRTLFxuXHRNQVRfREFURV9MT0NBTEUsIE1BVF9ESUFMT0dfREVGQVVMVF9PUFRJT05TXG59IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7XG5cdERhdGVBZGFwdGVyIGFzIFNhdHVybkRhdGVBZGFwdGVyLFxuXHRNQVRfREFURV9GT1JNQVRTIGFzIFNBVFVSTl9NQVRfREFURV9GT1JNQVRTLFxuXHRNQVRfREFURV9MT0NBTEUgYXMgU0FUVVJOX01BVF9EQVRFX0xPQ0FMRSxcblx0U2F0RGF0ZXBpY2tlck1vZHVsZVxufSBmcm9tICdzYXR1cm4tZGF0ZXBpY2tlcic7XG5pbXBvcnQgXyBmcm9tICd1bmRlcnNjb3JlJztcblxuaW1wb3J0IHsgTWF0ZXJpYWxNb2R1bGUgfSBmcm9tICcuL21hdGVyaWFsLm1vZHVsZSc7XG5pbXBvcnQgeyBhcHBJbml0aWFsaXplckZhY3RvcnkgfSBmcm9tICcuL2xvYWRlcnMvYXBwLWluaXRpYWxpemVyLWZhY3RvcnknO1xuaW1wb3J0IHsgQ3VzdG9tTWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlciB9IGZyb20gJy4vbG9hZGVycy9jdXN0b20tbWlzc2luZy10cmFuc2xhdGlvbi1oYW5kbGVyJztcbmltcG9ydCB7IE11bHRpVHJhbnNsYXRlSHR0cExvYWRlciB9IGZyb20gJy4vbG9hZGVycy9tdWx0aS10cmFuc2xhdGUtaHR0cC1sb2FkZXInO1xuXG4vKiBDb21wb25lbnQgSW5qZWN0IChEbyBub3QgcmVtb3ZlKSAqL1xuaW1wb3J0IHsgQXV0b0NvbXBsZXRlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2F1dG8tY29tcGxldGUvYXV0by1jb21wbGV0ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQXZhdGFyQm94Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2F2YXRhci1ib3gvYXZhdGFyLWJveC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQXZhdGFyTGlzdENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9hdmF0YXItbGlzdC9hdmF0YXItbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29sbGFwc2VQYWdpbmF0b3JDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY29sbGFwc2UtcGFnaW5hdG9yL2NvbGxhcHNlLXBhZ2luYXRvci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGlhbG9nQ29uZmlybUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9kaWFsb2ctY29uZmlybS9kaWFsb2ctY29uZmlybS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRXJyb3JNZXNzYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2Vycm9yLW1lc3NhZ2UvZXJyb3ItbWVzc2FnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTG9hZGluZ092ZXJsYXlDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbG9hZGluZy1vdmVybGF5L2xvYWRpbmctb3ZlcmxheS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2VsZWN0Qm94Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3NlbGVjdC1ib3gvc2VsZWN0LWJveC5jb21wb25lbnQnO1xuLyogRW5kIENvbXBvbmVudCBJbmplY3QgKERvIG5vdCByZW1vdmUpICovXG5cbi8qIERpcmVjdGl2ZSBJbmplY3QgKERvIG5vdCByZW1vdmUpICovXG5pbXBvcnQgeyBBZGp1c3RGb250c2l6ZURpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9hZGp1c3QtZm9udHNpemUuZGlyZWN0aXZlJztcbmltcG9ydCB7IERpc2FibGVDb250cm9sRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2Rpc2FibGUtY29udHJvbC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRXF1YWxWYWxpZGF0b3JEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvZXF1YWwtdmFsaWRhdG9yLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBGdWxsc2NyZWVuRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2Z1bGxzY3JlZW4uZGlyZWN0aXZlJztcbmltcG9ydCB7IE1heExlc3NUaGFuRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL21heC1sZXNzLXRoYW4uZGlyZWN0aXZlJztcbmltcG9ydCB7IE1pbkdyZWF0ZXJUaGFuRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL21pbi1ncmVhdGVyLXRoYW4uZGlyZWN0aXZlJztcbmltcG9ydCB7IE5nSW5pdERpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9uZ2luaXQuZGlyZWN0aXZlJztcbmltcG9ydCB7IE9kb21ldGVyRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL29kb21ldGVyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBQb3BvdmVyRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL3BvcG92ZXIuZGlyZWN0aXZlJztcbmltcG9ydCB7IFVwbG9hZEZpbGVEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvdXBsb2FkLWZpbGUuZGlyZWN0aXZlJztcbi8qIEVuZCBEaXJlY3RpdmUgSW5qZWN0IChEbyBub3QgcmVtb3ZlKSAqL1xuXG4vKiBQaXBlIEluamVjdCAoRG8gbm90IHJlbW92ZSkgKi9cbmltcG9ydCB7IENhcGl0YWxpemVGaXJzdFBpcGUgfSBmcm9tICcuL3BpcGVzL2NhcGl0YWxpemUtZmlyc3QucGlwZSc7XG5pbXBvcnQgeyBDb21tYXNQaXBlIH0gZnJvbSAnLi9waXBlcy9jb21tYXMucGlwZSc7XG5pbXBvcnQgeyBGaWx0ZXJQaXBlIH0gZnJvbSAnLi9waXBlcy9maWx0ZXIucGlwZSc7XG5pbXBvcnQgeyBJdGVtT2JqZWN0UGlwZSB9IGZyb20gJy4vcGlwZXMvaXRlbS1vYmplY3QucGlwZSc7XG5pbXBvcnQgeyBLRm9ybWF0dGVyUGlwZSB9IGZyb20gJy4vcGlwZXMvay1mb3JtYXR0ZXIucGlwZSc7XG5pbXBvcnQgeyBNYXhQaXBlIH0gZnJvbSAnLi9waXBlcy9tYXgucGlwZSc7XG5pbXBvcnQgeyBNaW5QaXBlIH0gZnJvbSAnLi9waXBlcy9taW4ucGlwZSc7XG5pbXBvcnQgeyBNb21lbnREYXRlRm9ybWF0UGlwZSB9IGZyb20gJy4vcGlwZXMvbW9tZW50LWRhdGUtZm9ybWF0LnBpcGUnO1xuaW1wb3J0IHsgT3JkZXJCeVBpcGUgfSBmcm9tICcuL3BpcGVzL29yZGVyLWJ5LnBpcGUnO1xuaW1wb3J0IHsgUGFkTnVtYmVyUGlwZSB9IGZyb20gJy4vcGlwZXMvcGFkLW51bWJlci5waXBlJztcbmltcG9ydCB7IFBhcnRpdGlvblBpcGUgfSBmcm9tICcuL3BpcGVzL3BhcnRpdGlvbi5waXBlJztcbmltcG9ydCB7IFNhZmVIdG1sUGlwZSB9IGZyb20gJy4vcGlwZXMvc2FmZS1odG1sLnBpcGUnO1xuLyogRW5kIFBpcGUgSW5qZWN0IChEbyBub3QgcmVtb3ZlKSAqL1xuXG4vKiBTZXJ2aWNlIEluamVjdCAoRG8gbm90IHJlbW92ZSkgKi9cbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7IEZvcm1TZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9mb3JtLnNlcnZpY2UnO1xuaW1wb3J0IHsgTG9jYWxlU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvbG9jYWxlLnNlcnZpY2UnO1xuaW1wb3J0IHsgTG9vcFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2xvb3Auc2VydmljZSc7XG5pbXBvcnQgeyBNZWRpYVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL21lZGlhLnNlcnZpY2UnO1xuaW1wb3J0IHsgTW9tZW50VXRjRGF0ZUFkYXB0ZXIgfSBmcm9tICcuL3NlcnZpY2VzL21vbWVudC11dGMtZGF0ZS1hZGFwdGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgTnVtYmVyU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvbnVtYmVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGFnZVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3BhZ2Uuc2VydmljZSc7XG5pbXBvcnQgeyBTZXJ2aWNlV29ya2VyU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvc2VydmljZS13b3JrZXIuc2VydmljZSc7XG5pbXBvcnQgeyBTaGFyZWRTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9zaGFyZWQuc2VydmljZSc7XG5pbXBvcnQgeyBTdG9yZVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3N0b3JlLnNlcnZpY2UnO1xuaW1wb3J0IHsgVXRpbGl0aWVzU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvdXRpbGl0aWVzLnNlcnZpY2UnO1xuaW1wb3J0IHsgV2ViTm90aWZpY2F0aW9uU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvd2ViLW5vdGlmaWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IFdlYlNvY2tldFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3dlYi1zb2NrZXQuc2VydmljZSc7XG4vKiBFbmQgU2VydmljZSBJbmplY3QgKERvIG5vdCByZW1vdmUpICovXG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2xhdGVMb2FkZXIoIGh0dHA6IEh0dHBDbGllbnQgKSB7XG5cdHJldHVybiBuZXcgTXVsdGlUcmFuc2xhdGVIdHRwTG9hZGVyKFxuXHRcdGh0dHAsXG5cdFx0W1xuXHRcdFx0eyBwcmVmaXg6ICdhc3NldHMvaTE4bi8nLCBzdWZmaXg6ICcuanNvbicgfSxcblx0XHRdXG5cdCk7XG59XG5cbl8ubWl4aW4oe1xuXHRnZXQ6ICggb2JqOiBhbnksIGtleTogYW55ICkgPT4ge1xuXHRcdGNvbnN0IHR5cGU6IHN0cmluZyA9IHR5cGVvZiBrZXk7XG5cblx0XHRpZiAoIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGUgPT09ICdudW1iZXInICkge1xuXHRcdFx0a2V5ID0gKCAnJyArIGtleSApLnJlcGxhY2UoIC9cXFsoLio/KVxcXS8sICggX206IGFueSwgX2tleTogYW55ICkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gJy4nICsgX2tleS5yZXBsYWNlKCAvW1wiJ10vZywgJycgKTtcblx0XHRcdH0gKS5zcGxpdCggJy4nICk7XG5cdFx0fVxuXG5cdFx0LyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG5cdFx0Zm9yICggbGV0IGk6IG51bWJlciA9IDAsIGw6IG51bWJlciA9IGtleS5sZW5ndGg7IGkgPCBsOyBpKysgKSB7XG5cdFx0XHRpZiAoIHR5cGVvZiBvYmogIT09ICd1bmRlZmluZWQnICYmIF8uaGFzKCBvYmosIGtleVsgaSBdICkgKSB7XG5cdFx0XHRcdG9iaiA9IG9ialsga2V5WyBpIF0gXTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiB1bmRlZmluZWQ7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG9iajtcblx0fSxcbn0pO1xuXG5leHBvcnQgY29uc3QgbGF6eUxvYWRJbWFnZU1vZHVsZUZvclJvb3Q6IE1vZHVsZVdpdGhQcm92aWRlcnM8YW55PiA9IExhenlMb2FkSW1hZ2VNb2R1bGVcbi5mb3JSb290KCB7IHByZXNldDogaW50ZXJzZWN0aW9uT2JzZXJ2ZXJQcmVzZXQgfSApO1xuZXhwb3J0IGNvbnN0IHJlYWN0aXZlRm9ybXNNb2R1bGVXaXRoQ29uZmlnOiBNb2R1bGVXaXRoUHJvdmlkZXJzPGFueT4gPSBSZWFjdGl2ZUZvcm1zTW9kdWxlXG4ud2l0aENvbmZpZyggeyB3YXJuT25OZ01vZGVsV2l0aEZvcm1Db250cm9sOiAnbmV2ZXInIH0gKTtcbmV4cG9ydCBjb25zdCBjb29raWVNb2R1bGVGb3JSb290OiBNb2R1bGVXaXRoUHJvdmlkZXJzPGFueT4gPSBDb29raWVNb2R1bGUuZm9yUm9vdCgpO1xuZXhwb3J0IGNvbnN0IHRvYXN0ck1vZHVsZUZvclJvb3Q6IE1vZHVsZVdpdGhQcm92aWRlcnM8YW55PiA9IFRvYXN0ck1vZHVsZS5mb3JSb290KCk7XG5leHBvcnQgY29uc3QgdHJhbnNsYXRlTW9kdWxlRm9yUm9vdDogTW9kdWxlV2l0aFByb3ZpZGVyczxhbnk+ID0gVHJhbnNsYXRlTW9kdWxlXG4uZm9yUm9vdCh7XG5cdG1pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXI6IHtcblx0XHRwcm92aWRlXHQ6IE1pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXIsXG5cdFx0dXNlQ2xhc3M6IEN1c3RvbU1pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXIsXG5cdH0sXG5cdGxvYWRlcjoge1xuXHRcdHByb3ZpZGVcdFx0OiBUcmFuc2xhdGVMb2FkZXIsXG5cdFx0dXNlRmFjdG9yeVx0OiB0cmFuc2xhdGVMb2FkZXIsXG5cdFx0ZGVwc1x0XHQ6IFsgSHR0cENsaWVudCBdLFxuXHR9LFxufSk7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRCcm93c2VyTW9kdWxlLCBGb3Jtc01vZHVsZSwgSHR0cENsaWVudE1vZHVsZSxcblx0XHRSb3V0ZXJNb2R1bGUsIEJyb3dzZXJBbmltYXRpb25zTW9kdWxlLCBTYXREYXRlcGlja2VyTW9kdWxlLFxuXHRcdE1hdGVyaWFsTW9kdWxlLCBQZXJmZWN0U2Nyb2xsYmFyTW9kdWxlLCBsYXp5TG9hZEltYWdlTW9kdWxlRm9yUm9vdCxcblx0XHRjb29raWVNb2R1bGVGb3JSb290LCB0b2FzdHJNb2R1bGVGb3JSb290LFxuXHRcdHRyYW5zbGF0ZU1vZHVsZUZvclJvb3QsIHJlYWN0aXZlRm9ybXNNb2R1bGVXaXRoQ29uZmlnLFxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHQvKiBDb21wb25lbnQgSW5qZWN0IChEbyBub3QgcmVtb3ZlKSAqL1xuXHRcdEF1dG9Db21wbGV0ZUNvbXBvbmVudCwgQXZhdGFyQm94Q29tcG9uZW50LCBBdmF0YXJMaXN0Q29tcG9uZW50LFxuXHRcdENvbGxhcHNlUGFnaW5hdG9yQ29tcG9uZW50LCBEaWFsb2dDb25maXJtQ29tcG9uZW50LCBFcnJvck1lc3NhZ2VDb21wb25lbnQsXG5cdFx0TG9hZGluZ092ZXJsYXlDb21wb25lbnQsIFNlbGVjdEJveENvbXBvbmVudCxcblx0XHQvKiBFbmQgQ29tcG9uZW50IEluamVjdCAoRG8gbm90IHJlbW92ZSkgKi9cblxuXHRcdC8qIERpcmVjdGl2ZSBJbmplY3QgKERvIG5vdCByZW1vdmUpICovXG5cdFx0QWRqdXN0Rm9udHNpemVEaXJlY3RpdmUsIERpc2FibGVDb250cm9sRGlyZWN0aXZlLCBFcXVhbFZhbGlkYXRvckRpcmVjdGl2ZSxcblx0XHRGdWxsc2NyZWVuRGlyZWN0aXZlLCBNYXhMZXNzVGhhbkRpcmVjdGl2ZSwgTWluR3JlYXRlclRoYW5EaXJlY3RpdmUsXG5cdFx0TmdJbml0RGlyZWN0aXZlLCBPZG9tZXRlckRpcmVjdGl2ZSxcblx0XHRQb3BvdmVyRGlyZWN0aXZlLCBVcGxvYWRGaWxlRGlyZWN0aXZlLFxuXHRcdC8qIEVuZCBEaXJlY3RpdmUgSW5qZWN0IChEbyBub3QgcmVtb3ZlKSAqL1xuXG5cdFx0LyogUGlwZSBJbmplY3QgKERvIG5vdCByZW1vdmUpICovXG5cdFx0Q2FwaXRhbGl6ZUZpcnN0UGlwZSwgQ29tbWFzUGlwZSwgRmlsdGVyUGlwZSxcblx0XHRJdGVtT2JqZWN0UGlwZSwgS0Zvcm1hdHRlclBpcGUsIE1heFBpcGUsXG5cdFx0TWluUGlwZSwgTW9tZW50RGF0ZUZvcm1hdFBpcGUsIE9yZGVyQnlQaXBlLFxuXHRcdFBhZE51bWJlclBpcGUsIFBhcnRpdGlvblBpcGUsIFNhZmVIdG1sUGlwZSxcblx0XHQvKiBFbmQgUGlwZSBJbmplY3QgKERvIG5vdCByZW1vdmUpICovXG5cdF0sXG5cdGV4cG9ydHM6IFtcblx0XHRCcm93c2VyTW9kdWxlLCBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSxcblx0XHRSb3V0ZXJNb2R1bGUsIEJyb3dzZXJBbmltYXRpb25zTW9kdWxlLCBUb2FzdHJNb2R1bGUsXG5cdFx0Q29va2llTW9kdWxlLCBUcmFuc2xhdGVNb2R1bGUsIEh0dHBDbGllbnRNb2R1bGUsXG5cdFx0TGF6eUxvYWRJbWFnZU1vZHVsZSwgUGVyZmVjdFNjcm9sbGJhck1vZHVsZSxcblx0XHRTYXREYXRlcGlja2VyTW9kdWxlLCBNYXRlcmlhbE1vZHVsZSxcblxuXHRcdC8qIENvbXBvbmVudCBJbmplY3QgKERvIG5vdCByZW1vdmUpICovXG5cdFx0QXV0b0NvbXBsZXRlQ29tcG9uZW50LCBBdmF0YXJCb3hDb21wb25lbnQsIEF2YXRhckxpc3RDb21wb25lbnQsXG5cdFx0Q29sbGFwc2VQYWdpbmF0b3JDb21wb25lbnQsIERpYWxvZ0NvbmZpcm1Db21wb25lbnQsIEVycm9yTWVzc2FnZUNvbXBvbmVudCxcblx0XHRMb2FkaW5nT3ZlcmxheUNvbXBvbmVudCwgU2VsZWN0Qm94Q29tcG9uZW50LFxuXHRcdC8qIEVuZCBDb21wb25lbnQgSW5qZWN0IChEbyBub3QgcmVtb3ZlKSAqL1xuXG5cdFx0LyogRGlyZWN0aXZlIEluamVjdCAoRG8gbm90IHJlbW92ZSkgKi9cblx0XHRBZGp1c3RGb250c2l6ZURpcmVjdGl2ZSwgRGlzYWJsZUNvbnRyb2xEaXJlY3RpdmUsIEVxdWFsVmFsaWRhdG9yRGlyZWN0aXZlLFxuXHRcdEZ1bGxzY3JlZW5EaXJlY3RpdmUsIE1heExlc3NUaGFuRGlyZWN0aXZlLCBNaW5HcmVhdGVyVGhhbkRpcmVjdGl2ZSxcblx0XHROZ0luaXREaXJlY3RpdmUsIE9kb21ldGVyRGlyZWN0aXZlLFxuXHRcdFBvcG92ZXJEaXJlY3RpdmUsIFVwbG9hZEZpbGVEaXJlY3RpdmUsXG5cdFx0LyogRW5kIERpcmVjdGl2ZSBJbmplY3QgKERvIG5vdCByZW1vdmUpICovXG5cblx0XHQvKiBQaXBlIEluamVjdCAoRG8gbm90IHJlbW92ZSkgKi9cblx0XHRDYXBpdGFsaXplRmlyc3RQaXBlLCBDb21tYXNQaXBlLCBGaWx0ZXJQaXBlLFxuXHRcdEl0ZW1PYmplY3RQaXBlLCBLRm9ybWF0dGVyUGlwZSwgTWF4UGlwZSxcblx0XHRNaW5QaXBlLCBNb21lbnREYXRlRm9ybWF0UGlwZSwgT3JkZXJCeVBpcGUsXG5cdFx0UGFkTnVtYmVyUGlwZSwgUGFydGl0aW9uUGlwZSwgU2FmZUh0bWxQaXBlLFxuXHRcdC8qIEVuZCBQaXBlIEluamVjdCAoRG8gbm90IHJlbW92ZSkgKi9cblx0XSxcblx0ZW50cnlDb21wb25lbnRzOiBbXG5cdFx0LyogRW50cnkgQ29tcG9uZW50IEluamVjdCAoRG8gbm90IHJlbW92ZSkgKi9cblx0XHREaWFsb2dDb25maXJtQ29tcG9uZW50LFxuXHRcdC8qIEVuZCBFbnRyeSBDb21wb25lbnQgSW5qZWN0IChEbyBub3QgcmVtb3ZlKSAqL1xuXHRdLFxuXHRwcm92aWRlcnM6IFtcblx0XHR7XG5cdFx0XHRwcm92aWRlXHRcdDogQVBQX0lOSVRJQUxJWkVSLFxuXHRcdFx0dXNlRmFjdG9yeVx0OiBhcHBJbml0aWFsaXplckZhY3RvcnksXG5cdFx0XHRkZXBzXHRcdDogWyBMb2NhbGVTZXJ2aWNlLCBJbmplY3RvciBdLFxuXHRcdFx0bXVsdGlcdFx0OiB0cnVlLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0cHJvdmlkZVx0OiBNQVRfRElBTE9HX0RFRkFVTFRfT1BUSU9OUyxcblx0XHRcdHVzZVZhbHVlOiB7IHBhbmVsQ2xhc3M6ICdtYXQtZGlhbG9nJywgZGlzYWJsZUNsb3NlOiB0cnVlIH0sXG5cdFx0fSxcblx0XHR7IHByb3ZpZGU6IE1BVF9EQVRFX0ZPUk1BVFMsIHVzZVZhbHVlOiBNQVRfTU9NRU5UX0RBVEVfRk9STUFUUyB9LFxuXHRcdHsgcHJvdmlkZTogU0FUVVJOX01BVF9EQVRFX0ZPUk1BVFMsIHVzZVZhbHVlOiBNQVRfTU9NRU5UX0RBVEVfRk9STUFUUyB9LFxuXHRcdHsgcHJvdmlkZTogRGF0ZUFkYXB0ZXIsIHVzZUNsYXNzOiBNb21lbnRVdGNEYXRlQWRhcHRlciB9LFxuXHRcdHsgcHJvdmlkZTogU2F0dXJuRGF0ZUFkYXB0ZXIsIHVzZUNsYXNzOiBNb21lbnRVdGNEYXRlQWRhcHRlciB9LFxuXG5cdFx0Q29va2llU2VydmljZSxcblxuXHRcdC8qIFNlcnZpY2UgSW5qZWN0IChEbyBub3QgcmVtb3ZlKSAqL1xuXHRcdEFwaVNlcnZpY2UsIEZvcm1TZXJ2aWNlLCBMb2NhbGVTZXJ2aWNlLFxuXHRcdExvb3BTZXJ2aWNlLCBNZWRpYVNlcnZpY2UsIE1vbWVudFV0Y0RhdGVBZGFwdGVyLFxuXHRcdE51bWJlclNlcnZpY2UsIFBhZ2VTZXJ2aWNlLCBTZXJ2aWNlV29ya2VyU2VydmljZSxcblx0XHRTaGFyZWRTZXJ2aWNlLCBTdG9yZVNlcnZpY2UsIFV0aWxpdGllc1NlcnZpY2UsXG5cdFx0V2ViTm90aWZpY2F0aW9uU2VydmljZSwgV2ViU29ja2V0U2VydmljZSxcblx0XHQvKiBFbmQgU2VydmljZSBJbmplY3QgKERvIG5vdCByZW1vdmUpICovXG5cdF0sXG59KVxuZXhwb3J0IGNsYXNzIENvcmVNb2R1bGUge1xuXG5cdC8qKlxuXHQqIEBjb25zdHJ1Y3RvclxuXHQqIEBwYXJhbSB7YW55fSBjb25maWdcblx0Ki9cblx0cHVibGljIHN0YXRpYyBmb3JSb290KCBjb25maWc6IGFueSApOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bmdNb2R1bGU6IENvcmVNb2R1bGUsXG5cdFx0XHRwcm92aWRlcnM6IFtcblx0XHRcdFx0eyBwcm92aWRlOiBNQVRfREFURV9MT0NBTEUsIHVzZVZhbHVlOiBjb25maWcubG9jYWxlIH0sXG5cdFx0XHRcdHsgcHJvdmlkZTogU0FUVVJOX01BVF9EQVRFX0xPQ0FMRSwgdXNlVmFsdWU6IGNvbmZpZy5sb2NhbGUgfSxcblx0XHRcdF0sXG5cdFx0fTtcblx0fVxuXG5cdC8qKlxuXHQqIEBjb25zdHJ1Y3RvclxuXHQqL1xuXHRjb25zdHJ1Y3RvcigpIHt9XG5cbn1cbiJdfQ==