---
trigger: always_on
---

# Regras de Componentes

## Filosofia

Os componentes devem ser:
- reutilizáveis
- acessíveis
- simples
- composicionais
- consistentes

---

# API dos componentes

As props devem ser:
- previsíveis
- consistentes entre componentes

Evitar:
- APIs gigantes
- excesso de abstrações

---

# Acessibilidade

Todos os componentes DEVEM:
- usar HTML semântico (usar radix para base SOMENTE QUANDO NECESSÁRIO)
- suportar navegação por teclado
- possuir estados de focus visíveis
- respeitar contraste adequado
- SEMPRE ter um bom conceito de acessibilidade

---

# Estilização

Usar exclusivamente:
- CSS Modules
- CSS Variables
- inline style

NUNCA usar:
- styled-components
- tailwind
- css-in-js

---

# Responsabilidade

Cada componente deve possuir responsabilidade única.

Evitar:
- componentes gigantes
- múltiplas responsabilidades
- lógica excessiva

---

# Estrutura recomendada

Exemplo:

src/components/ui/ds-button/
  index.tsx
  styles.module.css
  ds-button.stories.tsx

---

# Variantes

As variantes devem ser:
- limitadas
- padronizadas
- consistentes

Exemplo:
- primary
- secondary
- ghost

---

# Performance

Evitar:
- renders desnecessários
- lógica pesada
- dependências desnecessárias

---

# Dependências

Adicionar dependências SOMENTE quando:
- realmente necessário
- agregarem valor claro
- reduzirem complexidade crítica

---

# Documentação (Storybook)

Todos os componentes DEVEM possuir:
- arquivo de stories (`ds-nome.stories.tsx`)
- cobertura de todas as variantes e estados principais
- uso de controls para facilitar o teste de props
- tag `autodocs` para geração automática de documentação