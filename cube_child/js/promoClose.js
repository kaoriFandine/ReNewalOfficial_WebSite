var btnclose = document.querySelector('.close-btn');
		var promo = document.querySelector('#info-panel--promo');


// When the user clicks on the close button display  
	btnclose.onclick = function() {
	    promo.className += " close";
	}