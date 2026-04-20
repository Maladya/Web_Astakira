import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import globalStyles from "../styles/globalStyles";
import Navbar from "../components/Navbar";
import Starfield from "../components/Starfield";
import Footer from "../components/Footer";

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
    </div>
  );
}
