const TESTIMONIALS = [
  {
    name: "Ing. Roberto Sánchez",
    company: "Planta Frigorífica San Martín",
    role: "Jefe de Mantenimiento",
    text: "Excelente trabajo en la renovación completa del sistema eléctrico de nuestra planta. Cumplieron los plazos al pie de la letra y la calidad del trabajo fue impecable.",
    initials: "RS",
    color: "#1a56a0",
  },
  {
    name: "Marcela Torres",
    company: "Industrias Metálicas del Sur",
    role: "Gerente de Operaciones",
    text: "Llevamos 5 años trabajando con ellos para el mantenimiento preventivo. Desde que los contratamos, bajamos los paros no programados a casi cero. Muy recomendables.",
    initials: "MT",
    color: "#c45820",
  },
  {
    name: "Carlos Benedetti",
    company: "Almacenes Frigoríficos Belgrano",
    role: "Director",
    text: "Realizaron la instalación de 200 luminarias LED en nuestro depósito. El ahorro en la factura de luz fue del 60%. Trabajo limpio y profesional.",
    initials: "CB",
    color: "#1a7a45",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonios" style={{ background: "#f4f6fa", padding: "6rem 2rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span style={{ color: "#f0a500", fontWeight: 700, fontSize: 12, letterSpacing: 3 }}>
            CLIENTES
          </span>
          <h2 style={{ color: "#0a1428", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 800, margin: "0.5rem 0" }}>
            Lo que dicen nuestros clientes
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="testimonials-grid">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} style={{
              background: "#fff", borderRadius: 12, padding: "2rem",
              boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
              borderTop: `4px solid ${t.color}`,
            }}>
              <p style={{ color: "#445566", fontSize: 15, lineHeight: 1.75, fontStyle: "italic", margin: "0 0 1.5rem" }}>
                "{t.text}"
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: "50%", background: t.color,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#fff", fontWeight: 700, fontSize: 15, flexShrink: 0,
                }}>
                  {t.initials}
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: "#0a1428", fontSize: 15 }}>{t.name}</div>
                  <div style={{ color: "#778899", fontSize: 13 }}>{t.role} — {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .testimonials-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
