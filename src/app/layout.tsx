import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/lib/ThemeContext";
import Navbar from "@/components/Navbar";
import CursorSparkle from "@/components/CursorSparkle";

export const metadata: Metadata = {
  title: "Lee Suyeon — Interactive Content Developer",
  description: "살아있는 인터랙티브 콘텐츠를 만드는 개발자입니다.",
  openGraph: {
    title: "Lee Suyeon — Interactive Content Developer",
    description:
      "JavaScript · TypeScript · Phaser 기반 인터랙티브 콘텐츠 개발 포트폴리오",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <CursorSparkle />
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
