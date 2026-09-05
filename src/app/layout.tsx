import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'VELORA - Weniger Chaos. Mehr Zuhause.',
  description: 'Modulares intelligentes Küchen-Ordnungssystem mit 3D-Shop',
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@600;700&display=swap" rel="preload" />
      </head>
      <body className="bg-velora-dark text-white">{children}</body>
    </html>
  );
}