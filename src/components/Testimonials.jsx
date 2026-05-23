import { useState, useEffect } from "react";
import logoYPF from "../img/YPF.png";
import logoEdenor from "../img/edenor.png";
import logoArcor from "../img/arcor.jpg";
import logoFravega from "../img/Fravega.png";
import logoPami from "../img/PAMI.png";
import logoNacion from "../img/Banco.png";
import logoProsegur from "../img/prosegur1.png";

const CLIENTS = [
  { logo: logoYPF, name: "YPF" },
  { logo: logoEdenor, name: "Edenor" },
  { logo: logoArcor, name: "Arcor" },
  { logo: logoFravega, name: "Frávega" },
  { logo: logoPami, name: "PAMI" },
  { logo: logoNacion, name: "Banco Nación" },
  { logo: logoProsegur, name: "Prosegur" },
];

export default function OurClients() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Al mostrarse de a 3 tarjetas, el límite es el largo total menos 3
  const maxIndex = CLIENTS.length - 3; 

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex < maxIndex ? prevIndex + 1 : 0));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : maxIndex));
  };

  // Efecto para el movimiento automático
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Cambia cada 3000 milisegundos (3 segundos)

    // Limpieza del intervalo al desmontar el componente
    return () => clearInterval(interval);
  }, [currentIndex]); // Se vuelve a sincronizar si el usuario cambia manualmente usando los botones

  return (
    <section id="nuestros-clientes" style={{ background: "#f4f6fa", padding: "6rem 2rem", position: "relative" }}>
      <div style={{ maxWidth: "90%", margin: "0 auto", position: "relative" }}>
        
        {/* Encabezado */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span style={{ color: "#f0a500", fontWeight: 700, fontSize: 12, letterSpacing: 3 }}>
            CLIENTES
          </span>
          <h2 style={{ color: "#0a1428", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 800, margin: "0.5rem 0" }}>
            Nuestros Clientes
          </h2>
        </div>

        {/* Contenedor Enmascarado del Carrusel */}
        <div style={{ overflow: "hidden", margin: "0 1rem" }}>
          <div 
            style={{ 
              display: "flex", 
              gap: 24,
              transform: `translateX(calc(-${currentIndex * 33.333}% - ${currentIndex * 16}px))`, 
              transition: "transform 0.5s ease-in-out"
            }}
            className="carousel-track"
          >
            {CLIENTS.map((client) => (
              <div 
                key={client.name} 
                style={{
                  background: "#fff", 
                  borderRadius: 12, 
                  padding: "3rem 2rem",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: "200px",
                  flex: "0 0 calc(33.333% - 16px)",
                  boxSizing: "border-box"
                }}
                className="carousel-card"
              >
                <img 
                  src={client.logo} 
                  alt={`Logo de ${client.name}`}
                  style={{ 
                    maxWidth: "100%", 
                    maxHeight: "80px", 
                    objectFit: "contain",
                    // Se ha eliminado el filtro de escala de grises y opacidad
                    transition: "all 0.3s ease"
                  }}
                  // Se han eliminado los eventos onMouseOver y onMouseOut
                />
              </div>
            ))}
          </div>
        </div>

        {/* Botones de Navegación del Carrusel */}
        <button 
          onClick={prevSlide}
          style={{
            position: "absolute", left: "-2rem", top: "60%", transform: "translateY(-50%)",
            background: "#fff", border: "none", width: 44, height: 44, borderRadius: "50%",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)", cursor: "pointer", fontSize: "1.2rem",
            display: "flex", alignItems: "center", justifyContent: "center", color: "#0a1428", zIndex: 10
          }}
          className="carousel-btn"
        >
          &#10094;
        </button>
        <button 
          onClick={nextSlide}
          style={{
            position: "absolute", right: "-2rem", top: "60%", transform: "translateY(-50%)",
            background: "#fff", border: "none", width: 44, height: 44, borderRadius: "50%",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)", cursor: "pointer", fontSize: "1.2rem",
            display: "flex", alignItems: "center", justifyContent: "center", color: "#0a1428", zIndex: 10
          }}
          className="carousel-btn"
        >
          &#10095;
        </button>
      </div>

      {/* Estilos responsivos adaptados al carrusel */}
      <style>{`
        @media (max-width: 900px) {
          .carousel-track { 
            transform: none !important; 
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            padding-bottom: 1rem;
          }
          .carousel-card { 
            flex: 0 0 85% !important; 
            scroll-snap-align: center;
          }
          .carousel-btn {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}