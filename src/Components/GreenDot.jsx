import React, { useEffect, useState } from "react";

const GreenDot = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* OUTER RING */}
      <div
        style={{
          position: "fixed",
          top: `${position.y}px`,
          left: `${position.x}px`,
          width: "35px",
          height: "35px",
          borderRadius: "50%",
          border: "2px solid #1AF9FF",
          backgroundColor: "transparent",
          pointerEvents: "none",
          transform: "translate(-50%, -50%)",
          animation: "pulseRing 1.8s infinite",
        }}
      />

      {/* INNER DOT */}
      <div
        style={{
          position: "fixed",
          top: `${position.y}px`,
          left: `${position.x}px`,
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          backgroundColor: "#1AF9FF",
          pointerEvents: "none",
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* KEYFRAMES */}
      <style>
        {`
          @keyframes pulseRing {
            0% {
              transform: translate(-50%, -50%) scale(1);
              opacity: 1;
            }
            70% {
              transform: translate(-50%, -50%) scale(1.4);
              opacity: 0.4;
            }
            100% {
              transform: translate(-50%, -50%) scale(1);
              opacity: 1;
            }
          }
        `}
      </style>
    </>
  );
};

export default GreenDot;
