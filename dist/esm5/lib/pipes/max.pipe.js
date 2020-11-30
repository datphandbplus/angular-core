import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
import _ from 'underscore';
var MaxPipe = /** @class */ (function () {
    function MaxPipe() {
    }
    /**
    * Transform
    * @param {Array} items
    * @param {string} field
    * @return {number}
    */
    MaxPipe.prototype.transform = function (items, field) {
        var max = _.max(items, function (item) { return item[field]; });
        return max && max[field] ? max[field] : 0;
    };
    MaxPipe = tslib_1.__decorate([
        Pipe({
            name: 'max',
        })
    ], MaxPipe);
    return MaxPipe;
}());
export { MaxPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF4LnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNvcmUvIiwic291cmNlcyI6WyJsaWIvcGlwZXMvbWF4LnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sQ0FBQyxNQUFNLFlBQVksQ0FBQztBQUszQjtJQUFBO0lBYUEsQ0FBQztJQVhBOzs7OztNQUtFO0lBQ0ssMkJBQVMsR0FBaEIsVUFBa0IsS0FBaUIsRUFBRSxLQUFhO1FBQ2pELElBQU0sR0FBRyxHQUFRLENBQUMsQ0FBQyxHQUFHLENBQUUsS0FBSyxFQUFFLFVBQUUsSUFBUyxJQUFNLE9BQUEsSUFBSSxDQUFFLEtBQUssQ0FBRSxFQUFiLENBQWEsQ0FBRSxDQUFDO1FBQ2hFLE9BQU8sR0FBRyxJQUFJLEdBQUcsQ0FBRSxLQUFLLENBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFFLEtBQUssQ0FBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQVhXLE9BQU87UUFIbkIsSUFBSSxDQUFDO1lBQ0wsSUFBSSxFQUFFLEtBQUs7U0FDWCxDQUFDO09BQ1csT0FBTyxDQWFuQjtJQUFELGNBQUM7Q0FBQSxBQWJELElBYUM7U0FiWSxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IF8gZnJvbSAndW5kZXJzY29yZSc7XG5cbkBQaXBlKHtcblx0bmFtZTogJ21heCcsXG59KVxuZXhwb3J0IGNsYXNzIE1heFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuXHQvKipcblx0KiBUcmFuc2Zvcm1cblx0KiBAcGFyYW0ge0FycmF5fSBpdGVtc1xuXHQqIEBwYXJhbSB7c3RyaW5nfSBmaWVsZFxuXHQqIEByZXR1cm4ge251bWJlcn1cblx0Ki9cblx0cHVibGljIHRyYW5zZm9ybSggaXRlbXM6IEFycmF5PGFueT4sIGZpZWxkOiBzdHJpbmcgKTogbnVtYmVyIHtcblx0XHRjb25zdCBtYXg6IGFueSA9IF8ubWF4KCBpdGVtcywgKCBpdGVtOiBhbnkgKSA9PiBpdGVtWyBmaWVsZCBdICk7XG5cdFx0cmV0dXJuIG1heCAmJiBtYXhbIGZpZWxkIF0gPyBtYXhbIGZpZWxkIF0gOiAwO1xuXHR9XG5cbn1cbiJdfQ==