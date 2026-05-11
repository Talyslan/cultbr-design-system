import {
  EnvelopeIcon,
  EyeIcon,
  EyeSlashIcon,
  MagnifyingGlassIcon,
  XCircleIcon,
} from "@phosphor-icons/react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

import { DsInput } from "./index";
import type { InputSize, ValidationState } from "./props-and-variants";

const componentDescription = `
Campo de texto **primitive** (baixo nível). Renderiza apenas o controle.

Para rótulo, hint e mensagem de erro, envolva em \`DsField\` — que cuida do
binding ARIA (\`id\`, \`aria-describedby\`, \`aria-invalid\`, \`required\`)
automaticamente via Context.

### Estados visuais
- **default** — borda neutra, hover discreto.
- **hover** — borda mais forte (sem disabled/readonly/validação).
- **focus-within** — borda \`brand\` + halo (\`--ds-shadow-focus\`).
- **readonly** — fundo levemente cinza, sem cursor de digitação.
- **disabled** — fundo neutro, cor mutada, sem opacity (preserva contraste).
- **validationState="invalid"** — borda + halo de erro, \`aria-invalid="true"\`.
- **validationState="valid"** — borda verde (sucesso).

### Slots
- \`startSlot\` / \`endSlot\` aceitam qualquer ReactNode.
- O wrapper **não** aplica \`aria-hidden\` automaticamente — você decide:
  - **ícones decorativos** → passe \`aria-hidden\` no próprio ícone.
  - **ações interativas** (clear button, password toggle) → mantenha o
    \`<button>\` focável e garanta \`aria-label\`.
`;

const SIZES: InputSize[] = ["sm", "md", "lg"];
const VALIDATION_VARIANTS: { state: ValidationState; label: string }[] = [
  { state: "valid", label: "Válido" },
  { state: "invalid", label: "Inválido" },
];
const TYPES: { type: React.HTMLInputTypeAttribute; placeholder: string }[] = [
  { type: "text", placeholder: "Texto livre" },
  { type: "email", placeholder: "voce@dominio.com" },
  { type: "password", placeholder: "••••••••" },
  { type: "search", placeholder: "Buscar..." },
  { type: "number", placeholder: "0" },
  { type: "tel", placeholder: "(11) 99999-0000" },
  { type: "url", placeholder: "https://" },
];

const meta: Meta<typeof DsInput> = {
  title: "Components/DsInput",
  component: DsInput,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: { component: componentDescription },
    },
  },
  argTypes: {
    inputSize: {
      control: "select",
      options: SIZES,
      description: "Tamanho visual do campo (afeta altura, padding e font-size).",
      table: {
        type: { summary: '"sm" | "md" | "lg"' },
        defaultValue: { summary: '"md"' },
      },
    },
    validationState: {
      control: "select",
      options: [undefined, "valid", "invalid"],
      description:
        "Estado de validação semântico. Reflete em `aria-invalid` e na borda.",
      table: {
        type: { summary: '"valid" | "invalid" | undefined' },
        defaultValue: { summary: "undefined" },
      },
    },
    disabled: {
      control: "boolean",
      description: "Desabilita o campo (sem opacity, mantém contraste WCAG).",
      table: { type: { summary: "boolean" }, defaultValue: { summary: "false" } },
    },
    readOnly: {
      control: "boolean",
      description: "Modo somente leitura. Mantém o valor selecionável.",
      table: { type: { summary: "boolean" }, defaultValue: { summary: "false" } },
    },
    required: {
      control: "boolean",
      description: "Marca o campo como obrigatório (atributo HTML).",
      table: { type: { summary: "boolean" }, defaultValue: { summary: "false" } },
    },
    placeholder: {
      control: "text",
      description: "Texto exibido quando o campo está vazio.",
      table: { type: { summary: "string" } },
    },
    startSlot: {
      control: false,
      description:
        "Conteúdo no início do campo (ícone, prefixo, ação). O wrapper não aplica `aria-hidden` — passe-o no próprio ícone se for decorativo.",
      table: { type: { summary: "ReactNode" } },
    },
    endSlot: {
      control: false,
      description:
        "Conteúdo no fim do campo (ícone, ação, password toggle). Mesmas regras do `startSlot`.",
      table: { type: { summary: "ReactNode" } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof DsInput>;

export const Default: Story = {
  args: {
    placeholder: "Digite algo...",
    "aria-label": "Campo de texto",
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: 360 }}>
      {SIZES.map((size) => (
        <DsInput
          key={size}
          inputSize={size}
          aria-label={`Campo tamanho ${size}`}
          placeholder={`Tamanho ${size}`}
        />
      ))}
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: "Campo desabilitado",
    value: "Sem edição",
    "aria-label": "Campo desabilitado",
  },
};

export const ReadOnly: Story = {
  args: {
    readOnly: true,
    defaultValue: "Texto somente para leitura",
    "aria-label": "Identificador somente leitura",
  },
};

export const ValidationStates: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: 360 }}>
      <DsInput placeholder="Sem estado (default)" aria-label="Campo neutro" />
      {VALIDATION_VARIANTS.map(({ state, label }) => (
        <DsInput
          key={state}
          validationState={state}
          aria-label={`Campo ${label}`}
          placeholder={label}
          defaultValue={state === "invalid" ? "valor@invalido" : "valor@dominio.com"}
        />
      ))}
    </div>
  ),
};

export const Types: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: 360 }}>
      {TYPES.map(({ type, placeholder }) => (
        <DsInput
          key={type}
          type={type}
          aria-label={`Campo do tipo ${type}`}
          placeholder={`${type} — ${placeholder}`}
        />
      ))}
    </div>
  ),
};

export const WithStartSlot: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: 360 }}>
      <DsInput
        type="search"
        aria-label="Buscar componentes"
        placeholder="Buscar componentes..."
        startSlot={<MagnifyingGlassIcon size={18} weight="regular" aria-hidden />}
      />
      <DsInput
        type="email"
        aria-label="Email"
        placeholder="voce@dominio.com"
        startSlot={<EnvelopeIcon size={18} weight="regular" aria-hidden />}
      />
    </div>
  ),
};

export const WithEndSlot: Story = {
  parameters: { controls: { disable: true } },
  render: () => <PasswordField />,
};

function PasswordField() {
  const [visible, setVisible] = useState(false);
  return (
    <DsInput
      type={visible ? "text" : "password"}
      aria-label="Senha"
      placeholder="Sua senha"
      endSlot={
        <button
          type="button"
          onClick={() => setVisible((v) => !v)}
          aria-label={visible ? "Ocultar senha" : "Mostrar senha"}
          style={{
            background: "none",
            border: 0,
            padding: 0,
            cursor: "pointer",
            color: "inherit",
            display: "inline-flex",
          }}
        >
          {visible ? (
            <EyeSlashIcon size={18} aria-hidden />
          ) : (
            <EyeIcon size={18} aria-hidden />
          )}
        </button>
      }
    />
  );
}

export const WithBothSlots: Story = {
  parameters: { controls: { disable: true } },
  render: () => <ClearableSearch />,
};

function ClearableSearch() {
  const [value, setValue] = useState("");
  return (
    <DsInput
      type="search"
      aria-label="Buscar componentes"
      placeholder="Digite para filtrar..."
      value={value}
      onChange={(e) => setValue(e.target.value)}
      startSlot={<MagnifyingGlassIcon size={18} aria-hidden />}
      endSlot={
        value ? (
          <button
            type="button"
            onClick={() => setValue("")}
            aria-label="Limpar busca"
            style={{
              background: "none",
              border: 0,
              padding: 0,
              cursor: "pointer",
              color: "inherit",
              display: "inline-flex",
            }}
          >
            <XCircleIcon size={18} weight="fill" aria-hidden />
          </button>
        ) : null
      }
    />
  );
}

export const Controlled: Story = {
  parameters: { controls: { disable: true } },
  render: () => <ControlledExample />,
};

function ControlledExample() {
  const [value, setValue] = useState("texto inicial");
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", maxWidth: 360 }}>
      <DsInput
        aria-label="Nome de exibição"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <small style={{ fontFamily: "system-ui", color: "#4b5563" }}>
        Valor atual: <strong>{value || "(vazio)"}</strong>
      </small>
    </div>
  );
}
