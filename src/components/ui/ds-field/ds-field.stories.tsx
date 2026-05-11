import { EnvelopeIcon, LockKeyIcon } from "@phosphor-icons/react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

import { DsButton } from "../ds-button";
import { DsInput } from "../ds-input";
import { DsField } from "./index";

const componentDescription = `
Composite que monta um campo de formulário acessível: **rótulo + controle + hint/erro**.

Provê um **Context** que controles compatíveis (ex.: \`DsInput\`) consomem para
receber automaticamente:

- \`id\` (gerado via \`useId\`, sincronizado com o \`htmlFor\` do label)
- \`aria-describedby\` (apontando para hint e/ou mensagem de erro)
- \`aria-invalid\` quando \`error\` é fornecido
- \`required\` e \`disabled\` propagados

Ou seja: **você não precisa amarrar IDs/atributos na mão**.
`;

const meta: Meta<typeof DsField> = {
  title: "Components/DsField",
  component: DsField,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: { component: componentDescription },
    },
  },
  argTypes: {
    label: {
      control: "text",
      description: "Texto do rótulo.",
      table: { type: { summary: "ReactNode" } },
    },
    hint: {
      control: "text",
      description: "Texto auxiliar abaixo do controle (entra em `aria-describedby`).",
      table: { type: { summary: "ReactNode" } },
    },
    error: {
      control: "text",
      description:
        'Mensagem de erro. Quando definida, ativa `validationState="invalid"` no controle filho.',
      table: { type: { summary: "ReactNode" } },
    },
    required: {
      control: "boolean",
      description: "Marca o campo como obrigatório (propaga `required` e exibe `*`).",
      table: { type: { summary: "boolean" }, defaultValue: { summary: "false" } },
    },
    disabled: {
      control: "boolean",
      description: "Desabilita o campo (propaga `disabled` ao controle).",
      table: { type: { summary: "boolean" }, defaultValue: { summary: "false" } },
    },
    showOptionalMark: {
      control: "boolean",
      description: "Mostra `(opcional)` ao lado do label quando não é `required`.",
      table: { type: { summary: "boolean" }, defaultValue: { summary: "false" } },
    },
    /**
     * `children` é sempre um controle React (ex.: `DsInput`) — não faz sentido
     * editar via Controls. Mantemos a documentação no `description` mas escondemos
     * a entrada do painel para não vazar o ReactElement serializado.
     */
    children: {
      control: false,
      description:
        "Controle compatível (geralmente `DsInput`). Recebe binding ARIA via Context.",
      table: { type: { summary: "ReactNode" }, disable: true },
    },
    id: {
      control: false,
      description: "ID base. Quando ausente, é gerado por `useId`.",
      table: { type: { summary: "string" } },
    },
    className: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof DsField>;

export const Default: Story = {
  args: { label: "Nome" },
  render: (args) => (
    <DsField {...args}>
      <DsInput placeholder="Como podemos te chamar?" />
    </DsField>
  ),
};

export const WithHint: Story = {
  args: {
    label: "Email",
    hint: "Use seu email institucional",
  },
  render: (args) => (
    <DsField {...args}>
      <DsInput
        type="email"
        placeholder="voce@dominio.com"
        startSlot={<EnvelopeIcon size={18} />}
      />
    </DsField>
  ),
};

export const Required: Story = {
  args: {
    label: "Senha",
    hint: "Mínimo de 8 caracteres",
    required: true,
  },
  render: (args) => (
    <DsField {...args}>
      <DsInput type="password" startSlot={<LockKeyIcon size={18} />} />
    </DsField>
  ),
};

export const Optional: Story = {
  args: {
    label: "Telefone",
    showOptionalMark: true,
  },
  render: (args) => (
    <DsField {...args}>
      <DsInput type="tel" placeholder="(11) 99999-0000" />
    </DsField>
  ),
};

export const WithError: Story = {
  args: {
    label: "Email",
    error: "Email inválido — verifique o domínio",
    required: true,
  },
  render: (args) => (
    <DsField {...args}>
      <DsInput type="email" defaultValue="voce@dominio" />
    </DsField>
  ),
};

export const Disabled: Story = {
  args: {
    label: "CPF",
    hint: "Carregado da sua conta",
    disabled: true,
  },
  render: (args) => (
    <DsField {...args}>
      <DsInput defaultValue="123.456.789-00" />
    </DsField>
  ),
};

export const FullForm: Story = {
  parameters: { controls: { disable: true } },
  render: () => <LoginForm />,
};

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailInvalid = email.length > 0 && !email.includes("@");

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1.25rem",
        maxWidth: 360,
      }}
    >
      <DsField
        label="Email"
        hint="Use o email cadastrado"
        required
        error={emailInvalid ? "Email inválido" : undefined}
      >
        <DsInput
          type="email"
          placeholder="voce@dominio.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          startSlot={<EnvelopeIcon size={18} />}
        />
      </DsField>

      <DsField label="Senha" required>
        <DsInput
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          startSlot={<LockKeyIcon size={18} />}
        />
      </DsField>

      <DsButton type="submit" fullWidth>
        Entrar
      </DsButton>
    </form>
  );
}
