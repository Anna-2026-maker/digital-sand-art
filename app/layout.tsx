import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "数字沙画台 · Sand Light",
  description: "在温暖的背光画板上落砂、塑形，体验真实的触控沙画创作。",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">{children}</body>
    </html>
  );
}
