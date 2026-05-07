---
trigger: always_on
---

# Padrões de Código

## Linguagem

Todo o código deve utilizar:
- TypeScript
- tipagem explícita SEMPRE (exceções SE E SOMENTE SE QUANDO NECESSÁRIO)

NUNCA USE:
- any
- tipagens vagas
- casts desnecessários

---

# Nomeação

Usar:
- PascalCase para componentes
- camelCase para funções e variáveis
- kebab-case para nomes de pastas e arquivos

Exemplos:

DsButton
handleClick
ds-button

---

# Imports

Priorizar imports organizados e simples.

Evitar:
- imports desnecessários
- imports duplicados
- caminhos confusos

---

# Componentes React

Preferir:
- function declarations
- componentes pequenos
- componentes legíveis

Exemplo:

export function DsButton() {}

---

# CSS

Classes devem ser:
- simples
- descritivas
- previsíveis

Exemplo:
- button
- container
- title

Evitar:
- nomes extremamente específicos
- nesting excessivo

---

# Comentários

Comentar apenas quando:
- existir regra importante
- existir decisão arquitetural relevante
- a intenção não for óbvia

Evitar comentários redundantes.

---

# Legibilidade

Priorizar:
- clareza
- simplicidade
- manutenção futura

Evitar:
- código inteligente demais
- abstrações prematuras
- otimizações prematuras

---

# Objetivo final

O Design System deve ser:
- fácil para juniors utilizarem
- fácil de manter
- fácil de evoluir
- consistente entre projetos