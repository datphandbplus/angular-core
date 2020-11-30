export declare class MediaService {
    private media;
    /**
    * @constructor
    */
    constructor();
    /**
    * Check media is in breakpoints
    * @param {number} breakpoint - Breakpoint to check
    * @return {boolean}
    */
    is(breakpoint: string): boolean;
    /**
    * Check media is greater than width
    * @param {number} width - Width to check
    * @return {boolean}
    */
    gt(width: number): boolean;
    /**
    * Check media is less than width
    * @param {number} width - Width to check
    * @return {boolean}
    */
    lt(width: number): boolean;
    /**
    * Set media view port
    * @param {number} width - Viewport width
    * @return {void}
    */
    setViewPort(width: number): void;
}
