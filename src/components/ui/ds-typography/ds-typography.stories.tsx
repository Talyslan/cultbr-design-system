import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  DsTypography,
  type TypographyColor,
  type TypographyVariant,
  type TypographyWeight,
} from "./index";
import {
  TYPOGRAPHY_COLORS,
  TYPOGRAPHY_VARIANTS,
  TYPOGRAPHY_WEIGHTS,
} from "./props-and-variants";

const meta: Meta<typeof DsTypography> = {
  title: "Components/DsTypography",
  component: DsTypography,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: Object.keys(TYPOGRAPHY_VARIANTS) as Array<TypographyVariant>,
    },
    color: {
      control: "select",
      options: Object.keys(TYPOGRAPHY_COLORS) as Array<TypographyColor>,
    },
    weight: {
      control: "select",
      options: Object.keys(TYPOGRAPHY_WEIGHTS) as Array<TypographyWeight>,
    },
  },
};

export default meta;

type Story = StoryObj<typeof DsTypography>;
export const Default: Story = {
  args: {
    children: "o CultBR é uma plataforma que visa democratizar o acesso à cultura brasileira em todos os âmbitos culturais.",
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
