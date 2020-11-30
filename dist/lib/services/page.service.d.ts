import { Title } from '@angular/platform-browser';
import { ReplaySubject } from 'rxjs';
export declare class PageService {
    readonly defaultAppName: string;
    private titleService;
    private titleChangeObserver;
    private processChangeObserver;
    /**
    * @constructor
    * @param {string} defaultAppName
    * @param {Title} titleService
    */
    constructor(defaultAppName: string, titleService: Title);
    /**
    * Set title
    * @param {string} title
    * @param {string} prefix
    * @return {void}
    */
    setTitle(title: string, prefix?: string): void;
    /**
    * Get title
    * @return {string}
    */
    getTitle(): string;
    /**
    * On process change event
    * @param {boolean} isProcessing
    * @return {void}
    */
    setProcessing(isProcessing: boolean): void;
    /**
    * On title change event
    * @return {ReplaySubject}
    */
    readonly title: ReplaySubject<string>;
    /**
    * On processing change event
    * @return {ReplaySubject}
    */
    readonly processing: ReplaySubject<boolean>;
}
