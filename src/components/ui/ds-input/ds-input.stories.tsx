import type { Meta, StoryObj } from "@storybook/react-vite";

import { DsInput } from "./index";

const meta: Meta<typeof DsInput> = {
  title: "Components/DsInput",
  component: DsInput,
  tags: ["autodocs"],
  argTypes: {
    inputSize: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    radius: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    error: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
    placeholder: {
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof DsInput>;

export const Default: Story = {
  args: {
    placeholder: "Digite algo...",
  },
};

export const Small: Story = {
  args: {
    inputSize: "sm",
    placeholder: "Input pequeno",
  },
};

export const Medium: Story = {
  args: {
    inputSize: "md",
    placeholder: "Input médio",
  },
};

export const Large: Story = {
  args: {
    inputSize: "lg",
    placeholder: "Input grande",
  },
};

export const RadiusSmall: Story = {
  args: {
    radius: "sm",
    placeholder: "Borda sm (4px)",
  },
};

export const RadiusMedium: Story = {
  args: {
    radius: "md",
    placeholder: "Borda md (8px)",
  },
};

export const RadiusLarge: Story = {
  args: {
    radius: "lg",
    placeholder: "Borda lg (16px)",
  },
};

export const Error: Story = {
  args: {
    error: true,
    placeholder: "Campo com erro",
    value: "Valor inválido",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: "Campo desabilitado",
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <DsInput inputSize="sm" placeholder="Small (36px)" />
      <DsInput inputSize="md" placeholder="Medium (48px)" />
      <DsInput inputSize="lg" placeholder="Large (56px)" />
    </div>
  ),
};

export const AllRadii: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <DsInput radius="sm" placeholder="Radius Small" />
      <DsInput radius="md" placeholder="Radius Medium" />
      <DsInput radius="lg" placeholder="Radius Large" />
    </div>
  ),
};
