"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 1000); // Delay text appearance after image movement
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-purple-200 flex flex-col items-center text-center px-6 overflow-x-hidden">
      {/* Navigation */}
      <nav className="absolute top-5 w-full flex justify-between items-center px-10">
        <div className="text-2xl text-gray-700">
          <Link href="/">🏠</Link>
        </div>
        <div className="flex gap-6 text-gray-700">
          <Link href="/my-work" className="hover:text-black text-2xl">my work</Link>
          <Link href="/on-the-side" className="hover:text-black text-2xl">(on the side)</Link>
          <Link href="/my-story" className="hover:text-black text-2xl">my story</Link>
          {/* Gmail, LinkedIn, and GitHub icons */}
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
      </nav>

      {/* Page Title */}
      <div className="absolute left-20 top-[120px]">
        <h1 className="text-7xl font-bold text-gray-900 text-left font-vollkorn">my story</h1>
      </div>

      {/* Animated Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: 0 }}
        animate={{ opacity: 1, scale: 1, x: -200 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-[250px] left-[23%] transform -translate-x-1/2"
      >
        <Image
          src="/IMG_2313.jpg" 
          alt="Tanzil Hussain"
          width={350} 
          height={350} // Set height
          className="w-[350px] h-[350px] object-cover rounded-full shadow-lg"
        />
      </motion.div>

      {/* Animated Text */}
      {showText && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute left-[35rem] top-[225px] text-left"
        >
          <p className="text-black text-1xl font-semibold font-work-sans">
            Hello! Thanks for being here :) My name is Tanzil Hussain, and I&apos;m a student at the <br /> University of Southern California studying <span className="text-purple-700 font-bold"> Artificial Intelligence for Business</span>, with specializations in <br /> Applied Analytics and Computer Programming.<br /><br />
            Growing up in Seattle, WA, surrounded by some of the world&apos;s most influential tech companies, <br /> sparked my early fascination with technology. As I explored my interests, I found myself equally <br />drawn to business, captivated by how <span className="text-purple-700 font-bold">innovative ideas transform into impactful products. </span><br />This passion has led me to pursue a career at the intersection of business and technology.<br /><br />
            From leading project initiatives and advocating for equity in education to interning at tech and <br />financial firms, I&apos;ve gained experience in product strategy, data-driven decision-making, and <br />market innovation. I’m especially interested in product management, startups, and <span className="text-purple-700 font-bold">leveraging AI <br />to create technological breakthroughs.</span><br /><br />
            Whether it’s building AI-driven platforms, exploring product opportunities, or collaborating on <br />new ideas, I&apos;m looking to push boundaries and drive impact.<br /><br />
            <a href="https://www.linkedin.com/in/tanzilhussain/" target="_blank" rel="noopener noreferrer" className="text-purple-600 font-bold underline">Let&apos;s connect!</a> 🦋
          </p>
        </motion.div>
      )}

      {/* Footer */}
      <footer className="absolute bottom-0 w-full text-center py-10 text-black">
        <p className="text-1xl underline">
          <a href="https://github.com/tanzilhannah/tanzilhannah.github.io">
            &copy; {new Date().getFullYear()} Tanzil Hussain. Built with ❤️ using Next.js, Tailwind CSS, and TypeScript.
          </a>
        </p>
      </footer>
    </div>
  );
}