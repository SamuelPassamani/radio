$(document).ready(function() {
    const player = document.getElementById("player");
    const superPlayer = $('#superPlayer');
    const closeOpenPlay = $('.closeOpenPlay');
    const playPauseBtn = $('.playPause');

    // Toggle Player Visibility
    closeOpenPlay.on('click', function() {
        if ($(this).hasClass('open')) {
            superPlayer.css('right', '-350px');
            $(this).removeClass('open').addClass('closed');
        } else {
            superPlayer.css('right', '0px');
            $(this).removeClass('closed').addClass('open');
        }
    });

    // Play/Pause Audio
    playPauseBtn.on('click', function() {
        if ($(this).hasClass('playing')) {
            player.pause();
            $(this).removeClass('playing').addClass('stoped');
        } else {
            player.play();
            $(this).removeClass('stoped').addClass('playing');
        }
    });

    // Note: Volume slider functionality requires jQuery UI, which is not included yet
    // to keep this step focused. It can be added later if needed.
});