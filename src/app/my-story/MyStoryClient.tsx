"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";

export default function MyStoryClient() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-purple-100 flex flex-col items-center overflow-x-hidden">
      <Navbar />

      <div className="w-full max-w-4xl mx-auto px-6 pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">about me</h1>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full mt-3 mx-auto md:mx-0" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-[300px]"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-400 to-pink-400 blur-lg opacity-30 scale-105" />
            <Image
              src="/headshot.jpg"
              alt="Tanzil Hussain"
              width={400}
              height={400}
              className="relative w-full h-auto rounded-2xl shadow-xl ring-4 ring-white object-cover"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="space-y-5 text-left text-lg text-gray-700 leading-relaxed"
          >
            <p>
              Hello! Thanks for being here :) My name is Tanzil, and I&apos;m a student at the{" "}
              University of Southern California (fight on! ✌️), where I&apos;m pursuing a major in{" "}
              <span className="text-purple-600 font-semibold">Artificial Intelligence for Business</span>.
            </p>
            <p>
              I&apos;m originally from Seattle, WA, where growing up around tech innovation inspired
              my passion for the intersection of technology and business. My background in both fields
              serves as an asset in translating technical expertise into business strategy, and vice versa.
            </p>
            <p>
              I&apos;m especially interested in{" "}
              <span className="text-purple-600 font-semibold">
                product management/strategy, security, and engineering
              </span>
              , and I hope to tie these interests together in a future internship or full-time role.
            </p>
            <p>
              Whether I&apos;m building tools, analyzing data, or exploring emerging tech, I&apos;m
              driven by a desire to create impactful solutions that serve both people and progress. In
              my free time, I love to watch thriller movies, visit flea markets, and try my hand at
              photography and photo editing!
            </p>
            <Link
              href="https://linkedin.com/in/tanzilhussain"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-purple-600 font-bold text-xl hover:text-pink-500 transition-colors duration-200 no-underline"
            >
              Let&apos;s connect! 🦋
            </Link>
          </motion.div>
        </div>
      </div>

      <footer className="mt-auto w-full text-center py-10 text-gray-500">
        <p className="text-sm">
          <a
            href="https://github.com/tanzilhussain/tanzils-website"
            className="hover:text-purple-600 transition-colors duration-200 underline underline-offset-2"
          >
            &copy; {new Date().getFullYear()} Tanzil Hussain. Built with ❤️ using Next.js, Tailwind CSS, and TypeScript.
          </a>
        </p>
      </footer>
    </div>
  );
}
