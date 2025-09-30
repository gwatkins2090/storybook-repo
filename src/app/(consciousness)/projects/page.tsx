'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Zap, Star, Code, Globe } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tech: string[];
  category: string;
  image: string;
  github?: string;
  demo?: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    title: 'Neural Commerce Platform',
    description: 'AI-powered e-commerce platform with intelligent product recommendations and dynamic pricing algorithms.',
    tech: ['Next.js', 'TypeScript', 'TensorFlow', 'PostgreSQL', 'Redis'],
    category: 'AI/ML',
    image: '/api/placeholder/600/400',
    github: 'https://github.com',
    demo: 'https://demo.com',
    featured: true
  },
  {
    title: 'Quantum Task Manager',
    description: 'Revolutionary productivity app that uses quantum computing principles for optimal task scheduling.',
    tech: ['React', 'Node.js', 'GraphQL', 'MongoDB', 'Docker'],
    category: 'Web App',
    image: '/api/placeholder/600/400',
    github: 'https://github.com',
    demo: 'https://demo.com',
    featured: true
  },
  {
    title: 'Consciousness API',
    description: 'RESTful API that bridges human consciousness with digital interfaces through advanced NLP.',
    tech: ['Python', 'FastAPI', 'OpenAI', 'PostgreSQL', 'AWS'],
    category: 'Backend',
    image: '/api/placeholder/600/400',
    github: 'https://github.com',
    featured: false
  },
  {
    title: 'Reality Sync Mobile',
    description: 'Cross-platform mobile app for synchronizing digital and physical reality experiences.',
    tech: ['React Native', 'TypeScript', 'Firebase', 'AR Kit'],
    category: 'Mobile',
    image: '/api/placeholder/600/400',
    github: 'https://github.com',
    demo: 'https://demo.com',
    featured: false
  },
  {
    title: 'Ethereal Dashboard',
    description: 'Beautiful analytics dashboard with real-time data visualization and predictive insights.',
    tech: ['Vue.js', 'D3.js', 'Node.js', 'InfluxDB', 'Kubernetes'],
    category: 'Data Viz',
    image: '/api/placeholder/600/400',
    github: 'https://github.com',
    demo: 'https://demo.com',
    featured: false
  },
  {
    title: 'Quantum Blockchain',
    description: 'Next-generation blockchain implementation using quantum-resistant cryptography.',
    tech: ['Rust', 'WebAssembly', 'Solidity', 'IPFS'],
    category: 'Blockchain',
    image: '/api/placeholder/600/400',
    github: 'https://github.com',
    featured: false
  }
];

const categories = ['All', 'AI/ML', 'Web App', 'Backend', 'Mobile', 'Data Viz', 'Blockchain'];

export function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const sectionRef = useRef<HTMLDivElement>(null);

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="projects"
      ref={sectionRef}
      className="min-h-screen py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent mb-6">
            Quantum Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Manifestations of consciousness channeled through code into reality
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/25'
                  : 'bg-black/20 text-gray-300 hover:bg-purple-600/20 hover:text-purple-300'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects: Mobile Carousel (md:hidden) */}
        <motion.div
          className="relative md:hidden"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-slate-900 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-slate-900 to-transparent" />

          <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                className="snap-center min-w-[88%] bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.3)] hover:shadow-[0_10px_50px_rgba(127,57,251,0.15)] transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.05 }}
                whileHover={{ y: -4 }}
              >
                <div className="relative h-48 bg-gradient-to-br from-purple-600/25 to-blue-600/25">
                  {project.featured && (
                    <div className="absolute top-3 right-3 bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                      <Star className="w-4 h-4" /> Featured
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    <span className="text-xs text-purple-400 bg-purple-400/10 px-2 py-1 rounded">{project.category}</span>
                  </div>
                  <p className="text-sm text-gray-200/90 leading-relaxed mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="text-[11px] bg-gray-700/40 text-gray-200 px-2 py-0.5 rounded">{tech}</span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-purple-300 transition-colors">
                        <Github className="w-4 h-4" /><span className="text-sm">Code</span>
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-purple-300 transition-colors">
                        <ExternalLink className="w-4 h-4" /><span className="text-sm">Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Projects: Desktop Grid (hidden on mobile) */}
        <motion.div
          className="hidden md:block"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.35 }}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.25)] hover:shadow-[0_12px_50px_rgba(127,57,251,0.15)] transition-shadow"
                initial={{ opacity: 0, y: 24 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.06 }}
                whileHover={{ y: -2 }}
              >
                <div className="relative h-44">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/25 to-blue-600/25" />
                  {/* Placeholder image area (swap to real images later) */}
                  {/* <Image src={project.image} alt={project.title} fill className="object-cover" /> */}
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                      <Star className="w-4 h-4" /> Featured
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-purple-200 transition-colors">{project.title}</h3>
                    <span className="text-xs md:text-sm text-purple-400 bg-purple-400/10 px-2 py-1 rounded">{project.category}</span>
                  </div>
                  <p className="text-sm md:text-base text-gray-200/90 leading-relaxed mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((tech) => (
                      <span key={tech} className="text-xs bg-gray-700/40 text-gray-200 px-2.5 py-1 rounded">{tech}</span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-purple-300 transition-colors">
                        <Github className="w-4 h-4" /><span className="text-sm">Code</span>
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-purple-300 transition-colors">
                        <ExternalLink className="w-4 h-4" /><span className="text-sm">Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-lg text-gray-300 mb-6">
            Want to collaborate on the next quantum breakthrough?
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105"
          >
            Let's Connect
          </button>
        </motion.div>
      </div>
    </section>
  );
}
