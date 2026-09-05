'use client';

import Link from 'next/link';
import { useCart } from '@/lib/store';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const cart = useCart((s) => s.items);
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="fixed top-0 w-full bg-velora-dark/95 backdrop-blur z-50 border-b border-velora-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-velora-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">V</span>
            </div>
            <span className="font-display text-xl font-bold">VELORA</span>
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link href="#shop" className="hover:text-velora-gold transition">
              Shop
            </Link>
            <Link href="#configurator" className="hover:text-velora-gold transition">
              Konfigurator
            </Link>
            <Link href="#features" className="hover:text-velora-gold transition">
              Features
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link
              href="/cart"
              className="relative p-2 hover:text-velora-gold transition"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 8m10 0l2-8m0 0h6m0 0l-1 5m0 0h-5" />
              </svg>
              {itemCount > 0 && (
                <span className="absolute top-0 right-0 bg-velora-gold text-velora-dark text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
