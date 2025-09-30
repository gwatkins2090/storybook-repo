import Header from '@/components/layout/Header';
import SourceHero from '@/components/landing/SourceHero';
import { About } from './(consciousness)/about/page';
import { DigitalDNA } from './(consciousness)/dna/page';
import { Projects } from './(consciousness)/projects/page';
import { ContactCTA } from './(consciousness)/contact/page';
import { SpiritCursor } from '@/components/spirit';

export default function Home() {
  return (
    <>
      <SpiritCursor />
      <Header />
      <SourceHero />
      <About />
      <DigitalDNA />
      <Projects />
      <ContactCTA />
    </>
  );
}
