"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const stories = [
  {
    id: 1,
    title: "Mobile Architecture",
    description: "Architecting high-performance iOS and Android ecosystems. Bridging the gap between native power and cross-platform flexibility with Ionic and Capacitor.",
    image: "/projects/surf-athlete.png",
    accent: "from-blue-500 to-cyan-500",
    features: ["Native Bridge Logic", "Offline Synchronization", "Low-Latency UX"],
  },
  {
    id: 2,
    title: "Enterprise Web Systems",
    description: "Building resilient, multi-tenant SaaS platforms. Leveraging Next.js and specialized cloud architectures to handle complex data streams at scale.",
    image: "/projects/eprintit.png",
    accent: "from-violet-500 to-purple-500",
    features: ["Multi-Tenant Security", "Isomorphic Rendering", "API Orchestration"],
  },
  {
    id: 3,
    title: "Full-Stack Velocity",
    description: "Focused on the end-to-end performance lifecycle. From real-time WebSocket communication to cinematic, GSAP-driven frontend storytelling.",
    image: "/projects/performance-ui.png",
    accent: "from-amber-500 to-orange-500",
    features: ["Real-time Data Flow", "Micro-interaction Engine", "100 Lighthouse Score"],
  },
];

export default function ScrollStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-black">
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
        {/* Subtle Background Text */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none select-none">
          <h2 className="text-[20vw] font-black uppercase">Storytelling</h2>
        </div>

        <div className="container-max w-full px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text Content */}
            <div className="relative z-10 space-y-24 py-20 min-h-[400px]">
              {stories.map((story, index) => {
                const range = [index / stories.length, (index + 0.2) / stories.length, (index + 0.7) / stories.length, (index + 0.9) / stories.length];
                const opacity = useTransform(smoothProgress, range, [0, 1, 1, 0]);
                const translateY = useTransform(smoothProgress, [index / stories.length, (index + 0.3) / stories.length], [50, 0]);

                return (
                  <motion.div
                    key={story.id}
                    style={{
                      opacity,
                      y: translateY,
                    }}
                    className={`absolute inset-0 flex flex-col justify-center transition-all duration-300 ${
                      index === 0 ? "relative" : ""
                    }`}
                  >
                    <div className="flex mb-6">
                      <span className="px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] bg-primary/20 text-primary border border-primary/30 backdrop-blur-md">
                        Core Capability
                      </span>
                    </div>
                    
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
                      {story.title.split(' ').map((word, i) => (
                        <span key={i} className={i === 1 ? "text-primary/80" : "text-white"}>
                          {word}{' '}
                        </span>
                      ))}
                    </h2>
                    
                    <p className="text-lg text-white/60 max-w-lg leading-relaxed mb-10">
                      {story.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-4">
                      {story.features.map(f => (
                        <div key={f} className="flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl text-xs font-bold text-white/70 hover:bg-white/10 hover:border-white/20 transition-all">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${story.accent}`} />
                          {f}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Visual Content (Mockups + Interactive layers) */}
            <div className="relative h-[60vh] lg:h-[80vh] flex items-center justify-center">
              {stories.map((story, index) => {
                const scale = useTransform(
                  smoothProgress,
                  [index / stories.length, (index + 0.5) / stories.length],
                  [0.9, 1]
                );
                const opacity = useTransform(
                  smoothProgress,
                  [(index - 0.15) / stories.length, index / stories.length, (index + 0.8) / stories.length, (index + 1) / stories.length],
                  [0, 1, 1, 0]
                );
                const rotate = useTransform(
                  smoothProgress,
                  [index / stories.length, (index + 1) / stories.length],
                  [8, -8]
                );

                return (
                  <motion.div
                    key={story.id}
                    style={{
                      scale,
                      opacity,
                      rotate,
                    }}
                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                  >
                    <div className="relative w-full max-w-xl aspect-[16/11] group">
                      {/* Interactive Floating Element 1 */}
                      <motion.div
                        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-10 -left-10 z-20 glass-card p-4 rounded-2xl border-white/20 shadow-2xl backdrop-blur-3xl"
                      >
                         <div className="flex items-center gap-3">
                            <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${story.accent}`} />
                            <div className="w-20 h-2 bg-white/10 rounded-full" />
                         </div>
                      </motion.div>

                      {/* Interactive Floating Element 2 */}
                      <motion.div
                        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute -bottom-10 -right-10 z-20 glass-card p-6 rounded-2xl border-white/20 shadow-2xl backdrop-blur-3xl"
                      >
                         <div className="space-y-2">
                            <div className="w-24 h-3 bg-white/10 rounded-full" />
                            <div className="w-16 h-2 bg-white/5 rounded-full" />
                         </div>
                      </motion.div>

                      {/* Glow background */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${story.accent} opacity-30 blur-[100px] rounded-full scale-125 transition-all duration-700`} />
                      
                      {/* Principal Mockup Container */}
                      <div className="relative glass-card p-1 rounded-[40px] border-white/20 shadow-[0_0_100px_rgba(3,142,199,0.2)] overflow-hidden h-full">
                        <img
                          src={story.image}
                          alt={story.title}
                          className="w-full h-full object-cover rounded-[38px] opacity-90 brightness-110"
                        />
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
