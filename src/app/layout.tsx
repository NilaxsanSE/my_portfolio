import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Suvendralingam Nilaxsan | Software Engineer Portfolio",
  description:
    "Computer Science undergraduate and full-stack developer portfolio featuring web, mobile, Java desktop, and IoT-based software projects.",
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
