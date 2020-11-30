export declare class UtilitiesService {
    /**
    * Strip vietnamese symbol
    * @static
    * @param {string} str - String to strip
    * @return {string} Striped string
    */
    static stripVietnameseSymbol(str: string): string;
    /**
    * Get color
    * @static
    * @param {any} colors
    * @param {number} index
    * @return {string}
    */
    static getColor(colors: any, index: number): string;
    /**
    * Convert hex to rgba
    * @static
    * @param {string} hex
    * @param {number} opacity
    * @return {any}
    */
    static hexToRgba(hex: string, opacity?: number): string;
    /**
    * Cpnvert mutli depth
    * @param {Array} items
    * @param {string} fieldKey
    * @param {string} fieldParentKey
    * @param {string} fieldName
    * @return {Array}
    */
    static convertMultiDepth(items: Array<any>, fieldKey?: string, fieldParentKey?: string, fieldName?: string): Array<any>;
    /**
    * Hierarhy sort
    * @param {any} hashArr
    * @param {string} fieldKey
    * @param {string} fieldName
    * @param {number} key
    * @param {Array} result
    * @return {Array}
    */
    static hierarhySort(hashArr: any, fieldKey?: string, fieldName?: string, key?: number, result?: Array<any>): any[];
}
