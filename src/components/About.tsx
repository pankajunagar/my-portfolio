"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Rocket, Smartphone, Users, Zap } from "lucide-react";

export default function About() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-20%" });

  return (
    <section id="about" className="section-padding relative overflow-hidden bg-background">
      <div className="container-max relative z-10" ref={sectionRef}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6 lg:mb-8"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-tight">
              Engineering <br /> <span className="text-muted-foreground">Emotion.</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center">
            <motion.div 
               initial={{ opacity: 0, x: -30 }}
               animate={isInView ? { opacity: 1, x: 0 } : {}}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="space-y-8"
            >
              <div className="space-y-6">
                <p className="text-2xl sm:text-3xl text-foreground font-bold leading-tight tracking-tight">
                  With 8+ years of expertise, I transform complex requirements into seamless digital products.
                </p>
                <div className="h-1 w-16 bg-primary rounded-full" />
              </div>
              
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  As a Senior Hybrid & Web Specialist, I have architected global systems for enterprise leaders and high-performance mobile apps for elite training platforms.
                </p>
                <p>
                  My philosophy is simple: Technical excellence is the baseline. The real challenge is crafting an experience that feels <span className="text-foreground font-semibold">effortless and human.</span>
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.4 }}
              className="grid gap-8 sm:grid-cols-2 lg:grid-cols-1"
            >
              {[
                { icon: <Rocket />, title: "Full-Stack Velocity", desc: "Shipping production code across the entire stack.", offset: 0 },
                { icon: <Smartphone />, title: "Mobile Precision", desc: "Native-feel experiences via Ionic & Capacitor.", offset: 40 },
                { icon: <Users />, title: "Team Leadership", desc: "Mentoring teams and architecting high-level vision.", offset: 0 },
                { icon: <Zap />, title: "Performance First", desc: "Sub-second load times and efficient data sync.", offset: 40 },
              ].map((item, i) => (
                <div 
                  key={i} 
                  style={{ transform: `translateX(${item.offset}px)` }}
                  className="flex gap-6 p-8 glass-card rounded-[2.5rem] group hover:border-primary transition-all duration-700 hover:shadow-2xl hover:shadow-primary/10 bg-white/[0.02] border-white/5 hidden lg:flex"
                >
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <div className="space-y-1 pt-1">
                    <h4 className="text-lg font-bold text-foreground tracking-tight">{item.title}</h4>
                    <p className="text-sm text-muted-foreground leading-snug">{item.desc}</p>
                  </div>
                </div>
              ))}

              {/* Mobile version without offset */}
              {[
                { icon: <Rocket />, title: "Full-Stack Velocity", desc: "Shipping production code across the entire stack." },
                { icon: <Smartphone />, title: "Mobile Precision", desc: "Native-feel experiences via Ionic & Capacitor." },
                { icon: <Users />, title: "Team Leadership", desc: "Mentoring teams and architecting high-level vision." },
                { icon: <Zap />, title: "Performance First", desc: "Sub-second load times and efficient data sync." },
              ].map((item, i) => (
                <div 
                  key={`mobile-${i}`} 
                  className="flex flex-col sm:flex-row gap-6 p-8 glass-card rounded-[2rem] bg-white/[0.02] border-white/5 lg:hidden"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    {item.icon}
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-lg font-bold text-foreground tracking-tight">{item.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
