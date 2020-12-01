import * as tslib_1 from "tslib";
import { Inject, Injectable, Optional } from '@angular/core';
import { MAT_DATE_LOCALE } from '@angular/material';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import moment from 'moment-timezone';
var MomentUtcDateAdapter = /** @class */ (function (_super) {
    tslib_1.__extends(MomentUtcDateAdapter, _super);
    /**
    * @constructor
    * @param {string} dateLocale
    */
    function MomentUtcDateAdapter(dateLocale) {
        return _super.call(this, dateLocale) || this;
    }
    /**
    * Create date
    * @desc Handle fullcalendar datetime locale
    * @param {number} year
    * @param {number} month
    * @param {number} date
    * @return {Moment}
    */
    MomentUtcDateAdapter.prototype.createDate = function (year, month, date) {
        // Moment.js will create an invalid date if any of the components are out of bounds, but we
        // explicitly check each case so we can throw more descriptive errors.
        if (month < 0 || month > 11) {
            throw Error("Invalid month index \"" + month + "\". Month index has to be between 0 and 11.");
        }
        if (date < 1) {
            throw Error("Invalid date \"" + date + "\". Date has to be greater than 0.");
        }
        var result = moment.utc({ year: year, month: month, date: date }).locale(this.locale);
        // If the result isn't valid, the date must have been out of bounds for this month.
        if (!result.isValid()) {
            throw Error("Invalid date \"" + date + "\" for month with index \"" + month + "\".");
        }
        return result;
    };
    MomentUtcDateAdapter.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Optional }, { type: Inject, args: [MAT_DATE_LOCALE,] }] }
    ]; };
    MomentUtcDateAdapter = tslib_1.__decorate([
        Injectable(),
        tslib_1.__param(0, Optional()), tslib_1.__param(0, Inject(MAT_DATE_LOCALE)),
        tslib_1.__metadata("design:paramtypes", [String])
    ], MomentUtcDateAdapter);
    return MomentUtcDateAdapter;
}(MomentDateAdapter));
export { MomentUtcDateAdapter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9tZW50LXV0Yy1kYXRlLWFkYXB0ZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9tb21lbnQtdXRjLWRhdGUtYWRhcHRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3JFLE9BQU8sTUFBa0IsTUFBTSxpQkFBaUIsQ0FBQztBQUdqRDtJQUEwQyxnREFBaUI7SUFFMUQ7OztNQUdFO0lBQ0YsOEJBQW9ELFVBQWtCO2VBQ3JFLGtCQUFPLFVBQVUsQ0FBRTtJQUNwQixDQUFDO0lBRUQ7Ozs7Ozs7TUFPRTtJQUNLLHlDQUFVLEdBQWpCLFVBQW1CLElBQVksRUFBRSxLQUFhLEVBQUUsSUFBWTtRQUMzRCwyRkFBMkY7UUFDM0Ysc0VBQXNFO1FBQ3RFLElBQUssS0FBSyxHQUFHLENBQUMsSUFBSSxLQUFLLEdBQUcsRUFBRSxFQUFHO1lBQzlCLE1BQU0sS0FBSyxDQUFFLDJCQUF3QixLQUFLLGdEQUE0QyxDQUFFLENBQUM7U0FDekY7UUFFRCxJQUFLLElBQUksR0FBRyxDQUFDLEVBQUc7WUFDZixNQUFNLEtBQUssQ0FBRSxvQkFBaUIsSUFBSSx1Q0FBbUMsQ0FBRSxDQUFDO1NBQ3hFO1FBRUQsSUFBTSxNQUFNLEdBQVEsTUFBTSxDQUFDLEdBQUcsQ0FBRSxFQUFFLElBQUksTUFBQSxFQUFFLEtBQUssT0FBQSxFQUFFLElBQUksTUFBQSxFQUFFLENBQUUsQ0FBQyxNQUFNLENBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBRSxDQUFDO1FBRTlFLG1GQUFtRjtRQUNuRixJQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxFQUFHO1lBQ3hCLE1BQU0sS0FBSyxDQUFFLG9CQUFpQixJQUFJLGtDQUEyQixLQUFLLFFBQUksQ0FBRSxDQUFDO1NBQ3pFO1FBRUQsT0FBTyxNQUFNLENBQUM7SUFDZixDQUFDOzs2Q0EvQmEsUUFBUSxZQUFJLE1BQU0sU0FBRSxlQUFlOztJQU5yQyxvQkFBb0I7UUFEaEMsVUFBVSxFQUFFO1FBT0UsbUJBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxtQkFBQSxNQUFNLENBQUUsZUFBZSxDQUFFLENBQUE7O09BTnZDLG9CQUFvQixDQXVDaEM7SUFBRCwyQkFBQztDQUFBLEFBdkNELENBQTBDLGlCQUFpQixHQXVDMUQ7U0F2Q1ksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTUFUX0RBVEVfTE9DQUxFIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgTW9tZW50RGF0ZUFkYXB0ZXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC1tb21lbnQtYWRhcHRlcic7XG5pbXBvcnQgbW9tZW50LCB7IE1vbWVudCB9IGZyb20gJ21vbWVudC10aW1lem9uZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNb21lbnRVdGNEYXRlQWRhcHRlciBleHRlbmRzIE1vbWVudERhdGVBZGFwdGVyIHtcblxuXHQvKipcblx0KiBAY29uc3RydWN0b3Jcblx0KiBAcGFyYW0ge3N0cmluZ30gZGF0ZUxvY2FsZVxuXHQqL1xuXHRjb25zdHJ1Y3RvciggQE9wdGlvbmFsKCkgQEluamVjdCggTUFUX0RBVEVfTE9DQUxFICkgZGF0ZUxvY2FsZTogc3RyaW5nICkge1xuXHRcdHN1cGVyKCBkYXRlTG9jYWxlICk7XG5cdH1cblxuXHQvKipcblx0KiBDcmVhdGUgZGF0ZVxuXHQqIEBkZXNjIEhhbmRsZSBmdWxsY2FsZW5kYXIgZGF0ZXRpbWUgbG9jYWxlXG5cdCogQHBhcmFtIHtudW1iZXJ9IHllYXJcblx0KiBAcGFyYW0ge251bWJlcn0gbW9udGhcblx0KiBAcGFyYW0ge251bWJlcn0gZGF0ZVxuXHQqIEByZXR1cm4ge01vbWVudH1cblx0Ki9cblx0cHVibGljIGNyZWF0ZURhdGUoIHllYXI6IG51bWJlciwgbW9udGg6IG51bWJlciwgZGF0ZTogbnVtYmVyICk6IE1vbWVudCB7XG5cdFx0Ly8gTW9tZW50LmpzIHdpbGwgY3JlYXRlIGFuIGludmFsaWQgZGF0ZSBpZiBhbnkgb2YgdGhlIGNvbXBvbmVudHMgYXJlIG91dCBvZiBib3VuZHMsIGJ1dCB3ZVxuXHRcdC8vIGV4cGxpY2l0bHkgY2hlY2sgZWFjaCBjYXNlIHNvIHdlIGNhbiB0aHJvdyBtb3JlIGRlc2NyaXB0aXZlIGVycm9ycy5cblx0XHRpZiAoIG1vbnRoIDwgMCB8fCBtb250aCA+IDExICkge1xuXHRcdFx0dGhyb3cgRXJyb3IoIGBJbnZhbGlkIG1vbnRoIGluZGV4IFwiJHttb250aH1cIi4gTW9udGggaW5kZXggaGFzIHRvIGJlIGJldHdlZW4gMCBhbmQgMTEuYCApO1xuXHRcdH1cblxuXHRcdGlmICggZGF0ZSA8IDEgKSB7XG5cdFx0XHR0aHJvdyBFcnJvciggYEludmFsaWQgZGF0ZSBcIiR7ZGF0ZX1cIi4gRGF0ZSBoYXMgdG8gYmUgZ3JlYXRlciB0aGFuIDAuYCApO1xuXHRcdH1cblxuXHRcdGNvbnN0IHJlc3VsdDogYW55ID0gbW9tZW50LnV0YyggeyB5ZWFyLCBtb250aCwgZGF0ZSB9ICkubG9jYWxlKCB0aGlzLmxvY2FsZSApO1xuXG5cdFx0Ly8gSWYgdGhlIHJlc3VsdCBpc24ndCB2YWxpZCwgdGhlIGRhdGUgbXVzdCBoYXZlIGJlZW4gb3V0IG9mIGJvdW5kcyBmb3IgdGhpcyBtb250aC5cblx0XHRpZiAoICFyZXN1bHQuaXNWYWxpZCgpICkge1xuXHRcdFx0dGhyb3cgRXJyb3IoIGBJbnZhbGlkIGRhdGUgXCIke2RhdGV9XCIgZm9yIG1vbnRoIHdpdGggaW5kZXggXCIke21vbnRofVwiLmAgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cbn1cbiJdfQ==