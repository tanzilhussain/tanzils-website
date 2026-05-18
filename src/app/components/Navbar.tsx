"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/my-work", label: "my work" },
  { href: "/my-story", label: "about me" },
];

const socialLinks = [
  { href: "mailto:tanzilhannah@gmail.com", icon: FaEnvelope, label: "Email" },
  { href: "https://www.linkedin.com/in/tanzilhussain/", icon: FaLinkedin, label: "LinkedIn" },
  { href: "https://github.com/tanzilhussain", icon: FaGithub, label: "GitHub" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm border-b border-purple-100">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl hover:scale-110 transition-transform duration-200">🏠</Link>

        <button
          className="md:hidden text-2xl text-gray-700 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-lg font-medium transition-colors duration-200 relative pb-1 group
                ${pathname === href ? "text-purple-600" : "text-gray-700 hover:text-purple-600"}`}
            >
              {label}
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-purple-600 rounded-full transition-all duration-300
                  ${pathname === href ? "w-full" : "w-0 group-hover:w-full"}`}
              />
            </Link>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1.5 bg-purple-600 text-white text-sm font-semibold rounded-full hover:bg-purple-700 transition-colors duration-200 shadow-sm hover:shadow-md"
          >
            Resume ↗
          </a>
          <div className="flex gap-4 items-center">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-xl text-gray-600 hover:text-purple-600 transition-colors duration-200"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-t border-purple-100 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-3">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium py-2 transition-colors duration-200 hover:text-purple-600
                    ${pathname === href ? "text-purple-600 font-bold" : "text-gray-700"}`}
                >
                  {label}
                </Link>
              ))}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit px-4 py-1.5 bg-purple-600 text-white text-sm font-semibold rounded-full hover:bg-purple-700 transition-colors duration-200"
              >
                Resume ↗
              </a>
              <div className="flex gap-5 pt-2">
                {socialLinks.map(({ href, icon: Icon, label }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="text-xl text-gray-700 hover:text-purple-600 transition-colors duration-200"
                  >
                    <Icon />
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
