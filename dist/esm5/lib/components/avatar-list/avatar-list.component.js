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
        this.rounded = (this.defaultOptions || {}).rounded !== undefined
            ? (this.defaultOptions || {}).rounded
            : false;
        this.lazy = (this.defaultOptions || {}).lazy !== undefined
            ? (this.defaultOptions || {}).lazy
            : true;
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
    ], AvatarListComponent.prototype, "rounded", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], AvatarListComponent.prototype, "lazy", void 0);
    AvatarListComponent = tslib_1.__decorate([
        Component({
            selector: 'avatar-list',
            template: "<div class=\"avatar-list\" *ngIf=\"items?.length || alwaysVisible\" [ngClass]=\"defaultOptions?.componentClass\" [class.avatar-list__board]=\"board\" [style.minHeight]=\"board &amp;&amp; boardHeight ? boardHeight + &quot;px&quot; : &quot;inherit&quot;\"><div class=\"layout-row layout-wrap layout-fixer-5\"><div class=\"p-5 layout-colum layout-align-center-center pos-relative\" *ngFor=\"let item of handledItems\" [matTooltip]=\"item?.full_name || &quot;N/A&quot;\"><div class=\"avatar-list__count-box\" *ngIf=\"item?.is_count_item\" [style.width]=\"size + &quot;px&quot;\" [style.maxWidth]=\"size + &quot;px&quot;\" [style.minWidth]=\"size + &quot;px&quot;\" [style.height]=\"size + &quot;px&quot;\" [style.maxHeight]=\"size + &quot;px&quot;\" [style.minHeight]=\"size + &quot;px&quot;\" [style.fontSize]=\"( size / 2.5 ) + &quot;px&quot;\">{{ ( ( item?.count || 0 ) | commas ) + \"+\" }}</div><avatar-box *ngIf=\"!item?.is_count_item\" [rounded]=\"rounded\" [size]=\"size\" [unique]=\"item?.id\" [source]=\"item?.avatar\" [title]=\"item?.full_name\" [lazy]=\"lazy\"></avatar-box><div class=\"avatar-list__disabled-box\" *ngIf=\"item?.is_disabled\"><i class=\"fas fa-ban text-warn\" [style.fontSize]=\"( size / 1.5 ) + &quot;px&quot;\"></i></div></div></div></div>"
        }),
        tslib_1.__param(0, Optional()), tslib_1.__param(0, Inject(AVATAR_LIST_DEFAULT_OPTIONS)),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], AvatarListComponent);
    return AvatarListComponent;
}());
export { AvatarListComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXZhdGFyLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1jb3JlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvYXZhdGFyLWxpc3QvYXZhdGFyLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ04sS0FBSyxFQUFFLFNBQVMsRUFDRCxRQUFRLEVBQ3ZCLE1BQU0sRUFBRSxjQUFjLEVBQ3RCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sQ0FBQyxNQUFNLFlBQVksQ0FBQztBQUUzQixNQUFNLENBQUMsSUFBTSwyQkFBMkIsR0FBd0IsSUFBSSxjQUFjLENBQU8sZ0JBQWdCLENBQUUsQ0FBQztBQU01RztJQWlCQzs7O01BR0U7SUFDRiw2QkFBeUUsY0FBbUI7UUFBbkIsbUJBQWMsR0FBZCxjQUFjLENBQUs7UUFsQjVFLFVBQUssR0FBWSxDQUFFLElBQUksQ0FBQyxjQUFjLElBQUksRUFBRSxDQUFFLENBQUMsS0FBSyxDQUFDO1FBQ3JELGtCQUFhLEdBQVksQ0FBRSxJQUFJLENBQUMsY0FBYyxJQUFJLEVBQUUsQ0FBRSxDQUFDLGFBQWEsQ0FBQztRQUNyRSxTQUFJLEdBQVcsQ0FBRSxJQUFJLENBQUMsY0FBYyxJQUFJLEVBQUUsQ0FBRSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUM7UUFDeEQsZ0JBQVcsR0FBVyxDQUFFLElBQUksQ0FBQyxjQUFjLElBQUksRUFBRSxDQUFFLENBQUMsV0FBVyxJQUFJLEVBQUUsQ0FBQztRQUN0RSxZQUFPLEdBQVcsQ0FBRSxJQUFJLENBQUMsY0FBYyxJQUFJLEVBQUUsQ0FBRSxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUM7UUFDN0QsWUFBTyxHQUFZLENBQUUsSUFBSSxDQUFDLGNBQWMsSUFBSSxFQUFFLENBQUUsQ0FBQyxPQUFPLEtBQUssU0FBUztZQUNyRixDQUFDLENBQUMsQ0FBRSxJQUFJLENBQUMsY0FBYyxJQUFJLEVBQUUsQ0FBRSxD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e1xuXHRJbnB1dCwgQ29tcG9uZW50LCBPbkNoYW5nZXMsXG5cdFNpbXBsZUNoYW5nZXMsIE9wdGlvbmFsLFxuXHRJbmplY3QsIEluamVjdGlvblRva2VuXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IF8gZnJvbSAndW5kZXJzY29yZSc7XG5cbmV4cG9ydCBjb25zdCBBVkFUQVJfTElTVF9ERUZBVUxUX09QVElPTlM6IEluamVjdGlvblRva2VuPGFueT4gPSBuZXcgSW5qZWN0aW9uVG9rZW48YW55PiggJ2RlZmF1bHRPcHRpb25zJyApO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3JcdDogJ2F2YXRhci1saXN0Jyxcblx0dGVtcGxhdGVVcmxcdDogJy4vYXZhdGFyLWxpc3QucHVnJyxcbn0pXG5leHBvcnQgY2xhc3MgQXZhdGFyTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cblx0QElucHV0KCkgcHVibGljIGl0ZW1zOiBBcnJheTxhbnk+O1xuXHRASW5wdXQoKSBwdWJsaWMgYm9hcmQ6IGJvb2xlYW4gPSAoIHRoaXMuZGVmYXVsdE9wdGlvbnMgfHwge30gKS5ib2FyZDtcblx0QElucHV0KCkgcHVibGljIGFsd2F5c1Zpc2libGU6IGJvb2xlYW4gPSAoIHRoaXMuZGVmYXVsdE9wdGlvbnMgfHwge30gKS5hbHdheXNWaXNpYmxlO1xuXHRASW5wdXQoKSBwdWJsaWMgc2l6ZTogbnVtYmVyID0gKCB0aGlzLmRlZmF1bHRPcHRpb25zIHx8IHt9ICkuc2l6ZSB8fCA0MDtcblx0QElucHV0KCkgcHVibGljIGJvYXJkSGVpZ2h0OiBudW1iZXIgPSAoIHRoaXMuZGVmYXVsdE9wdGlvbnMgfHwge30gKS5ib2FyZEhlaWdodCB8fCA0MDtcblx0QElucHV0KCkgcHVibGljIG1heGltdW06IG51bWJlciA9ICggdGhpcy5kZWZhdWx0T3B0aW9ucyB8fCB7fSApLm1heGltdW0gfHwgOTtcblx0QElucHV0KCkgcHVibGljIHJvdW5kZWQ6IGJvb2xlYW4gPSAoIHRoaXMuZGVmYXVsdE9wdGlvbnMgfHwge30gKS5yb3VuZGVkICE9PSB1bmRlZmluZWRcblx0XHQ/ICggdGhpcy5kZWZhdWx0T3B0aW9ucyB8fCB7fSApLnJvdW5kZWRcblx0XHQ6IGZhbHNlO1xuXHRASW5wdXQoKSBwdWJsaWMgbGF6eTogYm9vbGVhbiA9ICggdGhpcy5kZWZhdWx0T3B0aW9ucyB8fCB7fSApLmxhenkgIT09IHVuZGVmaW5lZFxuXHRcdD8gKCB0aGlzLmRlZmF1bHRPcHRpb25zIHx8IHt9ICkubGF6eVxuXHRcdDogdHJ1ZTtcblxuXHRwdWJsaWMgaGFuZGxlZEl0ZW1zOiBBcnJheTxhbnk+O1xuXG5cdC8qKlxuXHQqIEBjb25zdHJ1Y3RvclxuXHQqIEBwYXJhbSB7YW55fSBkZWZhdWx0T3B0aW9uc1xuXHQqL1xuXHRjb25zdHJ1Y3RvciggQE9wdGlvbmFsKCkgQEluamVjdCggQVZBVEFSX0xJU1RfREVGQVVMVF9PUFRJT05TICkgcmVhZG9ubHkgZGVmYXVsdE9wdGlvbnM6IGFueSApIHt9XG5cblx0LyoqXG5cdCogQGNvbnN0cnVjdG9yXG5cdCogQHBhcmFtIHtTaW1wbGVDaGFuZ2VzfSBjaGFuZ2VzXG5cdCovXG5cdHB1YmxpYyBuZ09uQ2hhbmdlcyggY2hhbmdlczogU2ltcGxlQ2hhbmdlcyApIHtcblx0XHRpZiAoICFjaGFuZ2VzLml0ZW1zICkgcmV0dXJuO1xuXHRcdHRoaXMuaGFuZGxlZEl0ZW1zID0gdGhpcy5oYW5kbGVBdmF0YXJMaXN0KCB0aGlzLml0ZW1zLCB0aGlzLm1heGltdW0gKTtcblx0fVxuXG5cdC8qKlxuXHQqIEhhbmRsZSBhdmF0YXIgbGlzdFxuXHQqIEBwYXJhbSB7QXJyYXl9IGl0ZW1zXG5cdCogQHBhcmFtIHtudW1iZXJ9IG1heGltdW1cblx0KiBAcmV0dXJuIHtBcnJheX1cblx0Ki9cblx0cHVibGljIGhhbmRsZUF2YXRhckxpc3QoIGl0ZW1zOiBBcnJheTxhbnk+LCBtYXhpbXVtOiBudW1iZXIgKTogQXJyYXk8YW55PiB7XG5cdFx0Y29uc3QgYXJyOiBBcnJheTxhbnk+ID0gW107XG5cblx0XHRfLmVhY2goIGl0ZW1zLCAoIGl0ZW06IGFueSwgaW5kZXg6IG51bWJlciApID0+IHtcblx0XHRcdGNvbnN0IF9pdGVtOiBhbnkgPSBfLmNsb25lKCBpdGVtICk7XG5cblx0XHRcdGlmICggKCBpbmRleCArIDEgKSA+IG1heGltdW0gKSB7XG5cdFx0XHRcdGNvbnN0IGxhc3RJdGVtOiBhbnkgPSBhcnJbIG1heGltdW0gXSB8fCB7IGlzX2NvdW50X2l0ZW06IHRydWUgfTtcblxuXHRcdFx0XHRpZiAoICFsYXN0SXRlbS5mdWxsX25hbWUgKSB7XG5cdFx0XHRcdFx0bGFzdEl0ZW0uZnVsbF9uYW1lID0gJyc7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0bGFzdEl0ZW0uZnVsbF9uYW1lICs9ICcsICc7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoICFsYXN0SXRlbS5jb3VudCApIGxhc3RJdGVtLmNvdW50ID0gMDtcblxuXHRcdFx0XHRsYXN0SXRlbS5mdWxsX25hbWUgKz0gKCBfaXRlbS5mdWxsX25hbWUgfHwgJ04vQScgKSArIGAgKCR7IF9pdGVtLmVtYWlsIH0pYDtcblx0XHRcdFx0bGFzdEl0ZW0uY291bnQrKztcblx0XHRcdFx0YXJyWyBtYXhpbXVtIF0gPSBsYXN0SXRlbTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRfaXRlbS5mdWxsX25hbWUgPSAoIF9pdGVtLmZ1bGxfbmFtZSB8fCAnTi9BJyApICsgYCAoJHsgX2l0ZW0uZW1haWwgfSlgO1xuXHRcdFx0YXJyLnB1c2goIF9pdGVtICk7XG5cdFx0fSApO1xuXG5cdFx0cmV0dXJuIGFycjtcblx0fVxuXG59XG4iXX0=