import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
var SharedService = /** @class */ (function () {
    function SharedService() {
        this.data = {};
    }
    /**
    * Set shared data
    * @param {string} name
    * @param {any} data
    * @return {void}
    */
    SharedService.prototype.setData = function (name, data) {
        this.data[name] = data;
        this.dataChangeObserver && this.dataChangeObserver.next(this.data);
    };
    /**
    * Get shared data
    * @param {string} name
    * @return {any}
    */
    SharedService.prototype.getData = function (name) {
        return this.data[name];
    };
    /**
    * Remove shared data
    * @param {string} name
    * @return {void}
    */
    SharedService.prototype.removeData = function (name) {
        delete this.data[name];
    };
    SharedService = tslib_1.__decorate([
        Injectable()
    ], SharedService);
    return SharedService;
}());
export { SharedService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNvcmUvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvc2hhcmVkLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0M7SUFEQTtRQUdTLFNBQUksR0FBUSxFQUFFLENBQUM7SUFnQ3hCLENBQUM7SUE3QkE7Ozs7O01BS0U7SUFDSywrQkFBTyxHQUFkLFVBQWdCLElBQVksRUFBRSxJQUFTO1FBQ3RDLElBQUksQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFFLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxrQkFBa0IsSUFBSSxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFFLElBQUksQ0FBQyxJQUFJLENBQUUsQ0FBQztJQUN0RSxDQUFDO0lBRUQ7Ozs7TUFJRTtJQUNLLCtCQUFPLEdBQWQsVUFBZ0IsSUFBWTtRQUMzQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVEOzs7O01BSUU7SUFDSyxrQ0FBVSxHQUFqQixVQUFtQixJQUFZO1FBQzlCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUUsQ0FBQztJQUMxQixDQUFDO0lBaENXLGFBQWE7UUFEekIsVUFBVSxFQUFFO09BQ0EsYUFBYSxDQWtDekI7SUFBRCxvQkFBQztDQUFBLEFBbENELElBa0NDO1NBbENZLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZlciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2hhcmVkU2VydmljZSB7XG5cblx0cHJpdmF0ZSBkYXRhOiBhbnkgPSB7fTtcblx0cHJpdmF0ZSBkYXRhQ2hhbmdlT2JzZXJ2ZXI6IE9ic2VydmVyPGFueT47XG5cblx0LyoqXG5cdCogU2V0IHNoYXJlZCBkYXRhXG5cdCogQHBhcmFtIHtzdHJpbmd9IG5hbWVcblx0KiBAcGFyYW0ge2FueX0gZGF0YVxuXHQqIEByZXR1cm4ge3ZvaWR9XG5cdCovXG5cdHB1YmxpYyBzZXREYXRhKCBuYW1lOiBzdHJpbmcsIGRhdGE6IGFueSApIHtcblx0XHR0aGlzLmRhdGFbIG5hbWUgXSA9IGRhdGE7XG5cdFx0dGhpcy5kYXRhQ2hhbmdlT2JzZXJ2ZXIgJiYgdGhpcy5kYXRhQ2hhbmdlT2JzZXJ2ZXIubmV4dCggdGhpcy5kYXRhICk7XG5cdH1cblxuXHQvKipcblx0KiBHZXQgc2hhcmVkIGRhdGFcblx0KiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuXHQqIEByZXR1cm4ge2FueX1cblx0Ki9cblx0cHVibGljIGdldERhdGEoIG5hbWU6IHN0cmluZyApOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLmRhdGFbIG5hbWUgXTtcblx0fVxuXG5cdC8qKlxuXHQqIFJlbW92ZSBzaGFyZWQgZGF0YVxuXHQqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG5cdCogQHJldHVybiB7dm9pZH1cblx0Ki9cblx0cHVibGljIHJlbW92ZURhdGEoIG5hbWU6IHN0cmluZyApIHtcblx0XHRkZWxldGUgdGhpcy5kYXRhWyBuYW1lIF07XG5cdH1cblxufVxuIl19