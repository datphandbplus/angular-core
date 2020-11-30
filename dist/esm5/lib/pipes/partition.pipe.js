import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
import _ from 'underscore';
var PartitionPipe = /** @class */ (function () {
    function PartitionPipe() {
    }
    /**
    * Transform
    * @param {Array} items
    * @param {string} partial
    * @param {string} uniqKey
    * @return {Array}
    */
    PartitionPipe.prototype.transform = function (items, partial, uniqKey) {
        if (uniqKey === void 0) { uniqKey = 'id'; }
        var data = {};
        _.each(items, function (item) {
            item = _.get(item, partial);
            if (!item)
                return;
            if (!_.isObject(item)) {
                data[item] = {};
                data[item][uniqKey] = item;
                return;
            }
            data[item[uniqKey]] = item;
        });
        return _.map(data, function (item) { return item; });
    };
    PartitionPipe = tslib_1.__decorate([
        Pipe({
            name: 'partition',
        })
    ], PartitionPipe);
    return PartitionPipe;
}());
export { PartitionPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFydGl0aW9uLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNvcmUvIiwic291cmNlcyI6WyJsaWIvcGlwZXMvcGFydGl0aW9uLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sQ0FBQyxNQUFNLFlBQVksQ0FBQztBQUszQjtJQUFBO0lBNkJBLENBQUM7SUEzQkE7Ozs7OztNQU1FO0lBQ0ssaUNBQVMsR0FBaEIsVUFBa0IsS0FBaUIsRUFBRSxPQUFlLEVBQUUsT0FBc0I7UUFBdEIsd0JBQUEsRUFBQSxjQUFzQjtRQUMzRSxJQUFNLElBQUksR0FBUSxFQUFFLENBQUM7UUFFckIsQ0FBQyxDQUFDLElBQUksQ0FBRSxLQUFLLEVBQUUsVUFBRSxJQUFTO1lBQ3pCLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFFLElBQUksRUFBRSxPQUFPLENBQUUsQ0FBQztZQUU5QixJQUFLLENBQUMsSUFBSTtnQkFBRyxPQUFPO1lBRXBCLElBQUssQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFFLElBQUksQ0FBRSxFQUFHO2dCQUMxQixJQUFJLENBQUUsSUFBSSxDQUFFLEdBQUcsRUFBRSxDQUFDO2dCQUNsQixJQUFJLENBQUUsSUFBSSxDQUFFLENBQUUsT0FBTyxDQUFFLEdBQUcsSUFBSSxDQUFDO2dCQUMvQixPQUFPO2FBQ1A7WUFFRCxJQUFJLENBQUUsSUFBSSxDQUFFLE9BQU8sQ0FBRSxDQUFFLEdBQUcsSUFBSSxDQUFDO1FBQ2hDLENBQUMsQ0FBRSxDQUFDO1FBRUosT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFFLElBQUksRUFBRSxVQUFFLElBQVMsSUFBTSxPQUFBLElBQUksRUFBSixDQUFJLENBQUUsQ0FBQztJQUM3QyxDQUFDO0lBM0JXLGFBQWE7UUFIekIsSUFBSSxDQUFDO1lBQ0wsSUFBSSxFQUFFLFdBQVc7U0FDakIsQ0FBQztPQUNXLGFBQWEsQ0E2QnpCO0lBQUQsb0JBQUM7Q0FBQSxBQTdCRCxJQTZCQztTQTdCWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IF8gZnJvbSAndW5kZXJzY29yZSc7XG5cbkBQaXBlKHtcblx0bmFtZTogJ3BhcnRpdGlvbicsXG59KVxuZXhwb3J0IGNsYXNzIFBhcnRpdGlvblBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuXHQvKipcblx0KiBUcmFuc2Zvcm1cblx0KiBAcGFyYW0ge0FycmF5fSBpdGVtc1xuXHQqIEBwYXJhbSB7c3RyaW5nfSBwYXJ0aWFsXG5cdCogQHBhcmFtIHtzdHJpbmd9IHVuaXFLZXlcblx0KiBAcmV0dXJuIHtBcnJheX1cblx0Ki9cblx0cHVibGljIHRyYW5zZm9ybSggaXRlbXM6IEFycmF5PGFueT4sIHBhcnRpYWw6IHN0cmluZywgdW5pcUtleTogc3RyaW5nID0gJ2lkJyApOiBBcnJheTxhbnk+IHtcblx0XHRjb25zdCBkYXRhOiBhbnkgPSB7fTtcblxuXHRcdF8uZWFjaCggaXRlbXMsICggaXRlbTogYW55ICkgPT4ge1xuXHRcdFx0aXRlbSA9IF8uZ2V0KCBpdGVtLCBwYXJ0aWFsICk7XG5cblx0XHRcdGlmICggIWl0ZW0gKSByZXR1cm47XG5cblx0XHRcdGlmICggIV8uaXNPYmplY3QoIGl0ZW0gKSApIHtcblx0XHRcdFx0ZGF0YVsgaXRlbSBdID0ge307XG5cdFx0XHRcdGRhdGFbIGl0ZW0gXVsgdW5pcUtleSBdID0gaXRlbTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRkYXRhWyBpdGVtWyB1bmlxS2V5IF0gXSA9IGl0ZW07XG5cdFx0fSApO1xuXG5cdFx0cmV0dXJuIF8ubWFwKCBkYXRhLCAoIGl0ZW06IGFueSApID0+IGl0ZW0gKTtcblx0fVxuXG59XG4iXX0=