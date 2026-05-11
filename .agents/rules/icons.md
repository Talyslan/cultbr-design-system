---
trigger: always_on
---

# Ícones — Phosphor Icons

## Biblioteca padrão

A biblioteca **oficial e única** de ícones deste Design System é
[`@phosphor-icons/react`](https://github.com/phosphor-icons/react).

NUNCA usar:
- emojis (ex.: `🔍`, `➕`, `▾`) em código de produção ou stories
- ícones em SVG inline ad-hoc
- outras bibliotecas (`react-icons`, `lucide-react`, `heroicons`, etc.)

A escolha do Phosphor é deliberada porque:
- mantém **tree-shaking** real (cada ícone vira um import nomeado)
- oferece **6 weights** (`thin`, `light`, `regular`, `bold`, `fill`, `duotone`)
- aceita `currentColor` por padrão (combina com nosso uso de tokens)
- tem cobertura extensa e bom rendering em tamanhos pequenos

---

## Imports

Sempre importe os ícones diretamente, **com sufixo `Icon`** no nome:

```tsx
import { MagnifyingGlassIcon, PlusIcon, TrashIcon } from "@phosphor-icons/react";
```

NUNCA importe o pacote inteiro (quebra tree-shaking):

```tsx
// ERRADO
import * as Phosphor from "@phosphor-icons/react";
```

---

## Uso

Defaults recomendados:

- `weight="bold"` para ícones em botões e elementos interativos.
- `weight="regular"` para ícones contextuais/decorativos.
- Tamanho controlado via prop `size` (number em px) ou via `font-size` do
  pai com `size="1em"`.

Exemplo dentro de `DsButton`:

```tsx
import { PlusIcon } from "@phosphor-icons/react";
import { DsButton } from "@/components/ui/ds-button";

<DsButton leftIcon={<PlusIcon weight="bold" />}>
  Novo item
</DsButton>
```

Exemplo de botão **só ícone** (acessível):

```tsx
<DsButton size="icon" aria-label="Buscar">
  <MagnifyingGlassIcon weight="bold" size={20} />
</DsButton>
```

---

## Cor

A cor padrão do ícone é **`currentColor`**, herdando do elemento pai.
Isso é o comportamento correto na maioria dos casos.

NUNCA hardcode cores em ícones:

```tsx
// ERRADO
<HeartIcon color="#ff0000" />

// CORRETO — herda do tom do botão / texto
<HeartIcon />
```

Se for absolutamente necessário customizar, use sempre token CSS:

```tsx
<HeartIcon color="var(--ds-color-text-error)" />
```

---

## Acessibilidade

- Ícones puramente **decorativos** dentro de elementos com label próprio
  (ex.: botão com texto, input com label) **não** precisam de prop `alt`
  e devem receber `aria-hidden` no wrapper. O `DsButton` já faz isso
  automaticamente em `leftIcon` / `rightIcon`.
- Ícones que carregam significado sozinhos (ex.: `size="icon"` em
  `DsButton`) exigem que o **componente pai** forneça `aria-label`
  descritivo. O ícone em si pode permanecer decorativo.

---

## Adicionando um novo ícone

1. Verificar se já existe no Phosphor: <https://phosphoricons.com>.
2. Importar pelo nome **exato** + sufixo `Icon`.
3. Preferir reutilizar o ícone em vez de criar variações novas.
4. Não criar um wrapper só para passar tamanho/peso — use as próprias
   props (`size`, `weight`).

---

## Resumo

- **Biblioteca**: `@phosphor-icons/react`.
- **Defaults**: `weight="bold"` em botões, `currentColor` para cor.
- **A11y**: sempre exigir `aria-label` em controles só com ícone.
- **Sem**: emojis, SVG inline, outras bibliotecas, cores hardcoded.
