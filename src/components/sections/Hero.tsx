'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const sloganRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !textRef.current) return;

    const tl = gsap.timeline();

    tl.from(textRef.current.querySelector('h1'), {
      opacity: 0,
      y: 40,
      duration: 1,
    })
      .from(
        sloganRef.current,
        {
          opacity: 0,
          y: 20,
          duration: 0.8,
        },
        '-=0.5'
      )
      .from(
        containerRef.current.querySelectorAll('.btn-primary, .btn-secondary'),
        {
          opacity: 0,
          y: 20,
          stagger: 0.1,
          duration: 0.6,
        },
        '-=0.3'
      );
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-gradient-to-b from-velora-dark via-velora-dark to-black flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-velora-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-velora-gold/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={textRef} className="text-center mb-12">
          <h1 className="text-6xl md:text-7xl font-display font-bold mb-6 leading-tight">
            Weniger Chaos.
            <br />
            <span className="text-velora-gold">Mehr Zuhause.</span>
          </h1>
        </div>

        <div
          ref={sloganRef}
          className="text-center mb-12 text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto"
        >
          Das modulare Küchen-Ordnungssystem. Intelligent. Premium. Erweiterbar.
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="btn-primary">Jetzt entdecken</button>
          <button className="btn-secondary">Produktkonfigurator</button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-velora-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
