import React from "react";
import { useParams, Link } from "react-router"; // ✅ Correct import

const projectsDetails = {
  scholarshiphub: {
    name: "ScholarshipHub",
    images: [
      "../assets/screencapture-scholarship-hub-a7834-web-app-2025-08-12-14_50_03.png",
      "/assets/scholarship2.png",
      "/assets/scholarship3.png",
    ],
    techStack: ["React", "Firebase", "MongoDB", "Node.js"],
    description:
      "ScholarshipHub is a platform for students to explore and apply for scholarships. It supports multiple user roles with role-specific dashboards, secure login, filtering, real-time applications, reviews, and payment gateway integration.",
    liveLink: "https://scholarshiphub.example.com",
    githubClient: "https://github.com/Imteazhossen/scholarship-hub-client",
    challenges:
      "Implementing role-based authentication and authorization, integrating Stripe and Firebase Auth seamlessly, and handling real-time updates.",
    improvements:
      "Add more detailed analytics for admins, improve UI responsiveness, and support more payment gateways.",
  },
  languagepal: {
    name: "LanguagePal",
    images: [
      "../assets/screencapture-language-pal-1c4dd-web-app-2025-08-12-14_48_52.png",
      "/assets/language2.png",
      "/assets/language3.png",
    ],
    techStack: [
      "React",
      "Firebase Auth",
      "MongoDB",
      "Express.js",
      "JWT",
      "TailwindCSS",
      "DaisyUI",
    ],
    description:
      "LanguagePal connects students with language tutors globally. Features include tutor search, booking system, ratings, reviews, light/dark mode toggle, and JWT-secured API routes.",
    liveLink: "https://language-pal-1c4dd.web.app/",
    githubClient: "https://github.com/Imteazhossen/languagePal-client",
    challenges:
      "Managing secure JWT token verification alongside Firebase Auth, building scalable backend APIs, and syncing tutor ratings with bookings.",
    improvements:
      "Add more languages and tutors, build a mobile app version, and enhance UX with AI-based tutor recommendations.",
  },
  parceldelivery: {
    name: "Parcel Delivery App",
    images: [
      "../assets/screencapture-zap-shift-49139-web-app-2025-08-12-14_47_57.png",
      "/assets/parcel2.png",
      "/assets/parcel3.png",
    ],
    techStack: [
      "React",
      "Firebase Auth",
      "TanStack Query",
      "Express.js",
      "MongoDB",
      "Stripe",
    ],
    description:
      "Parcel Delivery App is a logistics platform featuring user/admin/rider dashboards with parcel booking, payment, tracking, and delivery status management.",
    liveLink: "https://zap-shift-49139.web.app",
    githubClient: "https://github.com/Imteazhossen/parcel-delivery-app-client",
    challenges:
      "Integrating real-time parcel tracking, role-based access control, and payment workflows using Stripe.",
    improvements:
      "Implement rider route optimization, add push notifications, and improve analytics dashboard.",
  },
};

const Details = () => {
  const { id } = useParams();
  const project = projectsDetails[id];

  if (!project) {
    return (
      <div className="text-center p-16 bg-primary text-light">
        <h2 className="text-3xl font-bold text-secondary mb-4">
          Project Not Found
        </h2>
        <Link
          to="/"
          className="text-cyan-400 underline hover:text-cyan-600"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <section className="bg-primary py-20">
      <div className="bg-[#1E1E2F] text-white rounded-3xl shadow-xl py-16 px-6 md:px-20 max-w-5xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl font-bold text-cyan-400 mb-6">{project.name}</h1>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {project.images.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <img
                src={src}
                alt={`${project.name} screenshot ${index + 1}`}
                className="w-full h-56 object-cover"
              />
            </div>
          ))}
        </div>

        {/* Description */}
        <p className="mb-8 text-lg leading-relaxed text-gray-300">
          {project.description}
        </p>

        {/* Tech Stack */}
        <h3 className="text-2xl font-semibold mb-2 text-cyan-300">Technology Stack</h3>
        <ul className="list-disc list-inside mb-8 text-gray-300">
          {project.techStack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>

        {/* Links */}
        <div className="mb-8 flex flex-wrap gap-4">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cyan-700 hover:bg-cyan-800 px-6 py-3 rounded-full font-semibold shadow-lg"
          >
            Live Project
          </a>
          <a
            href={project.githubClient}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-700 hover:bg-blue-800 px-6 py-3 rounded-full font-semibold shadow-lg"
          >
            GitHub (Client)
          </a>
        </div>

        {/* Challenges */}
        <h3 className="text-2xl font-semibold mb-2 text-cyan-300">Challenges Faced</h3>
        <p className="mb-8 text-gray-300">{project.challenges}</p>

        {/* Improvements */}
        <h3 className="text-2xl font-semibold mb-2 text-cyan-300">
          Potential Improvements & Future Plans
        </h3>
        <p className="text-gray-300">{project.improvements}</p>

        {/* Back Button */}
        <Link
          to="/"
          className="inline-block mt-12 text-cyan-400 underline hover:text-cyan-600"
        >
          ← Back to Home
        </Link>
      </div>
    </section>
  );
};

export default Details;
