# 🚀 Jerson Jr. M Vargas's Portfolio

> *"Building efficient and scalable applications, one line of code at a time."*

## 💻 Portfolio
A modern, responsive personal portfolio showcasing backend development expertise. Built with React and Vite, featuring a clean dark theme with cyan accents.

## 🛠️ Built With

| Layer | Technology |
|---|---|
| UI Framework | React 19 |
| Build Tool | Vite |
| Styling | Tailwind CSS v4 + Custom CSS |
| Fonts | Inter (Google Fonts) |
| Deployment | Vercel |

---

## ✨ Features

### 🏠 Hero Section
- Professional profile display with circular avatar
- Key statistics: Experience level, Focus area, Project count
- Direct resume download functionality
- Responsive grid layout

### 📊 Skills Section
- Interactive skill bars with percentage indicators
- Backend-focused technologies: C#, .NET, MSSQL, PostgreSQL
- Frontend skills: React, Tailwind CSS
- Development tools: GitHub, Postman

### 👨‍💻 About Section
- Personal introduction and background
- Architecture preferences (feature-based frontend, Repository-Service backend)
- Current learning focus (Go programming)
- Recent achievements and deployments

### 🚀 Projects Section
- **PJR Portal**: Student attendance management system (ASP.NET Web API + React)
- **Massage Monitoring System**: Service management with ASP.NET MVC
- **TaskFlow API**: Task management REST API (.NET 9 + PostgreSQL)
- Technology badges and GitHub links
- Project status indicators

### 📞 Contact Section
- Direct email and social media links
- Professional contact information
- Easy access to GitHub profile

---

## 🎨 Design Theme

| Element | Color | Usage |
|---|---|---|
| Background | `#0a0a0a` | Main background |
| Text | `#e9ecef` | Primary text |
| Accent | `#00d4ff` | Borders, highlights |
| Secondary | `#1a1a1a` | Card backgrounds |

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
├── public/                        # Static assets
├── src/
│   ├── main.jsx                   # App entrypoint
│   ├── index.css                  # Global styles & Tailwind imports
│   ├── portfolio.css              # Component styles
│   ├── assets/
│   │   ├── portfolio-profile.png  # Profile image
│   │   └── 001_JersonVargas_JuniorSoftwareDeveloper_Resume.pdf
│   │
│   └── components/
│       ├── portfolio.jsx          # Main portfolio component
│       ├── switchPage.jsx         # Page wrapper
│       ├── HeroPanel.jsx          # Hero section with profile
│       ├── SkillsSection.jsx      # Skills with progress bars
│       ├── OriginSection.jsx      # About/bio section
│       ├── ProjectsSection.jsx    # Projects showcase
│       ├── ContactSection.jsx     # Contact information
│       └── GithubIcon.jsx         # GitHub icon component
│
├── index.html
├── vite.config.js
├── eslint.config.js
├── package.json
└── README.md
```

---

## 📄 License

This project is open source and available under the MIT License.
