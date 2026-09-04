"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, BarChart2, Brain, Cloud, Code, Database, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "./Navbar";
import Background from "./Background";
import Footer from "./Footer";

const roles = ["visionary 🔮", "traveler ✈️", "builder 🛠", "designer 🎨", "strategist 🧠", "dreamer 🌙", "analyst 💭"];

const skills = [
  {
    icon: Users,
    title: "Product Management",
    description:
      "Scoping roadmaps, writing requirements, and leading cross-functional teams to ship features that meet user and business goals",
  },
  {
    icon: Code,
    title: "Full-Stack Development",
    description: "Building web apps with React, FastAPI, TypeScript, HTML/CSS, and Flask",
  },
  {
    icon: Brain,
    title: "AI & NLP",
    description: "Building AI agents, RAG pipelines, and automations for semantic search and document Q&A",
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
];

const highlights = [
  {
    year: 2026,
    text: "Interned at MongoDB as an AI Product Management Intern, shipping an AI agent for performance & growth support to employees, and led a team as a Product Engineer at USC Builder Hub building PlanUSC for students.",
  },
  {
    year: 2025,
    text: "Interned at Automus Consulting, leading RAG-based AI development for enterprise document Q&A.",
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

/** Stagger helper — entrance timing lives in CSS, so content is never JS-gated. */
const delay = (ms: number) => ({ animationDelay: `${ms}ms` });

export default function HomeClient() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <Background />
      <Navbar />

      <main className="mx-auto w-full max-w-5xl flex-1 px-6">
        {/* ---------------------------------------------------------- Hero */}
        <section className="grid items-center gap-12 pt-32 md:grid-cols-[1.15fr_0.85fr] md:gap-14 md:pt-40">
          <div className="text-center md:text-left">
            <h1
              className="reveal text-4xl font-semibold leading-[1.08] tracking-[-0.03em] text-ink sm:text-5xl lg:text-6xl"
            >
              hello, i&apos;m
              <br />
              <span className="text-gradient">tanzil hussain</span>
            </h1>

            <p
              style={delay(160)}
              className="reveal mt-4 flex items-baseline justify-center gap-2 text-xl font-medium text-ink-2 md:justify-start md:text-2xl"
            >
              <span>a(n)</span>
              <span className="relative inline-block text-left">
                {/* Invisible longest role holds the line box open so the
                    absolutely positioned word can't collapse onto the copy. */}
                <span className="invisible" aria-hidden>
                  strategist 🧠
                </span>
                <span
                  key={roles[roleIndex]}
                  className="swap-in absolute left-0 top-0 whitespace-nowrap font-semibold text-accent"
                >
                  {roles[roleIndex]}
                </span>
              </span>
            </p>

            <p
              style={delay(240)}
              className="reveal mx-auto mt-7 max-w-lg text-[17px] leading-relaxed text-ink-2 md:mx-0"
            >
              I&apos;m studying{" "}
              <span className="font-semibold text-accent-ink">Artificial Intelligence for Business</span>{" "}
              at USC, and I&apos;m passionate about building AI-driven, user-centric innovations. I also
              love photography, flea markets, and butterfly watching.
            </p>

            <div
              style={delay(320)}
              className="reveal mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start"
            >
              <Link
                href="/my-work"
                className="group inline-flex items-center gap-1.5 rounded-full bg-ink px-5 py-2.5 text-sm
                  font-semibold text-canvas transition-all duration-300 ease-spring hover:scale-[1.03]
                  hover:bg-accent hover:text-white"
              >
                see my work
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
              <a
                href="https://www.linkedin.com/in/tanzilhussain/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-line-strong bg-surface/70
                  px-5 py-2.5 text-sm font-semibold text-ink-2 backdrop-blur transition-all duration-300
                  hover:border-accent/40 hover:text-accent"
              >
                let&apos;s connect 🦋
              </a>
            </div>
          </div>

          {/* Portrait */}
          <div style={delay(200)} className="reveal relative mx-auto w-full max-w-[220px] md:max-w-[290px]">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-accent/40 via-accent-2/30 to-accent-3/40 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-line bg-surface p-2 shadow-lift">
              <Image
                src="/IMG_0418.jpg"
                alt="Tanzil Hussain"
                width={560}
                height={700}
                priority
                className="aspect-[4/5] w-full rounded-[1.25rem] object-cover"
              />
            </div>
          </div>
        </section>

        {/* -------------------------------------------------------- Skills */}
        <section className="pt-20 md:pt-28">
          <SectionHeading eyebrow="what i do" title="Skills & Toolkit" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((item, i) => (
              <div
                key={item.title}
                style={delay(80 + i * 60)}
                className="reveal card card-hover group rounded-2xl p-6"
              >
                <div
                  className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-accent-soft
                    text-accent ring-1 ring-accent/15 transition-transform duration-300
                    ease-spring group-hover:scale-110 group-hover:-rotate-3"
                >
                  <item.icon className="h-[21px] w-[21px]" />
                </div>
                <h3 className="mb-1.5 text-[15px] font-semibold tracking-tight text-ink">{item.title}</h3>
                <p className="text-sm leading-relaxed text-ink-3">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ------------------------------------------------------ Timeline */}
        <section className="pb-24 pt-20 md:pt-28">
          <SectionHeading eyebrow="the story so far" title="Recent Highlights" />
          <div className="relative">
            {/* Single continuous rail behind the dots */}
            <div className="absolute bottom-3 left-[7px] top-3 w-px bg-gradient-to-b from-accent/50 via-line-strong to-transparent" />
            <div className="space-y-9">
              {highlights.map((item, i) => (
                <div key={item.year} style={delay(80 + i * 70)} className="reveal relative pl-9">
                  <span
                    className="absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-[3px]
                      border-canvas bg-gradient-to-br from-accent to-accent-3 ring-1 ring-accent/30"
                  />
                  <span className="font-mono text-xs font-semibold tracking-widest text-accent-ink">
                    {item.year}
                  </span>
                  <p className="mt-2 leading-relaxed text-ink-2">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="reveal mb-9">
      <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-ink-3">{eyebrow}</p>
      <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">{title}</h2>
      <div className="rule mt-3" />
    </div>
  );
}
