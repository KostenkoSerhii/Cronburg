// example of simple includes for js
//=include lib/sayHello.js
//=include lib/jquery.min.js
//=include lib/slick.min.js
//=include lib/svgxuse.min.js
//=include lib/jquery.magnify.js
//=include lib/jquery-ui.min.js
//=include lib/jquery.magnific-popup.min.js
//=include lib/scrollto.min.js

/*sayHello();*/
$(document).ready(function(){
	/*begin  scrollto*/
	$(".js-scroll").click(function(){
		var a=$(this).attr("href");
		return $.scrollTo(a,500),!1
	});

	$(".js-callback-close").on("click", function(e){
		e.preventDefault();
		$(".callback-block").slideUp(200);
	});
	$('.slider').slick({
		infinite: false
	});
	$('#tabs').tabs();
	/*end scrollto*/

	
	
	/*begin advantages popup*/
	$('.js-popup').magnificPopup({
		type: 'inline',
		closeOnContentClick: true,
		removalDelay: 400,
		mainClass: 'mfp-fade'
	});
	/*end advantages popup*/


	var doc_width = $(window).width();
	if(doc_width <= "768"){
/*		var builderDescriptionRight = $(".builder-description__right").detach();
		$(".builder-description-middle").before(builderDescriptionRight);*/

		$(".js-header-menu-btn").on("click", function(){
			$(".header-menu").slideToggle();
		});

		$(".js-header-callback").on("click", function(){
			$(".header-menu").hide();
		});

		$(".js-header-callback__img").on("click", function(e){
			e.preventDefault();
			$(".callback-block").slideDown(200);
		});


	}else if(doc_width >= "1100"){
		$('.zoom').magnify();
		/*begin header callback*/
		$(".header-callback").on("click", function(e){
			e.preventDefault();
			$(".callback-block").slideDown(200);
		});

		/*end header callback*/
	}else{};



});
