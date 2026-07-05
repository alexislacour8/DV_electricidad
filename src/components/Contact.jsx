import { useState } from "react";

const CONTACT_INFO = [
  // { icon: "📍", label: "Dirección", val: "Av. Calchaquí 3700, Quilmes, Buenos Aires" },
  { icon: "📞", label: "Teléfono", val: "11 59706836  " },
  { icon: "✉️", label: "Email", val: "worksolution@gmail.com" },
  { icon: "🕐", label: "Horario", val: "Lun–Vie 8:00–18:00 | Emergencias 24/7" },
];

// ⚠️ Reemplazá este número con el tuyo (sin +, sin espacios, con código de país)
const WHATSAPP_NUMBER = "5491121554821";

export default function Contact() {
  const [form, setForm] = useState({ nombre: "", mensaje: "" });

  const handleEnviar = () => {
    if (!form.nombre || !form.mensaje) {
      alert("Por favor completá tu nombre y la solicitud.");
      return;
    }

    const texto = `Hola! Soy *${form.nombre}* y me comunico desde la web de ElectroPro.

*Solicitud:*
${form.mensaje}`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(texto)}`;
    window.open(url, "_blank");
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
            Escribinos por WhatsApp y te respondemos a la brevedad.
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

          {/* Formulario WhatsApp */}
          <div style={{
            background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 12, padding: "2rem",
          }}>
            <div style={{ marginBottom: 16 }}>
              <label style={{ color: "#f0a500", fontSize: 12, fontWeight: 600, letterSpacing: 1, display: "block", marginBottom: 6 }}>
                TU NOMBRE
              </label>
              <input
                type="text"
                placeholder="Nombre y apellido"
                value={form.nombre}
                onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                style={{
                  width: "100%", background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.15)", borderRadius: 6,
                  padding: "12px 14px", color: "#fff", fontSize: 15,
                  outline: "none", boxSizing: "border-box",
                }}
              />
            </div>

            <div style={{ marginBottom: 20 }}>
              <label style={{ color: "#f0a500", fontSize: 12, fontWeight: 600, letterSpacing: 1, display: "block", marginBottom: 6 }}>
                ¿QUÉ NECESITÁS?
              </label>
              <textarea
                placeholder="Describí el trabajo o consulta que necesitás..."
                rows={5}
                value={form.mensaje}
                onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                style={{
                  width: "100%", background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.15)", borderRadius: 6,
                  padding: "12px 14px", color: "#fff", fontSize: 15,
                  outline: "none", resize: "vertical", boxSizing: "border-box",
                  fontFamily: "inherit",
                }}
              />
            </div>

            <button
              onClick={handleEnviar}
              style={{
                width: "100%", background: "#25D366", color: "#fff",
                padding: "15px", borderRadius: 6, border: "none",
                fontWeight: 800, fontSize: 16, cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
              }}
            >
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Enviar por WhatsApp
            </button>

            <p style={{ color: "#556677", fontSize: 12, textAlign: "center", marginTop: 12 }}>
              Se va a abrir WhatsApp con tu mensaje listo para enviar.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
        input::placeholder, textarea::placeholder { color: #556677; }
      `}</style>
    </section>
  );
}
