# Disk Mop Landing Page

Modern, production-ready landing page for Disk Mop — a smart disk cleaner for Windows and macOS.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS 3.4 + CSS Variables
- **UI Components:** Radix UI + shadcn/ui patterns
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **i18n:** next-intl (Turkish + English)
- **Theming:** next-themes (light/dark)
- **Payments:** Polar.sh integration

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Copy `.env.example` to `.env.local` and fill in the values:

```bash
cp .env.example .env.local
```

| Variable | Description |
|---|---|
| `POLAR_ACCESS_TOKEN` | Polar.sh API access token |
| `POLAR_WEBHOOK_SECRET` | Webhook signature verification secret |
| `POLAR_PRODUCT_ID` | Polar.sh product ID for Disk Mop Lifetime |
| `POLAR_CHECKOUT_URL` | Polar.sh checkout page URL |
| `NEXT_PUBLIC_SITE_URL` | Public site URL (e.g., https://diskmop.com) |

## Polar.sh Setup

1. Create a product on [Polar.sh](https://polar.sh) — "Disk Mop Lifetime" at $19.90
2. Get your API access token from Polar dashboard
3. Set up a webhook pointing to `https://yourdomain.com/api/webhooks/polar`
4. Copy the webhook secret and product ID to `.env.local`
5. Update `POLAR_CHECKOUT_URL` with your checkout page URL

### Webhook Implementation

The webhook at `/api/webhooks/polar/route.ts` is a **mock implementation**. To make it production-ready:

1. Replace the `console.log` with actual database operations
2. Set up a database to store license keys
3. Integrate an email service (Resend, SendGrid, etc.) for sending license keys
4. Add proper error handling and retry logic

## Brand Assets

Brand assets are sourced from the main Disk Mop desktop app (`D:\Projeler\diskclean`) and stored in `/public/brand/`:

| File | Source | Description |
|---|---|---|
| `icon.png` | `diskclean/build/icon.png` | App icon (512x512 PNG) |
| `icon.ico` | `diskclean/build/icon.ico` | Windows icon format |
| `icon.svg` | `diskclean/build/icon-concept-1.svg` | SVG vector logo |
| `tray-icon.png` | `diskclean/resources/tray-icon.png` | System tray icon |

Brand colors extracted from the desktop app:
- Primary: `#2563eb` (light) / `#3b82f6` (dark)
- Background gradient: `#1e3a8a` → `#152e6e`
- Success: `#10b981`

## Project Structure

```
src/
├── app/
│   ├── [locale]/          # i18n routes (TR default, EN)
│   │   ├── layout.tsx     # Locale provider
│   │   ├── page.tsx       # Main landing page
│   │   └── success/       # Post-purchase page
│   ├── api/webhooks/      # Polar.sh webhook
│   ├── layout.tsx         # Root layout (fonts, meta, schema)
│   └── globals.css        # Theme CSS variables
├── components/
│   ├── ui/                # Radix-based primitives
│   ├── navigation.tsx     # Sticky glassmorphism nav
│   ├── hero.tsx           # Hero with CTA + app preview
│   ├── trust-bar.tsx      # Social proof metrics
│   ├── platform-selector.tsx  # OS-specific downloads
│   ├── features-grid.tsx  # 8 feature cards
│   ├── how-it-works.tsx   # 3-step flow
│   ├── product-showcase.tsx   # Tabbed app preview
│   ├── stats.tsx          # Animated counters
│   ├── testimonials.tsx   # User reviews
│   ├── pricing.tsx        # Pricing card + trial
│   ├── faq.tsx            # Accordion FAQ
│   ├── final-cta.tsx      # Bottom CTA
│   ├── footer.tsx         # Multi-column footer
│   ├── cookie-banner.tsx  # KVKK compliance
│   └── floating-support.tsx   # WhatsApp/email widget
├── i18n/                  # Internationalization config
├── hooks/                 # Custom React hooks
├── lib/                   # Utilities
└── messages/              # Translation files (TR, EN)
```

## Internationalization

- **Default locale:** Turkish (tr) — served at `/`
- **English:** served at `/en`
- Translation files: `messages/tr.json`, `messages/en.json`
- Locale prefix: `as-needed` (no `/tr` prefix for default)

## Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/mhrgndz/diskmop-website&env=POLAR_ACCESS_TOKEN,POLAR_WEBHOOK_SECRET,POLAR_PRODUCT_ID,POLAR_CHECKOUT_URL,NEXT_PUBLIC_SITE_URL)

## Download Links (Placeholder)

Update these paths with actual download URLs:
- Windows: `/downloads/diskmop-setup-windows.exe`
- macOS (Apple Silicon): `/downloads/diskmop-mac-arm64.dmg`
- macOS (Intel): `/downloads/diskmop-mac-x64.dmg`

## License

All rights reserved © 2025 Disk Mop.
