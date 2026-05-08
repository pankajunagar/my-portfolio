"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";

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

interface StoryTextProps {
  story: {
    id: number;
    title: string;
    description: string;
    features: string[];
    accent: string;
    image: string;
  };
  index: number;
  total: number;
  progress: MotionValue<number>;
}

function StoryText({ story, index, total, progress }: StoryTextProps) {
  const range = [index / total, (index + 0.2) / total, (index + 0.7) / total, (index + 0.9) / total];
  const opacity = useTransform(progress, range, [0, 1, 1, 0]);
  const translateY = useTransform(progress, [index / total, (index + 0.3) / total], [50, 0]);

  return (
    <motion.div
      style={{
        opacity,
        y: translateY,
      }}
      className={`absolute inset-0 flex flex-col justify-center transition-all duration-300 ${
        index === 0 ? "relative" : ""
      }`}
    >
      <div className="flex mb-6">
        <span className="px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] bg-primary/20 text-primary border border-primary/30 backdrop-blur-md lg:backdrop-blur-md">
          Core Capability
        </span>
      </div>
      
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
        {story.title.split(' ').map((word: string, i: number) => (
          <span key={i} className={i === 1 ? "text-primary/80" : "text-white"}>
            {word}{' '}
          </span>
        ))}
      </h2>
      
      <p className="text-lg text-white/60 max-w-lg leading-relaxed mb-10">
        {story.description}
      </p>
      
      <div className="flex flex-wrap gap-4">
        {story.features.map((f: string) => (
          <div key={f} className="flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm lg:backdrop-blur-xl text-xs font-bold text-white/70 hover:bg-white/10 hover:border-white/20 transition-all">
            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${story.accent}`} />
            {f}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function StoryVisual({ story, index, total, progress }: StoryTextProps) {
  const scale = useTransform(
    progress,
    [index / total, (index + 0.5) / total],
    [0.9, 1]
  );
  const opacity = useTransform(
    progress,
    [(index - 0.15) / total, index / total, (index + 0.8) / total, (index + 1) / total],
    [0, 1, 1, 0]
  );
  const rotate = useTransform(
    progress,
    [index / total, (index + 1) / total],
    [8, -8]
  );

  return (
    <motion.div
      style={{
        scale,
        opacity,
        rotate,
      }}
      className="absolute inset-0 flex items-center justify-center pointer-events-none"
    >
      <div className="relative w-full max-w-xl aspect-[16/11] group">
        <motion.div
          animate={typeof window !== 'undefined' && window.innerWidth >= 1024 ? { y: [0, -20, 0], rotate: [0, 5, 0] } : {}}
          transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-10 -left-10 z-20 glass-card p-4 rounded-2xl border-white/20 shadow-2xl backdrop-blur-md lg:backdrop-blur-3xl hidden sm:block"
        >
           <div className="flex items-center gap-3">
              <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${story.accent}`} />
              <div className="w-20 h-2 bg-white/10 rounded-full" />
           </div>
        </motion.div>

        <motion.div
          animate={typeof window !== 'undefined' && window.innerWidth >= 1024 ? { y: [0, 20, 0], rotate: [0, -5, 0] } : {}}
          transition={{ duration: 1.25, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-10 -right-10 z-20 glass-card p-6 rounded-2xl border-white/20 shadow-2xl backdrop-blur-md lg:backdrop-blur-3xl hidden sm:block"
        >
           <div className="space-y-2">
              <div className="w-24 h-3 bg-white/10 rounded-full" />
              <div className="w-16 h-2 bg-white/5 rounded-full" />
           </div>
        </motion.div>

        <div className={`absolute inset-0 bg-gradient-to-br ${story.accent} opacity-30 blur-[40px] lg:blur-[100px] rounded-full scale-125 transition-all duration-700`} />

        <div className="relative glass-card p-1 rounded-[40px] border-white/20 shadow-[0_0_100px_rgba(3,142,199,0.2)] overflow-hidden h-full">
          <Image
            src={story.image}
            alt={story.title}
            fill
            className="object-cover rounded-[38px] opacity-90 brightness-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
        </div>
      </div>
    </motion.div>
  );
}

export default function ScrollStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  if (isMobile) {
    return (
      <section ref={containerRef} className="relative bg-black py-24">
        <div className="container-max px-4 space-y-20">
          <div className="text-center mb-16">
            <span className="px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] bg-primary/20 text-primary border border-primary/30">
              Capabilities
            </span>
            <h2 className="text-4xl font-bold text-white mt-4">Case Studies</h2>
          </div>
          
          <div className="grid grid-cols-1 gap-24">
            {stories.map((story) => (
              <div key={story.id} className="space-y-10">
                {/* Visual for mobile with entry animation */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
                  className="relative aspect-[4/3] w-full max-w-md mx-auto"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${story.accent} opacity-20 blur-[60px] rounded-full scale-110`} />
                  <div className="relative glass-card p-1 rounded-3xl border-white/10 shadow-2xl overflow-hidden h-full min-h-[250px] bg-white/[0.02]">
                    <div className="relative w-full h-full overflow-hidden rounded-[22px]">
                      <div className="w-full h-full">
                        <Image
                          src={story.image}
                          alt={story.title}
                          fill
                          className="object-cover opacity-90 brightness-110"
                        />
                      </div>
                      
                      {/* Light Sweep for mobile */}
                      <motion.div
                        animate={{ x: ["-100%", "200%"] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12"
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Text for mobile with staggered reveal */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="space-y-6 text-center"
                >
                  <h3 className="text-3xl font-bold text-white tracking-tight">{story.title}</h3>
                  <p className="text-white/60 leading-relaxed max-w-sm mx-auto">
                    {story.description}
                  </p>
                  <div className="flex flex-wrap justify-center gap-3">
                    {story.features.map((f, i) => (
                      <motion.span 
                        key={f} 
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        className="px-4 py-1.5 rounded-xl bg-white/5 border border-white/10 text-[10px] font-bold text-white/70"
                      >
                        {f}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-black">
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
        {/* Subtle Background Text */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none select-none">
          <h2 className="text-[20vw] font-black uppercase">Storytelling</h2>
        </div>

        <div className="container-max w-full px-4 sm:px-6 lg:px-8 h-full lg:h-auto">
          <div className="grid lg:grid-cols-2 gap-0 lg:gap-20 items-center">
            {/* Text Content */}
            <div className="relative z-10 space-y-24 py-20 min-h-[400px] ">
              {stories.map((story, index) => (
                <StoryText 
                  key={story.id} 
                  story={story} 
                  index={index} 
                  total={stories.length} 
                  progress={smoothProgress} 
                />
              ))}
            </div>

            {/* Visual Content (Mockups + Interactive layers) */}
            <div className="relative h-[60vh] lg:h-[80vh] flex items-center justify-center">
              {stories.map((story, index) => (
                <StoryVisual 
                  key={story.id} 
                  story={story} 
                  index={index} 
                  total={stories.length} 
                  progress={smoothProgress} 
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
