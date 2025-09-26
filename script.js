        // Estado do player
        let isPlaying = false;
        let currentVolume = 70;
        let audioPlayer = null;
        const streamUrl = 'https://stream.zeno.fm/cbzw2rbebfkuv';

        // Inicializar player de áudio
        function initAudioPlayer() {
            if (!audioPlayer) {
                audioPlayer = new Audio();
                audioPlayer.src = streamUrl;
                audioPlayer.preload = 'none';
                audioPlayer.volume = currentVolume / 100;
                
                // Event listeners do áudio
                audioPlayer.addEventListener('loadstart', function() {
                    console.log('Carregando stream...');
                });
                
                audioPlayer.addEventListener('canplay', function() {
                    console.log('Stream pronto para reproduzir');
                });
                
                audioPlayer.addEventListener('error', function(e) {
                    console.error('Erro no stream:', e);
                    alert('Erro ao conectar com a rádio. Tente novamente em alguns instantes.');
                    resetPlayer();
                });
                
                audioPlayer.addEventListener('ended', function() {
                    // Para streams ao vivo, isso normalmente não acontece
                    resetPlayer();
                });
            }
        }

        // Resetar player
        function resetPlayer() {
            const playBtn = document.getElementById('playBtn');
            const equalizer = document.getElementById('equalizer');
            
            playBtn.innerHTML = '<i class="fas fa-play"></i> Ouvir Ao Vivo';
            equalizer.style.display = 'none';
            isPlaying = false;
            
            if (audioPlayer) {
                audioPlayer.pause();
                audioPlayer.currentTime = 0;
            }
        }

        // Controle do player
        function togglePlay() {
            const playBtn = document.getElementById('playBtn');
            const equalizer = document.getElementById('equalizer');
            
            initAudioPlayer();
            
            if (isPlaying) {
                // Pausar
                audioPlayer.pause();
                playBtn.innerHTML = '<i class="fas fa-play"></i> Ouvir Ao Vivo';
                equalizer.style.display = 'none';
                isPlaying = false;
            } else {
                // Reproduzir
                playBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Conectando...';
                
                audioPlayer.play().then(() => {
                    playBtn.innerHTML = '<i class="fas fa-pause"></i> Pausar';
                    equalizer.style.display = 'flex';
                    isPlaying = true;
                }).catch((error) => {
                    console.error('Erro ao reproduzir:', error);
                    alert('Não foi possível conectar com a rádio. Verifique sua conexão e tente novamente.');
                    resetPlayer();
                });
            }
        }

        // Controle de volume
        document.getElementById('volumeSlider').addEventListener('input', function(e) {
            currentVolume = e.target.value;
            if (audioPlayer) {
                audioPlayer.volume = currentVolume / 100;
            }
        });

        // Event listener para o botão play
        document.getElementById('playBtn').addEventListener('click', togglePlay);

        // Navegação entre seções
        function showSection(sectionName) {
            // Esconder todas as seções
            const sections = document.querySelectorAll('.section-content');
            sections.forEach(section => section.classList.add('hidden'));
            
            // Mostrar seção selecionada
            document.getElementById(sectionName).classList.remove('hidden');
            
            // Atualizar navegação
            const navItems = document.querySelectorAll('.nav-item');
            navItems.forEach(item => {
                item.classList.remove('active');
            });
            
            event.target.classList.add('active');
        }

        // Controle de modais
        function openModal(modalId) {
            document.getElementById(modalId).classList.add('active');
        }

        function closeModal(modalId) {
            document.getElementById(modalId).classList.remove('active');
        }

        // Fechar modal clicando fora
        document.addEventListener('click', function(e) {
            if (e.target.classList.contains('modal')) {
                e.target.classList.remove('active');
            }
        });

        // Submissão de pedido de música
        function submitMusicRequest(event) {
            event.preventDefault();
            alert('Pedido de música enviado com sucesso! Obrigado pela participação.');
            closeModal('musicRequestModal');
            event.target.reset();
        }

        // Submissão de recado
        function submitMessage(event) {
            event.preventDefault();
            const formData = new FormData(event.target);
            const name = event.target.querySelector('input[type="text"]').value;
            const message = event.target.querySelector('textarea').value;
            
            // Adicionar mensagem ao mural
            const messagesWall = document.getElementById('messagesWall');
            const newMessage = document.createElement('div');
            newMessage.className = 'bg-gray-50 p-4 rounded-lg';
            newMessage.innerHTML = `
                <div class="flex items-start space-x-3">
                    <div class="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                        <span class="text-white font-semibold">${name.charAt(0).toUpperCase()}</span>
                    </div>
                    <div class="flex-1">
                        <div class="flex items-center space-x-2 mb-1">
                            <span class="font-semibold text-gray-800">${name}</span>
                            <span class="text-xs text-gray-500">agora</span>
                        </div>
                        <p class="text-gray-700">${message}</p>
                    </div>
                </div>
            `;
            messagesWall.insertBefore(newMessage, messagesWall.firstChild);
            
            alert('Recado publicado com sucesso!');
            closeModal('messageModal');
            event.target.reset();
        }

        // Filtro de notícias
        function filterNews(category) {
            const newsItems = document.querySelectorAll('.news-item');
            const filterBtns = document.querySelectorAll('.filter-btn');
            
            // Atualizar botões
            filterBtns.forEach(btn => {
                btn.classList.remove('bg-blue-600', 'text-white');
                btn.classList.add('bg-gray-200', 'text-gray-700');
            });
            event.target.classList.remove('bg-gray-200', 'text-gray-700');
            event.target.classList.add('bg-blue-600', 'text-white');
            
            // Filtrar itens
            newsItems.forEach(item => {
                if (category === 'todas' || item.dataset.category === category) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        }

        // Controle da galeria
        function showGalleryTab(tabName) {
            const tabs = document.querySelectorAll('.gallery-tab');
            const contents = document.querySelectorAll('.gallery-content');
            
            // Atualizar tabs
            tabs.forEach(tab => {
                tab.classList.remove('bg-blue-600', 'text-white');
                tab.classList.add('bg-gray-200', 'text-gray-700');
            });
            event.target.classList.remove('bg-gray-200', 'text-gray-700');
            event.target.classList.add('bg-blue-600', 'text-white');
            
            // Mostrar conteúdo
            contents.forEach(content => content.classList.add('hidden'));
            document.getElementById(tabName + 'Gallery').classList.remove('hidden');
        }

        // Enquete
        function votePoll() {
            const selectedOption = document.querySelector('input[name="poll"]:checked');
            if (selectedOption) {
                alert('Voto registrado com sucesso! Obrigado pela participação.');
            } else {
                alert('Por favor, selecione uma opção antes de votar.');
            }
        }

        // Funções placeholder para detalhes
        function openNewsDetail(newsId) {
            alert('Abrindo detalhes da notícia: ' + newsId);
        }

        function openBlogPost(postId) {
            alert('Abrindo post do blog: ' + postId);
        }

        function openEventDetail(eventId) {
            alert('Abrindo detalhes do evento: ' + eventId);
        }

        function openPhotoModal(photoId) {
            alert('Abrindo foto: ' + photoId);
        }

        // Atualizar "tocando agora" periodicamente
        const songs = [
            "♪ Tocando agora: Sua música favorita",
            "♪ No ar: Sucessos que você ama",
            "♪ Tocando: Os melhores hits",
            "♪ Agora: Música para todos os gostos"
        ];

        let songIndex = 0;
        setInterval(() => {
            document.getElementById('nowPlaying').textContent = songs[songIndex];
            songIndex = (songIndex + 1) % songs.length;
        }, 10000);

        // Inicialização
        document.addEventListener('DOMContentLoaded', function() {
            // Mostrar seção inicial
            showSection('home');
        });
