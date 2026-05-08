"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Globe, Download } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MagneticBtn } from "./ui/MagneticBtn";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // --- Animated Galaxy / Starfield Logic ---
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: {
      x: number;
      y: number;
      size: number;
      speed: number;
      opacity: number;
    }[] = [];
    const isMobile = window.innerWidth < 1024;
    const particleCount = isMobile ? 40 : 150;


    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const init = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2,
          speed: Math.random() * 0.5 + 0.1,
          opacity: Math.random(),
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const isDark = document.documentElement.classList.contains("dark");
      ctx.fillStyle = isDark
        ? "rgba(255, 255, 255, 0.8)"
        : "rgba(0, 0, 0, 0.8)";

      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.globalAlpha = p.opacity;
        ctx.fill();

        p.y -= p.speed;
        if (p.y < 0) p.y = canvas.height;
      });

      requestAnimationFrame(animate);
    };

    window.addEventListener("resize", resize);
    resize();
    init();
    animate();

    // GSAP Parallax with stability
    const portraitTl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1, 
        onUpdate: (self) => {
          if (self.progress < 0.01) {
            gsap.set(portraitRef.current, { y: 0 });
          }
        }
      },
    });

    portraitTl.to(portraitRef.current, {
      y: 100, // Slightly more pronounced parallax
      ease: "none"
    });

    // Refresh triggers to account for navbar transition
    ScrollTrigger.refresh();

    return () => window.removeEventListener("resize", resize);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen lg:min-h-screen flex items-center bg-background overflow-hidden"
    >
      {/* Animated Galaxy Background Layer */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 pointer-events-none"
      />
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_50%_40%,rgba(3,142,199,0.15)_0%,transparent_70%)]" />

      {/* Moving Nebula Glows - Hidden on mobile for performance */}
      <motion.div
        animate={typeof window !== 'undefined' && window.innerWidth >= 1024 ? {
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 50, 0],
          y: [0, -30, 0],
        } : {}}
        transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 blur-[120px] rounded-full z-0 hidden lg:block"
      />
      <motion.div
        animate={typeof window !== 'undefined' && window.innerWidth >= 1024 ? {
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -50, 0],
          y: [0, 30, 0],
        } : {}}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
          delay: 1,
        }}
        className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-violet-500/10 blur-[150px] rounded-full z-0 hidden lg:block"
      />


      <div className="container-max relative z-20 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center pt-24 lg:pt-32 pb-16 lg:pb-20">
        {/* Left: Premium Framed Image */}
        <motion.div
          ref={portraitRef}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex justify-center lg:justify-start"
        >
          <div className="relative w-full max-w-[300px] sm:max-w-[350px] lg:max-w-[420px] aspect-[4/5] group rounded-[2rem] overflow-hidden bg-[#111] border border-white/5 shadow-2xl mx-auto lg:mx-0">
            {/* The Image */}
            <div className="relative w-full h-full">
              <Image
                src="/pankaj.png"
                alt="Pankaj Unagar"
                fill
                priority
                className="w-full h-full object-cover object-top grayscale opacity-90 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
              />
            </div>

            {/* Subtle Overlay / Scanline Effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            {/* <div
              className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{
                backgroundImage:
                  'url("https://grainy-gradients.vercel.app/noise.svg")',
              }}
            /> */}
          </div>
        </motion.div>

        {/* Right: Premium Content Block */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          className="space-y-10 text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md">
            <Globe className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-xs text-primary font-bold uppercase tracking-widest">
              Senior Hybrid Mobile & Web Engineer
            </span>
          </div>

          <div className="space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-tight">
              Architecting{" "}
              <span className="text-muted-foreground">Performance-Driven</span>{" "}
              <br />
              <span className="text-primary">Product Ecosystems.</span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-lg leading-relaxed mx-auto lg:mx-0">
              8+ years of engineering robust mobile applications and scalable
              cloud platforms. Transforming complex enterprise requirements into
              seamless digital experiences.
            </p>
          </div>

          {/* Highlight Stats Segment */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-12 pt-4">
            <div>
              <div className="text-3xl font-bold text-primary">08+</div>
              <div className="text-xs text-muted-foreground font-semibold uppercase tracking-wide mt-1">
                Years Expert
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">07+</div>
              <div className="text-xs text-muted-foreground font-semibold uppercase tracking-wide mt-1">
                Enterprise Platforms
              </div>
            </div>
            <div className="hidden sm:block">
              <div className="text-3xl font-bold text-primary">10M+</div>
              <div className="text-xs text-muted-foreground font-semibold uppercase tracking-wide mt-1">
                Users Scaled
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center lg:justify-start gap-6">
            <MagneticBtn
              onClick={() => scrollToSection("work")}
              className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl flex items-center gap-2 transition-all hover:bg-primary/90 group"
            >
              Explore Case Studies
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </MagneticBtn>
            <a
              href="/resume.pdf"
              download="resume"
              className="px-8 py-4 bg-transparent text-foreground font-semibold rounded-xl border border-border hover:bg-muted transition-colors group flex items-center gap-2"
            >
              <Download className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
              Download CV
            </a>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
