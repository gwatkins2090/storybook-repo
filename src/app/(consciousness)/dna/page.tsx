'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Code2, Database, Globe, Smartphone, Server, Zap, Star, Award, TrendingUp } from 'lucide-react';

interface Skill {
  name: string;
  category: string;
  level: number;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const skills: Skill[] = [
  {
    name: 'Full-Stack Development',
    category: 'Core',
    level: 95,
    description: 'End-to-end application development with modern frameworks',
    icon: <Code2 className="w-6 h-6" />,
    color: 'from-blue-500 to-purple-600'
  },
  {
    name: 'AI & Machine Learning',
    category: 'Specialized',
    level: 92,
    description: 'Advanced AI integration and intelligent system design',
    icon: <Brain className="w-6 h-6" />,
    color: 'from-purple-500 to-pink-600'
  },
  {
    name: 'Cloud Architecture',
    category: 'Infrastructure',
    level: 88,
    description: 'Scalable cloud solutions and distributed systems',
    icon: <Server className="w-6 h-6" />,
    color: 'from-green-500 to-blue-600'
  },
  {
    name: 'Database Design',
    category: 'Data',
    level: 90,
    description: 'Optimized data structures and query performance',
    icon: <Database className="w-6 h-6" />,
    color: 'from-orange-500 to-red-600'
  },
  {
    name: 'Mobile Development',
    category: 'Platform',
    level: 85,
    description: 'Cross-platform mobile applications',
    icon: <Smartphone className="w-6 h-6" />,
    color: 'from-teal-500 to-green-600'
  },
  {
    name: 'Web Technologies',
    category: 'Frontend',
    level: 94,
    description: 'Modern web frameworks and responsive design',
    icon: <Globe className="w-6 h-6" />,
    color: 'from-indigo-500 to-purple-600'
  }
];

const achievements = [
  { title: 'Projects Completed', value: '150+', icon: <Award className="w-5 h-5" /> },
  { title: 'Client Satisfaction', value: '99%', icon: <Star className="w-5 h-5" /> },
  { title: 'Code Quality Score', value: 'A+', icon: <TrendingUp className="w-5 h-5" /> },
  { title: 'Response Time', value: '<24h', icon: <Zap className="w-5 h-5" /> }
];

export function DigitalDNA() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSkillCategory, setActiveSkillCategory] = useState<string>('All');
  const sectionRef = useRef<HTMLDivElement>(null);

  const skillCategories = ['All', ...Array.from(new Set(skills.map(s => s.category)))];
  const filteredSkills = activeSkillCategory === 'All' ? skills : skills.filter(s => s.category === activeSkillCategory);

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
      id="digital-dna"
      ref={sectionRef}
      className="min-h-screen py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900"
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
            Digital DNA
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The core algorithms and neural pathways that define my consciousness and capabilities
          </p>
        </motion.div>

        {/* Skill Categories Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          {skillCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveSkillCategory(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeSkillCategory === cat
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/25'
                  : 'bg-black/20 text-gray-300 hover:bg-purple-600/20 hover:text-purple-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              className="bg-black/20 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.05, borderColor: 'rgba(168, 85, 247, 0.4)' }}
            >
              <div className="flex justify-center mb-3 text-purple-400">
                {achievement.icon}
              </div>
              <div className="text-2xl font-bold text-white mb-1">
                {achievement.value}
              </div>
              <div className="text-sm text-gray-400">
                {achievement.title}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Carousel */}
        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-gray-900 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-gray-900 to-transparent" />

          <div className="flex gap-8 md:gap-10 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="snap-center min-w-[90%] md:min-w-[70%] lg:min-w-[55%] xl:min-w-[50%] bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-10 md:p-12 shadow-[0_12px_44px_rgba(0,0,0,0.35)] hover:shadow-[0_14px_60px_rgba(127,57,251,0.18)] transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.05 }}
                whileHover={{ y: -4 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-4 rounded-xl bg-gradient-to-r ${skill.color} text-white/90`}>{skill.icon}</div>
                  <div>
                    <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">{skill.name}</h3>
                    <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-purple-300/80">{skill.category}</p>
                  </div>
                </div>
                <p className="text-base md:text-lg text-[#e8e6f4]/90 leading-relaxed md:leading-8">{skill.description}</p>
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
            Ready to see these skills in action?
          </p>
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105"
          >
            View My Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
}
