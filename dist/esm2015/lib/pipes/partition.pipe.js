import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
import _ from 'underscore';
let PartitionPipe = class PartitionPipe {
    /**
    * Transform
    * @param {Array} items
    * @param {string} partial
    * @param {string} uniqKey
    * @return {Array}
    */
    transform(items, partial, uniqKey = 'id') {
        const data = {};
        _.each(items, (item) => {
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
        return _.map(data, (item) => item);
    }
};
PartitionPipe = tslib_1.__decorate([
    Pipe({
        name: 'partition',
    })
], PartitionPipe);
export { PartitionPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFydGl0aW9uLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNvcmUvIiwic291cmNlcyI6WyJsaWIvcGlwZXMvcGFydGl0aW9uLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sQ0FBQyxNQUFNLFlBQVksQ0FBQztBQUszQixJQUFhLGFBQWEsR0FBMUIsTUFBYSxhQUFhO0lBRXpCOzs7Ozs7TUFNRTtJQUNLLFNBQVMsQ0FBRSxLQUFpQixFQUFFLE9BQWUsRUFBRSxVQUFrQixJQUFJO1FBQzNFLE1BQU0sSUFBSSxHQUFRLEVBQUUsQ0FBQztRQUVyQixDQUFDLENBQUMsSUFBSSxDQUFFLEtBQUssRUFBRSxDQUFFLElBQVMsRUFBRyxFQUFFO1lBQzlCLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFFLElBQUksRUFBRSxPQUFPLENBQUUsQ0FBQztZQUU5QixJQUFLLENBQUMsSUFBSTtnQkFBRyxPQUFPO1lBRXBCLElBQUssQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFFLElBQUksQ0FBRSxFQUFHO2dCQUMxQixJQUFJLENBQUUsSUFBSSxDQUFFLEdBQUcsRUFBRSxDQUFDO2dCQUNsQixJQUFJLENBQUUsSUFBSSxDQUFFLENBQUUsT0FBTyxDQUFFLEdBQUcsSUFBSSxDQUFDO2dCQUMvQixPQUFPO2FBQ1A7WUFFRCxJQUFJLENBQUUsSUFBSSxDQUFFLE9BQU8sQ0FBRSxDQUFFLEdBQUcsSUFBSSxDQUFDO1FBQ2hDLENBQUMsQ0FBRSxDQUFDO1FBRUosT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFFLElBQUksRUFBRSxDQUFFLElBQVMsRUFBRyxFQUFFLENBQUMsSUFBSSxDQUFFLENBQUM7SUFDN0MsQ0FBQztDQUVELENBQUE7QUE3QlksYUFBYTtJQUh6QixJQUFJLENBQUM7UUFDTCxJQUFJLEVBQUUsV0FBVztLQUNqQixDQUFDO0dBQ1csYUFBYSxDQTZCekI7U0E3QlksYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBfIGZyb20gJ3VuZGVyc2NvcmUnO1xuXG5AUGlwZSh7XG5cdG5hbWU6ICdwYXJ0aXRpb24nLFxufSlcbmV4cG9ydCBjbGFzcyBQYXJ0aXRpb25QaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cblx0LyoqXG5cdCogVHJhbnNmb3JtXG5cdCogQHBhcmFtIHtBcnJheX0gaXRlbXNcblx0KiBAcGFyYW0ge3N0cmluZ30gcGFydGlhbFxuXHQqIEBwYXJhbSB7c3RyaW5nfSB1bmlxS2V5XG5cdCogQHJldHVybiB7QXJyYXl9XG5cdCovXG5cdHB1YmxpYyB0cmFuc2Zvcm0oIGl0ZW1zOiBBcnJheTxhbnk+LCBwYXJ0aWFsOiBzdHJpbmcsIHVuaXFLZXk6IHN0cmluZyA9ICdpZCcgKTogQXJyYXk8YW55PiB7XG5cdFx0Y29uc3QgZGF0YTogYW55ID0ge307XG5cblx0XHRfLmVhY2goIGl0ZW1zLCAoIGl0ZW06IGFueSApID0+IHtcblx0XHRcdGl0ZW0gPSBfLmdldCggaXRlbSwgcGFydGlhbCApO1xuXG5cdFx0XHRpZiAoICFpdGVtICkgcmV0dXJuO1xuXG5cdFx0XHRpZiAoICFfLmlzT2JqZWN0KCBpdGVtICkgKSB7XG5cdFx0XHRcdGRhdGFbIGl0ZW0gXSA9IHt9O1xuXHRcdFx0XHRkYXRhWyBpdGVtIF1bIHVuaXFLZXkgXSA9IGl0ZW07XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0ZGF0YVsgaXRlbVsgdW5pcUtleSBdIF0gPSBpdGVtO1xuXHRcdH0gKTtcblxuXHRcdHJldHVybiBfLm1hcCggZGF0YSwgKCBpdGVtOiBhbnkgKSA9PiBpdGVtICk7XG5cdH1cblxufVxuIl19