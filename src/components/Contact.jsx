import { useState } from "react";

const CONTACT_INFO = [
  { icon: "📍", label: "Dirección", val: "Av. Calchaquí 3700, Quilmes, Buenos Aires" },
  { icon: "📞", label: "Teléfono", val: "011 4523-8890 / 011 15-3344-5566" },
  { icon: "✉️", label: "Email", val: "info@electropro.com.ar" },
  { icon: "🕐", label: "Horario", val: "Lun–Vie 8:00–18:00 | Emergencias 24/7" },
];

export default function Contact() {
  const [form, setForm] = useState({ nombre: "", email: "", telefono: "", empresa: "", mensaje: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    if (!form.nombre || !form.email || !form.mensaje) {
      alert("Por favor completá nombre, email y mensaje.");
      return;
    }
    setSent(true);
  };

  return (
    <section id="contacto" style={{ background: "#0a1428", padding: "6rem 2rem" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span style={{ color: "#f0a500", fontWeight: 700, fontSize: 12, letterSpacing: 3 }}>CONTACTO</span>
          <h2 style={{ color: "#fff", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 800, margin: "0.5rem 0" }}>
            Consultanos sin cargo
          </h2>
          <p style={{ color: "#7799bb", fontSize: 16, maxWidth: 500, margin: "0 auto" }}>
            Evaluamos tu necesidad y te enviamos un presupuesto detallado en 24hs hábiles.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "3rem", alignItems: "start" }} className="contact-grid">

          {/* Info */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {CONTACT_INFO.map((c) => (
              <div key={c.label} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                <div style={{
                  fontSize: 24, width: 48, height: 48,
                  background: "rgba(240,165,0,0.12)", border: "1px solid rgba(240,165,0,0.2)",
                  borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                }}>
                  {c.icon}
                </div>
                <div>
                  <div style={{ color: "#f0a500", fontSize: 12, fontWeight: 600, letterSpacing: 1 }}>{c.label}</div>
                  <div style={{ color: "#ccddef", fontSize: 15, marginTop: 2 }}>{c.val}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          {sent ? (
            <div style={{
              background: "rgba(26,122,69,0.15)", border: "1px solid rgba(26,122,69,0.4)",
              borderRadius: 12, padding: "3rem", textAlign: "center",
            }}>
              <div style={{ fontSize: 48, marginBottom: "1rem" }}>✅</div>
              <h3 style={{ color: "#4cca80", fontSize: 22, fontWeight: 700 }}>¡Mensaje enviado!</h3>
              <p style={{ color: "#99ccaa" }}>Te contactaremos en las próximas 24 horas hábiles.</p>
            </div>
          ) : (
            <div style={{
              background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 12, padding: "2rem",
            }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                {[
                  { key: "nombre", placeholder: "Nombre y apellido *" },
                  { key: "empresa", placeholder: "Empresa / Planta" },
                  { key: "email", placeholder: "Email *" },
                  { key: "telefono", placeholder: "Teléfono" },
                ].map((f) => (
                  <input
                    key={f.key}
                    type="text"
                    placeholder={f.placeholder}
                    value={form[f.key]}
                    onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                    style={{
                      background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.15)",
                      borderRadius: 6, padding: "12px 14px", color: "#fff", fontSize: 14,
                      outline: "none", width: "100%", boxSizing: "border-box",
                    }}
                  />
                ))}
              </div>
              <textarea
                placeholder="Describí el trabajo que necesitás *"
                rows={4}
                value={form.mensaje}
                onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                style={{
                  width: "100%", background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.15)", borderRadius: 6,
                  padding: "12px 14px", color: "#fff", fontSize: 14, outline: "none",
                  resize: "vertical", boxSizing: "border-box", marginBottom: 16, fontFamily: "inherit",
                }}
              />
              <button
                onClick={handleSubmit}
                style={{
                  width: "100%", background: "#f0a500", color: "#0a1428",
                  padding: "14px", borderRadius: 6, border: "none",
                  fontWeight: 800, fontSize: 16, cursor: "pointer", letterSpacing: 0.5,
                }}
              >
                Enviar Consulta
              </button>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
