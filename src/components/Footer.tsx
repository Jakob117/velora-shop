'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-velora-gold/20 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-display font-bold mb-4">Shop</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-velora-gold transition">Boxen</Link></li>
              <li><Link href="#" className="hover:text-velora-gold transition">Organizer</Link></li>
              <li><Link href="#" className="hover:text-velora-gold transition">Smart Boxen</Link></li>
              <li><Link href="#" className="hover:text-velora-gold transition">Sets</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-display font-bold mb-4">Unternehmen</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-velora-gold transition">Über uns</Link></li>
              <li><Link href="#" className="hover:text-velora-gold transition">Blog</Link></li>
              <li><Link href="#" className="hover:text-velora-gold transition">Karriere</Link></li>
              <li><Link href="#" className="hover:text-velora-gold transition">Presse</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-display font-bold mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-velora-gold transition">Kontakt</Link></li>
              <li><Link href="#" className="hover:text-velora-gold transition">FAQ</Link></li>
              <li><Link href="#" className="hover:text-velora-gold transition">Versand</Link></li>
              <li><Link href="#" className="hover:text-velora-gold transition">Rückgabe</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-display font-bold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-velora-gold transition">Datenschutz</Link></li>
              <li><Link href="#" className="hover:text-velora-gold transition">AGB</Link></li>
              <li><Link href="#" className="hover:text-velora-gold transition">Impressum</Link></li>
              <li><Link href="#" className="hover:text-velora-gold transition">Cookies</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-velora-gold/20 pt-8">
          <p className="text-center text-gray-500 text-sm">
            © 2024 VELORA. Weniger Chaos. Mehr Zuhause.
          </p>
        </div>
      </div>
    </footer>
  );
}
