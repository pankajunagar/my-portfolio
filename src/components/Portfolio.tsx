"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { projects, Project } from "@/data/projects";

const MotionImage = motion.create(Image);

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
        <MotionImage 
          style={{ y }}
          src={project.image} 
          alt={project.title} 
          fill
          className="w-full h-[120%] object-cover scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out origin-center"
        />
        {/* Dark gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-500 group-hover:opacity-70" />
      </div>
      
      {/* Premium Glass Content Overlay */}
      <div className="absolute bottom-6 left-6 right-6 lg:bottom-10 lg:left-10 lg:right-10 flex flex-col justify-end z-20">
        <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] p-6 rounded-2xl flex flex-col justify-between gap-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
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
            {/* <div className="flex flex-wrap gap-2 pt-2">
              {project.techStack.map(tech => (
                <span key={tech} className="text-[10px] font-bold text-white/40 uppercase tracking-widest">{tech}</span>
              ))}
            </div> */}
          </div>

          {/* Platform Icon Buttons */}
          {project.urls && (
            <div className=" flex gap-4 shrink-0 self-end mt-2 z-10">
              {project.urls?.web && (
                <motion.button
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open(project.urls?.web, '_blank')}
                  className="h-12 w-12 rounded-full bg-white/10 backdrop-blur-md text-white flex items-center justify-center cursor-pointer z-10"
                  title="View Web App"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                  </svg>
                </motion.button>
              )}
              {project.urls?.ios && (
                <motion.button
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open(project.urls?.ios, '_blank')}
                  className="h-12 w-12 rounded-full bg-white/10 backdrop-blur-md text-white flex items-center justify-center cursor-pointer z-10"
                  title="Download on App Store"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                </motion.button>
              )}
              {project.urls?.android && (
                <motion.button
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open(project.urls?.android, '_blank')}
                  className="h-12 w-12 rounded-full bg-white/10 backdrop-blur-md text-white flex items-center justify-center cursor-pointer z-10"
                  title="Get it on Google Play"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                </motion.button>
              )}
            </div>
          )}
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
