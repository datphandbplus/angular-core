import * as tslib_1 from "tslib";
import { Injectable, Inject, Optional } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ReplaySubject } from 'rxjs';
import { DEFAULT_APP_NAME } from '../injection-token';
let PageService = class PageService {
    /**
    * @constructor
    * @param {string} defaultAppName
    * @param {Title} titleService
    */
    constructor(defaultAppName, titleService) {
        this.defaultAppName = defaultAppName;
        this.titleService = titleService;
        this.titleChangeObserver = new ReplaySubject();
        this.processChangeObserver = new ReplaySubject();
    }
    /**
    * Set title
    * @param {string} title
    * @param {string} prefix
    * @return {void}
    */
    setTitle(title, prefix = this.defaultAppName) {
        this.titleService.setTitle(prefix + ' - ' + title);
        this.titleChangeObserver.next(title);
    }
    /**
    * Get title
    * @return {string}
    */
    getTitle() {
        return this.titleService.getTitle();
    }
    /**
    * On process change event
    * @param {boolean} isProcessing
    * @return {void}
    */
    setProcessing(isProcessing) {
        isProcessing
            ? this.processChangeObserver.next(true)
            : setTimeout(() => this.processChangeObserver.next(false), 1000);
    }
    /**
    * On title change event
    * @return {ReplaySubject}
    */
    get title() {
        return this.titleChangeObserver;
    }
    /**
    * On processing change event
    * @return {ReplaySubject}
    */
    get processing() {
        return this.processChangeObserver;
    }
};
PageService.ctorParameters = () => [
    { type: String, decorators: [{ type: Optional }, { type: Inject, args: [DEFAULT_APP_NAME,] }] },
    { type: Title }
];
PageService = tslib_1.__decorate([
    Injectable(),
    tslib_1.__param(0, Optional()), tslib_1.__param(0, Inject(DEFAULT_APP_NAME)),
    tslib_1.__metadata("design:paramtypes", [String, Title])
], PageService);
export { PageService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1jb3JlLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3BhZ2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRXJDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBR3RELElBQWEsV0FBVyxHQUF4QixNQUFhLFdBQVc7SUFLdkI7Ozs7TUFJRTtJQUNGLFlBQ2tELGNBQXNCLEVBQy9ELFlBQW1CO1FBRHNCLG1CQUFjLEdBQWQsY0FBYyxDQUFRO1FBQy9ELGlCQUFZLEdBQVosWUFBWSxDQUFPO1FBVnBCLHdCQUFtQixHQUF1QixJQUFJLGFBQWEsRUFBVSxDQUFDO1FBQ3RFLDBCQUFxQixHQUEyQixJQUFJLGFBQWEsRUFBVyxDQUFDO0lBVWxGLENBQUM7SUFFSjs7Ozs7TUFLRTtJQUNLLFFBQVEsQ0FBRSxLQUFhLEVBQUUsU0FBaUIsSUFBSSxDQUFDLGNBQWM7UUFDbkUsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUUsTUFBTSxHQUFHLEtBQUssR0FBRyxLQUFLLENBQUUsQ0FBQztRQUNyRCxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFFLEtBQUssQ0FBRSxDQUFDO0lBQ3hDLENBQUM7SUFFRDs7O01BR0U7SUFDSyxRQUFRO1FBQ2QsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3JDLENBQUM7SUFFRDs7OztNQUlFO0lBQ0ssYUFBYSxDQUFFLFlBQXFCO1FBQzFDLFlBQVk7WUFDWCxDQUFDLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBRSxJQUFJLENBQUU7WUFDekMsQ0FBQyxDQUFDLFVBQVUsQ0FBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFFLEtBQUssQ0FBRSxFQUFFLElBQUksQ0FBRSxDQUFDO0lBQ3ZFLENBQUM7SUFFRDs7O01BR0U7SUFDRixJQUFJLEtBQUs7UUFDUixPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztJQUNqQyxDQUFDO0lBRUQ7OztNQUdFO0lBQ0YsSUFBSSxVQUFVO1FBQ2IsT0FBTyxJQUFJLENBQUMscUJBQXFCLENBQUM7SUFDbkMsQ0FBQztDQUVELENBQUE7O3lDQWxERSxRQUFRLFlBQUksTUFBTSxTQUFFLGdCQUFnQjtZQUNmLEtBQUs7O0FBWmhCLFdBQVc7SUFEdkIsVUFBVSxFQUFFO0lBWVYsbUJBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxtQkFBQSxNQUFNLENBQUUsZ0JBQWdCLENBQUUsQ0FBQTtxREFDakIsS0FBSztHQVpoQixXQUFXLENBNkR2QjtTQTdEWSxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0LCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGl0bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IFJlcGxheVN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgREVGQVVMVF9BUFBfTkFNRSB9IGZyb20gJy4uL2luamVjdGlvbi10b2tlbic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQYWdlU2VydmljZSB7XG5cblx0cHJpdmF0ZSB0aXRsZUNoYW5nZU9ic2VydmVyOiBSZXBsYXlTdWJqZWN0PGFueT4gPSBuZXcgUmVwbGF5U3ViamVjdDxzdHJpbmc+KCk7XG5cdHByaXZhdGUgcHJvY2Vzc0NoYW5nZU9ic2VydmVyOiBSZXBsYXlTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IFJlcGxheVN1YmplY3Q8Ym9vbGVhbj4oKTtcblxuXHQvKipcblx0KiBAY29uc3RydWN0b3Jcblx0KiBAcGFyYW0ge3N0cmluZ30gZGVmYXVsdEFwcE5hbWVcblx0KiBAcGFyYW0ge1RpdGxlfSB0aXRsZVNlcnZpY2Vcblx0Ki9cblx0Y29uc3RydWN0b3IoXG5cdFx0QE9wdGlvbmFsKCkgQEluamVjdCggREVGQVVMVF9BUFBfTkFNRSApIHJlYWRvbmx5IGRlZmF1bHRBcHBOYW1lOiBzdHJpbmcsXG5cdFx0cHJpdmF0ZSB0aXRsZVNlcnZpY2U6IFRpdGxlXG5cdCkge31cblxuXHQvKipcblx0KiBTZXQgdGl0bGVcblx0KiBAcGFyYW0ge3N0cmluZ30gdGl0bGVcblx0KiBAcGFyYW0ge3N0cmluZ30gcHJlZml4XG5cdCogQHJldHVybiB7dm9pZH1cblx0Ki9cblx0cHVibGljIHNldFRpdGxlKCB0aXRsZTogc3RyaW5nLCBwcmVmaXg6IHN0cmluZyA9IHRoaXMuZGVmYXVsdEFwcE5hbWUgKSB7XG5cdFx0dGhpcy50aXRsZVNlcnZpY2Uuc2V0VGl0bGUoIHByZWZpeCArICcgLSAnICsgdGl0bGUgKTtcblx0XHR0aGlzLnRpdGxlQ2hhbmdlT2JzZXJ2ZXIubmV4dCggdGl0bGUgKTtcblx0fVxuXG5cdC8qKlxuXHQqIEdldCB0aXRsZVxuXHQqIEByZXR1cm4ge3N0cmluZ31cblx0Ki9cblx0cHVibGljIGdldFRpdGxlKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMudGl0bGVTZXJ2aWNlLmdldFRpdGxlKCk7XG5cdH1cblxuXHQvKipcblx0KiBPbiBwcm9jZXNzIGNoYW5nZSBldmVudFxuXHQqIEBwYXJhbSB7Ym9vbGVhbn0gaXNQcm9jZXNzaW5nXG5cdCogQHJldHVybiB7dm9pZH1cblx0Ki9cblx0cHVibGljIHNldFByb2Nlc3NpbmcoIGlzUHJvY2Vzc2luZzogYm9vbGVhbiApIHtcblx0XHRpc1Byb2Nlc3Npbmdcblx0XHRcdD8gdGhpcy5wcm9jZXNzQ2hhbmdlT2JzZXJ2ZXIubmV4dCggdHJ1ZSApXG5cdFx0XHQ6IHNldFRpbWVvdXQoICgpID0+IHRoaXMucHJvY2Vzc0NoYW5nZU9ic2VydmVyLm5leHQoIGZhbHNlICksIDEwMDAgKTtcblx0fVxuXG5cdC8qKlxuXHQqIE9uIHRpdGxlIGNoYW5nZSBldmVudFxuXHQqIEByZXR1cm4ge1JlcGxheVN1YmplY3R9XG5cdCovXG5cdGdldCB0aXRsZSgpOiBSZXBsYXlTdWJqZWN0PHN0cmluZz4ge1xuXHRcdHJldHVybiB0aGlzLnRpdGxlQ2hhbmdlT2JzZXJ2ZXI7XG5cdH1cblxuXHQvKipcblx0KiBPbiBwcm9jZXNzaW5nIGNoYW5nZSBldmVudFxuXHQqIEByZXR1cm4ge1JlcGxheVN1YmplY3R9XG5cdCovXG5cdGdldCBwcm9jZXNzaW5nKCk6IFJlcGxheVN1YmplY3Q8Ym9vbGVhbj4ge1xuXHRcdHJldHVybiB0aGlzLnByb2Nlc3NDaGFuZ2VPYnNlcnZlcjtcblx0fVxuXG59XG4iXX0=