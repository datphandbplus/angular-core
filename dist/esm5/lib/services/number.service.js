// @dynamic
var NumberService = /** @class */ (function () {
    function NumberService() {
    }
    /**
    * Calculate percent with 2 numbers
    * @static
    * @param {number} cur
    * @param {number} pre
    * @param {boolean} round - Flag to round percent
    * @return {any} Percent number & increament
    */
    NumberService.percent = function (cur, pre, round) {
        if (round === void 0) { round = false; }
        var percent = pre !== 0
            ? ((cur - pre) / Math.abs(pre) * 100)
            : (cur !== 0 ? 100 : 0);
        var increase = true;
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
        return { increase: increase, number: percent };
    };
    /**
    * Calculate percent with total
    * @static
    * @param {number} part
    * @param {number} total
    * @param {boolean} round - Flag to round percent
    * @return {number} Percent number
    */
    NumberService.percentWithTotal = function (part, total, round) {
        if (round === void 0) { round = false; }
        var percent = total > 0 ? part * 1 * 100 / total : 0;
        return round ? Math.round(percent) : NumberService.percentRound(percent);
    };
    /**
    * Add commas for thoudsand number
    * @static
    * @param {number} num
    * @param {boolean} roundUp - Flag to round number
    * @param {boolean} isAddZero - Flag to add prefix zero
    * @return {string} Commas string
    */
    NumberService.addCommas = function (num, roundUp, isAddZero) {
        if (roundUp === void 0) { roundUp = false; }
        if (isAddZero === void 0) { isAddZero = true; }
        num = NumberService.cutOffFloatNumber(num);
        num = roundUp ? NumberService.roundUp(num, 10) : num;
        if (isAddZero)
            num = NumberService.addZero(num);
        num += '';
        var x = num.split('.');
        var x2 = x.length > 1 ? '.' + x[1] : '';
        var rgx = /(\d+)(\d{3})/;
        var x1 = x[0];
        while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' + ',' + '$2');
        }
        return x1 + x2;
    };
    /**
    * Add zero before number
    * @static
    * @param {number} num
    * @return {string} number with zero
    */
    NumberService.addZero = function (num) {
        num = NumberService.cutOffFloatNumber(num);
        return (num > 0 && num < 10 && num % 1 === 0 ? '0' : '') + num;
    };
    /**
    * Round percent number
    * @static
    * @param {number} num
    * @return {number} Rounded percent number
    */
    NumberService.percentRound = function (num) {
        num = NumberService.cutOffFloatNumber(num);
        return Math.round(num * 100) / 100;
    };
    /**
    * Round up number
    * @static
    * @param {number} num
    * @param {number} precision
    * @return {number} Rounded up number
    */
    NumberService.roundUp = function (num, precision) {
        num = NumberService.cutOffFloatNumber(num);
        num = Math.ceil(num);
        return num > precision ? Math.round(num / precision) * precision : num;
    };
    /**
    * K Formatter
    * @static
    * @param {number} num
    * @return {number} K formatter number
    */
    NumberService.kFormatter = function (num) {
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
    };
    /**
    * File size formatter
    * @static
    * @param {number} fileSize
    * @return {string}
    */
    NumberService.fileSizeFormatter = function (fileSize) {
        if (!fileSize || isNaN(fileSize))
            fileSize = 0;
        if (fileSize >= 1048576) {
            return NumberService.addCommas((fileSize / 1024 / 1024).toFixed(2)) + 'MB';
        }
        if (fileSize >= 1024) {
            return NumberService.addCommas((fileSize / 1024).toFixed(2)) + 'KB';
        }
        return NumberService.addCommas(fileSize.toFixed(2)) + 'B';
    };
    /**
    * Cut off float number
    * @static
    * @param {number} num
    * @param {number} digits
    * @return {number} Cut off number
    */
    NumberService.cutOffFloatNumber = function (num, digits) {
        if (digits === void 0) { digits = 2; }
        if (!num || isNaN(num))
            return 0;
        return +parseFloat(num.toString()).toFixed(num % 1 === 0 ? 0 : digits);
    };
    /**
    * Pad number formatter
    * @static
    * @param {double} num
    * @param {int} size
    * @return {string}
    */
    NumberService.padNumberFormatter = function (num, size) {
        var s = String(num);
        return s.padStart(size, '0');
    };
    return NumberService;
}());
export { NumberService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNvcmUvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvbnVtYmVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsV0FBVztBQUNYO0lBQUE7SUEwTEEsQ0FBQztJQXhMQTs7Ozs7OztNQU9FO0lBQ1kscUJBQU8sR0FBckIsVUFBdUIsR0FBVyxFQUFFLEdBQVcsRUFBRSxLQUFzQjtRQUF0QixzQkFBQSxFQUFBLGFBQXNCO1FBQ3RFLElBQUksT0FBTyxHQUFXLEdBQUcsS0FBSyxDQUFDO1lBQzlCLENBQUMsQ0FBQyxDQUFFLENBQUUsR0FBRyxHQUFHLEdBQUcsQ0FBRSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUUsR0FBRyxDQUFFLEdBQUcsR0FBRyxDQUFFO1lBQzNDLENBQUMsQ0FBQyxDQUFFLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7UUFDM0IsSUFBSSxRQUFRLEdBQVksSUFBSSxDQUFDO1FBRTdCLElBQUssT0FBTyxHQUFHLENBQUMsRUFBRztZQUNsQixPQUFPLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDZCxRQUFRLEdBQUcsS0FBSyxDQUFDO1NBQ2pCO1FBRUQsSUFBSyxDQUFDLEtBQUssQ0FBRSxPQUFPLENBQUUsRUFBRztZQUN4QixPQUFPLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFFLE9BQU8sQ0FBRSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFFLE9BQU8sQ0FBRSxDQUFDO1NBQ2hGO2FBQU07WUFDTixPQUFPLEdBQUcsQ0FBQyxDQUFDO1NBQ1o7UUFFRCxPQUFPLEVBQUUsUUFBUSxVQUFBLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxDQUFDO0lBQ3RDLENBQUM7SUFFRDs7Ozs7OztNQU9FO0lBQ1ksOEJBQWdCLEdBQTlC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LEdBQUcsSUFBSSxDQUFFLENBQUMsT0FBTyxDQUFFLENBQUMsQ0FBRSxDQUFFLEdBQUcsSUFBSSxDQUFDO1NBQ2pGO1FBRUQsSUFBSyxRQUFRLElBQUksSUFBSSxFQUFHO1lBQ3ZCLE9BQU8sYUFBYSxDQUFDLFNBQVMsQ0FBRSxDQUFFLFFBQVEsR0FBRyxJQUFJLENBQUUsQ0FBQyxPQUFPLENBQUUsQ0FBQyxDQUFFLENBQUUsR0FBRyxJQUFJLENBQUM7U0FDMUU7UUFFRCxPQUFPLGFBQWEsQ0FBQyxTQUFTLENBQUUsUUFBUSxDQUFDLE9BQU8sQ0FBRSxDQUFDLENBQUUsQ0FBRSxHQUFHLEdBQUcsQ0FBQztJQUMvRCxDQUFDO0lBRUQ7Ozs7OztNQU1FO0lBQ1ksK0JBQWlCLEdBQS9CLFVBQWlDLEdBQVcsRUFBRSxNQUFrQjtRQUFsQix1QkFBQSxFQUFBLFVBQWtCO1FBQy9ELElBQUssQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFFLEdBQUcsQ0FBRTtZQUFHLE9BQU8sQ0FBQyxDQUFDO1FBRXJDLE9BQU8sQ0FBQyxVQUFVLENBQUUsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFFLENBQUMsT0FBTyxDQUFFLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBRSxDQUFDO0lBQzVFLENBQUM7SUFFRDs7Ozs7O01BTUU7SUFDWSxnQ0FBa0IsR0FBaEMsVUFBa0MsR0FBVyxFQUFFLElBQVk7UUFDMUQsSUFBTSxDQUFDLEdBQVcsTUFBTSxDQUFFLEdBQUcsQ0FBRSxDQUFDO1FBQ2hDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBRSxJQUFJLEVBQUUsR0FBRyxDQUFFLENBQUM7SUFDaEMsQ0FBQztJQUVGLG9CQUFDO0FBQUQsQ0FBQyxBQTFMRCxJQTBMQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBkeW5hbWljXG5leHBvcnQgY2xhc3MgTnVtYmVyU2VydmljZSB7XG5cblx0LyoqXG5cdCogQ2FsY3VsYXRlIHBlcmNlbnQgd2l0aCAyIG51bWJlcnNcblx0KiBAc3RhdGljXG5cdCogQHBhcmFtIHtudW1iZXJ9IGN1clxuXHQqIEBwYXJhbSB7bnVtYmVyfSBwcmVcblx0KiBAcGFyYW0ge2Jvb2xlYW59IHJvdW5kIC0gRmxhZyB0byByb3VuZCBwZXJjZW50XG5cdCogQHJldHVybiB7YW55fSBQZXJjZW50IG51bWJlciAmIGluY3JlYW1lbnRcblx0Ki9cblx0cHVibGljIHN0YXRpYyBwZXJjZW50KCBjdXI6IG51bWJlciwgcHJlOiBudW1iZXIsIHJvdW5kOiBib29sZWFuID0gZmFsc2UgKTogYW55IHtcblx0XHRsZXQgcGVyY2VudDogbnVtYmVyID0gcHJlICE9PSAwXG5cdFx0XHQ/ICggKCBjdXIgLSBwcmUgKSAvIE1hdGguYWJzKCBwcmUgKSAqIDEwMCApXG5cdFx0XHQ6ICggY3VyICE9PSAwID8gMTAwIDogMCApO1xuXHRcdGxldCBpbmNyZWFzZTogYm9vbGVhbiA9IHRydWU7XG5cblx0XHRpZiAoIHBlcmNlbnQgPCAwICkge1xuXHRcdFx0cGVyY2VudCAqPSAtMTtcblx0XHRcdGluY3JlYXNlID0gZmFsc2U7XG5cdFx0fVxuXG5cdFx0aWYgKCAhaXNOYU4oIHBlcmNlbnQgKSApIHtcblx0XHRcdHBlcmNlbnQgPSByb3VuZCA/IE1hdGgucm91bmQoIHBlcmNlbnQgKSA6IE51bWJlclNlcnZpY2UucGVyY2VudFJvdW5kKCBwZXJjZW50ICk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHBlcmNlbnQgPSAwO1xuXHRcdH1cblxuXHRcdHJldHVybiB7IGluY3JlYXNlLCBudW1iZXI6IHBlcmNlbnQgfTtcblx0fVxuXG5cdC8qKlxuXHQqIENhbGN1bGF0ZSBwZXJjZW50IHdpdGggdG90YWxcblx0KiBAc3RhdGljXG5cdCogQHBhcmFtIHtudW1iZXJ9IHBhcnRcblx0KiBAcGFyYW0ge251bWJlcn0gdG90YWxcblx0KiBAcGFyYW0ge2Jvb2xlYW59IHJvdW5kIC0gRmxhZyB0byByb3VuZCBwZXJjZW50XG5cdCogQHJldHVybiB7bnVtYmVyfSBQZXJjZW50IG51bWJlclxuXHQqL1xuXHRwdWJsaWMgc3RhdGljIHBlcmNlbnRXaXRoVG90YWwoIHBhcnQ6IG51bWJlciwgdG90YWw6IG51bWJlciwgcm91bmQ6IGJvb2xlYW4gPSBmYWxzZSApOiBudW1iZXIge1xuXHRcdGNvbnN0IHBlcmNlbnQ6IG51bWJlciA9IHRvdGFsID4gMCA/IHBhcnQgKiAxICogMTAwIC8gdG90YWwgOiAwO1xuXHRcdHJldHVybiByb3VuZCA/IE1hdGgucm91bmQoIHBlcmNlbnQgKSA6IE51bWJlclNlcnZpY2UucGVyY2VudFJvdW5kKCBwZXJjZW50ICk7XG5cdH1cblxuXHQvKipcblx0KiBBZGQgY29tbWFzIGZvciB0aG91ZHNhbmQgbnVtYmVyXG5cdCogQHN0YXRpY1xuXHQqIEBwYXJhbSB7bnVtYmVyfSBudW1cblx0KiBAcGFyYW0ge2Jvb2xlYW59IHJvdW5kVXAgLSBGbGFnIHRvIHJvdW5kIG51bWJlclxuXHQqIEBwYXJhbSB7Ym9vbGVhbn0gaXNBZGRaZXJvIC0gRmxhZyB0byBhZGQgcHJlZml4IHplcm9cblx0KiBAcmV0dXJuIHtzdHJpbmd9IENvbW1hcyBzdHJpbmdcblx0Ki9cblx0cHVibGljIHN0YXRpYyBhZGRDb21tYXMoIG51bTogYW55LCByb3VuZFVwOiBib29sZWFuID0gZmFsc2UsIGlzQWRkWmVybzogYm9vbGVhbiA9IHRydWUgKTogc3RyaW5nIHtcblx0XHRudW0gPSBOdW1iZXJTZXJ2aWNlLmN1dE9mZkZsb2F0TnVtYmVyKCBudW0gKTtcblx0XHRudW0gPSByb3VuZFVwID8gTnVtYmVyU2VydmljZS5yb3VuZFVwKCBudW0sIDEwICkgOiBudW07XG5cblx0XHRpZiAoIGlzQWRkWmVybyApIG51bSA9IE51bWJlclNlcnZpY2UuYWRkWmVybyggbnVtICk7XG5cblx0XHRudW0gKz0gJyc7XG5cblx0XHRjb25zdCB4OiBhbnkgPSBudW0uc3BsaXQoICcuJyApO1xuXHRcdGNvbnN0IHgyOiBhbnkgPSB4Lmxlbmd0aCA+IDEgPyAnLicgKyB4WyAxIF0gOiAnJztcblx0XHRjb25zdCByZ3g6IFJlZ0V4cCA9IC8oXFxkKykoXFxkezN9KS87XG5cblx0XHRsZXQgeDE6IGFueSA9IHhbIDAgXTtcblxuXHRcdHdoaWxlICggcmd4LnRlc3QoIHgxICkgKSB7XG5cdFx0XHR4MSA9IHgxLnJlcGxhY2UoIHJneCwgJyQxJyArICcsJyArICckMicgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4geDEgKyB4Mjtcblx0fVxuXG5cdC8qKlxuXHQqIEFkZCB6ZXJvIGJlZm9yZSBudW1iZXJcblx0KiBAc3RhdGljXG5cdCogQHBhcmFtIHtudW1iZXJ9IG51bVxuXHQqIEByZXR1cm4ge3N0cmluZ30gbnVtYmVyIHdpdGggemVyb1xuXHQqL1xuXHRwdWJsaWMgc3RhdGljIGFkZFplcm8oIG51bTogbnVtYmVyICk6IHN0cmluZyB7XG5cdFx0bnVtID0gTnVtYmVyU2VydmljZS5jdXRPZmZGbG9hdE51bWJlciggbnVtICk7XG5cdFx0cmV0dXJuICggbnVtID4gMCAmJiBudW0gPCAxMCAmJiBudW0gJSAxID09PSAwID8gJzAnIDogJycgKSArIG51bTtcblx0fVxuXG5cdC8qKlxuXHQqIFJvdW5kIHBlcmNlbnQgbnVtYmVyXG5cdCogQHN0YXRpY1xuXHQqIEBwYXJhbSB7bnVtYmVyfSBudW1cblx0KiBAcmV0dXJuIHtudW1iZXJ9IFJvdW5kZWQgcGVyY2VudCBudW1iZXJcblx0Ki9cblx0cHVibGljIHN0YXRpYyBwZXJjZW50Um91bmQoIG51bTogbnVtYmVyICk6IG51bWJlciB7XG5cdFx0bnVtID0gTnVtYmVyU2VydmljZS5jdXRPZmZGbG9hdE51bWJlciggbnVtICk7XG5cdFx0cmV0dXJuIE1hdGgucm91bmQoIG51bSAqIDEwMCApIC8gMTAwO1xuXHR9XG5cblx0LyoqXG5cdCogUm91bmQgdXAgbnVtYmVyXG5cdCogQHN0YXRpY1xuXHQqIEBwYXJhbSB7bnVtYmVyfSBudW1cblx0KiBAcGFyYW0ge251bWJlcn0gcHJlY2lzaW9uXG5cdCogQHJldHVybiB7bnVtYmVyfSBSb3VuZGVkIHVwIG51bWJlclxuXHQqL1xuXHRwdWJsaWMgc3RhdGljIHJvdW5kVXAoIG51bTogbnVtYmVyLCBwcmVjaXNpb246IG51bWJlciApOiBudW1iZXIge1xuXHRcdG51bSA9IE51bWJlclNlcnZpY2UuY3V0T2ZmRmxvYXROdW1iZXIoIG51bSApO1xuXHRcdG51bSA9IE1hdGguY2VpbCggbnVtICk7XG5cblx0XHRyZXR1cm4gbnVtID4gcHJlY2lzaW9uID8gTWF0aC5yb3VuZCggbnVtIC8gcHJlY2lzaW9uICkgKiBwcmVjaXNpb24gOiBudW07XG5cdH1cblxuXHQvKipcblx0KiBLIEZvcm1hdHRlclxuXHQqIEBzdGF0aWNcblx0KiBAcGFyYW0ge251bWJlcn0gbnVtXG5cdCogQHJldHVybiB7bnVtYmVyfSBLIGZvcm1hdHRlciBudW1iZXJcblx0Ki9cblx0cHVibGljIHN0YXRpYyBrRm9ybWF0dGVyKCBudW06IG51bWJlciApOiBzdHJpbmcge1xuXHRcdG51bSA9IE51bWJlclNlcnZpY2UuY3V0T2ZmRmxvYXROdW1iZXIoIG51bSApO1xuXG5cdFx0aWYgKCBudW0gPj0gMTAwMDAwMDAwMCApIHtcblx0XHRcdHJldHVybiBOdW1iZXJTZXJ2aWNlLmFkZENvbW1hcyhcblx0XHRcdFx0KCBudW0gLyAxMDAwMDAwMDAwICkudG9GaXhlZCggMSApLnJlcGxhY2UoIC9cXC4wJC8sICcnICksXG5cdFx0XHRcdGZhbHNlLCBmYWxzZVxuXHRcdFx0KSArICdCJztcblx0XHR9XG5cblx0XHRpZiAoIG51bSA+PSAxMDAwMDAwICkge1xuXHRcdFx0cmV0dXJuIE51bWJlclNlcnZpY2UuYWRkQ29tbWFzKFxuXHRcdFx0XHQoIG51bSAvIDEwMDAwMDAgKS50b0ZpeGVkKCAxICkucmVwbGFjZSggL1xcLjAkLywgJycgKSxcblx0XHRcdFx0ZmFsc2UsIGZhbHNlXG5cdFx0XHQpICsgJ00nO1xuXHRcdH1cblxuXHRcdGlmICggbnVtID49IDEwMDAgKSB7XG5cdFx0XHRyZXR1cm4gTnVtYmVyU2VydmljZS5hZGRDb21tYXMoXG5cdFx0XHRcdCggbnVtIC8gMTAwMCApLnRvRml4ZWQoIDEgKS5yZXBsYWNlKCAvXFwuMCQvLCAnJyApLFxuXHRcdFx0XHRmYWxzZSwgZmFsc2Vcblx0XHRcdCkgKyAnSyc7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIE51bWJlclNlcnZpY2UuYWRkQ29tbWFzKCBudW0gKTtcblx0fVxuXG5cdC8qKlxuXHQqIEZpbGUgc2l6ZSBmb3JtYXR0ZXJcblx0KiBAc3RhdGljXG5cdCogQHBhcmFtIHtudW1iZXJ9IGZpbGVTaXplXG5cdCogQHJldHVybiB7c3RyaW5nfVxuXHQqL1xuXHRwdWJsaWMgc3RhdGljIGZpbGVTaXplRm9ybWF0dGVyKCBmaWxlU2l6ZTogbnVtYmVyICk6IHN0cmluZyB7XG5cdFx0aWYgKCAhZmlsZVNpemUgfHwgaXNOYU4oIGZpbGVTaXplICkgKSBmaWxlU2l6ZSA9IDA7XG5cblx0XHRpZiAoIGZpbGVTaXplID49IDEwNDg1NzYgKSB7XG5cdFx0XHRyZXR1cm4gTnVtYmVyU2VydmljZS5hZGRDb21tYXMoICggZmlsZVNpemUgLyAxMDI0IC8gMTAyNCApLnRvRml4ZWQoIDIgKSApICsgJ01CJztcblx0XHR9XG5cblx0XHRpZiAoIGZpbGVTaXplID49IDEwMjQgKSB7XG5cdFx0XHRyZXR1cm4gTnVtYmVyU2VydmljZS5hZGRDb21tYXMoICggZmlsZVNpemUgLyAxMDI0ICkudG9GaXhlZCggMiApICkgKyAnS0InO1xuXHRcdH1cblxuXHRcdHJldHVybiBOdW1iZXJTZXJ2aWNlLmFkZENvbW1hcyggZmlsZVNpemUudG9GaXhlZCggMiApICkgKyAnQic7XG5cdH1cblxuXHQvKipcblx0KiBDdXQgb2ZmIGZsb2F0IG51bWJlclxuXHQqIEBzdGF0aWNcblx0KiBAcGFyYW0ge251bWJlcn0gbnVtXG5cdCogQHBhcmFtIHtudW1iZXJ9IGRpZ2l0c1xuXHQqIEByZXR1cm4ge251bWJlcn0gQ3V0IG9mZiBudW1iZXJcblx0Ki9cblx0cHVibGljIHN0YXRpYyBjdXRPZmZGbG9hdE51bWJlciggbnVtOiBudW1iZXIsIGRpZ2l0czogbnVtYmVyID0gMiApOiBudW1iZXIge1xuXHRcdGlmICggIW51bSB8fCBpc05hTiggbnVtICkgKSByZXR1cm4gMDtcblxuXHRcdHJldHVybiArcGFyc2VGbG9hdCggbnVtLnRvU3RyaW5nKCkgKS50b0ZpeGVkKCBudW0gJSAxID09PSAwID8gMCA6IGRpZ2l0cyApO1xuXHR9XG5cblx0LyoqXG5cdCogUGFkIG51bWJlciBmb3JtYXR0ZXJcblx0KiBAc3RhdGljXG5cdCogQHBhcmFtIHtkb3VibGV9IG51bVxuXHQqIEBwYXJhbSB7aW50fSBzaXplXG5cdCogQHJldHVybiB7c3RyaW5nfVxuXHQqL1xuXHRwdWJsaWMgc3RhdGljIHBhZE51bWJlckZvcm1hdHRlciggbnVtOiBudW1iZXIsIHNpemU6IG51bWJlciApOiBzdHJpbmcge1xuXHRcdGNvbnN0IHM6IHN0cmluZyA9IFN0cmluZyggbnVtICk7XG5cdFx0cmV0dXJuIHMucGFkU3RhcnQoIHNpemUsICcwJyApO1xuXHR9XG5cbn1cbiJdfQ==