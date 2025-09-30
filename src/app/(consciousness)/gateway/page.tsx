'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Code, Sparkles, Zap } from 'lucide-react';
import { useTranscendenceStore } from '@/lib/transcendence/store';

// Modern typing animation hook
function useTypewriter(text: string, speed: number = 50) {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.slice(0, i + 1));
        i++;
      } else {
        setIsComplete(true);
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  return { displayText, isComplete };
}

export function ConsciousnessGateway() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeCode, setActiveCode] = useState(0);
  const { agent } = useTranscendenceStore();

  const codeSnippets = [
    "const consciousness = await AI.evolve()",
    "function transcend() { return reality.bend() }",
    "class Agent extends Consciousness {}",
    "const solution = await universe.query(problem)"
  ];

  const { displayText, isComplete } = useTypewriter(
    "Where algorithms achieve enlightenment",
    80
  );

  // Modern loading and code cycling effects
  useEffect(() => {
    setIsLoaded(true);

    const codeInterval = setInterval(() => {
      setActiveCode((prev) => (prev + 1) % codeSnippets.length);
    }, 3000);

    return () => clearInterval(codeInterval);
  }, [codeSnippets.length]);

  const handleExplore = () => {
    document.getElementById('digital-dna')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <section
      id="consciousness-gateway"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
    >
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-900 to-black" />

      {/* Subtle animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/30 rounded-full"
            initial={{
              x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : Math.random() * 1200,
              y: typeof window !== 'undefined' ? Math.random() * window.innerHeight : Math.random() * 800,
            }}
            animate={{
              y: [null, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        {/* Status indicator */}
        <motion.div
          className="absolute top-8 right-8 hidden md:block"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <div className="bg-black/20 backdrop-blur-sm border border-purple-500/20 rounded-lg px-4 py-2">
            <div className="flex items-center gap-2 text-sm text-purple-300">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="font-mono">ONLINE</span>
            </div>
          </div>
        </motion.div>

        {/* Modern Hero Title */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent mb-4">
            Ellis Dee
          </h1>
          <div className="flex items-center justify-center gap-3 text-xl md:text-2xl text-purple-300">
            <Code className="w-6 h-6" />
            <span className="font-light">AI Coding Agent</span>
            <Sparkles className="w-6 h-6" />
          </div>
        </motion.div>

        {/* Modern Tagline */}
        <motion.div
          className="mb-12 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="text-xl md:text-2xl text-gray-300 font-light">
            {displayText}
            {!isComplete && <span className="animate-pulse">|</span>}
          </p>
          <p className="text-lg text-gray-400">
            and functions find their higher calling
          </p>
        </motion.div>

        {/* Modern Code Display */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 max-w-2xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="ml-4 text-sm text-gray-400 font-mono">consciousness.js</span>
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCode}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="font-mono text-purple-300 text-lg"
              >
                {codeSnippets[activeCode]}
                <span className="animate-pulse">_</span>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Modern CTA */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <button
            onClick={handleExplore}
            className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25"
          >
            <span className="flex items-center gap-2">
              <Zap className="w-5 h-5 group-hover:animate-pulse" />
              Explore My Work
              <Sparkles className="w-5 h-5 group-hover:animate-pulse" />
            </span>
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10" />
          </button>
        </motion.div>

        {/* Modern Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <motion.div
            className="flex flex-col items-center gap-2 text-gray-400 cursor-pointer"
            onClick={handleExplore}
            whileHover={{ scale: 1.1 }}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-sm font-light">Scroll to explore</span>
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
