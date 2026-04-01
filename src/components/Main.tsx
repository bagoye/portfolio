"use client";

import { siteConfig } from "@/lib/data";
import { ArrowDown, Github } from "lucide-react";

export default function Main() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-5 sm:px-6 pt-20 sm:pt-24 pb-16 max-w-6xl mx-auto">
      <div className="relative z-10">
        {/* Headline */}
        <h1
          className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.05] tracking-tight mb-6"
          style={{
            fontFamily: "var(--font-display)",
            animation: "fadeUp 0.6s ease forwards",
            opacity: 0,
            animationDelay: "0.2s",
          }}
        >
          Interactive
          <br />
          <span className="text-accent">Content</span>
          <br />
          Developer
        </h1>

        {/* Description */}
        <p
          className="text-muted text-base sm:text-lg md:text-xl max-w-lg leading-relaxed mb-10"
          style={{
            animation: "fadeUp 0.6s ease forwards",
            opacity: 0,
            animationDelay: "0.35s",
          }}
        >
          <span
            className="font-display text-sm sm:text-base text-muted tracking-wide"
            style={{ fontFamily: "var(--font-display)" }}
          >
            이수연 · Lee Suyeon
          </span>
          <br />
          {siteConfig.description}
          <br />
          <span className="font-mono text-sm text-accent">
            typescript · javascript · phaser
          </span>
        </p>

        {/* CTAs */}
        <div
          className="flex flex-wrap items-center gap-3"
          style={{
            animation: "fadeUp 0.6s ease forwards",
            opacity: 0,
            animationDelay: "0.5s",
          }}
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-black font-semibold text-sm hover:opacity-85 transition-opacity"
          >
            프로젝트 보기 <ArrowDown size={16} />
          </a>
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-subtle text-fg text-sm font-medium hover:bg-card2 transition-colors"
          >
            <Github size={16} /> GitHub
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted"
        style={{ animation: "fadeIn 1s ease forwards 1s", opacity: 0 }}
      >
        <span className="font-mono text-xs">scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-[var(--fg-muted)] to-transparent" />
      </div>
    </section>
  );
}
