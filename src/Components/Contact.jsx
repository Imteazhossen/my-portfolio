// Contact.jsx
import React from "react";
import { FaEnvelope, FaPhoneAlt, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="md:p-20 p-5"
      style={{ backgroundColor: "#0D1117" }}
    >
      <div className=" mx-auto py-10 sm:p-10 text-center relative overflow-hidden rounded-2xl border border-gray-700">
        
        {/* Floating Labels */}
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="absolute hidden sm:block top-8 left-8 bg-gray-800 text-white px-3 py-1 rounded-full text-sm shadow"
        >
          Web Applications
        </motion.span>

        <motion.span
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="absolute hidden sm:block bottom-10 left-12 bg-gray-800 text-white px-3 py-1 rounded-full text-sm shadow"
        >
          FrontEnd
        </motion.span>

        <motion.span
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="absolute hidden sm:block top-8 right-8 bg-gray-800 text-white px-3 py-1 rounded-full text-sm shadow"
        >
          Backend
        </motion.span>

        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="absolute hidden sm:block bottom-8 right-16 bg-gray-800 text-white px-3 py-1 rounded-full text-sm shadow"
        >
          Developer
        </motion.span>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-white mb-4"
        >
          Let's build something great <span className="text-[#9290C3]">together.</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-400 mb-8 max-w-2xl mx-auto"
        >
          Whether you’re looking to collaborate, hire, or just say hello, feel free to reach out.
        </motion.p>

        {/* Contact Info */}
        <div className="space-y-4 text-white mb-8">
          <div className="flex items-center justify-center gap-3">
            <FaEnvelope className="text-[#9290C3]" />
            <a href="mailto:imteaz.hossen693@gmail.com" className="hover:underline">
              imteaz.hossen693@gmail.com
            </a>
          </div>
          <div className="flex items-center justify-center gap-3">
            <FaPhoneAlt className="text-[#9290C3]" />
            <a href="tel:+8801621189202" className="hover:underline">
              +880 1621-189202
            </a>
          </div>
          <div className="flex items-center justify-center gap-3">
            <FaWhatsapp className="text-green-500" />
            <a href="https://wa.me/8801621189202" target="_blank" rel="noopener noreferrer" className="hover:underline">
              Chat on WhatsApp
            </a>
          </div>
          <div className="flex items-center justify-center gap-3">
            <FaLinkedin className="text-blue-500" />
            <a href="https://www.linkedin.com/in/imteaz-hossen/" target="_blank" rel="noopener noreferrer" className="hover:underline">
              LinkedIn Profile
            </a>
          </div>
        </div>

        {/* Button */}
        <motion.a
          href="mailto:imteaz.hossen693@gmail.com"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-6 py-3 text-white font-semibold rounded-lg shadow-lg"
          style={{ backgroundColor: "#0B0570" }}
        >
          Send Message
        </motion.a>
      </div>
    </section>
  );
};

export default Contact;
