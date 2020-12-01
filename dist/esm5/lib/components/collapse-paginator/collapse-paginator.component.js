import * as tslib_1 from "tslib";
import { Component, Output, EventEmitter, Input, ViewChild, Optional, Inject, InjectionToken } from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material';
import _ from 'underscore';
export var COLLAPSE_PAGINATOR_DEFAULT_OPTIONS = new InjectionToken('defaultOptions');
var CollapsePaginatorComponent = /** @class */ (function () {
    /**
    * @constructor
    * @param {any} defaultOptions
    */
    function CollapsePaginatorComponent(defaultOptions) {
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
    CollapsePaginatorComponent.prototype.ngAfterViewInit = function () {
        this.paginator._intl = new MatPaginatorIntl();
        this.paginator._intl.getRangeLabel = this.getExpansionRangeLabel;
        this.paginatorRef.emit(this.paginator);
    };
    /**
    * @constructor
    */
    CollapsePaginatorComponent.prototype.ngAfterContentInit = function () {
        this.realPageSizeOptions = _.map(this.pageSizeOptions, function (size) { return size * 2; });
    };
    /**
    * @constructor
    */
    CollapsePaginatorComponent.prototype.ngOnDestroy = function () {
        this.paginator._intl.getRangeLabel = new MatPaginatorIntl().getRangeLabel;
    };
    /**
    * Get expansion range label for table paginator
    * @desc Fixed mat-table wrong pagination when has expanded row.
    * @param {number} page
    * @param {number} pageSize
    * @param {number} length
    * @return {string} Range label
    */
    CollapsePaginatorComponent.prototype.getExpansionRangeLabel = function (page, pageSize, length) {
        if (length === 0 || pageSize === 0)
            return "0 of " + length;
        length /= 2;
        pageSize /= 2;
        length = Math.max(length, 0);
        var startIndex = page * pageSize;
        var endIndex = startIndex < length
            ? Math.min(startIndex + pageSize, length)
            : startIndex + pageSize;
        return startIndex + 1 + " - " + endIndex + " of " + length;
    };
    /**
    * Handle page change event
    * @param {any} ev
    * @return {void}
    */
    CollapsePaginatorComponent.prototype.onPageChange = function (ev) {
        if (this.pageSize !== ev.pageSize)
            this.pageIndex = 0;
        this.paginator.pageIndex = this.pageIndex;
        this.paginator._changePageSize(ev.pageSize * 2);
        this.page.emit(ev);
    };
    CollapsePaginatorComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [COLLAPSE_PAGINATOR_DEFAULT_OPTIONS,] }] }
    ]; };
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
    return CollapsePaginatorComponent;
}());
export { CollapsePaginatorComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGFwc2UtcGFnaW5hdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItY29yZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NvbGxhcHNlLXBhZ2luYXRvci9jb2xsYXBzZS1wYWdpbmF0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ04sU0FBUyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQy9CLEtBQUssRUFBRSxTQUFTLEVBQ2lCLFFBQVEsRUFDekMsTUFBTSxFQUFFLGNBQWMsRUFDdEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25FLE9BQU8sQ0FBQyxNQUFNLFlBQVksQ0FBQztBQUUzQixNQUFNLENBQUMsSUFBTSxrQ0FBa0MsR0FBd0IsSUFBSSxjQUFjLENBQU8sZ0JBQWdCLENBQUUsQ0FBQztBQU1uSDtJQWdCQzs7O01BR0U7SUFDRixvQ0FBZ0YsY0FBbUI7UUFBbkIsbUJBQWMsR0FBZCxjQUFjLENBQUs7UUFoQm5GLGNBQVMsR0FBVyxDQUFFLElBQUksQ0FBQyxjQUFjLElBQUksRUFBRSxDQUFFLENBQUMsU0FBUyxJQUFJLENBQUMsQ0FBQztRQUNqRSxhQUFRLEdBQVcsQ0FBRSxJQUFJLENBQUMsY0FBYyxJQUFJLEVBQUUsQ0FBRSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUM7UUFDaEUsb0JBQWUsR0FBa0IsQ0FBRSxJQUFJLENBQUMsY0FBYyxJQUFJLEVBQUUsQ0FBRSxDQUFDLGVBQWUsSUFBSSxDQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFFLENBQUM7UUFDakcseUJBQW9CLEdBQVksQ0FBRSxJQUFJLENBQUMsY0FBYyxJQUFJLEVBQUUsQ0FBRSxDQUFDLG9CQUFvQixLQUFLLFNBQVM7WUFDL0csQ0FBQyxDQUFDLENBQUUsSUFBSSxDQUFDLGNBQWMsSUFBSSxF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QUM7UUFxQmEsbUJBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxtQkFBQSxNQUFNLENBQUUsa0NBQWtDLENBQUUsQ0FBQTs7T0FwQjFELDBCQUEwQixDQWtGdEM7SUFBRCxpQ0FBQztDQUFBLEFBbEZELElBa0ZDO1NBbEZZLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdENvbXBvbmVudCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsXG5cdElucHV0LCBWaWV3Q2hpbGQsIE9uRGVzdHJveSxcblx0QWZ0ZXJDb250ZW50SW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT3B0aW9uYWwsXG5cdEluamVjdCwgSW5qZWN0aW9uVG9rZW5cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXRQYWdpbmF0b3IsIE1hdFBhZ2luYXRvckludGwgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgXyBmcm9tICd1bmRlcnNjb3JlJztcblxuZXhwb3J0IGNvbnN0IENPTExBUFNFX1BBR0lOQVRPUl9ERUZBVUxUX09QVElPTlM6IEluamVjdGlvblRva2VuPGFueT4gPSBuZXcgSW5qZWN0aW9uVG9rZW48YW55PiggJ2RlZmF1bHRPcHRpb25zJyApO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3JcdDogJ2NvbGxhcHNlLXBhZ2luYXRvcicsXG5cdHRlbXBsYXRlVXJsXHQ6ICcuL2NvbGxhcHNlLXBhZ2luYXRvci5wdWcnLFxufSlcbmV4cG9ydCBjbGFzcyBDb2xsYXBzZVBhZ2luYXRvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCwgQWZ0ZXJDb250ZW50SW5pdCB7XG5cblx0QFZpZXdDaGlsZCggJ19fcGFnaW5hdG9yJyApIHB1YmxpYyBwYWdpbmF0b3I6IE1hdFBhZ2luYXRvcjtcblxuXHRASW5wdXQoKSBwdWJsaWMgcGFnZUluZGV4OiBudW1iZXIgPSAoIHRoaXMuZGVmYXVsdE9wdGlvbnMgfHwge30gKS5wYWdlSW5kZXggfHwgMDtcblx0QElucHV0KCkgcHVibGljIHBhZ2VTaXplOiBudW1iZXIgPSAoIHRoaXMuZGVmYXVsdE9wdGlvbnMgfHwge30gKS5wYWdlU2l6ZSB8fCAxNTtcblx0QElucHV0KCkgcHVibGljIHBhZ2VTaXplT3B0aW9uczogQXJyYXk8bnVtYmVyPiA9ICggdGhpcy5kZWZhdWx0T3B0aW9ucyB8fCB7fSApLnBhZ2VTaXplT3B0aW9ucyB8fCBbIDE1LCAyNSwgNTAgXTtcblx0QElucHV0KCkgcHVibGljIHNob3dGaXJzdExhc3RCdXR0b25zOiBib29sZWFuID0gKCB0aGlzLmRlZmF1bHRPcHRpb25zIHx8IHt9ICkuc2hvd0ZpcnN0TGFzdEJ1dHRvbnMgIT09IHVuZGVmaW5lZFxuXHRcdD8gKCB0aGlzLmRlZmF1bHRPcHRpb25zIHx8IHt9ICkuc2hvd0ZpcnN0TGFzdEJ1dHRvbnNcblx0XHQ6IHRydWU7XG5cblx0QE91dHB1dCgpIHB1YmxpYyBwYWdpbmF0b3JSZWY6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cdEBPdXRwdXQoKSBwdWJsaWMgcGFnZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuXHRwdWJsaWMgcmVhbFBhZ2VTaXplT3B0aW9uczogQXJyYXk8bnVtYmVyPjtcblxuXHQvKipcblx0KiBAY29uc3RydWN0b3Jcblx0KiBAcGFyYW0ge2FueX0gZGVmYXVsdE9wdGlvbnNcblx0Ki9cblx0Y29uc3RydWN0b3IoIEBPcHRpb25hbCgpIEBJbmplY3QoIENPTExBUFNFX1BBR0lOQVRPUl9ERUZBVUxUX09QVElPTlMgKSByZWFkb25seSBkZWZhdWx0T3B0aW9uczogYW55ICkge31cblxuXHQvKipcblx0KiBAY29uc3RydWN0b3Jcblx0Ki9cblx0cHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblx0XHR0aGlzLnBhZ2luYXRvci5faW50bCA9IG5ldyBNYXRQYWdpbmF0b3JJbnRsKCk7XG5cdFx0dGhpcy5wYWdpbmF0b3IuX2ludGwuZ2V0UmFuZ2VMYWJlbCA9IHRoaXMuZ2V0RXhwYW5zaW9uUmFuZ2VMYWJlbDtcblx0XHR0aGlzLnBhZ2luYXRvclJlZi5lbWl0KCB0aGlzLnBhZ2luYXRvciApO1xuXHR9XG5cblx0LyoqXG5cdCogQGNvbnN0cnVjdG9yXG5cdCovXG5cdHB1YmxpYyBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG5cdFx0dGhpcy5yZWFsUGFnZVNpemVPcHRpb25zID0gXy5tYXAoIHRoaXMucGFnZVNpemVPcHRpb25zLCAoIHNpemU6IG51bWJlciApID0+IHNpemUgKiAyICk7XG5cdH1cblxuXHQvKipcblx0KiBAY29uc3RydWN0b3Jcblx0Ki9cblx0cHVibGljIG5nT25EZXN0cm95KCkge1xuXHRcdHRoaXMucGFnaW5hdG9yLl9pbnRsLmdldFJhbmdlTGFiZWwgPSBuZXcgTWF0UGFnaW5hdG9ySW50bCgpLmdldFJhbmdlTGFiZWw7XG5cdH1cblxuXHQvKipcblx0KiBHZXQgZXhwYW5zaW9uIHJhbmdlIGxhYmVsIGZvciB0YWJsZSBwYWdpbmF0b3Jcblx0KiBAZGVzYyBGaXhlZCBtYXQtdGFibGUgd3JvbmcgcGFnaW5hdGlvbiB3aGVuIGhhcyBleHBhbmRlZCByb3cuXG5cdCogQHBhcmFtIHtudW1iZXJ9IHBhZ2Vcblx0KiBAcGFyYW0ge251bWJlcn0gcGFnZVNpemVcblx0KiBAcGFyYW0ge251bWJlcn0gbGVuZ3RoXG5cdCogQHJldHVybiB7c3RyaW5nfSBSYW5nZSBsYWJlbFxuXHQqL1xuXHRwdWJsaWMgZ2V0RXhwYW5zaW9uUmFuZ2VMYWJlbCggcGFnZTogbnVtYmVyLCBwYWdlU2l6ZTogbnVtYmVyLCBsZW5ndGg6IG51bWJlciApOiBhbnkge1xuXHRcdGlmICggbGVuZ3RoID09PSAwIHx8IHBhZ2VTaXplID09PSAwICkgcmV0dXJuIGAwIG9mICR7bGVuZ3RofWA7XG5cblx0XHRsZW5ndGggLz0gMjtcblx0XHRwYWdlU2l6ZSAvPSAyO1xuXG5cdFx0bGVuZ3RoID0gTWF0aC5tYXgoIGxlbmd0aCwgMCApO1xuXG5cdFx0Y29uc3Qgc3RhcnRJbmRleDogbnVtYmVyID0gcGFnZSAqIHBhZ2VTaXplO1xuXHRcdGNvbnN0IGVuZEluZGV4OiBudW1iZXIgPSBzdGFydEluZGV4IDwgbGVuZ3RoXG5cdFx0XHQ/IE1hdGgubWluKCBzdGFydEluZGV4ICsgcGFnZVNpemUsIGxlbmd0aCApXG5cdFx0XHQ6IHN0YXJ0SW5kZXggKyBwYWdlU2l6ZTtcblxuXHRcdHJldHVybiBgJHtzdGFydEluZGV4ICsgMX0gLSAke2VuZEluZGV4fSBvZiAke2xlbmd0aH1gO1xuXHR9XG5cblx0LyoqXG5cdCogSGFuZGxlIHBhZ2UgY2hhbmdlIGV2ZW50XG5cdCogQHBhcmFtIHthbnl9IGV2XG5cdCogQHJldHVybiB7dm9pZH1cblx0Ki9cblx0cHVibGljIG9uUGFnZUNoYW5nZSggZXY6IGFueSApIHtcblx0XHRpZiAoIHRoaXMucGFnZVNpemUgIT09IGV2LnBhZ2VTaXplICkgdGhpcy5wYWdlSW5kZXggPSAwO1xuXG5cdFx0dGhpcy5wYWdpbmF0b3IucGFnZUluZGV4ID0gdGhpcy5wYWdlSW5kZXg7XG5cdFx0dGhpcy5wYWdpbmF0b3IuX2NoYW5nZVBhZ2VTaXplKCBldi5wYWdlU2l6ZSAqIDIgKTtcblx0XHR0aGlzLnBhZ2UuZW1pdCggZXYgKTtcblx0fVxuXG59XG4iXX0=