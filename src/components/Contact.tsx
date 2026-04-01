import { siteConfig } from "@/lib/data";
import { SectionLabel } from "./Projects";
import { Mail, Github, ArrowUpRight } from "lucide-react";

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

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/bagoye",
    href: siteConfig.github,
  },
  {
    icon: InstagramIcon,
    label: "Instagram",
    value: "@yiisuyeon",
    href: siteConfig.instagram,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-24 pb-32">
      <SectionLabel label="Contact" />
      <h2
        className="font-display text-3xl md:text-4xl font-bold mb-4"
        style={{ fontFamily: "var(--font-display)" }}
      >
        연락하기
      </h2>
      <p className="text-muted mb-12 max-w-md"></p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-12">
        {contacts.map(({ icon: Icon, label, value, href }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("mailto") ? undefined : "_blank"}
            rel="noopener noreferrer"
            className="group flex flex-col p-5 rounded-2xl bg-card border border-subtle hover:border-[var(--accent)] transition-all"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="p-2 rounded-lg bg-card2 text-accent">
                <Icon size={18} />
              </span>
              <ArrowUpRight
                size={14}
                className="text-muted group-hover:text-accent transition-colors"
              />
            </div>
            <span className="font-mono text-xs text-muted mb-0.5">{label}</span>
            <span className="text-sm text-fg group-hover:text-accent transition-colors truncate">
              {value}
            </span>
          </a>
        ))}
      </div>

      {/* Big CTA */}
      <div className="text-center p-6 sm:p-10 rounded-3xl bg-card border border-subtle relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, var(--accent) 0%, transparent 70%)",
          }}
        />
        <h3
          className="font-display text-2xl md:text-3xl font-bold mb-3 relative z-10"
          style={{ fontFamily: "var(--font-display)" }}
        >
          같이 만들어요
        </h3>
        <p className="text-muted text-sm mb-6 relative z-10">
          새로운 기회나 프로젝트에 열려 있습니다.
        </p>
        <a
          href={`mailto:${siteConfig.email}`}
          className="relative z-10 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-black font-semibold text-sm hover:opacity-90 transition-opacity"
        >
          <Mail size={15} /> 이메일 보내기
        </a>
      </div>

      <p className="text-center text-muted font-mono text-xs mt-12">
        © {new Date().getFullYear()} {siteConfig.name}. Built with Next.js +
        Tailwind.
      </p>
    </section>
  );
}
