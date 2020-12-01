import * as tslib_1 from "tslib";
import { ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import _ from 'underscore';
import moment from 'moment-timezone';
import { UtilitiesService } from './services/utilities.service';
export class DataTableComponent {
    /**
    * @constructor
    * @param {Injector} injector
    */
    constructor(injector) {
        this.injector = injector;
        this.filtering = true;
        this.sortKey = 'name';
        this.dataSourceClone = [];
        this.searchQueries = {};
        this.filters = {};
        this.dataSource = new MatTableDataSource([]);
        this.isExpansionDetailRow = (_i, row) => row.hasOwnProperty('detail_row');
    }
    set paginator(paginator) {
        this.dataSource.paginator = paginator;
    }
    /**
    * Toggle filter box
    * @return {void}
    */
    toggleFilter() {
        this.filtering = !this.filtering;
    }
    /**
    * Apply filter
    * @return {void}
    */
    applyFilter() {
        this.dataSource.filterPredicate = (data, filters) => {
            let flag = true;
            _.each(filters, (filter, key) => {
                if (!flag
                    || filter === null
                    || filter === undefined) {
                    return;
                }
                const value = _.get(data, key);
                // Range filter
                if (!isNaN(filter.min) && !isNaN(filter.max)) {
                    flag = value >= filter.min && value <= filter.max;
                    return;
                }
                // Date range filter
                if (filter.begin && filter.end) {
                    const date = moment(value).startOf('day');
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
            _.each(this.searchQueries, (query, key) => {
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
    }
    /**
    * Reset filter
    * @return {void}
    */
    resetFilter() {
        _.each(this.searchQueries, (_i, key) => this.searchQueries[key] = undefined);
        _.each(this.filters, (_i, key) => this.filters[key] = undefined);
        this.applyFilter();
    }
    /**
    * Sort data source
    * @param {string} key
    * @param {any} options
    * @return {array}
    */
    sortDataSource(key, options = {}) {
        const data = _.clone(this.dataSourceClone);
        if (!options.type) {
            data.sort((a, b) => {
                const x = _.get(a, key) ? _.get(a, key).toLowerCase() : '';
                const y = _.get(b, key) ? _.get(b, key).toLowerCase() : '';
                return x < y ? -1 : x > y ? 1 : 0;
            });
        }
        else {
            data.sort((a, b) => {
                const x = _.get(a, key);
                const y = _.get(b, key);
                return x < y ? 1 : x > y ? -1 : 0;
            });
        }
        return options.reverse ? data.reverse() : data;
    }
    /**
    * Apply sorter
    * @param {boolean} isReverse
    * @return {void}
    */
    applySorter(isReverse = false) {
        if (isReverse)
            this.isReverse = !this.isReverse;
        this.dataSource.data = this.sortDataSource(this.sortKey, { reverse: this.isReverse });
    }
}
tslib_1.__decorate([
    ViewChild('paginator'),
    tslib_1.__metadata("design:type", MatPaginator),
    tslib_1.__metadata("design:paramtypes", [MatPaginator])
], DataTableComponent.prototype, "paginator", null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNvcmUvIiwic291cmNlcyI6WyJsaWIvZGF0YS10YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBWSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLFlBQVksRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3JFLE9BQU8sQ0FBQyxNQUFNLFlBQVksQ0FBQztBQUMzQixPQUFPLE1BQU0sTUFBTSxpQkFBaUIsQ0FBQztBQUVyQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUVoRSxNQUFNLE9BQU8sa0JBQWtCO0lBZTlCOzs7TUFHRTtJQUNGLFlBQW9CLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFaL0IsY0FBUyxHQUFZLElBQUksQ0FBQztRQUMxQixZQUFPLEdBQVcsTUFBTSxDQUFDO1FBQ3pCLG9CQUFlLEdBQWUsRUFBRSxDQUFDO1FBQ2pDLGtCQUFhLEdBQVEsRUFBRSxDQUFDO1FBQ3hCLFlBQU8sR0FBUSxFQUFFLENBQUM7UUFDbEIsZUFBVSxHQUE0QixJQUFJLGtCQUFrQixDQUFPLEVBQUUsQ0FBRSxDQUFDO1FBQ3hFLHlCQUFvQixHQUFhLENBQUUsRUFBVSxFQUFFLEdBQVcsRUFBRyxFQUFFLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBRSxZQUFZLENBQUUsQ0FBQztJQU1oRSxDQUFDO0lBakJqQixJQUFJLFNBQVMsQ0FBRSxTQUF1QjtRQUMvRCxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7SUFDdkMsQ0FBQztJQWlCRDs7O01BR0U7SUFDSyxZQUFZO1FBQ2xCLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ2xDLENBQUM7SUFFRDs7O01BR0U7SUFDSyxXQUFX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QUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuQyxDQUFDLENBQUUsQ0FBQztTQUNKO2FBQU07WUFDTixJQUFJLENBQUMsSUFBSSxDQUFFLENBQUUsQ0FBTSxFQUFFLENBQU0sRUFBRyxFQUFFO2dCQUMvQixNQUFNLENBQUMsR0FBVyxDQUFDLENBQUMsR0FBRyxDQUFFLENBQUMsRUFBRSxHQUFHLENBQUUsQ0FBQztnQkFDbEMsTUFBTSxDQUFDLEdBQVcsQ0FBQyxDQUFDLEdBQUcsQ0FBRSxDQUFDLEVBQUUsR0FBRyxDQUFFLENBQUM7Z0JBRWxDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25DLENBQUMsQ0FBRSxDQUFDO1NBQ0o7UUFFRCxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ2hELENBQUM7SUFFRDs7OztNQUlFO0lBQ0ssV0FBVyxDQUFFLFlBQXFCLEtBQUs7UUFDN0MsSUFBSyxTQUFTO1lBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7UUFFbEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBRSxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBRSxDQUFDO0lBQ3pGLENBQUM7Q0FFRDtBQTdJMEI7SUFBekIsU0FBUyxDQUFFLFdBQVcsQ0FBRTtzQ0FBMkIsWUFBWTs2Q0FBWixZQUFZO21EQUUvRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdG9yLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdFBhZ2luYXRvciwgTWF0VGFibGVEYXRhU291cmNlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IF8gZnJvbSAndW5kZXJzY29yZSc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudC10aW1lem9uZSc7XG5cbmltcG9ydCB7IFV0aWxpdGllc1NlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3V0aWxpdGllcy5zZXJ2aWNlJztcblxuZXhwb3J0IGNsYXNzIERhdGFUYWJsZUNvbXBvbmVudCB7XG5cblx0QFZpZXdDaGlsZCggJ3BhZ2luYXRvcicgKSBzZXQgcGFnaW5hdG9yKCBwYWdpbmF0b3I6IE1hdFBhZ2luYXRvciApIHtcblx0XHR0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yID0gcGFnaW5hdG9yO1xuXHR9XG5cblx0cHVibGljIGlzUmV2ZXJzZTogYm9vbGVhbjtcblx0cHVibGljIGZpbHRlcmluZzogYm9vbGVhbiA9IHRydWU7XG5cdHB1YmxpYyBzb3J0S2V5OiBzdHJpbmcgPSAnbmFtZSc7XG5cdHB1YmxpYyBkYXRhU291cmNlQ2xvbmU6IEFycmF5PGFueT4gPSBbXTtcblx0cHVibGljIHNlYXJjaFF1ZXJpZXM6IGFueSA9IHt9O1xuXHRwdWJsaWMgZmlsdGVyczogYW55ID0ge307XG5cdHB1YmxpYyBkYXRhU291cmNlOiBNYXRUYWJsZURhdGFTb3VyY2U8YW55PiA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2U8YW55PiggW10gKTtcblx0cHVibGljIGlzRXhwYW5zaW9uRGV0YWlsUm93OiBGdW5jdGlvbiA9ICggX2k6IG51bWJlciwgcm93OiBPYmplY3QgKSA9PiByb3cuaGFzT3duUHJvcGVydHkoICdkZXRhaWxfcm93JyApO1xuXG5cdC8qKlxuXHQqIEBjb25zdHJ1Y3RvclxuXHQqIEBwYXJhbSB7SW5qZWN0b3J9IGluamVjdG9yXG5cdCovXG5cdGNvbnN0cnVjdG9yKCBwdWJsaWMgaW5qZWN0b3I6IEluamVjdG9yICkge31cblxuXHQvKipcblx0KiBUb2dnbGUgZmlsdGVyIGJveFxuXHQqIEByZXR1cm4ge3ZvaWR9XG5cdCovXG5cdHB1YmxpYyB0b2dnbGVGaWx0ZXIoKSB7XG5cdFx0dGhpcy5maWx0ZXJpbmcgPSAhdGhpcy5maWx0ZXJpbmc7XG5cdH1cblxuXHQvKipcblx0KiBBcHBseSBmaWx0ZXJcblx0KiBAcmV0dXJuIHt2b2lkfVxuXHQqL1xuXHRwdWJsaWMgYXBwbHlGaWx0ZXIoKSB7XG5cdFx0dGhpcy5kYXRhU291cmNlLmZpbHRlclByZWRpY2F0ZSA9ICggZGF0YTogYW55LCBmaWx0ZXJzOiBhbnkgKSA9PiB7XG5cdFx0XHRsZXQgZmxhZzogYm9vbGVhbiA9IHRydWU7XG5cblx0XHRcdF8uZWFjaCggZmlsdGVycywgKCBmaWx0ZXI6IGFueSwga2V5OiBzdHJpbmcgKSA9PiB7XG5cdFx0XHRcdGlmICggIWZsYWdcblx0XHRcdFx0XHR8fCBmaWx0ZXIgPT09IG51bGxcblx0XHRcdFx0XHR8fCBmaWx0ZXIgPT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjb25zdCB2YWx1ZTogYW55ID0gXy5nZXQoIGRhdGEsIGtleSApO1xuXG5cdFx0XHRcdC8vIFJhbmdlIGZpbHRlclxuXHRcdFx0XHRpZiAoICFpc05hTiggZmlsdGVyLm1pbiApICYmICFpc05hTiggZmlsdGVyLm1heCApICkge1xuXHRcdFx0XHRcdGZsYWcgPSB2YWx1ZSA+PSBmaWx0ZXIubWluICYmIHZhbHVlIDw9IGZpbHRlci5tYXg7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gRGF0ZSByYW5nZSBmaWx0ZXJcblx0XHRcdFx0aWYgKCBmaWx0ZXIuYmVnaW4gJiYgZmlsdGVyLmVuZCApIHtcblx0XHRcdFx0XHRjb25zdCBkYXRlOiBhbnkgPSBtb21lbnQoIHZhbHVlICkuc3RhcnRPZiggJ2RheScgKTtcblx0XHRcdFx0XHRmbGFnID0gZGF0ZS5pc1NhbWVPckFmdGVyKCBtb21lbnQoIGZpbHRlci5iZWdpbiApLnN0YXJ0T2YoICdkYXknICksICdkYXknIClcblx0XHRcdFx0XHRcdCYmIGRhdGUuaXNTYW1lT3JCZWZvcmUoIG1vbWVudCggZmlsdGVyLmVuZCApLnN0YXJ0T2YoICdkYXknICksICdkYXknICk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gRGF0ZSBmaWx0ZXJcblx0XHRcdFx0aWYgKCBtb21lbnQuaXNNb21lbnQoIGZpbHRlciApICkge1xuXHRcdFx0XHRcdGZsYWcgPSBtb21lbnQoIHZhbHVlICkuc3RhcnRPZiggJ2RheScgKVxuXHRcdFx0XHRcdFx0LmlzU2FtZSggbW9tZW50KCBmaWx0ZXIgKS5zdGFydE9mKCAnZGF5JyApLCAnZGF5JyApO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGZsYWcgPSB2YWx1ZSA9PT0gZmlsdGVyIHx8IF8uY29udGFpbnMoIGZpbHRlciwgdmFsdWUgKTtcblx0XHRcdH0gKTtcblxuXHRcdFx0Xy5lYWNoKCB0aGlzLnNlYXJjaFF1ZXJpZXMsICggcXVlcnk6IHN0cmluZywga2V5OiBzdHJpbmcgKSA9PiB7XG5cdFx0XHRcdGlmICggIWZsYWcgKSByZXR1cm47XG5cblx0XHRcdFx0ZmxhZyA9IFV0aWxpdGllc1NlcnZpY2Uuc3RyaXBWaWV0bmFtZXNlU3ltYm9sKFxuXHRcdFx0XHRcdCggXy5nZXQoIGRhdGEsIGtleSApIHx8ICcnIClcblx0XHRcdFx0XHQudG9TdHJpbmcoKVxuXHRcdFx0XHRcdC50b0xvd2VyQ2FzZSgpXG5cdFx0XHRcdFx0LnJlcGxhY2UoIC8gL2csICcnIClcblx0XHRcdFx0KVxuXHRcdFx0XHQuaW5kZXhPZihcblx0XHRcdFx0XHRVdGlsaXRpZXNTZXJ2aWNlLnN0cmlwVmlldG5hbWVzZVN5bWJvbChcblx0XHRcdFx0XHRcdCggcXVlcnkgfHwgJycgKVxuXHRcdFx0XHRcdFx0LnRvTG93ZXJDYXNlKClcblx0XHRcdFx0XHRcdC5yZXBsYWNlKCAvIC9nLCAnJyApXG5cdFx0XHRcdFx0KVxuXHRcdFx0XHQpID4gLTE7XG5cdFx0XHR9ICk7XG5cblx0XHRcdHJldHVybiBmbGFnO1xuXHRcdH07XG5cdFx0dGhpcy5kYXRhU291cmNlLmZpbHRlciA9IHRoaXMuZmlsdGVycztcblx0fVxuXG5cdC8qKlxuXHQqIFJlc2V0IGZpbHRlclxuXHQqIEByZXR1cm4ge3ZvaWR9XG5cdCovXG5cdHB1YmxpYyByZXNldEZpbHRlcigpIHtcblx0XHRfLmVhY2goIHRoaXMuc2VhcmNoUXVlcmllcywgKCBfaTogYW55LCBrZXk6IHN0cmluZyApID0+IHRoaXMuc2VhcmNoUXVlcmllc1sga2V5IF0gPSB1bmRlZmluZWQgKTtcblx0XHRfLmVhY2goIHRoaXMuZmlsdGVycywgKCBfaTogYW55LCBrZXk6IHN0cmluZyApID0+IHRoaXMuZmlsdGVyc1sga2V5IF0gPSB1bmRlZmluZWQgKTtcblxuXHRcdHRoaXMuYXBwbHlGaWx0ZXIoKTtcblx0fVxuXG5cdC8qKlxuXHQqIFNvcnQgZGF0YSBzb3VyY2Vcblx0KiBAcGFyYW0ge3N0cmluZ30ga2V5XG5cdCogQHBhcmFtIHthbnl9IG9wdGlvbnNcblx0KiBAcmV0dXJuIHthcnJheX1cblx0Ki9cblx0cHVibGljIHNvcnREYXRhU291cmNlKCBrZXk6IHN0cmluZywgb3B0aW9uczogYW55ID0ge30gKSB7XG5cdFx0Y29uc3QgZGF0YTogQXJyYXk8YW55PiA9IF8uY2xvbmUoIHRoaXMuZGF0YVNvdXJjZUNsb25lICk7XG5cblx0XHRpZiAoICFvcHRpb25zLnR5cGUgKSB7XG5cdFx0XHRkYXRhLnNvcnQoICggYTogYW55LCBiOiBhbnkgKSA9PiB7XG5cdFx0XHRcdGNvbnN0IHg6IHN0cmluZyA9IF8uZ2V0KCBhLCBrZXkgKSA/IF8uZ2V0KCBhLCBrZXkgKS50b0xvd2VyQ2FzZSgpIDogJyc7XG5cdFx0XHRcdGNvbnN0IHk6IHN0cmluZyA9IF8uZ2V0KCBiLCBrZXkgKSA/IF8uZ2V0KCBiLCBrZXkgKS50b0xvd2VyQ2FzZSgpIDogJyc7XG5cblx0XHRcdFx0cmV0dXJuIHggPCB5ID8gLTEgOiB4ID4geSA/IDEgOiAwO1xuXHRcdFx0fSApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRkYXRhLnNvcnQoICggYTogYW55LCBiOiBhbnkgKSA9PiB7XG5cdFx0XHRcdGNvbnN0IHg6IHN0cmluZyA9IF8uZ2V0KCBhLCBrZXkgKTtcblx0XHRcdFx0Y29uc3QgeTogc3RyaW5nID0gXy5nZXQoIGIsIGtleSApO1xuXG5cdFx0XHRcdHJldHVybiB4IDwgeSA/IDEgOiB4ID4geSA/IC0xIDogMDtcblx0XHRcdH0gKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gb3B0aW9ucy5yZXZlcnNlID8gZGF0YS5yZXZlcnNlKCkgOiBkYXRhO1xuXHR9XG5cblx0LyoqXG5cdCogQXBwbHkgc29ydGVyXG5cdCogQHBhcmFtIHtib29sZWFufSBpc1JldmVyc2Vcblx0KiBAcmV0dXJuIHt2b2lkfVxuXHQqL1xuXHRwdWJsaWMgYXBwbHlTb3J0ZXIoIGlzUmV2ZXJzZTogYm9vbGVhbiA9IGZhbHNlICkge1xuXHRcdGlmICggaXNSZXZlcnNlICkgdGhpcy5pc1JldmVyc2UgPSAhdGhpcy5pc1JldmVyc2U7XG5cblx0XHR0aGlzLmRhdGFTb3VyY2UuZGF0YSA9IHRoaXMuc29ydERhdGFTb3VyY2UoIHRoaXMuc29ydEtleSwgeyByZXZlcnNlOiB0aGlzLmlzUmV2ZXJzZSB9ICk7XG5cdH1cblxufVxuIl19