import * as tslib_1 from "tslib";
import { Input, Component, Optional, Inject, InjectionToken } from '@angular/core';
import _ from 'underscore';
export const AVATAR_LIST_DEFAULT_OPTIONS = new InjectionToken('defaultOptions');
let AvatarListComponent = class AvatarListComponent {
    /**
    * @constructor
    * @param {any} defaultOptions
    */
    constructor(defaultOptions) {
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
    ngOnChanges(changes) {
        if (!changes.items)
            return;
        this.handledItems = this.handleAvatarList(this.items, this.maximum);
    }
    /**
    * Handle avatar list
    * @param {Array} items
    * @param {number} maximum
    * @return {Array}
    */
    handleAvatarList(items, maximum) {
        const arr = [];
        _.each(items, (item, index) => {
            const _item = _.clone(item);
            if ((index + 1) > maximum) {
                const lastItem = arr[maximum] || { is_count_item: true };
                if (!lastItem.full_name) {
                    lastItem.full_name = '';
                }
                else {
                    lastItem.full_name += ', ';
                }
                if (!lastItem.count)
                    lastItem.count = 0;
                lastItem.full_name += (_item.full_name || 'N/A') + ` (${_item.email})`;
                lastItem.count++;
                arr[maximum] = lastItem;
                return;
            }
            _item.full_name = (_item.full_name || 'N/A') + ` (${_item.email})`;
            arr.push(_item);
        });
        return arr;
    }
};
AvatarListComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [AVATAR_LIST_DEFAULT_OPTIONS,] }] }
];
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
export { AvatarListComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXZhdGFyLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1jb3JlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvYXZhdGFyLWxpc3QvYXZhdGFyLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ04sS0FBSyxFQUFFLFNBQVMsRUFDRCxRQUFRLEVBQ3ZCLE1BQU0sRUFBRSxjQUFjLEVBQ3RCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sQ0FBQyxNQUFNLFlBQVksQ0FBQztBQUUzQixNQUFNLENBQUMsTUFBTSwyQkFBMkIsR0FBd0IsSUFBSSxjQUFjLENBQU8sZ0JBQWdCLENBQUUsQ0FBQztBQU81RyxJQUFhLG1CQUFtQixHQUFoQyxNQUFhLG1CQUFtQjtJQVkvQjs7O01BR0U7SUFDRixZQUF5RSxjQUFtQjtRQUFuQixtQkFBYyxHQUFkLGNBQWMsQ0FBSztRQWI1RSxVQUFLLEdBQVksQ0FBRSxJQUFJLENBQUMsY0FBYyxJQUFJLEVBQUUsQ0FBRSxDQUFDLEtBQUssQ0FBQztRQUNyRCxrQkFBYSxHQUFZLENBQUUsSUFBSSxDQUFDLGNBQWMsSUFBSSxFQUFFLENBQUUsQ0FBQyxhQUFhLENBQUM7UUFDckUsU0FBSSxHQUFXLENBQUUsSUFBSSxDQUFDLGNBQWMsSUFBSSxFQUFFLENBQUUsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ3hELGdCQUFXLEdBQVcsQ0FBRSxJQUFJLENBQUMsY0FBYyxJQUFJLEVBQUUsQ0FBRSxDQUFDLFdBQVcsSUFBSSxFQUFFLENBQUM7UUFDdEUsWUFBTyxHQUFXLENBQUUsSUFBSSxDQUFDLGNBQWMsSUFBSSxFQUFFLENBQUUsQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDO1FBQzdELFNBQUksR0FBWSxDQUFFLElBQUksQ0FBQyxjQUFjLElBQUksRUFBRSxDQUFFLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQztJQVFxQixDQUFDO0lBRWpHOzs7TUFHRTtJQUNLLFdBQVcsQ0FBRSxPQUFzQjtRQUN6QyxJQUFLLENBQUMsT0FBTyxDQUFDLEtBQUs7WUFBRyxPQUFPO1FBQzdCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBRSxDQUFDO0lBQ3ZFLENBQUM7SUFFRDs7Ozs7TUFLRTtJQUNLLGdCQUFnQixDQUFFLEtBQWlCLEVBQUUsT0FBZTtRQUMxRCxNQUFNLEdBQUcsR0FBZSxFQUFFLENBQUM7UUFFM0IsQ0FBQyxDQUFDLElBQUksQ0FBRSxLQUFLLEVBQUUsQ0FBRSxJQUFTLEVBQUUsS0FBYSxFQUFHLEVBQUU7WUFDN0MsTUFBTSxLQUFLLEdBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBRSxJQUFJLENBQUUsQ0FBQztZQUVuQyxJQUFLLENBQUUsS0FBSyxHQUFHLENBQUMsQ0FBRSxHQUFHLE9BQU8sRUFBRztnQkFDOUIsTUFBTSxRQUFRLEdBQVEsR0FBRyxDQUFFLE9BQU8sQ0FBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxDQUFDO2dCQUVoRSxJQUFLLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRztvQkFDMUIsUUFBUSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7aUJBQ3hCO3FCQUFNO29CQUNOLFFBQVEsQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDO2lCQUMzQjtnQkFFRCxJQUFLLENBQUMsUUFBUSxDQUFDLEtBQUs7b0JBQUcsUUFBUSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7Z0JBRTFDLFFBQVEsQ0FBQyxTQUFTLElBQUksQ0FBRSxLQUFLLENBQUMsU0FBUyxJQUFJLEtBQUssQ0FBRSxHQUFHLEtBQU0sS0FBSyxDQUFDLEtBQU0sR0FBRyxDQUFDO2dCQUMzRSxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ2pCLEdBQUcsQ0FBRSxPQUFPLENBQUUsR0FBRyxRQUFRLENBQUM7Z0JBQzFCLE9BQU87YUFDUDtZQUVELEtBQUssQ0FBQyxTQUFTLEdBQUcsQ0FBRSxLQUFLLENBQUMsU0FBUyxJQUFJLEtBQUssQ0FBRSxHQUFHLEtBQU0sS0FBSyxDQUFDLEtBQU0sR0FBRyxDQUFDO1lBQ3ZFLEdBQUcsQ0FBQyxJQUFJLENBQUUsS0FBSyxDQUFFLENBQUM7UUFDbkIsQ0FBQyxDQUFFLENBQUM7UUFFSixPQUFPLEdBQUcsQ0FBQztJQUNaLENBQUM7Q0FFRCxDQUFBOzs0Q0EvQ2MsUUFBUSxZQUFJLE1BQU0sU0FBRSwyQkFBMkI7O0FBZHBEO0lBQVIsS0FBSyxFQUFFO3NDQUFlLEtBQUs7a0RBQU07QUFDekI7SUFBUixLQUFLLEVBQUU7O2tEQUE2RDtBQUM1RDtJQUFSLEtBQUssRUFBRTs7MERBQTZFO0FBQzVFO0lBQVIsS0FBSyxFQUFFOztpREFBZ0U7QUFDL0Q7SUFBUixLQUFLLEVBQUU7O3dEQUE4RTtBQUM3RTtJQUFSLEtBQUssRUFBRTs7b0RBQXFFO0FBQ3BFO0lBQVIsS0FBSyxFQUFFOztpREFBbUU7QUFSL0QsbUJBQW1CO0lBTC9CLFNBQVMsQ0FBQztRQUNWLFFBQVEsRUFBRyxhQUFhO1FBQ3hCLHd1Q0FBaUM7O0tBRWpDLENBQUM7SUFpQmEsbUJBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxtQkFBQSxNQUFNLENBQUUsMkJBQTJCLENBQUUsQ0FBQTs7R0FoQm5ELG1CQUFtQixDQStEL0I7U0EvRFksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0SW5wdXQsIENvbXBvbmVudCwgT25DaGFuZ2VzLFxuXHRTaW1wbGVDaGFuZ2VzLCBPcHRpb25hbCxcblx0SW5qZWN0LCBJbmplY3Rpb25Ub2tlblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBfIGZyb20gJ3VuZGVyc2NvcmUnO1xuXG5leHBvcnQgY29uc3QgQVZBVEFSX0xJU1RfREVGQVVMVF9PUFRJT05TOiBJbmplY3Rpb25Ub2tlbjxhbnk+ID0gbmV3IEluamVjdGlvblRva2VuPGFueT4oICdkZWZhdWx0T3B0aW9ucycgKTtcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yXHQ6ICdhdmF0YXItbGlzdCcsXG5cdHRlbXBsYXRlVXJsXHQ6ICcuL2F2YXRhci1saXN0LnB1ZycsXG5cdHN0eWxlVXJsc1x0OiBbICcuL2F2YXRhci1saXN0LnNjc3MnIF0sXG59KVxuZXhwb3J0IGNsYXNzIEF2YXRhckxpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG5cdEBJbnB1dCgpIHB1YmxpYyBpdGVtczogQXJyYXk8YW55Pjtcblx0QElucHV0KCkgcHVibGljIGJvYXJkOiBib29sZWFuID0gKCB0aGlzLmRlZmF1bHRPcHRpb25zIHx8IHt9ICkuYm9hcmQ7XG5cdEBJbnB1dCgpIHB1YmxpYyBhbHdheXNWaXNpYmxlOiBib29sZWFuID0gKCB0aGlzLmRlZmF1bHRPcHRpb25zIHx8IHt9ICkuYWx3YXlzVmlzaWJsZTtcblx0QElucHV0KCkgcHVibGljIHNpemU6IG51bWJlciA9ICggdGhpcy5kZWZhdWx0T3B0aW9ucyB8fCB7fSApLnNpemUgfHwgNDA7XG5cdEBJbnB1dCgpIHB1YmxpYyBib2FyZEhlaWdodDogbnVtYmVyID0gKCB0aGlzLmRlZmF1bHRPcHRpb25zIHx8IHt9ICkuYm9hcmRIZWlnaHQgfHwgNDA7XG5cdEBJbnB1dCgpIHB1YmxpYyBtYXhpbXVtOiBudW1iZXIgPSAoIHRoaXMuZGVmYXVsdE9wdGlvbnMgfHwge30gKS5tYXhpbXVtIHx8IDk7XG5cdEBJbnB1dCgpIHB1YmxpYyBsYXp5OiBib29sZWFuID0gKCB0aGlzLmRlZmF1bHRPcHRpb25zIHx8IHt9ICkubGF6eSB8fCB0cnVlO1xuXG5cdHB1YmxpYyBoYW5kbGVkSXRlbXM6IEFycmF5PGFueT47XG5cblx0LyoqXG5cdCogQGNvbnN0cnVjdG9yXG5cdCogQHBhcmFtIHthbnl9IGRlZmF1bHRPcHRpb25zXG5cdCovXG5cdGNvbnN0cnVjdG9yKCBAT3B0aW9uYWwoKSBASW5qZWN0KCBBVkFUQVJfTElTVF9ERUZBVUxUX09QVElPTlMgKSByZWFkb25seSBkZWZhdWx0T3B0aW9uczogYW55ICkge31cblxuXHQvKipcblx0KiBAY29uc3RydWN0b3Jcblx0KiBAcGFyYW0ge1NpbXBsZUNoYW5nZXN9IGNoYW5nZXNcblx0Ki9cblx0cHVibGljIG5nT25DaGFuZ2VzKCBjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzICkge1xuXHRcdGlmICggIWNoYW5nZXMuaXRlbXMgKSByZXR1cm47XG5cdFx0dGhpcy5oYW5kbGVkSXRlbXMgPSB0aGlzLmhhbmRsZUF2YXRhckxpc3QoIHRoaXMuaXRlbXMsIHRoaXMubWF4aW11bSApO1xuXHR9XG5cblx0LyoqXG5cdCogSGFuZGxlIGF2YXRhciBsaXN0XG5cdCogQHBhcmFtIHtBcnJheX0gaXRlbXNcblx0KiBAcGFyYW0ge251bWJlcn0gbWF4aW11bVxuXHQqIEByZXR1cm4ge0FycmF5fVxuXHQqL1xuXHRwdWJsaWMgaGFuZGxlQXZhdGFyTGlzdCggaXRlbXM6IEFycmF5PGFueT4sIG1heGltdW06IG51bWJlciApOiBBcnJheTxhbnk+IHtcblx0XHRjb25zdCBhcnI6IEFycmF5PGFueT4gPSBbXTtcblxuXHRcdF8uZWFjaCggaXRlbXMsICggaXRlbTogYW55LCBpbmRleDogbnVtYmVyICkgPT4ge1xuXHRcdFx0Y29uc3QgX2l0ZW06IGFueSA9IF8uY2xvbmUoIGl0ZW0gKTtcblxuXHRcdFx0aWYgKCAoIGluZGV4ICsgMSApID4gbWF4aW11bSApIHtcblx0XHRcdFx0Y29uc3QgbGFzdEl0ZW06IGFueSA9IGFyclsgbWF4aW11bSBdIHx8IHsgaXNfY291bnRfaXRlbTogdHJ1ZSB9O1xuXG5cdFx0XHRcdGlmICggIWxhc3RJdGVtLmZ1bGxfbmFtZSApIHtcblx0XHRcdFx0XHRsYXN0SXRlbS5mdWxsX25hbWUgPSAnJztcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRsYXN0SXRlbS5mdWxsX25hbWUgKz0gJywgJztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICggIWxhc3RJdGVtLmNvdW50ICkgbGFzdEl0ZW0uY291bnQgPSAwO1xuXG5cdFx0XHRcdGxhc3RJdGVtLmZ1bGxfbmFtZSArPSAoIF9pdGVtLmZ1bGxfbmFtZSB8fCAnTi9BJyApICsgYCAoJHsgX2l0ZW0uZW1haWwgfSlgO1xuXHRcdFx0XHRsYXN0SXRlbS5jb3VudCsrO1xuXHRcdFx0XHRhcnJbIG1heGltdW0gXSA9IGxhc3RJdGVtO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdF9pdGVtLmZ1bGxfbmFtZSA9ICggX2l0ZW0uZnVsbF9uYW1lIHx8ICdOL0EnICkgKyBgICgkeyBfaXRlbS5lbWFpbCB9KWA7XG5cdFx0XHRhcnIucHVzaCggX2l0ZW0gKTtcblx0XHR9ICk7XG5cblx0XHRyZXR1cm4gYXJyO1xuXHR9XG5cbn1cbiJdfQ==