import type { Meta, StoryObj } from "@storybook/react-vite";

import { DsBadge } from "./index";

const meta: Meta<typeof DsBadge> = {
  title: "Components/DsBadge",
  component: DsBadge,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "secondary",
        "destructive",
        "outline",
        "success",
        "danger",
        "warning",
        "brand",
        "disabled",
      ],
    },
    size: {
      control: "select",
      options: ["default", "sm", "dot"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof DsBadge>;

export const Default: Story = {
  args: {
    variant: "default",
    children: "Badge",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Destructive",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    children: "Success",
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
    children: "Danger",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    children: "Warning",
  },
};

export const Brand: Story = {
  args: {
    variant: "brand",
    children: "Brand",
  },
};

export const Disabled: Story = {
  args: {
    variant: "disabled",
    children: "Disabled",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    children: "Small",
  },
};

export const Dot: Story = {
  args: {
    size: "dot",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
      <DsBadge variant="default">Default</DsBadge>
      <DsBadge variant="secondary">Secondary</DsBadge>
      <DsBadge variant="destructive">Destructive</DsBadge>
      <DsBadge variant="outline">Outline</DsBadge>
      <DsBadge variant="success">Success</DsBadge>
      <DsBadge variant="danger">Danger</DsBadge>
      <DsBadge variant="warning">Warning</DsBadge>
      <DsBadge variant="brand">Brand</DsBadge>
      <DsBadge variant="disabled">Disabled</DsBadge>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
      <DsBadge size="default">Default Size</DsBadge>
      <DsBadge size="sm">Small Size</DsBadge>
      <DsBadge size="dot" />
    </div>
  ),
};
