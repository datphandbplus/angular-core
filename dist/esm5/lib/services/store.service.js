import * as tslib_1 from "tslib";
import { Injectable, Inject, Optional } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import * as CryptoJS from 'crypto-js';
import _ from 'underscore';
import moment from 'moment-timezone';
import { DEFAULT_EXPIRE_DAYS, DEFAULT_STORAGE_HASH_KEY } from '../injection-token';
var StoreService = /** @class */ (function () {
    /**
    * @constructor
    * @param {number} defaultExpireDays
    * @param {string} defaultStorageHashKey
    * @param {CookieService} cookies
    */
    function StoreService(defaultExpireDays, defaultStorageHashKey, cookies) {
        this.defaultExpireDays = defaultExpireDays;
        this.defaultStorageHashKey = defaultStorageHashKey;
        this.cookies = cookies;
        this.options = { path: '/' };
    }
    /**
    * Set store data
    * @param {string} key
    * @param {any} data
    * @param {number} expires - Number of expire days
    * @return {void}
    */
    StoreService.prototype.set = function (key, data, expires) {
        if (expires === void 0) { expires = this.defaultExpireDays; }
        var hashKey = this.getHashKey();
        if (!hashKey)
            return;
        var message = JSON.stringify(data);
        var hashValue = CryptoJS.AES.encrypt(message, hashKey);
        this.cookies.put(key, hashValue.toString(), this._mergeOptions(expires));
    };
    /**
    * Get store data
    * @param {string} key
    * @return {any}
    */
    StoreService.prototype.get = function (key) {
        var hashKey = this.getHashKey();
        var hashValue = this.cookies.get(key);
        if (hashKey && hashValue) {
            var bytes = CryptoJS.AES.decrypt(hashValue, hashKey);
            var rawValue = void 0;
            try {
                rawValue = bytes.toString(CryptoJS.enc.Utf8);
                rawValue = JSON.parse(rawValue);
            }
            catch (_a) { }
            return rawValue;
        }
        return null;
    };
    /**
    * Remove store data
    * @param {string} key
    * @return {void}
    */
    StoreService.prototype.remove = function (key) {
        this.cookies.remove(key, this.options);
    };
    /**
    * Remove all store data
    * @param {string} key
    * @return {void}
    */
    StoreService.prototype.removeAll = function () {
        this.cookies.removeAll();
    };
    /**
    * Set local store data
    * @param {string} key
    * @param {any} data
    * @return {void}
    */
    StoreService.prototype.setLocal = function (key, data) {
        var hashKey = this.getHashKey();
        if (hashKey) {
            var message = JSON.stringify(data);
            var hashValue = CryptoJS.AES.encrypt(message, hashKey);
            localStorage.setItem(key, hashValue.toString());
        }
    };
    /**
    * Get local store data
    * @param {string} key
    * @return {any}
    */
    StoreService.prototype.getLocal = function (key) {
        var hashKey = this.getHashKey();
        var hashValue = localStorage.getItem(key);
        if (hashKey && hashValue) {
            var bytes = CryptoJS.AES.decrypt(hashValue, hashKey);
            var rawValue = void 0;
            try {
                rawValue = bytes.toString(CryptoJS.enc.Utf8);
                rawValue = JSON.parse(rawValue);
            }
            catch (_a) { }
            return rawValue;
        }
        return null;
    };
    /**
    * Remove local store data
    * @param {string} key
    * @return {void}
    */
    StoreService.prototype.removeLocal = function (key) {
        localStorage.removeItem(key);
    };
    /**
    * Set store hash key
    * @param {any} value - Hash key
    * @param {number} expires - Number of expire days
    * @return {void}
    */
    StoreService.prototype.setHashKey = function (value, expires) {
        if (expires === void 0) { expires = 1; }
        this.cookies.put('_r', value, this._mergeOptions(expires));
    };
    /**
    * Get store hash key
    * @return {string} Hash key
    */
    StoreService.prototype.getHashKey = function () {
        return this.defaultStorageHashKey;
    };
    /**
    * Remove store hash key
    * @return {string} Hash key
    */
    StoreService.prototype.removeHashKey = function () {
        this.cookies.remove('_r', this.options);
    };
    /**
    * Merge options
    * @private
    * @param {number} expires - Number of expire days
    * @return {any} options - Merged options
    */
    StoreService.prototype._mergeOptions = function (expires) {
        var options = {};
        if (expires) {
            options.expires = moment(+moment() + 24 * 60 * 60 * 1000 * expires).format();
        }
        _.assign(options, this.options);
        return options;
    };
    StoreService.ctorParameters = function () { return [
        { type: Number, decorators: [{ type: Optional }, { type: Inject, args: [DEFAULT_EXPIRE_DAYS,] }] },
        { type: String, decorators: [{ type: Optional }, { type: Inject, args: [DEFAULT_STORAGE_HASH_KEY,] }] },
        { type: CookieService }
    ]; };
    StoreService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__param(0, Optional()), tslib_1.__param(0, Inject(DEFAULT_EXPIRE_DAYS)),
        tslib_1.__param(1, Optional()), tslib_1.__param(1, Inject(DEFAULT_STORAGE_HASH_KEY)),
        tslib_1.__metadata("design:paramtypes", [Number, String, CookieService])
    ], StoreService);
    return StoreService;
}());
export { StoreService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9zdG9yZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUMzQyxPQUFPLEtBQUssUUFBUSxNQUFNLFdBQVcsQ0FBQztBQUN0QyxPQUFPLENBQUMsTUFBTSxZQUFZLENBQUM7QUFDM0IsT0FBTyxNQUFNLE1BQU0saUJBQWlCLENBQUM7QUFFckMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLHdCQUF3QixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHbkY7SUFJQzs7Ozs7TUFLRTtJQUNGLHNCQUNxRCxpQkFBeUIsRUFDcEIscUJBQTZCLEVBQzlFLE9BQXNCO1FBRnNCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBUTtRQUNwQiwwQkFBcUIsR0FBckIscUJBQXFCLENBQVE7UUFDOUUsWUFBTyxHQUFQLE9BQU8sQ0FBZTtRQVh2QixZQUFPLEdBQVEsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUM7SUFZbEMsQ0FBQztJQUVKOzs7Ozs7TUFNRTtJQUNLLDBCQUFHLEdBQVYsVUFBWSxHQUFXLEVBQUUsSUFBUyxFQUFFLE9BQXdDO1FBQXhDLHdCQUFBLEVBQUEsVUFBa0IsSUFBSSxDQUFDLGlCQUFpQjtRQUMzRSxJQUFNLE9BQU8sR0FBVyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFFMUMsSUFBSyxDQUFDLE9BQU87WUFBRyxPQUFPO1FBRXZCLElBQU0sT0FBTyxHQUFXLElBQUksQ0FBQyxTQUFTLENBQUUsSUFBSSxDQUFFLENBQUM7UUFDL0MsSUFBTSxTQUFTLEdBQVEsUUFBUSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUUsT0FBTyxF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QUQsbUJBQUM7Q0FBQSxBQTFLRCxJQTBLQztTQTFLWSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0LCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29va2llU2VydmljZSB9IGZyb20gJ25neC1jb29raWUnO1xuaW1wb3J0ICogYXMgQ3J5cHRvSlMgZnJvbSAnY3J5cHRvLWpzJztcbmltcG9ydCBfIGZyb20gJ3VuZGVyc2NvcmUnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQtdGltZXpvbmUnO1xuXG5pbXBvcnQgeyBERUZBVUxUX0VYUElSRV9EQVlTLCBERUZBVUxUX1NUT1JBR0VfSEFTSF9LRVkgfSBmcm9tICcuLi9pbmplY3Rpb24tdG9rZW4nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RvcmVTZXJ2aWNlIHtcblxuXHRwcml2YXRlIG9wdGlvbnM6IGFueSA9IHsgcGF0aDogJy8nIH07XG5cblx0LyoqXG5cdCogQGNvbnN0cnVjdG9yXG5cdCogQHBhcmFtIHtudW1iZXJ9IGRlZmF1bHRFeHBpcmVEYXlzXG5cdCogQHBhcmFtIHtzdHJpbmd9IGRlZmF1bHRTdG9yYWdlSGFzaEtleVxuXHQqIEBwYXJhbSB7Q29va2llU2VydmljZX0gY29va2llc1xuXHQqL1xuXHRjb25zdHJ1Y3Rvcihcblx0XHRAT3B0aW9uYWwoKSBASW5qZWN0KCBERUZBVUxUX0VYUElSRV9EQVlTICkgcmVhZG9ubHkgZGVmYXVsdEV4cGlyZURheXM6IG51bWJlcixcblx0XHRAT3B0aW9uYWwoKSBASW5qZWN0KCBERUZBVUxUX1NUT1JBR0VfSEFTSF9LRVkgKSByZWFkb25seSBkZWZhdWx0U3RvcmFnZUhhc2hLZXk6IHN0cmluZyxcblx0XHRwcml2YXRlIGNvb2tpZXM6IENvb2tpZVNlcnZpY2Vcblx0KSB7fVxuXG5cdC8qKlxuXHQqIFNldCBzdG9yZSBkYXRhXG5cdCogQHBhcmFtIHtzdHJpbmd9IGtleVxuXHQqIEBwYXJhbSB7YW55fSBkYXRhXG5cdCogQHBhcmFtIHtudW1iZXJ9IGV4cGlyZXMgLSBOdW1iZXIgb2YgZXhwaXJlIGRheXNcblx0KiBAcmV0dXJuIHt2b2lkfVxuXHQqL1xuXHRwdWJsaWMgc2V0KCBrZXk6IHN0cmluZywgZGF0YTogYW55LCBleHBpcmVzOiBudW1iZXIgPSB0aGlzLmRlZmF1bHRFeHBpcmVEYXlzICkge1xuXHRcdGNvbnN0IGhhc2hLZXk6IHN0cmluZyA9IHRoaXMuZ2V0SGFzaEtleSgpO1xuXG5cdFx0aWYgKCAhaGFzaEtleSApIHJldHVybjtcblxuXHRcdGNvbnN0IG1lc3NhZ2U6IHN0cmluZyA9IEpTT04uc3RyaW5naWZ5KCBkYXRhICk7XG5cdFx0Y29uc3QgaGFzaFZhbHVlOiBhbnkgPSBDcnlwdG9KUy5BRVMuZW5jcnlwdCggbWVzc2FnZSwgaGFzaEtleSApO1xuXG5cdFx0dGhpcy5jb29raWVzLnB1dCgga2V5LCBoYXNoVmFsdWUudG9TdHJpbmcoKSwgdGhpcy5fbWVyZ2VPcHRpb25zKCBleHBpcmVzICkgKTtcblx0fVxuXG5cdC8qKlxuXHQqIEdldCBzdG9yZSBkYXRhXG5cdCogQHBhcmFtIHtzdHJpbmd9IGtleVxuXHQqIEByZXR1cm4ge2FueX1cblx0Ki9cblx0cHVibGljIGdldCgga2V5OiBzdHJpbmcgKTogYW55IHtcblx0XHRjb25zdCBoYXNoS2V5OiBzdHJpbmcgPSB0aGlzLmdldEhhc2hLZXkoKTtcblx0XHRjb25zdCBoYXNoVmFsdWU6IHN0cmluZyA9IHRoaXMuY29va2llcy5nZXQoIGtleSApO1xuXG5cdFx0aWYgKCBoYXNoS2V5ICYmIGhhc2hWYWx1ZSApIHtcblx0XHRcdGNvbnN0IGJ5dGVzOiBhbnkgPSBDcnlwdG9KUy5BRVMuZGVjcnlwdCggaGFzaFZhbHVlLCBoYXNoS2V5ICk7XG5cdFx0XHRsZXQgcmF3VmFsdWU6IGFueTtcblxuXHRcdFx0dHJ5IHtcblx0XHRcdFx0cmF3VmFsdWUgPSBieXRlcy50b1N0cmluZyggQ3J5cHRvSlMuZW5jLlV0ZjggKTtcblx0XHRcdFx0cmF3VmFsdWUgPSBKU09OLnBhcnNlKCByYXdWYWx1ZSApO1xuXHRcdFx0fSBjYXRjaCB7fVxuXG5cdFx0XHRyZXR1cm4gcmF3VmFsdWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHQvKipcblx0KiBSZW1vdmUgc3RvcmUgZGF0YVxuXHQqIEBwYXJhbSB7c3RyaW5nfSBrZXlcblx0KiBAcmV0dXJuIHt2b2lkfVxuXHQqL1xuXHRwdWJsaWMgcmVtb3ZlKCBrZXk6IHN0cmluZyApIHtcblx0XHR0aGlzLmNvb2tpZXMucmVtb3ZlKCBrZXksIHRoaXMub3B0aW9ucyApO1xuXHR9XG5cblx0LyoqXG5cdCogUmVtb3ZlIGFsbCBzdG9yZSBkYXRhXG5cdCogQHBhcmFtIHtzdHJpbmd9IGtleVxuXHQqIEByZXR1cm4ge3ZvaWR9XG5cdCovXG5cdHB1YmxpYyByZW1vdmVBbGwoKSB7XG5cdFx0dGhpcy5jb29raWVzLnJlbW92ZUFsbCgpO1xuXHR9XG5cblx0LyoqXG5cdCogU2V0IGxvY2FsIHN0b3JlIGRhdGFcblx0KiBAcGFyYW0ge3N0cmluZ30ga2V5XG5cdCogQHBhcmFtIHthbnl9IGRhdGFcblx0KiBAcmV0dXJuIHt2b2lkfVxuXHQqL1xuXHRwdWJsaWMgc2V0TG9jYWwoIGtleTogc3RyaW5nLCBkYXRhOiBhbnkgKSB7XG5cdFx0Y29uc3QgaGFzaEtleTogc3RyaW5nID0gdGhpcy5nZXRIYXNoS2V5KCk7XG5cblx0XHRpZiAoIGhhc2hLZXkgKSB7XG5cdFx0XHRjb25zdCBtZXNzYWdlOiBzdHJpbmcgPSBKU09OLnN0cmluZ2lmeSggZGF0YSApO1xuXHRcdFx0Y29uc3QgaGFzaFZhbHVlOiBhbnkgPSBDcnlwdG9KUy5BRVMuZW5jcnlwdCggbWVzc2FnZSwgaGFzaEtleSApO1xuXG5cdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgga2V5LCBoYXNoVmFsdWUudG9TdHJpbmcoKSApO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQqIEdldCBsb2NhbCBzdG9yZSBkYXRhXG5cdCogQHBhcmFtIHtzdHJpbmd9IGtleVxuXHQqIEByZXR1cm4ge2FueX1cblx0Ki9cblx0cHVibGljIGdldExvY2FsKCBrZXk6IHN0cmluZyApOiBhbnkge1xuXHRcdGNvbnN0IGhhc2hLZXk6IHN0cmluZyA9IHRoaXMuZ2V0SGFzaEtleSgpO1xuXHRcdGNvbnN0IGhhc2hWYWx1ZTogc3RyaW5nID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oIGtleSApO1xuXG5cdFx0aWYgKCBoYXNoS2V5ICYmIGhhc2hWYWx1ZSApIHtcblx0XHRcdGNvbnN0IGJ5dGVzOiBhbnkgPSBDcnlwdG9KUy5BRVMuZGVjcnlwdCggaGFzaFZhbHVlLCBoYXNoS2V5ICk7XG5cdFx0XHRsZXQgcmF3VmFsdWU6IGFueTtcblxuXHRcdFx0dHJ5IHtcblx0XHRcdFx0cmF3VmFsdWUgPSBieXRlcy50b1N0cmluZyggQ3J5cHRvSlMuZW5jLlV0ZjggKTtcblx0XHRcdFx0cmF3VmFsdWUgPSBKU09OLnBhcnNlKCByYXdWYWx1ZSApO1xuXHRcdFx0fSBjYXRjaCB7fVxuXG5cdFx0XHRyZXR1cm4gcmF3VmFsdWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHQvKipcblx0KiBSZW1vdmUgbG9jYWwgc3RvcmUgZGF0YVxuXHQqIEBwYXJhbSB7c3RyaW5nfSBrZXlcblx0KiBAcmV0dXJuIHt2b2lkfVxuXHQqL1xuXHRwdWJsaWMgcmVtb3ZlTG9jYWwoIGtleTogc3RyaW5nICkge1xuXHRcdGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCBrZXkgKTtcblx0fVxuXG5cdC8qKlxuXHQqIFNldCBzdG9yZSBoYXNoIGtleVxuXHQqIEBwYXJhbSB7YW55fSB2YWx1ZSAtIEhhc2gga2V5XG5cdCogQHBhcmFtIHtudW1iZXJ9IGV4cGlyZXMgLSBOdW1iZXIgb2YgZXhwaXJlIGRheXNcblx0KiBAcmV0dXJuIHt2b2lkfVxuXHQqL1xuXHRwdWJsaWMgc2V0SGFzaEtleSggdmFsdWU6IGFueSwgZXhwaXJlczogbnVtYmVyID0gMSApIHtcblx0XHR0aGlzLmNvb2tpZXMucHV0KCAnX3InLCB2YWx1ZSwgdGhpcy5fbWVyZ2VPcHRpb25zKCBleHBpcmVzICkgKTtcblx0fVxuXG5cdC8qKlxuXHQqIEdldCBzdG9yZSBoYXNoIGtleVxuXHQqIEByZXR1cm4ge3N0cmluZ30gSGFzaCBrZXlcblx0Ki9cblx0cHVibGljIGdldEhhc2hLZXkoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5kZWZhdWx0U3RvcmFnZUhhc2hLZXk7XG5cdH1cblxuXHQvKipcblx0KiBSZW1vdmUgc3RvcmUgaGFzaCBrZXlcblx0KiBAcmV0dXJuIHtzdHJpbmd9IEhhc2gga2V5XG5cdCovXG5cdHB1YmxpYyByZW1vdmVIYXNoS2V5KCkge1xuXHRcdHRoaXMuY29va2llcy5yZW1vdmUoICdfcicsIHRoaXMub3B0aW9ucyApO1xuXHR9XG5cblx0LyoqXG5cdCogTWVyZ2Ugb3B0aW9uc1xuXHQqIEBwcml2YXRlXG5cdCogQHBhcmFtIHtudW1iZXJ9IGV4cGlyZXMgLSBOdW1iZXIgb2YgZXhwaXJlIGRheXNcblx0KiBAcmV0dXJuIHthbnl9IG9wdGlvbnMgLSBNZXJnZWQgb3B0aW9uc1xuXHQqL1xuXHRwcml2YXRlIF9tZXJnZU9wdGlvbnMoIGV4cGlyZXM6IG51bWJlciApOiBhbnkge1xuXHRcdGNvbnN0IG9wdGlvbnM6IGFueSA9IHt9O1xuXG5cdFx0aWYgKCBleHBpcmVzICkge1xuXHRcdFx0b3B0aW9ucy5leHBpcmVzID0gbW9tZW50KCArbW9tZW50KCkgKyAyNCAqIDYwICogNjAgKiAxMDAwICogZXhwaXJlcyApLmZvcm1hdCgpO1xuXHRcdH1cblxuXHRcdF8uYXNzaWduKCBvcHRpb25zLCB0aGlzLm9wdGlvbnMgKTtcblxuXHRcdHJldHVybiBvcHRpb25zO1xuXHR9XG5cbn1cbiJdfQ==