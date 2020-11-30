import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
let SafeHtmlPipe = class SafeHtmlPipe {
    /**
    * @constructor
    * @param {DomSanitizer} sanitized
    */
    constructor(sanitized) {
        this.sanitized = sanitized;
    }
    /**
    * Transform
    * @param {string} value
    * @return {SafeHtml}
    */
    transform(value) {
        return value ? this.sanitized.bypassSecurityTrustHtml(value) : '';
    }
};
SafeHtmlPipe.ctorParameters = () => [
    { type: DomSanitizer }
];
SafeHtmlPipe = tslib_1.__decorate([
    Pipe({ name: 'safeHtml' }),
    tslib_1.__metadata("design:paramtypes", [DomSanitizer])
], SafeHtmlPipe);
export { SafeHtmlPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FmZS1odG1sLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNvcmUvIiwic291cmNlcyI6WyJsaWIvcGlwZXMvc2FmZS1odG1sLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFHbkUsSUFBYSxZQUFZLEdBQXpCLE1BQWEsWUFBWTtJQUV4Qjs7O01BR0U7SUFDRixZQUFxQixTQUF1QjtRQUF2QixjQUFTLEdBQVQsU0FBUyxDQUFjO0lBQUksQ0FBQztJQUVqRDs7OztNQUlFO0lBQ0ssU0FBUyxDQUFFLEtBQWE7UUFDOUIsT0FBTyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsdUJBQXVCLENBQUUsS0FBSyxDQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNyRSxDQUFDO0NBRUQsQ0FBQTs7WUFYZ0MsWUFBWTs7QUFOaEMsWUFBWTtJQUR4QixJQUFJLENBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLENBQUU7NkNBT0ksWUFBWTtHQU5oQyxZQUFZLENBaUJ4QjtTQWpCWSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlSHRtbCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5AUGlwZSggeyBuYW1lOiAnc2FmZUh0bWwnIH0gKVxuZXhwb3J0IGNsYXNzIFNhZmVIdG1sUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG5cdC8qKlxuXHQqIEBjb25zdHJ1Y3RvclxuXHQqIEBwYXJhbSB7RG9tU2FuaXRpemVyfSBzYW5pdGl6ZWRcblx0Ki9cblx0Y29uc3RydWN0b3IoIHByaXZhdGUgc2FuaXRpemVkOiBEb21TYW5pdGl6ZXIgKSB7fVxuXG5cdC8qKlxuXHQqIFRyYW5zZm9ybVxuXHQqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuXHQqIEByZXR1cm4ge1NhZmVIdG1sfVxuXHQqL1xuXHRwdWJsaWMgdHJhbnNmb3JtKCB2YWx1ZTogc3RyaW5nICk6IFNhZmVIdG1sIHtcblx0XHRyZXR1cm4gdmFsdWUgPyB0aGlzLnNhbml0aXplZC5ieXBhc3NTZWN1cml0eVRydXN0SHRtbCggdmFsdWUgKSA6ICcnO1xuXHR9XG5cbn1cbiJdfQ==