import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "../components/Button";

const SERVICES = [
  {
    icon: "⚡",
    name: "Landing Page",
    desc: "Halaman konversi tinggi untuk kampanye iklan, product launch, atau promo event spesial.",
    price: "Mulai Rp 1,5 Juta",
  },
  { 
    icon: "🏢",
    name: "Company Profile",
    desc: "Tampilkan profesionalisme bisnis Anda dengan website elegan yang memperkuat kepercayaan.",
    price: "Mulai Rp 3 Juta",
  },
  {
    icon: "🛒",
    name: "Toko Online / E-Commerce",
    desc: "Platform belanja lengkap: keranjang, payment gateway, dan manajemen produk mudah.",
    price: "Mulai Rp 5 Juta",
  },
  {
    icon: "📱",
    name: "Desain UI/UX",
    desc: "Wireframe & prototipe interaktif yang memastikan pengguna jatuh cinta sebelum dikoding.",
    price: "Mulai Rp 2 Juta",
  },
  {
    icon: "🔍",
    name: "SEO & Performa",
    desc: "Website cepat, aman, mudah ditemukan. Audit teknis, optimasi Core Web Vitals, strategi konten.",
    price: "Rp 800 Rb/bln",
  },
  {
    icon: "🛠️",
    name: "Maintenance & Support",
    desc: "Update rutin, backup, perbaikan bug, dan support responsif agar website berjalan optimal.",
    price: "Rp 500 Rb/bln",
  },
];

const PROCESS = [
  {
    num: "01",
    title: "Konsultasi & Briefing",
    desc: "Diskusi mendalam tentang tujuan bisnis, target pasar, dan ekspektasi visual. Gratis, tanpa komitmen.",
  },
  {
    num: "02",
    title: "Desain & Prototipe",
    desc: "Tim desainer membuat mockup yang bisa Anda review dan revisi sebelum tahap pengkodean.",
  },
  {
    num: "03",
    title: "Development & Testing",
    desc: "Pengkodean standar modern — responsif, cepat, diuji di berbagai device dan browser.",
  },
  {
    num: "04",
    title: "Launch & Handover",
    desc: "Deploy ke server, setup domain, dan pelatihan agar Anda bisa kelola konten secara mandiri.",
  },
];



const MARQUEE_ITEMS = [
  "Landing Page",
  "E-Commerce",
  "Company Profile",
  "Toko Online",
  "Web Aplikasi",
  "UI/UX Design",
  "SEO Optimasi",
  "Maintenance",
];

function Hero({ gravityRef }) {
  
  return (
    <section
      style={{
        padding: "120px 0 80px",
        textAlign: "center",
        position: "relative",
      }}
    >
      <div
        ref={(el) => gravityRef.current.push(el)}
        style={{ animation: "fadeUp .6s ease both" }}
      >
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(25,118,210,0.10)",
            border: "1px solid rgba(25,118,210,0.25)",
            borderRadius: 50,
            padding: "6px 16px",
            fontSize: "0.78rem",
            color: "#0b5ed7",
            fontWeight: 600,
            marginBottom: 28,
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              background: "#0b5ed7",
              borderRadius: "50%",
              animation: "blink 1.4s infinite",
            }}
          />
          🚀 Studio Digital Profesional · Tasikmalaya
        </span>
      </div>
      <div
        ref={(el) => gravityRef.current.push(el)}
        style={{ animation: "fadeUp .7s .1s ease both" }}
      >
        <h1
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(2.8rem,6vw,5.2rem)",
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: "-2px",
            marginBottom: 24,
          }}
        >
          <span style={{ display: "block" }}>Solusi Digital Inovatif</span>
          <span
            style={{
              background: "linear-gradient(135deg,#0b5ed7,#38bdf8)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
          untuk Bisnis yang Lebih 
          </span>
          <span style={{ display: "block" }}>Modern dan Berkembang</span>
        </h1>
      </div>
      <div
        ref={(el) => gravityRef.current.push(el)}
        style={{ animation: "fadeUp .7s .2s ease both" }}
      >
        <p
          style={{
            maxWidth: 520,
            margin: "0 auto 44px",
            color: "rgba(11,27,53,0.72)",
            fontSize: "1.05rem",
            lineHeight: 1.7,
            fontWeight: 400,
          }}
        >
          Kami merancang dan membangun website premium yang tidak hanya indah —
          tapi bekerja keras mengkonversi pengunjung menjadi pelanggan.
        </p>
      </div>
      <div
        ref={(el) => gravityRef.current.push(el)}
        style={{ animation: "fadeUp .7s .3s ease both" }}
      >
        <div
          style={{
            display: "flex",
            gap: 14,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <NavLink
            to="/produk"
            style={{
              textDecoration: "none",
              padding: "var(--btn-pad)",
              borderRadius: 50,
              fontSize: "var(--btn-font)",
              fontWeight: 600,
              cursor: "pointer",
              fontFamily: "inherit",
              border: "none",
              transition: "transform .2s, box-shadow .2s, background .2s",
              background: "transparent",
              color: "#0b1b35",
              border: "1px solid rgba(25,118,210,0.35)",
              display: "inline-block"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px) scale(1.02)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "none";
            }}
          >
            Lihat Hasil Kerja Kami
          </NavLink>
        </div>
      </div>
    </section>
  );
}


function Marquee() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div
      style={{
        overflow: "hidden",
        borderTop: "1px solid rgba(25,118,210,0.18)",
        borderBottom: "1px solid rgba(25,118,210,0.18)",
        padding: "14px 0",
        marginBottom: 60,
        background: "rgba(25,118,210,0.05)",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 56,
          whiteSpace: "nowrap",
          animation: "marquee 22s linear infinite",
          width: "max-content",
        }}
      >
        {items.map((item, i) => (
          <span
            key={i}
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "0.8rem",
              fontWeight: 700,
              color: "rgba(11,27,53,0.6)",
              letterSpacing: 2,
              textTransform: "uppercase",
              display: "inline-flex",
              alignItems: "center",
              gap: 14,
            }}
          >
            {item}
            <span style={{ color: "#0b5ed7", fontSize: "0.7rem" }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function ServiceCard({ icon, name, desc, price, gravityRef }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      ref={(el) => gravityRef.current.push(el)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "rgba(255,255,255,0.85)",
        border: `1px solid ${hovered ? "#0b5ed7" : "rgba(25,118,210,0.22)"}`,
        borderRadius: 20,
        padding: 32,
        position: "relative",
        overflow: "hidden",
        transition: "border-color .3s, transform .3s, box-shadow .3s",
        transform: hovered ? "translateY(-4px)" : "none",
        boxShadow: hovered ? "0 20px 60px rgba(11,94,215,0.14)" : "none",
        cursor: "default",
        backdropFilter: "blur(10px)",
      }}
    >
      {hovered && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background:
              "radial-gradient(circle at 30% 30%, rgba(11,94,215,0.10), transparent 70%)",
          }}
        />
      )}
      <span style={{ fontSize: "2.2rem", marginBottom: 18, display: "block" }}>{icon}</span>
      <div style={{ fontFamily: "'Syne',sans-serif", fontSize: "1.15rem", fontWeight: 800, marginBottom: 10 }}>
        {name}
      </div>
      <div style={{ color: "rgba(11,27,53,0.72)", fontSize: "0.87rem", lineHeight: 1.65, fontWeight: 400 }}>
        {desc}
      </div>
      <div style={{ marginTop: 20, fontSize: "0.82rem", color: "#0b5ed7", fontWeight: 700 }}>
        {price}
      </div>
    </div>
  );
}

function ProcessCard({ num, title, desc, gravityRef }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      ref={(el) => gravityRef.current.push(el)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "rgba(255,255,255,0.85)",
        border: `1px solid ${hovered ? "#0b5ed7" : "rgba(25,118,210,0.22)"}`,
        borderRadius: 20,
        padding: 28,
        display: "flex",
        gap: 20,
        alignItems: "flex-start",
        transition: "border-color .2s, box-shadow .2s",
        boxShadow: hovered ? "0 18px 50px rgba(11,94,215,0.10)" : "none",
        backdropFilter: "blur(10px)",
      }}
    >
      <div
        style={{
          fontFamily: "'Syne',sans-serif",
          fontSize: "2.5rem",
          fontWeight: 900,
          color: "#0b5ed7",
          opacity: 0.35,
          lineHeight: 1,
          flexShrink: 0,
          width: 44,
        }}
      >
        {num}
      </div>
      <div>
        <div style={{ fontFamily: "'Syne',sans-serif", fontSize: "1rem", fontWeight: 800, marginBottom: 6 }}>
          {title}
        </div>
        <div style={{ color: "rgba(11,27,53,0.72)", fontSize: "0.84rem", lineHeight: 1.6, fontWeight: 400 }}>
          {desc}
        </div>
      </div>
    </div>
  );
}

function Home() {
  const gravityRef = useRef([]);

  const section = {
    maxWidth: "var(--container-max)",
    margin: "0 auto",
    padding: "var(--section-pad-y) var(--container-pad)",
  };
  const sectionLabel = {
    fontSize: "0.72rem",
    fontWeight: 800,
    letterSpacing: 3,
    textTransform: "uppercase",
    color: "#0b5ed7",
    marginBottom: 12,
  };
  const sectionTitle = {
    fontFamily: "var(--font-heading)",
    fontSize: "clamp(2rem,4vw,3rem)",
    fontWeight: 900,
    letterSpacing: "-1.5px",
    lineHeight: 1.1,
    marginBottom: 16,
  };

  return (
    <>
      <div
        style={{
          maxWidth: "var(--container-max)",
          margin: "0 auto",
          padding: "0 var(--container-pad)",
        }}
      >
        <Hero gravityRef={gravityRef} />
      </div>

      <Marquee />

      <div style={section}>
        <div ref={(el) => gravityRef.current.push(el)} style={{ marginBottom: 44 }}>
          <div style={sectionLabel}>Layanan Kami</div>
          <div style={sectionTitle}>
            Solusi Digital
            <br />
            Lengkap & Terukur
          </div>
          <p
            style={{
              color: "rgba(11,27,53,0.72)",
              fontSize: "0.95rem",
              fontWeight: 400,
              maxWidth: 480,
              lineHeight: 1.7,
            }}
          >
            Dari desain hingga peluncuran, kami handle semua — sehingga Anda bisa
            fokus ke bisnis.
          </p>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px,1fr))",
            gap: 20,
          }}
        >
          {SERVICES.map((s, i) => (
            <ServiceCard key={i} {...s} gravityRef={gravityRef} />
          ))}
        </div>
      </div>

      <div style={section}>
        <div ref={(el) => gravityRef.current.push(el)} style={{ marginBottom: 44 }}>
          <div style={sectionLabel}>Cara Kerja</div>
          <div style={sectionTitle}>
            Dari Konsep
            <br />
            ke Peluncuran
          </div>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 20,
          }}
        >
          {PROCESS.map((p, i) => (
            <ProcessCard key={i} {...p} gravityRef={gravityRef} />
          ))}
        </div>
      </div>

      <div
        style={{
          maxWidth: "var(--container-max)",
          margin: "0 auto",
          padding: "0 var(--container-pad) 100px",
        }}
      >
        <div
          ref={(el) => gravityRef.current.push(el)}
          style={{
            background: "linear-gradient(135deg,rgba(11,94,215,0.12),rgba(56,189,248,0.10))",
            border: "1px solid rgba(25,118,210,0.22)",
            borderRadius: 28,
            padding: "72px 40px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
            backdropFilter: "blur(12px)",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: -60,
              left: "50%",
              transform: "translateX(-50%)",
              width: 300,
              height: 300,
              pointerEvents: "none",
              background:
                "radial-gradient(circle,rgba(11,94,215,0.16) 0%,transparent 70%)",
            }}
          />
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1.8rem,4vw,2.8rem)",
              fontWeight: 900,
              letterSpacing: "-1.5px",
              marginBottom: 16,
            }}
          >
            Siap Meluncur{" "}
            <span
              style={{
                background: "linear-gradient(135deg,#0b5ed7,#38bdf8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Bersama Kami?
            </span>
          </h2>
          <p
            style={{
              color: "rgba(11,27,53,0.72)",
              fontSize: "0.95rem",
              marginBottom: 36,
              fontWeight: 400,
            }}
          >
            Konsultasi pertama gratis. Tidak ada komitmen, tidak ada tekanan —
            hanya percakapan yang jujur.
          </p>
          <Button 
            variant="primary"
            onClick={() => window.open('https://wa.me/6281318680606', '_blank')}
          >
            Hubungi Sekarang
          </Button>
        </div>
      </div>
    </>
  );
}

export default Home;
