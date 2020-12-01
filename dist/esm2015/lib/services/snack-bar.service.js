import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';
let SnackBarService = class SnackBarService {
    /**
    * @constructor
    * @param {MatSnackBar} snackBar
    * @param {TranslateService} translateService
    */
    constructor(snackBar, translateService) {
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
    setConfig(config) {
        this.defaultConfig = Object.assign({}, JSON.parse(JSON.stringify(this.defaultConfig)), config);
    }
    /**
    * Show Success Snack Bar
    * @param {string} message
    * @param {any} params
    * @param {any} config
    * @return {void}
    */
    success(message, params = null, config = null) {
        config = Object.assign({}, JSON.parse(JSON.stringify(this.defaultConfig)), config);
        config.panelClass.push('mat-success');
        this.translateService.get(message, params)
            .subscribe((msg) => this.snackBar.open(msg, this.btnDismiss, config));
    }
    /**
    * Show Warning Snack Bar
    * @param {string} message
    * @param {any} params
    * @param {any} config
    * @return {void}
    */
    warning(message, params = null, config = null) {
        config = Object.assign({}, JSON.parse(JSON.stringify(this.defaultConfig)), config);
        config.panelClass.push('mat-warning');
        this.translateService.get(message, params)
            .subscribe((msg) => this.snackBar.open(msg, this.btnDismiss, config));
    }
    /**
    * Show Primary Snack Bar
    * @param {string} message
    * @param {any} params
    * @param {any} config
    * @return {void}
    */
    primary(message, params = null, config = null) {
        config = Object.assign({}, JSON.parse(JSON.stringify(this.defaultConfig)), config);
        config.panelClass.push('mat-primary');
        this.translateService.get(message, params)
            .subscribe((msg) => this.snackBar.open(msg, this.btnDismiss, config));
    }
    /**
    * Show Warn Snack Bar
    * @param {string} message
    * @param {any} params
    * @param {any} config
    * @return {void}
    */
    warn(message, params = null, config = null) {
        config = Object.assign({}, JSON.parse(JSON.stringify(this.defaultConfig)), config);
        config.panelClass.push('mat-warn');
        this.translateService.get(message, params)
            .subscribe((msg) => this.snackBar.open(msg, this.btnDismiss, config));
    }
    /**
    * Show Accent Snack Bar
    * @param {string} message
    * @param {any} params
    * @param {any} config
    * @return {void}
    */
    accent(message, params = null, config = null) {
        config = Object.assign({}, JSON.parse(JSON.stringify(this.defaultConfig)), config);
        config.panelClass.push('mat-accent');
        this.translateService.get(message, params)
            .subscribe((msg) => this.snackBar.open(msg, this.btnDismiss, config));
    }
    /**
    * Show Default Snack Bar
    * @param {string} message
    * @param {any} params
    * @param {any} config
    * @return {void}
    */
    open(message, params = null, config = null) {
        config = Object.assign({}, JSON.parse(JSON.stringify(this.defaultConfig)), config);
        this.translateService.get(message, params)
            .subscribe((msg) => this.snackBar.open(msg, this.btnDismiss, config));
    }
};
SnackBarService.ctorParameters = () => [
    { type: MatSnackBar },
    { type: TranslateService }
];
SnackBarService = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [MatSnackBar,
        TranslateService])
], SnackBarService);
export { SnackBarService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic25hY2stYmFyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNvcmUvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvc25hY2stYmFyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBSXZELElBQWEsZUFBZSxHQUE1QixNQUFhLGVBQWU7SUFTM0I7Ozs7TUFJRTtJQUNGLFlBQ1MsUUFBdUIsRUFDdkIsZ0JBQWtDO1FBRGxDLGFBQVEsR0FBUixRQUFRLENBQWU7UUFDdkIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQWRwQyxlQUFVLEdBQVcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBRSxtQkFBbUIsQ0FBRSxDQUFDO1FBQzFFLGtCQUFhLEdBQVE7WUFDM0IsVUFBVSxFQUFLLEVBQUU7WUFDakIsa0JBQWtCLEVBQUcsT0FBTztZQUM1QixRQUFRLEVBQUssSUFBSTtTQUNqQixDQUFDO0lBVUMsQ0FBQztJQUVKOzs7O01BSUU7SUFDSyxTQUFTLENBQUUsTUFBVztRQUM1QixJQUFJLENBQUMsYUFBYSxxQkFBUSxJQUFJLENBQUMsS0FBSyxDQUFFLElBQUksQ0FBQyxTQUFTLENBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBRSxDQUFFLEVBQUssTUFBTSxDQUFFLENBQUM7SUFDM0YsQ0FBQztJQUVEOzs7Ozs7TUFNRTtJQUNLLE9BQU8sQ0FBRSxPQUFlLEVBQUUsU0FBYyxJQUFJLEVBQUUsU0FBYyxJQUFJO1FBQ3RFLE1BQU0scUJBQVEsSUFBSSxDQUFDLEtBQUssQ0FBRSxJQUFJLENBQUMsU0FBUyxDQUFFLElBQUksQ0FBQyxhQUFhLENBQUUsQ0FBRSxFQUFLLE1BQU0sQ0FBRSxDQUFDO1FBQzlFLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFFLGFBQWEsQ0FBRSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBRTthQUMzQyxTQUFTLENBQUUsQ0FBRSxHQUFXLEVBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBRSxDQUFFLENBQUM7SUFDckYsQ0FBQztJQUVEOzs7Ozs7TUFNRTtJQUNLLE9BQU8sQ0FBRSxPQUFlLEVBQUUsU0FBYyxJQUFJLEVBQUUsU0FBYyxJQUFJO1FBQ3RFLE1BQU0scUJBQVEsSUFBSSxDQUFDLEtBQUssQ0FBRSxJQUFJLENBQUMsU0FBUyxDQUFFLElBQUksQ0FBQyxhQUFhLENBQUUsQ0FBRSxFQUFLLE1BQU0sQ0FBRSxDQUFDO1FBQzlFLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFFLGFBQWEsQ0FBRSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBRTthQUMzQyxTQUFTLENBQUUsQ0FBRSxHQUFXLEVBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBRSxDQUFFLENBQUM7SUFDckYsQ0FBQztJQUVEOzs7Ozs7TUFNRTtJQUNLLE9BQU8sQ0FBRSxPQUFlLEVBQUUsU0FBYyxJQUFJLEVBQUUsU0FBYyxJQUFJO1FBQ3RFLE1BQU0scUJBQVEsSUFBSSxDQUFDLEtBQUssQ0FBRSxJQUFJLENBQUMsU0FBUyxDQUFFLElBQUksQ0FBQyxhQUFhLENBQUUsQ0FBRSxFQUFLLE1BQU0sQ0FBRSxDQUFDO1FBQzlFLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFFLGFBQWEsQ0FBRSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBRTthQUMzQyxTQUFTLENBQUUsQ0FBRSxHQUFXLEVBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBRSxDQUFFLENBQUM7SUFDckYsQ0FBQztJQUVEOzs7Ozs7TUFNRTtJQUNLLElBQUksQ0FBRSxPQUFlLEVBQUUsU0FBYyxJQUFJLEVBQUUsU0FBYyxJQUFJO1FBQ25FLE1BQU0scUJBQVEsSUFBSSxDQUFDLEtBQUssQ0FBRSxJQUFJLENBQUMsU0FBUyxDQUFFLElBQUksQ0FBQyxhQUFhLENBQUUsQ0FBRSxFQUFLLE1BQU0sQ0FBRSxDQUFDO1FBQzlFLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFFLFVBQVUsQ0FBRSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBRTthQUMzQyxTQUFTLENBQUUsQ0FBRSxHQUFXLEVBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBRSxDQUFFLENBQUM7SUFDckYsQ0FBQztJQUVEOzs7Ozs7TUFNRTtJQUNLLE1BQU0sQ0FBRSxPQUFlLEVBQUUsU0FBYyxJQUFJLEVBQUUsU0FBYyxJQUFJO1FBQ3JFLE1BQU0scUJBQVEsSUFBSSxDQUFDLEtBQUssQ0FBRSxJQUFJLENBQUMsU0FBUyxDQUFFLElBQUksQ0FBQyxhQUFhLENBQUUsQ0FBRSxFQUFLLE1BQU0sQ0FBRSxDQUFDO1FBQzlFLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFFLFlBQVksQ0FBRSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBRTthQUMzQyxTQUFTLENBQUUsQ0FBRSxHQUFXLEVBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBRSxDQUFFLENBQUM7SUFDckYsQ0FBQztJQUVEOzs7Ozs7TUFNRTtJQUNLLElBQUksQ0FBRSxPQUFlLEVBQUUsU0FBYyxJQUFJLEVBQUUsU0FBYyxJQUFJO1FBQ25FLE1BQU0scUJBQVEsSUFBSSxDQUFDLEtBQUssQ0FBRSxJQUFJLENBQUMsU0FBUyxDQUFFLElBQUksQ0FBQyxhQUFhLENBQUUsQ0FBRSxFQUFLLE1BQU0sQ0FBRSxDQUFDO1FBQzlFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBRTthQUMzQyxTQUFTLENBQUUsQ0FBRSxHQUFXLEVBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBRSxDQUFFLENBQUM7SUFDckYsQ0FBQztDQUVELENBQUE7O1lBaEdxQixXQUFXO1lBQ0wsZ0JBQWdCOztBQWhCL0IsZUFBZTtJQUQzQixVQUFVLEVBQUU7NkNBZ0JTLFdBQVc7UUFDTCxnQkFBZ0I7R0FoQi9CLGVBQWUsQ0ErRzNCO1NBL0dZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXRTbmFja0JhciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcbmltcG9ydCBfIGZyb20gJ3VuZGVyc2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU25hY2tCYXJTZXJ2aWNlIHtcblxuXHRwdWJsaWMgYnRuRGlzbWlzczogc3RyaW5nID0gdGhpcy50cmFuc2xhdGVTZXJ2aWNlLmluc3RhbnQoICdHRU5FUkFMLkxBQkVMUy5PSycgKTtcblx0cHVibGljIGRlZmF1bHRDb25maWc6IGFueSA9IHtcblx0XHRwYW5lbENsYXNzXHRcdFx0OiBbXSxcblx0XHRob3Jpem9udGFsUG9zaXRpb25cdDogJ3JpZ2h0Jyxcblx0XHRkdXJhdGlvblx0XHRcdDogMzAwMCxcblx0fTtcblxuXHQvKipcblx0KiBAY29uc3RydWN0b3Jcblx0KiBAcGFyYW0ge01hdFNuYWNrQmFyfSBzbmFja0JhclxuXHQqIEBwYXJhbSB7VHJhbnNsYXRlU2VydmljZX0gdHJhbnNsYXRlU2VydmljZVxuXHQqL1xuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIHNuYWNrQmFyXHRcdDogTWF0U25hY2tCYXIsXG5cdFx0cHJpdmF0ZSB0cmFuc2xhdGVTZXJ2aWNlOiBUcmFuc2xhdGVTZXJ2aWNlXG5cdCkge31cblxuXHQvKipcblx0KiBTZXQgY29uZmlnXG5cdCogQHBhcmFtIHthbnl9IGNvbmZpZ1xuXHQqIEByZXR1cm4ge3ZvaWR9XG5cdCovXG5cdHB1YmxpYyBzZXRDb25maWcoIGNvbmZpZzogYW55ICkge1xuXHRcdHRoaXMuZGVmYXVsdENvbmZpZyA9IHsgLi4uSlNPTi5wYXJzZSggSlNPTi5zdHJpbmdpZnkoIHRoaXMuZGVmYXVsdENvbmZpZyApICksIC4uLmNvbmZpZyB9O1xuXHR9XG5cblx0LyoqXG5cdCogU2hvdyBTdWNjZXNzIFNuYWNrIEJhclxuXHQqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlXG5cdCogQHBhcmFtIHthbnl9IHBhcmFtc1xuXHQqIEBwYXJhbSB7YW55fSBjb25maWdcblx0KiBAcmV0dXJuIHt2b2lkfVxuXHQqL1xuXHRwdWJsaWMgc3VjY2VzcyggbWVzc2FnZTogc3RyaW5nLCBwYXJhbXM6IGFueSA9IG51bGwsIGNvbmZpZzogYW55ID0gbnVsbCApIHtcblx0XHRjb25maWcgPSB7IC4uLkpTT04ucGFyc2UoIEpTT04uc3RyaW5naWZ5KCB0aGlzLmRlZmF1bHRDb25maWcgKSApLCAuLi5jb25maWcgfTtcblx0XHRjb25maWcucGFuZWxDbGFzcy5wdXNoKCAnbWF0LXN1Y2Nlc3MnICk7XG5cdFx0dGhpcy50cmFuc2xhdGVTZXJ2aWNlLmdldCggbWVzc2FnZSwgcGFyYW1zIClcblx0XHQuc3Vic2NyaWJlKCAoIG1zZzogc3RyaW5nICkgPT4gdGhpcy5zbmFja0Jhci5vcGVuKCBtc2csIHRoaXMuYnRuRGlzbWlzcywgY29uZmlnICkgKTtcblx0fVxuXG5cdC8qKlxuXHQqIFNob3cgV2FybmluZyBTbmFjayBCYXJcblx0KiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZVxuXHQqIEBwYXJhbSB7YW55fSBwYXJhbXNcblx0KiBAcGFyYW0ge2FueX0gY29uZmlnXG5cdCogQHJldHVybiB7dm9pZH1cblx0Ki9cblx0cHVibGljIHdhcm5pbmcoIG1lc3NhZ2U6IHN0cmluZywgcGFyYW1zOiBhbnkgPSBudWxsLCBjb25maWc6IGFueSA9IG51bGwgKSB7XG5cdFx0Y29uZmlnID0geyAuLi5KU09OLnBhcnNlKCBKU09OLnN0cmluZ2lmeSggdGhpcy5kZWZhdWx0Q29uZmlnICkgKSwgLi4uY29uZmlnIH07XG5cdFx0Y29uZmlnLnBhbmVsQ2xhc3MucHVzaCggJ21hdC13YXJuaW5nJyApO1xuXHRcdHRoaXMudHJhbnNsYXRlU2VydmljZS5nZXQoIG1lc3NhZ2UsIHBhcmFtcyApXG5cdFx0LnN1YnNjcmliZSggKCBtc2c6IHN0cmluZyApID0+IHRoaXMuc25hY2tCYXIub3BlbiggbXNnLCB0aGlzLmJ0bkRpc21pc3MsIGNvbmZpZyApICk7XG5cdH1cblxuXHQvKipcblx0KiBTaG93IFByaW1hcnkgU25hY2sgQmFyXG5cdCogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2Vcblx0KiBAcGFyYW0ge2FueX0gcGFyYW1zXG5cdCogQHBhcmFtIHthbnl9IGNvbmZpZ1xuXHQqIEByZXR1cm4ge3ZvaWR9XG5cdCovXG5cdHB1YmxpYyBwcmltYXJ5KCBtZXNzYWdlOiBzdHJpbmcsIHBhcmFtczogYW55ID0gbnVsbCwgY29uZmlnOiBhbnkgPSBudWxsICkge1xuXHRcdGNvbmZpZyA9IHsgLi4uSlNPTi5wYXJzZSggSlNPTi5zdHJpbmdpZnkoIHRoaXMuZGVmYXVsdENvbmZpZyApICksIC4uLmNvbmZpZyB9O1xuXHRcdGNvbmZpZy5wYW5lbENsYXNzLnB1c2goICdtYXQtcHJpbWFyeScgKTtcblx0XHR0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuZ2V0KCBtZXNzYWdlLCBwYXJhbXMgKVxuXHRcdC5zdWJzY3JpYmUoICggbXNnOiBzdHJpbmcgKSA9PiB0aGlzLnNuYWNrQmFyLm9wZW4oIG1zZywgdGhpcy5idG5EaXNtaXNzLCBjb25maWcgKSApO1xuXHR9XG5cblx0LyoqXG5cdCogU2hvdyBXYXJuIFNuYWNrIEJhclxuXHQqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlXG5cdCogQHBhcmFtIHthbnl9IHBhcmFtc1xuXHQqIEBwYXJhbSB7YW55fSBjb25maWdcblx0KiBAcmV0dXJuIHt2b2lkfVxuXHQqL1xuXHRwdWJsaWMgd2FybiggbWVzc2FnZTogc3RyaW5nLCBwYXJhbXM6IGFueSA9IG51bGwsIGNvbmZpZzogYW55ID0gbnVsbCApIHtcblx0XHRjb25maWcgPSB7IC4uLkpTT04ucGFyc2UoIEpTT04uc3RyaW5naWZ5KCB0aGlzLmRlZmF1bHRDb25maWcgKSApLCAuLi5jb25maWcgfTtcblx0XHRjb25maWcucGFuZWxDbGFzcy5wdXNoKCAnbWF0LXdhcm4nICk7XG5cdFx0dGhpcy50cmFuc2xhdGVTZXJ2aWNlLmdldCggbWVzc2FnZSwgcGFyYW1zIClcblx0XHQuc3Vic2NyaWJlKCAoIG1zZzogc3RyaW5nICkgPT4gdGhpcy5zbmFja0Jhci5vcGVuKCBtc2csIHRoaXMuYnRuRGlzbWlzcywgY29uZmlnICkgKTtcblx0fVxuXG5cdC8qKlxuXHQqIFNob3cgQWNjZW50IFNuYWNrIEJhclxuXHQqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlXG5cdCogQHBhcmFtIHthbnl9IHBhcmFtc1xuXHQqIEBwYXJhbSB7YW55fSBjb25maWdcblx0KiBAcmV0dXJuIHt2b2lkfVxuXHQqL1xuXHRwdWJsaWMgYWNjZW50KCBtZXNzYWdlOiBzdHJpbmcsIHBhcmFtczogYW55ID0gbnVsbCwgY29uZmlnOiBhbnkgPSBudWxsICkge1xuXHRcdGNvbmZpZyA9IHsgLi4uSlNPTi5wYXJzZSggSlNPTi5zdHJpbmdpZnkoIHRoaXMuZGVmYXVsdENvbmZpZyApICksIC4uLmNvbmZpZyB9O1xuXHRcdGNvbmZpZy5wYW5lbENsYXNzLnB1c2goICdtYXQtYWNjZW50JyApO1xuXHRcdHRoaXMudHJhbnNsYXRlU2VydmljZS5nZXQoIG1lc3NhZ2UsIHBhcmFtcyApXG5cdFx0LnN1YnNjcmliZSggKCBtc2c6IHN0cmluZyApID0+IHRoaXMuc25hY2tCYXIub3BlbiggbXNnLCB0aGlzLmJ0bkRpc21pc3MsIGNvbmZpZyApICk7XG5cdH1cblxuXHQvKipcblx0KiBTaG93IERlZmF1bHQgU25hY2sgQmFyXG5cdCogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2Vcblx0KiBAcGFyYW0ge2FueX0gcGFyYW1zXG5cdCogQHBhcmFtIHthbnl9IGNvbmZpZ1xuXHQqIEByZXR1cm4ge3ZvaWR9XG5cdCovXG5cdHB1YmxpYyBvcGVuKCBtZXNzYWdlOiBzdHJpbmcsIHBhcmFtczogYW55ID0gbnVsbCwgY29uZmlnOiBhbnkgPSBudWxsICkge1xuXHRcdGNvbmZpZyA9IHsgLi4uSlNPTi5wYXJzZSggSlNPTi5zdHJpbmdpZnkoIHRoaXMuZGVmYXVsdENvbmZpZyApICksIC4uLmNvbmZpZyB9O1xuXHRcdHRoaXMudHJhbnNsYXRlU2VydmljZS5nZXQoIG1lc3NhZ2UsIHBhcmFtcyApXG5cdFx0LnN1YnNjcmliZSggKCBtc2c6IHN0cmluZyApID0+IHRoaXMuc25hY2tCYXIub3BlbiggbXNnLCB0aGlzLmJ0bkRpc21pc3MsIGNvbmZpZyApICk7XG5cdH1cblxufVxuIl19