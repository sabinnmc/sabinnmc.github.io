# Sabin Bhandari – Professional Portfolio

A modern, high-performance portfolio website built with cutting-edge web technologies. This project showcases professional work, skills, and experience through a clean, responsive interface optimized for speed and user experience.

## Features

- **High Performance:** Built with Vite and Tailwind CSS 4 for optimal load times and runtime performance
- **Centralized Content Management:** Structured data architecture enables easy updates to projects, skills, and professional experience
- **Modern Architecture:** Component-based design with global state management for language and theme preferences
- **Production-Ready:** Optimized build configuration for deployment

## Getting Started

### Prerequisites

Ensure you have **[Bun](https://bun.sh/)** or **[Node.js](https://nodejs.org/)** installed on your system.

### Installation

Install project dependencies using your preferred package manager:

```bash
# Using Bun (recommended)
bun install

# Or using npm
npm install
```

### Development

Run the development server with hot module replacement:

```bash
# Using Bun
bun run dev

# Or using npm
npm run dev
```

### Production Build

Generate an optimized production build:

```bash
bun run build
```

## Project Structure

```
src/
├── components/     # Reusable UI components organized by section
├── data/          # Centralized portfolio data (edit portfolioData.ts)
├── contexts/      # Global state management (Language, Theme)
└── assets/        # Static resources (images, documents, etc.)
```

## Deployment

### GitHub Pages Deployment

Follow these steps to deploy your portfolio to GitHub Pages:

1. **Generate Personal Access Token**
   - Navigate to GitHub Settings → Developer settings → Personal access tokens
   - Generate a new token with appropriate repository permissions

2. **Configure Repository Secret**
   - Go to your repository Settings → Secrets and variables → Actions
   - Create a new repository secret:
     - Name: `GH_PAT`
     - Value: Your generated personal access token

3. **Verify Workflow Configuration**
   - Ensure `.github/workflows/deploy.yml` is properly configured
   - Review the workflow file for any environment-specific adjustments

4. **Deploy**
   - Navigate to the Actions tab in your repository
   - Manually trigger the deployment workflow or push to the main branch

## Development

To modify portfolio content, edit the centralized data file located at `src/data/portfolioData.ts`. The component-based architecture ensures changes propagate automatically throughout the application.

## License

This project is available for personal and commercial use.

---

**Developed by Sabin Bhandari**
