"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Background from "../components/Background";
import Footer from "../components/Footer";

type Photo = {
  src: string;
  alt: string;
  caption: string;
  /** Intrinsic size — keeps the masonry columns balanced and avoids layout shift. */
  w: number;
  h: number;
};

const photos: Photo[] = [
  { src: "/seattle-skyline.jpg", alt: "The Seattle skyline at sunset", caption: "Seattle, WA", w: 1086, h: 724 },
  { src: "/grand-central.jpg", alt: "Inside Grand Central Market", caption: "Grand Central Market", w: 1200, h: 1800 },
  { src: "/atlanta.jpg", alt: "Downtown Atlanta", caption: "Atlanta, GA", w: 1800, h: 1253 },
  { src: "/mexico1.jpg", alt: "Palm trees against a blue sky in Mexico", caption: "Mexico", w: 1800, h: 1200 },
  { src: "/sunset.jpg", alt: "Sunset over the water", caption: "Golden hour", w: 1064, h: 709 },
  { src: "/mexico2.jpg", alt: "A map by the sea in Mexico", caption: "Mexico", w: 1800, h: 1282 },
  { src: "/mexico3.jpg", alt: "Pink sunset over the horizon in Mexico", caption: "Mexico", w: 1800, h: 1211 },
  { src: "/mexico4.jpg", alt: "Watching the sea in Mexico", caption: "Mexico", w: 1800, h: 1200 },
];

const gear = ["Canon EOS T5i", "Kodak PixPro", "Adobe Photoshop"];

export default function OnTheSideClient() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const step = useCallback(
    (delta: number) =>
      setOpenIndex((i) => (i === null ? i : (i + delta + photos.length) % photos.length)),
    []
  );

  // Keyboard control + scroll lock while the lightbox is open.
  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [openIndex, close, step]);

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <Background />
      <Navbar />

      <main className="mx-auto w-full max-w-6xl flex-1 px-6 pb-24 pt-32 md:pt-40">
        <div className="reveal mb-10">
          <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-ink-3">off the clock</p>
          <h1 className="text-4xl font-semibold tracking-[-0.03em] text-ink sm:text-5xl">
            on the <span className="text-gradient">side</span>
          </h1>
          <div className="rule mt-4" />
          <p className="mt-6 max-w-xl leading-relaxed text-ink-2">
            Photos I&apos;ve taken and edited along the way - cities, coastlines, and the occasional
            perfect sunset.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {gear.map((g) => (
              <span key={g} className="chip px-3 py-1.5 text-xs font-medium">
                {g}
              </span>
            ))}
          </div>
        </div>

        {/* Masonry gallery */}
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
          {photos.map((photo, i) => (
            <button
              key={photo.src}
              // CSS-driven reveal rather than a motion component: this gallery is
              // the whole page, so it must not depend on JS to become visible.
              style={{ animationDelay: `${i * 60}ms` }}
              onClick={() => setOpenIndex(i)}
              aria-label={`View ${photo.caption}`}
              className="reveal group relative block w-full break-inside-avoid overflow-hidden
                rounded-2xl border border-line bg-surface shadow-card transition-all duration-300
                ease-spring hover:-translate-y-1 hover:border-accent/40 hover:shadow-lift"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.w}
                height={photo.h}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="h-auto w-full object-cover transition-transform duration-500 ease-spring group-hover:scale-[1.04]"
              />
              <span
                className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end bg-gradient-to-t
                  from-black/70 via-black/20 to-transparent p-4 text-left text-sm font-medium text-white
                  opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              >
                {photo.caption}
              </span>
            </button>
          ))}
        </div>
      </main>

      <Footer />

      {/* Lightbox */}
      <AnimatePresence>
        {openIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label={photos[openIndex].caption}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
          >
            <button
              onClick={close}
              aria-label="Close"
              className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full
                bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <X size={20} />
            </button>

            <NavButton side="left" onClick={() => step(-1)} />
            <NavButton side="right" onClick={() => step(1)} />

            <motion.figure
              key={photos[openIndex].src}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="flex max-w-5xl flex-col items-center gap-3"
            >
              <div className="relative h-[72vh] w-[86vw] max-w-5xl">
                <Image
                  src={photos[openIndex].src}
                  alt={photos[openIndex].alt}
                  fill
                  sizes="90vw"
                  className="rounded-xl object-contain"
                />
              </div>
              <figcaption className="text-sm text-white/70">
                {photos[openIndex].caption}
                <span className="mx-2 text-white/30">·</span>
                {openIndex + 1} / {photos.length}
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function NavButton({ side, onClick }: { side: "left" | "right"; onClick: () => void }) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      aria-label={side === "left" ? "Previous photo" : "Next photo"}
      className={`absolute top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full
        bg-white/10 text-white transition-colors hover:bg-white/20 ${
          side === "left" ? "left-3 md:left-6" : "right-3 md:right-6"
        }`}
    >
      {side === "left" ? <ChevronLeft size={22} /> : <ChevronRight size={22} />}
    </button>
  );
}
