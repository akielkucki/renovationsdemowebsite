"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { siteConfig } from "@/config/site.config";
import Image from "next/image";

export function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const categories = ["All", ...new Set(siteConfig.portfolio.map((p) => p.category))];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? siteConfig.portfolio
      : siteConfig.portfolio.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="relative py-32 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="w-12 h-px bg-gradient-to-r from-white to-transparent" />
              <span className="font-[family-name:var(--font-inter)] text-sm font-medium tracking-[0.2em] text-muted uppercase">
                Portfolio
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-[family-name:var(--font-space-grotesk)] text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white"
            >
              Featured
              <br />
              <span className="text-gradient">Projects</span>
            </motion.h2>
          </div>

          {/* Category filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-2"
          >
            {categories.map((category) => (
              <button
                type="button"
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 font-[family-name:var(--font-inter)] text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-white text-background"
                    : "bg-transparent text-muted border border-border hover:border-white hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative aspect-[4/5] overflow-hidden cursor-pointer"
            >
              {/* Placeholder gradient background */}
              {project.image ?
              <Image src={project.image} alt={`${project.title} cover photo`} width={1920} height={1080} className={`z-0 absolute object-cover min-h-full inset-0 transition-transform duration-700 ${hoveredIndex === index ? "scale-110" : "scale-100"}`}/>
                  : <div
                      className={`absolute inset-0 bg-gradient-to-br transition-transform duration-700 ${
                          index % 3 === 0
                              ? "from-surface-elevated to-surface"
                              : index % 3 === 1
                                  ? "from-surface to-background"
                                  : "from-background to-surface-elevated"
                      } ${hoveredIndex === index ? "scale-110" : "scale-100"}`}
                  />


              }


              {/* Overlay pattern */}
              <div className="absolute inset-0 grid-pattern opacity-30" />

              {/* Decorative elements */}
              <div className="absolute top-8 left-8 w-20 h-20 border border-white/10" />
              <div className="absolute bottom-16 right-8 w-12 h-12 border border-white/10" />

              {/* Content overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-80" />

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <motion.div
                    className="mb-3 w-fit relative" // Added w-fit and relative
                    animate={{ y: hoveredIndex === index ? -8 : 0 }}
                    transition={{ duration: 0.4 }}
                >
                  {/* The Text */}
                  <p className="relative z-10 text-xs font-medium tracking-[0.2em] text-white uppercase text-shadow-black drop-shadow-md drop-shadow-black">
                    {project.category}
                  </p>

                  {/* The Bar */}
                  {/* Adjust 'bg-yellow-500' to your brand color or use bg-muted */}
                  <div className="absolute -bottom-1 -left-1 w-full h-3 bg-muted/40 -z-0 -rotate-1 origin-bottom-left"></div>
                </motion.div>

                <motion.h3
                  className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-white mb-2"
                  animate={{ y: hoveredIndex === index ? -8 : 0 }}
                  transition={{ duration: 0.4, delay: 0.05 }}
                >
                  {project.title}
                </motion.h3>

                <motion.p
                  className="font-[family-name:var(--font-inter)] text-sm text-muted"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0,
                    y: hoveredIndex === index ? 0 : 20,
                  }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  {project.description}
                </motion.p>

                {/* View button */}
                <motion.div
                  className="mt-6 flex items-center gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0,
                    x: hoveredIndex === index ? 0 : -20,
                  }}
                  transition={{ duration: 0.4, delay: 0.15 }}
                >
                  <span className="font-[family-name:var(--font-inter)] text-sm font-medium text-white tracking-wide">
                    View Project
                  </span>
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.div>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-0 h-0 border-t-[60px] border-t-white/5 border-l-[60px] border-l-transparent transition-all duration-500 group-hover:border-t-white/10" />
            </motion.div>
          ))}
        </div>

        {/* View all link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <a href="#" className="btn-outline inline-flex">
            <span>View All Projects</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
