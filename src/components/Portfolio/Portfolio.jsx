import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Portfolio.css";

gsap.registerPlugin(ScrollTrigger);

const works = [
  {
    id: "sbt-interior",
    category: "Televisão Regional",
    title: "SBT Interior",
    description:
      "Meus primeiros trabalhos como jornalista foram ainda durante meu estágio no SBT Interior, quando precisei substituir repórteres em algumas ocasiões. Fui contratado ao fim do estágio e hoje atuo como videorrepórter, produzindo pautas, gravando e editando matérias para o telejornal diário.",
    image: "/assets/img_sbt.webp",
    videos: [
      {
        url: "https://www.youtube.com/embed/ngpS6viP6OM?si=fn1xOUUq9QYJQ8bX&start=80",
        desc: "Birigui-SP inaugurou um serviço de atendimento para pacientes com sintomas de dengue devido ao aumento alarmante de casos. A cidade já registrou mais de 1000 casos e uma morte confirmada.",
      },
      {
        url: "https://www.youtube.com/embed/ui17vDskaqQ?si=MRZJ_DzO34uHHSBP&start=29",
        desc: "A cerimônia do sino no Hospital do Amor simboliza a vitória dos pacientes que completaram o tratamento contra o câncer, trazendo esperança e emoção.",
      },
      {
        url: "https://www.youtube.com/embed/_rbBdrxzFUQ?si=k3X79L7mwKM3WUuW&start=10",
        desc: "A UNESP de Araçatuba promove uma campanha de prevenção ao câncer de boca, com avaliação bucal gratuita e orientações sobre fatores de risco.",
      },
      {
        url: "https://www.youtube.com/embed/U1Jq-a9yXl4?si=d1ibXFu10Hmbu2bo&start=29",
        desc: "Cobertura completa sobre o tratamento humanizado do câncer no Hospital do Amor, proporcionando apoio emocional durante a recuperação.",
      },
    ],
  },
  {
    id: "sbt-nacional",
    category: "Televisão Nacional",
    title: "SBT Nacional",
    description:
      "Um dos momentos mais marcantes da minha trajetória foi aparecer em rede nacional. A reportagem que produzi ganhou destaque e foi exibida em telejornais do SBT, ampliando meu alcance profissional. Ver meu trabalho compartilhado para todo o país reforçou minha paixão pelo jornalismo.",
    image: "/assets/img_sbt2.webp",
    videos: [
      {
        url: "https://www.youtube.com/embed/RiEi3WCU2y8?si=rIkTe_vqgi6kjyhf&start=1339",
        desc: "Matéria exibida no programa SBT Agro em âmbito nacional. (Reportagem no minuto 21:25)",
      },
      {
        url: "https://www.youtube.com/embed/2xr4TgWSDhA?si=Cre7e4Fs6lacm-Cm&start=12",
        desc: "Entrada ao vivo para todo o Brasil no Primeiro Impacto, um dos principais jornais do SBT, cobrindo um caso policial em Birigui.",
      },
    ],
  },
  {
    id: "cultura-fm",
    category: "Rádio",
    title: "Cultura FM 95,5",
    description:
      "Trabalhei por quase um ano na rádio de maior audiência de Araçatuba. Desempenhei várias funções: repórter, operador de som e apresentador de programas jornalísticos, cobrindo desde política local até grandes eventos regionais.",
    image: "/assets/img_sbt3.webp",
    videos: [
      {
        url: "https://www.youtube.com/embed/ANQyCC_MqdE?si=0jKCI_oeFlcAk_sf",
        desc: "Reportagem sobre a operação de Ano Novo da Polícia Rodoviária, com balanço de 9 acidentes na região de Araçatuba.",
      },
      {
        url: "https://www.youtube.com/embed/NojmSUxXJeg?si=gPbYPcr2AyD6BREF",
        desc: "Transmissão ao vivo da Câmara Municipal de Araçatuba, cobrindo sessão extraordinária.",
      },
    ],
  },
  {
    id: "fpf",
    category: "Esporte",
    title: "Federação Paulista de Futebol",
    description:
      "Por mais de um ano, fui comentarista esportivo oficial da Federação Paulista de Futebol durante os jogos da Associação Esportiva Araçatuba no Paulistão 2024 e 2025, trazendo análises táticas e cobertura completa das partidas.",
    image: "/assets/img_sbt4.webp",
    videos: [
      {
        url: "https://www.youtube.com/embed/0hCu64m0vOA?si=dmvjcrl4XVpRTeGA",
        desc: "Cobertura do confronto decisivo para as quartas de final do Paulistão 2024 sub-23, no Estádio Ademar de Barros.",
      },
    ],
  },
];

function Portfolio() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".portfolio__tag",
        { x: -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        },
      );

      gsap.fromTo(
        ".portfolio__heading",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        },
      );

      document.querySelectorAll(".work-card").forEach((card) => {
        gsap.fromTo(
          card,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            scrollTrigger: { trigger: card, start: "top 85%" },
          },
        );
      });

      document.querySelectorAll(".video-item").forEach((item) => {
        gsap.fromTo(
          item,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            scrollTrigger: { trigger: item, start: "top 90%" },
          },
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="portfolio" ref={sectionRef} className="portfolio">
      <div className="portfolio__container">
        <span className="portfolio__tag">Portfólio</span>
        <h2 className="portfolio__heading">
          Trabalhos em{" "}
          <span className="portfolio__heading--accent">destaque</span>
        </h2>

        {works.map((work, idx) => (
          <article
            key={work.id}
            className={`work-card ${idx % 2 !== 0 ? "work-card--reverse" : ""}`}
          >
            <div className="work-card__header">
              <span className="work-card__category">{work.category}</span>
              <h3 className="work-card__title">{work.title}</h3>
              <p className="work-card__description">{work.description}</p>
            </div>

            <div className="work-card__videos">
              {work.videos.map((video, vIdx) => (
                <div key={vIdx} className="video-item">
                  <div className="video-item__frame">
                    <iframe
                      src={video.url}
                      title={`${work.title} - Video ${vIdx + 1}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                  <p className="video-item__desc">{video.desc}</p>
                </div>
              ))}
            </div>

            <div className="work-card__divider" />
          </article>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
