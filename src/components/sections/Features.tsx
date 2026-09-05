'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: '📦',
    title: 'Modulares System',
    description: 'Starten Sie mit einer Box und erweitern Sie beliebig mit Organizern und Smart-Funktionen.',
  },
  {
    icon: '🎯',
    title: 'Premium Design',
    description: 'Hochwertiges Holz und Glas vereinen sich zu elegantem, zeitlosem Design.',
  },
  {
    icon: '🔌',
    title: 'Smart Technology',
    description: 'Automatische Gewichtserkennung und App-Integration für totale Kontrolle.',
  },
  {
    icon: '🏠',
    title: 'Perfekte Organisation',
    description: 'Jede Box sitzt perfekt in ihrem Platz – nichts verrutscht mehr.',
  },
];

export default function Features() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const cards = containerRef.current.querySelectorAll('.feature-card');
    cards.forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 40,
        duration: 0.6,
        delay: index * 0.1,
      });
    });
  }, []);

  return (
    <section id="features" ref={containerRef} className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16">
          Warum <span className="text-velora-gold">VELORA</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-card group">
              <div className="bg-velora-dark border border-velora-gold/20 rounded-xl p-8 hover:border-velora-gold/50 transition-all duration-300 h-full">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
