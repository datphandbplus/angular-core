import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
var SafeHtmlPipe = /** @class */ (function () {
    /**
    * @constructor
    * @param {DomSanitizer} sanitized
    */
    function SafeHtmlPipe(sanitized) {
        this.sanitized = sanitized;
    }
    /**
    * Transform
    * @param {string} value
    * @return {SafeHtml}
    */
    SafeHtmlPipe.prototype.transform = function (value) {
        return value ? this.sanitized.bypassSecurityTrustHtml(value) : '';
    };
    SafeHtmlPipe.ctorParameters = function () { return [
        { type: DomSanitizer }
    ]; };
    SafeHtmlPipe = tslib_1.__decorate([
        Pipe({ name: 'safeHtml' }),
        tslib_1.__metadata("design:paramtypes", [DomSanitizer])
    ], SafeHtmlPipe);
    return SafeHtmlPipe;
}());
export { SafeHtmlPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FmZS1odG1sLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNvcmUvIiwic291cmNlcyI6WyJsaWIvcGlwZXMvc2FmZS1odG1sLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFHbkU7SUFFQzs7O01BR0U7SUFDRixzQkFBcUIsU0FBdUI7UUFBdkIsY0FBUyxHQUFULFNBQVMsQ0FBYztJQUFJLENBQUM7SUFFakQ7Ozs7TUFJRTtJQUNLLGdDQUFTLEdBQWhCLFVBQWtCLEtBQWE7UUFDOUIsT0FBTyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsdUJBQXVCLENBQUUsS0FBSyxDQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNyRSxDQUFDOztnQkFUK0IsWUFBWTs7SUFOaEMsWUFBWTtRQUR4QixJQUFJLENBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLENBQUU7aURBT0ksWUFBWTtPQU5oQyxZQUFZLENBaUJ4QjtJQUFELG1CQUFDO0NBQUEsQUFqQkQsSUFpQkM7U0FqQlksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciwgU2FmZUh0bWwgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuQFBpcGUoIHsgbmFtZTogJ3NhZmVIdG1sJyB9IClcbmV4cG9ydCBjbGFzcyBTYWZlSHRtbFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuXHQvKipcblx0KiBAY29uc3RydWN0b3Jcblx0KiBAcGFyYW0ge0RvbVNhbml0aXplcn0gc2FuaXRpemVkXG5cdCovXG5cdGNvbnN0cnVjdG9yKCBwcml2YXRlIHNhbml0aXplZDogRG9tU2FuaXRpemVyICkge31cblxuXHQvKipcblx0KiBUcmFuc2Zvcm1cblx0KiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcblx0KiBAcmV0dXJuIHtTYWZlSHRtbH1cblx0Ki9cblx0cHVibGljIHRyYW5zZm9ybSggdmFsdWU6IHN0cmluZyApOiBTYWZlSHRtbCB7XG5cdFx0cmV0dXJuIHZhbHVlID8gdGhpcy5zYW5pdGl6ZWQuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwoIHZhbHVlICkgOiAnJztcblx0fVxuXG59XG4iXX0=