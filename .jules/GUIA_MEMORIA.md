```markdown

# Guia de Manutenção e Estratégia para a Memória Persistente do Agente

## 1. Visão Geral e Objetivo

Este documento estabelece as diretrizes para a manutenção da memória persistente do agente Jules. O objetivo é garantir que a memória seja um recurso eficiente, atualizado e livre de inconsistências, otimizando a performance e confiabilidade do agente a longo prazo. Uma gestão de memória inadequada pode levar a comportamentos desatualizados, confusão e degradação do desempenho.

## 2. Pilares da Estratégia de Gestão de Memória

Nossa estratégia é baseada em três pilares fundamentais:

### 2.1. Pilar 1: Hierarquização da Informação

Nem toda memória tem o mesmo peso ou longevidade. Para gerenciar a complexidade, as memórias devem ser categorizadas usando um sistema de tags no início de cada registro de memória.

**Categorias de Memória:**

*   **`[CRITICAL_DIRECTIVE]`**: Para regras de comportamento fundamentais e inegociáveis que se aplicam a todas as tarefas. São as memórias de mais alta prioridade.
    *   *Exemplo:* `[CRITICAL_DIRECTIVE] Todas as interações devem ser em Português (Brasil).`

*   **`[PROJECT_CONFIG]`**: Para configurações específicas do repositório que são essenciais para a configuração e a execução de tarefas.
    *   *Exemplo:* `[PROJECT_CONFIG] O servidor de desenvolvimento (wrangler dev) roda na porta 8787.`

*   **`[BEST_PRACTICE]`**: Para padrões de código, arquitetura ou fluxo de trabalho que se mostraram eficazes para este projeto.
    *   *Exemplo:* `[BEST_PRACTICE] Testes de Playwright devem usar dados únicos (ex: timestamp) para garantir a idempotência dos testes de registro.`

*   **`[TEMPORARY_LEARNING]`**: Para aprendizados pontuais ou soluções para problemas específicos que podem não ser relevantes a longo prazo.
    *   *Exemplo:* `[TEMPORARY_LEARNING] A dependência 'X' na versão '1.2.3' está com um bug conhecido; usar a versão '1.2.2' por enquanto.`

### 2.2. Pilar 2: Ciclo de Vida e Manutenção da Memória

A memória deve ser um recurso dinâmico, não um arquivo morto.

**Processo de Manutenção:**

1.  **Revisão Periódica:** A memória persistente deve ser revisada em um ciclo definido (ex: trimestralmente ou a cada marco importante do projeto). O objetivo é identificar e remover memórias obsoletas, especialmente as da categoria `[TEMPORARY_LEARNING]`.
2.  **Mecanismo de "Flagging" (Sinalização):** Durante a execução de uma tarefa, se o agente encontrar uma memória que parece conflitante ou desatualizada, ele deve sinalizá-la em seu relatório de conclusão. O prompt da próxima tarefa de manutenção deve incluir a revisão dessas memórias sinalizadas.
3.  **Prioridade da Informação Recente:** Em caso de conflito, a informação mais recente ou mais específica (vinda de um `AGENTS.md` ou de um prompt de tarefa) tem precedência sobre uma memória mais antiga.

### 2.3. Pilar 3: Sincronização com `AGENTS.md`

Para evitar redundância e conflitos, é crucial definir as responsabilidades de cada fonte de conhecimento.

*   **`AGENTS.md` - A Fonte Única da Verdade (Single Source of Truth):**
    *   **Responsabilidade:** Contém as diretrizes **permanentes, estáveis e de alto nível** sobre a arquitetura, convenções e regras críticas do projeto.
    *   **Natureza:** Documento de longo prazo, modificado apenas quando há mudanças estruturais no projeto.
    *   **Exemplo:** A diretiva de idioma em português, a estrutura de diretórios, os comandos de build principais.

*   **Memória Persistente - O Cache Inteligente e Flexível:**
    *   **Responsabilidade:** Armazena aprendizados **dinâmicos, contextuais e de curto a médio prazo**. Atua como um "bloco de notas" inteligente que ajuda o agente a se adaptar e a lembrar de nuances que não se encaixam no `AGENTS.md`.
    *   **Natureza:** Recurso de médio prazo, sujeito a revisões e atualizações frequentes.
    *   **Exemplo:** Soluções para bugs de dependências específicas, configurações de ambiente temporárias, otimizações de performance aprendidas.

**Fluxo de Sincronização:** Durante a revisão periódica da memória, o revisor deve avaliar se alguma memória da categoria `[BEST_PRACTICE]` ou `[PROJECT_CONFIG]` se tornou tão fundamental que deveria ser "promovida" e documentada permanentemente no `AGENTS.md`. Após a migração, a memória correspondente deve ser removida para evitar duplicação.

## 3. Conclusão

A adoção desta estratégia de gestão de memória garante que o agente Jules opere com máxima eficiência, baseando suas ações em informações precisas e relevantes. Isso transforma a memória de um simples repositório de dados em um sistema de conhecimento ativo e bem mantido, crucial para o sucesso de longo prazo do projeto.
```
