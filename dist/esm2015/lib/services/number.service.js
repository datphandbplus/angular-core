// @dynamic
export class NumberService {
    /**
    * Calculate percent with 2 numbers
    * @static
    * @param {number} cur
    * @param {number} pre
    * @param {boolean} round - Flag to round percent
    * @return {any} Percent number & increament
    */
    static percent(cur, pre, round = false) {
        let percent = pre !== 0
            ? ((cur - pre) / Math.abs(pre) * 100)
            : (cur !== 0 ? 100 : 0);
        let increase = true;
        if (percent < 0) {
            percent *= -1;
            increase = false;
        }
        if (!isNaN(percent)) {
            percent = round ? Math.round(percent) : NumberService.percentRound(percent);
        }
        else {
            percent = 0;
        }
        return { increase, number: percent };
    }
    /**
    * Calculate percent with total
    * @static
    * @param {number} part
    * @param {number} total
    * @param {boolean} round - Flag to round percent
    * @return {number} Percent number
    */
    static percentWithTotal(part, total, round = false) {
        const percent = total > 0 ? part * 1 * 100 / total : 0;
        return round ? Math.round(percent) : NumberService.percentRound(percent);
    }
    /**
    * Add commas for thoudsand number
    * @static
    * @param {number} num
    * @param {boolean} roundUp - Flag to round number
    * @param {boolean} isAddZero - Flag to add prefix zero
    * @return {string} Commas string
    */
    static addCommas(num, roundUp = false, isAddZero = true) {
        num = NumberService.cutOffFloatNumber(num);
        num = roundUp ? NumberService.roundUp(num, 10) : num;
        if (isAddZero)
            num = NumberService.addZero(num);
        num += '';
        const x = num.split('.');
        const x2 = x.length > 1 ? '.' + x[1] : '';
        const rgx = /(\d+)(\d{3})/;
        let x1 = x[0];
        while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' + ',' + '$2');
        }
        return x1 + x2;
    }
    /**
    * Add zero before number
    * @static
    * @param {number} num
    * @return {string} number with zero
    */
    static addZero(num) {
        num = NumberService.cutOffFloatNumber(num);
        return (num > 0 && num < 10 && num % 1 === 0 ? '0' : '') + num;
    }
    /**
    * Round percent number
    * @static
    * @param {number} num
    * @return {number} Rounded percent number
    */
    static percentRound(num) {
        num = NumberService.cutOffFloatNumber(num);
        return Math.round(num * 100) / 100;
    }
    /**
    * Round up number
    * @static
    * @param {number} num
    * @param {number} precision
    * @return {number} Rounded up number
    */
    static roundUp(num, precision) {
        num = NumberService.cutOffFloatNumber(num);
        num = Math.ceil(num);
        return num > precision ? Math.round(num / precision) * precision : num;
    }
    /**
    * K Formatter
    * @static
    * @param {number} num
    * @return {number} K formatter number
    */
    static kFormatter(num) {
        num = NumberService.cutOffFloatNumber(num);
        if (num >= 1000000000) {
            return NumberService.addCommas((num / 1000000000).toFixed(1).replace(/\.0$/, ''), false, false) + 'B';
        }
        if (num >= 1000000) {
            return NumberService.addCommas((num / 1000000).toFixed(1).replace(/\.0$/, ''), false, false) + 'M';
        }
        if (num >= 1000) {
            return NumberService.addCommas((num / 1000).toFixed(1).replace(/\.0$/, ''), false, false) + 'K';
        }
        return NumberService.addCommas(num);
    }
    /**
    * File size formatter
    * @static
    * @param {number} fileSize
    * @return {string}
    */
    static fileSizeFormatter(fileSize) {
        if (!fileSize || isNaN(fileSize))
            fileSize = 0;
        if (fileSize >= 1048576) {
            return NumberService.addCommas((fileSize / 1024 / 1024).toFixed(2)) + 'MB';
        }
        if (fileSize >= 1024) {
            return NumberService.addCommas((fileSize / 1024).toFixed(2)) + 'KB';
        }
        return NumberService.addCommas(fileSize.toFixed(2)) + 'B';
    }
    /**
    * Cut off float number
    * @static
    * @param {number} num
    * @param {number} digits
    * @return {number} Cut off number
    */
    static cutOffFloatNumber(num, digits = 2) {
        if (!num || isNaN(num))
            return 0;
        return +parseFloat(num.toString()).toFixed(num % 1 === 0 ? 0 : digits);
    }
    /**
    * Pad number formatter
    * @static
    * @param {double} num
    * @param {int} size
    * @return {string}
    */
    static padNumberFormatter(num, size) {
        const s = String(num);
        return s.padStart(size, '0');
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNvcmUvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvbnVtYmVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsV0FBVztBQUNYLE1BQU0sT0FBTyxhQUFhO0lBRXpCOzs7Ozs7O01BT0U7SUFDSyxNQUFNLENBQUMsT0FBTyxDQUFFLEdBQVcsRUFBRSxHQUFXLEVBQUUsUUFBaUIsS0FBSztRQUN0RSxJQUFJLE9BQU8sR0FBVyxHQUFHLEtBQUssQ0FBQztZQUM5QixDQUFDLENBQUMsQ0FBRSxDQUFFLEdBQUcsR0FBRyxHQUFHLENBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFFLEdBQUcsQ0FBRSxHQUFHLEdBQUcsQ0FBRTtZQUMzQyxDQUFDLENBQUMsQ0FBRSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO1FBQzNCLElBQUksUUFBUSxHQUFZLElBQUksQ0FBQztRQUU3QixJQUFLLE9BQU8sR0FBRyxDQUFDLEVBQUc7WUFDbEIsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2QsUUFBUSxHQUFHLEtBQUssQ0FBQztTQUNqQjtRQUVELElBQUssQ0FBQyxLQUFLLENBQUUsT0FBTyxDQUFFLEVBQUc7WUFDeEIsT0FBTyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBRSxPQUFPLENBQUUsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBRSxPQUFPLENBQUUsQ0FBQztTQUNoRjthQUFNO1lBQ04sT0FBTyxHQUFHLENBQUMsQ0FBQztTQUNaO1FBRUQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLENBQUM7SUFDdEMsQ0FBQztJQUVEOzs7Ozs7O01BT0U7SUFDSyxNQUFNLENBQUMsZ0JBQWdCLENBQUUsSUFBWSxFQUFFLEtB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O1NBQ2pGO1FBRUQsSUFBSyxRQUFRLElBQUksSUFBSSxFQUFHO1lBQ3ZCLE9BQU8sYUFBYSxDQUFDLFNBQVMsQ0FBRSxDQUFFLFFBQVEsR0FBRyxJQUFJLENBQUUsQ0FBQyxPQUFPLENBQUUsQ0FBQyxDQUFFLENBQUUsR0FBRyxJQUFJLENBQUM7U0FDMUU7UUFFRCxPQUFPLGFBQWEsQ0FBQyxTQUFTLENBQUUsUUFBUSxDQUFDLE9BQU8sQ0FBRSxDQUFDLENBQUUsQ0FBRSxHQUFHLEdBQUcsQ0FBQztJQUMvRCxDQUFDO0lBRUQ7Ozs7OztNQU1FO0lBQ0ssTUFBTSxDQUFDLGlCQUFpQixDQUFFLEdBQVcsRUFBRSxTQUFpQixDQUFDO1FBQy9ELElBQUssQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFFLEdBQUcsQ0FBRTtZQUFHLE9BQU8sQ0FBQyxDQUFDO1FBRXJDLE9BQU8sQ0FBQyxVQUFVLENBQUUsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFFLENBQUMsT0FBTyxDQUFFLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBRSxDQUFDO0lBQzVFLENBQUM7SUFFRDs7Ozs7O01BTUU7SUFDSyxNQUFNLENBQUMsa0JBQWtCLENBQUUsR0FBVyxFQUFFLElBQVk7UUFDMUQsTUFBTSxDQUFDLEdBQVcsTUFBTSxDQUFFLEdBQUcsQ0FBRSxDQUFDO1FBQ2hDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBRSxJQUFJLEVBQUUsR0FBRyxDQUFFLENBQUM7SUFDaEMsQ0FBQztDQUVEIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGR5bmFtaWNcbmV4cG9ydCBjbGFzcyBOdW1iZXJTZXJ2aWNlIHtcblxuXHQvKipcblx0KiBDYWxjdWxhdGUgcGVyY2VudCB3aXRoIDIgbnVtYmVyc1xuXHQqIEBzdGF0aWNcblx0KiBAcGFyYW0ge251bWJlcn0gY3VyXG5cdCogQHBhcmFtIHtudW1iZXJ9IHByZVxuXHQqIEBwYXJhbSB7Ym9vbGVhbn0gcm91bmQgLSBGbGFnIHRvIHJvdW5kIHBlcmNlbnRcblx0KiBAcmV0dXJuIHthbnl9IFBlcmNlbnQgbnVtYmVyICYgaW5jcmVhbWVudFxuXHQqL1xuXHRwdWJsaWMgc3RhdGljIHBlcmNlbnQoIGN1cjogbnVtYmVyLCBwcmU6IG51bWJlciwgcm91bmQ6IGJvb2xlYW4gPSBmYWxzZSApOiBhbnkge1xuXHRcdGxldCBwZXJjZW50OiBudW1iZXIgPSBwcmUgIT09IDBcblx0XHRcdD8gKCAoIGN1ciAtIHByZSApIC8gTWF0aC5hYnMoIHByZSApICogMTAwIClcblx0XHRcdDogKCBjdXIgIT09IDAgPyAxMDAgOiAwICk7XG5cdFx0bGV0IGluY3JlYXNlOiBib29sZWFuID0gdHJ1ZTtcblxuXHRcdGlmICggcGVyY2VudCA8IDAgKSB7XG5cdFx0XHRwZXJjZW50ICo9IC0xO1xuXHRcdFx0aW5jcmVhc2UgPSBmYWxzZTtcblx0XHR9XG5cblx0XHRpZiAoICFpc05hTiggcGVyY2VudCApICkge1xuXHRcdFx0cGVyY2VudCA9IHJvdW5kID8gTWF0aC5yb3VuZCggcGVyY2VudCApIDogTnVtYmVyU2VydmljZS5wZXJjZW50Um91bmQoIHBlcmNlbnQgKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cGVyY2VudCA9IDA7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHsgaW5jcmVhc2UsIG51bWJlcjogcGVyY2VudCB9O1xuXHR9XG5cblx0LyoqXG5cdCogQ2FsY3VsYXRlIHBlcmNlbnQgd2l0aCB0b3RhbFxuXHQqIEBzdGF0aWNcblx0KiBAcGFyYW0ge251bWJlcn0gcGFydFxuXHQqIEBwYXJhbSB7bnVtYmVyfSB0b3RhbFxuXHQqIEBwYXJhbSB7Ym9vbGVhbn0gcm91bmQgLSBGbGFnIHRvIHJvdW5kIHBlcmNlbnRcblx0KiBAcmV0dXJuIHtudW1iZXJ9IFBlcmNlbnQgbnVtYmVyXG5cdCovXG5cdHB1YmxpYyBzdGF0aWMgcGVyY2VudFdpdGhUb3RhbCggcGFydDogbnVtYmVyLCB0b3RhbDogbnVtYmVyLCByb3VuZDogYm9vbGVhbiA9IGZhbHNlICk6IG51bWJlciB7XG5cdFx0Y29uc3QgcGVyY2VudDogbnVtYmVyID0gdG90YWwgPiAwID8gcGFydCAqIDEgKiAxMDAgLyB0b3RhbCA6IDA7XG5cdFx0cmV0dXJuIHJvdW5kID8gTWF0aC5yb3VuZCggcGVyY2VudCApIDogTnVtYmVyU2VydmljZS5wZXJjZW50Um91bmQoIHBlcmNlbnQgKTtcblx0fVxuXG5cdC8qKlxuXHQqIEFkZCBjb21tYXMgZm9yIHRob3Vkc2FuZCBudW1iZXJcblx0KiBAc3RhdGljXG5cdCogQHBhcmFtIHtudW1iZXJ9IG51bVxuXHQqIEBwYXJhbSB7Ym9vbGVhbn0gcm91bmRVcCAtIEZsYWcgdG8gcm91bmQgbnVtYmVyXG5cdCogQHBhcmFtIHtib29sZWFufSBpc0FkZFplcm8gLSBGbGFnIHRvIGFkZCBwcmVmaXggemVyb1xuXHQqIEByZXR1cm4ge3N0cmluZ30gQ29tbWFzIHN0cmluZ1xuXHQqL1xuXHRwdWJsaWMgc3RhdGljIGFkZENvbW1hcyggbnVtOiBhbnksIHJvdW5kVXA6IGJvb2xlYW4gPSBmYWxzZSwgaXNBZGRaZXJvOiBib29sZWFuID0gdHJ1ZSApOiBzdHJpbmcge1xuXHRcdG51bSA9IE51bWJlclNlcnZpY2UuY3V0T2ZmRmxvYXROdW1iZXIoIG51bSApO1xuXHRcdG51bSA9IHJvdW5kVXAgPyBOdW1iZXJTZXJ2aWNlLnJvdW5kVXAoIG51bSwgMTAgKSA6IG51bTtcblxuXHRcdGlmICggaXNBZGRaZXJvICkgbnVtID0gTnVtYmVyU2VydmljZS5hZGRaZXJvKCBudW0gKTtcblxuXHRcdG51bSArPSAnJztcblxuXHRcdGNvbnN0IHg6IGFueSA9IG51bS5zcGxpdCggJy4nICk7XG5cdFx0Y29uc3QgeDI6IGFueSA9IHgubGVuZ3RoID4gMSA/ICcuJyArIHhbIDEgXSA6ICcnO1xuXHRcdGNvbnN0IHJneDogUmVnRXhwID0gLyhcXGQrKShcXGR7M30pLztcblxuXHRcdGxldCB4MTogYW55ID0geFsgMCBdO1xuXG5cdFx0d2hpbGUgKCByZ3gudGVzdCggeDEgKSApIHtcblx0XHRcdHgxID0geDEucmVwbGFjZSggcmd4LCAnJDEnICsgJywnICsgJyQyJyApO1xuXHRcdH1cblxuXHRcdHJldHVybiB4MSArIHgyO1xuXHR9XG5cblx0LyoqXG5cdCogQWRkIHplcm8gYmVmb3JlIG51bWJlclxuXHQqIEBzdGF0aWNcblx0KiBAcGFyYW0ge251bWJlcn0gbnVtXG5cdCogQHJldHVybiB7c3RyaW5nfSBudW1iZXIgd2l0aCB6ZXJvXG5cdCovXG5cdHB1YmxpYyBzdGF0aWMgYWRkWmVybyggbnVtOiBudW1iZXIgKTogc3RyaW5nIHtcblx0XHRudW0gPSBOdW1iZXJTZXJ2aWNlLmN1dE9mZkZsb2F0TnVtYmVyKCBudW0gKTtcblx0XHRyZXR1cm4gKCBudW0gPiAwICYmIG51bSA8IDEwICYmIG51bSAlIDEgPT09IDAgPyAnMCcgOiAnJyApICsgbnVtO1xuXHR9XG5cblx0LyoqXG5cdCogUm91bmQgcGVyY2VudCBudW1iZXJcblx0KiBAc3RhdGljXG5cdCogQHBhcmFtIHtudW1iZXJ9IG51bVxuXHQqIEByZXR1cm4ge251bWJlcn0gUm91bmRlZCBwZXJjZW50IG51bWJlclxuXHQqL1xuXHRwdWJsaWMgc3RhdGljIHBlcmNlbnRSb3VuZCggbnVtOiBudW1iZXIgKTogbnVtYmVyIHtcblx0XHRudW0gPSBOdW1iZXJTZXJ2aWNlLmN1dE9mZkZsb2F0TnVtYmVyKCBudW0gKTtcblx0XHRyZXR1cm4gTWF0aC5yb3VuZCggbnVtICogMTAwICkgLyAxMDA7XG5cdH1cblxuXHQvKipcblx0KiBSb3VuZCB1cCBudW1iZXJcblx0KiBAc3RhdGljXG5cdCogQHBhcmFtIHtudW1iZXJ9IG51bVxuXHQqIEBwYXJhbSB7bnVtYmVyfSBwcmVjaXNpb25cblx0KiBAcmV0dXJuIHtudW1iZXJ9IFJvdW5kZWQgdXAgbnVtYmVyXG5cdCovXG5cdHB1YmxpYyBzdGF0aWMgcm91bmRVcCggbnVtOiBudW1iZXIsIHByZWNpc2lvbjogbnVtYmVyICk6IG51bWJlciB7XG5cdFx0bnVtID0gTnVtYmVyU2VydmljZS5jdXRPZmZGbG9hdE51bWJlciggbnVtICk7XG5cdFx0bnVtID0gTWF0aC5jZWlsKCBudW0gKTtcblxuXHRcdHJldHVybiBudW0gPiBwcmVjaXNpb24gPyBNYXRoLnJvdW5kKCBudW0gLyBwcmVjaXNpb24gKSAqIHByZWNpc2lvbiA6IG51bTtcblx0fVxuXG5cdC8qKlxuXHQqIEsgRm9ybWF0dGVyXG5cdCogQHN0YXRpY1xuXHQqIEBwYXJhbSB7bnVtYmVyfSBudW1cblx0KiBAcmV0dXJuIHtudW1iZXJ9IEsgZm9ybWF0dGVyIG51bWJlclxuXHQqL1xuXHRwdWJsaWMgc3RhdGljIGtGb3JtYXR0ZXIoIG51bTogbnVtYmVyICk6IHN0cmluZyB7XG5cdFx0bnVtID0gTnVtYmVyU2VydmljZS5jdXRPZmZGbG9hdE51bWJlciggbnVtICk7XG5cblx0XHRpZiAoIG51bSA+PSAxMDAwMDAwMDAwICkge1xuXHRcdFx0cmV0dXJuIE51bWJlclNlcnZpY2UuYWRkQ29tbWFzKFxuXHRcdFx0XHQoIG51bSAvIDEwMDAwMDAwMDAgKS50b0ZpeGVkKCAxICkucmVwbGFjZSggL1xcLjAkLywgJycgKSxcblx0XHRcdFx0ZmFsc2UsIGZhbHNlXG5cdFx0XHQpICsgJ0InO1xuXHRcdH1cblxuXHRcdGlmICggbnVtID49IDEwMDAwMDAgKSB7XG5cdFx0XHRyZXR1cm4gTnVtYmVyU2VydmljZS5hZGRDb21tYXMoXG5cdFx0XHRcdCggbnVtIC8gMTAwMDAwMCApLnRvRml4ZWQoIDEgKS5yZXBsYWNlKCAvXFwuMCQvLCAnJyApLFxuXHRcdFx0XHRmYWxzZSwgZmFsc2Vcblx0XHRcdCkgKyAnTSc7XG5cdFx0fVxuXG5cdFx0aWYgKCBudW0gPj0gMTAwMCApIHtcblx0XHRcdHJldHVybiBOdW1iZXJTZXJ2aWNlLmFkZENvbW1hcyhcblx0XHRcdFx0KCBudW0gLyAxMDAwICkudG9GaXhlZCggMSApLnJlcGxhY2UoIC9cXC4wJC8sICcnICksXG5cdFx0XHRcdGZhbHNlLCBmYWxzZVxuXHRcdFx0KSArICdLJztcblx0XHR9XG5cblx0XHRyZXR1cm4gTnVtYmVyU2VydmljZS5hZGRDb21tYXMoIG51bSApO1xuXHR9XG5cblx0LyoqXG5cdCogRmlsZSBzaXplIGZvcm1hdHRlclxuXHQqIEBzdGF0aWNcblx0KiBAcGFyYW0ge251bWJlcn0gZmlsZVNpemVcblx0KiBAcmV0dXJuIHtzdHJpbmd9XG5cdCovXG5cdHB1YmxpYyBzdGF0aWMgZmlsZVNpemVGb3JtYXR0ZXIoIGZpbGVTaXplOiBudW1iZXIgKTogc3RyaW5nIHtcblx0XHRpZiAoICFmaWxlU2l6ZSB8fCBpc05hTiggZmlsZVNpemUgKSApIGZpbGVTaXplID0gMDtcblxuXHRcdGlmICggZmlsZVNpemUgPj0gMTA0ODU3NiApIHtcblx0XHRcdHJldHVybiBOdW1iZXJTZXJ2aWNlLmFkZENvbW1hcyggKCBmaWxlU2l6ZSAvIDEwMjQgLyAxMDI0ICkudG9GaXhlZCggMiApICkgKyAnTUInO1xuXHRcdH1cblxuXHRcdGlmICggZmlsZVNpemUgPj0gMTAyNCApIHtcblx0XHRcdHJldHVybiBOdW1iZXJTZXJ2aWNlLmFkZENvbW1hcyggKCBmaWxlU2l6ZSAvIDEwMjQgKS50b0ZpeGVkKCAyICkgKSArICdLQic7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIE51bWJlclNlcnZpY2UuYWRkQ29tbWFzKCBmaWxlU2l6ZS50b0ZpeGVkKCAyICkgKSArICdCJztcblx0fVxuXG5cdC8qKlxuXHQqIEN1dCBvZmYgZmxvYXQgbnVtYmVyXG5cdCogQHN0YXRpY1xuXHQqIEBwYXJhbSB7bnVtYmVyfSBudW1cblx0KiBAcGFyYW0ge251bWJlcn0gZGlnaXRzXG5cdCogQHJldHVybiB7bnVtYmVyfSBDdXQgb2ZmIG51bWJlclxuXHQqL1xuXHRwdWJsaWMgc3RhdGljIGN1dE9mZkZsb2F0TnVtYmVyKCBudW06IG51bWJlciwgZGlnaXRzOiBudW1iZXIgPSAyICk6IG51bWJlciB7XG5cdFx0aWYgKCAhbnVtIHx8IGlzTmFOKCBudW0gKSApIHJldHVybiAwO1xuXG5cdFx0cmV0dXJuICtwYXJzZUZsb2F0KCBudW0udG9TdHJpbmcoKSApLnRvRml4ZWQoIG51bSAlIDEgPT09IDAgPyAwIDogZGlnaXRzICk7XG5cdH1cblxuXHQvKipcblx0KiBQYWQgbnVtYmVyIGZvcm1hdHRlclxuXHQqIEBzdGF0aWNcblx0KiBAcGFyYW0ge2RvdWJsZX0gbnVtXG5cdCogQHBhcmFtIHtpbnR9IHNpemVcblx0KiBAcmV0dXJuIHtzdHJpbmd9XG5cdCovXG5cdHB1YmxpYyBzdGF0aWMgcGFkTnVtYmVyRm9ybWF0dGVyKCBudW06IG51bWJlciwgc2l6ZTogbnVtYmVyICk6IHN0cmluZyB7XG5cdFx0Y29uc3Qgczogc3RyaW5nID0gU3RyaW5nKCBudW0gKTtcblx0XHRyZXR1cm4gcy5wYWRTdGFydCggc2l6ZSwgJzAnICk7XG5cdH1cblxufVxuIl19