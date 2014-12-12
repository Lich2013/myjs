// ==UserScript==
// @name           delete tieba ad
// @description    删除贴吧广告
// @version        2.3
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
			i (j);
		}, 0);	
	var ad = document.querySelector('div#__bdyx_tips.bdyx_tips_');
	ad.parentNode.removeChild(ad);	
}
function i (j) {
	setTimeout(function  () {
			j (k);
		}, 0);	
	var ad2 = document.querySelector('.j_game_banner');
	ad2.parentNode.removeChild(ad2);	
}
function j (k) {
	setTimeout(function  () {
			k (l);
		}, 0);
	var attention = document.querySelector('div#pop_animate');
	attention.parentNode.removeChild(attention);	
}
function k (l) {
	setTimeout(function  () {
			l (m);
		}, 0);
	var ad3 = document.querySelector('.iframe_wrapper.clearfix');
	ad3.parentNode.removeChild(ad3);	
}
function l (m) {
	setTimeout(function  () {
			m (n);
		}, 0);
	var ad4 = document.querySelector('.dasense_iframe');
	ad4.parentNode.removeChild(ad4);	
}
function m (n) {
	setTimeout(function  () {
			n (o);
		}, 0);
	var ad5 = document.querySelector('div.baidutuisong.baidutuisong-3');
	ad5.parentNode.removeChild(ad5);	
}
function n (o) {
	setTimeout(function  () {
			o ();
		}, 0);
	var ad6 = document.querySelector('div.baidu-tuisong-wrap');
	ad6.parentNode.removeChild(ad6);	
}
function o () {
	var ad7 = document.querySelector('#global_notice_wrap');
	ad7.parentNode.removeChild(ad7);	
}
a(b);
