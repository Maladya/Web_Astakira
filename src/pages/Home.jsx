import { useEffect, useRef, useState } from "react";
import {
  buildWhatsAppUrl,
  GhostCTA,
  InlineContact,
  PrimaryCTA,
  Reveal,
  SectionBadge,
  SectionHeader,
  StatCard,
} from "../components/ui";
import Button from "../components/Button";

const SERVICES = [
  {
    title: "Website Development",
    desc: "Company profile, landing page, dan toko online yang dirancang rapi, cepat, dan siap membantu konversi.",
    message: "Halo Astakira, saya ingin tanya Website Development untuk proyek saya.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="10" y="14" width="44" height="36" rx="8" />
        <path d="M18 24h28" />
        <path d="M18 32h16" />
        <path d="M18 40h10" />
      </svg>
    ),
  },
  {
    title: "Mobile App Development",
    desc: "Aplikasi mobile kustom dengan UI/UX profesional, alur kerja jelas, dan integrasi backend yang stabil.",
    message: "Halo Astakira, saya ingin tanya Mobile App Development untuk kebutuhan bisnis saya.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="20" y="8" width="24" height="48" rx="6" />
        <path d="M28 16h8" />
        <circle cx="32" cy="45" r="2" />
      </svg>
    ),
  },
  {
    title: "Custom System",
    desc: "Sistem informasi dan web aplikasi yang dibuat sesuai alur bisnis, bukan dipaksa mengikuti template umum.",
    message: "Halo Astakira, saya ingin konsultasi Custom System untuk proyek saya.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 18h36v28H14z" />
        <path d="M22 26h20" />
        <path d="M22 34h12" />
        <path d="M26 46h12" />
      </svg>
    ),
  },
];

const PROCESS = [
  { num: "01", title: "Konsultasi & Briefing", desc: "Diskusi tujuan, target pasar, dan scope kerja. Gratis, tanpa komitmen.", time: "1-2 hari" },
  { num: "02", title: "Desain & Prototipe", desc: "Menyusun tampilan dan flow awal agar arah produk jelas sejak awal.", time: "3-5 hari" },
  { num: "03", title: "Development & Testing", desc: "Eksekusi teknis responsif, cepat, dan diuji di beberapa perangkat.", time: "1-3 minggu" },
  { num: "04", title: "Launch & Handover", desc: "Deploy, setup dasar, dan serah-terima agar tim mudah melanjutkan.", time: "1-2 hari" },
];

const CLIENT_LOGOS = [
  {
    type: "image",
    src: "/images/logo.jpg",
    alt: "AS Blanc Coffee"
  }
];

function AnimatedNumber({ value, suffix = "", duration = 900 }) {
  const [display, setDisplay] = useState("0");
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setDisplay(value);
      return;
    }

    let start = null;
    const from = 0;
    const numeric = Number(value.replace(/[^0-9.]/g, ""));
    const hasPlus = value.includes("+");

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const current = Math.round(from + (numeric - from) * progress);
      setDisplay(`${current}${hasPlus ? "+" : ""}`);
      if (progress < 1) requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        requestAnimationFrame(step);
        observer.disconnect();
      }
    }, { threshold: 0.5 });

    observer.observe(node);
    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

function ServiceCard({ item }) {
  return (
    <div
      className="feature-card"
      style={{
        padding: 24,
        overflow: "hidden",
        minHeight: 280,
        display: "flex",
        flexDirection: "column",
        gap: 18,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
        <div
          style={{
            width: 70,
            height: 70,
            borderRadius: 18,
            display: "grid",
            placeItems: "center",
            color: "#0b5ed7",
            background: "linear-gradient(135deg, rgba(11,94,215,0.12), rgba(59,130,246,0.08))",
            border: "1px solid rgba(11,94,215,0.16)",
            boxShadow: "0 12px 24px rgba(11,94,215,0.08)",
          }}
        >
          <div style={{ width: 34, height: 34 }}>{item.icon}</div>
        </div>
        <div>
          <div className="label-mono" style={{ color: "#0b5ed7", fontSize: 11, fontWeight: 700, marginBottom: 6 }}>
            Layanan
          </div>
          <h3 style={{ fontSize: "1.35rem", lineHeight: 1.15, marginBottom: 6 }}>{item.title}</h3>
        </div>
      </div>

      <p style={{ color: "rgba(11,27,53,0.72)", lineHeight: 1.8, fontSize: 15 }}>
        {item.desc}{" "}
        <InlineContact message={item.message}>Tanya soal ini →</InlineContact>
      </p>

      <div style={{ marginTop: "auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ color: "rgba(11,27,53,0.5)", fontSize: 13 }}>Custom approach</span>
        <span style={{ color: "#0b5ed7", fontWeight: 700 }}>01</span>
      </div>
    </div>
  );
}

function ProcessStep({ item, index }) {
  return (
    <Reveal delay={index * 100}>
      <div
        className="surface-card"
        style={{
          position: "relative",
          padding: 24,
          minHeight: 260,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -8,
            right: 12,
            fontSize: "6rem",
            fontWeight: 800,
            color: "rgba(11,94,215,0.08)",
            lineHeight: 1,
            pointerEvents: "none",
          }}
        >
          {item.num}
        </div>
        <div style={{ position: "relative", zIndex: 1 }}>
          <div className="label-mono" style={{ color: "#0b5ed7", fontSize: 12, fontWeight: 700, marginBottom: 16 }}>
            Step {item.num}
          </div>
          <h3 style={{ fontSize: "1.25rem", lineHeight: 1.2, marginBottom: 12 }}>{item.title}</h3>
          <p style={{ color: "rgba(11,27,53,0.72)", lineHeight: 1.75, fontSize: 15 }}>
            {item.desc}
          </p>
          <div style={{ marginTop: 18, display: "inline-flex", gap: 8, alignItems: "center", color: "#0b5ed7", fontWeight: 700, fontSize: 13 }}>
            Estimasi: {item.time}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

function ClientsMarquee() {
  const track = new Array(16).fill(CLIENT_LOGOS[0]);
  return (
    <div
      style={{
        overflow: "hidden",
        borderTop: "1px solid rgba(59,130,246,0.1)",
        borderBottom: "1px solid rgba(59,130,246,0.1)",
        padding: "24px 0",
        background: "rgba(255,255,255,0.45)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
        maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
      }}
    >
      <div
        className="marquee-track"
        style={{
          display: "flex",
          gap: 22,
          width: "max-content",
          animation: "marquee 26s linear infinite",
        }}
      >
        {track.map((item, index) => (
          <div
            key={index}
            className="marquee-card"
            style={{
              width: 172,
              height: 86,
              borderRadius: 18,
              border: "1px solid rgba(11,94,215,0.08)",
              background: "rgba(255,255,255,0.78)",
              display: "grid",
              placeItems: "center",
              padding: "16px 20px",
              filter: "grayscale(100%) opacity(0.45)",
              transition: "all .3s cubic-bezier(0.16, 1, 0.3, 1)",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.filter = "grayscale(0%) opacity(1)";
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow = "0 10px 24px rgba(11,94,215,0.08)";
              e.currentTarget.style.borderColor = "rgba(11,94,215,0.2)";
              e.currentTarget.style.background = "#fff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.filter = "grayscale(100%) opacity(0.45)";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.borderColor = "rgba(11,94,215,0.08)";
              e.currentTarget.style.background = "rgba(255,255,255,0.78)";
            }}
          >
            {item.type === "image" ? (
              <img src={item.src} alt={item.alt} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
            ) : (
              item.svg
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const heroRef = useRef(null);
  const [cursor, setCursor] = useState({ x: 0.5, y: 0.5 });
  const [showScrollHint, setShowScrollHint] = useState(true);

  // CTA Simulator State
  const [configType, setConfigType] = useState("Website");
  const [configFeatures, setConfigFeatures] = useState(["UI/UX Premium"]);
  const [configTimeline, setConfigTimeline] = useState("3-4 Minggu");

  const getProjectComplexity = () => {
    let score = 0;
    if (configType === "Mobile App") score += 2;
    if (configType === "Custom System") score += 3;
    score += configFeatures.length;
    if (configTimeline.includes("1-2")) score += 1;
    
    if (score <= 2) return { text: "Ringan", color: "#10b981" };
    if (score <= 4) return { text: "Medium", color: "#f59e0b" };
    return { text: "Tinggi", color: "#ef4444" };
  };

  const getEstimatedTimeline = () => {
    if (configTimeline.includes("1-2")) return "1-2 Minggu";
    if (configTimeline.includes("3-4")) return "3-4 Minggu";
    return "> 1 Bulan";
  };

  const generateWhatsAppMessage = () => {
    const featuresStr = configFeatures.length > 0 ? configFeatures.join(", ") : "Standar";
    return `Halo Astakira, saya ingin konsultasi gratis untuk pembuatan proyek berikut:
- Tipe: ${configType}
- Fitur: ${featuresStr}
- Target Waktu: ${getEstimatedTimeline()}
- Estimasi Kompleksitas: ${getProjectComplexity().text}`;
  };

  useEffect(() => {
    const onScroll = () => setShowScrollHint(window.scrollY < 70);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleHeroMove = (event) => {
    const rect = heroRef.current?.getBoundingClientRect();
    if (!rect) return;
    setCursor({
      x: (event.clientX - rect.left) / rect.width,
      y: (event.clientY - rect.top) / rect.height,
    });
  };

  /* ── SVG mini-chart for the dashboard card ── */
  const chartPath = "M0,60 C20,58 30,45 50,42 C70,39 80,30 100,28 C120,26 140,18 160,20 C180,22 190,10 210,8 C230,6 240,12 260,10";
  const chartArea = chartPath + " L260,80 L0,80 Z";

  /* ── Circular gauge helpers ── */
  const gaugeRadius = 52;
  const gaugeCircumference = 2 * Math.PI * gaugeRadius;
  const gaugePercent = 99;
  const gaugeDashoffset = gaugeCircumference - (gaugePercent / 100) * gaugeCircumference;

  return (
    <div>
      <section
        ref={heroRef}
        onMouseMove={handleHeroMove}
        style={{
          position: "relative",
          minHeight: "calc(100svh - 110px)",
          display: "flex",
          alignItems: "center",
          padding: "40px 0 70px",
          overflow: "hidden",
        }}
      >
        {/* ── Background layers ── */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 20% 18%, rgba(59,130,246,0.22), transparent 24%), radial-gradient(circle at 74% 28%, rgba(6,182,212,0.10), transparent 18%), linear-gradient(135deg, rgba(255,255,255,0.44), rgba(255,255,255,0.04))",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle, rgba(11,94,215,0.08) 1px, transparent 1px), radial-gradient(circle, rgba(255,255,255,0.14) 1px, transparent 1px)",
            backgroundSize: "38px 38px, 120px 120px",
            opacity: 0.6,
            maskImage: "radial-gradient(circle at center, black 46%, transparent 82%)",
            WebkitMaskImage: "radial-gradient(circle at center, black 46%, transparent 82%)",
          }}
        />

        <div className="ui-shell" style={{ position: "relative", zIndex: 1, width: "100%" }}>
          <div className="section-split two-col" style={{ alignItems: "center", gap: 28 }}>
            {/* ════════ LEFT COLUMN ════════ */}
            <Reveal>
              <div style={{ maxWidth: 760, paddingRight: 8 }}>
                <SectionBadge>
                  Astakira Media — Digital Solutions
                </SectionBadge>

                <h1
                  style={{
                    marginTop: 22,
                    fontSize: "clamp(3rem, 6.4vw, 5.4rem)",
                    lineHeight: 0.95,
                    letterSpacing: "-0.06em",
                    fontWeight: 800,
                    maxWidth: 780,
                  }}
                >
                  Bangun masa depan
                  <span
                    style={{
                      display: "block",
                      background: "linear-gradient(135deg, #0b5ed7 0%, #06b6d4 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    bisnis digitalmu.
                  </span>
                </h1>

                <p
                  style={{
                    marginTop: 22,
                    fontSize: "1.1rem",
                    lineHeight: 1.8,
                    color: "rgba(11,27,53,0.72)",
                    maxWidth: 640,
                  }}
                >
                  Kami mengubah ide menjadi produk digital yang inovatif, fungsional, dan memukau secara visual untuk bisnis yang ingin tampil lebih kuat.
                </p>

                <div style={{ marginTop: 28, display: "flex", flexWrap: "wrap", gap: 14 }}>
                  <PrimaryCTA href={buildWhatsAppUrl("Halo Astakira, saya ingin diskusi proyek digital saya.")}>
                    Diskusikan Proyek Kamu →
                  </PrimaryCTA>
                  <GhostCTA href="/produk">Lihat Produk</GhostCTA>
                </div>

                {/* ── Trust badges with inline icons ── */}
                <div
                  style={{
                    marginTop: 22,
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 10,
                    alignItems: "center",
                    fontSize: 13,
                  }}
                >
                  <span
                    className="surface-card"
                    style={{
                      padding: "9px 14px",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 7,
                      fontWeight: 600,
                      color: "#081a33",
                    }}
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0b5ed7" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    2+ Proyek
                  </span>
                  <span
                    className="surface-card"
                    style={{
                      padding: "9px 14px",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 7,
                      fontWeight: 600,
                      color: "#081a33",
                    }}
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    1+ Klien Puas
                  </span>
                  <span
                    className="surface-card"
                    style={{
                      padding: "9px 14px",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 7,
                      fontWeight: 600,
                      color: "#081a33",
                    }}
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                    </svg>
                    Respons Cepat
                  </span>
                </div>
              </div>
            </Reveal>

            {/* ════════ RIGHT COLUMN — Showcase ════════ */}
            <Reveal delay={120}>
              <div
                style={{
                  position: "relative",
                  minHeight: 560,
                  borderRadius: 28,
                  background: "linear-gradient(180deg, rgba(255,255,255,0.78), rgba(255,255,255,0.38))",
                  border: "1px solid rgba(11,94,215,0.14)",
                  boxShadow: "0 32px 80px rgba(10,22,40,0.10)",
                  backdropFilter: "blur(18px)",
                  overflow: "hidden",
                }}
              >
                {/* ── Magnetic mouse glow ── */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: `radial-gradient(600px circle at ${cursor.x * 100}% ${cursor.y * 100}%, rgba(59,130,246,0.12), transparent 50%)`,
                    pointerEvents: "none",
                    transition: "background .3s ease",
                  }}
                />

                {/* ── Window controls bar ── */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 7,
                    padding: "14px 18px 10px",
                    borderBottom: "1px solid rgba(11,94,215,0.08)",
                  }}
                >
                  <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#ff5f57" }} />
                  <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#febc2e" }} />
                  <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#28c840" }} />
                  <span
                    className="label-mono"
                    style={{
                      marginLeft: 10,
                      fontSize: 10,
                      color: "rgba(11,27,53,0.4)",
                      letterSpacing: "0.1em",
                    }}
                  >
                    astakira.dashboard
                  </span>
                </div>

                {/* ── Card grid inside the window ── */}
                <div style={{ position: "relative", padding: 16 }}>

                  {/* ───── CARD 1: SaaS Dashboard UI ───── */}
                  <div
                    className="hero-float-1"
                    style={{
                      borderRadius: 22,
                      background: "rgba(255,255,255,0.92)",
                      border: "1px solid rgba(11,94,215,0.10)",
                      boxShadow: "0 18px 44px rgba(10,22,40,0.08)",
                      padding: 18,
                      marginBottom: 14,
                      transform: `translate3d(${(cursor.x - 0.5) * 10}px, ${(cursor.y - 0.5) * 8}px, 0)`,
                      transition: "transform .2s ease",
                    }}
                  >
                    {/* Header row */}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                      <div>
                        <div className="label-mono" style={{ color: "#0b5ed7", fontSize: 10, marginBottom: 4 }}>
                          Project Overview
                        </div>
                        <div style={{ fontSize: 18, fontWeight: 800, color: "#081a33" }}>Dashboard</div>
                      </div>
                      {/* Stacked avatars */}
                      <div style={{ display: "flex" }}>
                        {["#0b5ed7", "#06b6d4", "#f59e0b"].map((bg, i) => (
                          <div
                            key={i}
                            style={{
                              width: 30,
                              height: 30,
                              borderRadius: "50%",
                              background: bg,
                              border: "2px solid #fff",
                              marginLeft: i > 0 ? -10 : 0,
                              display: "grid",
                              placeItems: "center",
                              color: "#fff",
                              fontSize: 11,
                              fontWeight: 700,
                            }}
                          >
                            {["A", "M", "F"][i]}
                          </div>
                        ))}
                        <div
                          style={{
                            width: 30,
                            height: 30,
                            borderRadius: "50%",
                            background: "rgba(11,94,215,0.08)",
                            border: "2px solid #fff",
                            marginLeft: -10,
                            display: "grid",
                            placeItems: "center",
                            color: "#0b5ed7",
                            fontSize: 10,
                            fontWeight: 700,
                          }}
                        >
                          +3
                        </div>
                      </div>
                    </div>

                    {/* SVG Area Chart */}
                    <svg viewBox="0 0 260 80" style={{ width: "100%", height: 80, display: "block" }}>
                      <defs>
                        <linearGradient id="heroChartGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#0b5ed7" stopOpacity="0.28" />
                          <stop offset="100%" stopColor="#0b5ed7" stopOpacity="0.02" />
                        </linearGradient>
                        <linearGradient id="heroLineGrad" x1="0" y1="0" x2="1" y2="0">
                          <stop offset="0%" stopColor="#0b5ed7" />
                          <stop offset="100%" stopColor="#06b6d4" />
                        </linearGradient>
                      </defs>
                      <path d={chartArea} fill="url(#heroChartGrad)" />
                      <path d={chartPath} fill="none" stroke="url(#heroLineGrad)" strokeWidth="2.5" strokeLinecap="round" />
                      {/* data point glow */}
                      <circle cx="210" cy="8" r="4" fill="#0b5ed7" />
                      <circle cx="210" cy="8" r="8" fill="rgba(11,94,215,0.15)" />
                    </svg>

                    {/* Mini stat row */}
                    <div style={{ display: "flex", gap: 10, marginTop: 12 }}>
                      {[
                        { label: "Visitors", val: "2.4K", color: "#0b5ed7" },
                        { label: "Conversion", val: "12.8%", color: "#06b6d4" },
                        { label: "Revenue", val: "↑ 34%", color: "#10b981" },
                      ].map((s) => (
                        <div
                          key={s.label}
                          style={{
                            flex: 1,
                            padding: "8px 10px",
                            borderRadius: 12,
                            background: "rgba(11,94,215,0.04)",
                            border: "1px solid rgba(11,94,215,0.06)",
                          }}
                        >
                          <div style={{ fontSize: 10, color: "rgba(11,27,53,0.5)", marginBottom: 2 }}>{s.label}</div>
                          <div style={{ fontSize: 15, fontWeight: 800, color: s.color }}>{s.val}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* ── Bottom row: Gauge + Chat ── */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>

                    {/* ───── CARD 2: Circular Performance Gauge ───── */}
                    <div
                      className="hero-float-2"
                      style={{
                        borderRadius: 22,
                        background: "rgba(255,255,255,0.92)",
                        border: "1px solid rgba(11,94,215,0.10)",
                        boxShadow: "0 14px 36px rgba(10,22,40,0.07)",
                        padding: 18,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 10,
                        transform: `translate3d(${(cursor.x - 0.5) * 14}px, ${(cursor.y - 0.5) * 10}px, 0)`,
                        transition: "transform .2s ease",
                      }}
                    >
                      <div className="label-mono" style={{ color: "#0b5ed7", fontSize: 10, alignSelf: "flex-start" }}>
                        Quality Score
                      </div>
                      <div style={{ position: "relative", width: 120, height: 120 }}>
                        <svg viewBox="0 0 120 120" style={{ width: 120, height: 120, transform: "rotate(-90deg)" }}>
                          {/* track */}
                          <circle cx="60" cy="60" r={gaugeRadius} fill="none" stroke="rgba(11,94,215,0.08)" strokeWidth="10" />
                          {/* value arc */}
                          <circle
                            cx="60"
                            cy="60"
                            r={gaugeRadius}
                            fill="none"
                            stroke="url(#heroGaugeGrad)"
                            strokeWidth="10"
                            strokeLinecap="round"
                            strokeDasharray={gaugeCircumference}
                            strokeDashoffset={gaugeDashoffset}
                            style={{ filter: "drop-shadow(0 0 6px rgba(11,94,215,0.35))" }}
                          />
                          <defs>
                            <linearGradient id="heroGaugeGrad" x1="0" y1="0" x2="1" y2="1">
                              <stop offset="0%" stopColor="#0b5ed7" />
                              <stop offset="100%" stopColor="#06b6d4" />
                            </linearGradient>
                          </defs>
                        </svg>
                        {/* Center text */}
                        <div
                          style={{
                            position: "absolute",
                            inset: 0,
                            display: "grid",
                            placeItems: "center",
                          }}
                        >
                          <div style={{ textAlign: "center" }}>
                            <div style={{ fontSize: 28, fontWeight: 800, color: "#081a33", lineHeight: 1 }}>99</div>
                            <div style={{ fontSize: 10, color: "rgba(11,27,53,0.5)", fontWeight: 600 }}>/ 100</div>
                          </div>
                        </div>
                      </div>
                      <div style={{ fontSize: 12, color: "rgba(11,27,53,0.6)", textAlign: "center", lineHeight: 1.5 }}>
                        Performance · Accessibility · SEO
                      </div>
                    </div>

                    {/* ───── CARD 3: WhatsApp-style Chat Bubble ───── */}
                    <div
                      className="hero-float-3"
                      style={{
                        borderRadius: 22,
                        background: "rgba(255,255,255,0.92)",
                        border: "1px solid rgba(11,94,215,0.10)",
                        boxShadow: "0 14px 36px rgba(10,22,40,0.07)",
                        padding: 18,
                        display: "flex",
                        flexDirection: "column",
                        gap: 12,
                        transform: `translate3d(${(cursor.x - 0.5) * 18}px, ${(cursor.y - 0.5) * 12}px, 0)`,
                        transition: "transform .2s ease",
                      }}
                    >
                      {/* Chat header */}
                      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <div style={{ position: "relative" }}>
                          <div
                            style={{
                              width: 38,
                              height: 38,
                              borderRadius: "50%",
                              background: "linear-gradient(135deg, #0b5ed7, #06b6d4)",
                              display: "grid",
                              placeItems: "center",
                              color: "#fff",
                              fontSize: 14,
                              fontWeight: 800,
                            }}
                          >
                            A
                          </div>
                          {/* Online dot */}
                          <span
                            className="hero-pulse-dot"
                            style={{
                              position: "absolute",
                              bottom: 0,
                              right: 0,
                              width: 10,
                              height: 10,
                              borderRadius: "50%",
                              background: "#22c55e",
                              border: "2px solid #fff",
                            }}
                          />
                        </div>
                        <div>
                          <div style={{ fontWeight: 700, fontSize: 13, color: "#081a33" }}>Astakira Support</div>
                          <div style={{ fontSize: 11, color: "#22c55e", fontWeight: 600 }}>Online sekarang</div>
                        </div>
                      </div>

                      {/* Chat bubbles */}
                      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                        <div
                          style={{
                            alignSelf: "flex-start",
                            padding: "10px 14px",
                            borderRadius: "4px 16px 16px 16px",
                            background: "rgba(11,94,215,0.06)",
                            border: "1px solid rgba(11,94,215,0.08)",
                            fontSize: 13,
                            color: "#081a33",
                            lineHeight: 1.5,
                            maxWidth: "90%",
                          }}
                        >
                          Halo! 👋 Ada yang bisa kami bantu untuk proyek digital Anda?
                        </div>
                        <div
                          style={{
                            alignSelf: "flex-end",
                            padding: "10px 14px",
                            borderRadius: "16px 4px 16px 16px",
                            background: "linear-gradient(135deg, #0b5ed7, #2563eb)",
                            fontSize: 13,
                            color: "#fff",
                            lineHeight: 1.5,
                            maxWidth: "85%",
                          }}
                        >
                          Saya butuh website untuk bisnis saya!
                        </div>
                        {/* Typing indicator */}
                        <div
                          style={{
                            alignSelf: "flex-start",
                            padding: "10px 16px",
                            borderRadius: "4px 16px 16px 16px",
                            background: "rgba(11,94,215,0.06)",
                            border: "1px solid rgba(11,94,215,0.08)",
                            display: "flex",
                            gap: 4,
                            alignItems: "center",
                          }}
                        >
                          <span className="hero-typing-dot" style={{ animationDelay: "0s" }} />
                          <span className="hero-typing-dot" style={{ animationDelay: "0.15s" }} />
                          <span className="hero-typing-dot" style={{ animationDelay: "0.3s" }} />
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

                {/* ── Bottom status bar ── */}
                <div
                  style={{
                    margin: "0 16px 16px",
                    borderRadius: 18,
                    padding: "14px 18px",
                    background: "rgba(10,22,40,0.88)",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 14,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <span
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        background: "#22c55e",
                        boxShadow: "0 0 8px rgba(34,197,94,0.5)",
                      }}
                    />
                    <span style={{ fontSize: 13, fontWeight: 600 }}>All systems operational</span>
                  </div>
                  <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                    <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#60a5fa" }} />
                    <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#0b5ed7" }} />
                    <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#06b6d4" }} />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* ── Scroll hint ── */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            bottom: 14,
            transform: "translateX(-50%)",
            opacity: showScrollHint ? 1 : 0,
            transition: "opacity .25s ease",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 6,
          }}
        >
          <span className="hero-scroll-arrow" />
          <span
            style={{
              color: "rgba(11,27,53,0.55)",
              fontSize: 11,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
            }}
          >
            Scroll down
          </span>
        </div>
      </section>

      <section id="about" className="section-pad">
        <div className="ui-shell">
          <div className="section-split two-col" style={{ gap: 32 }}>
            <Reveal>
              <div>
                <SectionBadge>About</SectionBadge>
                <div style={{ marginTop: 18, fontSize: "clamp(2rem, 4vw, 3.3rem)", lineHeight: 1.06, fontWeight: 800, letterSpacing: "-0.05em" }}>
                  Studio kreatif untuk <span style={{ color: "#0b5ed7" }}>solusi digital</span> Anda.
                </div>
                <p style={{ marginTop: 20, color: "rgba(11,27,53,0.75)", fontSize: 16, lineHeight: 1.85, maxWidth: 720 }}>
                  Astakira Media adalah software house profesional yang berfokus pada pengembangan produk digital berbasis teknologi modern. Kami mengubah ide kompleks menjadi aplikasi yang memukau, efisien, dan tepat sasaran.
                </p>
                <blockquote
                  style={{
                    margin: "28px 0 0",
                    padding: "22px 22px 22px 24px",
                    borderLeft: "4px solid rgba(11,94,215,0.38)",
                    background: "rgba(255,255,255,0.58)",
                    borderRadius: 18,
                    color: "#081a33",
                    fontSize: 18,
                    lineHeight: 1.7,
                    fontStyle: "italic",
                    boxShadow: "0 16px 34px rgba(10,22,40,0.05)",
                  }}
                >
                  “Kami merancang pengalaman digital yang tenang, tegas, dan fokus pada hasil bisnis.”
                </blockquote>
                <div style={{ marginTop: 18 }}>
                  <InlineContact message="Halo Astakira, saya ingin tanya lebih lanjut tentang profil perusahaan dan layanan kalian.">
                    Diskusikan kebutuhan kamu →
                  </InlineContact>
                </div>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
                <div style={{ gridColumn: "1 / -1" }}>
                  <StatCard value={<AnimatedNumber value="2+" />} label="Proyek selesai" hint="Website, aplikasi, dan sistem digital." />
                </div>
                <StatCard value={<AnimatedNumber value="1+" />} label="Klien puas" hint="Kolaborasi dari berbagai kebutuhan bisnis." />
                <StatCard value={<AnimatedNumber value="2026" />} label="Arah desain" hint="Tampilan premium yang tahan beberapa tahun." />
                <div style={{ gridColumn: "1 / -1" }}>
                  <div className="surface-card" style={{ padding: 22 }}>
                    <div className="label-mono" style={{ color: "#0b5ed7", fontSize: 12, fontWeight: 700, marginBottom: 10 }}>
                      Brand value
                    </div>
                    <div style={{ fontSize: 18, fontWeight: 800, lineHeight: 1.55 }}>
                      Desain yang jelas, teknologi yang rapi, dan proses yang terasa mudah.
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="services" className="section-pad">
        <div className="ui-shell">
          <div className="section-split two-col" style={{ gap: 32, alignItems: "start" }}>
            <Reveal>
              <div style={{ position: "sticky", top: 110 }}>
                <SectionBadge>Layanan Kami</SectionBadge>
                <div style={{ marginTop: 18, fontSize: "clamp(2.2rem, 4vw, 3.8rem)", lineHeight: 1.02, fontWeight: 800, letterSpacing: "-0.05em" }}>
                  Solusi digital <span style={{ color: "#0b5ed7" }}>terukur</span>.
                </div>
                <p style={{ marginTop: 18, color: "rgba(11,27,53,0.72)", lineHeight: 1.8, fontSize: 16 }}>
                  Pilih layanan yang paling sesuai dengan kebutuhan bisnis Anda. Kami siap membantu mengubah ide menjadi produk nyata dengan struktur yang jelas.
                </p>
              </div>
            </Reveal>

            <div style={{ display: "grid", gap: 18 }}>
              {SERVICES.map((service, index) => (
                <Reveal key={service.title} delay={index * 80}>
                  <ServiceCard item={service} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="section-pad">
        <div className="ui-shell">
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 34 }}>
              <SectionBadge>Cara Kerja</SectionBadge>
              <div style={{ marginTop: 18, fontSize: "clamp(2rem, 4vw, 3.4rem)", lineHeight: 1.06, fontWeight: 800, letterSpacing: "-0.05em" }}>
                Dari konsep ke <span style={{ color: "#0b5ed7" }}>peluncuran</span>.
              </div>
            </div>
          </Reveal>

          <div
            style={{
              position: "relative",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 18,
            }}
          >
            <div
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 48,
                height: 2,
                background:
                  "repeating-linear-gradient(90deg, rgba(11,94,215,0.2) 0, rgba(11,94,215,0.2) 16px, transparent 16px, transparent 28px)",
                opacity: 0.65,
              }}
            />
            {PROCESS.map((item, index) => (
              <ProcessStep key={item.num} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section id="cta" className="section-pad">
        <div className="ui-shell">
          <div
            className="glass-card"
            style={{
              borderRadius: 34,
              padding: "48px 40px",
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 30px 80px rgba(10,22,40,0.22)",
              border: "1px solid rgba(59, 130, 246, 0.2)",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(circle at 10% 20%, rgba(11,94,215,0.25), transparent 45%), radial-gradient(circle at 90% 80%, rgba(6,182,212,0.2), transparent 40%), #081225",
                pointerEvents: "none",
              }}
            />
            <div style={{ position: "relative", zIndex: 1 }} className="section-split two-col cta-split">
              {/* Left Column: Premium Copywriting */}
              <div style={{ textAlign: "left", color: "#fff" }} className="cta-left">
                <SectionBadge accent>Mulai Proyek Anda</SectionBadge>
                <h2 style={{ marginTop: 18, color: "#fff", fontSize: "clamp(2rem, 3.8vw, 3rem)", lineHeight: 1.1, fontWeight: 800 }}>
                  Siap mewujudkan ide cemerlang Anda?
                </h2>
                <p style={{ marginTop: 18, color: "rgba(255,255,255,0.76)", fontSize: 15, lineHeight: 1.8 }}>
                  Jangan biarkan ide Anda hanya menjadi wacana. Slot konsultasi gratis masih tersedia bulan ini. Kita bisa bahas kebutuhan, scope, dan estimasi dengan santai.
                </p>
                <div style={{ marginTop: 32, display: "flex", flexWrap: "wrap", alignItems: "center", gap: 18 }} className="cta-buttons">
                  <PrimaryCTA href={buildWhatsAppUrl(generateWhatsAppMessage())}>
                    Konsultasi Gratis via WA →
                  </PrimaryCTA>
                  <a
                    href="https://www.instagram.com/astakira.media/?__d=11"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      color: "rgba(255,255,255,0.75)",
                      textDecoration: "none",
                      fontWeight: 600,
                      fontSize: 14,
                      transition: "color .2s ease",
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = "#fff"}
                    onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.75)"}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.8 }}>
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                    Instagram
                  </a>
                  <a
                    href="mailto:hello@astakiramedia.com"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      color: "rgba(255,255,255,0.75)",
                      textDecoration: "none",
                      fontWeight: 600,
                      fontSize: 14,
                      transition: "color .2s ease",
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = "#fff"}
                    onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.75)"}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.8 }}>
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    Email
                  </a>
                </div>
              </div>

              {/* Right Column: Project Configurator widget */}
              <div
                className="surface-card"
                style={{
                  background: "rgba(255, 255, 255, 0.04)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: 24,
                  padding: 24,
                  backdropFilter: "blur(12px)",
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
                  color: "#fff",
                  textAlign: "left",
                }}
              >
                {/* Widget Header */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
                  <span className="label-mono" style={{ color: "#f59e0b", fontSize: 11, fontWeight: 700 }}>
                    Simulator Proyek
                  </span>
                  <span style={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }}>Bahas Kebutuhan</span>
                </div>

                {/* Option 1: Tipe Proyek */}
                <div style={{ marginBottom: 18 }}>
                  <label style={{ display: "block", fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.5)", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                    Tipe Proyek
                  </label>
                  <div style={{ display: "flex", gap: 8 }}>
                    {["Website", "Mobile App", "Custom System"].map((type) => {
                      const isSelected = configType === type;
                      return (
                        <button
                          key={type}
                          onClick={() => {
                            setConfigType(type);
                            if (type === "Website") {
                              setConfigFeatures(["UI/UX Premium", "E-commerce"]);
                            } else if (type === "Mobile App") {
                              setConfigFeatures(["UI/UX Premium", "Integrasi API"]);
                            } else {
                              setConfigFeatures(["Admin Panel", "Integrasi API"]);
                            }
                          }}
                          style={{
                            flex: 1,
                            padding: "10px 6px",
                            borderRadius: 12,
                            background: isSelected ? "rgba(11, 94, 215, 0.35)" : "rgba(255, 255, 255, 0.03)",
                            border: `1px solid ${isSelected ? "#0b5ed7" : "rgba(255, 255, 255, 0.08)"}`,
                            color: isSelected ? "#fff" : "rgba(255, 255, 255, 0.7)",
                            fontSize: 12,
                            fontWeight: 700,
                            cursor: "pointer",
                            transition: "all 0.25s ease",
                          }}
                          onMouseEnter={(e) => {
                            if (!isSelected) {
                              e.currentTarget.style.background = "rgba(255, 255, 255, 0.06)";
                              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.15)";
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (!isSelected) {
                              e.currentTarget.style.background = "rgba(255, 255, 255, 0.03)";
                              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)";
                            }
                          }}
                        >
                          {type}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Option 2: Fitur Utama (Multiple Select) */}
                <div style={{ marginBottom: 18 }}>
                  <label style={{ display: "block", fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.5)", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                    Fitur Utama
                  </label>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                    {["UI/UX Premium", "E-commerce", "Admin Panel", "Integrasi API"].map((feature) => {
                      const isSelected = configFeatures.includes(feature);
                      return (
                        <button
                          key={feature}
                          onClick={() => {
                            if (isSelected) {
                              if (configFeatures.length > 1) {
                                setConfigFeatures(configFeatures.filter((f) => f !== feature));
                              }
                            } else {
                              setConfigFeatures([...configFeatures, feature]);
                            }
                          }}
                          style={{
                            padding: "10px 8px",
                            borderRadius: 12,
                            background: isSelected ? "rgba(6, 182, 212, 0.25)" : "rgba(255, 255, 255, 0.03)",
                            border: `1px solid ${isSelected ? "#06b6d4" : "rgba(255, 255, 255, 0.08)"}`,
                            color: isSelected ? "#fff" : "rgba(255, 255, 255, 0.7)",
                            fontSize: 12,
                            fontWeight: 700,
                            cursor: "pointer",
                            textAlign: "center",
                            transition: "all 0.25s ease",
                          }}
                          onMouseEnter={(e) => {
                            if (!isSelected) {
                              e.currentTarget.style.background = "rgba(255, 255, 255, 0.06)";
                              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.15)";
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (!isSelected) {
                              e.currentTarget.style.background = "rgba(255, 255, 255, 0.03)";
                              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)";
                            }
                          }}
                        >
                          {feature}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Option 3: Target Timeline */}
                <div style={{ marginBottom: 22 }}>
                  <label style={{ display: "block", fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.5)", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                    Target Waktu
                  </label>
                  <div style={{ display: "flex", gap: 8 }}>
                    {["1-2 Minggu", "3-4 Minggu", "> 1 Bulan"].map((timeline) => {
                      const isSelected = configTimeline === timeline;
                      return (
                        <button
                          key={timeline}
                          onClick={() => setConfigTimeline(timeline)}
                          style={{
                            flex: 1,
                            padding: "10px 6px",
                            borderRadius: 12,
                            background: isSelected ? "rgba(245, 158, 11, 0.25)" : "rgba(255, 255, 255, 0.03)",
                            border: `1px solid ${isSelected ? "#f59e0b" : "rgba(255, 255, 255, 0.08)"}`,
                            color: isSelected ? "#fff" : "rgba(255, 255, 255, 0.7)",
                            fontSize: 12,
                            fontWeight: 700,
                            cursor: "pointer",
                            transition: "all 0.25s ease",
                          }}
                          onMouseEnter={(e) => {
                            if (!isSelected) {
                              e.currentTarget.style.background = "rgba(255, 255, 255, 0.06)";
                              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.15)";
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (!isSelected) {
                              e.currentTarget.style.background = "rgba(255, 255, 255, 0.03)";
                              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)";
                            }
                          }}
                        >
                          {timeline}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Output Panel */}
                <div
                  style={{
                    background: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid rgba(255, 255, 255, 0.06)",
                    borderRadius: 16,
                    padding: "14px 18px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <div style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", marginBottom: 2, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                      Kompleksitas
                    </div>
                    <div style={{ fontSize: 14, fontWeight: 800, color: getProjectComplexity().color, display: "flex", alignItems: "center", gap: 6 }}>
                      <span style={{ width: 8, height: 8, borderRadius: "50%", background: getProjectComplexity().color }} />
                      {getProjectComplexity().text}
                    </div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", marginBottom: 2, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                      Estimasi Awal
                    </div>
                    <div style={{ fontSize: 14, fontWeight: 800, color: "#fff" }}>
                      {getEstimatedTimeline()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="clients" className="section-pad" style={{ paddingTop: 28 }}>
        <div className="ui-shell">
          <Reveal>
            <div style={{ display: "flex", alignItems: "end", justifyContent: "space-between", gap: 16, marginBottom: 18 }}>
              <div>
                <SectionBadge>Mereka Sudah Percaya</SectionBadge>
                <div style={{ marginTop: 14, fontSize: "clamp(1.8rem, 3vw, 2.6rem)", lineHeight: 1.1, fontWeight: 800 }}>
                  Logo yang bergerak, kepercayaan yang tetap.
                </div>
              </div>
            </div>
          </Reveal>
        </div>
        <ClientsMarquee />
      </section>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        /* ── Hero floating card animations ── */
        @keyframes heroFloat1 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes heroFloat2 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        @keyframes heroFloat3 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .hero-float-1 { animation: heroFloat1 5s ease-in-out infinite; }
        .hero-float-2 { animation: heroFloat2 6s ease-in-out infinite 0.5s; }
        .hero-float-3 { animation: heroFloat3 4.5s ease-in-out infinite 1s; }

        /* ── Typing indicator dots ── */
        @keyframes typingBounce {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.3; }
          30% { transform: translateY(-4px); opacity: 1; }
        }
        .hero-typing-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #0b5ed7;
          animation: typingBounce 1.4s ease-in-out infinite;
        }

        /* ── Online pulse dot ── */
        @keyframes heroPulse {
          0% { box-shadow: 0 0 0 0 rgba(34,197,94,0.5); }
          70% { box-shadow: 0 0 0 6px rgba(34,197,94,0); }
          100% { box-shadow: 0 0 0 0 rgba(34,197,94,0); }
        }
        .hero-pulse-dot {
          animation: heroPulse 2s ease-in-out infinite;
        }

        /* ── Scroll arrow ── */
        @keyframes scrollBounce {
          0%, 100% { transform: translateY(0); opacity: 0.6; }
          50% { transform: translateY(5px); opacity: 1; }
        }
        .hero-scroll-arrow {
          display: block;
          width: 18px;
          height: 18px;
          border-right: 2px solid rgba(11,27,53,0.45);
          border-bottom: 2px solid rgba(11,27,53,0.45);
          transform: rotate(45deg);
          animation: scrollBounce 2s ease-in-out infinite;
        }

        .marquee-track:hover {
          animation-play-state: paused !important;
        }

        @media (max-width: 980px) {
          .section-split.two-col {
            grid-template-columns: 1fr !important;
          }
          .cta-split {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .cta-left {
            text-align: center !important;
          }
          .cta-buttons {
            justify-content: center !important;
          }
        }
        @media (max-width: 760px) {
          .section-split.two-col {
            gap: 22px !important;
          }
        }
      `}</style>
    </div>
  );
}
