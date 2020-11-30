export declare class NumberService {
    /**
    * Calculate percent with 2 numbers
    * @static
    * @param {number} cur
    * @param {number} pre
    * @param {boolean} round - Flag to round percent
    * @return {any} Percent number & increament
    */
    static percent(cur: number, pre: number, round?: boolean): any;
    /**
    * Calculate percent with total
    * @static
    * @param {number} part
    * @param {number} total
    * @param {boolean} round - Flag to round percent
    * @return {number} Percent number
    */
    static percentWithTotal(part: number, total: number, round?: boolean): number;
    /**
    * Add commas for thoudsand number
    * @static
    * @param {number} num
    * @param {boolean} roundUp - Flag to round number
    * @param {boolean} isAddZero - Flag to add prefix zero
    * @return {string} Commas string
    */
    static addCommas(num: any, roundUp?: boolean, isAddZero?: boolean): string;
    /**
    * Add zero before number
    * @static
    * @param {number} num
    * @return {string} number with zero
    */
    static addZero(num: number): string;
    /**
    * Round percent number
    * @static
    * @param {number} num
    * @return {number} Rounded percent number
    */
    static percentRound(num: number): number;
    /**
    * Round up number
    * @static
    * @param {number} num
    * @param {number} precision
    * @return {number} Rounded up number
    */
    static roundUp(num: number, precision: number): number;
    /**
    * K Formatter
    * @static
    * @param {number} num
    * @return {number} K formatter number
    */
    static kFormatter(num: number): string;
    /**
    * Cut off float number
    * @static
    * @param {number} num
    * @param {number} digits
    * @return {number} Cut off number
    */
    static cutOffFloatNumber(num: number, digits?: number): number;
    /**
    * Pad number formatter
    * @static
    * @param {double} num
    * @param {int} size
    * @return {string}
    */
    static padNumberFormatter(num: number, size: number): string;
}
