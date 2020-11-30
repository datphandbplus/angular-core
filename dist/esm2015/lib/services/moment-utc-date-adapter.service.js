import * as tslib_1 from "tslib";
import { Inject, Injectable, Optional } from '@angular/core';
import { MAT_DATE_LOCALE } from '@angular/material';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import moment from 'moment-timezone';
let MomentUtcDateAdapter = class MomentUtcDateAdapter extends MomentDateAdapter {
    /**
    * @constructor
    * @param {string} dateLocale
    */
    constructor(dateLocale) {
        super(dateLocale);
    }
    /**
    * Create date
    * @desc Handle fullcalendar datetime locale
    * @param {number} year
    * @param {number} month
    * @param {number} date
    * @return {Moment}
    */
    createDate(year, month, date) {
        // Moment.js will create an invalid date if any of the components are out of bounds, but we
        // explicitly check each case so we can throw more descriptive errors.
        if (month < 0 || month > 11) {
            throw Error(`Invalid month index "${month}". Month index has to be between 0 and 11.`);
        }
        if (date < 1) {
            throw Error(`Invalid date "${date}". Date has to be greater than 0.`);
        }
        const result = moment()
            .year(year)
            .month(month)
            .date(date)
            .hour(0)
            .minute(0)
            .second(0)
            .locale(this.locale);
        // If the result isn't valid, the date must have been out of bounds for this month.
        if (!result.isValid()) {
            throw Error(`Invalid date "${date}" for month with index "${month}".`);
        }
        return result;
    }
};
MomentUtcDateAdapter.ctorParameters = () => [
    { type: String, decorators: [{ type: Optional }, { type: Inject, args: [MAT_DATE_LOCALE,] }] }
];
MomentUtcDateAdapter = tslib_1.__decorate([
    Injectable(),
    tslib_1.__param(0, Optional()), tslib_1.__param(0, Inject(MAT_DATE_LOCALE)),
    tslib_1.__metadata("design:paramtypes", [String])
], MomentUtcDateAdapter);
export { MomentUtcDateAdapter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9tZW50LXV0Yy1kYXRlLWFkYXB0ZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9tb21lbnQtdXRjLWRhdGUtYWRhcHRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3JFLE9BQU8sTUFBa0IsTUFBTSxpQkFBaUIsQ0FBQztBQUdqRCxJQUFhLG9CQUFvQixHQUFqQyxNQUFhLG9CQUFxQixTQUFRLGlCQUFpQjtJQUkxRDs7O01BR0U7SUFDRixZQUFvRCxVQUFrQjtRQUNyRSxLQUFLLENBQUUsVUFBVSxDQUFFLENBQUM7SUFDckIsQ0FBQztJQUVEOzs7Ozs7O01BT0U7SUFDSyxVQUFVLENBQUUsSUFBWSxFQUFFLEtBQWEsRUFBRSxJQUFZO1FBQzNELDJGQUEyRjtRQUMzRixzRUFBc0U7UUFDdEUsSUFBSyxLQUFLLEdBQUcsQ0FBQyxJQUFJLEtBQUssR0FBRyxFQUFFLEVBQUc7WUFDOUIsTUFBTSxLQUFLLENBQUUsd0JBQXdCLEtBQUssNENBQTRDLENBQUUsQ0FBQztTQUN6RjtRQUVELElBQUssSUFBSSxHQUFHLENBQUMsRUFBRztZQUNmLE1BQU0sS0FBSyxDQUFFLGlCQUFpQixJQUFJLG1DQUFtQyxDQUFFLENBQUM7U0FDeEU7UUFFRCxNQUFNLE1BQU0sR0FBUSxNQUFNLEVBQUU7YUFDM0IsSUFBSSxDQUFFLElBQUksQ0FBRTthQUNaLEtBQUssQ0FBRSxLQUFLLENBQUU7YUFDZCxJQUFJLENBQUUsSUFBSSxDQUFFO2FBQ1osSUFBSSxDQUFFLENBQUMsQ0FBRTthQUNULE1BQU0sQ0FBRSxDQUFDLENBQUU7YUFDWCxNQUFNLENBQUUsQ0FBQyxDQUFFO2FBQ1gsTUFBTSxDQUFFLElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQztRQUV2QixtRkFBbUY7UUFDbkYsSUFBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsRUFBRztZQUN4QixNQUFNLEtBQUssQ0FBRSxpQkFBaUIsSUFBSSwyQkFBMkIsS0FBSyxJQUFJLENBQUUsQ0FBQztTQUN6RTtRQUVELE9BQU8sTUFBTSxDQUFDO0lBQ2YsQ0FBQztDQUVELENBQUE7O3lDQXhDYyxRQUFRLFlBQUksTUFBTSxTQUFFLGVBQWU7O0FBUnJDLG9CQUFvQjtJQURoQyxVQUFVLEVBQUU7SUFTRSxtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLE1BQU0sQ0FBRSxlQUFlLENBQUUsQ0FBQTs7R0FSdkMsb0JBQW9CLENBZ0RoQztTQWhEWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNQVRfREFURV9MT0NBTEUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyBNb21lbnREYXRlQWRhcHRlciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsLW1vbWVudC1hZGFwdGVyJztcbmltcG9ydCBtb21lbnQsIHsgTW9tZW50IH0gZnJvbSAnbW9tZW50LXRpbWV6b25lJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE1vbWVudFV0Y0RhdGVBZGFwdGVyIGV4dGVuZHMgTW9tZW50RGF0ZUFkYXB0ZXIge1xuXG5cdHB1YmxpYyB0aW1lem9uZTogc3RyaW5nO1xuXG5cdC8qKlxuXHQqIEBjb25zdHJ1Y3RvclxuXHQqIEBwYXJhbSB7c3RyaW5nfSBkYXRlTG9jYWxlXG5cdCovXG5cdGNvbnN0cnVjdG9yKCBAT3B0aW9uYWwoKSBASW5qZWN0KCBNQVRfREFURV9MT0NBTEUgKSBkYXRlTG9jYWxlOiBzdHJpbmcpIHtcblx0XHRzdXBlciggZGF0ZUxvY2FsZSApO1xuXHR9XG5cblx0LyoqXG5cdCogQ3JlYXRlIGRhdGVcblx0KiBAZGVzYyBIYW5kbGUgZnVsbGNhbGVuZGFyIGRhdGV0aW1lIGxvY2FsZVxuXHQqIEBwYXJhbSB7bnVtYmVyfSB5ZWFyXG5cdCogQHBhcmFtIHtudW1iZXJ9IG1vbnRoXG5cdCogQHBhcmFtIHtudW1iZXJ9IGRhdGVcblx0KiBAcmV0dXJuIHtNb21lbnR9XG5cdCovXG5cdHB1YmxpYyBjcmVhdGVEYXRlKCB5ZWFyOiBudW1iZXIsIG1vbnRoOiBudW1iZXIsIGRhdGU6IG51bWJlciApOiBNb21lbnQge1xuXHRcdC8vIE1vbWVudC5qcyB3aWxsIGNyZWF0ZSBhbiBpbnZhbGlkIGRhdGUgaWYgYW55IG9mIHRoZSBjb21wb25lbnRzIGFyZSBvdXQgb2YgYm91bmRzLCBidXQgd2Vcblx0XHQvLyBleHBsaWNpdGx5IGNoZWNrIGVhY2ggY2FzZSBzbyB3ZSBjYW4gdGhyb3cgbW9yZSBkZXNjcmlwdGl2ZSBlcnJvcnMuXG5cdFx0aWYgKCBtb250aCA8IDAgfHwgbW9udGggPiAxMSApIHtcblx0XHRcdHRocm93IEVycm9yKCBgSW52YWxpZCBtb250aCBpbmRleCBcIiR7bW9udGh9XCIuIE1vbnRoIGluZGV4IGhhcyB0byBiZSBiZXR3ZWVuIDAgYW5kIDExLmAgKTtcblx0XHR9XG5cblx0XHRpZiAoIGRhdGUgPCAxICkge1xuXHRcdFx0dGhyb3cgRXJyb3IoIGBJbnZhbGlkIGRhdGUgXCIke2RhdGV9XCIuIERhdGUgaGFzIHRvIGJlIGdyZWF0ZXIgdGhhbiAwLmAgKTtcblx0XHR9XG5cblx0XHRjb25zdCByZXN1bHQ6IGFueSA9IG1vbWVudCgpXG5cdFx0LnllYXIoIHllYXIgKVxuXHRcdC5tb250aCggbW9udGggKVxuXHRcdC5kYXRlKCBkYXRlIClcblx0XHQuaG91ciggMCApXG5cdFx0Lm1pbnV0ZSggMCApXG5cdFx0LnNlY29uZCggMCApXG5cdFx0LmxvY2FsZSggdGhpcy5sb2NhbGUgKTtcblxuXHRcdC8vIElmIHRoZSByZXN1bHQgaXNuJ3QgdmFsaWQsIHRoZSBkYXRlIG11c3QgaGF2ZSBiZWVuIG91dCBvZiBib3VuZHMgZm9yIHRoaXMgbW9udGguXG5cdFx0aWYgKCAhcmVzdWx0LmlzVmFsaWQoKSApIHtcblx0XHRcdHRocm93IEVycm9yKCBgSW52YWxpZCBkYXRlIFwiJHtkYXRlfVwiIGZvciBtb250aCB3aXRoIGluZGV4IFwiJHttb250aH1cIi5gICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXG59XG4iXX0=