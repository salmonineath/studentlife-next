import type { Metadata } from "next";
import { Geist, Sora } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora", weight: ["700", "800"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://student-life.app"),
  title: {
    default: "Student Life — Organize Your University Life in Cambodia",
    template: "%s | Student Life",
  },
  description:
    "Student Life is a free all-in-one platform for Cambodian university students. Manage your schedule, track assignments, join study groups, and get AI-powered study help.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${sora.variable} scroll-smooth antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
