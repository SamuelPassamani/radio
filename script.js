/*
Script principal para inicializar todos os componentes interativos da página.
*/

$(document).ready(function() {

    // --- Lógica do Player de Rádio ---
    const player = document.getElementById("player");
    const superPlayer = $('#superPlayer');
    const closeOpenPlay = $('.closeOpenPlay');
    const playPauseBtn = $('.playPause');

    // Abrir/Fechar o player lateral
    closeOpenPlay.on('click', function() {
        if ($(this).hasClass('open')) {
            superPlayer.animate({ 'right': '-350px' }, 300);
            $(this).removeClass('open').addClass('closed');
        } else {
            superPlayer.animate({ 'right': '0px' }, 300);
            $(this).removeClass('closed').addClass('open');
        }
    });

    // Botão Play/Pause
    playPauseBtn.on('click', function() {
        if ($(this).hasClass('playing')) {
            player.pause();
            $(this).removeClass('playing').addClass('stoped');
        } else {
            player.play();
            $(this).removeClass('stoped').addClass('playing');
        }
    });

    // Controle de Volume com jQuery UI Slider
    if ($('#slider').length > 0) {
        $('#slider').slider({
            range: "min",
            value: 50,
            min: 0,
            max: 100,
            animate: true,
            slide: function(event, ui) {
                if (player) {
                    player.volume = ui.value / 100;
                }
            },
            change: function(event, ui) {
                if (player) {
                    player.volume = ui.value / 100;
                }
            }
        });
    }

    // --- Inicialização dos Sliders (usando FlexSlider) ---

    // Slider Principal
    if ($('#firstSlider').length > 0) {
        $('#firstSlider').flexslider({
            animation: "slide",
            controlNav: true,
            directionNav: true,
            animationLoop: true,
            slideshow: true,
            slideshowSpeed: 5000,
            animationSpeed: 600,
        });
    }

    // Slider de Notícias
    if ($('#seccondSlider').length > 0) {
        $('#seccondSlider').flexslider({
            animation: "slide",
            animationLoop: false,
            itemWidth: 280, // Ajuste a largura do item conforme necessário
            itemMargin: 20,
            minItems: 1,
            maxItems: 4,
            controlNav: false,
            directionNav: true
        });
    }

    // --- Inicialização das Galerias ---

    // Galeria com Lightbox (usando Colorbox)
    if ($('a.cboxElement').length > 0) {
        $('a.cboxElement').colorbox({
            rel: 'group1',
            transition: 'fade',
            width: '85%',
            height: '85%'
        });
    }

    // Galeria em Mosaico (usando Masonry)
    if ($('.mosaicflow').length > 0) {
        $('.mosaicflow').masonry({
            itemSelector: '.gallery-item',
            columnWidth: '.gallery-item',
            percentPosition: true
        });
    }

    // Lógica para o formulário de pedido de música
    $('.pedidoMusicaWidget').on('click', function(e) {
        e.preventDefault();
        // A lógica do formulário (exibir/esconder) deve ser adicionada aqui.
        // Por enquanto, apenas um alerta para indicar que funciona.
        alert('Abrir formulário de pedido de música!');
    });

    // Lógica para o mural de recados
    $('.openFormShout').on('click', function(e) {
        e.preventDefault();
        // A lógica para o formulário do mural deve ser adicionada aqui.
        alert('Abrir formulário do mural de recados!');
    });

});