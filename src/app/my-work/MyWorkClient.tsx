"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Background from "../components/Background";
import Footer from "../components/Footer";

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

const tabs = ["internships", "projects"] as const;
type Tab = (typeof tabs)[number];

export default function MyWorkClient() {
  const [activeTab, setActiveTab] = useState<Tab>("internships");
  const items = activeTab === "internships" ? internships : projects;

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <Background />
      <Navbar />

      <main className="mx-auto w-full max-w-6xl flex-1 px-6 pb-24 pt-32 md:pt-40">
        <div className="reveal">
          <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-ink-3">portfolio</p>
          <h1 className="text-4xl font-semibold tracking-[-0.03em] text-ink sm:text-5xl">
            my <span className="text-gradient">work</span>
          </h1>
          <div className="rule mt-4" />
        </div>

        {/* Segmented control */}
        <div
          style={{ animationDelay: "100ms" }}
          className="reveal mt-8 inline-flex rounded-full border border-line bg-surface/70 p-1 backdrop-blur"
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative rounded-full px-5 py-2 text-sm font-semibold capitalize transition-colors
                duration-200 ${activeTab === tab ? "text-white" : "text-ink-3 hover:text-accent"}`}
            >
              {activeTab === tab && (
                <motion.span
                  layoutId="tab-pill"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-accent to-accent-2 shadow-sm"
                />
              )}
              {tab}
            </button>
          ))}
        </div>

        {/* Keyed on the tab so switching re-mounts the cards and replays the
            CSS entrance animation. */}
        <div
          key={activeTab}
          className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {items.map((item, index) => (
            <WorkCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

function WorkCard({ item, index }: { item: Item; index: number }) {
  // Descriptions are authored as blank-line separated bullets.
  const points = item.description.split("\n\n").filter(Boolean);

  return (
    <article
      style={{ animationDelay: `${index * 60}ms` }}
      className="reveal card card-hover flex flex-col overflow-hidden rounded-2xl"
    >
      {item.image && (
        // Logos stay on a light plate in both themes so dark wordmarks stay legible.
        <div className="border-b border-line bg-white px-6 py-7">
          <div className="relative h-24 w-full">
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              className="object-contain"
            />
          </div>
        </div>
      )}

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          {item.date && (
            <p className="mb-1.5 font-mono text-[11px] font-medium uppercase tracking-wider text-accent-ink">
              {item.date}
            </p>
          )}
          <h2 className="text-[15px] font-semibold leading-snug tracking-tight text-ink">
            {item.title}
          </h2>
          {item.location && <p className="mt-1 text-xs text-ink-3">{item.location}</p>}
        </div>

        <ul className="space-y-2">
          {points.map((point, i) => (
            <li key={i} className="flex gap-2.5 text-[13px] leading-relaxed text-ink-3">
              <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent/60" />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        {item.tags && item.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {item.tags.map((tag) => (
              <span key={tag} className="chip px-2.5 py-1 text-[11px] font-medium">
                {tag}
              </span>
            ))}
          </div>
        )}

        {item.actions && item.actions.length > 0 && (
          <div className="mt-auto flex flex-wrap gap-2 pt-3">
            {item.actions.map((a) => (
              <a
                key={a.href}
                href={a.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn inline-flex items-center gap-1 rounded-full border border-line-strong
                  bg-surface-2 px-3.5 py-1.5 text-[11px] font-semibold text-ink-2 transition-all
                  duration-200 hover:border-accent/40 hover:bg-accent-soft hover:text-accent-ink"
              >
                {a.label}
                <ArrowUpRight
                  size={12}
                  className="transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                />
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
