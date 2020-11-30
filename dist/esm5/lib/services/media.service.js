import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import * as _$ from 'jquery';
var $ = _$;
var BREAKPOINTS = {
    xs: 600,
    sm: 960,
    md: 1280,
    lg: 1920,
};
var MediaService = /** @class */ (function () {
    /**
    * @constructor
    */
    function MediaService() {
        this.media = window.innerWidth;
    }
    /**
    * Check media is in breakpoints
    * @param {number} breakpoint - Breakpoint to check
    * @return {boolean}
    */
    MediaService.prototype.is = function (breakpoint) {
        this.media = window.innerWidth;
        return ((breakpoint === 'xs' && this.media < BREAKPOINTS.xs)
            || (breakpoint === 'gt-xs' && this.media >= BREAKPOINTS.xs)
            || (breakpoint === 'sm' && this.media >= BREAKPOINTS.xs && this.media < BREAKPOINTS.sm)
            || (breakpoint === 'gt-sm' && this.media >= BREAKPOINTS.sm)
            || (breakpoint === 'md' && this.media >= BREAKPOINTS.sm && this.media < BREAKPOINTS.md)
            || (breakpoint === 'gt-md' && this.media >= BREAKPOINTS.md)
            || (breakpoint === 'lg' && this.media >= BREAKPOINTS.md && this.media < BREAKPOINTS.lg)
            || (breakpoint === 'gt-lg' && this.media >= BREAKPOINTS.lg));
    };
    /**
    * Check media is greater than width
    * @param {number} width - Width to check
    * @return {boolean}
    */
    MediaService.prototype.gt = function (width) {
        this.media = window.innerWidth;
        return this.media >= width;
    };
    /**
    * Check media is less than width
    * @param {number} width - Width to check
    * @return {boolean}
    */
    MediaService.prototype.lt = function (width) {
        this.media = window.innerWidth;
        return this.media < width;
    };
    /**
    * Set media view port
    * @param {number} width - Viewport width
    * @return {void}
    */
    MediaService.prototype.setViewPort = function (width) {
        // In case browser resizing
        if (window.innerWidth < screen.width) {
            $('body').addClass('resizing');
            return;
        }
        // In case real devices
        var meta = $('meta[name=viewport]');
        var viewPort = 'width=device-width, initial-scale=1.0, user-scalable=0';
        if (width) {
            var scale = window.innerWidth / width;
            viewPort = 'width='
                + width
                + ', minimum-scale='
                + scale
                + ', initial-scale='
                + scale
                + ', maximum-scale=1.0';
        }
        meta.prop('content', viewPort);
    };
    MediaService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [])
    ], MediaService);
    return MediaService;
}());
export { MediaService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWEuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9tZWRpYS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sS0FBSyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBRTdCLElBQU0sQ0FBQyxHQUFRLEVBQUUsQ0FBQztBQUVsQixJQUFNLFdBQVcsR0FBUTtJQUN4QixFQUFFLEVBQUUsR0FBRztJQUNQLEVBQUUsRUFBRSxHQUFHO0lBQ1AsRUFBRSxFQUFFLElBQUk7SUFDUixFQUFFLEVBQUUsSUFBSTtDQUNSLENBQUM7QUFHRjtJQUlDOztNQUVFO0lBQ0Y7UUFDQyxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUM7SUFDaEMsQ0FBQztJQUVEOzs7O01BSUU7SUFDSyx5QkFBRSxHQUFULFVBQVcsVUFBa0I7UUFDNUIsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDO1FBRS9CLE9BQU8sQ0FBRSxDQUFFLFVBQVUsS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxXQUFXLENBQUMsRUFBRSxDQUFFO2VBQzNELENBQUUsVUFBVSxLQUFLLE9BQU8sSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLFdBQVcsQ0FBQyxFQUFFLENBQUU7ZUFDMUQsQ0FBRSxVQUFVLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksV0FBVyxDQUFDLEVBQUUsSUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQyxFQUFFLENBQUU7ZUFDdEYsQ0FBRSxVQUFVLEtBQUssT0FBTyxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksV0FBVyxDQUFDLEVBQUUsQ0FBRTtlQUMxRCxDQUFFLFVBQVUsS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxXQUFXLENBQUMsRUFBRSxJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDLEVBQUUsQ0FBRTtlQUN0RixDQUFFLFVBQVUsS0FBSyxPQUFPLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxXQUFXLENBQUMsRUFBRSxDQUFFO2VBQzFELENBQUUsVUFBVSxLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLFdBQVcsQ0FBQyxFQUFFLElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxXQUFXLENBQUMsRUFBRSxDQUFFO2VBQ3RGLENBQUUsVUFBVSxLQUFLLE9BQU8sSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLFdBQVcsQ0FBQyxFQUFFLENBQUUsQ0FBRSxDQUFDO0lBQ2xFLENBQUM7SUFFRDs7OztNQUlFO0lBQ0sseUJBQUUsR0FBVCxVQUFXLEtBQWE7UUFDdkIsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDO1FBQy9CLE9BQU8sSUFBSSxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUM7SUFDNUIsQ0FBQztJQUVEOzs7O01BSUU7SUFDSyx5QkFBRSxHQUFULFVBQVcsS0FBYTtRQUN2QixJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUM7UUFDL0IsT0FBTyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUMzQixDQUFDO0lBRUQ7Ozs7TUFJRTtJQUNLLGtDQUFXLEdBQWxCLFVBQW9CLEtBQWE7UUFDaEMsMkJBQTJCO1FBQzNCLElBQUssTUFBTSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsS0FBSyxFQUFHO1lBQ3ZDLENBQUMsQ0FBRSxNQUFNLENBQUUsQ0FBQyxRQUFRLENBQUUsVUFBVSxDQUFFLENBQUM7WUFDbkMsT0FBTztTQUNQO1FBRUQsdUJBQXVCO1FBQ3ZCLElBQU0sSUFBSSxHQUFRLENBQUMsQ0FBRSxxQkFBcUIsQ0FBRSxDQUFDO1FBRTdDLElBQUksUUFBUSxHQUFXLHdEQUF3RCxDQUFDO1FBRWhGLElBQUssS0FBSyxFQUFHO1lBQ1osSUFBTSxLQUFLLEdBQVcsTUFBTSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7WUFFaEQsUUFBUSxHQUFHLFFBQVE7a0JBQ2hCLEtBQUs7a0JBQ0wsa0JBQWtCO2tCQUNsQixLQUFLO2tCQUNMLGtCQUFrQjtrQkFDbEIsS0FBSztrQkFDTCxxQkFBcUIsQ0FBQztTQUN6QjtRQUVELElBQUksQ0FBQyxJQUFJLENBQUUsU0FBUyxFQUFFLFFBQVEsQ0FBRSxDQUFDO0lBQ2xDLENBQUM7SUEvRVcsWUFBWTtRQUR4QixVQUFVLEVBQUU7O09BQ0EsWUFBWSxDQWlGeEI7SUFBRCxtQkFBQztDQUFBLEFBakZELElBaUZDO1NBakZZLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBfJCBmcm9tICdqcXVlcnknO1xuXG5jb25zdCAkOiBhbnkgPSBfJDtcblxuY29uc3QgQlJFQUtQT0lOVFM6IGFueSA9IHtcblx0eHM6IDYwMCxcblx0c206IDk2MCxcblx0bWQ6IDEyODAsXG5cdGxnOiAxOTIwLFxufTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE1lZGlhU2VydmljZSB7XG5cblx0cHJpdmF0ZSBtZWRpYTogbnVtYmVyO1xuXG5cdC8qKlxuXHQqIEBjb25zdHJ1Y3RvclxuXHQqL1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLm1lZGlhID0gd2luZG93LmlubmVyV2lkdGg7XG5cdH1cblxuXHQvKipcblx0KiBDaGVjayBtZWRpYSBpcyBpbiBicmVha3BvaW50c1xuXHQqIEBwYXJhbSB7bnVtYmVyfSBicmVha3BvaW50IC0gQnJlYWtwb2ludCB0byBjaGVja1xuXHQqIEByZXR1cm4ge2Jvb2xlYW59XG5cdCovXG5cdHB1YmxpYyBpcyggYnJlYWtwb2ludDogc3RyaW5nICk6IGJvb2xlYW4ge1xuXHRcdHRoaXMubWVkaWEgPSB3aW5kb3cuaW5uZXJXaWR0aDtcblxuXHRcdHJldHVybiAoICggYnJlYWtwb2ludCA9PT0gJ3hzJyAmJiB0aGlzLm1lZGlhIDwgQlJFQUtQT0lOVFMueHMgKVxuXHRcdFx0fHwgKCBicmVha3BvaW50ID09PSAnZ3QteHMnICYmIHRoaXMubWVkaWEgPj0gQlJFQUtQT0lOVFMueHMgKVxuXHRcdFx0fHwgKCBicmVha3BvaW50ID09PSAnc20nICYmIHRoaXMubWVkaWEgPj0gQlJFQUtQT0lOVFMueHMgJiYgdGhpcy5tZWRpYSA8IEJSRUFLUE9JTlRTLnNtIClcblx0XHRcdHx8ICggYnJlYWtwb2ludCA9PT0gJ2d0LXNtJyAmJiB0aGlzLm1lZGlhID49IEJSRUFLUE9JTlRTLnNtIClcblx0XHRcdHx8ICggYnJlYWtwb2ludCA9PT0gJ21kJyAmJiB0aGlzLm1lZGlhID49IEJSRUFLUE9JTlRTLnNtICYmIHRoaXMubWVkaWEgPCBCUkVBS1BPSU5UUy5tZCApXG5cdFx0XHR8fCAoIGJyZWFrcG9pbnQgPT09ICdndC1tZCcgJiYgdGhpcy5tZWRpYSA+PSBCUkVBS1BPSU5UUy5tZCApXG5cdFx0XHR8fCAoIGJyZWFrcG9pbnQgPT09ICdsZycgJiYgdGhpcy5tZWRpYSA+PSBCUkVBS1BPSU5UUy5tZCAmJiB0aGlzLm1lZGlhIDwgQlJFQUtQT0lOVFMubGcgKVxuXHRcdFx0fHwgKCBicmVha3BvaW50ID09PSAnZ3QtbGcnICYmIHRoaXMubWVkaWEgPj0gQlJFQUtQT0lOVFMubGcgKSApO1xuXHR9XG5cblx0LyoqXG5cdCogQ2hlY2sgbWVkaWEgaXMgZ3JlYXRlciB0aGFuIHdpZHRoXG5cdCogQHBhcmFtIHtudW1iZXJ9IHdpZHRoIC0gV2lkdGggdG8gY2hlY2tcblx0KiBAcmV0dXJuIHtib29sZWFufVxuXHQqL1xuXHRwdWJsaWMgZ3QoIHdpZHRoOiBudW1iZXIgKTogYm9vbGVhbiB7XG5cdFx0dGhpcy5tZWRpYSA9IHdpbmRvdy5pbm5lcldpZHRoO1xuXHRcdHJldHVybiB0aGlzLm1lZGlhID49IHdpZHRoO1xuXHR9XG5cblx0LyoqXG5cdCogQ2hlY2sgbWVkaWEgaXMgbGVzcyB0aGFuIHdpZHRoXG5cdCogQHBhcmFtIHtudW1iZXJ9IHdpZHRoIC0gV2lkdGggdG8gY2hlY2tcblx0KiBAcmV0dXJuIHtib29sZWFufVxuXHQqL1xuXHRwdWJsaWMgbHQoIHdpZHRoOiBudW1iZXIgKTogYm9vbGVhbiB7XG5cdFx0dGhpcy5tZWRpYSA9IHdpbmRvdy5pbm5lcldpZHRoO1xuXHRcdHJldHVybiB0aGlzLm1lZGlhIDwgd2lkdGg7XG5cdH1cblxuXHQvKipcblx0KiBTZXQgbWVkaWEgdmlldyBwb3J0XG5cdCogQHBhcmFtIHtudW1iZXJ9IHdpZHRoIC0gVmlld3BvcnQgd2lkdGhcblx0KiBAcmV0dXJuIHt2b2lkfVxuXHQqL1xuXHRwdWJsaWMgc2V0Vmlld1BvcnQoIHdpZHRoOiBudW1iZXIgKSB7XG5cdFx0Ly8gSW4gY2FzZSBicm93c2VyIHJlc2l6aW5nXG5cdFx0aWYgKCB3aW5kb3cuaW5uZXJXaWR0aCA8IHNjcmVlbi53aWR0aCApIHtcblx0XHRcdCQoICdib2R5JyApLmFkZENsYXNzKCAncmVzaXppbmcnICk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gSW4gY2FzZSByZWFsIGRldmljZXNcblx0XHRjb25zdCBtZXRhOiBhbnkgPSAkKCAnbWV0YVtuYW1lPXZpZXdwb3J0XScgKTtcblxuXHRcdGxldCB2aWV3UG9ydDogc3RyaW5nID0gJ3dpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjAsIHVzZXItc2NhbGFibGU9MCc7XG5cblx0XHRpZiAoIHdpZHRoICkge1xuXHRcdFx0Y29uc3Qgc2NhbGU6IG51bWJlciA9IHdpbmRvdy5pbm5lcldpZHRoIC8gd2lkdGg7XG5cblx0XHRcdHZpZXdQb3J0ID0gJ3dpZHRoPSdcblx0XHRcdFx0KyB3aWR0aFxuXHRcdFx0XHQrICcsIG1pbmltdW0tc2NhbGU9J1xuXHRcdFx0XHQrIHNjYWxlXG5cdFx0XHRcdCsgJywgaW5pdGlhbC1zY2FsZT0nXG5cdFx0XHRcdCsgc2NhbGVcblx0XHRcdFx0KyAnLCBtYXhpbXVtLXNjYWxlPTEuMCc7XG5cdFx0fVxuXG5cdFx0bWV0YS5wcm9wKCAnY29udGVudCcsIHZpZXdQb3J0ICk7XG5cdH1cblxufVxuIl19