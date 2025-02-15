"use client";

import { FaEnvelope, FaLinkedin, FaGithub, FaBars } from "react-icons/fa";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from "react";

export default function MyWork() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const projects = [
    {
      title: "AI Product Management Certification",
      description: "I gained experience in ideating, managing, and delivering AI products, from initial concept to MVP, while mastering the AI product development lifecycle. Additionally, I refined my ability to strategically align AI solutions with business objectives to ensure maximum impact.",
      image: "/aipmcert.png", // Ensure the path is correct
      link: "https://maven.com/certificate/jvgLkeCZ",
    },
    {
      title: "Bank of America Financial Center Intern",
      description: "At Bank of America, I led client engagement efforts, educating over 30 customers weekly on digital banking solutions, which boosted adoption by 25%. I also provided tailored support in resolving technical issues, ultimately improving customer satisfaction by 20%.",
      image: "/bofa.jpg", // Ensure the path is correct
    },
    {
      title: "Cartogram Product Management Intern",
      description: "Managed HubSpot, the CRM system, conducted market research, and created competitor analyses. I also designed user flow diagrams and wireframes, and collaborated with the engineering team to refine the product based on client feedback, improving usability and engagement.",
      image: "/cartogram.png", // Ensure the path is correct
      link: "http://165.232.159.91/wordpress/White-Paper-Why-Wayfinding-is-Essential-to-Healthcare-Growth.pdf ",
    },
    {
      title: "Case Competition Projects",
      description: "I refined my problem-solving skills by developing solutions for case studies and conducting operations research, including a paper on AI-driven hyper-personalization. These experiences honed my ability to align business strategies with emerging technological trends.",
      image: "/deca.jpg", // Ensure the path is correct
      link: "https://drive.google.com/file/d/1noWFgUb7cSnLxSdYohozpCGTg5zjDEhV/view?usp=sharing", 
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-purple-200 flex flex-col items-center text-center px-4 sm:px-6 overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 py-4 px-4 sm:px-10">
        <div className="flex justify-between items-center">
          <div className="text-2xl text-gray-700">
            <Link href="/">🏠</Link>
          </div>
          <div className="hidden sm:flex gap-6 text-gray-700">
            <Link href="/my-work" className="hover:text-black text-2xl">my work</Link>
            <Link href="/on-the-side" className="hover:text-black text-2xl">(on the side)</Link>
            <Link href="/my-story" className="hover:text-black text-2xl">my story</Link>
            <div className="flex gap-6 mb-1 items-end">
              <Link
                href="mailto:tanzilhannah@gmail.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black text-2xl"
              >
                <FaEnvelope />
              </Link>
              <Link
                href="https://www.linkedin.com/in/tanzilhussain/" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black text-2xl"
              >
                <FaLinkedin />
              </Link>
              <a
                href="https://github.com/tanzilhussain" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black text-2xl"
              >
                <FaGithub />
              </a>
            </div>
          </div>
          <button
            className="sm:hidden text-2xl text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <FaBars />
          </button>
        </div>
        {isMobileMenuOpen && (
          <div className="sm:hidden mt-4 space-y-4">
            <Link href="/my-work" className="block hover:text-black text-2xl">my work</Link>
            <Link href="/on-the-side" className="block hover:text-black text-2xl">(on the side)</Link>
            <Link href="/my-story" className="block hover:text-black text-2xl">my story</Link>
            <div className="flex gap-6 mt-4">
              <Link
                href="mailto:tanzilhannah@gmail.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black text-2xl"
              >
                <FaEnvelope />
              </Link>
              <Link
                href="https://www.linkedin.com/in/tanzilhussain/" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black text-2xl"
              >
                <FaLinkedin />
              </Link>
              <a
                href="https://github.com/tanzilhussain" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black text-2xl"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Page Title */}
      <div className="absolute left-4 sm:left-20 top-[100px]">
        <h1 className="text-4xl sm:text-7xl font-bold text-gray-900 text-left font-vollkorn">my work (click to explore!)</h1>
      </div>

      {/* Dates */}
      <div className="absolute left-4 sm:left-20 top-[200px] sm:top-[225px] flex flex-wrap gap-4 sm:gap-6">
        <h1 className="text-xl sm:text-3xl font-semibold text-purple-700 text-center font-vollkorn">Fall &apos;24</h1>
        <h1 className="text-xl sm:text-3xl font-semibold text-purple-700 text-center font-vollkorn">Summer &apos;24</h1>
        <h1 className="text-xl sm:text-3xl font-semibold text-purple-700 text-center font-vollkorn">Summer &apos;23</h1>
        <h1 className="text-xl sm:text-3xl font-semibold text-purple-700 text-center font-vollkorn">Fall &apos;20—Spring &apos;24</h1>
      </div>

      {/* Project Panels */}
      <div className="mt-[300px] w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 px-4 sm:px-0">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <div className="flex flex-col bg-white rounded-xl shadow-lg p-4 hover:shadow-xl transition-shadow duration-300 h-[400px] sm:h-[450px]">
              {/* Project Image */}
              <div className="w-full h-32 sm:h-40 mb-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={300}
                  height={150}
                  className={`w-full h-full rounded-lg ${
                    index === 0 || index === 3 ? 'object-cover' : 'object-contain'
                  }`}
                />
              </div>

              {/* Project Details */}
              <div className="text-left flex-grow">
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{project.title}</h2>
                <p className="text-sm sm:text-base text-gray-700">
                  <span className="text-purple-700">—————————————————</span><br/>{project.description}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Footer */}
      <footer className="mt-10 w-full text-center py-10 text-black">
        <p className="text-sm sm:text-xl underline">
          <a href="https://github.com/tanzilhannah/tanzilhannah.github.io">
            &copy; {new Date().getFullYear()} Tanzil Hussain. Built with ❤️ using Next.js, Tailwind CSS, and TypeScript.
          </a>
        </p>
      </footer>
    </div>
  );
}