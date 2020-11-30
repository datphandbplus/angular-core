import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
import _ from 'underscore';
let MaxPipe = class MaxPipe {
    /**
    * Transform
    * @param {Array} items
    * @param {string} field
    * @return {number}
    */
    transform(items, field) {
        const max = _.max(items, (item) => item[field]);
        return max && max[field] ? max[field] : 0;
    }
};
MaxPipe = tslib_1.__decorate([
    Pipe({
        name: 'max',
    })
], MaxPipe);
export { MaxPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF4LnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNvcmUvIiwic291cmNlcyI6WyJsaWIvcGlwZXMvbWF4LnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sQ0FBQyxNQUFNLFlBQVksQ0FBQztBQUszQixJQUFhLE9BQU8sR0FBcEIsTUFBYSxPQUFPO0lBRW5COzs7OztNQUtFO0lBQ0ssU0FBUyxDQUFFLEtBQWlCLEVBQUUsS0FBYTtRQUNqRCxNQUFNLEdBQUcsR0FBUSxDQUFDLENBQUMsR0FBRyxDQUFFLEtBQUssRUFBRSxDQUFFLElBQVMsRUFBRyxFQUFFLENBQUMsSUFBSSxDQUFFLEtBQUssQ0FBRSxDQUFFLENBQUM7UUFDaEUsT0FBTyxHQUFHLElBQUksR0FBRyxDQUFFLEtBQUssQ0FBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUUsS0FBSyxDQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvQyxDQUFDO0NBRUQsQ0FBQTtBQWJZLE9BQU87SUFIbkIsSUFBSSxDQUFDO1FBQ0wsSUFBSSxFQUFFLEtBQUs7S0FDWCxDQUFDO0dBQ1csT0FBTyxDQWFuQjtTQWJZLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgXyBmcm9tICd1bmRlcnNjb3JlJztcblxuQFBpcGUoe1xuXHRuYW1lOiAnbWF4Jyxcbn0pXG5leHBvcnQgY2xhc3MgTWF4UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG5cdC8qKlxuXHQqIFRyYW5zZm9ybVxuXHQqIEBwYXJhbSB7QXJyYXl9IGl0ZW1zXG5cdCogQHBhcmFtIHtzdHJpbmd9IGZpZWxkXG5cdCogQHJldHVybiB7bnVtYmVyfVxuXHQqL1xuXHRwdWJsaWMgdHJhbnNmb3JtKCBpdGVtczogQXJyYXk8YW55PiwgZmllbGQ6IHN0cmluZyApOiBudW1iZXIge1xuXHRcdGNvbnN0IG1heDogYW55ID0gXy5tYXgoIGl0ZW1zLCAoIGl0ZW06IGFueSApID0+IGl0ZW1bIGZpZWxkIF0gKTtcblx0XHRyZXR1cm4gbWF4ICYmIG1heFsgZmllbGQgXSA/IG1heFsgZmllbGQgXSA6IDA7XG5cdH1cblxufVxuIl19