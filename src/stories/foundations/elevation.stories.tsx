import type { Meta, StoryObj } from "@storybook/react-vite";

const ElevationGrid = () => {
  const radii = [
    { name: "--ds-radius-sm", value: "0.25rem", px: "4px" },
    { name: "--ds-radius-md", value: "0.375rem", px: "6px" },
    { name: "--ds-radius-base", value: "0.5rem", px: "8px" },
    { name: "--ds-radius-xl", value: "0.75rem", px: "12px" },
    { name: "--ds-radius-lg", value: "1rem", px: "16px" },
    { name: "--ds-radius-2xl", value: "1rem", px: "16px" },
    { name: "--ds-radius-full", value: "9999px", px: "Full" },
  ];

  const shadows = [
    { name: "--ds-shadow-xs", value: "var(--ds-shadow-xs)" },
    { name: "--ds-shadow-md", value: "var(--ds-shadow-md)" },
    { name: "--ds-shadow-lg", value: "var(--ds-shadow-lg)" },
    { name: "--ds-shadow-focus", value: "var(--ds-shadow-focus)" },
  ];

  return (
    <div style={{ padding: "20px", fontFamily: "var(--ds-font-sans), sans-serif" }}>
      <h1>Elevation & Borders</h1>
      <p style={{ marginBottom: "40px", color: "#666" }}>
        Definições de arredondamento e profundidade visual.
      </p>

      <section style={{ marginBottom: "60px" }}>
        <h2 style={{ borderBottom: "1px solid #eee", paddingBottom: "8px", marginBottom: "24px" }}>Border Radius</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: "24px" }}>
          {radii.map((radius) => (
            <div key={radius.name} style={{ textAlign: "center" }}>
              <div
                style={{
                  width: "100%",
                  aspectRatio: "1",
                  backgroundColor: "var(--ds-color-blue-soft)",
                  borderRadius: radius.value,
                  border: "1px solid var(--ds-color-blue-main)",
                  marginBottom: "12px",
                }}
              />
              <div style={{ fontWeight: "bold", fontSize: "14px" }}>{radius.name}</div>
              <div style={{ fontSize: "12px", color: "#666" }}>{radius.value} ({radius.px})</div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 style={{ borderBottom: "1px solid #eee", paddingBottom: "8px", marginBottom: "24px" }}>Shadows</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "40px", padding: "20px" }}>
          {shadows.map((shadow) => (
            <div key={shadow.name}>
              <div
                style={{
                  width: "100%",
                  height: "100px",
                  backgroundColor: "#fff",
                  borderRadius: "8px",
                  boxShadow: shadow.value,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "14px",
                  color: "#666",
                  border: shadow.name === "--ds-shadow-focus" ? "none" : "1px solid #f5f5f5",
                }}
              >
                Preview
              </div>
              <div style={{ fontWeight: "bold", fontSize: "14px", marginTop: "16px" }}>{shadow.name}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const meta: Meta = {
  title: "Foundations/Elevation",
  component: ElevationGrid,
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};
