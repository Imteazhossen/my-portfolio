import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaLaptopCode, FaUsers, FaRocket } from "react-icons/fa";

import dotechLogo from "../assets/dotech-logo.png"; // add a logo (or temp placeholder)

const Experience = () => {
  const experiences = [
    {
      company: "Dotech",
      role: "Frontend Developer Intern",
      duration: "Oct 2025 – Present",
      logo: dotechLogo,
      website: "https://www.dotech.biz/",
      description:
        "I am currently working as a Frontend Developer Intern at Dotech. My main contribution has been building the entire official company website using Next.js, TailwindCSS, HTML, and JavaScript. I also collaborate closely with the development team on various internal and client projects.",
      highlights: [
        "Built Dotech’s official website from scratch with Next.js",
        "Developed reusable UI components with TailwindCSS",
        "Worked in a real-world agile environment with the dev team",
        "Contributed to multiple ongoing internal and client projects",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="bg-primary text-light py-20 px-6 md:px-20 font-bricolage"
    >
      {/* Title */}
      <motion.h2
        className="text-5xl font-extrabold text-secondary mb-16 text-center tracking-wide"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Work Experience
      </motion.h2>

      <div className="space-y-16 max-w-4xl mx-auto">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            className="rounded-3xl bg-gradient-to-br from-blue-900/60 via-cyan-900/40 to-blue-900/60
              backdrop-blur-md shadow-[0_8px_32px_rgba(31,38,135,0.37)]
              border border-cyan-600/40 p-10 flex flex-col md:flex-row gap-10 items-center"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 * i }}
            whileHover={{ scale: 1.03 }}
          >
            {/* Company Logo */}
            <motion.div
              className="h-32 w-32 rounded-full bg-white flex items-center justify-center overflow-hidden shadow-lg border-2 border-secondary"
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img src={exp.logo} alt="Company Logo" className="w-full ml-4 h-full" />
            </motion.div>

            {/* Content */}
            <div className="flex-1 text-white">
              <h3 className="text-3xl font-bold mb-2 text-secondary">{exp.role}</h3>

              <p className="text-lg mb-2 font-medium text-gray-300">
                {exp.company} • <span className="text-secondary">{exp.duration}</span>
              </p>

              <a
                href={exp.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-300 underline text-sm hover:text-secondary"
              >
                Visit Company Website
              </a>

              <p className="mt-5 text-gray-200 leading-relaxed">{exp.description}</p>

              {/* Highlights */}
              <div className="mt-6 space-y-3">
                {exp.highlights.map((point, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 text-gray-200"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 * index }}
                  >
                    <FaRocket className="text-secondary text-xl" />
                    <p>{point}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
