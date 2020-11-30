import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import * as _$ from 'jquery';
const $ = _$;
const BREAKPOINTS = {
    xs: 600,
    sm: 960,
    md: 1280,
    lg: 1920,
};
let MediaService = class MediaService {
    /**
    * @constructor
    */
    constructor() {
        this.media = window.innerWidth;
    }
    /**
    * Check media is in breakpoints
    * @param {number} breakpoint - Breakpoint to check
    * @return {boolean}
    */
    is(breakpoint) {
        this.media = window.innerWidth;
        return ((breakpoint === 'xs' && this.media < BREAKPOINTS.xs)
            || (breakpoint === 'gt-xs' && this.media >= BREAKPOINTS.xs)
            || (breakpoint === 'sm' && this.media >= BREAKPOINTS.xs && this.media < BREAKPOINTS.sm)
            || (breakpoint === 'gt-sm' && this.media >= BREAKPOINTS.sm)
            || (breakpoint === 'md' && this.media >= BREAKPOINTS.sm && this.media < BREAKPOINTS.md)
            || (breakpoint === 'gt-md' && this.media >= BREAKPOINTS.md)
            || (breakpoint === 'lg' && this.media >= BREAKPOINTS.md && this.media < BREAKPOINTS.lg)
            || (breakpoint === 'gt-lg' && this.media >= BREAKPOINTS.lg));
    }
    /**
    * Check media is greater than width
    * @param {number} width - Width to check
    * @return {boolean}
    */
    gt(width) {
        this.media = window.innerWidth;
        return this.media >= width;
    }
    /**
    * Check media is less than width
    * @param {number} width - Width to check
    * @return {boolean}
    */
    lt(width) {
        this.media = window.innerWidth;
        return this.media < width;
    }
    /**
    * Set media view port
    * @param {number} width - Viewport width
    * @return {void}
    */
    setViewPort(width) {
        // In case browser resizing
        if (window.innerWidth < screen.width) {
            $('body').addClass('resizing');
            return;
        }
        // In case real devices
        const meta = $('meta[name=viewport]');
        let viewPort = 'width=device-width, initial-scale=1.0, user-scalable=0';
        if (width) {
            const scale = window.innerWidth / width;
            viewPort = 'width='
                + width
                + ', minimum-scale='
                + scale
                + ', initial-scale='
                + scale
                + ', maximum-scale=1.0';
        }
        meta.prop('content', viewPort);
    }
};
MediaService = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [])
], MediaService);
export { MediaService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWEuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9tZWRpYS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sS0FBSyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBRTdCLE1BQU0sQ0FBQyxHQUFRLEVBQUUsQ0FBQztBQUVsQixNQUFNLFdBQVcsR0FBUTtJQUN4QixFQUFFLEVBQUUsR0FBRztJQUNQLEVBQUUsRUFBRSxHQUFHO0lBQ1AsRUFBRSxFQUFFLElBQUk7SUFDUixFQUFFLEVBQUUsSUFBSTtDQUNSLENBQUM7QUFHRixJQUFhLFlBQVksR0FBekIsTUFBYSxZQUFZO0lBSXhCOztNQUVFO0lBQ0Y7UUFDQyxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUM7SUFDaEMsQ0FBQztJQUVEOzs7O01BSUU7SUFDSyxFQUFFLENBQUUsVUFBa0I7UUFDNUIsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDO1FBRS9CLE9BQU8sQ0FBRSxDQUFFLFVBQVUsS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxXQUFXLENBQUMsRUFBRSxDQUFFO2VBQzNELENBQUUsVUFBVSxLQUFLLE9BQU8sSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLFdBQVcsQ0FBQyxFQUFFLENBQUU7ZUFDMUQsQ0FBRSxVQUFVLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksV0FBVyxDQUFDLEVBQUUsSUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQyxFQUFFLENBQUU7ZUFDdEYsQ0FBRSxVQUFVLEtBQUssT0FBTyxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksV0FBVyxDQUFDLEVBQUUsQ0FBRTtlQUMxRCxDQUFFLFVBQVUsS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxXQUFXLENBQUMsRUFBRSxJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDLEVBQUUsQ0FBRTtlQUN0RixDQUFFLFVBQVUsS0FBSyxPQUFPLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxXQUFXLENBQUMsRUFBRSxDQUFFO2VBQzFELENBQUUsVUFBVSxLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLFdBQVcsQ0FBQyxFQUFFLElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxXQUFXLENBQUMsRUFBRSxDQUFFO2VBQ3RGLENBQUUsVUFBVSxLQUFLLE9BQU8sSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLFdBQVcsQ0FBQyxFQUFFLENBQUUsQ0FBRSxDQUFDO0lBQ2xFLENBQUM7SUFFRDs7OztNQUlFO0lBQ0ssRUFBRSxDQUFFLEtBQWE7UUFDdkIsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDO1FBQy9CLE9BQU8sSUFBSSxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUM7SUFDNUIsQ0FBQztJQUVEOzs7O01BSUU7SUFDSyxFQUFFLENBQUUsS0FBYTtRQUN2QixJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUM7UUFDL0IsT0FBTyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUMzQixDQUFDO0lBRUQ7Ozs7TUFJRTtJQUNLLFdBQVcsQ0FBRSxLQUFhO1FBQ2hDLDJCQUEyQjtRQUMzQixJQUFLLE1BQU0sQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLEtBQUssRUFBRztZQUN2QyxDQUFDLENBQUUsTUFBTSxDQUFFLENBQUMsUUFBUSxDQUFFLFVBQVUsQ0FBRSxDQUFDO1lBQ25DLE9BQU87U0FDUDtRQUVELHVCQUF1QjtRQUN2QixNQUFNLElBQUksR0FBUSxDQUFDLENBQUUscUJBQXFCLENBQUUsQ0FBQztRQUU3QyxJQUFJLFFBQVEsR0FBVyx3REFBd0QsQ0FBQztRQUVoRixJQUFLLEtBQUssRUFBRztZQUNaLE1BQU0sS0FBSyxHQUFXLE1BQU0sQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1lBRWhELFFBQVEsR0FBRyxRQUFRO2tCQUNoQixLQUFLO2tCQUNMLGtCQUFrQjtrQkFDbEIsS0FBSztrQkFDTCxrQkFBa0I7a0JBQ2xCLEtBQUs7a0JBQ0wscUJBQXFCLENBQUM7U0FDekI7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFFLFNBQVMsRUFBRSxRQUFRLENBQUUsQ0FBQztJQUNsQyxDQUFDO0NBRUQsQ0FBQTtBQWpGWSxZQUFZO0lBRHhCLFVBQVUsRUFBRTs7R0FDQSxZQUFZLENBaUZ4QjtTQWpGWSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgXyQgZnJvbSAnanF1ZXJ5JztcblxuY29uc3QgJDogYW55ID0gXyQ7XG5cbmNvbnN0IEJSRUFLUE9JTlRTOiBhbnkgPSB7XG5cdHhzOiA2MDAsXG5cdHNtOiA5NjAsXG5cdG1kOiAxMjgwLFxuXHRsZzogMTkyMCxcbn07XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNZWRpYVNlcnZpY2Uge1xuXG5cdHByaXZhdGUgbWVkaWE6IG51bWJlcjtcblxuXHQvKipcblx0KiBAY29uc3RydWN0b3Jcblx0Ki9cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5tZWRpYSA9IHdpbmRvdy5pbm5lcldpZHRoO1xuXHR9XG5cblx0LyoqXG5cdCogQ2hlY2sgbWVkaWEgaXMgaW4gYnJlYWtwb2ludHNcblx0KiBAcGFyYW0ge251bWJlcn0gYnJlYWtwb2ludCAtIEJyZWFrcG9pbnQgdG8gY2hlY2tcblx0KiBAcmV0dXJuIHtib29sZWFufVxuXHQqL1xuXHRwdWJsaWMgaXMoIGJyZWFrcG9pbnQ6IHN0cmluZyApOiBib29sZWFuIHtcblx0XHR0aGlzLm1lZGlhID0gd2luZG93LmlubmVyV2lkdGg7XG5cblx0XHRyZXR1cm4gKCAoIGJyZWFrcG9pbnQgPT09ICd4cycgJiYgdGhpcy5tZWRpYSA8IEJSRUFLUE9JTlRTLnhzIClcblx0XHRcdHx8ICggYnJlYWtwb2ludCA9PT0gJ2d0LXhzJyAmJiB0aGlzLm1lZGlhID49IEJSRUFLUE9JTlRTLnhzIClcblx0XHRcdHx8ICggYnJlYWtwb2ludCA9PT0gJ3NtJyAmJiB0aGlzLm1lZGlhID49IEJSRUFLUE9JTlRTLnhzICYmIHRoaXMubWVkaWEgPCBCUkVBS1BPSU5UUy5zbSApXG5cdFx0XHR8fCAoIGJyZWFrcG9pbnQgPT09ICdndC1zbScgJiYgdGhpcy5tZWRpYSA+PSBCUkVBS1BPSU5UUy5zbSApXG5cdFx0XHR8fCAoIGJyZWFrcG9pbnQgPT09ICdtZCcgJiYgdGhpcy5tZWRpYSA+PSBCUkVBS1BPSU5UUy5zbSAmJiB0aGlzLm1lZGlhIDwgQlJFQUtQT0lOVFMubWQgKVxuXHRcdFx0fHwgKCBicmVha3BvaW50ID09PSAnZ3QtbWQnICYmIHRoaXMubWVkaWEgPj0gQlJFQUtQT0lOVFMubWQgKVxuXHRcdFx0fHwgKCBicmVha3BvaW50ID09PSAnbGcnICYmIHRoaXMubWVkaWEgPj0gQlJFQUtQT0lOVFMubWQgJiYgdGhpcy5tZWRpYSA8IEJSRUFLUE9JTlRTLmxnIClcblx0XHRcdHx8ICggYnJlYWtwb2ludCA9PT0gJ2d0LWxnJyAmJiB0aGlzLm1lZGlhID49IEJSRUFLUE9JTlRTLmxnICkgKTtcblx0fVxuXG5cdC8qKlxuXHQqIENoZWNrIG1lZGlhIGlzIGdyZWF0ZXIgdGhhbiB3aWR0aFxuXHQqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aCAtIFdpZHRoIHRvIGNoZWNrXG5cdCogQHJldHVybiB7Ym9vbGVhbn1cblx0Ki9cblx0cHVibGljIGd0KCB3aWR0aDogbnVtYmVyICk6IGJvb2xlYW4ge1xuXHRcdHRoaXMubWVkaWEgPSB3aW5kb3cuaW5uZXJXaWR0aDtcblx0XHRyZXR1cm4gdGhpcy5tZWRpYSA+PSB3aWR0aDtcblx0fVxuXG5cdC8qKlxuXHQqIENoZWNrIG1lZGlhIGlzIGxlc3MgdGhhbiB3aWR0aFxuXHQqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aCAtIFdpZHRoIHRvIGNoZWNrXG5cdCogQHJldHVybiB7Ym9vbGVhbn1cblx0Ki9cblx0cHVibGljIGx0KCB3aWR0aDogbnVtYmVyICk6IGJvb2xlYW4ge1xuXHRcdHRoaXMubWVkaWEgPSB3aW5kb3cuaW5uZXJXaWR0aDtcblx0XHRyZXR1cm4gdGhpcy5tZWRpYSA8IHdpZHRoO1xuXHR9XG5cblx0LyoqXG5cdCogU2V0IG1lZGlhIHZpZXcgcG9ydFxuXHQqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aCAtIFZpZXdwb3J0IHdpZHRoXG5cdCogQHJldHVybiB7dm9pZH1cblx0Ki9cblx0cHVibGljIHNldFZpZXdQb3J0KCB3aWR0aDogbnVtYmVyICkge1xuXHRcdC8vIEluIGNhc2UgYnJvd3NlciByZXNpemluZ1xuXHRcdGlmICggd2luZG93LmlubmVyV2lkdGggPCBzY3JlZW4ud2lkdGggKSB7XG5cdFx0XHQkKCAnYm9keScgKS5hZGRDbGFzcyggJ3Jlc2l6aW5nJyApO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIEluIGNhc2UgcmVhbCBkZXZpY2VzXG5cdFx0Y29uc3QgbWV0YTogYW55ID0gJCggJ21ldGFbbmFtZT12aWV3cG9ydF0nICk7XG5cblx0XHRsZXQgdmlld1BvcnQ6IHN0cmluZyA9ICd3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wLCB1c2VyLXNjYWxhYmxlPTAnO1xuXG5cdFx0aWYgKCB3aWR0aCApIHtcblx0XHRcdGNvbnN0IHNjYWxlOiBudW1iZXIgPSB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpZHRoO1xuXG5cdFx0XHR2aWV3UG9ydCA9ICd3aWR0aD0nXG5cdFx0XHRcdCsgd2lkdGhcblx0XHRcdFx0KyAnLCBtaW5pbXVtLXNjYWxlPSdcblx0XHRcdFx0KyBzY2FsZVxuXHRcdFx0XHQrICcsIGluaXRpYWwtc2NhbGU9J1xuXHRcdFx0XHQrIHNjYWxlXG5cdFx0XHRcdCsgJywgbWF4aW11bS1zY2FsZT0xLjAnO1xuXHRcdH1cblxuXHRcdG1ldGEucHJvcCggJ2NvbnRlbnQnLCB2aWV3UG9ydCApO1xuXHR9XG5cbn1cbiJdfQ==