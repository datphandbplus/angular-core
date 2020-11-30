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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNvcmUvIiwic291cmNlcyI6WyJsaWIvZGF0YS10YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBWSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLFlBQVksRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3JFLE9BQU8sQ0FBQyxNQUFNLFlBQVksQ0FBQztBQUMzQixPQUFPLE1BQU0sTUFBTSxpQkFBaUIsQ0FBQztBQUVyQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUVoRTtJQWVDOzs7TUFHRTtJQUNGLDRCQUFvQixRQUFrQjtRQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBWi9CLGNBQVMsR0FBWSxJQUFJLENBQUM7UUFDMUIsWUFBTyxHQUFXLE1BQU0sQ0FBQztRQUN6QixvQkFBZSxHQUFlLEVBQUUsQ0FBQztRQUNqQyxrQkFBYSxHQUFRLEVBQUUsQ0FBQztRQUN4QixZQUFPLEdBQVEsRUFBRSxDQUFDO1FBQ2xCLGVBQVUsR0FBNEIsSUFBSSxrQkFBa0IsQ0FBTyxFQUFFLENBQUUsQ0FBQztRQUN4RSx5QkFBb0IsR0FBYSxVQUFFLEVBQVUsRUFBRSxHQUFXLElBQU0sT0FBQSxHQUFHLENBQUMsY0FBYyxDQUFFLFlBQVksQ0FBRSxFQUFsQyxDQUFrQyxDQUFDO0lBTWhFLENBQUM7SUFqQmpCLHNCQUFJLHlDQUFTO2FBQWIsVUFBZSxTQUF1QjtZQUMvRCxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDdkMsQ0FBQzs7O09BQUE7SUFpQkQ7OztNQUdFO0lBQ0sseUNBQVksR0FBbkI7UUFDQyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUNsQyxDQUFDO0lBRUQ7OztNQUdF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dGVudCI6WyJpbXBvcnQgeyBJbmplY3RvciwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXRQYWdpbmF0b3IsIE1hdFRhYmxlRGF0YVNvdXJjZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCBfIGZyb20gJ3VuZGVyc2NvcmUnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQtdGltZXpvbmUnO1xuXG5pbXBvcnQgeyBVdGlsaXRpZXNTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy91dGlsaXRpZXMuc2VydmljZSc7XG5cbmV4cG9ydCBjbGFzcyBEYXRhVGFibGVDb21wb25lbnQge1xuXG5cdEBWaWV3Q2hpbGQoICdwYWdpbmF0b3InICkgc2V0IHBhZ2luYXRvciggcGFnaW5hdG9yOiBNYXRQYWdpbmF0b3IgKSB7XG5cdFx0dGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHBhZ2luYXRvcjtcblx0fVxuXG5cdHB1YmxpYyBpc1JldmVyc2U6IGJvb2xlYW47XG5cdHB1YmxpYyBmaWx0ZXJpbmc6IGJvb2xlYW4gPSB0cnVlO1xuXHRwdWJsaWMgc29ydEtleTogc3RyaW5nID0gJ25hbWUnO1xuXHRwdWJsaWMgZGF0YVNvdXJjZUNsb25lOiBBcnJheTxhbnk+ID0gW107XG5cdHB1YmxpYyBzZWFyY2hRdWVyaWVzOiBhbnkgPSB7fTtcblx0cHVibGljIGZpbHRlcnM6IGFueSA9IHt9O1xuXHRwdWJsaWMgZGF0YVNvdXJjZTogTWF0VGFibGVEYXRhU291cmNlPGFueT4gPSBuZXcgTWF0VGFibGVEYXRhU291cmNlPGFueT4oIFtdICk7XG5cdHB1YmxpYyBpc0V4cGFuc2lvbkRldGFpbFJvdzogRnVuY3Rpb24gPSAoIF9pOiBudW1iZXIsIHJvdzogT2JqZWN0ICkgPT4gcm93Lmhhc093blByb3BlcnR5KCAnZGV0YWlsX3JvdycgKTtcblxuXHQvKipcblx0KiBAY29uc3RydWN0b3Jcblx0KiBAcGFyYW0ge0luamVjdG9yfSBpbmplY3RvclxuXHQqL1xuXHRjb25zdHJ1Y3RvciggcHVibGljIGluamVjdG9yOiBJbmplY3RvciApIHt9XG5cblx0LyoqXG5cdCogVG9nZ2xlIGZpbHRlciBib3hcblx0KiBAcmV0dXJuIHt2b2lkfVxuXHQqL1xuXHRwdWJsaWMgdG9nZ2xlRmlsdGVyKCkge1xuXHRcdHRoaXMuZmlsdGVyaW5nID0gIXRoaXMuZmlsdGVyaW5nO1xuXHR9XG5cblx0LyoqXG5cdCogQXBwbHkgZmlsdGVyXG5cdCogQHJldHVybiB7dm9pZH1cblx0Ki9cblx0cHVibGljIGFwcGx5RmlsdGVyKCkge1xuXHRcdHRoaXMuZGF0YVNvdXJjZS5maWx0ZXJQcmVkaWNhdGUgPSAoIGRhdGE6IGFueSwgZmlsdGVyczogYW55ICkgPT4ge1xuXHRcdFx0bGV0IGZsYWc6IGJvb2xlYW4gPSB0cnVlO1xuXG5cdFx0XHRfLmVhY2goIGZpbHRlcnMsICggZmlsdGVyOiBhbnksIGtleTogc3RyaW5nICkgPT4ge1xuXHRcdFx0XHRpZiAoICFmbGFnXG5cdFx0XHRcdFx0fHwgZmlsdGVyID09PSBudWxsXG5cdFx0XHRcdFx0fHwgZmlsdGVyID09PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y29uc3QgdmFsdWU6IGFueSA9IF8uZ2V0KCBkYXRhLCBrZXkgKTtcblxuXHRcdFx0XHQvLyBSYW5nZSBmaWx0ZXJcblx0XHRcdFx0aWYgKCAhaXNOYU4oIGZpbHRlci5taW4gKSAmJiAhaXNOYU4oIGZpbHRlci5tYXggKSApIHtcblx0XHRcdFx0XHRmbGFnID0gdmFsdWUgPj0gZmlsdGVyLm1pbiAmJiB2YWx1ZSA8PSBmaWx0ZXIubWF4O1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIERhdGUgcmFuZ2UgZmlsdGVyXG5cdFx0XHRcdGlmICggZmlsdGVyLmJlZ2luICYmIGZpbHRlci5lbmQgKSB7XG5cdFx0XHRcdFx0Y29uc3QgZGF0ZTogYW55ID0gbW9tZW50KCB2YWx1ZSApLnN0YXJ0T2YoICdkYXknICk7XG5cdFx0XHRcdFx0ZmxhZyA9IGRhdGUuaXNTYW1lT3JBZnRlciggbW9tZW50KCBmaWx0ZXIuYmVnaW4gKS5zdGFydE9mKCAnZGF5JyApLCAnZGF5JyApXG5cdFx0XHRcdFx0XHQmJiBkYXRlLmlzU2FtZU9yQmVmb3JlKCBtb21lbnQoIGZpbHRlci5lbmQgKS5zdGFydE9mKCAnZGF5JyApLCAnZGF5JyApO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIERhdGUgZmlsdGVyXG5cdFx0XHRcdGlmICggbW9tZW50LmlzTW9tZW50KCBmaWx0ZXIgKSApIHtcblx0XHRcdFx0XHRmbGFnID0gbW9tZW50KCB2YWx1ZSApLnN0YXJ0T2YoICdkYXknIClcblx0XHRcdFx0XHRcdC5pc1NhbWUoIG1vbWVudCggZmlsdGVyICkuc3RhcnRPZiggJ2RheScgKSwgJ2RheScgKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRmbGFnID0gdmFsdWUgPT09IGZpbHRlciB8fCBfLmNvbnRhaW5zKCBmaWx0ZXIsIHZhbHVlICk7XG5cdFx0XHR9ICk7XG5cblx0XHRcdF8uZWFjaCggdGhpcy5zZWFyY2hRdWVyaWVzLCAoIHF1ZXJ5OiBzdHJpbmcsIGtleTogc3RyaW5nICkgPT4ge1xuXHRcdFx0XHRpZiAoICFmbGFnICkgcmV0dXJuO1xuXG5cdFx0XHRcdGZsYWcgPSBVdGlsaXRpZXNTZXJ2aWNlLnN0cmlwVmlldG5hbWVzZVN5bWJvbChcblx0XHRcdFx0XHQoIF8uZ2V0KCBkYXRhLCBrZXkgKSB8fCAnJyApXG5cdFx0XHRcdFx0LnRvTG93ZXJDYXNlKClcblx0XHRcdFx0XHQucmVwbGFjZSggLyAvZywgJycgKVxuXHRcdFx0XHQpXG5cdFx0XHRcdC5pbmRleE9mKFxuXHRcdFx0XHRcdFV0aWxpdGllc1NlcnZpY2Uuc3RyaXBWaWV0bmFtZXNlU3ltYm9sKFxuXHRcdFx0XHRcdFx0KCBxdWVyeSB8fCAnJyApXG5cdFx0XHRcdFx0XHQudG9Mb3dlckNhc2UoKVxuXHRcdFx0XHRcdFx0LnJlcGxhY2UoIC8gL2csICcnIClcblx0XHRcdFx0XHQpXG5cdFx0XHRcdCkgPiAtMTtcblx0XHRcdH0gKTtcblxuXHRcdFx0cmV0dXJuIGZsYWc7XG5cdFx0fTtcblx0XHR0aGlzLmRhdGFTb3VyY2UuZmlsdGVyID0gdGhpcy5maWx0ZXJzO1xuXHR9XG5cblx0LyoqXG5cdCogUmVzZXQgZmlsdGVyXG5cdCogQHJldHVybiB7dm9pZH1cblx0Ki9cblx0cHVibGljIHJlc2V0RmlsdGVyKCkge1xuXHRcdF8uZWFjaCggdGhpcy5zZWFyY2hRdWVyaWVzLCAoIF9pOiBhbnksIGtleTogc3RyaW5nICkgPT4gdGhpcy5zZWFyY2hRdWVyaWVzWyBrZXkgXSA9IHVuZGVmaW5lZCApO1xuXHRcdF8uZWFjaCggdGhpcy5maWx0ZXJzLCAoIF9pOiBhbnksIGtleTogc3RyaW5nICkgPT4gdGhpcy5maWx0ZXJzWyBrZXkgXSA9IHVuZGVmaW5lZCApO1xuXG5cdFx0dGhpcy5hcHBseUZpbHRlcigpO1xuXHR9XG5cblx0LyoqXG5cdCogU29ydCBkYXRhIHNvdXJjZVxuXHQqIEBwYXJhbSB7c3RyaW5nfSBrZXlcblx0KiBAcGFyYW0ge2FueX0gb3B0aW9uc1xuXHQqIEByZXR1cm4ge2FycmF5fVxuXHQqL1xuXHRwdWJsaWMgc29ydERhdGFTb3VyY2UoIGtleTogc3RyaW5nLCBvcHRpb25zOiBhbnkgPSB7fSApIHtcblx0XHRjb25zdCBkYXRhOiBBcnJheTxhbnk+ID0gXy5jbG9uZSggdGhpcy5kYXRhU291cmNlQ2xvbmUgKTtcblxuXHRcdGlmICggIW9wdGlvbnMudHlwZSApIHtcblx0XHRcdGRhdGEuc29ydCggKCBhOiBhbnksIGI6IGFueSApID0+IHtcblx0XHRcdFx0Y29uc3QgeDogc3RyaW5nID0gXy5nZXQoIGEsIGtleSApID8gXy5nZXQoIGEsIGtleSApLnRvTG93ZXJDYXNlKCkgOiAnJztcblx0XHRcdFx0Y29uc3QgeTogc3RyaW5nID0gXy5nZXQoIGIsIGtleSApID8gXy5nZXQoIGIsIGtleSApLnRvTG93ZXJDYXNlKCkgOiAnJztcblxuXHRcdFx0XHRyZXR1cm4geCA8IHkgPyAtMSA6IHggPiB5ID8gMSA6IDA7XG5cdFx0XHR9ICk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGRhdGEuc29ydCggKCBhOiBhbnksIGI6IGFueSApID0+IHtcblx0XHRcdFx0Y29uc3QgeDogc3RyaW5nID0gXy5nZXQoIGEsIGtleSApO1xuXHRcdFx0XHRjb25zdCB5OiBzdHJpbmcgPSBfLmdldCggYiwga2V5ICk7XG5cblx0XHRcdFx0cmV0dXJuIHggPCB5ID8gMSA6IHggPiB5ID8gLTEgOiAwO1xuXHRcdFx0fSApO1xuXHRcdH1cblxuXHRcdHJldHVybiBvcHRpb25zLnJldmVyc2UgPyBkYXRhLnJldmVyc2UoKSA6IGRhdGE7XG5cdH1cblxuXHQvKipcblx0KiBBcHBseSBzb3J0ZXJcblx0KiBAcGFyYW0ge2Jvb2xlYW59IGlzUmV2ZXJzZVxuXHQqIEByZXR1cm4ge3ZvaWR9XG5cdCovXG5cdHB1YmxpYyBhcHBseVNvcnRlciggaXNSZXZlcnNlOiBib29sZWFuID0gZmFsc2UgKSB7XG5cdFx0aWYgKCBpc1JldmVyc2UgKSB0aGlzLmlzUmV2ZXJzZSA9ICF0aGlzLmlzUmV2ZXJzZTtcblxuXHRcdHRoaXMuZGF0YVNvdXJjZS5kYXRhID0gdGhpcy5zb3J0RGF0YVNvdXJjZSggdGhpcy5zb3J0S2V5LCB7IHJldmVyc2U6IHRoaXMuaXNSZXZlcnNlIH0gKTtcblx0fVxuXG59XG4iXX0=