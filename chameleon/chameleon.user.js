// ==UserScript==
// @name        Chameleon
// @description Auto color formatting for the chatbox.
// @namespace   how much grease
// @include     http://aimgames.forummotion.com/*
// @version     1.5.3
// @grant       none
// @icon        http://i.imgur.com/g8MwvQd.png
// @license     MIT License (Expat); opensource.org/licenses/MIT
// ==/UserScript==
/*RainbowVis-JS Released under Eclipse Public License - v 1.0*/
function Rainbow(){"use strict";function e(e){if(e.length<2)throw new Error("Rainbow must have two or more colours.");var a=(t-F)/(e.length-1),i=new ColourGradient;i.setGradient(e[0],e[1]),i.setNumberRange(F,F+a),r=[i];for(var o=1;o<e.length-1;o++){var l=new ColourGradient;l.setGradient(e[o],e[o+1]),l.setNumberRange(F+a*o,F+a*(o+1)),r[o]=l}n=e}var r=null,F=0,t=100,n=["ff0000","ffff00","00ff00","0000ff"];e(n),this.setSpectrum=function(){return e(arguments),this},this.setSpectrumByArray=function(r){return e(r),this},this.colourAt=function(e){if(isNaN(e))throw new TypeError(e+" is not a number");if(1===r.length)return r[0].colourAt(e);var n=(t-F)/r.length,a=Math.min(Math.floor((Math.max(e,F)-F)/n),r.length-1);return r[a].colourAt(e)},this.colorAt=this.colourAt,this.setNumberRange=function(r,a){if(!(a>r))throw new RangeError("maxNumber ("+a+") is not greater than minNumber ("+r+")");return F=r,t=a,e(n),this}}function ColourGradient(){"use strict";function e(e,F,t){var n=e;i>n&&(n=i),n>o&&(n=o);var a=o-i,l=parseInt(F,16),u=parseInt(t,16),s=(u-l)/a,g=Math.round(s*(n-i)+l);return r(g.toString(16))}function r(e){return 1===e.length?"0"+e:e}function F(e){var r=/^#?[0-9a-fA-F]{6}$/i;return r.test(e)}function t(e){if(F(e))return e.substring(e.length-6,e.length);var r=e.toLowerCase();if(l.hasOwnProperty(r))return l[r];throw new Error(e+" is not a valid colour.")}var n="ff0000",a="0000ff",i=0,o=100;this.setGradient=function(e,r){n=t(e),a=t(r)},this.setNumberRange=function(e,r){if(!(r>e))throw new RangeError("maxNumber ("+r+") is not greater than minNumber ("+e+")");i=e,o=r},this.colourAt=function(r){return e(r,n.substring(0,2),a.substring(0,2))+e(r,n.substring(2,4),a.substring(2,4))+e(r,n.substring(4,6),a.substring(4,6))};var l={aliceblue:"F0F8FF",antiquewhite:"FAEBD7",aqua:"00FFFF",aquamarine:"7FFFD4",azure:"F0FFFF",beige:"F5F5DC",bisque:"FFE4C4",black:"000000",blanchedalmond:"FFEBCD",blue:"0000FF",blueviolet:"8A2BE2",brown:"A52A2A",burlywood:"DEB887",cadetblue:"5F9EA0",chartreuse:"7FFF00",chocolate:"D2691E",coral:"FF7F50",cornflowerblue:"6495ED",cornsilk:"FFF8DC",crimson:"DC143C",cyan:"00FFFF",darkblue:"00008B",darkcyan:"008B8B",darkgoldenrod:"B8860B",darkgray:"A9A9A9",darkgreen:"006400",darkgrey:"A9A9A9",darkkhaki:"BDB76B",darkmagenta:"8B008B",darkolivegreen:"556B2F",darkorange:"FF8C00",darkorchid:"9932CC",darkred:"8B0000",darksalmon:"E9967A",darkseagreen:"8FBC8F",darkslateblue:"483D8B",darkslategray:"2F4F4F",darkslategrey:"2F4F4F",darkturquoise:"00CED1",darkviolet:"9400D3",deeppink:"FF1493",deepskyblue:"00BFFF",dimgray:"696969",dimgrey:"696969",dodgerblue:"1E90FF",firebrick:"B22222",floralwhite:"FFFAF0",forestgreen:"228B22",fuchsia:"FF00FF",gainsboro:"DCDCDC",ghostwhite:"F8F8FF",gold:"FFD700",goldenrod:"DAA520",gray:"808080",green:"008000",greenyellow:"ADFF2F",grey:"808080",honeydew:"F0FFF0",hotpink:"FF69B4",indianred:"CD5C5C",indigo:"4B0082",ivory:"FFFFF0",khaki:"F0E68C",lavender:"E6E6FA",lavenderblush:"FFF0F5",lawngreen:"7CFC00",lemonchiffon:"FFFACD",lightblue:"ADD8E6",lightcoral:"F08080",lightcyan:"E0FFFF",lightgoldenrodyellow:"FAFAD2",lightgray:"D3D3D3",lightgreen:"90EE90",lightgrey:"D3D3D3",lightpink:"FFB6C1",lightsalmon:"FFA07A",lightseagreen:"20B2AA",lightskyblue:"87CEFA",lightslategray:"778899",lightslategrey:"778899",lightsteelblue:"B0C4DE",lightyellow:"FFFFE0",lime:"00FF00",limegreen:"32CD32",linen:"FAF0E6",magenta:"FF00FF",maroon:"800000",mediumaquamarine:"66CDAA",mediumblue:"0000CD",mediumorchid:"BA55D3",mediumpurple:"9370DB",mediumseagreen:"3CB371",mediumslateblue:"7B68EE",mediumspringgreen:"00FA9A",mediumturquoise:"48D1CC",mediumvioletred:"C71585",midnightblue:"191970",mintcream:"F5FFFA",mistyrose:"FFE4E1",moccasin:"FFE4B5",navajowhite:"FFDEAD",navy:"000080",oldlace:"FDF5E6",olive:"808000",olivedrab:"6B8E23",orange:"FFA500",orangered:"FF4500",orchid:"DA70D6",palegoldenrod:"EEE8AA",palegreen:"98FB98",paleturquoise:"AFEEEE",palevioletred:"DB7093",papayawhip:"FFEFD5",peachpuff:"FFDAB9",peru:"CD853F",pink:"FFC0CB",plum:"DDA0DD",powderblue:"B0E0E6",purple:"800080",red:"FF0000",rosybrown:"BC8F8F",royalblue:"4169E1",saddlebrown:"8B4513",salmon:"FA8072",sandybrown:"F4A460",seagreen:"2E8B57",seashell:"FFF5EE",sienna:"A0522D",silver:"C0C0C0",skyblue:"87CEEB",slateblue:"6A5ACD",slategray:"708090",slategrey:"708090",snow:"FFFAFA",springgreen:"00FF7F",steelblue:"4682B4",tan:"D2B48C",teal:"008080",thistle:"D8BFD8",tomato:"FF6347",turquoise:"40E0D0",violet:"EE82EE",wheat:"F5DEB3",white:"FFFFFF",whitesmoke:"F5F5F5",yellow:"FFFF00",yellowgreen:"9ACD32"}}"undefined"!=typeof module&&(module.exports=Rainbow);
///////////////////////////

////// CODE FOR DEALING WITH OBJECTS
function values(o) {
  return Object.keys(o) .map(function (k) {
    return o[k];
  });
}
//////

//////COLOR
var rainbow = new Rainbow();
var s = '';
for (var i = 0; i < 100; i += 5) {
  var hexColour = rainbow.colourAt(i);
  s += '#' + hexColour + ',';

}
s = s.split(',');

c_s = [
  s[0], s[1], s[2], s[3], s[4], s[5], s[6], s[7], s[8], s[9], s[10],
  s[11], s[12], s[13], s[14], s[15], s[16], s[17], s[18], s[19], s[18],
  s[17], s[16], s[15], s[14], s[13], s[12], s[11], s[10], s[9], s[8],
  s[7], s[6], s[5], s[4], s[3], s[2], s[1]
];

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}
///////

///////Color arrays all named

var color_style = [ "Normal", "Trippy", "Patriotic" ];

///////

///////COOKIE SHIT
function setCookie(name, value, days) {
  var expires = '';
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = '; expires=' + date.toGMTString();
  }
  else expires = '';
  document.cookie = name + '=' + value + expires + '; path=/';
}

function getCookie(c_name) {
  var name = c_name + '=';
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1);
    if (c.indexOf(name) === 0) return c.substring(name.length, c.length);
  }
  return '';
}
///////

function returnOption(text){
	var option = document.createElement("option");
	option.text = text;
	option.style.dir = "rtl";
	option.style.paddingRight = "4px";
	return option;
}

function createSelectBox(){
	var new_td = document.createElement("td");
	new_td.id = "Cha";

  	document.getElementById("chatbox_messenger_form").getElementsByTagName("tr")[0].insertBefore(
		new_td, 
		document.getElementById("chatbox_messenger_form").getElementsByTagName("tr")[0].childNodes[0]
  	);

	var gen_location = document.getElementById("Cha");
        select = document.createElement('select');
        select.id = 'selectCha';        
        gen_location.appendChild(select);	

	var sel_location = document.getElementById('selectCha');	
	for(var num_entries = 0; num_entries < color_style.length; num_entries++){
	   sel_location.appendChild(returnOption(color_style[num_entries]));
	}
}

var counter = 0;

if (document.getElementById('frame_chatbox') !== null || document.getElementById('message') !== null) {
  if (window.location.pathname.length <= 1) {
    if (getCookie('chameleon_counter') === 0) {
      setCookie('CB_color', c_s[counter], 1);
    } else{
      counter = getCookie('chameleon_counter');
    }
    document.getElementById('frame_chatbox') .contentWindow.document.getElementById('message') .addEventListener('keydown', function (event) {
      var code = (event.keyCode) ? event.keyCode : event.which;
      if (code == 13) {
        counter++;
        if (counter == 37) {
          counter = 0;
        }
      }
    }, false);
    document.getElementById('frame_chatbox') .contentWindow.document.getElementById('message') .addEventListener('keyup', function (event) {
      var code = (event.keyCode) ? event.keyCode : event.which;
      if (code == 13) {
        setCookie('chameleon_counter', counter, 1);
        setCookie('CB_color', c_s[counter], 1);
        document.getElementById('frame_chatbox') .contentWindow.document.getElementById('scolor') .value = c_s[counter];
        document.getElementById('frame_chatbox') .contentWindow.document.getElementById('divcolor-preview') .style.cssText = 'background-color: rgb(' + hexToRgb(c_s[counter]).r + ',' + hexToRgb(c_s[counter]).g + ',' + hexToRgb(c_s[counter]).b + ');';
        document.getElementById('frame_chatbox') .contentWindow.document.getElementById('message') .style.color = c_s[counter];
      }
    }, false);
  } else {
    if (getCookie('chameleon_counter') === 0) {
      setCookie('CB_color', c_s[counter], 1);
    } else{
      counter = getCookie('chameleon_counter');
    }
    document.getElementById('message') .addEventListener('keydown', function (event) {
      var code = (event.keyCode) ? event.keyCode : event.which;
      if (code == 13) {
        counter++;
        if (counter == 37) {
          counter = 0;
        }
      }
    }, false);
    document.getElementById('message') .addEventListener('keyup', function (event) {
      var code = (event.keyCode) ? event.keyCode : event.which;
      if (code == 13) {
        setCookie('chameleon_counter', counter, 1);
        setCookie('CB_color', c_s[counter], 1);
        console.log(c_s[counter]);
        document.getElementById('scolor') .value = c_s[counter];
        document.getElementById('divcolor-preview') .style.cssText = 'background-color: rgb(' + hexToRgb(c_s[counter]).r + ',' + hexToRgb(c_s[counter]).g + ',' + hexToRgb(c_s[counter]).b + ');';
        document.getElementById('message') .style.color = c_s[counter];
      }
    }, false);
  }
}

window.addEventListener('load', function() {
   createSelectBox();
}, false);
