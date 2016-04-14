// ==UserScript==
// @name        Swearify 2.0
// @description Adds a number of enhancements to your experience on AIM Games.
// @namespace   samsquanchhunter14@gmail.com
// @include     http://aimgames.forummotion.com/*
// @include     https://aimgames.forummotion.com/*
// @require     https://cdn.rawgit.com/js-cookie/js-cookie/master/src/js.cookie.js
// @require     https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js
// @require     https://cdn.rawgit.com/HulaSamsquanch/aimgames/master/swearify/jquery.caret.1.02.min.js
// @require     https://cdn.rawgit.com/HulaSamsquanch/aimgames/master/swearify/textUtils.js
// @version     beta.3.6
// @icon        http://i.imgur.com/MnWNRBL.png
// @license     MIT License (Expat); opensource.org/licenses/MIT
// @homepage    https://github.com/HulaSamsquanch/aimgames
// @supportURL  https://github.com/HulaSamsquanch/aimgames/issues
// @grant       none
// ==/UserScript==
'use strict';(function(){function y(a){$("head").append($('<link rel="stylesheet" type="text/css" />').attr("href",a))}function B(){$("#divsmilies").click(function(a){window.open("/post?categ=6&mode=smilies","chatbox_smilies","toolbar=no,menubar=no,personalbar=no,width=350,height=300,scrollbars=yes,resizable=yes,left="+(a.screenX-270)+",top="+(a.screenY-380))})}function C(){"1"==getCookie("post_condition")?(m=1,$("#text_edit").css("cssText","display:none;"),$("#html_edit").css("cssText","")):(m=0,$("#text_edit").css("cssText",""),$("#html_edit").css("cssText","display:none;"));$("#text_editor_cmd_switchmode").click(function(){0===m?(setCookie("post_condition","1",1),m=1,$("#text_edit").css("cssText","display:none;"),$("#html_edit").css("cssText","")):1==m&&(setCookie("post_condition","0",1),m=0,$("#text_edit").css("cssText",""),$("#html_edit").css("cssText","display:none;"))})}function q(a,b,c){$(c).click(function(){if(window.opener){var c=window.opener.$("#message"),d="",g="";$(c).caret().start<$(c).val().length?(d=c.val().substr(0,$(c).caret().start),g=c.val().substr($(c).caret().start,$(c).val().length)):(d=c.val().substr(0,$(c).val().length),g="");c.val(d+b+g)}if(parent){c=parent.$("textarea")[1];console.log(c);d=parent.$("textarea")[1].value;console.log(d);var n=g="",g=d.substr(0,d.length),n="";c.value=g+w(a)+n}});$(c).keypress(function(b){b.preventDefault()})}function r(a,b,c){return'<a href="javascript:void(0)" class="emotes"><img title="'+a+'" src="'+b+'" alt="'+a+'" border="0"></a>'}function w(a){return'<img title="posted by swearify" src="'+a+'"></img>'}function l(){return void 0===$("textarea")[1]?0:1}function z(a){for(var b=["CB_random","CB_rainbow"],c=0;c<b.length;c++)if(a!==b[c]&&"1"===Cookies.get(b[c]))return window.alert("You can't do that! You already have "+b[c]+" selected!"),!1;return!0}function D(){var a=$("td")[1];$(a).css("background",'linear-gradient( rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8) ), url("http://daffeinatek.byethost32.com/lastfm/resources/lighthole.gif")');$(a).css("background-size","100%");$(a).prepend($('<label style="font-size: 13px; font-weight: 900;">Swear Search \u2122</label><input id="emoteSearchBox" style="margin: 15px;border-color: black;"><label id="emoticonNotif" style="font-size: 9px;color: red;display: block;margin-bottom: 15px;font-weight: 600;">search something, shitmongrel</label>'))}function E(){$.each(F,function(a,b){$('[name="categ"]').append($("<option>",{value:a}).text(b))})}function h(){var a=window,b=document,c=b.documentElement,b=b.getElementsByTagName("body")[0];return Math.floor((a.innerWidth||c.clientWidth||b.clientWidth)/130)-1}function G(){$.each(swears,function(a,b){var c=$("#message").val(),f=$("#message").val().toLowerCase(),d="",g=c.indexOf(x[0]),n=c.indexOf(x[1]),p=c.indexOf(x[2]),e=c.indexOf(t[0]),h=c.indexOf(t[1]),k=c.indexOf(t[2]),l=c.indexOf(t[3]),m=0;if(-1!=e||-1!=h||-1!=k||-1!=l)m=1;if(0<g||0<n||0<p)e=0,e=-1!=g?g:-1!=n?n:p,h=f.substr(0,e),f.substr(e,f.length),0<=h.indexOf(b)&&(d=c.substr(h.indexOf(b),b.length).split("").join(A[m]));-1==g&&-1==p&&-1==n&&0<=f.indexOf(b)&&(d=c.substr(f.indexOf(b),b.length).split("").join(A[m]));$("#message").val(c.replace(new RegExp(b,"gi"),d))})}function H(){var a,b=$.extend({},emoticon_1,emoticon_2,emoticon_3);$.each(b,function(b,f){a=$("textarea")[l()].value;0<=a.regexIndexOf(new RegExp(f[0],"gi"))&&($("textarea")[l()].value=a.replace(new RegExp(f[0],"gi"),w(f[1])))});$.each(twitch_c,function(b,f){a=$("textarea")[l()].value;0<=a.regexIndexOf(new RegExp("\\b"+f+"\\b","g"))&&($("textarea")[l()].value=a.replace(new RegExp("\\b"+f+"\\b","g"),w(twitch_e[b])))})}function I(){var a,b=$.extend({},emoticon_1,emoticon_2,emoticon_3);$.each(b,function(b,f){0<=$("#message").val().regexIndexOf(new RegExp(f[0],"gi"))&&(a=$("#message").val().replace(new RegExp(f[0],"gi"),u[0]+f[1]+u[1]),$("#message").val(a))});$.each(twitch_c,function(b,f){0<=$("#message").val().regexIndexOf(new RegExp("\\b"+f+"\\b","g"))&&(a=$("#message").val().replace(new RegExp("\\b"+f+"\\b","g"),u[0]+twitch_e[b]+u[1]),$("#message").val(a))})}function J(){$.each(maymay,function(a,b){if(0<=$("textarea")[l()].value.regexIndexOf(new RegExp(b[0],"gi"))){var c=$("textarea")[l()].value.replace(new RegExp(b[0],"gi"),b[1]);$("textarea")[l()].value=c}})}function K(){$.each(maymay,function(a,b){if(0<=$("#message").val().regexIndexOf(new RegExp(b[0],"gi"))){var c=$("#message").val().replace(new RegExp(b[0],"gi"),b[1]);$("#message").val(c)}})}function L(){var a=$(".text-styles tr")[0];$(a).prepend($('<td id="hide_button" class="fontbutton"></td>'));a=$(a).find("td");$(a[0]).append($('<input name="hide" id="hide-button" class="format-message" type="checkbox"><label id="click_area_hide" title="Hide" style="cursor:pointer;"></label>'));$("#click_area_hide").click(function(){$(".hider").is(":visible")?($(".hider").hide(),$("#click_area_hide").text("<"),Cookies.set("CB_hide","1")):($(".hider").show(),$("#click_area_hide").text(">"),Cookies.set("CB_hide","0"))})}function M(){var a=$(".text-styles tr")[0];$(a).prepend($('<td id="rainbow_button" class="fontbutton hider"></td>'));a=$(a).find("td");$(a[0]).append($('<input name="rainbow" id="format-rainbow" class="format-message" type="checkbox"><label id="click_area_rainbow" title="Rainbow" style="cursor:pointer;height: 100%;"><img class="swearIcons" src="http://i.imgur.com/F69UQGS.png"></label>'));var b=$("#format-rainbow");"1"===Cookies.get("CB_rainbow")?$(b).prop("checked",!0):$(b).prop("checked",!1);$("#click_area_rainbow").click(function(){z("CB_rainbow")&&($(b).prop("checked")?($(b).prop("checked",!1),$(b).css("cssText",""),Cookies.set("CB_rainbow","0")):($(b).prop("checked",!0),$(b).css("cssText","background: #CCC none repeat scroll 0% 0%;box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15) inset, 0px 1px 2px rgba(0, 0, 0, 0.05);"),Cookies.set("CB_rainbow","1")))})}function N(){var a=$(".text-styles tr")[0];$(a).prepend($('<td id="random_button" class="fontbutton hider"></td>'));a=$(a).find("td");$(a[0]).append($('<input name="random" id="format-random" class="format-message" type="checkbox"><label id="click_area_random" title="Random" style="cursor:pointer;height: 100%;"><img class="swearIcons" src="http://i.imgur.com/jHMOnyI.png"></label>'));var b=$("#format-random");"1"===Cookies.get("CB_random")?$(b).prop("checked",!0):$(b).prop("checked",!1);$("#click_area_random").click(function(){z("CB_random")&&($(b).prop("checked")?($(b).prop("checked",!1),$(b).css("cssText",""),Cookies.set("CB_random","0")):($(b).prop("checked",!0),$(b).css("cssText","background: #CCC none repeat scroll 0% 0%;box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15) inset, 0px 1px 2px rgba(0, 0, 0, 0.05);"),Cookies.set("CB_random","1")))})}function O(a){var b=$.extend({},emoticon_1,emoticon_2,emoticon_3),c=[];$("#emoticonNotif").text("");0<a.length?($.each(b,function(b,d){if(0<=d[0].regexIndexOf(new RegExp(a,"gi"))){if(104<=c.length)return $("#emoticonNotif").text("too many results, capped at 104"),!1;c.push({name:b,value1:d[0],value2:d[1]})}}),$.each(twitch_c,function(b,d){if(0<=d.regexIndexOf(new RegExp(a,"gi"))){if(104<=c.length)return $("#emoticonNotif").text("too many results, capped at 104"),!1;c.push({name:d,value1:d,value2:twitch_e[b]})}})):$("#emoticonNotif").text("search something, shitmongrel");return c}function P(a,b){var c;c=$("table")[2]?$("table")[2]:$("table")[0];$(c).empty();$(c).append($("<tbody></tbody>"));var f=$(c).find("tbody")[0],d=0,g=0;$.each(a,function(c,p){$(f).append($("<tr></tr>"));var e=$(f).find("tr")[g];$(e).append("<td></td>");e=$(e).find("td")[d];$(e).append($(r(p.value1,a[c].value2,p.name)));q(a[c].value2,p.value1,e);d++;d>=b&&(d=0,g++)})}function k(a,b){var c;$("table")[2]?c=$("table")[2]:(c=$("table")[0],b=1);$(c).empty();$(c).append($("<tbody></tbody>"));var f=$(c).find("tbody")[0],d=0,g=0;1==a&&$.each(emoticon_1,function(a,c){$(f).append($("<tr></tr>"));var e=$(f).find("tr")[g];$(e).append("<td></td>");e=$(e).find("td")[d];$(e).append($(r(c[0],c[1],c[2])));q(c[1],c[0],e);d++;d>=b&&(d=0,g++)});2==a&&$.each(emoticon_2,function(c,a){$(f).append($("<tr></tr>"));var e=$(f).find("tr")[g];$(e).append("<td></td>");e=$(e).find("td")[d];$(e).append($(r(a[0],a[1],a[2])));q(a[1],a[0],e);d++;d>=b&&(d=0,g++)});3==a&&$.each(emoticon_3,function(a,c){$(f).append($("<tr></tr>"));var e=$(f).find("tr")[g];$(e).append("<td></td>");e=$(e).find("td")[d];$(e).append($(r(c[0],c[1],c[2])));q(c[1],c[0],e);d++;d>=b&&(d=0,g++)});4==a&&$.each(twitch_c,function(c,a){$(f).append($("<tr></tr>"));var e=$(f).find("tr")[g];$(e).append("<td></td>");e=$(e).find("td")[d];$(e).append($(r(a,twitch_e[c],a)));q(twitch_e[c]," "+a+" ",e);d++;d>=b&&(d=0,g++)});5==a&&$.each(maymay,function(c,a){$(f).append($("<tr></tr>"));var e=$(f).find("tr")[g];$(e).append("<td></td>");e=$(e).find("td")[d];$(e).append($(r(a[1],a[1],a[0])));q(a[1],a[0],e);d++;d>=b&&(d=0,g++)})}function Q(){html2canvas(document.body,{onrendered:function(a){var b=a.toDataURL("image/png");$("<div></div>").dialog({modal:!0,title:"View Screenshot",open:function(){$(this).html("<a target='_blank' href='"+b+"'>Click to Open</a>")},buttons:{Ok:function(){$(this).dialog("close")}},close:function(b,a){$(this).dialog("destroy").remove()}})}})}function R(){$(".genmed").prepend('<span id="chatbox_screenshot"><a href="javascript:void(0)">Take Screenshot</a></span>&nbsp;|&nbsp;');$("#chatbox_screenshot").click(function(){Q()})}var m=0,u=["[img]","[/img]"],v=["[color=#789922]","[/color]"],F={1:"Swearify 1",2:"Swearify 2",3:"Swearify 3",4:"Twitch",5:"Memes",6:"Search"},t=["/exit","/away","/abs","[code]"],A=["[b][/b]","."],x=["http://","www.","https://"];String.prototype.regexIndexOf=function(a,b){var c=this.substring(b||0).search(a);return 0<=c?c+(b||0):c};jQuery(document).ready(function(){$.getScript("https://rawgit.com/HulaSamsquanch/aimgames/master/swearify/swearifyVar.js",function(){E();if("http://aimgames.forummotion.com/post?categ=1&mode=smilies"===window.location.href||"http://aimgames.forummotion.com/smilies.forum?categ=1&mode=smilies_frame"===window.location.href)console.log("done"),k(1,h()),window.onresize=function(b){k(1,h())};if("http://aimgames.forummotion.com/post?categ=2&mode=smilies"===window.location.href||"http://aimgames.forummotion.com/smilies.forum?categ=2&mode=smilies_frame"===window.location.href)k(2,h()),window.onresize=function(b){k(2,h())};if("http://aimgames.forummotion.com/post?categ=3&mode=smilies"===window.location.href||"http://aimgames.forummotion.com/smilies.forum?categ=3&mode=smilies_frame"===window.location.href)k(3,h()),window.onresize=function(b){k(3,h())};if("http://aimgames.forummotion.com/post?categ=4&mode=smilies"===window.location.href||"http://aimgames.forummotion.com/smilies.forum?categ=4&mode=smilies_frame"===window.location.href)k(4,h()),window.onresize=function(b){k(4,h())};if("http://aimgames.forummotion.com/post?categ=5&mode=smilies"===window.location.href||"http://aimgames.forummotion.com/smilies.forum?categ=5&mode=smilies_frame"===window.location.href)k(5,h()),window.onresize=function(b){k(5,h())};if("http://aimgames.forummotion.com/post?categ=6&mode=smilies"===window.location.href||"http://aimgames.forummotion.com/smilies.forum?categ=6&mode=smilies_frame"===window.location.href){D();var a;$("#emoteSearchBox").on("keyup",function(){a&&clearTimeout(a);var b=this.value;a=setTimeout(function(){P(O(b),h())},250)})}"http://aimgames.forummotion.com/chatbox/index.forum?page=front&"===window.location.href||"http://aimgames.forummotion.com/chatbox/index.forum"===window.location.href||"http://aimgames.forummotion.com/chatbox/index.forum?archives=1"===window.location.href||"http://aimgames.forummotion.com/chatbox/index.forum?archives"===window.location.href||"http://aimgames.forummotion.com/chatbox"===window.location.href||"http://aimgames.forummotion.com/"===window.location.href?(y("https://rawgit.com/HulaSamsquanch/aimgames/master/swearify/78-ltr.css"),y("https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/themes/smoothness/jquery-ui.css"),$('label:contains("Message")').css("cssText","font-size:10px;color:white; margin-right:8px; margin-left:5px;"),$('label:contains("Message")').text("MESSAGE:"),$("#submit_button").css("cssText","font-size: 9px;color: #000;padding-right: 2px;margin-left: 3px;"),$("#submit_button").val("SEND"),$("#chatbox_members").css("cssText","color:black;"),$("#chatbox").css("cssText","overflow-x: hidden; left:141px;"),$('[width="10"]').text(""),$('[width="10"]').attr("width","0px"),$('[src="http://illiweb.com/fa/subsilver/wysiwyg/smilie.gif"]').attr("src","http://i.imgur.com/47NbRiV.gif"),L(),M(),N(),"1"===Cookies.get("CB_hide")?($(".hider").hide(),$("#click_area_hide").text("<")):($(".hider").show(),$("#click_area_hide").text(">")),$("#click_area_hide").css("cssText","cursor: pointer;width: 10px;background: rgb(85, 85, 85) none repeat scroll 0px 0px;color: rgb(170, 170, 170);font-size: 9px;border: 1px solid rgb(85, 85, 85);-moz-user-select: none;-webkit-user-select: none;height: 100%;line-height: 200%;"),$(".swearIcons").css("cssText","padding-top: 1px;"),B(),-1<navigator.userAgent.toLowerCase().indexOf("chrome")&&$.getScript("http://daffeinatek.byethost32.com/swearify/html2canvas.js",function(){R()}),$("#message").on("keydown",function(b){if(13===b.which||45===b.which)G(),I(),K(),0===$("#message").val().indexOf(">")&&$("#message").val(v[0]+$("#message").val()+v[1]),"1"===Cookies.get("CB_rainbow")&&$("#message").val(rainbowText($("#message").val())),"1"===Cookies.get("CB_random")&&$("#message").val(randomText($("#message").val()))})):(-1!=window.location.href.indexOf("aimgames.forummotion.com/post")&&C(),$("textarea").on("keydown",function(b){if(13===b.which){H();b=$("textarea")[l()].value.split("\n");for(var a=0;a<b.length;a++)0===b[a].indexOf(">")&&(b[a]=v[0]+b[a]+v[1],$("textarea")[l()].value=b.join("<br>"));J()}}))})})})();