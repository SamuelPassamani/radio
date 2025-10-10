---
layout: default
---
# Guia da Biblioteca de Prompts do Jules

Este repositório contém uma biblioteca curada de prompts de tarefa pré-fabricados e legíveis por máquina que capacitam um engenheiro de software de IA como o Jules a transformar a intenção do usuário em trabalho de qualidade de produção. Este guia explica o propósito de cada prompt e fornece um fluxo de trabalho recomendado para usá-los em conjunto.

## Biblioteca de Prompts

## `template_master_prompt.md`

Este é o modelo mestre usado para criar e padronizar todos os outros prompts. Não se destina ao uso direto, mas serve como uma "cópia de ouro" para a engenharia de prompts.

---

## `task_generate_prompt_from_description.md`

**Propósito:** Gerar um novo prompt de alta qualidade a partir da descrição de um usuário.

Este prompt guia a IA para atuar como um engenheiro de prompts, pegando uma descrição de alto nível de uma tarefa e gerando um prompt completo e bem estruturado que segue os padrões desta biblioteca.

**Quando usar:**

-   Quando você tem uma ideia para um novo prompt, mas quer que a IA o ajude a escrevê-lo.
-   Para criar rapidamente novos prompts que sejam consistentes com os existentes na biblioteca.

---

## `task_audit_repo.md`

**Propósito:** Realizar uma auditoria abrangente e baseada em evidências de um repositório ou site ao vivo.

Este prompt guia a IA para produzir um relatório detalhado sobre o estado atual do projeto, incluindo suas funcionalidades, arquitetura, dependências, vulnerabilidades de segurança e métricas de desempenho. É um prompt focado na descoberta e não faz nenhuma alteração no código-base.

**Quando usar:**

-   Quando você é novo em um projeto e precisa entender como ele funciona.
-   Antes de iniciar um grande projeto de refatoração ou migração.
-   Como uma verificação de saúde periódica para um projeto.

---

## `task_analyze_and_improve_ui_ux.md`

**Propósito:** Analisar e melhorar a UI/UX do frontend de um repositório.

Este prompt guia a IA para realizar uma análise abrangente da UI/UX do site alvo e produzir um relatório com sugestões concretas de melhoria. As sugestões devem abranger usabilidade, design visual e experiência geral do usuário.

**Quando usar:**

-   Quando você deseja melhorar a experiência do usuário do seu site.
-   Antes de iniciar uma grande reformulação do seu site.
-   Quando você deseja obter uma nova perspectiva sobre a UI/UX do seu site.

---

## `task_harden_repo_initial.md`

**Propósito:** Realizar uma passagem única e abrangente de fortalecimento e estabelecimento de linha de base em um repositório novo ou não mantido.

Este prompt guia a IA para estabelecer uma base sólida para o desenvolvimento futuro. Envolve a criação de um pipeline de CI/CD, adição de linters, formatadores e testes de fumaça, estabelecimento de linhas de base de desempenho e acessibilidade e criação de documentação operacional essencial.

**Quando usar:**

-   Em um repositório totalmente novo para configurá-lo com as melhores práticas desde o início.
-   Em um repositório existente que carece de infraestrutura moderna de CI/CD e testes.

---

## `task_harden_repo_iterative.md`

**Propósito:** Realizar melhorias contínuas e iterativas em um repositório que já foi fortalecido.

Este prompt guia a IA para atuar como um desenvolvedor sênior ou guardião do produto, focando em corrigir instabilidades, melhorar a cobertura de testes e fazer pequenas melhorias de funcionalidades de alto impacto. Ele usa uma "Matriz de Verificação" abrangente para garantir que todas as alterações sejam seguras e confiáveis.

**Quando usar:**

-   Para manutenção regular e melhoria de um projeto maduro.
-   Para corrigir testes instáveis e melhorar a confiabilidade do pipeline de CI/CD.

---

## `task_fix_and_refine.md`

**Propósito:** Transformar um protótipo ou projeto de qualidade de demonstração em uma aplicação de nível de produção.

Este prompt guia a IA para identificar o propósito pretendido do projeto, corrigir bugs, refatorar código subótimo e melhorar a confiabilidade, manutenibilidade e robustez. Ele segue um fluxo de trabalho "Testar, Corrigir, Refinar" para garantir que todas as alterações sejam cobertas por testes.

**Quando usar:**

-   Quando você tem um protótipo funcional que precisa ser tornado mais robusto.
-   Para lidar com a dívida técnica e melhorar a qualidade geral de um código-base.

---

## `task_build_from_plan.md`

**Propósito:** Analisar o plano/projeto de um repositório e seu estado atual, e implementar iterativamente os próximos passos lógicos para construir um sistema robusto e de nível de produção.

Este prompt guia a IA para atuar como um desenvolvedor líder, pegando um plano de projeto e executando-o enquanto usa pesquisa na web para tomar decisões técnicas informadas e melhorias.

**Quando usar:**

-   Quando um projeto tem um documento de planejamento claro, mas precisa de implementação.
-   Para continuar o trabalho em um projeto parcialmente concluído que tem um roteiro definido.

---

## `task_update_dependencies.md`

**Propósito:** Atualizar as dependências de um projeto para suas versões compatíveis mais recentes.

Este prompt guia a IA para atualizar com segurança as dependências, garantindo que todos os testes passem e o projeto permaneça estável. Ele segue uma abordagem incremental e enfatiza a importância de ler os changelogs para evitar alterações que quebrem o código.

**Quando usar:**

-   Para manter as dependências de um projeto atualizadas e seguras.
-   Como uma tarefa de manutenção regular para evitar ficar muito para trás nas versões das dependências.

---

## `task_curate_repo.md`

**Propósito:** Analisar um repositório desconhecido, fazer melhorias seguras e reversíveis e fornecer um relatório claro.

Este prompt é projetado para situações em que o conteúdo e a estrutura de um repositório são desconhecidos ou sensíveis. Ele guia a IA para atuar como um curador cuidadoso, priorizando a segurança e a reversibilidade acima de tudo. Ele faz apenas um pequeno número de alterações seguras, como adicionar um README ou criar um manifesto de metadados.

**Quando usar:**

-   Quando você encontra um repositório sem documentação e precisa entender seu conteúdo.
-   Para curadoria em massa ou triagem de um grande número de repositórios.

## Fluxo de Trabalho Recomendado

Os prompts nesta biblioteca são projetados para serem complementares e podem ser usados em conjunto em uma sequência lógica. Aqui está um fluxo de trabalho recomendado para levar um projeto novo ou não mantido a um estado pronto para produção:

1.  **Audite o repositório.**
    -   **Prompt:** `task_audit_repo.md`
    -   **Objetivo:** Obter um entendimento profundo do estado atual do projeto.
    -   **Resultado:** Um relatório de auditoria abrangente que informará os próximos passos.

2.  **Fortaleça o repositório.**
    -   **Prompt:** `task_harden_repo_initial.md`
    -   **Objetivo:** Configurar um pipeline de CI/CD moderno e infraestrutura de testes.
    -   **Resultado:** Um repositório com verificações automatizadas de qualidade, desempenho e acessibilidade.

3.  **Corrija e refine o código-base.**
    -   **Prompt:** `task_fix_and_refine.md`
    -   **Objetivo:** Lidar com quaisquer bugs ou problemas de arquitetura encontrados na auditoria.
    -   **Resultado:** Um código-base robusto, confiável e bem documentado.

4.  **Realize manutenção contínua.**
    -   **Prompts:** `task_harden_repo_iterative.md` e `task_update_dependencies.md`
    -   **Objetivo:** Manter o projeto em bom estado ao longo do tempo.
    -   **Resultado:** Um projeto que é continuamente aprimorado e mantido atualizado.
