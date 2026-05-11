import type { Meta, StoryObj } from "@storybook/react-vite";

import { DsTypography } from "./index";
import {
  TYPOGRAPHY_TONES,
  TYPOGRAPHY_VARIANTS,
  TYPOGRAPHY_WEIGHTS,
  type TypographyTone,
  type TypographyVariant,
  type TypographyWeight,
} from "./props-and-variants";

const componentDescription = `
O \`DsTypography\` é o componente base para qualquer texto no Design System CultBR.

Ele aplica automaticamente a tag HTML semântica adequada com base na \`variant\`
escolhida e oferece props para ajustar o **tom** (cor semântica) e o **peso** da
fonte. Todos os valores de tipografia, cor e espaçamento vêm de tokens do DS.

### Props principais
- \`variant\`: estilo visual e tag semântica padrão (ex.: \`h1\`, \`body-md\`).
- \`tone\`: papel semântico da cor (ex.: \`primary\`, \`brand\`, \`danger\`).
- \`weight\`: peso da fonte; quando omitido, herda o peso padrão da variante.
- \`as\`: permite trocar a tag HTML renderizada (use com cautela — ver Acessibilidade).

### Sobre o uso de \`as\`
A prop \`as\` existe para casos legítimos de composição (ex.: usar um \`h2\` visualmente
como um link \`<a>\` ou um \`<label>\`). Porém:

- **Evite** alterar a tag semântica de headings (\`h1\`–\`h6\`) para \`span\`/\`div\`,
  pois isso quebra a hierarquia de cabeçalhos da página.
- **Evite** rebaixar headings para outras variants (\`<DsTypography variant="h1" as="span" />\`)
  apenas para reaproveitar estilos — prefira criar um *display* visual com a variant
  apropriada (ex.: \`display-d1\`).
- A semântica correta beneficia SEO, leitores de tela e a navegação por teclado.
`;

const meta: Meta<typeof DsTypography> = {
  title: "Components/DsTypography",
  component: DsTypography,
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
      options: Object.keys(TYPOGRAPHY_VARIANTS) as Array<TypographyVariant>,
      description: "Estilo visual da tipografia. Define também a tag HTML padrão.",
    },
    tone: {
      control: "select",
      options: Object.keys(TYPOGRAPHY_TONES) as Array<TypographyTone>,
      description:
        "Tom semântico da cor (ex.: `primary`, `brand`, `danger`). Substitui a antiga prop `color`.",
    },
    weight: {
      control: "select",
      options: Object.keys(TYPOGRAPHY_WEIGHTS) as Array<TypographyWeight>,
      description:
        "Peso da fonte. Quando omitido, herda o peso padrão da variante.",
    },
    as: {
      control: false,
      description:
        "Sobrescreve a tag HTML renderizada. Use com cautela: alterar a semântica de headings prejudica acessibilidade e SEO.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof DsTypography>;

export const Default: Story = {
  args: {
    children:
      "O CultBR é uma plataforma que visa democratizar o acesso à cultura brasileira em todos os âmbitos culturais.",
    variant: "body-md",
  },
};

export const Headings: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <DsTypography variant="h1">Heading 1</DsTypography>
      <DsTypography variant="h2">Heading 2</DsTypography>
      <DsTypography variant="h3">Heading 3</DsTypography>
      <DsTypography variant="h4">Heading 4</DsTypography>
      <DsTypography variant="h5">Heading 5</DsTypography>
      <DsTypography variant="h6">Heading 6</DsTypography>
    </div>
  ),
};

export const Display: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <DsTypography variant="display-d1">Display D1</DsTypography>
      <DsTypography variant="display-d2">Display D2</DsTypography>
      <DsTypography variant="display-d3">Display D3</DsTypography>
    </div>
  ),
};

export const Body: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <DsTypography variant="body-lg">
        Body Large - Design System CultBR
      </DsTypography>
      <DsTypography variant="body-md">
        Body Medium - Design System CultBR
      </DsTypography>
      <DsTypography variant="body-sm">
        Body Small - Design System CultBR
      </DsTypography>
    </div>
  ),
};

export const Small: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <DsTypography variant="caption">Caption text</DsTypography>
      <DsTypography variant="overline">Overline text</DsTypography>
      <DsTypography variant="micro">Micro text</DsTypography>
    </div>
  ),
};

export const Tones: Story = {
  name: "Tones (semantic colors)",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <DsTypography tone="primary">Primary tone</DsTypography>
      <DsTypography tone="secondary">Secondary tone</DsTypography>
      <DsTypography tone="muted">Muted tone</DsTypography>
      <DsTypography tone="brand">Brand tone</DsTypography>
      <DsTypography tone="success">Success tone</DsTypography>
      <DsTypography tone="warning">Warning tone</DsTypography>
      <DsTypography tone="danger">Danger tone</DsTypography>
      <div style={{ backgroundColor: "#19191c", padding: "8px" }}>
        <DsTypography tone="inverse">Inverse tone</DsTypography>
      </div>
    </div>
  ),
};

export const Weights: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <DsTypography weight="regular">Weight Regular</DsTypography>
      <DsTypography weight="medium">Weight Medium</DsTypography>
      <DsTypography weight="semibold">Weight Semibold</DsTypography>
      <DsTypography weight="bold">Weight Bold</DsTypography>
    </div>
  ),
};

const accessibilityDescription = `
### Boas práticas de acessibilidade

- **Hierarquia de headings:** utilize apenas **um** \`h1\` por página e
  nunca pule níveis (não vá direto de \`h2\` para \`h4\`).
- **Não altere a semântica com \`as\`:** evite \`<DsTypography variant="h1" as="span" />\`.
  Headings devem permanecer headings — o \`as\` foi pensado para casos pontuais
  de composição, não para "esconder" a semântica.
- **Contraste de cor (WCAG 2.1 AA):** todas as cores semânticas (\`brand\`,
  \`success\`, \`warning\`, \`danger\`) foram calibradas para atingir pelo menos
  **4.5:1** sobre fundo claro padrão. Ainda assim, valide o contraste sempre
  que o texto for renderizado sobre fundos customizados ou imagens.
- **Tamanho mínimo:** evite usar \`micro\` (11px) para conteúdo essencial.
  Reserve para metadados, badges e disclaimers.
- **Conteúdo significativo:** \`children\` é obrigatório — não renderize
  \`DsTypography\` vazio. Para espaçadores, use elementos de layout, não tipografia.
- **Não dependa apenas da cor para transmitir informação:** combine \`tone\`
  com ícones, rótulos ou outros affordances visuais quando o significado for
  crítico (ex.: estados de erro/sucesso).
`;

export const Accessibility: Story = {
  parameters: {
    docs: {
      description: {
        story: accessibilityDescription,
      },
    },
  },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
      <DsTypography variant="h2">Acessibilidade do DsTypography</DsTypography>
      <DsTypography variant="body-md">
        Use apenas um <code>h1</code> por página e mantenha a hierarquia de
        headings sem pular níveis.
      </DsTypography>
      <DsTypography variant="body-md">
        Evite alterar tags semânticas com a prop <code>as</code>. Prefira a{" "}
        <code>variant</code> adequada para o estilo desejado.
      </DsTypography>
      <DsTypography variant="body-md">
        As cores semânticas (<code>brand</code>, <code>success</code>,{" "}
        <code>warning</code>, <code>danger</code>) foram ajustadas para
        atingir contraste WCAG AA sobre fundo claro.
      </DsTypography>
      <DsTypography variant="body-md">
        Combine <code>tone</code> com ícones ou rótulos sempre que o significado
        for crítico — não dependa apenas da cor.
      </DsTypography>
    </div>
  ),
};
