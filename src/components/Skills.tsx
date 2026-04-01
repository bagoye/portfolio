import { skills } from "@/lib/data";
import { SectionLabel } from "./Projects";

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-24">
      <SectionLabel label="Skills" />
      <h2
        className="font-display text-3xl md:text-4xl font-bold mb-12"
        style={{ fontFamily: "var(--font-display)" }}
      >
        기술 스택
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
        {skills.map((group) => (
          <div
            key={group.category}
            className="card-glow p-5 rounded-2xl bg-card border border-subtle"
          >
            <h3 className="font-mono text-xs text-accent uppercase tracking-widest mb-4">
              {group.category}
            </h3>
            <ul className="space-y-2">
              {group.items.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-fg">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
