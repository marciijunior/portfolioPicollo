import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Cursor from "./components/Cursor/Cursor";
import "./App.css";

gsap.registerPlugin(ScrollTrigger);

const GOLD_SELECTORS = [
  ".hero__title--accent",
  ".about__tag",
  ".about__title--accent",
  ".about__stat-number",
  ".contact__tag",
  ".contact__heading--accent",
  ".experience__tag",
  ".experience__heading--accent",
  ".timeline__year",
  ".portfolio__tag",
  ".portfolio__heading--accent",
  ".work-card__category",
];

function App() {
  useEffect(() => {
    // Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    // Add gold-shine class + create ScrollTriggers for each gold element
    const triggers = [];
    document.querySelectorAll(GOLD_SELECTORS.join(",")).forEach((el) => {
      el.classList.add("gold-shine");
      const st = ScrollTrigger.create({
        trigger: el,
        start: "top 90%",
        onEnter: () => {
          el.classList.remove("gold-shine--active");
          void el.offsetWidth;
          el.classList.add("gold-shine--active");
        },
        onEnterBack: () => {
          el.classList.remove("gold-shine--active");
          void el.offsetWidth;
          el.classList.add("gold-shine--active");
        },
      });
      triggers.push(st);
    });

    ScrollTrigger.refresh();

    return () => {
      triggers.forEach((st) => st.kill());
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Cursor />
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
