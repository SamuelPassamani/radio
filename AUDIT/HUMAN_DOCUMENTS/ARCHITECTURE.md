# Arquitetura da Aplicação

Esta seção descreve a arquitetura do sistema "Sound PRO" com base na análise do código-fonte.

## 1. Visão Geral da Arquitetura

A arquitetura da aplicação é a de um **frontend monolítico e estático**. Essencialmente, toda a aplicação está contida em um único arquivo `index.html` que carrega uma série de ativos CSS e JavaScript. Não há um framework de frontend moderno (como React, Angular ou Vue) nem um sistema de build para gerenciar o código.

A lógica é fortemente acoplada à estrutura do DOM e depende exclusivamente de **jQuery** para manipulação de elementos, eventos e requisições AJAX.

## 2. Diagrama da Arquitetura

O diagrama abaixo ilustra a interação entre os componentes do sistema.

```
+--------------------------------+
|       Navegador do Usuário     |
+--------------------------------+
               |
               | Carrega
               v
+--------------------------------+
|          index.html            |
| (Contém HTML, CSS e JS embutidos)|
+--------------------------------+
      |                ^
      | Carrega        | Injeta Conteúdo (AJAX)
      v                |
+--------------------------------+
|         Ativos Locais          |
|--------------------------------|
| - assets/js/ (jQuery, plugins) |
| - assets/css/ (Bootstrap, etc) |
| - assets/images/               |
+--------------------------------+
      |
      | Requisições (Player, Formulários)
      v
+--------------------------------+      +--------------------------------+
|    Servidor de Streaming       |      |      Backend (PHP - Inferido)  |
|   (cast2.hoost.com.br)         |----->| (Processa Pedidos/Recados)     |
+--------------------------------+      +--------------------------------+
```

## 3. Componentes Principais

### Frontend

*   **`index.html`**: O ponto de entrada e o coração da aplicação. Ele contém:
    *   A estrutura HTML de toda a página.
    *   Grandes blocos de CSS embutido (`<style>`).
    *   Grandes blocos de JavaScript embutido (`<script>`), principalmente para inicializar plugins jQuery e manipular o DOM.
*   **`assets/`**: O diretório que armazena todos os ativos estáticos.
    *   **`js/`**: Contém a versão vulnerável do jQuery, vários plugins jQuery e alguns scripts de lógica de aplicação (`ajax-page-loader.js`, `scripts.js`). As bibliotecas estão fisicamente presentes no repositório em vez de serem gerenciadas por um gerenciador de pacotes.
    *   **`css/`**: Contém as folhas de estilo, incluindo uma versão desatualizada do Bootstrap.
    *   **`images/`**: Contém todas as imagens usadas na interface.
*   **`ajax-page-loader.js`**: Um componente crítico que lida com o carregamento de conteúdo dinâmico. Ele previne o recarregamento completo da página, mas o faz de maneira insegura, contribuindo para vulnerabilidades de segurança.

### Backend (Inferido)

*   **Servidor de Streaming:** Um serviço externo (`cast2.hoost.com.br`) fornece o fluxo de áudio para o player de rádio. A aplicação se conecta a este serviço para obter os dados da música e o áudio.
*   **Servidor de Aplicação (PHP):** Embora o código não esteja no repositório, a funcionalidade de formulários (pedidos de música, mural de recados) implica a existência de um backend, provavelmente em PHP, para receber e processar esses dados.

## 4. Fluxo de Dados e Lógica

1.  O usuário acessa o `index.html`.
2.  O navegador carrega todos os arquivos CSS e JS vinculados e embutidos.
3.  O player de rádio inicia uma conexão com o servidor de streaming para tocar música e buscar metadados.
4.  Quando um usuário clica em um link de navegação, o `ajax-page-loader.js` intercepta o clique, faz uma requisição GET para o URL do link e injeta a resposta HTML no corpo da página.
5.  Quando um usuário envia um formulário (ex: pedido de música), os dados são enviados via POST para um endpoint do servidor backend (não visível no código).

## 5. Avaliação da Arquitetura

*   **Pontos Fracos:**
    *   **Monolítica e Acoplada:** A falta de separação entre conteúdo (HTML), apresentação (CSS) и lógica (JS) torna o código difícil de entender e manter.
    *   **Ausência de Gerenciamento de Dependências:** A inclusão manual de bibliotecas no repositório é uma prática de alto risco que dificulta atualizações e o gerenciamento de vulnerabilidades.
    *   **Insegura:** A arquitetura de carregamento de conteúdo via AJAX é fundamentalmente insegura.
    *   **Não Escalável:** Adicionar novas funcionalidades ou modificar as existentes é um processo propenso a erros e demorado.

*   **Nível de Confiança:** `[ALTO]` (A arquitetura do frontend é claramente visível no código. A arquitetura do backend é uma inferência lógica baseada nas funcionalidades observadas).