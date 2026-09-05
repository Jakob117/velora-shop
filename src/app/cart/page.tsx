'use client';

import { useCart } from '@/lib/store';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function CartPage() {
  const router = useRouter();
  const { items, removeItem, clearCart, getTotal } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-velora-dark pt-32">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-display font-bold mb-4">Ihr Warenkorb ist leer</h1>
          <p className="text-gray-400 mb-8">Fügen Sie Produkte hinzu, um Ihren VELORA-Shop zu erkunden.</p>
          <Link href="/" className="btn-primary inline-block">
            Zum Shop
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-velora-dark pt-32 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-display font-bold mb-8">Warenkorb</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item, index) => (
              <div key={index} className="bg-black border border-velora-gold/20 rounded-lg p-6 flex justify-between items-center">
                <div>
                  <h3 className="font-semibold mb-2">{item.productId}</h3>
                  <p className="text-gray-400 text-sm">Menge: {item.quantity}</p>
                </div>
                <button
                  onClick={() => removeItem(item.productId)}
                  className="text-red-500 hover:text-red-400 transition"
                >
                  Entfernen
                </button>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          <div className="bg-black border border-velora-gold/30 rounded-xl p-8 h-fit">
            <h2 className="text-2xl font-display font-bold mb-6">Zusammenfassung</h2>
            <div className="space-y-4 mb-6 pb-6 border-b border-velora-gold/20">
              <div className="flex justify-between">
                <span className="text-gray-400">Artikel:</span>
                <span>{items.length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Versand:</span>
                <span>Kostenlos</span>
              </div>
            </div>
            <div className="flex justify-between mb-6">
              <span className="text-lg font-semibold">Gesamt:</span>
              <span className="text-2xl font-bold text-velora-gold">${getTotal().toFixed(2)}</span>
            </div>
            <button className="btn-primary w-full mb-3">Zur Kasse</button>
            <button
              onClick={() => router.push('/')}
              className="btn-secondary w-full"
            >
              Weitershoppen
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
