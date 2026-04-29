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
          backdropFilter: "blur(24px) saturate(180%)",
          background: "rgba(255,255,255,0.85)",
          borderBottom: "1px solid rgba(255,255,255,0.2)",
          boxShadow: "0 8px 32px rgba(31,38,135,0.15)",
          padding: "0 32px",
          height: 70,
          display: "flex",
          alignItems: "center",
          transition: "all 0.3s ease",
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
          {/* Logo */}
          <NavLink
            to="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              textDecoration: "none",
              flexShrink: 0,
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <div
              style={{
                width: 42,
                height: 42,
                borderRadius: 12,
                background: "linear-gradient(135deg,#0b5ed7,#38bdf8)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 16px rgba(11,94,215,0.25)",
                transition: "all 0.3s ease",
              }}
            >
              <img
                src="/images/astakira.jpg"
                alt="Astakira"
                style={{ 
                  width: 32, 
                  height: 32, 
                  borderRadius: 8, 
                  objectFit: "cover",
                  border: "2px solid rgba(255,255,255,0.9)"
                }}
              />
            </div>
            <span
              style={{
                fontFamily: "var(--heading)",
                fontWeight: 800,
                fontSize: "1.3rem",
                background: "linear-gradient(135deg,#0b5ed7,#38bdf8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                letterSpacing: "-0.5px",
                textShadow: "0 2px 4px rgba(11,94,215,0.1)",
              }}
            >
              Astakira Media
            </span>
          </NavLink>

          {/* Desktop links */}
          {!isMobile && (
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              {links.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  style={({ isActive }) => ({
                    textDecoration: "none",
                    fontSize: "0.9rem",
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? "#0b5ed7" : "rgba(11,27,53,0.7)",
                    padding: "10px 16px",
                    borderRadius: 12,
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    backgroundColor: isActive 
                      ? "linear-gradient(135deg,rgba(11,94,215,0.15),rgba(56,189,248,0.1))" 
                      : "transparent",
                    border: isActive ? "1px solid rgba(11,94,215,0.2)" : "1px solid transparent",
                    position: "relative",
                    overflow: "hidden",
                    fontFamily: "var(--heading)",
                    letterSpacing: "0.3px",
                  })}
                  onMouseEnter={(e) => {
                    if (!e.currentTarget.style.backgroundColor.includes('gradient')) {
                      e.currentTarget.style.backgroundColor = "rgba(11,94,215,0.08)";
                      e.currentTarget.style.borderColor = "rgba(11,94,215,0.3)";
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow = "0 4px 12px rgba(11,94,215,0.15)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    const isActive = e.currentTarget.style.backgroundColor.includes('gradient');
                    if (!isActive) {
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.style.borderColor = "transparent";
                      e.currentTarget.style.transform = "none";
                      e.currentTarget.style.boxShadow = "none";
                    } else {
                      e.currentTarget.style.transform = "none";
                      e.currentTarget.style.boxShadow = "none";
                    }
                  }}
                >
                  {label}
                </NavLink>
              ))}
            </div>
          )}

          {/* Mobile links */}
          {isMobile && (
            <div style={{ display: "flex", alignItems: "center" }}>
              <button
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 40,
                  height: 40,
                  borderRadius: 12,
                  background: "transparent",
                  border: "none",
                  padding: 0,
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <CloseIcon /> : <HamburgerIcon />}
              </button>

              {/* Dropdown */}
              <div
                ref={dropdownRef}
                style={{
                  position: "absolute",
                  top: "calc(100% + 10px)",
                  right: 0,
                  width: 220,
                  background: "rgba(255,255,255,0.95)",
                  backdropFilter: "blur(20px) saturate(180%)",
                  borderRadius: 16,
                  border: "1px solid rgba(255,255,255,0.3)",
                  boxShadow: "0 16px 40px rgba(31,38,135,0.2)",
                  padding: "12px",
                  opacity: isOpen ? 1 : 0,
                  transform: isOpen ? "translateY(0) scale(1)" : "translateY(-10px) scale(0.95)",
                  pointerEvents: isOpen ? "auto" : "none",
                  transition: "opacity 0.3s ease, transform 0.3s cubic-bezier(.4,0,.2,1)",
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
                      fontSize: "0.9rem",
                      fontWeight: isActive ? 700 : 500,
                      color: isActive ? "#0b5ed7" : "rgba(11,27,53,0.7)",
                      backgroundColor: isActive 
                        ? "linear-gradient(135deg,rgba(11,94,215,0.15),rgba(56,189,248,0.1))" 
                        : "transparent",
                      padding: "12px 16px",
                      borderRadius: 12,
                      transition: "all 0.2s ease",
                      animation: isOpen ? `dropIn 0.3s ease ${i * 0.08}s both` : "none",
                      fontFamily: "var(--heading)",
                      letterSpacing: "0.3px",
                      border: isActive ? "1px solid rgba(11,94,215,0.2)" : "1px solid transparent",
                    })}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "rgba(11,94,215,0.08)";
                      e.currentTarget.style.transform = "translateX(4px)";
                    }}
                    onMouseLeave={(e) => {
                      if (!e.currentTarget.style.backgroundColor.includes('gradient')) {
                        e.currentTarget.style.backgroundColor = "transparent";
                        e.currentTarget.style.transform = "none";
                      } else {
                        e.currentTarget.style.transform = "none";
                      }
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