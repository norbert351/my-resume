"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Web & Software Development",
    desc: "Building functional web applications, dashboards, and user-facing products with modern frontend tools.",
  },
  {
    title: "Technical & Digital Writing",
    desc: "Writing clear documentation and articles that explain complex Web3, AI, and software products.",
  },
  {
    title: "Web3 Landing Pages & Token Websites",
    desc: "Creating fast, conversion-focused websites for crypto startups, token launches, and communities.",
  },
];

const education = [
  {
    title: "Computer Science",
    place: "Federal University of Technology",
    desc: "Strong foundation in technology, systems thinking, and applied problem solving.",
  },
  {
    title: "Technical Writing",
    place: "Self-Taught · Online Learning",
    desc: "Writing clear, developer-focused explanations for Web3, AI, and emerging technologies.",
  },
];

const experience = [
  {
    title: "Blockchain Trapper",
    place: "DroseraNetwork",
    desc: (
      <>
        Identified and responsibly reported smart contract vulnerabilities,
        improving platform security.
        <br />
        Evidence:{" "}
        <a
          href="https://github.com/norbert351/liquidity-trap"
          target="_blank"
          className="text-purple-400 underline"
        >
          GitHub Reports
        </a>
      </>
    ),
  },
  {
    title: "Co-Founder & Developer",
    place: "Orena Printing",
    desc: (
      <>
        Built a custom printing platform that allows users to order personalized
        prints from anywhere.
        <br />
        Project:{" "}
        <a
          href="https://orena-iota.vercel.app/"
          target="_blank"
          className="text-purple-400 underline"
        >
          Orena Printing Website
        </a>
      </>
    ),
  },
  {
    title: "Technical Writer",
    place: "Web3 & Open-source Projects",
    desc: "Writing technical articles and guides to simplify blockchain and software topics.",
  },
  {
    title: "Blockchain Contributor",
    place: "StarkNet Ecosystem",
    desc: "Contributing to developer education, documentation, and ecosystem growth.",
  },
];

export default function Services() {
  return (
    <section id="services" className="section bg-black/20">
      <div className="max-w-6xl mx-auto px-6">
        {/* ===== SERVICES ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-purple-400 text-sm mb-2">What I Do</p>
          <h2 className="text-3xl font-bold mb-10">Services</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-xl p-6"
              >
                <h3 className="font-semibold text-lg text-purple-400">
                  {service.title}
                </h3>
                <p className="text-gray-400 mt-2 text-sm">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ===== RESUME ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <p className="text-purple-400 text-sm mb-2">Know More</p>
          <h2 className="text-3xl font-bold mb-12">My Resume</h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-purple-400">
                Education
              </h3>

              <div className="space-y-6">
                {education.map((item, index) => (
                  <div key={index} className="relative pl-10">
                    <span className="absolute left-0 top-2 w-3 h-3 bg-purple-600 rounded-full" />
                    <div className="glass rounded-xl p-5">
                      <h4 className="font-semibold">{item.title}</h4>
                      <p className="text-sm text-purple-400">{item.place}</p>
                      <p className="text-gray-400 text-sm mt-2">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-purple-400">
                Experience
              </h3>

              <div className="space-y-6">
                {experience.map((item, index) => (
                  <div key={index} className="relative pl-10">
                    <span className="absolute left-0 top-2 w-3 h-3 bg-purple-600 rounded-full" />
                    <div className="glass rounded-xl p-5">
                      <div className="flex justify-between items-center">
                        <h4 className="font-semibold">{item.title}</h4>
                      </div>
                      <p className="text-sm text-purple-400">{item.place}</p>
                      <p className="text-gray-400 text-sm mt-2">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
