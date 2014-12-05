// ==UserScript==
// @name           delete ad
// @description    Yes
// @version        1.0
// @author         Lich
// @namespace      http://*.baidu.com/
// @include        *
// ==/UserScript==
window.onload = function() {
	    var fire = document.querySelector('.firework_sender_wrap');
		var ad1 = document.querySelectorAll('.t_con.clearfix');
		//var fire = document.getElementsByClassName('firework_sender_wrap');
		var ad = document.getElementById('__bdyx_tips');
		fire.parentNode.removeChild(fire);
		ad.parentNode.removeChild(ad);
		for (var i = 0; i < ad1.length; i--) {
			ad1[i].parentNode.removeChild(ad1[i]);
		};
		

		
}

		