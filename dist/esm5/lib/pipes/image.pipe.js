import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
import { Observable } from 'rxjs';
var ImagePipe = /** @class */ (function () {
    function ImagePipe() {
    }
    /**
    * Transform
    * @param {string} url
    * @param {string} defaultImage
    * @return {number}
    */
    ImagePipe.prototype.transform = function (url, defaultImage) {
        return new Observable(function (observer) {
            if (!url) {
                observer.next(defaultImage);
                observer.complete();
                return;
            }
            var img = new Image();
            img.onload = function () { observer.next(url); observer.complete(); };
            img.onerror = function () { observer.next(defaultImage); observer.complete(); };
            img.src = url;
        });
    };
    ImagePipe = tslib_1.__decorate([
        Pipe({ name: 'image' })
    ], ImagePipe);
    return ImagePipe;
}());
export { ImagePipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItY29yZS8iLCJzb3VyY2VzIjpbImxpYi9waXBlcy9pbWFnZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQWlCLElBQUksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsVUFBVSxFQUFZLE1BQU0sTUFBTSxDQUFDO0FBRzVDO0lBQUE7SUF1QkEsQ0FBQztJQXJCQTs7Ozs7TUFLRTtJQUNLLDZCQUFTLEdBQWhCLFVBQWtCLEdBQVcsRUFBRSxZQUFvQjtRQUNsRCxPQUFPLElBQUksVUFBVSxDQUFFLFVBQUUsUUFBdUI7WUFDL0MsSUFBSyxDQUFDLEdBQUcsRUFBRztnQkFDWCxRQUFRLENBQUMsSUFBSSxDQUFFLFlBQVksQ0FBRSxDQUFDO2dCQUM5QixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ3BCLE9BQU87YUFDUDtZQUVELElBQU0sR0FBRyxHQUFxQixJQUFJLEtBQUssRUFBRSxDQUFDO1lBQzFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsY0FBUSxRQUFRLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBRSxDQUFDLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xFLEdBQUcsQ0FBQyxPQUFPLEdBQUcsY0FBUSxRQUFRLENBQUMsSUFBSSxDQUFFLFlBQVksQ0FBRSxDQUFDLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVFLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2YsQ0FBQyxDQUFFLENBQUM7SUFDTCxDQUFDO0lBckJXLFNBQVM7UUFEckIsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxDQUFDO09BQ1gsU0FBUyxDQXVCckI7SUFBRCxnQkFBQztDQUFBLEFBdkJELElBdUJDO1NBdkJZLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlVHJhbnNmb3JtLCBQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBPYnNlcnZlciB9IGZyb20gJ3J4anMnO1xuXG5AUGlwZSh7IG5hbWU6ICdpbWFnZScgfSlcbmV4cG9ydCBjbGFzcyBJbWFnZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuXHQvKipcblx0KiBUcmFuc2Zvcm1cblx0KiBAcGFyYW0ge3N0cmluZ30gdXJsXG5cdCogQHBhcmFtIHtzdHJpbmd9IGRlZmF1bHRJbWFnZVxuXHQqIEByZXR1cm4ge251bWJlcn1cblx0Ki9cblx0cHVibGljIHRyYW5zZm9ybSggdXJsOiBzdHJpbmcsIGRlZmF1bHRJbWFnZTogc3RyaW5nICk6IGFueSB7XG5cdFx0cmV0dXJuIG5ldyBPYnNlcnZhYmxlKCAoIG9ic2VydmVyOiBPYnNlcnZlcjxhbnk+ICkgPT4ge1xuXHRcdFx0aWYgKCAhdXJsICkge1xuXHRcdFx0XHRvYnNlcnZlci5uZXh0KCBkZWZhdWx0SW1hZ2UgKTtcblx0XHRcdFx0b2JzZXJ2ZXIuY29tcGxldGUoKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBpbWc6IEhUTUxJbWFnZUVsZW1lbnQgPSBuZXcgSW1hZ2UoKTtcblx0XHRcdGltZy5vbmxvYWQgPSAoKSA9PiB7IG9ic2VydmVyLm5leHQoIHVybCApOyBvYnNlcnZlci5jb21wbGV0ZSgpOyB9O1xuXHRcdFx0aW1nLm9uZXJyb3IgPSAoKSA9PiB7IG9ic2VydmVyLm5leHQoIGRlZmF1bHRJbWFnZSApOyBvYnNlcnZlci5jb21wbGV0ZSgpOyB9O1xuXHRcdFx0aW1nLnNyYyA9IHVybDtcblx0XHR9ICk7XG5cdH1cblxufVxuIl19