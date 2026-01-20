"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { siteConfig } from "@/config/site.config";

export function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 overflow-hidden" ref={ref}>
      {/* Contrasting background */}
      <div className="absolute inset-0 bg-white" />

      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-[0.5]">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url(/ctabackground.jpg)",
          }}
        />
      </div>

      {/* Decorative elements */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={isInView ? { opacity: 0.05, x: 0 } : {}}
        transition={{ duration: 1 }}
        className="absolute top-0 left-0 w-1/3 h-full bg-black clip-sharp-right"
      />
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={isInView ? { opacity: 0.05, x: 0 } : {}}
        transition={{ duration: 1 }}
        className="absolute top-0 right-0 w-1/3 h-full bg-black clip-sharp-left"
      />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8 text-center">
        {/* Large decorative text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 0.14, scale: 1 } : {}}
          transition={{ duration: 1 }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <span className="font-[family-name:var(--font-space-grotesk)] text-[16.5vw] font-bold text-black whitespace-nowrap">
            LET&apos;S BUILD
          </span>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-black mb-6">
            {siteConfig.cta.headline}
          </h2>
          <p className="font-[family-name:var(--font-inter)] text-lg md:text-xl text-black/60 max-w-2xl mx-auto mb-12">
            {siteConfig.cta.subheadline}
          </p>

          <motion.a
            href={siteConfig.cta.buttonLink}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center justify-center px-10 py-4 bg-black text-white font-[family-name:var(--font-inter)] text-sm font-semibold tracking-wide uppercase transition-all duration-500 hover:bg-black/80"
          >
            <span>{siteConfig.cta.buttonText}</span>
            <svg className="ml-3 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>

        {/* Corner decorations */}
        <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-black/10" />
        <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-black/10" />
        <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-black/10" />
        <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-black/10" />
      </div>
    </section>
  );
}
