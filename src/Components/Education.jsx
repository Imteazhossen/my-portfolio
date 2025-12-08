
import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { PiHandSwipeLeft, PiHandSwipeRight } from "react-icons/pi";

const educationData = [
  {
    id: 1,
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "University of Liberal Arts Bangladesh (ULAB)",
    location: "Mohammadpur, Dhaka, Bangladesh",
    startDate: "February 2022",
    endDate: "Expected February 2026",
    cgpa: "3.52 / 4.00",
    details:
      "Currently finishing academic courses, internship pending. Actively participated in various programs.",
  },
  {
    id: 2,
    degree: "Honours  in Physics",
    institution: "Hajee Mohammad Danesh Science and Technology University",
    location: "Dinajpur, Bangladesh",
    startDate: "January 2020",
    endDate: "March 2021",
    cgpa: null,
    details:
      "Studied Physics for undergraduate before transferring to ULAB, did not continue after March 2021.",
  },
  {
    id: 3,
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Udayan Uchcha Madhyamik Bidyalaya",
    location: "Fuller Road, Dhaka, Bangladesh",
    startDate: "Completed in 2019",
    endDate: null,
    cgpa: null,
    details: "",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="bg-primary text-light font-bricolage py-16 px-6 md:px-20"
    >
      <motion.h2
        className="text-4xl font-bold text-secondary mb-12 text-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Educational Qualifications
      </motion.h2>

      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="!pb-10"
      >
        {educationData.map((edu) => (
          <SwiperSlide key={edu.id}>
            <motion.div
              className="bg-[#293471] rounded-3xl p-8 shadow-2xl cursor-pointer h-[460px] md:h-[400px] max-w-xs mx-auto flex flex-col justify-between border border-transparent hover:border-blue-500 transition-all duration-300"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 15px 35px rgba(30, 58, 138, 0.6)",
                borderColor: "#2563eb",
              }}
            >
              <div>
                <h3 className="text-2xl font-semibold mb-3">{edu.degree}</h3>
                <p className="font-medium text-secondary mb-1">{edu.institution}</p>
                <p className="text-sm italic mb-3">{edu.location}</p>
                <p className="mb-2">
                  <span className="font-semibold">Duration: </span>
                  {edu.endDate ? `${edu.startDate} - ${edu.endDate}` : edu.startDate}
                </p>
                {edu.cgpa && (
                  <p className="mb-3">
                    <span className="font-semibold">CGPA: </span> {edu.cgpa}
                  </p>
                )}
              </div>
              {edu.details && (
                <p className="textarea-xs leading-relaxed text-gray-100">{edu.details}</p>
              )}
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-center items-center gap-10">
        <PiHandSwipeLeft size={25} className="text-white lg:hidden " /><h1 className="mb-5 mt-3 lg:hidden text-center text-white text-2xl">Swipe</h1><PiHandSwipeRight size={25} className="text-white lg:hidden " />
      </div>
    </section>
  );
};

export default Education;
