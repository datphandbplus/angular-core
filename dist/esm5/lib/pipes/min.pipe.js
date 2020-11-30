import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
import _ from 'underscore';
var MinPipe = /** @class */ (function () {
    function MinPipe() {
    }
    /**
    * Transform
    * @param {Array} items
    * @param {string} field
    * @return {Array}
    */
    MinPipe.prototype.transform = function (items, field) {
        var min = _.min(items, function (item) { return item[field]; });
        return min && min[field] ? min[field] : 0;
    };
    MinPipe = tslib_1.__decorate([
        Pipe({
            name: 'min',
        })
    ], MinPipe);
    return MinPipe;
}());
export { MinPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNvcmUvIiwic291cmNlcyI6WyJsaWIvcGlwZXMvbWluLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sQ0FBQyxNQUFNLFlBQVksQ0FBQztBQUszQjtJQUFBO0lBYUEsQ0FBQztJQVhBOzs7OztNQUtFO0lBQ0ssMkJBQVMsR0FBaEIsVUFBa0IsS0FBaUIsRUFBRSxLQUFhO1FBQ2pELElBQU0sR0FBRyxHQUFRLENBQUMsQ0FBQyxHQUFHLENBQUUsS0FBSyxFQUFFLFVBQUUsSUFBUyxJQUFNLE9BQUEsSUFBSSxDQUFFLEtBQUssQ0FBRSxFQUFiLENBQWEsQ0FBRSxDQUFDO1FBQ2hFLE9BQU8sR0FBRyxJQUFJLEdBQUcsQ0FBRSxLQUFLLENBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFFLEtBQUssQ0FBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQVhXLE9BQU87UUFIbkIsSUFBSSxDQUFDO1lBQ0wsSUFBSSxFQUFFLEtBQUs7U0FDWCxDQUFDO09BQ1csT0FBTyxDQWFuQjtJQUFELGNBQUM7Q0FBQSxBQWJELElBYUM7U0FiWSxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IF8gZnJvbSAndW5kZXJzY29yZSc7XG5cbkBQaXBlKHtcblx0bmFtZTogJ21pbicsXG59KVxuZXhwb3J0IGNsYXNzIE1pblBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuXHQvKipcblx0KiBUcmFuc2Zvcm1cblx0KiBAcGFyYW0ge0FycmF5fSBpdGVtc1xuXHQqIEBwYXJhbSB7c3RyaW5nfSBmaWVsZFxuXHQqIEByZXR1cm4ge0FycmF5fVxuXHQqL1xuXHRwdWJsaWMgdHJhbnNmb3JtKCBpdGVtczogQXJyYXk8YW55PiwgZmllbGQ6IHN0cmluZyApOiBudW1iZXIge1xuXHRcdGNvbnN0IG1pbjogYW55ID0gXy5taW4oIGl0ZW1zLCAoIGl0ZW06IGFueSApID0+IGl0ZW1bIGZpZWxkIF0gKTtcblx0XHRyZXR1cm4gbWluICYmIG1pblsgZmllbGQgXSA/IG1pblsgZmllbGQgXSA6IDA7XG5cdH1cblxufVxuIl19