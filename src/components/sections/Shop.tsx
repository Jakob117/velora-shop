'use client';

import { PRODUCTS, SETS } from '@/lib/products';
import { useCart } from '@/lib/store';
import { useState } from 'react';
import Image from 'next/image';

export default function Shop() {
  const [activeTab, setActiveTab] = useState<'boxes' | 'sets'>('boxes');
  const addItem = useCart((s) => s.addItem);

  const handleAddToCart = (productId: string, price: number) => {
    addItem({
      productId,
      quantity: 1,
      configuration: {
        line: 'classic',
        form: 'rectangular',
        size: 'M',
        isSmart: false,
      },
    });
  };

  return (
    <section id="shop" className="py-20 bg-velora-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-4">
          Entdecken Sie unsere <span className="text-velora-gold">Kollektion</span>
        </h2>
        <p className="text-center text-gray-400 mb-12">Premium Vorratsboxen in drei Varianten</p>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('boxes')}
            className={`px-6 py-2 rounded-lg font-semibold transition-all ${
              activeTab === 'boxes'
                ? 'bg-velora-accent text-white'
                : 'bg-velora-dark border border-velora-gold/30 text-velora-gold hover:border-velora-gold'
            }`}
          >
            Einzelboxen
          </button>
          <button
            onClick={() => setActiveTab('sets')}
            className={`px-6 py-2 rounded-lg font-semibold transition-all ${
              activeTab === 'sets'
                ? 'bg-velora-accent text-white'
                : 'bg-velora-dark border border-velora-gold/30 text-velora-gold hover:border-velora-gold'
            }`}
          >
            Sets & Bundles
          </button>
        </div>

        {/* Products Grid */}
        {activeTab === 'boxes' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PRODUCTS.map((product) => (
              <div
                key={product.id}
                className="group bg-black rounded-xl overflow-hidden border border-velora-gold/20 hover:border-velora-gold/50 transition-all duration-300"
              >
                <div className="relative h-48 bg-gradient-to-br from-velora-gold/10 to-transparent flex items-center justify-center overflow-hidden">
                  <div className="text-6xl opacity-30 group-hover:scale-110 transition-transform duration-300">
                    📦
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display font-bold text-lg mb-2">{product.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-velora-gold">${product.price}</span>
                    <button
                      onClick={() => handleAddToCart(product.id, product.price)}
                      className="bg-velora-accent text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-all"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Sets Grid */}
        {activeTab === 'sets' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SETS.map((set) => (
              <div
                key={set.id}
                className="bg-gradient-to-br from-velora-gold/5 to-transparent border border-velora-gold/30 rounded-xl p-8 hover:border-velora-gold/60 transition-all"
              >
                <h3 className="font-display font-bold text-2xl mb-2">{set.name}</h3>
                <p className="text-gray-400 mb-6">{set.description}</p>
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="text-3xl font-bold text-velora-gold">${set.price}</span>
                    <span className="text-green-400 text-sm ml-2">Sparen ${set.savings}</span>
                  </div>
                </div>
                <button className="btn-primary w-full">Zum Warenkorb</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
