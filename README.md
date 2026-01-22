# Sabin Bhandari – Professional Portfolio

[![Website](https://img.shields.io/badge/website-sabinnmc.github.io-blue)](https://sabinnmc.github.io/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Welcome to the source code of my professional portfolio! I'm **Sabin Bhandari**, an Embedded Systems Developer based in Japan, specializing in IoT, microcontrollers, and hardware-software integration.

## 🌐 Quick Links
- **Website:** [https://sabinnmc.github.io/](https://sabinnmc.github.io/)
- **LinkedIn:** [linkedin.com/in/sabin-bhandari-nmc](https://linkedin.com/in/sabin-bhandari-nmc)
- **GitHub:** [github.com/sabinnmc](https://github.com/sabinnmc)
- **Email:** [sabinnmc@gmail.com](mailto:sabinnmc@gmail.com)


## ✨ Key Features
- **🌍 Bilingual Support:** Seamlessly toggle between English and Japanese.
- **📱 Responsive Design:** Fully optimized for mobile, tablet, and desktop viewing.
- **🚀 Ultra Fast:** Built with Vite and Tailwind CSS 4 for peak performance.
- **🏗️ Structured Content:** Centralized data management for easy updates to projects, skills, and experience.


## 🚀 Getting Started

### Prerequisites

Make sure you have **[Bun](https://bun.sh/)** or **[Node.js](https://nodejs.org/)** installed on your system.

### 1. Install Dependencies

```bash
# Using Bun (recommended)
bun install

# Or using npm
npm install
```

### 2. Run in Development Mode

```bash
# Using Bun
bun run dev

# Or using npm
npm run dev
```

### Build for Production

```bash
# Create a production build
bun run build
```


## 📂 Project Structure
- `src/components/` - UI components divided by sections.
- `src/data/` - Centralized portfolio data (edit `portfolioData.ts` to update content).
- `src/contexts/` - Global states (Language, Theme).
- `src/assets/` - Images, CVs, and other static assets.


## 🚢 Deployment to GitHub Pages

1. Generate a **Personal Access Token (PAT)** from your GitHub account settings.
2. In your project repository, go to **Settings** → **Secrets and variables** → **Actions**, and add a new secret:
   - Name it `GH_PAT`
   - Paste your token as the value.
3. Keep the `.github/workflows/deploy.yml` updated.
4. Go to the **Actions** tab and re-run the workflow to deploy the site.

**Happy Hacking! 🚀**
