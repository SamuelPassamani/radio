# Dependências e Ambiente

Esta seção descreve as dependências de software e os requisitos de ambiente para a aplicação "Sound PRO".

## 1. Dependências de Frontend

A aplicação não utiliza um gerenciador de pacotes moderno como `npm` ou `yarn`. Todas as dependências de JavaScript são bibliotecas jQuery ou plugins jQuery que estão incluídos diretamente no repositório, localizados principalmente em `assets/js/`.

### Bibliotecas JavaScript Identificadas

| Biblioteca | Versão | Arquivo(s) | Nível de Risco | Observações |
| :--- | :--- | :--- | :--- | :--- |
| **jQuery** | **1.8.1** | `assets/js/jquery.js` | `[CRÍTICO]` | Versão extremamente desatualizada com múltiplas vulnerabilidades de segurança conhecidas (XSS). **A atualização é a prioridade máxima.** |
| **jQuery UI** | 1.10.3 | `assets/js/jquery-ui.min.js` | `[ALTO]` | Versão desatualizada. Embora não seja tão crítico quanto o jQuery core, ela também pode conter falhas de segurança. |
| **bxSlider** | 4.1.2 | `assets/js/jquery.bxslider.min.js` | `[MÉDIO]` | Biblioteca de carrossel. A versão está desatualizada. |
| **Sweet Alert** | (Não especificada) | `assets/js/sweet-alert.min.js` | `[MÉDIO]` | Versão não identificada, mas o código parece ser de uma versão legada da biblioteca. |
| **Colorbox** | (Não especificada) | `assets/js/jquery.colorbox-min.js` | `[MÉDIO]` | Plugin de lightbox para jQuery. Versão desatualizada. |
| **Schreikasten (Mural de Recados)** | (Não especificada) | `assets/js/schreikasten.js` | `[ALTO]` | Plugin personalizado ou de nicho para mural de recados. O código manipula o DOM de forma insegura. |
| **SoundManager 2** | (Não especificada) | `assets/js/soundmanager2.js` | `[BAIXO]` | Biblioteca para manipulação de áudio, usada pelo player. |

### Dependências de CSS

*   **Bootstrap:** Versão 3.x (inferido de `assets/css/bootstrap.min.css`). Também está desatualizado.
*   **Font Awesome:** Biblioteca de ícones.
*   **Google Fonts:** As fontes são carregadas via tag `<link>` no HTML, o que é uma prática aceitável.

## 2. Ambiente de Execução

*   **Tipo:** Aplicação puramente de frontend.
*   **Servidor Web:** Pode ser servida por qualquer servidor web estático (Apache, Nginx, etc.).
*   **Navegador:** A aplicação foi projetada para navegadores da era do jQuery 1.8, mas renderiza em navegadores modernos, como evidenciado pela captura de tela com o Chromium. A compatibilidade com navegadores mais antigos é provável, mas não garantida.

## 3. Ambiente de Build e Implantação

*   **Sistema de Build:** **Inexistente.** Não há ferramentas como Vite, Webpack, Gulp ou Grunt. A ausência de um sistema de build significa que os ativos (`.js`, `.css`) não são minificados, otimizados ou processados de forma automática.
*   **Implantação (Deploy):** O arquivo `src/netlify.toml` indica que o projeto pode ser implantado na Netlify. A configuração de redirecionamento (`redirects`) sugere que este repositório pode ser um espelho ou um frontend para outro serviço (`https://35ef8677.radio-f2e.pages.dev`).

## 4. Requisitos de Backend (Inferido)

*   **Linguagem:** **PHP.** A presença de formulários HTML que submetem dados sem uma lógica de cliente visível para processamento sugere um backend. O código original de onde este template foi derivado provavelmente utilizava PHP para tratar os pedidos de música e outras interações.
*   **Banco de Dados:** **Desconhecido.** Um backend PHP normalmente seria apoiado por um banco de dados como MySQL ou PostgreSQL para armazenar recados, pedidos de música, etc.

**Confiança Geral:** `[ALTO]` (Baseado na análise direta dos arquivos do repositório).