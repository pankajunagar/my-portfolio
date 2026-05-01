"use client";

import { motion } from "framer-motion";

export function CredibilityBar() {
  const logos = [
    "AWS", "Google Cloud", "Stripe", "Next.js", "GraphQL", "Capacitor", "Ionic", "Angular", "React"
  ];

  return (
    <section className="border-y border-white/5 bg-black/40 backdrop-blur-md overflow-hidden py-6">
      <div className="flex gap-10 whitespace-nowrap overflow-hidden relative">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10" />

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex gap-20 items-center min-w-max px-10"
        >
          {/* Duplicate the array for seamless scrolling */}
          {[...logos, ...logos].map((logo, i) => (
            <div key={i} className="flex items-center gap-3 opacity-30 hover:opacity-100 transition-opacity">
              <span className="font-mono text-xl font-bold tracking-widest uppercase">{logo}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
