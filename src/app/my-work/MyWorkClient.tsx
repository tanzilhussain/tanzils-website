"use client";

import { useState, KeyboardEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";

type Action = { label: string; href: string };
type Item = {
  title: string;
  description: string;
  image?: string;
  date?: string;
  location?: string;
  tags?: string[];
  actions?: Action[];
};

const internships: Item[] = [
  {
    title: "MongoDB - AI Product Management Intern",
    location: "Palo Alto, CA",
    description:
      "Shipped an AI agent for performance & growth support to 6,000+ employees by identifying a tool gap through analysis of MongoGPT's deprecation and securing HR leadership buy-in to reframe usage data as an employee development need.\n\nDesigned and prototyped an internal guide cataloging 15+ AI tools tailored to business units by translating findings from 10+ cross-functional user interviews into a standardized enablement resource and partnering with 3 engineers on build.",
    image: "/mongodb.png",
    date: "June 2026 – August 2026",
    tags: ["AI Agents", "Product Management", "Stakeholder Alignment"],
  },
  {
    title: "USC Builder Hub - Product Engineer",
    location: "Los Angeles, CA",
    description:
      "Led a 5-person team building PlanUSC, a platform for 21,000+ students to reduce degree and course registration planning friction, by translating student pain points into product features and conducting iterative design reviews.\n\nEngineered a validation engine by unifying 74+ departments' fragmented clearance policies into a single dataset, and by running checks against prerequisites, course conflicts, and degree requirements to power the platform's scheduling logic.",
    image: "/usc-logo.jpg",
    date: "May 2026 – Present",
    tags: ["Product Engineering", "Team Leadership", "PlanUSC"],
  },
  {
    title: "Automus Consulting - AI Engineer Intern",
    description:
      "Co-built and led development of an AWS-hosted NLP pipeline using RAG for automated summarization, Q&A, and generation of technical design documents.\n\nDesigned a scalable knowledge base using Bedrock for vector-based semantic search and Aurora to store document metadata and user interaction logs.\n\nAccelerated delivery and team coordination by executing Agile sprints, leading daily standups, and managing Jira tasks.",
    image: "/automus.png",
    date: "Summer 2025",
    tags: ["AWS Bedrock", "RAG", "NLP", "Aurora", "Agile"],
    actions: [
      { label: "Letter of Recommendation", href: "https://tinyurl.com/letter-of-rec-tanzil" },
    ],
  },
  {
    title: "Bank of America - Financial Center Intern",
    description:
      "Increased adoption of AI-powered banking tools by analyzing client pain points and guiding ~50 customers weekly.\n\nBoosted client satisfaction scores by identifying service gaps and collaborating with staff to improve branch operations.",
    image: "/bofa.jpg",
    date: "Summer 2024",
    tags: ["AI Tools", "Client Relations", "Operations"],
    actions: [
      { label: "Award Certificate", href: "https://drive.google.com/file/d/1AOASJbabDlakfZFIj2zs8Lozq6WXwnld/view?usp=sharing" },
    ],
  },
  {
    title: "Cartogram - Product Strategy Intern",
    description:
      "Advocated for product adoption by creating technical explainers and blogs that translated complex features into clear value.\n\nInformed product improvement by conducting market research, identifying user needs, and guiding design and engineering.",
    image: "/cartogram.png",
    date: "Summer 2023",
    tags: ["Product Strategy", "Market Research", "Technical Writing"],
    actions: [
      { label: "Whitepaper", href: "https://drive.google.com/file/d/1QB-XkX7OmSYa6pSEd8FgGU0YlClBN4OA/view?usp=sharing" },
      { label: "Blog Post", href: "https://www.cartogram.com/what-are-personal-area-networks-pans/" },
    ],
  },
];

const projects: Item[] = [
  {
    title: "Hotel Pricing AI Engine",
    description:
      "Built an AI-powered hotel revenue forecasting engine with Peregrine Consulting to predict Occupancy Rate, ADR, and RevPAR for hotels in Tokyo. Dataset constructed using APIs and market research with features like rating, seasonal rates, competitor density, and distance to transit. XGBoost delivered best performance (R² ≈ 0.99).",
    image: "/peregrine.png",
    tags: ["XGBoost", "Python", "LightGBM", "LSTM", "Jupyter"],
    actions: [
      { label: "GitHub Repo", href: "https://github.com/tanzilhussain/Peregrine-Consulting-Hotel-Pricing-Engine" },
    ],
  },
  {
    title: "Transaction Fraud Risk Analyzer",
    description:
      "Built an interactive fraud detection dashboard that explains XGBoost predictions using SHAP. Designed to help users understand why transactions are flagged by visualizing feature contributions and modeling risky behavior patterns.",
    image: "/transaction.png",
    tags: ["XGBoost", "SHAP", "Streamlit", "Python"],
    actions: [
      { label: "GitHub Repo", href: "https://github.com/tanzilhussain/transaction-fraud-risk-analyzer" },
    ],
  },
  {
    title: "SmartPrompt",
    description:
      "Built a Chrome extension that gives users insights into their ChatGPT prompt behavior. It tracks prompt history, analyzes tone, verbosity, and repetition, and clusters your most common prompt topics using AI.",
    image: "/smartprompt.png",
    tags: ["FastAPI", "sentence-transformers", "spaCy", "Chrome Extension", "Chart.js"],
    actions: [
      { label: "GitHub Repo", href: "https://github.com/tanzilhussain/smartprompt" },
    ],
  },
  {
    title: "AI Product Management Certification",
    description:
      "Gained hands-on experience managing AI products from ideation to MVP. Learned to navigate the AI product lifecycle and align technical solutions with business goals for real-world impact.",
    image: "/aipmcert.png",
    tags: ["AI Strategy", "Product Lifecycle", "Stakeholder Alignment"],
    actions: [{ label: "View Certificate", href: "https://maven.com/certificate/jvgLkeCZ" }],
  },
  {
    title: "Case Competitions",
    description:
      "Solved business problems through case studies and operations research, including a paper on AI-driven hyper-personalization in hospitality. Strengthened the ability to merge data insights with strategic decision-making.",
    image: "/deca.jpg",
    tags: ["AI Applications", "Business Strategy", "Market Analysis"],
    actions: [
      { label: "Research Paper", href: "https://drive.google.com/file/d/1noWFgUb7cSnLxSdYohozpCGTg5zjDEhV/view?usp=sharing" },
    ],
  },
];

export default function MyWorkClient() {
  const [activeTab, setActiveTab] = useState<"internships" | "projects">("internships");

  const openInNewTab = (href: string) => {
    if (!href || href === "#") return;
    window.open(href, "_blank", "noopener,noreferrer");
  };

  const onKeyActivate = (e: KeyboardEvent, href: string) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openInNewTab(href);
    }
  };

  const items = activeTab === "internships" ? internships : projects;

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-purple-100 flex flex-col items-center px-6 overflow-x-hidden">
      <Navbar />

      <div className="w-full max-w-6xl pt-28 px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight"
        >
          my work
        </motion.h1>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 64 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="h-1 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full mt-3 mb-8"
        />

        {/* Tabs */}
        <div className="flex gap-3 mb-8">
          {(["internships", "projects"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-250 border
                ${activeTab === tab
                  ? "bg-purple-600 text-white border-purple-600 shadow-md shadow-purple-200"
                  : "bg-white text-gray-600 border-gray-200 hover:border-purple-300 hover:text-purple-600"}`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-12"
          >
            {items.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.07, duration: 0.4 }}
                className="group flex flex-col bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden border border-transparent hover:border-purple-100"
              >
                {item.date && (
                  <div className="px-5 pt-4">
                    <span className="text-xs font-bold text-purple-600 bg-purple-50 px-3 py-1 rounded-full border border-purple-100">
                      {item.date}
                    </span>
                  </div>
                )}
                {item.image && (
                  <div className="w-full h-36 mt-4 px-5">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={300}
                      height={144}
                      className="w-full h-full rounded-xl object-contain"
                    />
                  </div>
                )}

                <div className={`flex flex-col flex-1 p-5 gap-3 ${!item.image ? "mt-2" : ""}`}>
                  <div>
                    <h2 className="text-base font-bold text-gray-900 leading-snug">{item.title}</h2>
                    {item.location && <p className="text-xs text-gray-500 mt-0.5">{item.location}</p>}
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-wrap">{item.description}</p>

                  {item.tags && item.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-medium px-2.5 py-1 bg-violet-50 text-violet-700 rounded-full border border-violet-100"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {item.actions && item.actions.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-auto pt-3">
                      {item.actions.map((a, i) => (
                        <button
                          key={i}
                          onClick={() => openInNewTab(a.href)}
                          onKeyDown={(e) => onKeyActivate(e, a.href)}
                          className="px-4 py-1.5 rounded-full text-xs font-bold bg-purple-600 text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 transition-colors duration-200"
                          aria-label={a.label}
                        >
                          {a.label} ↗
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <footer className="mt-4 w-full text-center py-10 text-gray-500">
        <p className="text-sm">
          <Link
            href="https://github.com/tanzilhussain/tanzils-website"
            className="hover:text-purple-600 transition-colors duration-200 underline underline-offset-2"
          >
            &copy; {new Date().getFullYear()} Tanzil Hussain. Built with ❤️ using Next.js, Tailwind CSS, and TypeScript.
          </Link>
        </p>
      </footer>
    </div>
  );
}
