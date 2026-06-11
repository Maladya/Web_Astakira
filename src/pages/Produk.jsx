import { useEffect, useMemo, useRef, useState } from "react";
import { buildWhatsAppUrl, GhostCTA, PrimaryCTA, Reveal, SectionBadge, SectionHeader } from "../components/ui";

const PRODUCTS = [
  {
    title: "Mycafe POS & Ordering",
    desc: "Sistem manajemen Point of Sale modern dan aplikasi pemesanan cerdas untuk kafe dan restoran. Alurnya dibuat supaya operasional lebih cepat dan transaksi lebih rapi.",
    href: "https://www.mycafe-order.net/",
    tag: "[ POS ]",
    industry: "Food & Beverage",
    stack: "React.js, Node.js, Firebase, PWA",
    items: [
      { src: "/images/mycafe/1.png", label: "Dashboard Cafe & POS" },
      { src: "/images/mycafe/2.png", label: "Desain Menu Digital" },
      { src: "/images/mycafe/3.png", label: "Sistem Order Pelanggan" },
      { src: "/images/mycafe/4.png", label: "Statistik & Penjualan" },
    ],
    feature: ["Real-time order tracking", "Menu management", "QR code ordering"],
    message: "Halo Astakira, saya ingin bikin sistem seperti Mycafe POS untuk bisnis saya.",
  },
  {
    title: "As Blanc Cafe",
    desc: "Website profil dan landing page elegan untuk As Blanc Cafe. Dibuat untuk membawa ambience fisik kafe ke pengalaman digital yang estetik dan responsif.",
    href: "https://cafe-asblanc.mycafe-order.net/",
    tag: "[ Landing Page ]",
    industry: "Hospitality",
    stack: "React.js, Vite, Vanilla CSS, SEO",
    items: [
      { src: "/images/asblanc/1.png", label: "Landing Page Utama" },
      { src: "/images/asblanc/2.png", label: "Section Menu Unggulan" },
      { src: "/images/asblanc/3.png", label: "Form Reservasi & Kontak" },
      { src: "/images/asblanc/4.png", label: "Ulasan Klien & Rating" },
    ],
    feature: ["Aesthetic web design", "Super responsive layout", "Speed & SEO optimized"],
    message: "Halo Astakira, saya ingin buat landing page seperti As Blanc Cafe.",
  },
];

function ProductCard({ product, index, onOpenLightbox }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [hovered, setHovered] = useState(false);
  const cycleRef = useRef(null);
  const isReverse = index % 2 === 1;

  useEffect(() => {
    if (!hovered || product.items.length < 2) return;

    cycleRef.current = window.setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % product.items.length);
    }, 1400);

    return () => window.clearInterval(cycleRef.current);
  }, [hovered, product.items.length]);

  return (
    <div
      className={`feature-card product-grid ${isReverse ? "reverse" : ""}`}
      style={{
        padding: "32px 28px",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="info-col" style={{ order: isReverse ? 2 : 1 }}>
        <SectionBadge>{product.tag}</SectionBadge>
        <div style={{ marginTop: 16, color: "#0b5ed7", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "var(--font-mono)" }}>
          Studi Kasus 0{index + 1}
        </div>
        <h2 style={{ marginTop: 12, fontSize: "clamp(1.8rem, 3vw, 2.6rem)", lineHeight: 1.1, letterSpacing: "-0.05em", fontWeight: 800 }}>
          {product.title}
        </h2>
        <div style={{ marginTop: 14, display: "flex", flexWrap: "wrap", gap: 8 }}>
          <span className="surface-card" style={{ padding: "6px 12px", fontSize: 12, fontWeight: 700, color: "#0b5ed7", border: "1px solid rgba(11,94,215,0.1)", background: "rgba(11,94,215,0.03)" }}>
            {product.industry}
          </span>
          <span className="surface-card" style={{ padding: "6px 12px", fontSize: 12, fontWeight: 700, color: "#0b5ed7", border: "1px solid rgba(11,94,215,0.1)", background: "rgba(11,94,215,0.03)" }}>
            {product.stack}
          </span>
        </div>
        <p style={{ marginTop: 18, color: "rgba(11,27,53,0.72)", lineHeight: 1.8, fontSize: 15 }}>
          {product.desc}
        </p>
        <div style={{ marginTop: 22, display: "grid", gap: 12 }}>
          {product.feature.map((feat) => (
            <div key={feat} style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ width: 24, height: 24, borderRadius: "50%", background: "rgba(11,94,215,0.08)", color: "#0b5ed7", display: "grid", placeItems: "center", flexShrink: 0, border: "1px solid rgba(11,94,215,0.16)" }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <span style={{ fontWeight: 600, color: "#0a1628", fontSize: 14 }}>{feat}</span>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 28, display: "flex", flexWrap: "wrap", gap: 14, alignItems: "center" }}>
          <PrimaryCTA href={product.href}>Kunjungi Website →</PrimaryCTA>
          <GhostCTA href={buildWhatsAppUrl(product.message)}>Mau yang Serupa?</GhostCTA>
        </div>
      </div>

      <div className="image-col" style={{ order: isReverse ? 1 : 2 }}>
        <div
          className="surface-card"
          style={{
            overflow: "hidden",
            borderRadius: 28,
            cursor: "zoom-in",
            boxShadow: hovered ? "0 36px 80px rgba(10,22,40,0.14)" : "0 22px 48px rgba(10,22,40,0.08)",
            transition: "all .3s cubic-bezier(0.16, 1, 0.3, 1)",
            transform: hovered ? "translateY(-4px)" : "translateY(0)",
          }}
          onClick={() => onOpenLightbox(product.items, activeIdx)}
        >
          <div style={{ height: 46, display: "flex", alignItems: "center", gap: 8, padding: "0 16px", background: "rgba(255,255,255,0.74)", borderBottom: "1px solid rgba(11,94,215,0.08)" }}>
            <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f56" }} />
            <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ffbd2e" }} />
            <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#27c93f" }} />
            <div style={{ marginLeft: "auto", fontSize: 12, color: "rgba(11,27,53,0.55)", fontFamily: "var(--font-mono)" }}>
              {new URL(product.href).hostname}
            </div>
          </div>
          <div style={{ position: "relative" }}>
            <img
              src={product.items[activeIdx].src}
              alt={product.items[activeIdx].label}
              style={{
                width: "100%",
                height: "clamp(250px, 34vw, 420px)",
                objectFit: "cover",
                display: "block",
                filter: hovered ? "brightness(1.03) saturate(1.04)" : "none",
                transition: "filter .25s ease",
              }}
            />
            {/* dynamic progress dots */}
            <div style={{
              position: "absolute",
              top: 14,
              right: 18,
              display: "flex",
              gap: 6,
              zIndex: 10,
              background: "rgba(10,22,40,0.45)",
              padding: "6px 10px",
              borderRadius: 999,
              backdropFilter: "blur(6px)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}>
              {product.items.map((_, idx) => (
                <span
                  key={idx}
                  style={{
                    width: idx === activeIdx ? 16 : 6,
                    height: 6,
                    borderRadius: 999,
                    background: idx === activeIdx ? "#0b5ed7" : "rgba(255,255,255,0.4)",
                    transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)"
                  }}
                />
              ))}
            </div>
            <div
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                bottom: 0,
                padding: "18px 18px 14px",
                color: "#fff",
                background: "linear-gradient(180deg, transparent, rgba(10,22,40,0.78))",
                display: "flex",
                alignItems: "end",
                justifyContent: "space-between",
                gap: 12,
              }}
            >
              <div style={{ fontWeight: 700 }}>{product.items[activeIdx].label}</div>
              <span style={{ fontSize: 12, background: "rgba(255,255,255,0.16)", padding: "4px 8px", borderRadius: 999 }}>
                Klik untuk memperbesar
              </span>
            </div>
          </div>
        </div>

        <div style={{ marginTop: 14, display: "flex", flexWrap: "wrap", gap: 10 }}>
          {product.items.map((item, idx) => (
            <button
              key={item.label}
              className="focus-ring"
              onClick={() => setActiveIdx(idx)}
              onMouseEnter={() => setActiveIdx(idx)}
              style={{
                width: 72,
                height: 48,
                padding: 0,
                borderRadius: 12,
                border: `2px solid ${idx === activeIdx ? "#0b5ed7" : "rgba(11,94,215,0.12)"}`,
                overflow: "hidden",
                background: "#fff",
                cursor: "pointer",
                opacity: idx === activeIdx ? 1 : 0.55,
                transition: "all 0.25s ease",
              }}
            >
              <img src={item.src} alt={item.label} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function Lightbox({ data, onClose, onNavigate }) {
  const touchStart = useRef(null);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") onNavigate(-1);
      if (event.key === "ArrowRight") onNavigate(1);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose, onNavigate]);

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1000,
        background: "rgba(10,22,40,0.94)",
        backdropFilter: "blur(16px)",
        display: "grid",
        placeItems: "center",
        padding: 18,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        onTouchStart={(e) => {
          touchStart.current = e.touches[0].clientX;
        }}
        onTouchEnd={(e) => {
          if (touchStart.current == null) return;
          const delta = e.changedTouches[0].clientX - touchStart.current;
          if (Math.abs(delta) > 50) {
            onNavigate(delta > 0 ? -1 : 1);
          }
          touchStart.current = null;
        }}
        style={{ width: "min(980px, 94vw)", maxHeight: "88vh", display: "grid", gap: 16 }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", color: "#fff" }}>
          <div>
            <div style={{ fontSize: 13, opacity: 0.6, marginBottom: 4 }}>Preview</div>
            <div style={{ fontSize: 18, fontWeight: 700 }}>{data.items[data.index].label}</div>
          </div>
          <button
            onClick={onClose}
            className="focus-ring"
            style={{
              width: 46,
              height: 46,
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.14)",
              background: "rgba(255,255,255,0.08)",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            ×
          </button>
        </div>

        <div style={{ position: "relative" }}>
          <img
            src={data.items[data.index].src}
            alt={data.items[data.index].label}
            style={{
              width: "100%",
              maxHeight: "72vh",
              objectFit: "contain",
              borderRadius: 22,
              background: "#fff",
              boxShadow: "0 30px 90px rgba(0,0,0,0.42)",
            }}
          />
          {data.index > 0 && (
            <button
              className="focus-ring lightbox-nav-btn left"
              onClick={() => onNavigate(-1)}
              style={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                left: -70,
                width: 52,
                height: 52,
                borderRadius: "50%",
                border: "1px solid rgba(255,255,255,0.14)",
                background: "rgba(255,255,255,0.08)",
                color: "#fff",
                fontSize: 30,
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              ‹
            </button>
          )}
          {data.index < data.items.length - 1 && (
            <button
              className="focus-ring lightbox-nav-btn right"
              onClick={() => onNavigate(1)}
              style={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                right: -70,
                width: 52,
                height: 52,
                borderRadius: "50%",
                border: "1px solid rgba(255,255,255,0.14)",
                background: "rgba(255,255,255,0.08)",
                color: "#fff",
                fontSize: 30,
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              ›
            </button>
          )}
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", color: "rgba(255,255,255,0.72)", fontSize: 14 }}>
          <span>{data.index + 1} / {data.items.length}</span>
          <PrimaryCTA href={buildWhatsAppUrl("Halo Astakira, saya ingin produk serupa dari portofolio yang saya lihat.")} small>
            Mau yang Serupa?
          </PrimaryCTA>
        </div>
      </div>
    </div>
  );
}



export default function Produk() {
  const [activeFilter, setActiveFilter] = useState("Semua");
  const [lightboxData, setLightboxData] = useState(null);

  const filteredProducts = useMemo(() => {
    if (activeFilter === "Semua") return PRODUCTS;
    return PRODUCTS.filter((product) =>
      activeFilter === "POS" ? product.tag.includes("POS") : product.tag.includes("Landing Page")
    );
  }, [activeFilter]);

  const openLightbox = (items, index) => setLightboxData({ items, index });
  const closeLightbox = () => setLightboxData(null);
  const navigateLightbox = (direction) => {
    setLightboxData((prev) => {
      if (!prev) return prev;
      const nextIndex = Math.max(0, Math.min(prev.items.length - 1, prev.index + direction));
      return { ...prev, index: nextIndex };
    });
  };

  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      {/* decorative background ambient glow */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "20%",
          width: "50vw",
          height: "50vw",
          background: "radial-gradient(circle, rgba(11,94,215,0.07) 0%, transparent 68%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "40%",
          right: "10%",
          width: "40vw",
          height: "40vw",
          background: "radial-gradient(circle, rgba(6,182,212,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div className="ui-shell" style={{ paddingTop: 28, paddingBottom: 100, position: "relative", zIndex: 1 }}>
        <section style={{ padding: "70px 0 44px" }}>
          <Reveal>
            <div style={{ maxWidth: 900 }}>
              <SectionBadge>Portofolio Eksklusif</SectionBadge>
              <h1 style={{ marginTop: 18, fontSize: "clamp(2.8rem, 6vw, 4.8rem)", lineHeight: 1.02, letterSpacing: "-0.06em", fontWeight: 800 }}>
                Mahakarya <span style={{ color: "#0b5ed7" }}>digital</span> kami.
              </h1>
              <p style={{ marginTop: 18, fontSize: "1.1rem", lineHeight: 1.8, color: "rgba(11,27,53,0.72)", maxWidth: 760 }}>
                Kumpulan produk digital terbaik yang dirancang untuk menciptakan pengalaman interaktif yang elegan, cepat, dan berdampak nyata bagi bisnis.
              </p>
              <div style={{ marginTop: 24, display: "flex", flexWrap: "wrap", gap: 12 }}>
                {["Semua", "POS", "Landing Page"].map((filter) => {
                  const isActive = activeFilter === filter;
                  return (
                    <button
                      key={filter}
                      className="focus-ring filter-btn"
                      onClick={() => setActiveFilter(filter)}
                      style={{
                        borderRadius: 999,
                        padding: "10px 20px",
                        border: `1px solid ${isActive ? "#0b5ed7" : "rgba(11,94,215,0.12)"}`,
                        background: isActive ? "linear-gradient(135deg, #0b5ed7 0%, #2563eb 100%)" : "rgba(255,255,255,0.68)",
                        color: isActive ? "#fff" : "rgba(11,27,53,0.72)",
                        fontWeight: 700,
                        cursor: "pointer",
                        boxShadow: isActive ? "0 10px 24px rgba(11,94,215,0.18)" : "none",
                        transition: "all 0.25s ease",
                      }}
                      onMouseEnter={(e) => {
                        if (!isActive) {
                          e.currentTarget.style.background = "#fff";
                          e.currentTarget.style.borderColor = "rgba(11,94,215,0.22)";
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive) {
                          e.currentTarget.style.background = "rgba(255,255,255,0.68)";
                          e.currentTarget.style.borderColor = "rgba(11,94,215,0.12)";
                        }
                      }}
                    >
                      {filter}
                    </button>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </section>

        <section style={{ display: "grid", gap: 32 }}>
          {filteredProducts.map((product, index) => (
            <Reveal key={product.title} delay={index * 90}>
              <ProductCard product={product} index={index} onOpenLightbox={openLightbox} />
            </Reveal>
          ))}
        </section>

        <section style={{ marginTop: 52 }}>
          <div
            className="glass-card"
            style={{
              borderRadius: 32,
              padding: "48px 36px",
              overflow: "hidden",
              position: "relative",
              border: "1px solid rgba(59, 130, 246, 0.2)",
              boxShadow: "0 30px 80px rgba(10,22,40,0.22)",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "radial-gradient(circle at 18% 30%, rgba(11,94,215,0.22), transparent 36%), radial-gradient(circle at 82% 70%, rgba(6,182,212,0.16), transparent 30%), #081225",
                pointerEvents: "none",
              }}
            />
            <div style={{ position: "relative", zIndex: 1, display: "grid", gap: 18, textAlign: "center", maxWidth: 780, margin: "0 auto" }}>
              <SectionBadge accent>Punya ide proyek?</SectionBadge>
              <h2 style={{ color: "#fff", fontSize: "clamp(2rem, 4vw, 3.2rem)", lineHeight: 1.1, fontWeight: 800 }}>
                Kita bisa bikin sesuatu yang serupa, atau lebih tepat untuk bisnismu.
              </h2>
              <p style={{ color: "rgba(255,255,255,0.76)", lineHeight: 1.8, fontSize: 15 }}>
                Ceritakan kebutuhanmu, lalu kami bantu memetakan solusi, timeline, dan estimasi kerja sama yang paling masuk akal.
              </p>
              <div style={{ marginTop: 10, display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 14 }}>
                <PrimaryCTA href={buildWhatsAppUrl("Halo Astakira, saya punya ide proyek dan ingin diskusi kerja sama.")}>
                  Diskusi Proyek →
                </PrimaryCTA>
                <GhostCTA href="/pricing" style={{ color: "#fff" }}>
                  Lihat Harga
                </GhostCTA>
              </div>
            </div>
          </div>
        </section>

        {lightboxData && (
          <Lightbox data={lightboxData} onClose={closeLightbox} onNavigate={navigateLightbox} />
        )}
      </div>

      <style>{`
        .product-grid {
          display: grid;
          grid-template-columns: 1.05fr 1fr;
          gap: 32px;
          align-items: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .product-grid.reverse {
          grid-template-columns: 1fr 1.05fr;
        }
        
        @media (max-width: 980px) {
          .product-grid, .product-grid.reverse {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
            padding: 24px 20px !important;
          }
          .info-col {
            order: 2 !important;
          }
          .image-col {
            order: 1 !important;
          }
        }

        @media (max-width: 1100px) {
          .lightbox-nav-btn {
            width: 46px !important;
            height: 46px !important;
            font-size: 24px !important;
            background: rgba(10, 22, 40, 0.65) !important;
            border-color: rgba(255, 255, 255, 0.2) !important;
          }
          .lightbox-nav-btn.left {
            left: 12px !important;
          }
          .lightbox-nav-btn.right {
            right: 12px !important;
          }
        }

        @media (max-width: 580px) {
          .lightbox-nav-btn {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
