import type { Meta, StoryObj } from "@storybook/react-vite";

const ColorSwatch = ({ name, value }: { name: string; value: string }) => {
  const isHSL =
    !value.startsWith("#") &&
    !value.startsWith("rgb") &&
    !value.includes("var");
  const backgroundColor = isHSL ? `hsl(${value})` : value;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <div
        style={{
          width: "100%",
          height: "80px",
          borderRadius: "8px",
          backgroundColor,
          border: "1px solid #eee",
        }}
      />
      <div>
        <div style={{ fontWeight: "bold", fontSize: "14px" }}>{name}</div>
        <div
          style={{ fontSize: "12px", color: "#666", fontFamily: "monospace" }}
        >
          {value}
        </div>
      </div>
    </div>
  );
};

const ColorGroup = ({
  title,
  colors,
}: {
  title: string;
  colors: Record<string, string>;
}) => (
  <div style={{ marginBottom: "40px" }}>
    <h2
      style={{
        borderBottom: "1px solid #eee",
        paddingBottom: "8px",
        marginBottom: "20px",
      }}
    >
      {title}
    </h2>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
        gap: "24px",
      }}
    >
      {Object.entries(colors).map(([name, value]) => (
        <ColorSwatch key={name} name={name} value={value} />
      ))}
    </div>
  </div>
);

const ColorsGrid = () => {
  const brandColors = {
    "--ds-color-brand-primary": "212 100% 47%",
    "--ds-color-brand-primary-dark": "212 100% 33%",
    "--ds-color-brand-primary-medium": "212 100% 68%",
    "--ds-color-brand-primary-light": "212 100% 92%",
  };

  const feedbackColors = {
    "--ds-color-success": "157 70% 55%",
    "--ds-color-error": "349 100% 61%",
    "--ds-color-warning": "43 100% 69%",
    "--ds-color-info": "174 80% 45%",
  };

  const neutralColors = {
    "--ds-color-neutral-50": "210 20% 98%",
    "--ds-color-neutral-100": "220 14% 96%",
    "--ds-color-neutral-300": "216 12% 84%",
    "--ds-color-neutral-500": "220 9% 46%",
    "--ds-color-neutral-700": "221 19% 25%",
    "--ds-color-neutral-900": "221 39% 11%",
  };

  const grayColors = {
    "--ds-color-gray-100": "0 0% 98%",
    "--ds-color-gray-300": "0 0% 80%",
    "--ds-color-gray-500": "240 5% 31%",
    "--ds-color-gray-700": "240 6% 10%",
    "--ds-color-gray-900": "0 0% 2%",
  };

  const semanticColors = {
    "--ds-color-background": "0 0% 100%",
    "--ds-color-foreground": "0 0% 3.9%",
    "--ds-color-primary": "var(--ds-color-brand-primary)",
    "--ds-color-destructive": "var(--ds-color-error)",
    "--ds-color-muted": "var(--ds-color-neutral-100)",
    "--ds-color-border-hsl": "var(--ds-color-gray-300)",
  };

  return (
    <div
      style={{ padding: "20px", fontFamily: "var(--ds-font-sans), sans-serif" }}
    >
      <h1>Colors Foundation</h1>
      <p style={{ marginBottom: "40px", color: "#666" }}>
        Nossas cores são definidas em HSL para permitir variações programáticas
        e alto contraste.
      </p>

      <ColorGroup title="Brand Colors" colors={brandColors} />
      <ColorGroup title="Feedback Colors" colors={feedbackColors} />
      <ColorGroup title="Neutral Scale" colors={neutralColors} />
      <ColorGroup title="Gray Scale" colors={grayColors} />
      <ColorGroup title="Semantic Aliases" colors={semanticColors} />
    </div>
  );
};

const meta: Meta = {
  title: "Foundations/Colors",
  component: ColorsGrid,
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};
