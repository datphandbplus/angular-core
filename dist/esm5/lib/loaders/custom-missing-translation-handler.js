import { isDevMode } from '@angular/core';
var CustomMissingTranslationHandler = /** @class */ (function () {
    function CustomMissingTranslationHandler() {
    }
    /**
    * Handle missing translation
    * @param {MissingTranslationHandlerParams} params
    * @return {string}
    */
    CustomMissingTranslationHandler.prototype.handle = function (params) {
        /* tslint:disable-next-line */
        isDevMode() && console.error(params);
        return '';
    };
    return CustomMissingTranslationHandler;
}());
export { CustomMissingTranslationHandler };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLW1pc3NpbmctdHJhbnNsYXRpb24taGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItY29yZS8iLCJzb3VyY2VzIjpbImxpYi9sb2FkZXJzL2N1c3RvbS1taXNzaW5nLXRyYW5zbGF0aW9uLWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUcxQztJQUFBO0lBYUEsQ0FBQztJQVhBOzs7O01BSUU7SUFDSyxnREFBTSxHQUFiLFVBQWUsTUFBdUM7UUFDckQsOEJBQThCO1FBQzlCLFNBQVMsRUFBRSxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUUsTUFBTSxDQUFFLENBQUM7UUFDdkMsT0FBTyxFQUFFLENBQUM7SUFDWCxDQUFDO0lBRUYsc0NBQUM7QUFBRCxDQUFDLEFBYkQsSUFhQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzRGV2TW9kZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlciwgTWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlclBhcmFtcyB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgQ3VzdG9tTWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlciBpbXBsZW1lbnRzIE1pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXIge1xuXG5cdC8qKlxuXHQqIEhhbmRsZSBtaXNzaW5nIHRyYW5zbGF0aW9uXG5cdCogQHBhcmFtIHtNaXNzaW5nVHJhbnNsYXRpb25IYW5kbGVyUGFyYW1zfSBwYXJhbXNcblx0KiBAcmV0dXJuIHtzdHJpbmd9XG5cdCovXG5cdHB1YmxpYyBoYW5kbGUoIHBhcmFtczogTWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlclBhcmFtcyApOiBzdHJpbmcge1xuXHRcdC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuXHRcdGlzRGV2TW9kZSgpICYmIGNvbnNvbGUuZXJyb3IoIHBhcmFtcyApO1xuXHRcdHJldHVybiAnJztcblx0fVxuXG59XG4iXX0=