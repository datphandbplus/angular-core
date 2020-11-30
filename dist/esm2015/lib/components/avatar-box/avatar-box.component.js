import * as tslib_1 from "tslib";
import { Input, Component, Optional, Inject, InjectionToken } from '@angular/core';
export const AVATAR_BOX_DEFAULT_OPTIONS = new InjectionToken('defaultOptions');
let AvatarBoxComponent = class AvatarBoxComponent {
    /**
    * @constructor
    * @param {any} defaultOptions
    */
    constructor(defaultOptions) {
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
    ngOnChanges(changes) {
        if (changes.source) {
            if (!this.source) {
                this.displayAvatar = this.defaultAvatar;
                return;
            }
            // Create the image
            const imgElement = new Image();
            // When image is loaded, resolve the promise
            imgElement.addEventListener('load', () => {
                this.displayAvatar = this.source;
            });
            // When there's an error during load, reject the promise
            imgElement.addEventListener('error', () => {
                this.displayAvatar = this.defaultAvatar;
            });
            // Assign URL
            imgElement.src = this.source;
        }
    }
    /**
    * Get avatar background
    * @return {string}
    */
    get avatarBackground() {
        if (this.displayAvatar)
            return null;
        if (this.background)
            return this.background;
        const n = this.unique ? +this.unique.toString()[this.unique.toString().length - 1] : 1;
        const rand1 = Math.floor((Math.random() * (254 - n)) + 1);
        const rand2 = Math.floor((Math.random() * (254 - n)) + 1);
        const rand3 = Math.floor((Math.random() * (254 - n)) + 1);
        this.background = `rgb(${rand1}, ${rand2}, ${rand3})`;
        return this.background;
    }
};
AvatarBoxComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [AVATAR_BOX_DEFAULT_OPTIONS,] }] }
];
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
export { AvatarBoxComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXZhdGFyLWJveC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNvcmUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9hdmF0YXItYm94L2F2YXRhci1ib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ04sS0FBSyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQzFCLE1BQU0sRUFBRSxjQUFjLEVBRXRCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE1BQU0sQ0FBQyxNQUFNLDBCQUEwQixHQUF3QixJQUFJLGNBQWMsQ0FBTyxnQkFBZ0IsQ0FBRSxDQUFDO0FBTzNHLElBQWEsa0JBQWtCLEdBQS9CLE1BQWEsa0JBQWtCO0lBWTlCOzs7TUFHRTtJQUNGLFlBQXdFLGNBQW1CO1FBQW5CLG1CQUFjLEdBQWQsY0FBYyxDQUFLO1FBWDNFLGtCQUFhLEdBQVcsQ0FBRSxJQUFJLENBQUMsY0FBYyxJQUFJLEVBQUUsQ0FBRSxDQUFDLGFBQWEsQ0FBQztRQUNwRSxTQUFJLEdBQVksQ0FBRSxJQUFJLENBQUMsY0FBYyxJQUFJLEVBQUUsQ0FBRSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUM7UUFDM0QsU0FBSSxHQUFXLENBQUUsSUFBSSxDQUFDLGNBQWMsSUFBSSxFQUFFLENBQUUsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDO1FBR2pFLGtCQUFhLEdBQVcsSUFBSSxDQUFDLGFBQWEsQ0FBQztJQU02QyxDQUFDO0lBRWhHOzs7TUFHRTtJQUNLLFdBQVcsQ0FBRSxPQUFzQjtRQUN6QyxJQUFLLE9BQU8sQ0FBQyxNQUFNLEVBQUc7WUFDckIsSUFBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUc7Z0JBQ25CLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztnQkFDeEMsT0FBTzthQUNQO1lBRUQsbUJBQW1CO1lBQ25CLE1BQU0sVUFBVSxHQUFxQixJQUFJLEtBQUssRUFBRSxDQUFDO1lBRWpELDRDQUE0QztZQUM1QyxVQUFVLENBQUMsZ0JBQWdCLENBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRTtnQkFDekMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQ2xDLENBQUMsQ0FBRSxDQUFDO1lBRUosd0RBQXdEO1lBQ3hELFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBRSxPQUFPLEVBQUUsR0FBRyxFQUFFO2dCQUMxQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7WUFDekMsQ0FBQyxDQUFFLENBQUM7WUFFSixhQUFhO1lBQ2IsVUFBVSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQzdCO0lBQ0YsQ0FBQztJQUVEOzs7TUFHRTtJQUNGLElBQVcsZ0JBQWdCO1FBQzFCLElBQUssSUFBSSxDQUFDLGFBQWE7WUFBRyxPQUFPLElBQUksQ0FBQztRQUN0QyxJQUFLLElBQUksQ0FBQyxVQUFVO1lBQUcsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBRTlDLE1BQU0sQ0FBQyxHQUFXLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pHLE1BQU0sS0FBSyxHQUFXLElBQUksQ0FBQyxLQUFLLENBQUUsQ0FBRSxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBRSxHQUFHLEdBQUcsQ0FBQyxDQUFFLENBQUUsR0FBRyxDQUFDLENBQUUsQ0FBQztRQUN4RSxNQUFNLEtBQUssR0FBVyxJQUFJLENBQUMsS0FBSyxDQUFFLENBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUUsR0FBRyxHQUFHLENBQUMsQ0FBRSxDQUFFLEdBQUcsQ0FBQyxDQUFFLENBQUM7UUFDeEUsTUFBTSxLQUFLLEdBQVcsSUFBSSxDQUFDLEtBQUssQ0FBRSxDQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFFLEdBQUcsR0FBRyxDQUFDLENBQUUsQ0FBRSxHQUFHLENBQUMsQ0FBRSxDQUFDO1FBRXhFLElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBUSxLQUFNLEtBQU0sS0FBTSxLQUFNLEtBQU0sR0FBRyxDQUFDO1FBRTVELE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN4QixDQUFDO0NBRUQsQ0FBQTs7NENBakRjLFFBQVEsWUFBSSxNQUFNLFNBQUUsMEJBQTBCOztBQWRuRDtJQUFSLEtBQUssRUFBRTs7a0RBQXVCO0FBQ3RCO0lBQVIsS0FBSyxFQUFFOztrREFBdUI7QUFDdEI7SUFBUixLQUFLLEVBQUU7O2lEQUFzQjtBQUNyQjtJQUFSLEtBQUssRUFBRTs7eURBQTRFO0FBQzNFO0lBQVIsS0FBSyxFQUFFOztnREFBbUU7QUFDbEU7SUFBUixLQUFLLEVBQUU7O2dEQUFnRTtBQVA1RCxrQkFBa0I7SUFMOUIsU0FBUyxDQUFDO1FBQ1YsUUFBUSxFQUFHLFlBQVk7UUFDdkIsNHpCQUFnQzs7S0FFaEMsQ0FBQztJQWlCYSxtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLE1BQU0sQ0FBRSwwQkFBMEIsQ0FBRSxDQUFBOztHQWhCbEQsa0JBQWtCLENBaUU5QjtTQWpFWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRJbnB1dCwgQ29tcG9uZW50LCBPcHRpb25hbCxcblx0SW5qZWN0LCBJbmplY3Rpb25Ub2tlbixcblx0U2ltcGxlQ2hhbmdlcywgT25DaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgY29uc3QgQVZBVEFSX0JPWF9ERUZBVUxUX09QVElPTlM6IEluamVjdGlvblRva2VuPGFueT4gPSBuZXcgSW5qZWN0aW9uVG9rZW48YW55PiggJ2RlZmF1bHRPcHRpb25zJyApO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3JcdDogJ2F2YXRhci1ib3gnLFxuXHR0ZW1wbGF0ZVVybFx0OiAnLi9hdmF0YXItYm94LnB1ZycsXG5cdHN0eWxlVXJsc1x0OiBbICcuL2F2YXRhci1ib3guc2NzcycgXSxcbn0pXG5leHBvcnQgY2xhc3MgQXZhdGFyQm94Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuXHRASW5wdXQoKSBwdWJsaWMgc291cmNlOiBzdHJpbmc7XG5cdEBJbnB1dCgpIHB1YmxpYyB1bmlxdWU6IG51bWJlcjtcblx0QElucHV0KCkgcHVibGljIHRpdGxlOiBzdHJpbmc7XG5cdEBJbnB1dCgpIHB1YmxpYyBkZWZhdWx0QXZhdGFyOiBzdHJpbmcgPSAoIHRoaXMuZGVmYXVsdE9wdGlvbnMgfHwge30gKS5kZWZhdWx0QXZhdGFyO1xuXHRASW5wdXQoKSBwdWJsaWMgbGF6eTogYm9vbGVhbiA9ICggdGhpcy5kZWZhdWx0T3B0aW9ucyB8fCB7fSApLmxhenkgfHwgdHJ1ZTtcblx0QElucHV0KCkgcHVibGljIHNpemU6IG51bWJlciA9ICggdGhpcy5kZWZhdWx0T3B0aW9ucyB8fCB7fSApLnNpemUgfHwgNDQ7XG5cblx0cHVibGljIGJhY2tncm91bmQ6IHN0cmluZztcblx0cHVibGljIGRpc3BsYXlBdmF0YXI6IHN0cmluZyA9IHRoaXMuZGVmYXVsdEF2YXRhcjtcblxuXHQvKipcblx0KiBAY29uc3RydWN0b3Jcblx0KiBAcGFyYW0ge2FueX0gZGVmYXVsdE9wdGlvbnNcblx0Ki9cblx0Y29uc3RydWN0b3IoIEBPcHRpb25hbCgpIEBJbmplY3QoIEFWQVRBUl9CT1hfREVGQVVMVF9PUFRJT05TICkgcmVhZG9ubHkgZGVmYXVsdE9wdGlvbnM6IGFueSApIHt9XG5cblx0LyoqXG5cdCogQGNvbnN0cnVjdG9yXG5cdCogQHBhcmFtIHtTaW1wbGVDaGFuZ2VzfSBjaGFuZ2VzXG5cdCovXG5cdHB1YmxpYyBuZ09uQ2hhbmdlcyggY2hhbmdlczogU2ltcGxlQ2hhbmdlcyApIHtcblx0XHRpZiAoIGNoYW5nZXMuc291cmNlICkge1xuXHRcdFx0aWYgKCAhdGhpcy5zb3VyY2UgKSB7XG5cdFx0XHRcdHRoaXMuZGlzcGxheUF2YXRhciA9IHRoaXMuZGVmYXVsdEF2YXRhcjtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBDcmVhdGUgdGhlIGltYWdlXG5cdFx0XHRjb25zdCBpbWdFbGVtZW50OiBIVE1MSW1hZ2VFbGVtZW50ID0gbmV3IEltYWdlKCk7XG5cblx0XHRcdC8vIFdoZW4gaW1hZ2UgaXMgbG9hZGVkLCByZXNvbHZlIHRoZSBwcm9taXNlXG5cdFx0XHRpbWdFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdsb2FkJywgKCkgPT4ge1xuXHRcdFx0XHR0aGlzLmRpc3BsYXlBdmF0YXIgPSB0aGlzLnNvdXJjZTtcblx0XHRcdH0gKTtcblxuXHRcdFx0Ly8gV2hlbiB0aGVyZSdzIGFuIGVycm9yIGR1cmluZyBsb2FkLCByZWplY3QgdGhlIHByb21pc2Vcblx0XHRcdGltZ0VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ2Vycm9yJywgKCkgPT4ge1xuXHRcdFx0XHR0aGlzLmRpc3BsYXlBdmF0YXIgPSB0aGlzLmRlZmF1bHRBdmF0YXI7XG5cdFx0XHR9ICk7XG5cblx0XHRcdC8vIEFzc2lnbiBVUkxcblx0XHRcdGltZ0VsZW1lbnQuc3JjID0gdGhpcy5zb3VyY2U7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCogR2V0IGF2YXRhciBiYWNrZ3JvdW5kXG5cdCogQHJldHVybiB7c3RyaW5nfVxuXHQqL1xuXHRwdWJsaWMgZ2V0IGF2YXRhckJhY2tncm91bmQoKTogc3RyaW5nIHtcblx0XHRpZiAoIHRoaXMuZGlzcGxheUF2YXRhciApIHJldHVybiBudWxsO1xuXHRcdGlmICggdGhpcy5iYWNrZ3JvdW5kICkgcmV0dXJuIHRoaXMuYmFja2dyb3VuZDtcblxuXHRcdGNvbnN0IG46IG51bWJlciA9IHRoaXMudW5pcXVlID8gK3RoaXMudW5pcXVlLnRvU3RyaW5nKClbIHRoaXMudW5pcXVlLnRvU3RyaW5nKCkubGVuZ3RoIC0gMSBdIDogMTtcblx0XHRjb25zdCByYW5kMTogbnVtYmVyID0gTWF0aC5mbG9vciggKCBNYXRoLnJhbmRvbSgpICogKCAyNTQgLSBuICkgKSArIDEgKTtcblx0XHRjb25zdCByYW5kMjogbnVtYmVyID0gTWF0aC5mbG9vciggKCBNYXRoLnJhbmRvbSgpICogKCAyNTQgLSBuICkgKSArIDEgKTtcblx0XHRjb25zdCByYW5kMzogbnVtYmVyID0gTWF0aC5mbG9vciggKCBNYXRoLnJhbmRvbSgpICogKCAyNTQgLSBuICkgKSArIDEgKTtcblxuXHRcdHRoaXMuYmFja2dyb3VuZCA9IGByZ2IoJHsgcmFuZDEgfSwgJHsgcmFuZDIgfSwgJHsgcmFuZDMgfSlgO1xuXG5cdFx0cmV0dXJuIHRoaXMuYmFja2dyb3VuZDtcblx0fVxuXG59XG4iXX0=