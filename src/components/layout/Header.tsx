'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-black/20 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="font-extrabold tracking-tight text-white text-lg">
          Back <span className="text-[#9b87f5]">To</span> <span className="text-[#00ffd4]">Sourcecode</span>
        </a>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-[#c9c7d3]">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#digital-dna" className="hover:text-white transition-colors">Skills</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          <a href="/storybook" className="hover:text-white transition-colors flex items-center gap-1">
            <span className="text-[#00ffd4]">✨</span> Storybook
          </a>
          <a href="/Docs/resume.pdf" target="_blank" rel="noopener" className="ml-2 text-white/90 hover:text-white underline/30">
            Get my resume
          </a>
          <a href="#contact" className="ml-2 inline-flex items-center justify-center rounded-lg px-3 py-1.5 font-semibold text-white bg-gradient-to-r from-[#7F39FB] to-[#00FFD4] shadow-[0_6px_24px_rgba(127,57,251,0.25)]">
            Hire Me
          </a>
        </nav>

        {/* Mobile resume link */}
        <a href="/Docs/resume.pdf" target="_blank" rel="noopener" className="md:hidden text-xs text-white/80">
          Resume
        </a>
      </div>
    </header>
  );
}

