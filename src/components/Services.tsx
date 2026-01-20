"use client";

import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { siteConfig } from "@/config/site.config";

const iconMap: Record<string, ReactNode> = {
  kitchen: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
      <path d="M3 9h18M9 21V9M5 21h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z" />
      <circle cx="6" cy="6" r="1" fill="currentColor" />
    </svg>
  ),
  bathroom: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
      <path d="M4 12h16M4 12v6a2 2 0 002 2h12a2 2 0 002-2v-6M4 12V6a2 2 0 012-2h1v4M17 8a2 2 0 100-4 2 2 0 000 4z" />
    </svg>
  ),
  home: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
      <path d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10" />
    </svg>
  ),
  commercial: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
      <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16M3 21h18M9 7h2M9 11h2M9 15h2M13 7h2M13 11h2M13 15h2" />
    </svg>
  ),
};

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="relative py-32 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-12 h-px bg-gradient-to-r from-white to-transparent" />
            <span className="font-[family-name:var(--font-inter)] text-sm font-medium tracking-[0.2em] text-muted uppercase">
              Our Services
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-[family-name:var(--font-space-grotesk)] text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white"
          >
            Expertise Across
            <br />
            <span className="text-gradient">Every Space</span>
          </motion.h2>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {siteConfig.services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              className="group relative p-8 md:p-10 bg-surface border border-border hover:border-border-subtle transition-all duration-500 hover-lift"
            >
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-white/20 transition-all duration-500 group-hover:w-12 group-hover:h-12 group-hover:border-white/40" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-white/20 transition-all duration-500 group-hover:w-12 group-hover:h-12 group-hover:border-white/40" />

              <div className="text-muted mb-6 transition-colors duration-300 group-hover:text-white">
                {iconMap[service.icon]}
              </div>

              <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-white mb-4">
                {service.title}
              </h3>

              <p className="font-[family-name:var(--font-inter)] text-muted leading-relaxed">
                {service.description}
              </p>

              <div className="mt-8 flex items-center gap-2 text-white opacity-0 -translate-x-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0">
                <span className="font-[family-name:var(--font-inter)] text-sm font-medium tracking-wide">
                  Learn More
                </span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
