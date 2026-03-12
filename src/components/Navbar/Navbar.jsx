import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import "./Navbar.css";

function Navbar() {
  const navRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
    );

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      ref={navRef}
      className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}
    >
      <div className="navbar__container">
        <a
          className="navbar__logo"
          href="#hero"
          onClick={() => scrollTo("hero")}
        >
          LP<span className="navbar__logo-dot">.</span>
        </a>
        <button
          className={`navbar__hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </button>
        <ul
          className={`navbar__links ${menuOpen ? "navbar__links--open" : ""}`}
        >
          <li>
            <button onClick={() => scrollTo("about")}>Sobre</button>
          </li>
          <li>
            <button onClick={() => scrollTo("portfolio")}>Trabalhos</button>
          </li>
          <li>
            <button onClick={() => scrollTo("experience")}>Experiência</button>
          </li>
          <li>
            <button onClick={() => scrollTo("contact")}>Contato</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
