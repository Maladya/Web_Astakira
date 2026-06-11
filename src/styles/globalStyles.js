const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

  :root {
    --font-sans: 'Plus Jakarta Sans', system-ui, -apple-system, 'Segoe UI', sans-serif;
    --font-heading: 'Plus Jakarta Sans', system-ui, -apple-system, 'Segoe UI', sans-serif;
    --font-mono: 'JetBrains Mono', ui-monospace, SFMono-Regular, monospace;

    --navy: #0a1628;
    --deep-blue: #0d2b55;
    --brand-blue: #0b5ed7;
    --electric-blue: #3b82f6;
    --sky-accent: #60a5fa;
    --off-white: #f8faff;
    --true-white: #ffffff;
    --ghost-white: #eef2ff;
    --cyan: #06b6d4;
    --gold: #f59e0b;

    --container-max: 1400px;
    --container-pad: 24px;
    --section-pad-y: 96px;
    --radius-lg: 28px;
    --radius-md: 18px;
    --radius-sm: 14px;
    --line: rgba(59, 130, 246, 0.14);
    --line-strong: rgba(59, 130, 246, 0.32);
    --shadow-soft: 0 18px 50px rgba(10, 22, 40, 0.08);
    --shadow-deep: 0 28px 70px rgba(10, 22, 40, 0.16);
  }

  @media (max-width: 1024px) {
    :root {
      --container-pad: 20px;
      --section-pad-y: 80px;
    }
  }

  @media (max-width: 640px) {
    :root {
      --container-pad: 16px;
      --section-pad-y: 64px;
    }
  }

  *, *::before, *::after { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body {
    margin: 0;
    font-family: var(--font-sans);
    color: #0b1b35;
    background:
      radial-gradient(1200px 700px at 12% 0%, rgba(59, 130, 246, 0.17), transparent 60%),
      radial-gradient(900px 560px at 88% 8%, rgba(11, 94, 215, 0.12), transparent 55%),
      linear-gradient(180deg, #fbfdff 0%, #f8fbff 100%);
    overflow-x: hidden;
  }

  body::before {
    content: '';
    position: fixed;
    inset: 0;
    pointer-events: none;
    opacity: 0.06;
    background-image:
      linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px);
    background-size: 44px 44px;
    mask-image: radial-gradient(circle at center, black 48%, transparent 88%);
    -webkit-mask-image: radial-gradient(circle at center, black 48%, transparent 88%);
    z-index: 0;
  }

  #root {
    position: relative;
    z-index: 1;
    min-height: 100vh;
  }

  h1, h2, h3, h4 {
    font-family: var(--font-heading);
    margin: 0;
    color: #081a33;
  }

  p {
    margin: 0;
  }

  a {
    color: var(--brand-blue);
  }

  a:hover {
    color: var(--electric-blue);
  }

  ::selection {
    background: rgba(11, 94, 215, 0.18);
  }

  .ui-shell {
    max-width: var(--container-max);
    margin: 0 auto;
    padding: 0 var(--container-pad);
  }

  .section-pad {
    padding: var(--section-pad-y) 0;
  }

  .surface-card {
    background: rgba(255, 255, 255, 0.76);
    border: 1px solid rgba(59, 130, 246, 0.14);
    border-radius: 18px;
    box-shadow: var(--shadow-soft);
    backdrop-filter: blur(12px);
  }

  .feature-card {
    position: relative;
    background: linear-gradient(180deg, rgba(255,255,255,0.92), rgba(255,255,255,0.72));
    border: 1px solid rgba(59, 130, 246, 0.18);
    border-radius: 22px;
    box-shadow: var(--shadow-soft);
  }

  .glass-card {
    background: rgba(10, 22, 40, 0.72);
    border: 1px solid rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(12px);
  }

  .label-mono {
    font-family: var(--font-mono);
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  .reveal {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.65s ease, transform 0.65s ease;
  }

  .reveal.is-visible {
    opacity: 1;
    transform: translateY(0);
  }

  .reveal.stagger-1 { transition-delay: 0.08s; }
  .reveal.stagger-2 { transition-delay: 0.16s; }
  .reveal.stagger-3 { transition-delay: 0.24s; }

  .section-split {
    display: grid;
    gap: 24px;
  }

  @media (min-width: 980px) {
    .section-split.two-col {
      grid-template-columns: 0.95fr 1.05fr;
      align-items: start;
    }
    .section-split.reverse {
      grid-template-columns: 1.05fr 0.95fr;
    }
  }

  .underline-link {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    text-decoration: none;
    font-weight: 600;
  }

  .underline-link::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -3px;
    width: 100%;
    height: 1px;
    background: currentColor;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.25s ease;
  }

  .underline-link:hover::after {
    transform: scaleX(1);
  }

  .focus-ring:focus-visible {
    outline: 2px solid rgba(11, 94, 215, 0.8);
    outline-offset: 3px;
  }

  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;

export default globalStyles;
