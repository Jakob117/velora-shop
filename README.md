# VELORA - Premium Kitchen Storage System 🏠

> Weniger Chaos. Mehr Zuhause.

A modern e-commerce platform for the VELORA premium kitchen storage system, built with Next.js, Three.js, and Stripe integration.

## Features

✨ **Modern Design**
- Sleek, dark theme with gold accents
- Smooth animations with GSAP
- Responsive mobile-first design
- Beautiful gradients and glass-morphism effects

🎨 **Product Configuration**
- Interactive product configurator
- Real-time price calculation
- Support for multiple product lines (Essential, Classic, Atelier)
- Smart functionality add-ons
- 3D product visualization with Three.js

🛒 **E-Commerce**
- Zustand state management for cart
- Stripe payment integration
- Secure checkout flow
- Order confirmation
- Product details pages

💻 **Technology Stack**
- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS with custom theme
- **State Management**: Zustand
- **3D Graphics**: Three.js
- **Animations**: GSAP & ScrollTrigger
- **Payments**: Stripe API
- **Database Ready**: Prisma setup included

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- Stripe account (for payment processing)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Jakob117/velora-shop.git
cd velora-shop
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Then update `.env.local` with your Stripe keys:
```env
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_key
STRIPE_SECRET_KEY=sk_test_your_secret_key
NEXT_PUBLIC_URL=http://localhost:3000
```

4. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── page.tsx                 # Home page with hero & sections
│   ├── product/[id]/page.tsx    # Product detail page
│   ├── cart/page.tsx            # Shopping cart
│   ├── checkout/success/page.tsx # Order confirmation
│   └── api/
│       └── checkout/            # Stripe API routes
├── components/
│   ├── Navigation.tsx           # Header navigation
│   ├── Footer.tsx               # Footer
│   ├── Hero3D.tsx               # 3D hero visualization
│   ├── Product3D.tsx            # 3D product viewer
│   └── sections/
│       ├── Hero.tsx             # Hero section
│       ├── Features.tsx          # Features showcase
│       ├── Shop.tsx             # Product grid
│       └── Configurator.tsx      # Product builder
├── lib/
│   ├── store.ts                 # Zustand stores (cart, configurator)
│   ├── products.ts              # Product data
│   └── stripe.ts                # Stripe client
└── types/
    └── product.ts               # TypeScript types
```

## Key Features in Detail

### 🎯 Product Configurator
Users can:
- Select product line (Essential, Classic, Atelier)
- Choose form and size
- Add smart functionality
- Adjust quantity
- See real-time price updates

### 🛍️ Shopping Experience
- Browse product catalog
- View detailed product information
- Add to cart with custom configuration
- Manage cart items
- Secure checkout with Stripe

### 🎬 Animations
- Smooth page transitions
- Scroll-triggered reveal animations
- Rotating 3D product models
- Interactive button hover effects

## Styling

Custom Tailwind theme with VELORA brand colors:
- **Primary Dark**: `#1a1a1a` (velora-dark)
- **Accent Gold**: `#d4a574` (velora-gold)
- **Accent Color**: `#c67c4e` (velora-accent)
- **Font**: System font stack with custom display font

## API Routes

### `POST /api/checkout`
Create Stripe checkout session
```json
{
  "items": [{"name": "...", "price": 99.99, "quantity": 1}],
  "email": "user@example.com"
}
```

### `POST /api/checkout/verify`
Verify checkout session status
```json
{
  "sessionId": "cs_..."
}
```

## Environment Variables

Required:
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` - Stripe publishable key
- `STRIPE_SECRET_KEY` - Stripe secret key
- `NEXT_PUBLIC_URL` - Application URL

## Production Deployment

The app is ready for deployment on Vercel, Netlify, or any Node.js hosting:

```bash
npm run build
npm start
```

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Optimized images with Next.js Image component
- Code splitting with dynamic imports
- 3D rendering with WebGL acceleration
- Efficient state management with Zustand

## Security

- Stripe PCI compliance
- Environment variable protection
- HTTPS-ready
- CORS configured

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - see LICENSE file for details

## Contact

For inquiries about VELORA:
- Website: https://velora-shop.com
- Email: info@velora-shop.com

---

**VELORA** - Weniger Chaos. Mehr Zuhause.
