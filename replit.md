# Volta — The Professional Marketplace

A React + Vite frontend for a home-services marketplace connecting customers with verified local professionals.

## Stack

- **Framework**: React 19 + Vite 7
- **Styling**: Tailwind CSS v4 + shadcn/ui (Radix UI)
- **Routing**: Wouter
- **State**: TanStack Query
- **Package manager**: pnpm (workspace layout — app lives in `volta/`)

## Running the app

The workflow `Start application` runs:

```
cd volta && PORT=5000 pnpm run dev
```

The dev server starts on port 5000 and hot-reloads on file changes.

## Project layout

```
volta/          ← Vite app
  src/
    pages/      ← Route-level components (LandingPage, CustomerDashboard, ProDashboard, …)
    components/ ← Shared UI components (Navbar, HeroSection, shadcn/ui wrappers, …)
    hooks/      ← Custom React hooks
    lib/        ← Utilities
  vite.config.ts
  package.json
pnpm-workspace.yaml
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

## User preferences

- Keep existing project structure and stack — do not migrate or restructure without asking.
