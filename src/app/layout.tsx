import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Suvendralingam Nilaxsan | Software Engineer Portfolio",
  description:
    "Computer Science graduate and full-stack developer portfolio featuring web, mobile, Java desktop, and IoT-based software projects.",
  icons: {
    icon: [
      { url: "/portfolio-icon-v3.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon.ico?v=3", sizes: "any" },
    ],
    shortcut: "/portfolio-icon-v3.png",
    apple: "/portfolio-icon-v3.png",
  },
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
