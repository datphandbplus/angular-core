import * as tslib_1 from "tslib";
import { ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import _ from 'underscore';
import moment from 'moment-timezone';
import { UtilitiesService } from './services/utilities.service';
var DataTableComponent = /** @class */ (function () {
    /**
    * @constructor
    * @param {Injector} injector
    */
    function DataTableComponent(injector) {
        this.injector = injector;
        this.filtering = true;
        this.sortKey = 'name';
        this.dataSourceClone = [];
        this.searchQueries = {};
        this.filters = {};
        this.dataSource = new MatTableDataSource([]);
        this.isExpansionDetailRow = function (_i, row) { return row.hasOwnProperty('detail_row'); };
    }
    Object.defineProperty(DataTableComponent.prototype, "paginator", {
        set: function (paginator) {
            this.dataSource.paginator = paginator;
        },
        enumerable: true,
        configurable: true
    });
    /**
    * Toggle filter box
    * @return {void}
    */
    DataTableComponent.prototype.toggleFilter = function () {
        this.filtering = !this.filtering;
    };
    /**
    * Apply filter
    * @return {void}
    */
    DataTableComponent.prototype.applyFilter = function () {
        var _this = this;
        this.dataSource.filterPredicate = function (data, filters) {
            var flag = true;
            _.each(filters, function (filter, key) {
                if (!flag
                    || filter === null
                    || filter === undefined) {
                    return;
                }
                var value = _.get(data, key);
                // Range filter
                if (!isNaN(filter.min) && !isNaN(filter.max)) {
                    flag = value >= filter.min && value <= filter.max;
                    return;
                }
                // Date range filter
                if (filter.begin && filter.end) {
                    var date = moment(value).startOf('day');
                    flag = date.isSameOrAfter(moment(filter.begin).startOf('day'), 'day')
                        && date.isSameOrBefore(moment(filter.end).startOf('day'), 'day');
                    return;
                }
                // Date filter
                if (moment.isMoment(filter)) {
                    flag = moment(value).startOf('day')
                        .isSame(moment(filter).startOf('day'), 'day');
                    return;
                }
                flag = value === filter || _.contains(filter, value);
            });
            _.each(_this.searchQueries, function (query, key) {
                if (!flag)
                    return;
                flag = UtilitiesService.stripVietnameseSymbol((_.get(data, key) || '')
                    .toString()
                    .toLowerCase()
                    .replace(/ /g, ''))
                    .indexOf(UtilitiesService.stripVietnameseSymbol((query || '')
                    .toLowerCase()
                    .replace(/ /g, ''))) > -1;
            });
            return flag;
        };
        this.dataSource.filter = this.filters;
    };
    /**
    * Reset filter
    * @return {void}
    */
    DataTableComponent.prototype.resetFilter = function () {
        var _this = this;
        _.each(this.searchQueries, function (_i, key) { return _this.searchQueries[key] = undefined; });
        _.each(this.filters, function (_i, key) { return _this.filters[key] = undefined; });
        this.applyFilter();
    };
    /**
    * Sort data source
    * @param {string} key
    * @param {any} options
    * @return {array}
    */
    DataTableComponent.prototype.sortDataSource = function (key, options) {
        if (options === void 0) { options = {}; }
        var data = _.clone(this.dataSourceClone);
        if (!options.type) {
            data.sort(function (a, b) {
                var x = _.get(a, key) ? _.get(a, key).toLowerCase() : '';
                var y = _.get(b, key) ? _.get(b, key).toLowerCase() : '';
                return x < y ? -1 : x > y ? 1 : 0;
            });
        }
        else {
            data.sort(function (a, b) {
                var x = _.get(a, key);
                var y = _.get(b, key);
                return x < y ? 1 : x > y ? -1 : 0;
            });
        }
        return options.reverse ? data.reverse() : data;
    };
    /**
    * Apply sorter
    * @param {boolean} isReverse
    * @return {void}
    */
    DataTableComponent.prototype.applySorter = function (isReverse) {
        if (isReverse === void 0) { isReverse = false; }
        if (isReverse)
            this.isReverse = !this.isReverse;
        this.dataSource.data = this.sortDataSource(this.sortKey, { reverse: this.isReverse });
    };
    tslib_1.__decorate([
        ViewChild('paginator'),
        tslib_1.__metadata("design:type", MatPaginator),
        tslib_1.__metadata("design:paramtypes", [MatPaginator])
    ], DataTableComponent.prototype, "paginator", null);
    return DataTableComponent;
}());
export { DataTableComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNvcmUvIiwic291cmNlcyI6WyJsaWIvZGF0YS10YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBWSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLFlBQVksRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3JFLE9BQU8sQ0FBQyxNQUFNLFlBQVksQ0FBQztBQUMzQixPQUFPLE1BQU0sTUFBTSxpQkFBaUIsQ0FBQztBQUVyQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUVoRTtJQWVDOzs7TUFHRTtJQUNGLDRCQUFvQixRQUFrQjtRQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBWi9CLGNBQVMsR0FBWSxJQUFJLENBQUM7UUFDMUIsWUFBTyxHQUFXLE1BQU0sQ0FBQztRQUN6QixvQkFBZSxHQUFlLEVBQUUsQ0FBQztRQUNqQyxrQkFBYSxHQUFRLEVBQUUsQ0FBQztRQUN4QixZQUFPLEdBQVEsRUFBRSxDQUFDO1FBQ2xCLGVBQVUsR0FBNEIsSUFBSSxrQkFBa0IsQ0FBTyxFQUFFLENBQUUsQ0FBQztRQUN4RSx5QkFBb0IsR0FBYSxVQUFFLEVBQVUsRUFBRSxHQUFXLElBQU0sT0FBQSxHQUFHLENBQUMsY0FBYyxDQUFFLFlBQVksQ0FBRSxFQUFsQyxDQUFrQyxDQUFDO0lBTWhFLENBQUM7SUFqQmpCLHNCQUFJLHlDQUFTO2FBQWIsVUFBZSxTQUF1QjtZQUMvRCxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDdkMsQ0FBQzs7O09BQUE7SUFpQkQ7OztNQUdFO0lBQ0sseUNBQVksR0FBbkI7UUFDQyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUNsQyxDQUFDO0lBRUQ7OztNQUdF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QWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0b3IsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0UGFnaW5hdG9yLCBNYXRUYWJsZURhdGFTb3VyY2UgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgXyBmcm9tICd1bmRlcnNjb3JlJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50LXRpbWV6b25lJztcblxuaW1wb3J0IHsgVXRpbGl0aWVzU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvdXRpbGl0aWVzLnNlcnZpY2UnO1xuXG5leHBvcnQgY2xhc3MgRGF0YVRhYmxlQ29tcG9uZW50IHtcblxuXHRAVmlld0NoaWxkKCAncGFnaW5hdG9yJyApIHNldCBwYWdpbmF0b3IoIHBhZ2luYXRvcjogTWF0UGFnaW5hdG9yICkge1xuXHRcdHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IgPSBwYWdpbmF0b3I7XG5cdH1cblxuXHRwdWJsaWMgaXNSZXZlcnNlOiBib29sZWFuO1xuXHRwdWJsaWMgZmlsdGVyaW5nOiBib29sZWFuID0gdHJ1ZTtcblx0cHVibGljIHNvcnRLZXk6IHN0cmluZyA9ICduYW1lJztcblx0cHVibGljIGRhdGFTb3VyY2VDbG9uZTogQXJyYXk8YW55PiA9IFtdO1xuXHRwdWJsaWMgc2VhcmNoUXVlcmllczogYW55ID0ge307XG5cdHB1YmxpYyBmaWx0ZXJzOiBhbnkgPSB7fTtcblx0cHVibGljIGRhdGFTb3VyY2U6IE1hdFRhYmxlRGF0YVNvdXJjZTxhbnk+ID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZTxhbnk+KCBbXSApO1xuXHRwdWJsaWMgaXNFeHBhbnNpb25EZXRhaWxSb3c6IEZ1bmN0aW9uID0gKCBfaTogbnVtYmVyLCByb3c6IE9iamVjdCApID0+IHJvdy5oYXNPd25Qcm9wZXJ0eSggJ2RldGFpbF9yb3cnICk7XG5cblx0LyoqXG5cdCogQGNvbnN0cnVjdG9yXG5cdCogQHBhcmFtIHtJbmplY3Rvcn0gaW5qZWN0b3Jcblx0Ki9cblx0Y29uc3RydWN0b3IoIHB1YmxpYyBpbmplY3RvcjogSW5qZWN0b3IgKSB7fVxuXG5cdC8qKlxuXHQqIFRvZ2dsZSBmaWx0ZXIgYm94XG5cdCogQHJldHVybiB7dm9pZH1cblx0Ki9cblx0cHVibGljIHRvZ2dsZUZpbHRlcigpIHtcblx0XHR0aGlzLmZpbHRlcmluZyA9ICF0aGlzLmZpbHRlcmluZztcblx0fVxuXG5cdC8qKlxuXHQqIEFwcGx5IGZpbHRlclxuXHQqIEByZXR1cm4ge3ZvaWR9XG5cdCovXG5cdHB1YmxpYyBhcHBseUZpbHRlcigpIHtcblx0XHR0aGlzLmRhdGFTb3VyY2UuZmlsdGVyUHJlZGljYXRlID0gKCBkYXRhOiBhbnksIGZpbHRlcnM6IGFueSApID0+IHtcblx0XHRcdGxldCBmbGFnOiBib29sZWFuID0gdHJ1ZTtcblxuXHRcdFx0Xy5lYWNoKCBmaWx0ZXJzLCAoIGZpbHRlcjogYW55LCBrZXk6IHN0cmluZyApID0+IHtcblx0XHRcdFx0aWYgKCAhZmxhZ1xuXHRcdFx0XHRcdHx8IGZpbHRlciA9PT0gbnVsbFxuXHRcdFx0XHRcdHx8IGZpbHRlciA9PT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNvbnN0IHZhbHVlOiBhbnkgPSBfLmdldCggZGF0YSwga2V5ICk7XG5cblx0XHRcdFx0Ly8gUmFuZ2UgZmlsdGVyXG5cdFx0XHRcdGlmICggIWlzTmFOKCBmaWx0ZXIubWluICkgJiYgIWlzTmFOKCBmaWx0ZXIubWF4ICkgKSB7XG5cdFx0XHRcdFx0ZmxhZyA9IHZhbHVlID49IGZpbHRlci5taW4gJiYgdmFsdWUgPD0gZmlsdGVyLm1heDtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBEYXRlIHJhbmdlIGZpbHRlclxuXHRcdFx0XHRpZiAoIGZpbHRlci5iZWdpbiAmJiBmaWx0ZXIuZW5kICkge1xuXHRcdFx0XHRcdGNvbnN0IGRhdGU6IGFueSA9IG1vbWVudCggdmFsdWUgKS5zdGFydE9mKCAnZGF5JyApO1xuXHRcdFx0XHRcdGZsYWcgPSBkYXRlLmlzU2FtZU9yQWZ0ZXIoIG1vbWVudCggZmlsdGVyLmJlZ2luICkuc3RhcnRPZiggJ2RheScgKSwgJ2RheScgKVxuXHRcdFx0XHRcdFx0JiYgZGF0ZS5pc1NhbWVPckJlZm9yZSggbW9tZW50KCBmaWx0ZXIuZW5kICkuc3RhcnRPZiggJ2RheScgKSwgJ2RheScgKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBEYXRlIGZpbHRlclxuXHRcdFx0XHRpZiAoIG1vbWVudC5pc01vbWVudCggZmlsdGVyICkgKSB7XG5cdFx0XHRcdFx0ZmxhZyA9IG1vbWVudCggdmFsdWUgKS5zdGFydE9mKCAnZGF5JyApXG5cdFx0XHRcdFx0XHQuaXNTYW1lKCBtb21lbnQoIGZpbHRlciApLnN0YXJ0T2YoICdkYXknICksICdkYXknICk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0ZmxhZyA9IHZhbHVlID09PSBmaWx0ZXIgfHwgXy5jb250YWlucyggZmlsdGVyLCB2YWx1ZSApO1xuXHRcdFx0fSApO1xuXG5cdFx0XHRfLmVhY2goIHRoaXMuc2VhcmNoUXVlcmllcywgKCBxdWVyeTogc3RyaW5nLCBrZXk6IHN0cmluZyApID0+IHtcblx0XHRcdFx0aWYgKCAhZmxhZyApIHJldHVybjtcblxuXHRcdFx0XHRmbGFnID0gVXRpbGl0aWVzU2VydmljZS5zdHJpcFZpZXRuYW1lc2VTeW1ib2woXG5cdFx0XHRcdFx0KCBfLmdldCggZGF0YSwga2V5ICkgfHwgJycgKVxuXHRcdFx0XHRcdC50b1N0cmluZygpXG5cdFx0XHRcdFx0LnRvTG93ZXJDYXNlKClcblx0XHRcdFx0XHQucmVwbGFjZSggLyAvZywgJycgKVxuXHRcdFx0XHQpXG5cdFx0XHRcdC5pbmRleE9mKFxuXHRcdFx0XHRcdFV0aWxpdGllc1NlcnZpY2Uuc3RyaXBWaWV0bmFtZXNlU3ltYm9sKFxuXHRcdFx0XHRcdFx0KCBxdWVyeSB8fCAnJyApXG5cdFx0XHRcdFx0XHQudG9Mb3dlckNhc2UoKVxuXHRcdFx0XHRcdFx0LnJlcGxhY2UoIC8gL2csICcnIClcblx0XHRcdFx0XHQpXG5cdFx0XHRcdCkgPiAtMTtcblx0XHRcdH0gKTtcblxuXHRcdFx0cmV0dXJuIGZsYWc7XG5cdFx0fTtcblx0XHR0aGlzLmRhdGFTb3VyY2UuZmlsdGVyID0gdGhpcy5maWx0ZXJzO1xuXHR9XG5cblx0LyoqXG5cdCogUmVzZXQgZmlsdGVyXG5cdCogQHJldHVybiB7dm9pZH1cblx0Ki9cblx0cHVibGljIHJlc2V0RmlsdGVyKCkge1xuXHRcdF8uZWFjaCggdGhpcy5zZWFyY2hRdWVyaWVzLCAoIF9pOiBhbnksIGtleTogc3RyaW5nICkgPT4gdGhpcy5zZWFyY2hRdWVyaWVzWyBrZXkgXSA9IHVuZGVmaW5lZCApO1xuXHRcdF8uZWFjaCggdGhpcy5maWx0ZXJzLCAoIF9pOiBhbnksIGtleTogc3RyaW5nICkgPT4gdGhpcy5maWx0ZXJzWyBrZXkgXSA9IHVuZGVmaW5lZCApO1xuXG5cdFx0dGhpcy5hcHBseUZpbHRlcigpO1xuXHR9XG5cblx0LyoqXG5cdCogU29ydCBkYXRhIHNvdXJjZVxuXHQqIEBwYXJhbSB7c3RyaW5nfSBrZXlcblx0KiBAcGFyYW0ge2FueX0gb3B0aW9uc1xuXHQqIEByZXR1cm4ge2FycmF5fVxuXHQqL1xuXHRwdWJsaWMgc29ydERhdGFTb3VyY2UoIGtleTogc3RyaW5nLCBvcHRpb25zOiBhbnkgPSB7fSApIHtcblx0XHRjb25zdCBkYXRhOiBBcnJheTxhbnk+ID0gXy5jbG9uZSggdGhpcy5kYXRhU291cmNlQ2xvbmUgKTtcblxuXHRcdGlmICggIW9wdGlvbnMudHlwZSApIHtcblx0XHRcdGRhdGEuc29ydCggKCBhOiBhbnksIGI6IGFueSApID0+IHtcblx0XHRcdFx0Y29uc3QgeDogc3RyaW5nID0gXy5nZXQoIGEsIGtleSApID8gXy5nZXQoIGEsIGtleSApLnRvTG93ZXJDYXNlKCkgOiAnJztcblx0XHRcdFx0Y29uc3QgeTogc3RyaW5nID0gXy5nZXQoIGIsIGtleSApID8gXy5nZXQoIGIsIGtleSApLnRvTG93ZXJDYXNlKCkgOiAnJztcblxuXHRcdFx0XHRyZXR1cm4geCA8IHkgPyAtMSA6IHggPiB5ID8gMSA6IDA7XG5cdFx0XHR9ICk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGRhdGEuc29ydCggKCBhOiBhbnksIGI6IGFueSApID0+IHtcblx0XHRcdFx0Y29uc3QgeDogc3RyaW5nID0gXy5nZXQoIGEsIGtleSApO1xuXHRcdFx0XHRjb25zdCB5OiBzdHJpbmcgPSBfLmdldCggYiwga2V5ICk7XG5cblx0XHRcdFx0cmV0dXJuIHggPCB5ID8gMSA6IHggPiB5ID8gLTEgOiAwO1xuXHRcdFx0fSApO1xuXHRcdH1cblxuXHRcdHJldHVybiBvcHRpb25zLnJldmVyc2UgPyBkYXRhLnJldmVyc2UoKSA6IGRhdGE7XG5cdH1cblxuXHQvKipcblx0KiBBcHBseSBzb3J0ZXJcblx0KiBAcGFyYW0ge2Jvb2xlYW59IGlzUmV2ZXJzZVxuXHQqIEByZXR1cm4ge3ZvaWR9XG5cdCovXG5cdHB1YmxpYyBhcHBseVNvcnRlciggaXNSZXZlcnNlOiBib29sZWFuID0gZmFsc2UgKSB7XG5cdFx0aWYgKCBpc1JldmVyc2UgKSB0aGlzLmlzUmV2ZXJzZSA9ICF0aGlzLmlzUmV2ZXJzZTtcblxuXHRcdHRoaXMuZGF0YVNvdXJjZS5kYXRhID0gdGhpcy5zb3J0RGF0YVNvdXJjZSggdGhpcy5zb3J0S2V5LCB7IHJldmVyc2U6IHRoaXMuaXNSZXZlcnNlIH0gKTtcblx0fVxuXG59XG4iXX0=