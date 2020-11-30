import * as tslib_1 from "tslib";
import { Component, Output, EventEmitter, Input, ViewChild, ViewEncapsulation, Optional, Inject, InjectionToken } from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material';
import _ from 'underscore';
export const COLLAPSE_PAGINATOR_DEFAULT_OPTIONS = new InjectionToken('defaultOptions');
let CollapsePaginatorComponent = class CollapsePaginatorComponent {
    /**
    * @constructor
    * @param {any} defaultOptions
    */
    constructor(defaultOptions) {
        this.defaultOptions = defaultOptions;
        this.pageIndex = 0;
        this.pageSize = 15;
        this.pageSizeOptions = [15, 25, 50];
        this.showFirstLastButtons = true;
        this.paginatorRef = new EventEmitter();
        this.page = new EventEmitter();
    }
    /**
    * @constructor
    */
    ngAfterViewInit() {
        this.paginator._intl.getRangeLabel = this.getExpansionRangeLabel;
        this.paginatorRef.emit(this.paginator);
    }
    /**
    * @constructor
    */
    ngAfterContentInit() {
        this.realPageSizeOptions = _.map(this.pageSizeOptions, (size) => size * 2);
    }
    /**
    * @constructor
    */
    ngOnDestroy() {
        this.paginator._intl.getRangeLabel = new MatPaginatorIntl().getRangeLabel;
    }
    /**
    * Get expansion range label for table paginator
    * @desc Fixed mat-table wrong pagination when has expanded row.
    * @param {number} page
    * @param {number} pageSize
    * @param {number} length
    * @return {string} Range label
    */
    getExpansionRangeLabel(page, pageSize, length) {
        if (length === 0 || pageSize === 0)
            return `0 of ${length}`;
        length /= 2;
        pageSize /= 2;
        length = Math.max(length, 0);
        const startIndex = page * pageSize;
        const endIndex = startIndex < length
            ? Math.min(startIndex + pageSize, length)
            : startIndex + pageSize;
        return `${startIndex + 1} - ${endIndex} of ${length}`;
    }
    /**
    * Handle page change event
    * @param {any} ev
    * @return {void}
    */
    onPageChange(ev) {
        if (this.pageSize !== ev.pageSize)
            this.pageIndex = 0;
        this.paginator.pageIndex = this.pageIndex;
        this.paginator._changePageSize(ev.pageSize * 2);
        this.page.emit(ev);
    }
};
CollapsePaginatorComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [COLLAPSE_PAGINATOR_DEFAULT_OPTIONS,] }] }
];
tslib_1.__decorate([
    ViewChild('__paginator'),
    tslib_1.__metadata("design:type", MatPaginator)
], CollapsePaginatorComponent.prototype, "paginator", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number)
], CollapsePaginatorComponent.prototype, "pageIndex", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number)
], CollapsePaginatorComponent.prototype, "pageSize", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Array)
], CollapsePaginatorComponent.prototype, "pageSizeOptions", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], CollapsePaginatorComponent.prototype, "showFirstLastButtons", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], CollapsePaginatorComponent.prototype, "paginatorRef", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], CollapsePaginatorComponent.prototype, "page", void 0);
CollapsePaginatorComponent = tslib_1.__decorate([
    Component({
        selector: 'collapse-paginator',
        template: "<div class=\"collapse-paginator layout-row layout-align-end-center\" [ngClass]=\"defaultOptions?.componentClass\"><mat-paginator [ngClass]=\"defaultOptions?.paginatorClass\" [pageIndex]=\"pageIndex\" [pageSize]=\"pageSize\" [pageSizeOptions]=\"pageSizeOptions\" (page)=\"onPageChange( $event )\" [showFirstLastButtons]=\"showFirstLastButtons\"></mat-paginator><mat-paginator #__paginator hidePageSize=\"true\" [ngClass]=\"defaultOptions?.paginatorClass\" [pageIndex]=\"pageIndex\" [pageSize]=\"pageSize * 2\" [pageSizeOptions]=\"realPageSizeOptions\" [showFirstLastButtons]=\"showFirstLastButtons\"></mat-paginator></div>",
        encapsulation: ViewEncapsulation.None,
        styles: [".collapse-paginator .mat-paginator:first-child .mat-paginator-range-actions{display:none}.collapse-paginator .mat-paginator:first-child .mat-paginator-container{padding-right:0}.collapse-paginator .mat-paginator:last-child .mat-paginator-container{padding-left:0}"]
    }),
    tslib_1.__param(0, Optional()), tslib_1.__param(0, Inject(COLLAPSE_PAGINATOR_DEFAULT_OPTIONS)),
    tslib_1.__metadata("design:paramtypes", [Object])
], CollapsePaginatorComponent);
export { CollapsePaginatorComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGFwc2UtcGFnaW5hdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItY29yZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NvbGxhcHNlLXBhZ2luYXRvci9jb2xsYXBzZS1wYWdpbmF0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ04sU0FBUyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQy9CLEtBQUssRUFBRSxTQUFTLEVBQ2lCLGlCQUFpQixFQUNsRCxRQUFRLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFDaEMsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25FLE9BQU8sQ0FBQyxNQUFNLFlBQVksQ0FBQztBQUUzQixNQUFNLENBQUMsTUFBTSxrQ0FBa0MsR0FBd0IsSUFBSSxjQUFjLENBQU8sZ0JBQWdCLENBQUUsQ0FBQztBQVFuSCxJQUFhLDBCQUEwQixHQUF2QyxNQUFhLDBCQUEwQjtJQWN0Qzs7O01BR0U7SUFDRixZQUFnRixjQUFtQjtRQUFuQixtQkFBYyxHQUFkLGNBQWMsQ0FBSztRQWRuRixjQUFTLEdBQVcsQ0FBQyxDQUFDO1FBQ3RCLGFBQVEsR0FBVyxFQUFFLENBQUM7UUFDdEIsb0JBQWUsR0FBa0IsQ0FBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBRSxDQUFDO1FBQ2hELHlCQUFvQixHQUFZLElBQUksQ0FBQztRQUVwQyxpQkFBWSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBQzFELFNBQUksR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQVFvQyxDQUFDO0lBRXhHOztNQUVFO0lBQ0ssZUFBZTtRQUNyQixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDO1FBQ2pFLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFFLElBQUksQ0FBQyxTQUFTLENBQUUsQ0FBQztJQUMxQyxDQUFDO0lBRUQ7O01BRUU7SUFDSyxrQkFBa0I7UUFDeEIsSUFBSSxDQUFDLG1CQUFtQixHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUUsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFFLElBQVksRUFBRyxFQUFFLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBRSxDQUFDO0lBQ3hGLENBQUM7SUFFRDs7TUFFRTtJQUNLLFdBQVc7UUFDakIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsYUFBYSxHQUFHLElBQUksZ0JBQWdCLEVBQUUsQ0FBQyxhQUFhLENBQUM7SUFDM0UsQ0FBQztJQUVEOzs7Ozs7O01BT0U7SUFDSyxzQkFBc0IsQ0FBRSxJQUFZLEVBQUUsUUFBZ0IsRUFBRSxNQUFjO1FBQzVFLElBQUssTUFBTSxLQUFLLENBQUMsSUFBSSxRQUFRLEtBQUssQ0FBQztZQUFHLE9BQU8sUUFBUSxNQUFNLEVBQUUsQ0FBQztRQUU5RCxNQUFNLElBQUksQ0FBQyxDQUFDO1FBQ1osUUFBUSxJQUFJLENBQUMsQ0FBQztRQUVkLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFFLE1BQU0sRUFBRSxDQUFDLENBQUUsQ0FBQztRQUUvQixNQUFNLFVBQVUsR0FBVyxJQUFJLEdBQUcsUUFBUSxDQUFDO1FBQzNDLE1BQU0sUUFBUSxHQUFXLFVBQVUsR0FBRyxNQUFNO1lBQzNDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFFLFVBQVUsR0FBRyxRQUFRLEVBQUUsTUFBTSxDQUFFO1lBQzNDLENBQUMsQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDO1FBRXpCLE9BQU8sR0FBRyxVQUFVLEdBQUcsQ0FBQyxNQUFNLFFBQVEsT0FBTyxNQUFNLEVBQUUsQ0FBQztJQUN2RCxDQUFDO0lBRUQ7Ozs7TUFJRTtJQUNLLFlBQVksQ0FBRSxFQUFPO1FBQzNCLElBQUssSUFBSSxDQUFDLFFBQVEsS0FBSyxFQUFFLENBQUMsUUFBUTtZQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBRXhELElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUUsRUFBRSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUUsQ0FBQztRQUNsRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBRSxFQUFFLENBQUUsQ0FBQztJQUN0QixDQUFDO0NBRUQsQ0FBQTs7NENBN0RjLFFBQVEsWUFBSSxNQUFNLFNBQUUsa0NBQWtDOztBQWhCeEM7SUFBM0IsU0FBUyxDQUFFLGFBQWEsQ0FBRTtzQ0FBbUIsWUFBWTs2REFBQztBQUVsRDtJQUFSLEtBQUssRUFBRTs7NkRBQThCO0FBQzdCO0lBQVIsS0FBSyxFQUFFOzs0REFBOEI7QUFDN0I7SUFBUixLQUFLLEVBQUU7c0NBQXlCLEtBQUs7bUVBQTBCO0FBQ3ZEO0lBQVIsS0FBSyxFQUFFOzt3RUFBNkM7QUFFM0M7SUFBVCxNQUFNLEVBQUU7c0NBQXNCLFlBQVk7Z0VBQWdDO0FBQ2pFO0lBQVQsTUFBTSxFQUFFO3NDQUFjLFlBQVk7d0RBQWdDO0FBVnZELDBCQUEwQjtJQU50QyxTQUFTLENBQUM7UUFDVixRQUFRLEVBQUksb0JBQW9CO1FBQ2hDLHluQkFBeUM7UUFFekMsYUFBYSxFQUFHLGlCQUFpQixDQUFDLElBQUk7O0tBQ3RDLENBQUM7SUFtQmEsbUJBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxtQkFBQSxNQUFNLENBQUUsa0NBQWtDLENBQUUsQ0FBQTs7R0FsQjFELDBCQUEwQixDQStFdEM7U0EvRVksMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0Q29tcG9uZW50LCBPdXRwdXQsIEV2ZW50RW1pdHRlcixcblx0SW5wdXQsIFZpZXdDaGlsZCwgT25EZXN0cm95LFxuXHRBZnRlckNvbnRlbnRJbml0LCBBZnRlclZpZXdJbml0LCBWaWV3RW5jYXBzdWxhdGlvbixcblx0T3B0aW9uYWwsIEluamVjdCwgSW5qZWN0aW9uVG9rZW5cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXRQYWdpbmF0b3IsIE1hdFBhZ2luYXRvckludGwgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgXyBmcm9tICd1bmRlcnNjb3JlJztcblxuZXhwb3J0IGNvbnN0IENPTExBUFNFX1BBR0lOQVRPUl9ERUZBVUxUX09QVElPTlM6IEluamVjdGlvblRva2VuPGFueT4gPSBuZXcgSW5qZWN0aW9uVG9rZW48YW55PiggJ2RlZmF1bHRPcHRpb25zJyApO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3JcdFx0OiAnY29sbGFwc2UtcGFnaW5hdG9yJyxcblx0dGVtcGxhdGVVcmxcdFx0OiAnLi9jb2xsYXBzZS1wYWdpbmF0b3IucHVnJyxcblx0c3R5bGVVcmxzXHRcdDogWyAnLi9jb2xsYXBzZS1wYWdpbmF0b3Iuc2NzcycgXSxcblx0ZW5jYXBzdWxhdGlvblx0OiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBDb2xsYXBzZVBhZ2luYXRvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCwgQWZ0ZXJDb250ZW50SW5pdCB7XG5cblx0QFZpZXdDaGlsZCggJ19fcGFnaW5hdG9yJyApIHB1YmxpYyBwYWdpbmF0b3I6IE1hdFBhZ2luYXRvcjtcblxuXHRASW5wdXQoKSBwdWJsaWMgcGFnZUluZGV4OiBudW1iZXIgPSAwO1xuXHRASW5wdXQoKSBwdWJsaWMgcGFnZVNpemU6IG51bWJlciA9IDE1O1xuXHRASW5wdXQoKSBwdWJsaWMgcGFnZVNpemVPcHRpb25zOiBBcnJheTxudW1iZXI+ID0gWyAxNSwgMjUsIDUwIF07XG5cdEBJbnB1dCgpIHB1YmxpYyBzaG93Rmlyc3RMYXN0QnV0dG9uczogYm9vbGVhbiA9IHRydWU7XG5cblx0QE91dHB1dCgpIHB1YmxpYyBwYWdpbmF0b3JSZWY6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cdEBPdXRwdXQoKSBwdWJsaWMgcGFnZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuXHRwdWJsaWMgcmVhbFBhZ2VTaXplT3B0aW9uczogQXJyYXk8bnVtYmVyPjtcblxuXHQvKipcblx0KiBAY29uc3RydWN0b3Jcblx0KiBAcGFyYW0ge2FueX0gZGVmYXVsdE9wdGlvbnNcblx0Ki9cblx0Y29uc3RydWN0b3IoIEBPcHRpb25hbCgpIEBJbmplY3QoIENPTExBUFNFX1BBR0lOQVRPUl9ERUZBVUxUX09QVElPTlMgKSByZWFkb25seSBkZWZhdWx0T3B0aW9uczogYW55ICkge31cblxuXHQvKipcblx0KiBAY29uc3RydWN0b3Jcblx0Ki9cblx0cHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblx0XHR0aGlzLnBhZ2luYXRvci5faW50bC5nZXRSYW5nZUxhYmVsID0gdGhpcy5nZXRFeHBhbnNpb25SYW5nZUxhYmVsO1xuXHRcdHRoaXMucGFnaW5hdG9yUmVmLmVtaXQoIHRoaXMucGFnaW5hdG9yICk7XG5cdH1cblxuXHQvKipcblx0KiBAY29uc3RydWN0b3Jcblx0Ki9cblx0cHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcblx0XHR0aGlzLnJlYWxQYWdlU2l6ZU9wdGlvbnMgPSBfLm1hcCggdGhpcy5wYWdlU2l6ZU9wdGlvbnMsICggc2l6ZTogbnVtYmVyICkgPT4gc2l6ZSAqIDIgKTtcblx0fVxuXG5cdC8qKlxuXHQqIEBjb25zdHJ1Y3RvclxuXHQqL1xuXHRwdWJsaWMgbmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy5wYWdpbmF0b3IuX2ludGwuZ2V0UmFuZ2VMYWJlbCA9IG5ldyBNYXRQYWdpbmF0b3JJbnRsKCkuZ2V0UmFuZ2VMYWJlbDtcblx0fVxuXG5cdC8qKlxuXHQqIEdldCBleHBhbnNpb24gcmFuZ2UgbGFiZWwgZm9yIHRhYmxlIHBhZ2luYXRvclxuXHQqIEBkZXNjIEZpeGVkIG1hdC10YWJsZSB3cm9uZyBwYWdpbmF0aW9uIHdoZW4gaGFzIGV4cGFuZGVkIHJvdy5cblx0KiBAcGFyYW0ge251bWJlcn0gcGFnZVxuXHQqIEBwYXJhbSB7bnVtYmVyfSBwYWdlU2l6ZVxuXHQqIEBwYXJhbSB7bnVtYmVyfSBsZW5ndGhcblx0KiBAcmV0dXJuIHtzdHJpbmd9IFJhbmdlIGxhYmVsXG5cdCovXG5cdHB1YmxpYyBnZXRFeHBhbnNpb25SYW5nZUxhYmVsKCBwYWdlOiBudW1iZXIsIHBhZ2VTaXplOiBudW1iZXIsIGxlbmd0aDogbnVtYmVyICk6IGFueSB7XG5cdFx0aWYgKCBsZW5ndGggPT09IDAgfHwgcGFnZVNpemUgPT09IDAgKSByZXR1cm4gYDAgb2YgJHtsZW5ndGh9YDtcblxuXHRcdGxlbmd0aCAvPSAyO1xuXHRcdHBhZ2VTaXplIC89IDI7XG5cblx0XHRsZW5ndGggPSBNYXRoLm1heCggbGVuZ3RoLCAwICk7XG5cblx0XHRjb25zdCBzdGFydEluZGV4OiBudW1iZXIgPSBwYWdlICogcGFnZVNpemU7XG5cdFx0Y29uc3QgZW5kSW5kZXg6IG51bWJlciA9IHN0YXJ0SW5kZXggPCBsZW5ndGhcblx0XHRcdD8gTWF0aC5taW4oIHN0YXJ0SW5kZXggKyBwYWdlU2l6ZSwgbGVuZ3RoIClcblx0XHRcdDogc3RhcnRJbmRleCArIHBhZ2VTaXplO1xuXG5cdFx0cmV0dXJuIGAke3N0YXJ0SW5kZXggKyAxfSAtICR7ZW5kSW5kZXh9IG9mICR7bGVuZ3RofWA7XG5cdH1cblxuXHQvKipcblx0KiBIYW5kbGUgcGFnZSBjaGFuZ2UgZXZlbnRcblx0KiBAcGFyYW0ge2FueX0gZXZcblx0KiBAcmV0dXJuIHt2b2lkfVxuXHQqL1xuXHRwdWJsaWMgb25QYWdlQ2hhbmdlKCBldjogYW55ICkge1xuXHRcdGlmICggdGhpcy5wYWdlU2l6ZSAhPT0gZXYucGFnZVNpemUgKSB0aGlzLnBhZ2VJbmRleCA9IDA7XG5cblx0XHR0aGlzLnBhZ2luYXRvci5wYWdlSW5kZXggPSB0aGlzLnBhZ2VJbmRleDtcblx0XHR0aGlzLnBhZ2luYXRvci5fY2hhbmdlUGFnZVNpemUoIGV2LnBhZ2VTaXplICogMiApO1xuXHRcdHRoaXMucGFnZS5lbWl0KCBldiApO1xuXHR9XG5cbn1cbiJdfQ==