export declare class SharedService {
    private data;
    private dataChangeObserver;
    /**
    * Set shared data
    * @param {string} name
    * @param {any} data
    * @return {void}
    */
    setData(name: string, data: any): void;
    /**
    * Get shared data
    * @param {string} name
    * @return {any}
    */
    getData(name: string): any;
    /**
    * Remove shared data
    * @param {string} name
    * @return {void}
    */
    removeData(name: string): void;
}
