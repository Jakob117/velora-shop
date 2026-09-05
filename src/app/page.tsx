'use client';

import Hero from '@/components/sections/Hero';
import Shop from '@/components/sections/Shop';
import Features from '@/components/sections/Features';
import Configurator from '@/components/sections/Configurator';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

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
