import { useRef, useCallback, useState, useEffect } from "react";

function MemberCard({ m, idx, featured, onClick }) {
  const cardRef = useRef(null);
  const glowRef = useRef(null);
  const rafRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    const card = cardRef.current;
    const glow = glowRef.current;
    if (!card || !glow) return;

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      const rect = card.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;

      const rotX = ((my - cy) / cy) * -10;
      const rotY = ((mx - cx) / cx) * 10;

      card.style.transform = `perspective(700px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.04)`;
      card.style.boxShadow = `
        0 20px 50px rgba(11,94,215,0.18),
        0 4px 16px rgba(11,94,215,0.12),
        inset 0 0 0 1px rgba(25,118,210,0.28)
      `;

      glow.style.background = `radial-gradient(260px circle at ${mx}px ${my}px, rgba(25,118,210,0.13), transparent 70%)`;
      glow.style.opacity = "1";
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    const glow = glowRef.current;
    if (!card || !glow) return;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    card.style.transform = "perspective(700px) rotateX(0deg) rotateY(0deg) scale(1)";
    card.style.boxShadow = "0 10px 30px rgba(11,94,215,0.08)";
    glow.style.opacity = "0";
  }, []);

  return (
    <div
      ref={cardRef}
      className={`ui-surface${featured ? " member-card--featured" : ""}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => onClick && onClick(m, idx)}
      style={{
        borderRadius: 22,
        padding: 16,
        transition: "transform .18s cubic-bezier(.23,1,.32,1), box-shadow .18s ease",
        boxShadow: "0 10px 30px rgba(11,94,215,0.08)",
        transform: "perspective(700px) rotateX(0deg) rotateY(0deg) scale(1)",
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        willChange: "transform",
      }}
    >
      {/* spotlight glow layer */}
      <div
        ref={glowRef}
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          opacity: 0,
          transition: "opacity .15s",
          borderRadius: 22,
          zIndex: 1,
        }}
      />

      {/* shine border on hover via pseudo — done with box inset in JS above */}

      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          aspectRatio: "3 / 4",
          borderRadius: 18,
          overflow: "hidden",
          border: "1px solid rgba(25,118,210,0.18)",
        }}
      >
        <img
          src={m.foto}
          alt={m.nama}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            transition: "transform .35s cubic-bezier(.23,1,.32,1)",
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.06)"; }}
          onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; }}
        />
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 2,
          marginTop: 14,
          fontWeight: 900,
          color: "#081a33",
          transition: "color .18s",
        }}
      >
        {m.nama}
      </div>
      <div
        style={{
          position: "relative",
          zIndex: 2,
          marginTop: 4,
          color: "rgba(11,27,53,0.72)",
          fontSize: 13,
        }}
      >
        {m.jabatan}
      </div>
    </div>
  );
}

export default function Staff() {
  const [selectedMember, setSelectedMember] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageOpacity, setImageOpacity] = useState(1);

  const wrap = {
    maxWidth: "var(--container-max)",
    margin: "0 auto",
    padding: "var(--section-pad-y) var(--container-pad)",
  };

  const members = [
    { foto: "images/anggota/1.JPG", nama: "Mahesa Radithya Priady",          jabatan: "Owner" },
    { foto: "images/anggota/2.JPG", nama: "Rayhan Hanif Fauziy",             jabatan: "UI/UX Designer" },
    { foto: "images/anggota/3.JPG", nama: "Adya Ahmad Pramudya",             jabatan: "Frontend Developer" },
    { foto: "images/anggota/4.JPG", nama: "Azriel Anwar Firjatullah",        jabatan: "Backend Developer" },
    { foto: "images/anggota/5.JPG", nama: "Rania Nuramalia",                 jabatan: "UI/UX Designer / Project Manager" },
    { foto: "images/anggota/6.JPG", nama: "Rahadi Rahman",                   jabatan: "Project Manager / Frontend Developer" },
    { foto: "images/anggota/7.JPG", nama: "Lusi Indah Permata",              jabatan: "Tester" },
  ];

  const handleCardClick = (member, idx) => {
    setSelectedMember(member);
    setCurrentImageIndex(0);
    setImageOpacity(1);
  };

  const closePopup = () => {
    setSelectedMember(null);
    setCurrentImageIndex(0);
  };

  // Auto slideshow every 5 seconds
  useEffect(() => {
    if (!selectedMember) return;

    const interval = setInterval(() => {
      // Fade out
      setImageOpacity(0);
      
      // Change image after fade out
      setTimeout(() => {
        setCurrentImageIndex(prev => (prev + 1) % 2); // 2 images (1.jpg, 2.2.jpg)
        // Fade in
        setTimeout(() => setImageOpacity(1), 50);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, [selectedMember]);

  // Keyboard navigation
  useEffect(() => {
    if (!selectedMember) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") closePopup();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedMember]);

  // Get current image with manual data (no array/database)
  const getCurrentImage = (baseImage, index) => {
    // Manual mapping for each staff member's second image
    const manualImageMap = {
      "1": "images/anggota/1.2.jpg",
      "2": "images/anggota/2.2.jpg", 
      "3": "images/anggota/3.2.jpg",
      "4": "images/anggota/4.2.jpg",
      "5": "images/anggota/5.2.jpg",
      "6": "images/anggota/6.2.jpg",
      "7": "images/anggota/7.2.jpg"
    };
    
    if (index === 0) return baseImage; // First image stays as .jpg
    
    // Extract the number from baseImage (e.g., "1" from "images/anggota/1.jpg")
    const baseNum = baseImage.match(/\/(\d+)\.jpg$/)[1];
    
    // Return the manually mapped second image
    return manualImageMap[baseNum] || baseImage; // Fallback to baseImage if not found
  };

  return (
    <div style={wrap}>
      <div
        style={{
          fontFamily: "var(--font-heading)",
          fontSize: "clamp(2rem,4vw,3rem)",
          fontWeight: 900,
          letterSpacing: "-1.5px",
          marginBottom: 12,
        }}
      >
        Staff
      </div>

      <div className="member-cards-grid" style={{ marginTop: 28 }}>
        {members.map((m, idx) => (
          <MemberCard key={idx} m={m} idx={idx} featured={idx === 0} onClick={handleCardClick} />
        ))}
      </div>

      {/* Popup Modal */}
      {selectedMember && (
        <>
          <div
            onClick={closePopup}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(11,27,53,0.85)",
              zIndex: 999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 20,
              animation: "fadeIn 0.3s ease-out",
            }}
          />
          <div
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%) scale(0.9)",
              maxWidth: "90vw",
              maxHeight: "90vh",
              zIndex: 1000,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 24,
              animation: "popupIn 0.3s ease-out forwards",
            }}
          >
            {/* Close Button */}
            <button
              onClick={closePopup}
              style={{
                position: "absolute",
                top: -40,
                right: -40,
                width: 40,
                height: 40,
                borderRadius: 999,
                border: "1px solid rgba(25,118,210,0.3)",
                background: "rgba(248,251,255,0.95)",
                color: "#0b1b35",
                cursor: "pointer",
                fontSize: "18px",
                fontWeight: "bold",
                transition: "all .2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(25,118,210,0.1)";
                e.currentTarget.style.transform = "scale(1.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(248,251,255,0.95)";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              ×
            </button>

            {/* Image Container */}
            <div
              style={{
                width: "clamp(280px, 60vw, 400px)",
                height: "clamp(373px, 80vw, 533px)",
                aspectRatio: "3 / 4",
                borderRadius: 20,
                overflow: "hidden",
                border: "2px solid rgba(25,118,210,0.3)",
                boxShadow: "0 20px 60px rgba(11,27,53,0.3)",
                position: "relative",
              }}
            >
              <img
                src={getCurrentImage(selectedMember.foto, currentImageIndex)}
                alt={selectedMember.nama}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  opacity: imageOpacity,
                  transition: "opacity 0.3s ease-in-out",
                }}
              />
            </div>

            {/* Member Info */}
            <div
              style={{
                textAlign: "center",
                color: "#fff",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.5rem",
                  fontWeight: 900,
                  marginBottom: 8,
                  textShadow: "0 2px 8px rgba(0,0,0,0.3)",
                }}
              >
                {selectedMember.nama}
              </div>
              <div
                style={{
                  fontSize: "1rem",
                  opacity: 0.9,
                  textShadow: "0 1px 4px rgba(0,0,0,0.3)",
                }}
              >
                {selectedMember.jabatan}
              </div>
            </div>

          </div>
        </>
      )}
    </div>
  );
}

// CSS Animations
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  @keyframes popupIn {
    from { 
      opacity: 0;
      transform: translate(-50%, -50%) scale(0.9);
    }
    to { 
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
  }
`;
document.head.appendChild(style);