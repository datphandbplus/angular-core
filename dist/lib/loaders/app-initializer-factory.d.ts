import { Injector } from '@angular/core';
import { LocaleService } from '../services/locale.service';
export declare function appInitializerFactory(localeService: LocaleService, injector: Injector): () => Promise<any>;
