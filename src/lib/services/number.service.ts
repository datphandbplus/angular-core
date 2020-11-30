// @dynamic
export class NumberService {

	/**
	* Calculate percent with 2 numbers
	* @static
	* @param {number} cur
	* @param {number} pre
	* @param {boolean} round - Flag to round percent
	* @return {any} Percent number & increament
	*/
	public static percent( cur: number, pre: number, round: boolean = false ): any {
		let percent: number = pre !== 0
			? ( ( cur - pre ) / Math.abs( pre ) * 100 )
			: ( cur !== 0 ? 100 : 0 );
		let increase: boolean = true;

		if ( percent < 0 ) {
			percent *= -1;
			increase = false;
		}

		if ( !isNaN( percent ) ) {
			percent = round ? Math.round( percent ) : NumberService.percentRound( percent );
		} else {
			percent = 0;
		}

		return { increase, number: percent };
	}

	/**
	* Calculate percent with total
	* @static
	* @param {number} part
	* @param {number} total
	* @param {boolean} round - Flag to round percent
	* @return {number} Percent number
	*/
	public static percentWithTotal( part: number, total: number, round: boolean = false ): number {
		const percent: number = total > 0 ? part * 1 * 100 / total : 0;
		return round ? Math.round( percent ) : NumberService.percentRound( percent );
	}

	/**
	* Add commas for thoudsand number
	* @static
	* @param {number} num
	* @param {boolean} roundUp - Flag to round number
	* @param {boolean} isAddZero - Flag to add prefix zero
	* @return {string} Commas string
	*/
	public static addCommas( num: any, roundUp: boolean = false, isAddZero: boolean = true ): string {
		num = NumberService.cutOffFloatNumber( num );
		num = roundUp ? NumberService.roundUp( num, 10 ) : num;

		if ( isAddZero ) num = NumberService.addZero( num );

		num += '';

		const x: any = num.split( '.' );
		const x2: any = x.length > 1 ? '.' + x[ 1 ] : '';
		const rgx: RegExp = /(\d+)(\d{3})/;

		let x1: any = x[ 0 ];

		while ( rgx.test( x1 ) ) {
			x1 = x1.replace( rgx, '$1' + ',' + '$2' );
		}

		return x1 + x2;
	}

	/**
	* Add zero before number
	* @static
	* @param {number} num
	* @return {string} number with zero
	*/
	public static addZero( num: number ): string {
		num = NumberService.cutOffFloatNumber( num );
		return ( num > 0 && num < 10 && num % 1 === 0 ? '0' : '' ) + num;
	}

	/**
	* Round percent number
	* @static
	* @param {number} num
	* @return {number} Rounded percent number
	*/
	public static percentRound( num: number ): number {
		num = NumberService.cutOffFloatNumber( num );
		return Math.round( num * 100 ) / 100;
	}

	/**
	* Round up number
	* @static
	* @param {number} num
	* @param {number} precision
	* @return {number} Rounded up number
	*/
	public static roundUp( num: number, precision: number ): number {
		num = NumberService.cutOffFloatNumber( num );
		num = Math.ceil( num );

		return num > precision ? Math.round( num / precision ) * precision : num;
	}

	/**
	* K Formatter
	* @static
	* @param {number} num
	* @return {number} K formatter number
	*/
	public static kFormatter( num: number ): string {
		num = NumberService.cutOffFloatNumber( num );

		if ( num >= 1000000000 ) {
			return NumberService.addCommas(
				( num / 1000000000 ).toFixed( 1 ).replace( /\.0$/, '' ),
				false, false
			) + 'B';
		}

		if ( num >= 1000000 ) {
			return NumberService.addCommas(
				( num / 1000000 ).toFixed( 1 ).replace( /\.0$/, '' ),
				false, false
			) + 'M';
		}

		if ( num >= 1000 ) {
			return NumberService.addCommas(
				( num / 1000 ).toFixed( 1 ).replace( /\.0$/, '' ),
				false, false
			) + 'K';
		}

		return NumberService.addCommas( num );
	}

	/**
	* Cut off float number
	* @static
	* @param {number} num
	* @param {number} digits
	* @return {number} Cut off number
	*/
	public static cutOffFloatNumber( num: number, digits: number = 2 ) {
		if ( !num || isNaN( num ) ) return 0;

		return +parseFloat( num.toString() ).toFixed( num % 1 === 0 ? 0 : digits );
	}

	/**
	* Pad number formatter
	* @static
	* @param {double} num
	* @param {int} size
	* @return {string}
	*/
	public static padNumberFormatter( num: number, size: number ) {
		const s: string = String( num );
		return s.padStart( size, '0' );
	}

}
