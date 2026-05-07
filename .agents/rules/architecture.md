---
trigger: always_on
---

# Arquitetura do Design System

## Objetivo

Este projeto é um Design System institucional do CultBR.

O foco principal é:
- reutilização
- consistência visual
- acessibilidade
- escalabilidade
- governança frontend

NÃO é objetivo atual:
- criar framework frontend
- criar CLI estilo shadcn
- criar monorepo
- criar sistema de temas complexo
- criar dezenas de componentes

---

# Stack

- React
- TypeScript
- Vite
- Storybook
- tsup
- CSS Modules
- CSS Variables

---

# Estrutura

Todos os componentes devem seguir:

src/components/ui/nome-do-componente/

Exemplo:

src/components/ui/ds-button/
src/components/ui/ds-card/

---

# Estrutura interna do componente

Cada componente deve possuir:

- index.tsx
- styles.module.css
- types.ts (se e somente se quando necessário)

---

# Tokens

Todos os tokens globais devem ficar em:

src/styles/spaces.tokens.css
src/styles/cores.tokens.css
src/styles/text.tokens.css
e assim em diante ...

NUNCA usar:
- cores hardcoded
- espaçamentos hardcoded
- radius hardcoded

Sempre utilizar CSS Variables.

Exemplo:

var(--ds-color-primary)

---

# Prefixo obrigatório

Todos os componentes DEVEM usar prefixo `Ds`.

Exemplos:
- DsButton
- DsCard
- DsTypography

---

# Exportações

Todos os exports devem ser centralizados em:

src/index.ts

---

# Organização

O código deve priorizar:
- simplicidade
- clareza
- manutenção
- legibilidade

Evitar:
- abstrações desnecessárias
- overengineering
- arquitetura complexa prematuramente