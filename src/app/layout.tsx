import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ZubbyCrypt | Developer • Writer • Crypto Enthusiast",
  description: "Professional portfolio of ZubbyCrypt",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Use existing logo as favicon */}
        <link rel="icon" href="/logo.png" />
        <link rel="apple-touch-icon" href="/logo.png" />
      </head>
      <body className="bg-gradient-to-br from-[#0b0614] via-[#140b2d] to-[#1b0f3f] text-white">
        {children}
      </body>
    </html>
  );
}
