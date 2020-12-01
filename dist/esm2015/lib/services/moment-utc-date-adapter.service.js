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
        const result = moment.utc({ year, month, date }).locale(this.locale);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9tZW50LXV0Yy1kYXRlLWFkYXB0ZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9tb21lbnQtdXRjLWRhdGUtYWRhcHRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3JFLE9BQU8sTUFBa0IsTUFBTSxpQkFBaUIsQ0FBQztBQUdqRCxJQUFhLG9CQUFvQixHQUFqQyxNQUFhLG9CQUFxQixTQUFRLGlCQUFpQjtJQUUxRDs7O01BR0U7SUFDRixZQUFvRCxVQUFrQjtRQUNyRSxLQUFLLENBQUUsVUFBVSxDQUFFLENBQUM7SUFDckIsQ0FBQztJQUVEOzs7Ozs7O01BT0U7SUFDSyxVQUFVLENBQUUsSUFBWSxFQUFFLEtBQWEsRUFBRSxJQUFZO1FBQzNELDJGQUEyRjtRQUMzRixzRUFBc0U7UUFDdEUsSUFBSyxLQUFLLEdBQUcsQ0FBQyxJQUFJLEtBQUssR0FBRyxFQUFFLEVBQUc7WUFDOUIsTUFBTSxLQUFLLENBQUUsd0JBQXdCLEtBQUssNENBQTRDLENBQUUsQ0FBQztTQUN6RjtRQUVELElBQUssSUFBSSxHQUFHLENBQUMsRUFBRztZQUNmLE1BQU0sS0FBSyxDQUFFLGlCQUFpQixJQUFJLG1DQUFtQyxDQUFFLENBQUM7U0FDeEU7UUFFRCxNQUFNLE1BQU0sR0FBUSxNQUFNLENBQUMsR0FBRyxDQUFFLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBRSxDQUFDLE1BQU0sQ0FBRSxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUM7UUFFOUUsbUZBQW1GO1FBQ25GLElBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLEVBQUc7WUFDeEIsTUFBTSxLQUFLLENBQUUsaUJBQWlCLElBQUksMkJBQTJCLEtBQUssSUFBSSxDQUFFLENBQUM7U0FDekU7UUFFRCxPQUFPLE1BQU0sQ0FBQztJQUNmLENBQUM7Q0FFRCxDQUFBOzt5Q0FqQ2MsUUFBUSxZQUFJLE1BQU0sU0FBRSxlQUFlOztBQU5yQyxvQkFBb0I7SUFEaEMsVUFBVSxFQUFFO0lBT0UsbUJBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxtQkFBQSxNQUFNLENBQUUsZUFBZSxDQUFFLENBQUE7O0dBTnZDLG9CQUFvQixDQXVDaEM7U0F2Q1ksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTUFUX0RBVEVfTE9DQUxFIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgTW9tZW50RGF0ZUFkYXB0ZXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC1tb21lbnQtYWRhcHRlcic7XG5pbXBvcnQgbW9tZW50LCB7IE1vbWVudCB9IGZyb20gJ21vbWVudC10aW1lem9uZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNb21lbnRVdGNEYXRlQWRhcHRlciBleHRlbmRzIE1vbWVudERhdGVBZGFwdGVyIHtcblxuXHQvKipcblx0KiBAY29uc3RydWN0b3Jcblx0KiBAcGFyYW0ge3N0cmluZ30gZGF0ZUxvY2FsZVxuXHQqL1xuXHRjb25zdHJ1Y3RvciggQE9wdGlvbmFsKCkgQEluamVjdCggTUFUX0RBVEVfTE9DQUxFICkgZGF0ZUxvY2FsZTogc3RyaW5nICkge1xuXHRcdHN1cGVyKCBkYXRlTG9jYWxlICk7XG5cdH1cblxuXHQvKipcblx0KiBDcmVhdGUgZGF0ZVxuXHQqIEBkZXNjIEhhbmRsZSBmdWxsY2FsZW5kYXIgZGF0ZXRpbWUgbG9jYWxlXG5cdCogQHBhcmFtIHtudW1iZXJ9IHllYXJcblx0KiBAcGFyYW0ge251bWJlcn0gbW9udGhcblx0KiBAcGFyYW0ge251bWJlcn0gZGF0ZVxuXHQqIEByZXR1cm4ge01vbWVudH1cblx0Ki9cblx0cHVibGljIGNyZWF0ZURhdGUoIHllYXI6IG51bWJlciwgbW9udGg6IG51bWJlciwgZGF0ZTogbnVtYmVyICk6IE1vbWVudCB7XG5cdFx0Ly8gTW9tZW50LmpzIHdpbGwgY3JlYXRlIGFuIGludmFsaWQgZGF0ZSBpZiBhbnkgb2YgdGhlIGNvbXBvbmVudHMgYXJlIG91dCBvZiBib3VuZHMsIGJ1dCB3ZVxuXHRcdC8vIGV4cGxpY2l0bHkgY2hlY2sgZWFjaCBjYXNlIHNvIHdlIGNhbiB0aHJvdyBtb3JlIGRlc2NyaXB0aXZlIGVycm9ycy5cblx0XHRpZiAoIG1vbnRoIDwgMCB8fCBtb250aCA+IDExICkge1xuXHRcdFx0dGhyb3cgRXJyb3IoIGBJbnZhbGlkIG1vbnRoIGluZGV4IFwiJHttb250aH1cIi4gTW9udGggaW5kZXggaGFzIHRvIGJlIGJldHdlZW4gMCBhbmQgMTEuYCApO1xuXHRcdH1cblxuXHRcdGlmICggZGF0ZSA8IDEgKSB7XG5cdFx0XHR0aHJvdyBFcnJvciggYEludmFsaWQgZGF0ZSBcIiR7ZGF0ZX1cIi4gRGF0ZSBoYXMgdG8gYmUgZ3JlYXRlciB0aGFuIDAuYCApO1xuXHRcdH1cblxuXHRcdGNvbnN0IHJlc3VsdDogYW55ID0gbW9tZW50LnV0YyggeyB5ZWFyLCBtb250aCwgZGF0ZSB9ICkubG9jYWxlKCB0aGlzLmxvY2FsZSApO1xuXG5cdFx0Ly8gSWYgdGhlIHJlc3VsdCBpc24ndCB2YWxpZCwgdGhlIGRhdGUgbXVzdCBoYXZlIGJlZW4gb3V0IG9mIGJvdW5kcyBmb3IgdGhpcyBtb250aC5cblx0XHRpZiAoICFyZXN1bHQuaXNWYWxpZCgpICkge1xuXHRcdFx0dGhyb3cgRXJyb3IoIGBJbnZhbGlkIGRhdGUgXCIke2RhdGV9XCIgZm9yIG1vbnRoIHdpdGggaW5kZXggXCIke21vbnRofVwiLmAgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cbn1cbiJdfQ==