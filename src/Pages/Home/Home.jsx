import React from 'react';
import Navbar from '../../Components/Navbar';
import Banner from '../../Components/Banner';
import AboutMe from '../../Components/AboutMe';
import Skills from '../../Components/Skills';
import Education from '../../Components/Education';
import Projects from '../../Components/Projects';
import Contact from '../../Components/Contact';
import Footer from '../../Components/Footer';
import Experience from '../../Components/Experience';



const Home = () => {
    return (
        <div className='bg-primary'>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Experience></Experience>
            <Skills></Skills>
            <Education></Education>
            <Projects></Projects>
            <Contact></Contact>
            <Footer></Footer>

        </div>
    );
};

export default Home;