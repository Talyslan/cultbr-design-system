import type { Meta, StoryObj } from "@storybook/react-vite";
import { Fragment } from "react";

import { DsTypography } from "../ds-typography";
import { DsBadge } from "./index";
import {
  BADGE_APPEARANCES,
  BADGE_SIZES,
  BADGE_TONES,
  type BadgeAppearance,
  type BadgeSize,
  type BadgeTone,
} from "./props-and-variants";

const componentDescription = `
O \`DsBadge\` é usado para destacar status, contagens, tags e indicadores semânticos.

### Acessibilidade
- Sempre forneça \`children\` significativos. Para um indicador puramente visual,
  combine o badge com texto adjacente em vez de um badge "vazio".
- A animação de \`pulse\` respeita \`prefers-reduced-motion: reduce\` — quando o
  usuário prefere movimento reduzido, o efeito é desativado.
`;

const toneOptions = Object.keys(BADGE_TONES) as Array<BadgeTone>;
const appearanceOptions = Object.keys(
  BADGE_APPEARANCES,
) as Array<BadgeAppearance>;
const sizeOptions = Object.keys(BADGE_SIZES) as Array<BadgeSize>;

const meta: Meta<typeof DsBadge> = {
  title: "Components/DsBadge",
  component: DsBadge,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: componentDescription,
      },
    },
  },
  argTypes: {
    tone: {
      control: "select",
      options: toneOptions,
      description: "Tom semântico (cor) do badge.",
      table: {
        type: {
          summary: '"neutral" | "brand" | "success" | "danger" | "warning"',
        },
        defaultValue: { summary: '"neutral"' },
      },
    },
    appearance: {
      control: "select",
      options: appearanceOptions,
      description: "Estilo visual aplicado sobre o tom.",
      table: {
        type: { summary: '"solid" | "subtle" | "outline"' },
        defaultValue: { summary: '"subtle"' },
      },
    },
    size: {
      control: "select",
      options: sizeOptions,
      description: "Tamanho do badge.",
      table: {
        type: { summary: '"default" | "sm"' },
        defaultValue: { summary: '"default"' },
      },
    },
    disabled: {
      control: "boolean",
      description:
        "Estado desabilitado. Sobrescreve a aparência da variante atual.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    pulse: {
      control: "boolean",
      description:
        "Aplica animação de `pulse` (live indicator). Respeita `prefers-reduced-motion: reduce`.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof DsBadge>;

export const Default: Story = {
  args: {
    tone: "neutral",
    appearance: "subtle",
    children: "Badge",
  },
};

export const Brand: Story = {
  args: {
    tone: "brand",
    appearance: "subtle",
    children: "Brand",
  },
};

export const Success: Story = {
  args: {
    tone: "success",
    appearance: "subtle",
    children: "Sucesso",
  },
};

export const Danger: Story = {
  args: {
    tone: "danger",
    appearance: "subtle",
    children: "Erro",
  },
};

export const Warning: Story = {
  args: {
    tone: "warning",
    appearance: "subtle",
    children: "Atenção",
  },
};

export const SolidAppearance: Story = {
  args: {
    tone: "brand",
    appearance: "solid",
    children: "Pro",
  },
};

export const OutlineAppearance: Story = {
  args: {
    tone: "neutral",
    appearance: "outline",
    children: "Tag",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    children: "Small",
  },
};

export const Disabled: Story = {
  args: {
    tone: "success",
    disabled: true,
    children: "Indisponível",
  },
};

export const Pulse: Story = {
  args: {
    tone: "danger",
    appearance: "subtle",
    pulse: true,
    children: "Ao vivo",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Indicador animado para sinalizar status em tempo real. A animação é automaticamente desativada quando o usuário tem `prefers-reduced-motion: reduce` habilitado.",
      },
    },
  },
};

export const ToneAppearanceMatrix: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "120px repeat(3, 1fr)",
        gap: "0.75rem",
        alignItems: "center",
        fontFamily: "system-ui, sans-serif",
        fontSize: "0.75rem",
      }}
    >
      <span />
      {appearanceOptions.map((appearance) => (
        <strong key={appearance} style={{ textTransform: "capitalize" }}>
          {appearance}
        </strong>
      ))}
      {toneOptions.map((tone) => (
        <Fragment key={tone}>
          <span style={{ textTransform: "capitalize" }}>{tone}</span>
          {appearanceOptions.map((appearance) => (
            <DsBadge
              key={`${tone}-${appearance}`}
              tone={tone}
              appearance={appearance}
            >
              {tone}
            </DsBadge>
          ))}
        </Fragment>
      ))}
    </div>
  ),
};

export const InlineWithText: Story = {
  render: () => (
    <p
      style={{
        margin: 0,
        fontFamily: "system-ui, sans-serif",
        fontSize: "0.875rem",
      }}
    >
      Plano atual:{" "}
      <DsBadge tone="brand" appearance="solid" size="sm">
        Pro
      </DsBadge>{" "}
      — você possui acesso a todas as funcionalidades.
    </p>
  ),
};

export const InTable: Story = {
  render: () => {
    const cellStyle: React.CSSProperties = {
      padding: "0.5rem 0.75rem",
      borderBottom: "1px solid hsl(220 13% 91%)",
      textAlign: "left",
      fontSize: "0.875rem",
    };
    const headStyle: React.CSSProperties = {
      ...cellStyle,
      fontWeight: 600,
      background: "hsl(220 14% 96%)",
    };

    const rows = [
      { user: "Ana Lima", role: "Admin", tone: "success", label: "Ativo" },
      { user: "Bruno Sá", role: "Editor", tone: "warning", label: "Pendente" },
      {
        user: "Carla Mota",
        role: "Viewer",
        tone: "danger",
        label: "Bloqueado",
      },
      {
        user: "Diego Reis",
        role: "Editor",
        tone: "neutral",
        label: "Convidado",
      },
    ] as const;

    return (
      <table
        style={{
          borderCollapse: "collapse",
          width: "100%",
          maxWidth: 480,
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <thead>
          <tr>
            <th style={headStyle}>Usuário</th>
            <th style={headStyle}>Cargo</th>
            <th style={headStyle}>Status</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.user}>
              <td style={cellStyle}>{row.user}</td>
              <td style={cellStyle}>{row.role}</td>
              <td style={cellStyle}>
                <DsBadge tone={row.tone} size="sm">
                  {row.label}
                </DsBadge>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  },
};

export const InCard: Story = {
  render: () => (
    <div
      style={{
        maxWidth: 320,
        padding: "1rem",
        border: "1px solid hsl(220 13% 91%)",
        borderRadius: "0.75rem",
        fontFamily: "system-ui, sans-serif",
        display: "flex",
        flexDirection: "column",
        gap: "0.75rem",
        background: "white",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <DsTypography variant="h6" tone="brand">
          <strong>Mostra Cultural Quilombola</strong>
        </DsTypography>

        <DsBadge tone="success" size="sm">
          Inscrições abertas
        </DsBadge>
      </div>

      <DsTypography variant="body-sm" tone="muted">
        Evento promovido por coletivos culturais com apresentações artísticas,
        oficinas e exposições de comunidades tradicionais.
      </DsTypography>

      <div
        style={{
          display: "flex",
          gap: "0.5rem",
          flexWrap: "wrap",
        }}
      >
        <DsBadge tone="brand" appearance="subtle" size="sm">
          Cultura popular
        </DsBadge>

        <DsBadge tone="neutral" appearance="outline" size="sm">
          Gratuito
        </DsBadge>

        <DsBadge tone="neutral" appearance="subtle" size="sm">
          Presencial
        </DsBadge>
      </div>
    </div>
  ),
};

export const LiveStatus: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "0.75rem",
        fontFamily: "system-ui, sans-serif",
        fontSize: "0.875rem",
      }}
    >
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <DsBadge tone="success" appearance="solid" size="sm" pulse>
          Online
        </DsBadge>
        Portal público do CultBR
      </span>

      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <DsBadge tone="warning" appearance="solid" size="sm" pulse>
          Instável
        </DsBadge>
        Integração com mapa cultural
      </span>

      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <DsBadge tone="danger" appearance="solid" size="sm" pulse>
          Offline
        </DsBadge>
        Serviço de notificações por e-mail
      </span>
    </div>
  ),
};
