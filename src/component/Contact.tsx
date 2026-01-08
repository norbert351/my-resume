"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { FaXTwitter, FaTelegram, FaMedium, FaGithub } from "react-icons/fa6";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [counters, setCounters] = useState({
    projects: 0,
    products: 0,
    people: 0,
  });

  const targetValues = {
    projects: 30,
    products: 30,
    people: 100,
  };

  const statsRef = useRef<HTMLDivElement | null>(null);
  const hasAnimated = useRef(false);

  const socialLinks = [
    {
      icon: <FaXTwitter className="text-xl" />,
      label: "X (Twitter)",
      url: "https://x.com/Zubby_crypt",
      color: "hover:bg-white/10",
    },
    {
      icon: <FaTelegram className="text-xl" />,
      label: "Telegram",
      url: "https://t.me/Fra_Ncis6",
      color: "hover:bg-blue-500/20",
    },
    {
      icon: <FaMedium className="text-xl" />,
      label: "Medium",
      url: "https://medium.com/@ZubbyCrypt",
      color: "hover:bg-green-500/20",
    },
    {
      icon: <FaGithub className="text-xl" />,
      label: "GitHub",
      url: "https://github.com/norbert351",
      color: "hover:bg-gray-500/20",
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (error) setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("https://formspree.io/f/mdakqprl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Contact from ${formData.name} - ZubbyCrypt Website`,
          _replyto: formData.email,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });

        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to send message");
      }
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Failed to send message. Please try again."
      );

      // Clear error after 5 seconds
      setTimeout(() => {
        setError(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const animateCounters = useCallback(() => {
    const duration = 2000;
    const steps = 60;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;

      setCounters({
        projects: Math.floor(targetValues.projects * progress),
        products: Math.floor(targetValues.products * progress),
        people: Math.floor(targetValues.people * progress),
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounters(targetValues);
      }
    }, duration / steps);
  }, [targetValues.projects, targetValues.products, targetValues.people]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, [animateCounters]);

  return (
    <footer
      id="contact"
      className="py-24 px-4 sm:px-6 bg-gradient-to-b from-black/20 via-black/30 to-black/40"
    >
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let&apos;s Work <span className="text-purple-400">Together</span>
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Have a project or collaboration in mind? Send a message and
            I&apos;ll get back to you within 24 hours.
          </p>
        </div>

        {/* Contact Form Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Form */}
          <div className="bg-gradient-to-br from-black/40 to-purple-900/10 rounded-2xl p-8 border border-purple-900/30 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-6">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Your Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    placeholder="Tell me about your project..."
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>
              </div>

              {/* Error Message */}
              {error && (
                <div className="p-4 bg-red-900/30 border border-red-700 rounded-xl">
                  <div className="flex items-center gap-2 text-red-300">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-sm">{error}</span>
                  </div>
                </div>
              )}

              {/* Success Message */}
              {isSubmitted && (
                <div className="p-4 bg-green-900/30 border border-green-700 rounded-xl">
                  <div className="flex items-center gap-2 text-green-300">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-sm">
                      Message sent successfully! I&apos;ll get back to you soon.
                    </span>
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 ${
                  isSubmitted
                    ? "bg-green-600 hover:bg-green-700"
                    : "bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 shadow-lg hover:shadow-purple-500/25"
                } disabled:opacity-70 disabled:cursor-not-allowed`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-3">
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </div>
                ) : isSubmitted ? (
                  <div className="flex items-center justify-center gap-3">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Message Sent!
                  </div>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>

          {/* Social & Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Connect With Me
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 rounded-xl border border-gray-800 bg-black/40 flex flex-col items-center justify-center gap-3 transition-all hover:scale-105 ${social.color}`}
                  >
                    <div className="text-2xl text-white">{social.icon}</div>
                    <span className="text-sm font-medium text-white">
                      {social.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-black/40 to-purple-900/10 rounded-2xl p-6 border border-purple-900/30">
              <h4 className="text-xl font-bold text-white mb-4">
                Direct Contact
              </h4>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-3 bg-black/30 rounded-lg">
                  <div className="w-10 h-10 rounded-full bg-purple-900/30 flex items-center justify-center">
                    <span className="text-lg">📧</span>
                  </div>
                  <div>
                    <div className="font-medium text-white">Email</div>
                    <a
                      href="mailto:zubbycrypt.dev@gmail.com"
                      className="text-purple-300 hover:text-purple-200 text-sm"
                    >
                      zubbycrypt.dev@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div
          ref={statsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center py-12 px-8 rounded-2xl bg-gradient-to-r from-black/40 via-purple-900/10 to-black/40 border border-purple-900/30"
        >
          <Stat label="Projects Completed" value={counters.projects} />
          <Stat label="Digital Products" value={counters.products} />
          <Stat label="People Helped" value={counters.people} />
        </div>

        {/* Footer */}
        <div className="pt-8 border-t border-white/10 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400">
            <div>
              © {new Date().getFullYear()}{" "}
              <span className="text-purple-400 font-semibold">ZubbyCrypt</span>.
              All rights reserved.
            </div>
            <div className="text-sm">
              Built with passion for the Web3 community
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="p-4">
      <div className="text-4xl md:text-5xl font-bold text-white mb-2">
        {value}
        <span className="text-purple-400">+</span>
      </div>
      <div className="text-gray-300">{label}</div>
      <div className="mt-4">
        <div className="h-1 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full w-16 mx-auto"></div>
      </div>
    </div>
  );
}
