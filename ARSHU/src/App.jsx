
import { useState } from "react";
import { Menu, X, ArrowUpRight, Instagram } from "lucide-react";

const navigation = [
  "Home",
  "Collections",
  "Projects",
  "Sketches",
  "About",
  "Contact"
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      <header className="navbar">
        <a href="#home" className="brand">
          ARSHU<span>.</span>
          <small>DESIGNER ATELIER</small>
        </a>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {navigation.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </nav>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <section className="hero" id="home">
        <div className="hero-overlay" />

        <div className="hero-content">
          <p className="eyebrow">CONTEMPORARY FASHION · INDIAN CRAFT</p>
          <h1>
            Where heritage
            <br />
            meets <em>the future.</em>
          </h1>
          <p className="hero-description">
            A contemporary designer atelier exploring the connection
            between Indian craftsmanship and modern fashion.
          </p>
          <a href="#collections" className="gold-button">
            EXPLORE THE ATELIER <ArrowUpRight size={17} />
          </a>
        </div>

        <div className="hero-bottom">
          <span>EST. ARSHU DESIGNER ATELIER</span>
          <span>INDIA · WORLDWIDE</span>
        </div>
      </section>

      <section className="intro section-padding">
        <p className="eyebrow">THE ATELIER</p>
        <h2>
          Fashion is an expression of
          <br />
          <em>culture, identity and imagination.</em>
        </h2>
        <p>
          ARSHU brings together traditional Indian craftsmanship,
          thoughtful silhouettes and contemporary design to create
          a distinctive fashion language.
        </p>
      </section>

      <section className="collections section-padding" id="collections">
        <div className="section-heading">
          <div>
            <p className="eyebrow">CURATED DESIGN</p>
            <h2>Explore the <em>Collections</em></h2>
          </div>
          <span>01 — 03</span>
        </div>

        <div className="collection-grid">
          <a href="#indo-western" className="collection-card">
            <div className="collection-image image-one" />
            <div className="collection-caption">
              <div>
                <h3>Indo-Western</h3>
                <p>Tradition, reimagined</p>
              </div>
              <ArrowUpRight />
            </div>
          </a>

          <a href="#ethnic-wear" className="collection-card">
            <div className="collection-image image-two" />
            <div className="collection-caption">
              <div>
                <h3>Ethnic Wear</h3>
                <p>Crafted with heritage</p>
              </div>
              <ArrowUpRight />
            </div>
          </a>

          <a href="#western-wear" className="collection-card">
            <div className="collection-image image-three" />
            <div className="collection-caption">
              <div>
                <h3>Western Wear</h3>
                <p>Modern expressions</p>
              </div>
              <ArrowUpRight />
            </div>
          </a>
        </div>
        <p className="demo-note">
          Collection visuals are temporary design placeholders. Your
          own uploaded collection images will replace them.
        </p>
      </section>

      <section className="manifesto section-padding">
        <p className="eyebrow">OUR DESIGN PHILOSOPHY</p>
        <h2>
          Rooted in heritage.
          <br />
          Designed for <em>tomorrow.</em>
        </h2>
        <a href="#about" className="text-link">
          DISCOVER THE STORY <ArrowUpRight size={16} />
        </a>
      </section>

      <section className="about section-padding" id="about">
        <p className="eyebrow">BEHIND THE ATELIER</p>
        <h2>Meet the <em>Designer</em></h2>
        <p>
          ARSHU is the creative vision of Harsh Chandegara,
          focused on bringing Indian craftsmanship into
          contemporary fashion.
        </p>
      </section>

      <footer id="contact">
        <div className="footer-main">
          <div>
            <a href="#home" className="brand footer-brand">
              ARSHU<span>.</span>
              <small>DESIGNER ATELIER</small>
            </a>
            <p>Where heritage meets the future.</p>
          </div>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <Instagram size={17} /> INSTAGRAM <ArrowUpRight size={15} />
          </a>
        </div>
        <div className="footer-bottom">
          <span>© 2026 ARSHU DESIGNER ATELIER</span>
          <span>DESIGNED WITH INTENTION.</span>
        </div>
      </footer>
    </main>
  );
}
