"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="section max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-purple-400 mb-6">About Me</h2>

        <p className="text-gray-300 leading-relaxed text-lg">
          I’m a{" "}
          <span className="text-purple-400 font-semibold">
            software developer
          </span>{" "}
          and
          <span className="text-purple-400 font-semibold">
            {" "}
            technical writer
          </span>{" "}
          focused on building scalable, high-performance web applications and
          translating complex blockchain ideas into clear, usable solutions.
        </p>

        <p className="mt-4 text-gray-400 leading-relaxed">
          I work with startups, founders, and digital teams to transform ideas
          into reliable, production-ready products combining clean code, strong
          architecture, and thoughtful communication.
        </p>
      </motion.div>
    </section>
  );
}
