// components/Skills.jsx
import React from "react";
import { motion } from "framer-motion";

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
  { name: "Python", img: python },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-primary dark:bg-gray-900 py-12 px-6 md:px-20 font-bricolage"
    >
      <div className="flex justify-center items-center gap-8 mb-20 flex-wrap">
        <motion.div
          className="chat chat-start"
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="chat-bubble bg-secondary opacity-50  text-white font-semibold shadow-lg px-5 py-3 rounded-lg max-w-xs">
            A Developer
          </div>
        </motion.div>

        <motion.h2
          className="text-4xl font-bold text-secondary text-center whitespace-nowrap"
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
          <div className="chat-bubble opacity-50  bg-secondary text-white font-semibold shadow-lg px-5 py-3 rounded-lg max-w-xs">
            An Engineer
          </div>
        </motion.div>
      </div>
      {/* Marquee Container */}
      <div className="overflow-hidden relative">
        {/* Actual Marquee */}
        <motion.div
          className="flex gap-12 items-center"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear"
          }}
          style={{ willChange: "transform" }}
        >
          {/* Repeat skills twice for smooth infinite scroll */}
          {[...skills, ...skills].map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center min-w-[100px] cursor-pointer"
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src={skill.img}
                alt={skill.name}
                className="w-20 h-20 rounded-lg object-contain mb-2"
              />
              <span className="text-white font-semibold text-lg">
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
