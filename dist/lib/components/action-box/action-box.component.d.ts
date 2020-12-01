import { EventEmitter } from '@angular/core';
export declare class ActionButtonComponent {
    color: string;
    icon: string;
    title: string;
    disabled: boolean;
    onClick: EventEmitter<any>;
    /**
    * Get css class
    * @return {string}
    */
    readonly compClass: string;
}
export declare class ActionBoxComponent {
    disabled: boolean;
}
