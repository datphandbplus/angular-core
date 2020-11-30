import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import _ from 'underscore';
export class MultiTranslateHttpLoader {
    /**
    * @constructor
    * @param {HttpClient} http
    * @param {Array} resources
    */
    constructor(http, resources = [
        {
            prefix: 'assets/i18n/',
            suffix: '.json',
        },
    ]) {
        this.http = http;
        this.resources = resources;
    }
    /**
    * Get translation
    * @param {string} lang
    * @return {any}
    */
    getTranslation(lang) {
        return forkJoin(this.resources.map((config) => {
            return this.http.get(`${config.prefix}${lang}${config.suffix}`);
        })).pipe(map((response) => {
            return _.reduce(response, (a, b) => {
                return _.assign(a, b);
            });
        }));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktdHJhbnNsYXRlLWh0dHAtbG9hZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1jb3JlLyIsInNvdXJjZXMiOlsibGliL2xvYWRlcnMvbXVsdGktdHJhbnNsYXRlLWh0dHAtbG9hZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDaEMsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sQ0FBQyxNQUFNLFlBQVksQ0FBQztBQUUzQixNQUFNLE9BQU8sd0JBQXdCO0lBRXBDOzs7O01BSUU7SUFDRixZQUNTLElBQWdCLEVBQ2pCLFlBQWtEO1FBQ3hEO1lBQ0MsTUFBTSxFQUFFLGNBQWM7WUFDdEIsTUFBTSxFQUFFLE9BQU87U0FDZjtLQUNEO1FBTk8sU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNqQixjQUFTLEdBQVQsU0FBUyxDQUtmO0lBQ0MsQ0FBQztJQUVKOzs7O01BSUU7SUFDSyxjQUFjLENBQUUsSUFBWTtRQUNsQyxPQUFPLFFBQVEsQ0FBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBRSxDQUFFLE1BQVcsRUFBRyxFQUFFO1lBQ3RELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUUsR0FBRyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUUsQ0FBQztRQUNuRSxDQUFDLENBQUUsQ0FBRSxDQUFDLElBQUksQ0FDVCxHQUFHLENBQUUsQ0FBRSxRQUFhLEVBQUcsRUFBRTtZQUN4QixPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUUsUUFBUSxFQUFFLENBQUUsQ0FBTSxFQUFFLENBQU0sRUFBRyxFQUFFO2dCQUMvQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBRSxDQUFDO1lBQ3pCLENBQUMsQ0FBRSxDQUFDO1FBQ0wsQ0FBQyxDQUFFLENBQ0gsQ0FBQztJQUNILENBQUM7Q0FFRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBUcmFuc2xhdGVMb2FkZXIgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcbmltcG9ydCB7IGZvcmtKb2luIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgXyBmcm9tICd1bmRlcnNjb3JlJztcblxuZXhwb3J0IGNsYXNzIE11bHRpVHJhbnNsYXRlSHR0cExvYWRlciBpbXBsZW1lbnRzIFRyYW5zbGF0ZUxvYWRlciB7XG5cblx0LyoqXG5cdCogQGNvbnN0cnVjdG9yXG5cdCogQHBhcmFtIHtIdHRwQ2xpZW50fSBodHRwXG5cdCogQHBhcmFtIHtBcnJheX0gcmVzb3VyY2VzXG5cdCovXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcblx0XHRwdWJsaWMgcmVzb3VyY2VzOiB7IHByZWZpeDogc3RyaW5nLCBzdWZmaXg6IHN0cmluZyB9W10gPSBbXG5cdFx0XHR7XG5cdFx0XHRcdHByZWZpeDogJ2Fzc2V0cy9pMThuLycsXG5cdFx0XHRcdHN1ZmZpeDogJy5qc29uJyxcblx0XHRcdH0sXG5cdFx0XVxuXHQpIHt9XG5cblx0LyoqXG5cdCogR2V0IHRyYW5zbGF0aW9uXG5cdCogQHBhcmFtIHtzdHJpbmd9IGxhbmdcblx0KiBAcmV0dXJuIHthbnl9XG5cdCovXG5cdHB1YmxpYyBnZXRUcmFuc2xhdGlvbiggbGFuZzogc3RyaW5nICk6IGFueSB7XG5cdFx0cmV0dXJuIGZvcmtKb2luKCB0aGlzLnJlc291cmNlcy5tYXAoICggY29uZmlnOiBhbnkgKSA9PiB7XG5cdFx0XHRyZXR1cm4gdGhpcy5odHRwLmdldCggYCR7Y29uZmlnLnByZWZpeH0ke2xhbmd9JHtjb25maWcuc3VmZml4fWAgKTtcblx0XHR9ICkgKS5waXBlKFxuXHRcdFx0bWFwKCAoIHJlc3BvbnNlOiBhbnkgKSA9PiB7XG5cdFx0XHRcdHJldHVybiBfLnJlZHVjZSggcmVzcG9uc2UsICggYTogYW55LCBiOiBhbnkgKSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIF8uYXNzaWduKCBhLCBiICk7XG5cdFx0XHRcdH0gKTtcblx0XHRcdH0gKVxuXHRcdCk7XG5cdH1cblxufVxuIl19