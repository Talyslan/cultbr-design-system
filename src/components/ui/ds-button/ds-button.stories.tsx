import {
  CaretDownIcon,
  MagnifyingGlassIcon,
  PlusIcon,
  TrashIcon,
} from "@phosphor-icons/react";
import type { Meta, StoryObj } from "@storybook/react-vite";

import { DsButton } from "./index";
import {
  BUTTON_APPEARANCES,
  BUTTON_ROUNDS,
  BUTTON_SIZES,
  BUTTON_TONES,
  type ButtonAppearance,
  type ButtonRound,
  type ButtonSize,
  type ButtonTone,
} from "./props-and-variants";

const componentDescription = `
O \`DsButton\` usa **appearance** (estilo visual) + **tone** (cor semântica), em vez de
misturar \`variant\` + \`color\` (que permitia combinações inválidas).
`;

const appearanceOptions = Object.keys(
  BUTTON_APPEARANCES,
) as Array<ButtonAppearance>;
const toneOptions = Object.keys(BUTTON_TONES) as Array<ButtonTone>;
const sizeOptions = Object.keys(BUTTON_SIZES) as Array<ButtonSize>;
const roundOptions = Object.keys(BUTTON_ROUNDS) as Array<ButtonRound>;

const meta: Meta<typeof DsButton> = {
  title: "Components/DsButton",
  component: DsButton,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: componentDescription,
      },
    },
  },
  argTypes: {
    appearance: {
      control: "select",
      options: appearanceOptions,
      description: "Estilo visual do botão.",
      table: {
        type: { summary: '"solid" | "outline" | "ghost" | "link"' },
        defaultValue: { summary: '"solid"' },
      },
    },
    tone: {
      control: "select",
      options: toneOptions,
      description: "Tom semântico / cor da ação.",
      table: {
        type: { summary: '"brand" | "neutral" | "danger" | "success"' },
        defaultValue: { summary: '"brand"' },
      },
    },
    size: {
      control: "select",
      options: sizeOptions,
      description:
        'Tamanho. `icon` exige `aria-label` (enforced por tipos). Em `appearance="link"`, altura é fluida.',
      table: {
        type: { summary: '"lg" | "default" | "sm" | "xs" | "icon"' },
        defaultValue: { summary: '"default"' },
      },
    },
    round: {
      control: "select",
      options: roundOptions,
      description: "Raio das bordas do botão.",
      table: {
        type: { summary: '"none" | "sm" | "md" | "lg" | "full"' },
        defaultValue: { summary: '"lg"' },
      },
    },
    loading: {
      control: "boolean",
      description:
        "Quando `true`, exibe o indicador `DsLoading` e desabilita o botão. O conteúdo do botão recebe `aria-hidden` para não competir com o anúncio do loading.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    loadingVariant: {
      control: "select",
      options: ["spinner", "dots"] as const,
      description:
        "Variante visual do `DsLoading` usada enquanto `loading` é `true` (spinner circular ou dots).",
      table: {
        type: { summary: '"spinner" | "dots"' },
        defaultValue: { summary: '"spinner"' },
      },
    },
    disabled: {
      control: "boolean",
      description:
        "Desabilita o botão. Durante `loading`, o botão fica desabilitado automaticamente.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    fullWidth: {
      control: "boolean",
      description:
        "Se `true`, o botão ocupa 100% da largura do container (`width: 100%`).",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof DsButton>;

export const Primary: Story = {
  args: {
    children: "Primary Button",
  },
};

export const Secondary: Story = {
  args: {
    appearance: "solid",
    tone: "neutral",
    children: "Secondary Button",
  },
};

export const Danger: Story = {
  args: {
    appearance: "solid",
    tone: "danger",
    children: "Danger Button",
  },
};

export const Ghost: Story = {
  args: {
    appearance: "ghost",
    tone: "neutral",
    children: "Ghost Button",
  },
};

export const Outline: Story = {
  args: {
    appearance: "outline",
    tone: "neutral",
    children: "Outline Button",
  },
};

export const Success: Story = {
  args: {
    appearance: "solid",
    tone: "success",
    children: "Success Button",
  },
};

export const Link: Story = {
  args: {
    appearance: "link",
    tone: "brand",
    children: "Link Button",
  },
};

export const LinkNeutral: Story = {
  args: {
    appearance: "link",
    tone: "neutral",
    children: "Link neutral",
  },
};

export const BrandOutline: Story = {
  name: "Outline brand",
  args: {
    appearance: "outline",
    tone: "brand",
    children: "Brand outline",
  },
};

export const LoadingVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem" }}>
      <DsButton loading loadingVariant="spinner">
        Spinner
      </DsButton>
      <DsButton loading loadingVariant="dots">
        Dots
      </DsButton>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled Button",
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    children: "Full width",
  },
};

export const WithIcons: Story = {
  name: "Com ícones (slots)",
  args: {
    leftIcon: <PlusIcon weight="bold" />,
    children: "Novo item",
    rightIcon: <CaretDownIcon weight="bold" />,
  },
};

export const IconOnly: Story = {
  args: {
    size: "icon",
    "aria-label": "Buscar",
    children: <MagnifyingGlassIcon weight="bold" size={20} />,
  },
};

export const FormActions: Story = {
  name: "Formulário (ações)",
  render: () => (
    <form
      style={{
        display: "flex",
        gap: "1rem",
        maxWidth: 360,
        fontFamily: "system-ui, sans-serif",
      }}
      onSubmit={(e) => e.preventDefault()}
    >
      <DsButton type="button" appearance="outline" tone="neutral">
        Cancelar
      </DsButton>
      <DsButton type="submit" appearance="solid" tone="brand">
        Salvar alterações
      </DsButton>
    </form>
  ),
};

export const ModalFooter: Story = {
  name: "Rodapé de modal",
  render: () => (
    <div
      style={{
        display: "flex",
        gap: "0.5rem",
        padding: "1rem",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <DsButton appearance="ghost" tone="neutral">
        Voltar
      </DsButton>
      <DsButton appearance="solid" tone="brand">
        Continuar
      </DsButton>
    </div>
  ),
};

export const DestructiveConfirm: Story = {
  name: "Confirmação destrutiva",
  render: () => (
    <div
      style={{
        display: "flex",
        gap: "0.5rem",
        maxWidth: 320,
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <DsButton appearance="ghost" tone="neutral">
        Cancelar
      </DsButton>
      <DsButton
        appearance="solid"
        tone="danger"
        leftIcon={<TrashIcon weight="bold" />}
      >
        Excluir projeto
      </DsButton>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
      <DsButton>Primary</DsButton>
      <DsButton appearance="solid" tone="neutral">
        Secondary
      </DsButton>
      <DsButton appearance="solid" tone="danger">
        Danger
      </DsButton>
      <DsButton appearance="ghost" tone="neutral">
        Ghost
      </DsButton>
      <DsButton appearance="outline" tone="neutral">
        Outline
      </DsButton>
      <DsButton appearance="solid" tone="success">
        Success
      </DsButton>
      <DsButton appearance="link" tone="brand">
        Link
      </DsButton>
      <DsButton appearance="link" tone="neutral">
        Link neutral
      </DsButton>
      <DsButton appearance="outline" tone="brand">
        Brand outline
      </DsButton>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        flexWrap: "wrap",
      }}
    >
      <DsButton size="lg">Large</DsButton>
      <DsButton size="default">Default</DsButton>
      <DsButton size="sm">Small</DsButton>
      <DsButton size="xs">XSmall</DsButton>
      <DsButton size="icon" aria-label="Buscar">
        <MagnifyingGlassIcon weight="bold" size={20} />
      </DsButton>
    </div>
  ),
};

export const AllRounds: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <DsButton round="none">None</DsButton>
      <DsButton round="sm">Small</DsButton>
      <DsButton round="md">Medium</DsButton>
      <DsButton round="lg">Large</DsButton>
      <DsButton round="full">Full</DsButton>
    </div>
  ),
};

export const ToneAppearanceMatrix: Story = {
  name: "Matriz tone (solid)",
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
      {toneOptions.map((tone) => (
        <DsButton key={tone} appearance="solid" tone={tone}>
          {tone}
        </DsButton>
      ))}
    </div>
  ),
};
