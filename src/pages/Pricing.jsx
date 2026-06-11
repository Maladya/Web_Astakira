import { useState } from "react";
import { buildWhatsAppUrl, PrimaryCTA, GhostCTA, SectionBadge, Reveal } from "../components/ui";

const PLANS = [
  {
    name: "Paket Dasar",
    price: "Rp 299K",
    period: "/ bulan",
    subtitle: "Cocok untuk kafe skala kecil atau rintisan awal yang butuh sistem menu digital mandiri.",
    accentColor: "#3b82f6",
    bgTint: "rgba(10, 25, 50, 0.72)",
    borderColor: "rgba(59, 130, 246, 0.25)",
    glowColor: "rgba(59, 130, 246, 0.18)",
    priceColor: "#60a5fa",
    features: [
      "Menu digital mandiri (QR Code)",
      "QR Order tanpa antrian pelanggan",
      "Dashboard ringkas & rekap transaksi",
      "Hingga 10 meja pelanggan",
      "Support standard e-mail & WA"
    ],
    message: "Halo Astakira, saya ingin tanya/order Paket Dasar (Rp299K) untuk bisnis saya.",
  },
  {
    name: "Paket Bisnis",
    price: "Rp 499K",
    period: "/ bulan",
    subtitle: "Ideal untuk restoran berkembang yang menginginkan integrasi foto menu & multi-meja aktif.",
    accentColor: "#f59e0b",
    bgTint: "rgba(24, 20, 10, 0.76)",
    borderColor: "rgba(245, 158, 11, 0.45)",
    glowColor: "rgba(245, 158, 11, 0.22)",
    priceColor: "#f59e0b",
    badge: "Paling Populer",
    features: [
      "Semua fitur Paket Dasar",
      "QR Order multi-meja aktif",
      "Menu interaktif dengan deskripsi & foto",
      "Dashboard laporan lengkap & grafik",
      "Hingga 30 meja pelanggan",
      "Priority WhatsApp support 24/7"
    ],
    message: "Halo Astakira, saya ingin tanya/order Paket Bisnis (Rp499K) untuk restoran saya.",
  },
  {
    name: "Paket Pro",
    price: "Rp 999K",
    period: "/ bulan",
    subtitle: "Solusi enterprise untuk jaringan kafe, franchise, atau restoran skala menengah-besar.",
    accentColor: "#06b6d4",
    bgTint: "rgba(10, 28, 44, 0.72)",
    borderColor: "rgba(6, 182, 212, 0.35)",
    glowColor: "rgba(6, 182, 212, 0.2)",
    priceColor: "#22d3ee",
    features: [
      "Semua fitur Paket Bisnis",
      "Manajemen multi-outlet / cabang",
      "Analytics mendalam & ekspor laporan keuangan",
      "Meja pelanggan tidak terbatas",
      "Dedicated manager support & SLA respon cepat",
      "Kustom domain opsional"
    ],
    message: "Halo Astakira, saya tertarik dengan Paket Pro (Rp999K) untuk franchise saya.",
  }
];

export default function Pricing() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [flippedCards, setFlippedCards] = useState({});

  const toggleFlip = (index, event) => {
    event.stopPropagation();
    setFlippedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
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
          background: "radial-gradient(circle, rgba(11,94,215,0.06) 0%, transparent 68%)",
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
          background: "radial-gradient(circle, rgba(6,182,212,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div className="ui-shell" style={{ paddingTop: 36, paddingBottom: 100, position: "relative", zIndex: 1 }}>
        <section style={{ padding: "70px 0 24px" }}>
          <Reveal>
            <div style={{ maxWidth: 860, margin: "0 auto", textAlign: "center" }}>
              <SectionBadge>Investasi Terbaik</SectionBadge>
              <h1 style={{ marginTop: 18, fontSize: "clamp(2.5rem, 5.5vw, 4.2rem)", lineHeight: 1.05, letterSpacing: "-0.05em", fontWeight: 800 }}>
                Pilih paket sesuai <span style={{ color: "#0b5ed7" }}>kebutuhan</span> bisnismu.
              </h1>
              <p style={{ marginTop: 18, fontSize: "1.1rem", lineHeight: 1.8, color: "rgba(11,27,53,0.72)", maxWidth: 640, margin: "18px auto 0" }}>
                Mulai dari rintisan awal hingga solusi integrasi multi-cabang. Transparan, terjangkau, dan dirancang untuk memacu performa transaksi.
              </p>
            </div>
          </Reveal>
        </section>

        <div className="pricing-grid">
          {PLANS.map((plan, i) => {
            const isFlipped = flippedCards[i] || (hoveredCard === i);
            const isPopular = plan.badge != null;

            return (
              <div
                key={i}
                className="pricing-card-container"
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`pricing-card-inner ${isFlipped ? "flipped" : ""}`}>
                  {/* CARD FRONT */}
                  <div
                    className="pricing-card-front glass-card"
                    style={{
                      background: plan.bgTint,
                      border: `1px solid ${isFlipped || (hoveredCard === i) ? plan.accentColor : plan.borderColor}`,
                      boxShadow: isFlipped || (hoveredCard === i)
                        ? `0 20px 48px ${plan.glowColor}`
                        : "0 18px 40px rgba(10, 22, 40, 0.1)",
                    }}
                  >
                    {isPopular && (
                      <span className="popular-badge">
                        {plan.badge}
                      </span>
                    )}

                    <div>
                      <h3 style={{ fontSize: 18, fontWeight: 800, color: "#fff", marginBottom: 6 }}>
                        {plan.name}
                      </h3>
                      <p style={{ fontSize: 14, color: "rgba(255, 255, 255, 0.55)", lineHeight: 1.4, minHeight: 40 }}>
                        {plan.subtitle}
                      </p>
                      
                      <div style={{ display: "flex", alignItems: "baseline", gap: 6, margin: "24px 0 8px" }}>
                        <span style={{ fontSize: 44, fontWeight: 800, color: plan.priceColor, letterSpacing: "-0.02em" }}>
                          {plan.price}
                        </span>
                        <span style={{ fontSize: 14, color: "rgba(255, 255, 255, 0.5)" }}>
                          {plan.period}
                        </span>
                      </div>
                      
                      <div style={{ height: 1, background: "rgba(255, 255, 255, 0.08)", margin: "16px 0 20px" }} />

                      <div style={{ display: "grid", gap: 10 }}>
                        {plan.features.slice(0, 4).map((f, idx) => (
                          <div key={idx} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "rgba(255, 255, 255, 0.85)" }}>
                            <span style={{
                              display: "inline-flex",
                              alignItems: "center",
                              justifyContent: "center",
                              width: 18,
                              height: 18,
                              borderRadius: "50%",
                              background: plan.glowColor,
                              color: plan.priceColor,
                              fontSize: 11,
                              fontWeight: 800,
                              flexShrink: 0,
                              border: `1px solid ${plan.borderColor}`
                            }}>
                              ✓
                            </span>
                            {f}
                          </div>
                        ))}
                        {plan.features.length > 4 && (
                          <div style={{ fontSize: 13, color: plan.priceColor, fontWeight: 700, paddingLeft: 28, marginTop: 4 }}>
                            +{plan.features.length - 4} Fitur lainnya
                          </div>
                        )}
                      </div>
                    </div>

                    <div style={{ marginTop: 24, display: "grid", gap: 10 }}>
                      <PrimaryCTA href={buildWhatsAppUrl(plan.message)} style={{ width: "100%", padding: "12px 18px", minHeight: 44, borderRadius: 16 }}>
                        Order Sekarang →
                      </PrimaryCTA>
                      <button
                        onClick={(e) => toggleFlip(i, e)}
                        style={{
                          background: "transparent",
                          border: "none",
                          color: "rgba(255, 255, 255, 0.5)",
                          fontSize: 13,
                          fontWeight: 700,
                          cursor: "pointer",
                          padding: "6px 0",
                          textDecoration: "underline",
                        }}
                      >
                        Detail Paket Lengkap
                      </button>
                    </div>
                  </div>

                  {/* CARD BACK */}
                  <div
                    className="pricing-card-back glass-card"
                    style={{
                      background: plan.bgTint,
                      border: `1px solid ${isFlipped || (hoveredCard === i) ? plan.accentColor : plan.borderColor}`,
                      boxShadow: isFlipped || (hoveredCard === i)
                        ? `0 20px 48px ${plan.glowColor}`
                        : "0 18px 40px rgba(10, 22, 40, 0.1)",
                    }}
                  >
                    <div>
                      <h3 style={{ fontSize: 18, fontWeight: 800, color: "#fff", marginBottom: 14 }}>
                        Fitur Lengkap {plan.name}
                      </h3>
                      
                      <div style={{ display: "grid", gap: 10, maxHeight: 300, overflowY: "auto", paddingRight: 4 }}>
                        {plan.features.map((f, idx) => (
                          <div key={idx} style={{ display: "flex", alignItems: "start", gap: 10, fontSize: 13, color: "rgba(255, 255, 255, 0.85)", lineHeight: 1.4 }}>
                            <span style={{
                              display: "inline-flex",
                              alignItems: "center",
                              justifyContent: "center",
                              width: 18,
                              height: 18,
                              borderRadius: "50%",
                              background: plan.glowColor,
                              color: plan.priceColor,
                              fontSize: 11,
                              fontWeight: 800,
                              flexShrink: 0,
                              border: `1px solid ${plan.borderColor}`,
                              marginTop: 2
                            }}>
                              ✓
                            </span>
                            <span>{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div style={{ marginTop: 24, display: "grid", gap: 10 }}>
                      <PrimaryCTA href={buildWhatsAppUrl(plan.message)} style={{ width: "100%", padding: "12px 18px", minHeight: 44, borderRadius: 16 }}>
                        Pilih Paket Ini →
                      </PrimaryCTA>
                      <button
                        onClick={(e) => toggleFlip(i, e)}
                        style={{
                          background: "transparent",
                          border: "none",
                          color: "rgba(255, 255, 255, 0.5)",
                          fontSize: 13,
                          fontWeight: 700,
                          cursor: "pointer",
                          padding: "6px 0",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: 6
                        }}
                      >
                        ← Kembali Ke Depan
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <section style={{ marginTop: 64 }}>
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
            <div style={{ position: "relative", zIndex: 1, display: "grid", gap: 18, textAlign: "center", maxWidth: 760, margin: "0 auto" }}>
              <SectionBadge accent>Custom Solution</SectionBadge>
              <h2 style={{ color: "#fff", fontSize: "clamp(2rem, 4vw, 3.2rem)", lineHeight: 1.1, fontWeight: 800 }}>
                Kebutuhan bisnismu lebih kompleks?
              </h2>
              <p style={{ color: "rgba(255,255,255,0.76)", lineHeight: 1.8, fontSize: 15 }}>
                Kami siap merancang sistem kustom khusus (seperti integrasi POS khusus, IoT, sinkronisasi inventori, dll) yang disesuaikan penuh dengan operasional unik bisnismu.
              </p>
              <div style={{ marginTop: 10, display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 14 }}>
                <PrimaryCTA href={buildWhatsAppUrl("Halo Astakira, saya ingin konsultasi sistem kustom/enterprise untuk bisnis saya.")}>
                  Konsultasi Custom System →
                </PrimaryCTA>
              </div>
            </div>
          </div>
        </section>
      </div>

      <style>{`
        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 28px;
          margin-top: 56px;
          align-items: start;
        }

        .pricing-card-container {
          position: relative;
          width: 100%;
          height: 520px;
          perspective: 1500px;
        }

        .pricing-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .pricing-card-inner.flipped {
          transform: rotateY(180deg);
        }

        .pricing-card-front,
        .pricing-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          border-radius: 26px;
          padding: 36px 30px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          box-sizing: border-box;
          background: rgba(10, 22, 40, 0.72);
          backdrop-filter: blur(12px) !important;
        }

        .pricing-card-back {
          transform: rotateY(180deg);
        }

        .popular-badge {
          position: absolute;
          top: 18px;
          right: 20px;
          background: rgba(245, 158, 11, 0.15);
          border: 1px solid rgba(245, 158, 11, 0.4);
          color: #f59e0b;
          font-size: 11px;
          font-family: var(--font-mono);
          letter-spacing: 0.05em;
          text-transform: uppercase;
          padding: 4px 10px;
          border-radius: 99px;
          font-weight: 700;
        }

        @media (max-width: 980px) {
          .pricing-grid {
            grid-template-columns: 1fr;
            max-width: 460px;
            margin: 48px auto 0;
            gap: 32px;
          }
          .pricing-card-container {
            height: 500px;
          }
        }

        @media (max-width: 480px) {
          .pricing-card-front,
          .pricing-card-back {
            padding: 28px 22px;
          }
        }
      `}</style>
    </div>
  );
}