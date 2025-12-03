import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { motion } from "framer-motion";

export default function ParticlesBackground({
  zIndex = 0,
  density = 60,
  color = "#5C5CFF",
  interactive = false,
}) {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <motion.div
      aria-hidden
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      style={{ position: "fixed", inset: 0, zIndex, pointerEvents: "none" }}
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: { value: "transparent" } },
          fpsLimit: 60,
          detectRetina: true,
          particles: {
            number: { value: density, density: { enable: true, area: 800 } },
            color: { value: color },
            links: {
              enable: true,
              color,
              distance: 130,
              opacity: 0.35,
              width: 1,
            },
            move: { enable: true, speed: 0.6, outModes: { default: "out" } },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
          },
          interactivity: {
            events: {
              onHover: { enable: interactive, mode: "repulse" },
              onClick: { enable: interactive, mode: "push" },
              resize: true,
            },
            modes: { repulse: { distance: 100 }, push: { quantity: 4 } },
          },
        }}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
        }}
      />
    </motion.div>
  );
}
