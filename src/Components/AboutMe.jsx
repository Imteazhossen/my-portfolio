// components/AboutMe.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaLaptopCode, FaBusinessTime, FaPlane, FaClock } from "react-icons/fa";

import img1 from "../assets/react.png";
import img2 from "../assets/tailwind.png";
import img3 from "../assets/mongo.png";
import img4 from "../assets/node.png";
import img5 from "../assets/html.png";
import img6 from "../assets/javaScript.png";
import img7 from "../assets/css.png";

const AboutMe = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7];

  // Different scattered positions for each image
  const positions = [
    { top: "0%", left: "20%" },
    { top: "15%", left: "60%" },
    { top: "35%", left: "10%" },
    { top: "45%", left: "50%" },
    { top: "70%", left: "25%" },
    { top: "80%", left: "70%" },
    { top: "40%", left: "80%" },
  ];

  return (
    <section
      id="about"
      className="py-16 px-6 md:px-20 bg-primary text-light font-bricolage"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Side - Text Content */}
        <motion.div
          className="md:w-2/3"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-secondary mb-6"
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            About Me
          </motion.h2>

          <motion.p
            className="text-lg leading-relaxed text-white mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            I started my programming journey in <span className="text-secondary font-semibold">2022</span>, 
            and quickly fell in love with building creative and attractive websites using the 
            <span className="text-secondary font-semibold"> MERN stack</span>. Over time, I’ve built several 
            full-stack projects and discovered my passion for <span className="text-secondary font-semibold">front-end development</span>. 
            My goal is to create web applications that are not only functional but also visually engaging.
          </motion.p>

          <motion.p
            className="text-lg leading-relaxed text-white mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Beyond coding, I'm a problem-solver and a punctual individual who loves creating new things. 
            My hobbies include collecting unique watches, exploring business opportunities, and traveling to new places. 
            I also have skills in animation using <span className="text-secondary font-semibold">Adobe After Effects</span>, 
            which allows me to add a creative touch to my projects.
          </motion.p>

          <motion.blockquote
            className="italic text-secondary text-lg font-semibold border-l-4 border-secondary pl-4 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            "Consistency is the master key that gently unlocks the hidden virtues within every human soul."
          </motion.blockquote>

          {/* Icons Row */}
          <motion.div
            className="flex flex-wrap gap-6 text-secondary text-3xl"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15 }
              }
            }}
          >
            {[FaCode, FaLaptopCode, FaClock, FaBusinessTime, FaPlane].map(
              (Icon, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { y: 20, opacity: 0 },
                    visible: { y: 0, opacity: 1 }
                  }}
                >
                  <Icon />
                </motion.div>
              )
            )}
          </motion.div>
        </motion.div>

        {/* Right Side - Scattered Floating Images */}
        <motion.div
          className="md:w-1/3 relative h-[400px] w-full"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 }
            }
          }}
        >
          {images.map((src, index) => (
            <motion.img
              key={index}
              src={src}
              alt={`About Image ${index + 1}`}
              className="w-20 h-20 object-cover rounded-full shadow-lg shadow-secondary border-2 border-secondary absolute"
              style={positions[index]}
              animate={{
                y: [0, -6, 0, 6, 0], // floating up and down
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.3,
              }}
              whileHover={{ scale: 1.1 }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
