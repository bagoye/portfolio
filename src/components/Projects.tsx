"use client";

import { useState } from "react";
import { projects } from "@/lib/data";
import { Github, ExternalLink, Star } from "lucide-react";

type Filter = "all" | "company" | "personal";

const tabs: { label: string; value: Filter }[] = [
  { label: "전체", value: "all" },
  { label: "회사", value: "company" },
  { label: "개인", value: "personal" },
];

export default function Projects() {
  const [filter, setFilter] = useState<Filter>("all");

  const filtered =
    filter === "all" ? projects : projects.filter((p) => p.type === filter);

  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-24">
      <SectionLabel label="Projects" />
      <div className="flex flex-wrap items-end justify-between gap-3 mb-10">
        <h2
          className="font-display text-3xl md:text-4xl font-bold"
          style={{ fontFamily: "var(--font-display)" }}
        >
          만든 것들
        </h2>

        {/* Tabs */}
        <div className="flex items-center gap-1 p-1 rounded-xl bg-card2 border border-subtle">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setFilter(tab.value)}
              className={`px-3 sm:px-4 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-colors focus:outline-none border ${
                filter === tab.value
                  ? "bg-card text-fg shadow-sm border-subtle"
                  : "border-transparent text-muted hover:text-fg"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((project, i) => (
          <article
            key={project.id}
            className="card-glow group relative flex flex-col p-6 rounded-2xl bg-card border border-subtle hover:border-[var(--accent)]"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <div className="flex items-center justify-between mb-4">
              {project.featured && (
                <span className="inline-flex items-center gap-1 text-xs font-mono text-accent">
                  <Star size={11} fill="currentColor" /> Featured
                </span>
              )}
              <span
                className={`ml-auto text-xs font-mono px-2 py-0.5 rounded-full ${
                  project.type === "company"
                    ? "bg-accent/10 text-accent"
                    : "bg-card2 text-muted"
                }`}
              >
                {project.type === "company" ? "회사" : "개인"}
              </span>
            </div>

            <h3
              className="font-display font-bold text-lg mb-2 group-hover:text-accent transition-colors"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {project.title}
            </h3>
            <p className="text-muted text-sm leading-relaxed flex-1 mb-4">
              {project.description.split(/(\*[^*]+\*)/).map((part, i) =>
                part.startsWith("*") && part.endsWith("*") ? (
                  <span key={i} className="text-accent font-medium">
                    {part.slice(1, -1)}
                  </span>
                ) : (
                  part
                )
              )}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-md bg-card2 font-mono text-xs text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex items-center gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-fg transition-colors"
                >
                  <Github size={14} /> Code
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-fg transition-colors"
                >
                  <ExternalLink size={14} /> Demo
                </a>
              )}
            </div>

            {/* Hover gradient line */}
            <div className="absolute bottom-0 left-6 right-6 h-px bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full" />
          </article>
        ))}
      </div>
    </section>
  );
}

export function SectionLabel({ label }: { label: string }) {
  return (
    <div className="inline-flex items-center gap-3 mb-4">
      <span className="w-6 h-px bg-accent" />
      <span className="font-mono text-xs text-accent uppercase tracking-widest">
        {label}
      </span>
    </div>
  );
}
