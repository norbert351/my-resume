"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const roles = [
  "Software Developer",
  "Technical Writer",
  "Crypto Enthusiast",
  "Entrepreneur",
];

export default function HomeSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden"
    >
      {/* Background Shapes */}
      <div className="absolute right-[-10%] top-1/4 w-[300px] h-[300px] bg-purple-600/30 rounded-xl blur-3xl" />
      <div className="absolute left-[-10%] bottom-1/4 w-[200px] h-[200px] bg-purple-400/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl text-center md:text-left">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-gray-400 mb-2"
        >
          Hello, I’m
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-extrabold"
        >
          <span className="text-purple-400">Zubby</span>Crypt
        </motion.h1>

        {/* Animated Role */}
        <div className="h-10 mt-4 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.h2
              key={roles[index]}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="text-xl md:text-2xl font-semibold text-gray-300"
            >
              {roles[index]}
            </motion.h2>
          </AnimatePresence>
        </div>

        <p className="mt-6 text-gray-400 max-w-xl">
          I build scalable web applications, write technical content, explore
          blockchain technology, and help ideas grow into production-ready
          digital products.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 transition"
          >
            Say Hello
          </a>
          <a
            href="#about"
            className="px-6 py-3 rounded-xl border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black transition"
          >
            About Me
          </a>
        </div>
      </div>
    </section>
  );
}
