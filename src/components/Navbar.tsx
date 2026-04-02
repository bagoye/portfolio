"use client";

import { useTheme } from "@/lib/ThemeContext";
import { Moon, Sun, Github } from "lucide-react";

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}
import { useState, useEffect } from "react";
import { siteConfig } from "@/lib/data";

const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      if (menuOpen) setMenuOpen(false);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [menuOpen]);

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.slice(1));

    const onScroll = () => {
      const scrollY = window.scrollY;
      const threshold = window.innerHeight * 0.35;

      const firstSection = document.getElementById(sectionIds[0]);
      if (firstSection && scrollY < firstSection.offsetTop - threshold) {
        setActiveSection("");
        return;
      }

      let current = "";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && scrollY >= el.offsetTop - threshold) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--bg)]/90 backdrop-blur-xl border-b border-[var(--border)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className={`font-display text-xl font-800 tracking-tight transition-colors ${
            activeSection === "" ? "text-accent" : "text-fg"
          }`}
          style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
        >
          Lee Suyeon
          <span className="text-accent">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`text-sm font-medium transition-colors relative ${
                    isActive
                      ? "text-accent"
                      : "text-muted hover:text-fg"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent rounded-full" />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex p-2 rounded-lg text-muted hover:text-fg transition-colors"
          >
            <InstagramIcon size={18} />
          </a>
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex p-2 rounded-lg text-muted hover:text-fg transition-colors"
          >
            <Github size={18} />
          </a>
          <button
            onClick={toggle}
            className="p-2 rounded-lg text-muted hover:text-fg transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Mobile menu button */}
          <button
            className="md:hidden flex flex-col justify-center items-end gap-1.5 w-8 h-8 text-muted hover:text-fg"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className="block w-5 h-0.5 bg-current rounded-full transition-all" />
            <span className="block w-5 h-0.5 bg-current rounded-full transition-all" />
            <span className="block w-3 h-0.5 bg-current rounded-full transition-all" />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-card border-b border-subtle px-6 pb-4">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                className={`block py-2 text-sm font-medium transition-colors ${
                  isActive ? "text-accent" : "text-muted hover:text-fg"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            );
          })}
          <div className="flex items-center gap-3 pt-3 border-t border-subtle mt-2">
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted hover:text-fg transition-colors"
            >
              <InstagramIcon size={16} />
            </a>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted hover:text-fg transition-colors"
            >
              <Github size={16} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
