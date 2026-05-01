"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { projects, Project } from "@/data/projects";

function EditorialProjectCard({ project }: { project: Project }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="group block w-full relative h-[45vh] min-h-[350px] max-h-[500px] rounded-3xl overflow-hidden mb-8"
    >
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 overflow-hidden rounded-3xl bg-white/[0.02]">
        <motion.img 
          style={{ y }}
          src={project.image} 
          alt={project.title} 
          className="w-full h-[120%] object-cover scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out origin-center"
        />
        {/* Dark gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-500 group-hover:opacity-70" />
      </div>
      
      {/* Premium Glass Content Overlay */}
      <div className="absolute bottom-6 left-6 right-6 lg:bottom-10 lg:left-10 lg:right-10 flex flex-col justify-end pointer-events-none">
        <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] p-6 rounded-2xl flex flex-col justify-between gap-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100 pointer-events-auto">
          <div className="space-y-3 flex-1">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-bold text-white uppercase tracking-widest backdrop-blur-md">
                {project.role}
              </span>
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-white tracking-tight">{project.title}</h3>
            <p className="text-white/60 font-medium leading-relaxed max-w-2xl text-sm lg:text-base">
              {project.shortDescription}
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {project.techStack.map(tech => (
                <span key={tech} className="text-[10px] font-bold text-white/40 uppercase tracking-widest">{tech}</span>
              ))}
            </div>
          </div>

          {/* <Link href={`/work/${project.slug}`} className="shrink-0 pointer-events-auto self-end mt-2">
            <button className="h-12 w-12 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 hover:bg-primary hover:text-white transition-all duration-300">
              <ArrowRight className="w-5 h-5 -rotate-45" />
            </button>
          </Link> */}
        </div>
      </div>
      
      {/* Default State Content (Visible when not hovered) */}
      <div className="absolute bottom-6 left-6 right-6 lg:bottom-10 lg:left-10 lg:right-10 group-hover:opacity-0 transition-opacity duration-500">
        <h3 className="text-2xl lg:text-4xl font-bold text-white tracking-tight drop-shadow-2xl">{project.title}</h3>
        <span className="text-primary font-mono text-sm uppercase tracking-widest drop-shadow-md">{project.category}</span>
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  return (
    <section id="work" className="bg-background text-foreground py-32 lg:py-48">
      <div className="container-max">
        <div className="max-w-3xl mb-24">
          <span className="text-primary font-mono text-sm uppercase tracking-widest block mb-4">Case Studies</span>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 tracking-tight leading-tight">
            Featured <br /><span className="text-foreground/40">Work.</span>
          </h2>
          <p className="text-lg text-foreground/60 leading-relaxed">
            A selection of enterprise platforms and mobile ecosystems architected for performance and scale.
          </p>
        </div>

        {/* Mobile Apps Section */}
        <div className="space-y-12 mb-32">
          <div className="flex items-center gap-6">
            <h3 className="text-2xl lg:text-3xl font-bold tracking-tight whitespace-nowrap">Mobile Ecosystems</h3>
            <div className="h-[1px] w-full bg-foreground/10" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.filter(p => p.type === "mobile").map(project => (
              <EditorialProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        {/* Web Apps Section */}
        <div className="space-y-12">
          <div className="flex items-center gap-6">
            <h3 className="text-2xl lg:text-3xl font-bold tracking-tight whitespace-nowrap">Enterprise Web Platforms</h3>
            <div className="h-[1px] w-full bg-foreground/10" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.filter(p => p.type === "web").map(project => (
              <EditorialProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
