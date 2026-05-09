const FEATURES = [
  "Personal técnico certificado y habilitado",
  "Materiales de primera calidad con garantía",
  "Cumplimiento de normas IRAM y reglamentación AEA",
  "Presupuestos sin cargo y asesoramiento técnico",
  "Servicio de urgencias 24/7",
  "Cobertura en toda la provincia de Buenos Aires",
];

export default function About() {
  return (
    <section id="nosotros" style={{ background: "#f4f6fa", padding: "6rem 2rem" }}>
      <div style={{
        maxWidth: 1200, margin: "0 auto",
        display: "grid", gridTemplateColumns: "1fr 1fr",
        gap: "4rem", alignItems: "center",
      }} className="about-grid">

        {/* Text */}
        <div>
          <span style={{ color: "#f0a500", fontWeight: 700, fontSize: 12, letterSpacing: 3, textTransform: "uppercase" }}>
            Quiénes Somos
          </span>
          <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 800, color: "#0a1428", margin: "0.5rem 0 1rem", lineHeight: 1.2 }}>
            Expertos en Electricidad Industrial desde 2009
          </h2>
          <p style={{ color: "#445566", fontSize: 16, lineHeight: 1.8 }}>
            Somos una empresa especializada en instalaciones y mantenimiento eléctrico industrial,
            con sede en el Gran Buenos Aires. Nuestro equipo de técnicos matriculados trabaja con
            los más altos estándares de seguridad y calidad.
          </p>
          <p style={{ color: "#445566", fontSize: 16, lineHeight: 1.8, marginTop: "1rem" }}>
            Cumplimos con todas las normativas AEA, IRAM y reglamentaciones municipales vigentes.
            Contamos con habilitación para trabajos en media tensión y certificaciones en seguridad eléctrica industrial.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem", marginTop: "1.5rem" }}>
            {FEATURES.map((f) => (
              <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: 8, padding: "8px 0" }}>
                <span style={{ color: "#f0a500", fontWeight: 700, fontSize: 16, marginTop: 1, flexShrink: 0 }}>✓</span>
                <span style={{ color: "#334455", fontSize: 14 }}>{f}</span>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "2rem", display: "flex", alignItems: "center", gap: "2rem", flexWrap: "wrap" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{
                width: 50, height: 50, borderRadius: "50%", background: "#1a56a0",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "#fff", fontWeight: 700, fontSize: 16,
              }}>
                JL
              </div>
              <div>
                <div style={{ fontWeight: 700, color: "#0a1428" }}>Juan Luis Ferreira</div>
                <div style={{ color: "#778899", fontSize: 13 }}>Director Técnico — Mat. 12.847</div>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ fontSize: 24 }}>📞</span>
              <div>
                <div style={{ fontSize: 12, color: "#778899" }}>Llamanos ahora</div>
                <div style={{ fontWeight: 700, color: "#0a1428", fontSize: 18 }}>011 4523-8890</div>
              </div>
            </div>
          </div>
        </div>

        {/* Visual card */}
        <div>
          <div style={{
            background: "linear-gradient(135deg, #0a1428, #1a56a0)",
            borderRadius: 16, padding: "3rem", color: "#fff", position: "relative", overflow: "hidden",
          }}>
            <div style={{
              position: "absolute", top: -40, right: -40, width: 200, height: 200,
              background: "rgba(240,165,0,0.08)", borderRadius: "50%",
            }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <div style={{ fontSize: 48, marginBottom: "1rem" }}>⚡</div>
              <h3 style={{ fontSize: 28, fontWeight: 800, margin: "0 0 1rem" }}>
                15+ Años de Trayectoria
              </h3>
              <p style={{ color: "#aabbdd", lineHeight: 1.7 }}>
                Desde 2009 trabajando con las principales industrias del conurbano bonaerense.
                Frigoríficos, plantas alimenticias, textiles, metalmecánica y logística.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: "2rem" }}>
                {[
                  { v: "BT / MT", l: "Baja y Media Tensión" },
                  { v: "AEA", l: "Normas certificadas" },
                  { v: "IRAM", l: "Cumplimiento normativo" },
                  { v: "24/7", l: "Guardia permanente" },
                ].map((item) => (
                  <div key={item.v} style={{
                    background: "rgba(255,255,255,0.07)", borderRadius: 8,
                    padding: "12px 14px", borderLeft: "3px solid #f0a500",
                  }}>
                    <div style={{ color: "#f0a500", fontWeight: 800, fontSize: 20 }}>{item.v}</div>
                    <div style={{ color: "#99aacc", fontSize: 12 }}>{item.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
