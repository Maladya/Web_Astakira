import { useState } from "react";

export default function Pricing() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const wrap = {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "60px 20px",
  };

  const grid = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "24px",
    marginTop: "48px",
  };

  const cardContainer = {
    position: "relative",
    width: "100%",
    height: "500px",
    perspective: "1400px",
  };

  const cardInner = {
    position: "relative",
    width: "100%",
    height: "100%",
    transformStyle: "preserve-3d",
    transition: "transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
  };

  const baseCard = {
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: "20px",
    padding: "32px 28px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backfaceVisibility: "hidden",
    WebkitBackfaceVisibility: "hidden",
    overflow: "hidden",
    boxSizing: "border-box",
  };

  const cardBack = {
    ...baseCard,
    transform: "rotateY(180deg)",
  };

  const buttonStyle = {
    width: "100%",
    padding: "13px",
    borderRadius: "999px",
    border: "none",
    fontWeight: "500",
    fontSize: "15px",
    cursor: "pointer",
    letterSpacing: "0.3px",
    transition: "opacity 0.2s ease",
  };

  const deco = {
    position: "absolute",
    top: "-50px",
    right: "-50px",
    width: "160px",
    height: "160px",
    borderRadius: "50%",
  };

  const plans = [
    {
      name: "Paket Dasar",
      price: "Rp299K",
      subtitle: "Cocok untuk usaha baru",
      frontBg: "#E6F1FB",
      border: "1.5px solid #B5D4F4",
      titleColor: "#042C53",
      priceColor: "#185FA5",
      subColor: "#0C447C",
      featureColor: "#0C447C",
      dividerColor: "#B5D4F4",
      decoBg: "rgba(55,138,221,0.08)",
      btnFront: { background: "#378ADD", color: "#fff" },
      btnBack: { background: "#185FA5", color: "#fff" },
      checkBg: "#378ADD",
      checkColor: "#fff",
      hintColor: "rgba(4,44,83,0.4)",
      features: ["QR Order tanpa antri", "Menu digital cantik", "Dashboard ringkas"],
    },
    {
      name: "Paket Bisnis",
      price: "Rp499K",
      subtitle: "Ideal untuk restoran berkembang",
      badge: "Paling populer",
      frontBg: "#185FA5",
      border: "1.5px solid #0C447C",
      titleColor: "#fff",
      priceColor: "#fff",
      subColor: "rgba(255,255,255,0.7)",
      featureColor: "rgba(255,255,255,0.9)",
      dividerColor: "rgba(255,255,255,0.3)",
      decoBg: "rgba(255,255,255,0.07)",
      btnFront: { background: "#fff", color: "#185FA5" },
      btnBack: { background: "#E6F1FB", color: "#185FA5" },
      checkBg: "rgba(255,255,255,0.25)",
      checkColor: "#fff",
      hintColor: "#B5D4F4",
      features: ["QR Order multi-meja", "Menu interaktif & foto", "Dashboard lengkap"],
    },
    {
      name: "Paket Pro",
      price: "Rp999K",
      subtitle: "Untuk chain & franchise",
      frontBg: "#042C53",
      border: "1.5px solid #0C447C",
      titleColor: "#fff",
      priceColor: "#85B7EB",
      subColor: "rgba(255,255,255,0.6)",
      featureColor: "rgba(255,255,255,0.85)",
      dividerColor: "rgba(255,255,255,0.2)",
      decoBg: "rgba(55,138,221,0.12)",
      btnFront: { background: "#378ADD", color: "#fff" },
      btnBack: { background: "#185FA5", color: "#fff" },
      checkBg: "#185FA5",
      checkColor: "#85B7EB",
      hintColor: "rgba(255,255,255,0.3)",
      features: ["Semua fitur bisnis", "Analytics & laporan", "Dedicated support"],
    },
  ];

  return (
    <div style={wrap}>
      <p style={{
        fontSize: "13px",
        fontWeight: "500",
        color: "#185FA5",
        letterSpacing: "1px",
        textTransform: "uppercase",
        margin: "0 0 8px",
      }}>
        Harga
      </p>

      <h1 style={{
        fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
        fontWeight: "500",
        margin: "0 0 8px",
        color: "#042C53",
      }}>
        Pilih Paket
      </h1>

      <p style={{ color: "#378ADD", margin: 0, fontSize: "15px" }}>
        Mulai dari yang sederhana hingga solusi lengkap untuk bisnis Anda.
      </p>

      <div style={grid}>
        {plans.map((plan, i) => {
          const isHovered = hoveredCard === i;

          return (
            <div
              key={i}
              style={{
                ...cardContainer,
                transform: isHovered ? "translateY(-8px)" : "translateY(0)",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div
                style={{
                  ...cardInner,
                  transform: isHovered ? "rotateY(180deg)" : "rotateY(0deg)",
                }}
              >
                {/* FRONT */}
                <div
                  style={{
                    ...baseCard,
                    background: plan.frontBg,
                    border: plan.border,
                  }}
                >
                  <div style={{ ...deco, background: plan.decoBg }} />

                  <div>
                    {plan.badge && (
                      <span style={{
                        display: "inline-block",
                        background: "#B5D4F4",
                        color: "#0C447C",
                        fontSize: "12px",
                        padding: "4px 12px",
                        borderRadius: "999px",
                        fontWeight: "500",
                        marginBottom: "12px",
                      }}>
                        {plan.badge}
                      </span>
                    )}

                    <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "0 0 6px", color: plan.titleColor }}>
                      {plan.name}
                    </h2>

                    <h1 style={{ fontSize: "48px", fontWeight: "500", margin: "8px 0 4px", color: plan.priceColor }}>
                      {plan.price}
                    </h1>

                    <p style={{ fontSize: "14px", margin: "0 0 0", color: plan.subColor }}>per bulan</p>

                    <div style={{ height: "1px", background: plan.dividerColor, margin: "18px 0" }} />

                    {plan.features.map((f, idx) => (
                      <div key={idx} style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        marginBottom: "8px",
                        fontSize: "14px",
                        color: plan.featureColor,
                      }}>
                        <span style={{
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "16px",
                          height: "16px",
                          borderRadius: "50%",
                          background: plan.checkBg,
                          color: plan.checkColor,
                          fontSize: "10px",
                          flexShrink: 0,
                        }}>
                          ✓
                        </span>
                        {f}
                      </div>
                    ))}
                  </div>

                  <div>
                    <button style={{ ...buttonStyle, ...plan.btnFront }}>
                      Order Sekarang
                    </button>
                    <p style={{ fontSize: "12px", textAlign: "center", marginTop: "6px", color: plan.hintColor }}>
                      Arahkan kursor untuk detail →
                    </p>
                  </div>
                </div>

                {/* BACK */}
                <div
                  style={{
                    ...cardBack,
                    background: plan.frontBg,
                    border: plan.border,
                  }}
                >
                  <div style={{ ...deco, background: plan.decoBg }} />

                  <div>
                    {plan.badge && (
                      <span style={{
                        display: "inline-block",
                        background: "#B5D4F4",
                        color: "#0C447C",
                        fontSize: "12px",
                        padding: "4px 12px",
                        borderRadius: "999px",
                        fontWeight: "500",
                        marginBottom: "12px",
                      }}>
                        {plan.badge}
                      </span>
                    )}

                    <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "0 0 4px", color: plan.titleColor }}>
                      Detail {plan.name}
                    </h2>

                    <p style={{ fontSize: "14px", margin: "0", color: plan.subColor }}>
                      {plan.subtitle}
                    </p>

                    <div style={{ height: "1px", background: plan.dividerColor, margin: "18px 0" }} />

                    {plan.features.map((f, idx) => (
                      <div key={idx} style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        marginBottom: "8px",
                        fontSize: "14px",
                        color: plan.featureColor,
                      }}>
                        <span style={{
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "16px",
                          height: "16px",
                          borderRadius: "50%",
                          background: plan.checkBg,
                          color: plan.checkColor,
                          fontSize: "10px",
                          flexShrink: 0,
                        }}>
                          ✓
                        </span>
                        {f}
                      </div>
                    ))}
                  </div>

                  <button style={{ ...buttonStyle, ...plan.btnBack }}>
                    Pilih Paket
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}