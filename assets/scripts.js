$( function() {


		  	$( document ).tooltip();



		    $(window).scroll(function () {
		      //if you hard code, then use console
		      //.log to determine when you want the
		      //nav bar to stick.
		    if ($(window).scrollTop() > 70) {
		      $('#topnavbar').addClass('navbar-fixed');
		    }
		    if ($(window).scrollTop() < 71) {
		      $('#topnavbar').removeClass('navbar-fixed');
		      $('#topnavbar').addClass('navbar-static-top');
		    }

		  });


		    $('.navbar-nav a').smoothScroll({offset: -55});



		    $('#exampleModal').on('show.bs.modal', function (event) {
		    	console.log('aqui');
		      var button = $(event.relatedTarget);
		      console.log(button); // Button that triggered the modal
		      var title = button.data('titulo'); // Extract info from data-* attributes
		      var image = button.data('image');
		      var description = button.data('description');

		      var modal = $(this);
		      modal.find('.modal-title').text(title);
		      modal.find('.modal-image').attr("src",image);
		      modal.find('.modal-description').text(description);
		      });



		  } );


			function initMap() {

				var location = new google.maps.LatLng(-22.801164, -43.206704);
			  var capgov = {lat: -22.8018219, lng: -43.2067044 };
			  var contentString = '<a href="https://goo.gl/maps/UhzCm3UBbrM2" target="_blank"><img src="assets/images/min/Logo-BS-LAN-min.png" alt="CAPGov" style="width: 150px; height: 50px;"></a>';


			  var mapCanvas = document.getElementById('map');
			  var mapOptions = {
			    center: location,
			    zoom: 16,
			    panControl: false,
			    mapTypeId: google.maps.MapTypeId.ROADMAP
			  }
			  var map = new google.maps.Map(mapCanvas, mapOptions);
			  var infowindow = new google.maps.InfoWindow({
			    content: contentString
			  });

			  var marker = new google.maps.Marker({
			    position: capgov,
			    map: map,
			    title: 'Uluru (Ayers Rock)'
			  });

			  infowindow.open(map, marker);

			}
