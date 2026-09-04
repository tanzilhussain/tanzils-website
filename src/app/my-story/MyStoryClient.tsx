"use client";

import Image from "next/image";
import { Camera, Film, MapPin, ShoppingBag } from "lucide-react";
import Navbar from "../components/Navbar";
import Background from "../components/Background";
import Footer from "../components/Footer";

const facts = [
  { icon: MapPin, label: "Seattle, WA → Los Angeles, CA" },
  { icon: Film, label: "Thriller movies" },
  { icon: ShoppingBag, label: "Flea markets" },
  { icon: Camera, label: "Photography & photo editing" },
];

export default function MyStoryClient() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <Background />
      <Navbar />

      <main className="mx-auto w-full max-w-5xl flex-1 px-6 pb-24 pt-32 md:pt-40">
        <div className="reveal mb-12">
          <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-ink-3">nice to meet you</p>
          <h1 className="text-4xl font-semibold tracking-[-0.03em] text-ink sm:text-5xl">
            about <span className="text-gradient">me</span>
          </h1>
          <div className="rule mt-4" />
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-[0.85fr_1.15fr] md:gap-14">
          {/* Portrait + quick facts */}
          <div className="reveal mx-auto w-full max-w-[260px] md:sticky md:top-28 md:max-w-[290px]">
            <div className="relative">
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-accent/40 via-accent-2/25 to-accent-3/40 blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl border border-line bg-surface p-2 shadow-lift">
                <Image
                  src="/headshot.jpg"
                  alt="Tanzil Hussain"
                  width={480}
                  height={480}
                  priority
                  className="aspect-square w-full rounded-[1.25rem] object-cover"
                />
              </div>
            </div>

            <ul className="mt-6 space-y-2.5">
              {facts.map(({ icon: Icon, label }, i) => (
                <li
                  key={label}
                  style={{ animationDelay: `${300 + i * 70}ms` }}
                  className="reveal flex items-center gap-3 text-sm text-ink-2"
                >
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-accent-soft text-accent ring-1 ring-accent/15">
                    <Icon size={15} />
                  </span>
                  {label}
                </li>
              ))}
            </ul>
          </div>

          {/* Story */}
          <div
            style={{ animationDelay: "140ms" }}
            className="reveal space-y-6 text-[17px] leading-[1.75] text-ink-2"
          >
            <p className="text-xl leading-[1.6] text-ink">
              Hello! Thanks for being here :) My name is Tanzil, and I&apos;m a student at the{" "}
              University of Southern California (fight on! ✌️), where I&apos;m pursuing a major in{" "}
              <span className="font-semibold text-accent-ink">Artificial Intelligence for Business</span>.
            </p>
            <p>
              I&apos;m originally from Seattle, WA, where growing up around tech innovation inspired my
              passion for the intersection of technology and business. My background in both fields serves
              as an asset in translating technical expertise into business strategy, and vice versa.
            </p>
            <p>
              I&apos;m especially interested in{" "}
              <span className="font-semibold text-accent-ink">
                product management/strategy, security, and engineering
              </span>
              , and I hope to tie these interests together in a future internship or full-time role.
            </p>
            <p>
              Whether I&apos;m building tools, analyzing data, or exploring emerging tech, I&apos;m driven
              by a desire to create impactful solutions that serve both people and progress. In my free
              time, I love to watch thriller movies, visit flea markets, and try my hand at photography and
              photo editing!
            </p>

            <div className="rounded-2xl border border-accent/20 bg-accent-soft/60 p-6">
              <p className="text-[15px] text-ink-2">
                Want to talk product, AI, or the best flea markets in LA?
              </p>
              <a
                href="https://linkedin.com/in/tanzilhussain"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-ink px-5 py-2.5 text-sm
                  font-semibold text-canvas transition-all duration-300 ease-spring hover:scale-[1.03]
                  hover:bg-accent hover:text-white"
              >
                let&apos;s connect 🦋
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
