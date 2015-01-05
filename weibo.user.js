// ==UserScript==
// @name           delete weibo ad
// @description    删除微博广告
// @version        1.1
// @author         Lich
// @namespace      http://weibo.com/
// @include        http://*.weibo.com/*
// @include        http://weibo.com/*
// ==/UserScript==

function a(){
	setTimeout(function () {
		b();
	}, 0)
	ad = document.querySelectorAll('div.WB_right_module.M_sc_right');
	for (var i = 0; i < ad.length; i++) {
			ad[i].parentNode.removeChild(ad[i]);
		};	
}
function b(){
	setTimeout(function () {
		c();
	}, 0)
	ad1 = document.querySelectorAll('#v6_pl_content_biztips');
	for (var i = 0; i < ad1.length; i++) {
			ad1[i].parentNode.removeChild(ad1[i]);
		};	
}
function c(){
	ad2 = document.querySelectorAll('#v6_pl_rightmod_ads35');
	for (var i = 0; i < ad2.length; i++) {
			ad2[i].parentNode.removeChild(ad2[i]);
		};	
}

window.onload= function() {
	a();
}