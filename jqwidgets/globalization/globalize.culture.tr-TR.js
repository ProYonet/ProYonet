/* eslint-disable */
/*
 * Globalize Culture fr-FR
 *
 * http://github.com/jquery/globalize
 *
 * Copyright Software Freedom Conservancy, Inc.
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * This file was generated by the Globalize Culture Generator
 * Translation: bugs found in this file need to be fixed in the generator
 */

(function( window, undefined ) {

var Globalize;

if ( typeof require !== "undefined" &&
	typeof exports !== "undefined" &&
	typeof module !== "undefined" ) {
	// Assume CommonJS
	Globalize = require( "globalize" );
} else {
	// Global variable
	Globalize = window.Globalize;
}

Globalize.addCultureInfo( "tr-TR", "default", {
	name: "tr-TR",
	englishName: "Turkish (Turkiye)",
	nativeName: "Türkçe (Türkiye)",
	language: "tr",
	numberFormat: {
		",": " ",
		".": ",",
		"NaN": "Numerik Değil",
		negativeInfinity: "-Sonsuz",
		positiveInfinity: "+Sonsuz",
		percent: {
			",": " ",
			".": ","
		},
		currency: {
			pattern: ["-n $","n $"],
			",": " ",
			".": ",",
			symbol: "₺"
		}
	},
	calendars: {
		standard: {
			firstDay: 1,
			days: {
				names: ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"],
				namesAbbr: ["Paz.","Pzt.","Sal.","Çar.","Per.","Cum.","Cmt."],
				namesShort: ["Pz.","Pt.","Sl","Çr","Pr","Cm","Ct"]
			},
			months: {
				names: ["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık",""],
				namesAbbr: ["Oca.","Şub.","Mar","Nis.","May","Haz","Tem.","Ağu","Eyl.","Eki.","Kas.","Ara.",""]
			},
			AM: null,
			PM: null,
			eras: [{"name":"ap. J.-C.","start":null,"offset":0}],
			patterns: {
				d: "dd/MM/yyyy",
				D: "dddd d MMMM yyyy",
				t: "HH:mm",
				T: "HH:mm:ss",
				f: "dddd d MMMM yyyy HH:mm",
				F: "dddd d MMMM yyyy HH:mm:ss",
				M: "d MMMM",
				Y: "MMMM yyyy"
			}
		}
	}
});

}( this ));
