export default function DesignSystem() {
  return (
    <main style={{ padding: "64px", maxWidth: "960px", margin: "0 auto" }}>

      {/* Header */}
      <div style={{ marginBottom: "64px", borderBottom: "1px solid var(--color-mist)", paddingBottom: "40px" }}>
        <p style={{ color: "var(--color-bark)", letterSpacing: "0.1em", fontSize: "0.75rem", textTransform: "uppercase", marginBottom: "12px" }}>
          Design System
        </p>
        <h1>Bit of Nordic</h1>
        <p style={{ color: "var(--color-bark)", marginTop: "8px" }}>
          Clean Nordic style — minimalist, functional, connected to nature.
        </p>
      </div>

      {/* Colours */}
      <section style={{ marginBottom: "64px" }}>
        <h2 style={{ marginBottom: "32px" }}>Colour Palette</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: "16px" }}>
          {[
            { name: "Birch",        token: "--color-birch",        hex: "#F7F4EE", dark: false },
            { name: "Linen",        token: "--color-linen",        hex: "#EDE9E1", dark: false },
            { name: "Mist",         token: "--color-mist",         hex: "#D9D4C9", dark: false },
            { name: "Bark",         token: "--color-bark",         hex: "#9E9890", dark: false },
            { name: "Stone",        token: "--color-stone",        hex: "#5C574F", dark: true  },
            { name: "Charcoal",     token: "--color-charcoal",     hex: "#1E1C19", dark: true  },
            { name: "Forest",       token: "--color-forest",       hex: "#3D6B4F", dark: true  },
            { name: "Forest Light", token: "--color-forest-light", hex: "#EBF2EE", dark: false },
            { name: "Forest Dark",  token: "--color-forest-dark",  hex: "#2A4D38", dark: true  },
            { name: "Amber",        token: "--color-amber",        hex: "#B8895A", dark: true  },
            { name: "Amber Light",  token: "--color-amber-light",  hex: "#F5EDE0", dark: false },
          ].map((c) => (
            <div key={c.name} style={{ borderRadius: "4px", overflow: "hidden", boxShadow: "var(--shadow-sm)" }}>
              <div style={{
                background: c.hex,
                height: "80px",
                border: "1px solid var(--color-mist)",
                borderBottom: "none",
                borderRadius: "4px 4px 0 0"
              }} />
              <div style={{
                padding: "12px",
                background: "white",
                border: "1px solid var(--color-mist)",
                borderTop: "none",
                borderRadius: "0 0 4px 4px"
              }}>
                <p style={{ fontSize: "0.8rem", fontWeight: 500, color: "var(--color-charcoal)", marginBottom: "2px" }}>{c.name}</p>
                <p style={{ fontSize: "0.7rem", color: "var(--color-bark)", fontFamily: "monospace" }}>{c.hex}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Typography */}
      <section style={{ marginBottom: "64px" }}>
        <h2 style={{ marginBottom: "32px" }}>Typography</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div>
            <p style={{ color: "var(--color-bark)", fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "8px" }}>Display / Headings — Cormorant</p>
            <h1>Vintage Nordic Treasures</h1>
            <h2>Watches & Timepieces</h2>
            <h3>Mid-Century Design Glass</h3>
            <h4>Finnish Silver Coins, 1960s</h4>
          </div>
          <hr />
          <div>
            <p style={{ color: "var(--color-bark)", fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "8px" }}>Body — Inter</p>
            <p>Each piece in this collection has been carefully sourced from across the Nordic region — Finland, Sweden, Norway and Denmark. We look for objects that carry both history and craft: items made to last, designed with intention, and aged with grace.</p>
            <p style={{ marginTop: "16px", color: "var(--color-bark)" }}>Secondary / muted text used for captions, metadata, and supporting information.</p>
          </div>
        </div>
      </section>

      {/* Buttons */}
      <section style={{ marginBottom: "64px" }}>
        <h2 style={{ marginBottom: "32px" }}>Buttons</h2>
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "center" }}>
          <button style={{
            background: "var(--color-forest)",
            color: "white",
            padding: "12px 28px",
            border: "none",
            borderRadius: "2px",
            fontFamily: "var(--font-sans)",
            fontSize: "0.875rem",
            letterSpacing: "0.05em",
            cursor: "pointer",
          }}>
            View Collection
          </button>
          <button style={{
            background: "transparent",
            color: "var(--color-forest)",
            padding: "11px 28px",
            border: "1px solid var(--color-forest)",
            borderRadius: "2px",
            fontFamily: "var(--font-sans)",
            fontSize: "0.875rem",
            letterSpacing: "0.05em",
            cursor: "pointer",
          }}>
            Learn More
          </button>
          <button style={{
            background: "transparent",
            color: "var(--color-stone)",
            padding: "11px 28px",
            border: "1px solid var(--color-mist)",
            borderRadius: "2px",
            fontFamily: "var(--font-sans)",
            fontSize: "0.875rem",
            letterSpacing: "0.05em",
            cursor: "pointer",
          }}>
            Browse All
          </button>
        </div>
      </section>

      {/* Sample Card */}
      <section style={{ marginBottom: "64px" }}>
        <h2 style={{ marginBottom: "32px" }}>Item Card</h2>
        <div style={{ maxWidth: "280px" }}>
          <div style={{
            background: "var(--color-linen)",
            aspectRatio: "4/3",
            borderRadius: "4px 4px 0 0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "var(--color-mist)",
            fontSize: "0.75rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}>
            Image placeholder
          </div>
          <div style={{
            background: "white",
            padding: "20px",
            border: "1px solid var(--color-mist)",
            borderTop: "none",
            borderRadius: "0 0 4px 4px",
            boxShadow: "var(--shadow-sm)"
          }}>
            <p style={{ fontSize: "0.7rem", color: "var(--color-bark)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "6px" }}>Design Glass</p>
            <h4 style={{ marginBottom: "8px" }}>Iittala Alvar Aalto Vase</h4>
            <p style={{ fontSize: "0.875rem", color: "var(--color-bark)", marginBottom: "16px" }}>Finland, c. 1960s</p>
            <p style={{ color: "var(--color-amber)", fontFamily: "var(--font-display)", fontSize: "1.25rem" }}>€ 240</p>
          </div>
        </div>
      </section>

    </main>
  );
}
