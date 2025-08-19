
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router"; // corrected import

// Import your project images (adjust paths accordingly)
import scholarshipHubImg from "../assets/screencapture-scholarship-hub-a7834-web-app-2025-08-12-14_50_03.png";
import languagePalImg from "../assets/screencapture-language-pal-1c4dd-web-app-2025-08-12-14_48_52.png";
import hobbyhub from "../assets/hobbyhub.png";

const projects = [
  {
    id: "scholarshiphub",
    name: "ScholarshipHub",
    image: scholarshipHubImg,
    shortDescription:
      "A comprehensive scholarship management platform with role-based dashboards, secure auth, and payment gateway integration.",
  },
  {
    id: "languagepal",
    name: "LanguagePal",
    image: languagePalImg,
    shortDescription:
      "A full-stack MERN app connecting language learners with tutors, featuring bookings, reviews, JWT security, and theme toggling.",
  },
  {
    id: "hobbyhub",
    name: "HobbyHub",
    image: hobbyhub ,
    shortDescription:
     " Modern hobby group management platform with user, moderator, and admin dashboards, featuring group creation, joining, real-time updates, and dynamic validation.",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-primary text-light font-bricolage py-20 px-6 md:px-20"
    >
      <motion.h2
        className="text-5xl font-extrabold text-secondary mb-16 text-center tracking-wide"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Projects
      </motion.h2>

      <div className="grid gap-14 md:grid-cols-3">
        {projects.map(({ id, name, image, shortDescription }, i) => (
          <motion.div
            key={id}
            className="relative rounded-3xl bg-gradient-to-br from-blue-900/70 via-cyan-900/60 to-blue-900/70
              backdrop-blur-md shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] border border-cyan-600/40
              flex flex-col overflow-hidden cursor-pointer"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 * i }}
            whileHover={{ scale: 1.07, boxShadow: "0 25px 40px rgba(0, 255, 255, 0.35)" }}
          >
            <div className="overflow-hidden rounded-t-3xl">
              <img
                src={image}
                alt={`${name} screenshot`}
                className="w-full h-56 object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-3xl font-semibold text-white mb-4 tracking-tight">{name}</h3>
              <p className="text-gray-300 flex-grow leading-relaxed">{shortDescription}</p>
              <Link
                to={`/projects/${id}`}
                className="mt-8 inline-block bg-gradient-to-r from-cyan-700 to-blue-900 text-white font-bold px-6 py-3 rounded-full text-center hover:scale-105 transition-transform duration-300"
              >
                View More 
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
