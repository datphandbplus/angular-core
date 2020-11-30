import * as tslib_1 from "tslib";
import { Injectable, Inject, Optional } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import * as CryptoJS from 'crypto-js';
import _ from 'underscore';
import moment from 'moment-timezone';
import { DEFAULT_EXPIRE_DAYS, DEFAULT_STORAGE_HASH_KEY } from '../injection-token';
let StoreService = class StoreService {
    /**
    * @constructor
    * @param {number} defaultExpireDays
    * @param {string} defaultStorageHashKey
    * @param {CookieService} cookies
    */
    constructor(defaultExpireDays, defaultStorageHashKey, cookies) {
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
    set(key, data, expires = this.defaultExpireDays) {
        const hashKey = this.getHashKey();
        if (!hashKey)
            return;
        const message = JSON.stringify(data);
        const hashValue = CryptoJS.AES.encrypt(message, hashKey);
        this.cookies.put(key, hashValue.toString(), this._mergeOptions(expires));
    }
    /**
    * Get store data
    * @param {string} key
    * @return {any}
    */
    get(key) {
        const hashKey = this.getHashKey();
        const hashValue = this.cookies.get(key);
        if (hashKey && hashValue) {
            const bytes = CryptoJS.AES.decrypt(hashValue, hashKey);
            let rawValue;
            try {
                rawValue = bytes.toString(CryptoJS.enc.Utf8);
                rawValue = JSON.parse(rawValue);
            }
            catch (_a) { }
            return rawValue;
        }
        return null;
    }
    /**
    * Remove store data
    * @param {string} key
    * @return {void}
    */
    remove(key) {
        this.cookies.remove(key, this.options);
    }
    /**
    * Remove all store data
    * @param {string} key
    * @return {void}
    */
    removeAll() {
        this.cookies.removeAll();
    }
    /**
    * Set local store data
    * @param {string} key
    * @param {any} data
    * @return {void}
    */
    setLocal(key, data) {
        const hashKey = this.getHashKey();
        if (hashKey) {
            const message = JSON.stringify(data);
            const hashValue = CryptoJS.AES.encrypt(message, hashKey);
            localStorage.setItem(key, hashValue.toString());
        }
    }
    /**
    * Get local store data
    * @param {string} key
    * @return {any}
    */
    getLocal(key) {
        const hashKey = this.getHashKey();
        const hashValue = localStorage.getItem(key);
        if (hashKey && hashValue) {
            const bytes = CryptoJS.AES.decrypt(hashValue, hashKey);
            let rawValue;
            try {
                rawValue = bytes.toString(CryptoJS.enc.Utf8);
                rawValue = JSON.parse(rawValue);
            }
            catch (_a) { }
            return rawValue;
        }
        return null;
    }
    /**
    * Remove local store data
    * @param {string} key
    * @return {void}
    */
    removeLocal(key) {
        localStorage.removeItem(key);
    }
    /**
    * Set store hash key
    * @param {any} value - Hash key
    * @param {number} expires - Number of expire days
    * @return {void}
    */
    setHashKey(value, expires = 1) {
        this.cookies.put('_r', value, this._mergeOptions(expires));
    }
    /**
    * Get store hash key
    * @return {string} Hash key
    */
    getHashKey() {
        return this.defaultStorageHashKey;
    }
    /**
    * Remove store hash key
    * @return {string} Hash key
    */
    removeHashKey() {
        this.cookies.remove('_r', this.options);
    }
    /**
    * Merge options
    * @private
    * @param {number} expires - Number of expire days
    * @return {any} options - Merged options
    */
    _mergeOptions(expires) {
        const options = {};
        if (expires) {
            options.expires = moment(+moment() + 24 * 60 * 60 * 1000 * expires).format();
        }
        _.assign(options, this.options);
        return options;
    }
};
StoreService.ctorParameters = () => [
    { type: Number, decorators: [{ type: Optional }, { type: Inject, args: [DEFAULT_EXPIRE_DAYS,] }] },
    { type: String, decorators: [{ type: Optional }, { type: Inject, args: [DEFAULT_STORAGE_HASH_KEY,] }] },
    { type: CookieService }
];
StoreService = tslib_1.__decorate([
    Injectable(),
    tslib_1.__param(0, Optional()), tslib_1.__param(0, Inject(DEFAULT_EXPIRE_DAYS)),
    tslib_1.__param(1, Optional()), tslib_1.__param(1, Inject(DEFAULT_STORAGE_HASH_KEY)),
    tslib_1.__metadata("design:paramtypes", [Number, String, CookieService])
], StoreService);
export { StoreService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9zdG9yZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUMzQyxPQUFPLEtBQUssUUFBUSxNQUFNLFdBQVcsQ0FBQztBQUN0QyxPQUFPLENBQUMsTUFBTSxZQUFZLENBQUM7QUFDM0IsT0FBTyxNQUFNLE1BQU0saUJBQWlCLENBQUM7QUFFckMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLHdCQUF3QixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHbkYsSUFBYSxZQUFZLEdBQXpCLE1BQWEsWUFBWTtJQUl4Qjs7Ozs7TUFLRTtJQUNGLFlBQ3FELGlCQUF5QixFQUNwQixxQkFBNkIsRUFDOUUsT0FBc0I7UUFGc0Isc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFRO1FBQ3BCLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBUTtRQUM5RSxZQUFPLEdBQVAsT0FBTyxDQUFlO1FBWHZCLFlBQU8sR0FBUSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQztJQVlsQyxDQUFDO0lBRUo7Ozs7OztNQU1FO0lBQ0ssR0FBRyxDQUFFLEdBQVcsRUFBRSxJQUFTLEVBQUUsVUFBa0IsSUFBSSxDQUFDLGlCQUFpQjtRQUMzRSxNQUFNLE9BQU8sR0FBVyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFFMUMsSUFBSyxDQUFDLE9BQU87WUFBRyxPQUFPO1FBRXZCLE1BQU0sT0FBTyxHQUFXLElBQUksQ0FBQyxTQUFTLENBQUUsSUFBSSxDQUFFLENBQUM7UUFDL0MsTUFBTSxTQUFTLEdBQVEsUUFBUSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUUsT0FBTyxFQUFF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SUFBSSxDQUFDLGFBQWEsQ0FBRSxPQUFPLENBQUUsQ0FBRSxDQUFDO0lBQ2hFLENBQUM7SUFFRDs7O01BR0U7SUFDSyxVQUFVO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLHFCQUFxQixDQUFDO0lBQ25DLENBQUM7SUFFRDs7O01BR0U7SUFDSyxhQUFhO1FBQ25CLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFFLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFFLENBQUM7SUFDM0MsQ0FBQztJQUVEOzs7OztNQUtFO0lBQ00sYUFBYSxDQUFFLE9BQWU7UUFDckMsTUFBTSxPQUFPLEdBQVEsRUFBRSxDQUFDO1FBRXhCLElBQUssT0FBTyxFQUFHO1lBQ2QsT0FBTyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUUsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJLEdBQUcsT0FBTyxDQUFFLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDL0U7UUFFRCxDQUFDLENBQUMsTUFBTSxDQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFFLENBQUM7UUFFbEMsT0FBTyxPQUFPLENBQUM7SUFDaEIsQ0FBQztDQUVELENBQUE7O3lDQS9KRSxRQUFRLFlBQUksTUFBTSxTQUFFLG1CQUFtQjt5Q0FDdkMsUUFBUSxZQUFJLE1BQU0sU0FBRSx3QkFBd0I7WUFDNUIsYUFBYTs7QUFibkIsWUFBWTtJQUR4QixVQUFVLEVBQUU7SUFZVixtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLE1BQU0sQ0FBRSxtQkFBbUIsQ0FBRSxDQUFBO0lBQ3pDLG1CQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsbUJBQUEsTUFBTSxDQUFFLHdCQUF3QixDQUFFLENBQUE7NkRBQzlCLGFBQWE7R0FibkIsWUFBWSxDQTBLeEI7U0ExS1ksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvb2tpZVNlcnZpY2UgfSBmcm9tICduZ3gtY29va2llJztcbmltcG9ydCAqIGFzIENyeXB0b0pTIGZyb20gJ2NyeXB0by1qcyc7XG5pbXBvcnQgXyBmcm9tICd1bmRlcnNjb3JlJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50LXRpbWV6b25lJztcblxuaW1wb3J0IHsgREVGQVVMVF9FWFBJUkVfREFZUywgREVGQVVMVF9TVE9SQUdFX0hBU0hfS0VZIH0gZnJvbSAnLi4vaW5qZWN0aW9uLXRva2VuJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0b3JlU2VydmljZSB7XG5cblx0cHJpdmF0ZSBvcHRpb25zOiBhbnkgPSB7IHBhdGg6ICcvJyB9O1xuXG5cdC8qKlxuXHQqIEBjb25zdHJ1Y3RvclxuXHQqIEBwYXJhbSB7bnVtYmVyfSBkZWZhdWx0RXhwaXJlRGF5c1xuXHQqIEBwYXJhbSB7c3RyaW5nfSBkZWZhdWx0U3RvcmFnZUhhc2hLZXlcblx0KiBAcGFyYW0ge0Nvb2tpZVNlcnZpY2V9IGNvb2tpZXNcblx0Ki9cblx0Y29uc3RydWN0b3IoXG5cdFx0QE9wdGlvbmFsKCkgQEluamVjdCggREVGQVVMVF9FWFBJUkVfREFZUyApIHJlYWRvbmx5IGRlZmF1bHRFeHBpcmVEYXlzOiBudW1iZXIsXG5cdFx0QE9wdGlvbmFsKCkgQEluamVjdCggREVGQVVMVF9TVE9SQUdFX0hBU0hfS0VZICkgcmVhZG9ubHkgZGVmYXVsdFN0b3JhZ2VIYXNoS2V5OiBzdHJpbmcsXG5cdFx0cHJpdmF0ZSBjb29raWVzOiBDb29raWVTZXJ2aWNlXG5cdCkge31cblxuXHQvKipcblx0KiBTZXQgc3RvcmUgZGF0YVxuXHQqIEBwYXJhbSB7c3RyaW5nfSBrZXlcblx0KiBAcGFyYW0ge2FueX0gZGF0YVxuXHQqIEBwYXJhbSB7bnVtYmVyfSBleHBpcmVzIC0gTnVtYmVyIG9mIGV4cGlyZSBkYXlzXG5cdCogQHJldHVybiB7dm9pZH1cblx0Ki9cblx0cHVibGljIHNldCgga2V5OiBzdHJpbmcsIGRhdGE6IGFueSwgZXhwaXJlczogbnVtYmVyID0gdGhpcy5kZWZhdWx0RXhwaXJlRGF5cyApIHtcblx0XHRjb25zdCBoYXNoS2V5OiBzdHJpbmcgPSB0aGlzLmdldEhhc2hLZXkoKTtcblxuXHRcdGlmICggIWhhc2hLZXkgKSByZXR1cm47XG5cblx0XHRjb25zdCBtZXNzYWdlOiBzdHJpbmcgPSBKU09OLnN0cmluZ2lmeSggZGF0YSApO1xuXHRcdGNvbnN0IGhhc2hWYWx1ZTogYW55ID0gQ3J5cHRvSlMuQUVTLmVuY3J5cHQoIG1lc3NhZ2UsIGhhc2hLZXkgKTtcblxuXHRcdHRoaXMuY29va2llcy5wdXQoIGtleSwgaGFzaFZhbHVlLnRvU3RyaW5nKCksIHRoaXMuX21lcmdlT3B0aW9ucyggZXhwaXJlcyApICk7XG5cdH1cblxuXHQvKipcblx0KiBHZXQgc3RvcmUgZGF0YVxuXHQqIEBwYXJhbSB7c3RyaW5nfSBrZXlcblx0KiBAcmV0dXJuIHthbnl9XG5cdCovXG5cdHB1YmxpYyBnZXQoIGtleTogc3RyaW5nICk6IGFueSB7XG5cdFx0Y29uc3QgaGFzaEtleTogc3RyaW5nID0gdGhpcy5nZXRIYXNoS2V5KCk7XG5cdFx0Y29uc3QgaGFzaFZhbHVlOiBzdHJpbmcgPSB0aGlzLmNvb2tpZXMuZ2V0KCBrZXkgKTtcblxuXHRcdGlmICggaGFzaEtleSAmJiBoYXNoVmFsdWUgKSB7XG5cdFx0XHRjb25zdCBieXRlczogYW55ID0gQ3J5cHRvSlMuQUVTLmRlY3J5cHQoIGhhc2hWYWx1ZSwgaGFzaEtleSApO1xuXHRcdFx0bGV0IHJhd1ZhbHVlOiBhbnk7XG5cblx0XHRcdHRyeSB7XG5cdFx0XHRcdHJhd1ZhbHVlID0gYnl0ZXMudG9TdHJpbmcoIENyeXB0b0pTLmVuYy5VdGY4ICk7XG5cdFx0XHRcdHJhd1ZhbHVlID0gSlNPTi5wYXJzZSggcmF3VmFsdWUgKTtcblx0XHRcdH0gY2F0Y2gge31cblxuXHRcdFx0cmV0dXJuIHJhd1ZhbHVlO1xuXHRcdH1cblxuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0LyoqXG5cdCogUmVtb3ZlIHN0b3JlIGRhdGFcblx0KiBAcGFyYW0ge3N0cmluZ30ga2V5XG5cdCogQHJldHVybiB7dm9pZH1cblx0Ki9cblx0cHVibGljIHJlbW92ZSgga2V5OiBzdHJpbmcgKSB7XG5cdFx0dGhpcy5jb29raWVzLnJlbW92ZSgga2V5LCB0aGlzLm9wdGlvbnMgKTtcblx0fVxuXG5cdC8qKlxuXHQqIFJlbW92ZSBhbGwgc3RvcmUgZGF0YVxuXHQqIEBwYXJhbSB7c3RyaW5nfSBrZXlcblx0KiBAcmV0dXJuIHt2b2lkfVxuXHQqL1xuXHRwdWJsaWMgcmVtb3ZlQWxsKCkge1xuXHRcdHRoaXMuY29va2llcy5yZW1vdmVBbGwoKTtcblx0fVxuXG5cdC8qKlxuXHQqIFNldCBsb2NhbCBzdG9yZSBkYXRhXG5cdCogQHBhcmFtIHtzdHJpbmd9IGtleVxuXHQqIEBwYXJhbSB7YW55fSBkYXRhXG5cdCogQHJldHVybiB7dm9pZH1cblx0Ki9cblx0cHVibGljIHNldExvY2FsKCBrZXk6IHN0cmluZywgZGF0YTogYW55ICkge1xuXHRcdGNvbnN0IGhhc2hLZXk6IHN0cmluZyA9IHRoaXMuZ2V0SGFzaEtleSgpO1xuXG5cdFx0aWYgKCBoYXNoS2V5ICkge1xuXHRcdFx0Y29uc3QgbWVzc2FnZTogc3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoIGRhdGEgKTtcblx0XHRcdGNvbnN0IGhhc2hWYWx1ZTogYW55ID0gQ3J5cHRvSlMuQUVTLmVuY3J5cHQoIG1lc3NhZ2UsIGhhc2hLZXkgKTtcblxuXHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oIGtleSwgaGFzaFZhbHVlLnRvU3RyaW5nKCkgKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0KiBHZXQgbG9jYWwgc3RvcmUgZGF0YVxuXHQqIEBwYXJhbSB7c3RyaW5nfSBrZXlcblx0KiBAcmV0dXJuIHthbnl9XG5cdCovXG5cdHB1YmxpYyBnZXRMb2NhbCgga2V5OiBzdHJpbmcgKTogYW55IHtcblx0XHRjb25zdCBoYXNoS2V5OiBzdHJpbmcgPSB0aGlzLmdldEhhc2hLZXkoKTtcblx0XHRjb25zdCBoYXNoVmFsdWU6IHN0cmluZyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCBrZXkgKTtcblxuXHRcdGlmICggaGFzaEtleSAmJiBoYXNoVmFsdWUgKSB7XG5cdFx0XHRjb25zdCBieXRlczogYW55ID0gQ3J5cHRvSlMuQUVTLmRlY3J5cHQoIGhhc2hWYWx1ZSwgaGFzaEtleSApO1xuXHRcdFx0bGV0IHJhd1ZhbHVlOiBhbnk7XG5cblx0XHRcdHRyeSB7XG5cdFx0XHRcdHJhd1ZhbHVlID0gYnl0ZXMudG9TdHJpbmcoIENyeXB0b0pTLmVuYy5VdGY4ICk7XG5cdFx0XHRcdHJhd1ZhbHVlID0gSlNPTi5wYXJzZSggcmF3VmFsdWUgKTtcblx0XHRcdH0gY2F0Y2gge31cblxuXHRcdFx0cmV0dXJuIHJhd1ZhbHVlO1xuXHRcdH1cblxuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0LyoqXG5cdCogUmVtb3ZlIGxvY2FsIHN0b3JlIGRhdGFcblx0KiBAcGFyYW0ge3N0cmluZ30ga2V5XG5cdCogQHJldHVybiB7dm9pZH1cblx0Ki9cblx0cHVibGljIHJlbW92ZUxvY2FsKCBrZXk6IHN0cmluZyApIHtcblx0XHRsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgga2V5ICk7XG5cdH1cblxuXHQvKipcblx0KiBTZXQgc3RvcmUgaGFzaCBrZXlcblx0KiBAcGFyYW0ge2FueX0gdmFsdWUgLSBIYXNoIGtleVxuXHQqIEBwYXJhbSB7bnVtYmVyfSBleHBpcmVzIC0gTnVtYmVyIG9mIGV4cGlyZSBkYXlzXG5cdCogQHJldHVybiB7dm9pZH1cblx0Ki9cblx0cHVibGljIHNldEhhc2hLZXkoIHZhbHVlOiBhbnksIGV4cGlyZXM6IG51bWJlciA9IDEgKSB7XG5cdFx0dGhpcy5jb29raWVzLnB1dCggJ19yJywgdmFsdWUsIHRoaXMuX21lcmdlT3B0aW9ucyggZXhwaXJlcyApICk7XG5cdH1cblxuXHQvKipcblx0KiBHZXQgc3RvcmUgaGFzaCBrZXlcblx0KiBAcmV0dXJuIHtzdHJpbmd9IEhhc2gga2V5XG5cdCovXG5cdHB1YmxpYyBnZXRIYXNoS2V5KCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMuZGVmYXVsdFN0b3JhZ2VIYXNoS2V5O1xuXHR9XG5cblx0LyoqXG5cdCogUmVtb3ZlIHN0b3JlIGhhc2gga2V5XG5cdCogQHJldHVybiB7c3RyaW5nfSBIYXNoIGtleVxuXHQqL1xuXHRwdWJsaWMgcmVtb3ZlSGFzaEtleSgpIHtcblx0XHR0aGlzLmNvb2tpZXMucmVtb3ZlKCAnX3InLCB0aGlzLm9wdGlvbnMgKTtcblx0fVxuXG5cdC8qKlxuXHQqIE1lcmdlIG9wdGlvbnNcblx0KiBAcHJpdmF0ZVxuXHQqIEBwYXJhbSB7bnVtYmVyfSBleHBpcmVzIC0gTnVtYmVyIG9mIGV4cGlyZSBkYXlzXG5cdCogQHJldHVybiB7YW55fSBvcHRpb25zIC0gTWVyZ2VkIG9wdGlvbnNcblx0Ki9cblx0cHJpdmF0ZSBfbWVyZ2VPcHRpb25zKCBleHBpcmVzOiBudW1iZXIgKTogYW55IHtcblx0XHRjb25zdCBvcHRpb25zOiBhbnkgPSB7fTtcblxuXHRcdGlmICggZXhwaXJlcyApIHtcblx0XHRcdG9wdGlvbnMuZXhwaXJlcyA9IG1vbWVudCggK21vbWVudCgpICsgMjQgKiA2MCAqIDYwICogMTAwMCAqIGV4cGlyZXMgKS5mb3JtYXQoKTtcblx0XHR9XG5cblx0XHRfLmFzc2lnbiggb3B0aW9ucywgdGhpcy5vcHRpb25zICk7XG5cblx0XHRyZXR1cm4gb3B0aW9ucztcblx0fVxuXG59XG4iXX0=