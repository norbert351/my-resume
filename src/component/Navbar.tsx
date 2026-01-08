"use client";

import { useState } from "react";
import Image from "next/image";

const navItems = ["Home", "About", "Services", "Testimonials", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur bg-black/40">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="ZubbyCrypt Logo" width={40} height={40} />
          <span className="font-bold text-purple-400">ZubbyCrypt</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-sm">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-purple-400 transition"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-purple-400"
        >
          {open ? (
            <span className="text-2xl font-bold">×</span>
          ) : (
            <span className="text-2xl font-bold">☰</span>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-black/70 px-6 py-4 space-y-4">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="block text-sm hover:text-purple-400"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
