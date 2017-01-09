// example of simple includes for js
//=include lib/sayHello.js
//=include lib/jquery.min.js
//=include lib/slick.min.js
//=include lib/svgxuse.min.js
//=include lib/jquery.magnify.js
//=include lib/jquery-ui.min.js
//=include lib/jquery.magnific-popup.min.js
/*sayHello();*/
$(document).ready(function(){

	$('.slider').slick({
		infinite: false
	});
	$('.zoom').magnify();
	$('#tabs').tabs();
	/*begin header callback*/
	$(".header-callback").on("click", function(e){
		e.preventDefault();
		$(".callback-block").slideDown(200);
	});
	$(".callback-block__close").on("click", function(e){
		e.preventDefault();
		$(".callback-block").slideUp(200);
	});
	/*end header callback*/

	/*begin advantages popup*/
	$('.adv-popup-link').magnificPopup({
		type: 'inline',
		closeOnContentClick: true
	});
	/*end advantages popup*/
});
