"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { href: "/my-work", label: "my work" },
  { href: "/on-the-side", label: "on the side" },
  { href: "/my-story", label: "about me" },
];

const socialLinks = [
  { href: "mailto:tanzilhannah@gmail.com", icon: FaEnvelope, label: "Email" },
  { href: "https://www.linkedin.com/in/tanzilhussain/", icon: FaLinkedin, label: "LinkedIn" },
  { href: "https://github.com/tanzilhussain", icon: FaGithub, label: "GitHub" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile sheet whenever the route changes.
  useEffect(() => setIsOpen(false), [pathname]);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-line bg-canvas/80 shadow-nav backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="group flex items-center gap-2.5"
          aria-label="Home"
        >
          <span
            className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-accent
              to-accent-3 text-sm font-bold text-white shadow-sm transition-transform
              duration-300 ease-spring group-hover:-rotate-6 group-hover:scale-105"
          >
            th
          </span>
          <span className="hidden text-[17px] font-semibold tracking-tight text-ink sm:block">
            tanzil hussain
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`relative rounded-full px-4 py-2 text-base font-medium transition-colors
                  duration-200 ${active ? "text-accent-ink" : "text-ink-2 hover:text-accent"}`}
              >
                {active && (
                  <motion.span
                    layoutId="nav-pill"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    className="absolute inset-0 -z-10 rounded-full bg-accent-soft ring-1 ring-accent/20"
                  />
                )}
                {label}
              </Link>
            );
          })}

          <span className="mx-3 h-5 w-px bg-line-strong" />

          <div className="flex items-center gap-3">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-ink-3 transition-colors duration-200 hover:text-accent"
              >
                <Icon size={17} />
              </a>
            ))}
            <ThemeToggle className="ml-1" />
          </div>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            className="grid h-9 w-9 place-items-center rounded-full border border-line bg-surface-2 text-ink-2"
            onClick={() => setIsOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-line bg-canvas/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-xl px-3 py-2.5 text-[17px] font-medium transition-colors duration-200
                    ${
                      pathname === href
                        ? "bg-accent-soft text-accent-ink"
                        : "text-ink-2 hover:bg-surface-2 hover:text-accent"
                    }`}
                >
                  {label}
                </Link>
              ))}
              <div className="mt-2 flex gap-5 border-t border-line px-3 pt-4">
                {socialLinks.map(({ href, icon: Icon, label }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="text-ink-3 transition-colors duration-200 hover:text-accent"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
