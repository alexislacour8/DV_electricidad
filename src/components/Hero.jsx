import img1 from "../img/WhatsApp Image 2026-05-12 at 23.38.27.jpeg";
import img2 from "../img/WhatsApp Image 2026-05-12 at 23.38.28 (1).jpeg";
import img3 from "../img/WhatsApp Image 2026-05-12 at 23.38.28 (2).jpeg";
import img4 from "../img/WhatsApp Image 2026-05-12 at 23.38.28 (3).jpeg";
import img5 from "../img/WhatsApp Image 2026-05-12 at 23.38.28 (4).jpeg";
import img7 from "../img/WhatsApp Image 2026-05-12 at 23.38.28.jpeg";
import img8 from "../img/WhatsApp Image 2026-05-12 at 23.38.29.jpeg";
const bannerImages = [img5, img2, img3, img4];
const randomBanner = bannerImages[Math.floor(Math.random() * bannerImages.length)];

const STATS = [
  { icon: "⚡", value: "15+", label: "Años de experiencia" },
  { icon: "🏭", value: "320+", label: "Proyectos completados" },
  { icon: "👷", value: "40+", label: "Técnicos certificados" },
  { icon: "🏆", value: "98%", label: "Clientes satisfechos" },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      style={{
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        overflow: "hidden",
        paddingTop: 70,
      }}
    >
      {/* Imagen de fondo */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `url(${img8})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }} />

      {/* Capa oscura encima de la imagen */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(135deg, rgba(10,20,40,0.92) 0%, rgba(15,32,69,0.85) 50%, rgba(26,16,0,0.90) 100%)",
      }} />

      {/* Efectos de color encima */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `radial-gradient(circle at 20% 80%, rgba(240,165,0,0.08) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(26,86,160,0.12) 0%, transparent 50%)`,
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "linear-gradient(rgba(240,165,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(240,165,0,0.03) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
        pointerEvents: "none",
      }} />

      {/* Main content */}
      <div style={{
        maxWidth: 1200, margin: "0 auto", padding: "4rem 2rem",
        width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr",
        gap: "4rem", alignItems: "center", position: "relative", zIndex: 1,
        boxSizing: "border-box",
      }} className="hero-grid">

        <div>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(240,165,0,0.12)", border: "1px solid rgba(240,165,0,0.3)",
            borderRadius: 20, padding: "6px 16px", marginBottom: "1.5rem",
          }}>
            <span style={{ color: "#f0a500", fontSize: 13 }}>⚡</span>
            <span style={{ color: "#f0a500", fontSize: 12, fontWeight: 600, letterSpacing: 1 }}>
              ELECTRICIDAD INDUSTRIAL CERTIFICADA
            </span>
          </div>

          <h1 style={{ color: "#fff", fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 800, lineHeight: 1.15, marginBottom: "1.5rem" }}>
            Soluciones Eléctricas para{" "}
            <span style={{ color: "#f0a500" }}>la Industria</span>
          </h1>

          <p style={{ color: "#99aacc", fontSize: 17, lineHeight: 1.7, marginBottom: "2rem", maxWidth: 480 }}>
            Instalaciones, mantenimiento y automatización eléctrica industrial.
            Más de 15 años trabajando con plantas industriales en el Gran Buenos Aires.
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="#contacto" style={{
              background: "#f0a500", color: "#0a1428", padding: "14px 32px",
              borderRadius: 4, textDecoration: "none", fontWeight: 800, fontSize: 15,
            }}>
              Solicitar Presupuesto
            </a>
            <a href="#servicios" style={{
              background: "transparent", color: "#fff", padding: "14px 32px",
              borderRadius: 4, textDecoration: "none", fontWeight: 600, fontSize: 15,
              border: "1px solid rgba(255,255,255,0.25)",
            }}>
              Ver Servicios
            </a>
          </div>
        </div>

        {/* Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }} className="hero-cards">
          {[
            { icon: "🏭", title: "Plantas Industriales", desc: "Instalaciones completas de MT y BT, tableros y distribución", color: "#f0a500" },
            { icon: "🔧", title: "Mantenimiento 24/7", desc: "Guardia técnica permanente para emergencias eléctricas", color: "#1a56a0", offset: true },
            { icon: "📊", title: "Automatización PLC", desc: "Programación y puesta en marcha de sistemas de control", color: "#1a7a45" },
          ].map((card) => (
            <div key={card.title} style={{
              background: "rgba(255,255,255,0.06)",
              backdropFilter: "blur(8px)",
              border: `1px solid rgba(255,255,255,0.1)`,
              borderLeft: `4px solid ${card.color}`,
              borderRadius: 12, padding: "1.5rem",
              marginLeft: card.offset ? 40 : 0,
            }}>
              <div style={{ fontSize: 32, marginBottom: 8 }}>{card.icon}</div>
              <h3 style={{ color: "#fff", margin: 0, fontSize: 18 }}>{card.title}</h3>
              <p style={{ color: "#778899", margin: "6px 0 0", fontSize: 14 }}>{card.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats bar */}
      <div style={{
        background: "rgba(10,20,40,0.7)",
        backdropFilter: "blur(10px)",
        borderTop: "1px solid rgba(240,165,0,0.2)",
        padding: "1.2rem 2rem",
        position: "relative", zIndex: 1,
      }}>
        <div style={{
          maxWidth: 1200, margin: "0 auto",
          display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
          gap: "1rem", textAlign: "center",
        }} className="stats-bar">
          {STATS.map((s) => (
            <div key={s.value}>
              <div style={{ fontSize: 22 }}>{s.icon}</div>
              <div style={{ color: "#f0a500", fontWeight: 800, fontSize: 22 }}>{s.value}</div>
              <div style={{ color: "#99aacc", fontSize: 12 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-cards { display: none !important; }
          .stats-bar { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
