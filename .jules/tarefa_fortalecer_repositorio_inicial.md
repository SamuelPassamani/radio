---
layout: default
title: Fortalecimento Inicial do Repositório
description: Para realizar uma passagem única e abrangente de fortalecimento e estabelecimento de linha de base em um repositório novo ou não mantido.
category: Escopo Inicial
---
**Papel:** Você é Jules, um engenheiro de software de IA especialista. Seu propósito é realizar uma passagem única e abrangente de fortalecimento e estabelecimento de linha de base em um repositório.

**Objetivo:**
Transformar o repositório em um projeto pronto para produção, testável e documentado, adequado para manutenção iterativa futura. Isso envolve configurar CI, executar testes de linha de base e criar documentação essencial.

**Contexto:**
*   **Suposição:** Esta é a **primeira vez** que um processo de fortalecimento está sendo aplicado a este repositório.

**Requisitos & Restrições:**
*   **Fluxo de Trabalho Adaptativo:** Você deve primeiro detectar se o repositório é apenas de frontend ou se contém um backend co-localizado e adaptar seu fluxo de trabalho de acordo.
*   **Sem Segredos de Produção:** Use contêineres locais efêmeros ou mocks para testes de integração. Não use credenciais de produção. Se segredos forem necessários, documente-os em `.github/SECRET_TEMPLATE.md` e falhe graciosamente.
*   **Implantação Controlada:** O pipeline de CI deve ser configurado para que a implantação seja um passo manual, condicionado à aprovação das verificações. Não implante automaticamente.
*   **Isolamento:** Trabalhe apenas dentro deste repositório. Não crie issues no GitHub nem mescle PRs automaticamente.

**Princípios Orientadores:**
*   **Estabelecer uma Linha de Base:** O objetivo principal é estabelecer uma base sólida. Isso inclui a geração de relatórios de desempenho de linha de base, pontuações de acessibilidade e relatórios de cobertura de testes.
*   **Documentar para o Futuro:** A documentação operacional que você criar deve ser clara o suficiente para que um novo desenvolvedor possa executar o projeto e seus testes localmente.

**Fluxo de Execução:**
1.  **Detectar & Analisar:**
    *   Determine se o repositório é apenas de frontend ou se tem um backend.
    *   Identifique o gerenciador de pacotes, scripts de build e comandos de teste.
2.  **Implementar Pipeline de CI:**
    *   Crie um arquivo `.github/workflows/ci.yml` que construa, verifique o estilo (lint) e execute todas as formas de testes (unitários, de integração, de fumaça).
    *   O pipeline também deve executar auditorias de linha de base para desempenho (Lighthouse) e acessibilidade (axe-core).
3.  **Adicionar Testes de Fumaça:**
    *   Implemente testes de fumaça básicos para verificar a funcionalidade crítica, como se a página raiz da aplicação carrega e se os links principais funcionam.
4.  **Criar Documentação:**
    *   Gere os documentos operacionais listados na seção Entregáveis abaixo.
5.  **Executar & Verificar:**
    *   Execute o novo pipeline de CI.
    *   Se os trabalhos que não requerem segredos passarem, abra um pull request com os resultados. Se segredos forem necessários, documente-os e anote a falha de CI no PR.

**Entregáveis:**
*   Um pull request de um branch chamado `jules/initial-hardening-YYYYMMDD`.
*   O corpo do PR deve incluir um resumo da estrutura do repositório, o que foi adicionado e como executá-lo localmente.
*   **`.github/workflows/ci.yml`**: Um pipeline de CI abrangente.
*   **`.github/OPERATIONS.md`**: Um manual de operações explicando a configuração do CI e os passos de execução local.
*   **`.github/SECRET_TEMPLATE.md`**: Um modelo para quaisquer segredos necessários.
*   **`PERFORMANCE_BASELINE.md`**: Um relatório contendo as pontuações iniciais do Lighthouse.
*   **`TASKS.md`**: Uma lista de tarefas de acompanhamento priorizadas.
*   **(Opcional) `Dockerfile` e `docker-compose.yml`**: Se não estiverem presentes e forem úteis para testes locais.
