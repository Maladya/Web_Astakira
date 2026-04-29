import Button from "../components/Button";
import PhotoScroller from "../components/PhotoScroller";

export default function Produk() {
  const wrap = {
    maxWidth: "var(--container-max)",
    margin: "0 auto",
    padding: "var(--section-pad-y) var(--container-pad)",
  };

  const sectionCard = {
    borderRadius: 22,
    padding: 24,
    marginTop: 28,
  };

  const title = {
    fontFamily: "var(--font-heading)",
    fontSize: "1.4rem",
    fontWeight: 900,
    letterSpacing: "-0.7px",
    marginBottom: 8,
    color: "#081a33",
  };

  const subtitle = {
    color: "rgba(11,27,53,0.68)",
    lineHeight: 1.7,
    marginBottom: 16,
    maxWidth: 780,
  };

  const buttonLinkStyle = { textDecoration: "none", display: "inline-flex" };

  const mycafeItems = [
    { src: "/images/mycafe/1.png"},
    { src: "/images/mycafe/2.png"},
    { src: "/images/mycafe/3.png"},
    { src: "/images/mycafe/4.png"},
  ];
  const asblancItems = [
    { src: "/images/asblanc/1.png"},
    { src: "/images/asblanc/2.png"},
    { src: "/images/asblanc/3.png"},
    { src: "/images/asblanc/4.png"},
  ];
  const menucafeItems = [
    { src: "/images/menucafe/1.png"},
    { src: "/images/menucafe/2.png"},
    { src: "/images/menucafe/3.png"},
    { src: "/images/menucafe/4.png"},
  ];

  const Section = ({ heading, desc, href, items }) => (
    <div className="ui-surface" style={sectionCard}>
      <div style={title}>{heading}</div>
      <div style={subtitle}>{desc}</div>

      <PhotoScroller items={items} />

      <div style={{ marginTop: 18 }}>
        <a href={href} target="_blank" rel="noreferrer" style={buttonLinkStyle}>
          <Button variant="primary">pergi ke halamannya</Button>
        </a>
      </div>
    </div>
  );

  return (
    <div style={wrap}>
      <div
        style={{
          fontFamily: "var(--font-heading)",
          fontSize: "clamp(2rem,4vw,3rem)",
          fontWeight: 900,
          letterSpacing: "-1.5px",
          marginBottom: 12,
        }}
      >
        Produk
      </div>
      <p style={{ color: "rgba(11,27,53,0.72)", maxWidth: 680, lineHeight: 1.7 }}>
       Dirancang dengan standar tinggi untuk menciptakan pengalaman digital yang elegan, cepat, dan berdampak.
      </p>

      <Section
        heading="Mycafe"
        href="https://www.mycafe-order.net/"
        items={mycafeItems}
      />

      <Section
        heading="As Blanc"
        href="https://cafe-asblanc.mycafe-order.net/"
        items={asblancItems}
      />
    </div>
  );
}
