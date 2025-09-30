'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown, ChevronRight, Code2, Sparkles, Box, Type,
  Search, Settings, Menu, Home, Copy
} from 'lucide-react';
import { HeroBanner } from '@/components/hero';
import Mandala from '@/components/sacred/Mandala';
import FlowerOfLife from '@/components/sacred/FlowerOfLife';
import { QuantumButton, GlassMorphism, ConsciousnessText } from '@/components/spirit';

// Story data structure
interface Story {
  id: string;
  title: string;
  component: React.ReactNode;
  code: string;
}

interface ComponentGroup {
  id: string;
  name: string;
  icon: React.ReactNode;
  stories: Story[];
}

export default function StorybookPage() {
  const [selectedStory, setSelectedStory] = useState<string>('hero-basic');
  const [expandedGroups, setExpandedGroups] = useState<{ [key: string]: boolean }>({
    hero: true,
    sacred: true,
    spirit: true
  });
  const [showCode, setShowCode] = useState<boolean>(false);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Component groups with stories
  const componentGroups: ComponentGroup[] = [
    {
      id: 'hero',
      name: 'Hero Banners',
      icon: <Sparkles className="w-4 h-4" />,
      stories: [
        {
          id: 'hero-basic',
          title: 'Basic Hero',
          component: (
            <div className="h-[500px] w-full">
              <HeroBanner
                title="Welcome to Storybook"
                subtitle="A beautiful component showcase"
                chips={['React', 'TypeScript', 'Next.js']}
                primaryCTA={{ text: 'Get Started', href: '#' }}
                minHeight="500px"
                showScrollIndicator={false}
              />
            </div>
          ),
          code: `<HeroBanner
  title="Welcome to Storybook"
  subtitle="A beautiful component showcase"
  chips={['React', 'TypeScript', 'Next.js']}
  primaryCTA={{ text: 'Get Started', href: '#' }}
/>`
        },
        {
          id: 'hero-custom',
          title: 'Custom Colors',
          component: (
            <div className="h-[500px] w-full">
              <HeroBanner
                title="Custom Theme"
                subtitle="With personalized colors"
                gradientFrom="#1a0033"
                gradientVia="#330066"
                gradientTo="#1a0033"
                orbColor1="rgba(255,107,107,0.25)"
                orbColor2="rgba(255,193,7,0.18)"
                minHeight="500px"
                showScrollIndicator={false}
              />
            </div>
          ),
          code: `<HeroBanner
  title="Custom Theme"
  subtitle="With personalized colors"
  gradientFrom="#1a0033"
  gradientVia="#330066"
  gradientTo="#1a0033"
  orbColor1="rgba(255,107,107,0.25)"
  orbColor2="rgba(255,193,7,0.18)"
/>`
        }
      ]
    },
    {
      id: 'sacred',
      name: 'Sacred Geometry',
      icon: <Box className="w-4 h-4" />,
      stories: [
        {
          id: 'mandala-default',
          title: 'Mandala - Default',
          component: (
            <div className="h-[500px] bg-gradient-to-br from-[#0f172a] to-[#1e293b] flex items-center justify-center">
              <Mandala size={300} layers={6} opacity={0.8} spinSeconds={60} />
            </div>
          ),
          code: `<Mandala
  size={300}
  layers={6}
  opacity={0.8}
  spinSeconds={60}
/>`
        },
        {
          id: 'mandala-custom',
          title: 'Mandala - Custom Colors',
          component: (
            <div className="h-[500px] bg-gradient-to-br from-[#0f172a] to-[#1e293b] flex items-center justify-center">
              <Mandala
                size={300}
                layers={9}
                opacity={0.9}
                spinSeconds={45}
                colorA="#FF1744"
                colorB="#ec4899"
              />
            </div>
          ),
          code: `<Mandala
  size={300}
  layers={9}
  opacity={0.9}
  spinSeconds={45}
  colorA="#FF1744"
  colorB="#ec4899"
/>`
        },
        {
          id: 'flower-default',
          title: 'Flower of Life',
          component: (
            <div className="h-[500px] bg-gradient-to-br from-[#0f172a] to-[#1e293b] flex items-center justify-center">
              <FlowerOfLife size={400} rings={3} opacity={0.6} spinSeconds={80} />
            </div>
          ),
          code: `<FlowerOfLife
  size={400}
  rings={3}
  opacity={0.6}
  spinSeconds={80}
/>`
        }
      ]
    },
    {
      id: 'spirit',
      name: 'Spirit Components',
      icon: <Type className="w-4 h-4" />,
      stories: [
        {
          id: 'quantum-button',
          title: 'Quantum Button',
          component: (
            <div className="h-[500px] bg-gradient-to-br from-[#0f172a] to-[#1e293b] flex items-center justify-center gap-6">
              <QuantumButton variant="primary">Primary</QuantumButton>
              <QuantumButton variant="secondary">Secondary</QuantumButton>
              <QuantumButton variant="ghost">Ghost</QuantumButton>
            </div>
          ),
          code: `<QuantumButton variant="primary">Primary</QuantumButton>
<QuantumButton variant="secondary">Secondary</QuantumButton>
<QuantumButton variant="ghost">Ghost</QuantumButton>`
        },
        {
          id: 'glassmorphism',
          title: 'GlassMorphism',
          component: (
            <div className="h-[500px] bg-gradient-to-br from-[#0f172a] to-[#1e293b] flex items-center justify-center p-8">
              <GlassMorphism intensity="medium" className="p-10 max-w-md">
                <h3 className="text-2xl font-bold text-white mb-3">Glassmorphic Card</h3>
                <p className="text-gray-300 text-lg">Beautiful frosted glass effect with backdrop blur</p>
              </GlassMorphism>
            </div>
          ),
          code: `<GlassMorphism intensity="medium" className="p-10">
  <h3>Glassmorphic Card</h3>
  <p>Beautiful frosted glass effect</p>
</GlassMorphism>`
        },
        {
          id: 'consciousness-text',
          title: 'Consciousness Text',
          component: (
            <div className="h-[500px] bg-gradient-to-br from-[#0f172a] to-[#1e293b] flex items-center justify-center">
              <ConsciousnessText
                text="Ethereal Typography"
                variant="heading"
                size="4xl"
                gradient={true}
                consciousness={true}
              />
            </div>
          ),
          code: `<ConsciousnessText
  text="Ethereal Typography"
  variant="heading"
  size="4xl"
  gradient={true}
  consciousness={true}
/>`
        }
      ]
    }
  ];

  // Get all stories for search
  const allStories = componentGroups.flatMap(group =>
    group.stories.map(story => ({ ...story, groupId: group.id, groupName: group.name }))
  );

  // Find current story
  const currentStory = allStories.find(s => s.id === selectedStory);

  // Toggle group expansion
  const toggleGroup = (groupId: string) => {
    console.log('Toggling group:', groupId);
    setExpandedGroups(prev => ({ ...prev, [groupId]: !prev[groupId] }));
  };

  // Handle story selection
  const handleStorySelect = (storyId: string) => {
    console.log('Selecting story:', storyId);
    setSelectedStory(storyId);
  };

  // Filter stories by search
  const filteredGroups = componentGroups.map(group => ({
    ...group,
    stories: group.stories.filter(story =>
      story.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(group => group.stories.length > 0);

  return (
    <>
      <style jsx global>{`
        * {
          cursor: default !important;
          pointer-events: auto !important;
        }
        button, a, input {
          cursor: pointer !important;
          pointer-events: auto !important;
        }
      `}</style>

      <div className="h-screen flex flex-col bg-gradient-to-br from-[#0f172a] to-[#1e293b] overflow-hidden">
        {/* Top Toolbar */}
        <div className="h-16 bg-[#1e293b] border-b-2 border-[#FF1744] shadow-[0_0_20px_rgba(255,23,68,0.3)] flex items-center justify-between px-6 flex-shrink-0 z-50">
          {/* Left */}
          <div className="flex items-center gap-6">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2.5 hover:bg-[#334155] rounded-lg transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,23,68,0.3)] cursor-pointer"
            >
              <Menu className="w-5 h-5 text-[#f8fafc]" />
            </button>
            <a href="/" className="flex items-center gap-3 text-[#f8fafc] hover:text-[#FF1744] transition-colors duration-300 cursor-pointer">
              <Home className="w-5 h-5" />
              <span className="font-bold text-base">Back To Sourcecode</span>
            </a>
            <div className="h-8 w-px bg-[#FF1744] opacity-30" />
            <h1 className="text-xl font-black bg-gradient-to-r from-[#FF1744] via-[#ec4899] to-[#FF3838] bg-clip-text text-transparent">
              Component Storybook
            </h1>
          </div>

          {/* Right */}
          <div className="flex items-center gap-3">
            <button className="p-2.5 hover:bg-[#334155] rounded-lg transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,23,68,0.3)]" title="Settings">
              <Settings className="w-5 h-5 text-[#94a3b8] hover:text-[#FF1744] transition-colors" />
            </button>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex overflow-hidden">
          {/* Left Sidebar - Navigation */}
          <AnimatePresence>
            {sidebarOpen && (
              <motion.div
                initial={{ x: -320, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -320, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="w-80 bg-[#1e293b] border-r-2 border-[#334155] flex flex-col flex-shrink-0 z-40"
                style={{ pointerEvents: 'auto' }}
              >
                {/* Search */}
                <div className="p-6 border-b-2 border-[#334155]">
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#94a3b8]" />
                    <input
                      type="text"
                      placeholder="Search components..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 bg-[#0f172a] border-2 border-[#334155] rounded-xl text-[#f8fafc] placeholder-[#94a3b8] focus:border-[#FF1744] focus:outline-none focus:shadow-[0_0_15px_rgba(255,23,68,0.2)] transition-all duration-300 text-base"
                    />
                  </div>
                </div>

                {/* Navigation Tree */}
                <div className="flex-1 overflow-y-auto p-4 space-y-2">
                  {filteredGroups.map((group) => (
                    <div key={group.id} className="space-y-1">
                      {/* Group Header */}
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          toggleGroup(group.id);
                        }}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[#334155] transition-all duration-300 group"
                        style={{ pointerEvents: 'auto', zIndex: 10 }}
                      >
                        <motion.div
                          animate={{ rotate: expandedGroups[group.id] ? 90 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronRight className="w-4 h-4 text-[#94a3b8] group-hover:text-[#FF1744]" />
                        </motion.div>
                        <div className="text-[#FF1744]">{group.icon}</div>
                        <span className="font-bold text-base text-[#f8fafc] group-hover:text-[#FF1744] transition-colors">
                          {group.name}
                        </span>
                      </button>

                      {/* Stories */}
                      <AnimatePresence>
                        {expandedGroups[group.id] && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="ml-4 space-y-1 overflow-hidden"
                          >
                            {group.stories.map((story) => (
                              <button
                                key={story.id}
                                onClick={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  handleStorySelect(story.id);
                                }}
                                className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-300 text-left ${
                                  selectedStory === story.id
                                    ? 'bg-gradient-to-r from-[#FF1744] to-[#ec4899] text-white shadow-[0_0_15px_rgba(255,23,68,0.4)]'
                                    : 'text-[#94a3b8] hover:bg-[#334155] hover:text-[#f8fafc]'
                                }`}
                                style={{ pointerEvents: 'auto', zIndex: 10 }}
                              >
                                <Code2 className="w-4 h-4" />
                                <span className="font-medium text-sm">{story.title}</span>
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Center Canvas */}
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Canvas Toolbar */}
            <div className="h-14 bg-[#1e293b] border-b-2 border-[#334155] flex items-center justify-between px-6 flex-shrink-0">
              {/* Left - Story Title */}
              <div className="flex items-center gap-4">
                <h2 className="text-lg font-bold text-[#f8fafc]">
                  {currentStory?.title || 'Select a component'}
                </h2>
              </div>

              {/* Right - Canvas Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowCode(!showCode)}
                  className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 flex items-center gap-2 ${
                    showCode
                      ? 'bg-gradient-to-r from-[#FF1744] to-[#ec4899] text-white shadow-[0_0_15px_rgba(255,23,68,0.4)]'
                      : 'bg-[#334155] text-[#94a3b8] hover:text-[#f8fafc] hover:shadow-[0_0_10px_rgba(255,23,68,0.2)]'
                  }`}
                >
                  <Code2 className="w-4 h-4" />
                  {showCode ? 'Hide Code' : 'Show Code'}
                </button>
                <button
                  onClick={() => {
                    if (currentStory) {
                      navigator.clipboard.writeText(currentStory.code);
                    }
                  }}
                  className="p-2.5 bg-[#334155] hover:bg-[#FF1744] rounded-lg transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,23,68,0.3)]"
                  title="Copy code"
                >
                  <Copy className="w-4 h-4 text-[#94a3b8] hover:text-white" />
                </button>
              </div>
            </div>

            {/* Canvas Content */}
            <div className="flex-1 overflow-auto bg-gradient-to-br from-[#0f172a] to-[#1e293b] p-8">
              {currentStory ? (
                <div className="space-y-6">
                  {/* Component Preview */}
                  <div className="bg-[#1e293b] border-2 border-[#334155] rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                    <div className="bg-[#0f172a] border-b-2 border-[#334155] px-6 py-3">
                      <h3 className="text-sm font-bold text-[#94a3b8]">PREVIEW</h3>
                    </div>
                    <div className="bg-gradient-to-br from-[#0f172a] to-[#1e293b]">
                      {currentStory.component}
                    </div>
                  </div>

                  {/* Code Block */}
                  <AnimatePresence>
                    {showCode && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="bg-[#1e293b] border-2 border-[#FF1744] rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(255,23,68,0.3)]"
                      >
                        <div className="bg-[#0f172a] border-b-2 border-[#FF1744] px-6 py-3 flex items-center justify-between">
                          <h3 className="text-sm font-bold text-[#FF1744]">CODE</h3>
                          <button
                            onClick={() => {
                              if (currentStory) {
                                navigator.clipboard.writeText(currentStory.code);
                              }
                            }}
                            className="px-3 py-1.5 bg-[#FF1744] hover:bg-[#ec4899] text-white text-xs font-bold rounded-lg transition-all duration-300 flex items-center gap-2"
                          >
                            <Copy className="w-3 h-3" />
                            Copy
                          </button>
                        </div>
                        <div className="p-6 overflow-x-auto">
                          <pre className="text-sm text-[#f8fafc] font-mono leading-relaxed">
                            <code>{currentStory.code}</code>
                          </pre>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <div className="h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#1e293b] border-2 border-[#FF1744] mb-6 shadow-[0_0_30px_rgba(255,23,68,0.3)]">
                      <Sparkles className="w-10 h-10 text-[#FF1744]" />
                    </div>
                    <h3 className="text-2xl font-black text-[#f8fafc] mb-3">
                      Select a Component
                    </h3>
                    <p className="text-lg text-[#94a3b8]">
                      Choose a component from the sidebar to view its preview
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
