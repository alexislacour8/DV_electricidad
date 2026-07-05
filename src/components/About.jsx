const FEATURES = [
  "Mantenimiento preventivo y correctivo BT / MT",
  "Montaje electromecánico llave en mano",
  "Energía segura: UPS, rectificadores y bancos de baterías",
  "Paneles solares e inversores a medida",
  "Tableros con comandos PLC y comunicación remota",
  "Sistemas de energía segura hospitalaria (UTI/UCI)",
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
            Expertos en Energía Segura e Instalaciones Electromecánicas desde 2010
          </h2>
          <p style={{ color: "#445566", fontSize: 16, lineHeight: 1.8 }}>
            Work Solution SRL inició sus actividades en 2010 realizando el montaje de equipos UPS
            y la adecuación eléctrica de salas técnicas en sucursales bancarias a lo largo de todo el país.
          </p>
          <p style={{ color: "#445566", fontSize: 16, lineHeight: 1.8, marginTop: "1rem" }}>
            Con el correr de los años, y ante la creciente demanda de los sectores productivos, ampliamos
            nuestra actividad al armado y montaje de tableros eléctricos, y al proyecto y dirección de obras
            de montaje electromecánicas aplicadas a la energía segura en los sectores de Telecomunicaciones,
            Industria y Petróleo.
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
                WS
              </div>
              <div>
                <div style={{ fontWeight: 700, color: "#0a1428" }}>Work Solution SRL</div>
                <div style={{ color: "#778899", fontSize: 13 }}>Ingeniería y Montaje Electromecánico</div>
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
                16+ Años de Trayectoria
              </h3>
              <p style={{ color: "#aabbdd", lineHeight: 1.7 }}>
                Desde 2010 desarrollando proyectos de energía segura y montaje electromecánico para
                Bancos, Telecomunicaciones, Industria y Petróleo en todo el país.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: "2rem" }}>
                {[
                  { v: "BT / MT", l: "Baja y Media Tensión" },
                  { v: "UPS", l: "Energía segura" },
                  { v: "Solar", l: "Paneles e inversores" },
                  { v: "PLC", l: "Comunicación remota" },
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