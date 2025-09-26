document.addEventListener('DOMContentLoaded', () => {
    // --- Audio Player ---
    const playBtn = document.getElementById('playBtn');
    const volumeSlider = document.getElementById('volumeSlider');
    const liveStatus = document.getElementById('live-status');

    let isPlaying = false;
    // Using a placeholder stream URL. Replace with the actual one if available.
    const streamUrl = 'https://stream.zeno.fm/cbzw2rbebfkuv';
    let audioPlayer;

    function initAudioPlayer() {
        if (!audioPlayer) {
            audioPlayer = new Audio(streamUrl);
            audioPlayer.volume = volumeSlider.value / 100;

            audioPlayer.onplaying = () => {
                isPlaying = true;
                playBtn.innerHTML = '<i class="fas fa-pause"></i>';
                liveStatus.textContent = "NO AR";
                liveStatus.style.color = "#0f0"; // Green color for "NO AR"
            };

            audioPlayer.onpause = () => {
                isPlaying = false;
                playBtn.innerHTML = '<i class="fas fa-play"></i>';
                liveStatus.textContent = "AO VIVO";
                liveStatus.style.color = "#fff";
            };

            audioPlayer.onerror = () => {
                alert("Não foi possível conectar à rádio. Tente novamente mais tarde.");
                isPlaying = false;
                playBtn.innerHTML = '<i class="fas fa-play"></i>';
                liveStatus.textContent = "OFFLINE";
                liveStatus.style.color = "#f00"; // Red for offline
            };
        }
    }

    playBtn.addEventListener('click', () => {
        initAudioPlayer();
        if (isPlaying) {
            audioPlayer.pause();
        } else {
            audioPlayer.play();
        }
    });

    volumeSlider.addEventListener('input', () => {
        if (audioPlayer) {
            audioPlayer.volume = volumeSlider.value / 100;
        }
    });

    // --- Forms ---
    const musicRequestForm = document.getElementById('musicRequestForm');
    musicRequestForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Seu pedido de música foi enviado. Obrigado!');
        musicRequestForm.reset();
    });

    const pollForm = document.getElementById('pollForm');
    pollForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (pollForm.querySelector('input[name="poll"]:checked')) {
            alert('Voto computado com sucesso. Obrigado por participar!');
            pollForm.reset();
        } else {
            alert('Por favor, selecione uma opção para votar.');
        }
    });
});