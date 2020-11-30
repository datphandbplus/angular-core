import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import _ from 'underscore';
var MultiTranslateHttpLoader = /** @class */ (function () {
    /**
    * @constructor
    * @param {HttpClient} http
    * @param {Array} resources
    */
    function MultiTranslateHttpLoader(http, resources) {
        if (resources === void 0) { resources = [
            {
                prefix: 'assets/i18n/',
                suffix: '.json',
            },
        ]; }
        this.http = http;
        this.resources = resources;
    }
    /**
    * Get translation
    * @param {string} lang
    * @return {any}
    */
    MultiTranslateHttpLoader.prototype.getTranslation = function (lang) {
        var _this = this;
        return forkJoin(this.resources.map(function (config) {
            return _this.http.get("" + config.prefix + lang + config.suffix);
        })).pipe(map(function (response) {
            return _.reduce(response, function (a, b) {
                return _.assign(a, b);
            });
        }));
    };
    return MultiTranslateHttpLoader;
}());
export { MultiTranslateHttpLoader };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktdHJhbnNsYXRlLWh0dHAtbG9hZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1jb3JlLyIsInNvdXJjZXMiOlsibGliL2xvYWRlcnMvbXVsdGktdHJhbnNsYXRlLWh0dHAtbG9hZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDaEMsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sQ0FBQyxNQUFNLFlBQVksQ0FBQztBQUUzQjtJQUVDOzs7O01BSUU7SUFDRixrQ0FDUyxJQUFnQixFQUNqQixTQUtOO1FBTE0sMEJBQUEsRUFBQTtZQUNOO2dCQUNDLE1BQU0sRUFBRSxjQUFjO2dCQUN0QixNQUFNLEVBQUUsT0FBTzthQUNmO1NBQ0Q7UUFOTyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2pCLGNBQVMsR0FBVCxTQUFTLENBS2Y7SUFDQyxDQUFDO0lBRUo7Ozs7TUFJRTtJQUNLLGlEQUFjLEdBQXJCLFVBQXVCLElBQVk7UUFBbkMsaUJBVUM7UUFUQSxPQUFPLFFBQVEsQ0FBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBRSxVQUFFLE1BQVc7WUFDakQsT0FBTyxLQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBRSxLQUFHLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxHQUFHLE1BQU0sQ0FBQyxNQUFRLENBQUUsQ0FBQztRQUNuRSxDQUFDLENBQUUsQ0FBRSxDQUFDLElBQUksQ0FDVCxHQUFHLENBQUUsVUFBRSxRQUFhO1lBQ25CLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBRSxRQUFRLEVBQUUsVUFBRSxDQUFNLEVBQUUsQ0FBTTtnQkFDMUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFFLENBQUMsRUFBRSxDQUFDLENBQUUsQ0FBQztZQUN6QixDQUFDLENBQUUsQ0FBQztRQUNMLENBQUMsQ0FBRSxDQUNILENBQUM7SUFDSCxDQUFDO0lBRUYsK0JBQUM7QUFBRCxDQUFDLEFBbENELElBa0NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFRyYW5zbGF0ZUxvYWRlciB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuaW1wb3J0IHsgZm9ya0pvaW4gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCBfIGZyb20gJ3VuZGVyc2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgTXVsdGlUcmFuc2xhdGVIdHRwTG9hZGVyIGltcGxlbWVudHMgVHJhbnNsYXRlTG9hZGVyIHtcblxuXHQvKipcblx0KiBAY29uc3RydWN0b3Jcblx0KiBAcGFyYW0ge0h0dHBDbGllbnR9IGh0dHBcblx0KiBAcGFyYW0ge0FycmF5fSByZXNvdXJjZXNcblx0Ki9cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxuXHRcdHB1YmxpYyByZXNvdXJjZXM6IHsgcHJlZml4OiBzdHJpbmcsIHN1ZmZpeDogc3RyaW5nIH1bXSA9IFtcblx0XHRcdHtcblx0XHRcdFx0cHJlZml4OiAnYXNzZXRzL2kxOG4vJyxcblx0XHRcdFx0c3VmZml4OiAnLmpzb24nLFxuXHRcdFx0fSxcblx0XHRdXG5cdCkge31cblxuXHQvKipcblx0KiBHZXQgdHJhbnNsYXRpb25cblx0KiBAcGFyYW0ge3N0cmluZ30gbGFuZ1xuXHQqIEByZXR1cm4ge2FueX1cblx0Ki9cblx0cHVibGljIGdldFRyYW5zbGF0aW9uKCBsYW5nOiBzdHJpbmcgKTogYW55IHtcblx0XHRyZXR1cm4gZm9ya0pvaW4oIHRoaXMucmVzb3VyY2VzLm1hcCggKCBjb25maWc6IGFueSApID0+IHtcblx0XHRcdHJldHVybiB0aGlzLmh0dHAuZ2V0KCBgJHtjb25maWcucHJlZml4fSR7bGFuZ30ke2NvbmZpZy5zdWZmaXh9YCApO1xuXHRcdH0gKSApLnBpcGUoXG5cdFx0XHRtYXAoICggcmVzcG9uc2U6IGFueSApID0+IHtcblx0XHRcdFx0cmV0dXJuIF8ucmVkdWNlKCByZXNwb25zZSwgKCBhOiBhbnksIGI6IGFueSApID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gXy5hc3NpZ24oIGEsIGIgKTtcblx0XHRcdFx0fSApO1xuXHRcdFx0fSApXG5cdFx0KTtcblx0fVxuXG59XG4iXX0=