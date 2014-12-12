// ==UserScript==
// @name           delete weibo ad
// @description    删除微博广告
// @version        1.0
// @author         Lich
// @namespace      http://weibo.com/
// @include        http://weibo.com/*
// ==/UserScript==
function a(a){
	setTimeout(function () {
		a(a);
	}, 0)
	ad = document.querySelectorAll('div.WB_right_module.M_sc_right');
	for (var i = 0; i < ad.length; i++) {
			ad[i].parentNode.removeChild(ad[i]);
		};	
}
a(a);