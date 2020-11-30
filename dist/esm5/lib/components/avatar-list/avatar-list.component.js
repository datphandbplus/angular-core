import * as tslib_1 from "tslib";
import { Input, Component, Optional, Inject, InjectionToken } from '@angular/core';
import _ from 'underscore';
export var AVATAR_LIST_DEFAULT_OPTIONS = new InjectionToken('defaultOptions');
var AvatarListComponent = /** @class */ (function () {
    /**
    * @constructor
    * @param {any} defaultOptions
    */
    function AvatarListComponent(defaultOptions) {
        this.defaultOptions = defaultOptions;
        this.board = (this.defaultOptions || {}).board;
        this.alwaysVisible = (this.defaultOptions || {}).alwaysVisible;
        this.size = (this.defaultOptions || {}).size || 40;
        this.boardHeight = (this.defaultOptions || {}).boardHeight || 40;
        this.maximum = (this.defaultOptions || {}).maximum || 9;
        this.lazy = (this.defaultOptions || {}).lazy || true;
    }
    /**
    * @constructor
    * @param {SimpleChanges} changes
    */
    AvatarListComponent.prototype.ngOnChanges = function (changes) {
        if (!changes.items)
            return;
        this.handledItems = this.handleAvatarList(this.items, this.maximum);
    };
    /**
    * Handle avatar list
    * @param {Array} items
    * @param {number} maximum
    * @return {Array}
    */
    AvatarListComponent.prototype.handleAvatarList = function (items, maximum) {
        var arr = [];
        _.each(items, function (item, index) {
            var _item = _.clone(item);
            if ((index + 1) > maximum) {
                var lastItem = arr[maximum] || { is_count_item: true };
                if (!lastItem.full_name) {
                    lastItem.full_name = '';
                }
                else {
                    lastItem.full_name += ', ';
                }
                if (!lastItem.count)
                    lastItem.count = 0;
                lastItem.full_name += (_item.full_name || 'N/A') + (" (" + _item.email + ")");
                lastItem.count++;
                arr[maximum] = lastItem;
                return;
            }
            _item.full_name = (_item.full_name || 'N/A') + (" (" + _item.email + ")");
            arr.push(_item);
        });
        return arr;
    };
    AvatarListComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [AVATAR_LIST_DEFAULT_OPTIONS,] }] }
    ]; };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array)
    ], AvatarListComponent.prototype, "items", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], AvatarListComponent.prototype, "board", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], AvatarListComponent.prototype, "alwaysVisible", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], AvatarListComponent.prototype, "size", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], AvatarListComponent.prototype, "boardHeight", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], AvatarListComponent.prototype, "maximum", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], AvatarListComponent.prototype, "lazy", void 0);
    AvatarListComponent = tslib_1.__decorate([
        Component({
            selector: 'avatar-list',
            template: "<div class=\"avatar-list\" *ngIf=\"items?.length || alwaysVisible\" [ngClass]=\"defaultOptions?.componentClass\" [class.avatar-list__board]=\"board\" [style.minHeight]=\"board &amp;&amp; boardHeight ? boardHeight + &quot;px&quot; : &quot;inherit&quot;\"><div class=\"layout-row layout-wrap layout-fixer-5\"><div class=\"p-5 layout-colum layout-align-center-center pos-relative\" *ngFor=\"let item of handledItems\" [matTooltip]=\"item?.full_name || &quot;N/A&quot;\"><div class=\"avatar-list__count-box\" *ngIf=\"item?.is_count_item\" [style.width]=\"size + &quot;px&quot;\" [style.maxWidth]=\"size + &quot;px&quot;\" [style.minWidth]=\"size + &quot;px&quot;\" [style.height]=\"size + &quot;px&quot;\" [style.maxHeight]=\"size + &quot;px&quot;\" [style.minHeight]=\"size + &quot;px&quot;\" [style.fontSize]=\"( size / 2.5 ) + &quot;px&quot;\">{{ ( ( item?.count || 0 ) | commas ) + \"+\" }}</div><avatar-box *ngIf=\"!item?.is_count_item\" [size]=\"size\" [unique]=\"item?.id\" [source]=\"item?.avatar\" [title]=\"item?.full_name\" [lazy]=\"lazy\"></avatar-box><div class=\"avatar-list__disabled-box\" *ngIf=\"item?.is_disabled\"><i class=\"fas fa-ban text-warn\" [style.fontSize]=\"( size / 1.5 ) + &quot;px&quot;\"></i></div></div></div></div>",
            styles: [".avatar-list__board{min-height:50px;border:1px solid #e7e7e7;padding:10px;border-radius:4px;background-color:#fff}.avatar-list__count-box{background-color:#000;color:#fff;font-weight:600;border-radius:6px;height:100%;width:100%;display:flex;align-items:center;align-content:center;justify-content:center;box-shadow:1px 1px 3px #e7e7e7}.avatar-list__disabled-box{position:absolute;top:0;left:0;right:0;bottom:0;background-color:rgba(255,255,255,.5)}.avatar-list__disabled-box i{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}"]
        }),
        tslib_1.__param(0, Optional()), tslib_1.__param(0, Inject(AVATAR_LIST_DEFAULT_OPTIONS)),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], AvatarListComponent);
    return AvatarListComponent;
}());
export { AvatarListComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXZhdGFyLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1jb3JlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvYXZhdGFyLWxpc3QvYXZhdGFyLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ04sS0FBSyxFQUFFLFNBQVMsRUFDRCxRQUFRLEVBQ3ZCLE1BQU0sRUFBRSxjQUFjLEVBQ3RCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sQ0FBQyxNQUFNLFlBQVksQ0FBQztBQUUzQixNQUFNLENBQUMsSUFBTSwyQkFBMkIsR0FBd0IsSUFBSSxjQUFjLENBQU8sZ0JBQWdCLENBQUUsQ0FBQztBQU81RztJQVlDOzs7TUFHRTtJQUNGLDZCQUF5RSxjQUFtQjtRQUFuQixtQkFBYyxHQUFkLGNBQWMsQ0FBSztRQWI1RSxVQUFLLEdBQVksQ0FBRSxJQUFJLENBQUMsY0FBYyxJQUFJLEVBQUUsQ0FBRSxDQUFDLEtBQUssQ0FBQztRQUNyRCxrQkFBYSxHQUFZLENBQUUsSUFBSSxDQUFDLGNBQWMsSUFBSSxFQUFFLENBQUUsQ0FBQyxhQUFhLENBQUM7UUFDckUsU0FBSSxHQUFXLENBQUUsSUFBSSxDQUFDLGNBQWMsSUFBSSxFQUFFLENBQUUsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ3hELGdCQUFXLEdBQVcsQ0FBRSxJQUFJLENBQUMsY0FBYyxJQUFJLEVBQUUsQ0FBRSxDQUFDLFdBQVcsSUFBSSxFQUFFLENBQUM7UUFDdEUsWUFBTyxHQUFXLENBQUUsSUFBSSxDQUFDLGNBQWMsSUFBSSxFQUFFLENBQUUsQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDO1FBQzdELFNBQUksR0FBWSxDQUFFLElBQUksQ0FBQyxjQUFjLElBQUksRUFBRSxDQUFFLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQztJQVFxQixDQUFDO0lBRWpHOzs7TUFHRTtJQUNLLHlDQUFXLEdBQWxCLFVBQW9CLE9BQXNCO1FBQ3pDLElBQUssQ0FBQyxPQUFPLENBQUMsS0FBSztZQUFHLE9BQU87UUFDN0IsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFFLENBQUM7SUFDdkUsQ0FBQztJQUVEOzs7OztNQUtFO0lBQ0ssOENBQWdCLEdBQXZCLFVBQXlCLEtBQWlCLEVBQUUsT0FBZTtRQUMxRCxJQUFNLEdBQUcsR0FBZSxFQUFFLENBQUM7UUFFM0IsQ0FBQyxDQUFDLElBQUksQ0FBRSxLQUFLLEVBQUUsVUFBRSxJQUFTLEVBQUUsS0FBYTtZQUN4QyxJQUFNLEtBQUssR0FBUSxDQUFDLENBQUMsS0FBSyxDQUFFLElBQUksQ0FBRSxDQUFDO1lBRW5DLElBQUssQ0FBRSxLQUFLLEdBQUcsQ0FBQyxDQUFFLEdBQUcsT0FBTyxFQUFHO2dCQUM5QixJQUFNLFFBQVEsR0FBUSxHQUFHLENBQUUsT0FBTyxDQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLENBQUM7Z0JBRWhFLElBQUssQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFHO29CQUMxQixRQUFRLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztpQkFDeEI7cUJBQU07b0JBQ04sUUFBUSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUM7aUJBQzNCO2dCQUVELElBQUssQ0FBQyxRQUFRLENBQUMsS0FBSztvQkFBRyxRQUFRLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztnQkFFMUMsUUFBUSxDQUFDLFNBQVMsSUFBSSxDQUFFLEtBQUssQ0FBQyxTQUFTLElBQUksS0FBSyxDQUFFLElBQUcsT0FBTSxLQUFLLENBQUMsS0FBSyxNQUFJLENBQUEsQ0FBQztnQkFDM0UsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUNqQixHQUFHLENBQUUsT0FBTyxDQUFFLEdBQUcsUUFBUSxDQUFDO2dCQUMxQixPQUFPO2FBQ1A7WUFFRCxLQUFLLENBQUMsU0FBUyxHQUFHLENBQUUsS0FBSyxDQUFDLFNBQVMsSUFBSSxLQUFLLENBQUUsSUFBRyxPQUFNLEtBQUssQ0FBQyxLQUFLLE1BQUksQ0FBQSxDQUFDO1lBQ3ZFLEdBQUcsQ0FBQyxJQUFJLENBQUUsS0FBSyxDQUFFLENBQUM7UUFDbkIsQ0FBQyxDQUFFLENBQUM7UUFFSixPQUFPLEdBQUcsQ0FBQztJQUNaLENBQUM7O2dEQTdDYSxRQUFRLFlBQUksTUFBTSxTQUFFLDJCQUEyQjs7SUFkcEQ7UUFBUixLQUFLLEVBQUU7MENBQWUsS0FBSztzREFBTTtJQUN6QjtRQUFSLEtBQUssRUFBRTs7c0RBQTZEO0lBQzVEO1FBQVIsS0FBSyxFQUFFOzs4REFBNkU7SUFDNUU7UUFBUixLQUFLLEVBQUU7O3FEQUFnRTtJQUMvRDtRQUFSLEtBQUssRUFBRTs7NERBQThFO0lBQzdFO1FBQVIsS0FBSyxFQUFFOzt3REFBcUU7SUFDcEU7UUFBUixLQUFLLEVBQUU7O3FEQUFtRTtJQVIvRCxtQkFBbUI7UUFML0IsU0FBUyxDQUFDO1lBQ1YsUUFBUSxFQUFHLGFBQWE7WUFDeEIsd3VDQUFpQzs7U0FFakMsQ0FBQztRQWlCYSxtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLE1BQU0sQ0FBRSwyQkFBMkIsQ0FBRSxDQUFBOztPQWhCbkQsbUJBQW1CLENBK0QvQjtJQUFELDBCQUFDO0NBQUEsQUEvREQsSUErREM7U0EvRFksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0SW5wdXQsIENvbXBvbmVudCwgT25DaGFuZ2VzLFxuXHRTaW1wbGVDaGFuZ2VzLCBPcHRpb25hbCxcblx0SW5qZWN0LCBJbmplY3Rpb25Ub2tlblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBfIGZyb20gJ3VuZGVyc2NvcmUnO1xuXG5leHBvcnQgY29uc3QgQVZBVEFSX0xJU1RfREVGQVVMVF9PUFRJT05TOiBJbmplY3Rpb25Ub2tlbjxhbnk+ID0gbmV3IEluamVjdGlvblRva2VuPGFueT4oICdkZWZhdWx0T3B0aW9ucycgKTtcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yXHQ6ICdhdmF0YXItbGlzdCcsXG5cdHRlbXBsYXRlVXJsXHQ6ICcuL2F2YXRhci1saXN0LnB1ZycsXG5cdHN0eWxlVXJsc1x0OiBbICcuL2F2YXRhci1saXN0LnNjc3MnIF0sXG59KVxuZXhwb3J0IGNsYXNzIEF2YXRhckxpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG5cdEBJbnB1dCgpIHB1YmxpYyBpdGVtczogQXJyYXk8YW55Pjtcblx0QElucHV0KCkgcHVibGljIGJvYXJkOiBib29sZWFuID0gKCB0aGlzLmRlZmF1bHRPcHRpb25zIHx8IHt9ICkuYm9hcmQ7XG5cdEBJbnB1dCgpIHB1YmxpYyBhbHdheXNWaXNpYmxlOiBib29sZWFuID0gKCB0aGlzLmRlZmF1bHRPcHRpb25zIHx8IHt9ICkuYWx3YXlzVmlzaWJsZTtcblx0QElucHV0KCkgcHVibGljIHNpemU6IG51bWJlciA9ICggdGhpcy5kZWZhdWx0T3B0aW9ucyB8fCB7fSApLnNpemUgfHwgNDA7XG5cdEBJbnB1dCgpIHB1YmxpYyBib2FyZEhlaWdodDogbnVtYmVyID0gKCB0aGlzLmRlZmF1bHRPcHRpb25zIHx8IHt9ICkuYm9hcmRIZWlnaHQgfHwgNDA7XG5cdEBJbnB1dCgpIHB1YmxpYyBtYXhpbXVtOiBudW1iZXIgPSAoIHRoaXMuZGVmYXVsdE9wdGlvbnMgfHwge30gKS5tYXhpbXVtIHx8IDk7XG5cdEBJbnB1dCgpIHB1YmxpYyBsYXp5OiBib29sZWFuID0gKCB0aGlzLmRlZmF1bHRPcHRpb25zIHx8IHt9ICkubGF6eSB8fCB0cnVlO1xuXG5cdHB1YmxpYyBoYW5kbGVkSXRlbXM6IEFycmF5PGFueT47XG5cblx0LyoqXG5cdCogQGNvbnN0cnVjdG9yXG5cdCogQHBhcmFtIHthbnl9IGRlZmF1bHRPcHRpb25zXG5cdCovXG5cdGNvbnN0cnVjdG9yKCBAT3B0aW9uYWwoKSBASW5qZWN0KCBBVkFUQVJfTElTVF9ERUZBVUxUX09QVElPTlMgKSByZWFkb25seSBkZWZhdWx0T3B0aW9uczogYW55ICkge31cblxuXHQvKipcblx0KiBAY29uc3RydWN0b3Jcblx0KiBAcGFyYW0ge1NpbXBsZUNoYW5nZXN9IGNoYW5nZXNcblx0Ki9cblx0cHVibGljIG5nT25DaGFuZ2VzKCBjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzICkge1xuXHRcdGlmICggIWNoYW5nZXMuaXRlbXMgKSByZXR1cm47XG5cdFx0dGhpcy5oYW5kbGVkSXRlbXMgPSB0aGlzLmhhbmRsZUF2YXRhckxpc3QoIHRoaXMuaXRlbXMsIHRoaXMubWF4aW11bSApO1xuXHR9XG5cblx0LyoqXG5cdCogSGFuZGxlIGF2YXRhciBsaXN0XG5cdCogQHBhcmFtIHtBcnJheX0gaXRlbXNcblx0KiBAcGFyYW0ge251bWJlcn0gbWF4aW11bVxuXHQqIEByZXR1cm4ge0FycmF5fVxuXHQqL1xuXHRwdWJsaWMgaGFuZGxlQXZhdGFyTGlzdCggaXRlbXM6IEFycmF5PGFueT4sIG1heGltdW06IG51bWJlciApOiBBcnJheTxhbnk+IHtcblx0XHRjb25zdCBhcnI6IEFycmF5PGFueT4gPSBbXTtcblxuXHRcdF8uZWFjaCggaXRlbXMsICggaXRlbTogYW55LCBpbmRleDogbnVtYmVyICkgPT4ge1xuXHRcdFx0Y29uc3QgX2l0ZW06IGFueSA9IF8uY2xvbmUoIGl0ZW0gKTtcblxuXHRcdFx0aWYgKCAoIGluZGV4ICsgMSApID4gbWF4aW11bSApIHtcblx0XHRcdFx0Y29uc3QgbGFzdEl0ZW06IGFueSA9IGFyclsgbWF4aW11bSBdIHx8IHsgaXNfY291bnRfaXRlbTogdHJ1ZSB9O1xuXG5cdFx0XHRcdGlmICggIWxhc3RJdGVtLmZ1bGxfbmFtZSApIHtcblx0XHRcdFx0XHRsYXN0SXRlbS5mdWxsX25hbWUgPSAnJztcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRsYXN0SXRlbS5mdWxsX25hbWUgKz0gJywgJztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICggIWxhc3RJdGVtLmNvdW50ICkgbGFzdEl0ZW0uY291bnQgPSAwO1xuXG5cdFx0XHRcdGxhc3RJdGVtLmZ1bGxfbmFtZSArPSAoIF9pdGVtLmZ1bGxfbmFtZSB8fCAnTi9BJyApICsgYCAoJHsgX2l0ZW0uZW1haWwgfSlgO1xuXHRcdFx0XHRsYXN0SXRlbS5jb3VudCsrO1xuXHRcdFx0XHRhcnJbIG1heGltdW0gXSA9IGxhc3RJdGVtO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdF9pdGVtLmZ1bGxfbmFtZSA9ICggX2l0ZW0uZnVsbF9uYW1lIHx8ICdOL0EnICkgKyBgICgkeyBfaXRlbS5lbWFpbCB9KWA7XG5cdFx0XHRhcnIucHVzaCggX2l0ZW0gKTtcblx0XHR9ICk7XG5cblx0XHRyZXR1cm4gYXJyO1xuXHR9XG5cbn1cbiJdfQ==