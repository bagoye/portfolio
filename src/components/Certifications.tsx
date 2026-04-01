import { certifications } from "@/lib/data";
import { SectionLabel } from "./Projects";
import { Award } from "lucide-react";

export default function Certifications() {
  return (
    <section id="certifications" className="max-w-6xl mx-auto px-6 py-24">
      <SectionLabel label="Certifications" />
      <h2
        className="font-display text-3xl md:text-4xl font-bold mb-12"
        style={{ fontFamily: "var(--font-display)" }}
      >
        자격증
      </h2>

      <div className="grid sm:grid-cols-2 gap-5">
        {certifications.map((cert) => (
          <div className="card-glow flex items-start gap-4 p-6 rounded-2xl bg-card border border-subtle">
            <span className="p-2.5 rounded-xl bg-card2 text-accent flex-shrink-0">
              <Award size={20} />
            </span>
            <div>
              <h3
                className="font-display font-bold text-base mb-1"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {cert.name}
              </h3>
              <p className="text-xs text-muted mb-3">{cert.issuer}</p>
              <div className="flex flex-wrap gap-3">
                <span className="font-mono text-xs text-accent px-2 py-1 rounded-md bg-card2">
                  {cert.date}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
