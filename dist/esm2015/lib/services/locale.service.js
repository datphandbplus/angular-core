import * as tslib_1 from "tslib";
import { Injectable, Optional, Inject } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import moment from 'moment-timezone';
import * as vi from 'moment/locale/vi';
import { DEFAULT_LOCALE } from '../injection-token';
moment.defineLocale('vi', Object.assign({}, vi, { months: 'Tháng 1_Tháng 2_Tháng 3_Tháng 4_Tháng 5_Tháng 6_Tháng 7_Tháng 8_Tháng 9_Tháng 10_Tháng 11_Tháng 12'.split('_'), weekdays: 'Chủ nhật_Thứ hai_Thứ ba_Thứ tư_Thứ năm_Thứ sáu_Thứ bảy'.split('_') }));
let LocaleService = class LocaleService {
    /**
    * @constructor
    * @param {string} defaultLocale
    * @param {TranslateService} translateService
    */
    constructor(defaultLocale, translateService) {
        this.defaultLocale = defaultLocale;
        this.translateService = translateService;
        this.localeChangeObserver = new ReplaySubject();
    }
    /**
    * Set locale
    * @param {string} locale
    * @return {void}
    */
    set locale(locale) {
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
    }
    /**
    * Get locale
    * @return {string}
    */
    get locale() {
        return this._locale || localStorage.getItem('locale') || this.defaultLocale;
    }
};
LocaleService.ctorParameters = () => [
    { type: String, decorators: [{ type: Optional }, { type: Inject, args: [DEFAULT_LOCALE,] }] },
    { type: TranslateService }
];
LocaleService = tslib_1.__decorate([
    Injectable(),
    tslib_1.__param(0, Optional()), tslib_1.__param(0, Inject(DEFAULT_LOCALE)),
    tslib_1.__metadata("design:paramtypes", [String, TranslateService])
], LocaleService);
export { LocaleService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNvcmUvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvbG9jYWxlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3JDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZELE9BQU8sTUFBTSxNQUFNLGlCQUFpQixDQUFDO0FBQ3JDLE9BQU8sS0FBSyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFdkMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXBELE1BQU0sQ0FBQyxZQUFZLENBQUUsSUFBSSxvQkFDckIsRUFBRSxJQUNMLE1BQU0sRUFBRyxvR0FBb0csQ0FBQyxLQUFLLENBQUUsR0FBRyxDQUFFLEVBQzFILFFBQVEsRUFBRSx3REFBd0QsQ0FBQyxLQUFLLENBQUUsR0FBRyxDQUFFLElBQzdFLENBQUM7QUFHSixJQUFhLGFBQWEsR0FBMUIsTUFBYSxhQUFhO0lBS3pCOzs7O01BSUU7SUFDRixZQUNnRCxhQUFxQixFQUM1RCxnQkFBa0M7UUFESyxrQkFBYSxHQUFiLGFBQWEsQ0FBUTtRQUM1RCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBVHBDLHlCQUFvQixHQUF1QixJQUFJLGFBQWEsRUFBVSxDQUFDO0lBVTNFLENBQUM7SUFFSjs7OztNQUlFO0lBQ0YsSUFBSSxNQUFNLENBQUUsTUFBYztRQUN6QixJQUFLLENBQUMsTUFBTTtZQUFHLE9BQU87UUFFdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7UUFFdEIsZUFBZTtRQUNmLFlBQVksQ0FBQyxPQUFPLENBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBRSxDQUFDO1FBRXBELHNCQUFzQjtRQUN0QixNQUFNLENBQUMsTUFBTSxDQUFFLE1BQU0sQ0FBRSxDQUFDO1FBRXhCLDJGQUEyRjtRQUMzRixJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFFLE1BQU0sQ0FBQyxTQUFTLENBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBRSxDQUFDLFdBQVcsRUFBRSxDQUFFLENBQUMsU0FBUyxFQUFFLENBQUM7UUFFaEYseUJBQXlCO1FBQ3pCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUUsTUFBTSxDQUFFLENBQUM7SUFDMUMsQ0FBQztJQUVEOzs7TUFHRTtJQUNGLElBQUksTUFBTTtRQUNULE9BQU8sSUFBSSxDQUFDLE9BQU8sSUFBSSxZQUFZLENBQUMsT0FBTyxDQUFFLFFBQVEsQ0FBRSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDL0UsQ0FBQztDQUVELENBQUE7O3lDQW5DRSxRQUFRLFlBQUksTUFBTSxTQUFFLGNBQWM7WUFDVCxnQkFBZ0I7O0FBWi9CLGFBQWE7SUFEekIsVUFBVSxFQUFFO0lBWVYsbUJBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxtQkFBQSxNQUFNLENBQUUsY0FBYyxDQUFFLENBQUE7cURBQ1gsZ0JBQWdCO0dBWi9CLGFBQWEsQ0E4Q3pCO1NBOUNZLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXBsYXlTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudC10aW1lem9uZSc7XG5pbXBvcnQgKiBhcyB2aSBmcm9tICdtb21lbnQvbG9jYWxlL3ZpJztcblxuaW1wb3J0IHsgREVGQVVMVF9MT0NBTEUgfSBmcm9tICcuLi9pbmplY3Rpb24tdG9rZW4nO1xuXG5tb21lbnQuZGVmaW5lTG9jYWxlKCAndmknLCB7XG5cdC4uLnZpLFxuXHRtb250aHNcdDogJ1Row6FuZyAxX1Row6FuZyAyX1Row6FuZyAzX1Row6FuZyA0X1Row6FuZyA1X1Row6FuZyA2X1Row6FuZyA3X1Row6FuZyA4X1Row6FuZyA5X1Row6FuZyAxMF9UaMOhbmcgMTFfVGjDoW5nIDEyJy5zcGxpdCggJ18nICksXG5cdHdlZWtkYXlzOiAnQ2jhu6cgbmjhuq10X1Ro4bupIGhhaV9UaOG7qSBiYV9UaOG7qSB0xrBfVGjhu6kgbsSDbV9UaOG7qSBzw6F1X1Ro4bupIGLhuqN5Jy5zcGxpdCggJ18nICksXG59ICk7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2NhbGVTZXJ2aWNlIHtcblxuXHRwcml2YXRlIF9sb2NhbGU6IHN0cmluZztcblx0cHVibGljIGxvY2FsZUNoYW5nZU9ic2VydmVyOiBSZXBsYXlTdWJqZWN0PGFueT4gPSBuZXcgUmVwbGF5U3ViamVjdDxzdHJpbmc+KCk7XG5cblx0LyoqXG5cdCogQGNvbnN0cnVjdG9yXG5cdCogQHBhcmFtIHtzdHJpbmd9IGRlZmF1bHRMb2NhbGVcblx0KiBAcGFyYW0ge1RyYW5zbGF0ZVNlcnZpY2V9IHRyYW5zbGF0ZVNlcnZpY2Vcblx0Ki9cblx0Y29uc3RydWN0b3IoXG5cdFx0QE9wdGlvbmFsKCkgQEluamVjdCggREVGQVVMVF9MT0NBTEUgKSByZWFkb25seSBkZWZhdWx0TG9jYWxlOiBzdHJpbmcsXG5cdFx0cHJpdmF0ZSB0cmFuc2xhdGVTZXJ2aWNlOiBUcmFuc2xhdGVTZXJ2aWNlXG5cdCkge31cblxuXHQvKipcblx0KiBTZXQgbG9jYWxlXG5cdCogQHBhcmFtIHtzdHJpbmd9IGxvY2FsZVxuXHQqIEByZXR1cm4ge3ZvaWR9XG5cdCovXG5cdHNldCBsb2NhbGUoIGxvY2FsZTogc3RyaW5nICkge1xuXHRcdGlmICggIWxvY2FsZSApIHJldHVybjtcblxuXHRcdHRoaXMuX2xvY2FsZSA9IGxvY2FsZTtcblxuXHRcdC8vIFN0b3JlIGxvY2FsZVxuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCAnbG9jYWxlJywgbG9jYWxlLnRvU3RyaW5nKCkgKTtcblxuXHRcdC8vIFNldCBtb21lbnQgbGFuZ3VhZ2Vcblx0XHRtb21lbnQubG9jYWxlKCBsb2NhbGUgKTtcblxuXHRcdC8vIFRoZSBsYW5nIHRvIHVzZSwgaWYgdGhlIGxhbmcgaXNuJ3QgYXZhaWxhYmxlLCBpdCB3aWxsIHVzZSB0aGUgY3VycmVudCBsb2FkZXIgdG8gZ2V0IHRoZW1cblx0XHR0aGlzLnRyYW5zbGF0ZVNlcnZpY2UudXNlKCBsb2NhbGUuc3Vic3RyaW5nKCAwLCAyICkudG9Mb3dlckNhc2UoKSApLnN1YnNjcmliZSgpO1xuXG5cdFx0Ly8gVHJpZ2dlciBsb2NhbGUgY2hhbmdlZFxuXHRcdHRoaXMubG9jYWxlQ2hhbmdlT2JzZXJ2ZXIubmV4dCggbG9jYWxlICk7XG5cdH1cblxuXHQvKipcblx0KiBHZXQgbG9jYWxlXG5cdCogQHJldHVybiB7c3RyaW5nfVxuXHQqL1xuXHRnZXQgbG9jYWxlKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMuX2xvY2FsZSB8fCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSggJ2xvY2FsZScgKSB8fCB0aGlzLmRlZmF1bHRMb2NhbGU7XG5cdH1cblxufVxuIl19