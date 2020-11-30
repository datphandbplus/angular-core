import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import _ from 'underscore';
var LoopService = /** @class */ (function () {
    function LoopService() {
        this.intervals = [];
    }
    /**
    * Set loop
    * @param {Function} fn
    * @param {number} time - Time to loop
    * @return {number} index - Loop index
    */
    LoopService.prototype.set = function (fn, time) {
        var index = this.intervals.length ? this.intervals.length + 1 : 0;
        this.intervals[index] = setInterval(fn, time);
        return index;
    };
    /**
    * Cancel loop
    * @param {number} index - Loop index
    * @return {void}
    */
    LoopService.prototype.cancel = function (index) {
        clearInterval(this.intervals[index]);
    };
    /**
    * Destroy all loop
    * @return {void}
    */
    LoopService.prototype.destroy = function () {
        var _this = this;
        _.each(this.intervals, function (_o, i) {
            clearInterval(_this.intervals[i]);
        });
        this.intervals = [];
    };
    LoopService = tslib_1.__decorate([
        Injectable()
    ], LoopService);
    return LoopService;
}());
export { LoopService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9vcC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1jb3JlLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2xvb3Auc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLENBQUMsTUFBTSxZQUFZLENBQUM7QUFHM0I7SUFEQTtRQUdTLGNBQVMsR0FBZSxFQUFFLENBQUM7SUFxQ3BDLENBQUM7SUFuQ0E7Ozs7O01BS0U7SUFDSyx5QkFBRyxHQUFWLFVBQVksRUFBWSxFQUFFLElBQVk7UUFDckMsSUFBTSxLQUFLLEdBQVcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRTVFLElBQUksQ0FBQyxTQUFTLENBQUUsS0FBSyxDQUFFLEdBQUcsV0FBVyxDQUFFLEVBQUUsRUFBRSxJQUFJLENBQUUsQ0FBQztRQUVsRCxPQUFPLEtBQUssQ0FBQztJQUNkLENBQUM7SUFFRDs7OztNQUlFO0lBQ0ssNEJBQU0sR0FBYixVQUFlLEtBQWE7UUFDM0IsYUFBYSxDQUFFLElBQUksQ0FBQyxTQUFTLENBQUUsS0FBSyxDQUFFLENBQUUsQ0FBQztJQUMxQyxDQUFDO0lBRUQ7OztNQUdFO0lBQ0ssNkJBQU8sR0FBZDtRQUFBLGlCQU1DO1FBTEEsQ0FBQyxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUMsU0FBUyxFQUFFLFVBQUUsRUFBTyxFQUFFLENBQU07WUFDeEMsYUFBYSxDQUFFLEtBQUksQ0FBQyxTQUFTLENBQUUsQ0FBQyxDQUFFLENBQUUsQ0FBQztRQUN0QyxDQUFDLENBQUUsQ0FBQztRQUVKLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFyQ1csV0FBVztRQUR2QixVQUFVLEVBQUU7T0FDQSxXQUFXLENBdUN2QjtJQUFELGtCQUFDO0NBQUEsQUF2Q0QsSUF1Q0M7U0F2Q1ksV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBfIGZyb20gJ3VuZGVyc2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9vcFNlcnZpY2Uge1xuXG5cdHByaXZhdGUgaW50ZXJ2YWxzOiBBcnJheTxhbnk+ID0gW107XG5cblx0LyoqXG5cdCogU2V0IGxvb3Bcblx0KiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuXHQqIEBwYXJhbSB7bnVtYmVyfSB0aW1lIC0gVGltZSB0byBsb29wXG5cdCogQHJldHVybiB7bnVtYmVyfSBpbmRleCAtIExvb3AgaW5kZXhcblx0Ki9cblx0cHVibGljIHNldCggZm46IEZ1bmN0aW9uLCB0aW1lOiBudW1iZXIgKTogbnVtYmVyIHtcblx0XHRjb25zdCBpbmRleDogbnVtYmVyID0gdGhpcy5pbnRlcnZhbHMubGVuZ3RoID8gdGhpcy5pbnRlcnZhbHMubGVuZ3RoICsgMSA6IDA7XG5cblx0XHR0aGlzLmludGVydmFsc1sgaW5kZXggXSA9IHNldEludGVydmFsKCBmbiwgdGltZSApO1xuXG5cdFx0cmV0dXJuIGluZGV4O1xuXHR9XG5cblx0LyoqXG5cdCogQ2FuY2VsIGxvb3Bcblx0KiBAcGFyYW0ge251bWJlcn0gaW5kZXggLSBMb29wIGluZGV4XG5cdCogQHJldHVybiB7dm9pZH1cblx0Ki9cblx0cHVibGljIGNhbmNlbCggaW5kZXg6IG51bWJlciApIHtcblx0XHRjbGVhckludGVydmFsKCB0aGlzLmludGVydmFsc1sgaW5kZXggXSApO1xuXHR9XG5cblx0LyoqXG5cdCogRGVzdHJveSBhbGwgbG9vcFxuXHQqIEByZXR1cm4ge3ZvaWR9XG5cdCovXG5cdHB1YmxpYyBkZXN0cm95KCkge1xuXHRcdF8uZWFjaCggdGhpcy5pbnRlcnZhbHMsICggX286IGFueSwgaTogYW55ICkgPT4ge1xuXHRcdFx0Y2xlYXJJbnRlcnZhbCggdGhpcy5pbnRlcnZhbHNbIGkgXSApO1xuXHRcdH0gKTtcblxuXHRcdHRoaXMuaW50ZXJ2YWxzID0gW107XG5cdH1cblxufVxuIl19