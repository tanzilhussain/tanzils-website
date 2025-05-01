"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

export default function MyStory() {
  const [showText, setShowText] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showFooter, setShowFooter] = useState(false); 

  useEffect(() => {
    const timerText = setTimeout(() => {
      setShowText(true);
    }, 1000); 

    const timerFooter = setTimeout(() => {
      setShowFooter(true);
    }, 1000);

    return () => {
      clearTimeout(timerText);
      clearTimeout(timerFooter);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <Head>
        <title>My Story - Tanzil Hussain</title>
        <meta name="description" content="Learn more about Tanzil Hussain's journey and experiences." />
      </Head>
      
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-white z-50 shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Home Icon */}
          <div className="text-2xl text-gray-700">
            <Link href="/">🏠</Link>
          </div>
          {/* Mobile Menu Toggle */}
          <div className="md:hidden text-2xl text-gray-700 cursor-pointer" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </div>
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex gap-6 text-gray-700">
            <Link href="/my-work" className="hover:text-black text-xl">my work</Link>
            <Link href="/on-the-side" className="hover:text-black text-xl">(on the side)</Link>
            <Link href="/my-story" className="hover:text-black text-xl">my story</Link>
            {/* Social Media Links */}
            <div className="flex gap-6 mb-1 items-end">
              <Link href="mailto:tanzilhannah@gmail.com" target="_blank" className="hover:text-black text-xl">
                <FaEnvelope />
              </Link>
              <Link href="https://www.linkedin.com/in/tanzilhussain/" target="_blank" className="hover:text-black text-xl">
                <FaLinkedin />
              </Link>
              <Link href="https://github.com/tanzilhussain" target="_blank" className="hover:text-black text-xl">
                <FaGithub />
              </Link>
            </div>
          </div>
        </div>
         {/* Mobile Navigation Links */}
         {isMobileMenuOpen && (
            <div className="md:hidden text-center bg-white py-4">
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
      <div className="absolute left-4 md:left-20 top-[120px]">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-left">
          my story
        </h1>
      </div>

      
      {/* Page Content */}
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        exit={{ opacity: 0 }} 
        className="min-h-screen bg-gradient-to-br from-white to-purple-100 flex flex-col items-center text-center px-6 overflow-x-hidden"
      >
        <div className="max-w-4xl mx-auto pt-48 text-left">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-12"></h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              layout = "position"
              className="w-full max-w-[300px] mx-auto rounded-2xl shadow-lg object-cover" 
            >
              <Image
                src="/headshot.png"
                alt="Profile"
                width={400}
                height={400}
                className="w-full h-auto rounded-2xl shadow-lg object-cover"
              />
            </motion.div>


            {/* About Me Text */}
            {showText && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 1 }} 
                className="text-left space-y-4 text-lg"
              >
                <p>
                  Hello! Thanks for being here :) My name is Tanzil, and I&apos;m a student at the
                  <span className="text-primary font-semibold text-purple-700"> University of Southern California</span>, studying
                  <span className="text-primary font-semibold text-purple-700"> Artificial Intelligence for Business</span>.
                </p>
                <p>
                  Growing up in Seattle, WA, surrounded by influential tech companies, sparked my fascination with technology.
                  Over time, I developed a passion for <span className="text-primary font-semibold text-purple-700">bridging the gap between business and technology</span>.
                </p>
                <p>
                  From leading initiatives in non-profit organizations to interning at tech and financial firms, I&apos;ve gained experience in
                  <span className="text-primary font-semibold text-purple-700"> product strategy, data-driven decision-making, and market innovation</span>.
                </p>
                <p>
                  I&apos;m especially interested in <span className="text-primary font-semibold text-purple-700">data analytics, product management, startups, and AI-driven solutions</span>.
                  If you&apos;re interested in building something impactful together, 
                </p>
                {/* LinkedIn CTA */}
                <p>
                  <a href="https://linkedin.com/in/tanzilhussain" target="_blank" className="text-primary text-2xl font-semibold hover:underline text-purple-700">
                    Let&apos;s connect!
                  </a> 🦋
                </p>
              </motion.div>
            )}
          </div>
        </div>

        {/* Footer */}
        {showFooter && (
          <footer className="mt-10 w-full text-center py-10 text-black">
            <p className="text-sm underline">
              <a href="https://github.com/tanzilhussain/tanzils-website">
                &copy; {new Date().getFullYear()} Tanzil Hussain. Built with ❤️ using Next.js, Tailwind CSS, and TypeScript.
              </a>
            </p>
          </footer>
        )}
      </motion.div>
    </>
  );
}
