// ==UserScript==
// @name           delete ad
// @description    Yes
// @version        1.1
// @author         Lich
// @namespace      http://*.baidu.com/
// @include        http://tieba.baidu.com/*
// ==/UserScript==
window.onload = function() {
	    var fire = document.querySelector('.firework_sender_wrap');
		var ad1 = document.querySelectorAll('.t_con.clearfix');
		var reader = document.querySelector('.baidutuisong-2.baidutuisong');
		var left = document.querySelector('.hover_btn');
		var bear = document.querySelector('.baidutuisong-xiaoxiong')
		var pic = document.querySelector('.hover_btn');
		var ad = document.getElementById('__bdyx_tips');
		fire.parentNode.removeChild(fire);
		ad.parentNode.removeChild(ad);
		reader.parentNode.removeChild(reader);
		left.parentNode.removeChild(left);
		bear.parentNode.removeChild(bear);
		pic.parentNode.removeChild(pic);
		for (var i = 0; i < ad1.length; i--) {
			ad1[i].parentNode.removeChild(ad1[i]);
		};
		

		
}

		