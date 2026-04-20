import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const onResize = () => {
      const mobile = window.innerWidth < 640;
      setIsMobile(mobile);
      if (!mobile) setIsOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => { if (e.key === "Escape") setIsOpen(false); };
    const onOut = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target))
        setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onOut);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onOut);
    };
  }, [isOpen]);

  const links = [
    { to: "/",        label: "Home"    },
    { to: "/produk",  label: "Produk"  },
    { to: "/anggota", label: "Staff"   },
    { to: "/pricing", label: "Harga" },
  ];

  const navLinkStyle = ({ isActive }) => ({
    textDecoration: "none",
    fontSize: "0.88rem",
    fontWeight: isActive ? 700 : 500,
    color: isActive ? "#0b5ed7" : "rgba(11,27,53,0.65)",
    padding: "6px 14px",
    borderRadius: 8,
    transition: "all .15s",
    backgroundColor: isActive ? "rgba(25,118,210,0.08)" : "transparent",
    whiteSpace: "nowrap",
  });

  const HamburgerIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="3" y1="6"  x2="21" y2="6"  />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );

  const CloseIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="18" y1="6"  x2="6"  y2="18" />
      <line x1="6"  y1="6"  x2="18" y2="18" />
    </svg>
  );

  return (
    <>
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          backdropFilter: "blur(20px)",
          background: "rgba(248,251,255,0.88)",
          borderBottom: "1px solid rgba(25,118,210,0.15)",
          padding: "0 24px",
          height: 60,
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            width: "100%",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
          }}
        >
          {/* ── Logo ── */}
          <NavLink
            to="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              textDecoration: "none",
              flexShrink: 0,
            }}
          >
            <img
              src="/images/astakira.jpg"
              alt="Astakira"
              style={{ width: 36, height: 36, borderRadius: 8, objectFit: "cover" }}
            />
            <span
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 800,
                fontSize: "1.25rem",
                background: "linear-gradient(135deg,#0b5ed7,#38bdf8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                letterSpacing: "-0.4px",
              }}
            >
              Astakira Media ✦
            </span>
          </NavLink>

          {/* ── Desktop links ── */}
          {!isMobile && (
            <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
              {links.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  style={navLinkStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "rgba(25,118,210,0.07)";
                    e.currentTarget.style.color = "#0b5ed7";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "";
                    e.currentTarget.style.color = "";
                  }}
                >
                  {label}
                </NavLink>
              ))}
            </div>
          )}

          {/* ── Mobile hamburger ── */}
          {isMobile && (
            <div style={{ position: "relative" }} ref={dropdownRef}>
              <button
                onClick={() => setIsOpen((p) => !p)}
                aria-expanded={isOpen}
                aria-haspopup="true"
                style={{
                  background: isOpen ? "rgba(25,118,210,0.1)" : "transparent",
                  border: "1px solid",
                  borderColor: isOpen ? "rgba(25,118,210,0.3)" : "transparent",
                  cursor: "pointer",
                  padding: "7px 9px",
                  borderRadius: 10,
                  color: "#0b1b35",
                  display: "flex",
                  alignItems: "center",
                  transition: "all .2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(25,118,210,0.08)";
                  e.currentTarget.style.borderColor = "rgba(25,118,210,0.22)";
                }}
                onMouseLeave={(e) => {
                  if (!isOpen) {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.borderColor = "transparent";
                  }
                }}
              >
                {isOpen ? <CloseIcon /> : <HamburgerIcon />}
              </button>

              {/* Dropdown */}
              <div
                style={{
                  position: "absolute",
                  top: "calc(100% + 10px)",
                  right: 0,
                  width: 200,
                  background: "rgba(255,255,255,0.97)",
                  backdropFilter: "blur(20px)",
                  borderRadius: 14,
                  border: "1px solid rgba(25,118,210,0.14)",
                  boxShadow: "0 8px 32px rgba(11,27,53,0.12), 0 2px 8px rgba(11,27,53,0.06)",
                  padding: "8px",
                  opacity: isOpen ? 1 : 0,
                  transform: isOpen ? "translateY(0) scale(1)" : "translateY(-8px) scale(0.97)",
                  pointerEvents: isOpen ? "auto" : "none",
                  transition: "opacity .2s ease, transform .2s cubic-bezier(.4,0,.2,1)",
                  transformOrigin: "top right",
                }}
              >
                {links.map(({ to, label }, i) => (
                  <NavLink
                    key={to}
                    to={to}
                    onClick={() => setIsOpen(false)}
                    style={({ isActive }) => ({
                      display: "block",
                      textDecoration: "none",
                      fontSize: "0.92rem",
                      fontWeight: isActive ? 700 : 500,
                      color: isActive ? "#0b5ed7" : "rgba(11,27,53,0.72)",
                      backgroundColor: isActive ? "rgba(25,118,210,0.08)" : "transparent",
                      padding: "10px 14px",
                      borderRadius: 9,
                      transition: "all .15s",
                      animation: isOpen ? `dropIn .2s ease ${i * 0.05}s both` : "none",
                    })}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "rgba(25,118,210,0.07)";
                      e.currentTarget.style.color = "#0b5ed7";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "";
                      e.currentTarget.style.color = "";
                    }}
                  >
                    {label}
                  </NavLink>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      <style>{`
        @keyframes dropIn {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}