import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import globalStyles from "../styles/globalStyles";
import Navbar from "../components/Navbar";
import Starfield from "../components/Starfield";
import Footer from "../components/Footer";
import { buildWhatsAppUrl, PrimaryCTA } from "../components/ui";

function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollable = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      setVisible(window.scrollY / scrollable > 0.3);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        right: 18,
        bottom: 18,
        zIndex: 250,
        display: "flex",
        alignItems: "flex-end",
        gap: 10,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(12px)",
        pointerEvents: visible ? "auto" : "none",
        transition: "opacity .25s ease, transform .25s ease",
      }}
    >
      <div
        style={{
          display: "none",
          maxWidth: 180,
          padding: "10px 12px",
          borderRadius: 14,
          background: "rgba(10,22,40,0.9)",
          color: "#fff",
          fontSize: 13,
          lineHeight: 1.45,
          boxShadow: "0 18px 40px rgba(10,22,40,0.18)",
        }}
        className="floating-tooltip"
      >
        Butuh estimasi cepat?
      </div>
      <a
        href={buildWhatsAppUrl("Halo Astakira, saya ingin konsultasi proyek dan minta estimasi cepat.")}
        target="_blank"
        rel="noreferrer"
        className="floating-wa-btn"
        aria-label="Konsultasi via WhatsApp"
      >
        <svg
          viewBox="0 0 24 24"
          width="26"
          height="26"
          fill="currentColor"
          style={{ display: "block" }}
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.963C16.786 2.039 14.321 1.01 11.758 1.01c-5.447 0-9.873 4.372-9.877 9.802-.001 1.77.461 3.5 1.338 5.03l-.988 3.606 3.826-.994zm11.766-7.44c-.318-.159-1.88-.918-2.17-1.022-.29-.105-.5-.159-.71.159-.21.318-.812 1.022-.994 1.233-.181.21-.363.237-.681.078-1.585-.792-2.613-1.39-3.647-3.155-.27-.46.27-.426.773-1.42.082-.164.041-.307-.02-.466-.062-.159-.5-1.189-.685-1.637-.18-.432-.363-.373-.5-.38l-.426-.008c-.149 0-.391.055-.595.275-.205.22-.783.753-.783 1.838 0 1.085.8 2.138.91 2.285.111.147 1.575 2.378 3.816 3.334.533.228 1.014.38 1.36.488.536.168 1.025.144 1.412.088.431-.063 1.88-.758 2.144-1.45.264-.693.264-1.288.186-1.411-.079-.123-.29-.196-.608-.355z"/>
        </svg>
      </a>
    </div>
  );
}

export default function MainLayout() {
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = globalStyles;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <Starfield />
      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
      <FloatingWhatsApp />

      <style>{`
        .floating-wa-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 54px;
          height: 54px;
          border-radius: 50%;
          background: #25d366;
          color: #fff;
          box-shadow: 0 18px 34px rgba(37, 211, 102, 0.3);
          transition: transform .2s ease, box-shadow .2s ease, filter .2s ease;
          cursor: pointer;
          text-decoration: none;
        }

        .floating-wa-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 20px 40px rgba(37, 211, 102, 0.45);
          filter: brightness(1.05);
        }

        .floating-wa-btn:active {
          transform: translateY(0);
        }

        @media (min-width: 760px) {
          .floating-tooltip {
            display: block !important;
          }
        }
      `}</style>
    </div>
  );
}
