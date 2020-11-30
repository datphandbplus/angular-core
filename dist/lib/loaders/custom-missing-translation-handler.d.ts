import { MissingTranslationHandler, MissingTranslationHandlerParams } from '@ngx-translate/core';
export declare class CustomMissingTranslationHandler implements MissingTranslationHandler {
    /**
    * Handle missing translation
    * @param {MissingTranslationHandlerParams} params
    * @return {string}
    */
    handle(params: MissingTranslationHandlerParams): string;
}
