"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaBars, FaTimes } from "react-icons/fa";
import { BarChart2, Database, LineChart, Computer, PieChart, Brain } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

const roles = ["visionary🔮", "traveler✈️", "builder🛠", "designer🎨", "strategist🧠", "dreamer🌙", "analyst 💭"];

const currentFocus = [
  {
    icon: Database,
    title: "Data Management",
    description: "Working with SQL, MongoDB, and data warehousing solutions for scalable data storage/retrieval",
  },
  {
    icon: BarChart2,
    title: "Business Intelligence",
    description: "Creating actionable insights with Power BI, Tableau, and other data viz tools",
  },
  {
    icon: LineChart,
    title: "Analytics",
    description: "Performing statistical analysis using Python, R, and advanced Excel to inform data-driven decisions",
  },
  {
    icon: Brain,
    title: "AI Integration",
    description: "Integrating AI algorithms with traditional analytics to generate enhanced insights",
  },
  {
    icon: PieChart,
    title: "Reporting",
    description: "Building automated, interactive dashboards to track and present key metrics",
  },
  {
    icon: Computer,
    title: "Software Development",
    description: "Building apps using HTML/CSS, JS, React, and other modern technologies",
  },
];

export default function HomePage() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [showGlimpse, setShowGlimpse] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowGlimpse(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <Head>
        <title>Tanzil Hussain</title>
        <meta name="description" content="Welcome to Tanzil's personal website!" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-white to-purple-100 flex flex-col items-center text-center px-6 overflow-x-hidden">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-white z-50 shadow-md">
          <div className="container mx-auto px-4 py-3 flex justify-between items-center">
            <div className="text-2xl text-gray-700">
              <Link href="/">🏠</Link>
            </div>
            {/* Hamburger Menu Icon */}
            <div className="md:hidden text-2xl text-gray-700 cursor-pointer" onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </div>
            {/* Desktop Navigation Links */}
            <div className="hidden md:flex gap-6 text-gray-700">
              <Link href="/my-work" className="hover:text-black text-xl">
                my work
              </Link>
              <Link href="/on-the-side" className="hover:text-black text-xl">
                (on the side)
              </Link>
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
              <Link href="/on-the-side" className="block px-4 py-2 text-gray-700 hover:bg-purple-50">
                (on the side)
              </Link>
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

        {/* Hero Section */}
        <div className="max-w-4xl mx-auto mt-32 px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900">
            hi, i&apos;m tanzil hussain— <br />a{" "}
            <AnimatePresence mode="wait">
              <motion.span
                key={roles[roleIndex]}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-purple-600"
              >
                {roles[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </h1>

          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: showGlimpse ? 1 : 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 space-y-6"
          >
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <Image
                src="/IMG_0418.jpg"
                alt="Tanzil Hussain"
                width={180}
                height={200}
                className="w-40 h-40 md:w-48 md:h-48 rounded-xl object-cover shadow-lg"
              />
              <div className="prose prose-lg text-left opacity-100">
                <p className="opacity-100">
                  I&apos;m studying <span className="text-purple-600 font-semibold">Artificial Intelligence & Business</span> at USC,
                  and I&apos;m passionate about building AI-driven, user-centric innovations.
                </p>
                <p className="opacity-100">
                  I also love photography, sightseeing, flea markets, slam poetry, and butterfly watching.
                </p>
                <a
                  href="https://www.linkedin.com/in/tanzilhussain/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 font-semibold hover:underline"
                >
                  Let&apos;s connect!
                </a>{" "}
                🦋
              </div>
            </div>
          </motion.div>


          {/* Tech Toolkit Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            className="mt-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900">Technical Toolkit</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentFocus.map((item) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2}}
                  className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-purple-100 rounded-lg">
                      <item.icon className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Timeline Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2 }}
            className="mt-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900">Recent Highlights</h2>
            <div className="space-y-8">
              {[2025, 2024, 2023].map((year) => (
                <div key={year} className="relative">
                  <div className="absolute left-0 top-0 w-px h-full bg-purple-200" />
                  <div className="pl-8 relative">
                    <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-purple-100 border-2 border-purple-600" />
                    <h3 className="text-xl font-semibold text-purple-600">{year}</h3>
                    <p className="mt-2 text-gray-600">
                    {year === 2025 && 
                      "Currently building innovative AI-driven solutions, focusing on product development and data analytics applications."
                    }
                    {year === 2024 && 
                      "Led multiple successful client engagement projects at Bank of America, focusing on financial technology solutions and improving customer experience in the financial services industry."
                    }
                    {year === 2023 && 
                      "Worked on impactful healthcare technology solutions at Cartogram, contributing to the development of innovative tools for the healthcare sector."
                    }
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <footer className="mt-10 w-full text-center py-10 text-gray-700">
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