import * as tslib_1 from "tslib";
import { Component, Optional, Inject, InjectionToken } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
export const DIALOG_CONFIRM_DEFAULT_OPTIONS = new InjectionToken('defaultOptions');
let DialogConfirmComponent = class DialogConfirmComponent {
    /**
    * @constructor
    * @param {any} defaultOptions
    * @param {any} data
    * @param {MatDialogRef} dialogRef
    */
    constructor(defaultOptions, data, dialogRef) {
        this.defaultOptions = defaultOptions;
        this.data = data;
        this.dialogRef = dialogRef;
    }
    /**
    * Click No Button event
    * @return {void}
    */
    onNoClick() {
        if (this.data
            && this.data.actions
            && this.data.actions.no
            && this.data.actions.no.value) {
            this.dialogRef.close(this.data.actions.no.value);
            return;
        }
        this.dialogRef.close(false);
    }
    /**
    * Click Yes Button event
    * @return {void}
    */
    onYesClick() {
        if (this.data
            && this.data.actions
            && this.data.actions.yes
            && this.data.actions.yes.value) {
            this.dialogRef.close(this.data.actions.yes.value);
            return;
        }
        this.dialogRef.close(true);
    }
    /**
    * Click Other Button event
    * @return {void}
    */
    onOtherClick() {
        if (this.data
            && this.data.actions
            && this.data.actions.other
            && this.data.actions.other.value) {
            this.dialogRef.close(this.data.actions.other.value);
            return;
        }
        this.dialogRef.close(true);
    }
};
DialogConfirmComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DIALOG_CONFIRM_DEFAULT_OPTIONS,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] },
    { type: MatDialogRef }
];
DialogConfirmComponent = tslib_1.__decorate([
    Component({
        selector: 'dialog-confirm',
        template: "<div class=\"dialog-confirm\" [ngClass]=\"defaultOptions?.componentClass\"><h1 matDialogTitle [innerHtml]=\"data?.title\"></h1><div matDialogContent [innerHtml]=\"data?.content\"></div><div matDialogActions align=\"end\"><button mat-raised-button [color]=\"data?.actions?.no?.color\" (click)=\"onNoClick()\">{{ data?.actions?.no?.name || ( \"GENERAL.LABELS.NO_THANKS\" | translate ) }}</button><button mat-raised-button *ngIf=\"data?.actions?.other\" [color]=\"data?.actions?.other?.color || &quot;accent&quot;\" (click)=\"onOtherClick()\">{{ data?.actions?.other?.name || ( \"GENERAL.LABELS.OTHER\" | translate ) }}</button><button mat-raised-button [color]=\"data?.actions?.yes?.color || &quot;primary&quot;\" (click)=\"onYesClick()\" cdkFocusInitial>{{ data?.actions?.yes?.name || ( \"GENERAL.LABELS.OK\" | translate ) }}</button></div></div>"
    }),
    tslib_1.__param(0, Optional()), tslib_1.__param(0, Inject(DIALOG_CONFIRM_DEFAULT_OPTIONS)),
    tslib_1.__param(1, Inject(MAT_DIALOG_DATA)),
    tslib_1.__metadata("design:paramtypes", [Object, Object, MatDialogRef])
], DialogConfirmComponent);
export { DialogConfirmComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWNvbmZpcm0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1jb3JlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZGlhbG9nLWNvbmZpcm0vZGlhbG9nLWNvbmZpcm0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ04sU0FBUyxFQUFFLFFBQVEsRUFDbkIsTUFBTSxFQUFFLGNBQWMsRUFDdEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVsRSxNQUFNLENBQUMsTUFBTSw4QkFBOEIsR0FBd0IsSUFBSSxjQUFjLENBQU8sZ0JBQWdCLENBQUUsQ0FBQztBQU0vRyxJQUFhLHNCQUFzQixHQUFuQyxNQUFhLHNCQUFzQjtJQUVsQzs7Ozs7TUFLRTtJQUNGLFlBQ2dFLGNBQW1CLEVBQ2hELElBQVMsRUFDcEMsU0FBK0M7UUFGUyxtQkFBYyxHQUFkLGNBQWMsQ0FBSztRQUNoRCxTQUFJLEdBQUosSUFBSSxDQUFLO1FBQ3BDLGNBQVMsR0FBVCxTQUFTLENBQXNDO0lBQ3BELENBQUM7SUFFSjs7O01BR0U7SUFDSyxTQUFTO1FBQ2YsSUFBSyxJQUFJLENBQUMsSUFBSTtlQUNWLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTztlQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFO2VBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUc7WUFDaEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBRSxDQUFDO1lBQ25ELE9BQU87U0FDUDtRQUVELElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFFLEtBQUssQ0FBRSxDQUFDO0lBQy9CLENBQUM7SUFFRDs7O01BR0U7SUFDSyxVQUFVO1FBQ2hCLElBQUssSUFBSSxDQUFDLElBQUk7ZUFDVixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU87ZUFDakIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRztlQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFHO1lBQ2pDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUUsQ0FBQztZQUNwRCxPQUFPO1NBQ1A7UUFFRCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBRSxJQUFJLENBQUUsQ0FBQztJQUM5QixDQUFDO0lBRUQ7OztNQUdFO0lBQ0ssWUFBWTtRQUNsQixJQUFLLElBQUksQ0FBQyxJQUFJO2VBQ1YsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPO2VBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUs7ZUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRztZQUNuQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFFLENBQUM7WUFDdEQsT0FBTztTQUNQO1FBRUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUUsSUFBSSxDQUFFLENBQUM7SUFDOUIsQ0FBQztDQUVELENBQUE7OzRDQXJERSxRQUFRLFlBQUksTUFBTSxTQUFFLDhCQUE4Qjs0Q0FDbEQsTUFBTSxTQUFFLGVBQWU7WUFDTixZQUFZOztBQVhuQixzQkFBc0I7SUFKbEMsU0FBUyxDQUFDO1FBQ1YsUUFBUSxFQUFHLGdCQUFnQjtRQUMzQix5MUJBQW9DO0tBQ3BDLENBQUM7SUFVQyxtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLE1BQU0sQ0FBRSw4QkFBOEIsQ0FBRSxDQUFBO0lBQ3BELG1CQUFBLE1BQU0sQ0FBRSxlQUFlLENBQUUsQ0FBQTs2REFDUixZQUFZO0dBWG5CLHNCQUFzQixDQThEbEM7U0E5RFksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0Q29tcG9uZW50LCBPcHRpb25hbCxcblx0SW5qZWN0LCBJbmplY3Rpb25Ub2tlblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdERpYWxvZ1JlZiwgTUFUX0RJQUxPR19EQVRBIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuXG5leHBvcnQgY29uc3QgRElBTE9HX0NPTkZJUk1fREVGQVVMVF9PUFRJT05TOiBJbmplY3Rpb25Ub2tlbjxhbnk+ID0gbmV3IEluamVjdGlvblRva2VuPGFueT4oICdkZWZhdWx0T3B0aW9ucycgKTtcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yXHQ6ICdkaWFsb2ctY29uZmlybScsXG5cdHRlbXBsYXRlVXJsXHQ6ICcuL2RpYWxvZy1jb25maXJtLnB1ZycsXG59KVxuZXhwb3J0IGNsYXNzIERpYWxvZ0NvbmZpcm1Db21wb25lbnQge1xuXG5cdC8qKlxuXHQqIEBjb25zdHJ1Y3RvclxuXHQqIEBwYXJhbSB7YW55fSBkZWZhdWx0T3B0aW9uc1xuXHQqIEBwYXJhbSB7YW55fSBkYXRhXG5cdCogQHBhcmFtIHtNYXREaWFsb2dSZWZ9IGRpYWxvZ1JlZlxuXHQqL1xuXHRjb25zdHJ1Y3Rvcihcblx0XHRAT3B0aW9uYWwoKSBASW5qZWN0KCBESUFMT0dfQ09ORklSTV9ERUZBVUxUX09QVElPTlMgKSByZWFkb25seSBkZWZhdWx0T3B0aW9uczogYW55LFxuXHRcdEBJbmplY3QoIE1BVF9ESUFMT0dfREFUQSApIHB1YmxpYyBkYXRhOiBhbnksXG5cdFx0cHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPERpYWxvZ0NvbmZpcm1Db21wb25lbnQ+XG5cdCkge31cblxuXHQvKipcblx0KiBDbGljayBObyBCdXR0b24gZXZlbnRcblx0KiBAcmV0dXJuIHt2b2lkfVxuXHQqL1xuXHRwdWJsaWMgb25Ob0NsaWNrKCkge1xuXHRcdGlmICggdGhpcy5kYXRhXG5cdFx0XHQmJiB0aGlzLmRhdGEuYWN0aW9uc1xuXHRcdFx0JiYgdGhpcy5kYXRhLmFjdGlvbnMubm9cblx0XHRcdCYmIHRoaXMuZGF0YS5hY3Rpb25zLm5vLnZhbHVlICkge1xuXHRcdFx0dGhpcy5kaWFsb2dSZWYuY2xvc2UoIHRoaXMuZGF0YS5hY3Rpb25zLm5vLnZhbHVlICk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5kaWFsb2dSZWYuY2xvc2UoIGZhbHNlICk7XG5cdH1cblxuXHQvKipcblx0KiBDbGljayBZZXMgQnV0dG9uIGV2ZW50XG5cdCogQHJldHVybiB7dm9pZH1cblx0Ki9cblx0cHVibGljIG9uWWVzQ2xpY2soKSB7XG5cdFx0aWYgKCB0aGlzLmRhdGFcblx0XHRcdCYmIHRoaXMuZGF0YS5hY3Rpb25zXG5cdFx0XHQmJiB0aGlzLmRhdGEuYWN0aW9ucy55ZXNcblx0XHRcdCYmIHRoaXMuZGF0YS5hY3Rpb25zLnllcy52YWx1ZSApIHtcblx0XHRcdHRoaXMuZGlhbG9nUmVmLmNsb3NlKCB0aGlzLmRhdGEuYWN0aW9ucy55ZXMudmFsdWUgKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLmRpYWxvZ1JlZi5jbG9zZSggdHJ1ZSApO1xuXHR9XG5cblx0LyoqXG5cdCogQ2xpY2sgT3RoZXIgQnV0dG9uIGV2ZW50XG5cdCogQHJldHVybiB7dm9pZH1cblx0Ki9cblx0cHVibGljIG9uT3RoZXJDbGljaygpIHtcblx0XHRpZiAoIHRoaXMuZGF0YVxuXHRcdFx0JiYgdGhpcy5kYXRhLmFjdGlvbnNcblx0XHRcdCYmIHRoaXMuZGF0YS5hY3Rpb25zLm90aGVyXG5cdFx0XHQmJiB0aGlzLmRhdGEuYWN0aW9ucy5vdGhlci52YWx1ZSApIHtcblx0XHRcdHRoaXMuZGlhbG9nUmVmLmNsb3NlKCB0aGlzLmRhdGEuYWN0aW9ucy5vdGhlci52YWx1ZSApO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMuZGlhbG9nUmVmLmNsb3NlKCB0cnVlICk7XG5cdH1cblxufVxuIl19