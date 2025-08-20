import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import {
  FaUsers,
  FaLightbulb,
  FaBrain,
  FaSyncAlt,
  FaComments,
  FaClock,
  FaBolt
} from "react-icons/fa";

// Import your skill images from assets
import html5 from "../assets/html.png";
import css3 from "../assets/css.png";
import tailwind from "../assets/tailwind.png";
import js from "../assets/javaScript.png";
import react from "../assets/react2.png";
import firebase from "../assets/firebase.png";
import express from "../assets/express.png";
import nodejs from "../assets/node.png";
import mongo from "../assets/mongo.png";
import daisyui from "../assets/daisyui.jpeg";
import jwt from "../assets/JWT.png";
import aftereffects from "../assets/after.png";
import python from "../assets/python.jpeg";
import Lottie from "lottie-react";

const skills = [
  { name: "HTML5", img: html5 },
  { name: "CSS3", img: css3 },
  { name: "TailwindCSS", img: tailwind },
  { name: "JavaScript", img: js },
  { name: "React", img: react },
  { name: "Firebase", img: firebase },
  { name: "Express.js", img: express },
  { name: "Node.js", img: nodejs },
  { name: "MongoDB", img: mongo },
  { name: "DaisyUI", img: daisyui },
  { name: "JWT", img: jwt },
  { name: "Af Effects", img: aftereffects },
  { name: "Python", img: python }
];

const softSkills = [
  { name: "Teamwork", icon: <FaUsers /> },
  { name: "Leadership", icon: <FaLightbulb /> },
  { name: "Critical Thinking", icon: <FaBrain /> },
  { name: "Adaptability", icon: <FaSyncAlt /> },
  { name: "Communication", icon: <FaComments /> },
  { name: "Punctuality", icon: <FaClock /> },
  { name: "Quick Learner", icon: <FaBolt /> }
];



const Skills = () => {
   const [speed, setSpeed] = useState(15);

    useEffect(() => {
    const updateSpeed = () => {
      if (window.innerWidth < 640) {
        setSpeed(1); // 🔥 faster on small devices
      } else if (window.innerWidth < 1024) {
        setSpeed(12);
      } else {
        setSpeed(18); // default for large screens
      }
    };

    updateSpeed();
    window.addEventListener("resize", updateSpeed);
    return () => window.removeEventListener("resize", updateSpeed);
  }, []);


  return (
    <section
      id="skills"
      className="bg-[var(--color-primary)]  py-12 px-6 md:px-20 font-bricolage text-white"
    >
      {/* Heading */}
      <div className="flex justify-center items-center gap-8 mb-20 flex-wrap">
     
        <motion.div
          className="chat chat-start"
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="chat-bubble bg-[var(--color-secondary)] opacity-70 text-white font-semibold shadow-lg px-5 py-3 rounded-lg max-w-xs">
            A Developer
          </div>
        </motion.div>

        <motion.h2
          className="text-4xl font-bold text-[var(--color-secondary)] text-center whitespace-nowrap"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          My Skills
        </motion.h2>

        <motion.div
          className="chat chat-end"
          initial={{ x: 30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="chat-bubble bg-[var(--color-secondary)] opacity-70 text-white font-semibold shadow-lg px-5 py-3 rounded-lg max-w-xs">
            An Engineer
          </div>
        </motion.div>
      </div>

      {/* Technical Skills Marquee */}
      <div className="relative w-full overflow-hidden mb-20">
        {/* Fade mask left & right */}
        <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-[var(--color-primary)] to-transparent z-10" />
        <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-[var(--color-primary)] to-transparent z-10" />

        <motion.div
          className="flex gap-0 sm:gap-5 items-center"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror", // goes left & right
            duration: 15,
            ease: "linear"
          }}
          style={{ willChange: "transform" }}
        >
          {[...skills, ...skills].map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center min-w-[120px] cursor-pointer group"
              whileHover={{ scale: 1.15 }}
              transition={{ type: "spring", stiffness: 250 }}
            >
              <div className="relative">
                <img
                  src={skill.img}
                  alt={skill.name}
                  className="w-20 h-20 rounded-xl object-contain mb-3 shadow-lg group-hover:shadow-sky-500/40 transition duration-300"
                />
                <div className="absolute inset-0 rounded-xl bg-sky-500/20 opacity-0 group-hover:opacity-100 blur-md transition duration-300" />
              </div>
              <span className="text-white font-semibold text-lg tracking-wide group-hover:text-sky-400 transition">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Soft Skills Section */}
      <div className="mt-20">
        <motion.h3
          className="text-3xl font-bold text-center text-[var(--color-secondary)] mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          🌟 Soft Skills
        </motion.h3>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", staggerChildren: 0.2 }}
        >
          {softSkills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center p-6 rounded-2xl 
                   bg-gradient-to-tr from-[var(--color-secondary)]/80 to-[var(--color-primary)]/70 
                   backdrop-blur-lg border border-white/10 shadow-lg 
                   hover:shadow-[0_0_25px_rgba(56,189,248,0.6)] transition"
              whileHover={{ scale: 1.15, rotate: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className="text-4xl text-white mb-3">{skill.icon}</div>
              <span className="text-lg font-semibold tracking-wide">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
