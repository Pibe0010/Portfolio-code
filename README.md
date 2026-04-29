# 💼 Portfolio - Daniel Montero Castro

Personal portfolio website showcasing my work as a Web Developer, skills, projects, and certifications.

![Portfolio](https://img.shields.io/badge/status-active-green)
![React](https://img.shields.io/badge/React-18.2-blue)
![Vite](https://img.shields.io/badge/Vite-5.2-purple)
![Tests](https://img.shields.io/badge/Tests-29%20passed-green)

## 🚀 Demo

Live portfolio: **[danielmontero.netlify.app](https://danielmontero.netlify.app)**

## ✨ Features

- **Dark/Light Mode** - Toggle between dark and light themes (dark by default)
- **Responsive Design** - Fully responsive for mobile, tablet, and desktop
- **Modern UI** - Clean, centered design with smooth animations
- **Project Showcase** - 12 projects with live links and GitHub repositories
- **Skills Section** - 27 skills organized by category with proficiency levels
- **Certificates** - 8 certifications from various institutions
- **PDF Resume** - Downloadable CV generated with @react-pdf/renderer
- **Test Coverage** - 29 tests with Vitest + React Testing Library

## 🛠️ Tech Stack

| Category | Technology |
|----------|-------------|
| Framework | React 18.2 |
| Build Tool | Vite 5.2 |
| Routing | React Router DOM 6 |
| PDF Generation | @react-pdf/renderer |
| Animations | Animate.css |
| Testing | Vitest + React Testing Library |
| Code Formatting | Prettier |
| Linting | ESLint |

## 📂 Project Structure

```
portfolio-code/
├── public/
│   ├── Proyects/         # Project screenshots
│   ├── Serticated/       # Certificate images
│   └── Skills/           # Skill icons
├── src/
│   ├── assets/           # Static assets
│   ├── components/        # Reusable components
│   │   └── ui/           # UI components
│   ├── context/          # React context (Theme)
│   ├── data/             # JSON data files
│   ├── layout/           # Layout components
│   ├── pages/            # Page components
│   ├── styles/           # CSS files
│   └── __tests__/        # Test files
├── package.json
├── vite.config.js
└── README.md
```

## 🚦 Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
# Clone the repository
git clone https://github.com/Pibe0010/Portfolio-code.git

# Navigate to project
cd Portfolio-code

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev

# Run tests
npm test

# Run tests with coverage
npm run test:coverage

# Run tests with UI
npm run test:ui
```

### Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 📄 Data Management

All portfolio data is stored in JSON files for easy updates:

- `src/data/projects.json` - Projects list
- `src/data/skills.json` - Skills with levels
- `src/data/certificates.json` - Certificates
- `src/data/experience.json` - Profile and studies

## 🧪 Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with coverage report
npm run test:coverage
```

## 🎨 Design System

The project uses a centralized CSS design system:

- **Variables** - `src/styles/variables.css` (colors, fonts, spacing)
- **Theme** - `src/styles/theme.css` (dark/light mode)
- **Global** - `src/styles/global.css` (reset and base styles)
- **Animations** - `src/styles/animations.css`

## 📱 Responsive Breakpoints

| Breakpoint | Width |
|------------|-------|
| Mobile | < 480px |
| Large Mobile | < 768px |
| Tablet | < 1024px |
| Desktop | >= 1024px |

## 🤝 Contributing

Contributions are welcome! Feel free to open issues and pull requests.

## 📝 License

This project is for demonstration purposes.

## 👨‍💻 Author

**Daniel Montero Castro**
- GitHub: [@Pibe0010](https://github.com/Pibe0010)
- Email: dani@example.com

---

Built with ❤️ using React + Vite