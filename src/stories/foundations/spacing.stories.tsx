import type { Meta, StoryObj } from "@storybook/react-vite";

const SpacingGrid = () => {
  const spaces = [
    { name: "--ds-space-1", value: "0.25rem", px: "4px" },
    { name: "--ds-space-1_5", value: "0.375rem", px: "6px" },
    { name: "--ds-space-2", value: "0.5rem", px: "8px" },
    { name: "--ds-space-2_5", value: "0.625rem", px: "10px" },
    { name: "--ds-space-3", value: "0.75rem", px: "12px" },
    { name: "--ds-space-4", value: "1rem", px: "16px" },
    { name: "--ds-space-5", value: "1.25rem", px: "20px" },
    { name: "--ds-space-6", value: "1.5rem", px: "24px" },
    { name: "--ds-space-8", value: "2rem", px: "32px" },
    { name: "--ds-space-10", value: "2.5rem", px: "40px" },
    { name: "--ds-space-12", value: "3rem", px: "48px" },
    { name: "--ds-space-16", value: "4rem", px: "64px" },
    { name: "--ds-space-20", value: "5rem", px: "80px" },
  ];

  return (
    <div
      style={{ padding: "20px", fontFamily: "var(--ds-font-sans), sans-serif" }}
    >
      <h1>Spacing Foundation</h1>
      <p style={{ marginBottom: "40px", color: "#666" }}>
        Nossa escala de espaçamento é baseada em 4px (0.25rem).
      </p>

      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ textAlign: "left", color: "#666", fontSize: "12px" }}>
            <th style={{ padding: "12px", borderBottom: "1px solid #eee" }}>
              Token
            </th>
            <th style={{ padding: "12px", borderBottom: "1px solid #eee" }}>
              Rem
            </th>
            <th style={{ padding: "12px", borderBottom: "1px solid #eee" }}>
              Px
            </th>
            <th style={{ padding: "12px", borderBottom: "1px solid #eee" }}>
              Visual
            </th>
          </tr>
        </thead>
        <tbody>
          {spaces.map((space) => (
            <tr key={space.name}>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid #eee",
                  fontFamily: "monospace",
                  fontSize: "12px",
                }}
              >
                {space.name}
              </td>
              <td style={{ padding: "12px", borderBottom: "1px solid #eee" }}>
                {space.value}
              </td>
              <td style={{ padding: "12px", borderBottom: "1px solid #eee" }}>
                {space.px}
              </td>
              <td style={{ padding: "12px", borderBottom: "1px solid #eee" }}>
                <div
                  style={{
                    height: "20px",
                    width: space.value,
                    backgroundColor: "#006eed",
                    borderRadius: "2px",
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const meta: Meta = {
  title: "Foundations/Spacing",
  component: SpacingGrid,
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};
