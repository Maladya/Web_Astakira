import React from "react";

export default function Button({ children, variant = "primary", onClick, style: extraStyle }) {
  const base = {
    padding: "13px 22px",
    borderRadius: 999,
    fontSize: 15,
    fontWeight: 700,
    cursor: "pointer",
    fontFamily: "inherit",
    border: "1px solid transparent",
    transition: "transform .2s, box-shadow .2s, background .2s, border-color .2s",
    ...extraStyle,
  };
  const styles = {
    primary: {
      background: "linear-gradient(135deg,#0b5ed7,#2563eb)",
      color: "#fff",
      boxShadow: "0 14px 30px rgba(11,94,215,0.22)",
    },
    ghost: {
      background: "transparent",
      color: "#0b5ed7",
      border: "1px solid rgba(11,94,215,0.24)",
    },
    gravity: {
      background: "linear-gradient(135deg,#0b5ed7,#38bdf8)",
      color: "#fff",
      boxShadow: "0 14px 30px rgba(11,94,215,0.25)",
      letterSpacing: "0.5px",
      fontFamily: "inherit",
    },
    reset: {
      background: "rgba(10,22,40,0.95)",
      color: "#fff",
      border: "1px solid rgba(59,130,246,0.22)",
      fontWeight: 600,
      fontSize: 13,
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
