'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Code2, Eye, Sparkles, Layers, Box, Type, MousePointer2, Wand2 } from 'lucide-react';
import { HeroBanner } from '@/components/hero';
import Mandala from '@/components/sacred/Mandala';
import FlowerOfLife from '@/components/sacred/FlowerOfLife';
import { QuantumButton, GlassMorphism, ConsciousnessText } from '@/components/spirit';
import { InteractivePlayground } from './InteractivePlayground';

// Component showcase data structure
interface ComponentShowcase {
  id: string;
  name: string;
  category: 'hero' | 'sacred' | 'spirit' | 'quantum';
  icon: React.ReactNode;
  description: string;
  examples: {
    id: string;
    title: string;
    description: string;
    component: React.ReactNode;
    code: string;
  }[];
}

export default function StorybookPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedComponent, setExpandedComponent] = useState<string | null>(null);
  const [showCode, setShowCode] = useState<{ [key: string]: boolean }>({});
  const [activeTab, setActiveTab] = useState<'showcase' | 'playground'>('showcase');
  const [playgroundComponent, setPlaygroundComponent] = useState<'mandala' | 'flower-of-life'>('mandala');

  const categories = [
    { id: 'all', name: 'All Components', icon: <Layers className="w-4 h-4" /> },
    { id: 'hero', name: 'Hero Banners', icon: <Sparkles className="w-4 h-4" /> },
    { id: 'sacred', name: 'Sacred Geometry', icon: <Box className="w-4 h-4" /> },
    { id: 'spirit', name: 'Spirit Components', icon: <Type className="w-4 h-4" /> },
  ];

  const showcases: ComponentShowcase[] = [
    {
      id: 'hero-banner',
      name: 'HeroBanner',
      category: 'hero',
      icon: <Sparkles className="w-5 h-5" />,
      description: 'Stunning hero banner with animated sacred geometry, parallax effects, and customizable content.',
      examples: [
        {
          id: 'hero-basic',
          title: 'Basic Hero',
          description: 'Simple hero with title, subtitle, and CTA buttons',
          component: (
            <div className="h-[400px] overflow-hidden rounded-lg">
              <HeroBanner
                title="Welcome"
                subtitle="A beautiful hero banner"
                chips={['React', 'TypeScript', 'Next.js']}
                primaryCTA={{ text: 'Get Started', href: '#' }}
                minHeight="400px"
                showScrollIndicator={false}
              />
            </div>
          ),
          code: `<HeroBanner
  title="Welcome"
  subtitle="A beautiful hero banner"
  chips={['React', 'TypeScript', 'Next.js']}
  primaryCTA={{ text: 'Get Started', href: '#' }}
/>`,
        },
        {
          id: 'hero-custom',
          title: 'Custom Colors',
          description: 'Hero with custom gradient and orb colors',
          component: (
            <div className="h-[400px] overflow-hidden rounded-lg">
              <HeroBanner
                title="Custom Theme"
                subtitle="With personalized colors"
                gradientFrom="#1a0033"
                gradientVia="#330066"
                gradientTo="#1a0033"
                orbColor1="rgba(255,107,107,0.25)"
                orbColor2="rgba(255,193,7,0.18)"
                minHeight="400px"
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
/>`,
        },
        {
          id: 'hero-minimal',
          title: 'Minimal',
          description: 'Performance-optimized minimal version',
          component: (
            <div className="h-[400px] overflow-hidden rounded-lg">
              <HeroBanner
                title="Less is More"
                subtitle="Clean and minimal"
                showOrbs={false}
                mandalaOpacity={0.15}
                flowerOfLifeOpacity={0.08}
                minHeight="400px"
                showScrollIndicator={false}
              />
            </div>
          ),
          code: `<HeroBanner
  title="Less is More"
  subtitle="Clean and minimal"
  showOrbs={false}
  mandalaOpacity={0.15}
  flowerOfLifeOpacity={0.08}
/>`,
        },
      ],
    },
    {
      id: 'mandala',
      name: 'Mandala',
      category: 'sacred',
      icon: <Box className="w-5 h-5" />,
      description: 'Animated spinning mandala with customizable layers, colors, and rotation speed.',
      examples: [
        {
          id: 'mandala-default',
          title: 'Default Mandala',
          description: 'Standard mandala with default settings',
          component: (
            <div className="h-[400px] bg-gradient-to-br from-[#0a0a0f] via-[#120a26] to-[#0a0a0f] rounded-lg flex items-center justify-center">
              <Mandala size={300} layers={6} opacity={0.8} spinSeconds={60} />
            </div>
          ),
          code: `<Mandala 
  size={300} 
  layers={6} 
  opacity={0.8} 
  spinSeconds={60} 
/>`,
        },
        {
          id: 'mandala-custom',
          title: 'Custom Colors',
          description: 'Mandala with custom color scheme',
          component: (
            <div className="h-[400px] bg-gradient-to-br from-[#0a0a0f] via-[#120a26] to-[#0a0a0f] rounded-lg flex items-center justify-center">
              <Mandala 
                size={300} 
                layers={9} 
                opacity={0.9} 
                spinSeconds={45}
                colorA="#FF6B6B"
                colorB="#FFD93D"
              />
            </div>
          ),
          code: `<Mandala 
  size={300} 
  layers={9} 
  opacity={0.9} 
  spinSeconds={45}
  colorA="#FF6B6B"
  colorB="#FFD93D"
/>`,
        },
        {
          id: 'mandala-fast',
          title: 'Fast Rotation',
          description: 'High-energy mandala with faster spin',
          component: (
            <div className="h-[400px] bg-gradient-to-br from-[#0a0a0f] via-[#120a26] to-[#0a0a0f] rounded-lg flex items-center justify-center">
              <Mandala 
                size={300} 
                layers={12} 
                opacity={0.7} 
                spinSeconds={20}
                direction={-1}
              />
            </div>
          ),
          code: `<Mandala 
  size={300} 
  layers={12} 
  opacity={0.7} 
  spinSeconds={20}
  direction={-1}
/>`,
        },
      ],
    },
    {
      id: 'flower-of-life',
      name: 'Flower of Life',
      category: 'sacred',
      icon: <Box className="w-5 h-5" />,
      description: 'Sacred geometry pattern with hexagonal lattice structure.',
      examples: [
        {
          id: 'fol-default',
          title: 'Default Pattern',
          description: 'Standard flower of life pattern',
          component: (
            <div className="h-[400px] bg-gradient-to-br from-[#0a0a0f] via-[#120a26] to-[#0a0a0f] rounded-lg flex items-center justify-center">
              <FlowerOfLife size={400} rings={3} opacity={0.6} spinSeconds={80} />
            </div>
          ),
          code: `<FlowerOfLife 
  size={400} 
  rings={3} 
  opacity={0.6} 
  spinSeconds={80} 
/>`,
        },
        {
          id: 'fol-complex',
          title: 'Complex Pattern',
          description: 'More rings for intricate design',
          component: (
            <div className="h-[400px] bg-gradient-to-br from-[#0a0a0f] via-[#120a26] to-[#0a0a0f] rounded-lg flex items-center justify-center">
              <FlowerOfLife 
                size={400} 
                rings={5} 
                opacity={0.8} 
                spinSeconds={100}
                stroke="#00FFD4"
              />
            </div>
          ),
          code: `<FlowerOfLife 
  size={400} 
  rings={5} 
  opacity={0.8} 
  spinSeconds={100}
  stroke="#00FFD4"
/>`,
        },
      ],
    },
    {
      id: 'quantum-button',
      name: 'QuantumButton',
      category: 'spirit',
      icon: <MousePointer2 className="w-5 h-5" />,
      description: 'Interactive button with quantum effects, multiple variants, and consciousness states.',
      examples: [
        {
          id: 'btn-variants',
          title: 'Button Variants',
          description: 'Different button styles and sizes',
          component: (
            <div className="space-y-4 p-8 bg-gradient-to-br from-[#0a0a0f] via-[#120a26] to-[#0a0a0f] rounded-lg">
              <div className="flex gap-4 flex-wrap">
                <QuantumButton variant="primary">Primary</QuantumButton>
                <QuantumButton variant="secondary">Secondary</QuantumButton>
                <QuantumButton variant="ghost">Ghost</QuantumButton>
                <QuantumButton variant="consciousness">Consciousness</QuantumButton>
              </div>
              <div className="flex gap-4 flex-wrap items-end">
                <QuantumButton size="sm">Small</QuantumButton>
                <QuantumButton size="md">Medium</QuantumButton>
                <QuantumButton size="lg">Large</QuantumButton>
                <QuantumButton size="xl">Extra Large</QuantumButton>
              </div>
            </div>
          ),
          code: `<QuantumButton variant="primary">Primary</QuantumButton>
<QuantumButton variant="secondary">Secondary</QuantumButton>
<QuantumButton variant="ghost">Ghost</QuantumButton>
<QuantumButton variant="consciousness">Consciousness</QuantumButton>

<QuantumButton size="sm">Small</QuantumButton>
<QuantumButton size="md">Medium</QuantumButton>
<QuantumButton size="lg">Large</QuantumButton>`,
        },
        {
          id: 'btn-special',
          title: 'Special Effects',
          description: 'Buttons with consciousness and glitch effects',
          component: (
            <div className="space-y-4 p-8 bg-gradient-to-br from-[#0a0a0f] via-[#120a26] to-[#0a0a0f] rounded-lg">
              <div className="flex gap-4 flex-wrap">
                <QuantumButton consciousness>Consciousness Active</QuantumButton>
                <QuantumButton glitch>Glitch Effect</QuantumButton>
                <QuantumButton variant="consciousness" consciousness>
                  Full Power
                </QuantumButton>
              </div>
            </div>
          ),
          code: `<QuantumButton consciousness>Consciousness Active</QuantumButton>
<QuantumButton glitch>Glitch Effect</QuantumButton>
<QuantumButton variant="consciousness" consciousness>
  Full Power
</QuantumButton>`,
        },
      ],
    },
    {
      id: 'glass-morphism',
      name: 'GlassMorphism',
      category: 'spirit',
      icon: <Layers className="w-5 h-5" />,
      description: 'Glassmorphic container with various intensity levels and glow effects.',
      examples: [
        {
          id: 'glass-intensity',
          title: 'Intensity Levels',
          description: 'Different glass blur intensities',
          component: (
            <div className="grid grid-cols-2 gap-4 p-8 bg-gradient-to-br from-[#0a0a0f] via-[#120a26] to-[#0a0a0f] rounded-lg">
              <GlassMorphism intensity="low" className="p-6">
                <h3 className="text-white font-semibold mb-2">Low Intensity</h3>
                <p className="text-[#c9c7d3] text-sm">Subtle glass effect</p>
              </GlassMorphism>
              <GlassMorphism intensity="medium" className="p-6">
                <h3 className="text-white font-semibold mb-2">Medium Intensity</h3>
                <p className="text-[#c9c7d3] text-sm">Balanced glass effect</p>
              </GlassMorphism>
              <GlassMorphism intensity="high" className="p-6">
                <h3 className="text-white font-semibold mb-2">High Intensity</h3>
                <p className="text-[#c9c7d3] text-sm">Strong glass effect</p>
              </GlassMorphism>
              <GlassMorphism intensity="consciousness" glow className="p-6">
                <h3 className="text-white font-semibold mb-2">Consciousness</h3>
                <p className="text-[#c9c7d3] text-sm">With glow effect</p>
              </GlassMorphism>
            </div>
          ),
          code: `<GlassMorphism intensity="low">
  <h3>Low Intensity</h3>
  <p>Subtle glass effect</p>
</GlassMorphism>

<GlassMorphism intensity="consciousness" glow>
  <h3>Consciousness</h3>
  <p>With glow effect</p>
</GlassMorphism>`,
        },
      ],
    },
    {
      id: 'consciousness-text',
      name: 'ConsciousnessText',
      category: 'spirit',
      icon: <Type className="w-5 h-5" />,
      description: 'Animated text component with typewriter, gradient, and glitch effects.',
      examples: [
        {
          id: 'text-variants',
          title: 'Text Variants',
          description: 'Different text styles and effects',
          component: (
            <div className="space-y-6 p-8 bg-gradient-to-br from-[#0a0a0f] via-[#120a26] to-[#0a0a0f] rounded-lg">
              <ConsciousnessText
                text="Heading Variant"
                variant="heading"
                size="3xl"
              />
              <ConsciousnessText
                text="Mystical Gradient Text"
                variant="mystical"
                size="2xl"
                gradient
              />
              <ConsciousnessText
                text="Code Variant"
                variant="code"
                size="lg"
              />
              <ConsciousnessText
                text="Consciousness Active"
                variant="body"
                size="xl"
                consciousness
                gradient
              />
            </div>
          ),
          code: `<ConsciousnessText
  text="Heading Variant"
  variant="heading"
  size="3xl"
/>

<ConsciousnessText
  text="Mystical Gradient Text"
  variant="mystical"
  gradient
/>

<ConsciousnessText
  text="Consciousness Active"
  consciousness
  gradient
/>`,
        },
        {
          id: 'text-typewriter',
          title: 'Typewriter Effect',
          description: 'Animated typing effect',
          component: (
            <div className="p-8 bg-gradient-to-br from-[#0a0a0f] via-[#120a26] to-[#0a0a0f] rounded-lg">
              <ConsciousnessText
                text="This text appears with a typewriter effect..."
                variant="body"
                size="xl"
                typewriter
                gradient
              />
            </div>
          ),
          code: `<ConsciousnessText
  text="This text appears with a typewriter effect..."
  typewriter
  gradient
/>`,
        },
      ],
    },
  ];

  const filteredShowcases = selectedCategory === 'all'
    ? showcases 
    : showcases.filter(s => s.category === selectedCategory);

  const toggleCode = (exampleId: string) => {
    setShowCode(prev => ({ ...prev, [exampleId]: !prev[exampleId] }));
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0a0a0f] via-[#120a26] to-[#0a0a0f]">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-white via-[#e9ddff] to-[#9b87f5] bg-clip-text text-transparent">
                Component Storybook
              </h1>
              <p className="text-sm text-[#c9c7d3] mt-1">
                Explore and test reusable components
              </p>
            </div>
            <a 
              href="/"
              className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-[#c9c7d3] hover:bg-white/10 transition-colors"
            >
              Back to Home
            </a>
          </div>
        </div>
      </header>

      {/* Tab Navigation */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex gap-3 mb-6">
          <button
            onClick={() => setActiveTab('showcase')}
            className={`px-6 py-3 rounded-lg flex items-center gap-2 transition-all font-semibold ${
              activeTab === 'showcase'
                ? 'bg-gradient-to-r from-[#7F39FB] to-[#00FFD4] text-white'
                : 'bg-white/5 border border-white/10 text-[#c9c7d3] hover:bg-white/10'
            }`}
          >
            <Eye className="w-4 h-4" />
            Component Showcase
          </button>
          <button
            onClick={() => setActiveTab('playground')}
            className={`px-6 py-3 rounded-lg flex items-center gap-2 transition-all font-semibold ${
              activeTab === 'playground'
                ? 'bg-gradient-to-r from-[#7F39FB] to-[#00FFD4] text-white'
                : 'bg-white/5 border border-white/10 text-[#c9c7d3] hover:bg-white/10'
            }`}
          >
            <Wand2 className="w-4 h-4" />
            Interactive Playground
          </button>
        </div>

        {/* Category Filter - Only show in showcase mode */}
        {activeTab === 'showcase' && (
          <div className="flex gap-3 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-gradient-to-r from-[#7F39FB] to-[#00FFD4] text-white'
                    : 'bg-white/5 border border-white/10 text-[#c9c7d3] hover:bg-white/10'
                }`}
              >
                {cat.icon}
                {cat.name}
              </button>
            ))}
          </div>
        )}

        {/* Playground Component Selector */}
        {activeTab === 'playground' && (
          <div className="flex gap-3 flex-wrap">
            <button
              onClick={() => setPlaygroundComponent('mandala')}
              className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-all ${
                playgroundComponent === 'mandala'
                  ? 'bg-gradient-to-r from-[#7F39FB] to-[#00FFD4] text-white'
                  : 'bg-white/5 border border-white/10 text-[#c9c7d3] hover:bg-white/10'
              }`}
            >
              <Box className="w-4 h-4" />
              Mandala
            </button>
            <button
              onClick={() => setPlaygroundComponent('flower-of-life')}
              className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-all ${
                playgroundComponent === 'flower-of-life'
                  ? 'bg-gradient-to-r from-[#7F39FB] to-[#00FFD4] text-white'
                  : 'bg-white/5 border border-white/10 text-[#c9c7d3] hover:bg-white/10'
              }`}
            >
              <Box className="w-4 h-4" />
              Flower of Life
            </button>
          </div>
        )}
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        {activeTab === 'showcase' ? (
          /* Component Showcases */
          <div className="space-y-12">
          {filteredShowcases.map((showcase) => (
            <motion.div
              key={showcase.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative"
            >
              {/* Component Header */}
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-[#7F39FB]/20 to-[#00FFD4]/20 border border-white/10">
                    {showcase.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-white">{showcase.name}</h2>
                  <span className="px-3 py-1 rounded-full text-xs bg-white/5 border border-white/10 text-[#c9c7d3]">
                    {showcase.category}
                  </span>
                </div>
                <p className="text-[#c9c7d3] ml-14">{showcase.description}</p>
              </div>

              {/* Examples Grid */}
              <div className="grid gap-6">
                {showcase.examples.map((example) => (
                  <motion.div
                    key={example.id}
                    className="relative rounded-xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-sm"
                    whileHover={{ borderColor: 'rgba(127, 57, 251, 0.3)' }}
                  >
                    {/* Example Header */}
                    <div className="p-4 border-b border-white/10 bg-black/20">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-lg font-semibold text-white">{example.title}</h3>
                          <p className="text-sm text-[#c9c7d3] mt-1">{example.description}</p>
                        </div>
                        <button
                          onClick={() => toggleCode(example.id)}
                          className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-all ${
                            showCode[example.id]
                              ? 'bg-gradient-to-r from-[#7F39FB] to-[#00FFD4] text-white'
                              : 'bg-white/5 border border-white/10 text-[#c9c7d3] hover:bg-white/10'
                          }`}
                        >
                          {showCode[example.id] ? <Eye className="w-4 h-4" /> : <Code2 className="w-4 h-4" />}
                          {showCode[example.id] ? 'View' : 'Code'}
                        </button>
                      </div>
                    </div>

                    {/* Example Content */}
                    <AnimatePresence mode="wait">
                      {!showCode[example.id] ? (
                        <motion.div
                          key="preview"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="p-6"
                        >
                          {example.component}
                        </motion.div>
                      ) : (
                        <motion.div
                          key="code"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="p-6"
                        >
                          <pre className="bg-black/40 rounded-lg p-4 overflow-x-auto">
                            <code className="text-sm text-[#00FFD4] font-mono">
                              {example.code}
                            </code>
                          </pre>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Empty State */}
          {filteredShowcases.length === 0 && (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 border border-white/10 mb-4">
                <Sparkles className="w-8 h-8 text-[#c9c7d3]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">No components found</h3>
              <p className="text-[#c9c7d3]">Try selecting a different category</p>
            </div>
          )}
        </div>
      ) : (
        /* Interactive Playground */
        <div>
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-white mb-2">Interactive Playground</h2>
            <p className="text-[#c9c7d3]">
              Experiment with component properties in real-time and generate code
            </p>
          </div>
          <InteractivePlayground componentType={playgroundComponent} />
        </div>
      )}
      </div>

      {/* Floating Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{ background: 'radial-gradient(closest-side, rgba(127,57,251,0.4), rgba(0,0,0,0))' }}
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{ background: 'radial-gradient(closest-side, rgba(0,255,212,0.4), rgba(0,0,0,0))' }}
          animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
          transition={{ duration: 25, repeat: Infinity }}
        />
      </div>
    </div>
  );
}

