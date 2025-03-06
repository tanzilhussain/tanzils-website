"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

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


  const photoWidth = 300; 
  const gapWidth = 16; 
  const totalWidth = (photoWidth + gapWidth) * photos.length;

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

        {/* Page Title */}
        <div className="absolute left-4 md:left-20 top-[120px]">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-left">
            (on the side)
          </h1>
          <p className="text-xl md:text-2xl mt-4 md:mt-6 font-semibold text-purple-700 text-left">
            ~ products of my canon eos t5i, kodak pixpro, & adobe photoshop
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col items-center justify-center flex-grow w-full overflow-hidden mt-32 md:mt-64">
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
                  className="w-[300px] md:w-[600px] h-[175px] md:h-[350px] object-cover rounded-lg shadow-lg flex-shrink-0"
                />
              ))}
            </motion.div>
          </div>
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
};

export default OnTheSide;