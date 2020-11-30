import * as tslib_1 from "tslib";
import { Input, Component, Optional, Inject, InjectionToken } from '@angular/core';
export var AVATAR_BOX_DEFAULT_OPTIONS = new InjectionToken('defaultOptions');
var AvatarBoxComponent = /** @class */ (function () {
    /**
    * @constructor
    * @param {any} defaultOptions
    */
    function AvatarBoxComponent(defaultOptions) {
        this.defaultOptions = defaultOptions;
        this.defaultAvatar = (this.defaultOptions || {}).defaultAvatar;
        this.lazy = (this.defaultOptions || {}).lazy || true;
        this.size = (this.defaultOptions || {}).size || 44;
        this.displayAvatar = this.defaultAvatar;
    }
    /**
    * @constructor
    * @param {SimpleChanges} changes
    */
    AvatarBoxComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes.source) {
            if (!this.source) {
                this.displayAvatar = this.defaultAvatar;
                return;
            }
            // Create the image
            var imgElement = new Image();
            // When image is loaded, resolve the promise
            imgElement.addEventListener('load', function () {
                _this.displayAvatar = _this.source;
            });
            // When there's an error during load, reject the promise
            imgElement.addEventListener('error', function () {
                _this.displayAvatar = _this.defaultAvatar;
            });
            // Assign URL
            imgElement.src = this.source;
        }
    };
    Object.defineProperty(AvatarBoxComponent.prototype, "avatarBackground", {
        /**
        * Get avatar background
        * @return {string}
        */
        get: function () {
            if (this.displayAvatar)
                return null;
            if (this.background)
                return this.background;
            var n = this.unique ? +this.unique.toString()[this.unique.toString().length - 1] : 1;
            var rand1 = Math.floor((Math.random() * (254 - n)) + 1);
            var rand2 = Math.floor((Math.random() * (254 - n)) + 1);
            var rand3 = Math.floor((Math.random() * (254 - n)) + 1);
            this.background = "rgb(" + rand1 + ", " + rand2 + ", " + rand3 + ")";
            return this.background;
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
        tslib_1.__metadata("design:type", Boolean)
    ], AvatarBoxComponent.prototype, "lazy", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], AvatarBoxComponent.prototype, "size", void 0);
    AvatarBoxComponent = tslib_1.__decorate([
        Component({
            selector: 'avatar-box',
            template: "<div class=\"avatar-box\" [ngClass]=\"defaultOptions?.componentClass\" [style.width]=\"size + &quot;px&quot;\" [style.maxWidth]=\"size + &quot;px&quot;\" [style.minWidth]=\"size + &quot;px&quot;\" [style.height]=\"size + &quot;px&quot;\" [style.maxHeight]=\"size + &quot;px&quot;\" [style.minHeight]=\"size + &quot;px&quot;\" [class.no-avatar]=\"!displayAvatar\" [style.backgroundColor]=\"avatarBackground\"><ng-template [ngIf]=\"displayAvatar\"><img *ngIf=\"lazy\" [defaultImage]=\"defaultAvatar\" [errorImage]=\"defaultAvatar\" [lazyLoad]=\"displayAvatar\"><img *ngIf=\"!lazy\" [src]=\"displayAvatar\"></ng-template><span *ngIf=\"!displayAvatar\" [style.fontSize]=\"( size / 2 ) + &quot;px&quot;\" [style.lineHeight]=\"( size / 2 ) + &quot;px&quot;\">{{ title?.trim()?.substring( 0, 1 ) | uppercase }}</span></div>",
            styles: [".avatar-box{overflow:hidden;-webkit-backface-visibility:hidden;-moz-backface-visibility:hidden;-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);display:flex;align-items:center;align-content:center;justify-content:center;border-radius:6px;font-weight:700;box-shadow:.3px .3px 3px #e7e7e7}.avatar-box.no-avatar img{display:none}.avatar-box.no-avatar span{display:block!important}.avatar-box img{width:100%;height:100%}.avatar-box span{display:none;color:#fff;text-shadow:.3px .3px #e7e7e7;font-style:normal}"]
        }),
        tslib_1.__param(0, Optional()), tslib_1.__param(0, Inject(AVATAR_BOX_DEFAULT_OPTIONS)),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], AvatarBoxComponent);
    return AvatarBoxComponent;
}());
export { AvatarBoxComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXZhdGFyLWJveC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNvcmUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9hdmF0YXItYm94L2F2YXRhci1ib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ04sS0FBSyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQzFCLE1BQU0sRUFBRSxjQUFjLEVBRXRCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE1BQU0sQ0FBQyxJQUFNLDBCQUEwQixHQUF3QixJQUFJLGNBQWMsQ0FBTyxnQkFBZ0IsQ0FBRSxDQUFDO0FBTzNHO0lBWUM7OztNQUdFO0lBQ0YsNEJBQXdFLGNBQW1CO1FBQW5CLG1CQUFjLEdBQWQsY0FBYyxDQUFLO1FBWDNFLGtCQUFhLEdBQVcsQ0FBRSxJQUFJLENBQUMsY0FBYyxJQUFJLEVBQUUsQ0FBRSxDQUFDLGFBQWEsQ0FBQztRQUNwRSxTQUFJLEdBQVksQ0FBRSxJQUFJLENBQUMsY0FBYyxJQUFJLEVBQUUsQ0FBRSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUM7UUFDM0QsU0FBSSxHQUFXLENBQUUsSUFBSSxDQUFDLGNBQWMsSUFBSSxFQUFFLENBQUUsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDO1FBR2pFLGtCQUFhLEdBQVcsSUFBSSxDQUFDLGFBQWEsQ0FBQztJQU02QyxDQUFDO0lBRWhHOzs7TUFHRTtJQUNLLHdDQUFXLEdBQWxCLFVBQW9CLE9BQXNCO1FBQTFDLGlCQXVCQztRQXRCQSxJQUFLLE9BQU8sQ0FBQyxNQUFNLEVBQUc7WUFDckIsSUFBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUc7Z0JBQ25CLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztnQkFDeEMsT0FBTzthQUNQO1lBRUQsbUJBQW1CO1lBQ25CLElBQU0sVUFBVSxHQUFxQixJQUFJLEtBQUssRUFBRSxDQUFDO1lBRWpELDRDQUE0QztZQUM1QyxVQUFVLENBQUMsZ0JBQWdCLENBQUUsTUFBTSxFQUFFO2dCQUNwQyxLQUFJLENBQUMsYUFBYSxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUM7WUFDbEMsQ0FBQyxDQUFFLENBQUM7WUFFSix3REFBd0Q7WUFDeEQsVUFBVSxDQUFDLGdCQUFnQixDQUFFLE9BQU8sRUFBRTtnQkFDckMsS0FBSSxDQUFDLGFBQWEsR0FBRyxLQUFJLENBQUMsYUFBYSxDQUFDO1lBQ3pDLENBQUMsQ0FBRSxDQUFDO1lBRUosYUFBYTtZQUNiLFVBQVUsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUM3QjtJQUNGLENBQUM7SUFNRCxzQkFBVyxnREFBZ0I7UUFKM0I7OztVQUdFO2FBQ0Y7WUFDQyxJQUFLLElBQUksQ0FBQyxhQUFhO2dCQUFHLE9BQU8sSUFBSSxDQUFDO1lBQ3RDLElBQUssSUFBSSxDQUFDLFVBQVU7Z0JBQUcsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBRTlDLElBQU0sQ0FBQyxHQUFXLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pHLElBQU0sS0FBSyxHQUFXLElBQUksQ0FBQyxLQUFLLENBQUUsQ0FBRSxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBRSxHQUFHLEdBQUcsQ0FBQyxDQUFFLENBQUUsR0FBRyxDQUFDLENBQUUsQ0FBQztZQUN4RSxJQUFNLEtBQUssR0FBVyxJQUFJLENBQUMsS0FBSyxDQUFFLENBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUUsR0FBRyxHQUFHLENBQUMsQ0FBRSxDQUFFLEdBQUcsQ0FBQyxDQUFFLENBQUM7WUFDeEUsSUFBTSxLQUFLLEdBQVcsSUFBSSxDQUFDLEtBQUssQ0FBRSxDQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFFLEdBQUcsR0FBRyxDQUFDLENBQUUsQ0FBRSxHQUFHLENBQUMsQ0FBRSxDQUFDO1lBRXhFLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUSxLQUFLLFVBQU8sS0FBSyxVQUFPLEtBQUssTUFBSSxDQUFDO1lBRTVELE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUN4QixDQUFDOzs7T0FBQTs7Z0RBL0NhLFFBQVEsWUFBSSxNQUFNLFNBQUUsMEJBQTBCOztJQWRuRDtRQUFSLEtBQUssRUFBRTs7c0RBQXVCO0lBQ3RCO1FBQVIsS0FBSyxFQUFFOztzREFBdUI7SUFDdEI7UUFBUixLQUFLLEVBQUU7O3FEQUFzQjtJQUNyQjtRQUFSLEtBQUssRUFBRTs7NkRBQTRFO0lBQzNFO1FBQVIsS0FBSyxFQUFFOztvREFBbUU7SUFDbEU7UUFBUixLQUFLLEVBQUU7O29EQUFnRTtJQVA1RCxrQkFBa0I7UUFMOUIsU0FBUyxDQUFDO1lBQ1YsUUFBUSxFQUFHLFlBQVk7WUFDdkIsNHpCQUFnQzs7U0FFaEMsQ0FBQztRQWlCYSxtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLE1BQU0sQ0FBRSwwQkFBMEIsQ0FBRSxDQUFBOztPQWhCbEQsa0JBQWtCLENBaUU5QjtJQUFELHlCQUFDO0NBQUEsQUFqRUQsSUFpRUM7U0FqRVksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0SW5wdXQsIENvbXBvbmVudCwgT3B0aW9uYWwsXG5cdEluamVjdCwgSW5qZWN0aW9uVG9rZW4sXG5cdFNpbXBsZUNoYW5nZXMsIE9uQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGNvbnN0IEFWQVRBUl9CT1hfREVGQVVMVF9PUFRJT05TOiBJbmplY3Rpb25Ub2tlbjxhbnk+ID0gbmV3IEluamVjdGlvblRva2VuPGFueT4oICdkZWZhdWx0T3B0aW9ucycgKTtcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yXHQ6ICdhdmF0YXItYm94Jyxcblx0dGVtcGxhdGVVcmxcdDogJy4vYXZhdGFyLWJveC5wdWcnLFxuXHRzdHlsZVVybHNcdDogWyAnLi9hdmF0YXItYm94LnNjc3MnIF0sXG59KVxuZXhwb3J0IGNsYXNzIEF2YXRhckJveENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cblx0QElucHV0KCkgcHVibGljIHNvdXJjZTogc3RyaW5nO1xuXHRASW5wdXQoKSBwdWJsaWMgdW5pcXVlOiBudW1iZXI7XG5cdEBJbnB1dCgpIHB1YmxpYyB0aXRsZTogc3RyaW5nO1xuXHRASW5wdXQoKSBwdWJsaWMgZGVmYXVsdEF2YXRhcjogc3RyaW5nID0gKCB0aGlzLmRlZmF1bHRPcHRpb25zIHx8IHt9ICkuZGVmYXVsdEF2YXRhcjtcblx0QElucHV0KCkgcHVibGljIGxhenk6IGJvb2xlYW4gPSAoIHRoaXMuZGVmYXVsdE9wdGlvbnMgfHwge30gKS5sYXp5IHx8IHRydWU7XG5cdEBJbnB1dCgpIHB1YmxpYyBzaXplOiBudW1iZXIgPSAoIHRoaXMuZGVmYXVsdE9wdGlvbnMgfHwge30gKS5zaXplIHx8IDQ0O1xuXG5cdHB1YmxpYyBiYWNrZ3JvdW5kOiBzdHJpbmc7XG5cdHB1YmxpYyBkaXNwbGF5QXZhdGFyOiBzdHJpbmcgPSB0aGlzLmRlZmF1bHRBdmF0YXI7XG5cblx0LyoqXG5cdCogQGNvbnN0cnVjdG9yXG5cdCogQHBhcmFtIHthbnl9IGRlZmF1bHRPcHRpb25zXG5cdCovXG5cdGNvbnN0cnVjdG9yKCBAT3B0aW9uYWwoKSBASW5qZWN0KCBBVkFUQVJfQk9YX0RFRkFVTFRfT1BUSU9OUyApIHJlYWRvbmx5IGRlZmF1bHRPcHRpb25zOiBhbnkgKSB7fVxuXG5cdC8qKlxuXHQqIEBjb25zdHJ1Y3RvclxuXHQqIEBwYXJhbSB7U2ltcGxlQ2hhbmdlc30gY2hhbmdlc1xuXHQqL1xuXHRwdWJsaWMgbmdPbkNoYW5nZXMoIGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMgKSB7XG5cdFx0aWYgKCBjaGFuZ2VzLnNvdXJjZSApIHtcblx0XHRcdGlmICggIXRoaXMuc291cmNlICkge1xuXHRcdFx0XHR0aGlzLmRpc3BsYXlBdmF0YXIgPSB0aGlzLmRlZmF1bHRBdmF0YXI7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gQ3JlYXRlIHRoZSBpbWFnZVxuXHRcdFx0Y29uc3QgaW1nRWxlbWVudDogSFRNTEltYWdlRWxlbWVudCA9IG5ldyBJbWFnZSgpO1xuXG5cdFx0XHQvLyBXaGVuIGltYWdlIGlzIGxvYWRlZCwgcmVzb2x2ZSB0aGUgcHJvbWlzZVxuXHRcdFx0aW1nRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAnbG9hZCcsICgpID0+IHtcblx0XHRcdFx0dGhpcy5kaXNwbGF5QXZhdGFyID0gdGhpcy5zb3VyY2U7XG5cdFx0XHR9ICk7XG5cblx0XHRcdC8vIFdoZW4gdGhlcmUncyBhbiBlcnJvciBkdXJpbmcgbG9hZCwgcmVqZWN0IHRoZSBwcm9taXNlXG5cdFx0XHRpbWdFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdlcnJvcicsICgpID0+IHtcblx0XHRcdFx0dGhpcy5kaXNwbGF5QXZhdGFyID0gdGhpcy5kZWZhdWx0QXZhdGFyO1xuXHRcdFx0fSApO1xuXG5cdFx0XHQvLyBBc3NpZ24gVVJMXG5cdFx0XHRpbWdFbGVtZW50LnNyYyA9IHRoaXMuc291cmNlO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQqIEdldCBhdmF0YXIgYmFja2dyb3VuZFxuXHQqIEByZXR1cm4ge3N0cmluZ31cblx0Ki9cblx0cHVibGljIGdldCBhdmF0YXJCYWNrZ3JvdW5kKCk6IHN0cmluZyB7XG5cdFx0aWYgKCB0aGlzLmRpc3BsYXlBdmF0YXIgKSByZXR1cm4gbnVsbDtcblx0XHRpZiAoIHRoaXMuYmFja2dyb3VuZCApIHJldHVybiB0aGlzLmJhY2tncm91bmQ7XG5cblx0XHRjb25zdCBuOiBudW1iZXIgPSB0aGlzLnVuaXF1ZSA/ICt0aGlzLnVuaXF1ZS50b1N0cmluZygpWyB0aGlzLnVuaXF1ZS50b1N0cmluZygpLmxlbmd0aCAtIDEgXSA6IDE7XG5cdFx0Y29uc3QgcmFuZDE6IG51bWJlciA9IE1hdGguZmxvb3IoICggTWF0aC5yYW5kb20oKSAqICggMjU0IC0gbiApICkgKyAxICk7XG5cdFx0Y29uc3QgcmFuZDI6IG51bWJlciA9IE1hdGguZmxvb3IoICggTWF0aC5yYW5kb20oKSAqICggMjU0IC0gbiApICkgKyAxICk7XG5cdFx0Y29uc3QgcmFuZDM6IG51bWJlciA9IE1hdGguZmxvb3IoICggTWF0aC5yYW5kb20oKSAqICggMjU0IC0gbiApICkgKyAxICk7XG5cblx0XHR0aGlzLmJhY2tncm91bmQgPSBgcmdiKCR7IHJhbmQxIH0sICR7IHJhbmQyIH0sICR7IHJhbmQzIH0pYDtcblxuXHRcdHJldHVybiB0aGlzLmJhY2tncm91bmQ7XG5cdH1cblxufVxuIl19