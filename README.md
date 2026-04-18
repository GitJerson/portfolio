## 🎮 Portfolio
My web portfolio features myself, my tech stack, and my overall skills. I am a xianxia reader myself, so after pondering, I followed a xianxia-inspired aethestic for my portfolio theme.

## 🛠️ Built With
- UI Framework: React
- Styling: Tailwind CSS & PURE CSS(for complex gradients, pseudo-elements, and cursor animations)

## ✨ Current Features
- Custom xianxia cursor: gold core cursor with aura ring, hover glow expansion, click burst animation, and trailing spark particles
- Hero selection screen: animated glowing programmer card with rune rings, rising hover effect, and misty radial backdrop
- Global theme styling: Tailwind CSS plus custom CSS variables, gradients, and text effects


## 🚀 Getting Started

# Install dependencies
npm install

# Run development server
npm run dev

## 📁 Project Structure
```bash
src/
├── main.jsx         # App entrypoint rendering Cursor and Landing
├── index.css        # Global styles, Tailwind import, fonts, and theme variables
├── cursor.jsx       # Cursor component markup and wrapper
├── cursor.js        # Custom cursor logic for mouse movement, hover, click, and trail
├── cursor.css       # Cursor visuals, glow effects, burst animation, and trail particles
├── landing.jsx      # Hero landing UI and selection card component
├── landing.css      # Hero screen styling, animated card, and glow gradients
├── particle.jsx     # Canvas wrapper for particle background animation
├── particles.js     # Particle system logic for canvas animation
└── assets/          # Static assets used by the site
```

## 🔮 Planned Features

- Hero section — name, title, and short intro with animated text
- About section — bio, skills, and tech stack with icons
- Projects section — project cards with preview images, descriptions, and links
- Contact section — contact form or social links
- Navbar — sticky navigation with smooth scroll
- Page transitions — smooth fade or slide animations between sections
- Scroll animations — elements animate in as you scroll (e.g. Framer Motion)
- Mobile responsiveness — full mobile and tablet support
- Dark/light mode toggle — optional theme switcher
- Resume download button — downloadable PDF resume

## 📄 License
This project is open source and available under the MIT License.
