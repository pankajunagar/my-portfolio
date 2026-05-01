"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Smartphone, Globe, Database, Palette, ArrowRight } from "lucide-react";

const services = [
  {
    id: 1,
    icon: <Smartphone className="w-7 h-7" />,
    title: "Hybrid Mobile",
    description: "Architecting high-performance iOS and Android apps using Ionic and Capacitor.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    icon: <Globe className="w-7 h-7" />,
    title: "Web Platforms",
    description: "Building immersive, lightning-fast web experiences with Next.js and React.",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    id: 3,
    icon: <Database className="w-7 h-7" />,
    title: "Backend Scale",
    description: "Robust API orchestration and real-time database architecture.",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    id: 4,
    icon: <Palette className="w-7 h-7" />,
    title: "System Design",
    description: "Creating comprehensive, reusable design systems for enterprise scale.",
    gradient: "from-orange-500 to-rose-500",
  },
];

export default function Services() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-20%" });

  return (
    <section id="services" className="section-padding bg-muted/30">
      <div className="container-max" ref={sectionRef}>
        <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-20">
          <div className="max-w-2xl">
             <motion.span 
               initial={{ opacity: 0 }}
               animate={isInView ? { opacity: 1 } : {}}
               className="text-primary font-mono text-sm uppercase tracking-widest block mb-4"
             >
               Expertise
             </motion.span>
             <motion.h2 
               initial={{ opacity: 0, y: 20 }}
               animate={isInView ? { opacity: 1, y: 0 } : {}}
               transition={{ duration: 0.8 }}
               className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight leading-tight"
             >
               Turning Complexity <br /> Into <span className="text-muted-foreground">Simplicity.</span>
             </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="text-lg text-muted-foreground max-w-sm"
          >
            I specialize in deeply technical solutions wrapped in elegant, frictionless user interfaces.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative p-8 glass-card rounded-[32px] overflow-hidden border-white/5 hover:border-primary/30 transition-all duration-500 cursor-default shadow-lg hover:shadow-primary/5"
            >
              {/* Subtle Glowing accent */}
              <div className={`absolute -inset-24 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 blur-[60px] transition-opacity duration-700`} />
              
              <div className="relative z-10 space-y-12">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {service.icon}
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
