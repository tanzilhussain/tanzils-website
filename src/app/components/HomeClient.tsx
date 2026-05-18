"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BarChart2, Database, Brain, Code, Cloud, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "./Navbar";

const roles = ["visionary🔮", "traveler✈️", "builder🛠", "designer🎨", "strategist🧠", "dreamer🌙", "analyst 💭"];

const skills = [
  {
    icon: Code,
    title: "Full-Stack Development",
    description: "Building web apps with React, FastAPI, TypeScript, HTML/CSS, and Flask",
  },
  {
    icon: Brain,
    title: "AI & NLP",
    description: "Using sentence-transformers and spaCy for text analysis and semantic search tasks",
  },
  {
    icon: Database,
    title: "Data Engineering",
    description: "Processing structured data with pandas, SQL, PostgreSQL, Supabase, and MySQL systems",
  },
  {
    icon: BarChart2,
    title: "Analytics & Visualization",
    description: "Visualizing insights using SHAP, Power BI, Tableau, Excel, and Sheets",
  },
  {
    icon: Cloud,
    title: "Cloud & APIs",
    description: "Deploying apps with AWS and building backend REST APIs using FastAPI framework",
  },
  {
    icon: Users,
    title: "Management",
    description: "Leading teams, scoping features, coordinating workflows, to meet product goals",
  },
];

const highlights = [
  {
    year: 2025,
    text: "Interned at Automus Consulting, leading RAG-based AI development for enterprise document Q&A and co-authoring research report on agentic AI in international development with Salesforce, Thunder, and USC's Neely Center.",
  },
  {
    year: 2024,
    text: "Interned at Bank of America, increased adoption of AI-powered banking tools and boosted client satisfaction scores through optimizing branch operations.",
  },
  {
    year: 2023,
    text: "Interned at Cartogram, contributed to product strategy for a healthcare wayfinding platform by analyzing user behavior data and conducting market research to enhance usability and client satisfaction.",
  },
];

export default function HomeClient() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-purple-100 flex flex-col items-center text-center px-6 overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <div className="max-w-4xl mx-auto mt-36 px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-gray-900 leading-tight tracking-tight"
        >
          hello, i&apos;m{" "}
          <span className="bg-gradient-to-r from-purple-600 via-violet-500 to-pink-500 bg-clip-text text-transparent">
            tanzil hussain
          </span>
          <br />
          <span className="text-gray-700 font-bold">a(n){" "}</span>
          <AnimatePresence mode="wait">
            <motion.span
              key={roles[roleIndex]}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="text-purple-600"
            >
              {roles[roleIndex]}
            </motion.span>
          </AnimatePresence>
        </motion.h1>

        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mt-16"
        >
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="relative shrink-0">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-400 to-pink-400 blur-md opacity-40 scale-105" />
              <Image
                src="/IMG_0418.jpg"
                alt="Tanzil Hussain"
                width={200}
                height={220}
                className="relative w-40 h-48 md:w-48 md:h-56 rounded-2xl object-cover shadow-xl ring-4 ring-white"
              />
            </div>
            <div className="prose prose-lg text-center md:text-left space-y-3">
              <p className="text-gray-700 text-lg leading-relaxed">
                I&apos;m studying{" "}
                <span className="text-purple-600 font-semibold">Artificial Intelligence for Business</span>{" "}
                at USC, and I&apos;m passionate about building AI-driven, user-centric innovations.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                I also love photography, flea markets, and butterfly watching.
              </p>
              <Link
                href="https://www.linkedin.com/in/tanzilhussain/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-purple-600 font-bold text-lg hover:text-pink-500 transition-colors duration-200 no-underline"
              >
                Let&apos;s connect! 🦋
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mt-24"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-2 text-gray-900 tracking-tight">
            Skills &amp; Toolkit
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full mx-auto mb-10" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-purple-200 text-left"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-purple-100 to-violet-100 rounded-xl group-hover:from-purple-200 group-hover:to-violet-200 transition-colors duration-300">
                    <item.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mt-24 mb-6"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-2 text-gray-900 tracking-tight">
            Recent Highlights
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full mx-auto mb-10" />
          <div className="space-y-6 text-left">
            {highlights.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative pl-8"
              >
                <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-gradient-to-br from-purple-500 to-pink-400 shadow-sm shadow-purple-200" />
                {i < highlights.length - 1 && (
                  <div className="absolute left-[7px] top-6 w-px h-full bg-purple-200" />
                )}
                <span className="inline-block text-sm font-bold text-purple-600 bg-purple-50 px-3 py-0.5 rounded-full mb-2 border border-purple-100">
                  {item.year}
                </span>
                <p className="text-gray-700 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <footer className="mt-16 w-full text-center py-10 text-gray-500">
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
