# CultBR Design System

![Project Banner](/public/docs/banner.png)

Estamos iniciando a criação de um Design System institucional para o ecossistema CultBR, inicialmente focado em reutilização de componentes entre múltiplas TEDS/projetos frontend existentes.

## 📖 Sumário

- [Objetivo](#-objetivo)
- [Recursos](#-recursos)
- [Por que este projeto existe](#-por-que-este-projeto-existe)
- [Stack Tecnológica](#️-stack-tecnológica)
- [Arquitetura do Projeto](#-arquitetura-do-projeto)
- [Documentação](#-documentação)
- [Licença](#-licença)
- [Contribuidores](#-contribuidores)

## 🎯 Objetivo

O objetivo da Prova de Conceito (POC) do CultBR Design System é:

- Validar separação arquitetural entre aplicação e Design System
- Garantir consistência visual e acessibilidade
- Evitar recriação de componentes em cada projeto
- Criar uma base escalável para futuros componentes compartilhados
- Demonstrar reutilização real em uma aplicação exemplo

### Problema
Projetos frontend do ecossistema CultBR recriam componentes do zero, gerando inconsistência visual, retrabalho e falta de padronização.

### Público-alvo
TEDS e projetos frontend institucionais da CultBR.

### Resultado Esperado
Base sólida, simples e profissional para reutilização de componentes, com foco em arquitetura e escalabilidade.
- Queremos uma fundação sólida, simples e profissional

## 🚀 Recursos

- Componentes reutilizáveis com prefixo `Ds` (DsButton, DsCard, DsTypography)
- Tokens de design centralizados via CSS Variables (`--ds-color-primary`, `--ds-spacing-md`, etc.)
- Isolamento de estilo com CSS Modules
- Build otimizado de biblioteca com tsup
- Documentação viva e interativa com Storybook
- Exemplo prático de uso (telas)
- Acessibilidade e consistência visual em todos os componentes
- APIs simples, consistentes e composicionais

## 💡 Por que este projeto existe

A criação de um Design System para o ecossistema CultBR surge da necessidade de:

- Reduzir retrabalho na criação de componentes em múltiplos projetos
- Garantir consistência visual institucional
- Criar uma base escalável que suporte o crescimento do ecossistema
- Focar em qualidade e arquitetura, não em quantidade de componentes

> "Poucos componentes bem feitos são melhores que muitos componentes mal estruturados."

## 🛠️ Stack Tecnológica

### Desenvolvimento
- **Linguagem:** TypeScript
- **Framework:** React
- **Build da biblioteca:** tsup
- **Dev Server:** Vite

---

### Estilização
- **Isolamento:** CSS Modules
- **Tokens:** CSS Variables
- **Headless:** Radix UI

---

### Documentação
- **Storybook:** Documentação viva e showcase de componentes

## 📂 Arquitetura do Projeto

O projeto é um repositório separado chamado `cultbr-design-system`, com estrutura organizada para escalabilidade:

```
cultbr-design-system/
│
├─ .storybook/       # Configuração do Storybook
├─ src/              # Código fonte da biblioteca
│ ├─ components/     # Componentes reutilizáveis
│ │ └─ ui/           # Componentes de interface
│ │   ├─ ds-button/
│ │   ├─ ds-card/
│ │   └─ ds-typography/
│ ├─ styles/         # Tokens e estilos globais
│ │ ├─ tokens.css    # CSS Variables de design tokens
│ │ └─ globals.css   # Estilos globais
│ └─ index.ts        # Imports centralizados
├─ stories/          # Stories do Storybook
├─ example/          # Aplicação de exemplo prático
├─ package.json
├─ tsconfig.json
├─ vite.config.ts
└─ README.md
```

### Padrões do Projeto
- Prefixo `Ds` em todos os componentes
- Componentes organizados em pastas individuais
- Imports centralizados via `src/index.ts`
- APIs simples, consistentes e acessíveis
- Foco em arquitetura, organização e escalabilidade

## 💻 Executando o Projeto Localmente

### 1. Clone o repositório
```bash
git clone https://github.com/Talyslan/cultbr-design-system.git
cd cultbr-design-system
```

### 2. Instale as dependências
```bash
pnpm install
# ou
npm install
```

### 3. Rode o Storybook (documentação)
```bash
pnpm storybook
```

### 4. Build da biblioteca
```bash
pnpm build
```

### 5. Rode o exemplo local
```bash
pnpm dev
```

## 📝 Documentação

- **Storybook:** Disponível após rodar `pnpm storybook`, com documentação viva dos componentes
- **Build:** A biblioteca é gerada via `pnpm build` usando tsup
- **Exemplo:** Aplicação de exemplo em `example/` demonstrando uso real em tela de cadastro/dashboard

## 📜 Licença

Este projeto é licenciado sob a MIT License.
Veja o arquivo LICENSE para mais detalhes.

## 👥 Contribuidores

- Talyslan Canabarro – Desenvolvedor
- Vão vir mais

Este template foi criado por [Talyslan Canabarro](https://github.com/Talyslan)

Para diretrizes de contribuição, consulte o arquivo `CONTRIBUTING.md`.
