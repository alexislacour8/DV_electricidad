export default function Footer() {
  return (
    <footer style={{ background: "#05101f", padding: "3rem 2rem 1.5rem", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div style={{
        maxWidth: 1200, margin: "0 auto",
        display: "grid", gridTemplateColumns: "2fr 1fr 1fr",
        gap: "2rem", paddingBottom: "2rem",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }} className="footer-grid">

        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: "1rem" }}>
            <span style={{ fontSize: 24 }}>⚡</span>
            <span style={{ fontFamily: "'Impact', sans-serif", fontSize: 20, color: "#f0a500", letterSpacing: 2 }}>
             WORK SOLUTION SRL
            </span>
          </div>
          <p style={{ color: "#556677", fontSize: 14, lineHeight: 1.7, maxWidth: 320 }}>
            Especialistas en electricidad industrial. Instalaciones, mantenimiento
            y automatización para la industria bonaerense desde 2010.
          </p>
        </div>

        <div>
          <h4 style={{ color: "#fff", fontWeight: 700, marginBottom: "1rem", fontSize: 14 }}>Servicios</h4>
          {["Instalaciones BT/MT", "Tableros Eléctricos", "Mantenimiento", "Iluminación LED", "Automatización PLC"].map((s) => (
            <div key={s} style={{ color: "#556677", fontSize: 13, padding: "4px 0" }}>{s}</div>
          ))}
        </div>

        <div>
          <h4 style={{ color: "#fff", fontWeight: 700, marginBottom: "1rem", fontSize: 14 }}>Contacto</h4>
          <div style={{ color: "#556677", fontSize: 13, lineHeight: 1.8 }}>
            <div>📞 11 59706836 | 11 21554821</div>
            <div>✉️ mail.worksolution@gmail.com</div>
            {/* <div>📍 Quilmes, Buenos Aires</div> */}
            <div style={{ marginTop: 8, color: "#f0a500", fontWeight: 600 }}>Emergencias 24/7</div>
          </div>
        </div>
      </div>

      <div style={{
        maxWidth: 1200, margin: "1.5rem auto 0",
        display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8,
      }}>
        <span style={{ color: "#334455", fontSize: 13 }}>
          © 2026 WORK SOLUTION SRL Electricidad Industrial. Todos los derechos reservados.
        </span>
        <span style={{ color: "#334455", fontSize: 13 }}>
          Mat. Técnica N° 12.847 — AEA — IRAM
        </span>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
