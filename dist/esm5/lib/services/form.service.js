import _ from 'underscore';
// @dynamic
var FormService = /** @class */ (function () {
    function FormService() {
    }
    /**
    * Copy field
    * @static
    * @param {any} value
    * @return {any}
    */
    FormService.copyField = function (value) {
        var _value;
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
    };
    /**
    * Reset form
    * @static
    * @param {FormGroup} form
    * @param {boolean} resetValue - Flag to reset value
    * @return {void}
    */
    FormService.resetForm = function (form, resetValue) {
        if (resetValue === void 0) { resetValue = false; }
        resetValue && form.reset();
        form.markAsPristine();
        form.markAsUntouched();
    };
    return FormService;
}());
export { FormService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1jb3JlLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2Zvcm0uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLENBQUMsTUFBTSxZQUFZLENBQUM7QUFFM0IsV0FBVztBQUNYO0lBQUE7SUF1Q0EsQ0FBQztJQXJDQTs7Ozs7TUFLRTtJQUNZLHFCQUFTLEdBQXZCLFVBQXlCLEtBQVU7UUFDbEMsSUFBSSxNQUFXLENBQUM7UUFFaEIsUUFBUyxPQUFPLEtBQUssRUFBRztZQUN2QixLQUFLLFFBQVE7Z0JBQ1osTUFBTSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUUsRUFBRSxFQUFFLEtBQUssQ0FBRSxDQUFDO2dCQUMvQixNQUFNO1lBQ1AsS0FBSyxRQUFRO2dCQUNaLE1BQU0sR0FBRyxNQUFNLENBQUUsS0FBSyxDQUFFLENBQUM7Z0JBQ3pCLE1BQU07WUFDUDtnQkFDQyxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztnQkFDckQsTUFBTTtTQUNQO1FBRUQsT0FBTyxNQUFNLENBQUM7SUFDZixDQUFDO0lBRUQ7Ozs7OztNQU1FO0lBQ1kscUJBQVMsR0FBdkIsVUFBeUIsSUFBZSxFQUFFLFVBQTJCO1FBQTNCLDJCQUFBLEVBQUEsa0JBQTJCO1FBQ3BFLFVBQVUsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUYsa0JBQUM7QUFBRCxDQUFDLEFBdkNELElBdUNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IF8gZnJvbSAndW5kZXJzY29yZSc7XG5cbi8vIEBkeW5hbWljXG5leHBvcnQgY2xhc3MgRm9ybVNlcnZpY2Uge1xuXG5cdC8qKlxuXHQqIENvcHkgZmllbGRcblx0KiBAc3RhdGljXG5cdCogQHBhcmFtIHthbnl9IHZhbHVlXG5cdCogQHJldHVybiB7YW55fVxuXHQqL1xuXHRwdWJsaWMgc3RhdGljIGNvcHlGaWVsZCggdmFsdWU6IGFueSApIHtcblx0XHRsZXQgX3ZhbHVlOiBhbnk7XG5cblx0XHRzd2l0Y2ggKCB0eXBlb2YgdmFsdWUgKSB7XG5cdFx0XHRjYXNlICdvYmplY3QnOlxuXHRcdFx0XHRfdmFsdWUgPSBfLmFzc2lnbigge30sIHZhbHVlICk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnbnVtYmVyJzpcblx0XHRcdFx0X3ZhbHVlID0gTnVtYmVyKCB2YWx1ZSApO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdF92YWx1ZSA9IHZhbHVlID8gdmFsdWUuc2xpY2UoIDAsIHZhbHVlLmxlbmd0aCApIDogW107XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblxuXHRcdHJldHVybiBfdmFsdWU7XG5cdH1cblxuXHQvKipcblx0KiBSZXNldCBmb3JtXG5cdCogQHN0YXRpY1xuXHQqIEBwYXJhbSB7Rm9ybUdyb3VwfSBmb3JtXG5cdCogQHBhcmFtIHtib29sZWFufSByZXNldFZhbHVlIC0gRmxhZyB0byByZXNldCB2YWx1ZVxuXHQqIEByZXR1cm4ge3ZvaWR9XG5cdCovXG5cdHB1YmxpYyBzdGF0aWMgcmVzZXRGb3JtKCBmb3JtOiBGb3JtR3JvdXAsIHJlc2V0VmFsdWU6IGJvb2xlYW4gPSBmYWxzZSApIHtcblx0XHRyZXNldFZhbHVlICYmIGZvcm0ucmVzZXQoKTtcblx0XHRmb3JtLm1hcmtBc1ByaXN0aW5lKCk7XG5cdFx0Zm9ybS5tYXJrQXNVbnRvdWNoZWQoKTtcblx0fVxuXG59XG4iXX0=