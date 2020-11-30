import _ from 'underscore';
import { LATIN_MAP } from '../resources';
// @dynamic
var UtilitiesService = /** @class */ (function () {
    function UtilitiesService() {
    }
    /**
    * Strip vietnamese symbol
    * @static
    * @param {string} str - String to strip
    * @return {string} Striped string
    */
    UtilitiesService.stripVietnameseSymbol = function (str) {
        return str.replace(/[^A-Za-z0-9]/g, function (x) {
            return LATIN_MAP[x] || x;
        });
    };
    /**
    * Get color
    * @static
    * @param {any} colors
    * @param {number} index
    * @return {string}
    */
    UtilitiesService.getColor = function (colors, index) {
        var colorArr = _.map(colors, function (color) { return color; });
        return index < 9
            ? colorArr[index]
            : 'rgb('
                + [
                    _.random(0, 255),
                    _.random(0, 255),
                    _.random(0, 255),
                ].join(',')
                + ')';
    };
    /**
    * Convert hex to rgba
    * @static
    * @param {string} hex
    * @param {number} opacity
    * @return {any}
    */
    UtilitiesService.hexToRgba = function (hex, opacity) {
        if (opacity === void 0) { opacity = 1; }
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result
            ? 'rgba('
                + [
                    parseInt(result[1], 16),
                    parseInt(result[2], 16),
                    parseInt(result[3], 16),
                    opacity,
                ].join(',')
                + ')'
            : null;
    };
    /**
    * Cpnvert mutli depth
    * @param {Array} items
    * @param {string} fieldKey
    * @param {string} fieldParentKey
    * @param {string} fieldName
    * @return {Array}
    */
    UtilitiesService.convertMultiDepth = function (items, fieldKey, fieldParentKey, fieldName) {
        if (fieldKey === void 0) { fieldKey = 'id'; }
        if (fieldParentKey === void 0) { fieldParentKey = 'parent_id'; }
        if (fieldName === void 0) { fieldName = 'name'; }
        var hashArr = {};
        _.each(_.sortBy(items, fieldName), function (item) {
            var parentIndex = item[fieldParentKey] || 0;
            if (!hashArr[parentIndex]) {
                hashArr[parentIndex] = [];
            }
            var parent = _.find(items, function (_item) {
                return _item[fieldKey] === parentIndex;
            });
            if (!parent) {
                hashArr[parentIndex].push(item);
                return;
            }
            var prefix = '--';
            while (parent && parent[fieldParentKey]) {
                parent = _.find(items, function (_item) {
                    return _item[fieldKey] === parent[fieldParentKey];
                });
                prefix += '--';
            }
            item.__name = [prefix, item[fieldName]].join(' ');
            hashArr[parentIndex].push(item);
        });
        return UtilitiesService.hierarhySort(hashArr, fieldKey, fieldName, hashArr ? _.keys(hashArr)[0] : 0);
    };
    /**
    * Hierarhy sort
    * @param {any} hashArr
    * @param {string} fieldKey
    * @param {string} fieldName
    * @param {number} key
    * @param {Array} result
    * @return {Array}
    */
    UtilitiesService.hierarhySort = function (hashArr, fieldKey, fieldName, key, result) {
        if (fieldKey === void 0) { fieldKey = 'id'; }
        if (fieldName === void 0) { fieldName = 'name'; }
        if (key === void 0) { key = 0; }
        if (result === void 0) { result = []; }
        if (!hashArr[key])
            return;
        var arr = hashArr[key].sort(function (a, b) { return a[fieldName] > b[fieldName]; });
        for (var i = 0; i < arr.length; i++) {
            result.push(arr[i]);
            UtilitiesService.hierarhySort(hashArr, fieldKey, fieldName, arr[i][fieldKey], result);
        }
        return result;
    };
    return UtilitiesService;
}());
export { UtilitiesService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbGl0aWVzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNvcmUvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvdXRpbGl0aWVzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxDQUFDLE1BQU0sWUFBWSxDQUFDO0FBRTNCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFFekMsV0FBVztBQUNYO0lBQUE7SUF1SUEsQ0FBQztJQXJJQTs7Ozs7TUFLRTtJQUNZLHNDQUFxQixHQUFuQyxVQUFxQyxHQUFXO1FBQy9DLE9BQU8sR0FBRyxDQUFDLE9BQU8sQ0FBRSxlQUFlLEVBQUUsVUFBRSxDQUFTO1lBQy9DLE9BQU8sU0FBUyxDQUFFLENBQUMsQ0FBRSxJQUFJLENBQUMsQ0FBQztRQUM1QixDQUFDLENBQUUsQ0FBQztJQUNMLENBQUM7SUFFRDs7Ozs7O01BTUU7SUFDWSx5QkFBUSxHQUF0QixVQUF3QixNQUFXLEVBQUUsS0FBYTtRQUNqRCxJQUFNLFFBQVEsR0FBa0IsQ0FBQyxDQUFDLEdBQUcsQ0FBRSxNQUFNLEVBQUUsVUFBRSxLQUFhLElBQU0sT0FBQSxLQUFLLEVBQUwsQ0FBSyxDQUFFLENBQUM7UUFFNUUsT0FBTyxLQUFLLEdBQUcsQ0FBQztZQUNmLENBQUMsQ0FBQyxRQUFRLENBQUUsS0FBSyxDQUFFO1lBQ25CLENBQUMsQ0FBQyxNQUFNO2tCQUNMO29CQUNELENBQUMsQ0FBQyxNQUFNLENBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBRTtvQkFDbEIsQ0FBQyxDQUFDLE1BQU0sQ0FBRSxDQUFDLEVBQUUsR0FBRyxDQUFFO29CQUNsQixDQUFDLENBQUMsTUFBTSxDQUFFLENBQUMsRUFBRSxHQUFHLENBQUU7aUJBQ2xCLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBRTtrQkFDWCxHQUFHLENBQUM7SUFDVCxDQUFDO0lBRUQ7Ozs7OztNQU1FO0lBQ1ksMEJBQVMsR0FBdkIsVUFBeUIsR0FB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TyxDQUFFLEdBQUcsQ0FBRTtZQUFHLE9BQU87UUFFOUIsSUFBTSxHQUFHLEdBQWUsT0FBTyxDQUFFLEdBQUcsQ0FBRSxDQUFDLElBQUksQ0FBRSxVQUFFLENBQU0sRUFBRSxDQUFNLElBQU0sT0FBQSxDQUFDLENBQUUsU0FBUyxDQUFFLEdBQUcsQ0FBQyxDQUFFLFNBQVMsQ0FBRSxFQUEvQixDQUErQixDQUFFLENBQUM7UUFFckcsS0FBTSxJQUFJLENBQUMsR0FBVyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUc7WUFDOUMsTUFBTSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUUsQ0FBQyxDQUFFLENBQUUsQ0FBQztZQUN4QixnQkFBZ0IsQ0FBQyxZQUFZLENBQzVCLE9BQU8sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUM1QixHQUFHLENBQUUsQ0FBQyxDQUFFLENBQUUsUUFBUSxDQUFFLEVBQUUsTUFBTSxDQUM1QixDQUFDO1NBQ0Y7UUFFRCxPQUFPLE1BQU0sQ0FBQztJQUNmLENBQUM7SUFFRix1QkFBQztBQUFELENBQUMsQUF2SUQsSUF1SUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXyBmcm9tICd1bmRlcnNjb3JlJztcblxuaW1wb3J0IHsgTEFUSU5fTUFQIH0gZnJvbSAnLi4vcmVzb3VyY2VzJztcblxuLy8gQGR5bmFtaWNcbmV4cG9ydCBjbGFzcyBVdGlsaXRpZXNTZXJ2aWNlIHtcblxuXHQvKipcblx0KiBTdHJpcCB2aWV0bmFtZXNlIHN5bWJvbFxuXHQqIEBzdGF0aWNcblx0KiBAcGFyYW0ge3N0cmluZ30gc3RyIC0gU3RyaW5nIHRvIHN0cmlwXG5cdCogQHJldHVybiB7c3RyaW5nfSBTdHJpcGVkIHN0cmluZ1xuXHQqL1xuXHRwdWJsaWMgc3RhdGljIHN0cmlwVmlldG5hbWVzZVN5bWJvbCggc3RyOiBzdHJpbmcgKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gc3RyLnJlcGxhY2UoIC9bXkEtWmEtejAtOV0vZywgKCB4OiBzdHJpbmcgKSA9PiB7XG5cdFx0XHRyZXR1cm4gTEFUSU5fTUFQWyB4IF0gfHwgeDtcblx0XHR9ICk7XG5cdH1cblxuXHQvKipcblx0KiBHZXQgY29sb3Jcblx0KiBAc3RhdGljXG5cdCogQHBhcmFtIHthbnl9IGNvbG9yc1xuXHQqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuXHQqIEByZXR1cm4ge3N0cmluZ31cblx0Ki9cblx0cHVibGljIHN0YXRpYyBnZXRDb2xvciggY29sb3JzOiBhbnksIGluZGV4OiBudW1iZXIgKTogc3RyaW5nIHtcblx0XHRjb25zdCBjb2xvckFycjogQXJyYXk8c3RyaW5nPiA9IF8ubWFwKCBjb2xvcnMsICggY29sb3I6IHN0cmluZyApID0+IGNvbG9yICk7XG5cblx0XHRyZXR1cm4gaW5kZXggPCA5XG5cdFx0XHQ/IGNvbG9yQXJyWyBpbmRleCBdXG5cdFx0XHQ6ICdyZ2IoJ1xuXHRcdFx0XHQrIFtcblx0XHRcdFx0XHRfLnJhbmRvbSggMCwgMjU1ICksXG5cdFx0XHRcdFx0Xy5yYW5kb20oIDAsIDI1NSApLFxuXHRcdFx0XHRcdF8ucmFuZG9tKCAwLCAyNTUgKSxcblx0XHRcdFx0XS5qb2luKCAnLCcgKVxuXHRcdFx0XHQrICcpJztcblx0fVxuXG5cdC8qKlxuXHQqIENvbnZlcnQgaGV4IHRvIHJnYmFcblx0KiBAc3RhdGljXG5cdCogQHBhcmFtIHtzdHJpbmd9IGhleFxuXHQqIEBwYXJhbSB7bnVtYmVyfSBvcGFjaXR5XG5cdCogQHJldHVybiB7YW55fVxuXHQqL1xuXHRwdWJsaWMgc3RhdGljIGhleFRvUmdiYSggaGV4OiBzdHJpbmcsIG9wYWNpdHk6IG51bWJlciA9IDEgKSB7XG5cdFx0Y29uc3QgcmVzdWx0OiBBcnJheTxzdHJpbmc+ID0gL14jPyhbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KSQvaS5leGVjKCBoZXggKTtcblxuXHRcdHJldHVybiByZXN1bHRcblx0XHRcdD8gJ3JnYmEoJ1xuXHRcdFx0XHQrIFtcblx0XHRcdFx0XHRwYXJzZUludCggcmVzdWx0WyAxIF0sIDE2ICksXG5cdFx0XHRcdFx0cGFyc2VJbnQoIHJlc3VsdFsgMiBdLCAxNiApLFxuXHRcdFx0XHRcdHBhcnNlSW50KCByZXN1bHRbIDMgXSwgMTYgKSxcblx0XHRcdFx0XHRvcGFjaXR5LFxuXHRcdFx0XHRdLmpvaW4oICcsJyApXG5cdFx0XHRcdCsgJyknXG5cdFx0XHQ6IG51bGw7XG5cdH1cblxuXHQvKipcblx0KiBDcG52ZXJ0IG11dGxpIGRlcHRoXG5cdCogQHBhcmFtIHtBcnJheX0gaXRlbXNcblx0KiBAcGFyYW0ge3N0cmluZ30gZmllbGRLZXlcblx0KiBAcGFyYW0ge3N0cmluZ30gZmllbGRQYXJlbnRLZXlcblx0KiBAcGFyYW0ge3N0cmluZ30gZmllbGROYW1lXG5cdCogQHJldHVybiB7QXJyYXl9XG5cdCovXG5cdHB1YmxpYyBzdGF0aWMgY29udmVydE11bHRpRGVwdGgoXG5cdFx0aXRlbXM6IEFycmF5PGFueT4sIGZpZWxkS2V5OiBzdHJpbmcgPSAnaWQnLFxuXHRcdGZpZWxkUGFyZW50S2V5OiBzdHJpbmcgPSAncGFyZW50X2lkJywgZmllbGROYW1lOiBzdHJpbmcgPSAnbmFtZSdcblx0KTogQXJyYXk8YW55PiB7XG5cdFx0Y29uc3QgaGFzaEFycjogYW55ID0ge307XG5cblx0XHRfLmVhY2goIF8uc29ydEJ5KCBpdGVtcywgZmllbGROYW1lICksICggaXRlbTogYW55ICkgPT4ge1xuXHRcdFx0Y29uc3QgcGFyZW50SW5kZXg6IGFueSA9IGl0ZW1bIGZpZWxkUGFyZW50S2V5IF0gfHwgMDtcblxuXHRcdFx0aWYgKCAhaGFzaEFyclsgcGFyZW50SW5kZXggXSApIHtcblx0XHRcdFx0aGFzaEFyclsgcGFyZW50SW5kZXggXSA9IFtdO1xuXHRcdFx0fVxuXG5cdFx0XHRsZXQgcGFyZW50OiBhbnkgPSBfLmZpbmQoIGl0ZW1zLCAoIF9pdGVtOiBhbnkgKSA9PiB7XG5cdFx0XHRcdHJldHVybiBfaXRlbVsgZmllbGRLZXkgXSA9PT0gcGFyZW50SW5kZXg7XG5cdFx0XHR9ICk7XG5cblx0XHRcdGlmICggIXBhcmVudCApIHtcblx0XHRcdFx0aGFzaEFyclsgcGFyZW50SW5kZXggXS5wdXNoKCBpdGVtICk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0bGV0IHByZWZpeDogc3RyaW5nID0gJy0tJztcblxuXHRcdFx0d2hpbGUgKCBwYXJlbnQgJiYgcGFyZW50WyBmaWVsZFBhcmVudEtleSBdICkge1xuXHRcdFx0XHRwYXJlbnQgPSBfLmZpbmQoIGl0ZW1zLCAoIF9pdGVtOiBhbnkgKSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIF9pdGVtWyBmaWVsZEtleSBdID09PSBwYXJlbnRbIGZpZWxkUGFyZW50S2V5IF07XG5cdFx0XHRcdH0gKTtcblx0XHRcdFx0cHJlZml4ICs9ICctLSc7XG5cdFx0XHR9XG5cblx0XHRcdGl0ZW0uX19uYW1lID0gWyBwcmVmaXgsIGl0ZW1bIGZpZWxkTmFtZSBdIF0uam9pbiggJyAnICk7XG5cblx0XHRcdGhhc2hBcnJbIHBhcmVudEluZGV4IF0ucHVzaCggaXRlbSApO1xuXHRcdH0gKTtcblxuXHRcdHJldHVybiBVdGlsaXRpZXNTZXJ2aWNlLmhpZXJhcmh5U29ydChcblx0XHRcdGhhc2hBcnIsIGZpZWxkS2V5LCBmaWVsZE5hbWUsXG5cdFx0XHRoYXNoQXJyID8gXy5rZXlzKCBoYXNoQXJyIClbIDAgXSA6IDBcblx0XHQpO1xuXHR9XG5cblx0LyoqXG5cdCogSGllcmFyaHkgc29ydFxuXHQqIEBwYXJhbSB7YW55fSBoYXNoQXJyXG5cdCogQHBhcmFtIHtzdHJpbmd9IGZpZWxkS2V5XG5cdCogQHBhcmFtIHtzdHJpbmd9IGZpZWxkTmFtZVxuXHQqIEBwYXJhbSB7bnVtYmVyfSBrZXlcblx0KiBAcGFyYW0ge0FycmF5fSByZXN1bHRcblx0KiBAcmV0dXJuIHtBcnJheX1cblx0Ki9cblx0cHVibGljIHN0YXRpYyBoaWVyYXJoeVNvcnQoXG5cdFx0aGFzaEFycjogYW55LCBmaWVsZEtleTogc3RyaW5nID0gJ2lkJywgZmllbGROYW1lOiBzdHJpbmcgPSAnbmFtZScsXG5cdFx0a2V5OiBudW1iZXIgPSAwLCByZXN1bHQ6IEFycmF5PGFueT4gPSBbXVxuXHQpIHtcblx0XHRpZiAoICFoYXNoQXJyWyBrZXkgXSApIHJldHVybjtcblxuXHRcdGNvbnN0IGFycjogQXJyYXk8YW55PiA9IGhhc2hBcnJbIGtleSBdLnNvcnQoICggYTogYW55LCBiOiBhbnkgKSA9PiBhWyBmaWVsZE5hbWUgXSA+IGJbIGZpZWxkTmFtZSBdICk7XG5cblx0XHRmb3IgKCBsZXQgaTogbnVtYmVyID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKyApIHtcblx0XHRcdHJlc3VsdC5wdXNoKCBhcnJbIGkgXSApO1xuXHRcdFx0VXRpbGl0aWVzU2VydmljZS5oaWVyYXJoeVNvcnQoXG5cdFx0XHRcdGhhc2hBcnIsIGZpZWxkS2V5LCBmaWVsZE5hbWUsXG5cdFx0XHRcdGFyclsgaSBdWyBmaWVsZEtleSBdLCByZXN1bHRcblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXG59XG4iXX0=