'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function CheckoutSuccessPage() {
  const searchParams = useSearchParams();
  const [sessionData, setSessionData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const sessionId = searchParams.get('session_id');
    if (sessionId) {
      fetch('/api/checkout/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sessionId }),
      })
        .then((res) => res.json())
        .then((data) => {
          setSessionData(data);
          setLoading(false);
        });
    }
  }, [searchParams]);

  if (loading) {
    return (
      <div className="min-h-screen bg-velora-dark pt-32 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-velora-gold mx-auto mb-4"></div>
          <p className="text-gray-400">Verarbeite Bestellung...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-velora-dark pt-32 pb-12">
      <div className="max-w-2xl mx-auto px-4">
        {sessionData?.status === 'paid' ? (
          <div className="bg-black border border-green-500/50 rounded-xl p-8 text-center">
            <div className="text-6xl mb-4">✓</div>
            <h1 className="text-4xl font-display font-bold mb-4">Bestellung bestätigt!</h1>
            <p className="text-gray-400 mb-2">Vielen Dank für Ihren Kauf.</p>
            <p className="text-gray-400 mb-6">
              Eine Bestätigungsmail wurde an <span className="text-velora-gold">{sessionData.email}</span> gesendet.
            </p>
            <div className="bg-velora-dark rounded-lg p-6 mb-8">
              <p className="text-gray-400 mb-2">Gesamtbetrag:</p>
              <p className="text-3xl font-bold text-velora-gold">
                ${(sessionData.total / 100).toFixed(2)}
              </p>
            </div>
            <div className="space-y-3">
              <Link href="/" className="btn-primary block">
                Zurück zum Shop
              </Link>
              <Link href="/" className="btn-secondary block">
                Weitere Produkte entdecken
              </Link>
            </div>
          </div>
        ) : (
          <div className="bg-black border border-red-500/50 rounded-xl p-8 text-center">
            <h1 className="text-4xl font-display font-bold mb-4">Bestellung nicht abgeschlossen</h1>
            <p className="text-gray-400 mb-8">Es gab ein Problem bei der Verarbeitung Ihrer Bestellung.</p>
            <Link href="/cart" className="btn-primary inline-block">
              Zurück zum Warenkorb
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
