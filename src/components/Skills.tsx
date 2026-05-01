"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Palette, Smartphone, Settings, Cloud, Zap } from "lucide-react";

const skillCategories = [
  {
    title: "Core Technologies",
    icon: <Zap className="w-5 h-5 text-amber-500" />,
    skills: [
      { name: "Ionic / Capacitor", level: 95 },
      { name: "Angular", level: 92 },
      { name: "React / Next.js", level: 90 },
      { name: "TypeScript", level: 94 },
    ],
  },
  {
    title: "Backend & Systems",
    icon: <Settings className="w-5 h-5 text-blue-500" />,
    skills: [
      { name: "Node.js", level: 88 },
      { name: "REST / GraphQL", level: 92 },
      { name: "PostgreSQL / MongoDB", level: 85 },
      { name: "Docker / AWS", level: 80 },
    ],
  },
];

function SkillBar({ name, level, index }: { name: string; level: number; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="space-y-3">
      <div className="flex justify-between items-end">
        <span className="text-sm font-bold text-foreground tracking-tight">{name}</span>
        <span className="text-[10px] font-mono text-muted-foreground">{level}%</span>
      </div>
      <div className="h-[6px] w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="h-full bg-gradient-to-r from-primary to-primary-400 relative"
        >
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.2)_50%,transparent_100%)] animate-shimmer" style={{ backgroundSize: '200% 100%' }} />
        </motion.div>
      </div>
    </div>
  );
}

export default function Skills() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-20%" });

  return (
    <section id="skills" className="section-padding bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[160px] pointer-events-none" style={{ background: "rgba(3, 142, 199, 0.05)" }} />

      <div className="container-max relative z-10" ref={sectionRef}>
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="text-primary font-mono text-sm uppercase tracking-widest block mb-4"
          >
            Capabilities
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground mb-6"
          >
            Stack & <span className="text-muted-foreground">Competencies.</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="w-12 h-[2px] bg-primary mx-auto"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 max-w-5xl mx-auto">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: catIndex === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: catIndex * 0.2 }}
              className="space-y-10"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground tracking-tight">{category.title}</h3>
              </div>
              
              <div className="space-y-8">
                {category.skills.map((skill, index) => (
                  <SkillBar key={skill.name} {...skill} index={index} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Integration Badges */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-24 pt-12 border-t border-white/5 flex flex-wrap justify-center gap-12 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
        >
          {['Firebase', 'Google Cloud', 'Nginx', 'GitHub Actions', 'Jenkins', 'Vercel'].map(ext => (
            <span key={ext} className="text-sm font-mono tracking-widest uppercase font-bold text-muted-foreground">
              {ext}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
