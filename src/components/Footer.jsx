import { buildWhatsAppUrl, GhostCTA, PrimaryCTA } from "./ui";

function FooterLink({ href, children }) {
  const isExternal = /^(https?:)?\/\//.test(href);
  return (
    <a
      href={href}
      {...(isExternal ? { target: "_blank", rel: "noreferrer" } : {})}
      className="footer-link"
    >
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer
      style={{
        position: "relative",
        marginTop: 120,
        background: "linear-gradient(180deg, #0a1628 0%, #050b14 100%)",
        color: "#fff",
        overflow: "hidden",
        borderTop: "1px solid rgba(59, 130, 246, 0.22)",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle at 15% 20%, rgba(59,130,246,0.18), transparent 28%), radial-gradient(circle at 85% 10%, rgba(6,182,212,0.1), transparent 22%), linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "auto, auto, 48px 48px",
          opacity: 0.45,
          pointerEvents: "none",
        }}
      />

      <div className="ui-shell" style={{ position: "relative", zIndex: 1, paddingTop: 72, paddingBottom: 28 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ marginBottom: 44, maxWidth: 720 }}>
            <div className="label-mono" style={{ color: "#60a5fa", fontSize: 12, fontWeight: 700, marginBottom: 14 }}>
              Astakira Media
            </div>
            <h2 style={{ color: "#fff", fontSize: "clamp(1.8rem, 3vw, 3rem)", lineHeight: 1.05, marginBottom: 14, fontWeight: 800 }}>
              Solusi digital yang terasa <span style={{ color: "#60a5fa" }}>crafted</span>, bukan sekadar template.
            </h2>
            <p style={{ color: "rgba(255,255,255,0.72)", fontSize: 16, lineHeight: 1.75, maxWidth: 680 }}>
              Studio pengembangan website dan aplikasi yang menggabungkan struktur editorial, performa, dan pendekatan yang fokus pada hasil bisnis.
            </p>
          </div>

          <div className="footer-grid">
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
                <div style={{
                  width: 58,
                  height: 58,
                  borderRadius: 18,
                  background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
                  padding: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 0 16px rgba(59, 130, 246, 0.25)",
                  flexShrink: 0
                }}>
                  <img
                    src="/images/astakira.jpg"
                    alt="Astakira"
                    style={{ width: "100%", height: "100%", borderRadius: 16, objectFit: "cover" }}
                  />
                </div>
                <div>
                  <div style={{ fontWeight: 800, letterSpacing: "0.08em", marginBottom: 4 }}>ASTAKIRA</div>
                  <div style={{ color: "rgba(255,255,255,0.6)", fontSize: 14 }}>Digital Solutions</div>
                </div>
              </div>
              <p style={{ color: "rgba(255,255,255,0.66)", fontSize: 15, lineHeight: 1.8, maxWidth: 360 }}>
                Kami membangun produk digital yang rapi, cepat, dan siap dipakai untuk mendorong pertumbuhan bisnis.
              </p>
              <div style={{ marginTop: 20, display: "flex", gap: 12, flexWrap: "wrap" }}>
                <PrimaryCTA
                  href={buildWhatsAppUrl("Halo Astakira, saya ingin konsultasi dari footer website.")}
                  small
                >
                  WhatsApp
                </PrimaryCTA>
                <GhostCTA href="mailto:hello@astakiramedia.com" style={{ color: "#fff", minHeight: 40 }}>
                  Email
                </GhostCTA>
              </div>
            </div>

            <div>
              <h4 style={{ fontSize: 16, fontWeight: 800, marginBottom: 18 }}>Layanan</h4>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <FooterLink href="/#services">Website Development</FooterLink>
                <FooterLink href="/#services">Mobile App Development</FooterLink>
                <FooterLink href="/#services">UI/UX Design</FooterLink>
                <FooterLink href="/#services">Custom System</FooterLink>
              </div>
            </div>

            <div>
              <h4 style={{ fontSize: 16, fontWeight: 800, marginBottom: 18 }}>Sosial</h4>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <FooterLink href="https://www.instagram.com/astakira.media/?__d=11">Instagram</FooterLink>
                <FooterLink href="https://www.tiktok.com/@astakiramedia">TikTok</FooterLink>
                <FooterLink href="https://wa.me/6281318680606">WhatsApp</FooterLink>
              </div>
            </div>

            <div>
              <h4 style={{ fontSize: 16, fontWeight: 800, marginBottom: 18 }}>Kontak</h4>
              <div style={{ color: "rgba(255,255,255,0.7)", fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
                Tasikmalaya, Jawa Barat, Indonesia
              </div>
              <a
                href="mailto:hello@astakiramedia.com"
                className="footer-email-link"
                style={{ color: "#60a5fa", textDecoration: "none", fontWeight: 700 }}
              >
                hello@astakiramedia.com
              </a>
            </div>
          </div>

          <div className="footer-bottom">
            <div>&copy; 2026 Astakira Media. Semua hak dilindungi.</div>
            <div className="footer-bottom-links">
              <a href="#" className="footer-bottom-link">
                Kebijakan Privasi
              </a>
              <a href="#" className="footer-bottom-link">
                Syarat & Ketentuan
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-huge-text">
        ASTAKIRA
      </div>

      <style>{`
        .footer-link {
          display: inline-flex;
          align-items: center;
          color: rgba(255,255,255,0.65);
          text-decoration: none;
          margin-bottom: 12px;
          font-size: 15px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .footer-link:hover {
          color: #60a5fa;
          transform: translateX(4px);
        }

        .footer-email-link {
          transition: color 0.3s ease;
        }

        .footer-email-link:hover {
          color: #3b82f6 !important;
        }

        .footer-grid {
          display: grid;
          gap: 40px 28px;
          grid-template-columns: 1.6fr 1fr 1fr 1.2fr;
          margin-top: 48px;
        }

        .footer-bottom {
          margin-top: 64px;
          padding-top: 24px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: rgba(255, 255, 255, 0.45);
          font-size: 13px;
        }

        .footer-bottom-links {
          display: flex;
          gap: 24px;
          flex-wrap: wrap;
        }

        .footer-bottom-link {
          color: inherit;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .footer-bottom-link:hover {
          color: #60a5fa;
        }

        .footer-huge-text {
          position: absolute;
          bottom: -2vw;
          left: 50%;
          transform: translateX(-50%);
          font-size: clamp(8rem, 18vw, 18rem);
          font-weight: 900;
          letter-spacing: -0.03em;
          background: linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.005) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          white-space: nowrap;
          pointer-events: none;
          user-select: none;
          z-index: 0;
        }

        @media (max-width: 980px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 44px 28px;
          }
          .footer-grid > div:first-child {
            grid-column: span 2;
            max-width: 520px;
          }
        }

        @media (max-width: 768px) {
          .footer-bottom {
            flex-direction: column;
            gap: 16px;
            text-align: center;
            padding-bottom: 24px;
          }
          .footer-bottom-links {
            justify-content: center;
            gap: 18px;
          }
        }

        @media (max-width: 560px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .footer-grid > div:first-child {
            grid-column: span 1;
            max-width: 100%;
          }
        }
      `}</style>
    </footer>
  );
}
