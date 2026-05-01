"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Globe, MessageCircle, Download } from "lucide-react";
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
    const particleCount = 150;

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

    // GSAP Parallax
    gsap.to(portraitRef.current, {
      y: 50,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

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
      className="relative min-h-screen flex items-center bg-background overflow-hidden"
    >
      {/* Animated Galaxy Background Layer */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 pointer-events-none"
      />
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_50%_40%,rgba(3,142,199,0.15)_0%,transparent_70%)]" />

      {/* Moving Nebula Glows */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 blur-[120px] rounded-full z-0"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
          delay: 1,
        }}
        className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-violet-500/10 blur-[150px] rounded-full z-0"
      />

      <div className="container-max relative z-20 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center pt-32 lg:pt-32 pb-20">
        {/* Left: Premium Framed Image */}
        <motion.div
          ref={portraitRef}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex justify-center lg:justify-start pt-10"
        >
          <div className="relative w-full max-w-[420px] aspect-[4/5] group rounded-[2rem] overflow-hidden bg-[#111] border border-white/5 shadow-2xl">
            {/* The Image */}
            <div className="relative w-full h-full">
              <img
                src="/pankaj.png"
                alt="Pankaj Unagar"
                className="w-full h-full object-cover object-top grayscale opacity-90 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
              />
            </div>

            {/* Subtle Overlay / Scanline Effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            <div
              className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{
                backgroundImage:
                  'url("https://grainy-gradients.vercel.app/noise.svg")',
              }}
            />
          </div>
        </motion.div>

        {/* Right: Premium Content Block */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
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
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>

      {/* Branded WhatsApp Button (Inspired by Reference) */}
      <motion.a
        href="https://wa.me/918306495656"
        target="_blank"
        rel="noopener noreferrer"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="fixed bottom-10 right-10 z-[100] flex items-center gap-2 px-3 py-3 bg-black border border-white/10 rounded-3xl text-white hover:border-white/20 hover:bg-white/5 transition-all shadow-lg"

      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
        </svg>
        {/* <span className="text-white font-bold text-lg tracking-tight relative z-10">
          WhatsApp
        </span> */}
      </motion.a>
    </section>
  );
}
