import React, { useEffect, useState } from "react";

const GreenDot = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Mousemove event to track the mouse position
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    // Add event listener on mount
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: `${position.y}px`,
        left: `${position.x}px`,
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        backgroundColor: "#1AF9FF",
        pointerEvents: "none", // Prevent the dot from interacting with other elements
        transition: "transform 0.1s ease", // Smooth follow effect
        transform: "translate(-50%, -50%)", // Center the dot on the cursor
      }}
    />
  );
};

export default GreenDot;
