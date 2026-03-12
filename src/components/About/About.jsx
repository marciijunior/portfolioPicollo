import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./About.css";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about__tag",
        { x: -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        },
      );

      gsap.fromTo(
        ".about__title",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        },
      );

      gsap.fromTo(
        ".about__text",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 65%",
          },
        },
      );

      gsap.fromTo(
        ".about__image-wrapper",
        { scale: 0.9, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        },
      );

      gsap.fromTo(
        ".about__stat",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          scrollTrigger: {
            trigger: ".about__stats",
            start: "top 85%",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="about">
      <div className="about__container">
        <div className="about__grid">
          <div className="about__image-wrapper">
            <img
              src="/assets/foto_titulo.webp"
              alt="Lucas Picollo"
              className="about__image"
            />
            <div className="about__image-border" />
          </div>
          <div className="about__content">
            <span className="about__tag">Sobre mim</span>
            <h2 className="about__title">
              Contando histórias que <br />
              <span className="about__title--accent">importam</span>
            </h2>
            <p className="about__text">
              Meu nome é Lucas Picollo, tenho 22 anos. Sou jornalista desde o
              início de 2025, e já atuo na área desde junho de 2023. Comecei
              minha jornada profissional como estagiário no SBT Interior de
              Araçatuba, cidade onde nasci e fui criado.
            </p>
            <p className="about__text">
              Ao fim do estágio, fui contratado, e hoje sou videorrepórter pela
              emissora. Minha experiência no SBT me abriu portas em outros
              veículos de comunicação, como rádio e emissoras que transmitem
              futebol — esporte pelo qual sou apaixonado.
            </p>
            <p className="about__text">
              Atuo também como comentarista esportivo credenciado pela Federação
              Paulista de Futebol, cobrindo partidas do Paulistão e eventos
              regionais. Minha missão é levar informação de qualidade com
              humanidade e verdade.
            </p>
          </div>
        </div>
        <div className="about__stats">
          <div className="about__stat">
            <span className="about__stat-number">3+</span>
            <span className="about__stat-label">Anos de experiência</span>
          </div>
          <div className="about__stat">
            <span className="about__stat-number">500+</span>
            <span className="about__stat-label">Reportagens produzidas</span>
          </div>
          <div className="about__stat">
            <span className="about__stat-number">4+</span>
            <span className="about__stat-label">Veículos de comunicação</span>
          </div>
          <div className="about__stat">
            <span className="about__stat-number">50+</span>
            <span className="about__stat-label">Entradas ao vivo</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
