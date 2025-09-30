'use client';

import React from 'react';
import { HeroBanner } from '@/components/hero';

export default function SourceHero() {
  const handleExplore = () => {
    if (typeof document !== 'undefined') {
      document.getElementById('digital-dna')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeroBanner
      title="Back To Sourcecode"
      subtitle="Ethereal interfaces. Spirit‑techno systems. Code that communes with the source."
      chips={['Next.js 15', 'TypeScript', 'Framer Motion', 'Edge‑first', 'AI‑native']}
      primaryCTA={{
        text: 'Explore Projects',
        href: '#projects',
      }}
      secondaryCTA={{
        text: 'About the Agent',
        onClick: handleExplore,
      }}
      showProfileImage={true}
      profileImagePlaceholder="Add profile image at /public/images/profile.jpg"
      onScrollClick={handleExplore}
    />
  );
}

