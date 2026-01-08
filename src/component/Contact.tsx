"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { FaTwitter, FaTelegram, FaMedium, FaGithub } from "react-icons/fa";

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

  /* ===============================
     FIX: move targetValues to useRef
     =============================== */
  const targetValues = useRef({
    projects: 30,
    products: 30,
    people: 100,
  });

  const statsRef = useRef<HTMLDivElement | null>(null);
  const hasAnimated = useRef(false);

  const socialLinks = [
    {
      icon: <FaTwitter className="text-xl" />,
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
    if (error) setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("https://formspree.io/f/mdakqprl", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Contact from ${formData.name} - ZubbyCrypt`,
          _replyto: formData.email,
        }),
      });

      if (!response.ok) throw new Error("Failed to send message");

      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Failed to send message. Please try again."
      );
      setTimeout(() => setError(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  /* ===============================
     FIXED useCallback (no warning)
     =============================== */
  const animateCounters = useCallback(() => {
    const duration = 2000;
    const steps = 60;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;

      setCounters({
        projects: Math.floor(targetValues.current.projects * progress),
        products: Math.floor(targetValues.current.products * progress),
        people: Math.floor(targetValues.current.people * progress),
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounters(targetValues.current);
      }
    }, duration / steps);
  }, []);

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
      className="py-24 px-6 bg-gradient-to-b from-black/20 via-black/30 to-black/40"
    >
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-6">
            Let&apos;s Work <span className="text-purple-400">Together</span>
          </h2>
          <p className="text-gray-300">
            Have a project or collaboration in mind? I’ll respond within 24
            hours.
          </p>
        </div>

        {/* Form + Social */}
        <div className="grid md:grid-cols-2 gap-12">
          <form
            onSubmit={handleSubmit}
            className="bg-black/40 p-8 rounded-2xl border border-purple-900/30 space-y-5"
          >
            <input
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
              className="input"
            />
            <input
              name="email"
              type="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              required
              className="input"
            />
            <textarea
              name="message"
              placeholder="Your message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              className="input resize-none"
            />

            {error && <p className="text-red-400 text-sm">{error}</p>}
            {isSubmitted && (
              <p className="text-green-400 text-sm">
                Message sent successfully!
              </p>
            )}

            <button
              disabled={isSubmitting}
              className="w-full py-4 rounded-xl bg-purple-600 hover:bg-purple-700 transition"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>

          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  className={`p-4 rounded-xl bg-black/40 border border-gray-800 flex items-center gap-3 ${s.color}`}
                >
                  {s.icon}
                  <span>{s.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div ref={statsRef} className="grid md:grid-cols-3 gap-6 text-center">
          <Stat label="Projects" value={counters.projects} />
          <Stat label="Products" value={counters.products} />
          <Stat label="People Helped" value={counters.people} />
        </div>

        <div className="text-center text-gray-400 border-t border-gray-800 pt-6">
          © {new Date().getFullYear()}{" "}
          <span className="text-purple-400">ZubbyCrypt</span>
        </div>
      </div>
    </footer>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="text-4xl font-bold text-white">
        {value}
        <span className="text-purple-400">+</span>
      </div>
      <div className="text-gray-300">{label}</div>
    </div>
  );
}
