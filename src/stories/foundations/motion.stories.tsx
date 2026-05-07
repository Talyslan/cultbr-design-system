import type { Meta, StoryObj } from "@storybook/react-vite";

const MotionGrid = () => {
  const durations = [
    { name: "--ds-duration-instant", value: "0.1s", desc: "Hover, micro-interações" },
    { name: "--ds-duration-fast", value: "0.15s", desc: "Botões, cores, bordas" },
    { name: "--ds-duration-base", value: "0.2s", desc: "Transições de layout, inputs" },
    { name: "--ds-duration-slow", value: "0.3s", desc: "Modais, entradas de página" },
  ];

  return (
    <div style={{ padding: "20px", fontFamily: "var(--ds-font-sans), sans-serif" }}>
      <h1>Motion Foundation</h1>
      <p style={{ marginBottom: "40px", color: "#666" }}>
        Nossas durações e curvas de animação garantem uma experiência fluida.
      </p>

      <section style={{ marginBottom: "60px" }}>
        <h2 style={{ borderBottom: "1px solid #eee", paddingBottom: "8px", marginBottom: "24px" }}>Durations</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "24px" }}>
          {durations.map((duration) => (
            <div key={duration.name} style={{ padding: "20px", border: "1px solid #eee", borderRadius: "8px" }}>
              <div style={{ fontWeight: "bold", fontSize: "16px", marginBottom: "4px" }}>{duration.name}</div>
              <div style={{ fontSize: "12px", color: "#666", marginBottom: "16px" }}>{duration.value} — {duration.desc}</div>
              
              <div style={{ position: "relative", height: "40px", backgroundColor: "#f5f5f5", borderRadius: "4px", overflow: "hidden" }}>
                <div 
                  className="motion-preview-bar"
                  style={{ 
                    height: "100%", 
                    width: "40px", 
                    backgroundColor: "var(--ds-color-blue-main)",
                    transition: `transform ${duration.value} var(--ds-easing-default)`
                  }} 
                />
              </div>
              <p style={{ fontSize: "11px", color: "#999", marginTop: "8px" }}>Passe o mouse no card para testar</p>
              
              <style dangerouslySetInnerHTML={{ __html: `
                div:hover > div > .motion-preview-bar {
                  transform: translateX(210px);
                }
              `}} />
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 style={{ borderBottom: "1px solid #eee", paddingBottom: "8px", marginBottom: "24px" }}>Easings</h2>
        <div style={{ padding: "20px", border: "1px solid #eee", borderRadius: "8px" }}>
          <div style={{ fontWeight: "bold", fontSize: "16px", marginBottom: "4px" }}>--ds-easing-default</div>
          <div style={{ fontSize: "12px", color: "#666", marginBottom: "16px" }}>cubic-bezier(0.4, 0, 0.2, 1)</div>
          <p style={{ fontSize: "14px" }}>Curva padrão para todas as transições do sistema, proporcionando um movimento natural.</p>
        </div>
      </section>
    </div>
  );
};

const meta: Meta = {
  title: "Foundations/Motion",
  component: MotionGrid,
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};
