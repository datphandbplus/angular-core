import { PipeTransform, Pipe } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Pipe({ name: 'image' })
export class ImagePipe implements PipeTransform {

	/**
	* Transform
	* @param {string} url
	* @param {string} defaultImage
	* @return {number}
	*/
	public transform( url: string, defaultImage: string ): any {
		return new Observable( ( observer: Observer<any> ) => {
			if ( !url ) {
				observer.next( defaultImage );
				observer.complete();
				return;
			}

			const img: HTMLImageElement = new Image();
			img.onload = () => { observer.next( url ); observer.complete(); };
			img.onerror = () => { observer.next( defaultImage ); observer.complete(); };
			img.src = url;
		} );
	}

}
