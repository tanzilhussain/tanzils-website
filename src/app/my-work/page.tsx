"use client";

import { useState } from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

export default function MyWork() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const projects = [
    {
      title: "SmartPrompt",
      description:
        "Built SmartPrompt, a Chrome extension that gives users insights into their ChatGPT prompt behavior. It tracks prompt history, analyzes tone, verbosity, and repetition, and clusters your most common prompt topics using AI. \n Tech Stack: \n- **Frontend:** JavaScript, HTML/CSS, Chart.js \n- **Backend:** Python (FastAPI) \n- **AI/NLP:** sentence-transformers, KeyBERT, scikit-learn \n- **Storage:** chrome.storage.local, JSONL prompt logs",
      image: "/smarprompt.png", 
      link: "https://github.com/tanzilhussain/smartprompt",
      date: "Summer '25", 
    },
    {
      title: "Automus Consulting AI Intern",
      description:
        "Building Automus' AI Products",
      image: "/automus logo.webp", 
      date: "Summer '25", 
    },
    {
      title: "AI Product Management Certification",
      description:
        "I gained experience in ideating, managing, and delivering AI products, from initial concept to MVP, while mastering the AI product development lifecycle. Additionally, I refined my ability to strategically align AI solutions with business objectives to ensure maximum impact.",
      image: "/aipmcert.png", // Ensure the path is correct
      link: "https://maven.com/certificate/jvgLkeCZ",
      date: "Fall '24", // Added date for this project
    },
    {
      title: "Bank of America Financial Center Intern",
      description:
        "At Bank of America, I led client engagement efforts, educating over 30 customers weekly on digital banking solutions, which boosted adoption by 25%. I also provided tailored support in resolving technical issues, ultimately improving customer satisfaction by 20%.",
      image: "/bofa.jpg", // Ensure the path is correct
      link: "https://drive.google.com/file/d/1AOASJbabDlakfZFIj2zs8Lozq6WXwnld/view?usp=sharing",
      date: "Summer '24", // Added date for this project
    },
    {
      title: "Cartogram Product Management Intern",
      description:
        "Managed HubSpot, the CRM system, conducted market research, and created competitor analyses. I also designed user flow diagrams and wireframes, and collaborated with the engineering team to refine the product based on client feedback, improving usability and engagement.",
      image: "/cartogram.png", // Ensure the path is correct
      link: "http://165.232.159.91/wordpress/White-Paper-Why-Wayfinding-is-Essential-to-Healthcare-Growth.pdf",
      date: "Summer '23", // Added date for this project
    },
    {
      title: "Case Competition Projects",
      description:
        "I refined my problem-solving skills by developing solutions for case studies and conducting operations research, including a paper on AI-driven hyper-personalization. These experiences honed my ability to align business strategies with emerging technological trends.",
      image: "/deca.jpg", // Ensure the path is correct
      link: "https://drive.google.com/file/d/1noWFgUb7cSnLxSdYohozpCGTg5zjDEhV/view?usp=sharing",
      date: "Fall '20—Spring '24", // Added date for this project
    },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <Head>
        <title>Tanzil&apos;s Website</title>
        <meta name="description" content="Welcome to Tanzil's personal website!" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-white to-purple-200 flex flex-col items-center text-center px-6 overflow-x-hidden">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-white z-50 shadow-md">
          <div className="container mx-auto px-4 py-3 flex justify-between items-center">
            <div className="text-2xl text-gray-700 ">
              <Link href="/">🏠</Link>
            </div>
            {/* Hamburger Menu Icon */}
            <div className="md:hidden text-2xl text-gray-700 cursor-pointer" onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </div>
            {/* Desktop Navigation Links */}
            <div className="hidden md:flex gap-6 text-gray-700 ">
              <Link href="/my-work" className="hover:text-black text-xl">
                my work
              </Link>
              {/* <Link href="/on-the-side" className="hover:text-black text-xl">
                (on the side)
              </Link> */}
              <Link href="/my-story" className="hover:text-black text-xl">
                my story
              </Link>
              <div className="flex gap-6 mb-1 items-end">
                <Link
                  href="mailto:tanzilhannah@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black text-xl"
                >
                  <FaEnvelope />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/tanzilhussain/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black text-xl"
                >
                  <FaLinkedin />
                </Link>
                <Link
                  href="https://github.com/tanzilhussain"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black text-xl"
                >
                  <FaGithub />
                </Link>
              </div>
            </div>
          </div>
          {/* Mobile Navigation Links */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-white py-4">
              <Link href="/my-work" className="block px-4 py-2 text-gray-700 hover:bg-purple-50">
                my work
              </Link>
              {/* <Link href="/on-the-side" className="block px-4 py-2 text-gray-700 hover:bg-purple-50">
                (on the side)
              </Link> */}
              <Link href="/my-story" className="block px-4 py-2 text-gray-700 hover:bg-purple-50">
                my story
              </Link>
              <div className="flex gap-4 px-4 py-2">
                <Link
                  href="mailto:tanzilhannah@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-black"
                >
                  <FaEnvelope />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/tanzilhussain/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-black"
                >
                  <FaLinkedin />
                </Link>
                <Link
                  href="https://github.com/tanzilhussain"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-black"
                >
                  <FaGithub />
                </Link>
              </div>
            </div>
          )}
        </nav>

        {/* Page Title */}
        <div className="absolute left-4 md:left-20 top-[100px]">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-left">
            my work (click to explore!)
          </h1>
        </div>

        {/* Project Panels Internships */}
        <div className="mt-[200px] w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="flex flex-col bg-white rounded-xl shadow-lg p-4 hover:shadow-xl transition-shadow duration-300 h-[450px]">
                {/* Date Title */}
                <h1 className="text-xl md:text-2xl font-semibold text-purple-700 text-center mb-4">
                  {project.date}
                </h1>

                {/* Project Image */}
                <div className="w-full h-40 mb-4">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={300}
                    height={150}
                    className={`w-full h-full rounded-lg ${
                      index === 0 || index === 3 ? "object-cover" : "object-contain"
                    }`}
                  />
                </div>

                {/* Project Details */}
                <div className="text-left flex-1 overflow-y-auto">
                  <h2 className="text-xl font-bold text-gray-900 mb-1">{project.title}</h2>
                  <p className="text-sm text-gray-700">
                    <span className="text-purple-700">—————————————————</span>
                    <br />
                    {project.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-10 w-full text-center py-10 text-black">
          <p className="text-sm underline">
            <a href="https://github.com/tanzilhussain/tanzils-website">
              &copy; {new Date().getFullYear()} Tanzil Hussain. Built with ❤️ using Next.js, Tailwind CSS, and TypeScript.
            </a>
          </p>
        </footer>
      </div>
    </>
  );
}