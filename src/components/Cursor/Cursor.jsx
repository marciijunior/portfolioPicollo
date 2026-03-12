import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./Cursor.css";

function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;

    const moveCursor = (e) => {
      gsap.to(dot, { x: e.clientX, y: e.clientY, duration: 0.1, ease: "power2.out" });
      gsap.to(ring, { x: e.clientX, y: e.clientY, duration: 0.35, ease: "power2.out" });
    };

    const grow = () => ring.classList.add("cursor__ring--hover");
    const shrink = () => ring.classList.remove("cursor__ring--hover");

    window.addEventListener("mousemove", moveCursor);

    const hoverTargets = document.querySelectorAll("a, button, [role='button'], input, textarea, select, .btn");
    hoverTargets.forEach((el) => {
      el.addEventListener("mouseenter", grow);
      el.addEventListener("mouseleave", shrink);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      hoverTargets.forEach((el) => {
        el.removeEventListener("mouseenter", grow);
        el.removeEventListener("mouseleave", shrink);
      });
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor__dot" />
      <div ref={ringRef} className="cursor__ring" />
    </>
  );
}

export default Cursor;
