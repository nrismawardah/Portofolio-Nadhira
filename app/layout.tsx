import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "nadhira's portfolio",
  description:
    "Portfolio of Nadhira Rismawardah — Data Science, AI, and Web Development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}