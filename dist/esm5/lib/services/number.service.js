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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNvcmUvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvbnVtYmVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsV0FBVztBQUNYO0lBQUE7SUFzS0EsQ0FBQztJQXBLQTs7Ozs7OztNQU9FO0lBQ1kscUJBQU8sR0FBckIsVUFBdUIsR0FBVyxFQUFFLEdBQVcsRUFBRSxLQUFzQjtRQUF0QixzQkFBQSxFQUFBLGFBQXNCO1FBQ3RFLElBQUksT0FBTyxHQUFXLEdBQUcsS0FBSyxDQUFDO1lBQzlCLENBQUMsQ0FBQyxDQUFFLENBQUUsR0FBRyxHQUFHLEdBQUcsQ0FBRSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUUsR0FBRyxDQUFFLEdBQUcsR0FBRyxDQUFFO1lBQzNDLENBQUMsQ0FBQyxDQUFFLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7UUFDM0IsSUFBSSxRQUFRLEdBQVksSUFBSSxDQUFDO1FBRTdCLElBQUssT0FBTyxHQUFHLENBQUMsRUFBRztZQUNsQixPQUFPLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDZCxRQUFRLEdBQUcsS0FBSyxDQUFDO1NBQ2pCO1FBRUQsSUFBSyxDQUFDLEtBQUssQ0FBRSxPQUFPLENBQUUsRUFBRztZQUN4QixPQUFPLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFFLE9BQU8sQ0FBRSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFFLE9BQU8sQ0FBRSxDQUFDO1NBQ2hGO2FBQU07WUFDTixPQUFPLEdBQUcsQ0FBQyxDQUFDO1NBQ1o7UUFFRCxPQUFPLEVBQUUsUUFBUSxVQUFBLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxDQUFDO0lBQ3RDLENBQUM7SUFFRDs7Ozs7OztNQU9FO0lBQ1ksOEJBQWdCLEdBQTlC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QUFDLE9BQU8sQ0FBRSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUUsQ0FBQztJQUM1RSxDQUFDO0lBRUQ7Ozs7OztNQU1FO0lBQ1ksZ0NBQWtCLEdBQWhDLFVBQWtDLEdBQVcsRUFBRSxJQUFZO1FBQzFELElBQU0sQ0FBQyxHQUFXLE1BQU0sQ0FBRSxHQUFHLENBQUUsQ0FBQztRQUNoQyxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBRSxDQUFDO0lBQ2hDLENBQUM7SUFFRixvQkFBQztBQUFELENBQUMsQUF0S0QsSUFzS0MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZHluYW1pY1xuZXhwb3J0IGNsYXNzIE51bWJlclNlcnZpY2Uge1xuXG5cdC8qKlxuXHQqIENhbGN1bGF0ZSBwZXJjZW50IHdpdGggMiBudW1iZXJzXG5cdCogQHN0YXRpY1xuXHQqIEBwYXJhbSB7bnVtYmVyfSBjdXJcblx0KiBAcGFyYW0ge251bWJlcn0gcHJlXG5cdCogQHBhcmFtIHtib29sZWFufSByb3VuZCAtIEZsYWcgdG8gcm91bmQgcGVyY2VudFxuXHQqIEByZXR1cm4ge2FueX0gUGVyY2VudCBudW1iZXIgJiBpbmNyZWFtZW50XG5cdCovXG5cdHB1YmxpYyBzdGF0aWMgcGVyY2VudCggY3VyOiBudW1iZXIsIHByZTogbnVtYmVyLCByb3VuZDogYm9vbGVhbiA9IGZhbHNlICk6IGFueSB7XG5cdFx0bGV0IHBlcmNlbnQ6IG51bWJlciA9IHByZSAhPT0gMFxuXHRcdFx0PyAoICggY3VyIC0gcHJlICkgLyBNYXRoLmFicyggcHJlICkgKiAxMDAgKVxuXHRcdFx0OiAoIGN1ciAhPT0gMCA/IDEwMCA6IDAgKTtcblx0XHRsZXQgaW5jcmVhc2U6IGJvb2xlYW4gPSB0cnVlO1xuXG5cdFx0aWYgKCBwZXJjZW50IDwgMCApIHtcblx0XHRcdHBlcmNlbnQgKj0gLTE7XG5cdFx0XHRpbmNyZWFzZSA9IGZhbHNlO1xuXHRcdH1cblxuXHRcdGlmICggIWlzTmFOKCBwZXJjZW50ICkgKSB7XG5cdFx0XHRwZXJjZW50ID0gcm91bmQgPyBNYXRoLnJvdW5kKCBwZXJjZW50ICkgOiBOdW1iZXJTZXJ2aWNlLnBlcmNlbnRSb3VuZCggcGVyY2VudCApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRwZXJjZW50ID0gMDtcblx0XHR9XG5cblx0XHRyZXR1cm4geyBpbmNyZWFzZSwgbnVtYmVyOiBwZXJjZW50IH07XG5cdH1cblxuXHQvKipcblx0KiBDYWxjdWxhdGUgcGVyY2VudCB3aXRoIHRvdGFsXG5cdCogQHN0YXRpY1xuXHQqIEBwYXJhbSB7bnVtYmVyfSBwYXJ0XG5cdCogQHBhcmFtIHtudW1iZXJ9IHRvdGFsXG5cdCogQHBhcmFtIHtib29sZWFufSByb3VuZCAtIEZsYWcgdG8gcm91bmQgcGVyY2VudFxuXHQqIEByZXR1cm4ge251bWJlcn0gUGVyY2VudCBudW1iZXJcblx0Ki9cblx0cHVibGljIHN0YXRpYyBwZXJjZW50V2l0aFRvdGFsKCBwYXJ0OiBudW1iZXIsIHRvdGFsOiBudW1iZXIsIHJvdW5kOiBib29sZWFuID0gZmFsc2UgKTogbnVtYmVyIHtcblx0XHRjb25zdCBwZXJjZW50OiBudW1iZXIgPSB0b3RhbCA+IDAgPyBwYXJ0ICogMSAqIDEwMCAvIHRvdGFsIDogMDtcblx0XHRyZXR1cm4gcm91bmQgPyBNYXRoLnJvdW5kKCBwZXJjZW50ICkgOiBOdW1iZXJTZXJ2aWNlLnBlcmNlbnRSb3VuZCggcGVyY2VudCApO1xuXHR9XG5cblx0LyoqXG5cdCogQWRkIGNvbW1hcyBmb3IgdGhvdWRzYW5kIG51bWJlclxuXHQqIEBzdGF0aWNcblx0KiBAcGFyYW0ge251bWJlcn0gbnVtXG5cdCogQHBhcmFtIHtib29sZWFufSByb3VuZFVwIC0gRmxhZyB0byByb3VuZCBudW1iZXJcblx0KiBAcGFyYW0ge2Jvb2xlYW59IGlzQWRkWmVybyAtIEZsYWcgdG8gYWRkIHByZWZpeCB6ZXJvXG5cdCogQHJldHVybiB7c3RyaW5nfSBDb21tYXMgc3RyaW5nXG5cdCovXG5cdHB1YmxpYyBzdGF0aWMgYWRkQ29tbWFzKCBudW06IGFueSwgcm91bmRVcDogYm9vbGVhbiA9IGZhbHNlLCBpc0FkZFplcm86IGJvb2xlYW4gPSB0cnVlICk6IHN0cmluZyB7XG5cdFx0bnVtID0gTnVtYmVyU2VydmljZS5jdXRPZmZGbG9hdE51bWJlciggbnVtICk7XG5cdFx0bnVtID0gcm91bmRVcCA/IE51bWJlclNlcnZpY2Uucm91bmRVcCggbnVtLCAxMCApIDogbnVtO1xuXG5cdFx0aWYgKCBpc0FkZFplcm8gKSBudW0gPSBOdW1iZXJTZXJ2aWNlLmFkZFplcm8oIG51bSApO1xuXG5cdFx0bnVtICs9ICcnO1xuXG5cdFx0Y29uc3QgeDogYW55ID0gbnVtLnNwbGl0KCAnLicgKTtcblx0XHRjb25zdCB4MjogYW55ID0geC5sZW5ndGggPiAxID8gJy4nICsgeFsgMSBdIDogJyc7XG5cdFx0Y29uc3Qgcmd4OiBSZWdFeHAgPSAvKFxcZCspKFxcZHszfSkvO1xuXG5cdFx0bGV0IHgxOiBhbnkgPSB4WyAwIF07XG5cblx0XHR3aGlsZSAoIHJneC50ZXN0KCB4MSApICkge1xuXHRcdFx0eDEgPSB4MS5yZXBsYWNlKCByZ3gsICckMScgKyAnLCcgKyAnJDInICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHgxICsgeDI7XG5cdH1cblxuXHQvKipcblx0KiBBZGQgemVybyBiZWZvcmUgbnVtYmVyXG5cdCogQHN0YXRpY1xuXHQqIEBwYXJhbSB7bnVtYmVyfSBudW1cblx0KiBAcmV0dXJuIHtzdHJpbmd9IG51bWJlciB3aXRoIHplcm9cblx0Ki9cblx0cHVibGljIHN0YXRpYyBhZGRaZXJvKCBudW06IG51bWJlciApOiBzdHJpbmcge1xuXHRcdG51bSA9IE51bWJlclNlcnZpY2UuY3V0T2ZmRmxvYXROdW1iZXIoIG51bSApO1xuXHRcdHJldHVybiAoIG51bSA+IDAgJiYgbnVtIDwgMTAgJiYgbnVtICUgMSA9PT0gMCA/ICcwJyA6ICcnICkgKyBudW07XG5cdH1cblxuXHQvKipcblx0KiBSb3VuZCBwZXJjZW50IG51bWJlclxuXHQqIEBzdGF0aWNcblx0KiBAcGFyYW0ge251bWJlcn0gbnVtXG5cdCogQHJldHVybiB7bnVtYmVyfSBSb3VuZGVkIHBlcmNlbnQgbnVtYmVyXG5cdCovXG5cdHB1YmxpYyBzdGF0aWMgcGVyY2VudFJvdW5kKCBudW06IG51bWJlciApOiBudW1iZXIge1xuXHRcdG51bSA9IE51bWJlclNlcnZpY2UuY3V0T2ZmRmxvYXROdW1iZXIoIG51bSApO1xuXHRcdHJldHVybiBNYXRoLnJvdW5kKCBudW0gKiAxMDAgKSAvIDEwMDtcblx0fVxuXG5cdC8qKlxuXHQqIFJvdW5kIHVwIG51bWJlclxuXHQqIEBzdGF0aWNcblx0KiBAcGFyYW0ge251bWJlcn0gbnVtXG5cdCogQHBhcmFtIHtudW1iZXJ9IHByZWNpc2lvblxuXHQqIEByZXR1cm4ge251bWJlcn0gUm91bmRlZCB1cCBudW1iZXJcblx0Ki9cblx0cHVibGljIHN0YXRpYyByb3VuZFVwKCBudW06IG51bWJlciwgcHJlY2lzaW9uOiBudW1iZXIgKTogbnVtYmVyIHtcblx0XHRudW0gPSBOdW1iZXJTZXJ2aWNlLmN1dE9mZkZsb2F0TnVtYmVyKCBudW0gKTtcblx0XHRudW0gPSBNYXRoLmNlaWwoIG51bSApO1xuXG5cdFx0cmV0dXJuIG51bSA+IHByZWNpc2lvbiA/IE1hdGgucm91bmQoIG51bSAvIHByZWNpc2lvbiApICogcHJlY2lzaW9uIDogbnVtO1xuXHR9XG5cblx0LyoqXG5cdCogSyBGb3JtYXR0ZXJcblx0KiBAc3RhdGljXG5cdCogQHBhcmFtIHtudW1iZXJ9IG51bVxuXHQqIEByZXR1cm4ge251bWJlcn0gSyBmb3JtYXR0ZXIgbnVtYmVyXG5cdCovXG5cdHB1YmxpYyBzdGF0aWMga0Zvcm1hdHRlciggbnVtOiBudW1iZXIgKTogc3RyaW5nIHtcblx0XHRudW0gPSBOdW1iZXJTZXJ2aWNlLmN1dE9mZkZsb2F0TnVtYmVyKCBudW0gKTtcblxuXHRcdGlmICggbnVtID49IDEwMDAwMDAwMDAgKSB7XG5cdFx0XHRyZXR1cm4gTnVtYmVyU2VydmljZS5hZGRDb21tYXMoXG5cdFx0XHRcdCggbnVtIC8gMTAwMDAwMDAwMCApLnRvRml4ZWQoIDEgKS5yZXBsYWNlKCAvXFwuMCQvLCAnJyApLFxuXHRcdFx0XHRmYWxzZSwgZmFsc2Vcblx0XHRcdCkgKyAnQic7XG5cdFx0fVxuXG5cdFx0aWYgKCBudW0gPj0gMTAwMDAwMCApIHtcblx0XHRcdHJldHVybiBOdW1iZXJTZXJ2aWNlLmFkZENvbW1hcyhcblx0XHRcdFx0KCBudW0gLyAxMDAwMDAwICkudG9GaXhlZCggMSApLnJlcGxhY2UoIC9cXC4wJC8sICcnICksXG5cdFx0XHRcdGZhbHNlLCBmYWxzZVxuXHRcdFx0KSArICdNJztcblx0XHR9XG5cblx0XHRpZiAoIG51bSA+PSAxMDAwICkge1xuXHRcdFx0cmV0dXJuIE51bWJlclNlcnZpY2UuYWRkQ29tbWFzKFxuXHRcdFx0XHQoIG51bSAvIDEwMDAgKS50b0ZpeGVkKCAxICkucmVwbGFjZSggL1xcLjAkLywgJycgKSxcblx0XHRcdFx0ZmFsc2UsIGZhbHNlXG5cdFx0XHQpICsgJ0snO1xuXHRcdH1cblxuXHRcdHJldHVybiBOdW1iZXJTZXJ2aWNlLmFkZENvbW1hcyggbnVtICk7XG5cdH1cblxuXHQvKipcblx0KiBDdXQgb2ZmIGZsb2F0IG51bWJlclxuXHQqIEBzdGF0aWNcblx0KiBAcGFyYW0ge251bWJlcn0gbnVtXG5cdCogQHBhcmFtIHtudW1iZXJ9IGRpZ2l0c1xuXHQqIEByZXR1cm4ge251bWJlcn0gQ3V0IG9mZiBudW1iZXJcblx0Ki9cblx0cHVibGljIHN0YXRpYyBjdXRPZmZGbG9hdE51bWJlciggbnVtOiBudW1iZXIsIGRpZ2l0czogbnVtYmVyID0gMiApIHtcblx0XHRpZiAoICFudW0gfHwgaXNOYU4oIG51bSApICkgcmV0dXJuIDA7XG5cblx0XHRyZXR1cm4gK3BhcnNlRmxvYXQoIG51bS50b1N0cmluZygpICkudG9GaXhlZCggbnVtICUgMSA9PT0gMCA/IDAgOiBkaWdpdHMgKTtcblx0fVxuXG5cdC8qKlxuXHQqIFBhZCBudW1iZXIgZm9ybWF0dGVyXG5cdCogQHN0YXRpY1xuXHQqIEBwYXJhbSB7ZG91YmxlfSBudW1cblx0KiBAcGFyYW0ge2ludH0gc2l6ZVxuXHQqIEByZXR1cm4ge3N0cmluZ31cblx0Ki9cblx0cHVibGljIHN0YXRpYyBwYWROdW1iZXJGb3JtYXR0ZXIoIG51bTogbnVtYmVyLCBzaXplOiBudW1iZXIgKSB7XG5cdFx0Y29uc3Qgczogc3RyaW5nID0gU3RyaW5nKCBudW0gKTtcblx0XHRyZXR1cm4gcy5wYWRTdGFydCggc2l6ZSwgJzAnICk7XG5cdH1cblxufVxuIl19