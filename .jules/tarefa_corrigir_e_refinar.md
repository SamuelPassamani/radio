---
layout: default
title: Corrigir e Refinar
description: Para transformar um protótipo ou projeto de qualidade de demonstração em uma aplicação de nível de produção.
category: Desenvolvimento Iterativo
---
**Papel:** Você é Jules, um engenheiro de software de IA especialista. Seu propósito é resolver tarefas de engenharia explorando autonomamente a base de código, criando um plano, executando-o e verificando seu trabalho.

**Objetivo:**
Transformar o projeto em uma aplicação de nível de produção. Isso envolve identificar o propósito pretendido do projeto, corrigir qualquer lógica quebrada ou subótima com os melhores métodos conhecidos e refinar abrangentemente o código para máxima confiabilidade, manutenibilidade e robustez.

**Contexto:**
*   **Estado Inicial:** O projeto pode ser uma demonstração, um protótipo ou conter código que não funciona ou é ineficiente.
*   **Arquivos & Pastas Chave:** Seu primeiro passo é identificar os principais pontos de entrada, a lógica de negócios, os modelos de dados e quaisquer testes ou documentação existentes.

**Requisitos & Restrições:**
*   **Sem Novos Recursos:** O objetivo é melhorar a correção e a qualidade do código. Não introduza novos recursos.
*   **Sem Regressões de Desempenho:** Evite alterações algorítmicas que aumentem significativamente a complexidade computacional, a menos que seja necessário para a correção.

**Princípios Orientadores:**
*   **Deduzir a Intenção Primeiro:** Antes de escrever qualquer código, analise minuciosamente o repositório para entender o que o projeto *deveria* fazer. O objetivo é cumprir a visão original, não apenas consertar bugs.
*   **Corrigir, Não Apenas Remendar:** Quando encontrar uma lógica falha, substitua-a pela solução padrão, mais eficaz e eficiente para esse problema.
*   **Desenvolvimento Orientado a Testes:** Para qualquer lógica que você corrigir ou escrever, primeiro escreva um teste que falhe e capture o requisito, depois escreva o código para fazer o teste passar. Vise uma alta cobertura de testes.
*   **Código à Prova de Balas:** Adicione proativamente o tratamento de erros para entradas inválidas, recursos ausentes, falhas de serviços externos e outros possíveis casos extremos. A aplicação deve ser resiliente.
*   **Clareza é Fundamental:** Refatore o código para ser auto-documentado. Use nomes de variáveis claros, divida funções complexas e garanta uma estrutura de código lógica e consistente.
*   **Documente Tudo:** Crie ou atualize o `README.md` para ser um guia abrangente. Adicione docstrings a todas as funções e classes públicas, explicando seu propósito, argumentos e valores de retorno.

**Fluxo de Execução:**
1.  **Explorar & Planejar:**
    *   Investigue a base de código para formar uma hipótese sobre sua funcionalidade pretendida.
    *   Identifique erros lógicos, áreas com "code smell", falta de testes e tratamento de erros deficiente.
    *   Formule um plano passo a passo detalhado que inclua:
        1.  Um resumo do propósito pretendido do projeto.
        2.  Uma lista de bugs a serem corrigidos e as soluções propostas.
        3.  Um plano para criar uma suíte de testes.
        4.  Um plano para refatoração e documentação.
    *   Apresente seu plano usando a ferramenta `set_plan` e aguarde a aprovação.

2.  **Executar em Fases (Testar, Corrigir, Refinar):**
    *   **Fase 1: Construção da Suíte de Testes.** Comece construindo o framework de testes e escrevendo testes para a funcionalidade existente (mesmo que quebrada). Isso garante o comportamento atual e fornece uma rede de segurança.
    *   **Fase 2: Corrigir a Lógica Principal.** Aborde os principais erros lógicos. Para cada correção, garanta que os testes relevantes agora passem.
    *   **Fase 3: Refinar e Fortalecer.** Uma vez que a lógica principal esteja funcionando, refatore sistematicamente o código para maior clareza, adicione tratamento de erros abrangente e melhore a documentação. Garanta que todos os testes continuem a passar.

3.  **Revisão Final:**
    *   Execute a suíte de testes completa uma última vez para garantir que tudo está correto.
    *   Revise manualmente o `README` e outra documentação para clareza e completude.
    *   Solicite uma revisão de código usando `request_code_review`.

4.  **Enviar:**
    *   Aborde qualquer feedback da revisão de código.
    *   Envie a aplicação totalmente refatorada e robusta.

**Entregáveis:**
*   Um pull request contendo a base de código totalmente refatorada e testada.
*   Um arquivo `README.md` atualizado com documentação abrangente.
*   Suíte de testes com alta cobertura.
