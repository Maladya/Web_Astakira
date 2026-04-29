import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "../components/Button";

const SERVICES = [
  {
    icon: "💻",
    name: "Website Development",
    desc: "Kami menyediakan berbagai jenis website seperti company profile, toko online, dan landing page yang dirancang sesuai kebutuhan Anda, dengan kualitas tinggi dan harga yang tetap terjangkau",
   
  },
  {
    icon: "📱",
    name: "Mobile App Development",
    desc: "Kami menyediakan layanan pengembangan aplikasi mobile kustom dengan UI/UX profesional serta integrasi backend yang andal untuk mendukung kebutuhan bisnis Anda.",
    
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
         Kami membantu mendorong pertumbuhan bisnis Anda melalui teknologi
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
          <Button 
            variant="primary"
            onClick={() => window.open('https://wa.me/6281318680606', '_blank')}
          >
            Konsultasi Gratis
          </Button>
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

      {/* About Section */}
      <div style={section}>
        <div ref={(el) => gravityRef.current.push(el)} style={{ marginBottom: 44 }}>
          <div style={sectionLabel}>Tentang Kami</div>
          <div style={sectionTitle}>
            ASTAKIRA
            <br />
            MEDIA
          </div>
        </div>
        <div
          ref={(el) => gravityRef.current.push(el)}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 60,
            alignItems: "center",
          }}
        >
          {/* Foto Team - Kiri */}
          <div
            style={{
              position: "relative",
              borderRadius: 20,
              overflow: "hidden",
              boxShadow: "0 20px 60px rgba(11,94,215,0.15)",
              maxWidth: "320px",
              margin: "0 auto",
            }}
          >
            <img
              src="images/astakira.jpg"
              alt="Team Astakira Media"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                borderRadius: 20,
              }}
            />
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "linear-gradient(135deg, rgba(11,94,215,0.1), transparent)",
                pointerEvents: "none",
              }}
            />
          </div>

          {/* About Text - Kanan */}
          <div>
            <h3
              style={{
                fontFamily: "var(--heading)",
                fontSize: "1.8rem",
                fontWeight: 400,
                color: "#096bcdff",
                marginBottom: 24,
                letterSpacing: "1px",
              }}
            >
              Studio Digital Creative
            </h3>
            <p
              style={{
                color: "rgba(11,27,53,0.8)",
                fontSize: "1.1rem",
                lineHeight: 1.6,
                marginBottom: 16,
                fontWeight: 400,
              }}
            >
              Astakira adalah perusahaan software house yang berfokus pada pengembangan solusi digital berbasis teknologi modern. Kami berkomitmen untuk memberikan layanan terbaik dalam pengembangan aplikasi yang inovatif, efisien, dan sesuai kebutuhan klien.
            </p>
          </div>
        </div>
      </div>

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
            Kami menyediakan layanan digital yang membantu bisnis Anda berkembang
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

      {/* Clients Section */}
      <div style={{ ...section, padding: "40px var(--container-pad)" }}>
        <div ref={(el) => gravityRef.current.push(el)} style={{ marginBottom: 30 }}>
          <div style={sectionLabel}>Klien Kami</div>
          <div style={sectionTitle}>
            Dipercaya Oleh
          </div>
        </div>
        <div
          ref={(el) => gravityRef.current.push(el)}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Client 1 */}
          <div
            style={{
              background: "rgba(255,255,255,0.8)",
              border: "1px solid rgba(25,118,210,0.15)",
              borderRadius: 16,
              padding: 20,
              textAlign: "center",
              transition: "transform 0.3s ease, box-shadow 0.3s ease, opacity 0.3s ease",
              backdropFilter: "blur(10px)",
              animation: "fadeInUp 0.6s ease both",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px) scale(1.05)";
              e.currentTarget.style.boxShadow = "0 16px 40px rgba(11,94,215,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <img
              src="images/logo.jpg"
              alt="Client 1"
              style={{
                width: "80px",
                height: "auto",
                borderRadius: 8,
                marginBottom: 12,
                objectFit: "cover",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "rotate(5deg) scale(1.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "none";
              }}
            />
            <div style={{ fontSize: "0.8rem", color: "rgba(11,27,53,0.7)", fontWeight: 500 }}>
              Website Menu
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

          </>
  );
}

export default Home;
