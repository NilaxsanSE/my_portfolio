import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NilaxsanSE | Software Engineer Portfolio",
  description:
    "Professional software engineering portfolio built with Next.js, TypeScript, Tailwind CSS, Framer Motion, and Vercel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
