"use client";

import { useState } from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

export default function MyWork() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("internships");

  // project list
  const internships = [
    {
      title: "Automus Consulting AI Intern",
      description:
        "Building Automus' AI Products",
      image: "/automus logo.webp", // Ensure the path is correct
      date: "Summer '25", // Added date for this project
    },
    {
      title: "Automus Consulting AI Engineer Intern",
      description:
        "- Co-built and led development of an AWS-hosted NLP pipeline using RAG for automated summarization, Q&A, and generation of technical design documents.\n- Designed a scalable knowledge base using Bedrock for vector-based semantic search and Aurora to store document metadata and user interaction logs. \n- Accelerated delivery and team coordination by executing Agile sprints, leading daily standups, and managing Jira tasks.",
      image: "/automus.png", 
      date: "Summer 2025", 
    },
    {
      title: "Bank of America Financial Center Intern",
      description:
        "- Increased adoption of AI-powered banking tools by analyzing client pain points and guiding ~50 customers weekly.\n- Boosted client satisfaction scores by identifying service gaps and collaborating with staff to improve branch operations.",
      image: "/bofa.jpg", // Ensure the path is correct
      link: "https://drive.google.com/file/d/1AOASJbabDlakfZFIj2zs8Lozq6WXwnld/view?usp=sharing",
      date: "Summer 2024", // Added date for this project
    },
    {
      title: "Cartogram Product Strategy Intern",
      description:
        "- Advocated for product adoption by creating technical explainers and blogs that translated complex features into clear value.\n- Informed product improvement by conducting market research, identifying user needs, and guiding design and engineering.",
      image: "/cartogram.png", // Ensure the path is correct
      link: "http://165.232.159.91/wordpress/White-Paper-Why-Wayfinding-is-Essential-to-Healthcare-Growth.pdf",
      date: "Summer 2023", // Added date for this project
    },
  ];

  const projects = [
    {
      title: "Transaction Fraud Risk Analyzer",
      description:
        "Built an interactive fraud detection dashboard that explains XGBoost predictions using SHAP. Designed to help users understand why transactions are flagged by visualizing feature contributions and modeling risky behavior patterns.\n- Tech Stack: Model: XGBoost (precision-recall optimized)\n- Explainability: SHAP (global + per-transaction)\n- Frontend: Streamlit\n- Backend: Python (modular)\n- Data: Synthetic financial transactions (Kaggle)",
      image: "/transaction.png", 
      link: "https://github.com/tanzilhussain/transaction-fraud-risk-analyzer",
    },
    {
      title: "SmartPrompt",
      description:
        "Built SmartPrompt, a Chrome extension that gives users insights into their ChatGPT prompt behavior. It tracks prompt history, analyzes tone, verbosity, and repetition, and clusters your most common prompt topics using AI. \nTech Stack: \n- Frontend: JavaScript, HTML/CSS, Chart.js \n- Backend: Python (FastAPI) \n- AI/NLP: sentence-transformers, spaCy, KeyBERT \n- Storage: chrome.storage.local, JSONL logs",
      image: "/smartprompt.png", 
      link: "https://github.com/tanzilhussain/smartprompt",
    },
    {
      title: "AI Product Management Certification",
      description:
        "Gained hands-on experience managing AI products from ideation to MVP. Learned to navigate the AI product lifecycle and align technical solutions with business goals for real-world impact.\nFocus Areas: AI strategy, product-market fit, lifecycle management, stakeholder alignment",
      image: "/aipmcert.png", // Ensure the path is correct
      link: "https://maven.com/certificate/jvgLkeCZ",
    },
    {
      title: "Case Competitions",
      description:
        "Solved business problems through case studies and operations research, including a paper on AI-driven hyper-personalization in hospitality. Strengthened my ability to merge data insights with strategic decision-making.\nFocus Areas: AI applications, market analysis, business strategy, personalization systems",
      image: "/deca.jpg", // Ensure the path is correct
      link: "https://drive.google.com/file/d/1noWFgUb7cSnLxSdYohozpCGTg5zjDEhV/view?usp=sharing",
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
                about me
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
                about me
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
        <div className="pt-28">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-left">
            my work (click to explore!)
          </h1>
        </div>

        <br></br>
        {/* Tab Switcher */}
        <div className="mt-6 flex gap-4 justify-center">
          <button
            onClick={() => setActiveTab("internships")}
            className={`px-6 py-3 rounded-t-lg text-sm font-semibold transition ${
              activeTab === "internships" ? "bg-purple-600 text-white" : "bg-gray-200 text-gray-800"
            }`}
          >
            Internships
          </button>
          <button
            onClick={() => setActiveTab("projects")}
            className={`px-6 py-3 rounded-t-lg text-sm font-semibold transition ${
              activeTab === "projects" ? "bg-purple-600 text-white" : "bg-gray-200 text-gray-800"
            }`}
          >
            Projects
          </button>
        </div>

        {/* Content Panels */}
        {activeTab === "internships" && (
          <div className="mt-6 w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {internships.map((item, index) => (
              <a
                key={index}
                href={item.link || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="flex flex-col bg-white rounded-xl shadow-lg p-4 hover:shadow-xl transition-shadow duration-300 h-[400px]">
                  <h1 className="text-xl font-semibold text-purple-700 text-center mb-4">{item.date}</h1>
                  <div className="w-full h-40 mb-4">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={300}
                      height={150}
                      className="w-full h-full rounded-lg object-contain"
                    />
                  </div>
                  <div className="text-left flex-1 overflow-y-auto">
                    <h2 className="text-l font-bold text-gray-900 mb-1">{item.title}</h2>
                    <p className="text-sm text-gray-700 whitespace-pre-wrap">{item.description}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}

        {activeTab === "projects" && (
          <div className="mt-6 w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((item, index) => (
              <a
                key={index}
                href={item.link || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="flex flex-col bg-white rounded-xl shadow-lg p-4 hover:shadow-xl transition-shadow duration-300 h-[450px]">
                  <div className="w-full h-40 mb-4">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={300}
                      height={150}
                      className="w-full h-full rounded-lg object-contain"
                    />
                  </div>
                  <div className="text-left flex-1 overflow-y-auto">
                    <h2 className="text-xl font-bold text-gray-900 mb-1">{item.title}</h2>
                    <p className="text-sm text-gray-700 whitespace-pre-wrap">{item.description}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}
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
