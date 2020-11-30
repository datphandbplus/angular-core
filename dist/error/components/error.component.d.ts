import { ActivatedRoute } from '@angular/router';
export declare class ErrorComponent {
    readonly defaultAppURL: string;
    route: ActivatedRoute;
    errorCode: number;
    errorMsg: string;
    /**
    * @constructor
    * @param {ActivatedRoute} route
    */
    constructor(defaultAppURL: string, route: ActivatedRoute);
    /**
    * Try again
    * @return {void}
    */
    tryAgain(): void;
}
