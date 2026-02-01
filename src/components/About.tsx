"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { siteConfig } from "@/config/site.config";
import CountUp from "react-countup";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-32 bg-background overflow-hidden" ref={ref}>
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-surface to-transparent opacity-50" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="w-12 h-px bg-gradient-to-r from-white to-transparent" />
              <span className="font-[family-name:var(--font-inter)] text-sm font-medium tracking-[0.2em] text-muted uppercase">
                About Us
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-[family-name:var(--font-space-grotesk)] text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-8"
            >
              Building Dreams
              <br />
              <span className="text-gradient">Since {siteConfig.company.foundedYear}</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="font-[family-name:var(--font-inter)] text-lg text-muted leading-relaxed">
                We believe that exceptional renovations emerge from the perfect blend of visionary design,
                masterful craftsmanship, and unwavering attention to detail. Every project we undertake
                is a testament to our commitment to transforming spaces into extraordinary environments.
              </p>
              <p className="font-[family-name:var(--font-inter)] text-lg text-muted leading-relaxed">
                Our team of designers, architects, and skilled craftsmen work collaboratively to ensure
                that your vision is realized with precision and artistry. From initial concept to final
                walkthrough, we maintain the highest standards of quality and communication.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              {siteConfig.footer.certifications.map((cert, index) => (
                <div
                  key={cert}
                  className="px-4 py-2 border border-border font-[family-name:var(--font-inter)] text-sm text-muted"
                >
                  {cert}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative"
          >
            {/* Main visual block */}
            <div className="relative aspect-[4/5] bg-surface border border-border overflow-hidden">
              {/* Pattern overlay */}
              <div className="absolute inset-0 grid-pattern opacity-30" />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-surface-elevated/50 to-surface-elevated" />

              {/* Decorative shapes */}
              <div className="absolute top-12 left-12 w-24 h-24 border border-white/10" />
              <div className="absolute top-16 left-16 w-24 h-24 border border-white/5" />

              {/* Large number */}
              <div className="absolute bottom-12 right-12 font-[family-name:var(--font-space-grotesk)] text-[200px] font-bold leading-none text-white/5">
                {siteConfig.company.yearsExperience}
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="font-[family-name:var(--font-space-grotesk)] text-8xl md:text-9xl font-bold text-white/10">
                    {siteConfig.company.name}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating stats card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute -bottom-8 -left-8 bg-white text-background p-8"
            >
              <div className="font-[family-name:var(--font-space-grotesk)] text-5xl font-bold">
                <CountUp end={siteConfig.company.projectsCompleted} delay={0.6} />+
              </div>
              <div className="mt-2 font-[family-name:var(--font-inter)] text-sm font-medium text-muted">
                Projects Delivered
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
