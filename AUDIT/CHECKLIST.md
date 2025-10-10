# Checklist Pós-Auditoria para Mantenedores

Este checklist foi criado para ajudar os mantenedores do projeto "Sound PRO" a aplicar as correções e melhorias sugeridas nesta auditoria.

## Fase 1: Mitigação de Riscos Críticos (Ação Imediata)

-   [ ] **Atualizar jQuery para a versão 3.x:**
    -   [ ] Substituir o arquivo `assets/js/jquery.js` pela versão mais recente.
    -   [ ] Testar todas as funcionalidades que dependem de jQuery (sliders, menus, player) para garantir que não haja quebras de compatibilidade.
    -   [ ] Corrigir qualquer código que utilize APIs do jQuery 1.8 que foram depreciadas ou removidas.

-   [ ] **Refatorar o Carregador de Página AJAX (`ajax-page-loader.js`):**
    -   [ ] Modificar a lógica para que, em vez de carregar e injetar HTML bruto, ela busque dados em formato JSON.
    -   [ ] Usar métodos seguros de manipulação do DOM (ex: `document.createElement`, `element.textContent`) para renderizar os dados no frontend.
    -   [ ] Garantir que todo o conteúdo gerado pelo usuário seja sanitizado no backend antes de ser enviado para o cliente.

-   [ ] **Implementar Proteção Anti-CSRF nos Formulários:**
    -   [ ] Gerar um token anti-CSRF único no servidor para cada sessão de usuário.
    -   [ ] Adicionar o token como um campo oculto em todos os formulários (`<input type="hidden" name="csrf_token" value="...">`).
    -   [ ] Validar o token no servidor em cada requisição POST.

## Fase 2: Melhoria da Qualidade e Manutenibilidade do Código

-   [ ] **Externalizar CSS e JavaScript Embutidos:**
    -   [ ] Mover todo o CSS dentro de tags `<style>` no `index.html` para um novo arquivo CSS (ex: `assets/css/main.css`).
    -   [ ] Mover todo o JavaScript dentro de tags `<script>` no `index.html` para um novo arquivo JS (ex: `assets/js/main.js`).
    -   [ ] Remover os blocos de código embutidos e linkar os novos arquivos no `<head>` e no final do `<body>`.

-   [ ] **Introduzir um Gerenciador de Pacotes e Sistema de Build:**
    -   [ ] Inicializar um projeto `npm` (`npm init`).
    -   [ ] Adicionar todas as dependências de frontend (jQuery, Bootstrap, etc.) ao `package.json` usando `npm install`.
    -   [ ] Configurar uma ferramenta de build como **Vite** ou **Webpack** para:
        -   Processar, minificar e agrupar os arquivos CSS e JS.
        -   Fornecer um servidor de desenvolvimento local.

-   [ ] **Remover Código Não Utilizado e Comentários Inapropriados:**
    -   [ ] Remover a função `getValues` não utilizada em `assets/js/scripts.js`.
    -   [ ] Fazer uma varredura no código em busca de comentários depreciativos ou inúteis e removê-los.

## Fase 3: Estabelecimento de Boas Práticas

-   [ ] **Configurar um Pipeline de CI/CD Básico:**
    -   [ ] Criar um workflow do GitHub Actions (`.github/workflows/main.yml`).
    -   [ ] Adicionar um passo para instalar as dependências (`npm install`).
    -   [ ] Adicionar um passo para executar linters (ESLint, Stylelint).
    -   [ ] Adicionar um passo para executar a suíte de testes.

-   [ ] **Expandir a Cobertura de Testes:**
    -   [ ] Escrever testes de ponta a ponta (E2E) com Playwright ou Cypress para as principais jornadas do usuário:
        -   O player de rádio funciona.
        -   A navegação AJAX carrega as páginas corretamente.
        -   Os formulários podem ser enviados.
        -   As galerias de imagens são exibidas.

-   [ ] **Realizar uma Auditoria de Segurança no Backend:**
    -   [ ] Contratar ou designar um especialista para revisar o código PHP do servidor em busca de vulnerabilidades (SQLi, RCE, etc.).