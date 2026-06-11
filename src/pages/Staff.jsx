import { useEffect, useMemo, useState } from "react";
import { buildWhatsAppUrl, GhostCTA, PrimaryCTA, Reveal, SectionBadge, SectionHeader } from "../components/ui";

const MEMBERS = [
  {
    name: "Mahesa Radithya Priady",
    role: "Owner",
    photo: "/images/anggota/1.JPG",
    altPhoto: "/images/anggota/1.2.jpg",
    specialty: "Business direction",
    note: "Menjaga arah produk, relasi klien, dan keputusan yang memprioritaskan hasil.",
  },
  {
    name: "Rayhan Hanif Fauzi",
    role: "UI/UX Designer",
    photo: "/images/anggota/2.JPG",
    altPhoto: "/images/anggota/2.2.jpg",
    specialty: "Interaction design",
    note: "Merancang antarmuka yang tenang, jelas, dan mudah dipahami di setiap layar.",
  },
  {
    name: "Adya Ahmad Pramudya",
    role: "Frontend Developer",
    photo: "/images/anggota/3.JPG",
    altPhoto: "/images/anggota/3.2.jpg",
    specialty: "Frontend systems",
    note: "Fokus pada performa, konsistensi visual, dan implementasi komponen yang rapi.",
  },
  {
    name: "Azriel Anwar Firjatullah",
    role: "Backend Developer",
    photo: "/images/anggota/4.JPG",
    altPhoto: "/images/anggota/4.2.JPG",
    specialty: "Server logic",
    note: "Menjaga API, data flow, dan sistem yang stabil untuk kebutuhan bisnis yang bertumbuh.",
  },
  {
    name: "Rania Nuramalia",
    role: "UI/UX Designer / Project Manager",
    photo: "/images/anggota/5.JPG",
    altPhoto: "/images/anggota/5.2.JPG",
    specialty: "Delivery flow",
    note: "Menyatukan detail desain, timeline, dan komunikasi agar proyek tetap on track.",
  },
  {
    name: "Rahadi Rahman",
    role: "Project Manager / Frontend Developer",
    photo: "/images/anggota/6.JPG",
    altPhoto: "/images/anggota/6.2.jpg",
    specialty: "Execution",
    note: "Menjembatani kebutuhan klien dengan eksekusi teknis yang efektif dan tepat waktu.",
  },
  {
    name: "Lusi Indah Permata",
    role: "Tester",
    photo: "/images/anggota/7.JPG",
    altPhoto: "/images/anggota/7.JPG",
    specialty: "Quality assurance",
    note: "Memastikan hasil akhir lolos pemeriksaan fungsional, visual, dan pengalaman pengguna.",
  },
];

function MemberModal({ member, onClose }) {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    setActiveImage(0);
  }, [member]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") setActiveImage((current) => (current === 0 ? 1 : 0));
      if (event.key === "ArrowLeft") setActiveImage((current) => (current === 0 ? 1 : 0));
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      className="modal-overlay"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="modal-grid"
      >
        <div
          className="modal-img-container"
          style={{
            position: "relative",
            borderRadius: 28,
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.12)",
            boxShadow: "0 30px 90px rgba(0,0,0,0.38)",
            background: "#081a33",
          }}
        >
          <img
            src={activeImage === 0 ? member.photo : member.altPhoto}
            alt={member.name}
            style={{
              width: "100%",
              height: "min(70vh, 760px)",
              objectFit: "cover",
              display: "block",
            }}
          />
          <button
            type="button"
            className="focus-ring"
            onClick={onClose}
            style={{
              position: "absolute",
              top: 14,
              right: 14,
              width: 44,
              height: 44,
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.15)",
              background: "rgba(255,255,255,0.08)",
              color: "#fff",
              cursor: "pointer",
              fontSize: 24,
              display: "grid",
              placeItems: "center",
              lineHeight: 0,
            }}
          >
            ×
          </button>
          <button
            type="button"
            className="focus-ring"
            onClick={() => setActiveImage((current) => (current === 0 ? 1 : 0))}
            style={{
              position: "absolute",
              left: 14,
              bottom: 14,
              border: "1px solid rgba(255,255,255,0.14)",
              background: "rgba(255,255,255,0.08)",
              color: "#fff",
              borderRadius: 999,
              padding: "10px 14px",
              cursor: "pointer",
              fontWeight: 600,
              fontSize: 13,
            }}
          >
            Ganti Foto
          </button>
        </div>

        <div
          className="glass-card"
          style={{
            padding: 28,
            borderRadius: 28,
            color: "#fff",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(circle at 20% 20%, rgba(59,130,246,0.22), transparent 28%), radial-gradient(circle at 80% 70%, rgba(6,182,212,0.14), transparent 24%)",
              pointerEvents: "none",
            }}
          />
          <div style={{ position: "relative", zIndex: 1 }}>
            <SectionBadge accent>Tim Astakira</SectionBadge>
            <h3 style={{ marginTop: 16, fontSize: "clamp(2rem, 4vw, 3.4rem)", lineHeight: 1.04, color: "#fff" }}>
              {member.name}
            </h3>
            <div style={{ marginTop: 10, color: "rgba(255,255,255,0.72)", fontSize: 16, fontWeight: 700 }}>
              {member.role}
            </div>

            <div style={{ marginTop: 22, display: "flex", flexWrap: "wrap", gap: 10 }}>
              <span style={pillStyle}>{member.specialty}</span>
              <span style={pillStyle}>Collaborative</span>
              <span style={pillStyle}>Detail oriented</span>
            </div>

            <p style={{ marginTop: 22, color: "rgba(255,255,255,0.76)", lineHeight: 1.85, fontSize: 16 }}>
              {member.note}
            </p>

            <div style={{ marginTop: 24, display: "flex", flexWrap: "wrap", gap: 12 }}>
              <PrimaryCTA
                href={buildWhatsAppUrl(
                  `Halo Astakira, saya ingin diskusi dengan tim dan ingin tahu lebih lanjut tentang ${member.role}.`
                )}
              >
                Diskusi dengan Tim 
              </PrimaryCTA>
              <GhostCTA href="/pricing" style={{ color: "#fff" }}>
                Lihat Pricing
              </GhostCTA>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const pillStyle = {
  display: "inline-flex",
  alignItems: "center",
  padding: "8px 12px",
  borderRadius: 999,
  border: "1px solid rgba(255,255,255,0.12)",
  background: "rgba(255,255,255,0.05)",
  color: "rgba(255,255,255,0.86)",
  fontSize: 13,
  fontWeight: 700,
};

function MemberCard({ member, index, onOpen }) {
  const [hovered, setHovered] = useState(false);
  const staggerClass = index % 3 === 1 ? "stagger-1" : index % 3 === 2 ? "stagger-2" : "";

  return (
    <button
      type="button"
      className={`feature-card focus-ring member-card ${staggerClass}`}
      onClick={onOpen}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: 14,
        textAlign: "left",
        cursor: "pointer",
        border: "none",
        width: "100%",
        background: "transparent",
        transition: "all .3s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      <div
        style={{
          borderRadius: 22,
          overflow: "hidden",
          position: "relative",
          aspectRatio: "3 / 4",
          background: "#081a33",
        }}
      >
        <img
          src={member.photo}
          alt={member.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            filter: hovered ? "saturate(1.06) contrast(1.02)" : "grayscale(8%) saturate(0.92)",
            transform: hovered ? "scale(1.04)" : "scale(1)",
            transition: "transform .28s ease, filter .28s ease",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: hovered
              ? "linear-gradient(180deg, rgba(11,94,215,0.08), rgba(10,22,40,0.28))"
              : "linear-gradient(180deg, rgba(11,94,215,0.18), rgba(10,22,40,0.34))",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 14,
            right: 14,
            bottom: 14,
            display: "grid",
            gap: 6,
            color: "#fff",
            zIndex: 2,
          }}
        >
          <div className="label-mono" style={{ fontSize: 11, color: "rgba(255,255,255,0.72)" }}>
            {member.specialty}
          </div>
          <div style={{ fontSize: 18, fontWeight: 800, lineHeight: 1.15 }}>{member.name}</div>
          <div style={{ fontSize: 13, color: "rgba(255,255,255,0.78)" }}>{member.role}</div>
        </div>
      </div>
    </button>
  );
}

export default function Staff() {
  const [activeMember, setActiveMember] = useState(null);

  useEffect(() => {
    document.body.style.overflow = activeMember ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeMember]);

  const spotlight = useMemo(
    () => ["Designer yang tenang", "Developer yang detail", "Delivery yang rapi"],
    []
  );

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

      <div className="ui-shell" style={{ paddingTop: 36, paddingBottom: 96, position: "relative", zIndex: 1 }}>
        <section style={{ padding: "70px 0 34px" }}>
          <Reveal>
            <div style={{ maxWidth: 860 }}>
              <SectionBadge>Staff</SectionBadge>
              <SectionHeader
                title="Orang-orang di balik Astakira."
                description="Kami percaya hasil terbaik lahir dari tim yang rapi, komunikatif, dan saling melengkapi. Di sini, tiap orang punya peran yang jelas dan cara kerja yang saling mendukung."
              />
              <div style={{ marginTop: 22, display: "flex", flexWrap: "wrap", gap: 10 }}>
                {spotlight.map((item) => (
                  <span key={item} className="surface-card" style={{ padding: "8px 14px", fontSize: 13, fontWeight: 700, color: "#0b5ed7", border: "1px solid rgba(11,94,215,0.1)", background: "rgba(255,255,255,0.68)" }}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        <section style={{ display: "grid", gap: 24 }}>
          <div className="staff-grid">
            {MEMBERS.map((member, index) => (
              <Reveal key={member.name} delay={index * 60}>
                <MemberCard member={member} index={index} onOpen={() => setActiveMember(member)} />
              </Reveal>
            ))}
          </div>
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
                background:
                  "radial-gradient(circle at 18% 24%, rgba(11,94,215,0.22), transparent 36%), radial-gradient(circle at 78% 76%, rgba(6,182,212,0.16), transparent 30%), #081225",
                pointerEvents: "none",
              }}
            />
            <div style={{ position: "relative", zIndex: 1, display: "grid", gap: 18, textAlign: "center", maxWidth: 760, margin: "0 auto" }}>
              <SectionBadge accent>Punya proyek bersama?</SectionBadge>
              <h2 style={{ color: "#fff", fontSize: "clamp(2rem, 4vw, 3.2rem)", lineHeight: 1.1, fontWeight: 800 }}>
                Mau kolaborasi dengan tim yang siap eksekusi?
              </h2>
              <p style={{ color: "rgba(255,255,255,0.76)", lineHeight: 1.8, fontSize: 15 }}>
                Ceritakan kebutuhanmu, dan kami bantu menyusun peran tim, timeline, serta langkah awal yang paling masuk akal.
              </p>
              <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 14, marginTop: 10 }}>
                <PrimaryCTA href={buildWhatsAppUrl("Halo Astakira, saya ingin berkolaborasi dengan tim kalian.")}>
                  Berkolaborasi
                </PrimaryCTA>
                <GhostCTA href="/pricing" style={{ color: "#fff" }}>
                  Lihat Paket
                </GhostCTA>
              </div>
            </div>
          </div>
        </section>

      </div>

      {activeMember && <MemberModal member={activeMember} onClose={() => setActiveMember(null)} />}

      <style>{`
        .staff-grid {
          display: grid;
          gap: 22px;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          align-items: start;
        }

        .modal-overlay {
          position: fixed;
          inset: 0;
          z-index: 1100;
          background: rgba(10, 22, 40, 0.92);
          backdrop-filter: blur(16px);
          display: grid;
          place-items: center;
          padding: 24px;
          overflow-y: auto;
        }

        .modal-grid {
          width: min(1080px, 96vw);
          display: grid;
          gap: 24px;
          align-items: center;
          grid-template-columns: minmax(280px, 420px) minmax(0, 1fr);
        }

        @media (min-width: 768px) {
          .member-card.stagger-1 {
            transform: translateY(16px);
          }
          .member-card.stagger-2 {
            transform: translateY(32px);
          }
          .member-card:hover {
            transform: translateY(-6px) !important;
            box-shadow: 0 20px 40px rgba(11, 94, 215, 0.16) !important;
          }
        }

        @media (max-width: 767px) {
          .member-card {
            transform: none !important;
          }
          .member-card:hover {
            transform: translateY(-4px) !important;
          }
          .modal-overlay {
            display: block !important;
            overflow-y: auto;
            padding: 16px !important;
          }
          .modal-grid {
            grid-template-columns: 1fr !important;
            margin: 32px auto !important;
            width: 100% !important;
            gap: 16px !important;
          }
          .modal-img-container img {
            height: 320px !important;
          }
        }
      `}</style>
    </div>
  );
}
