"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import Head from 'next/head';

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
  // Calculate the total width of the motion.div
  const photoWidth = 600; // Width of each photo in pixels
  const gapWidth = 16; // Gap between photos in pixels (gap-4 = 16px)
  const totalWidth = (photoWidth + gapWidth) * photos.length;

  return (
    <>
    <Head>
      <title>Tanzil's Website</title>
      <meta name="description" content="Welcome to Tanzil's personal website!" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="shortcut icon" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
    <div className="min-h-screen bg-gradient-to-br from-white to-purple-200 flex flex-col items-center text-center px-6 overflow-x-hidden">
      {/* Navigation */}
      <nav className="absolute top-5 w-full flex justify-between items-center px-10">
        <div className="text-2xl text-gray-700">
          <Link href="/">🏠</Link>
        </div>
        <div className="flex gap-6 text-gray-700">
          <Link href="/my-work" className="hover:text-black text-2xl">
            my work
          </Link>
          <Link href="/on-the-side" className="hover:text-black text-2xl">
            (on the side)
          </Link>
          <Link href="/my-story" className="hover:text-black text-2xl">
            my story
          </Link>
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
        <h1 className="text-7xl font-bold text-gray-900 text-left font-vollkorn">(on the side)</h1>
        <p className="text-4xl mt-6 font-semibold text-purple-700 text-left font-vollkorn">
          ~ products of my canon eos t5i, kodak pixpro, & adobe photoshop
        </p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center flex-grow w-full overflow-hidden">
        <div className="w-full overflow-hidden mt-64">
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
                className="w-[600px] h-[350px] object-cover rounded-lg shadow-lg flex-shrink-0"
              />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-10 w-full text-center py-10 text-black">
        <p className="text-1xl underline">
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