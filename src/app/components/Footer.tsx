import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const socials = [
  { href: "mailto:tanzilhannah@gmail.com", icon: FaEnvelope, label: "Email" },
  { href: "https://www.linkedin.com/in/tanzilhussain/", icon: FaLinkedin, label: "LinkedIn" },
  { href: "https://github.com/tanzilhussain", icon: FaGithub, label: "GitHub" },
];

export default function Footer() {
  return (
    <footer className="mt-auto w-full border-t border-line/70 px-6 py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="text-sm text-ink-3">
          &copy; {new Date().getFullYear()} Tanzil Hussain &middot;{" "}
          <Link
            href="https://github.com/tanzilhussain/tanzils-website"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-line-strong underline-offset-4 transition-colors duration-200 hover:text-accent"
          >
            built with Next.js &amp; Tailwind
          </Link>
        </p>
        <div className="flex gap-4">
          {socials.map(({ href, icon: Icon, label }) => (
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
        </div>
      </div>
    </footer>
  );
}
