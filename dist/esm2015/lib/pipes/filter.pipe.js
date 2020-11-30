import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
import _ from 'underscore';
let FilterPipe = class FilterPipe {
    /**
    * Transform
    * @param {Array} items
    * @param {string} field
    * @param {string} value
    * @return {Array}
    */
    transform(items, field, value) {
        if (!items) {
            return [];
        }
        if (!value || !value.length) {
            return items;
        }
        return _.filter(items, (it) => _.indexOf(it[field].toLowerCase(), value.toLowerCase()) > -1);
    }
};
FilterPipe = tslib_1.__decorate([
    Pipe({
        name: 'filter',
        pure: false,
    })
], FilterPipe);
export { FilterPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNvcmUvIiwic291cmNlcyI6WyJsaWIvcGlwZXMvZmlsdGVyLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sQ0FBQyxNQUFNLFlBQVksQ0FBQztBQU0zQixJQUFhLFVBQVUsR0FBdkIsTUFBYSxVQUFVO0lBRXRCOzs7Ozs7TUFNRTtJQUNLLFNBQVMsQ0FBRSxLQUFpQixFQUFFLEtBQWEsRUFBRSxLQUFhO1FBQ2hFLElBQUssQ0FBQyxLQUFLLEVBQUc7WUFDYixPQUFPLEVBQUUsQ0FBQztTQUNWO1FBRUQsSUFBSyxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUc7WUFDOUIsT0FBTyxLQUFLLENBQUM7U0FDYjtRQUVELE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FDZCxLQUFLLEVBQ0wsQ0FBRSxFQUFPLEVBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUUsRUFBRSxDQUFFLEtBQUssQ0FBRSxDQUFDLFdBQVcsRUFBRSxFQUFFLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBRSxHQUFHLENBQUMsQ0FBQyxDQUMvRSxDQUFDO0lBQ0gsQ0FBQztDQUVELENBQUE7QUF4QlksVUFBVTtJQUp0QixJQUFJLENBQUM7UUFDTCxJQUFJLEVBQUUsUUFBUTtRQUNkLElBQUksRUFBRSxLQUFLO0tBQ1gsQ0FBQztHQUNXLFVBQVUsQ0F3QnRCO1NBeEJZLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgXyBmcm9tICd1bmRlcnNjb3JlJztcblxuQFBpcGUoe1xuXHRuYW1lOiAnZmlsdGVyJyxcblx0cHVyZTogZmFsc2UsXG59KVxuZXhwb3J0IGNsYXNzIEZpbHRlclBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuXHQvKipcblx0KiBUcmFuc2Zvcm1cblx0KiBAcGFyYW0ge0FycmF5fSBpdGVtc1xuXHQqIEBwYXJhbSB7c3RyaW5nfSBmaWVsZFxuXHQqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuXHQqIEByZXR1cm4ge0FycmF5fVxuXHQqL1xuXHRwdWJsaWMgdHJhbnNmb3JtKCBpdGVtczogQXJyYXk8YW55PiwgZmllbGQ6IHN0cmluZywgdmFsdWU6IHN0cmluZyApOiBBcnJheTxhbnk+IHtcblx0XHRpZiAoICFpdGVtcyApIHtcblx0XHRcdHJldHVybiBbXTtcblx0XHR9XG5cblx0XHRpZiAoICF2YWx1ZSB8fCAhdmFsdWUubGVuZ3RoICkge1xuXHRcdFx0cmV0dXJuIGl0ZW1zO1xuXHRcdH1cblxuXHRcdHJldHVybiBfLmZpbHRlcihcblx0XHRcdGl0ZW1zLFxuXHRcdFx0KCBpdDogYW55ICkgPT4gXy5pbmRleE9mKCBpdFsgZmllbGQgXS50b0xvd2VyQ2FzZSgpLCB2YWx1ZS50b0xvd2VyQ2FzZSgpICkgPiAtMVxuXHRcdCk7XG5cdH1cblxufVxuIl19