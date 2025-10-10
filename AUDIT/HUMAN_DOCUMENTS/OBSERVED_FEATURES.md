# Funcionalidades Observadas

Esta seção detalha as funcionalidades identificadas na aplicação "Sound PRO" com base na análise do código-fonte e na captura de tela.

## 1. Player de Rádio Principal (`#superPlayer`)

*   **Descrição:** Um player de rádio persistente localizado no lado direito da tela. Ele exibe a música que está tocando, a arte do álbum e as músicas recentes.
*   **Implementação:**
    *   O player é controlado por JavaScript (principalmente em `index.html` e `assets/js/scripts.js`).
    *   Utiliza a tag `<audio>` do HTML5 para o streaming de áudio, com o endereço do stream (`cast2.hoost.com.br:20000/stream`) codificado em campos `input` ocultos no `index.html`.
    *   A informação da música (`streaminfo`) é obtida dinamicamente através de scripts como `streaminfo.js` e `recenttracks.js`.
*   **Como Acionar:**
    *   O player carrega e inicia automaticamente (`autoplay`) quando a página é aberta.
    *   O usuário pode controlar o play/pause e o volume.
    *   Um botão "close/open" (`closeOpenPlay`) permite ocultar e exibir o player.
*   **Confiança:** `[ALTO]`

## 2. Destaque de Vídeo

*   **Descrição:** Uma seção na coluna central que exibe um vídeo em destaque do YouTube.
*   **Implementação:**
    *   Um `<iframe>` do YouTube está embutido diretamente no `index.html`.
    *   O URL do vídeo (`https://www.youtube.com/embed/0KSOMA3QBU0`) está codificado no atributo `src` do `iframe`.
*   **Observação:** Um relatório de auditoria anterior indicava que este componente estava quebrado devido a uma implementação estática. **Esta funcionalidade foi corrigida** e agora usa o método de incorporação padrão e funcional do YouTube.
*   **Confiança:** `[ALTO]`

## 3. Navegação e Carregamento de Página via AJAX

*   **Descrição:** A navegação principal do site (Sobre-nós, Notícias, Blog, etc.) carrega o conteúdo dinamicamente na área principal sem recarregar a página inteira.
*   **Implementação:**
    *   A lógica é controlada pelo script `assets/js/ajax-page-loader.js`.
    *   Este script intercepta os cliques nos links do menu, faz uma requisição AJAX para buscar o conteúdo da página de destino e o injeta na div `#containerAjaxfy` usando `innerHTML`.
*   **Observação:** Esta é uma implementação personalizada e insegura. Veja o relatório de segurança para mais detalhes sobre a vulnerabilidade de XSS.
*   **Confiança:** `[MÉDIO]` (Funcionalidade inferida do código, não foi possível testar todas as rotas).

## 4. Formulários de Interação

*   **Descrição:** A aplicação possui múltiplos formulários para interação do usuário:
    1.  **Pedido de Música:** Permite aos usuários solicitar uma música.
    2.  **Mural de Recados:** Um sistema de comentários públicos.
    3.  **Enquete:** Um widget de enquete para votação.
*   **Implementação:**
    *   Os formulários são HTML padrão e as submissões são tratadas por JavaScript.
    *   O formulário de pedido de música envia os dados para um endpoint não especificado, provavelmente um script PHP, conforme sugerido pela estrutura do projeto original.
    *   O mural de recados (`schreikasten`) é um plugin jQuery que parece gerenciar os comentários no lado do cliente.
*   **Confiança:** `[MÉDIO]`

## 5. Galerias de Fotos e Notícias

*   **Descrição:** Seções que exibem listas de notícias, posts de blog e galerias de imagens em carrosséis e mosaicos.
*   **Implementação:**
    *   Utiliza plugins jQuery como `bxSlider` para os carrosséis de notícias e sliders principais.
    *   A galeria de fotos utiliza um layout de mosaico, provavelmente controlado por um plugin jQuery.
    *   Todo o conteúdo (imagens, textos, links) está codificado diretamente no `index.html`. Não há um sistema de gerenciamento de conteúdo (CMS) aparente no lado do cliente.
*   **Confiança:** `[ALTO]`

## 6. Integração com Redes Sociais

*   **Descrição:** Links para perfis de redes sociais (Facebook, Twitter, Instagram) e widgets para compartilhamento e visualização de conteúdo social.
*   **Implementação:**
    *   Links diretos (`<a>`) para as páginas das redes sociais.
    *   Um widget do Facebook (`fb-page`) está embutido para exibir a página da rádio.
    *   Um botão de WhatsApp flutuante para contato direto.
*   **Confiança:** `[ALTO]`