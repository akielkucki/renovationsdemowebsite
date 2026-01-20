"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { siteConfig } from "@/config/site.config";

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
            <span className="font-[family-name:var(--font-inter)] text-sm font-medium tracking-[0.2em] text-muted uppercase">
              Testimonials
            </span>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-[family-name:var(--font-space-grotesk)] text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white"
          >
            What Our Clients
            <br />
            <span className="text-gradient">Say About Us</span>
          </motion.h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {siteConfig.testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.15 }}
              className="group relative p-8 md:p-10 bg-surface border border-border hover:border-white/20 transition-all duration-500"
            >
              {/* Quote mark */}
              <div className="absolute top-8 right-8 font-[family-name:var(--font-space-grotesk)] text-7xl font-bold text-white/5 leading-none">
                &ldquo;
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <svg
                    key={`star-${testimonial.name}-${i}`}
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="relative z-10 font-[family-name:var(--font-inter)] text-lg text-accent-muted leading-relaxed mb-8">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                {/* Avatar placeholder */}
                <div className="w-12 h-12 bg-surface-elevated border border-border flex items-center justify-center">
                  <span className="font-[family-name:var(--font-space-grotesk)] text-lg font-bold text-white">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-white">
                    {testimonial.name}
                  </div>
                  <div className="font-[family-name:var(--font-inter)] text-sm text-muted">
                    {testimonial.role}
                  </div>
                </div>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
