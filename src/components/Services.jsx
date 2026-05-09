const SERVICES = [
  {
    icon: "⚡",
    title: "Instalaciones Eléctricas Industriales",
    desc: "Diseño, montaje y puesta en marcha de instalaciones eléctricas de baja, media y alta tensión para industrias y plantas de producción.",
  },
  {
    icon: "🔌",
    title: "Tableros Eléctricos",
    desc: "Fabricación e instalación de tableros de distribución, comando y control. Tableros de fuerza motriz y sistemas de protección.",
  },
  {
    icon: "🔧",
    title: "Mantenimiento Preventivo",
    desc: "Planes de mantenimiento preventivo y correctivo para garantizar la continuidad operativa de su planta. Diagnóstico y reparación.",
  },
  {
    icon: "💡",
    title: "Iluminación Industrial",
    desc: "Proyectos de iluminación LED de alta eficiencia para plantas, galpones, depósitos y espacios de trabajo. Ahorro energético garantizado.",
  },
  {
    icon: "📊",
    title: "Automatización y PLC",
    desc: "Programación y puesta en marcha de sistemas de automatización industrial con PLC, variadores de frecuencia y SCADA.",
  },
  {
    icon: "🛡️",
    title: "Sistemas de Protección",
    desc: "Instalación de sistemas de puesta a tierra, protección contra sobretensiones y sistemas de emergencia y grupo electrógeno.",
  },
];

export default function Services() {
  return (
    <section id="servicios" style={{ background: "#0a1428", padding: "6rem 2rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span style={{ color: "#f0a500", fontWeight: 700, fontSize: 12, letterSpacing: 3 }}>
            LO QUE HACEMOS
          </span>
          <h2 style={{ color: "#fff", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 800, margin: "0.5rem 0 1rem" }}>
            Nuestros Servicios
          </h2>
          <p style={{ color: "#7799bb", maxWidth: 550, margin: "0 auto", fontSize: 16 }}>
            Soluciones integrales de electricidad industrial para mantener su planta operando de manera segura y eficiente.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="services-grid">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 12, padding: "1.8rem",
                transition: "border-color 0.3s, background 0.3s",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(240,165,0,0.4)";
                e.currentTarget.style.background = "rgba(240,165,0,0.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                e.currentTarget.style.background = "rgba(255,255,255,0.04)";
              }}
            >
              <div style={{ fontSize: 36, marginBottom: "1rem" }}>{s.icon}</div>
              <h3 style={{ color: "#fff", fontSize: 17, fontWeight: 700, margin: "0 0 0.75rem" }}>{s.title}</h3>
              <p style={{ color: "#7799bb", fontSize: 14, lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "3rem", textAlign: "center" }}>
          <a href="#contacto" style={{
            background: "#f0a500", color: "#0a1428", padding: "14px 36px",
            borderRadius: 4, textDecoration: "none", fontWeight: 800, fontSize: 15, display: "inline-block",
          }}>
            Solicitar Presupuesto Gratis
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .services-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 601px) and (max-width: 900px) {
          .services-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
