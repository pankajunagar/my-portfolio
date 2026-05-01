"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView, AnimatePresence, PanInfo } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "James Roberts",
    role: "Director of Product, Surf Athlete",
    avatar: "JR",
    avatarColor: "#0ea5e9",
    content:
      "Pankaj is a master of mobile performance. He rebuilt our entire training engine, and the resulting app is lightning fast on both platform. His deep knowledge of Ionic and hardware integration is truly world-class.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Lindström",
    role: "VP Engineering, ePRINTit",
    avatar: "SL",
    avatarColor: "#8b5cf6",
    content:
      "Working with Pankaj on our Global Cloud Printing platform was exceptional. He handled the most complex document processing flows with ease and delivered an interface that thousands of users rely on daily.",
    rating: 5,
  },
  {
    id: 3,
    name: "Mark Thompson",
    role: "Founder, PropTech Solutions",
    avatar: "MT",
    avatarColor: "#10b981",
    content:
      "Pankaj doesn't just write code; he builds business solutions. He took our property management concept and architected a full-stack ecosystem that handles real-time payments and messaging flawlessly.",
    rating: 5,
  },
  {
    id: 4,
    name: "Elena Petrov",
    role: "Product Owner, DataFlow Systems",
    avatar: "EP",
    avatarColor: "#ec4899",
    content:
      "The real-time analytics dashboard Pankaj delivered exceeded our expectations. His mastery of WebSocket architecture and React performance optimization helped us scale our data visualization 10x.",
    rating: 5,
  },
  {
    id: 5,
    name: "Michael Chen",
    role: "CTO, FinGrid Global",
    avatar: "MC",
    avatarColor: "#6366f1",
    content:
      "Reliability is Pankaj's middle name. In over 2 years of collaboration on our enterprise fintech apps, he hasn't missed a single deadline, while maintaining code quality that is a joy for our internal teams to inherit.",
    rating: 5,
  },
];

export default function Testimonials() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleDragEnd = (info: PanInfo) => {
    const { offset, velocity } = info;
    
    if (Math.abs(offset.x) > 50 || Math.abs(velocity.x) > 500) {
      if (offset.x > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
    }
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  return (
    <section
      id="testimonials"
      className="section-padding relative overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />

      <div className="container-max relative z-10" ref={sectionRef}>
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="w-8 h-[1px] bg-primary" />
            <span className="text-primary text-sm font-mono uppercase tracking-widest">
              Testimonials
            </span>
            <div className="w-8 h-[1px] bg-primary" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 tracking-tight"
          >
            Client <span className="text-primary">Reviews</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            What clients and colleagues say about working with me
          </motion.p>
        </div>

        {/* Testimonial Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative max-w-4xl mx-auto px-4"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Main Card */}
          <motion.div 
            className="glass-card p-8 sm:p-12 lg:p-16 relative overflow-hidden min-h-[350px] shadow-sm shadow-primary/5 cursor-grab active:cursor-grabbing"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.3}
            onDragEnd={(_, info: PanInfo) => handleDragEnd(info)}
          >
            {/* Quote icon */}
            <div className="absolute top-6 right-8 text-primary opacity-5">
              <Quote className="w-24 h-24 rotate-12" />
            </div>

            {/* Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-8">
                  {Array.from({ length: testimonials[currentIndex].rating }).map(
                    (_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-500 fill-yellow-500"
                      />
                    )
                  )}
                </div>

                {/* Testimonial Text */}
                <p className="text-lg lg:text-xl text-foreground leading-relaxed mb-8 italic">
                  &ldquo;{testimonials[currentIndex].content}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-5">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-xl font-bold text-white shadow-lg"
                    style={{
                      background: `linear-gradient(135deg, ${testimonials[currentIndex].avatarColor}, ${testimonials[currentIndex].avatarColor}dd)`,
                    }}
                  >
                    {testimonials[currentIndex].avatar}
                  </div>
                  <div>
                    <h4 className="text-foreground font-bold text-lg">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-muted-foreground text-sm font-medium">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-10">
            {/* Dots */}
            <div className="flex items-center gap-2.5">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`transition-all duration-500 rounded-full ${
                    index === currentIndex
                      ? "w-10 h-2 bg-primary"
                      : "w-2 h-2 bg-primary/20 hover:bg-primary/40"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-4">
              <motion.button
                onClick={prevSlide}
                whileHover={{ scale: 1.1, x: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>
              <motion.button
                onClick={nextSlide}
                whileHover={{ scale: 1.1, x: 2 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
