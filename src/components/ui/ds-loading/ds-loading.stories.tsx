import type { Meta, StoryObj } from "@storybook/react-vite";

import { DsLoading } from "./index";

const meta: Meta<typeof DsLoading> = {
  title: "Components/DsLoading",
  component: DsLoading,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["spinner", "dots"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
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

export const SpinnerMedium: Story = {
  args: {
    variant: "spinner",
    size: "md",
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
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
        <DsLoading variant="spinner" size="md" />
        <span style={{ fontSize: "12px", color: "#666" }}>Spinner</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
        <DsLoading variant="dots" />
        <span style={{ fontSize: "12px", color: "#666" }}>Dots</span>
      </div>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
        <DsLoading size="sm" />
        <span style={{ fontSize: "12px", color: "#666" }}>Small (16px)</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
        <DsLoading size="md" />
        <span style={{ fontSize: "12px", color: "#666" }}>Medium (32px)</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
        <DsLoading size="lg" />
        <span style={{ fontSize: "12px", color: "#666" }}>Large (48px)</span>
      </div>
    </div>
  ),
};
