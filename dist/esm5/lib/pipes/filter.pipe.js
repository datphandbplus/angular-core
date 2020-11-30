import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
import _ from 'underscore';
var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    /**
    * Transform
    * @param {Array} items
    * @param {string} field
    * @param {string} value
    * @return {Array}
    */
    FilterPipe.prototype.transform = function (items, field, value) {
        if (!items) {
            return [];
        }
        if (!value || !value.length) {
            return items;
        }
        return _.filter(items, function (it) { return _.indexOf(it[field].toLowerCase(), value.toLowerCase()) > -1; });
    };
    FilterPipe = tslib_1.__decorate([
        Pipe({
            name: 'filter',
            pure: false,
        })
    ], FilterPipe);
    return FilterPipe;
}());
export { FilterPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNvcmUvIiwic291cmNlcyI6WyJsaWIvcGlwZXMvZmlsdGVyLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sQ0FBQyxNQUFNLFlBQVksQ0FBQztBQU0zQjtJQUFBO0lBd0JBLENBQUM7SUF0QkE7Ozs7OztNQU1FO0lBQ0ssOEJBQVMsR0FBaEIsVUFBa0IsS0FBaUIsRUFBRSxLQUFhLEVBQUUsS0FBYTtRQUNoRSxJQUFLLENBQUMsS0FBSyxFQUFHO1lBQ2IsT0FBTyxFQUFFLENBQUM7U0FDVjtRQUVELElBQUssQ0FBQyxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFHO1lBQzlCLE9BQU8sS0FBSyxDQUFDO1NBQ2I7UUFFRCxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQ2QsS0FBSyxFQUNMLFVBQUUsRUFBTyxJQUFNLE9BQUEsQ0FBQyxDQUFDLE9BQU8sQ0FBRSxFQUFFLENBQUUsS0FBSyxDQUFFLENBQUMsV0FBVyxFQUFFLEVBQUUsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQWhFLENBQWdFLENBQy9FLENBQUM7SUFDSCxDQUFDO0lBdEJXLFVBQVU7UUFKdEIsSUFBSSxDQUFDO1lBQ0wsSUFBSSxFQUFFLFFBQVE7WUFDZCxJQUFJLEVBQUUsS0FBSztTQUNYLENBQUM7T0FDVyxVQUFVLENBd0J0QjtJQUFELGlCQUFDO0NBQUEsQUF4QkQsSUF3QkM7U0F4QlksVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBfIGZyb20gJ3VuZGVyc2NvcmUnO1xuXG5AUGlwZSh7XG5cdG5hbWU6ICdmaWx0ZXInLFxuXHRwdXJlOiBmYWxzZSxcbn0pXG5leHBvcnQgY2xhc3MgRmlsdGVyUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG5cdC8qKlxuXHQqIFRyYW5zZm9ybVxuXHQqIEBwYXJhbSB7QXJyYXl9IGl0ZW1zXG5cdCogQHBhcmFtIHtzdHJpbmd9IGZpZWxkXG5cdCogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG5cdCogQHJldHVybiB7QXJyYXl9XG5cdCovXG5cdHB1YmxpYyB0cmFuc2Zvcm0oIGl0ZW1zOiBBcnJheTxhbnk+LCBmaWVsZDogc3RyaW5nLCB2YWx1ZTogc3RyaW5nICk6IEFycmF5PGFueT4ge1xuXHRcdGlmICggIWl0ZW1zICkge1xuXHRcdFx0cmV0dXJuIFtdO1xuXHRcdH1cblxuXHRcdGlmICggIXZhbHVlIHx8ICF2YWx1ZS5sZW5ndGggKSB7XG5cdFx0XHRyZXR1cm4gaXRlbXM7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIF8uZmlsdGVyKFxuXHRcdFx0aXRlbXMsXG5cdFx0XHQoIGl0OiBhbnkgKSA9PiBfLmluZGV4T2YoIGl0WyBmaWVsZCBdLnRvTG93ZXJDYXNlKCksIHZhbHVlLnRvTG93ZXJDYXNlKCkgKSA+IC0xXG5cdFx0KTtcblx0fVxuXG59XG4iXX0=