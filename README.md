<div align="right">

**Language**: [🇺🇸 English](README.md) | [🇹🇼 繁體中文](README.zh-TW.md)

</div>

<div align="center">

# 🏛️ L'ÉCLAT DE PIERRE | Edible Architecture

[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Live Demo](https://img.shields.io/badge/demo-online-green.svg)](https://eugenewu1019.github.io/leclat-de-pierre/)
[![CI/CD](https://github.com/eugenewu1019/leclat-de-pierre/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/eugenewu1019/leclat-de-pierre/actions)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

**Structural Integrity in Flavor. Aesthetics of Concrete.**

[Live Demo](https://eugenewu1019.github.io/leclat-de-pierre/) · [Report Bug](https://github.com/eugenewu1019/leclat-de-pierre/issues) · [Request Feature](https://github.com/eugenewu1019/leclat-de-pierre/issues) · [Discussions](https://github.com/eugenewu1019/leclat-de-pierre/discussions)

![Project Banner](src/assets/images/hero-bg.png)

</div>

---

## 📚 Table of Contents

- [About The Project](#-about-the-project)
- [Key Features](#-key-features)
- [Tech Stack](#️-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)
- [Acknowledgments](#-acknowledgments)

---

## 🎯 About The Project

**L'ÉCLAT DE PIERRE** (Stone's Brilliance) is a high-end digital gallery for a conceptual patisserie where architecture meets pastry. Inspired by **Brutalism** and **Deconstructivism**, this project redefines the dessert experience through grey-scale aesthetics and structural precision.

Created by an architect-turned-pastry-chef, every piece in this collection is treated as a miniature building, where ingredients are construction materials and the plate is the site.

### Why This Project?

- 🎨 **Design Philosophy**: Merge architectural principles with culinary art
- 🏗️ **Brutalist Aesthetic**: Celebrate raw concrete textures and monochromatic palettes
- 🔍 **Interactive Experience**: Blueprint mode transforms desserts into technical CAD drawings
- 🌍 **Bilingual UX**: Seamless language switching for global audiences
- ⚡ **Performance**: Smooth custom snap-scroll with optimized animations

---

## ✨ Key Features

### 🏗️ Architectural "Blueprint" Mode
- Interactive scanning effect transforms dessert photos into technical CAD-style blueprints
- Detailed structural analysis: layer thickness, construction steps, and flavor mechanics
- Authentic technical drawing aesthetics with measurement annotations

### 🖼️ Snap-Scroll Exhibition
- Custom smooth-snap scrolling for deliberate, page-by-page discovery
- Atmospheric blur and depth-of-field transitions
- Gallery-grade presentation with editorial typography

### 🎨 Brutalist Aesthetic
- Monochromatic palette featuring concrete textures and glassmorphism
- High-end interaction design with magnetic effects
- Noise-textured backgrounds for authentic material feel

### 🌍 Bilingual Support
- Complete i18n implementation (English / Traditional Chinese)
- Instant language switching with localStorage persistence
- SEO-optimized metadata for both languages

---

## 🛠️ Tech Stack

### Core
- [React 19](https://react.dev/) - Modern UI library
- [Vite](https://vitejs.dev/) - Lightning-fast build tool
- [TypeScript](https://www.typescriptlang.org/) - Type safety and better DX

### Styling & UI
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- Custom CSS - Advanced blending modes and concrete textures
- [Lucide React](https://lucide.dev/) - Beautiful icon set

### Development Tools
- [GitHub Actions](https://github.com/features/actions) - CI/CD automation
- TypeScript strict mode - Enhanced type checking
- Custom Intersection Observer - Performant scroll detection

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.0 or later
- **npm** or **yarn** or **pnpm**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/eugenewu1019/leclat-de-pierre.git
   cd leclat-de-pierre
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open in browser**
   
   Navigate to [http://localhost:5173](http://localhost:5173)

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

---

## 📂 Project Structure

```text
leclat-de-pierre/
├── src/
│   ├── assets/              # Images and static resources
│   ├── components/          # React components
│   │   ├── Modal.tsx        # Blueprint modal
│   │   └── Navbar.tsx       # Navigation bar
│   └── App.tsx              # Main application
├── constants.ts          # Structural data and descriptions
├── types.ts               # TypeScript interfaces
├── index.html             # HTML entry point
├── vite.config.ts         # Vite configuration
├── tsconfig.json          # TypeScript configuration
├── tailwind.config.js     # Tailwind configuration
├── .github/
│   └── workflows/
│       ├── ci-cd.yml        # CI/CD pipeline
│       └── deploy.yml       # Deployment workflow
└── README.md              # This file
```

---

## 🚀 Deployment

### GitHub Pages (Current Setup)

The project is configured to automatically deploy to GitHub Pages on push to `main`.

1. **Enable GitHub Pages**
   - Settings → Pages → Source: GitHub Actions

2. **Push to main branch**
   ```bash
   git push origin main
   ```

3. **GitHub Actions will automatically**:
   - Run type checks
   - Build the project
   - Deploy to GitHub Pages

### Alternative Deployment Options

<details>
<summary><b>Vercel</b></summary>

1. Import repository to Vercel
2. Build settings (auto-detected):
   - Build Command: `npm run build`
   - Output Directory: `dist`
3. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/eugenewu1019/leclat-de-pierre)

</details>

<details>
<summary><b>Netlify</b></summary>

1. Connect repository
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Deploy!

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/eugenewu1019/leclat-de-pierre)

</details>

---

## 🤝 Contributing

Contributions are what make the open source community amazing! Any contributions you make are **greatly appreciated**.

Please read our [Contributing Guidelines](CONTRIBUTING.md) for details on:

- Code of Conduct
- Development process
- How to submit pull requests
- Coding standards
- Commit message conventions

### Quick Start for Contributors

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'feat: add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 🐛 Bug Reports & Feature Requests

Found a bug or have a feature idea?

- **Bug Reports**: [Create an issue](https://github.com/eugenewu1019/leclat-de-pierre/issues/new?template=bug_report.md)
- **Feature Requests**: [Create an issue](https://github.com/eugenewu1019/leclat-de-pierre/issues/new?template=feature_request.md)
- **Questions**: [Start a discussion](https://github.com/eugenewu1019/leclat-de-pierre/discussions)

---

## 📝 License

Distributed under the MIT License. See [`LICENSE`](LICENSE) for more information.

---

## 📬 Contact

**Eugene Wu (Pierre Lin)** - UI/UX Designer & Frontend Developer

- LinkedIn: [@owenwuwork](https://www.linkedin.com/in/owenwuwork)
- GitHub: [@eugenewu1019](https://github.com/eugenewu1019)
- Portfolio: [Coming Soon]

**Project Link**: [https://github.com/eugenewu1019/leclat-de-pierre](https://github.com/eugenewu1019/leclat-de-pierre)

**Live Demo**: [https://eugenewu1019.github.io/leclat-de-pierre/](https://eugenewu1019.github.io/leclat-de-pierre/)

---

## 🙏 Acknowledgments

Special thanks to:

- [React](https://react.dev/) - UI library
- [Vite](https://vitejs.dev/) - Build tool
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Lucide Icons](https://lucide.dev/) - Icon set
- [TypeScript](https://www.typescriptlang.org/) - Type safety

---

<div align="center">

**[⬆️ Back to top](#️-léclat-de-pierre--edible-architecture)**

Made with 🖖️ by [Eugene Wu](https://github.com/eugenewu1019)

© 2026 L'ÉCLAT DE PIERRE. All Rights Reserved.

</div>
