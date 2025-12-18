import React from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
// import me from "../assets/me.jpg";
import me2 from "../assets/me-removebg.png";
import { motion } from "framer-motion";
import backGround from "../assets/portfolio-hero-bg.mp4";

// Import the react-parallax-tilt library
import ReactTilt from "react-parallax-tilt";

const Banner = () => {
  return (
    <section
      id="home"
      className="py-10 relative z-50 px-10 flex items-center justify-center bg-primary text-light font-bricolage"
    >
      {/* Background Video */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <video
          src={backGround}
          type="video/mp4"
          autoPlay
          loop
          muted
          className="object-cover w-full h-full"
        />
      </div>

      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-10 relative z-10">
        {/* Left - Text Content */}
        <div className="md:w-1/2">
          <motion.p
            initial={{ scale: 0 }}
            animate={{ scale: 1, transition: { duration: 2 } }}
            className="text-2xl mb-2 font-semibold text-white"
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            initial={{ scale: 0 }}
            animate={{ scale: 1, transition: { duration: 2 } }}
            className="text-4xl md:text-5xl font-bold mb-4 text-white"
          >
            Md Imteaz Hossen
          </motion.h1>

          <motion.p
            initial={{ scale: 0 }}
            animate={{ scale: 1, transition: { duration: 2 } }}
            className="text-lg mb-6 text-white"
          >
            I am a MERN stack developer. I love building professional, beautiful, and user-friendly web applications.
          </motion.p>

          {/* Social Media Icons */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1, transition: { duration: 2 } }}
            className="flex items-center text-white gap-4 mb-6"
          >
            <a href="https://github.com/Imteazhossen" target="_blank" rel="noopener noreferrer">
              <FaGithub size={28} className="hover:text-accent transition" />
            </a>
            <a href="https://www.linkedin.com/in/md-imteaz/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={28} className="hover:text-accent transition" />
            </a>
            <a href="https://www.facebook.com/ImteazMahin" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={28} className="hover:text-accent transition" />
            </a>
          </motion.div>

          {/* Resume Button */}
          <button
            onClick={() => {
              const link = document.createElement("a");
              link.href = "https://drive.google.com/uc?export=download&id=1EfN5s4VV_61h0ss0YP_lzqgfP-c1a8ha";
              link.download = "Imteaz_Hossen_Resume.pdf";
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
            className="btn bg-gradient-to-r from-cyan-700 to-[#0B0570] 
            hover:from-cyan-800 hover:to-[#09044F] 
            text-white font-bold px-4 py-2 sm:px-8 sm:py-3 
            rounded-full shadow-md transform transition-transform duration-300 ease-in-out 
            hover:scale-110 hover:shadow-lg focus:outline-none border-0"
          >
            Download Resume
          </button>
        </div>

        {/* Right - Profile Image with React Tilt Effect */}
        <div className="md:w-1/2 flex justify-center">
          <ReactTilt
            tiltMaxAngleX={15} // Maximum tilt on X-axis
            tiltMaxAngleY={15} // Maximum tilt on Y-axis
            perspective={500} // Perspective depth
            transitionSpeed={500} // Speed of tilt animation
          >
            <img
              src={me2}
              alt="Profile"
              className="w-95 h-95 bg-black/40 backdrop-filter backdrop-blur-sm rounded-full object-cover shadow-secondary shadow-2xl"
            />
          </ReactTilt>
        </div>
      </div>
    </section>
  );
};

export default Banner;
