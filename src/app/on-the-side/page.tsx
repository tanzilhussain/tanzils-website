"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaBars } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const photos = [
  "/seattle-skyline.jpg",
  "/mexico1.png",
  "/atlanta.jpg",
  "/mexico4.png",
  "/sunset.jpg",
  "/mexico2.png",
  "/grand-central.jpg",
  "/mexico3.png",
];

const OnTheSide = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Calculate the total width of the motion.div
  const photoWidth = 300; // Adjusted width for mobile
  const gapWidth = 16; // Gap between photos in pixels (gap-4 = 16px)
  const totalWidth = (photoWidth + gapWidth) * photos.length;

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

      {/* Page Title */}
      <div className="absolute left-4 sm:left-20 top-[100px] sm:top-[120px]">
        <h1 className="text-4xl sm:text-7xl font-bold text-gray-900 text-left font-vollkorn">
          (on the side)
        </h1>
        <p className="text-xl sm:text-4xl mt-4 sm:mt-6 font-semibold text-purple-700 text-left font-vollkorn">
          ~ products of my canon eos t5i, kodak pixpro, & adobe photoshop
        </p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center flex-grow w-full overflow-hidden mt-32 sm:mt-64">
        <div className="w-full overflow-hidden">
          <motion.div
            className="flex gap-4"
            animate={{ x: [0, -totalWidth] }} // Move the photos to the left by the total width
            transition={{ ease: "linear", duration: 40, repeat: Infinity }}
            style={{ display: "flex", whiteSpace: "nowrap", width: `${totalWidth * 2}px` }} // Double the width for the duplicated photos
          >
            {[...photos, ...photos].map((photo, index) => (
              <Image
                key={index}
                src={photo}
                alt={`Photo ${index + 1}`}
                width={600}
                height={350}
                className="w-[300px] sm:w-[600px] h-[175px] sm:h-[350px] object-cover rounded-lg shadow-lg flex-shrink-0"
              />
            ))}
          </motion.div>
        </div>
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
};

export default OnTheSide;