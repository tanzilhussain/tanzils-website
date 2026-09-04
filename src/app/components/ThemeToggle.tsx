"use client";

import { Moon, Sun } from "lucide-react";

/**
 * The correct icon is picked by CSS off the `dark` class that the inline
 * layout script sets before first paint — so there's no blank placeholder
 * and no hydration mismatch to reconcile.
 */
export default function ThemeToggle({ className = "" }: { className?: string }) {
  const toggle = () => {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    document.documentElement.style.colorScheme = next ? "dark" : "light";
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark mode"
      title="Toggle dark mode"
      className={`group grid h-9 w-9 place-items-center rounded-full border border-line
        bg-surface-2 text-ink-2 transition-colors duration-200 hover:border-accent/40
        hover:text-accent ${className}`}
    >
      <Sun
        size={18}
        className="transition-transform duration-300 ease-spring group-hover:rotate-45 dark:hidden"
      />
      <Moon
        size={17}
        className="hidden transition-transform duration-300 ease-spring group-hover:-rotate-12 dark:block"
      />
    </button>
  );
}
