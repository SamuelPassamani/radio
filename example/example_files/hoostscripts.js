$(document).ready(function() {
	console.log('Update 4.15');
});


if ($("#googleMapsDefault").length > 0) {
	$.ajax({
		 url:'https://maps.google.com/maps/api/geocode/json?address='+$('#localizationFormated').val()+'&sensor=false&key=AIzaSyAahw1G_ssG8I0VBkCKky5inir3jJrGnkQ',
		 dataType: 'json',
		 success:function(json){
			 
			 if ( json.status == "OK") { 
			 
				 var endereco = $('#googleMapsDefault').val();

				 var lat = json.results[0].geometry.location.lat;
				 var lng = json.results[0].geometry.location.lng;


				var map;

				var latlng = new google.maps.LatLng(lat, lng);

				var options = {
					zoom: 17,
					center: latlng,
					mapTypeId: google.maps.MapTypeId.ROADMAP
				};


				map = new google.maps.Map(document.getElementById("mapaGoogle"), options);

				var marker = new google.maps.Marker({
					position: new google.maps.LatLng(lat, lng),
					map: map
				});
			} else {
				$('#mapaGoogle').hide();
				console.log('GMAPS: Endereço informado não existe ou não foi encontrado.');
				console.log('https://maps.google.com/maps/api/geocode/json?address='+$('#localizationFormated').val()+'&sensor=false&key=AIzaSyAahw1G_ssG8I0VBkCKky5inir3jJrGnkQ');
			}
		 }
	});
}


$(function() {
	
	$('.bx-pager-item a').attr('href','#');
	

	$('#gridPhotos .gallery').masonry({
	  // options
	  itemSelector: '.gallery-item'
	});
	
	$('.grid').masonry({
	  // options
	  itemSelector: '.grid-item'
	});
	//gambi para corrigir qdo carrega ajax
	function myFunction() {
		$('.grid').masonry({
		  // options
		  itemSelector: '.grid-item'
		});
	}
	setTimeout(myFunction, 1000)

	$('.openRegulamento').click(function(e) {
		$('.regulamentoContent').slideToggle(300);
		e.preventDefault();
	})
});


$(function() { 
	$('.btnPedidoMusica').click(function(e) {
		e.preventDefault();
	});
	
	 $('.bannerSlider').bxSlider({
		  auto: true,
		  controls: false,
		  pager: false,
		  stopAutoOnClick: true
	  });
});

/* Pedido de musica Player */
$(function() {
	$('.pedidoMusicaWidget').click(function(e) {
		$('.formPedidosWidget').stop().slideDown(300);
		$('.overWidget').stop().fadeIn(300);
		e.preventDefault();
	});
	$('.overWidget').click(function() {
		$('.formPedidos,.formPedidosWidget').stop().slideUp(300);
		$('.overWidget').stop().fadeOut(300);
	});
});


//Formularios
function valformPedidos2(w) {
	
	console.log(templateDir);
	console.log('Executou form pedidos pelo widget');
	console.log($(".pedidosNome2").val()+','+$(".pedidosEmail2").val()+','+$(".pedidoArtista2").val()+','+$(".pedidoMusica2").val()+','+$(".pedidoMensagem2").val());
	
	if ($('.mailHoneyPot2').val() == "" ) {
		var a = false;
		if ($(".pedidosNome2").val() == "" || $(".pedidosEmail2").val() == "" || $(".pedidoArtista2").val() == "" || $(".pedidoMusica2").val() == "" || $(".pedidoMensagem2").val() == "") {
			sweetAlert("Oops...", "Todos os campos são obrigatórios!", "error");
			a = true
		}
		if (a) {
			return false
		} else {
			var b = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
			if (!b.test($(".pedidosEmail2").val())) {
				sweetAlert("Oops...", "Informe um email válido!", "error");
				return false
			} else {
				$(".pedidoSucesso").slideToggle(300);
				$(".contentPedidosControl").slideToggle(300);
				$.post(templateDir+"/assets/envioPedidosWidget.php", $(".formPedidosWidget .formPedido").serialize(), function(c) {
					if (c == "0") {
						$(".pedidosEmail2").val("Ex.: seuemail@email.com.br");
					}
				});
				console.log($(".formPedidosWidget .formPedido").serialize());
				return false
			}
		}
	} else {
		sweetAlert("Oops...", "Robo detectado!", "error");
		return false
	}
};


$(function() {
	$('.bottomSidebar .widgetContainer').addClass('col-md-3');
});