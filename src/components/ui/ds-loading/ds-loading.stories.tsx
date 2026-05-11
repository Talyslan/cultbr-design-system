import type { Meta, StoryObj } from "@storybook/react-vite";

import { DsButton } from "../ds-button";
import { DsTypography } from "../ds-typography";
import { DsLoading } from "./index";
import {
  LOADING_SIZES,
  LOADING_TONES,
  LOADING_VARIANTS,
  type LoadingSize,
  type LoadingTone,
  type LoadingVariant,
} from "./props-and-variants";

const componentDescription = `
O \`DsLoading\` é um indicador de carregamento acessível com duas variantes: \`spinner\` e \`dots\`.

### Acessibilidade
- Usa o elemento nativo \`<output>\` com \`aria-live="polite"\` e \`aria-atomic\`.
- O texto anunciado por leitores de tela é controlado pela prop \`label\` (default: "Carregando"),
  aplicada como \`aria-label\` no elemento — sem nó de texto oculto no DOM.
- Quando \`aria-label\` é passado diretamente como prop, ele tem prioridade sobre \`label\`.
- Respeita \`prefers-reduced-motion: reduce\`, desativando animações.

### Theming
- A prop \`tone\` (\`brand\`, \`neutral\`, \`inverse\`) define a cor via \`currentColor\`,
  facilitando o uso em fundos diferentes e a herança natural de cor pelo elemento pai.
`;

const meta: Meta<typeof DsLoading> = {
  title: "Components/DsLoading",
  component: DsLoading,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: componentDescription,
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: Object.keys(LOADING_VARIANTS) as Array<LoadingVariant>,
      description: "Estilo visual do indicador (`spinner` ou `dots`).",
      table: {
        type: { summary: '"spinner" | "dots"' },
        defaultValue: { summary: '"spinner"' },
      },
    },
    size: {
      control: "select",
      options: Object.keys(LOADING_SIZES) as Array<LoadingSize>,
      description: "Tamanho do indicador. Afeta spinner e dots.",
      table: {
        type: { summary: '"sm" | "md" | "lg"' },
        defaultValue: { summary: '"md"' },
      },
    },
    tone: {
      control: "select",
      options: Object.keys(LOADING_TONES) as Array<LoadingTone>,
      description:
        "Tom da cor aplicado via `currentColor` (ex.: `brand`, `neutral`, `inverse`).",
      table: {
        type: { summary: '"brand" | "neutral" | "inverse"' },
        defaultValue: { summary: '"brand"' },
      },
    },
    label: {
      control: "text",
      description:
        "Texto anunciado por leitores de tela (`aria-label`). Sobrescrito quando `aria-label` é passado explicitamente.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: '"Carregando"' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof DsLoading>;

export const Spinner: Story = {
  args: {
    variant: "spinner",
    size: "md",
  },
};

export const SpinnerSmall: Story = {
  args: {
    variant: "spinner",
    size: "sm",
  },
};

export const SpinnerLarge: Story = {
  args: {
    variant: "spinner",
    size: "lg",
  },
};

export const Dots: Story = {
  args: {
    variant: "dots",
    size: "md",
  },
};

export const DotsSizes: Story = {
  name: "Dots (todos os tamanhos)",
  render: () => (
    <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <DsLoading variant="dots" size="sm" />
        <DsTypography variant="body-sm">sm</DsTypography>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <DsLoading variant="dots" size="md" />
        <DsTypography variant="body-sm">md</DsTypography>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <DsLoading variant="dots" size="lg" />
        <DsTypography variant="body-sm">lg</DsTypography>
      </div>
    </div>
  ),
};

export const Tones: Story = {
  name: "Tons de cor",
  render: () => (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "1.5rem",
        alignItems: "center",
      }}
    >
      <DsLoading tone="brand" label="Carregando (marca)" />
      <DsLoading tone="neutral" label="Carregando (neutro)" />
      <div
        style={{
          background: "#19191c",
          padding: "12px 16px",
          borderRadius: "8px",
        }}
      >
        <DsLoading tone="inverse" label="Carregando (inverse)" />
      </div>
    </div>
  ),
};

export const CustomLabel: Story = {
  name: "Label contextual (a11y)",
  args: {
    label: "Carregando lista de eventos",
    variant: "spinner",
    size: "md",
  },
};

export const InlineWithText: Story = {
  name: "Inline com texto",
  render: () => (
    <p
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        margin: 0,
        fontFamily: "system-ui, sans-serif",
        fontSize: "0.875rem",
      }}
    >
      <DsLoading variant="spinner" size="sm" label="Carregando conteúdo" />
      <DsTypography variant="body-sm">Atualizando dados…</DsTypography>
    </p>
  ),
};

export const InsideButton: Story = {
  name: "Dentro de botão (DsButton)",
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        alignItems: "flex-start",
      }}
    >
      <DsButton loading loadingVariant="spinner">
        Salvar
      </DsButton>
      <DsButton
        appearance="solid"
        tone="neutral"
        loading
        loadingVariant="dots"
      >
        Enviar
      </DsButton>
    </div>
  ),
};

export const PageLoading: Story = {
  name: "Loading de página",
  render: () => (
    <div
      style={{
        minHeight: "240px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
        background: "hsl(220 14% 96%)",
        borderRadius: "8px",
        padding: "2rem",
      }}
    >
      <DsLoading variant="spinner" size="lg" label="Carregando página" />
      <DsTypography variant="body-sm">Aguarde um momento</DsTypography>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <DsLoading variant="spinner" size="md" />
        <DsTypography variant="body-sm">Spinner</DsTypography>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <DsLoading variant="dots" size="md" />
        <DsTypography variant="body-sm">Dots</DsTypography>
      </div>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <DsLoading size="sm" />
        <DsTypography variant="body-sm">Small</DsTypography>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <DsLoading size="md" />
        <DsTypography variant="body-sm">Medium</DsTypography>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <DsLoading size="lg" />
        <DsTypography variant="body-sm">Large</DsTypography>
      </div>
    </div>
  ),
};
