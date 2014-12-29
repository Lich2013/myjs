// ==UserScript==
// @name           delete tieba ad
// @description    删除贴吧广告
// @version        2.4
// @author         Lich
// @namespace      http://*.baidu.com/
// @include        http://tieba.baidu.com/*
// ==/UserScript==
var loop = 0;
function a () {
		setTimeout(function  () {
			b ();
		}, 0);
		var x = document.querySelector('.close_btn.j_click_stats');
		x.click();
}
function b () {
	setTimeout(function  () {
			c ();
		}, 0);	
	var ad1 = document.querySelectorAll('div.t_con.clearfix');
	for (var i = 0; i < ad1.length; i++) {
			ad1[i].parentNode.removeChild(ad1[i]);
		};	
}
function c () {
	setTimeout(function  () {
			d ();
		}, 0);	
	var reader = document.querySelector('.baidutuisong-2.baidutuisong');
	reader.parentNode.removeChild(reader);
}
function d () {
	setTimeout(function  () {
			e ();
		}, 0);
	var fire = document.querySelector('.firework_sender_wrap');
	fire.parentNode.removeChild(fire);	
}
function e () {
	setTimeout(function  () {
			f ();
		}, 0);	
	var left = document.querySelector('.hover_btn');
	left.parentNode.removeChild(left);
}
function f () {
	setTimeout(function  () {
			g ();
		}, 0);	
	var bear = document.querySelector('.baidutuisong-xiaoxiong');
	bear.parentNode.removeChild(bear);
}
function g () {
	setTimeout(function  () {
			h ();
		}, 0);	
	var pic = document.querySelector('img.hover_btn');
	pic.parentNode.removeChild(pic);
}
function h () {
	setTimeout(function  () {
			i ();
		}, 0);	
	var ad = document.querySelector('#__bdyx_tips');
	ad.parentNode.removeChild(ad);	
}
function i () {
	setTimeout(function  () {
			j ();
		}, 0);	
	var ad2 = document.querySelector('.j_game_banner');
	ad2.parentNode.removeChild(ad2);	
}
function j () {
	setTimeout(function  () {
			k ();
		}, 0);
	var attention = document.querySelector('div#pop_animate');
	attention.parentNode.removeChild(attention);	
}
function k () {
	setTimeout(function  () {
			l ();
		}, 0);
	var ad3 = document.querySelector('.iframe_wrapper.clearfix');
	ad3.parentNode.removeChild(ad3);	
}
function l () {
	setTimeout(function  () {
			m ();
		}, 0);
	var ad4 = document.querySelector('.dasense_iframe');
	ad4.parentNode.removeChild(ad4);	
}
function m () {
	setTimeout(function  () {
			n ();
		}, 0);
	var ad5 = document.querySelector('div.baidutuisong.baidutuisong-3');
	ad5.parentNode.removeChild(ad5);	
}
function n () {
	setTimeout(function  () {			
			o ();
		}, 0);
	var ad6 = document.querySelector('div.baidu-tuisong-wrap');
	ad6.parentNode.removeChild(ad6);	
}
function o () {
	setTimeout(function  () {			
			p ();
		}, 0);
	var ad7 = document.querySelector('#global_notice_wrap');
	ad7.parentNode.removeChild(ad7);	
}
function p () {
	setTimeout(function  () {			
			control ();
		}, 0);
	var ad8 = document.querySelectorAll('.l_post_bright.clearfix')
	for (var i = 0; i < ad8.length; i++) {
	 	ad8[i].parentNode.removeChild(ad8[i]);
	 }; 
}
function control ()
{	
	if (loop<3) {
		++loop;
	setTimeout(function  () {			
			a ();
		}, 0);
	}
	else
		return;
}

a(b);
