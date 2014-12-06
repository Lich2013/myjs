// ==UserScript==
// @name           delete tieba ad
// @description    Yes
// @version        2.0
// @author         Lich
// @namespace      http://*.baidu.com/
// @include        http://tieba.baidu.com/*
// ==/UserScript==
function a (b) {
		setTimeout(function  () {
			b (c);
		}, 0);
		var x = document.querySelector('.close_btn.j_click_stats');
		x.click();
}
function b (c) {
	setTimeout(function  () {
			c (d);
		}, 0);	
	var ad1 = document.querySelectorAll('div.t_con.clearfix');
	for (var i = 0; i < ad1.length; i++) {
			ad1[i].parentNode.removeChild(ad1[i]);
		};	
}
function c (d) {
	setTimeout(function  () {
			d (e);
		}, 0);	
	var reader = document.querySelector('.baidutuisong-2.baidutuisong');
	reader.parentNode.removeChild(reader);
}
function d (e) {
	setTimeout(function  () {
			e (f);
		}, 0);
	var fire = document.querySelector('.firework_sender_wrap');
	fire.parentNode.removeChild(fire);	
}
function e (f) {
	setTimeout(function  () {
			f (g);
		}, 0);	
	var left = document.querySelector('.hover_btn');
	left.parentNode.removeChild(left);
}
function f (g) {
	setTimeout(function  () {
			g (h);
		}, 0);	
	var bear = document.querySelector('.baidutuisong-xiaoxiong');
	bear.parentNode.removeChild(bear);
}
function g (h) {
	setTimeout(function  () {
			h (i);
		}, 0);	
	var pic = document.querySelector('img.hover_btn');
	pic.parentNode.removeChild(pic);
}
function h (i) {
	setTimeout(function  () {
			i (a);
		}, 0);	
	var ad = document.getElementById('__bdyx_tips');
	ad.parentNode.removeChild(ad);	
}
function i () {
	var ad2 = document.querySelector('.j_game_banner');
	ad2.parentNode.removeChild(ad2);	
}

a(b);
