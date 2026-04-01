import { experience } from "@/lib/data";
import { SectionLabel } from "./Projects";

export default function Experience() {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 py-24">
      <SectionLabel label="Experience" />
      <h2
        className="font-display text-3xl md:text-4xl font-bold mb-12"
        style={{ fontFamily: "var(--font-display)" }}
      >
        경력 / 이력
      </h2>

      <div className="relative border-l-2 border-[var(--border)] pl-6 sm:pl-8 space-y-8 sm:space-y-10">
        {experience.map((item, i) => (
          <div key={i} className="relative">
            {/* Dot */}
            <span className="absolute -left-[33px] sm:-left-[41px] top-1 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-accent border-4 border-[var(--bg)]" />

            <div className="card-glow p-4 sm:p-6 rounded-2xl bg-card border border-subtle">
              <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                <h3
                  className="font-display font-bold text-lg"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {item.role}
                </h3>
                <span className="font-mono text-xs text-accent px-2 py-1 rounded-md bg-card2">
                  {item.period}
                </span>
              </div>
              <p className="text-sm text-muted mb-3">{item.company}</p>
              <p className="text-sm text-fg leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
