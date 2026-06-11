import { useEffect, useMemo, useState } from "react";
import { NavLink } from "react-router-dom";
import { buildWhatsAppUrl, PrimaryCTA } from "./ui";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(window.scrollY > 8);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const links = useMemo(
    () => [
      { to: "/", label: "Home" },
      { to: "/produk", label: "Produk" },
      { to: "/anggota", label: "Staff" },
      { to: "/pricing", label: "Pricing" },
    ],
    []
  );

  const navLinkStyle = ({ isActive }) => ({
    position: "relative",
    padding: "10px 14px",
    borderRadius: 999,
    textDecoration: "none",
    fontWeight: isActive ? 800 : 700,
    color: isActive ? "#0b5ed7" : "rgba(11,27,53,0.76)",
    background: isActive ? "rgba(11,94,215,0.08)" : "transparent",
    transition: "all .2s ease",
  });

  return (
    <>
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 200,
          padding: "16px 16px 0",
        }}
      >
        <nav
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            minHeight: 70,
            borderRadius: 999,
            border: `1px solid ${scrolled ? "rgba(59,130,246,0.22)" : "rgba(59,130,246,0.14)"}`,
            background: scrolled ? "rgba(255,255,255,0.88)" : "rgba(255,255,255,0.74)",
            backdropFilter: "blur(18px) saturate(180%)",
            boxShadow: scrolled ? "0 16px 40px rgba(10,22,40,0.08)" : "0 12px 30px rgba(10,22,40,0.05)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px 14px",
          }}
        >
          <NavLink
            to="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              textDecoration: "none",
              flexShrink: 0,
              color: "#081a33",
            }}
          >
            <div
              style={{
                width: 42,
                height: 42,
                borderRadius: "50%",
                overflow: "hidden",
                border: "2px solid rgba(255,255,255,0.9)",
                boxShadow: "0 10px 22px rgba(11,94,215,0.18)",
              }}
            >
              <img
                src="/images/astakira.jpg"
                alt="Astakira"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 700, letterSpacing: "0.08em", color: "rgba(11,27,53,0.58)" }}>
                Astakira Media
              </div>
              <div style={{ fontSize: 18, fontWeight: 800, letterSpacing: "-0.03em" }}>
                Digital Solutions
              </div>
            </div>
          </NavLink>

          <div style={{ display: "none" }}>
            {links.map((item) => (
              <NavLink key={item.to} to={item.to} style={navLinkStyle}>
                {item.label}
              </NavLink>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <div
              className="desktop-nav"
              style={{
                display: "none",
                alignItems: "center",
                gap: 8,
              }}
            >
              {links.map((item) => (
                <NavLink key={item.to} to={item.to} style={navLinkStyle}>
                  {item.label}
                </NavLink>
              ))}
            </div>

            <div className="desktop-cta" style={{ display: "none" }}>
              <PrimaryCTA
                href={buildWhatsAppUrl("Halo Astakira, saya ingin konsultasi proyek digital saya.")}
                small
                style={{ minHeight: 42, padding: "10px 16px" }}
              >
                Konsultasi
              </PrimaryCTA>
            </div>

            <button
              className="focus-ring"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Buka menu"
              style={{
                width: 46,
                height: 46,
                borderRadius: "50%",
                border: "1px solid rgba(11,94,215,0.14)",
                background: "rgba(255,255,255,0.72)",
                color: "#081a33",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      <style>{`
        @media (min-width: 920px) {
          .desktop-nav,
          .desktop-cta {
            display: flex !important;
          }
          header button[aria-label="Buka menu"] {
            display: none !important;
          }
        }

        .mobile-menu-overlay {
          position: fixed;
          inset: 0;
          z-index: 400;
          background: rgba(10, 22, 40, 0.94);
          backdrop-filter: blur(20px);
          color: white;
          display: flex;
          flex-direction: column;
          opacity: 0;
          pointer-events: none;
          transform: translateY(-10px);
          transition: opacity .25s ease, transform .25s ease;
        }

        .mobile-menu-overlay.open {
          opacity: 1;
          pointer-events: auto;
          transform: translateY(0);
        }

        .mobile-menu-link {
          display: block;
          padding: 18px 0;
          color: #fff;
          text-decoration: none;
          font-size: clamp(1.8rem, 5vw, 2.9rem);
          font-weight: 800;
          letter-spacing: -0.05em;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }

        .mobile-menu-link.active {
          color: #60a5fa;
        }
      `}</style>

      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? "open" : ""}`}>
        <div style={{ maxWidth: 980, width: "100%", margin: "0 auto", padding: "18px 20px 28px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 34 }}>
            <div style={{ fontWeight: 800, letterSpacing: "-0.03em" }}>Menu</div>
            <button
              className="focus-ring"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Tutup menu"
              style={{
                width: 46,
                height: 46,
                borderRadius: "50%",
                border: "1px solid rgba(255,255,255,0.15)",
                background: "rgba(255,255,255,0.06)",
                color: "#fff",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <div style={{ display: "grid", gap: 8 }}>
            {links.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) => `mobile-menu-link ${isActive ? "active" : ""}`}
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <div style={{ marginTop: 28, display: "grid", gap: 12 }}>
            <PrimaryCTA
              href={buildWhatsAppUrl("Halo Astakira, saya ingin konsultasi cepat lewat menu mobile.")}
            >
              Konsultasi via WhatsApp
            </PrimaryCTA>
            <div style={{ color: "rgba(255,255,255,0.7)", fontSize: 14, lineHeight: 1.6 }}>
              Fast response, cocok untuk diskusi proyek singkat maupun estimasi kebutuhan.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
