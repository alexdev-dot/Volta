# Volta — The Professional Marketplace

A React + Vite frontend for a home-services marketplace connecting customers with verified local professionals.

## Stack

- **Framework**: React 19 + Vite 7
- **Styling**: Tailwind CSS v4 + shadcn/ui (Radix UI)
- **Routing**: Wouter
- **State**: TanStack Query
- **Package manager**: pnpm

## Running the app

Install dependencies:
```bash
pnpm install
```

Start the development server:
```bash
pnpm dev
```

The dev server starts on port 5173 and hot-reloads on file changes.

Build for production:
```bash
pnpm build
```

## Project layout

```
src/
  pages/      ← Route-level components (LandingPage, CustomerDashboard, ProDashboard, …)
  components/ ← Shared UI components (Navbar, HeroSection, shadcn/ui wrappers, …)
  hooks/      ← Custom React hooks
  lib/        ← Utilities
vite.config.ts
package.json
```

## Key routes

| Path | Page |
|------|------|
| `/` | Landing page |
| `/sign-in` / `/sign-up` | Auth pages |
| `/for-professionals` | Professional onboarding |
| `/dashboard` | Customer dashboard |
| `/customer/services` | Find services |
| `/customer/bookings` | Bookings |
| `/customer/chats` | Chats |
| `/customer/payments` | Payments |
| `/pro-dashboard` | Pro dashboard |
| `/pro/schedule` | Pro schedule |
| `/pro/jobs` | Pro job feed |
| `/pro/reviews` | Pro reviews |
