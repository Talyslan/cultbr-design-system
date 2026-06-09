import type { Meta, StoryObj } from "@storybook/react-vite";

const TypographyGrid = () => {
  const fontSizes = [
    { name: "--ds-font-size-2xs", value: "0.625rem", px: "10px" },
    { name: "--ds-font-size-xs", value: "0.75rem", px: "12px" },
    { name: "--ds-font-size-sm", value: "0.875rem", px: "14px" },
    { name: "--ds-font-size-md", value: "1rem", px: "16px" },
    { name: "--ds-font-size-body-lg", value: "1.125rem", px: "18px" },
    { name: "--ds-font-size-title-h3", value: "1.25rem", px: "20px" },
    { name: "--ds-font-size-title-h2", value: "1.5rem", px: "24px" },
    { name: "--ds-font-size-title-h1", value: "2rem", px: "32px" },
    { name: "--ds-font-size-display-d3", value: "4rem", px: "64px" },
  ];

  const fontWeights = [
    { name: "Regular", token: "--ds-font-weight-regular", value: "400" },
    { name: "Medium", token: "--ds-font-weight-medium", value: "500" },
    { name: "Semibold", token: "--ds-font-weight-semibold", value: "600" },
    { name: "Bold", token: "--ds-font-weight-bold", value: "700" },
  ];

  return (
    <div
      style={{ padding: "20px", fontFamily: "var(--ds-font-sans), sans-serif" }}
    >
      <h1>Typography Foundation</h1>
      <p style={{ marginBottom: "40px", color: "#666" }}>
        Utilizamos a fonte <strong>Poppins</strong> como nossa tipografia
        principal.
      </p>

      <section style={{ marginBottom: "60px" }}>
        <h2
          style={{
            borderBottom: "1px solid #eee",
            paddingBottom: "8px",
            marginBottom: "24px",
          }}
        >
          Font Sizes
        </h2>
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
                Preview
              </th>
            </tr>
          </thead>
          <tbody>
            {fontSizes.map((size) => (
              <tr key={size.name}>
                <td
                  style={{
                    padding: "12px",
                    borderBottom: "1px solid #eee",
                    fontFamily: "monospace",
                    fontSize: "12px",
                  }}
                >
                  {size.name}
                </td>
                <td style={{ padding: "12px", borderBottom: "1px solid #eee" }}>
                  {size.value}
                </td>
                <td style={{ padding: "12px", borderBottom: "1px solid #eee" }}>
                  {size.px}
                </td>
                <td
                  style={{
                    padding: "12px",
                    borderBottom: "1px solid #eee",
                    fontSize: size.value,
                  }}
                >
                  The quick brown fox jumps over the lazy dog
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section style={{ marginBottom: "60px" }}>
        <h2
          style={{
            borderBottom: "1px solid #eee",
            paddingBottom: "8px",
            marginBottom: "24px",
          }}
        >
          Font Weights
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: "24px",
          }}
        >
          {fontWeights.map((weight) => (
            <div
              key={weight.name}
              style={{
                padding: "16px",
                border: "1px solid #eee",
                borderRadius: "8px",
              }}
            >
              <div style={{ fontSize: "32px", fontWeight: weight.value }}>
                {weight.name}
              </div>
              <div
                style={{
                  fontSize: "12px",
                  color: "#666",
                  marginTop: "8px",
                  fontFamily: "monospace",
                }}
              >
                {weight.token} ({weight.value})
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const meta: Meta = {
  title: "Foundations/Typography",
  component: TypographyGrid,
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};
