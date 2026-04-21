# 🏯 Jerson Jr. M Vargas's Portfolio

> *"He who builds from joy shall never labor a single day."*

## 🎮 Portfolio
A xianxia-themed personal portfolio built with React and Vite. 
Inspired by Mobile Legends Bang Bang's hero selection screen, JRPG character UIs, and Eastern fantasy aesthetics; celestial sects, jade cultivation, and immortal ascension.

## 🛠️ Built With

| Layer | Technology |
|---|---|
| UI Framework | React 18 |
| Build Tool | Vite |
| Styling | Tailwind CSS + Raw CSS (animations, gradients, pseudo-elements) |
| Fonts | Cinzel Decorative, Cinzel, Crimson Text, Cormorant Garamond (Google Fonts) |
| Particles | Vanilla Canvas API |
| Cursor | Vanilla JS (RAF loop + lerp) |
| Deployment | Vercel |

---

## ✨ Features

### 🎴 Hero Selection Screen
- Full-screen cinematic card with animated conic-gradient border spin
- Glowing avatar sigil with rotating rune rings
- Five-star rarity display with blink animation
- Misty radial backdrop with particle canvas background
- `CLICKING THE CARD` triggers cinematic transition into the portfolio

### ⚔️ Hero Reveal Panel
- Two-panel layout: character display (left) + TECH STACK (right)
- Orbiting accent rings around avatar with animated gold dot
- Animated skill bars that sweep in on reveal (C#, .NET, MSSQL, React, Tailwind, Github)
- Quick-stat tiles for Path, Experience, Sect, and Projects
- **Download CV button** with shimmer sweep and bobbing download icon

### 🗡️ Custom Xianxia Cursor
- Gold celestial diamond glyph as the main cursor
- Aura ring with lerp lag (18%) for a trailing qi energy feel
- Outer dashed purple qi ring with slower lerp (7%) and continuous rotation
- Hover state: rings expand and glow gold on interactive elements
- Click burst ring animation radiates outward on mousedown
- Color-shifting trail sparks (gold, purple, jade) on mouse movement

### 🌌 Particle Background
- Canvas-based floating orbs in gold, purple, and jade
- Drifting lotus petal particles with sine-wave horizontal drift
- All particles loop and fade seamlessly

### 📜 Projects Section
- Project cards with decorative code preview zone and floating glyph
- Tech stack badges, description, and GitHub source link
- Shimmer sweep on hover + animated top-color bar reveal
- Project status tag (Completed / In Progress)

### 📡 Contact Section
- Three clickable contact cards: **Email**, **Phone**, **Facebook**
- Each card opens the appropriate app/link on click (`mailto:`, `tel:`, URL)
- Left-border reveal animation + horizontal slide on hover

### 🧭 Floating Social Dock
- Fixed right-side dock: **GitHub**, **LinkedIn**, **LeetCode**
- Clipped-corner diamond buttons with slide-in tooltip labels
- **Scroll-triggered** — slides in from the right after 120px scroll, hides at top
- Responsive: shifts to bottom-center horizontal bar on mobile
- 
---


---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

---

## 📁 Project Structure

```
portfolio/
├── public/                        # Static public assets
├── src/
│   ├── main.jsx                   # App entrypoint
│   ├── index.css                  # Global styles, Tailwind import, theme variables
│   ├── cursor.css                 # Cursor visuals (glow, burst, trail particles)
│   ├── header.css                 # Navbar styles
│   ├── landing.css                # Hero selection screen styles
│   ├── portfolio.css              # Portfolio sections styles
│   │
│   ├── assets/
│   │   ├── hero.png               # Hero background image
│   │   ├── portfolio-profile.png  # Profile photo
│   │   ├── Jerson_Vargas_Resume.pdf  # Downloadable CV
│   │   ├── react.svg
│   │   └── vite.svg
│   │
│   ├── components/
│   │   ├── landing.jsx            # Hero selection screen
│   │   ├── switchPage.jsx         # Cinematic transition between screens
│   │   ├── header.jsx             # Sticky navbar with smooth scroll
│   │   ├── HeroPanel.jsx          # Left/right reveal panel (avatar + skill bars)
│   │   ├── OriginSection.jsx      # Origin story / bio section
│   │   ├── ProjectsSection.jsx    # Project Section
│   │   ├── ContactSection.jsx     # Contact cards (email, phone, Facebook)
│   │   ├── SocialDock.jsx         # Floating scroll-triggered social dock
│   │   ├── GithubIcon.jsx         # GitHub SVG icon component
│   │   ├── cursor.jsx             # Cursor component markup
│   │   ├── particle.jsx           # Canvas particle background wrapper
│   │   └── portfolio.jsx          # Main portfolio page (composes all sections)
│   │
│   └── scripts/
│       ├── cursor.js              # Cursor logic (mouse movement, hover, click, trail)
│       └── particles.js           # Particle system (orbs and floating petals)
│
├── index.html
├── vite.config.js
├── eslint.config.js
├── package.json
└── .gitignore
```

---

## 🎨 Theme & Color Palette

| Token | Value | Usage |
|---|---|---|
| Void | `#05070f` | Base background |
| Navy | `#0a0d1a` | Section backgrounds |
| Gold | `#d4af37` | Primary accent, borders, glows |
| Gold Bright | `#f0c945` | Text highlights |
| Celestial Purple | `#6b21a8` | Secondary accent |
| Jade Green | `#2d6a4f` | Tertiary accent, skill bars |
| Moonlight | `#f0e6ff` | Body text |

---

## 📄 License

This project is open source and available under the MIT License.
