import * as tslib_1 from "tslib";
import { Injectable, Optional, Inject } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import moment from 'moment-timezone';
import * as vi from 'moment/locale/vi';
import { DEFAULT_LOCALE } from '../injection-token';
moment.defineLocale('vi', tslib_1.__assign({}, vi, { months: 'Tháng 1_Tháng 2_Tháng 3_Tháng 4_Tháng 5_Tháng 6_Tháng 7_Tháng 8_Tháng 9_Tháng 10_Tháng 11_Tháng 12'.split('_'), weekdays: 'Chủ nhật_Thứ hai_Thứ ba_Thứ tư_Thứ năm_Thứ sáu_Thứ bảy'.split('_') }));
var LocaleService = /** @class */ (function () {
    /**
    * @constructor
    * @param {string} defaultLocale
    * @param {TranslateService} translateService
    */
    function LocaleService(defaultLocale, translateService) {
        this.defaultLocale = defaultLocale;
        this.translateService = translateService;
        this.localeChangeObserver = new ReplaySubject();
    }
    Object.defineProperty(LocaleService.prototype, "locale", {
        /**
        * Get locale
        * @return {string}
        */
        get: function () {
            return this._locale || localStorage.getItem('locale') || this.defaultLocale;
        },
        /**
        * Set locale
        * @param {string} locale
        * @return {void}
        */
        set: function (locale) {
            if (!locale)
                return;
            this._locale = locale;
            // Store locale
            localStorage.setItem('locale', locale.toString());
            // Set moment language
            moment.locale(locale);
            // The lang to use, if the lang isn't available, it will use the current loader to get them
            this.translateService.use(locale.substring(0, 2).toLowerCase()).subscribe();
            // Trigger locale changed
            this.localeChangeObserver.next(locale);
        },
        enumerable: true,
        configurable: true
    });
    /**
    * Init locale
    * @return {void}
    */
    LocaleService.prototype.initLocale = function () {
        this.locale = localStorage.getItem('locale') || this.defaultLocale;
        if (!this.locale)
            return;
        // Set moment language
        moment.locale(this.locale);
        // This language will be used as a fallback when a translation isn't found in the current language
        this.translateService.setDefaultLang(this.locale.substring(0, 2).toLowerCase());
    };
    LocaleService.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Optional }, { type: Inject, args: [DEFAULT_LOCALE,] }] },
        { type: TranslateService }
    ]; };
    LocaleService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__param(0, Optional()), tslib_1.__param(0, Inject(DEFAULT_LOCALE)),
        tslib_1.__metadata("design:paramtypes", [String, TranslateService])
    ], LocaleService);
    return LocaleService;
}());
export { LocaleService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNvcmUvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvbG9jYWxlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3JDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZELE9BQU8sTUFBTSxNQUFNLGlCQUFpQixDQUFDO0FBQ3JDLE9BQU8sS0FBSyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFdkMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXBELE1BQU0sQ0FBQyxZQUFZLENBQUUsSUFBSSx1QkFDckIsRUFBRSxJQUNMLE1BQU0sRUFBRyxvR0FBb0csQ0FBQyxLQUFLLENBQUUsR0FBRyxDQUFFLEVBQzFILFFBQVEsRUFBRSx3REFBd0QsQ0FBQyxLQUFLLENBQUUsR0FBRyxDQUFFLElBQzdFLENBQUM7QUFHSjtJQUtDOzs7O01BSUU7SUFDRix1QkFDZ0QsYUFBcUIsRUFDNUQsZ0JBQWtDO1FBREssa0JBQWEsR0FBYixhQUFhLENBQVE7UUFDNUQscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQVRwQyx5QkFBb0IsR0FBdUIsSUFBSSxhQUFhLEVBQVUsQ0FBQztJQVUzRSxDQUFDO0lBT0osc0JBQUksaUNBQU07UUFrQlY7OztVQUdFO2FBQ0Y7WUFDQyxPQUFPLElBQUksQ0FBQyxPQUFPLElBQUksWUFBWSxDQUFDLE9BQU8sQ0FBRSxRQUFRLENBQUUsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQy9FLENBQUM7UUE3QkQ7Ozs7VUFJRTthQUNGLFVBQVksTUFBYztZQUN6QixJQUFLLENBQUMsTUFBTTtnQkFBRyxPQUFPO1lBRXRCLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1lBRXRCLGVBQWU7WUFDZixZQUFZLENBQUMsT0FBTyxDQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUUsQ0FBQztZQUVwRCxzQkFBc0I7WUFDdEIsTUFBTSxDQUFDLE1BQU0sQ0FBRSxNQUFNLENBQUUsQ0FBQztZQUV4QiwyRkFBMkY7WUFDM0YsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBRSxNQUFNLENBQUMsU0FBUyxDQUFFLENBQUMsRUFBRSxDQUFDLENBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBRSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBRWhGLHlCQUF5QjtZQUN6QixJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFFLE1BQU0sQ0FBRSxDQUFDO1FBQzFDLENBQUM7OztPQUFBO0lBVUQ7OztNQUdFO0lBQ0ssa0NBQVUsR0FBakI7UUFDQyxJQUFJLENBQUMsTUFBTSxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUUsUUFBUSxDQUFFLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUVyRSxJQUFLLENBQUMsSUFBSSxDQUFDLE1BQU07WUFBRyxPQUFPO1FBRTNCLHNCQUFzQjtRQUN0QixNQUFNLENBQUMsTUFBTSxDQUFFLElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQztRQUU3QixrR0FBa0c7UUFDbEcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBRSxDQUFDLEVBQUUsQ0FBQyxDQUFFLENBQUMsV0FBVyxFQUFFLENBQUUsQ0FBQztJQUNyRixDQUFDOzs2Q0FqREMsUUFBUSxZQUFJLE1BQU0sU0FBRSxjQUFjO2dCQUNULGdCQUFnQjs7SUFaL0IsYUFBYTtRQUR6QixVQUFVLEVBQUU7UUFZVixtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLE1BQU0sQ0FBRSxjQUFjLENBQUUsQ0FBQTt5REFDWCxnQkFBZ0I7T0FaL0IsYUFBYSxDQThEekI7SUFBRCxvQkFBQztDQUFBLEFBOURELElBOERDO1NBOURZLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXBsYXlTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudC10aW1lem9uZSc7XG5pbXBvcnQgKiBhcyB2aSBmcm9tICdtb21lbnQvbG9jYWxlL3ZpJztcblxuaW1wb3J0IHsgREVGQVVMVF9MT0NBTEUgfSBmcm9tICcuLi9pbmplY3Rpb24tdG9rZW4nO1xuXG5tb21lbnQuZGVmaW5lTG9jYWxlKCAndmknLCB7XG5cdC4uLnZpLFxuXHRtb250aHNcdDogJ1Row6FuZyAxX1Row6FuZyAyX1Row6FuZyAzX1Row6FuZyA0X1Row6FuZyA1X1Row6FuZyA2X1Row6FuZyA3X1Row6FuZyA4X1Row6FuZyA5X1Row6FuZyAxMF9UaMOhbmcgMTFfVGjDoW5nIDEyJy5zcGxpdCggJ18nICksXG5cdHdlZWtkYXlzOiAnQ2jhu6cgbmjhuq10X1Ro4bupIGhhaV9UaOG7qSBiYV9UaOG7qSB0xrBfVGjhu6kgbsSDbV9UaOG7qSBzw6F1X1Ro4bupIGLhuqN5Jy5zcGxpdCggJ18nICksXG59ICk7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2NhbGVTZXJ2aWNlIHtcblxuXHRwcml2YXRlIF9sb2NhbGU6IHN0cmluZztcblx0cHVibGljIGxvY2FsZUNoYW5nZU9ic2VydmVyOiBSZXBsYXlTdWJqZWN0PGFueT4gPSBuZXcgUmVwbGF5U3ViamVjdDxzdHJpbmc+KCk7XG5cblx0LyoqXG5cdCogQGNvbnN0cnVjdG9yXG5cdCogQHBhcmFtIHtzdHJpbmd9IGRlZmF1bHRMb2NhbGVcblx0KiBAcGFyYW0ge1RyYW5zbGF0ZVNlcnZpY2V9IHRyYW5zbGF0ZVNlcnZpY2Vcblx0Ki9cblx0Y29uc3RydWN0b3IoXG5cdFx0QE9wdGlvbmFsKCkgQEluamVjdCggREVGQVVMVF9MT0NBTEUgKSByZWFkb25seSBkZWZhdWx0TG9jYWxlOiBzdHJpbmcsXG5cdFx0cHJpdmF0ZSB0cmFuc2xhdGVTZXJ2aWNlOiBUcmFuc2xhdGVTZXJ2aWNlXG5cdCkge31cblxuXHQvKipcblx0KiBTZXQgbG9jYWxlXG5cdCogQHBhcmFtIHtzdHJpbmd9IGxvY2FsZVxuXHQqIEByZXR1cm4ge3ZvaWR9XG5cdCovXG5cdHNldCBsb2NhbGUoIGxvY2FsZTogc3RyaW5nICkge1xuXHRcdGlmICggIWxvY2FsZSApIHJldHVybjtcblxuXHRcdHRoaXMuX2xvY2FsZSA9IGxvY2FsZTtcblxuXHRcdC8vIFN0b3JlIGxvY2FsZVxuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCAnbG9jYWxlJywgbG9jYWxlLnRvU3RyaW5nKCkgKTtcblxuXHRcdC8vIFNldCBtb21lbnQgbGFuZ3VhZ2Vcblx0XHRtb21lbnQubG9jYWxlKCBsb2NhbGUgKTtcblxuXHRcdC8vIFRoZSBsYW5nIHRvIHVzZSwgaWYgdGhlIGxhbmcgaXNuJ3QgYXZhaWxhYmxlLCBpdCB3aWxsIHVzZSB0aGUgY3VycmVudCBsb2FkZXIgdG8gZ2V0IHRoZW1cblx0XHR0aGlzLnRyYW5zbGF0ZVNlcnZpY2UudXNlKCBsb2NhbGUuc3Vic3RyaW5nKCAwLCAyICkudG9Mb3dlckNhc2UoKSApLnN1YnNjcmliZSgpO1xuXG5cdFx0Ly8gVHJpZ2dlciBsb2NhbGUgY2hhbmdlZFxuXHRcdHRoaXMubG9jYWxlQ2hhbmdlT2JzZXJ2ZXIubmV4dCggbG9jYWxlICk7XG5cdH1cblxuXHQvKipcblx0KiBHZXQgbG9jYWxlXG5cdCogQHJldHVybiB7c3RyaW5nfVxuXHQqL1xuXHRnZXQgbG9jYWxlKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMuX2xvY2FsZSB8fCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSggJ2xvY2FsZScgKSB8fCB0aGlzLmRlZmF1bHRMb2NhbGU7XG5cdH1cblxuXHQvKipcblx0KiBJbml0IGxvY2FsZVxuXHQqIEByZXR1cm4ge3ZvaWR9XG5cdCovXG5cdHB1YmxpYyBpbml0TG9jYWxlKCkge1xuXHRcdHRoaXMubG9jYWxlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oICdsb2NhbGUnICkgfHwgdGhpcy5kZWZhdWx0TG9jYWxlO1xuXG5cdFx0aWYgKCAhdGhpcy5sb2NhbGUgKSByZXR1cm47XG5cblx0XHQvLyBTZXQgbW9tZW50IGxhbmd1YWdlXG5cdFx0bW9tZW50LmxvY2FsZSggdGhpcy5sb2NhbGUgKTtcblxuXHRcdC8vIFRoaXMgbGFuZ3VhZ2Ugd2lsbCBiZSB1c2VkIGFzIGEgZmFsbGJhY2sgd2hlbiBhIHRyYW5zbGF0aW9uIGlzbid0IGZvdW5kIGluIHRoZSBjdXJyZW50IGxhbmd1YWdlXG5cdFx0dGhpcy50cmFuc2xhdGVTZXJ2aWNlLnNldERlZmF1bHRMYW5nKCB0aGlzLmxvY2FsZS5zdWJzdHJpbmcoIDAsIDIgKS50b0xvd2VyQ2FzZSgpICk7XG5cdH1cblxufVxuIl19