import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
import _ from 'underscore';
let MinPipe = class MinPipe {
    /**
    * Transform
    * @param {Array} items
    * @param {string} field
    * @return {Array}
    */
    transform(items, field) {
        const min = _.min(items, (item) => item[field]);
        return min && min[field] ? min[field] : 0;
    }
};
MinPipe = tslib_1.__decorate([
    Pipe({
        name: 'min',
    })
], MinPipe);
export { MinPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNvcmUvIiwic291cmNlcyI6WyJsaWIvcGlwZXMvbWluLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sQ0FBQyxNQUFNLFlBQVksQ0FBQztBQUszQixJQUFhLE9BQU8sR0FBcEIsTUFBYSxPQUFPO0lBRW5COzs7OztNQUtFO0lBQ0ssU0FBUyxDQUFFLEtBQWlCLEVBQUUsS0FBYTtRQUNqRCxNQUFNLEdBQUcsR0FBUSxDQUFDLENBQUMsR0FBRyxDQUFFLEtBQUssRUFBRSxDQUFFLElBQVMsRUFBRyxFQUFFLENBQUMsSUFBSSxDQUFFLEtBQUssQ0FBRSxDQUFFLENBQUM7UUFDaEUsT0FBTyxHQUFHLElBQUksR0FBRyxDQUFFLEtBQUssQ0FBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUUsS0FBSyxDQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvQyxDQUFDO0NBRUQsQ0FBQTtBQWJZLE9BQU87SUFIbkIsSUFBSSxDQUFDO1FBQ0wsSUFBSSxFQUFFLEtBQUs7S0FDWCxDQUFDO0dBQ1csT0FBTyxDQWFuQjtTQWJZLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgXyBmcm9tICd1bmRlcnNjb3JlJztcblxuQFBpcGUoe1xuXHRuYW1lOiAnbWluJyxcbn0pXG5leHBvcnQgY2xhc3MgTWluUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG5cdC8qKlxuXHQqIFRyYW5zZm9ybVxuXHQqIEBwYXJhbSB7QXJyYXl9IGl0ZW1zXG5cdCogQHBhcmFtIHtzdHJpbmd9IGZpZWxkXG5cdCogQHJldHVybiB7QXJyYXl9XG5cdCovXG5cdHB1YmxpYyB0cmFuc2Zvcm0oIGl0ZW1zOiBBcnJheTxhbnk+LCBmaWVsZDogc3RyaW5nICk6IG51bWJlciB7XG5cdFx0Y29uc3QgbWluOiBhbnkgPSBfLm1pbiggaXRlbXMsICggaXRlbTogYW55ICkgPT4gaXRlbVsgZmllbGQgXSApO1xuXHRcdHJldHVybiBtaW4gJiYgbWluWyBmaWVsZCBdID8gbWluWyBmaWVsZCBdIDogMDtcblx0fVxuXG59XG4iXX0=