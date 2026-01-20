"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site.config";
const ScrollIndicator = () => {
  return (
      <motion.div
          initial="hidden"
          animate="visible"
          className=" flex flex-col items-center gap-6 z-20"
      >
        {/* Text Container with Staggered Blur Reveal */}
        <motion.div
            className="flex flex-col items-center gap-1"
            variants={{
              visible: { transition: { staggerChildren: 0.2, delayChildren: 0.5 } }
            }}
        >
          {["Beautiful", "lies", "below"].map((word, i) => (
              <motion.span
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 10, filter: "blur(10px)" },
                    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
                  }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="text-[10px] uppercase tracking-[0.4em] text-neutral-400 font-light"
              >
                {word}
              </motion.span>
          ))}
        </motion.div>

        {/* The Liquid Light Stream Line */}
        <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 64, opacity: 1 }}
            transition={{ delay: 1.5, duration: 1, ease: "easeInOut" }}
            className="relative w-[1px] overflow-hidden bg-neutral-800/30"
        >
          <motion.div
              animate={{ top: ["-100%", "100%"] }}
              transition={{
                duration: 2.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                repeatDelay: 0.5,
              }}
              className=" h-full bg-gradient-to-b from-transparent via-neutral-400 to-transparent opacity-70"
          />
        </motion.div>
      </motion.div>
  );
};
export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col w-full items-center justify-center overflow-hidden bg-background">
      {/* Background grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-50" />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background opacity-50" />

      {/* Decorative elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 2, ease: [0.19, 1, 0.22, 1] }}
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.05, scale: 1 }}
        transition={{ duration: 2, delay: 0.5, ease: [0.19, 1, 0.22, 1] }}
        className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
        <div className="max-w-5xl">
          {/* Overline */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-12 h-px bg-gradient-to-r from-white to-transparent" />
            <span className="font-[family-name:var(--font-inter)] text-sm font-medium tracking-[0.2em] text-muted uppercase">
              {siteConfig.contact.address.city} Based Studio
            </span>
          </motion.div>

          {/* Main heading */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
              className="font-[family-name:var(--font-space-grotesk)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tight text-white"
            >
              Transforming
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.19, 1, 0.22, 1] }}
              className="font-[family-name:var(--font-space-grotesk)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tight text-white"
            >
              Spaces Into
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
              className="font-[family-name:var(--font-space-grotesk)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tight text-gradient"
            >
              Masterpieces
            </motion.h1>
          </div>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8 max-w-xl font-[family-name:var(--font-inter)] text-lg md:text-xl text-muted leading-relaxed"
          >
            {siteConfig.company.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-12 flex flex-col sm:flex-row gap-4"
          >
            <a href="#contact" className="btn-primary">
              <span>Start Your Project</span>
            </a>
            <a href="#portfolio" className="btn-outline">
              <span>View Our Work</span>
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-20 grid grid-cols-3 gap-8 max-w-lg"
          >
            <div>
              <div className="font-[family-name:var(--font-space-grotesk)] text-4xl md:text-5xl font-bold text-white">
                {siteConfig.company.yearsExperience}+
              </div>
              <div className="mt-2 font-[family-name:var(--font-inter)] text-sm text-muted">
                Years Experience
              </div>
            </div>
            <div>
              <div className="font-[family-name:var(--font-space-grotesk)] text-4xl md:text-5xl font-bold text-white">
                {siteConfig.company.projectsCompleted}+
              </div>
              <div className="mt-2 font-[family-name:var(--font-inter)] text-sm text-muted">
                Projects Completed
              </div>
            </div>
            <div>
              <div className="font-[family-name:var(--font-space-grotesk)] text-4xl md:text-5xl font-bold text-white">
                {siteConfig.company.awardsWon}+
              </div>
              <div className="mt-2 font-[family-name:var(--font-inter)] text-sm text-muted">
                Design Awards
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <ScrollIndicator />
    </section>
  );
}
