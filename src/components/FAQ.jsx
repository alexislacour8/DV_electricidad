import { useState } from "react";

const FAQS = [
  {
    q: "¿En qué zonas trabajan?",
    a: "Trabajamos en el Gran Buenos Aires y toda la provincia. Para proyectos de gran envergadura también cubrimos el interior del país.",
  },
  {
    q: "¿Los trabajos tienen garantía?",
    a: "Sí. Todos nuestros trabajos tienen garantía de 12 meses sobre mano de obra y los materiales tienen la garantía de fábrica.",
  },
  {
    q: "¿Emiten documentación técnica?",
    a: "Sí. Entregamos planos eléctricos, memoria descriptiva, protocolo de pruebas y habilitaciones municipales si corresponde.",
  },
  {
    q: "¿Atienden emergencias?",
    a: "Contamos con servicio de guardia 24/7 para emergencias eléctricas en industrias. Tiempo de respuesta máximo 2 horas.",
  },
  {
    q: "¿Hacen presupuestos sin cargo?",
    a: "Sí, todos nuestros presupuestos son gratuitos. Un técnico visita tu planta, evalúa el trabajo y te enviamos el detalle en 24hs hábiles.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" style={{ background: "#fff", padding: "6rem 2rem" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span style={{ color: "#f0a500", fontWeight: 700, fontSize: 12, letterSpacing: 3 }}>
            PREGUNTAS FRECUENTES
          </span>
          <h2 style={{ color: "#0a1428", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 800, margin: "0.5rem 0" }}>
            Dudas frecuentes
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {FAQS.map((item, i) => (
            <div key={i} style={{ border: "1px solid #e0e5f0", borderRadius: 8, overflow: "hidden" }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: "100%", textAlign: "left", padding: "1.1rem 1.5rem",
                  background: open === i ? "#0a1428" : "#fff",
                  border: "none", cursor: "pointer",
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                  color: open === i ? "#fff" : "#0a1428",
                  fontWeight: 600, fontSize: 15, transition: "background 0.2s",
                }}
              >
                {item.q}
                <span style={{
                  fontSize: 20,
                  transform: open === i ? "rotate(45deg)" : "none",
                  transition: "transform 0.2s",
                  color: open === i ? "#f0a500" : "#778899",
                }}>
                  +
                </span>
              </button>
              {open === i && (
                <div style={{
                  padding: "1rem 1.5rem", color: "#445566", fontSize: 15,
                  lineHeight: 1.7, background: "#f8faff", borderTop: "1px solid #e0e5f0",
                }}>
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
