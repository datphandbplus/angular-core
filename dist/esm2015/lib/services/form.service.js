import _ from 'underscore';
// @dynamic
export class FormService {
    /**
    * Copy field
    * @static
    * @param {any} value
    * @return {any}
    */
    static copyField(value) {
        let _value;
        switch (typeof value) {
            case 'object':
                _value = _.assign({}, value);
                break;
            case 'number':
                _value = Number(value);
                break;
            default:
                _value = value ? value.slice(0, value.length) : [];
                break;
        }
        return _value;
    }
    /**
    * Reset form
    * @static
    * @param {FormGroup} form
    * @param {boolean} resetValue - Flag to reset value
    * @return {void}
    */
    static resetForm(form, resetValue = false) {
        resetValue && form.reset();
        form.markAsPristine();
        form.markAsUntouched();
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1jb3JlLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2Zvcm0uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLENBQUMsTUFBTSxZQUFZLENBQUM7QUFFM0IsV0FBVztBQUNYLE1BQU0sT0FBTyxXQUFXO0lBRXZCOzs7OztNQUtFO0lBQ0ssTUFBTSxDQUFDLFNBQVMsQ0FBRSxLQUFVO1FBQ2xDLElBQUksTUFBVyxDQUFDO1FBRWhCLFFBQVMsT0FBTyxLQUFLLEVBQUc7WUFDdkIsS0FBSyxRQUFRO2dCQUNaLE1BQU0sR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFFLEVBQUUsRUFBRSxLQUFLLENBQUUsQ0FBQztnQkFDL0IsTUFBTTtZQUNQLEtBQUssUUFBUTtnQkFDWixNQUFNLEdBQUcsTUFBTSxDQUFFLEtBQUssQ0FBRSxDQUFDO2dCQUN6QixNQUFNO1lBQ1A7Z0JBQ0MsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7Z0JBQ3JELE1BQU07U0FDUDtRQUVELE9BQU8sTUFBTSxDQUFDO0lBQ2YsQ0FBQztJQUVEOzs7Ozs7TUFNRTtJQUNLLE1BQU0sQ0FBQyxTQUFTLENBQUUsSUFBZSxFQUFFLGFBQXNCLEtBQUs7UUFDcEUsVUFBVSxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3hCLENBQUM7Q0FFRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCBfIGZyb20gJ3VuZGVyc2NvcmUnO1xuXG4vLyBAZHluYW1pY1xuZXhwb3J0IGNsYXNzIEZvcm1TZXJ2aWNlIHtcblxuXHQvKipcblx0KiBDb3B5IGZpZWxkXG5cdCogQHN0YXRpY1xuXHQqIEBwYXJhbSB7YW55fSB2YWx1ZVxuXHQqIEByZXR1cm4ge2FueX1cblx0Ki9cblx0cHVibGljIHN0YXRpYyBjb3B5RmllbGQoIHZhbHVlOiBhbnkgKSB7XG5cdFx0bGV0IF92YWx1ZTogYW55O1xuXG5cdFx0c3dpdGNoICggdHlwZW9mIHZhbHVlICkge1xuXHRcdFx0Y2FzZSAnb2JqZWN0Jzpcblx0XHRcdFx0X3ZhbHVlID0gXy5hc3NpZ24oIHt9LCB2YWx1ZSApO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ251bWJlcic6XG5cdFx0XHRcdF92YWx1ZSA9IE51bWJlciggdmFsdWUgKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRfdmFsdWUgPSB2YWx1ZSA/IHZhbHVlLnNsaWNlKCAwLCB2YWx1ZS5sZW5ndGggKSA6IFtdO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cblx0XHRyZXR1cm4gX3ZhbHVlO1xuXHR9XG5cblx0LyoqXG5cdCogUmVzZXQgZm9ybVxuXHQqIEBzdGF0aWNcblx0KiBAcGFyYW0ge0Zvcm1Hcm91cH0gZm9ybVxuXHQqIEBwYXJhbSB7Ym9vbGVhbn0gcmVzZXRWYWx1ZSAtIEZsYWcgdG8gcmVzZXQgdmFsdWVcblx0KiBAcmV0dXJuIHt2b2lkfVxuXHQqL1xuXHRwdWJsaWMgc3RhdGljIHJlc2V0Rm9ybSggZm9ybTogRm9ybUdyb3VwLCByZXNldFZhbHVlOiBib29sZWFuID0gZmFsc2UgKSB7XG5cdFx0cmVzZXRWYWx1ZSAmJiBmb3JtLnJlc2V0KCk7XG5cdFx0Zm9ybS5tYXJrQXNQcmlzdGluZSgpO1xuXHRcdGZvcm0ubWFya0FzVW50b3VjaGVkKCk7XG5cdH1cblxufVxuIl19