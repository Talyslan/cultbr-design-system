import type { Meta, StoryObj } from "@storybook/react-vite";

import { DsTypography } from "./index";

const meta: Meta<typeof DsTypography> = {
  title: "UI/DsTypography",
  component: DsTypography,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "body-lg",
        "body-md",
        "body-sm",
        "caption",
        "overline",
        "micro",
        "display-d1",
        "display-d2",
        "display-d3",
      ],
    },
    color: {
      control: "select",
      options: [
        "primary",
        "secondary",
        "muted",
        "brand",
        "danger",
        "success",
        "warning",
        "inverse",
      ],
    },
    weight: {
      control: "select",
      options: ["regular", "medium", "semibold", "bold"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof DsTypography>;

export const Default: Story = {
  args: {
    children: "A raposa marrom rápida salta sobre o cão preguiçoso.",
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

export const Colors: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <DsTypography color="primary">Primary Color</DsTypography>
      <DsTypography color="secondary">Secondary Color</DsTypography>
      <DsTypography color="muted">Muted Color</DsTypography>
      <DsTypography color="brand">Brand Color</DsTypography>
      <DsTypography color="success">Success Color</DsTypography>
      <DsTypography color="warning">Warning Color</DsTypography>
      <DsTypography color="danger">Danger Color</DsTypography>
      <div style={{ backgroundColor: "#333", padding: "8px" }}>
        <DsTypography color="inverse">Inverse Color</DsTypography>
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
