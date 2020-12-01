import * as tslib_1 from "tslib";
import { Input, Component, Optional, Inject, InjectionToken } from '@angular/core';
import _ from 'underscore';
export var AVATAR_BOX_DEFAULT_OPTIONS = new InjectionToken('defaultOptions');
var AvatarBoxComponent = /** @class */ (function () {
    /**
    * @constructor
    * @param {any} defaultOptions
    */
    function AvatarBoxComponent(defaultOptions) {
        this.defaultOptions = defaultOptions;
        this.defaultAvatar = (this.defaultOptions || {}).defaultAvatar;
        this.titleLength = (this.defaultOptions || {}).titleLength || 2;
        this.size = (this.defaultOptions || {}).size || 44;
        this.rounded = (this.defaultOptions || {}).rounded !== undefined
            ? (this.defaultOptions || {}).rounded
            : false;
        this.lazy = (this.defaultOptions || {}).lazy !== undefined
            ? (this.defaultOptions || {}).lazy
            : true;
    }
    Object.defineProperty(AvatarBoxComponent.prototype, "avatarBackground", {
        /**
        * Get avatar background
        * @return {string}
        */
        get: function () {
            if (this._background)
                return this._background;
            var n = this.unique ? +this.unique.toString()[this.unique.toString().length - 1] : 1;
            var rand1 = Math.floor((Math.random() * (254 - n)) + 1);
            var rand2 = Math.floor((Math.random() * (254 - n)) + 1);
            var rand3 = Math.floor((Math.random() * (254 - n)) + 1);
            this._background = "rgb(" + rand1 + ", " + rand2 + ", " + rand3 + ")";
            return this._background;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AvatarBoxComponent.prototype, "avatarTitle", {
        /**
        * Get avatar title
        * @return {string}
        */
        get: function () {
            if (!this.title)
                return '';
            var title = this.title.trim();
            if (this.titleLength === 1)
                return title.charAt(0).toUpperCase();
            return title.search(' ') === -1
                ? title.substring(0, this.titleLength)
                : _.map(title.split(' ').slice(0, this.titleLength), function (item) { return item.charAt(0); }).join('');
        },
        enumerable: true,
        configurable: true
    });
    AvatarBoxComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [AVATAR_BOX_DEFAULT_OPTIONS,] }] }
    ]; };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], AvatarBoxComponent.prototype, "source", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], AvatarBoxComponent.prototype, "unique", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], AvatarBoxComponent.prototype, "title", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], AvatarBoxComponent.prototype, "defaultAvatar", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], AvatarBoxComponent.prototype, "titleLength", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], AvatarBoxComponent.prototype, "size", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], AvatarBoxComponent.prototype, "rounded", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], AvatarBoxComponent.prototype, "lazy", void 0);
    AvatarBoxComponent = tslib_1.__decorate([
        Component({
            selector: 'avatar-box',
            template: "<div class=\"avatar-box\" [ngClass]=\"defaultOptions?.componentClass\" [style.width]=\"size + &quot;px&quot;\" [style.maxWidth]=\"size + &quot;px&quot;\" [style.minWidth]=\"size + &quot;px&quot;\" [style.height]=\"size + &quot;px&quot;\" [style.maxHeight]=\"size + &quot;px&quot;\" [style.minHeight]=\"size + &quot;px&quot;\" [class.rounded]=\"rounded\" [class.no-avatar]=\"!source &amp;&amp; !defaultAvatar\" [style.backgroundColor]=\"!source &amp;&amp; !defaultAvatar &amp;&amp; avatarBackground\"><ng-template [ngIf]=\"source || defaultAvatar\"><img *ngIf=\"lazy\" [defaultImage]=\"defaultAvatar\" [lazyLoad]=\"source || defaultAvatar\"><img *ngIf=\"!lazy\" [attr.src]=\"source | image: defaultAvatar | async\"></ng-template><span *ngIf=\"!source &amp;&amp; !defaultAvatar\" [style.fontSize]=\"( size / ( titleLength * 1.5 ) ) + &quot;px&quot;\" [style.lineHeight]=\"( size / ( titleLength * 1.5 ) ) + &quot;px&quot;\">{{ avatarTitle }}</span></div>"
        }),
        tslib_1.__param(0, Optional()), tslib_1.__param(0, Inject(AVATAR_BOX_DEFAULT_OPTIONS)),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], AvatarBoxComponent);
    return AvatarBoxComponent;
}());
export { AvatarBoxComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXZhdGFyLWJveC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNvcmUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9hdmF0YXItYm94L2F2YXRhci1ib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ04sS0FBSyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQzFCLE1BQU0sRUFBRSxjQUFjLEVBQ3RCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sQ0FBQyxNQUFNLFlBQVksQ0FBQztBQUUzQixNQUFNLENBQUMsSUFBTSwwQkFBMEIsR0FBd0IsSUFBSSxjQUFjLENBQU8sZ0JBQWdCLENBQUUsQ0FBQztBQU0zRztJQWlCQzs7O01BR0U7SUFDRiw0QkFBd0UsY0FBbUI7UUFBbkIsbUJBQWMsR0FBZCxjQUFjLENBQUs7UUFoQjNFLGtCQUFhLEdBQVcsQ0FBRSxJQUFJLENBQUMsY0FBYyxJQUFJLEVBQUUsQ0FBRSxDQUFDLGFBQWEsQ0FBQztRQUNwRSxnQkFBVyxHQUFXLENBQUUsSUFBSSxDQUFDLGNBQWMsSUFBSSxFQUFFLENBQUUsQ0FBQyxXQUFXLElBQUksQ0FBQyxDQUFDO1FBQ3JFLFNBQUksR0FBVyxDQUFFLElBQUksQ0FBQyxjQUFjLElBQUksRUFBRSxDQUFFLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUN4RCxZQUFPLEdBQVksQ0FBRSxJQUFJLENBQUMsY0FBYyxJQUFJLEVBQUUsQ0FBRSxDQUFDLE9BQU8sS0FBSyxTQUFTO1lBQ3JGLENBQUMsQ0FBQyxDQUFFLElBQUksQ0FBQyxjQUFjLElBQUksRUFBRSxDQUFFLENBQUMsT0FBTztZQUN2QyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ08sU0FBSSxHQUFZLENBQUUsSUFBSSxDQUFDLGNBQWMsSUFBSSxFQUFFLENBQUUsQ0FBQyxJQUFJLEtBQUssU0FBUztZQUMvRSxDQUFDLENBQUMsQ0FBRSxJQUFJLENBQUMsY0FBYyxJQUFJ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T0FyQmxELGtCQUFrQixDQTJEOUI7SUFBRCx5QkFBQztDQUFBLEFBM0RELElBMkRDO1NBM0RZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdElucHV0LCBDb21wb25lbnQsIE9wdGlvbmFsLFxuXHRJbmplY3QsIEluamVjdGlvblRva2VuXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IF8gZnJvbSAndW5kZXJzY29yZSc7XG5cbmV4cG9ydCBjb25zdCBBVkFUQVJfQk9YX0RFRkFVTFRfT1BUSU9OUzogSW5qZWN0aW9uVG9rZW48YW55PiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxhbnk+KCAnZGVmYXVsdE9wdGlvbnMnICk7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3Rvclx0OiAnYXZhdGFyLWJveCcsXG5cdHRlbXBsYXRlVXJsXHQ6ICcuL2F2YXRhci1ib3gucHVnJyxcbn0pXG5leHBvcnQgY2xhc3MgQXZhdGFyQm94Q29tcG9uZW50IHtcblxuXHRASW5wdXQoKSBwdWJsaWMgc291cmNlOiBzdHJpbmc7XG5cdEBJbnB1dCgpIHB1YmxpYyB1bmlxdWU6IG51bWJlcjtcblx0QElucHV0KCkgcHVibGljIHRpdGxlOiBzdHJpbmc7XG5cdEBJbnB1dCgpIHB1YmxpYyBkZWZhdWx0QXZhdGFyOiBzdHJpbmcgPSAoIHRoaXMuZGVmYXVsdE9wdGlvbnMgfHwge30gKS5kZWZhdWx0QXZhdGFyO1xuXHRASW5wdXQoKSBwdWJsaWMgdGl0bGVMZW5ndGg6IG51bWJlciA9ICggdGhpcy5kZWZhdWx0T3B0aW9ucyB8fCB7fSApLnRpdGxlTGVuZ3RoIHx8IDI7XG5cdEBJbnB1dCgpIHB1YmxpYyBzaXplOiBudW1iZXIgPSAoIHRoaXMuZGVmYXVsdE9wdGlvbnMgfHwge30gKS5zaXplIHx8IDQ0O1xuXHRASW5wdXQoKSBwdWJsaWMgcm91bmRlZDogYm9vbGVhbiA9ICggdGhpcy5kZWZhdWx0T3B0aW9ucyB8fCB7fSApLnJvdW5kZWQgIT09IHVuZGVmaW5lZFxuXHRcdD8gKCB0aGlzLmRlZmF1bHRPcHRpb25zIHx8IHt9ICkucm91bmRlZFxuXHRcdDogZmFsc2U7XG5cdEBJbnB1dCgpIHB1YmxpYyBsYXp5OiBib29sZWFuID0gKCB0aGlzLmRlZmF1bHRPcHRpb25zIHx8IHt9ICkubGF6eSAhPT0gdW5kZWZpbmVkXG5cdFx0PyAoIHRoaXMuZGVmYXVsdE9wdGlvbnMgfHwge30gKS5sYXp5XG5cdFx0OiB0cnVlO1xuXG5cdHByaXZhdGUgX2JhY2tncm91bmQ6IHN0cmluZztcblxuXHQvKipcblx0KiBAY29uc3RydWN0b3Jcblx0KiBAcGFyYW0ge2FueX0gZGVmYXVsdE9wdGlvbnNcblx0Ki9cblx0Y29uc3RydWN0b3IoIEBPcHRpb25hbCgpIEBJbmplY3QoIEFWQVRBUl9CT1hfREVGQVVMVF9PUFRJT05TICkgcmVhZG9ubHkgZGVmYXVsdE9wdGlvbnM6IGFueSApIHt9XG5cblx0LyoqXG5cdCogR2V0IGF2YXRhciBiYWNrZ3JvdW5kXG5cdCogQHJldHVybiB7c3RyaW5nfVxuXHQqL1xuXHRwdWJsaWMgZ2V0IGF2YXRhckJhY2tncm91bmQoKTogc3RyaW5nIHtcblx0XHRpZiAoIHRoaXMuX2JhY2tncm91bmQgKSByZXR1cm4gdGhpcy5fYmFja2dyb3VuZDtcblxuXHRcdGNvbnN0IG46IG51bWJlciA9IHRoaXMudW5pcXVlID8gK3RoaXMudW5pcXVlLnRvU3RyaW5nKClbIHRoaXMudW5pcXVlLnRvU3RyaW5nKCkubGVuZ3RoIC0gMSBdIDogMTtcblx0XHRjb25zdCByYW5kMTogbnVtYmVyID0gTWF0aC5mbG9vciggKCBNYXRoLnJhbmRvbSgpICogKCAyNTQgLSBuICkgKSArIDEgKTtcblx0XHRjb25zdCByYW5kMjogbnVtYmVyID0gTWF0aC5mbG9vciggKCBNYXRoLnJhbmRvbSgpICogKCAyNTQgLSBuICkgKSArIDEgKTtcblx0XHRjb25zdCByYW5kMzogbnVtYmVyID0gTWF0aC5mbG9vciggKCBNYXRoLnJhbmRvbSgpICogKCAyNTQgLSBuICkgKSArIDEgKTtcblxuXHRcdHRoaXMuX2JhY2tncm91bmQgPSBgcmdiKCR7cmFuZDF9LCAke3JhbmQyfSwgJHtyYW5kM30pYDtcblxuXHRcdHJldHVybiB0aGlzLl9iYWNrZ3JvdW5kO1xuXHR9XG5cblx0LyoqXG5cdCogR2V0IGF2YXRhciB0aXRsZVxuXHQqIEByZXR1cm4ge3N0cmluZ31cblx0Ki9cblx0cHVibGljIGdldCBhdmF0YXJUaXRsZSgpOiBzdHJpbmcge1xuXHRcdGlmICggIXRoaXMudGl0bGUgKSByZXR1cm4gJyc7XG5cblx0XHRjb25zdCB0aXRsZTogc3RyaW5nID0gdGhpcy50aXRsZS50cmltKCk7XG5cblx0XHRpZiAoIHRoaXMudGl0bGVMZW5ndGggPT09IDEgKSByZXR1cm4gdGl0bGUuY2hhckF0KCAwICkudG9VcHBlckNhc2UoKTtcblxuXHRcdHJldHVybiB0aXRsZS5zZWFyY2goICcgJyApID09PSAtMVxuXHRcdFx0PyB0aXRsZS5zdWJzdHJpbmcoIDAsIHRoaXMudGl0bGVMZW5ndGggKVxuXHRcdFx0OiBfLm1hcChcblx0XHRcdFx0dGl0bGUuc3BsaXQoICcgJyApLnNsaWNlKCAwLCB0aGlzLnRpdGxlTGVuZ3RoICksXG5cdFx0XHRcdCggaXRlbTogc3RyaW5nICkgPT4gaXRlbS5jaGFyQXQoIDAgKVxuXHRcdFx0KS5qb2luKCAnJyApO1xuXHR9XG5cbn1cbiJdfQ==