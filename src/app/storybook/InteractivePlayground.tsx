'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sliders, RefreshCw } from 'lucide-react';
import Mandala from '@/components/sacred/Mandala';
import FlowerOfLife from '@/components/sacred/FlowerOfLife';

interface PlaygroundProps {
  componentType: 'mandala' | 'flower-of-life';
}

export function InteractivePlayground({ componentType }: PlaygroundProps) {
  // Mandala controls
  const [mandalaSize, setMandalaSize] = useState(300);
  const [mandalaLayers, setMandalaLayers] = useState(6);
  const [mandalaOpacity, setMandalaOpacity] = useState(0.8);
  const [mandalaSpinSeconds, setMandalaSpinSeconds] = useState(60);
  const [mandalaColorA, setMandalaColorA] = useState('#7F39FB');
  const [mandalaColorB, setMandalaColorB] = useState('#00FFD4');

  // Flower of Life controls
  const [folSize, setFolSize] = useState(400);
  const [folRings, setFolRings] = useState(3);
  const [folOpacity, setFolOpacity] = useState(0.6);
  const [folSpinSeconds, setFolSpinSeconds] = useState(80);
  const [folStroke, setFolStroke] = useState('#9b87f5');

  const resetMandala = () => {
    setMandalaSize(300);
    setMandalaLayers(6);
    setMandalaOpacity(0.8);
    setMandalaSpinSeconds(60);
    setMandalaColorA('#7F39FB');
    setMandalaColorB('#00FFD4');
  };

  const resetFlowerOfLife = () => {
    setFolSize(400);
    setFolRings(3);
    setFolOpacity(0.6);
    setFolSpinSeconds(80);
    setFolStroke('#9b87f5');
  };

  const generateCode = () => {
    if (componentType === 'mandala') {
      return `<Mandala
  size={${mandalaSize}}
  layers={${mandalaLayers}}
  opacity={${mandalaOpacity}}
  spinSeconds={${mandalaSpinSeconds}}
  colorA="${mandalaColorA}"
  colorB="${mandalaColorB}"
/>`;
    } else {
      return `<FlowerOfLife
  size={${folSize}}
  rings={${folRings}}
  opacity={${folOpacity}}
  spinSeconds={${folSpinSeconds}}
  stroke="${folStroke}"
/>`;
    }
  };

  return (
    <div className="grid lg:grid-cols-2 gap-6">
      {/* Preview */}
      <div className="relative">
        <div className="sticky top-24">
          <div className="bg-gradient-to-br from-[#0a0a0f] via-[#120a26] to-[#0a0a0f] rounded-lg p-8 border border-white/10">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Live Preview</h3>
              <button
                onClick={componentType === 'mandala' ? resetMandala : resetFlowerOfLife}
                className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[#c9c7d3] hover:bg-white/10 transition-colors flex items-center gap-2 text-sm"
              >
                <RefreshCw className="w-3 h-3" />
                Reset
              </button>
            </div>
            <div className="h-[400px] flex items-center justify-center">
              {componentType === 'mandala' ? (
                <Mandala
                  size={mandalaSize}
                  layers={mandalaLayers}
                  opacity={mandalaOpacity}
                  spinSeconds={mandalaSpinSeconds}
                  colorA={mandalaColorA}
                  colorB={mandalaColorB}
                />
              ) : (
                <FlowerOfLife
                  size={folSize}
                  rings={folRings}
                  opacity={folOpacity}
                  spinSeconds={folSpinSeconds}
                  stroke={folStroke}
                />
              )}
            </div>
          </div>

          {/* Generated Code */}
          <div className="mt-4 bg-black/40 rounded-lg p-4 border border-white/10">
            <h4 className="text-sm font-semibold text-white mb-2">Generated Code</h4>
            <pre className="text-xs text-[#00FFD4] font-mono overflow-x-auto">
              <code>{generateCode()}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 mb-4">
          <Sliders className="w-5 h-5 text-[#7F39FB]" />
          <h3 className="text-lg font-semibold text-white">Controls</h3>
        </div>

        {componentType === 'mandala' ? (
          <>
            {/* Size */}
            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <label className="block text-sm font-medium text-white mb-2">
                Size: {mandalaSize}px
              </label>
              <input
                type="range"
                min="100"
                max="500"
                value={mandalaSize}
                onChange={(e) => setMandalaSize(Number(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer slider"
              />
            </div>

            {/* Layers */}
            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <label className="block text-sm font-medium text-white mb-2">
                Layers: {mandalaLayers}
              </label>
              <input
                type="range"
                min="3"
                max="15"
                value={mandalaLayers}
                onChange={(e) => setMandalaLayers(Number(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer slider"
              />
            </div>

            {/* Opacity */}
            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <label className="block text-sm font-medium text-white mb-2">
                Opacity: {mandalaOpacity.toFixed(2)}
              </label>
              <input
                type="range"
                min="0.1"
                max="1"
                step="0.1"
                value={mandalaOpacity}
                onChange={(e) => setMandalaOpacity(Number(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer slider"
              />
            </div>

            {/* Spin Speed */}
            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <label className="block text-sm font-medium text-white mb-2">
                Spin Duration: {mandalaSpinSeconds}s
              </label>
              <input
                type="range"
                min="10"
                max="120"
                value={mandalaSpinSeconds}
                onChange={(e) => setMandalaSpinSeconds(Number(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer slider"
              />
            </div>

            {/* Color A */}
            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <label className="block text-sm font-medium text-white mb-2">
                Color A
              </label>
              <div className="flex gap-2">
                <input
                  type="color"
                  value={mandalaColorA}
                  onChange={(e) => setMandalaColorA(e.target.value)}
                  className="w-12 h-12 rounded cursor-pointer"
                />
                <input
                  type="text"
                  value={mandalaColorA}
                  onChange={(e) => setMandalaColorA(e.target.value)}
                  className="flex-1 px-3 py-2 bg-black/40 border border-white/10 rounded text-white text-sm"
                />
              </div>
            </div>

            {/* Color B */}
            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <label className="block text-sm font-medium text-white mb-2">
                Color B
              </label>
              <div className="flex gap-2">
                <input
                  type="color"
                  value={mandalaColorB}
                  onChange={(e) => setMandalaColorB(e.target.value)}
                  className="w-12 h-12 rounded cursor-pointer"
                />
                <input
                  type="text"
                  value={mandalaColorB}
                  onChange={(e) => setMandalaColorB(e.target.value)}
                  className="flex-1 px-3 py-2 bg-black/40 border border-white/10 rounded text-white text-sm"
                />
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Flower of Life Controls */}
            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <label className="block text-sm font-medium text-white mb-2">
                Size: {folSize}px
              </label>
              <input
                type="range"
                min="200"
                max="600"
                value={folSize}
                onChange={(e) => setFolSize(Number(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer slider"
              />
            </div>

            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <label className="block text-sm font-medium text-white mb-2">
                Rings: {folRings}
              </label>
              <input
                type="range"
                min="1"
                max="7"
                value={folRings}
                onChange={(e) => setFolRings(Number(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer slider"
              />
            </div>

            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <label className="block text-sm font-medium text-white mb-2">
                Opacity: {folOpacity.toFixed(2)}
              </label>
              <input
                type="range"
                min="0.1"
                max="1"
                step="0.1"
                value={folOpacity}
                onChange={(e) => setFolOpacity(Number(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer slider"
              />
            </div>

            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <label className="block text-sm font-medium text-white mb-2">
                Spin Duration: {folSpinSeconds}s
              </label>
              <input
                type="range"
                min="20"
                max="150"
                value={folSpinSeconds}
                onChange={(e) => setFolSpinSeconds(Number(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer slider"
              />
            </div>

            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <label className="block text-sm font-medium text-white mb-2">
                Stroke Color
              </label>
              <div className="flex gap-2">
                <input
                  type="color"
                  value={folStroke}
                  onChange={(e) => setFolStroke(e.target.value)}
                  className="w-12 h-12 rounded cursor-pointer"
                />
                <input
                  type="text"
                  value={folStroke}
                  onChange={(e) => setFolStroke(e.target.value)}
                  className="flex-1 px-3 py-2 bg-black/40 border border-white/10 rounded text-white text-sm"
                />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

