export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(25,118,210,0.18)",
        padding: "36px 0",
        textAlign: "center",
        color: "rgba(11,27,53,0.65)",
        fontSize: "0.82rem",
        fontWeight: 300,
      }}
    >
      {/* Logo dan nama sejajar */}
      <div style={{ 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center",
        marginBottom: "16px",
        gap: "12px"
      }}>
        <img 
          src="/images/astakira.jpg" 
          alt="Astakira Media" 
          style={{ 
            width: "40px", 
            height: "40px", 
            borderRadius: "50%",
            display: "inline-block"
          }}
        />
        <strong style={{ 
          color: "#0b1b35", 
          fontWeight: 700, 
          fontFamily: "var(--heading)", 
          letterSpacing: "1px",
          fontSize: "1rem"
        }}>
          ASTAKIRA MEDIA
        </strong>
      </div>
      
      <div style={{ marginBottom: "16px" }}>
        Studio Pembuatan Website Profesional · Tasikmalaya, Jawa Barat
      </div>
      
      {/* Social media logo only */}
      <div style={{ marginBottom: "16px" }}>
        <a 
          href="https://www.instagram.com/astakira.media/?__d=11" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            margin: "0 8px",
            transition: "transform 0.2s ease, opacity 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "scale(1.1)";
            e.target.style.opacity = "0.8";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.opacity = "1";
          }}
        >
          <img 
            src="https://img.icons8.com/color/48/instagram-new--v1.png" 
            alt="Instagram"
            style={{
              width: "24px",
              height: "24px",
              display: "block"
            }}
          />
        </a>
        
        <a 
          href="https://www.tiktok.com/@astakiramedia" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            margin: "0 8px",
            transition: "transform 0.2s ease, opacity 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "scale(1.1)";
            e.target.style.opacity = "0.8";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.opacity = "1";
          }}
        >
          <img 
            src="https://img.icons8.com/color/48/tiktok--v1.png" 
            alt="TikTok"
            style={{
              width: "24px",
              height: "24px",
              display: "block"
            }}
          />
        </a>
      </div>
      
      <span style={{ 
        display: "block",
        fontSize: "0.75rem",
        color: "rgba(11,27,53,0.5)"
      }}>
        © 2026 Astakira Media · Semua Hak Dilindungi
      </span>
    </footer>
  );
}
