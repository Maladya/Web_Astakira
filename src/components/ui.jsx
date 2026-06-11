import { useEffect, useRef, useState } from "react";

export const WHATSAPP_NUMBER = "6281318680606";

function getLinkProps(href) {
  if (!href) return {};
  const isExternal = /^(https?:)?\/\//.test(href);
  const isSpecialScheme = /^(mailto:|tel:|sms:|wa.me)/.test(href);

  if (isExternal) {
    return { target: "_blank", rel: "noreferrer" };
  }

  if (isSpecialScheme) {
    return {};
  }

  return {};
}

export function buildWhatsAppUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function SectionHeader({ eyebrow, title, description, align = "left", compact = false }) {
  return (
    <div style={{ textAlign: align, maxWidth: compact ? 760 : 920 }}>
      {eyebrow && (
        <div
          className="label-mono"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "8px 14px",
            borderRadius: 999,
            border: "1px solid rgba(11,94,215,0.18)",
            background: "rgba(255,255,255,0.62)",
            color: "#0b5ed7",
            fontSize: 12,
            fontWeight: 700,
            marginBottom: 18,
          }}
        >
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#0b5ed7" }} />
          {eyebrow}
        </div>
      )}
      <h2
        style={{
          fontSize: "clamp(2rem, 4vw, 3.6rem)",
          lineHeight: 1.05,
          letterSpacing: "-0.04em",
          marginBottom: description ? 16 : 0,
          fontWeight: 800,
        }}
      >
        {title}
      </h2>
      {description && (
        <p style={{ fontSize: "1.04rem", lineHeight: 1.75, color: "rgba(11,27,53,0.72)" }}>
          {description}
        </p>
      )}
    </div>
  );
}

export function SectionBadge({ children, accent = false }) {
  return (
    <span
      className="label-mono"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "8px 14px",
        borderRadius: 999,
        border: `1px solid ${accent ? "rgba(245,158,11,0.26)" : "rgba(11,94,215,0.16)"}`,
        background: accent ? "rgba(245,158,11,0.08)" : "rgba(255,255,255,0.62)",
        color: accent ? "#b45309" : "#0b5ed7",
        fontSize: 12,
        fontWeight: 700,
      }}
    >
      {children}
    </span>
  );
}

export function PrimaryCTA({ children, href, onClick, style, small = false }) {
  const Comp = href ? "a" : "button";
  const props = href ? { href, ...getLinkProps(href) } : { onClick };

  return (
    <Comp
      {...props}
      className="focus-ring"
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        minHeight: small ? 40 : 48,
        padding: small ? "10px 16px" : "13px 22px",
        borderRadius: 999,
        border: "1px solid rgba(11,94,215,0.25)",
        background: "linear-gradient(135deg, #0b5ed7 0%, #2563eb 100%)",
        color: "#fff",
        fontWeight: 700,
        fontSize: small ? 14 : 15,
        textDecoration: "none",
        boxShadow: "0 14px 30px rgba(11,94,215,0.22)",
        transition: "transform .2s ease, box-shadow .2s ease, filter .2s ease",
        cursor: "pointer",
        ...style,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-2px)";
        e.currentTarget.style.boxShadow = "0 18px 36px rgba(11,94,215,0.28)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 14px 30px rgba(11,94,215,0.22)";
      }}
    >
      {children}
    </Comp>
  );
}

export function GhostCTA({ children, href, onClick, style }) {
  const Comp = href ? "a" : "button";
  const props = href ? { href, ...getLinkProps(href) } : { onClick };

  return (
    <Comp
      {...props}
      className="focus-ring underline-link"
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: 48,
        padding: "0 2px",
        border: "none",
        background: "transparent",
        color: "#0b5ed7",
        fontWeight: 700,
        textDecoration: "none",
        cursor: "pointer",
        ...style,
      }}
    >
      {children}
    </Comp>
  );
}

export function Reveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export function StatCard({ value, label, hint }) {
  return (
    <div className="surface-card" style={{ padding: 20 }}>
      <div style={{ fontSize: "2rem", fontWeight: 800, color: "#0b5ed7", lineHeight: 1 }}>
        {value}
      </div>
      <div style={{ fontWeight: 700, marginTop: 8, color: "#081a33" }}>{label}</div>
      {hint && (
        <div style={{ marginTop: 6, color: "rgba(11,27,53,0.66)", fontSize: 14, lineHeight: 1.6 }}>
          {hint}
        </div>
      )}
    </div>
  );
}

export function InlineContact({ children, message, style }) {
  return (
    <a
      href={buildWhatsAppUrl(message)}
      {...getLinkProps(buildWhatsAppUrl(message))}
      className="underline-link"
      style={{
        color: "#0b5ed7",
        fontWeight: 700,
        textDecoration: "none",
        ...style,
      }}
    >
      {children}
    </a>
  );
}
