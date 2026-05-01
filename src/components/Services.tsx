"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Smartphone,
  Globe,
  Database,
  Palette,
} from "lucide-react";

// ── Expertise Cards ──────────────────────────────────────────────────────────
const services = [
  {
    id: 1,
    icon: <Smartphone className="w-7 h-7" />,
    title: "Hybrid Mobile",
    description:
      "Architecting high-performance iOS and Android apps using Ionic and Capacitor.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    icon: <Globe className="w-7 h-7" />,
    title: "Web Platforms",
    description:
      "Building immersive, lightning-fast web experiences with Next.js and React.",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    id: 3,
    icon: <Database className="w-7 h-7" />,
    title: "Backend Scale",
    description:
      "Robust API orchestration and real-time database architecture.",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    id: 4,
    icon: <Palette className="w-7 h-7" />,
    title: "System Design",
    description:
      "Creating comprehensive, reusable design systems for enterprise scale.",
    gradient: "from-orange-500 to-rose-500",
  },
];

// ── Main Component ────────────────────────────────────────────────────────────
export default function Services() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

  return (
    <section id="services" className="section-padding bg-muted/30 relative overflow-hidden">
      {/* Ambient glow blobs */}
      <div
        className="absolute top-1/3 left-1/4 w-[700px] h-[700px] rounded-full blur-[160px] pointer-events-none opacity-25"
        style={{ background: "radial-gradient(circle, rgba(3,142,199,0.14) 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-[130px] pointer-events-none opacity-20"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)" }}
      />

      <div className="container-max relative z-10" ref={sectionRef}>

        {/* ── Header ── */}
        <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-20">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              className="text-primary font-mono text-sm uppercase tracking-widest block mb-4"
            >
              Expertise & Stack
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-3xl lg:text-5xl font-bold text-foreground tracking-tight leading-tight"
            >
              Turning Complexity <br /> Into{" "}
              <span className="text-muted-foreground">Simplicity.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="text-lg text-muted-foreground max-w-sm"
          >
            I specialize in deeply technical solutions wrapped in elegant,
            frictionless user interfaces.
          </motion.p>
        </div>

        {/* ── Expertise Cards ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative p-8 glass-card rounded-[32px] overflow-hidden border-white/5 hover:border-primary/30 transition-all duration-500 cursor-default shadow-lg hover:shadow-primary/5"
            >
              <div
                className={`absolute -inset-24 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 blur-[60px] transition-opacity duration-700`}
              />
              <div className="relative z-10 space-y-12">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Divider ── */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative flex items-center gap-6 my-16 origin-left"
        >
          <div className="flex-1 h-px bg-gradient-to-r from-white/10 via-primary/30 to-white/10" />
          <span className="text-sm font-mono text-primary uppercase tracking-[0.2em] whitespace-nowrap px-2">
            Tech Stack
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-white/10 via-primary/30 to-white/10" />
        </motion.div>

        {/* ── High-Impact Tech Grid ── */}
        <div className="flex flex-wrap justify-center gap-4 mb-20 max-w-6xl mx-auto">
          {[
            { name: "Angular", icon: "/tech/angular.svg" },
            { name: "React", icon: "/tech/react.svg" },
            { name: "Vue", icon: "/tech/vue.svg" },
            { name: "Next.js", icon: "/tech/nextjs.svg" },
            { name: "Nuxt.js", icon: "/tech/nuxtjs.svg" },
            { name: "TypeScript", icon: "/tech/typescript.svg" },
            { name: "JavaScript", icon: "/tech/javascript.svg" },
            { name: "HTML5", icon: "/tech/html5.svg" },
            { name: "CSS3", icon: "/tech/css3.svg" },
            { name: "Ionic", icon: "/tech/ionic.svg" },
            { name: "Firebase", icon: "/tech/firebase.svg" },
            { name: "GraphQL", icon: "/tech/graphql.svg" },
          ].map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.1 + i * 0.04 }}
              whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.05)" }}
              className="w-28 h-28 lg:w-36 lg:h-36 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col items-center justify-center gap-3 transition-all duration-300 group cursor-default shadow-sm"
            >
              <div className="w-10 h-10 lg:w-14 lg:h-14 relative flex items-center justify-center">
                <Image 
                  src={tech.icon} 
                  alt={tech.name} 
                  width={56}
                  height={56}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500 filter brightness-90 contrast-125" 
                />
              </div>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-white group-hover:text-primary transition-colors">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* ── Infinite Marquee Skills ── */}
        <div className="relative w-full overflow-hidden py-6 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-32 before:bg-gradient-to-r before:from-background before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-32 after:bg-gradient-to-l after:after:from-background after:to-transparent">
          <div className="flex flex-col gap-8">
            {/* Row 1 */}
            <motion.div 
              animate={{ x: [0, -1400] }}
              transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
              className="flex whitespace-nowrap gap-6"
            >
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex gap-6">
                  {[
                    "MySQL", "PostgreSQL", "MongoDB", "AWS", "Docker", "REST APIs", "Capacitor",
                    "MySQL", "PostgreSQL", "MongoDB", "AWS", "Docker", "REST APIs", "Capacitor"
                  ].map((skill, idx) => (
                    <span 
                      key={`${skill}-${idx}`}
                      className="px-8 py-3 rounded-full bg-white/[0.05] border border-white/10 text-xs font-bold uppercase tracking-widest text-white hover:text-primary hover:border-primary/50 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              ))}
            </motion.div>

            {/* Row 2 (Reverse) */}
            <motion.div 
              animate={{ x: [-1400, 0] }}
              transition={{ repeat: Infinity, duration: 45, ease: "linear" }}
              className="flex whitespace-nowrap gap-6"
            >
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex gap-6">
                  {[
                    "Jest", "Cypress", "Git", "GitHub", "Webflow Designer", "CI/CD", "Agile/Scrum", "ChatGPT", "Cursor",
                    "SCSS", "Jest", "Cypress", "Git", "GitHub", "Webflow Designer", "CI/CD", "Agile/Scrum"
                  ].map((skill, idx) => (
                    <span 
                      key={`${skill}-${idx}`}
                      className="px-8 py-3 rounded-full bg-white/[0.05] border border-white/10 text-sm font-bold uppercase tracking-widest text-white hover:text-primary hover:border-primary/50 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
