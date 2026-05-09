import { useState, useEffect } from "react";

const NAV_LINKS = [
  { href: "#inicio", label: "Inicio" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#servicios", label: "Servicios" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#faq", label: "FAQ" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: scrolled ? "rgba(10,20,40,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        transition: "background 0.3s, box-shadow 0.3s",
        boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.4)" : "none",
        padding: "0 2rem",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 70,
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 28 }}>⚡</span>
          <div>
            <span style={{ fontFamily: "'Impact', sans-serif", fontSize: 22, color: "#f0a500", letterSpacing: 2 }}>
              ELECTRO
            </span>
            <span style={{ fontFamily: "'Impact', sans-serif", fontSize: 22, color: "#fff", letterSpacing: 2 }}>
              PRO
            </span>
            <div style={{ fontSize: 9, color: "#aac", letterSpacing: 3, marginTop: -4 }}>
              ELECTRICIDAD INDUSTRIAL
            </div>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav style={{ display: "flex", gap: "2rem", alignItems: "center" }} className="desktop-nav">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{ color: "#ccd", textDecoration: "none", fontSize: 14, fontWeight: 500, letterSpacing: 0.5, transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.target.style.color = "#f0a500")}
              onMouseLeave={(e) => (e.target.style.color = "#ccd")}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            style={{ background: "#f0a500", color: "#0a1428", padding: "8px 20px", borderRadius: 4, textDecoration: "none", fontWeight: 700, fontSize: 13 }}
          >
            Consultanos
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ display: "none", background: "none", border: "none", color: "#fff", fontSize: 28, cursor: "pointer" }}
          className="mobile-menu-btn"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{ background: "rgba(10,20,40,0.99)", padding: "1rem 2rem 2rem" }}>
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{ display: "block", color: "#ccd", textDecoration: "none", padding: "10px 0", fontSize: 16, borderBottom: "1px solid rgba(255,255,255,0.1)" }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </header>
  );
}
