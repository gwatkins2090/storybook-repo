'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Code2, Sparkles, Zap, Brain, Layers, Terminal } from 'lucide-react';
import { SpiritCursor } from '@/components/spirit';

export function About() {
  const prefers = useReducedMotion();

  const features = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "AI-Native Development",
      description: "Building with cutting-edge AI tools and intelligent systems"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Ethereal Interfaces",
      description: "Spirit-techno design that transcends traditional boundaries"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "High Performance",
      description: "Optimized for speed, elegance, and seamless experiences"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Conscious Systems",
      description: "Code that communes with the source and evolves"
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Modern Stack",
      description: "React, Next.js, TypeScript, Three.js, and beyond"
    },
    {
      icon: <Terminal className="w-6 h-6" />,
      title: "Senior Expertise",
      description: "Production-grade engineering with depth and precision"
    }
  ];

  return (
    <>
      {/* Restore cursor for this page */}
      <SpiritCursor />

      <section id="about" className="relative py-32 md:py-40 bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a] overflow-hidden">
        {/* Floating background orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute top-20 left-20 w-[400px] h-[400px] rounded-full blur-3xl opacity-20"
            style={{ background: 'radial-gradient(closest-side, rgba(255,23,68,0.4), rgba(0,0,0,0))' }}
            animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-[400px] h-[400px] rounded-full blur-3xl opacity-20"
            style={{ background: 'radial-gradient(closest-side, rgba(236,72,153,0.4), rgba(0,0,0,0))' }}
            animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Hero Section */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1e3a5f] border-2 border-[#FF1744] mb-8 shadow-[0_0_20px_rgba(255,23,68,0.3)]"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Sparkles className="w-4 h-4 text-[#ec4899]" />
              <span className="text-sm font-bold text-[#f8fafc]">Senior Developer Portfolio</span>
            </motion.div>

            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-[#FF1744] via-[#ec4899] to-[#FF3838] bg-clip-text text-transparent mb-6 tracking-tight">
              Back To Sourcecode
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl lg:text-3xl font-bold text-[#f8fafc] mb-6 max-w-4xl mx-auto leading-relaxed">
              Ellis Dee AI-Native Engineering Portfolio
            </p>

            {/* Description */}
            <p className="text-lg md:text-xl text-[#94a3b8] max-w-3xl mx-auto leading-relaxed font-medium">
              A lens into AI-native craft and conscious systems. Where ethereal interfaces meet spirit-techno design,
              and code communes with the source.
            </p>
          </motion.div>

          {/* Main Content Card */}
          <motion.div
            className="max-w-5xl mx-auto mb-20"
            initial={prefers ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#FF1744] via-[#ec4899] to-[#FF3838] rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />

              {/* Card */}
              <div className="relative bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-3xl p-10 md:p-14 border-2 border-[#FF1744] shadow-[0_0_60px_rgba(255,23,68,0.3)]">
                {/* Card Header */}
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-black text-[#f8fafc] mb-4">
                    About This Portfolio
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-[#FF1744] to-[#ec4899] mx-auto rounded-full" />
                </div>

                {/* Main Description */}
                <div className="space-y-6 mb-12">
                  <p className="text-lg md:text-xl text-[#f8fafc] leading-relaxed font-medium">
                    An <span className="text-[#ec4899] font-bold">AI-native, senior-level engineering portfolio</span> at the
                    intersection of design, systems, and intelligent tooling.
                  </p>

                  <p className="text-base md:text-lg text-[#94a3b8] leading-relaxed">
                    Built for <span className="text-[#FF1744] font-semibold">speed</span>, <span className="text-[#ec4899] font-semibold">elegance</span>,
                    and <span className="text-[#FF3838] font-semibold">depth</span>. Explore modern web, AI, and cloud work expressed through
                    a conscious, living interface that transcends traditional boundaries.
                  </p>

                  <p className="text-base md:text-lg text-[#94a3b8] leading-relaxed">
                    This portfolio showcases expertise in <span className="text-[#f8fafc] font-semibold">React</span>, <span className="text-[#f8fafc] font-semibold">Next.js</span>,
                    <span className="text-[#f8fafc] font-semibold"> TypeScript</span>, <span className="text-[#f8fafc] font-semibold">Three.js</span>, and cutting-edge
                    AI integration all wrapped in an ethereal, spirit-techno aesthetic.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            className="max-w-6xl mx-auto"
            initial={prefers ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#f8fafc] mb-4">
                Core Capabilities
              </h2>
              <p className="text-lg text-[#94a3b8] max-w-2xl mx-auto">
                A comprehensive skill set spanning modern web development, AI integration, and conscious design systems
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="relative group"
                  initial={prefers ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                >
                  {/* Card glow */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FF1744] to-[#ec4899] rounded-2xl opacity-0 group-hover:opacity-30 blur transition-opacity duration-500" />

                  {/* Card */}
                  <div className="relative bg-[#1e293b] rounded-2xl p-8 border-2 border-[#334155] group-hover:border-[#FF1744] transition-all duration-300 h-full">
                    {/* Icon */}
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-[#FF1744] to-[#ec4899] mb-5 shadow-[0_0_20px_rgba(255,23,68,0.3)] group-hover:shadow-[0_0_30px_rgba(255,23,68,0.5)] transition-shadow duration-300">
                      <div className="text-white">
                        {feature.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-[#f8fafc] mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-base text-[#94a3b8] leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}