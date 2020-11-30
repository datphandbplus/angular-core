import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { Moment } from 'moment-timezone';
export declare class MomentUtcDateAdapter extends MomentDateAdapter {
    timezone: string;
    /**
    * @constructor
    * @param {string} dateLocale
    */
    constructor(dateLocale: string);
    /**
    * Create date
    * @desc Handle fullcalendar datetime locale
    * @param {number} year
    * @param {number} month
    * @param {number} date
    * @return {Moment}
    */
    createDate(year: number, month: number, date: number): Moment;
}
