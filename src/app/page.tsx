"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaBars } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const roles = ["visionary🔮", "traveler✈️ ", "builder🛠", "designer🎨", "strategist🧠", "dreamer🌙", "analyst 💭"];

export default function HomePage() {
  const [color, setColor] = useState("rgb(211, 211, 211)");
  const [arrowSize, setArrowSize] = useState(16);
  const [roleIndex, setRoleIndex] = useState(0);
  const [showGlimpse, setShowGlimpse] = useState(false);
  const [showArrow, setShowArrow] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrollY(scrollY);

      const titleElement = document.getElementById("current-pursuits-title");
      const titlePosition = titleElement?.getBoundingClientRect().top;

      if (scrollY === 0) {
        setColor("rgb(211, 211, 211)");
        setArrowSize(16);
      } else if (titlePosition !== undefined && titlePosition >= -100) {
        const r = Math.min(74 + 150 * (scrollY / 1500), 255);
        const g = Math.min(10 + 100 * (scrollY / 1500), 112);
        const b = Math.min(255, 74 + 150 * (scrollY / 1000));
        setColor(`rgb(${r}, ${g}, ${b})`);
        setArrowSize(10 - scrollY / 10);
      } else {
        setColor("rgb(211, 211, 211)");
      }
    };

    const debouncedScroll = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", debouncedScroll);
    return () => window.removeEventListener("scroll", debouncedScroll);
  }, []);

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

  useEffect(() => {
    const arrowTimer = setTimeout(() => {
      setShowArrow(true);
    }, 2000);
    return () => clearTimeout(arrowTimer);
  }, []);

  const ArrowIcon = () => (
    <svg
      id="arrow-icon"
      width={arrowSize}
      height={arrowSize * 6.75}
      viewBox="0 0 16 108"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.29289 107.707C7.68342 108.098 8.31658 108.098 8.70711 107.707L15.0711 101.343C15.4616 100.953 15.4616 100.319 15.0711 99.9289C14.6805 99.5384 14.0474 99.5384 13.6569 99.9289L8 105.586L2.34315 99.9289C1.95262 99.5384 1.31946 99.5384 0.928932 99.9289C0.538408 100.319 0.538408 100.953 0.928932 101.343L7.29289 107.707ZM7 0L7 107H9L9 0L7 0Z"
        fill="black"
      />
    </svg>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-purple-200 flex flex-col items-center text-center px-4 sm:px-6 overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 py-4 px-4 sm:px-10">
        <div className="flex justify-between items-center">
          <div className="text-2xl text-gray-700">
            <Link href="/">🏠</Link>
          </div>
          <div className="hidden sm:flex gap-6 text-gray-700">
            <Link href="/my-work" className="hover:text-black text-2xl">
              my work
            </Link>
            <Link href="/on-the-side" className="hover:text-black text-2xl">
              (on the side)
            </Link>
            <Link href="/my-story" className="hover:text-black text-2xl">
              my story
            </Link>
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
            <Link href="/my-work" className="block hover:text-black text-2xl">
              my work
            </Link>
            <Link href="/on-the-side" className="block hover:text-black text-2xl">
              (on the side)
            </Link>
            <Link href="/my-story" className="block hover:text-black text-2xl">
              my story
            </Link>
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

      {/* Rest of the code remains the same, but ensure all elements use responsive classes */}
      {/* Example: Adjust text sizes and layouts for smaller screens */}
      <div className="absolute left-4 sm:left-20 top-[120px] sm:top-[160px]">
        <h1 className="text-4xl sm:text-7xl font-bold text-gray-900 text-left font-vollkorn">
          hi, i&apos;m tanzil hussain— a{" "}
          <AnimatePresence mode="wait">
            <motion.span
              key={roles[roleIndex]}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="font-semibold text-purple-600"
            >
              {roles[roleIndex]}
            </motion.span>
          </AnimatePresence>
        </h1>
      </div>
      {/* "Here’s a glimpse of my world" Text */}
      <motion.div
        className="absolute left-20 top-[275px]"
        initial={{ y: 0 }}
        animate={{ y: showGlimpse ? 275 : 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <p className="text-7xl font-semibold text-black-600 text-left font-vollkorn">
          and here’s a glimpse of my world.
        </p>
      </motion.div>

      {/* Photo and Description */}
      <motion.div
        className="absolute left-20 top-[275px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: showGlimpse ? 1 : 0 }}
        transition={{ delay: 1, duration: 1, ease: "easeInOut" }}
      >
        <div className="flex items-center space-x-10">
          <Image
            src="/IMG_0418.jpg"
            alt="Tanzil Hussain"
            width={180}
            height={200}
            className="w-[180px] h-[200px] object-cover rounded-xl shadow-lg float-right mr-4"
          />
          <p className="text-2xl leading-[2.5] font-semibold text-gray-900 text-left font-work-sans">
            I&apos;m studying <span className="font-bold text-purple-600">Artificial Intelligence & Business</span> at USC, and I&apos;m passionate{" "}
            <br />
            about building AI-driven, user-centric innovations. I also love photography <br /> (PS: check out on the side!), sightseeing, slam poetry, and butterfly watching.
            <br />{" "}
            <a
              href="https://www.linkedin.com/in/tanzilhussain/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 font-bold underline"
            >
              Let&apos;s connect!
            </a>{" "}
            🦋
          </p>
        </div>
      </motion.div>

      {/* Scroll Arrow */}
      {showArrow && (
        <motion.div
          className="absolute bottom-[50px] right-50 text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
          >
            <ArrowIcon />
          </motion.div>
        </motion.div>
      )}

      {/* Current Pursuits Section */}
      <div id="current-pursuits-title" className="mt-[100vh] mb-32 text-gray-600">
        <h2
          style={{
            color,
            opacity: Math.min(1, scrollY / 50),
            transition: "opacity 0.3s ease-in-out, color 0.3s ease-in-out",
          }}
          className="absolute left-20 text-9xl font-bold text-center font-vollkorn transition-all duration-500"
        >
          current pursuits
        </h2>
      </div>

      <div className="mt-16 px-10 w-full text-gray-800 space-y-16">
        <div className="flex items-center space-x-10">
          <Image
            src="/hacksc.png"
            alt="HackSC"
            width={450}
            height={150}
            className="w-[450px] h-[150px] rounded-lg shadow-md"
          />
          <div>
            <h3 className="text-5xl text-right font-bold text-black font-vollkorn">experience coordinator @ hackSC</h3>
            <p className="text-2xl text-right mt-4 leading-relaxed">
              This semester, I&apos;m a part of the team planning USC&apos;s premier hackathon, HackSC-X, SoCal Tech week, and many other events to promote creative problem solving through technology.
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-10">
          <div>
            <h3 className="text-5xl text-left font-bold text-black font-vollkorn"> personal projects @ USC</h3>
            <p className="text-2xl text-left mt-4 leading-relaxed">
              I am currently involved in several research projects focused on applying artificial intelligence and data science to real-world challenges and building practical tools that make a difference. Stay tuned for updates!
            </p>
          </div>
          <Image
            src="/ai pic.jpg"
            alt="personal projects"
            width={450}
            height={150}
            className="w-[450px] h-[150px] rounded-lg shadow-md"
          />
        </div>

        <div className="flex items-center space-x-10">
          <Image
            src="/upskilling.jpg"
            alt="upskilling"
            width={450}
            height={150}
            className="w-[450px] h-[150px] rounded-lg shadow-md"
          />
          <div>
            <h3 className="text-5xl text-right font-bold text-black font-vollkorn">upskilling @ home</h3>
            <p className="text-2xl text-right mt-4 leading-relaxed">
              To continuously grow, I’m upskilling by mastering Power BI for data visualization and deepening my knowledge in machine learning and AI.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-10 w-full text-center py-10 text-black">
        <p className="text-1xl underline">
          <a href="https://github.com/tanzilhannah/tanzilhannah.github.io">
            &copy; {new Date().getFullYear()} Tanzil Hussain. Built with ❤️ using Next.js, Tailwind CSS, and TypeScript.
          </a>
        </p>
      </footer>
    </div>
  );
}