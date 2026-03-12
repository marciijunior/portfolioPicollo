import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./Hero.css";

function Hero() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      titleRef.current.children,
      { y: 80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.15 },
    )
      .fromTo(
        subtitleRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.4",
      )
      .fromTo(
        ctaRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        "-=0.3",
      );
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" ref={heroRef} className="hero">
      <div className="hero__aurora">
        <div className="aurora-circle aurora-circle--1" />
        <div className="aurora-circle aurora-circle--2" />
        <div className="aurora-circle aurora-circle--3" />
        <div className="aurora-circle aurora-circle--4" />
        <div className="aurora-circle aurora-circle--5" />
        <div className="aurora-circle aurora-circle--6" />
        <div className="aurora-circle aurora-circle--7" />
      </div>
      <div className="hero__blur-layer" />
      <div className="hero__overlay" />
      <div className="hero__content">
        <div ref={titleRef} className="hero__title-wrapper">
          <h1 className="hero__title">Lucas</h1>
          <h1 className="hero__title hero__title--accent">Picollo</h1>
        </div>
        <p ref={subtitleRef} className="hero__subtitle">
          Jornalista &bull; Videorrepórter &bull; Comentarista Esportivo
        </p>
        <div ref={ctaRef} className="hero__cta">
          <button
            className="btn btn--primary"
            onClick={() => scrollTo("portfolio")}
          >
            Ver Trabalhos
          </button>
          <button
            className="btn btn--outline"
            onClick={() => scrollTo("contact")}
          >
            Contato
          </button>
        </div>
      </div>
      <div className="hero__scroll-indicator">
        <span>Scroll</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
}

export default Hero;
