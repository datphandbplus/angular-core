import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let SharedService = class SharedService {
    constructor() {
        this.data = {};
    }
    /**
    * Set shared data
    * @param {string} name
    * @param {any} data
    * @return {void}
    */
    setData(name, data) {
        this.data[name] = data;
        this.dataChangeObserver && this.dataChangeObserver.next(this.data);
    }
    /**
    * Get shared data
    * @param {string} name
    * @return {any}
    */
    getData(name) {
        return this.data[name];
    }
    /**
    * Remove shared data
    * @param {string} name
    * @return {void}
    */
    removeData(name) {
        delete this.data[name];
    }
};
SharedService = tslib_1.__decorate([
    Injectable()
], SharedService);
export { SharedService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNvcmUvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvc2hhcmVkLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsSUFBYSxhQUFhLEdBQTFCLE1BQWEsYUFBYTtJQUQxQjtRQUdTLFNBQUksR0FBUSxFQUFFLENBQUM7SUFnQ3hCLENBQUM7SUE3QkE7Ozs7O01BS0U7SUFDSyxPQUFPLENBQUUsSUFBWSxFQUFFLElBQVM7UUFDdEMsSUFBSSxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUUsR0FBRyxJQUFJLENBQUM7UUFDekIsSUFBSSxDQUFDLGtCQUFrQixJQUFJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFDLElBQUksQ0FBRSxDQUFDO0lBQ3RFLENBQUM7SUFFRDs7OztNQUlFO0lBQ0ssT0FBTyxDQUFFLElBQVk7UUFDM0IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFFLElBQUksQ0FBRSxDQUFDO0lBQzFCLENBQUM7SUFFRDs7OztNQUlFO0lBQ0ssVUFBVSxDQUFFLElBQVk7UUFDOUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFFLElBQUksQ0FBRSxDQUFDO0lBQzFCLENBQUM7Q0FFRCxDQUFBO0FBbENZLGFBQWE7SUFEekIsVUFBVSxFQUFFO0dBQ0EsYUFBYSxDQWtDekI7U0FsQ1ksYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmVyIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTaGFyZWRTZXJ2aWNlIHtcblxuXHRwcml2YXRlIGRhdGE6IGFueSA9IHt9O1xuXHRwcml2YXRlIGRhdGFDaGFuZ2VPYnNlcnZlcjogT2JzZXJ2ZXI8YW55PjtcblxuXHQvKipcblx0KiBTZXQgc2hhcmVkIGRhdGFcblx0KiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuXHQqIEBwYXJhbSB7YW55fSBkYXRhXG5cdCogQHJldHVybiB7dm9pZH1cblx0Ki9cblx0cHVibGljIHNldERhdGEoIG5hbWU6IHN0cmluZywgZGF0YTogYW55ICkge1xuXHRcdHRoaXMuZGF0YVsgbmFtZSBdID0gZGF0YTtcblx0XHR0aGlzLmRhdGFDaGFuZ2VPYnNlcnZlciAmJiB0aGlzLmRhdGFDaGFuZ2VPYnNlcnZlci5uZXh0KCB0aGlzLmRhdGEgKTtcblx0fVxuXG5cdC8qKlxuXHQqIEdldCBzaGFyZWQgZGF0YVxuXHQqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG5cdCogQHJldHVybiB7YW55fVxuXHQqL1xuXHRwdWJsaWMgZ2V0RGF0YSggbmFtZTogc3RyaW5nICk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMuZGF0YVsgbmFtZSBdO1xuXHR9XG5cblx0LyoqXG5cdCogUmVtb3ZlIHNoYXJlZCBkYXRhXG5cdCogQHBhcmFtIHtzdHJpbmd9IG5hbWVcblx0KiBAcmV0dXJuIHt2b2lkfVxuXHQqL1xuXHRwdWJsaWMgcmVtb3ZlRGF0YSggbmFtZTogc3RyaW5nICkge1xuXHRcdGRlbGV0ZSB0aGlzLmRhdGFbIG5hbWUgXTtcblx0fVxuXG59XG4iXX0=