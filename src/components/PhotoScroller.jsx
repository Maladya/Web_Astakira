import { useCallback, useRef, useState, useEffect } from "react";

export default function PhotoScroller({ items }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!selectedImage) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setSelectedImage(null);
      if (e.key === "ArrowLeft") navigateImage(-1);
      if (e.key === "ArrowRight") navigateImage(1);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedImage]);

  const openImage = (index) => {
    setSelectedImage(items[index].src);
    setCurrentIndex(index);
  };

  const navigateImage = (direction) => {
    const newIndex = currentIndex + direction;
    if (newIndex >= 0 && newIndex < items.length) {
      setCurrentIndex(newIndex);
      setSelectedImage(items[newIndex].src);
    }
  };
  const ref = useRef(null);

  const scrollBy = useCallback((direction) => {
    const el = ref.current;
    if (!el) return;
    const amount = Math.max(260, Math.round(el.clientWidth * 0.8));
    el.scrollBy({ left: direction * amount, behavior: "smooth" });
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <div
        ref={ref}
        style={{
          display: "flex",
          gap: 14,
          overflowX: "auto",
          padding: "10px 8px",
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {items.map((it, idx) => (
          <div
            key={idx}
            onClick={() => openImage(idx)}
            style={{
              scrollSnapAlign: "start",
              flex: "0 0 auto",
              width: "clamp(210px, 70vw, 280px)",
              height: "clamp(140px, 38vw, 170px)",
              borderRadius: 16,
              border: "1px solid rgba(25,118,210,0.22)",
              background:
                "linear-gradient(135deg,rgba(11,94,215,0.10),rgba(56,189,248,0.10))",
              overflow: "hidden",
              position: "relative",
              cursor: "pointer",
              transition: "transform .2s, box-shadow .2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.02)";
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(11,94,215,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <img
              src={it.src}
              alt={it.alt || ""}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "flex-start",
                padding: 12,
                background:
                  "linear-gradient(180deg,rgba(0,0,0,0) 40%,rgba(11,27,53,0.40) 100%)",
                color: "#fff",
                fontSize: "0.82rem",
                fontWeight: 600,
                letterSpacing: "0.2px",
              }}
            >
              {it.label}
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={() => scrollBy(-1)}
        style={{
          position: "absolute",
          top: "50%",
          left: -6,
          transform: "translateY(-50%)",
          width: 36,
          height: 36,
          borderRadius: 999,
          border: "1px solid rgba(25,118,210,0.22)",
          background: "rgba(248,251,255,0.92)",
          color: "#0b1b35",
          cursor: "pointer",
        }}
      >
        ‹
      </button>
      <button
        type="button"
        onClick={() => scrollBy(1)}
        style={{
          position: "absolute",
          top: "50%",
          right: -6,
          transform: "translateY(-50%)",
          width: 36,
          height: 36,
          borderRadius: 999,
          border: "1px solid rgba(25,118,210,0.22)",
          background: "rgba(248,251,255,0.92)",
          color: "#0b1b35",
          cursor: "pointer",
        }}
      >
        ›
      </button>

      {/* Popup Modal */}
      {selectedImage && (
        <>
          <div
            onClick={() => setSelectedImage(null)}
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
            }}
          />
          <div
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              maxWidth: "90vw",
              maxHeight: "90vh",
              zIndex: 1000,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={selectedImage}
              alt="Preview"
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain",
                borderRadius: 12,
                boxShadow: "0 20px 60px rgba(11,27,53,0.3)",
              }}
            />
            
            {/* Navigation Buttons */}
            {currentIndex > 0 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage(-1);
                }}
                style={{
                  position: "absolute",
                  left: -60,
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: 48,
                  height: 48,
                  borderRadius: 999,
                  border: "1px solid rgba(25,118,210,0.3)",
                  background: "rgba(248,251,255,0.95)",
                  color: "#0b1b35",
                  cursor: "pointer",
                  fontSize: "20px",
                  fontWeight: "bold",
                  transition: "all .2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(25,118,210,0.1)";
                  e.currentTarget.style.transform = "translateY(-50%) scale(1.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(248,251,255,0.95)";
                  e.currentTarget.style.transform = "translateY(-50%) scale(1)";
                }}
              >
                &#8249;
              </button>
            )}
            
            {currentIndex < items.length - 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage(1);
                }}
                style={{
                  position: "absolute",
                  right: -60,
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: 48,
                  height: 48,
                  borderRadius: 999,
                  border: "1px solid rgba(25,118,210,0.3)",
                  background: "rgba(248,251,255,0.95)",
                  color: "#0b1b35",
                  cursor: "pointer",
                  fontSize: "20px",
                  fontWeight: "bold",
                  transition: "all .2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(25,118,210,0.1)";
                  e.currentTarget.style.transform = "translateY(-50%) scale(1.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(248,251,255,0.95)";
                  e.currentTarget.style.transform = "translateY(-50%) scale(1)";
                }}
              >
                &#8250;
              </button>
            )}

            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
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

            {/* Image Counter */}
            <div
              style={{
                position: "absolute",
                bottom: -40,
                left: "50%",
                transform: "translateX(-50%)",
                background: "rgba(248,251,255,0.95)",
                padding: "8px 16px",
                borderRadius: 20,
                fontSize: "14px",
                fontWeight: 600,
                color: "#0b1b35",
                border: "1px solid rgba(25,118,210,0.2)",
              }}
            >
              {currentIndex + 1} / {items.length}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
