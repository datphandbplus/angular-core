import * as tslib_1 from "tslib";
import { Injectable, Inject, Optional } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ReplaySubject } from 'rxjs';
import { DEFAULT_APP_NAME } from '../injection-token';
var PageService = /** @class */ (function () {
    /**
    * @constructor
    * @param {string} defaultAppName
    * @param {Title} titleService
    */
    function PageService(defaultAppName, titleService) {
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
    PageService.prototype.setTitle = function (title, prefix) {
        if (prefix === void 0) { prefix = this.defaultAppName; }
        this.titleService.setTitle(prefix + ' - ' + title);
        this.titleChangeObserver.next(title);
    };
    /**
    * Get title
    * @return {string}
    */
    PageService.prototype.getTitle = function () {
        return this.titleService.getTitle();
    };
    /**
    * On process change event
    * @param {boolean} isProcessing
    * @return {void}
    */
    PageService.prototype.setProcessing = function (isProcessing) {
        var _this = this;
        isProcessing
            ? this.processChangeObserver.next(true)
            : setTimeout(function () { return _this.processChangeObserver.next(false); }, 1000);
    };
    Object.defineProperty(PageService.prototype, "title", {
        /**
        * On title change event
        * @return {ReplaySubject}
        */
        get: function () {
            return this.titleChangeObserver;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageService.prototype, "processing", {
        /**
        * On processing change event
        * @return {ReplaySubject}
        */
        get: function () {
            return this.processChangeObserver;
        },
        enumerable: true,
        configurable: true
    });
    PageService.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Optional }, { type: Inject, args: [DEFAULT_APP_NAME,] }] },
        { type: Title }
    ]; };
    PageService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__param(0, Optional()), tslib_1.__param(0, Inject(DEFAULT_APP_NAME)),
        tslib_1.__metadata("design:paramtypes", [String, Title])
    ], PageService);
    return PageService;
}());
export { PageService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1jb3JlLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3BhZ2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRXJDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBR3REO0lBS0M7Ozs7TUFJRTtJQUNGLHFCQUNrRCxjQUFzQixFQUMvRCxZQUFtQjtRQURzQixtQkFBYyxHQUFkLGNBQWMsQ0FBUTtRQUMvRCxpQkFBWSxHQUFaLFlBQVksQ0FBTztRQVZwQix3QkFBbUIsR0FBdUIsSUFBSSxhQUFhLEVBQVUsQ0FBQztRQUN0RSwwQkFBcUIsR0FBMkIsSUFBSSxhQUFhLEVBQVcsQ0FBQztJQVVsRixDQUFDO0lBRUo7Ozs7O01BS0U7SUFDSyw4QkFBUSxHQUFmLFVBQWlCLEtBQWEsRUFBRSxNQUFvQztRQUFwQyx1QkFBQSxFQUFBLFNBQWlCLElBQUksQ0FBQyxjQUFjO1FBQ25FLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFFLE1BQU0sR0FBRyxLQUFLLEdBQUcsS0FBSyxDQUFFLENBQUM7UUFDckQsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBRSxLQUFLLENBQUUsQ0FBQztJQUN4QyxDQUFDO0lBRUQ7OztNQUdFO0lBQ0ssOEJBQVEsR0FBZjtRQUNDLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBRUQ7Ozs7TUFJRTtJQUNLLG1DQUFhLEdBQXBCLFVBQXNCLFlBQXFCO1FBQTNDLGlCQUlDO1FBSEEsWUFBWTtZQUNYLENBQUMsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFFLElBQUksQ0FBRTtZQUN6QyxDQUFDLENBQUMsVUFBVSxDQUFFLGNBQU0sT0FBQSxLQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFFLEtBQUssQ0FBRSxFQUF4QyxDQUF3QyxFQUFFLElBQUksQ0FBRSxDQUFDO0lBQ3ZFLENBQUM7SUFNRCxzQkFBSSw4QkFBSztRQUpUOzs7VUFHRTthQUNGO1lBQ0MsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUM7UUFDakMsQ0FBQzs7O09BQUE7SUFNRCxzQkFBSSxtQ0FBVTtRQUpkOzs7VUFHRTthQUNGO1lBQ0MsT0FBTyxJQUFJLENBQUMscUJBQXFCLENBQUM7UUFDbkMsQ0FBQzs7O09BQUE7OzZDQWhEQyxRQUFRLFlBQUksTUFBTSxTQUFFLGdCQUFnQjtnQkFDZixLQUFLOztJQVpoQixXQUFXO1FBRHZCLFVBQVUsRUFBRTtRQVlWLG1CQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsbUJBQUEsTUFBTSxDQUFFLGdCQUFnQixDQUFFLENBQUE7eURBQ2pCLEtBQUs7T0FaaEIsV0FBVyxDQTZEdkI7SUFBRCxrQkFBQztDQUFBLEFBN0RELElBNkRDO1NBN0RZLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUaXRsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgUmVwbGF5U3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBERUZBVUxUX0FQUF9OQU1FIH0gZnJvbSAnLi4vaW5qZWN0aW9uLXRva2VuJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBhZ2VTZXJ2aWNlIHtcblxuXHRwcml2YXRlIHRpdGxlQ2hhbmdlT2JzZXJ2ZXI6IFJlcGxheVN1YmplY3Q8YW55PiA9IG5ldyBSZXBsYXlTdWJqZWN0PHN0cmluZz4oKTtcblx0cHJpdmF0ZSBwcm9jZXNzQ2hhbmdlT2JzZXJ2ZXI6IFJlcGxheVN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgUmVwbGF5U3ViamVjdDxib29sZWFuPigpO1xuXG5cdC8qKlxuXHQqIEBjb25zdHJ1Y3RvclxuXHQqIEBwYXJhbSB7c3RyaW5nfSBkZWZhdWx0QXBwTmFtZVxuXHQqIEBwYXJhbSB7VGl0bGV9IHRpdGxlU2VydmljZVxuXHQqL1xuXHRjb25zdHJ1Y3Rvcihcblx0XHRAT3B0aW9uYWwoKSBASW5qZWN0KCBERUZBVUxUX0FQUF9OQU1FICkgcmVhZG9ubHkgZGVmYXVsdEFwcE5hbWU6IHN0cmluZyxcblx0XHRwcml2YXRlIHRpdGxlU2VydmljZTogVGl0bGVcblx0KSB7fVxuXG5cdC8qKlxuXHQqIFNldCB0aXRsZVxuXHQqIEBwYXJhbSB7c3RyaW5nfSB0aXRsZVxuXHQqIEBwYXJhbSB7c3RyaW5nfSBwcmVmaXhcblx0KiBAcmV0dXJuIHt2b2lkfVxuXHQqL1xuXHRwdWJsaWMgc2V0VGl0bGUoIHRpdGxlOiBzdHJpbmcsIHByZWZpeDogc3RyaW5nID0gdGhpcy5kZWZhdWx0QXBwTmFtZSApIHtcblx0XHR0aGlzLnRpdGxlU2VydmljZS5zZXRUaXRsZSggcHJlZml4ICsgJyAtICcgKyB0aXRsZSApO1xuXHRcdHRoaXMudGl0bGVDaGFuZ2VPYnNlcnZlci5uZXh0KCB0aXRsZSApO1xuXHR9XG5cblx0LyoqXG5cdCogR2V0IHRpdGxlXG5cdCogQHJldHVybiB7c3RyaW5nfVxuXHQqL1xuXHRwdWJsaWMgZ2V0VGl0bGUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy50aXRsZVNlcnZpY2UuZ2V0VGl0bGUoKTtcblx0fVxuXG5cdC8qKlxuXHQqIE9uIHByb2Nlc3MgY2hhbmdlIGV2ZW50XG5cdCogQHBhcmFtIHtib29sZWFufSBpc1Byb2Nlc3Npbmdcblx0KiBAcmV0dXJuIHt2b2lkfVxuXHQqL1xuXHRwdWJsaWMgc2V0UHJvY2Vzc2luZyggaXNQcm9jZXNzaW5nOiBib29sZWFuICkge1xuXHRcdGlzUHJvY2Vzc2luZ1xuXHRcdFx0PyB0aGlzLnByb2Nlc3NDaGFuZ2VPYnNlcnZlci5uZXh0KCB0cnVlIClcblx0XHRcdDogc2V0VGltZW91dCggKCkgPT4gdGhpcy5wcm9jZXNzQ2hhbmdlT2JzZXJ2ZXIubmV4dCggZmFsc2UgKSwgMTAwMCApO1xuXHR9XG5cblx0LyoqXG5cdCogT24gdGl0bGUgY2hhbmdlIGV2ZW50XG5cdCogQHJldHVybiB7UmVwbGF5U3ViamVjdH1cblx0Ki9cblx0Z2V0IHRpdGxlKCk6IFJlcGxheVN1YmplY3Q8c3RyaW5nPiB7XG5cdFx0cmV0dXJuIHRoaXMudGl0bGVDaGFuZ2VPYnNlcnZlcjtcblx0fVxuXG5cdC8qKlxuXHQqIE9uIHByb2Nlc3NpbmcgY2hhbmdlIGV2ZW50XG5cdCogQHJldHVybiB7UmVwbGF5U3ViamVjdH1cblx0Ki9cblx0Z2V0IHByb2Nlc3NpbmcoKTogUmVwbGF5U3ViamVjdDxib29sZWFuPiB7XG5cdFx0cmV0dXJuIHRoaXMucHJvY2Vzc0NoYW5nZU9ic2VydmVyO1xuXHR9XG5cbn1cbiJdfQ==