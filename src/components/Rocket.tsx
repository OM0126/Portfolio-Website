import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Rocket = () => {
  const rocketRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animation = gsap.to(rocketRef.current, {
      y: "110vh",
      ease: "none",
      scrollTrigger: {
        trigger: "#smooth-content",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
    });

    return () => {
      animation.kill();
    };
  }, []);

  return (
    <div
      ref={rocketRef}
      style={{
        position: "fixed",
        top: "-100px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "80px",
        height: "140px",
        zIndex: 9999,
        pointerEvents: "none",
      }}
    >
      <img
        src="/images/rocket.png"
        alt="Rocket"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          transform: "rotate(180deg)",
          filter: "drop-shadow(0 0 15px rgba(255, 100, 0, 0.8))"
        }}
      />
    </div>
  );
};

export default Rocket;
