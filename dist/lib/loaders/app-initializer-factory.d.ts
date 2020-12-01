import { Injector } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LocaleService } from '../services/locale.service';
export declare function appInitializerFactory(translateService: TranslateService, localeService: LocaleService, injector: Injector): () => Promise<any>;
