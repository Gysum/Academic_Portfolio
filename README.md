# 🚀 Aakash — Academic & Professional Portfolio

A high-performance, dark-themed, glassmorphic portfolio designed for modern developers and computer science students. Built on the core principle of **live, verifiable activity**, this project highlights real-time achievements, interactive components, dynamic APIs, and micro-animations instead of relying on static mockups.

---

## 🌟 Key Features & Interactive Design Details

This portfolio is packed with interactive micro-interactions, custom animations, and layout elements designed to provide a premium user experience:

### 1. 🎛️ Audio Micro-Interactions (`audio.js`)
* **Synthesizer Engine:** Uses the native browser **Web Audio API** to dynamically generate oscillator click feedbacks. Instead of loading heavy `.mp3` or `.wav` files, it synthesizes a custom mechanical tick sound in real-time.
* **Low-Latency Synthesis:** Plays a sine-wave frequency that ramps exponentially from `1000Hz` to `1500Hz` over `0.03 seconds` with volume gain fading down to `0.0001` (to prevent audio popping).
* **Mute Toggle/Persistence:** Automatically checks `localStorage` for `sound_enabled` state (muted by default) to respect user settings across sessions.

### 2. 🖱️ Touch-Aware Custom Cursor (`CustomCursor.jsx`)
* **Dynamic Physics Springs:** Leverages Framer Motion's `useMotionValue` and `useSpring` (configured with `stiffness: 220, damping: 25, mass: 0.6`) for fluid, lag-free cursor tracking.
* **Contextual Shape-Shifting:** Automatically listens to hover events across the DOM. Elements configured with the `data-cursor` attribute (e.g., `data-cursor="click"`, `data-cursor="flip"`, or `data-cursor="drag"`) trigger the cursor circle to expand and display interactive textual cues.
* **Device Detection:** Uses media features (`ontouchstart` / `maxTouchPoints`) to automatically disable itself on touch-screen devices, restoring default browser cursor behavior.

### 3. 📐 Real-Time 3D Card-Tilt Hook (`useTilt.js`)
* **Cursor Coordinate Mapping:** Tracks cursor hover coordinates relative to the card's bounding rectangle.
* **Framer Motion Physics:** Maps relative mouse coordinates to rotational coordinates (`rotateX` / `rotateY`) between the range of `[-maxDeg, maxDeg]` degrees, governed by physical springs.
* **Glow/Reflection Vector:** Calculates dynamic `glowX` and `glowY` variables, allowing developers to create reflective radial gradients that follow the user's cursor.

### 4. 🌊 Infinite Skills Marquees & 3D Flipping Chips (`Skills.jsx`)
* **Dual Marquees:** Skills are divided into dual horizontal rows moving in opposite directions (`animate-marquee` and `animate-marquee-reverse`).
* **Interactivity:** Hovering over the marquee pauses the flow (`hover:pause`). 
* **3D Perspective Flipping:** Clicking on a skill chip uses CSS 3D transforms (`transformStyle: 'preserve-3d'`, `backfaceVisibility: 'hidden'`) animated by Framer Motion to flip `180 degrees`, revealing custom detail cards listing exactly where that technology has been applied.

### 5. 📜 Spreadsheet-Style Timeline Table (`Timeline.jsx`)
* **Unix-Like Permission Formatting:** Displays a listing interface of work experience styled like a terminal file system directory list with permission indicators (`drwxr-xr-x` for directory items, `-rw-r--r--` for files).
* **Dynamic Spreadsheet Grid:** Clicking rows expands them, shifts contrast (focus is highlighted in high-contrast solid white against dark rows), and triggers mechanical ticking sounds.

### 6. 🏆 Achievements Slide Carousel & Verified Badges (`Certificates.jsx`)
* **Spring-Loaded Carousel:** Carousel changes are accompanied by Framer Motion 3D transitions featuring exit/enter scales, rotations (`rotateX`), and blur filters.
* **Secure Badging System:** Integrates a fallback `<CertificateVisual />` component which automatically renders secure verified mockup badges (with dynamic secure key IDs, issuer parameters, signatures, and verified active indicators) if a physical thumbnail image is missing.

### 7. 🔌 Dynamic Third-Party Dashboards (Ready-to-Mount)
* **GitHub Dashboard (`GithubDashboard.jsx`):** Fetches dynamic public repository numbers, followers, and public gist counts directly from the GitHub REST API. Embeds a live SVG contribution heatmap chart from `ghchart.rshah.org`.
* **LeetCode Analytics (`LeetcodeDashboard.jsx`):** Integrates with community stats APIs to load total solved questions, global ranking, acceptance rate percentages, and individual difficulty breakdowns (Easy, Medium, Hard) mapped to responsive progress bars.

### 8. 💻 Interactive CLI Typist Simulator (`TerminalHero.jsx`)
* **Character-by-Character Typist:** Progressively types commands (e.g., `whoami`, `cat about.txt`, `git log`) with adjustable rates.
* **Realistic Cursors:** Features a pulsing cursor matching full-featured CLI shells.

---

## 🛠️ Complete Technology Stack

| Dependency | Purpose / Usage |
| :--- | :--- |
| **React 18** | Main application framework utilizing component-based structures, hooks, and local state management. |
| **Vite** | Modern, fast bundler and dev server. |
| **Tailwind CSS** | Utility-first styling including layouts, CSS grids, borders, transitions, and component layouts. |
| **Framer Motion** | Physics-based spring animations, custom cursor tracking, page transitions, and card flipping. |
| **GSAP & ScrollTrigger** | High-performance scroll-driven timelines, progressive line drawing, and stagger animation reveals. |
| **Lenis** | Lightweight smooth scrolling engine providing consistent inertia across browsers. |
| **React CountUp** | Animated numbers that count up incrementally upon scrolling into view. |
| **React Icons** | Icon registry pulling from Feather (`Fi`), FontAwesome (`Fa`), SimpleIcons (`Si`), and VSCode (`Vsc`). |

---

## 📁 Repository Directory Structure

```bash
Academic_Portfolio/
├── public/                     # Static assets accessible directly (e.g. /resume.pdf)
│   ├── developer_portrait.png  # Hero avatar portrait image (Grayscale by default, full color on hover)
│   ├── hal_aerothon_26.jpg     # Verification image for HAL Aerothon 26 award
│   └── resume.pdf              # PDF Resume linkable from the Hero section
│
├── src/
│   ├── App.jsx                 # Application root (initializes Lenis, custom cursor, overlays)
│   ├── index.css               # Global Tailwind CSS directives, typography, and scrollbars
│   ├── main.jsx                # DOM mounting entrypoint
│   |
│   ├── components/             # Reusable UI Blocks
│   │   ├── About.jsx           # Tab-switch section showcasing experience, education, skills, and bio
│   │   ├── Achievements.jsx    # Component containing credentials
│   │   ├── Certificates.jsx    # Certificate carousel with slide motions and dynamic badge templates
│   │   ├── CodingProfiles.jsx  # Dynamic API display for HackerRank, LinkedIn, LeetCode, GitHub [Ready to Mount]
│   │   ├── Contact.jsx         # Custom input fields, simulated submission triggers, and social cards
│   │   ├── CustomCursor.jsx    # Framer Motion cursor wrapper reacting to hover targets
│   │   ├── Footer.jsx          # Terminal-aligned copyright and stack information
│   │   ├── GithubDashboard.jsx # API contribution heatmap and repositories analytics [Ready to Mount]
│   │   ├── Hero.jsx            # Main splash page with rotating dashed rings and reactive counters
│   │   ├── LearningJourney.jsx # Progress tracker detailing ongoing developer training paths [Ready to Mount]
│   │   ├── LeetcodeDashboard.jsx# Real-time LeetCode solves and status progress trackers [Ready to Mount]
│   │   ├── Navbar.jsx          # IntersectionObserver menu with layout-aware sliding nav pills
│   │   ├── Skills.jsx          # Twin-marquee infinite loop skill cards with click flipping [Ready to Mount]
│   │   ├── Stats.jsx           # Highlight counters
│   │   ├── TerminalHero.jsx    # CLI Command Typist simulation shell [Ready to Mount]
│   │   ├── Testimonials.jsx    # Recommendation placeholders [Ready to Mount]
│   │   └── Timeline.jsx        # UNIX-like spreadsheet row list of work accomplishments
│   │
│   ├── hooks/                  # Custom React Hooks
│   │   ├── useScrollAnimation.js# Progressive GSAP path draw line and stagger reveal hooks
│   │   ├── useSmoothScroll.js  # Initializes smooth Lenis scroll, respecting prefers-reduced-motion
│   │   └── useTilt.js          # Physical spring tracking card-tilt animations
│   │
│   └── utils/                  # Utility Functions and Core Settings
│       ├── audio.js            # Web Audio API click synthesizer engine
│       └── constants.js        # SINGLE SOURCE OF TRUTH for all copy, metrics, and profiles
│
├── tailwind.config.js          # Tailwind styling config (custom colors, marquee keyframes)
├── vite.config.js              # Vite bundler parameters (React plugin)
├── package.json                # Project dependencies and workspace scripts
└── README.md                   # Repository documentation (this file)
```

---

## ⚙️ Configuration & Customization Guide

To personalize the portfolio, you only need to modify one central configuration file and two assets:

### 1. Edit the Single Source of Truth: `src/utils/constants.js`
Open [constants.js](file:///c:/Academic/Academic_Portfolio/src/utils/constants.js) and update the following objects:
* **`PROFILE`**: Update your name, roles, biography text, GitHub URL, LinkedIn profile, email address, and LeetCode handle.
* **`SKILLS_CATEGORIES`**: Edit the technology list items. They are automatically categorized into Frontend, Styles, Backend, and DevOps.
* **`WORK_EXPERIENCE` / `EDUCATION`**: Enter your professional positions, academic timeline durations, degrees, and institutions.
* **`STATS`**: Edit counts such as solved problems, codebase commits, hackathons attended, and technologies learned.
* **`CERTIFICATES`**: Populate your earned achievements. If you do not provide an image path (or leave it as default placeholders), the secure badge generator (`CertificateVisual`) will render an interactive mockup automatically!

### 2. Replace Static Files in `/public`
* Drop your profile photo at `public/developer_portrait.png` (transparent background works best).
* Put your resume PDF at `public/resume.pdf` (the Hero "DOWNLOAD CV" button binds directly to this file path).

### 3. Connect the Contact Form
By default, the contact form simulation in `Contact.jsx` displays a fake sending loading state for `1.2 seconds` before turning green. To connect a live backend:
1. Register on [Formspree](https://formspree.io) or [EmailJS](https://www.emailjs.com) (free tiers available).
2. Open `src/components/Contact.jsx` and modify the `handleSubmit` function:
   ```javascript
   function handleSubmit(e) {
     e.preventDefault()
     setStatus('sending')
     
     // Example fetch call to Formspree API
     fetch('https://formspree.io/f/your_form_id', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify(form)
     })
     .then(() => {
       setStatus('sent')
       playTick()
     })
     .catch(() => setStatus('idle'))
   }
   ```

---

## 💻 Local Development Setup

To run this repository locally, execute the following commands in your shell:

### Installation
Install project dependencies defined in `package.json`:
```bash
npm install
```

### Run Dev Server
Start the local Vite development server:
```bash
npm run dev
```
Navigate to `http://localhost:5173` to see the live application.

### Build for Production
To bundle the project assets into highly optimized HTML, CSS, and JS files (output will be in the `/dist` directory):
```bash
npm run build
```

### Preview Production Build
Locally preview the optimized bundle to ensure accuracy before launching to hosts like Vercel, Netlify, or GitHub Pages:
```bash
npm run preview
```

---

## 📝 Performance Notes
* **Smooth Easing:** Lenis scrolling acts natively on the main window thread, delivering high frame rate scroll velocities.
* **Motion Accessibility:** The smooth scrolling hook automatically detects standard OS accessibility parameters. If a visitor has **`prefers-reduced-motion`** set to true, Lenis smooth scrolling is completely disabled to avoid motion discomfort.
* **Client-side Fetching:** Dynamic API components are isolated and feature local loading states to prevent render-blocking on the initial application load.
