import { useState } from "react";

// Importamos todas las imágenes de la carpeta img
import img1 from "../img/WhatsApp Image 2026-05-12 at 23.38.27.jpeg";
import img2 from "../img/WhatsApp Image 2026-05-12 at 23.38.28 (1).jpeg";
import img3 from "../img/WhatsApp Image 2026-05-12 at 23.38.28 (2).jpeg";
import img4 from "../img/WhatsApp Image 2026-05-12 at 23.38.28 (3).jpeg";
import img5 from "../img/WhatsApp Image 2026-05-12 at 23.38.28 (4).jpeg";
import img6 from "../img/WhatsApp Image 2026-05-12 at 23.38.28 (5).jpeg";
import img7 from "../img/WhatsApp Image 2026-05-12 at 23.38.28.jpeg";
import img8 from "../img/WhatsApp Image 2026-05-12 at 23.38.29.jpeg";
import img9 from "../img/WhatsApp Image 2026-05-12 at 23.38.30 (1).jpeg";
import img10 from "../img/WhatsApp Image 2026-05-12 at 23.38.30.jpeg";
import img11 from "../img/WhatsApp Image 2026-05-12 at 23.38.31 (1).jpeg";
import img12 from "../img/WhatsApp Image 2026-05-12 at 23.38.31 (2).jpeg";
import img13 from "../img/WhatsApp Image 2026-05-12 at 23.38.31 (3).jpeg";
import img14 from "../img/WhatsApp Image 2026-05-12 at 23.38.31 (4).jpeg";
import img15 from "../img/WhatsApp Image 2026-05-12 at 23.38.31.jpeg";
import img16 from "../img/WhatsApp Image 2026-05-12 at 23.38.32.jpeg";
import img17 from "../img/WhatsApp Image 2026-05-12 at 23.38.33.jpeg";
import img18 from "../img/WhatsApp Image 2026-05-12 at 23.38.35.jpeg";

// Panel principal: primeras 3 imágenes destacadas
const panelImages = [
  { src: img1, label: "Instalación de Tablero Principal" },
  { src: img7, label: "Cableado Industrial MT/BT" },
  { src: img10, label: "Planta Industrial — Obra completa" },
];

// Grid de trabajos: resto de las imágenes
const workImages = [
  { src: img2, label: "Cableado estructurado" },
  { src: img3, label: "Tablero de control PLC" },
  { src: img4, label: "Instalación bandejas portacables" },
  { src: img5, label: "Conectores y bornes" },
  { src: img6, label: "Tendido de cables BT" },
  { src: img8, label: "Mantenimiento preventivo" },
  { src: img9, label: "Medición y diagnóstico" },
  { src: img11, label: "Montaje en campo" },
  { src: img12, label: "Trabajo en altura" },
  { src: img13, label: "Instalación conduit" },
  { src: img14, label: "Puesta a tierra industrial" },
  { src: img15, label: "Panel de distribución" },
  { src: img16, label: "Luminarias industriales" },
  { src: img17, label: "Automatización motores" },
  { src: img18, label: "Inspección técnica" },
];

export default function Gallery() {
  const [activePanel, setActivePanel] = useState(0);
  const [lightbox, setLightbox] = useState(null);

  return (
    <section id="trabajos" style={{ background: "#0a1428", padding: "6rem 2rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span style={{
            color: "#f0a500", fontWeight: 700, fontSize: 12,
            letterSpacing: 3, textTransform: "uppercase",
          }}>
            Galería de Trabajos
          </span>
          <h2 style={{
            fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 800,
            color: "#fff", margin: "0.5rem 0 1rem", lineHeight: 1.2,
          }}>
            Obras y Proyectos Realizados
          </h2>
          <p style={{ color: "#778899", fontSize: 16, maxWidth: 540, margin: "0 auto" }}>
            Cada proyecto refleja nuestro compromiso con la calidad, seguridad y cumplimiento normativo.
          </p>
        </div>

        {/* ── Panel principal ── */}
        <div style={{
          display: "grid", gridTemplateColumns: "1fr 340px",
          gap: "1.5rem", marginBottom: "3rem",
        }} className="gallery-panel">

          {/* Imagen grande activa */}
          <div
            onClick={() => setLightbox(panelImages[activePanel].src)}
            style={{
              borderRadius: 12, overflow: "hidden", cursor: "zoom-in",
              aspectRatio: "16/9", position: "relative",
              border: "1px solid rgba(240,165,0,0.2)",
            }}
          >
            <img
              src={panelImages[activePanel].src}
              alt={panelImages[activePanel].label}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
            <div style={{
              position: "absolute", bottom: 0, left: 0, right: 0,
              background: "linear-gradient(transparent, rgba(10,20,40,0.85))",
              padding: "2rem 1.5rem 1.2rem",
            }}>
              <span style={{ color: "#fff", fontWeight: 700, fontSize: 16 }}>
                {panelImages[activePanel].label}
              </span>
            </div>
            {/* zoom hint */}
            <div style={{
              position: "absolute", top: 12, right: 12,
              background: "rgba(10,20,40,0.7)", borderRadius: 6,
              padding: "4px 10px", color: "#f0a500", fontSize: 12, fontWeight: 600,
            }}>
              🔍 Ampliar
            </div>
          </div>

          {/* Miniaturas panel */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {panelImages.map((img, i) => (
              <div
                key={i}
                onClick={() => setActivePanel(i)}
                style={{
                  borderRadius: 10, overflow: "hidden", cursor: "pointer",
                  flex: 1, position: "relative",
                  border: i === activePanel
                    ? "2px solid #f0a500"
                    : "2px solid rgba(255,255,255,0.08)",
                  transition: "border-color 0.2s",
                }}
              >
                <img
                  src={img.src}
                  alt={img.label}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
                {i === activePanel && (
                  <div style={{
                    position: "absolute", inset: 0,
                    background: "rgba(240,165,0,0.1)",
                  }} />
                )}
                <div style={{
                  position: "absolute", bottom: 0, left: 0, right: 0,
                  background: "rgba(10,20,40,0.75)",
                  padding: "6px 10px",
                }}>
                  <span style={{ color: "#ddd", fontSize: 12 }}>{img.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Grid de trabajos ── */}
        <div>
          <div style={{
            display: "flex", alignItems: "center", gap: 12,
            marginBottom: "1.5rem",
          }}>
            <span style={{
              display: "inline-block", width: 4, height: 24,
              background: "#f0a500", borderRadius: 2,
            }} />
            <h3 style={{ color: "#fff", margin: 0, fontSize: 20, fontWeight: 700 }}>
              Más trabajos
            </h3>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: "1rem",
          }}>
            {workImages.map((img, i) => (
              <div
                key={i}
                onClick={() => setLightbox(img.src)}
                style={{
                  borderRadius: 10, overflow: "hidden", cursor: "zoom-in",
                  aspectRatio: "4/3", position: "relative",
                  border: "1px solid rgba(255,255,255,0.06)",
                  transition: "transform 0.2s, border-color 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.02)";
                  e.currentTarget.style.borderColor = "rgba(240,165,0,0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                }}
              >
                <img
                  src={img.src}
                  alt={img.label}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
                <div style={{
                  position: "absolute", inset: 0,
                  background: "rgba(10,20,40,0)",
                  display: "flex", alignItems: "flex-end",
                  padding: "0.75rem",
                  opacity: 0, transition: "opacity 0.2s",
                }}
                  className="img-overlay"
                >
                  <span style={{
                    color: "#fff", fontSize: 12, fontWeight: 600,
                    background: "rgba(10,20,40,0.8)", borderRadius: 4,
                    padding: "3px 8px",
                  }}>{img.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Lightbox ── */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: "fixed", inset: 0, zIndex: 9999,
            background: "rgba(0,0,0,0.92)",
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: "2rem", cursor: "zoom-out",
          }}
        >
          <img
            src={lightbox}
            alt="Ampliado"
            style={{
              maxWidth: "90vw", maxHeight: "90vh",
              objectFit: "contain", borderRadius: 8,
              boxShadow: "0 0 60px rgba(0,0,0,0.8)",
            }}
          />
          <button
            onClick={() => setLightbox(null)}
            style={{
              position: "fixed", top: 20, right: 24,
              background: "rgba(240,165,0,0.9)", border: "none",
              borderRadius: "50%", width: 40, height: 40,
              cursor: "pointer", fontSize: 18, color: "#0a1428", fontWeight: 800,
            }}
          >✕</button>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .gallery-panel { grid-template-columns: 1fr !important; }
        }
        .img-overlay:hover { opacity: 1 !important; background: rgba(10,20,40,0.5) !important; }
        div:hover > .img-overlay { opacity: 1 !important; background: rgba(10,20,40,0.5) !important; }
      `}</style>
    </section>
  );
}
