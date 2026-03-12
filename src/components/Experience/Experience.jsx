import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Experience.css";

gsap.registerPlugin(ScrollTrigger);

const timeline = [
  {
    year: "2023",
    title: "Estagiário — SBT Interior",
    desc: "Início da jornada no jornalismo televisivo. Atuei como estagiário no SBT Interior de Araçatuba, auxiliando na produção de reportagens e aprendendo os fundamentos da comunicação audiovisual.",
  },
  {
    year: "2024",
    title: "Videorrepórter — SBT Interior",
    desc: "Contratado como videorrepórter após o estágio. Responsável por pautar, gravar, editar e apresentar matérias para o telejornal regional, incluindo entradas ao vivo.",
  },
  {
    year: "2024",
    title: "Repórter — Cultura FM 95,5",
    desc: "Atuei na rádio de maior audiência de Araçatuba como repórter, operador de som e apresentador de programas jornalísticos, expandindo minha experiência para o rádio.",
  },
  {
    year: "2024",
    title: "Comentarista — Federação Paulista de Futebol",
    desc: "Credenciado como comentarista esportivo oficial da FPF durante os jogos da Associação Esportiva Araçatuba no Paulistão, com análises táticas ao vivo.",
  },
  {
    year: "2025",
    title: "Repórter Nacional — SBT",
    desc: "Reportagens exibidas em rede nacional no Primeiro Impacto e SBT Agro, com entradas ao vivo para todo o Brasil cobrindo casos de grande repercussão.",
  },
  {
    year: "2025",
    title: "Freelancer — Cobertura de Eventos",
    desc: "Cobertura jornalística independente de eventos esportivos, culturais e corporativos na região noroeste paulista, incluindo produção de conteúdo para redes sociais.",
  },
];

const skills = [
  "Reportagem de campo",
  "Edição de vídeo",
  "Apresentação ao vivo",
  "Produção de pauta",
  "Comentário esportivo",
  "Operação de câmera",
  "Narração e locução",
  "Redes sociais",
];

function Experience() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".experience__tag",
        { x: -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        },
      );

      gsap.fromTo(
        ".experience__heading",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        },
      );

      document.querySelectorAll(".timeline__item").forEach((item) => {
        gsap.fromTo(
          item,
          { x: -40, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.7,
            scrollTrigger: { trigger: item, start: "top 85%" },
          },
        );
      });

      gsap.fromTo(
        ".skill-tag",
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.4,
          stagger: 0.06,
          scrollTrigger: {
            trigger: ".experience__skills",
            start: "top 85%",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="experience">
      <div className="experience__container">
        <span className="experience__tag">Trajetória</span>
        <h2 className="experience__heading">
          Experiência{" "}
          <span className="experience__heading--accent">profissional</span>
        </h2>

        <div className="experience__grid">
          <div className="timeline">
            {timeline.map((item, idx) => (
              <div key={idx} className="timeline__item">
                <div className="timeline__marker">
                  <span className="timeline__dot" />
                  {idx < timeline.length - 1 && (
                    <span className="timeline__line" />
                  )}
                </div>
                <div className="timeline__content">
                  <span className="timeline__year">{item.year}</span>
                  <h3 className="timeline__title">{item.title}</h3>
                  <p className="timeline__desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="experience__skills">
            <h3 className="experience__skills-title">Habilidades</h3>
            <div className="experience__skills-grid">
              {skills.map((skill, idx) => (
                <span key={idx} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
