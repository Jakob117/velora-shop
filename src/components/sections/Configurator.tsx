'use client';

import { useConfigurator } from '@/lib/store';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PRICES = {
  essential: { S: 9.99, M: 14.99, L: 19.99, XL: 24.99 },
  classic: { S: 24.99, M: 34.99, L: 44.99, XL: 54.99 },
  atelier: { S: 79.99, M: 99.99, L: 129.99, XL: 159.99 },
};

const SMART_ADDON = 49.99;

export default function Configurator() {
  const {
    line,
    form,
    size,
    isSmart,
    quantity,
    totalPrice,
    setLine,
    setForm,
    setSize,
    setSmart,
    setQuantity,
    updatePrice,
  } = useConfigurator();

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    updatePrice();
  }, [line, size, isSmart, quantity, updatePrice]);

  useEffect(() => {
    if (!containerRef.current) return;

    gsap.from(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
      opacity: 0,
      y: 40,
      duration: 0.8,
    });
  }, []);

  return (
    <section id="configurator" ref={containerRef} className="py-20 bg-black border-t border-velora-gold/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-4">
          Konfigurieren Sie Ihre <span className="text-velora-gold">VELORA</span>
        </h2>
        <p className="text-center text-gray-400 mb-12">Bauen Sie Ihr perfektes System Schritt für Schritt auf</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Configuration Panel */}
          <div className="space-y-8">
            {/* Line Selection */}
            <div>
              <h3 className="text-lg font-semibold mb-4">1. Produktlinie</h3>
              <div className="grid grid-cols-3 gap-3">
                {['essential', 'classic', 'atelier'].map((l) => (
                  <button
                    key={l}
                    onClick={() => setLine(l as any)}
                    className={`px-4 py-3 rounded-lg font-semibold transition-all capitalize ${
                      line === l
                        ? 'bg-velora-accent text-white'
                        : 'bg-velora-dark border border-velora-gold/30 text-gray-300 hover:border-velora-gold'
                    }`}
                  >
                    {l}
                  </button>
                ))}
              </div>
            </div>

            {/* Form Selection */}
            <div>
              <h3 className="text-lg font-semibold mb-4">2. Form</h3>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                {['rectangular', 'square', 'tall', 'flat', 'round'].map((f) => (
                  <button
                    key={f}
                    onClick={() => setForm(f)}
                    className={`px-4 py-3 rounded-lg font-semibold transition-all capitalize text-sm ${
                      form === f
                        ? 'bg-velora-accent text-white'
                        : 'bg-velora-dark border border-velora-gold/30 text-gray-300 hover:border-velora-gold'
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="text-lg font-semibold mb-4">3. Größe</h3>
              <div className="grid grid-cols-4 gap-3">
                {['S', 'M', 'L', 'XL'].map((s) => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={`px-4 py-3 rounded-lg font-semibold transition-all ${
                      size === s
                        ? 'bg-velora-accent text-white'
                        : 'bg-velora-dark border border-velora-gold/30 text-gray-300 hover:border-velora-gold'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Smart Toggle */}
            <div>
              <h3 className="text-lg font-semibold mb-4">4. Smart-Funktion</h3>
              <label className="flex items-center space-x-3 cursor-pointer">
                <div
                  className={`w-6 h-6 rounded-lg border-2 transition-all ${
                    isSmart
                      ? 'bg-velora-accent border-velora-accent'
                      : 'border-velora-gold/30 hover:border-velora-gold'
                  }`}
                >
                  {isSmart && <span className="text-white text-sm flex items-center justify-center h-full">✓</span>}
                </div>
                <span className="text-gray-300">
                  Mit Gewichtserkennung & App (+${SMART_ADDON})
                </span>
              </label>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="text-lg font-semibold mb-4">5. Anzahl</h3>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-lg border border-velora-gold/30 hover:border-velora-gold text-velora-gold"
                >
                  −
                </button>
                <span className="text-2xl font-bold w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 rounded-lg border border-velora-gold/30 hover:border-velora-gold text-velora-gold"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Preview & Summary */}
          <div className="lg:sticky lg:top-24">
            {/* 3D Preview */}
            <div className="bg-gradient-to-br from-velora-gold/10 to-transparent rounded-xl p-8 mb-8 h-64 flex items-center justify-center border border-velora-gold/20">
              <div className="text-center">
                <div className="text-8xl mb-4 animate-pulse">📦</div>
                <p className="text-gray-400">3D Preview wird geladen...</p>
              </div>
            </div>

            {/* Summary Card */}
            <div className="bg-velora-dark border border-velora-gold/30 rounded-xl p-8">
              <h3 className="text-xl font-display font-bold mb-6">Ihre Konfiguration</h3>

              <div className="space-y-4 mb-6 pb-6 border-b border-velora-gold/20">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Produktlinie:</span>
                  <span className="font-semibold capitalize">{line}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Form:</span>
                  <span className="font-semibold capitalize">{form}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Größe:</span>
                  <span className="font-semibold">{size}</span>
                </div>
                {isSmart && (
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Smart-Funktion:</span>
                    <span className="font-semibold text-velora-gold">Aktiviert</span>
                  </div>
                )}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Anzahl:</span>
                  <span className="font-semibold">{quantity}x</span>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-400">Gesamtpreis:</span>
                  <span className="text-3xl font-bold text-velora-gold">${totalPrice.toFixed(2)}</span>
                </div>
              </div>

              <button className="btn-primary w-full">Zum Warenkorb hinzufügen</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
