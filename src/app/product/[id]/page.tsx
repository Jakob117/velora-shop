'use client';

import { PRODUCTS } from '@/lib/products';
import { useCart } from '@/lib/store';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { useState } from 'react';

export default function ProductPage() {
  const params = useParams();
  const productId = params.id as string;
  const product = PRODUCTS.find((p) => p.id === productId);
  const [quantity, setQuantity] = useState(1);
  const addItem = useCart((s) => s.addItem);

  if (!product) {
    return (
      <div className="min-h-screen bg-velora-dark pt-32 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-display font-bold mb-4">Produkt nicht gefunden</h1>
          <p className="text-gray-400">Das gesuchte Produkt existiert nicht.</p>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem({
      productId: product.id,
      quantity,
      configuration: {
        line: product.line,
        form: product.form,
        size: product.size,
        isSmart: product.isSmart || false,
      },
    });
  };

  return (
    <div className="min-h-screen bg-velora-dark pt-32 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="bg-gradient-to-br from-velora-gold/10 to-transparent rounded-xl p-8 flex items-center justify-center h-96">
            <div className="text-center">
              <div className="text-8xl mb-4">📦</div>
              <p className="text-gray-400">3D Produktvisualisierung</p>
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-6">
              <span className="inline-block bg-velora-accent/20 text-velora-accent px-3 py-1 rounded-full text-sm font-semibold mb-3 capitalize">
                {product.line}
              </span>
              <h1 className="text-4xl font-display font-bold mb-3">{product.name}</h1>
              <p className="text-gray-400 text-lg mb-6">{product.description}</p>

              <div className="flex items-center gap-4 mb-8">
                <span className="text-4xl font-bold text-velora-gold">${product.price}</span>
                {product.isSmart && (
                  <span className="bg-velora-accent/20 text-velora-accent px-4 py-2 rounded-lg text-sm font-semibold">
                    Smart-fähig
                  </span>
                )}
              </div>
            </div>

            {/* Features */}
            <div className="mb-8">
              <h3 className="font-display font-bold text-lg mb-4">Features</h3>
              <ul className="space-y-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <span className="text-velora-gold">✓</span>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Dimensions */}
            {product.dimensions && (
              <div className="mb-8 bg-black/50 rounded-lg p-6 border border-velora-gold/20">
                <h3 className="font-display font-bold text-lg mb-4">Abmessungen</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <span className="text-gray-400 text-sm">Breite</span>
                    <p className="text-xl font-bold">{product.dimensions.width} cm</p>
                  </div>
                  <div>
                    <span className="text-gray-400 text-sm">Höhe</span>
                    <p className="text-xl font-bold">{product.dimensions.height} cm</p>
                  </div>
                  <div>
                    <span className="text-gray-400 text-sm">Tiefe</span>
                    <p className="text-xl font-bold">{product.dimensions.depth} cm</p>
                  </div>
                </div>
              </div>
            )}

            {/* Quantity & CTA */}
            <div className="flex items-center gap-4">
              <div className="flex items-center border border-velora-gold/30 rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-3 text-gray-400 hover:text-velora-gold transition"
                >
                  −
                </button>
                <span className="px-6 py-3 font-semibold min-w-16 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-3 text-gray-400 hover:text-velora-gold transition"
                >
                  +
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                className="btn-primary flex-1"
              >
                Zum Warenkorb hinzufügen
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
