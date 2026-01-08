"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    text: "ZubbyCrypt brings clarity to complex systems. His ability to translate technical ideas into practical solutions made a huge difference for our product.",
    author: "Delour",
    role: "Reader",
  },
  {
    id: 2,
    text: "Clean architecture, clear communication, and strong execution. Working with ZubbyCrypt felt like adding a senior engineer to our team.",
    author: "Founder",
    role: "Early Stage Startup",
  },
  {
    id: 3,
    text: "A rare mix of developer and technical writer. His documentation and code quality helped our team move faster and avoid costly mistakes.",
    author: "Engineering Manager",
    role: "Blockchain Project",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section
      id="testimonials"
      className="section max-w-4xl mx-auto text-center relative"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-3xl font-bold text-purple-400">Testimonials</h2>
        <p className="text-gray-400 mt-2">What collaborators and clients say</p>
      </motion.div>

      {/* Testimonial Card */}
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={testimonials[index].id}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.4 }}
            className="glass rounded-2xl p-8 text-left"
          >
            <p className="text-gray-200 text-lg leading-relaxed italic">
              “{testimonials[index].text}”
            </p>

            <div className="mt-6 pt-4 border-t border-purple-900/30">
              <div className="font-semibold text-white">
                {testimonials[index].author}
              </div>
              <div className="text-purple-300 text-sm">
                {testimonials[index].role}
              </div>
            </div>
          </motion.blockquote>
        </AnimatePresence>

        {/* Controls */}
        <div className="flex justify-between items-center mt-8">
          <button
            onClick={prev}
            className="px-4 py-2 rounded-lg bg-black/40 hover:bg-purple-700 transition"
            aria-label="Previous testimonial"
          >
            ←
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-8 bg-purple-400" : "w-2 bg-gray-600"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="px-4 py-2 rounded-lg bg-black/40 hover:bg-purple-700 transition"
            aria-label="Next testimonial"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
