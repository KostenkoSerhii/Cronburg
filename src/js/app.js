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
	$(".header-menu__item a").click(function(){
		var a=$(this).attr("href");
		return $.scrollTo(a,500),!1
	});

	$(".callback-block__close").on("click", function(e){
		e.preventDefault();
		$(".callback-block").slideUp(200);
	});
	$('.slider').slick({
		infinite: false
	});
	$('#tabs').tabs();
	/*end scrollto*/

	/*begin map*/
	var map;
	function initMap() {
		map = new google.maps.Map(document.getElementById('map'), {
			center: {lat: 55.524963, lng: 37.478325},
			zoom: 15,
			scrollwheel: false
		});
		setMarkers(map, places);
	}
	var places = [
	['Частная школа', 55.522763, 37.476325, 'img/school-marker.png'],
	['Аптека', 55.525763, 37.468325, 'img/medical-marker.png'],
	['Спортзал', 55.524763, 37.473325, 'img/dumbbell-marker.png'],
	['Квартал таунхаусов Кронбург', 55.524963, 37.478325, 'img/logo-marker.png']

	];
	function setMarkers(map) {
		var marker, i;
		for (i = 0; i < places.length; i++) {
			var description = places[i][0]
			var lat = places[i][1]
			var long = places[i][2]
			var img =  places[i][3]
			var latshort = places[i][1].toFixed(5);
			var longshort = places[i][2].toFixed(5);
			latlngset = new google.maps.LatLng(lat, long);
			marker = new google.maps.Marker({
				position: latlngset,
				map: map,
				icon: img
			});

			map.setCenter(marker.getPosition());

			var content = "<div class='map-marker-wrapper'><p class='map-marker-descr'>" +description +"</p>" + "<span class='map-marker-coord'>" + latshort + ", " + longshort  + "</span></div>";

			var infowindow = new google.maps.InfoWindow();

			google.maps.event.addListener(marker,'click', (function(marker,content,infowindow){ 
				return function() {
					infowindow.setContent(content);
					infowindow.open(map,marker);
				};
			})(marker,content,infowindow)); 
		}
	}
	/*end map*/
	
	/*begin advantages popup*/
	$('.adv-popup-link').magnificPopup({
		type: 'inline',
		closeOnContentClick: true,
		removalDelay: 400,
		mainClass: 'mfp-fade'
	});
	/*end advantages popup*/

	/*begin townhouse-galery*/
/*	$('.townhouse-galery').magnificPopup({
		type: 'inline',
		gallery: {
			enabled: true
		}
	});*/
	/*end townhouse-galery*/
	var doc_width = $(window).width();
	if(doc_width <= "768"){
		var builderDescriptionRight = $(".builder-description__right").detach();
		$(".builder-description-middle").before(builderDescriptionRight);

		$(".header-menu-btn").on("click", function(){
			$(".header-menu").slideToggle();
		});

		$(".header-callback").on("click", function(){
			$(".header-menu").hide();
		});

		$(".header-callback__img").on("click", function(e){
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
