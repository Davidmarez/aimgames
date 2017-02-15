// ==UserScript==
// @name        Shades
// @namespace   wemes
// @include     https://*.wikipedia.org/wiki/*
// @version     1
// @require     https://raw.githubusercontent.com/revan/Shades/master/js/jquery.min.js
// @require     https://raw.githubusercontent.com/revan/Shades/master/js/tracking-min.js
// @require     https://raw.githubusercontent.com/revan/Shades/master/js/eye-min.js
// @resource    shadesImg https://raw.githubusercontent.com/revan/Shades/master/shades.png
// @grant       GM_getResourceURL
// ==/UserScript==
'use strict';
/*globals tracking*/

/*
Greasemonkey port of this guy's thing:
https://github.com/revan/Shades
 */

var img = document.querySelector(".infobox.vcard").querySelector("img");
img.id = 'wiki-portrait';

var tracker = new tracking.ObjectTracker(['eye']);
tracker.setStepSize(1);
tracking.track('#wiki-portrait', tracker);
tracker.on('track', function(event) {
  if (event.data.length >= 2) {
    $(img).wrap("<div id='portrait-canvas' style='position:absolute'>");
    $('#portrait-canvas').wrap("<div style='height:" + img.height + "px;margin:20px'></div>");

    var shades = document.createElement('img');
    shades.id = 'cool-shades';
    shades.src = GM_getResourceURL('shadesImg');

    shades.width = 14 + Math.max(event.data[0].width + event.data[0].x,
      event.data[1].width + event.data[1].x) -
      Math.min(event.data[0].x, event.data[1].x);

    shades.height = (2/3)*(Math.max(event.data[0].height + event.data[0].y,
      event.data[1].height + event.data[1].y) -
      Math.min(event.data[0].y, event.data[0].y));

    shades.style.left = -7 + (img.offsetLeft + Math.min(event.data[0].x, event.data[1].x)) + 'px';
    shades.style.top = 0;
    shades.style.position = 'absolute';

    var skew = Math.atan((event.data[0].y + event.data[0].height/2 - event.data[1].y - event.data[1].height/2) /
      (event.data[0].x + event.data[0].width/2 - event.data[1].x - event.data[1].width/2));
    shades.style.transform = 'skewY(' + skew + 'rad)';

    document.querySelector('#portrait-canvas').appendChild(shades);

    $('#cool-shades').animate({top: 10 + (img.offsetTop + Math.min(event.data[0].y, event.data[1].y)) + 'px'}, 3000);
  }
});
