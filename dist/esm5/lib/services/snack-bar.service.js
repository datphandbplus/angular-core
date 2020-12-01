import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';
var SnackBarService = /** @class */ (function () {
    /**
    * @constructor
    * @param {MatSnackBar} snackBar
    * @param {TranslateService} translateService
    */
    function SnackBarService(snackBar, translateService) {
        this.snackBar = snackBar;
        this.translateService = translateService;
        this.btnDismiss = this.translateService.instant('GENERAL.LABELS.OK');
        this.defaultConfig = {
            panelClass: [],
            horizontalPosition: 'right',
            duration: 3000,
        };
    }
    /**
    * Set config
    * @param {any} config
    * @return {void}
    */
    SnackBarService.prototype.setConfig = function (config) {
        this.defaultConfig = tslib_1.__assign({}, JSON.parse(JSON.stringify(this.defaultConfig)), config);
    };
    /**
    * Show Success Snack Bar
    * @param {string} message
    * @param {any} params
    * @param {any} config
    * @return {void}
    */
    SnackBarService.prototype.success = function (message, params, config) {
        var _this = this;
        if (params === void 0) { params = null; }
        if (config === void 0) { config = null; }
        config = tslib_1.__assign({}, JSON.parse(JSON.stringify(this.defaultConfig)), config);
        config.panelClass.push('mat-success');
        this.translateService.get(message, params)
            .subscribe(function (msg) { return _this.snackBar.open(msg, _this.btnDismiss, config); });
    };
    /**
    * Show Warning Snack Bar
    * @param {string} message
    * @param {any} params
    * @param {any} config
    * @return {void}
    */
    SnackBarService.prototype.warning = function (message, params, config) {
        var _this = this;
        if (params === void 0) { params = null; }
        if (config === void 0) { config = null; }
        config = tslib_1.__assign({}, JSON.parse(JSON.stringify(this.defaultConfig)), config);
        config.panelClass.push('mat-warning');
        this.translateService.get(message, params)
            .subscribe(function (msg) { return _this.snackBar.open(msg, _this.btnDismiss, config); });
    };
    /**
    * Show Primary Snack Bar
    * @param {string} message
    * @param {any} params
    * @param {any} config
    * @return {void}
    */
    SnackBarService.prototype.primary = function (message, params, config) {
        var _this = this;
        if (params === void 0) { params = null; }
        if (config === void 0) { config = null; }
        config = tslib_1.__assign({}, JSON.parse(JSON.stringify(this.defaultConfig)), config);
        config.panelClass.push('mat-primary');
        this.translateService.get(message, params)
            .subscribe(function (msg) { return _this.snackBar.open(msg, _this.btnDismiss, config); });
    };
    /**
    * Show Warn Snack Bar
    * @param {string} message
    * @param {any} params
    * @param {any} config
    * @return {void}
    */
    SnackBarService.prototype.warn = function (message, params, config) {
        var _this = this;
        if (params === void 0) { params = null; }
        if (config === void 0) { config = null; }
        config = tslib_1.__assign({}, JSON.parse(JSON.stringify(this.defaultConfig)), config);
        config.panelClass.push('mat-warn');
        this.translateService.get(message, params)
            .subscribe(function (msg) { return _this.snackBar.open(msg, _this.btnDismiss, config); });
    };
    /**
    * Show Accent Snack Bar
    * @param {string} message
    * @param {any} params
    * @param {any} config
    * @return {void}
    */
    SnackBarService.prototype.accent = function (message, params, config) {
        var _this = this;
        if (params === void 0) { params = null; }
        if (config === void 0) { config = null; }
        config = tslib_1.__assign({}, JSON.parse(JSON.stringify(this.defaultConfig)), config);
        config.panelClass.push('mat-accent');
        this.translateService.get(message, params)
            .subscribe(function (msg) { return _this.snackBar.open(msg, _this.btnDismiss, config); });
    };
    /**
    * Show Default Snack Bar
    * @param {string} message
    * @param {any} params
    * @param {any} config
    * @return {void}
    */
    SnackBarService.prototype.open = function (message, params, config) {
        var _this = this;
        if (params === void 0) { params = null; }
        if (config === void 0) { config = null; }
        config = tslib_1.__assign({}, JSON.parse(JSON.stringify(this.defaultConfig)), config);
        this.translateService.get(message, params)
            .subscribe(function (msg) { return _this.snackBar.open(msg, _this.btnDismiss, config); });
    };
    SnackBarService.ctorParameters = function () { return [
        { type: MatSnackBar },
        { type: TranslateService }
    ]; };
    SnackBarService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [MatSnackBar,
            TranslateService])
    ], SnackBarService);
    return SnackBarService;
}());
export { SnackBarService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic25hY2stYmFyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNvcmUvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvc25hY2stYmFyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBSXZEO0lBU0M7Ozs7TUFJRTtJQUNGLHlCQUNTLFFBQXVCLEVBQ3ZCLGdCQUFrQztRQURsQyxhQUFRLEdBQVIsUUFBUSxDQUFlO1FBQ3ZCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFkcEMsZUFBVSxHQUFXLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUUsbUJBQW1CLENBQUUsQ0FBQztRQUMxRSxrQkFBYSxHQUFRO1lBQzNCLFVBQVUsRUFBSyxFQUFFO1lBQ2pCLGtCQUFrQixFQUFHLE9BQU87WUFDNUIsUUFBUSxFQUFLLElBQUk7U0FDakIsQ0FBQztJQVVDLENBQUM7SUFFSjs7OztNQUlFO0lBQ0ssbUNBQVMsR0FBaEIsVUFBa0IsTUFBVztRQUM1QixJQUFJLENBQUMsYUFBYSx3QkFBUSxJQUFJLENBQUMsS0FBSyxDQUFFLElBQUksQ0FBQyxTQUFTLENBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBRSxDQUFFLEVBQUssTUFBTSxDQUFFLENBQUM7SUFDM0YsQ0FBQztJQUVEOzs7Ozs7TUFNRTtJQUNLLGlDQUFPLEdBQWQsVUFBZ0IsT0FBZSxFQUFFLE1BQWtCLEVBQUUsTUFBa0I7UUFBdkUsaUJBS0M7UUFMZ0MsdUJBQUEsRUFBQSxhQUFrQjtRQUFFLHVCQUFBLEVBQUEsYUFBa0I7UUFDdEUsTUFBTSx3QkFBUSxJQUFJLENBQUMsS0FBSyxDQUFFLElBQUksQ0FBQyxTQUFTLENBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBRSxDQUFFLEVBQUssTUFBTSxDQUFFLENBQUM7UUFDOUUsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUUsYUFBYSxDQUFFLENBQUM7UUFDeEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBRSxPQUFPLEVBQUUsTUFBTSxDQUFFO2FBQzNDLFNBQVMsQ0FBRSxVQUFFLEdBQVcsSUFBTSxPQUFBLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFFLEdBQUcsRUFBRSxLQUFJLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBRSxFQUFsRCxDQUFrRCxDQUFFLENBQUM7SUFDckYsQ0FBQztJQUVEOzs7Ozs7TUFNRTtJQUNLLGlDQUFPLEdBQWQsVUFBZ0IsT0FBZSxFQUFFLE1BQWtCLEVBQUUsTUFBa0I7UUFBdkUsaUJBS0M7UUFMZ0MsdUJBQUEsRUFBQSxhQUFrQjtRQUFFLHVCQUFBLEVBQUEsYUFBa0I7UUFDdEUsTUFBTSx3QkFBUSxJQUFJLENBQUMsS0FBSyxDQUFFLElBQUksQ0FBQyxTQUFTLENBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBRSxDQUFFLEVBQUssTUFBTSxDQUFFLENBQUM7UUFDOUUsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUUsYUFBYSxDQUFFLENBQUM7UUFDeEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBRSxPQUFPLEVBQUUsTUFBTSxDQUFFO2FBQzNDLFNBQVMsQ0FBRSxVQUFFLEdBQVcsSUFBTSxPQUFBLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFFLEdBQUcsRUFBRSxLQUFJLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBRSxFQUFsRCxDQUFrRCxDQUFFLENBQUM7SUFDckYsQ0FBQztJQUVEOzs7Ozs7TUFNRTtJQUNLLGlDQUFPLEdBQWQsVUFBZ0IsT0FBZSxFQUFFLE1BQWtCLEVBQUUsTUFBa0I7UUFBdkUsaUJBS0M7UUFMZ0MsdUJBQUEsRUFBQSxhQUFrQjtRQUFFLHVCQUFBLEVBQUEsYUFBa0I7UUFDdEUsTUFBTSx3QkFBUSxJQUFJLENBQUMsS0FBSyxDQUFFLElBQUksQ0FBQyxTQUFTLENBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBRSxDQUFFLEVBQUssTUFBTSxDQUFFLENBQUM7UUFDOUUsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUUsYUFBYSxDQUFFLENBQUM7UUFDeEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBRSxPQUFPLEVBQUUsTUFBTSxDQUFFO2FBQzNDLFNBQVMsQ0FBRSxVQUFFLEdBQVcsSUFBTSxPQUFBLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFFLEdBQUcsRUFBRSxLQUFJLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBRSxFQUFsRCxDQUFrRCxDQUFFLENBQUM7SUFDckYsQ0FBQztJQUVEOzs7Ozs7TUFNRTtJQUNLLDhCQUFJLEdBQVgsVUFBYSxPQUFlLEVBQUUsTUFBa0IsRUFBRSxNQUFrQjtRQUFwRSxpQkFLQztRQUw2Qix1QkFBQSxFQUFBLGFBQWtCO1FBQUUsdUJBQUEsRUFBQSxhQUFrQjtRQUNuRSxNQUFNLHdCQUFRLElBQUksQ0FBQyxLQUFLLENBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBRSxJQUFJLENBQUMsYUFBYSxDQUFFLENBQUUsRUFBSyxNQUFNLENBQUUsQ0FBQztRQUM5RSxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBRSxVQUFVLENBQUUsQ0FBQztRQUNyQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFFLE9BQU8sRUFBRSxNQUFNLENBQUU7YUFDM0MsU0FBUyxDQUFFLFVBQUUsR0FBVyxJQUFNLE9BQUEsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUUsR0FBRyxFQUFFLEtBQUksQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFFLEVBQWxELENBQWtELENBQUUsQ0FBQztJQUNyRixDQUFDO0lBRUQ7Ozs7OztNQU1FO0lBQ0ssZ0NBQU0sR0FBYixVQUFlLE9BQWUsRUFBRSxNQUFrQixFQUFFLE1BQWtCO1FBQXRFLGlCQUtDO1FBTCtCLHVCQUFBLEVBQUEsYUFBa0I7UUFBRSx1QkFBQSxFQUFBLGFBQWtCO1FBQ3JFLE1BQU0sd0JBQVEsSUFBSSxDQUFDLEtBQUssQ0FBRSxJQUFJLENBQUMsU0FBUyxDQUFFLElBQUksQ0FBQyxhQUFhLENBQUUsQ0FBRSxFQUFLLE1BQU0sQ0FBRSxDQUFDO1FBQzlFLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFFLFlBQVksQ0FBRSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBRTthQUMzQyxTQUFTLENBQUUsVUFBRSxHQUFXLElBQU0sT0FBQSxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBRSxHQUFHLEVBQUUsS0FBSSxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUUsRUFBbEQsQ0FBa0QsQ0FBRSxDQUFDO0lBQ3JGLENBQUM7SUFFRDs7Ozs7O01BTUU7SUFDSyw4QkFBSSxHQUFYLFVBQWEsT0FBZSxFQUFFLE1BQWtCLEVBQUUsTUFBa0I7UUFBcEUsaUJBSUM7UUFKNkIsdUJBQUEsRUFBQSxhQUFrQjtRQUFFLHVCQUFBLEVBQUEsYUFBa0I7UUFDbkUsTUFBTSx3QkFBUSxJQUFJLENBQUMsS0FBSyxDQUFFLElBQUksQ0FBQyxTQUFTLENBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBRSxDQUFFLEVBQUssTUFBTSxDQUFFLENBQUM7UUFDOUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBRSxPQUFPLEVBQUUsTUFBTSxDQUFFO2FBQzNDLFNBQVMsQ0FBRSxVQUFFLEdBQVcsSUFBTSxPQUFBLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFFLEdBQUcsRUFBRSxLQUFJLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBRSxFQUFsRCxDQUFrRCxDQUFFLENBQUM7SUFDckYsQ0FBQzs7Z0JBOUZvQixXQUFXO2dCQUNMLGdCQUFnQjs7SUFoQi9CLGVBQWU7UUFEM0IsVUFBVSxFQUFFO2lEQWdCUyxXQUFXO1lBQ0wsZ0JBQWdCO09BaEIvQixlQUFlLENBK0czQjtJQUFELHNCQUFDO0NBQUEsQUEvR0QsSUErR0M7U0EvR1ksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdFNuYWNrQmFyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuaW1wb3J0IF8gZnJvbSAndW5kZXJzY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTbmFja0JhclNlcnZpY2Uge1xuXG5cdHB1YmxpYyBidG5EaXNtaXNzOiBzdHJpbmcgPSB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuaW5zdGFudCggJ0dFTkVSQUwuTEFCRUxTLk9LJyApO1xuXHRwdWJsaWMgZGVmYXVsdENvbmZpZzogYW55ID0ge1xuXHRcdHBhbmVsQ2xhc3NcdFx0XHQ6IFtdLFxuXHRcdGhvcml6b250YWxQb3NpdGlvblx0OiAncmlnaHQnLFxuXHRcdGR1cmF0aW9uXHRcdFx0OiAzMDAwLFxuXHR9O1xuXG5cdC8qKlxuXHQqIEBjb25zdHJ1Y3RvclxuXHQqIEBwYXJhbSB7TWF0U25hY2tCYXJ9IHNuYWNrQmFyXG5cdCogQHBhcmFtIHtUcmFuc2xhdGVTZXJ2aWNlfSB0cmFuc2xhdGVTZXJ2aWNlXG5cdCovXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgc25hY2tCYXJcdFx0OiBNYXRTbmFja0Jhcixcblx0XHRwcml2YXRlIHRyYW5zbGF0ZVNlcnZpY2U6IFRyYW5zbGF0ZVNlcnZpY2Vcblx0KSB7fVxuXG5cdC8qKlxuXHQqIFNldCBjb25maWdcblx0KiBAcGFyYW0ge2FueX0gY29uZmlnXG5cdCogQHJldHVybiB7dm9pZH1cblx0Ki9cblx0cHVibGljIHNldENvbmZpZyggY29uZmlnOiBhbnkgKSB7XG5cdFx0dGhpcy5kZWZhdWx0Q29uZmlnID0geyAuLi5KU09OLnBhcnNlKCBKU09OLnN0cmluZ2lmeSggdGhpcy5kZWZhdWx0Q29uZmlnICkgKSwgLi4uY29uZmlnIH07XG5cdH1cblxuXHQvKipcblx0KiBTaG93IFN1Y2Nlc3MgU25hY2sgQmFyXG5cdCogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2Vcblx0KiBAcGFyYW0ge2FueX0gcGFyYW1zXG5cdCogQHBhcmFtIHthbnl9IGNvbmZpZ1xuXHQqIEByZXR1cm4ge3ZvaWR9XG5cdCovXG5cdHB1YmxpYyBzdWNjZXNzKCBtZXNzYWdlOiBzdHJpbmcsIHBhcmFtczogYW55ID0gbnVsbCwgY29uZmlnOiBhbnkgPSBudWxsICkge1xuXHRcdGNvbmZpZyA9IHsgLi4uSlNPTi5wYXJzZSggSlNPTi5zdHJpbmdpZnkoIHRoaXMuZGVmYXVsdENvbmZpZyApICksIC4uLmNvbmZpZyB9O1xuXHRcdGNvbmZpZy5wYW5lbENsYXNzLnB1c2goICdtYXQtc3VjY2VzcycgKTtcblx0XHR0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuZ2V0KCBtZXNzYWdlLCBwYXJhbXMgKVxuXHRcdC5zdWJzY3JpYmUoICggbXNnOiBzdHJpbmcgKSA9PiB0aGlzLnNuYWNrQmFyLm9wZW4oIG1zZywgdGhpcy5idG5EaXNtaXNzLCBjb25maWcgKSApO1xuXHR9XG5cblx0LyoqXG5cdCogU2hvdyBXYXJuaW5nIFNuYWNrIEJhclxuXHQqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlXG5cdCogQHBhcmFtIHthbnl9IHBhcmFtc1xuXHQqIEBwYXJhbSB7YW55fSBjb25maWdcblx0KiBAcmV0dXJuIHt2b2lkfVxuXHQqL1xuXHRwdWJsaWMgd2FybmluZyggbWVzc2FnZTogc3RyaW5nLCBwYXJhbXM6IGFueSA9IG51bGwsIGNvbmZpZzogYW55ID0gbnVsbCApIHtcblx0XHRjb25maWcgPSB7IC4uLkpTT04ucGFyc2UoIEpTT04uc3RyaW5naWZ5KCB0aGlzLmRlZmF1bHRDb25maWcgKSApLCAuLi5jb25maWcgfTtcblx0XHRjb25maWcucGFuZWxDbGFzcy5wdXNoKCAnbWF0LXdhcm5pbmcnICk7XG5cdFx0dGhpcy50cmFuc2xhdGVTZXJ2aWNlLmdldCggbWVzc2FnZSwgcGFyYW1zIClcblx0XHQuc3Vic2NyaWJlKCAoIG1zZzogc3RyaW5nICkgPT4gdGhpcy5zbmFja0Jhci5vcGVuKCBtc2csIHRoaXMuYnRuRGlzbWlzcywgY29uZmlnICkgKTtcblx0fVxuXG5cdC8qKlxuXHQqIFNob3cgUHJpbWFyeSBTbmFjayBCYXJcblx0KiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZVxuXHQqIEBwYXJhbSB7YW55fSBwYXJhbXNcblx0KiBAcGFyYW0ge2FueX0gY29uZmlnXG5cdCogQHJldHVybiB7dm9pZH1cblx0Ki9cblx0cHVibGljIHByaW1hcnkoIG1lc3NhZ2U6IHN0cmluZywgcGFyYW1zOiBhbnkgPSBudWxsLCBjb25maWc6IGFueSA9IG51bGwgKSB7XG5cdFx0Y29uZmlnID0geyAuLi5KU09OLnBhcnNlKCBKU09OLnN0cmluZ2lmeSggdGhpcy5kZWZhdWx0Q29uZmlnICkgKSwgLi4uY29uZmlnIH07XG5cdFx0Y29uZmlnLnBhbmVsQ2xhc3MucHVzaCggJ21hdC1wcmltYXJ5JyApO1xuXHRcdHRoaXMudHJhbnNsYXRlU2VydmljZS5nZXQoIG1lc3NhZ2UsIHBhcmFtcyApXG5cdFx0LnN1YnNjcmliZSggKCBtc2c6IHN0cmluZyApID0+IHRoaXMuc25hY2tCYXIub3BlbiggbXNnLCB0aGlzLmJ0bkRpc21pc3MsIGNvbmZpZyApICk7XG5cdH1cblxuXHQvKipcblx0KiBTaG93IFdhcm4gU25hY2sgQmFyXG5cdCogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2Vcblx0KiBAcGFyYW0ge2FueX0gcGFyYW1zXG5cdCogQHBhcmFtIHthbnl9IGNvbmZpZ1xuXHQqIEByZXR1cm4ge3ZvaWR9XG5cdCovXG5cdHB1YmxpYyB3YXJuKCBtZXNzYWdlOiBzdHJpbmcsIHBhcmFtczogYW55ID0gbnVsbCwgY29uZmlnOiBhbnkgPSBudWxsICkge1xuXHRcdGNvbmZpZyA9IHsgLi4uSlNPTi5wYXJzZSggSlNPTi5zdHJpbmdpZnkoIHRoaXMuZGVmYXVsdENvbmZpZyApICksIC4uLmNvbmZpZyB9O1xuXHRcdGNvbmZpZy5wYW5lbENsYXNzLnB1c2goICdtYXQtd2FybicgKTtcblx0XHR0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuZ2V0KCBtZXNzYWdlLCBwYXJhbXMgKVxuXHRcdC5zdWJzY3JpYmUoICggbXNnOiBzdHJpbmcgKSA9PiB0aGlzLnNuYWNrQmFyLm9wZW4oIG1zZywgdGhpcy5idG5EaXNtaXNzLCBjb25maWcgKSApO1xuXHR9XG5cblx0LyoqXG5cdCogU2hvdyBBY2NlbnQgU25hY2sgQmFyXG5cdCogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2Vcblx0KiBAcGFyYW0ge2FueX0gcGFyYW1zXG5cdCogQHBhcmFtIHthbnl9IGNvbmZpZ1xuXHQqIEByZXR1cm4ge3ZvaWR9XG5cdCovXG5cdHB1YmxpYyBhY2NlbnQoIG1lc3NhZ2U6IHN0cmluZywgcGFyYW1zOiBhbnkgPSBudWxsLCBjb25maWc6IGFueSA9IG51bGwgKSB7XG5cdFx0Y29uZmlnID0geyAuLi5KU09OLnBhcnNlKCBKU09OLnN0cmluZ2lmeSggdGhpcy5kZWZhdWx0Q29uZmlnICkgKSwgLi4uY29uZmlnIH07XG5cdFx0Y29uZmlnLnBhbmVsQ2xhc3MucHVzaCggJ21hdC1hY2NlbnQnICk7XG5cdFx0dGhpcy50cmFuc2xhdGVTZXJ2aWNlLmdldCggbWVzc2FnZSwgcGFyYW1zIClcblx0XHQuc3Vic2NyaWJlKCAoIG1zZzogc3RyaW5nICkgPT4gdGhpcy5zbmFja0Jhci5vcGVuKCBtc2csIHRoaXMuYnRuRGlzbWlzcywgY29uZmlnICkgKTtcblx0fVxuXG5cdC8qKlxuXHQqIFNob3cgRGVmYXVsdCBTbmFjayBCYXJcblx0KiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZVxuXHQqIEBwYXJhbSB7YW55fSBwYXJhbXNcblx0KiBAcGFyYW0ge2FueX0gY29uZmlnXG5cdCogQHJldHVybiB7dm9pZH1cblx0Ki9cblx0cHVibGljIG9wZW4oIG1lc3NhZ2U6IHN0cmluZywgcGFyYW1zOiBhbnkgPSBudWxsLCBjb25maWc6IGFueSA9IG51bGwgKSB7XG5cdFx0Y29uZmlnID0geyAuLi5KU09OLnBhcnNlKCBKU09OLnN0cmluZ2lmeSggdGhpcy5kZWZhdWx0Q29uZmlnICkgKSwgLi4uY29uZmlnIH07XG5cdFx0dGhpcy50cmFuc2xhdGVTZXJ2aWNlLmdldCggbWVzc2FnZSwgcGFyYW1zIClcblx0XHQuc3Vic2NyaWJlKCAoIG1zZzogc3RyaW5nICkgPT4gdGhpcy5zbmFja0Jhci5vcGVuKCBtc2csIHRoaXMuYnRuRGlzbWlzcywgY29uZmlnICkgKTtcblx0fVxuXG59XG4iXX0=