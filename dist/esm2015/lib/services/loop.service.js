import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import _ from 'underscore';
let LoopService = class LoopService {
    constructor() {
        this.intervals = [];
    }
    /**
    * Set loop
    * @param {Function} fn
    * @param {number} time - Time to loop
    * @return {number} index - Loop index
    */
    set(fn, time) {
        const index = this.intervals.length ? this.intervals.length + 1 : 0;
        this.intervals[index] = setInterval(fn, time);
        return index;
    }
    /**
    * Cancel loop
    * @param {number} index - Loop index
    * @return {void}
    */
    cancel(index) {
        clearInterval(this.intervals[index]);
    }
    /**
    * Destroy all loop
    * @return {void}
    */
    destroy() {
        _.each(this.intervals, (_o, i) => {
            clearInterval(this.intervals[i]);
        });
        this.intervals = [];
    }
};
LoopService = tslib_1.__decorate([
    Injectable()
], LoopService);
export { LoopService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9vcC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1jb3JlLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2xvb3Auc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLENBQUMsTUFBTSxZQUFZLENBQUM7QUFHM0IsSUFBYSxXQUFXLEdBQXhCLE1BQWEsV0FBVztJQUR4QjtRQUdTLGNBQVMsR0FBZSxFQUFFLENBQUM7SUFxQ3BDLENBQUM7SUFuQ0E7Ozs7O01BS0U7SUFDSyxHQUFHLENBQUUsRUFBWSxFQUFFLElBQVk7UUFDckMsTUFBTSxLQUFLLEdBQVcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRTVFLElBQUksQ0FBQyxTQUFTLENBQUUsS0FBSyxDQUFFLEdBQUcsV0FBVyxDQUFFLEVBQUUsRUFBRSxJQUFJLENBQUUsQ0FBQztRQUVsRCxPQUFPLEtBQUssQ0FBQztJQUNkLENBQUM7SUFFRDs7OztNQUlFO0lBQ0ssTUFBTSxDQUFFLEtBQWE7UUFDM0IsYUFBYSxDQUFFLElBQUksQ0FBQyxTQUFTLENBQUUsS0FBSyxDQUFFLENBQUUsQ0FBQztJQUMxQyxDQUFDO0lBRUQ7OztNQUdFO0lBQ0ssT0FBTztRQUNiLENBQUMsQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFFLEVBQU8sRUFBRSxDQUFNLEVBQUcsRUFBRTtZQUM3QyxhQUFhLENBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBRSxDQUFDLENBQUUsQ0FBRSxDQUFDO1FBQ3RDLENBQUMsQ0FBRSxDQUFDO1FBRUosSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDckIsQ0FBQztDQUVELENBQUE7QUF2Q1ksV0FBVztJQUR2QixVQUFVLEVBQUU7R0FDQSxXQUFXLENBdUN2QjtTQXZDWSxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IF8gZnJvbSAndW5kZXJzY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb29wU2VydmljZSB7XG5cblx0cHJpdmF0ZSBpbnRlcnZhbHM6IEFycmF5PGFueT4gPSBbXTtcblxuXHQvKipcblx0KiBTZXQgbG9vcFxuXHQqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG5cdCogQHBhcmFtIHtudW1iZXJ9IHRpbWUgLSBUaW1lIHRvIGxvb3Bcblx0KiBAcmV0dXJuIHtudW1iZXJ9IGluZGV4IC0gTG9vcCBpbmRleFxuXHQqL1xuXHRwdWJsaWMgc2V0KCBmbjogRnVuY3Rpb24sIHRpbWU6IG51bWJlciApOiBudW1iZXIge1xuXHRcdGNvbnN0IGluZGV4OiBudW1iZXIgPSB0aGlzLmludGVydmFscy5sZW5ndGggPyB0aGlzLmludGVydmFscy5sZW5ndGggKyAxIDogMDtcblxuXHRcdHRoaXMuaW50ZXJ2YWxzWyBpbmRleCBdID0gc2V0SW50ZXJ2YWwoIGZuLCB0aW1lICk7XG5cblx0XHRyZXR1cm4gaW5kZXg7XG5cdH1cblxuXHQvKipcblx0KiBDYW5jZWwgbG9vcFxuXHQqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCAtIExvb3AgaW5kZXhcblx0KiBAcmV0dXJuIHt2b2lkfVxuXHQqL1xuXHRwdWJsaWMgY2FuY2VsKCBpbmRleDogbnVtYmVyICkge1xuXHRcdGNsZWFySW50ZXJ2YWwoIHRoaXMuaW50ZXJ2YWxzWyBpbmRleCBdICk7XG5cdH1cblxuXHQvKipcblx0KiBEZXN0cm95IGFsbCBsb29wXG5cdCogQHJldHVybiB7dm9pZH1cblx0Ki9cblx0cHVibGljIGRlc3Ryb3koKSB7XG5cdFx0Xy5lYWNoKCB0aGlzLmludGVydmFscywgKCBfbzogYW55LCBpOiBhbnkgKSA9PiB7XG5cdFx0XHRjbGVhckludGVydmFsKCB0aGlzLmludGVydmFsc1sgaSBdICk7XG5cdFx0fSApO1xuXG5cdFx0dGhpcy5pbnRlcnZhbHMgPSBbXTtcblx0fVxuXG59XG4iXX0=