import { HttpClient } from '@angular/common/http';
import { ModuleWithProviders } from '@angular/core';
import { MultiTranslateHttpLoader } from './loaders/multi-translate-http-loader';
export declare function translateLoader(http: HttpClient): MultiTranslateHttpLoader;
export declare const lazyLoadImageModuleForRoot: ModuleWithProviders<any>;
export declare const reactiveFormsModuleWithConfig: ModuleWithProviders<any>;
export declare const cookieModuleForRoot: ModuleWithProviders<any>;
export declare const toastrModuleForRoot: ModuleWithProviders<any>;
export declare const translateModuleForRoot: ModuleWithProviders<any>;
export declare class CoreModule {
    /**
    * @constructor
    * @param {any} config
    */
    static forRoot(config: any): ModuleWithProviders;
    /**
    * @constructor
    */
    constructor();
}
