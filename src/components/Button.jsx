import React from "react";

export default function Button({ children, variant = "primary", onClick, style: extraStyle }) {
  const base = {
    padding: "var(--btn-pad)",
    borderRadius: 50,
    fontSize: "var(--btn-font)",
    fontWeight: 600,
    cursor: "pointer",
    fontFamily: "inherit",
    border: "none",
    transition: "transform .2s, box-shadow .2s, background .2s",
    ...extraStyle,
  };
  const styles = {
    primary: {
      background: "linear-gradient(135deg,#0b5ed7,#2563eb)",
      color: "#fff",
      boxShadow: "0 10px 34px rgba(11,94,215,0.28)",
    },
    ghost: {
      background: "transparent",
      color: "#0b1b35",
      border: "1px solid rgba(25,118,210,0.35)",
    },
    gravity: {
      background: "linear-gradient(135deg,#0b5ed7,#38bdf8)",
      color: "#fff",
      boxShadow: "0 10px 34px rgba(11,94,215,0.30)",
      letterSpacing: "0.5px",
      fontFamily: "inherit",
    },
    reset: {
      background: "rgba(20,20,30,0.95)",
      color: "#fff",
      border: "1px solid rgba(25,118,210,0.30)",
      fontWeight: 500,
      fontSize: "0.82rem",
    },
  };

  return (
    <button
      onClick={onClick}
      style={{ ...base, ...styles[variant] }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-2px) scale(1.02)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "none";
      }}
    >
      {children}
    </button>
  );
}
