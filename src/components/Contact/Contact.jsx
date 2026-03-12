import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaEnvelope,
} from "react-icons/fa";
import "./Contact.css";

gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact__tag",
        { x: -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        },
      );

      gsap.fromTo(
        ".contact__heading",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        },
      );

      gsap.fromTo(
        ".contact__card",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          scrollTrigger: { trigger: ".contact__grid", start: "top 85%" },
        },
      );

      gsap.fromTo(
        ".contact__cta",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: { trigger: ".contact__cta", start: "top 90%" },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="contact">
      <div className="contact__container">
        <span className="contact__tag">Contato</span>
        <h2 className="contact__heading">
          Vamos <span className="contact__heading--accent">conversar</span>
        </h2>
        <p className="contact__subtitle">
          Disponível para coberturas jornalísticas, freelas, parcerias e novos
          desafios. Entre em contato através das redes ou envie um e-mail.
        </p>

        <div className="contact__grid">
          <a
            href="https://www.instagram.com/marciijunior/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact__card"
          >
            <div className="contact__card-icon">
              <FaInstagram />
            </div>
            <h3 className="contact__card-title">Instagram</h3>
            <p className="contact__card-handle">@marciijunior</p>
          </a>

          <a
            href="https://www.linkedin.com/in/marciijunior"
            target="_blank"
            rel="noopener noreferrer"
            className="contact__card"
          >
            <div className="contact__card-icon">
              <FaLinkedinIn />
            </div>
            <h3 className="contact__card-title">LinkedIn</h3>
            <p className="contact__card-handle">/in/marciijunior</p>
          </a>

          <a
            href="https://github.com/marciijunior"
            target="_blank"
            rel="noopener noreferrer"
            className="contact__card"
          >
            <div className="contact__card-icon">
              <FaYoutube />
            </div>
            <h3 className="contact__card-title">YouTube</h3>
            <p className="contact__card-handle">Canal pessoal</p>
          </a>

          <a href="mailto:contato@lucaspicollo.com" className="contact__card">
            <div className="contact__card-icon">
              <FaEnvelope />
            </div>
            <h3 className="contact__card-title">E-mail</h3>
            <p className="contact__card-handle">contato@lucaspicollo.com</p>
          </a>
        </div>

        <div className="contact__cta">
          <p className="contact__cta-text">
            &ldquo;O bom jornalismo é aquele que faz a diferença na vida das
            pessoas.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
