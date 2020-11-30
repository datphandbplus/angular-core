import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
import _ from 'underscore';
import { NumberService } from '../services/number.service';
let ItemObjectPipe = class ItemObjectPipe {
    /**
    * Transform
    * @param {Array} items
    * @param {string} unit
    * @return {Array}
    */
    transform(items, unit = '') {
        return _.map(items, (item) => ({
            id: item,
            name: (isNaN(item) ? item : NumberService.addCommas(item))
                + unit,
        }));
    }
};
ItemObjectPipe = tslib_1.__decorate([
    Pipe({
        name: 'itemObject',
    })
], ItemObjectPipe);
export { ItemObjectPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS1vYmplY3QucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItY29yZS8iLCJzb3VyY2VzIjpbImxpYi9waXBlcy9pdGVtLW9iamVjdC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLENBQUMsTUFBTSxZQUFZLENBQUM7QUFFM0IsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBSzNELElBQWEsY0FBYyxHQUEzQixNQUFhLGNBQWM7SUFFMUI7Ozs7O01BS0U7SUFDSyxTQUFTLENBQUUsS0FBaUIsRUFBRSxPQUFlLEVBQUU7UUFDckQsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFFLEtBQUssRUFBRSxDQUFFLElBQVMsRUFBRyxFQUFFLENBQUMsQ0FBQztZQUN0QyxFQUFFLEVBQUUsSUFBSTtZQUNSLElBQUksRUFBRSxDQUFFLEtBQUssQ0FBRSxJQUFJLENBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFFLElBQUksQ0FBRSxDQUFFO2tCQUM3RCxJQUFJO1NBQ1AsQ0FBQyxDQUFFLENBQUM7SUFDTixDQUFDO0NBRUQsQ0FBQTtBQWhCWSxjQUFjO0lBSDFCLElBQUksQ0FBQztRQUNMLElBQUksRUFBRSxZQUFZO0tBQ2xCLENBQUM7R0FDVyxjQUFjLENBZ0IxQjtTQWhCWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IF8gZnJvbSAndW5kZXJzY29yZSc7XG5cbmltcG9ydCB7IE51bWJlclNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9udW1iZXIuc2VydmljZSc7XG5cbkBQaXBlKHtcblx0bmFtZTogJ2l0ZW1PYmplY3QnLFxufSlcbmV4cG9ydCBjbGFzcyBJdGVtT2JqZWN0UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG5cdC8qKlxuXHQqIFRyYW5zZm9ybVxuXHQqIEBwYXJhbSB7QXJyYXl9IGl0ZW1zXG5cdCogQHBhcmFtIHtzdHJpbmd9IHVuaXRcblx0KiBAcmV0dXJuIHtBcnJheX1cblx0Ki9cblx0cHVibGljIHRyYW5zZm9ybSggaXRlbXM6IEFycmF5PGFueT4sIHVuaXQ6IHN0cmluZyA9ICcnICk6IEFycmF5PGFueT4ge1xuXHRcdHJldHVybiBfLm1hcCggaXRlbXMsICggaXRlbTogYW55ICkgPT4gKHtcblx0XHRcdGlkOiBpdGVtLFxuXHRcdFx0bmFtZTogKCBpc05hTiggaXRlbSApID8gaXRlbSA6IE51bWJlclNlcnZpY2UuYWRkQ29tbWFzKCBpdGVtICkgKVxuXHRcdFx0XHQrIHVuaXQsXG5cdFx0fSkgKTtcblx0fVxuXG59XG4iXX0=