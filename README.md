# Aakash — Portfolio

A dark-theme, glassmorphism portfolio built for a CS student who's mid-journey, not post-graduation — the design leans on *live, verifiable activity* (real GitHub/LeetCode data, animated progress, a scroll-drawn timeline) instead of a polished projects section, since there isn't one yet.

## Setup

```bash
npm install
npm run dev
```

Then open `http://localhost:5173`.

## Before you deploy — edit these

1. **`src/utils/constants.js`** — single source of truth for all content.
   - `PROFILE`: your real GitHub/LinkedIn URLs, email, LeetCode username, resume path.
   - `ABOUT_CARDS`, `ACHIEVEMENTS`, `LEARNING_JOURNEY`, `TIMELINE`, `STATS` — rewrite the copy to match your actual story.

2. **Resume** — drop your PDF at `public/resume.pdf` (the Hero "Resume" button links to `/resume.pdf`).

3. **LeetCode stats API** — `CodingProfiles.jsx` and `LeetcodeDashboard.jsx` call
   `https://leetcode-stats-api.herokuapp.com/{username}`. This is a free community-run
   API and can go down. If it does, either:
   - Deploy your own instance (search "leetcode-stats-api" on GitHub, one-click Vercel deploy), or
   - Swap in `alfa-leetcode-api` (same idea, different host).

4. **GitHub contribution graph** — uses `ghchart.rshah.org/{color}/{username}`, a free
   image-based heatmap service. No setup needed, just make sure `PROFILE.github` is correct.

5. **Contact form** — currently simulates a submit (see `Contact.jsx`, the `handleSubmit`
   function). Wire it to a real backend:
   - Easiest: [Formspree](https://formspree.io) or [EmailJS](https://www.emailjs.com) — both have free tiers and need ~5 lines of code.
   - Replace the `setTimeout` in `handleSubmit` with the actual fetch/SDK call.

## What's already wired up

- **Lenis** smooth scroll (`useSmoothScroll.js`) — respects `prefers-reduced-motion`.
- **Cursor-reactive tilt** on cards (`useTilt.js`) — used in About, Achievements, Coding Profiles.
- **Magnetic buttons** in the Hero — they pull toward the cursor on hover.
- **GSAP ScrollTrigger** draws the Timeline's vertical line as you scroll (`useScrollAnimation.js`).
- **Live data**: GitHub repo/follower counts and LeetCode solve counts are fetched client-side on load — not hardcoded.
- **Grain texture overlay** + radial gradient mesh background — keeps the dark theme from looking flat.
- Active nav-link indicator uses an `IntersectionObserver`, with a sliding pill (Framer Motion `layoutId`).

## Stack

React 18 + Vite, Tailwind CSS, Framer Motion, GSAP, Lenis, react-countup, react-icons.

## Notes for future you

- Swap `LearningJourney` progress percentages as things actually move — they're meant to be a living section, not a one-time fill.
- Once you have a real flagship project, add a `Projects.jsx` between `LearningJourney` and `Achievements` rather than replacing the journey section — recruiters respond well to seeing both the process and the output.
