export declare class LoopService {
    private intervals;
    /**
    * Set loop
    * @param {Function} fn
    * @param {number} time - Time to loop
    * @return {number} index - Loop index
    */
    set(fn: Function, time: number): number;
    /**
    * Cancel loop
    * @param {number} index - Loop index
    * @return {void}
    */
    cancel(index: number): void;
    /**
    * Destroy all loop
    * @return {void}
    */
    destroy(): void;
}
