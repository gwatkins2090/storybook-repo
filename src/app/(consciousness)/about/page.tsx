'use client';

import { motion, useReducedMotion } from 'framer-motion';

export function About() {
  const prefers = useReducedMotion();

  return (
    <section id="about" className="py-24 md:py-28 bg-gradient-to-b from-transparent to-black/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent mb-4">
            Back To Sourcecode
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-[#c9c7d3]/90 max-w-2xl mx-auto">
            Ellis Dee’s senior developer portfolio — a lens into AI‑native craft and conscious systems.
          </p>
        </motion.div>

        <div className="mx-auto max-w-3xl">
          <motion.div
            className="group relative bg-white/5 border border-white/10 rounded-2xl p-10 md:p-12 backdrop-blur-md overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.25)]"
            initial={prefers ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: prefers ? 0 : 0.55, ease: 'easeOut' }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#7F39FB]/10 to-[#00FFD4]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative text-center">
              <h3 className="text-xl md:text-2xl font-semibold tracking-wide text-purple-200/90 mb-2">Ellis Dee, Senior Developer</h3>
              <p className="text-2xl md:text-3xl font-bold text-white mb-4">Back To Sourcecode</p>
              <p className="text-base md:text-lg text-[#e8e6f4]/90 leading-relaxed md:leading-8 mb-6">
                Ethereal interfaces. Spirit‑techno systems. Code that communes with the source.
              </p>
              <p className="text-sm md:text-base text-[#c9c7d3]/90 leading-relaxed md:leading-7">
                An AI‑native, senior‑level engineering portfolio at the intersection of design, systems,
                and intelligent tooling — built for speed, elegance, and depth. Explore modern web, AI, and cloud work
                expressed through a conscious, living interface.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

