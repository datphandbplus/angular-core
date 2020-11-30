import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
import _ from 'underscore';
import { NumberService } from '../services/number.service';
var ItemObjectPipe = /** @class */ (function () {
    function ItemObjectPipe() {
    }
    /**
    * Transform
    * @param {Array} items
    * @param {string} unit
    * @return {Array}
    */
    ItemObjectPipe.prototype.transform = function (items, unit) {
        if (unit === void 0) { unit = ''; }
        return _.map(items, function (item) { return ({
            id: item,
            name: (isNaN(item) ? item : NumberService.addCommas(item))
                + unit,
        }); });
    };
    ItemObjectPipe = tslib_1.__decorate([
        Pipe({
            name: 'itemObject',
        })
    ], ItemObjectPipe);
    return ItemObjectPipe;
}());
export { ItemObjectPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS1vYmplY3QucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItY29yZS8iLCJzb3VyY2VzIjpbImxpYi9waXBlcy9pdGVtLW9iamVjdC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLENBQUMsTUFBTSxZQUFZLENBQUM7QUFFM0IsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBSzNEO0lBQUE7SUFnQkEsQ0FBQztJQWRBOzs7OztNQUtFO0lBQ0ssa0NBQVMsR0FBaEIsVUFBa0IsS0FBaUIsRUFBRSxJQUFpQjtRQUFqQixxQkFBQSxFQUFBLFNBQWlCO1FBQ3JELE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBRSxLQUFLLEVBQUUsVUFBRSxJQUFTLElBQU0sT0FBQSxDQUFDO1lBQ3RDLEVBQUUsRUFBRSxJQUFJO1lBQ1IsSUFBSSxFQUFFLENBQUUsS0FBSyxDQUFFLElBQUksQ0FBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUUsSUFBSSxDQUFFLENBQUU7a0JBQzdELElBQUk7U0FDUCxDQUFDLEVBSm9DLENBSXBDLENBQUUsQ0FBQztJQUNOLENBQUM7SUFkVyxjQUFjO1FBSDFCLElBQUksQ0FBQztZQUNMLElBQUksRUFBRSxZQUFZO1NBQ2xCLENBQUM7T0FDVyxjQUFjLENBZ0IxQjtJQUFELHFCQUFDO0NBQUEsQUFoQkQsSUFnQkM7U0FoQlksY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBfIGZyb20gJ3VuZGVyc2NvcmUnO1xuXG5pbXBvcnQgeyBOdW1iZXJTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvbnVtYmVyLnNlcnZpY2UnO1xuXG5AUGlwZSh7XG5cdG5hbWU6ICdpdGVtT2JqZWN0Jyxcbn0pXG5leHBvcnQgY2xhc3MgSXRlbU9iamVjdFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuXHQvKipcblx0KiBUcmFuc2Zvcm1cblx0KiBAcGFyYW0ge0FycmF5fSBpdGVtc1xuXHQqIEBwYXJhbSB7c3RyaW5nfSB1bml0XG5cdCogQHJldHVybiB7QXJyYXl9XG5cdCovXG5cdHB1YmxpYyB0cmFuc2Zvcm0oIGl0ZW1zOiBBcnJheTxhbnk+LCB1bml0OiBzdHJpbmcgPSAnJyApOiBBcnJheTxhbnk+IHtcblx0XHRyZXR1cm4gXy5tYXAoIGl0ZW1zLCAoIGl0ZW06IGFueSApID0+ICh7XG5cdFx0XHRpZDogaXRlbSxcblx0XHRcdG5hbWU6ICggaXNOYU4oIGl0ZW0gKSA/IGl0ZW0gOiBOdW1iZXJTZXJ2aWNlLmFkZENvbW1hcyggaXRlbSApIClcblx0XHRcdFx0KyB1bml0LFxuXHRcdH0pICk7XG5cdH1cblxufVxuIl19