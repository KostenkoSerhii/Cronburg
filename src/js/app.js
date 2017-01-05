// example of simple includes for js
//=include lib/sayHello.js
//=include lib/jquery.min.js
//=include lib/slick.min.js
//=include lib/svgxuse.min.js
//=include lib/jquery.magnify.js
//=include lib/jquery-ui.min.js
/*sayHello();*/
$(document).ready(function(){

	$('.slider').slick({
		infinite: false
	});
	$('.zoom').magnify({
		
	});
	$('#tabs').tabs();

});
