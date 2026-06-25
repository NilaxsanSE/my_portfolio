import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Suvendralingam Nilaxsan | Software Engineer Portfolio",
  description:
    "Computer Science graduate and full-stack developer portfolio featuring web, mobile, Java desktop, and IoT-based software projects.",
  icons: {
    icon: [
      { url: "/favicon.ico?v=2", sizes: "any" },
      { url: "/icon.png?v=2", type: "image/png", sizes: "32x32" },
    ],
    shortcut: "/favicon.ico?v=2",
    apple: "/icon.png?v=2",
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
