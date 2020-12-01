import * as tslib_1 from "tslib";
import { Component, Output, EventEmitter, Input, ViewChild, Optional, Inject, InjectionToken } from '@angular/core';
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
        this.pageIndex = (this.defaultOptions || {}).pageIndex || 0;
        this.pageSize = (this.defaultOptions || {}).pageSize || 15;
        this.pageSizeOptions = (this.defaultOptions || {}).pageSizeOptions || [15, 25, 50];
        this.showFirstLastButtons = (this.defaultOptions || {}).showFirstLastButtons !== undefined
            ? (this.defaultOptions || {}).showFirstLastButtons
            : true;
        this.paginatorRef = new EventEmitter();
        this.page = new EventEmitter();
    }
    /**
    * @constructor
    */
    ngAfterViewInit() {
        this.paginator._intl = new MatPaginatorIntl();
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
        template: "<div class=\"collapse-paginator layout-row layout-align-end-center\" [ngClass]=\"defaultOptions?.componentClass\"><mat-paginator [ngClass]=\"defaultOptions?.paginatorClass\" [pageIndex]=\"pageIndex\" [pageSize]=\"pageSize\" [pageSizeOptions]=\"pageSizeOptions\" (page)=\"onPageChange( $event )\" [showFirstLastButtons]=\"showFirstLastButtons\"></mat-paginator><mat-paginator #__paginator hidePageSize=\"true\" (page)=\"page?.emit( $event )\" [ngClass]=\"defaultOptions?.paginatorClass\" [pageIndex]=\"pageIndex\" [pageSize]=\"pageSize * 2\" [pageSizeOptions]=\"realPageSizeOptions\" [showFirstLastButtons]=\"showFirstLastButtons\"></mat-paginator></div>"
    }),
    tslib_1.__param(0, Optional()), tslib_1.__param(0, Inject(COLLAPSE_PAGINATOR_DEFAULT_OPTIONS)),
    tslib_1.__metadata("design:paramtypes", [Object])
], CollapsePaginatorComponent);
export { CollapsePaginatorComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGFwc2UtcGFnaW5hdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItY29yZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NvbGxhcHNlLXBhZ2luYXRvci9jb2xsYXBzZS1wYWdpbmF0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ04sU0FBUyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQy9CLEtBQUssRUFBRSxTQUFTLEVBQ2lCLFFBQVEsRUFDekMsTUFBTSxFQUFFLGNBQWMsRUFDdEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25FLE9BQU8sQ0FBQyxNQUFNLFlBQVksQ0FBQztBQUUzQixNQUFNLENBQUMsTUFBTSxrQ0FBa0MsR0FBd0IsSUFBSSxjQUFjLENBQU8sZ0JBQWdCLENBQUUsQ0FBQztBQU1uSCxJQUFhLDBCQUEwQixHQUF2QyxNQUFhLDBCQUEwQjtJQWdCdEM7OztNQUdFO0lBQ0YsWUFBZ0YsY0FBbUI7UUFBbkIsbUJBQWMsR0FBZCxjQUFjLENBQUs7UUFoQm5GLGNBQVMsR0FBVyxDQUFFLElBQUksQ0FBQyxjQUFjLElBQUksRUFBRSxDQUFFLENBQUMsU0FBUyxJQUFJLENBQUMsQ0FBQztRQUNqRSxhQUFRLEdBQVcsQ0FBRSxJQUFJLENBQUMsY0FBYyxJQUFJLEVBQUUsQ0FBRSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUM7UUFDaEUsb0JBQWUsR0FBa0IsQ0FBRSxJQUFJLENBQUMsY0FBYyxJQUFJLEVBQUUsQ0FBRSxDQUFDLGVBQWUsSUFBSSxDQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFFLENBQUM7UUFDakcseUJBQW9CLEdBQVksQ0FBRSxJQUFJLENBQUMsY0FBYyxJQUFJLEVBQUUsQ0FBRSxDQUFDLG9CQUFvQixLQUFLLFNBQVM7WUFDL0csQ0FBQyxD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Qix5cEJBQXdDO0tBQ3hDLENBQUM7SUFxQmEsbUJBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxtQkFBQSxNQUFNLENBQUUsa0NBQWtDLENBQUUsQ0FBQTs7R0FwQjFELDBCQUEwQixDQWtGdEM7U0FsRlksMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0Q29tcG9uZW50LCBPdXRwdXQsIEV2ZW50RW1pdHRlcixcblx0SW5wdXQsIFZpZXdDaGlsZCwgT25EZXN0cm95LFxuXHRBZnRlckNvbnRlbnRJbml0LCBBZnRlclZpZXdJbml0LCBPcHRpb25hbCxcblx0SW5qZWN0LCBJbmplY3Rpb25Ub2tlblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdFBhZ2luYXRvciwgTWF0UGFnaW5hdG9ySW50bCB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCBfIGZyb20gJ3VuZGVyc2NvcmUnO1xuXG5leHBvcnQgY29uc3QgQ09MTEFQU0VfUEFHSU5BVE9SX0RFRkFVTFRfT1BUSU9OUzogSW5qZWN0aW9uVG9rZW48YW55PiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxhbnk+KCAnZGVmYXVsdE9wdGlvbnMnICk7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3Rvclx0OiAnY29sbGFwc2UtcGFnaW5hdG9yJyxcblx0dGVtcGxhdGVVcmxcdDogJy4vY29sbGFwc2UtcGFnaW5hdG9yLnB1ZycsXG59KVxuZXhwb3J0IGNsYXNzIENvbGxhcHNlUGFnaW5hdG9yQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBBZnRlclZpZXdJbml0LCBBZnRlckNvbnRlbnRJbml0IHtcblxuXHRAVmlld0NoaWxkKCAnX19wYWdpbmF0b3InICkgcHVibGljIHBhZ2luYXRvcjogTWF0UGFnaW5hdG9yO1xuXG5cdEBJbnB1dCgpIHB1YmxpYyBwYWdlSW5kZXg6IG51bWJlciA9ICggdGhpcy5kZWZhdWx0T3B0aW9ucyB8fCB7fSApLnBhZ2VJbmRleCB8fCAwO1xuXHRASW5wdXQoKSBwdWJsaWMgcGFnZVNpemU6IG51bWJlciA9ICggdGhpcy5kZWZhdWx0T3B0aW9ucyB8fCB7fSApLnBhZ2VTaXplIHx8IDE1O1xuXHRASW5wdXQoKSBwdWJsaWMgcGFnZVNpemVPcHRpb25zOiBBcnJheTxudW1iZXI+ID0gKCB0aGlzLmRlZmF1bHRPcHRpb25zIHx8IHt9ICkucGFnZVNpemVPcHRpb25zIHx8IFsgMTUsIDI1LCA1MCBdO1xuXHRASW5wdXQoKSBwdWJsaWMgc2hvd0ZpcnN0TGFzdEJ1dHRvbnM6IGJvb2xlYW4gPSAoIHRoaXMuZGVmYXVsdE9wdGlvbnMgfHwge30gKS5zaG93Rmlyc3RMYXN0QnV0dG9ucyAhPT0gdW5kZWZpbmVkXG5cdFx0PyAoIHRoaXMuZGVmYXVsdE9wdGlvbnMgfHwge30gKS5zaG93Rmlyc3RMYXN0QnV0dG9uc1xuXHRcdDogdHJ1ZTtcblxuXHRAT3V0cHV0KCkgcHVibGljIHBhZ2luYXRvclJlZjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblx0QE91dHB1dCgpIHB1YmxpYyBwYWdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG5cdHB1YmxpYyByZWFsUGFnZVNpemVPcHRpb25zOiBBcnJheTxudW1iZXI+O1xuXG5cdC8qKlxuXHQqIEBjb25zdHJ1Y3RvclxuXHQqIEBwYXJhbSB7YW55fSBkZWZhdWx0T3B0aW9uc1xuXHQqL1xuXHRjb25zdHJ1Y3RvciggQE9wdGlvbmFsKCkgQEluamVjdCggQ09MTEFQU0VfUEFHSU5BVE9SX0RFRkFVTFRfT1BUSU9OUyApIHJlYWRvbmx5IGRlZmF1bHRPcHRpb25zOiBhbnkgKSB7fVxuXG5cdC8qKlxuXHQqIEBjb25zdHJ1Y3RvclxuXHQqL1xuXHRwdWJsaWMgbmdBZnRlclZpZXdJbml0KCkge1xuXHRcdHRoaXMucGFnaW5hdG9yLl9pbnRsID0gbmV3IE1hdFBhZ2luYXRvckludGwoKTtcblx0XHR0aGlzLnBhZ2luYXRvci5faW50bC5nZXRSYW5nZUxhYmVsID0gdGhpcy5nZXRFeHBhbnNpb25SYW5nZUxhYmVsO1xuXHRcdHRoaXMucGFnaW5hdG9yUmVmLmVtaXQoIHRoaXMucGFnaW5hdG9yICk7XG5cdH1cblxuXHQvKipcblx0KiBAY29uc3RydWN0b3Jcblx0Ki9cblx0cHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcblx0XHR0aGlzLnJlYWxQYWdlU2l6ZU9wdGlvbnMgPSBfLm1hcCggdGhpcy5wYWdlU2l6ZU9wdGlvbnMsICggc2l6ZTogbnVtYmVyICkgPT4gc2l6ZSAqIDIgKTtcblx0fVxuXG5cdC8qKlxuXHQqIEBjb25zdHJ1Y3RvclxuXHQqL1xuXHRwdWJsaWMgbmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy5wYWdpbmF0b3IuX2ludGwuZ2V0UmFuZ2VMYWJlbCA9IG5ldyBNYXRQYWdpbmF0b3JJbnRsKCkuZ2V0UmFuZ2VMYWJlbDtcblx0fVxuXG5cdC8qKlxuXHQqIEdldCBleHBhbnNpb24gcmFuZ2UgbGFiZWwgZm9yIHRhYmxlIHBhZ2luYXRvclxuXHQqIEBkZXNjIEZpeGVkIG1hdC10YWJsZSB3cm9uZyBwYWdpbmF0aW9uIHdoZW4gaGFzIGV4cGFuZGVkIHJvdy5cblx0KiBAcGFyYW0ge251bWJlcn0gcGFnZVxuXHQqIEBwYXJhbSB7bnVtYmVyfSBwYWdlU2l6ZVxuXHQqIEBwYXJhbSB7bnVtYmVyfSBsZW5ndGhcblx0KiBAcmV0dXJuIHtzdHJpbmd9IFJhbmdlIGxhYmVsXG5cdCovXG5cdHB1YmxpYyBnZXRFeHBhbnNpb25SYW5nZUxhYmVsKCBwYWdlOiBudW1iZXIsIHBhZ2VTaXplOiBudW1iZXIsIGxlbmd0aDogbnVtYmVyICk6IGFueSB7XG5cdFx0aWYgKCBsZW5ndGggPT09IDAgfHwgcGFnZVNpemUgPT09IDAgKSByZXR1cm4gYDAgb2YgJHtsZW5ndGh9YDtcblxuXHRcdGxlbmd0aCAvPSAyO1xuXHRcdHBhZ2VTaXplIC89IDI7XG5cblx0XHRsZW5ndGggPSBNYXRoLm1heCggbGVuZ3RoLCAwICk7XG5cblx0XHRjb25zdCBzdGFydEluZGV4OiBudW1iZXIgPSBwYWdlICogcGFnZVNpemU7XG5cdFx0Y29uc3QgZW5kSW5kZXg6IG51bWJlciA9IHN0YXJ0SW5kZXggPCBsZW5ndGhcblx0XHRcdD8gTWF0aC5taW4oIHN0YXJ0SW5kZXggKyBwYWdlU2l6ZSwgbGVuZ3RoIClcblx0XHRcdDogc3RhcnRJbmRleCArIHBhZ2VTaXplO1xuXG5cdFx0cmV0dXJuIGAke3N0YXJ0SW5kZXggKyAxfSAtICR7ZW5kSW5kZXh9IG9mICR7bGVuZ3RofWA7XG5cdH1cblxuXHQvKipcblx0KiBIYW5kbGUgcGFnZSBjaGFuZ2UgZXZlbnRcblx0KiBAcGFyYW0ge2FueX0gZXZcblx0KiBAcmV0dXJuIHt2b2lkfVxuXHQqL1xuXHRwdWJsaWMgb25QYWdlQ2hhbmdlKCBldjogYW55ICkge1xuXHRcdGlmICggdGhpcy5wYWdlU2l6ZSAhPT0gZXYucGFnZVNpemUgKSB0aGlzLnBhZ2VJbmRleCA9IDA7XG5cblx0XHR0aGlzLnBhZ2luYXRvci5wYWdlSW5kZXggPSB0aGlzLnBhZ2VJbmRleDtcblx0XHR0aGlzLnBhZ2luYXRvci5fY2hhbmdlUGFnZVNpemUoIGV2LnBhZ2VTaXplICogMiApO1xuXHRcdHRoaXMucGFnZS5lbWl0KCBldiApO1xuXHR9XG5cbn1cbiJdfQ==