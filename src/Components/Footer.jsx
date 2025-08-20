import React from "react";
import { Link } from "react-router";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[var(--color-primary)] text-white py-10 px-6 md:px-20 font-bricolage">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo / Branding */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-[var(--color-secondary)]">
            Md Imteaz Hossen
          </h2>
          <p className="text-sm mt-1">Developed by Md Imteaz Hossen</p>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6 text-white font-medium">
          <li>
            <Link to="/" className="hover:text-cyan-400 transition">
              Home
            </Link>
          </li>
          <li>
            <a href="#about" className="hover:text-cyan-400 transition">
              About Me
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-cyan-400 transition">
              Skills
            </a>
          </li>
          <li>
            <a href="#education" className="hover:text-cyan-400 transition">
              Education
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-cyan-400 transition">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-cyan-400 transition">
              Contact
            </a>
          </li>
        </ul>

        {/* Social Media Icons */}
        <div className="flex gap-4 mt-4 md:mt-0">
          <a
            href="https://github.com/Imteazhossen"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/imteaz-hossen/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://www.facebook.com/ImteazMahin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaFacebook size={24} />
          </a>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-8 border-t border-white/20 pt-4 text-center text-sm text-white/60">
        &copy; {new Date().getFullYear()} Md Imteaz Hossen. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
