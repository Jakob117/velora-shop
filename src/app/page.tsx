'use client';

import Hero from '@/components/sections/Hero';
import Shop from '@/components/sections/Shop';
import Features from '@/components/sections/Features';
import Configurator from '@/components/sections/Configurator';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <Features />
      <Shop />
      <Configurator />
      <Footer />
    </>
  );
}