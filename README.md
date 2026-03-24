# VersQuest 🏮

**One verse. One month. One adventure.**

A gamified Bible verse app for kids (ages 7–9) built for multi-campus church deployment.

## Tech Stack

- **Frontend:** React + Vite + Tailwind CSS
- **Backend:** Supabase (Auth, Database, Realtime)
- **Hosting:** Netlify
- **State:** Zustand

## Quick Start

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env
# Add your Supabase URL and anon key to .env

# Run in development mode
npm run dev
```

The app runs in **demo mode** without Supabase credentials — all three games are fully playable with sample data.

## Supabase Setup

1. Create a new Supabase project at [supabase.com](https://supabase.com)
2. Run the migration in `supabase/migrations/001_initial_schema.sql` via the SQL editor
3. Run the seed data in `supabase/seed/001_sample_data.sql`
4. Copy your project URL and anon key to `.env`

## Project Structure

```
versquest/
├── public/              # Static assets
├── src/
│   ├── components/
│   │   ├── games/       # Core game components
│   │   │   ├── WordBuilder.jsx
│   │   │   ├── FillTheGap.jsx
│   │   │   └── VerseRunner.jsx
│   │   ├── shared/      # Reusable UI (Stars, Timer, Beacon)
│   │   └── layout/      # Layout components
│   ├── pages/           # Screen components
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utilities, store, Supabase client
│   └── styles/          # Global CSS
├── supabase/
│   ├── migrations/      # Database schema
│   └── seed/            # Sample data
├── netlify/
│   └── functions/       # Serverless functions
└── netlify.toml         # Netlify config
```

## Game Modes (MVP)

### 🧩 Word Builder
Drag/tap scrambled words into the correct verse order. Timer ticking. Stars for speed and accuracy. Difficulty scales across 12 levels.

### 🎯 Fill the Gap
The verse appears with blanks. Choose the correct word from multiple options. Blanks increase each level until the kid is reconstructing the whole verse.

### 🏃 Verse Runner
Words appear as choices — tap the correct next word in the verse. Wrong taps = stumbles. Three stumbles = restart. Speed increases with level.

## Deploy to Netlify

```bash
# Build
npm run build

# Deploy (or connect GitHub repo to Netlify for auto-deploy)
netlify deploy --prod
```

## Roadmap

- [ ] Supabase Auth (parent accounts, kid profiles)
- [ ] Cross-campus multiplayer (Arena Mode)
- [ ] Parent dashboard
- [ ] Church admin portal
- [ ] Phase 1 (Discover) animated story scenes
- [ ] Phase 3 (Live It) family devotions
- [ ] Phase 4 (Master) parent interview
- [ ] Reward system + campus redemption
- [ ] Push notifications

---

Built for **Futures Church** — 21 campuses across the USA, Australia, Indonesia, and South Africa.
