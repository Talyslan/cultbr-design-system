import type { Meta, StoryObj } from "@storybook/react-vite";

import { DsButton } from "./index";
import type { ButtonColor, ButtonRound, ButtonSize, ButtonVariant } from "./props-and-variants";

const meta: Meta<typeof DsButton> = {
  title: "Components/DsButton",
  component: DsButton,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "primary",
        "secondary",
        "danger",
        "ghost",
        "outline",
        "success",
        "link",
        "brand-outline",
      ] as Array<ButtonVariant>,
    },
    size: {
      control: "select",
      options: ["lg", "default", "sm", "xs", "icon"] as Array<ButtonSize>,
    },
    color: {
      control: "select",
      options: ["default", "brand", "neutral", "danger", "success"] as Array<ButtonColor>,
    },
    round: {
      control: "select",
      options: ["none", "sm", "md", "lg", "full"] as Array<ButtonRound>,
    },
    loading: {
      control: "boolean",
    },
    loadingVariant: {
      control: "select",
      options: ["spinner", "dots"],
    },
    disabled: {
      control: "boolean",
    },
    width: {
      control: "select",
      options: ["full", "auto"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof DsButton>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary Button",
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
    children: "Danger Button",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Ghost Button",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline Button",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    children: "Success Button",
  },
};

export const Link: Story = {
  args: {
    variant: "link",
    children: "Link Button",
  },
};

export const BrandOutline: Story = {
  args: {
    variant: "brand-outline",
    children: "Brand Outline Button",
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
    width: "full",
    children: "Full Width Button",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
      <DsButton variant="primary">Primary</DsButton>
      <DsButton variant="secondary">Secondary</DsButton>
      <DsButton variant="danger">Danger</DsButton>
      <DsButton variant="ghost">Ghost</DsButton>
      <DsButton variant="outline">Outline</DsButton>
      <DsButton variant="success">Success</DsButton>
      <DsButton variant="link">Link</DsButton>
      <DsButton variant="link" color="neutral">
        Link Neutral
      </DsButton>
      <DsButton variant="link" color="brand">
        Link Brand
      </DsButton>
      <DsButton variant="brand-outline">Brand Outline</DsButton>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
      <DsButton size="lg">Large</DsButton>
      <DsButton size="default">Default</DsButton>
      <DsButton size="sm">Small</DsButton>
      <DsButton size="xs">XSmall</DsButton>
      <DsButton size="icon">🔍</DsButton>
    </div>
  ),
};

export const AllRounds: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
      <DsButton round="none">None</DsButton>
      <DsButton round="sm">Small</DsButton>
      <DsButton round="md">Medium</DsButton>
      <DsButton round="lg">Large</DsButton>
      <DsButton round="full">Full</DsButton>
    </div>
  ),
};
