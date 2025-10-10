---
layout: default
---
# Jules — Configuração de Ambiente & AGENTS.md

> Um guia claro e prático para proprietários de repositórios prepararem ambientes para que o Jules (e outros agentes) executem de forma confiável. Coloque este arquivo na raiz de um repositório ou adicione como uma página de documentação em jules-prompts.wecanuseai.com.

---

## Objetivo

Tornar trivial para o Jules: clonar seu repositório, instalar dependências, executar testes e produzir alterações seguras e revisáveis. Este documento explica **quando** fornecer configuração de ambiente, **o que** incluir e **como** validá-la.

## Fatos rápidos (o que o Jules faz)

- O Jules executa cada tarefa dentro de uma VM Ubuntu segura e de curta duração, onde clona seu repositório, instala dependências e executa os comandos que você fornece. Use o `AGENTS.md` + um script de configuração de repositório para tornar o Jules determinístico e rápido.

## Quando você deve adicionar uma configuração de ambiente

Adicione instruções de configuração explícitas quando seu repositório não for trivial para construir ou testar localmente, por exemplo:

- Monorepos ou workspaces (pnpm/turbo/lerna)
- Builds nativos com longas etapas de instalação (C/C++, Rust com grandes toolchains)
- Registros privados ou registros de pacotes personalizados
- Projetos que requerem SDKs, compiladores ou pacotes de sistema específicos
- Repositórios que exigem várias etapas de configuração (banco de dados, migrações, etapas de pré-build)

Se o seu projeto for simples (um único `npm install && npm test`), o Jules frequentemente o detectará automaticamente — mas um script explícito ainda ajuda na confiabilidade.

## Onde o Jules procura por orientação

1. `AGENTS.md` (raiz) — um arquivo markdown previsível e focado no agente, descrevendo comandos de build/teste, convenções e notas especiais. O Jules o lerá automaticamente se estiver presente.
2. `README.md` — O Jules o usará para obter dicas quando o `AGENTS.md` não estiver disponível.
3. Configuração do Repositório na UI do Jules (Codebase → Configuration → Initial Setup) — cole o script/comandos de configuração lá e use **Run and Snapshot** para validar.

## O que colocar no AGENTS.md (estrutura recomendada)

Use Markdown. Mantenha-o conciso e amigável para máquinas, com comandos explícitos.

Seções sugeridas:

- **Ambiente de desenvolvimento / início rápido** (linha de comando para iniciar o modo de desenvolvimento)
- **Comandos de build & teste** (comandos exatos que o Jules deve executar; prefira CLI não interativa)
- **Comandos de instalação / configuração** (lista ou caminho do script)
- **Ferramentas / versões** (versões do node, python, rust que você espera)
- **Checklist de CI** (o que deve ter sucesso antes que um PR possa ser mesclado)
- **Estilo de codificação / expectativas de linting**
- **Notas de segurança** (o que não executar, orientação sobre segredos)
- **Contato / mantenedores** (se o Jules precisar de esclarecimentos)

Exemplo mínimo (coloque em `AGENTS.md`):

```markdown
# AGENTS.md

## Dicas de ambiente de desenvolvimento
- Instalar: `npm ci`
- Build: `npm run build`
- Teste: `npm test -- --runInBand`

## Notas
- Use Node 18.x para desenvolvimento local
- Não faça commit de arquivos `.env`; os testes usam credenciais mockadas
```

## Adicione um script de configuração (recomendado)

Coloque os comandos necessários para instalar dependências e executar testes na caixa de Configuração Inicial do repositório Jules (ou forneça um arquivo de script no repositório e referencie-o). Passos de exemplo que você pode colar:

- Abra a UI do Jules → selecione o repositório → **Configuration** → **Initial Setup**.
- Em *Initial Setup*, insira os comandos de shell que o Jules deve executar para preparar o ambiente.
- Clique em **Run and Snapshot** para executar o script e capturar um snapshot de ambiente reproduzível.

Por que o snapshot é importante: quando bem-sucedido, o Jules salvará um snapshot do ambiente e o reutilizará para tarefas posteriores, para execuções mais rápidas e confiáveis.

## Exemplos de scripts de configuração (copie, cole e adapte)

### Node / JavaScript (recomendado: use instalação ciente de lockfile)

```bash
# raiz do repositório: setup_jules.sh
set -euo pipefail
echo "--- verificações de ambiente ---"
node -v
npm -v || pnpm -v || yarn -v

# instalar dependências
npm ci
# executar lint e testes
npm run lint --if-present || true
npm test --if-present
```

### Python (venv + requirements)

```python
set -euo pipefail
python -V
python -m venv .venv
. .venv/bin/activate
pip install -U pip
pip install -r requirements.txt
# executar testes
pytest -q
```

### Go

```go
set -euo pipefail
go version
# garantir cache de módulo e build
go mod download
go test ./...
```

### Rust

```rust
set -euo pipefail
rustup --version || true
rustc --version
cargo build --all --release
cargo test --all
```

### Java / Maven

```java
set -euo pipefail
java -version
mvn -v
mvn -B -DskipTests=false test
```

## Checklist de Validação & Run-and-Snapshot

- Torne o script **idempotente** e **rápido** sempre que possível.
- Imprima verificações de versão (`node -v`, `python -V`) para que a validação mostre qual runtime foi usado.
- Mantenha a saída não interativa (passe flags `--yes` / `-y` conforme necessário).
- Use `set -euo pipefail` para scripts bash para que as falhas sejam visíveis.
- Clique em **Run and Snapshot** no Jules: corrija quaisquer etapas com falha e itere até o sucesso.

## Lidando com segredos de forma segura

- **Não faça commit de segredos** no repositório. A documentação do Jules e as discussões da comunidade alertam explicitamente contra o commit de tokens ou arquivos secretos.
- Se sua tarefa precisar de segredos (chaves de API), prefira armazenamentos de segredos externos ou segredos no estilo CI injetados em tempo de execução. O Jules não recomenda o commit de tokens; mecanismos específicos de injeção de segredos não são documentados publicamente — entre em contato com o suporte do Jules ou use um gerenciador de segredos seguro e documente a lógica de recuperação no `AGENTS.md` (por exemplo, "use o gerenciador de segredos do projeto X para buscar credenciais durante o CI").

## Solução de problemas comuns de ambiente

- **Incompatibilidade de dependência**: fixe as versões no `package.json`, `requirements.txt` ou na configuração da toolchain.
- **Longos tempos de configuração**: crie um snapshot após a validação; o Jules reutilizará snapshots para acelerar as execuções subsequentes.
- **Testes falhando localmente, mas OK no CI**: imprima variáveis de ambiente e versões de runtime para comparar.
- **Pacotes de sistema ausentes**: adicione linhas `apt-get install` no script de setup (seja explícito e mínimo).

Se uma tarefa falhar devido à configuração do ambiente, o Jules relatará os logs e uma página de erro que você pode usar para depurar. Use os logs de erro para iterar no script de configuração.

## Melhores práticas & dicas avançadas

- Prefira instalações com lockfile (`npm ci`, `pip-compile`/`pip install -r`, `go mod download`) para reprodutibilidade.
- Mantenha as etapas de instalação mínimas e apenas o que os testes precisam (evite instalar ferramentas opcionais pesadas, a menos que seja necessário).
- Para monorepos, adicione arquivos `AGENTS.md` no nível do pacote para que o Jules possa encontrar etapas específicas do pacote.
- Adicione um script `verify-environment.sh` que executa verificações rápidas de sanidade (versões, lints, testes de fumaça) e chame-o da configuração do Jules para facilitar a validação.
- Se o seu build precisar de pacotes privados, documente o método de autenticação exato no `AGENTS.md` (não inclua o segredo em si).

## O que adicionar ao README/página do site jules-prompts

- Uma nota concisa apontando os usuários para o `AGENTS.md` na raiz do repositório e para a Configuração do repositório Jules → **Configuration → Initial Setup**, onde eles podem colar seu script de configuração.
- Inclua os scripts de exemplo deste arquivo e um breve checklist (Run & Snapshot; idempotente; imprimir versões; evitar segredos).

---

## De onde tirei orientação oficial

Este guia segue a documentação oficial do Jules e a recomendação do AGENTS.md. Mantenha seu AGENTS.md pequeno e explícito — os agentes o leem primeiro.
