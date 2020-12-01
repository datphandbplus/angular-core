import * as tslib_1 from "tslib";
import { Component, Optional, Inject, InjectionToken } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
export var DIALOG_CONFIRM_DEFAULT_OPTIONS = new InjectionToken('defaultOptions');
var DialogConfirmComponent = /** @class */ (function () {
    /**
    * @constructor
    * @param {any} defaultOptions
    * @param {any} data
    * @param {MatDialogRef} dialogRef
    */
    function DialogConfirmComponent(defaultOptions, data, dialogRef) {
        this.defaultOptions = defaultOptions;
        this.data = data;
        this.dialogRef = dialogRef;
    }
    /**
    * Click No Button event
    * @return {void}
    */
    DialogConfirmComponent.prototype.onNoClick = function () {
        if (this.data
            && this.data.actions
            && this.data.actions.no
            && this.data.actions.no.value) {
            this.dialogRef.close(this.data.actions.no.value);
            return;
        }
        this.dialogRef.close(false);
    };
    /**
    * Click Yes Button event
    * @return {void}
    */
    DialogConfirmComponent.prototype.onYesClick = function () {
        if (this.data
            && this.data.actions
            && this.data.actions.yes
            && this.data.actions.yes.value) {
            this.dialogRef.close(this.data.actions.yes.value);
            return;
        }
        this.dialogRef.close(true);
    };
    /**
    * Click Other Button event
    * @return {void}
    */
    DialogConfirmComponent.prototype.onOtherClick = function () {
        if (this.data
            && this.data.actions
            && this.data.actions.other
            && this.data.actions.other.value) {
            this.dialogRef.close(this.data.actions.other.value);
            return;
        }
        this.dialogRef.close(true);
    };
    DialogConfirmComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DIALOG_CONFIRM_DEFAULT_OPTIONS,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] },
        { type: MatDialogRef }
    ]; };
    DialogConfirmComponent = tslib_1.__decorate([
        Component({
            selector: 'dialog-confirm',
            template: "<div class=\"dialog-confirm\" [ngClass]=\"defaultOptions?.componentClass\"><h1 matDialogTitle [innerHtml]=\"data?.title\"></h1><div matDialogContent style=\"padding-bottom: 20px\" [innerHtml]=\"data?.content\"></div><div matDialogActions align=\"end\"><button mat-raised-button [color]=\"data?.actions?.no?.color\" (click)=\"onNoClick()\">{{ data?.actions?.no?.name || ( \"GENERAL.LABELS.NO_THANKS\" | translate ) }}</button><button mat-raised-button *ngIf=\"data?.actions?.other\" [color]=\"data?.actions?.other?.color || &quot;accent&quot;\" (click)=\"onOtherClick()\">{{ data?.actions?.other?.name || ( \"GENERAL.LABELS.OTHER\" | translate ) }}</button><button mat-raised-button [color]=\"data?.actions?.yes?.color || &quot;primary&quot;\" (click)=\"onYesClick()\" cdkFocusInitial>{{ data?.actions?.yes?.name || ( \"GENERAL.LABELS.OK\" | translate ) }}</button></div></div>"
        }),
        tslib_1.__param(0, Optional()), tslib_1.__param(0, Inject(DIALOG_CONFIRM_DEFAULT_OPTIONS)),
        tslib_1.__param(1, Inject(MAT_DIALOG_DATA)),
        tslib_1.__metadata("design:paramtypes", [Object, Object, MatDialogRef])
    ], DialogConfirmComponent);
    return DialogConfirmComponent;
}());
export { DialogConfirmComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWNvbmZpcm0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1jb3JlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZGlhbG9nLWNvbmZpcm0vZGlhbG9nLWNvbmZpcm0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ04sU0FBUyxFQUFFLFFBQVEsRUFDbkIsTUFBTSxFQUFFLGNBQWMsRUFDdEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVsRSxNQUFNLENBQUMsSUFBTSw4QkFBOEIsR0FBd0IsSUFBSSxjQUFjLENBQU8sZ0JBQWdCLENBQUUsQ0FBQztBQU0vRztJQUVDOzs7OztNQUtFO0lBQ0YsZ0NBQ2dFLGNBQW1CLEVBQ2hELElBQVMsRUFDcEMsU0FBK0M7UUFGUyxtQkFBYyxHQUFkLGNBQWMsQ0FBSztRQUNoRCxTQUFJLEdBQUosSUFBSSxDQUFLO1FBQ3BDLGNBQVMsR0FBVCxTQUFTLENBQXNDO0lBQ3BELENBQUM7SUFFSjs7O01BR0U7SUFDSywwQ0FBUyxHQUFoQjtRQUNDLElBQUssSUFBSSxDQUFDLElBQUk7ZUFDVixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU87ZUFDakIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRTtlQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFHO1lBQ2hDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUUsQ0FBQztZQUNuRCxPQUFPO1NBQ1A7UUFFRCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBRSxLQUFLLENBQUUsQ0FBQztJQUMvQixDQUFDO0lBRUQ7OztNQUdFO0lBQ0ssMkNBQVUsR0FBakI7UUFDQyxJQUFLLElBQUksQ0FBQyxJQUFJO2VBQ1YsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPO2VBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUc7ZUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRztZQUNqQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFFLENBQUM7WUFDcEQsT0FBTztTQUNQO1FBRUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUUsSUFBSSxDQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVEOzs7TUFHRTtJQUNLLDZDQUFZLEdBQW5CO1FBQ0MsSUFBSyxJQUFJLENBQUMsSUFBSTtlQUNWLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTztlQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLO2VBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUc7WUFDbkMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBRSxDQUFDO1lBQ3RELE9BQU87U0FDUDtRQUVELElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFFLElBQUksQ0FBRSxDQUFDO0lBQzlCLENBQUM7O2dEQW5EQyxRQUFRLFlBQUksTUFBTSxTQUFFLDhCQUE4QjtnREFDbEQsTUFBTSxTQUFFLGVBQWU7Z0JBQ04sWUFBWTs7SUFYbkIsc0JBQXNCO1FBSmxDLFNBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRyxnQkFBZ0I7WUFDM0IsdzNCQUFvQztTQUNwQyxDQUFDO1FBVUMsbUJBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxtQkFBQSxNQUFNLENBQUUsOEJBQThCLENBQUUsQ0FBQTtRQUNwRCxtQkFBQSxNQUFNLENBQUUsZUFBZSxDQUFFLENBQUE7aUVBQ1IsWUFBWTtPQVhuQixzQkFBc0IsQ0E4RGxDO0lBQUQsNkJBQUM7Q0FBQSxBQTlERCxJQThEQztTQTlEWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRDb21wb25lbnQsIE9wdGlvbmFsLFxuXHRJbmplY3QsIEluamVjdGlvblRva2VuXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0RGlhbG9nUmVmLCBNQVRfRElBTE9HX0RBVEEgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5cbmV4cG9ydCBjb25zdCBESUFMT0dfQ09ORklSTV9ERUZBVUxUX09QVElPTlM6IEluamVjdGlvblRva2VuPGFueT4gPSBuZXcgSW5qZWN0aW9uVG9rZW48YW55PiggJ2RlZmF1bHRPcHRpb25zJyApO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3JcdDogJ2RpYWxvZy1jb25maXJtJyxcblx0dGVtcGxhdGVVcmxcdDogJy4vZGlhbG9nLWNvbmZpcm0ucHVnJyxcbn0pXG5leHBvcnQgY2xhc3MgRGlhbG9nQ29uZmlybUNvbXBvbmVudCB7XG5cblx0LyoqXG5cdCogQGNvbnN0cnVjdG9yXG5cdCogQHBhcmFtIHthbnl9IGRlZmF1bHRPcHRpb25zXG5cdCogQHBhcmFtIHthbnl9IGRhdGFcblx0KiBAcGFyYW0ge01hdERpYWxvZ1JlZn0gZGlhbG9nUmVmXG5cdCovXG5cdGNvbnN0cnVjdG9yKFxuXHRcdEBPcHRpb25hbCgpIEBJbmplY3QoIERJQUxPR19DT05GSVJNX0RFRkFVTFRfT1BUSU9OUyApIHJlYWRvbmx5IGRlZmF1bHRPcHRpb25zOiBhbnksXG5cdFx0QEluamVjdCggTUFUX0RJQUxPR19EQVRBICkgcHVibGljIGRhdGE6IGFueSxcblx0XHRwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8RGlhbG9nQ29uZmlybUNvbXBvbmVudD5cblx0KSB7fVxuXG5cdC8qKlxuXHQqIENsaWNrIE5vIEJ1dHRvbiBldmVudFxuXHQqIEByZXR1cm4ge3ZvaWR9XG5cdCovXG5cdHB1YmxpYyBvbk5vQ2xpY2soKSB7XG5cdFx0aWYgKCB0aGlzLmRhdGFcblx0XHRcdCYmIHRoaXMuZGF0YS5hY3Rpb25zXG5cdFx0XHQmJiB0aGlzLmRhdGEuYWN0aW9ucy5ub1xuXHRcdFx0JiYgdGhpcy5kYXRhLmFjdGlvbnMubm8udmFsdWUgKSB7XG5cdFx0XHR0aGlzLmRpYWxvZ1JlZi5jbG9zZSggdGhpcy5kYXRhLmFjdGlvbnMubm8udmFsdWUgKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLmRpYWxvZ1JlZi5jbG9zZSggZmFsc2UgKTtcblx0fVxuXG5cdC8qKlxuXHQqIENsaWNrIFllcyBCdXR0b24gZXZlbnRcblx0KiBAcmV0dXJuIHt2b2lkfVxuXHQqL1xuXHRwdWJsaWMgb25ZZXNDbGljaygpIHtcblx0XHRpZiAoIHRoaXMuZGF0YVxuXHRcdFx0JiYgdGhpcy5kYXRhLmFjdGlvbnNcblx0XHRcdCYmIHRoaXMuZGF0YS5hY3Rpb25zLnllc1xuXHRcdFx0JiYgdGhpcy5kYXRhLmFjdGlvbnMueWVzLnZhbHVlICkge1xuXHRcdFx0dGhpcy5kaWFsb2dSZWYuY2xvc2UoIHRoaXMuZGF0YS5hY3Rpb25zLnllcy52YWx1ZSApO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMuZGlhbG9nUmVmLmNsb3NlKCB0cnVlICk7XG5cdH1cblxuXHQvKipcblx0KiBDbGljayBPdGhlciBCdXR0b24gZXZlbnRcblx0KiBAcmV0dXJuIHt2b2lkfVxuXHQqL1xuXHRwdWJsaWMgb25PdGhlckNsaWNrKCkge1xuXHRcdGlmICggdGhpcy5kYXRhXG5cdFx0XHQmJiB0aGlzLmRhdGEuYWN0aW9uc1xuXHRcdFx0JiYgdGhpcy5kYXRhLmFjdGlvbnMub3RoZXJcblx0XHRcdCYmIHRoaXMuZGF0YS5hY3Rpb25zLm90aGVyLnZhbHVlICkge1xuXHRcdFx0dGhpcy5kaWFsb2dSZWYuY2xvc2UoIHRoaXMuZGF0YS5hY3Rpb25zLm90aGVyLnZhbHVlICk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5kaWFsb2dSZWYuY2xvc2UoIHRydWUgKTtcblx0fVxuXG59XG4iXX0=