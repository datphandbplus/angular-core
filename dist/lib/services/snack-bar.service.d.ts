import { MatSnackBar } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';
export declare class SnackBarService {
    private snackBar;
    private translateService;
    btnDismiss: string;
    defaultConfig: any;
    /**
    * @constructor
    * @param {MatSnackBar} snackBar
    * @param {TranslateService} translateService
    */
    constructor(snackBar: MatSnackBar, translateService: TranslateService);
    /**
    * Set config
    * @param {any} config
    * @return {void}
    */
    setConfig(config: any): void;
    /**
    * Show Success Snack Bar
    * @param {string} message
    * @param {any} params
    * @param {any} config
    * @return {void}
    */
    success(message: string, params?: any, config?: any): void;
    /**
    * Show Warning Snack Bar
    * @param {string} message
    * @param {any} params
    * @param {any} config
    * @return {void}
    */
    warning(message: string, params?: any, config?: any): void;
    /**
    * Show Primary Snack Bar
    * @param {string} message
    * @param {any} params
    * @param {any} config
    * @return {void}
    */
    primary(message: string, params?: any, config?: any): void;
    /**
    * Show Warn Snack Bar
    * @param {string} message
    * @param {any} params
    * @param {any} config
    * @return {void}
    */
    warn(message: string, params?: any, config?: any): void;
    /**
    * Show Accent Snack Bar
    * @param {string} message
    * @param {any} params
    * @param {any} config
    * @return {void}
    */
    accent(message: string, params?: any, config?: any): void;
    /**
    * Show Default Snack Bar
    * @param {string} message
    * @param {any} params
    * @param {any} config
    * @return {void}
    */
    open(message: string, params?: any, config?: any): void;
}
