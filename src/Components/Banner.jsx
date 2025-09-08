import React from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import me from '../assets/me.jpg'
import { motion } from "framer-motion";
import back from '../assets/back.jpg'







const Banner = () => {
    return (
        <section
            id="home"
            style={{
                backgroundImage: `url(${back})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            className="py-10 bg-[url('../assets/back.jpg')] px-10 flex items-center justify-center bg-primary text-light font-bricolage "
        >
            <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-10">
                {/* Left - Text Content */}
                <div className="md:w-1/2">
                    <motion.p initial={{ scale: 0 }} animate={{
                        scale: 1,
                        transition: { duration: 2 },
                    }} className="text-2xl mb-2 font-semibold text-white">
                        Hello, I'm
                    </motion.p>
                    <motion.h1 initial={{ scale: 0 }} animate={{
                        scale: 1,
                        transition: { duration: 2 },
                    }} className="text-4xl  text-white md:text-5xl font-bold mb-4">Md Imteaz Hossen</motion.h1>
                    <motion.p initial={{ scale: 0 }} animate={{
                        scale: 1,
                        transition: { duration: 2 },
                    }} className="text-lg mb-6 text-white">
                        I am a  MERN stack developer. I love building professional, beautiful and user-friendly
                        web applications.
                    </motion.p>
                    {/* <ShinyText text="Just some shiny text!" disabled={false} speed={3} className='custom-class' /> */}

                    <motion.div initial={{ scale: 0 }} animate={{
                        scale: 1,
                        transition: { duration: 2 },
                    }} className="flex items-center text-white gap-4 mb-6">
                        {/* Social Media Icons */}
                        <a href="https://github.com/Imteazhossen" target="_blank" rel="noopener noreferrer">
                            <FaGithub size={28} className="hover:text-accent transition" />
                        </a>
                        <a href="https://www.linkedin.com/in/md-imteaz-hossen/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={28} className="hover:text-accent transition" />
                        </a>
                        <a href="https://www.facebook.com/ImteazMahin" target="_blank" rel="noopener noreferrer">
                            <FaFacebook size={28} className="hover:text-accent transition" />
                        </a>
                    </motion.div>

                    {/* Resume Button */}

                    {/* <button
                        onClick={() => {
                            const link = document.createElement('a');
                            link.href = '/Imteaz_Hossen_Resume.pdf'; // your PDF file path in public folder
                            link.download = 'Imteaz_Hossen_Resume.pdf';
                            document.body.appendChild(link);
                            link.click();
                            document.body.removeChild(link);
                        }}
                        className="btn bg-gradient-to-r from-cyan-700 to-[#0B0570] hover: text-white font-bold px-4 py-2 sm:px-8 sm:py-3 rounded-full shadow-md transform transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-lg focus:outline-none border-0"
                    >
                        Download Resume
                    </button> */}

                    {/* <button
                        onClick={() => {
                            const link = document.createElement('a');
                            link.href = '/Imteaz_Hossen_Resume.pdf'; // your PDF file path in public folder
                            link.download = 'Imteaz_Hossen_Resume.pdf';
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
                    </button> */}
                    <button
                        onClick={() => {
                            const link = document.createElement('a');
                            link.href = 'https://drive.google.com/uc?export=download&id=1EfN5s4VV_61h0ss0YP_lzqgfP-c1a8ha';
                            link.download = 'Imteaz_Hossen_Resume.pdf';
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

                {/* Right - Profile Image */}
                <div className="md:w-1/2 flex justify-center">
                    <img
                        src={me} // place your image in public folder
                        alt="Profile"
                        className="w-85 h-85 rounded-full object-cover  border-secondary shadow-2xl shadow-secondary"
                    />
                </div>
            </div>

        </section>
    );
};

export default Banner;
