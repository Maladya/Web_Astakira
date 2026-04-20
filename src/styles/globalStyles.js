const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300..800;1,300..800&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  :root {
    --font-sans: 'Plus Jakarta Sans', system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif;
    --font-heading: 'Plus Jakarta Sans', system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif;

    --container-max: 1100px;
    --container-pad: 24px;
    --section-pad-y: 72px;

    --btn-pad: 14px 32px;
    --btn-font: 0.95rem;

    --nav-gap: 28px;
    --nav-font: 0.88rem;
  }
  @media (max-width: 860px) {
    :root {
      --container-pad: 18px;
      --section-pad-y: 56px;

      --btn-pad: 12px 20px;
      --btn-font: 0.90rem;

      --nav-gap: 18px;
      --nav-font: 0.86rem;
    }
  }
  @media (max-width: 520px) {
    :root {
      --container-pad: 14px;
      --section-pad-y: 44px;

      --btn-pad: 11px 16px;
      --btn-font: 0.86rem;

      --nav-gap: 14px;
      --nav-font: 0.84rem;
    }
  }

  html { scroll-behavior: smooth; }
  body {
    font-family: var(--font-sans);
    background: radial-gradient(1200px 600px at 20% 0%, rgba(56,189,248,0.20), transparent 60%),
                radial-gradient(900px 500px at 90% 10%, rgba(11,94,215,0.16), transparent 55%),
                #f8fbff;
    color: #0b1b35;
    overflow-x: hidden;
    cursor: crosshair;
  }

  a { color: #0b5ed7; }
  a:hover { color: #2563eb; }
  ::selection { background: rgba(11,94,215,0.18); }

  h1, h2, h3 {
    font-family: var(--font-heading);
    color: #081a33;
    letter-spacing: -0.8px;
  }
  p { color: rgba(11,27,53,0.72); }

  .ui-surface {
    background: rgba(255,255,255,0.80);
    border: 1px solid rgba(25,118,210,0.20);
    backdrop-filter: blur(12px);
  }

  .nav-links {
    display: flex;
    gap: var(--nav-gap);
    align-items: center;
    flex-wrap: wrap;
    justify-content: flex-end;
  }
  .nav-link {
    font-size: var(--nav-font);
  }
  @media (max-width: 520px) {
    .nav-links {
      gap: 10px;
    }
  }

  .members-grid-head,
  .members-grid-row {
    display: grid;
    grid-template-columns: 120px 1.4fr 1fr 200px;
    align-items: center;
  }
  @media (max-width: 860px) {
    .members-grid-head {
      display: none;
    }
    .members-grid-row {
      grid-template-columns: 88px 1fr;
      grid-template-areas:
        "foto nama"
        "foto jabatan"
        "foto sosial";
      row-gap: 8px;
      column-gap: 14px;
      align-items: start;
    }
    .members-cell-foto { grid-area: foto; }
    .members-cell-nama { grid-area: nama; }
    .members-cell-jabatan { grid-area: jabatan; }
    .members-cell-sosial { grid-area: sosial; }
  }

  .member-cards-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 16px;
  }
  .member-card--featured {
    grid-column: 1 / -1;
    width: min(320px, 100%);
    justify-self: center;
  }
  @media (max-width: 1024px) {
    .member-cards-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .member-card--featured {
      grid-column: 1 / -1;
      width: min(320px, 100%);
      justify-self: center;
    }
  }
  @media (max-width: 520px) {
    .member-cards-grid {
      grid-template-columns: 1fr;
    }
    .member-card--featured {
      width: 100%;
    }
  }
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.2} }
  @keyframes marquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }
  @keyframes pulse { 0%,100%{box-shadow:0 0 0 0 rgba(124,92,252,0.4)} 50%{box-shadow:0 0 0 12px rgba(124,92,252,0)} }

  .floater-clone {
    position: fixed !important;
    pointer-events: none !important;
    will-change: transform;
    z-index: 8000;
    margin: 0 !important;
  }
`;

export default globalStyles;
